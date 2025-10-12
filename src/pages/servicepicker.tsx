// src/pages/servicepicker.tsx
import { useNavigate } from "react-router-dom";
import { Church, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppShell from "@/layouts/appshell";
import logo from "@/assets/cac-logo.svg";

export default function ServicePicker() {
  const navigate = useNavigate();

  return (
    <AppShell>
      {/* Hero */}
      <section className="gradient-hero text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <img
              src={logo}
              alt="CAC Logo"
              className="h-12 w-12 rounded-full ring-2 ring-white/70"
            />
            <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
              Welcome to CAC
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-95 font-medium">
            Christ Apostolic Church, Oke-Ibukun
          </p>
        </div>
      </section>

      {/* Picker */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            className="card-featured cursor-pointer"
            onClick={() => navigate("/en")}
          >
            <CardContent className="flex flex-col items-center gap-4 py-8">
              <Church className="w-12 h-12 text-primary" />
              <h2 className="text-2xl font-semibold">English Service</h2>
              <p className="text-foreground/80">
                Sundays – Sermons, events & resources
              </p>
              <Button className="btn-hero mt-2" onClick={() => navigate("/en")}>
                Enter
              </Button>
            </CardContent>
          </Card>

          <Card
            className="card-featured cursor-pointer"
            onClick={() => navigate("/yo")}
          >
            <CardContent className="flex flex-col items-center gap-4 py-8">
              <Languages className="w-12 h-12 text-accent" />
              <h2 className="text-2xl font-semibold">Iṣẹ́ Ìjọ (Yorùbá)</h2>
              <p className="text-foreground/80">
                Ọjọ́ Àìkú – Ìhìn rere, ìṣẹ̀lẹ̀ & orísun
              </p>
              <Button className="btn-accent mt-2" onClick={() => navigate("/yo")}>
                Wọlé
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
