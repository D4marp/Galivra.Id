"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  primary: "bg-ink text-void hover:bg-white",
  secondary:
    "border border-white/15 bg-white/[0.04] text-ink backdrop-blur-md hover:border-white/30 hover:bg-white/[0.08]",
  ghost: "text-ink-muted hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-[15px]",
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withArrow,
      magnetic = true,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const elRef = React.useRef<HTMLButtonElement & HTMLAnchorElement>(null);
    const [offset, setOffset] = React.useState({ x: 0, y: 0 });

    React.useImperativeHandle(ref, () => elRef.current as HTMLButtonElement & HTMLAnchorElement);

    const onMove = (e: React.MouseEvent) => {
      if (!magnetic || !elRef.current) return;
      const r = elRef.current.getBoundingClientRect();
      setOffset({
        x: (e.clientX - r.left - r.width / 2) * 0.22,
        y: (e.clientY - r.top - r.height / 2) * 0.32,
      });
    };
    const onLeave = () => setOffset({ x: 0, y: 0 });

    const classes = cn(
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-[-0.01em]",
      "transition-[background-color,border-color,color,box-shadow] duration-300",
      variantStyles[variant],
      sizeStyles[size],
      className
    );
    const style: React.CSSProperties = {
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s, border-color 0.3s, color 0.3s",
    };

    // Label rolls up on hover and an identical copy slides in from below.
    const content = (
      <>
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">
            {children}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
          >
            {children}
          </span>
        </span>
        {withArrow && (
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45"
            aria-hidden="true"
          />
        )}
      </>
    );

    if (href !== undefined) {
      const external = /^https?:\/\//.test(href);
      return (
        <a
          ref={elRef}
          href={href}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={style}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={elRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={style}
        className={classes}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
