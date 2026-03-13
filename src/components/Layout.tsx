import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 -z-10">
        <EtheralShadow
          color="rgba(180, 180, 180, 1)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-background/92" />
      </div>

      {!isHome && <Nav />}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          className={`flex-1${isHome ? "" : " pt-12"}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {!isHome && <Footer />}
    </div>
  );
}
