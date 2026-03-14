"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("relative w-full", className)}
      style={{
        background: `
          radial-gradient(ellipse 70% 90px at 50% 0px,  rgba(255,255,255,0.55) 0%,  rgba(255,255,255,0.12) 40%, transparent 70%),
          radial-gradient(ellipse 30% 50px at 50% 0px,  rgba(255,255,255,0.80) 0%,  transparent 80%),
          hsl(0,0%,5%)
        `,
      }}
    >
      {/* Beam line + bulb drawn with a pseudo-box-shadow trick */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-[2px]"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(255,255,255,0.9) 25%, white 50%, rgba(255,255,255,0.9) 75%, transparent 95%)",
          boxShadow: "0 0 18px 8px rgba(255,255,255,0.55)",
        }}
      />

      {/* Content */}
      <div className="relative pt-10">
        {children}
      </div>
    </div>
  );
};
