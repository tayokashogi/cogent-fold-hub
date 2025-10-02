import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Video, Users } from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'yo';
}

const Services = ({ language }: ServicesProps) => {
  const [selectedCategory, setSelectedCategory] = useState('programs');

  const translations = {
    en: {
      title: 'Services & Programs',
      subtitle: 'Join us in worship and fellowship',
      programs: 'Church Programs',
      tithes: 'Tithes & Offerings',
      community: 'Community Development',
      combine: 'Combine Services',
      yoruba: 'Yoruba Assembly',
      english: 'English Assembly',
      youth: 'Youth Church',
      physical: 'Physical',
      online: 'Online',
      hybrid: 'Physical & Online',
      time: 'Time',
      location: 'Location',
      mode: 'Mode',
      viewMore: 'View Schedule',
    },
    yo: {
      title: 'Àwọn Ìsìn & Ètò',
      subtitle: 'Wá darapọ̀ mọ́ wa nínú ìjọ́sìn àti ìdàpọ̀',
      programs: 'Àwọn Ètò Ìjọ',
      tithes: 'Ìdámẹ́wàá & Ẹ̀bùn',
      community: 'Ìdàgbàsókè Àwùjọ',
      combine: 'Ìsìn Àpapọ̀',
      yoruba: 'Ìjọ Yorùbá',
      english: 'Ìjọ Gẹ̀ẹ́sì',
      youth: 'Ìjọ Àwọn Ọ̀dọ́',
      physical: 'Lójú ọnà',
      online: 'Lórí ẹ̀rọ',
      hybrid: 'Lójú ọnà & Lórí ẹ̀rọ',
      time: 'Àkókò',
      location: 'Ibùdó',
      mode: 'Ọ̀nà',
      viewMore: 'Wo Àkókò',
    }
  };

  const t = translations[language];

  const schedules = {
    combine: [
      { day: 'Sunday', time: '7:00 AM - 9:00 AM', mode: 'hybrid', service: 'First Service' },
      { day: 'Sunday', time: '9:30 AM - 11:30 AM', mode: 'hybrid', service: 'Second Service' },
      { day: 'Wednesday', time: '6:00 PM - 8:00 PM', mode: 'physical', service: 'Bible Study' },
      { day: 'Friday', time: '6:00 PM - 8:00 PM', mode: 'physical', service: 'Prayer Meeting' },
    ],
    yoruba: [
      { day: 'Sunday', time: '7:00 AM - 9:00 AM', mode: 'hybrid', service: 'Ìsìn Àárọ̀' },
      { day: 'Tuesday', time: '6:00 PM - 7:30 PM', mode: 'physical', service: 'Ẹ̀kọ́ Bíbélì' },
    ],
    english: [
      { day: 'Sunday', time: '9:30 AM - 11:30 AM', mode: 'hybrid', service: 'Morning Worship' },
      { day: 'Thursday', time: '6:00 PM - 7:30 PM', mode: 'online', service: 'Midweek Service' },
    ],
    youth: [
      { day: 'Sunday', time: '11:00 AM - 1:00 PM', mode: 'hybrid', service: 'Youth Worship' },
      { day: 'Saturday', time: '4:00 PM - 6:00 PM', mode: 'physical', service: 'Youth Fellowship' },
    ],
  };

  const getModeIcon = (mode: string) => {
    if (mode === 'hybrid') return <Users className="h-4 w-4" />;
    if (mode === 'online') return <Video className="h-4 w-4" />;
    return <MapPin className="h-4 w-4" />;
  };

  const getModeText = (mode: string) => {
    if (mode === 'hybrid') return t.hybrid;
    if (mode === 'online') return t.online;
    return t.physical;
  };

  const getModeColor = (mode: string) => {
    if (mode === 'hybrid') return 'bg-accent';
    if (mode === 'online') return 'bg-secondary';
    return 'bg-primary';
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="programs" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card">
            <TabsTrigger value="programs" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              {t.programs}
            </TabsTrigger>
            <TabsTrigger value="tithes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              {t.tithes}
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              {t.community}
            </TabsTrigger>
          </TabsList>

          {/* Church Programs Content */}
          <TabsContent value="programs" className="space-y-6">
            {/* Combine Services */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  {t.combine}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {schedules.combine.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{schedule.service}</h4>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {schedule.day}, {schedule.time}
                          </span>
                        </div>
                      </div>
                      <Badge className={`mt-2 sm:mt-0 ${getModeColor(schedule.mode)} text-white`}>
                        <span className="flex items-center gap-1">
                          {getModeIcon(schedule.mode)}
                          {getModeText(schedule.mode)}
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Yoruba Assembly */}
            <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-secondary" />
                  {t.yoruba}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {schedules.yoruba.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{schedule.service}</h4>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {schedule.day}, {schedule.time}
                          </span>
                        </div>
                      </div>
                      <Badge className={`mt-2 sm:mt-0 ${getModeColor(schedule.mode)} text-white`}>
                        <span className="flex items-center gap-1">
                          {getModeIcon(schedule.mode)}
                          {getModeText(schedule.mode)}
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* English Assembly */}
            <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  {t.english}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {schedules.english.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{schedule.service}</h4>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {schedule.day}, {schedule.time}
                          </span>
                        </div>
                      </div>
                      <Badge className={`mt-2 sm:mt-0 ${getModeColor(schedule.mode)} text-white`}>
                        <span className="flex items-center gap-1">
                          {getModeIcon(schedule.mode)}
                          {getModeText(schedule.mode)}
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Youth Church */}
            <Card className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  {t.youth}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {schedules.youth.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{schedule.service}</h4>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {schedule.day}, {schedule.time}
                          </span>
                        </div>
                      </div>
                      <Badge className={`mt-2 sm:mt-0 ${getModeColor(schedule.mode)} text-white`}>
                        <span className="flex items-center gap-1">
                          {getModeIcon(schedule.mode)}
                          {getModeText(schedule.mode)}
                        </span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tithes & Offerings Content */}
          <TabsContent value="tithes">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Tithes & Offerings Portal</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground mb-6">
                  Secure online giving platform coming soon. Visit the Stewardship page for more information.
                </p>
                <Button className="bg-primary text-primary-foreground">
                  Go to Stewardship
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Development Content */}
          <TabsContent value="community">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Community Development Programs</CardTitle>
              </CardHeader>
              <CardContent className="py-12">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-primary-light rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Health Services</h3>
                    <p className="text-sm text-muted-foreground">Free medical outreach and health screenings</p>
                  </div>
                  <div className="text-center p-6 bg-secondary-light rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Education Support</h3>
                    <p className="text-sm text-muted-foreground">Scholarships and tutoring programs</p>
                  </div>
                  <div className="text-center p-6 bg-accent-light rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Community Care</h3>
                    <p className="text-sm text-muted-foreground">Food banks and assistance programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
