// New Home Page (Landing) – drop-in replacement for src/pages/home.tsx
// Stack: React + Tailwind + shadcn/ui

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CalendarDays,
  Clock,
  MapPin,
  Play,
  HeartHandshake,
  ArrowRight,
  Music,
  Users,
  Book,
  Radio,
} from 'lucide-react';
import worshipScene from '@/assets/worship-scene.jpg';
import cacLogo from '@/assets/cac-logo.svg';
// Optional: if you added schedule.ts from earlier
// import { schedule } from '@/data/schedule';

interface HomeProps {
  language: 'en' | 'yo';
  onLanguageSelect?: (lang: 'en' | 'yo') => void; // <-- added
}

export default function Home({ language, onLanguageSelect }: HomeProps) {
  const t = translations[language];

  // Pull top few items to showcase this week (fallback if schedule not wired)
  const thisWeek = [
    { title: t.hourOfDivine, when: t.monday, time: '06:00–07:00', mode: t.physicalOnline },
    { title: t.oneHourWithJesus, when: t.wednesday, time: '06:00–07:00', mode: t.physicalOnline },
    { title: t.bibleStudy, when: t.wednesday, time: '18:00–20:00', mode: t.physicalOnline },
    { title: t.youthFellowship, when: t.thursday, time: '18:00–20:00', mode: t.physicalOnline },
  ];

  const ministries = [
    { icon: Music, name: t.choir, desc: t.choirDesc },
    { icon: Users, name: t.youth, desc: t.youthDesc },
    { icon: Book, name: t.teaching, desc: t.teachingDesc },
    { icon: HeartHandshake, name: t.evangelism, desc: t.evangelismDesc },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={worshipScene} alt="Worship" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.25),transparent_35%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          {/* top row: logo + optional mini language switch */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src={cacLogo} alt="CAC Logo" className="h-12 w-12" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {t.churchFull}
              </span>
            </div>

            {onLanguageSelect && (
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  variant={language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onLanguageSelect('en')}
                >
                  EN
                </Button>
                <Button
                  variant={language === 'yo' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onLanguageSelect('yo')}
                >
                  YO
                </Button>
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t.heroLine1}
            <span className="block text-primary">{t.heroLine2}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.heroSub}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/programmes">
              <Button size="lg" className="gap-2">
                <CalendarDays className="h-5 w-5" /> {t.viewProgrammes}
              </Button>
            </Link>
            <Link to="/stewardship">
              <Button size="lg" variant="secondary" className="gap-2">
                <HeartHandshake className="h-5 w-5" /> {t.giveOnline}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="ghost" className="gap-2">
                <MapPin className="h-5 w-5" /> {t.planVisit}
              </Button>
            </Link>
          </div>

          {/* Quick badges */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            <BadgeItem icon={<Clock className="h-4 w-4" />} text={`${t.sunday}: 7:00am • 9:45am`} />
            <BadgeItem icon={<MapPin className="h-4 w-4" />} text={t.address} />
            <BadgeItem icon={<Radio className="h-4 w-4" />} text={t.physicalOnline} />
          </div>

          {/* mobile mini language switch */}
          {onLanguageSelect && (
            <div className="mt-6 sm:hidden flex gap-2">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onLanguageSelect('en')}
              >
                EN
              </Button>
              <Button
                variant={language === 'yo' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onLanguageSelect('yo')}
              >
                YO
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* THIS WEEK */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t.thisWeekAt}</h2>
            <p className="text-muted-foreground">{t.joinUs}</p>
          </div>
          <Link to="/programmes" className="text-primary inline-flex items-center gap-1 font-medium">
            {t.seeAll} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {thisWeek.map((item, i) => (
            <Card key={i} className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-base leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> {item.when}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {item.time}
                </div>
                <div className="flex items-center gap-2">
                  <Radio className="h-4 w-4" /> {item.mode}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* LATEST SERMON */}
      <section className="bg-secondary/20 border-y border-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">{t.latestSermon}</h2>
              <p className="mt-2 text-muted-foreground">{t.latestSermonSub}</p>
              <div className="mt-6 flex gap-3">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <Button className="gap-2">
                    <Play className="h-5 w-5" /> {t.watchNow}
                  </Button>
                </a>
                <Link to="/services">
                  <Button variant="secondary" className="gap-2">
                    {t.moreSermons}
                  </Button>
                </Link>
              </div>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-xl border border-secondary/50"
            >
              <div className="relative aspect-video bg-black/60">
                {/* Replace with real thumbnail */}
                <img
                  src={worshipScene}
                  alt="Sermon"
                  className="h-full w-full object-cover opacity-70 group-hover:opacity-90 transition"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-full bg-white/90 p-4 shadow">
                    <Play className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MINISTRIES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{t.ourMinistries}</h2>
          <p className="text-muted-foreground">{t.ministrySub}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ministries.map((m, i) => (
            <Card key={i} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <m.icon className="h-5 w-5 text-primary" /> {m.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{m.desc}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/services" className="inline-flex items-center gap-1 text-primary font-medium">
            {t.exploreDepartments} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* VISIT CTA STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
          <StripItem icon={<MapPin className="h-5 w-5" />} title={t.visitUs} text={t.address} />
          <StripItem
            icon={<Clock className="h-5 w-5" />}
            title={t.serviceTimes}
            text={`${t.sunday}: 7:00am · 9:45am`}
          />
          <StripItem
            icon={<HeartHandshake className="h-5 w-5" />}
            title={t.giveTitle}
            text={t.giveText}
            cta={<Link to="/stewardship" className="underline hover:opacity-90">{t.giveOnline}</Link>}
          />
        </div>
      </section>
    </main>
  );
}

function BadgeItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-background/80 px-3 py-2 backdrop-blur">
      {icon} <span className="text-foreground/90">{text}</span>
    </div>
  );
}

function StripItem({
  icon,
  title,
  text,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  cta?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm">{text}</div>
        {cta && <div className="mt-1 text-sm">{cta}</div>}
      </div>
    </div>
  );
}

const translations = {
  en: {
    churchFull: 'Christ Apostolic Church, Oke-Ibukun — Alagomeji, Yaba',
    heroLine1: 'One Fold,',
    heroLine2: 'One Shepherd.',
    heroSub:
      'A worshipping community in Lagos proclaiming Christ in Yoruba and English—building strong families and discipled believers.',
    viewProgrammes: 'View Programmes',
    giveOnline: 'Give Online',
    planVisit: 'Plan Your Visit',
    sunday: 'Sunday',
    monday: 'Monday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    address: '13 Odewale Street, Alagomeji, Yaba, Lagos',
    physicalOnline: 'Physical & Online',

    thisWeekAt: 'This Week at CAC Oke-Ibukun',
    joinUs: 'You are welcome—come with friends and family.',
    seeAll: 'See all programmes',

    hourOfDivine: 'Hour of Divine Intervention',
    oneHourWithJesus: 'One Hour with Jesus',
    bibleStudy: 'Bible Study',
    youthFellowship: 'Youth Fellowship',

    latestSermon: 'Latest Sermon',
    latestSermonSub: 'Catch up on the Word from last Sunday or midweek service.',
    watchNow: 'Watch now',
    moreSermons: 'More messages',

    ourMinistries: 'Our Ministries',
    ministrySub: 'There is a place for everyone—find a community and serve.',
    choir: 'Choir',
    choirDesc: 'Leading worship in songs and psalms',
    youth: 'Youth',
    youthDesc: 'Raising the next generation in Christ',
    teaching: 'Teaching',
    teachingDesc: 'Bible study and discipleship classes',
    evangelism: 'Evangelism',
    evangelismDesc: 'Taking the Gospel to our community',

    visitUs: 'Visit Us',
    serviceTimes: 'Service Times',
    giveTitle: 'Partner with the work',
    giveText: 'Your giving enables outreach, discipleship, and care.',

    exploreDepartments: 'Explore departments',
  },
  yo: {
    churchFull: 'CAC Òkè-Ibùkún — Alágomeji, Yaba',
    heroLine1: 'Òkan ni Ọ̀dọ́-Àgbà,',
    heroLine2: 'Òkan ni Olùṣọ́-Àgùntàn.',
    heroSub:
      'Ìjọ ìbọ̀rẹ́ ní Èkó, ń kéde Kristi ní Yorùbá àti Gẹ̀ẹ́sì—kí ìdílé le lagbara, kí a sì kọ́ ọmọ-ẹ̀yìn.',
    viewProgrammes: 'Wo Ètò Ìjọsìn',
    giveOnline: 'Ṣe ìránlọ́wọ́ Lórí Ayélujára',
    planVisit: 'Ṣètò Ìbẹ̀wò Rẹ',
    sunday: 'Ọjọ́ Àìkú',
    monday: 'Ọjọ́ Ajé',
    wednesday: 'Ọjọ́rú',
    thursday: 'Ọjọ́bọ',
    address: '13 Odewale Street, Alágomeji, Yaba, Èkó',
    physicalOnline: 'Níbi Gangan & Lórí Ayélujára',

    thisWeekAt: 'Ètò ọ̀sẹ̀ yìí ní CAC Òkè-Ibùkún',
    joinUs: 'Ẹ wá kó ìdílé àti ọ̀rẹ́ wá—ẹ bẹ̀rẹ̀ níbẹ̀ pẹ̀lú wa.',
    seeAll: 'Wo gbogbo ètò',

    hourOfDivine: 'Wákàtí Ìrànlọ́wọ́ Ọlọ́run',
    oneHourWithJesus: 'Wákàtí Kan Pẹ̀lú Jesu',
    bibleStudy: 'Ìkẹ́kọ̀ọ́ Bíbélì',
    youthFellowship: 'Ìpàdé Ọ̀dọ́',

    latestSermon: 'Ìhìn Rẹ̀ Kínní',
    latestSermonSub: 'Ẹ tún gbọ́ Ọ̀rọ̀ Ọlọ́run látọ́jọ́ ìjọ́sìn tó kọjá.',
    watchNow: 'Wo báyìí',
    moreSermons: 'Ìhìn míì',

    ourMinistries: 'Àwọn Ẹ̀ka Ìjọ',
    ministrySub: 'Ibi kan wà fún gbogbo ènìyàn—ẹ darapọ̀ mọ́ ìjọ iṣẹ́.',
    choir: 'Kóírì',
    choirDesc: 'Aṣíwájú ìjọ́sìn ní orin',
    youth: 'Ọ̀dọ́',
    youthDesc: 'Ìtọ́jú ìran tuntun nínú Kristi',
    teaching: 'Ìkọ́ni',
    teachingDesc: 'Ìkẹ́kọ̀ọ́ Bíbélì àti ìkọ́ ọmọ-ẹ̀yìn',
    evangelism: 'Íwàásù',
    evangelismDesc: 'Ìtànkálẹ̀ Ìhìnrere sí àwùjọ',

    visitUs: 'Ẹ bẹ̀ wá',
    serviceTimes: 'Àkókò Ìjọsìn',
    giveTitle: 'Dáríkọ́rọ̀ pọ̀ mọ́ iṣẹ́ Ọlọ́run',
    giveText: 'Ìránlọ́wọ́ yín ń ràn wá lọ́wọ́ fún ìwàásù, ìkọ́ni, àti ìtọ́jú.',

    exploreDepartments: 'Ṣàwárí àwọn ẹ̀ka',
  },
} as const;
