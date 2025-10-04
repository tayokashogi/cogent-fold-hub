// src/App.tsx
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/header";
import ChatbotWidget from "@/components/chatbot-widget";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";          // ⬅️ add this
import ProgrammesPage from "@/pages/programmes";
import About from "@/pages/about";
import Services from "@/pages/services";
import Stewardship from "@/pages/stewardship";
import Contact from "@/pages/contact";
import NotFound from "@/pages/notfound";

export default function App() {
  const [language, setLanguage] = useState<"en" | "yo">("en");

  return (
    <BrowserRouter>
      <Header language={language} onLanguageChange={setLanguage} />
      <Routes>
        {/* choose your landing page */}
        <Route path="/" element={<Home language={language} onLanguageSelect={setLanguage} />} />
        {/* or, if you prefer dashboard as landing:
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
        */}

        <Route path="/home" element={<Home language={language} onLanguageSelect={setLanguage} />} />
        <Route path="/dashboard" element={<Dashboard language={language} />} />  {/* ⬅️ new */}
        <Route path="/programmes" element={<ProgrammesPage />} />
        <Route path="/services" element={<Services language={language} />} />
        <Route path="/stewardship" element={<Stewardship language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ChatbotWidget />
    </BrowserRouter>
  );
}
