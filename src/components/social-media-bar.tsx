import { Youtube, Facebook, Instagram, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialMediaBar = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@cacoke-ibukun',
      color: 'hover:text-red-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/cacoke-ibukun',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/cacoke-ibukun',
      color: 'hover:text-pink-600',
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: 'https://tiktok.com/@cacoke-ibukun',
      color: 'hover:text-foreground',
    },
    {
      name: 'Mixlr',
      icon: Radio,
      url: 'https://mixlr.com/cacoke-ibukun',
      color: 'hover:text-primary',
    },
  ];

  return (
    <div className="flex items-center gap-1">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.name} Live Stream`}
          title={`Watch live on ${social.name}`}
        >
          <Button
            variant="ghost"
            size="sm"
            className={`transition-colors ${social.color}`}
          >
            <social.icon className="h-4 w-4" />
          </Button>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;
