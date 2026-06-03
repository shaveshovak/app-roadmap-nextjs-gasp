import Link from "next/link";
import WelcomeIntro from "./components/WelcomeIntro";

type Profession = {
  title: string;
  description: string;
  level: string;
  roles: string[];
  focus: string;
  accent: string;
  href?: string;
};

const professions: Profession[] = [
  {
    title: "Frontend Developer",
    description: "Builds polished interfaces, design systems, and fast client experiences.",
    level: "Beginner friendly",
    roles: ["React", "TypeScript", "Accessibility"],
    focus: "UI engineering",
    accent: "bg-cyan-500",
    href: "/frontend-roadmap",
  },
  {
    title: "Backend Developer",
    description: "Designs APIs, services, databases, auth, and business logic that scales.",
    level: "Core track",
    roles: ["Node.js", "PostgreSQL", "APIs"],
    focus: "Systems logic",
    accent: "bg-emerald-500",
    href: "/roadmaps/backend",
  },
  {
    title: "Full Stack Developer",
    description: "Connects product interfaces with databases, services, and deployment flows.",
    level: "Broad path",
    roles: ["Next.js", "Prisma", "Cloud"],
    focus: "Product delivery",
    accent: "bg-violet-500",
    href: "/roadmaps/full-stack",
  },
  {
    title: "DevOps Engineer",
    description: "Automates infrastructure, CI/CD, observability, and production operations.",
    level: "Advanced",
    roles: ["Docker", "Kubernetes", "CI/CD"],
    focus: "Reliability",
    accent: "bg-orange-500",
    href: "/roadmaps/devops",
  },
  {
    title: "Mobile Developer",
    description: "Creates native and cross-platform apps for iOS, Android, and tablets.",
    level: "App track",
    roles: ["Swift", "Kotlin", "React Native"],
    focus: "Mobile apps",
    accent: "bg-blue-500",
    href: "/roadmaps/mobile",
  },
  {
    title: "AI Engineer",
    description: "Builds AI-powered products with models, retrieval, evaluation, and agents.",
    level: "Fast growing",
    roles: ["LLMs", "RAG", "Evaluation"],
    focus: "Intelligence",
    accent: "bg-fuchsia-500",
    href: "/roadmaps/ai-engineer",
  },
  {
    title: "Data Engineer",
    description: "Moves, models, and governs data across pipelines, warehouses, and lakes.",
    level: "Data track",
    roles: ["Python", "SQL", "ETL"],
    focus: "Data systems",
    accent: "bg-amber-500",
    href: "/roadmaps/data-engineer",
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protects applications, networks, cloud systems, and users from threats.",
    level: "High impact",
    roles: ["AppSec", "SOC", "Cloud security"],
    focus: "Security",
    accent: "bg-rose-500",
    href: "/roadmaps/cyber-security",
  },
  {
    title: "QA Automation Engineer",
    description: "Designs testing strategy, automation suites, and release confidence systems.",
    level: "Quality path",
    roles: ["Playwright", "Cypress", "Test strategy"],
    focus: "Confidence",
    accent: "bg-lime-500",
    href: "/roadmaps/qa",
  },
];

const stats = [
  { label: "Career tracks", value: "18" },
  { label: "Skill maps", value: "126" },
  { label: "Learning nodes", value: "540+" },
];

export default function Home() {
  return (
    <WelcomeIntro>
      <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between border-b border-slate-200 pb-5">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-slate-950 text-sm font-black text-white">
                RM
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">Roadmap Index</p>
                <p className="text-xs text-slate-500">Software career dashboard</p>
              </div>
            </div>
            <button className="hidden rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 sm:block">
              Browse roadmaps
            </button>
          </nav>

          <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-600">
                Choose your software path
              </p>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-5xl font-black leading-none tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
                  Developer roadmaps for every profession.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Explore modern software roles, compare focus areas, and pick the roadmap
                  that matches the kind of work you want to grow into.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                  key={stat.label}
                >
                  <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-black text-slate-950">{stat.value}</p>
                </div>
              ))}
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {professions.map((profession) => (
              <article
                className="group flex min-h-72 flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                key={profession.title}
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`h-12 w-2 rounded-full ${profession.accent}`} />
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-normal text-slate-600">
                      {profession.level}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-500">{profession.focus}</p>
                    <h2 className="mt-2 text-2xl font-black tracking-normal text-slate-950">
                      {profession.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      {profession.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {profession.roles.map((role) => (
                    <span
                      className="rounded-md border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700"
                      key={role}
                    >
                      {role}
                    </span>
                  ))}
                </div>
                {profession.href ? (
                  <Link
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-bold text-white transition hover:bg-slate-800"
                    href={profession.href}
                  >
                    Open roadmap
                  </Link>
                ) : null}
              </article>
            ))}
          </section>
        </section>
      </main>
    </WelcomeIntro>
  );
}
