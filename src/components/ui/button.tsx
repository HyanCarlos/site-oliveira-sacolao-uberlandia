import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "butcher" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary:
        "bg-[#0E6B38] text-white hover:bg-[#094A26] shadow-sm shadow-[#0E6B38]/25 focus-visible:ring-[#0E6B38]",
      butcher:
        "bg-[#B91C1C] text-white hover:bg-[#991B1B] shadow-sm shadow-[#B91C1C]/20 focus-visible:ring-[#B91C1C]",
      secondary:
        "bg-[#0C1B12] text-white hover:bg-emerald-950 shadow-sm focus-visible:ring-[#0C1B12]",
      outline:
        "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-400 focus-visible:ring-zinc-400",
      ghost:
        "bg-transparent text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:ring-zinc-400",
      gold:
        "bg-[#FACC15] text-zinc-950 hover:bg-[#EAB308] shadow-sm shadow-[#FACC15]/25 font-semibold focus-visible:ring-[#FACC15]",
    };

    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
      sm: "h-9 px-3.5 text-xs rounded-lg",
      md: "h-11 px-5 text-sm rounded-xl",
      lg: "h-12 px-6 text-base rounded-xl",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
