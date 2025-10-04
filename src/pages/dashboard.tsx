import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  Clock,
  MapPin,
  Megaphone,
  ListChecks,
  HeartHandshake,
  Users,
  MessageSquare,
} from "lucide-react";

interface DashboardProps {
  language: "en" | "yo";
}

export default function Dashboard({ language }: DashboardProps) {
  const t = translations[language];

  const thisWeek = [
    { title: t.hourOfDivine, day: t.monday, time: "06:00–07:00", mode: t.physicalOnline },
    { title: t.oneHourWithJesus, day: t.wednesday, time: "06:00–07:00", mode: t.physicalOnline },
    { title: t.bibleStudy, day: t.wednesday, time: "18:00–20:00", mode: t.physicalOnline },
    { title: t.youthFellowship, day: t.thursday, time: "18:00–20:00", mode: t.physicalOnline },
  ];

  const announcements = [
    { title: t.ann1Title, body: t.ann1Body },
    { title: t.ann2Title, body: t.ann2Body },
  ];

  const quickActions = [
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: t.payTithes,
      desc: t.payTithesDesc,
      to: "/stewardship",
      tone: "from-violet-50 to-white",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: t.feedback,
      desc: t.feedbackDesc,
      to: "/contact",
      tone: "from-yellow-50 to-white",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: t.youth,
      desc: t.youthDesc,
      to: "/services#youth",
      tone: "from-yellow-50 to-white",
    },
    {
      icon: <InfoIcon />,
      title: t.about,
      desc: t.aboutDesc,
      to: "/about",
      tone: "from-violet-50 to-white",
    },
    {
      icon: <CalendarDays className="h-5 w-5" />,
      title: t.programs,
      desc: t.programsDesc,
      to: "/programmes",
      tone: "from-yellow-50 to-white",
    },
    {
      icon: <HeartIcon />,
      title: t.outreach,
      desc: t.outreachDesc,
      to: "/services#outreach",
      tone: "from-yellow-50 to-white",
    },
  ];

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* 1) WELCOME HERO */}
        <section className="mb-8">
          <div className="rounded-2xl border bg-gradient-to-r from-primary/10 via-background to-primary/5 p-6 md:p-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.eyebrow}</p>
            <h1 className="mt-1 text-3xl md:text-4xl font-bold">{t.welcomeTitle}</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">{t.welcomeSub}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/programmes">
                <Button className="gap-2">
                  <CalendarDays className="h-5 w-5" /> {t.viewProgrammes}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" className="gap-2">
                  <MapPin className="h-5 w-5" /> {t.planVisit}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2) THIS WEEK */}
        <section className="mb-8">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">{t.thisWeekAt}</h2>
            <Link to="/programmes" className="text-primary font-medium">
              {t.seeAll}
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
                    <CalendarDays className="h-4 w-4" /> {item.day}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {item.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Megaphone className="h-4 w-4" /> {item.mode}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 3) ANNOUNCEMENTS */}
        <section className="mb-10">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-semibold">{t.announcements}</h2>
            <Link to="/services" className="text-primary font-medium">
              {t.more}
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {announcements.map((a, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Megaphone className="h-5 w-5 text-primary" /> {a.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{a.body}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 4) QUICK ACTIONS (moved below) */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">{t.quickActions}</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickActions.map((qa, i) => (
              <Link key={i} to={qa.to} className="group">
                <Card className="transition-all hover:translate-y-[-2px]">
                  <CardContent className="p-5">
                    <div className={`rounded-xl inline-flex p-3 mb-3 bg-gradient-to-br ${qa.tone}`}>
                      {qa.icon}
                    </div>
                    <div className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {qa.title}
                    </div>
                    <div className="text-sm text-muted-foreground">{qa.desc}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 5) OPTIONAL: TASKS / CHECKLIST */}
        <section className="mb-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" /> {t.newHere}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>{t.checklist1}</li>
                <li>{t.checklist2}</li>
                <li>{t.checklist3}</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

/** tiny icon fallbacks (so you don't need extra imports) */
function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1010 10A10.012 10.012 0 0012 2zm.75 15h-1.5v-6h1.5zm0-8h-1.5V7h1.5z" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.364-4.735-9.9-9.1C.347 9.215 2.245 6 5.4 6a5.1 5.1 0 014.6 2.81A5.1 5.1 0 0114.6 6c3.155 0 5.053 3.215 3.3 5.9C19.364 16.265 12 21 12 21z" />
    </svg>
  );
}

const translations = {
  en: {
    eyebrow: "Welcome",
    welcomeTitle: "Good to see you at CAC Oke-Ibukun",
    welcomeSub:
      "Here’s what’s happening this week. Join in-person at Alagomeji or online.",
    viewProgrammes: "View Programmes",
    planVisit: "Plan Your Visit",

    thisWeekAt: "This Week at CAC Oke-Ibukun",
    seeAll: "See all programmes",
    joinUs: "You are welcome—come with friends and family.",

    announcements: "Announcements",
    more: "More",
    ann1Title: "Workers’ meeting – Sunday 6:15am",
    ann1Body:
      "All workers should assemble in the main auditorium this Sunday by 6:15am.",
    ann2Title: "Mid-Week Communion Service",
    ann2Body:
      "Join us for Bible Study and communion this Wednesday evening.",

    quickActions: "Quick Actions",
    payTithes: "Pay Tithes & Offerings",
    payTithesDesc: "Secure online giving",
    feedback: "Submit Feedback",
    feedbackDesc: "Share your thoughts",
    about: "About Us",
    aboutDesc: "Learn our story",
    programs: "Programs",
    programsDesc: "View all programs",
    outreach: "Health & Community",
    outreachDesc: "Outreach services",

    // Needed for Youth quick action
    youth: "Youth Church",
    youthDesc: "Young adults ministry",

    // This week
    hourOfDivine: "Hour of Divine Intervention",
    oneHourWithJesus: "One Hour with Jesus",
    bibleStudy: "Bible Study",
    youthFellowship: "Youth Fellowship",
    physicalOnline: "Physical & Online",
    monday: "Monday",
    wednesday: "Wednesday",
    thursday: "Thursday",

    newHere: "New here? Start here",
    checklist1: "Plan your visit and check service times.",
    checklist2: "Meet a pastor or join a small group.",
    checklist3: "Explore ministries and find a place to serve.",
  },
  yo: {
    eyebrow: "Ẹ káàbọ̀",
    welcomeTitle: "A yọ̀ yín lóǹà ní CAC Òkè-Ibùkún",
    welcomeSub:
      "Ẹ wo ètò ọ̀sẹ̀ yìí. Ẹ lè darapọ̀ níbòmíì ní Alágomeji tàbí lórí ayélujára.",
    viewProgrammes: "Wo Ètò Ìjọsìn",
    planVisit: "Ṣètò Ìbẹ̀wò Rẹ",

    thisWeekAt: "Ètò ọ̀sẹ̀ yìí ní CAC Òkè-Ibùkún",
    seeAll: "Wo gbogbo ètò",
    joinUs: "Ẹ wá kó ìdílé àti ọ̀rẹ́ wá—ẹ darapọ̀ mọ́ wa.",

    announcements: "Ìkìlọ̀/Ìkéde",
    more: "Diẹ̀ síi",
    ann1Title: "Ìpàdé àwọn òṣìṣẹ́ – Àìkú 6:15 àárọ̀",
    ann1Body:
      "Gbogbo òṣìṣẹ́ kí wọ́n péjọ ní gbọ́ngàn ńlá ní 6:15 àárọ̀.",
    ann2Title: "Ìjọsìn Àárọ̀ ọ̀sẹ̀ – Kọ́muníọ́nì",
    ann2Body:
      "Ẹ darapọ̀ fún Ìkẹ́kọ̀ọ́ Bíbélì àti kọ́muníọ́nì ní Ọjọ́rú alẹ́ yìí.",

    quickActions: "Ìṣe kíákíá",
    payTithes: "Ìjẹ́sìn àti Ẹ̀bọ",
    payTithesDesc: "Ìsanwó onlàìnì tó dáàbò bo",
    feedback: "Fìdíìbákà",
    feedbackDesc: "Pín èrò yín",
    about: "Nípa Wa",
    aboutDesc: "Kọ́ ẹ̀kúnrẹ́rẹ́ ìtàn wa",
    programs: "Ètò",
    programsDesc: "Wo gbogbo ètò",
    outreach: "Ìlera & Àwùjọ",
    outreachDesc: "Ìrànlọ́wọ́ sí àwùjọ",

    // Needed for Youth quick action
    youth: "Ìjọ Ọ̀dọ́",
    youthDesc: "Iṣẹ́ ìránṣẹ́ àwọn ọdọ",

    // This week
    hourOfDivine: "Wákàtí Ìrànlọ́wọ́ Ọlọ́run",
    oneHourWithJesus: "Wákàtí Kan Pẹ̀lú Jesu",
    bibleStudy: "Ìkẹ́kọ̀ọ́ Bíbélì",
    youthFellowship: "Ìpàdé Ọ̀dọ́",
    physicalOnline: "Níbi gangan & Lórí ayélujára",
    monday: "Ọjọ́ Ajé",
    wednesday: "Ọjọ́rú",
    thursday: "Ọjọ́bọ",

    newHere: "Ẹ jẹ́ tuntun síbí? Bẹ̀rẹ̀ níbí",
    checklist1: "Ṣàyẹ̀wò àkókò ìjọsìn kí ẹ sì ṣètò ìbẹ̀wò.",
    checklist2: "Pade pàsítọ̀ tàbí darapọ̀ mọ́ ẹgbẹ́ kékeré.",
    checklist3: "Ṣàwárí iṣẹ́ ìjọ kí ẹ sì wá ibi tí ẹ̀yin fẹ́ ṣiṣẹ́.",
  },
} as const;
