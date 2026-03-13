import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TypingEffect } from "@/components/ui/typing-effect"
import { EtheralShadow } from "@/components/ui/etheral-shadow"

export function LiquidEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let script: HTMLScriptElement | null = null

    const timer = setTimeout(() => {
      script = document.createElement("script")
      script.type = "module"
      script.textContent = `
        import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';
        const canvas = document.getElementById('liquid-canvas');
        if (canvas) {
          const app = LiquidBackground(canvas);
          app.liquidPlane.material.color.set(0x0d0d0d);
          app.liquidPlane.material.metalness = 0.9;
          app.liquidPlane.material.roughness = 0.1;
          app.liquidPlane.uniforms.displacementScale.value = 4.5;
          app.setRain(false);
          window.__liquidApp = app;
        }
      `
      document.body.appendChild(script)
    }, 120)

    return () => {
      clearTimeout(timer)
      if (window.__liquidApp?.dispose) {
        window.__liquidApp.dispose()
        window.__liquidApp = undefined
      }
      if (script && document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Same EtheralShadow background as the main site */}
      <div className="absolute inset-0">
        <EtheralShadow
          color="rgba(180, 180, 180, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-background" />
      </div>

      {/* Three.js ripple canvas blended on top */}
      <canvas
        ref={canvasRef}
        id="liquid-canvas"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.28, mixBlendMode: "screen" }}
      />

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 select-none">
        <motion.div
          className="h-px w-12 bg-white/25"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        />

        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <TypingEffect
              texts={["Dorian Acosta"]}
              typingSpeed={80}
              rotationInterval={999999}
              className="shimmer-text text-5xl sm:text-7xl md:text-8xl font-light tracking-wide text-foreground"
            />
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          >
            <span className="h-px w-8 bg-white/20" />
            <span className="text-[9px] tracking-[0.5em] text-white/30">✦</span>
            <span className="h-px w-8 bg-white/20" />
          </motion.div>

          <motion.p
            className="text-[11px] sm:text-xs font-light tracking-[0.5em] uppercase text-white/40"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            CS Major
          </motion.p>
        </div>

        <motion.div
          className="h-px w-12 bg-white/25"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>
    </div>
  )
}

declare global {
  interface Window {
    __liquidApp?: any
  }
}
