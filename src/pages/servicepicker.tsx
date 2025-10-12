// src/pages/servicepicker.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Church, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cac-logo.svg";

export default function ServicePicker() {
  const navigate = useNavigate();

  // Lock scroll while on this screen
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // (Optional) keyboard shortcuts—kept but no on-screen hint
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "e") navigate("/en");
      if (e.key.toLowerCase() === "y") navigate("/yo");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return (
    <div className="min-h-dvh w-full flex flex-col bg-background">
      {/* Hero / Branding */}
      <section className="gradient-hero text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <img
              src={logo}
              alt="CAC Logo"
              className="h-12 w-12 rounded-full ring-2 ring-white/70"
            />
            <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
              Christ Apostolic Church, Oke-Ibukun
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-95 font-medium">
            Please pick a church service to continue
          </p>
        </div>
      </section>

      {/* Picker */}
      <section className="flex-1 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            className="card-featured cursor-pointer focus-within:ring-2 focus-within:ring-primary"
            onClick={() => navigate("/en")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate("/en")}
            aria-label="Choose English Assembly"
          >
            <CardContent className="flex flex-col items-center gap-4 py-8">
              <Church className="w-12 h-12 text-primary" />
              <h2 className="text-2xl font-semibold">English Assembly</h2>
              <p className="text-foreground/80">Sundays – Sermons, events & resources</p>
              <Button className="btn-hero mt-2" onClick={() => navigate("/en")}>
                Enter
              </Button>
            </CardContent>
          </Card>

          <Card
            className="card-featured cursor-pointer focus-within:ring-2 focus-within:ring-accent"
            onClick={() => navigate("/yo")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate("/yo")}
            aria-label="Yan Iṣẹ́ Ìjọ (Yorùbá)"
          >
            <CardContent className="flex flex-col items-center gap-4 py-8">
              <Languages className="w-12 h-12 text-accent" />
              <h2 className="text-2xl font-semibold">Iṣẹ́ Ìjọ (Yorùbá)</h2>
              <p className="text-foreground/80">Ọjọ́ Àìkú – Ìhìn rere, ìṣẹ̀lẹ̀ & orísun</p>
              <Button className="btn-accent mt-2" onClick={() => navigate("/yo")}>
                Wọlé
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
