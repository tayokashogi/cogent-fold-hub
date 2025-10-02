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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">CAC</span>
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-bold text-foreground">CAC Alagomeji Yaba</div>
              <div className="text-xs text-muted-foreground">One Fold, One Shepherd</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className={isActive(item.path) ? 'bg-primary text-primary-foreground' : ''}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === 'en' ? t.english : t.yoruba}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover z-50">
                <DropdownMenuItem onClick={() => onLanguageChange('en')} className="cursor-pointer">
                  {t.english}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLanguageChange('yo')} className="cursor-pointer">
                  {t.yoruba}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={isActive(item.path) ? 'default' : 'ghost'}
                    className={`w-full justify-start ${isActive(item.path) ? 'bg-primary text-primary-foreground' : ''}`}
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
