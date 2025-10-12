// src/layouts/appshell.tsx
import { Outlet, NavLink, Link } from "react-router-dom";
import type { ReactNode } from "react";

/**
 * AppShell
 * - Renders a sticky header (navbar), page content, and a footer.
 * - Accepts an optional `base` prop to prefix nav links (e.g., base="/en" → /en/home).
 *
 * Usage:
 *   <AppShell base="/en">
 *     <YourPage/>
 *   </AppShell>
 */
type Props = {
  children?: ReactNode;
  base?: string;
};

export default function AppShell({ children, base = "" }: Props) {
  const p = (path: string) => (base ? `${base}${path}` : path);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    [
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-foreground/80 hover:text-foreground hover:bg-muted",
    ].join(" ");

  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      {/* Header / Navbar */}
      <header className="w-full sticky top-0 z-50 bg-card/70 backdrop-blur border-b supports-[backdrop-filter]:bg-card/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link to={p("/home")} className="flex items-center gap-2">
            <span className="font-semibold">Christ Apostolic Church, Oke-Ibukun</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to={p("/home")} className={linkCls}>
              Home
            </NavLink>
            <NavLink to={p("/about")} className={linkCls}>
              About
            </NavLink>
            <NavLink to={p("/services")} className={linkCls}>
              Services
            </NavLink>
            <NavLink to={p("/programmes")} className={linkCls}>
              Programmes
            </NavLink>
            <NavLink to={p("/calendar")} className={linkCls}>
              Calendar
            </NavLink>
            <NavLink to={p("/stewardship")} className={linkCls}>
              Stewardship
            </NavLink>
            <NavLink to={p("/contact")} className={linkCls}>
              Contact
            </NavLink>
          </nav>

          {/* Quick language toggles (non-prefixed; adjust to taste) */}
          <nav className="text-sm flex gap-4">
            <NavLink to="/en" className="underline underline-offset-4">
              English
            </NavLink>
            <NavLink to="/yo" className="underline underline-offset-4">
              Yorùbá
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">{children ?? <Outlet />}</main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-foreground/70">
        © {new Date().getFullYear()} Christ Apostolic Church, Oke-Ibukun
      </footer>
    </div>
  );
}
