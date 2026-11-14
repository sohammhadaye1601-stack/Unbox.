import { MapPin, ShieldCheck, Clock } from 'lucide-react';
import heroFoodImg from '../assets/images/hero_konkan_feast_1794654331961.jpg';
import { SmartphoneFrame } from './SmartphoneFrame';
import { StoreButtons } from './StoreButtons';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F3] via-white to-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Subtle warm radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-orange-200/35 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Brand Identity, Headline, Supporting Copy & Store CTAs */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold tracking-wide text-slate-600">
              <span className="text-orange-600">Ratnagiri, Maharashtra</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Food &amp; Online Delivery</span>
            </div>

            <div className="inline-flex items-center rounded-2xl bg-white/90 px-4 py-2.5 border border-orange-100 shadow-xs">
              <img
                src="/images/unbox-logo.png"
                alt="Unbox Your Desire Official Logo"
                referrerPolicy="no-referrer"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>

            <h1 className="text-[clamp(2.25rem,4vw,3.6rem)] font-extrabold leading-[1.1] tracking-tight text-slate-900 [text-wrap:balance]">
              Unbox Your Desires with <span className="text-orange-600">Unbox!</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
              Your favourite food and desired items, delivered right to your doorstep.
              Experience convenient online ordering with Unbox.
            </p>

            <div className="pt-1">
              <StoreButtons />
            </div>

            {/* Grounded factual highlights */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-slate-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-bold text-slate-900">Built in Ratnagiri</dt>
                  <dd className="text-xs text-slate-500">By Ratnagiri-kars for local vendors</dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 text-emerald-700 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-bold text-slate-900">Secured Delivery</dt>
                  <dd className="text-xs text-slate-500">High security delivery box partner</dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-bold text-slate-900">24/7 Support</dt>
                  <dd className="text-xs text-slate-500">Call or WhatsApp 8767461499</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Right Column: Editorial Food Photography + Official Unbox App Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none sm:pr-16">
              {/* High-resolution Food Photography Backdrop */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-orange-50 shadow-lg aspect-[4/3]">
                <img
                  src={heroFoodImg}
                  alt="Fresh Indian and coastal Maharashtrian meal spread ready for delivery in Ratnagiri"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-left"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-transparent"
                />
              </div>

              {/* Smartphone Mockup displaying Genuine Official Unbox App Screenshot */}
              <div className="mt-6 sm:mt-0 sm:absolute sm:-bottom-8 sm:right-0 w-[205px] sm:w-[205px] md:w-[215px] mx-auto">
                <SmartphoneFrame
                  imageSrc="/images/app-screen-1.jpg"
                  imageAlt="UnboxRTN official mobile app listing nearby Ratnagiri restaurants"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
