import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/unboxData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark/Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 rounded-md"
          aria-label="Unbox Your Desire Home"
        >
          <img
            src="/images/unbox-logo.png"
            alt="Unbox Your Desire Logo"
            referrerPolicy="no-referrer"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </a>

        {/* Zone 2: Primary Nav Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-150 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#download-app"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-2.5 min-h-[42px] text-sm font-bold text-white shadow-sm transition-all duration-150 hover:bg-orange-700 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 whitespace-nowrap shrink-0"
          >
            Download App
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 min-h-[44px] min-w-[44px] text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center rounded-xl px-3.5 py-3 min-h-[44px] text-base font-semibold text-slate-800 transition-colors hover:bg-orange-50 hover:text-orange-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-slate-100">
            <a
              href="#download-app"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center rounded-xl bg-orange-600 px-5 py-3 min-h-[46px] text-base font-bold text-white shadow-sm hover:bg-orange-700"
            >
              Download App
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
