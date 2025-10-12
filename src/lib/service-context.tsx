import React, { createContext, useContext } from "react";

export type Service = "en" | "yo";
const ServiceContext = createContext<Service>("en");

export function ServiceProvider({
  value,
  children,
}: { value: Service; children: React.ReactNode }) {
  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>;
}

export function useService() {
  return useContext(ServiceContext);
}
