import { ShoppingBag, MapPinned, ShieldCheck, CalendarClock } from 'lucide-react';
import { WHY_UNBOX_FEATURES, type FeatureItem } from '../data/unboxData';

function FeatureIcon({ name }: { name: FeatureItem['iconName'] }) {
  switch (name) {
    case 'cart':
      return <ShoppingBag className="h-6 w-6" aria-hidden="true" />;
    case 'track':
      return <MapPinned className="h-6 w-6" aria-hidden="true" />;
    case 'shield':
      return <ShieldCheck className="h-6 w-6" aria-hidden="true" />;
    case 'preorder':
      return <CalendarClock className="h-6 w-6" aria-hidden="true" />;
  }
}

export function WhyUnboxSection() {
  return (
    <section
      id="why-unbox"
      className="py-16 sm:py-24 bg-[#FFFBF7] border-y border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Built for Convenience &amp; Trust
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
            Why Choose Unbox?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Designed around how Ratnagiri orders—transparent pricing, live updates, and
            secured doorstep delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_UNBOX_FEATURES.map((feature, idx) => {
            const isGreenAccent = feature.iconName === 'shield';
            return (
              <article
                key={feature.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-200 ${
                        isGreenAccent
                          ? 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white'
                          : 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                      }`}
                    >
                      <FeatureIcon name={feature.iconName} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
