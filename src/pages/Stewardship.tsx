import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, TrendingUp, Calendar, Download } from 'lucide-react';
import { toast } from 'sonner';

interface StewardshipProps {
  language: 'en' | 'yo';
}

const Stewardship = ({ language }: StewardshipProps) => {
  const [amount, setAmount] = useState('');
  const [offeringType, setOfferingType] = useState('');

  const translations = {
    en: {
      title: 'Stewardship & Transparency Portal',
      subtitle: 'Building trust through transparency',
      dashboard: 'Dashboard Overview',
      members: 'Registered Members',
      impact: 'Community Impact',
      activities: 'Outstanding Activities',
      giving: 'Digital Giving',
      givingDesc: 'Make your offerings securely',
      amount: 'Amount',
      type: 'Offering Type',
      selectType: 'Select offering type',
      tithes: 'Tithes',
      offering: 'Sunday Offering',
      seed: 'Seed of Blessings',
      vows: 'Vows & Pledges',
      thanksgiving: 'Special Thanksgiving',
      submit: 'Submit Payment',
      receipt: 'Generate Receipt',
      projectTitle: 'Active Community Projects',
      project1: 'Community Outreach Program',
      project2: 'Youth Leadership Training',
      project3: 'Church Building Renovation',
      upcoming: 'Upcoming Events',
      event1: 'Annual Harvest Thanksgiving - March 15',
      event2: 'Youth Convention 2025 - April 20-22',
      event3: 'Leadership Summit - May 10',
    },
    yo: {
      title: 'Ìṣàkóso & Ìfihàn Kedere',
      subtitle: 'Ìdágbásókè ìgbẹ́kẹ̀lé nípasẹ̀ ìfihàn kedere',
      dashboard: 'Àkópọ̀ Dashboard',
      members: 'Àwọn Ọmọ Ìjọ Tó Forúkọsílẹ̀',
      impact: 'Ipa Àwùjọ',
      activities: 'Àwọn Ìṣẹ̀lẹ̀ Tó Ńbọ̀',
      giving: 'Ìfúnni Lórí Ẹ̀rọ',
      givingDesc: 'Fi ẹ̀bùn rẹ sílẹ̀ láìléwu',
      amount: 'Iye Owó',
      type: 'Irú Ẹ̀bùn',
      selectType: 'Yan irú ẹ̀bùn',
      tithes: 'Ìdámẹ́wàá',
      offering: 'Ẹ̀bùn Ọjọ́ Àìkú',
      seed: 'Seed of Blessings',
      vows: 'Ẹ̀jẹ́ & Ìlérí',
      thanksgiving: 'Ọpẹ́ Pàtàkì',
      submit: 'Fi Owó Ránṣẹ́',
      receipt: 'Gba Ìwé Ẹ̀rí',
      projectTitle: 'Àwọn Iṣẹ́ Àwùjọ Ṣíṣe',
      project1: 'Ètò Ìtọ́jú Àwùjọ',
      project2: 'Ìkọ́ni Ìdáríi Àwọn Ọ̀dọ́',
      project3: 'Àtúnṣe Ilé Ìjọ',
      upcoming: 'Àwọn Ìṣẹ̀lẹ̀ Tó Ńbọ̀',
      event1: 'Ọpẹ́ Ìkórè Ọdọọdún - Oṣù Kẹta Ọjọ́ 15',
      event2: 'Àpéjọ Àwọn Ọ̀dọ́ 2025 - Oṣù Kẹrin Ọjọ́ 20-22',
      event3: 'Àpéjọ Aṣáájú - Oṣù Karùn Ọjọ́ 10',
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !offeringType) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Payment processing... (Demo mode)');
  };

  const handleGenerateReceipt = () => {
    toast.success('Receipt generated successfully! (Demo mode)');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.members}</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.impact}</p>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.activities}</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Digital Giving Form */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle>{t.giving}</CardTitle>
              <CardDescription>{t.givingDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">{t.amount}</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">{t.type}</Label>
                  <Select value={offeringType} onValueChange={setOfferingType}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder={t.selectType} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="tithes">{t.tithes}</SelectItem>
                      <SelectItem value="offering">{t.offering}</SelectItem>
                      <SelectItem value="seed">{t.seed}</SelectItem>
                      <SelectItem value="vows">{t.vows}</SelectItem>
                      <SelectItem value="thanksgiving">{t.thanksgiving}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3 pt-4">
                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    {t.submit}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full"
                    onClick={handleGenerateReceipt}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t.receipt}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Community Projects & Events */}
          <div className="space-y-6">
            <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>{t.projectTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary-light rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-foreground mb-1">{t.project1}</h4>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">75% Complete</p>
                  </div>

                  <div className="p-4 bg-secondary-light rounded-lg border-l-4 border-secondary">
                    <h4 className="font-semibold text-foreground mb-1">{t.project2}</h4>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">60% Complete</p>
                  </div>

                  <div className="p-4 bg-accent-light rounded-lg border-l-4 border-accent">
                    <h4 className="font-semibold text-foreground mb-1">{t.project3}</h4>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '40%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">40% Complete</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>{t.upcoming}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[t.event1, t.event2, t.event3].map((event, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <p className="text-sm text-foreground">{event}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stewardship;
