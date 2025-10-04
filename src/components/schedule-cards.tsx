import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ScheduleItem } from "@/data/schedule";


export function ScheduleGroup({
label,
items,
accent = "",
}: {
label: string;
items: ScheduleItem[];
accent?: string; // e.g., "from-brand/10 to-brand/30"
}) {
return (
<section className="space-y-4">
<h2 className="text-xl font-semibold">{label}</h2>
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
{items.map((it, idx) => (
<Card key={`${label}-${idx}`} className="overflow-hidden">
{accent ? (
<div className={`h-1 w-full bg-gradient-to-r ${accent}`} />
) : null}
<CardHeader>
<CardTitle className="text-base">
<span className="block font-medium">{it.title}</span>
</CardTitle>
</CardHeader>
<CardContent className="text-sm text-muted-foreground">
<p><span className="font-medium text-foreground">{it.day}</span></p>
<p className="mt-1">Time: {it.time}</p>
<p className="mt-1">Mode: {it.mode.join(" · ")}</p>
</CardContent>
</Card>
))}
</div>
</section>
);
}