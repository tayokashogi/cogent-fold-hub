// src/pages/ministries.tsx
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mail, Phone, Search, Info } from "lucide-react";

type Lang = "en" | "yo";
interface MinistriesProps {
  language: Lang;
}

type Ministry = {
  name: string;
  leader?: string;        // HOD or coordinator
  email?: string;
  phone?: string;
  meets?: string;         // e.g. "Wed 6pm", "Monthly 2nd Sat"
  description?: string;
  photoUrl?: string;      // optional banner/cover image
  tags?: string[];        // "worship", "youth", "outreach", "care", etc.
  active?: boolean;
  order?: number;
};

const SAMPLE_MINISTRIES: Ministry[] = [
  {
    name: "Choir",
    leader: "Mary Kay",
    email: "choir@cacyaba.org",
    meets: "Sat 4:00–6:00 PM",
    description: "Leading worship in music and praise.",
    tags: ["worship", "music"],
    photoUrl: "/images/ministries/choir.jpg",
    active: true,
    order: 1,
  },
  {
    name: "Ushering",
    leader: "Tunde A.",
    description: "Hospitality, order, and care during services.",
    tags: ["hospitality", "service"],
    active: true,
    order: 2,
  },
  {
    name: "Children",
    leader: "Bisi O.",
    description: "Safe, fun, Bible-centered teaching for kids.",
    tags: ["kids", "teaching", "care"],
    active: true,
    order: 3,
  },
  {
    name: "Media",
    leader: "Kunle I.",
    description: "Projection, livestream, sound and visuals.",
    tags: ["media", "tech"],
    active: true,
    order: 4,
  },
  {
    name: "Prayer",
    description: "Intercession and prayer coverage for church and city.",
    tags: ["prayer", "spiritual"],
    active: true,
    order: 5,
  },
  {
    name: "Youth",
    description: "Equipping teens and young adults to follow Jesus.",
    tags: ["youth", "discipleship"],
    active: true,
    order: 6,
  },
];

const T = {
  en: {
    title: "Ministries",
    subtitle: "Find a place to belong and serve",
    search: "Search ministries…",
    tabs: {
      all: "All",
      worship: "Worship",
      care: "Care",
      outreach: "Outreach",
      teaching: "Teaching",
      service: "Service",
      youth: "Youth",
      media: "Media/Tech",
      prayer: "Prayer",
    },
    contact: "Contact",
    leader: "Leader",
    meets: "Meets",
    noResults: "No ministries match your search.",
    joinCta: "I want to serve",
  },
  yo: {
    title: "Àwọn Ẹ̀ka Ìṣẹ́",
    subtitle: "Wa ibi tí o lè jẹ́ tiẹ̀ kí o sì ṣe ìránṣẹ́",
    search: "Wá ẹ̀ka ìṣẹ́…",
    tabs: {
      all: "Gbogbo",
      worship: "Ìjọsìn",
      care: "Ìtọju",
      outreach: "Ìtanrànsí",
      teaching: "Ìkọ́ni",
      service: "Ìránṣẹ́",
      youth: "Àwọn Ọdọ́",
      media: "Mídíà/Ẹ̀rọ",
      prayer: "Àdúrà",
    },
    contact: "Bá wa sọ̀rọ̀",
    leader: "Olórí",
    meets: "Àkókò Pàdé",
    noResults: "Kò sí ẹ̀ka tó bá ìwádìí rẹ mu.",
    joinCta: "Mo fẹ́ ṣèrànlọ́wọ́",
  },
};

const TAG_MAP: Record<string, (m: Ministry) => boolean> = {
  worship: (m) => hasTag(m, "worship") || hasTag(m, "music"),
  care: (m) => hasTag(m, "care"),
  outreach: (m) => hasTag(m, "outreach") || hasTag(m, "evangelism"),
  teaching: (m) => hasTag(m, "teaching") || hasTag(m, "discipleship"),
  service: (m) => hasTag(m, "service") || hasTag(m, "hospitality"),
  youth: (m) => hasTag(m, "youth") || hasTag(m, "teens"),
  media: (m) => hasTag(m, "media") || hasTag(m, "tech") || hasTag(m, "production"),
  prayer: (m) => hasTag(m, "prayer") || hasTag(m, "spiritual"),
};

function hasTag(m: Ministry, t: string) {
  return (m.tags ?? []).map((x) => x.toLowerCase()).includes(t.toLowerCase());
}

export default function Ministries({ language }: MinistriesProps) {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState<keyof typeof TAG_MAP | "all">("all");
  const t = T[language];

  const ministries = useMemo(() => {
    const norm = (s: string) => s.toLowerCase().trim();
    const qstr = norm(q);

    const actives = SAMPLE_MINISTRIES.filter((m) => m.active !== false);
    const filtered = actives
      .filter((m) => {
        if (tab === "all") return true;
        const fn = TAG_MAP[tab];
        return fn ? fn(m) : true;
      })
      .filter((m) => {
        if (!qstr) return true;
        const hay = [m.name, m.leader ?? "", m.description ?? "", (m.tags ?? []).join(" ")].join(" ").toLowerCase();
        return hay.includes(qstr);
      })
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name));

    return filtered;
  }, [q, tab]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t.title}</h1>
          <p className="text-muted-foreground mt-1">{t.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-6">
          <div className="relative max-w-xl w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.search}
              className="pl-9"
            />
          </div>

          <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full md:w-auto">
            <TabsList className="flex flex-wrap">
              <TabsTrigger value="all">{t.tabs.all}</TabsTrigger>
              <TabsTrigger value="worship">{t.tabs.worship}</TabsTrigger>
              <TabsTrigger value="care">{t.tabs.care}</TabsTrigger>
              <TabsTrigger value="outreach">{t.tabs.outreach}</TabsTrigger>
              <TabsTrigger value="teaching">{t.tabs.teaching}</TabsTrigger>
              <TabsTrigger value="service">{t.tabs.service}</TabsTrigger>
              <TabsTrigger value="youth">{t.tabs.youth}</TabsTrigger>
              <TabsTrigger value="media">{t.tabs.media}</TabsTrigger>
              <TabsTrigger value="prayer">{t.tabs.prayer}</TabsTrigger>
            </TabsList>

            {/* We only use Tabs for the list UI control; content is the grid below */}
            <TabsContent value={tab} />
          </Tabs>
        </div>

        {/* Grid */}
        {ministries.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ministries.map((m) => (
              <MinistryCard key={m.name} m={m} t={t} />
            ))}
          </div>
        ) : (
          <Card className="bg-card">
            <CardContent className="py-10 text-center text-muted-foreground">
              {t.noResults}
            </CardContent>
          </Card>
        )}

        {/* Invite to serve */}
        <Card className="mt-8 bg-gradient-to-br from-secondary/10 via-card to-accent/5 border border-primary/10">
          <CardContent className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Ready to jump in?</p>
                <p className="text-sm text-muted-foreground">
                  Tell us where you’d like to serve or we’ll help you find a ministry that fits.
                </p>
              </div>
            </div>
            <Button asChild className="bg-accent text-accent-foreground">
              <a href="/en/stewardship"> {t.joinCta} </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* ---------- Presentational card ---------- */

function MinistryCard({ m, t }: { m: Ministry; t: typeof T["en"] }) {
  return (
    <Card className="card-interactive overflow-hidden">
      {m.photoUrl ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={m.photoUrl} className="h-36 w-full object-cover" />
      ) : null}

      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{m.name}</CardTitle>
        {m.tags?.length ? (
          <div className="flex flex-wrap gap-1 mt-2">
            {m.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="capitalize">
                {tag}
              </Badge>
            ))}
            {m.tags.length > 4 ? <Badge variant="outline">+{m.tags.length - 4}</Badge> : null}
          </div>
        ) : null}
      </CardHeader>

      <CardContent className="space-y-3">
        {m.description ? (
          <p className="text-sm text-muted-foreground">{m.description}</p>
        ) : null}

        <ul className="text-sm space-y-1">
          {m.leader ? (
            <li>
              <span className="font-medium">{t.leader}:</span> {m.leader}
            </li>
          ) : null}
          {m.meets ? (
            <li>
              <span className="font-medium">{t.meets}:</span> {m.meets}
            </li>
          ) : null}
        </ul>

        {(m.email || m.phone) && (
          <div className="flex items-center gap-2 pt-1">
            {m.email && (
              <Button variant="outline" size="sm" asChild>
                <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
            )}
            {m.phone && (
              <Button variant="outline" size="sm" asChild>
                <a href={`tel:${(m.phone || "").replace(/\s+/g, "")}`} className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
