import { Outlet } from "react-router-dom";
import AppShell from "@/layouts/appshell";
export default function EnglishApp() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
