import React from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-6xl px-4 pt-10 pb-6">
      {eyebrow && (
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-1 text-3xl md:text-4xl font-semibold">{title}</h1>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-3xl">{subtitle}</p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </header>
  );
}
