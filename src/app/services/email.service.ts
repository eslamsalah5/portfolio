import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import {
  emailConfig,
  EmailJSResponse,
  ContactFormData,
  EmailStatus,
} from '../config/email-config';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly config = emailConfig;

  constructor() {
    // Initialize EmailJS with public key
    this.initializeEmailJS();
  }

  /**
   * Initialize EmailJS with the public key
   */
  private initializeEmailJS(): void {
    if (this.config.publicKey) {
      emailjs.init(this.config.publicKey);
    } else {
      console.warn('EmailJS public key not configured');
    }
  }

  /**
   * Send contact form email
   */
  async sendContactEmail(formData: ContactFormData): Promise<EmailStatus> {
    try {
      // Validate required configuration
      if (!this.isConfigValid()) {
        throw new Error('EmailJS configuration is incomplete');
      }

      // Prepare template parameters
      const templateParams = this.prepareTemplateParams(formData);

      // Send email using EmailJS
      const response: EmailJSResponse = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      );

      // Check if email was sent successfully
      if (response.status === 200) {
        return {
          isLoading: false,
          isSuccess: true,
          isError: false,
          message: this.config.messages.success.description,
        };
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);

      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: this.getErrorMessage(error),
      };
    }
  }

  /**
   * Prepare template parameters for EmailJS
   */
  private prepareTemplateParams(formData: ContactFormData): any {
    return {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: this.getProjectTypeLabel(formData.subject),
      message: formData.message,
      to_name: 'Portfolio Owner',
      reply_to: formData.email,

      // Additional info
      sent_date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),

      // Contact summary
      contact_summary: this.createContactSummary(formData),
    };
  }

  /**
   * Create a formatted contact summary
   */
  private createContactSummary(formData: ContactFormData): string {
    return `
New contact form submission:

👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || 'Not provided'}
🏷️ Project Type: ${this.getProjectTypeLabel(formData.subject)}

💬 Message:
${formData.message}

---
Sent from Portfolio Contact Form
    `.trim();
  }

  /**
   * Get user-friendly project type label
   */
  private getProjectTypeLabel(value: string): string {
    const projectTypes: { [key: string]: string } = {
      'web-development': 'Web Development (.NET + Angular)',
      'mobile-development': 'Mobile Development (Flutter)',
      'fullstack-project': 'Full-Stack Project',
      'api-development': 'API Development',
      'database-design': 'Database Design',
      consultation: 'Technical Consultation',
      'freelance-opportunity': 'Freelance Opportunity',
      other: 'Other',
    };

    return projectTypes[value] || value;
  }

  /**
   * Check if EmailJS configuration is valid
   */
  private isConfigValid(): boolean {
    return !!(
      this.config.serviceId &&
      this.config.templateId &&
      this.config.publicKey &&
      this.config.serviceId !== 'service_xxxxxxxxx' &&
      this.config.templateId !== 'template_xxxxxxxxx' &&
      this.config.publicKey !== 'xxxxxxxxx'
    );
  }

  /**
   * Get user-friendly error message
   */
  private getErrorMessage(error: any): string {
    if (error?.message?.includes('configuration')) {
      return 'Email service not configured. Please contact directly via email.';
    }

    if (error?.status === 400) {
      return 'Invalid form data. Please check your inputs and try again.';
    }

    if (error?.status === 429) {
      return 'Too many requests. Please wait a moment and try again.';
    }

    if (!navigator.onLine) {
      return 'No internet connection. Please check your connection and try again.';
    }

    return this.config.messages.error.description;
  }

  /**
   * Get loading status
   */
  getLoadingStatus(): EmailStatus {
    return {
      isLoading: true,
      isSuccess: false,
      isError: false,
      message: this.config.messages.sending.description,
    };
  }

  /**
   * Validate email format
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate phone format (optional but if provided should be valid)
   */
  isValidPhone(phone: string): boolean {
    if (!phone || phone.trim() === '') return true; // Phone is optional

    // Basic phone validation - adjust regex based on your requirements
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.trim());
  }
}
