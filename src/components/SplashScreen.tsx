import { useEffect, useRef, useState } from "react"
import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fading, setFading] = useState(false)
  // stable ref so the effect doesn't re-run if parent re-renders
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 3600)
    const doneTimer = setTimeout(() => onCompleteRef.current(), 4800)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, []) // empty dep array — runs exactly once

  return (
    <div
      className="fixed inset-0 z-[9999]"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 1100ms ease-in-out",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <LiquidEffectAnimation />
    </div>
  )
}
