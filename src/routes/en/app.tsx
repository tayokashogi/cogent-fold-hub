// src/routes/en/app.tsx
import { Outlet } from "react-router-dom";
import AppShell from "@/layouts/appshell";

export default function EnglishApp() {
  return (
    <AppShell base="/en">
      <Outlet />
    </AppShell>
  );
}
