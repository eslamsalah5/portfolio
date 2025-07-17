import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  PortfolioDataService,
  PersonalInfo,
} from '../../data/portfolio-data.service';
import { EmailService } from '../../services/email.service';
import { ContactFormData, EmailStatus } from '../../config/email-config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;

  // Form submission status
  emailStatus: EmailStatus = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
  };

  // Form data
  formData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  // Show success/error messages
  showStatusMessage = false;

  constructor(
    private portfolioDataService: PortfolioDataService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
  }

  /**
   * Handle form submission
   */
  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) {
      this.markFormGroupTouched(form);
      return;
    }

    // Validate email and phone format
    if (!this.validateFormData()) {
      return;
    }

    try {
      // Set loading state
      this.emailStatus = this.emailService.getLoadingStatus();
      this.showStatusMessage = true;

      // Send email
      this.emailStatus = await this.emailService.sendContactEmail(
        this.formData
      );

      // If successful, reset form after a delay
      if (this.emailStatus.isSuccess) {
        setTimeout(() => {
          this.resetForm(form);
        }, 3000);
      }

      // Hide status message after 10 seconds
      setTimeout(() => {
        this.showStatusMessage = false;
      }, 10000);
    } catch (error) {
      console.error('Unexpected error during form submission:', error);
      this.emailStatus = {
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: 'An unexpected error occurred. Please try again.',
      };
    }
  }

  /**
   * Validate form data
   */
  private validateFormData(): boolean {
    // Validate email format
    if (!this.emailService.isValidEmail(this.formData.email)) {
      this.showError('Please enter a valid email address.');
      return false;
    }

    // Validate phone format (if provided)
    if (!this.emailService.isValidPhone(this.formData.phone || '')) {
      this.showError('Please enter a valid phone number or leave it empty.');
      return false;
    }

    return true;
  }

  /**
   * Show error message
   */
  private showError(message: string): void {
    this.emailStatus = {
      isLoading: false,
      isSuccess: false,
      isError: true,
      message,
    };
    this.showStatusMessage = true;

    setTimeout(() => {
      this.showStatusMessage = false;
    }, 5000);
  }

  /**
   * Reset form and clear status
   */
  resetForm(form: NgForm): void {
    form.resetForm();
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
    this.emailStatus = {
      isLoading: false,
      isSuccess: false,
      isError: false,
      message: '',
    };
    this.showStatusMessage = false;
  }

  /**
   * Mark all form fields as touched to show validation errors
   */
  private markFormGroupTouched(form: NgForm): void {
    Object.keys(form.controls).forEach((field) => {
      const control = form.controls[field];
      control.markAsTouched({ onlySelf: true });
    });
  }

  /**
   * Dismiss status message manually
   */
  dismissStatusMessage(): void {
    this.showStatusMessage = false;
  }

  /**
   * Get status message CSS classes
   */
  getStatusClasses(): string {
    const baseClasses = 'status-message';

    if (this.emailStatus.isLoading) {
      return `${baseClasses} loading`;
    } else if (this.emailStatus.isSuccess) {
      return `${baseClasses} success`;
    } else if (this.emailStatus.isError) {
      return `${baseClasses} error`;
    }

    return baseClasses;
  }

  /**
   * Get status icon
   */
  getStatusIcon(): string {
    if (this.emailStatus.isLoading) {
      return 'fas fa-spinner fa-spin';
    } else if (this.emailStatus.isSuccess) {
      return 'fas fa-check-circle';
    } else if (this.emailStatus.isError) {
      return 'fas fa-exclamation-circle';
    }

    return '';
  }
}
