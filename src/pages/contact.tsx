import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface ContactProps {
  language: 'en' | 'yo';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const translations = {
    en: {
      title: 'Contact & Engagement',
      subtitle: 'Get in touch with us',
      getInTouch: 'Get In Touch',
      formDesc: 'Fill out the form and we will get back to you shortly',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      category: 'Inquiry Category',
      selectCategory: 'Select a category',
      prayer: 'Prayer Request',
      general: 'General Inquiry',
      feedback: 'Feedback',
      counseling: 'Counseling',
      partnership: 'Partnership',
      message: 'Your Message',
      submit: 'Send Message',
      contactInfo: 'Contact Information',
      address: 'Alagomeji, Yaba, Lagos, Nigeria',
      openHours: 'Office Hours',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
      saturdayHours: 'Saturday: 10:00 AM - 2:00 PM',
      sundayHours: 'Sunday: Services Only',
      location: 'Our Location',
      poll: 'Community Voice',
      pollQuestion: 'What should be our community priority this quarter?',
      option1: 'Youth Programs',
      option2: 'Health Services',
      option3: 'Education Support',
      option4: 'Infrastructure',
      vote: 'Submit Vote',
    },
    yo: {
      title: 'Ìbánisọ̀rọ̀ & Ìdàpọ̀',
      subtitle: 'Bá wa sọ̀rọ̀',
      getInTouch: 'Bá Wa Sọ̀rọ̀',
      formDesc: 'Kún fọ́ọ̀mù yìí, a óò sì dá ọ lóhùn láìpẹ́',
      name: 'Orúkọ Kíkún',
      email: 'Àdírẹ́ẹ̀sì Ímeèlì',
      phone: 'Nọ́mbà Fóònù',
      category: 'Irú Ìbéèrè',
      selectCategory: 'Yan irú ìbéèrè',
      prayer: 'Ìbéèrè Àdúrà',
      general: 'Ìbéèrè Gbogbogbo',
      feedback: 'Èrò',
      counseling: 'Ìmọ̀ràn',
      partnership: 'Ìfọwọ́sowọ́pọ̀',
      message: 'Iṣẹ́ Rẹ',
      submit: 'Fi Ránṣẹ́',
      contactInfo: 'Àlàyé Ìbánisọ̀rọ̀',
      address: 'Alagomeji, Yaba, Lagos, Nigeria',
      openHours: 'Àkókò Iṣẹ́',
      hours: 'Ọjọ́ Ajé - Ọjọ́ Ẹtì: 9:00 AM - 5:00 PM',
      saturdayHours: 'Ọjọ́ Àbámẹ́ta: 10:00 AM - 2:00 PM',
      sundayHours: 'Ọjọ́ Àìkú: Ìsìn nìkan',
      location: 'Ibùdó Wa',
      poll: 'Ohùn Àwùjọ',
      pollQuestion: 'Kí ló yẹ kí ó jẹ́ ohun pàtàkì àwùjọ wa ní ìdámẹ́rin yìí?',
      option1: 'Àwọn Ètò Àwọn Ọ̀dọ́',
      option2: 'Àwọn Ìṣẹ́ Ìlera',
      option3: 'Ìtìlẹ́yìn Ẹ̀kọ́',
      option4: 'Ohun Èlò',
      vote: 'Fi Ìbò Sílẹ̀',
    }
  };

  const t = translations[language];

  // Build a Google Maps embed URL from the current language’s address
  const mapSrc = useMemo(() => {
    const q = encodeURIComponent(t.address);
    // `output=embed` gives a lightweight, interactive map without needing an API key
    return `https://www.google.com/maps?q=${q}&output=embed`;
  }, [t.address]);

  const mapsLink = useMemo(() => {
    const q = encodeURIComponent(t.address);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }, [t.address]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', category: '', message: '' });
  };

  const handleVote = () => {
    toast.success('Thank you for your vote!');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle>{t.getInTouch}</CardTitle>
              <CardDescription>{t.formDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.name} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.email} *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">{t.category} *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder={t.selectCategory} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="prayer">{t.prayer}</SelectItem>
                      <SelectItem value="general">{t.general}</SelectItem>
                      <SelectItem value="feedback">{t.feedback}</SelectItem>
                      <SelectItem value="counseling">{t.counseling}</SelectItem>
                      <SelectItem value="partnership">{t.partnership}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.message} *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {t.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Interactive Elements */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">{t.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+234 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@cacyaba.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{t.openHours}</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{t.hours}</p>
                      <p>{t.saturdayHours}</p>
                      <p>{t.sundayHours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Map (real embed) */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{t.location}</CardTitle>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline underline-offset-4 text-primary hover:opacity-80"
                >
                  Open in Google Maps
                </a>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-hidden rounded-lg border">
                  {/* 16:9 responsive frame */}
                  <div className="pt-[56.25%]" />
                  <iframe
                    title={`Map of ${t.address}`}
                    src={mapSrc}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Community Poll */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>{t.poll}</CardTitle>
                <CardDescription>{t.pollQuestion}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[t.option1, t.option2, t.option3, t.option4].map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/70 cursor-pointer transition-colors"
                    >
                      <input type="radio" name="poll" className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{option}</span>
                    </label>
                  ))}
                  <Button onClick={handleVote} className="w-full bg-accent text-accent-foreground">
                    {t.vote}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
