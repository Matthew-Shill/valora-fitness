import { site } from "@/lib/site";

type LogoProps = {
  variant?: "mark" | "lockup";
  className?: string;
};

export function Logo({ variant = "mark", className = "" }: LogoProps) {
  if (variant === "lockup") {
    return (
      <span className={`inline-flex flex-col items-start text-current ${className}`}>
        <span className="font-serif text-3xl leading-none tracking-[0.28em] uppercase">
          {site.name}
        </span>
        <span className="mt-3 block h-px w-full bg-current/50" />
        <span className="mt-2 text-[10px] tracking-[0.22em] uppercase text-current/70">
          {site.tagline}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`font-serif text-[1.35rem] leading-none tracking-[0.28em] uppercase sm:text-[1.5rem] ${className}`}
    >
      {site.name}
    </span>
  );
}
