// src/pages/visit.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Baby, Car, Music2, Info } from "lucide-react";

type Lang = "en" | "yo";
interface VisitProps {
  language: Lang;
}

const ADDRESS = "Alagomeji, Yaba, Lagos, Nigeria";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

const T = {
  en: {
    title: "Plan Your Visit",
    subtitle:
      "We can’t wait to meet you! Here’s everything you need for a smooth first visit to CAC Yaba — English Assembly.",
    serviceTimes: "Service Times",
    mainService: "Sunday English Assembly",
    mainServiceTime: "Sundays • 9:00 AM – 11:30 AM",
    midweek: "Midweek",
    midweekTime: "Wednesday Prayer & Word • 6:00 PM – 7:30 PM",
    location: "Location",
    getDirections: "Get Directions",
    whatToExpect: "What to Expect",
    expectBullets: [
      "Warm, friendly welcome at the entrance.",
      "Vibrant worship and solid Bible teaching.",
      "Service length ~90–120 minutes.",
      "Modest, comfortable dress (come as you are).",
    ],
    familiesKids: "Families & Kids",
    kidsInfo:
      "Children have a safe, engaging environment with age-appropriate Bible teaching. Our team is background-checked.",
    parking: "Parking",
    parkingInfo:
      "Limited on-site spots; additional street parking nearby. Ushers will guide you on arrival.",
    music: "Music",
    musicInfo:
      "A blend of contemporary worship and classic CAC hymns led by our Choir.",
    faqs: "FAQs",
    faqList: [
      {
        q: "Do I need to register before coming?",
        a: "No. Just come a bit early for a smooth check-in and seating.",
      },
      {
        q: "What should I wear?",
        a: "Modest, comfortable clothing. You’ll see a mix of traditional and contemporary outfits.",
      },
      {
        q: "Is there a place for prayer or counseling?",
        a: "Yes—meet our prayer/counseling team after service near the front.",
      },
    ],
    ctas: {
      firstTime: "I’m Coming This Sunday",
      contact: "Have Questions? Contact Us",
    },
  },
  yo: {
    title: "Ẹ̀bùn ìbẹ̀wò rẹ",
    subtitle:
      "A ń retí rẹ̀ púpò! Èyí ni ohun gbogbo tí o nílò kí ìbẹ̀wò àkọ́kọ́ rẹ rọrùn sí CAC Yaba — English Assembly.",
    serviceTimes: "Àkókò Ìsìn",
    mainService: "Ìsìn Ọjọ́ Àìkú (English Assembly)",
    mainServiceTime: "Ọjọ́ Àìkú • 9:00 Àárọ̀ – 11:30 Àárọ̀",
    midweek: "Àárọ̀ Ọ̀sẹ̀",
    midweekTime: "Àdúrà & Ọ̀rọ̀ Ọlọ́run • Wẹ́sídé 6:00 Irọlẹ – 7:30 Irọlẹ",
    location: "Ibùdó",
    getDirections: "Gba Ìtọná",
    whatToExpect: "Ohun tí o lè retí",
    expectBullets: [
      "Ìkànlẹ̀ ọ̀rẹ́ nílẹ̀kùn ìwọlé.",
      "Ìjọsìn aláyọ̀ àti ìkọ́ni Bíbélì tó jinlẹ̀.",
      "Ìsìn tó tó iṣẹ́ju 90–120.",
      "Aṣọ ìfarahàn rere, ìtura (bó ṣe wù ẹ ni).",
    ],
    familiesKids: "Ìdílé & Àwọn Ọmọde",
    kidsInfo:
      "Àyíká tó dáàbò bo fún àwọn ọmọde pẹ̀lú ìkọ́ni Bíbélì tó bá ọjọ́-ori mu. Ẹgbẹ́ wa ní ìmúlò ìtẹ̀síwájú.",
    parking: "Pákìngì",
    parkingInfo:
      "Diẹ̀ pákìngì wà ní ilé ìjọ; pákìngì ọ̀nà pẹ̀lú. Àwọn usher yóò tọ́ ọ lọ nígbà tí o bá dé.",
    music: "Orin Ìjọsìn",
    musicInfo:
      "Àpapọ̀ orin ìjọsìn òde òní àti orin hymn CAC, Ẹgbẹ́ Akorin ń darí.",
    faqs: "Ìbéèrè tí wọ́pọ̀",
    faqList: [
      { q: "Ṣe mo gbọ́dọ̀ forúkọsílẹ̀ kí n tó wá?", a: "Rárá. Kàn bọ̀ sílẹ̀ díẹ̀ sẹ́yìn kí ìlànà ìbọ̀wọ̀lé àti ìjokòó rọrùn." },
      { q: "Kí ni mo yẹ kí n wọ?", a: "Aṣọ ìfarahàn rere, ìtura. Àpapọ̀ aṣọ ìbílẹ̀ àti ti òde òní ni ẹ̀ ó rí." },
      { q: "Ṣe ibi ìbáṣepọ̀ àti ìmòràn wà?", a: "Bẹ́ẹ̀ni—pàdé ẹgbẹ́ àdúrà/ìmòràn lẹ́yìn ìsìn níwájú." },
    ],
    ctas: {
      firstTime: "Máa wá lọ́jọ́ Àìkú yìí",
      contact: "Ní ìbéèrè? Kan sí wa",
    },
  },
};

export default function Visit({ language }: VisitProps) {
  const t = T[language];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t.title}</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">{t.subtitle}</p>
        </div>

        {/* Service times & Location */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> {t.serviceTimes}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">{t.mainService}</p>
                <p className="text-sm text-muted-foreground">{t.mainServiceTime}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="secondary">English Assembly</Badge>
                  <Badge variant="outline">In-person</Badge>
                </div>
              </div>
              <div>
                <p className="font-semibold">{t.midweek}</p>
                <p className="text-sm text-muted-foreground">{t.midweekTime}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> {t.location}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="w-full aspect-video overflow-hidden rounded-lg border">
                <iframe
                  title="Church location map"
                  src={MAP_EMBED_SRC}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex gap-2">
                <Button asChild className="bg-accent text-accent-foreground">
                  <a href={MAP_DIRECTIONS} target="_blank" rel="noreferrer">
                    {t.getDirections}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer">
                    Open in Google Maps
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">{ADDRESS}</p>
            </CardContent>
          </Card>
        </div>

        {/* What to expect, Families, Parking, Music */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" /> {t.whatToExpect}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/90">
                {t.expectBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: "0.05s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5 text-primary" /> {t.familiesKids}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/90">{t.kidsInfo}</CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" /> {t.parking}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/90">{t.parkingInfo}</CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: "0.15s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music2 className="h-5 w-5 text-primary" /> {t.music}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/90">{t.musicInfo}</CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>{t.faqs}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {t.faqList.map((f, i) => (
              <details key={i} className="group rounded-lg border p-4 bg-card/50">
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-muted-foreground group-open:hidden">+</span>
                  <span className="text-muted-foreground hidden group-open:inline">–</span>
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </CardContent>
        </Card>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-3">
          <Button asChild className="bg-primary text-primary-foreground">
            <a href="/en/calendar">{t.ctas.firstTime}</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/en/contact">{t.ctas.contact}</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
