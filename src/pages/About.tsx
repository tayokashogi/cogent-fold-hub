import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Book, Music, Handshake } from 'lucide-react';
import worshipScene from '@/assets/worship-scene.jpg';

interface AboutProps {
  language: 'en' | 'yo';
}

const About = ({ language }: AboutProps) => {
  const translations = {
    en: {
      title: 'About Us',
      subtitle: 'Our Story, Mission & Vision',
      ourStory: 'Our Story',
      storyText: 'Christ Apostolic Church (CAC) Alagomeji, Yaba, also known as CAC Oke-Ibukun, has been a pillar of faith in the Lagos community for decades. We are committed to spreading the gospel of Jesus Christ and nurturing spiritual growth among our members and the wider community.',
      chairman: 'Yaba DCC Chairman',
      chairmanName: 'Pastor SEA Oludare',
      chairmanBio: 'Pastor SEA has been leading our congregation with wisdom and compassion for over 15 years. His vision for a modern, inclusive church has transformed CAC Yaba into a beacon of hope and spiritual excellence.',
      mission: 'Our Mission',
      missionText: 'To glorify God by making disciples of Jesus Christ, equipping believers for ministry, and serving our community with love and excellence.',
      vision: 'Our Vision',
      visionText: 'To be a thriving, Christ-centered church that transforms lives, strengthens families, and impacts communities through the power of the Gospel.',
      values: 'Core Values',
      value1: 'Faith in God',
      value2: 'Biblical Excellence',
      value3: 'Community Service',
      value4: 'Spiritual Growth',
      departments: 'Church Departments',
      choir: 'Choir Ministry',
      choirDesc: 'Leading worship through music',
      ushers: 'Ushering Department',
      ushersDesc: 'Welcoming and guiding worshippers',
      prayer: 'Prayer Unit',
      prayerDesc: 'Intercession and spiritual warfare',
      youth: 'Youth Ministry',
      youthDesc: 'Empowering the next generation',
      women: 'Women Fellowship',
      womenDesc: 'Supporting and encouraging women',
      evangelism: 'Evangelism Team',
      evangelismDesc: 'Spreading the gospel',
    },
    yo: {
      title: 'Nípa Wa',
      subtitle: 'Ìtàn Wa, Iṣẹ́ Àpinfunni & Ìran',
      ourStory: 'Ìtàn Wa',
      storyText: 'Christ Apostolic Church (CAC) Alagomeji, Yaba, tí a tún mọ̀ sí Oke-Ibukun, ti jẹ́ òpó ìgbàgbọ́ ní àwùjọ Lagos fún ọ̀pọ̀ ọdún. A ti fi ara wa jì láti tan ìhìnrere Jesu Kristi àti láti tọ́ ìdàgbàsókè ti ẹ̀mí láàárín àwọn ọmọ ìjọ wa àti àwùjọ gbogbo.',
      chairman: 'Alùkọ́ Agbègbè',
      chairmanName: 'Pastor SEA Oludare',
      chairmanBio: 'Pastor SEA ti ń darí ìjọ wa pẹ̀lú ọgbọ́n àti ìyọ́nú fún ọdún mẹ́ẹ̀ẹ́dógún sẹ́yìn. Ìran rẹ̀ fún ìjọ òde òní tí ó ní ìfowópamọ́ ti yí CAC Yaba padà di àmì ìrètí àti ìdárayá ti ẹ̀mí.',
      mission: 'Iṣẹ́ Àpinfunni Wa',
      missionText: 'Láti bu ọlá fún Ọlọ́run nípa ṣíṣe àwọn ọmọ-ẹ̀yìn Jesu Kristi, dídi àwọn onígbàgbọ́ múlẹ̀ fún iṣẹ́ ìránṣẹ́, àti sìsìn àwùjọ wa pẹ̀lú ìfẹ́ àti ìdárayá.',
      vision: 'Ìran Wa',
      visionText: 'Láti jẹ́ ìjọ tí ó ń gbilẹ̀, tí ó dá lórí Kristi, tí ó ń yí ìgbésí ayé padà, tí ó ń mu àwọn ẹbí lágbára, tí ó sì ń ní ipa lórí àwọn àwùjọ nípa agbára Ìhìnrere.',
      values: 'Àwọn Iye Pàtàkì',
      value1: 'Ìgbàgbọ́ Nínú Ọlọ́run',
      value2: 'Ìdárayá Bíbélì',
      value3: 'Ìsìn Àwùjọ',
      value4: 'Ìdàgbàsókè ti Ẹ̀mí',
      departments: 'Àwọn Ẹ̀ka Ìjọ',
      choir: 'Iṣẹ́ Ìránṣẹ́ Kóírì',
      choirDesc: 'Ìdarí ìjọ́sìn nípa orin',
      ushers: 'Ẹ̀ka Àwọn Olùtọ́jú',
      ushersDesc: 'Ìkábọ̀ àti ìtọ́nisọ́nà àwọn ajọ́sìn',
      prayer: 'Ẹgbẹ́ Àdúrà',
      prayerDesc: 'Àárín àti ìjà ti ẹ̀mí',
      youth: 'Iṣẹ́ Ìránṣẹ́ Àwọn Ọ̀dọ́',
      youthDesc: 'Fífun ìran tí ń bọ̀ lágbára',
      women: 'Ẹgbẹ́ Obìnrin',
      womenDesc: 'Ìtìlẹ́yìn àti ìgbéníyànjú àwọn obìnrin',
      evangelism: 'Ẹgbẹ́ Ìwàásù',
      evangelismDesc: 'Ìtàn ìhìnrere',
    }
  };

  const t = translations[language];

  const departments = [
    { icon: Music, name: t.choir, desc: t.choirDesc, color: 'bg-primary' },
    { icon: Users, name: t.ushers, desc: t.ushersDesc, color: 'bg-secondary' },
    { icon: Heart, name: t.prayer, desc: t.prayerDesc, color: 'bg-accent' },
    { icon: Users, name: t.youth, desc: t.youthDesc, color: 'bg-primary' },
    { icon: Heart, name: t.women, desc: t.womenDesc, color: 'bg-secondary' },
    { icon: Handshake, name: t.evangelism, desc: t.evangelismDesc, color: 'bg-accent' },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Our Story Section */}
        <Card className="mb-8 overflow-hidden animate-fade-in-up">
          <div className="md:flex">
            <div 
              className="md:w-1/3 h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${worshipScene})` }}
            />
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl">{t.ourStory}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{t.storyText}</p>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Chairman Profile */}
        <Card className="mb-8 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              {t.chairman}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{t.chairmanName}</h3>
              <p className="text-foreground leading-relaxed">{t.chairmanBio}</p>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                {t.mission}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{t.missionText}</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-6 w-6 text-secondary" />
                {t.vision}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{t.visionText}</p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <Card className="mb-8 animate-scale-in">
          <CardHeader>
            <CardTitle>{t.values}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[t.value1, t.value2, t.value3, t.value4].map((value, index) => (
                <div 
                  key={index}
                  className="p-4 bg-primary-light rounded-lg text-center border-2 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Departments */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>{t.departments}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors card-interactive"
                >
                  <div className={`${dept.color} text-white p-3 rounded-lg flex-shrink-0`}>
                    <dept.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{dept.name}</h4>
                    <p className="text-sm text-muted-foreground">{dept.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
