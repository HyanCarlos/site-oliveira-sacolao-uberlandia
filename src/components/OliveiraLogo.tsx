interface OliveiraLogoProps {
  variant?: "light" | "dark";
  showSubtitle?: boolean;
  className?: string;
}

export function OliveiraLogo({
  variant = "dark",
  showSubtitle = true,
  className = "",
}: OliveiraLogoProps) {
  const titleColor = variant === "dark" ? "text-white" : "text-[#0C1B12]";
  const subtitleColor =
    variant === "dark" ? "text-emerald-200/90" : "text-[#0E6B38]";

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 drop-shadow-sm"
      >
        <rect width="64" height="64" rx="16" fill="#0E6B38" />
        <circle cx="32" cy="32" r="22" fill="#094A26" />
        <path
          d="M21 37C21 26 29 19 42 18C42 31 35 41 24 41C22.4 41 21.5 39.2 21 37Z"
          fill="#FACC15"
        />
        <path
          d="M21 41C25 36 31 30 39 22"
          stroke="#0E6B38"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle
          cx="44"
          cy="43"
          r="8"
          fill="#B91C1C"
          stroke="#FFFFFF"
          strokeWidth="2.2"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-['Sora'] text-lg font-extrabold tracking-tight sm:text-xl ${titleColor}`}
        >
          Oliveira
        </span>
        {showSubtitle && (
          <span
            className={`mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${subtitleColor}`}
          >
            Sacolão &amp; Casa de Carnes
          </span>
        )}
      </span>
    </span>
  );
}
