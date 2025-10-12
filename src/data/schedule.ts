export type ServiceMode = "Physical" | "Online";


export type ScheduleItem = {
day: string; // e.g., "Monday", "Sunday", "Mon–Sat"
time: string; // e.g., "06:00-07:00" or "07:00"
title: string; // e.g., "Hour of Divine Intervention"
mode: ServiceMode[]; // ["Physical", "Online"]
};


export type Schedule = {
combined: ScheduleItem[];
yorubaAssembly: ScheduleItem[];
englishAssembly: ScheduleItem[];
teensChurch: ScheduleItem[];
};


export const schedule: Schedule = {
combined: [
{ day: "Monday", time: "06:00-07:00", title: "Hour of Divine Intervention", mode: ["Physical", "Online"] },
{ day: "Wednesday", time: "06:00-07:00", title: "One Hour with Jesus", mode: ["Physical", "Online"] },
{ day: "Wednesday", time: "18:00-20:00", title: "Bible Study", mode: ["Physical", "Online"] },
{ day: "Thursday", time: "18:00-20:00", title: "Youth Fellowship", mode: ["Physical", "Online"] }
],
yorubaAssembly: [
{ day: "Sunday", time: "08:00", title: "Sunday Service", mode: ["Physical", "Online"] }
],
englishAssembly: [
{ day: "Mon–Sat", time: "05:30-06:00", title: "Restoration Half Hour", mode: ["Online"] },
{ day: "Tuesday", time: "18:00-20:00", title: "OPERATION PUSH (Pray Until Something Happens)", mode: ["Physical", "Online"] },
{ day: "Sunday", time: "07:00", title: "First Service", mode: ["Physical", "Online"] },
{ day: "Sunday", time: "09:45", title: "Second Service", mode: ["Physical", "Online"] }
],
teensChurch: [
{ day: "Sunday", time: "08:00", title: "Sunday Service", mode: ["Physical"] }
]
};