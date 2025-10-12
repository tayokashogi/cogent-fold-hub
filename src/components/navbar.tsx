import { NavLink, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/cac-logo.svg";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground/80 hover:text-foreground hover:bg-muted",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="CAC" className="h-8 w-8 rounded-full ring-1 ring-border" />
          <span className="font-semibold">CAC Oke-Ibukun</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/programmes">Programmes</NavItem>
          <NavItem to="/calendar">Calendar</NavItem>
          <NavItem to="/stewardship">Stewardship</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button className="btn-accent">Give</Button>
        </div>

        <Button variant="ghost" className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-card">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            <NavItem to="/home">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/programmes">Programmes</NavItem>
            <NavItem to="/calendar">Calendar</NavItem>
            <NavItem to="/stewardship">Stewardship</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <Button className="btn-accent mt-2 w-fit">Give</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
