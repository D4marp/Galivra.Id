"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-lg bg-white/[0.03] border border-line px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors duration-200 focus:border-galivra-blue/60 focus:bg-white/[0.05]";

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
      className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-muted"
    >
      {children}
    </label>
  );
}
