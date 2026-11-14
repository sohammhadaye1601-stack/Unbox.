export interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export interface ValidationResult {
  isValid: boolean;
  errors: ContactFormErrors;
  normalizedPhone: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Strips spaces, hyphens, parentheses, and leading +91/91/0 prefixes
 * to validate standard 10-digit Indian mobile numbers (6-9 start) or 10-12 digit numbers.
 */
export function normalizeIndianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0')) {
    return digits.slice(1);
  }
  return digits;
}

export function validateContactForm(values: ContactFormValues): ValidationResult {
  const errors: ContactFormErrors = {};
  const trimmedName = values.fullName.trim();
  const trimmedEmail = values.email.trim();
  const normalizedPhone = normalizeIndianPhone(values.phone);
  const trimmedMessage = values.message.trim();

  if (!trimmedName) {
    errors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    errors.phone = 'Please enter a valid 10-digit Indian mobile number.';
  }

  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Please write at least 10 characters so our team can assist you.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    normalizedPhone,
  };
}

export function buildWhatsAppUrl(
  whatsappNumber: string,
  values?: ContactFormValues
): string {
  if (!values) {
    return `https://wa.me/${whatsappNumber}`;
  }
  const text = [
    `Hello UnboxRTN Support,`,
    `Name: ${values.fullName.trim()}`,
    `Phone: ${normalizeIndianPhone(values.phone) || values.phone.trim()}`,
    `Email: ${values.email.trim()}`,
    `Message: ${values.message.trim()}`,
  ].join('\n');
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoHref(
  supportEmail: string,
  values: ContactFormValues
): string {
  const subject = `Website Inquiry from ${values.fullName.trim()}`;
  const body = [
    `Full Name: ${values.fullName.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${normalizeIndianPhone(values.phone) || values.phone.trim()}`,
    ``,
    `Message:`,
    values.message.trim(),
  ].join('\n');
  return `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
