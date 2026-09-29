"use client";

import { Reveal } from "@/components/cinematic/Reveal";
import { RevealText } from "@/components/cinematic/RevealText";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Word(s) in the title set in the italic serif accent. */
  accent?: string | string[];
  align?: "left" | "center";
  as?: "h1" | "h2";
  trigger?: "mount" | "scroll";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent,
  align = "left",
  as = "h2",
  trigger = "scroll",
  className,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <Reveal y={10} duration={0.8} blur={false} trigger={trigger}>
        <p className={cn("eyebrow mb-6 flex items-center gap-2.5", center && "justify-center")}>
          <span className="h-1.5 w-1.5 rounded-full bg-galivra-cyan" />
          {eyebrow}
        </p>
      </Reveal>
      <RevealText
        as={as}
        text={title}
        accent={accent}
        trigger={trigger}
        className="text-display-md font-medium text-ink text-balance"
      />
      {description && (
        <Reveal y={16} duration={1} delay={0.15} trigger={trigger}>
          <p
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-[17px]",
              center && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
