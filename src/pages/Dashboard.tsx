import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  MessageSquare, 
  Users, 
  Info, 
  Calendar, 
  Heart,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardProps {
  language: 'en' | 'yo';
}

const Dashboard = ({ language }: DashboardProps) => {
  const translations = {
    en: {
      welcome: 'Welcome to CAC Alagomeji Yaba',
      subtitle: 'Your Digital Church Hub',
      quickActions: 'Quick Actions',
      communityImpact: 'Community Impact',
      upcomingEvent: 'Next Youth Event',
      recentNews: 'Recent Announcements',
      payTithes: 'Pay Tithes & Offerings',
      payDesc: 'Secure online giving',
      submitFeedback: 'Submit Feedback',
      feedbackDesc: 'Share your thoughts',
      youthChurch: 'Youth Church',
      youthDesc: 'Young adults ministry',
      aboutUs: 'About Us',
      aboutDesc: 'Learn our story',
      programs: 'Programs',
      programsDesc: 'View all programs',
      community: 'Health & Community',
      communityDesc: 'Outreach services',
      evangelism: 'Evangelism',
      sanitation: 'Sanitation',
      security: 'Security',
      projects: 'Active Projects',
      countdown: 'Days Until Event',
      newsItem1: 'Sunday Service: Join us for worship this weekend',
      newsItem2: 'Prayer Meeting: Wednesday at 6:00 PM',
      newsItem3: 'Youth Convention: Register now for annual event',
      spotlight: 'Member Spotlight',
      testimony: '"Through faith and prayer, Sister A. secured employment after 6 months of searching."',
    },
    yo: {
      welcome: 'Káàbọ̀ sí CAC Alagomeji Yaba',
      subtitle: 'Ibi Ìjọ Alágbéká Rẹ',
      quickActions: 'Àwọn Ìṣe Kíákíá',
      communityImpact: 'Ipa Àwùjọ',
      upcomingEvent: 'Ìṣẹ̀lẹ̀ Àwọn Ọ̀dọ́ Tó Ńbọ̀',
      recentNews: 'Àwọn Ìkéde Tuntun',
      payTithes: 'San Ìdámẹ́wàá & Ẹ̀bùn',
      payDesc: 'Ìfúnni lórí ẹ̀rọ',
      submitFeedback: 'Fi Èrò Sílẹ̀',
      feedbackDesc: 'Sọ èrò rẹ fún wa',
      youthChurch: 'Ìjọ Àwọn Ọ̀dọ́',
      youthDesc: 'Ìsìn àwọn ọ̀dọ́',
      aboutUs: 'Nípa Wa',
      aboutDesc: 'Mọ ìtàn wa',
      programs: 'Àwọn Ètò',
      programsDesc: 'Wo gbogbo ètò',
      community: 'Ìlera & Àwùjọ',
      communityDesc: 'Ìṣẹ́ ìtọ́jú',
      evangelism: 'Ìwàásù',
      sanitation: 'Ìmọ́tótó',
      security: 'Ààbò',
      projects: 'Àwọn Iṣẹ́ Ṣíṣe',
      countdown: 'Ọjọ́ Títí Ìṣẹ̀lẹ̀',
      newsItem1: 'Ìsìn Ọjọ́ Àìkú: Wá sí ìjọ́sìn láàárín ọ̀sẹ̀ yìí',
      newsItem2: 'Ìpàdé Àdúrà: Ọjọ́rú ní aago mẹ́fà àárọ̀',
      newsItem3: 'Àpéjọ Àwọn Ọ̀dọ́: Forúkọsílẹ̀ fún ìṣẹ̀lẹ̀ ọdọọdún',
      spotlight: 'Ẹ̀rí Ọmọ Ìjọ',
      testimony: '"Nípasẹ̀ ìgbàgbọ́ àti àdúrà, Arábìnrin A. rí iṣẹ́ lẹ́yìn oṣù mẹ́fà."',
    }
  };

  const t = translations[language];

  const quickActionTiles = [
    { icon: DollarSign, title: t.payTithes, desc: t.payDesc, link: '/stewardship', color: 'bg-primary' },
    { icon: MessageSquare, title: t.submitFeedback, desc: t.feedbackDesc, link: '/contact', color: 'bg-secondary' },
    { icon: Users, title: t.youthChurch, desc: t.youthDesc, link: '/services', color: 'bg-accent' },
    { icon: Info, title: t.aboutUs, desc: t.aboutDesc, link: '/about', color: 'bg-primary' },
    { icon: Calendar, title: t.programs, desc: t.programsDesc, link: '/services', color: 'bg-secondary' },
    { icon: Heart, title: t.community, desc: t.communityDesc, link: '/services', color: 'bg-accent' },
  ];

  const communityData = [
    { name: t.evangelism, value: 3, color: 'bg-primary' },
    { name: t.sanitation, value: 5, color: 'bg-secondary' },
    { name: t.security, value: 2, color: 'bg-accent' },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t.welcome}</h1>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Quick Action Tiles */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">{t.quickActions}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActionTiles.map((tile, index) => (
              <Link key={index} to={tile.link}>
                <Card className="card-interactive cursor-pointer h-full hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${tile.color} text-white p-3 rounded-lg`}>
                        <tile.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{tile.title}</h3>
                        <p className="text-sm text-muted-foreground">{tile.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Community Impact Widget */}
          <Card className="animate-scale-in">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>{t.communityImpact}</CardTitle>
              </div>
              <CardDescription>{t.projects}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                      <span className="text-sm font-bold text-foreground">{item.value}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${(item.value / 6) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Youth Event Countdown */}
          <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <CardTitle>{t.upcomingEvent}</CardTitle>
              </div>
              <CardDescription>{t.countdown}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-6xl font-bold text-primary mb-4">45</div>
                <p className="text-lg text-muted-foreground mb-6">Days Until Youth Convention 2025</p>
                <Link to="/services">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News & Announcements */}
        <Card className="mb-8 animate-fade-in-up">
          <CardHeader>
            <CardTitle>{t.recentNews}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[t.newsItem1, t.newsItem2, t.newsItem3].map((news, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors cursor-pointer"
                >
                  <p className="text-foreground">{news}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Member Spotlight */}
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>{t.spotlight}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-primary-light p-6 rounded-lg border-l-4 border-primary">
              <p className="text-foreground italic">{t.testimony}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
