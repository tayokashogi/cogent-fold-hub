// src/layouts/appshell.tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

type Props = { children?: ReactNode; base?: string };

export default function AppShell({ children, base = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [openOthers, setOpenOthers] = useState(false);        // desktop dropdown
  const [openOthersMobile, setOpenOthersMobile] = useState(false); // mobile expand
  const othersRef = useRef<HTMLDivElement | null>(null);

  const p = (path: string) => (base ? `${base}${path}` : path);

  // Core (always visible)
  const core = [
    { to: p("/about"),       label: "About" },
    { to: p("/services"),    label: "Services" },
    { to: p("/programmes"),  label: "Programmes" },
    { to: p("/calendar"),    label: "Calendar" },
    { to: p("/stewardship"), label: "Stewardship" },
    { to: p("/contact"),     label: "Contact" },
  ];

  // Others (collapsed under dropdown)
  const others = [
    { to: p("/leadership"),  label: "Leadership" },
    { to: p("/ministries"),  label: "Ministries" },
    { to: p("/sermons"),     label: "Sermons" },
    { to: p("/visit"),       label: "Plan Your Visit" },
  ];

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    [
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-foreground/80 hover:text-foreground hover:bg-muted",
    ].join(" ");

  // Close the desktop Others dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!othersRef.current) return;
      if (!othersRef.current.contains(e.target as Node)) {
        setOpenOthers(false);
      }
    }
    if (openOthers) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [openOthers]);

  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <header className="w-full sticky top-0 z-50 bg-card/70 backdrop-blur border-b supports-[backdrop-filter]:bg-card/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          {/* Brand → /en/home (via base) */}
          <Link to={p("/home")} className="font-semibold truncate">
            CAC Yaba — English Assembly
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {core.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkCls}>
                {n.label}
              </NavLink>
            ))}

            {/* Others dropdown */}
            <div className="relative" ref={othersRef}>
              <button
                type="button"
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted inline-flex items-center gap-1"
                onClick={() => setOpenOthers((v) => !v)}
                aria-expanded={openOthers}
                aria-haspopup="menu"
              >
                Others <ChevronDown className="h-4 w-4" />
              </button>

              {openOthers && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-56 rounded-md border bg-card shadow-md p-1"
                >
                  {others.map((n) => (
                    <NavLink
                      key={n.to}
                      to={n.to}
                      className={({ isActive }) =>
                        [
                          "block w-full text-left px-3 py-2 rounded-md text-sm",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted",
                        ].join(" ")
                      }
                      onClick={() => setOpenOthers(false)}
                    >
                      {n.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right actions (Give CTA) */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to={p("/stewardship")}
              className="px-3 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground hover:opacity-90 transition"
            >
              Give
            </NavLink>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden border-t bg-card/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {core.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    [
                      "w-full text-left px-3 py-2 rounded-md text-sm font-medium",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted",
                    ].join(" ")
                  }
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </NavLink>
              ))}

              {/* Others collapsible */}
              <button
                type="button"
                className="mt-1 w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted inline-flex items-center justify-between"
                onClick={() => setOpenOthersMobile((v) => !v)}
                aria-expanded={openOthersMobile}
              >
                <span>Others</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${openOthersMobile ? "rotate-90" : ""}`}
                />
              </button>
              {openOthersMobile && (
                <div className="pl-3">
                  {others.map((n) => (
                    <NavLink
                      key={n.to}
                      to={n.to}
                      className={({ isActive }) =>
                        [
                          "block w-full text-left px-3 py-2 rounded-md text-sm",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted",
                        ].join(" ")
                      }
                      onClick={() => {
                        setOpen(false);
                        setOpenOthersMobile(false);
                      }}
                    >
                      {n.label}
                    </NavLink>
                  ))}
                </div>
              )}

              <NavLink
                to={p("/stewardship")}
                className="mt-2 px-3 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground hover:opacity-90 transition"
                onClick={() => setOpen(false)}
              >
                Give
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children ?? <Outlet />}</main>

      <footer className="border-t py-6 text-center text-sm text-foreground/70">
        © {new Date().getFullYear()} CAC Yaba — English Assembly
      </footer>
    </div>
  );
}
