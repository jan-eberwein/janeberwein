import * as React from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function LiquidGlassCard({ children, className, ...props }: LiquidGlassCardProps) {
  return (
    <div
      className={cn("liquid-glass-card p-6 overflow-hidden relative", className)}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />
    </div>
  );
}
