// src/main.tsx
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom";

// Landing (no navbar)
import ServicePicker from "./pages/servicepicker";

// Section shells
import EnglishApp from "./routes/en/app";
import YorubaApp from "./routes/yo/app";

// Pages (already exist)
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Programmes from "./pages/programmes";
import Stewardship from "./pages/stewardship";
import Calendar from "./pages/calendar";
import NotFound from "./pages/notfound";

// NEW pages
import Leadership from "./pages/leadership";
import Ministries from "./pages/ministries";
import Sermons from "./pages/sermons";
import Visit from "./pages/visit";

type Lang = "en" | "yo";
function withLang<P extends { language: Lang; onLanguageSelect?: (l: Lang) => void }>(
  Comp: React.ComponentType<P>,
  lang: Lang
) {
  return function WrappedPage(props: any) {
    const nav = useNavigate();
    return <Comp {...(props as P)} language={lang} onLanguageSelect={(l) => nav(`/${l}`)} />;
  };
}

// EN
const EnHome = withLang(Home as any, "en");
const EnAbout = withLang(About as any, "en");
const EnContact = withLang(Contact as any, "en");
const EnServices = withLang(Services as any, "en");
const EnProgrammes = withLang(Programmes as any, "en");
const EnStewardship = withLang(Stewardship as any, "en");
const EnCalendar = withLang(Calendar as any, "en");
// NEW EN
const EnLeadership = withLang(Leadership as any, "en");
const EnMinistries = withLang(Ministries as any, "en");
const EnSermons = withLang(Sermons as any, "en");
const EnVisit = withLang(Visit as any, "en");

// YO (stubs for now)
const YoHome = withLang(Home as any, "yo");
const YoAbout = withLang(About as any, "yo");
const YoContact = withLang(Contact as any, "yo");
const YoServices = withLang(Services as any, "yo");
const YoProgrammes = withLang(Programmes as any, "yo");
const YoStewardship = withLang(Stewardship as any, "yo");
const YoCalendar = withLang(Calendar as any, "yo");

const router = createBrowserRouter([
  // Landing picker (no navbar)
  { path: "/", element: <ServicePicker /> },

  // English section (navbar via AppShell)
  {
    path: "/en",
    element: <EnglishApp />,
    children: [
      { index: true, element: <EnHome /> }, // brand link default
      { path: "home", element: <EnHome /> }, // explicit /en/home
      { path: "about", element: <EnAbout /> },
      { path: "services", element: <EnServices /> },
      { path: "programmes", element: <EnProgrammes /> },
      { path: "calendar", element: <EnCalendar /> },
      { path: "stewardship", element: <EnStewardship /> },
      { path: "contact", element: <EnContact /> },
      // Others (dropdown)
      { path: "leadership", element: <EnLeadership /> },
      { path: "ministries", element: <EnMinistries /> },
      { path: "sermons", element: <EnSermons /> },
      { path: "visit", element: <EnVisit /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  // Yoruba section (optional for now)
  {
    path: "/yo",
    element: <YorubaApp />,
    children: [
      { index: true, element: <YoHome /> },
      { path: "about", element: <YoAbout /> },
      { path: "services", element: <YoServices /> },
      { path: "programmes", element: <YoProgrammes /> },
      { path: "calendar", element: <YoCalendar /> },
      { path: "stewardship", element: <YoStewardship /> },
      { path: "contact", element: <YoContact /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  // Old top-level paths → redirect to EN equivalents
  { path: "/about", element: <Navigate to="/en/about" replace /> },
  { path: "/services", element: <Navigate to="/en/services" replace /> },
  { path: "/programmes", element: <Navigate to="/en/programmes" replace /> },
  { path: "/calendar", element: <Navigate to="/en/calendar" replace /> },
  { path: "/stewardship", element: <Navigate to="/en/stewardship" replace /> },
  { path: "/contact", element: <Navigate to="/en/contact" replace /> },
  // NEW redirects
  { path: "/leadership", element: <Navigate to="/en/leadership" replace /> },
  { path: "/ministries", element: <Navigate to="/en/ministries" replace /> },
  { path: "/sermons", element: <Navigate to="/en/sermons" replace /> },
  { path: "/visit", element: <Navigate to="/en/visit" replace /> },

  // Catch-all
  { path: "*", element: <Navigate to="/" replace /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
