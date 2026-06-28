import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3b82f6] disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-[#3b82f6] text-white hover:bg-[#2563eb]",
      secondary: "bg-[#1e293b] text-[#e2e8f0] border border-[#334155] hover:bg-[#334155]",
      ghost: "hover:bg-[#1e293b] hover:text-[#e2e8f0]",
      outline: "border border-[#334155] bg-transparent hover:bg-[#1e293b]",
    };
    
    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    };

    return (
      <button
        className={cn(base, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
