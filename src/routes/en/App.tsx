import { Outlet } from "react-router-dom";
import { ServiceProvider } from "@/lib/service-context";

export default function EnglishApp() {
  return (
    <ServiceProvider value="en">
      {/* your existing site layout header/nav here */}
      <Outlet />
    </ServiceProvider>
  );
}
