export const emailConfig = {
  serviceId: 'service_a12f0pn', // Your EmailJS Service ID
  templateId: 'template_w2bkatp', // Your EmailJS Template ID
  publicKey: '6AqD8Lbn0QDRNA4sr', // Your EmailJS Public Key

  // Email template parameters mapping
  templateParams: {
    from_name: '{{firstName}} {{lastName}}',
    from_email: '{{email}}',
    phone: '{{phone}}',
    subject: '{{subject}}',
    message: '{{message}}',
    to_name: 'Portfolio Owner',
  },

  // Success/Error messages
  messages: {
    success: {
      title: 'Message Sent Successfully! 🎉',
      description:
        "Thank you for reaching out! I'll get back to you within 24 hours.",
    },
    error: {
      title: 'Oops! Something went wrong 😅',
      description: 'Please try again or contact me directly via email.',
    },
    sending: {
      title: 'Sending your message...',
      description: 'Please wait while we deliver your message.',
    },
  },
};

// EmailJS configuration interface
export interface EmailJSResponse {
  status: number;
  text: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface EmailStatus {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}
