import aboutMerchantImg from '../assets/images/about_local_merchant_1794654331829.jpg';
import { ABOUT_PARAGRAPHS } from '../data/unboxData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Exact Original Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">
                Vocal for Local · Ratnagiri
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
                About Unbox your desire
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-slate-600">
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Local Business & Food Delivery Visuals */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-5">
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-sm aspect-[4/3]">
              <img
                src={aboutMerchantImg}
                alt="Local Ratnagiri restaurant owner packing fresh food orders for Unbox delivery"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center rounded-2xl border border-slate-200/80 bg-[#FFFBF7] p-5">
              <div className="sm:col-span-4 overflow-hidden rounded-xl bg-white border border-slate-100 p-2">
                <img
                  src="/images/unbox-food-delivery.png"
                  alt="Unbox food delivery rider and parcel service illustration"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-28 w-full object-contain mx-auto"
                />
              </div>
              <div className="sm:col-span-8 space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">
                  Empowering Ratnagiri Merchants &amp; Youth
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Built locally by our own software team in Ratnagiri to connect resident
                  hotels, small business owners, and women empowerment groups directly with
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
