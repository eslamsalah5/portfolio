# Contact Form Setup - EmailJS Configuration

## 📧 EmailJS Setup Instructions

To enable the contact form to send real emails, you need to configure EmailJS. Follow these steps:

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Project Type: {{subject}}

Message:
{{message}}

---
Contact Summary:
{{contact_summary}}

Sent on: {{sent_date}}
Reply to: {{reply_to}}
```

4. Copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abcdef123`)

### 5. Update Configuration

Edit the file: `src/app/config/email-config.ts`

```typescript
export const emailConfig = {
  serviceId: "your_service_id_here", // Replace with your Service ID
  templateId: "your_template_id_here", // Replace with your Template ID
  publicKey: "your_public_key_here", // Replace with your Public Key
  // ... rest of the config
};
```

### 6. Template Variables

Make sure your EmailJS template includes these variables:

- `{{from_name}}` - Full name of the sender
- `{{from_email}}` - Email address of the sender
- `{{phone}}` - Phone number (optional)
- `{{subject}}` - Project type selected
- `{{message}}` - Message content
- `{{sent_date}}` - Formatted date and time
- `{{contact_summary}}` - Formatted summary of all contact info
- `{{reply_to}}` - Email for replies

### 7. Test the Form

1. Save all changes
2. Run your Angular application
3. Fill out the contact form with test data
4. Submit the form
5. Check your email inbox for the test message

## 🎨 Form Features

### ✅ What's Included:

- **Real email sending** via EmailJS
- **Loading states** with spinner animations
- **Success/Error messages** with auto-dismiss
- **Form validation** with visual feedback
- **Disabled states** during submission
- **Responsive design** for all devices
- **Accessibility features** (keyboard navigation, screen readers)
- **Professional styling** matching your portfolio theme

### 🔧 Customization Options:

- Change email template design in EmailJS dashboard
- Modify success/error messages in `email-config.ts`
- Customize form validation rules in `contact.component.ts`
- Adjust styling in `contact.component.css`

## 🚨 Important Notes

### Security:

- ✅ No sensitive data is exposed (public key is safe to use in frontend)
- ✅ EmailJS handles authentication securely
- ✅ Form includes basic spam protection

### Rate Limiting:

- EmailJS free tier allows 200 emails/month
- Additional rate limiting is built into the service
- Consider upgrading for higher volume

### Error Handling:

- Graceful fallback for network issues
- User-friendly error messages
- Automatic retry suggestions

## 📱 Mobile Optimization

The form is fully responsive and includes:

- Touch-friendly input fields
- Optimized keyboard layouts for different input types
- Smooth animations (disabled for users who prefer reduced motion)
- Accessible tap targets

## 🎯 Analytics & Tracking

To track form submissions, you can add Google Analytics events:

```typescript
// In onSubmit method after successful email send
if (typeof gtag !== "undefined") {
  gtag("event", "form_submit", {
    event_category: "Contact",
    event_label: formData.subject,
    value: 1,
  });
}
```

## 🔧 Troubleshooting

### Common Issues:

1. **Form not sending emails:**

   - Check EmailJS configuration in `email-config.ts`
   - Verify service, template, and public key are correct
   - Check browser console for errors

2. **Template not working:**

   - Ensure all template variables are properly formatted
   - Test template in EmailJS dashboard first

3. **Styling issues:**

   - Check CSS variables are properly defined
   - Verify import statements in component

4. **TypeScript errors:**
   - Run `npm install` to ensure all dependencies are installed
   - Check import paths are correct

Need help? Check the browser console for detailed error messages!

## 🌟 Credits

This contact form uses:

- **EmailJS** for email delivery
- **Angular Reactive Forms** for form handling
- **CSS Grid & Flexbox** for responsive layout
- **Font Awesome** for icons
- **Custom CSS Variables** for theming
