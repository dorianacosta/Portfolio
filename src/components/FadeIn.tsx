import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const initial =
    direction === "up"
      ? { y: 16 }
      : direction === "left"
      ? { x: -16 }
      : {};

  return (
    <motion.div
      initial={initial}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
