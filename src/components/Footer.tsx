import { useEffect, useState } from 'react';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { FOOTER_QUOTE, LEGAL_LINKS, UNBOX_CONTACT } from '../data/unboxData';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 pb-12 border-b border-slate-800">
          {/* Column 1: Logo & Original Statement */}
          <div className="md:col-span-5 space-y-6">
            <a
              href="#home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 rounded-md"
              aria-label="Unbox Your Desire Back to Top"
            >
              <img
                src="/images/unbox-logo-white.png"
                alt="Unbox Your Desire White Logo"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
            </a>

            <blockquote className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-md">
              &ldquo;{FOOTER_QUOTE}&rdquo;
            </blockquote>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={UNBOX_CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unbox Ratnagiri on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-colors hover:bg-orange-600 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 9H16l-.5 3h-2v9h-3v-9H9V9h1.5V7.2c0-2.1 1.2-3.7 3.7-3.7H16v2.8h-1.3c-.9 0-1.2.5-1.2 1.2V9z" />
                </svg>
              </a>

              <a
                href={UNBOX_CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unbox Ratnagiri on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-colors hover:bg-orange-600 hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href={UNBOX_CONTACT.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unbox Ratnagiri on Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-colors hover:bg-orange-600 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 5.92a8.2 8.2 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.22 8.22 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.39 4.7a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.12 4.12 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.34a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0 0 22 5.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Legal Links & Registration Information */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h2 className="text-base font-bold text-white mb-4">Legal Links</h2>
              <ul className="space-y-2.5 text-sm">
                {LEGAL_LINKS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-orange-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
              <p className="font-semibold text-slate-300">Registration Information</p>
              <p className="tabular-nums">FSSAI Lic. No. : {UNBOX_CONTACT.fssaiLicense}</p>
              <p className="tabular-nums">GSTIN : {UNBOX_CONTACT.gstin}</p>
            </div>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-base font-bold text-white mb-4">Get In Touch</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-500 mt-1 shrink-0" aria-hidden="true" />
                <span>{UNBOX_CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${UNBOX_CONTACT.email}`}
                  className="inline-flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <Mail className="h-4 w-4 text-orange-500 shrink-0" aria-hidden="true" />
                  <span>{UNBOX_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={UNBOX_CONTACT.phoneHref}
                  className="inline-flex items-center gap-3 text-base font-bold text-white hover:text-orange-400 transition-colors tabular-nums"
                >
                  <Phone className="h-4 w-4 text-orange-500 shrink-0" aria-hidden="true" />
                  <span>{UNBOX_CONTACT.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p className="text-center sm:text-left">
            &copy; Unbox Your Desire. Developed with ❤️ by{' '}
            <a
              href={UNBOX_CONTACT.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-200 hover:text-orange-400 underline decoration-slate-600 underline-offset-4 transition-colors"
            >
              {UNBOX_CONTACT.developerName}
            </a>
          </p>
          <p className="text-slate-500">Ratnagiri, Maharashtra, India</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg transition-all duration-200 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </footer>
  );
}
