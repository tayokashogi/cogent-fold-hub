import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import cacLogo from '@/assets/cac-logo.svg';
import SocialMediaBar from '@/components/social-media-bar';

interface HeaderProps {
  language: 'en' | 'yo';
  onLanguageChange: (lang: 'en' | 'yo') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const translations = {
    en: {
      home: 'Home',
      dashboard: 'Dashboard',
      services: 'Services & Programs',
      stewardship: 'Stewardship',
      about: 'About Us',
      contact: 'Contact',
      language: 'Language',
      english: 'English',
      yoruba: 'Yoruba',
    },
    yo: {
      home: 'Ilé',
      dashboard: 'Dashboard',
      services: 'Àwọn Ìsìn & Ètò',
      stewardship: 'Ìṣàkóso',
      about: 'Nípa Wa',
      contact: 'Ìbánisọ̀rọ̀',
      language: 'Èdè',
      english: 'Gẹ̀ẹ́sì',
      yoruba: 'Yorùbá',
    },
  };

  const t = translations[language];

  const navItems = [
    { path: '/dashboard', label: t.dashboard },
    { path: '/services', label: t.services },
    { path: '/stewardship', label: t.stewardship },
    { path: '/about', label: t.about },
    { path: '/contact', label: t.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/30 bg-gradient-to-r from-background via-secondary/10 to-background backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group transition-transform hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center">
              <img src={cacLogo} alt="CAC Logo" className="h-full w-full object-contain" />
            </div>
            <div className="hidden md:block">
              <div className="text-base font-bold text-primary">CAC Oke-Ibukun</div>
              <div className="text-xs font-medium text-muted-foreground">One Fold, One Shepherd</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className={`transition-all font-semibold ${
                    isActive(item.path) 
                      ? 'bg-primary text-primary-foreground shadow-md hover:shadow-purple-glow' 
                      : 'hover:bg-secondary/20 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Social Media, Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <div className="hidden sm:block">
              <SocialMediaBar />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 border-primary/30 hover:bg-secondary/20 hover:border-primary transition-all font-semibold">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === 'en' ? t.english : t.yoruba}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover z-50 border-secondary/30">
                <DropdownMenuItem onClick={() => onLanguageChange('en')} className="cursor-pointer font-medium hover:bg-secondary/20">
                  {t.english}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLanguageChange('yo')} className="cursor-pointer font-medium hover:bg-secondary/20">
                  {t.yoruba}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-secondary/30 py-4 animate-fade-in bg-gradient-to-b from-secondary/5 to-transparent">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={isActive(item.path) ? 'default' : 'ghost'}
                    className={`w-full justify-start font-semibold transition-all ${
                      isActive(item.path) 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'hover:bg-secondary/20 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
