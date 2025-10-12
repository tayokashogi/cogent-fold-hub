// src/pages/leadership.tsx
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Search } from "lucide-react";

type Lang = "en" | "yo";
interface LeadershipProps {
  language: Lang;
}

/** Simple person record; expand as needed */
type Person = {
  name: string;
  role: "pastor" | "elder" | "hod";
  department?: string; // for HODs
  email?: string;
  phone?: string;
  photoUrl?: string; // 1:1 or 3:4 works best
  order?: number; // sorting
  active?: boolean;
};

const SAMPLE_LEADERS: Person[] = [
  // Pastors
  { name: "Rev. John Doe", role: "pastor", email: "john.doe@cacyaba.org", phone: "+234 000 000 0000", order: 1, active: true },
  { name: "Pastor Jane Smith", role: "pastor", email: "jane.smith@cacyaba.org", phone: "+234 000 000 0001", order: 2, active: true },

  // Elders
  { name: "Elder Ade Ola", role: "elder", phone: "+234 000 000 0002", active: true },
  { name: "Elder Grace B.", role: "elder", phone: "+234 000 000 0003", active: true },

  // HODs / Ministries
  { name: "Mary Kay", role: "hod", department: "Choir", email: "choir@cacyaba.org", active: true },
  { name: "Tunde A.", role: "hod", department: "Ushering", active: true },
  { name: "Bisi O.", role: "hod", department: "Children", active: true },
  { name: "Kunle I.", role: "hod", department: "Media", active: true },
];

const T = {
  en: {
    title: "Leadership",
    subtitle: "Meet our pastors, elders, and heads of departments",
    tabs: { pastors: "Pastors", elders: "Elders", hods: "HODs & Ministries" },
    search: "Search by name or department…",
    contact: "Contact",
    noResults: "No leaders match your search.",
  },
  yo: {
    title: "Àwọn Olùdarí",
    subtitle: "Pàdé àwọn olùkọ́ni, àgbà ìjọ àti olórí ẹ̀ka",
    tabs: { pastors: "Àwọn Olùkọ́ni", elders: "Àwọn Àgbà Ìjọ", hods: "Olórí Ẹ̀ka & Ìṣẹ́" },
    search: "Wá orúkọ tàbí ẹ̀ka…",
    contact: "Ìbánisọ̀rọ̀",
    noResults: "Kò sí olùdarí tó bá ìwádìí rẹ mu.",
  },
};

export default function Leadership({ language }: LeadershipProps) {
  const [q, setQ] = useState("");
  const t = T[language];

  const { pastors, elders, hods } = useMemo(() => {
    const norm = (s: string) => s.toLowerCase();
    const filterQ = (p: Person) => {
      if (!q) return true;
      const hay = [
        p.name,
        p.role,
        p.department ?? "",
        p.email ?? "",
        p.phone ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(norm(q));
    };

    const actives = SAMPLE_LEADERS.filter((p) => p.active !== false);
    const byRole = (r: Person["role"]) =>
      actives
        .filter((p) => p.role === r)
        .filter(filterQ)
        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.name.localeCompare(b.name));

    return {
      pastors: byRole("pastor"),
      elders: byRole("elder"),
      hods: byRole("hod"),
    };
  }, [q, language]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t.title}</h1>
          <p className="text-muted-foreground mt-1">{t.subtitle}</p>
        </div>

        {/* Search */}
        <div className="mb-6 relative max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.search}
            className="pl-9"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pastors" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="pastors">{t.tabs.pastors}</TabsTrigger>
            <TabsTrigger value="elders">{t.tabs.elders}</TabsTrigger>
            <TabsTrigger value="hods">{t.tabs.hods}</TabsTrigger>
          </TabsList>

          <TabsContent value="pastors">
            <PeopleGrid people={pastors} emptyText={t.noResults} showDept={false} />
          </TabsContent>
          <TabsContent value="elders">
            <PeopleGrid people={elders} emptyText={t.noResults} showDept={false} />
          </TabsContent>
          <TabsContent value="hods">
            <PeopleGrid people={hods} emptyText={t.noResults} showDept />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

/* ---------- Presentational bits ---------- */

function PeopleGrid({
  people,
  emptyText,
  showDept,
}: {
  people: Person[];
  emptyText: string;
  showDept?: boolean;
}) {
  if (!people.length) {
    return (
      <Card className="bg-card">
        <CardContent className="py-10 text-center text-muted-foreground">
          {emptyText}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {people.map((p) => (
        <LeaderCard key={`${p.role}-${p.name}-${p.department ?? ""}`} p={p} showDept={!!showDept} />
      ))}
    </div>
  );
}

function LeaderCard({ p, showDept }: { p: Person; showDept: boolean }) {
  return (
    <Card className="card-interactive">
      <CardHeader className="flex-row items-center gap-4">
        <Avatar src={p.photoUrl} name={p.name} />
        <div className="min-w-0">
          <CardTitle className="text-base truncate">{p.name}</CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="secondary" className="capitalize">{p.role}</Badge>
            {showDept && p.department ? <Badge className="bg-primary/10 text-foreground">{p.department}</Badge> : null}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {p.email ? (
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${p.email}`} className="underline underline-offset-4">{p.email}</a>
          </p>
        ) : null}
        {p.phone ? (
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href={`tel:${p.phone.replace(/\s+/g, "")}`} className="underline underline-offset-4">{p.phone}</a>
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}

/** Minimal avatar that falls back to initials */
function Avatar({ src, name }: { src?: string; name: string }) {
  const initials = useMemo(() => {
    return name
      .split(" ")
      .map((n) => n[0]?.toUpperCase() ?? "")
      .slice(0, 2)
      .join("");
  }, [name]);

  return (
    <div className="h-12 w-12 rounded-full bg-muted overflow-hidden grid place-items-center text-sm font-semibold">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : (
        <span className="text-foreground/80">{initials}</span>
      )}
    </div>
  );
}
