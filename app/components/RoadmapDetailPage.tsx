import Image from "next/image";
import Link from "next/link";

export type RoadmapStep = {
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  glow: string;
  skills: string[];
};

type RoadmapDetailPageProps = {
  badge: string;
  title: string;
  subtitle: string;
  steps: RoadmapStep[];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function publicAsset(path: string) {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}

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
        <span>{reverse ? "<" : ">"}</span>
        <span>{reverse ? "<" : ">"}</span>
        <span>{reverse ? "<" : ">"}</span>
      </div>
    </div>
  );
}

function RoadmapCard({ step }: { step: RoadmapStep }) {
  return (
    <article className="flex min-h-[430px] flex-1 flex-col items-center justify-between text-center">
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
          className="mx-auto h-1 w-9 rounded-full"
          style={{ backgroundColor: step.color }}
        />
      </div>

      <div className="relative mt-8 grid w-full place-items-center">
        <div
          className={`absolute bottom-0 h-28 w-64 rounded-[50%] bg-white blur-2xl ${step.glow}`}
        />
        <Image
          alt=""
          className="relative z-10 h-56 w-56 object-contain drop-shadow-2xl"
          height={224}
          src={publicAsset(step.icon)}
          width={224}
        />
        <div
          className={`relative -mt-8 h-20 w-64 rounded-[1.5rem] border border-slate-200 bg-white shadow-xl ${step.glow}`}
        >
          <div
            className="absolute inset-x-6 top-4 h-1 rounded-full opacity-80"
            style={{ backgroundColor: step.color }}
          />
        </div>
      </div>
    </article>
  );
}

export default function RoadmapDetailPage({
  badge,
  steps,
  subtitle,
  title,
}: RoadmapDetailPageProps) {
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
            {badge}
          </p>
        </nav>

        <header className="mx-auto mt-10 max-w-4xl text-center">
          <h1 className="text-5xl font-black leading-none tracking-normal text-slate-950 sm:text-7xl">
            {title}
          </h1>
          <p className="mt-5 text-xl font-semibold leading-8 text-slate-500">
            {subtitle}
          </p>
        </header>

        <section className="mt-14 flex flex-col items-stretch gap-8 xl:flex-row xl:items-end">
          <RoadmapCard step={steps[0]} />
          <Connector />
          <RoadmapCard step={steps[1]} />
          <Connector reverse />
          <RoadmapCard step={steps[2]} />
        </section>

        <section className="mt-auto grid gap-4 border-t border-slate-200 py-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title}>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">
                {step.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">{step.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {step.skills.map((skill) => (
                  <span
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
