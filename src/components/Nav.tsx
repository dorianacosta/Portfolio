import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function Nav() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 p-4">
      <Link
        to="/"
        className={`inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-all duration-300 ${
          atTop ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
    </header>
  );
}
