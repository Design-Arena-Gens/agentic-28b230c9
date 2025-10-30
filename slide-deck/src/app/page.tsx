"use client";

import { useCallback, useEffect, useState } from "react";

type SlidePoint = {
  title: string;
  detail?: string;
};

type SlideStat = {
  label: string;
  value: string;
  detail?: string;
};

type SlideAction = {
  label: string;
  href?: string;
  note?: string;
};

type DeckSlide = {
  id: string;
  label: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  points: SlidePoint[];
  stats?: SlideStat[];
  action?: SlideAction;
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
  background: string;
  accent: string;
};

const slides: DeckSlide[] = [
  {
    id: "vision",
    label: "Vision",
    badge: "Confidential",
    title: "FetchMind AI",
    subtitle: "Building the dog-first intelligence layer for every household and pet brand.",
    description:
      "Our multi-sensor AI translates canine emotion into coaching moments, strengthening the bond between people, dogs, and the brands that serve them.",
    points: [
      {
        title: "Dog cognition mapped",
        detail:
          "Audio + vision models trained on 14,000 hours of annotated dog behavior to predict mood and triggers in under 0.8s.",
      },
      {
        title: "Personalized behavior plans",
        detail:
          "AI reinforcement plans that adapt in real time for every household, trainer, and daycare partner.",
      },
      {
        title: "Platform for the pet economy",
        detail:
          "APIs empower insurers, nutrition brands, and clinics to launch dog operating systems in weeks, not months.",
      },
    ],
    stats: [
      { label: "Pilot families", value: "420", detail: "across 6 US metros" },
      { label: "Behavior accuracy", value: "94%", detail: "vs. trainer benchmarks" },
      { label: "Monthly retention", value: "89%", detail: "after 6 months" },
    ],
    background:
      "radial-gradient(circle at 18% 22%, rgba(14,165,233,0.35), transparent 50%), radial-gradient(circle at 80% 10%, rgba(250,204,21,0.25), rgba(15,23,42,0.95))",
    accent: "text-sky-200",
  },
  {
    id: "problem",
    label: "Problem",
    title: "Dogs are the family member with the least data.",
    subtitle: "Owners and professionals operate with guesswork, leading to costly mistakes and rehoming.",
    description:
      "Despite $140B spent on dogs annually, behavior data is fragmented across devices, notes, and memory. Training is reactive, expensive, and often abandoned.",
    points: [
      {
        title: "$1,200 average training spend",
        detail: "Yet 64% of households stop before completing programs due to slow progress.",
      },
      {
        title: "Rising anxiety cases",
        detail: "Post-pandemic rescues see a 3x increase in separation anxiety incidents.",
      },
      {
        title: "Business blind spots",
        detail: "Daycares, insurers, and vets lack predictive insights, hurting margins and customer trust.",
      },
    ],
    stats: [
      { label: "Shelter returns", value: "23%", detail: "linked to behavior" },
      { label: "Insurance claims", value: "+38%", detail: "behavior disorders since 2021" },
    ],
    background:
      "radial-gradient(circle at 10% 10%, rgba(239,68,68,0.28), transparent 55%), radial-gradient(circle at 90% 20%, rgba(234,179,8,0.18), rgba(15,23,42,0.94))",
    accent: "text-rose-200",
  },
  {
    id: "solution",
    label: "Solution",
    title: "The FetchMind intelligence stack.",
    subtitle: "Continuous sensing, adaptive coaching, and business APIs stitched into one platform.",
    description:
      "We capture multimodal signals, interpret emotion, and deliver personalized actions across mobile, wearables, and partner dashboards.",
    points: [
      {
        title: "Sensing fabric",
        detail: "Mobile camera, collar integrations, and smart speaker cues feed our real-time inference engine.",
      },
      {
        title: "Behavior brain",
        detail: "Foundation model trained on canine kinesics produces mood scores and anticipatory guidance.",
      },
      {
        title: "Adaptive playbooks",
        detail: "AI co-pilot nudges guardians, trainers, and staff with contextual scripts proven to drive compliance.",
      },
    ],
    stats: [
      { label: "Latency", value: "<800ms", detail: "sensor → recommendation" },
      { label: "Library", value: "3.2M", detail: "behavior-tagged clips" },
      { label: "API uptime", value: "99.96%", detail: "last 120 days" },
    ],
    background:
      "radial-gradient(circle at 20% 15%, rgba(8,145,178,0.4), transparent 55%), radial-gradient(circle at 70% 100%, rgba(59,130,246,0.35), rgba(15,23,42,0.95))",
    accent: "text-cyan-200",
  },
  {
    id: "product",
    label: "Product",
    title: "Three experiences, one knowledge graph.",
    subtitle: "Designed for households, trainers, and enterprise partners to collaborate on behavior success.",
    description:
      "The FetchMind graph turns every interaction into structured insights, making dogs more predictable and giving humans confidence.",
    points: [
      {
        title: "Guardian app",
        detail: "Daily play plan, emotion timeline, emergency coach, and video insights in a friendly interface.",
      },
      {
        title: "Trainer workspace",
        detail: "Session capture, plan templates, remote coaching, and revenue share marketplace.",
      },
      {
        title: "Enterprise APIs",
        detail: "Embedded insights for insurers, food brands, and clinics to personalize offerings in real time.",
      },
    ],
    stats: [
      { label: "NPS", value: "71", detail: "guardian pilot cohort" },
      { label: "Trainer ROI", value: "4.3x", detail: "income uplift with remote sessions" },
    ],
    background:
      "radial-gradient(circle at 75% 20%, rgba(129,140,248,0.35), transparent 50%), radial-gradient(circle at 5% 90%, rgba(45,212,191,0.25), rgba(15,23,42,0.96))",
    accent: "text-indigo-200",
  },
  {
    id: "market",
    label: "Market",
    title: "Pet spend is surging, data infrastructure is missing.",
    subtitle: "We start with high-intent households and extend into SaaS for providers and brands.",
    description:
      "The U.S. dog economy surpasses $120B today with a 6.9% CAGR. Experience owners and investors are searching for AI-native platforms to differentiate.",
    points: [
      {
        title: "Serviceable obtainable market",
        detail: "$3.8B from premium households, training pros, and daycares in top 25 metros.",
      },
      {
        title: "Expansion beachheads",
        detail: "Insurance risk scoring, nutrition personalization, and vet telehealth APIs.",
      },
      {
        title: "Moat",
        detail: "Behavior graph compounds with every interaction, producing defensible intent signals.",
      },
    ],
    stats: [
      { label: "Dogs in the US", value: "65M" },
      { label: "TAM", value: "$26B", detail: "behavior & training stack" },
      { label: "Growth", value: "+12%", detail: "annual premium services" },
    ],
    background:
      "radial-gradient(circle at 12% 30%, rgba(244,114,182,0.25), transparent 52%), radial-gradient(circle at 88% 70%, rgba(59,130,246,0.3), rgba(15,23,42,0.95))",
    accent: "text-pink-200",
  },
  {
    id: "model",
    label: "Business Model",
    title: "Layered revenue that compounds with data flywheels.",
    subtitle: "Subscription-first with usage-based expansion across partners.",
    description:
      "Each new dog increases prediction accuracy and partner value. Pricing aligns incentives for households, trainers, and brands to stay engaged.",
    points: [
      {
        title: "Guardian membership",
        detail: "$29/mo per dog with premium tele-coach add-ons at $15/session.",
      },
      {
        title: "Pro toolkit",
        detail: "$89/mo per trainer + 10% marketplace fee + white-label collateral.",
      },
      {
        title: "Enterprise API",
        detail: "Usage-based pricing starting at $0.09/event with annual commitments.",
      },
    ],
    stats: [
      { label: "Blended gross margin", value: "67%" },
      { label: "LTV / CAC", value: "4.8x", detail: "projected by month 18" },
    ],
    background:
      "radial-gradient(circle at 15% 65%, rgba(74,222,128,0.3), transparent 45%), radial-gradient(circle at 85% 10%, rgba(250,204,21,0.22), rgba(15,23,42,0.96))",
    accent: "text-emerald-200",
  },
  {
    id: "traction",
    label: "Traction",
    title: "Signals from pilots and early partners.",
    subtitle: "We launched in January and are pacing toward $1.1M ARR run rate by Q4.",
    description:
      "Focus remains on deepening product-market fit in three metros while expanding datasets through strategic pilots.",
    points: [
      {
        title: "Household pilot",
        detail: "420 active families with 5.6 daily sessions and 92% task completion.",
      },
      {
        title: "Trainer network",
        detail: "63 certified professionals using remote session capture and AI homework loops.",
      },
      {
        title: "Brand pilots",
        detail: "Nationwide pet insurer + DTC nutrition brand testing risk scoring and behavior bundles.",
      },
    ],
    stats: [
      { label: "ARR run rate", value: "$640K" },
      { label: "Churn", value: "3.2%", detail: "logo churn trailing 90 days" },
    ],
    quote: {
      text: "FetchMind lets us resolve anxiety cases 2x faster while adding new subscription revenue.",
      author: "Maya Ortiz",
      role: "Founder, Urban Paws Collective",
    },
    background:
      "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.35), transparent 55%), radial-gradient(circle at 90% 80%, rgba(236,72,153,0.28), rgba(15,23,42,0.96))",
    accent: "text-blue-200",
  },
  {
    id: "gtm",
    label: "Go To Market",
    title: "Community flywheel anchored in trust.",
    subtitle: "We mix owned channels, expert credibility, and partner integrations to scale efficiently.",
    description:
      "Distribution focuses on behavior pain points: anxious rescues, new puppy households, and service providers needing differentiation.",
    points: [
      {
        title: "Local hero events",
        detail: "Pop-up coaching labs, rescue partnerships, and refer-a-friend loops drive 35% of signups.",
      },
      {
        title: "Trainer evangelists",
        detail: "Co-branded onboarding kits + revenue share turn pros into repeatable acquisition channels.",
      },
      {
        title: "API partnerships",
        detail: "Embedded insights inside insurance onboarding and smart home apps with co-marketing funds.",
      },
    ],
    stats: [
      { label: "CAC payback", value: "2.7 mo" },
      { label: "Referral mix", value: "42%", detail: "signups from community flywheel" },
      { label: "Partners in pipeline", value: "11" },
    ],
    background:
      "radial-gradient(circle at 12% 82%, rgba(192,132,252,0.32), transparent 50%), radial-gradient(circle at 88% 24%, rgba(56,189,248,0.25), rgba(15,23,42,0.97))",
    accent: "text-violet-200",
  },
  {
    id: "financials",
    label: "Financials",
    title: "Scaling with capital efficiency.",
    subtitle: "Current round powers national expansion, data moats, and enterprise readiness.",
    description:
      "We are raising our Seed+ to accelerate hardware partnerships, expand to 8 metros, and harden enterprise tooling.",
    points: [
      {
        title: "Raise",
        detail: "$6M Seed+ on SAFE ($28M cap, 20% discount). $2.4M committed from Companion Ventures + angels.",
      },
      {
        title: "Use of funds",
        detail: "40% product & AI, 35% go-to-market, 15% partner success, 10% compliance & ops.",
      },
      {
        title: "Milestones",
        detail: "1.5M behavior events/day, 1,500 trainers onboarded, $4M ARR run rate by Q2 next year.",
      },
    ],
    stats: [
      { label: "Burn", value: "$180K/mo", detail: "12 mo runway post raise" },
      { label: "Gross margin", value: "72%" },
    ],
    background:
      "radial-gradient(circle at 20% 25%, rgba(147,197,253,0.3), transparent 45%), radial-gradient(circle at 80% 90%, rgba(96,165,250,0.28), rgba(15,23,42,0.97))",
    accent: "text-sky-200",
  },
  {
    id: "team",
    label: "Team",
    title: "Led by operators who have shipped AI in the home.",
    subtitle: "We blend deep canine science, consumer software, and applied ML expertise.",
    description:
      "Our founding team previously scaled smart home AI to 4M devices and ran one of the largest rescue networks in the US.",
    points: [
      {
        title: "Elena Park, CEO",
        detail: "Built Alexa Guard (acq. 2020), fostered 120+ rescue dogs, MBA Wharton.",
      },
      {
        title: "Dr. Aaron Kim, CTO",
        detail: "Ex-DeepMind robotics, published 11 papers on animal pose estimation.",
      },
      {
        title: "Jules Bennett, COO",
        detail: "Former VP Ops at Rover, scaled sitter community to 200K pros.",
      },
    ],
    stats: [
      { label: "Advisors", value: "5", detail: "behaviorists & vet neurologists" },
      { label: "Employees", value: "18", detail: "distributed across SF, ATX, NYC" },
    ],
    quote: {
      text: "This team is pairing scientific rigor with consumer magic—exactly what the category needs.",
      author: "Lena Gupta",
      role: "General Partner, Companion Ventures",
    },
    action: {
      label: "Request full data room",
      href: "mailto:invest@fetchmind.ai",
      note: "Include firm name and fund size for priority access.",
    },
    background:
      "radial-gradient(circle at 82% 18%, rgba(248,250,252,0.22), transparent 55%), radial-gradient(circle at 6% 90%, rgba(74,222,128,0.3), rgba(15,23,42,0.97))",
    accent: "text-lime-200",
  },
];

const slideCount = slides.length;

const keyHelp = "Use ← → keys";

function SlideDeck() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((current) => Math.min(current + 1, slideCount - 1));
  }, []);

  const prev = useCallback(() => {
    setIndex((current) => Math.max(current - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const slide = slides[index];
  const progress = Math.round(((index + 1) / slideCount) * 100);

  return (
    <section className="grid gap-10">
      <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Slide {index + 1} of {slideCount}
            </p>
            <h2 className={`mt-2 text-xl font-semibold ${slide.accent}`}>
              {slide.label}
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <span className="hidden sm:inline" aria-hidden>
              {keyHelp}
            </span>
            <div className="flex rounded-full border border-white/10 bg-slate-800/70 p-1 shadow-inner">
              <button
                type="button"
                onClick={prev}
                className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={index === 0}
              >
                Prev
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={index === slideCount - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
          <span
            className="block h-full rounded-full bg-sky-400 transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-10 shadow-[0_40px_110px_-50px_rgba(56,189,248,0.6)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ background: slide.background }}
          aria-hidden
        />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
          <div className="flex flex-col gap-6">
            {slide.badge && (
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-100">
                {slide.badge}
              </span>
            )}
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {slide.title}
              </h3>
              <p className="text-lg text-slate-200 sm:text-xl">{slide.subtitle}</p>
              <p className="text-base text-slate-300 sm:text-lg">{slide.description}</p>
            </div>
            <ul className="grid gap-4 text-sm sm:text-base">
              {slide.points.map((point) => (
                <li
                  key={point.title}
                  className="flex gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 shadow-sm"
                >
                  <span
                    className={`mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-white/40 text-[10px] font-semibold uppercase ${slide.accent}`}
                    aria-hidden
                  >
                    ●
                  </span>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-100">{point.title}</p>
                    {point.detail && (
                      <p className="text-slate-300">{point.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {slide.action && (
              <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-black/40 p-5">
                <a
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                  href={slide.action.href ?? "#"}
                >
                  {slide.action.label}
                  <span aria-hidden className="text-base">
                    →
                  </span>
                </a>
                {slide.action.note && (
                  <p className="text-xs text-slate-300">{slide.action.note}</p>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6">
            {slide.stats && (
              <dl className="grid gap-4 rounded-2xl border border-white/15 bg-black/30 p-6">
                {slide.stats.map((stat) => (
                  <div key={stat.label} className="grid gap-1">
                    <dt className="text-xs uppercase tracking-[0.35em] text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className={`text-2xl font-semibold ${slide.accent}`}>
                      {stat.value}
                    </dd>
                    {stat.detail && (
                      <p className="text-xs text-slate-300">{stat.detail}</p>
                    )}
                  </div>
                ))}
              </dl>
            )}
            {slide.quote && (
              <blockquote className="rounded-2xl border border-white/15 bg-white/5 p-6 text-sm text-slate-200">
                <p className="text-base italic">“{slide.quote.text}”</p>
                <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                  {slide.quote.author}
                  {slide.quote.role ? ` · ${slide.quote.role}` : null}
                </footer>
              </blockquote>
            )}
            {!slide.stats && !slide.quote && (
              <div className="rounded-2xl border border-dashed border-white/15 bg-black/20 p-6 text-sm text-slate-300">
                Slide insights coming soon.
              </div>
            )}
          </div>
        </div>
      </article>

      <nav className="flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        {slides.map((item, idx) => {
          const isActive = idx === index;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(idx)}
              className={`group flex flex-col gap-1 rounded-2xl border px-4 py-3 text-left transition ${
                isActive
                  ? "border-white/60 bg-white/15 text-slate-50 shadow-lg"
                  : "border-white/5 bg-transparent text-slate-300 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-sm font-semibold leading-tight ${
                  isActive ? item.accent : "text-slate-100"
                }`}
              >
                {item.label}
              </span>
              <span className="text-[11px] text-slate-400">
                {item.title}
              </span>
            </button>
          );
        })}
      </nav>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_rgba(15,23,42,1))]" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-24 pt-20 sm:pt-24">
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold text-slate-100">
              FetchMind AI
            </span>
            <span className="text-slate-500">Investor Deck</span>
            <span className="text-slate-500">2024</span>
          </div>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Dog intelligence that keeps tails wagging and revenue growing.
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl">
              Explore our go-to-market vision, traction, and fundraising plan in an interactive deck designed for venture, strategic, and ecosystem partners.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Multimodal canine AI
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Behavior intelligence graph
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Hybrid B2C + B2B2C
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Seed+ raise
            </span>
          </div>
        </header>

        <SlideDeck />

        <footer className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-200">Invest@fetchmind.ai</p>
            <p>Request demo access or schedule a diligence session.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Prepared for partners · Q4 2024
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
