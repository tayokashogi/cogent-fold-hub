import { useNavigate } from "react-router-dom";
import { Church, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicePicker() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Cogent Fold</h1>
        <p className="text-slate-600 mb-8">Please choose your service</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-xl transition"
                onClick={() => navigate("/en")}>
            <div className="flex flex-col items-center gap-4">
              <Church className="w-10 h-10" aria-hidden />
              <h2 className="text-xl font-semibold">English Service</h2>
              <p className="text-slate-600">Sundays – Sermons, events & resources</p>
              <Button className="mt-2" onClick={() => navigate("/en")}>Enter</Button>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition"
                onClick={() => navigate("/yo")}>
            <div className="flex flex-col items-center gap-4">
              <Languages className="w-10 h-10" aria-hidden />
              <h2 className="text-xl font-semibold">Iṣẹ́ Ìjọ (Yorùbá)</h2>
              <p className="text-slate-600">Ọjọ́ Àìkú – Ìhìn rere, ìṣẹ̀lẹ̀ & orísun</p>
              <Button className="mt-2" onClick={() => navigate("/yo")}>Wọlé</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
