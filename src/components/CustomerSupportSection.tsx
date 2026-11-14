import { PhoneCall, MessageCircle } from 'lucide-react';
import supportIllustration from '../assets/images/support_care_illustration_1794654331581.jpg';
import { UNBOX_CONTACT } from '../data/unboxData';

export function CustomerSupportSection() {
  return (
    <section
      id="support"
      className="py-16 sm:py-24 bg-[#FFFBF7]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Illustration */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
              <img
                src={supportIllustration}
                alt="UnboxRTN 24/7 customer support specialist ready to help via phone call and WhatsApp"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/3] object-contain mx-auto"
              />
            </div>
          </div>

          {/* Copy & Actions */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-600">
              24/7 Availability
            </h2>

            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
              The Best in-class customer support
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              We care about our customers and provide the best support throughout the
              process. We are always available on a phone call or WhatsApp at{' '}
              <a
                href={UNBOX_CONTACT.phoneHref}
                className="font-bold text-orange-600 hover:text-orange-700 underline decoration-orange-300 underline-offset-4 transition-colors tabular-nums"
              >
                {UNBOX_CONTACT.phoneDisplay}
              </a>
              .
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={UNBOX_CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-orange-600 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-bold text-white shadow-sm transition-all duration-150 hover:bg-orange-700 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 whitespace-nowrap shrink-0"
              >
                <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Call Us Now</span>
              </a>

              <a
                href={UNBOX_CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-700 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-bold text-white shadow-sm transition-all duration-150 hover:bg-emerald-800 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
