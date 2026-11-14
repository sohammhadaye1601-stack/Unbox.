import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { GENUINE_APP_SCREENS } from '../data/unboxData';
import { SmartphoneFrame } from './SmartphoneFrame';
import { StoreButtons } from './StoreButtons';

export function AppShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = GENUINE_APP_SCREENS[activeIndex];

  return (
    <section
      id="app-showcase"
      className="py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Interactive Genuine Screen Selector & Download CTAs */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Inside the Official App
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
                Experience UnboxRTN on Your Smartphone
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Explore genuine screens from the official Unbox application—from discovering
                nearby Ratnagiri kitchens to browsing live menus and multi-service delivery.
              </p>
            </div>

            {/* Interactive Tab List to switch genuine app screenshots */}
            <div
              role="tablist"
              aria-label="Official UnboxRTN app screens"
              className="space-y-2.5"
            >
              {GENUINE_APP_SCREENS.map((screen, index) => {
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={screen.id}
                    role="tab"
                    type="button"
                    aria-selected={isSelected}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full flex items-center justify-between gap-4 rounded-2xl border px-5 py-3.5 min-h-[52px] text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                      isSelected
                        ? 'border-orange-500 bg-orange-50/70 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`text-xs font-bold tabular-nums ${
                            isSelected ? 'text-orange-600' : 'text-slate-400'
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-bold truncate ${
                            isSelected ? 'text-slate-900' : 'text-slate-800'
                          }`}
                        >
                          {screen.label}
                        </span>
                      </div>
                      {isSelected && (
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {screen.caption}
                        </p>
                      )}
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform duration-150 ${
                        isSelected ? 'text-orange-600 translate-x-0.5' : 'text-slate-400'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <StoreButtons />
            </div>
          </div>

          {/* Right Column: Official Smartphone Mockup + Delivery Illustration */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-br from-[#FFF8F3] via-white to-orange-50/50 p-6 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6">
                {/* Active Official App Screenshot inside Smartphone Frame */}
                <div className="sm:col-span-7">
                  <div className="w-[230px] sm:w-[255px] mx-auto">
                    <SmartphoneFrame
                      imageSrc={activeScreen.imageSrc}
                      imageAlt={activeScreen.imageAlt}
                    />
                  </div>
                </div>

                {/* Delivery Visual & Screen Context */}
                <div className="sm:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                  <div className="w-36 sm:w-full max-w-[180px] rounded-2xl bg-white p-3 border border-slate-200/70 shadow-xs">
                    <img
                      src="/images/unbox-food-delivery.png"
                      alt="Unbox food delivery scooter illustration"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      {activeScreen.label}
                    </p>
                    <h3 className="text-base font-bold text-slate-900">
                      {activeScreen.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Official UnboxRTN mobile app interface captured from our live Android
                      release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
