import { UNBOX_CONTACT } from '../data/unboxData';

interface StoreButtonsProps {
  variant?: 'default' | 'inverted';
  className?: string;
}

export function StoreButtons({ variant = 'default', className = '' }: StoreButtonsProps) {
  const playClasses =
    variant === 'inverted'
      ? 'bg-slate-950 text-white hover:bg-slate-800 border border-slate-900'
      : 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-900';

  const appleClasses =
    variant === 'inverted'
      ? 'bg-white text-slate-900 hover:bg-orange-50 border border-white/90'
      : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-300';

  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      <a
        href={UNBOX_CONTACT.googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Unbox on Google Play Store"
        className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 min-h-[48px] transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 shadow-sm whitespace-nowrap shrink-0 ${playClasses}`}
      >
        <svg
          className="w-6 h-6 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M3.61 1.814L13.793 12 3.61 22.186a1.81 1.81 0 0 1-.61-1.363V3.177c0-.535.23-.998.61-1.363z" fill="#32BBFF" />
          <path d="M17.213 8.58L13.793 12l3.42 3.42 3.862-2.203c.727-.415.727-1.52 0-1.935L17.213 8.58z" fill="#FFCE00" />
          <path d="M17.213 15.42L13.793 12 3.61 22.186c.396.369.997.43 1.662.05l11.941-6.816z" fill="#F14336" />
          <path d="M17.213 8.58L5.272 1.764c-.665-.38-1.266-.319-1.662.05L13.793 12l3.42-3.42z" fill="#00F076" />
        </svg>
        <span className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-medium tracking-wide opacity-80">GET IT ON</span>
          <span className="text-sm font-bold tracking-tight mt-0.5">Google Play</span>
        </span>
      </a>

      <a
        href={UNBOX_CONTACT.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download UnboxRTN on the Apple App Store"
        className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 min-h-[48px] transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 shadow-sm whitespace-nowrap shrink-0 ${appleClasses}`}
      >
        <svg
          className="w-6 h-6 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
        </svg>
        <span className="flex flex-col text-left leading-none">
          <span className="text-[10px] font-medium tracking-wide opacity-75">Download on the</span>
          <span className="text-sm font-bold tracking-tight mt-0.5">App Store</span>
        </span>
      </a>
    </div>
  );
}
