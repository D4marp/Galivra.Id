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
        <p
          className={cn(
            "eyebrow mb-5 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-galivra-cyan/50" />
          {eyebrow}
        </p>
      </Reveal>
      <RevealText
        as="h2"
        text={title}
        className="text-[2.25rem] font-medium leading-[1.05] tracking-[-0.03em] text-white text-balance md:text-6xl"
      />
      {description && (
        <Reveal y={16} duration={0.7} delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
