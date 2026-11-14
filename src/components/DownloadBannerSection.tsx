import { SmartphoneFrame } from './SmartphoneFrame';
import { StoreButtons } from './StoreButtons';

export function DownloadBannerSection() {
  return (
    <section
      id="download-app"
      className="py-16 sm:py-20 bg-white border-y border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 px-6 py-12 sm:px-12 sm:py-14 lg:px-16 shadow-xl">
          {/* Subtle decorative geometry */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-orange-950/10"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Copy & Buttons */}
            <div className="lg:col-span-7 text-white space-y-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-100">
                Available on Android &amp; iOS
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight [text-wrap:balance]">
                Download UnboxRTN on your Mobile Now
              </h2>

              <p className="text-base sm:text-lg text-orange-50 max-w-xl leading-relaxed">
                Improved user interface, Easy to use updated version is live now!
              </p>

              <div className="pt-2">
                <StoreButtons variant="inverted" />
              </div>
            </div>

            {/* Right Dual Smartphone Visuals using Genuine Official App Screenshots */}
            <div className="lg:col-span-5 flex items-center justify-center gap-4 sm:gap-5">
              <div className="w-[155px] sm:w-[175px] -rotate-3 transition-transform duration-200 hover:rotate-0">
                <SmartphoneFrame
                  imageSrc="/images/app-screen-2.jpg"
                  imageAlt="UnboxRTN mobile app services screen showing Food Delivery, Unbox Services, Online Medicine, and Grocery"
                />
              </div>
              <div className="w-[155px] sm:w-[175px] translate-y-4 rotate-3 transition-transform duration-200 hover:rotate-0">
                <SmartphoneFrame
                  imageSrc="/images/app-screen-3.jpg"
                  imageAlt="UnboxRTN mobile app restaurant menu screen for Agashe Foodcourt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
