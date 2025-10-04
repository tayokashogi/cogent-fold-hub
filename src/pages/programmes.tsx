import React from "react";
import PageHeader from "@/components/page-header";
import { schedule } from "@/data/schedule";
import { ScheduleGroup } from "@/components/schedule-cards";


export default function ProgrammesPage() {
return (
<main className="pb-20">
<PageHeader
eyebrow="Programmes"
title="Service Times & Weekly Programmes"
subtitle="Join us in person at No. 13 Odewale Street, Alagomeji, Yaba, or online where indicated."
/>


<div className="mx-auto max-w-6xl px-4 space-y-10">
<ScheduleGroup label="Combined Services" items={schedule.combined} accent="from-blue-200 to-blue-400" />
<ScheduleGroup label="Yoruba Assembly" items={schedule.yorubaAssembly} accent="from-amber-200 to-amber-400" />
<ScheduleGroup label="English Assembly" items={schedule.englishAssembly} accent="from-emerald-200 to-emerald-400" />
<ScheduleGroup label="Teens’ Church" items={schedule.teensChurch} accent="from-purple-200 to-purple-400" />
</div>
</main>
);
}