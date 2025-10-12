// src/main.tsx
import "./index.css"; // ✅ load global Tailwind/shadcn styles first

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
} from "react-router-dom";

// Landing
import ServicePicker from "./pages/servicepicker"; // ✅ lowercase filename

// Section wrappers (each renders <Outlet/> inside AppShell)
import EnglishApp from "./routes/en/app";
import YorubaApp from "./routes/yo/app"; // ✅ fix casing

// Existing pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Programmes from "./pages/programmes";
import Stewardship from "./pages/stewardship";
import Calendar from "./pages/calendar";
import NotFound from "./pages/notfound";

// ---------- helpers ----------
type Lang = "en" | "yo";

/** Inject the required `language` prop for each section */
function withLang<
  P extends { language: Lang; onLanguageSelect?: (l: Lang) => void }
>(Comp: React.ComponentType<P>, lang: Lang) {
  return function WrappedPage(props: any) {
    const nav = useNavigate();
    return (
      <Comp
        {...(props as P)}
        language={lang}
        onLanguageSelect={(l: Lang) => nav(`/${l}`)}
      />
    );
  };
}

// EN/YO variants for pages that take `language`
const EnHome = withLang(Home as any, "en");
const YoHome = withLang(Home as any, "yo");

const EnAbout = withLang(About as any, "en");
const YoAbout = withLang(About as any, "yo");

const EnContact = withLang(Contact as any, "en");
const YoContact = withLang(Contact as any, "yo");

const EnServices = withLang(Services as any, "en");
const YoServices = withLang(Services as any, "yo");

const EnProgrammes = withLang(Programmes as any, "en");
const YoProgrammes = withLang(Programmes as any, "yo");

const EnStewardship = withLang(Stewardship as any, "en");
const YoStewardship = withLang(Stewardship as any, "yo");

const EnCalendar = withLang(Calendar as any, "en");
const YoCalendar = withLang(Calendar as any, "yo");

// Section route children
const enChildren = [
  { index: true, element: <EnHome /> },
  { path: "about", element: <EnAbout /> },
  { path: "contact", element: <EnContact /> },
  { path: "services", element: <EnServices /> },
  { path: "programmes", element: <EnProgrammes /> },
  { path: "stewardship", element: <EnStewardship /> },
  { path: "calendar", element: <EnCalendar /> },
  { path: "*", element: <NotFound /> },
];

const yoChildren = [
  { index: true, element: <YoHome /> },
  { path: "about", element: <YoAbout /> },
  { path: "contact", element: <YoContact /> },
  { path: "services", element: <YoServices /> },
  { path: "programmes", element: <YoProgrammes /> },
  { path: "stewardship", element: <YoStewardship /> },
  { path: "calendar", element: <YoCalendar /> },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter([
  // Landing picker
  { path: "/", element: <ServicePicker /> },

  // Sections (each wrapped with AppShell via EnglishApp/YorubaApp)
  { path: "/en", element: <EnglishApp />, children: enChildren },
  { path: "/yo", element: <YorubaApp />, children: yoChildren },

  // Back-compat redirects → EN namespace
  { path: "/about", element: <Navigate to="/en/about" replace /> },
  { path: "/contact", element: <Navigate to="/en/contact" replace /> },
  { path: "/services", element: <Navigate to="/en/services" replace /> },
  { path: "/programmes", element: <Navigate to="/en/programmes" replace /> },
  { path: "/stewardship", element: <Navigate to="/en/stewardship" replace /> },
  { path: "/calendar", element: <Navigate to="/en/calendar" replace /> },

  // Catch-all
  { path: "*", element: <Navigate to="/" replace /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
