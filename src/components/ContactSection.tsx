import { useState, type FormEvent } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { BUSINESS_HOURS, UNBOX_CONTACT } from '../data/unboxData';
import {
  buildMailtoHref,
  buildWhatsAppUrl,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../utils/contactValidation';

const INITIAL_VALUES: ContactFormValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedValues, setSubmittedValues] = useState<ContactFormValues | null>(null);

  const handleChange = (field: keyof ContactFormValues, nextValue: string) => {
    setValues((prev) => ({ ...prev, [field]: nextValue }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(values);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedValues({
        ...values,
        phone: validation.normalizedPhone,
      });
      setValues(INITIAL_VALUES);
    }, 350);
  };

  const handleReset = () => {
    setSubmittedValues(null);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#FFFBF7] border-t border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Ratnagiri Office &amp; Support
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Have a question, merchant partnership request, or feedback? Reach our Ratnagiri
            team directly by phone, WhatsApp, email, or the message form below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Official Address, Hours, Direct Links & Embedded Google Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-5 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Address</h3>
                  <p className="mt-0.5 text-sm sm:text-base text-slate-600">
                    {UNBOX_CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Email</h3>
                  <a
                    href={`mailto:${UNBOX_CONTACT.email}`}
                    className="mt-0.5 inline-block text-sm sm:text-base font-semibold text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    {UNBOX_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Phone</h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-3">
                    <a
                      href={UNBOX_CONTACT.phoneHref}
                      className="text-base font-bold text-slate-900 hover:text-orange-600 transition-colors tabular-nums"
                    >
                      {UNBOX_CONTACT.phoneDisplay}
                    </a>
                    <a
                      href={UNBOX_CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3.5 py-2 min-h-[40px] text-xs font-bold text-white hover:bg-emerald-800 transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>WhatsApp Support</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="w-full">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">Business Hours</h3>
                  <dl className="space-y-1.5 text-sm">
                    {BUSINESS_HOURS.map((item) => (
                      <div
                        key={item.days}
                        className="flex flex-wrap items-baseline justify-between gap-2"
                      >
                        <dt className="text-slate-600 font-medium">{item.days}:</dt>
                        <dd className="font-semibold text-slate-900 tabular-nums">
                          {item.hours}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps for Agashe Empire, Nachane, Ratnagiri */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs">
              <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-700 truncate">
                  Agashe Empire, Nachane, Ratnagiri, 415612
                </span>
                <a
                  href={UNBOX_CONTACT.mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 whitespace-nowrap shrink-0"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="aspect-[16/10] w-full bg-slate-100">
                <iframe
                  title="Unbox Your Desire Location - Agashe Empire, Nachane, Ratnagiri"
                  src={UNBOX_CONTACT.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              {submittedValues ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col justify-between py-4 space-y-6"
                >
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        Message Received
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Thank you,{' '}
                        <span className="font-bold text-slate-900">
                          {submittedValues.fullName}
                        </span>
                        . Your inquiry has been prepared and logged for our Ratnagiri
                        support team. For immediate assistance, you can send it straight
                        to our WhatsApp or email desk below.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm space-y-1.5">
                    <p>
                      <span className="font-semibold text-slate-700">Email:</span>{' '}
                      <span className="text-slate-900">{submittedValues.email}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Phone:</span>{' '}
                      <span className="text-slate-900 tabular-nums">
                        {submittedValues.phone}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Message:</span>{' '}
                      <span className="text-slate-800">{submittedValues.message}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={buildWhatsAppUrl(UNBOX_CONTACT.whatsappNumber, submittedValues)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 min-h-[46px] text-sm font-bold text-white hover:bg-emerald-800 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={buildMailtoHref(UNBOX_CONTACT.email, submittedValues)}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 min-h-[46px] text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center rounded-xl px-4 py-3 min-h-[46px] text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      All fields are required so our team can reach back promptly.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-full-name"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'error-full-name' : undefined}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-orange-500 focus:ring-orange-100'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="error-full-name" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-orange-500 focus:ring-orange-100'
                        }`}
                      />
                      {errors.email && (
                        <p id="error-email" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="e.g. 8767461499"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 tabular-nums ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-orange-500 focus:ring-orange-100'
                        }`}
                      />
                      {errors.phone && (
                        <p id="error-phone" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="How can we help you today?"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 resize-y ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-orange-500 focus:ring-orange-100'
                      }`}
                    />
                    {errors.message && (
                      <p id="error-message" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3.5 min-h-[48px] text-base font-bold text-white shadow-sm transition-all duration-150 hover:bg-orange-700 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
