import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 select-none">
      {/* Glowing 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mb-6"
      >
        {/* Ambient glow behind the number */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 blur-[80px] opacity-30 bg-primary rounded-full scale-110"
        />
        <span className="text-[clamp(6rem,20vw,14rem)] font-extralight leading-none tracking-tighter text-foreground">
          404
        </span>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        className="w-16 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent mb-6"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-center mb-10 space-y-2"
      >
        <p className="text-base font-medium text-foreground tracking-wide">
          Page not found
        </p>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          The route you're looking for doesn't exist or was moved.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="flex gap-3"
      >
        <Button
          variant="outline"
          className="gap-2 text-sm"
          onClick={() => navigate(-1)}
        >
          <MoveLeft size={14} />
          Go Back
        </Button>
        <Button
          className="gap-2 text-sm"
          onClick={() => navigate("/")}
        >
          <Home size={14} />
          Home
        </Button>
      </motion.div>
    </div>
  );
}
