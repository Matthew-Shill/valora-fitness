import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "light";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const styles = {
    solid:
      "bg-ink text-cream hover:bg-moss border-ink hover:border-moss",
    ghost:
      "bg-transparent text-current border-current hover:bg-ink hover:text-cream hover:border-ink",
    light:
      "bg-cream text-ink border-cream hover:bg-white",
  }[variant];

  const classNameFull = `inline-flex items-center justify-center border px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors ${styles} ${className}`;
  const external = href.startsWith("http://") || href.startsWith("https://");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNameFull}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameFull}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.32em] uppercase text-muted">
      {children}
    </p>
  );
}

export function FramedMark({
  title,
  caption,
  className = "",
}: {
  title: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`framed px-6 py-5 text-center ${className}`}>
      <p className="text-sm sm:text-base tracking-[0.28em] uppercase">
        {title}
      </p>
      {caption ? (
        <span className="framed-caption bg-inherit">{caption}</span>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
