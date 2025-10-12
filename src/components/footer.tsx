import { Link } from "react-router-dom";
import { Youtube, Facebook, Instagram, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Footer Component
 * A modern, responsive footer with navigation links, newsletter signup, and social media icons
 */
const Footer = () => {
  // Navigation links organized by sections
  const churchLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

  const supportLinks = [
    { name: "FAQ", path: "/about" },
    { name: "Calendar", path: "/calendar" },
    { name: "Stewardship", path: "/stewardship" },
    { name: "Programmes", path: "/programmes" },
  ];

  // Social media links
  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/cacoke-ibukun", color: "hover:text-pink-600" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/cacoke-ibukun", color: "hover:text-blue-600" },
    { 
      name: "TikTok", 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: "https://tiktok.com/@cacoke-ibukun", 
      color: "hover:text-foreground" 
    },
    { name: "Mixlr", icon: Radio, url: "https://mixlr.com/cacoke-ibukun", color: "hover:text-primary" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@cacoke-ibukun", color: "hover:text-red-500" },
  ];

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  // Newsletter signup handler
  const handleNewsletterSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Newsletter signup:", email);
    // TODO: Implement newsletter signup logic
  };

  return (
    <footer className="bg-background border-t border-border mt-auto">
      {/* Top Section - Navigation and Newsletter */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Church</h3>
            <ul className="space-y-2">
              {churchLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex gap-2">
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1"
              />
              <Button type="submit" variant="default">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Media and Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={`Visit us on ${social.name}`}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`transition-colors ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                </a>
              ))}
            </div>

            {/* Copyright Notice */}
            <div className="text-muted-foreground text-sm text-center md:text-right">
              © {currentYear} CAC Oke-Ibukun. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
