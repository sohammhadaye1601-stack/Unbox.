interface SmartphoneFrameProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  priority?: boolean;
}

export function SmartphoneFrame({
  imageSrc,
  imageAlt,
  className = '',
  priority = false,
}: SmartphoneFrameProps) {
  return (
    <div
      className={`relative mx-auto rounded-[2.5rem] bg-slate-900 p-2.5 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.28)] ring-1 ring-slate-900/10 ${className}`}
    >
      {/* Top speaker notch */}
      <div
        className="pointer-events-none absolute top-4 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900 flex items-center justify-center gap-1.5"
        aria-hidden="true"
      >
        <span className="h-1.5 w-8 rounded-full bg-slate-800" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
      </div>

      {/* Screen */}
      <div className="relative overflow-hidden rounded-[2rem] bg-white aspect-[9/20] w-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top transition-opacity duration-200"
        />
      </div>
    </div>
  );
}
