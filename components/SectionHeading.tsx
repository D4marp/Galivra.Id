"use client";

import { Reveal } from "@/components/cinematic/Reveal";
import { RevealText } from "@/components/cinematic/RevealText";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal y={12} duration={0.6}>
        <p className="eyebrow mb-4">{eyebrow}</p>
      </Reveal>
      <RevealText
        as="h2"
        text={title}
        className="text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance"
      />
      {description && (
        <Reveal y={16} duration={0.7} delay={0.1}>
          <p className="mt-5 text-base md:text-lg text-ink-muted leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
