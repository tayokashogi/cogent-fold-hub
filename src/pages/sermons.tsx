// src/pages/sermons.tsx
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Play, Search, Youtube } from "lucide-react";

type Lang = "en" | "yo";
interface SermonsProps { language: Lang; }

/** Add your sermons here by YouTube videoId */
type Sermon = {
  title: string;
  speaker?: string;
  date?: string; // ISO or readable, e.g., "2025-10-05"
  tags?: string[];
  videoId: string;         // e.g., "dQw4w9WgXcQ"
  thumbnail?: string;      // optional override; defaults to yt thumbnail
  description?: string;
};

const CHANNEL_URL = "https://www.youtube.com/@cacyabaea";

const SAMPLE_SERMONS: Sermon[] = [
  {
    title: "Living by Faith",
    speaker: "Pastor Jane Smith",
    date: "2025-09-28",
    tags: ["faith", "christian living"],
    videoId: "dQw4w9WgXcQ", // <-- replace with real video id from your channel
    description: "A message on trusting God through every season.",
  },
  {
    title: "Prayer That Prevails",
    speaker: "Rev. John Doe",
    date: "2025-09-21",
    tags: ["prayer", "spiritual growth"],
    videoId: "9bZkp7q19f0", // <-- replace
  },
  // Add more…
];

const T = {
  en: {
    title: "Sermons",
    subtitle: "Watch recent messages from CAC Yaba — English Assembly",
    search: "Search by title, speaker, or tag…",
    watchOnYoutube: "Watch on YouTube",
    noResults: "No sermons match your search.",
  },
  yo: {
    title: "Ìhìnrere",
    subtitle: "Wo àwọn ìhìnrere laipẹ lati CAC Yaba — English Assembly",
    search: "Wá ní orúkọ, akọ̀rìí tàbí akọ̀sọ̀rọ̀…",
    watchOnYoutube: "Wo lori YouTube",
    noResults: "Kò sí ìhìnrere tó bá ìwádìí rẹ mu.",
  },
};

export default function Sermons({ language }: SermonsProps) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Sermon | null>(null);

  const t = T[language];

  const list = useMemo(() => {
    const norm = (s: string) => s.toLowerCase().trim();
    const hay = (s: Sermon) =>
      [
        s.title,
        s.speaker ?? "",
        s.tags?.join(" ") ?? "",
        s.description ?? "",
        s.date ?? "",
      ]
        .join(" ")
        .toLowerCase();

    const filtered = SAMPLE_SERMONS.filter((s) => hay(s).includes(norm(q)));
    // sort newest first if dates exist
    filtered.sort((a, b) => {
      const da = a.date ? Date.parse(a.date) : 0;
      const db = b.date ? Date.parse(b.date) : 0;
      return db - da;
    });
    return filtered;
  }, [q]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t.title}</h1>
            <p className="text-muted-foreground mt-1">{t.subtitle}</p>
          </div>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <a href={CHANNEL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              {t.watchOnYoutube}
            </a>
          </Button>
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

        {/* Grid */}
        {list.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((s) => (
              <SermonCard key={s.videoId} sermon={s} onPlay={() => setActive(s)} />
            ))}
          </div>
        ) : (
          <Card className="bg-card">
            <CardContent className="py-10 text-center text-muted-foreground">
              {t.noResults}
            </CardContent>
          </Card>
        )}

        {/* Mobile YouTube link */}
        <div className="mt-8 md:hidden">
          <Button asChild className="w-full bg-accent text-accent-foreground">
            <a href={CHANNEL_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 justify-center">
              <Youtube className="h-4 w-4" />
              {t.watchOnYoutube}
            </a>
          </Button>
        </div>
      </div>

      {/* Player Modal */}
      <PlayerModal sermon={active} onClose={() => setActive(null)} />
    </div>
  );
}

/* ---------- Cards & Player ---------- */

function SermonCard({ sermon, onPlay }: { sermon: Sermon; onPlay: () => void }) {
  const thumb =
    sermon.thumbnail ??
    `https://img.youtube.com/vi/${sermon.videoId}/hqdefault.jpg`;

  return (
    <Card className="card-interactive overflow-hidden">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={thumb} className="h-40 w-full object-cover" />
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2">{sermon.title}</CardTitle>
        <div className="flex gap-2 flex-wrap mt-1 text-sm text-muted-foreground">
          {sermon.speaker && <span>{sermon.speaker}</span>}
          {sermon.date && <span>• {formatDate(sermon.date)}</span>}
        </div>
        {sermon.tags?.length ? (
          <div className="flex flex-wrap gap-1 mt-2">
            {sermon.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="capitalize">
                {tag}
              </Badge>
            ))}
            {sermon.tags.length > 4 ? (
              <Badge variant="outline">+{sermon.tags.length - 4}</Badge>
            ) : null}
          </div>
        ) : null}
      </CardHeader>

      <CardContent className="pb-4">
        <Button onClick={onPlay} className="w-full">
          <Play className="h-4 w-4 mr-2" />
          Play
        </Button>
      </CardContent>
    </Card>
  );
}

function PlayerModal({ sermon, onClose }: { sermon: Sermon | null; onClose: () => void }) {
  if (!sermon) return null;
  const embed = `https://www.youtube.com/embed/${sermon.videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-card rounded-xl overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 16:9 responsive iframe */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={embed}
            title={sermon.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="p-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-semibold truncate">{sermon.title}</p>
            <p className="text-sm text-muted-foreground truncate">
              {sermon.speaker ? `${sermon.speaker} • ` : ""}
              {sermon.date ? formatDate(sermon.date) : ""}
            </p>
          </div>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ---------- utils ---------- */

function formatDate(d: string) {
  // Tries ISO first; otherwise returns raw
  const ms = Date.parse(d);
  if (Number.isNaN(ms)) return d;
  return new Date(ms).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
