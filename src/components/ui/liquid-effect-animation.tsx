import { useEffect, useRef } from "react"
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
          app.liquidPlane.material.color.set(0xffffff);
          app.liquidPlane.material.metalness = 0.15;
          app.liquidPlane.material.roughness = 0.85;
          app.liquidPlane.uniforms.displacementScale.value = 4.5;
          app.setRain(true);
          app.setRainTime(0.24);

          // Build text texture at high resolution
          const dpr = Math.max(window.devicePixelRatio || 1, 2);
          const W = 2048 * dpr;
          const H = 1152 * dpr;
          const tc = document.createElement('canvas');
          tc.width = W;
          tc.height = H;
          const ctx = tc.getContext('2d');
          ctx.scale(dpr, dpr);
          ctx.clearRect(0, 0, 2048, 1152);
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          const cx = 1024;

          // Name
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'rgba(255,255,255,0.97)';
          ctx.font = '200 112px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif';
          ctx.letterSpacing = '8px';
          ctx.fillText('Dorian Acosta', cx, 548);

          // Decorative divider
          ctx.strokeStyle = 'rgba(255,255,255,0.28)';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(cx - 80, 604); ctx.lineTo(cx - 24, 604); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(cx + 24, 604); ctx.lineTo(cx + 80, 604); ctx.stroke();
          ctx.fillStyle = 'rgba(255,255,255,0.22)';
          ctx.font = '13px ui-sans-serif, sans-serif';
          ctx.letterSpacing = '0px';
          ctx.fillText('✦', cx, 604);

          // Subtitle
          ctx.fillStyle = 'rgba(255,255,255,0.55)';
          ctx.font = '300 15px ui-sans-serif, system-ui, sans-serif';
          ctx.letterSpacing = '8px';
          ctx.fillText('CS  MAJOR', cx, 638);

          app.loadImage(tc.toDataURL());

          // Block mouse interaction
          window.__liquidMouseBlock = function(e) { e.stopPropagation(); };
          document.addEventListener('pointermove', window.__liquidMouseBlock, true);
          document.addEventListener('click', window.__liquidMouseBlock, true);
          window.__liquidApp = app;
        }
      `
      document.body.appendChild(script)
    }, 120)

    return () => {
      clearTimeout(timer)
      if (window.__liquidMouseBlock) {
        document.removeEventListener('pointermove', window.__liquidMouseBlock, true)
        document.removeEventListener('click', window.__liquidMouseBlock, true)
        window.__liquidMouseBlock = undefined
      }
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
      {/* Site background */}
      <div className="absolute inset-0">
        <EtheralShadow
          color="rgba(180, 180, 180, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-background/92" />
      </div>

      {/* Three.js ripple canvas — screen blend so black areas are transparent,
          white text areas glow through and ripple with displaced UVs */}
      <canvas
        ref={canvasRef}
        id="liquid-canvas"
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 1, mixBlendMode: "screen" }}
      />
    </div>
  )
}

declare global {
  interface Window {
    __liquidApp?: any
    __liquidMouseBlock?: (e: Event) => void
  }
}
