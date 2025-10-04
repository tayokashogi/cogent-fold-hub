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
