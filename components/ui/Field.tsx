"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-faint outline-none transition-[border-color,background-color,box-shadow] duration-300 hover:border-white/20 focus:border-galivra-bright/70 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(142,124,255,0.12)]";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(fieldBase, className)} {...props} />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, "resize-none", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(fieldBase, "appearance-none bg-panel", className)}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted"
    >
      {children}
    </label>
  );
}
