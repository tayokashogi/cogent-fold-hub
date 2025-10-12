import { Outlet } from "react-router-dom";
import AppShell from "@/layouts/appshell";
export default function YorubaApp() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
