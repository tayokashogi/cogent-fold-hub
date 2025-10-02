import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import pastorHero from '@/assets/pastor-hero.jpg';

interface HomeProps {
  onLanguageSelect: (lang: 'en' | 'yo') => void;
}

const Home = ({ onLanguageSelect }: HomeProps) => {
  const navigate = useNavigate();
  const [hoveredLang, setHoveredLang] = useState<string | null>(null);

  const handleLanguageSelect = (lang: 'en' | 'yo') => {
    onLanguageSelect(lang);
    navigate('/dashboard');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 128, 0, 0.75), rgba(0, 51, 102, 0.75)), url(${pastorHero})`,
        }}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Logo Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/30 shadow-2xl">
            <span className="text-4xl font-bold text-white">CAC</span>
          </div>
        </div>

        {/* Church Name */}
        <div className="mb-4 text-center animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 drop-shadow-lg">
            CAC Alagomeji Yaba
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">(Oke-Ibukun)</p>
        </div>

        {/* Slogan */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="rounded-full bg-accent/20 backdrop-blur-sm px-6 py-3 border border-accent/30">
            <p className="text-lg md:text-xl text-white font-medium">
              "One Fold, One Shepherd"
            </p>
          </div>
        </div>

        {/* Language Selection */}
        <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <p className="text-center text-white/80 text-sm md:text-base mb-6">
            Choose Your Preferred Assembly / Yan Ìjọ Tí O Fẹ́
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* English Assembly Button */}
            <Button
              size="lg"
              onClick={() => handleLanguageSelect('en')}
              onMouseEnter={() => setHoveredLang('en')}
              onMouseLeave={() => setHoveredLang(null)}
              className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <span>English Assembly</span>
                <ChevronRight 
                  className={`h-5 w-5 transition-transform duration-300 ${hoveredLang === 'en' ? 'translate-x-1' : ''}`} 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            {/* Yoruba Assembly Button */}
            <Button
              size="lg"
              onClick={() => handleLanguageSelect('yo')}
              onMouseEnter={() => setHoveredLang('yo')}
              onMouseLeave={() => setHoveredLang(null)}
              className="group relative overflow-hidden bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 h-auto text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <span>Yoruba Assembly</span>
                <ChevronRight 
                  className={`h-5 w-5 transition-transform duration-300 ${hoveredLang === 'yo' ? 'translate-x-1' : ''}`} 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-white/70 text-sm animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <p>Alagomeji, Yaba, Lagos, Nigeria</p>
          <p className="mt-1">A Digital Church Platform for Modern Worship</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
