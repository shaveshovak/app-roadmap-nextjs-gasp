"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type RoadmapStep = {
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  glow: string;
  skills: string[];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function publicAsset(path: string) {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}

const roadmapSteps: RoadmapStep[] = [
  {
    eyebrow: "Foundation",
    title: "HTML, CSS & JavaScript",
    description: "Build the page structure, visual styling, and interactive behavior users touch first.",
    icon: "/roadmap-icons/html5_3d_code_icon.svg",
    color: "#0ea5e9",
    glow: "shadow-sky-200",
    skills: ["Semantic HTML", "CSS layouts", "JavaScript basics"],
  },
  {
    eyebrow: "Workflow",
    title: "Git & DevTools",
    description: "Track changes, inspect the browser, debug issues, and understand how pages behave.",
    icon: "/roadmap-icons/javascript_3d_code_icon.svg",
    color: "#f59e0b",
    glow: "shadow-amber-200",
    skills: ["Git", "Browser DevTools", "Debugging"],
  },
  {
    eyebrow: "Experience",
    title: "Responsive, A11y & UX",
    description: "Create interfaces that adapt to screens, work for more people, and feel clear to use.",
    icon: "/roadmap-icons/typescript_3d_code_icon.svg",
    color: "#7c3aed",
    glow: "shadow-violet-200",
    skills: ["Responsive UI", "Accessibility", "UX basics"],
  },
];

const advancedSteps: RoadmapStep[] = [
  {
    eyebrow: "Data",
    title: "APIs & SEO",
    description: "Connect to server data, understand RESTful APIs, and make pages easier to discover.",
    icon: "/roadmap-icons/react_3d_code_icon.svg",
    color: "#06b6d4",
    glow: "shadow-cyan-200",
    skills: ["REST APIs", "Fetch", "SEO"],
  },
  {
    eyebrow: "Architecture",
    title: "Frameworks & TypeScript",
    description: "Use a frontend framework and typed code to scale components, state, and teams.",
    icon: "/roadmap-icons/next_3d_code_icon.svg",
    color: "#111827",
    glow: "shadow-slate-200",
    skills: ["React or Vue", "TypeScript", "Architecture"],
  },
  {
    eyebrow: "Release",
    title: "Testing & Performance",
    description: "Test, optimize, and measure frontend work so production experiences stay reliable.",
    icon: "/roadmap-icons/quality_3d_code_icon.svg",
    color: "#10b981",
    glow: "shadow-emerald-200",
    skills: ["Testing", "Core Web Vitals", "Optimization"],
  },
];

function Connector({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative hidden h-16 min-w-24 flex-1 items-center xl:flex">
      <div className="absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 rounded-full border border-slate-200 bg-slate-950/10 shadow-inner" />
      <div
        className={`absolute top-1/2 h-3 w-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 blur-sm ${
          reverse ? "right-6" : "left-6"
        }`}
      />
      <div className="absolute inset-x-8 top-1/2 flex -translate-y-1/2 justify-center gap-1 text-xl font-black text-white">
        <span>{reverse ? "‹" : "›"}</span>
        <span>{reverse ? "‹" : "›"}</span>
        <span>{reverse ? "‹" : "›"}</span>
      </div>
    </div>
  );
}

function RoadmapCard({
  active,
  onSelect,
  step,
}: {
  active: boolean;
  onSelect: () => void;
  step: RoadmapStep;
}) {
  return (
    <button
      className="group flex min-h-[430px] flex-1 flex-col items-center justify-between rounded-lg border border-transparent bg-transparent p-0 text-center transition focus:outline-none"
      onClick={onSelect}
      type="button"
    >
      <div className="space-y-3">
        <p
          className="text-sm font-black uppercase tracking-[0.18em]"
          style={{ color: step.color }}
        >
          {step.eyebrow}
        </p>
        <h2 className="text-3xl font-black tracking-normal text-slate-950">
          {step.title}
        </h2>
        <p className="mx-auto max-w-64 text-base leading-7 text-slate-600">
          {step.description}
        </p>
        <div
          className="mx-auto h-1 w-9 rounded-full transition-all group-hover:w-14"
          style={{ backgroundColor: step.color }}
        />
      </div>

      <div className="relative mt-8 grid w-full place-items-center">
        <div
          className={`absolute bottom-0 h-28 w-64 rounded-[50%] bg-white blur-2xl ${step.glow}`}
        />
        <Image
          alt=""
          className="relative z-10 h-56 w-56 object-contain drop-shadow-2xl transition duration-500 group-hover:-translate-y-2"
          height={224}
          src={publicAsset(step.icon)}
          width={224}
        />
        <div
          className={`relative -mt-8 h-20 w-64 rounded-[1.5rem] border border-slate-200 bg-white shadow-xl ${step.glow} ${
            active ? "ring-4 ring-offset-2" : ""
          }`}
          style={{ "--tw-ring-color": step.color } as React.CSSProperties}
        >
          <div
            className="absolute inset-x-6 top-4 h-1 rounded-full opacity-80"
            style={{ backgroundColor: step.color }}
          />
        </div>
      </div>
    </button>
  );
}

export default function FrontendRoadmapExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleSteps = activeIndex < 3 ? roadmapSteps : advancedSteps;
  const activeStep = [...roadmapSteps, ...advancedSteps][activeIndex];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#ffffff_0%,#f7f9fc_52%,#edf2f7_100%)] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between">
          <Link
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-300"
            href="/"
          >
            Back
          </Link>
          <p className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
            Frontend roadmap
          </p>
        </nav>

        <header className="mx-auto mt-10 max-w-4xl text-center">
          <h1 className="text-5xl font-black leading-none tracking-normal text-slate-950 sm:text-7xl">
            Frontend Developer Roadmap
          </h1>
          <p className="mt-5 text-xl font-semibold leading-8 text-slate-500">
            A modern path from web fundamentals to production-ready frontend apps.
          </p>
        </header>

        <section className="mt-14 flex flex-col items-stretch gap-8 xl:flex-row xl:items-end">
          <RoadmapCard
            active={activeIndex % 3 === 0}
            onSelect={() => setActiveIndex(activeIndex < 3 ? 0 : 3)}
            step={visibleSteps[0]}
          />
          <Connector />
          <RoadmapCard
            active={activeIndex % 3 === 1}
            onSelect={() => setActiveIndex(activeIndex < 3 ? 1 : 4)}
            step={visibleSteps[1]}
          />
          <Connector reverse />
          <RoadmapCard
            active={activeIndex % 3 === 2}
            onSelect={() => setActiveIndex(activeIndex < 3 ? 2 : 5)}
            step={visibleSteps[2]}
          />
        </section>

        <section className="mt-auto grid gap-4 border-t border-slate-200 py-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
              Current step
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">{activeStep.title}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeStep.skills.map((skill) => (
                <span
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              className="min-h-11 rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-slate-400"
              onClick={() => setActiveIndex(activeIndex < 3 ? 3 : 0)}
              type="button"
            >
              {activeIndex < 3 ? "Next phase" : "Core phase"}
            </button>
            <button
              className="min-h-11 rounded-lg bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-slate-800"
              onClick={() => setActiveIndex((current) => (current + 1) % 6)}
              type="button"
            >
              Next step
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
