import { Outlet } from "react-router-dom";
import { ServiceProvider } from "@/lib/service-context";

export default function YorubaApp() {
  return (
    <ServiceProvider value="yo">
      {/* same layout; can swap logo/text via useService() if needed */}
      <Outlet />
    </ServiceProvider>
  );
}
