import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "green" | "red" | "gold" | "dark" | "neutral" | "outline";
}

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    green: "bg-[#0E6B38]/12 text-[#0E6B38] border border-[#0E6B38]/25",
    red: "bg-[#B91C1C]/10 text-[#B91C1C] border border-[#B91C1C]/20",
    gold: "bg-[#FACC15]/25 text-amber-950 border border-[#FACC15]/60",
    dark: "bg-[#0C1B12] text-white border border-emerald-950",
    neutral: "bg-zinc-100 text-zinc-800 border border-zinc-200",
    outline: "bg-transparent text-zinc-700 border border-zinc-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-tight",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
