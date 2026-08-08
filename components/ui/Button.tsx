"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface CommonProps {
  variant?: ButtonVariant;
  withArrow?: boolean;
  magnetic?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonProps = CommonProps &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  );

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-void hover:shadow-glow shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
  secondary:
    "glass-panel text-ink hover:border-galivra-blue/40 hover:bg-white/[0.06]",
  ghost: "text-ink-muted hover:text-white",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    { className, variant = "primary", withArrow, magnetic = true, children, href, ...props },
    ref
  ) => {
    const elRef = React.useRef<HTMLButtonElement & HTMLAnchorElement>(null);
    const [offset, setOffset] = React.useState({ x: 0, y: 0 });

    React.useImperativeHandle(ref, () => elRef.current as HTMLButtonElement & HTMLAnchorElement);

    function handleMouseMove(e: React.MouseEvent) {
      if (!magnetic || !elRef.current) return;
      const rect = elRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
      setOffset({ x, y });
    }

    function handleMouseLeave() {
      setOffset({ x: 0, y: 0 });
    }

    const sharedClassName = cn(
      "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 ease-out",
      "motion-reduce:transition-none",
      variantStyles[variant],
      className
    );
    const sharedStyle: React.CSSProperties = {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
      transition: "transform 0.2s ease-out",
    };
    const arrow = withArrow && (
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    );

    if (href !== undefined) {
      return (
        <a
          ref={elRef}
          href={href}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={sharedStyle}
          className={sharedClassName}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
          {arrow}
        </a>
      );
    }

    return (
      <button
        ref={elRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={sharedStyle}
        className={sharedClassName}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
        {arrow}
      </button>
    );
  }
);

Button.displayName = "Button";
