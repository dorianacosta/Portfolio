import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, User, Briefcase, FolderOpen, Zap, GraduationCap, Mail } from "lucide-react";
import { LimelightNav, NavItem } from "@/components/ui/limelight-nav";

const navItems: (NavItem & { path: string })[] = [
  { id: "home",       path: "/",           icon: <Home />,          label: "Home" },
  { id: "about",      path: "/about",      icon: <User />,          label: "About" },
  { id: "experience", path: "/experience", icon: <Briefcase />,     label: "Experience" },
  { id: "projects",   path: "/projects",   icon: <FolderOpen />,    label: "Projects" },
  { id: "skills",     path: "/skills",     icon: <Zap />,           label: "Skills" },
  { id: "education",  path: "/education",  icon: <GraduationCap />, label: "Education" },
  { id: "contact",    path: "/contact",    icon: <Mail />,          label: "Contact" },
];

export function Nav() {
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = Math.max(navItems.findIndex((item) => item.path === location.pathname), 0);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full flex justify-center py-3 transition-all duration-300 ${
        atTop ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <LimelightNav
        items={navItems.map((item) => ({
          ...item,
          onClick: () => navigate(item.path),
        }))}
        activeIndex={activeIndex}
      />
    </header>
  );
}
