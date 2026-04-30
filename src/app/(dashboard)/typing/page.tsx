import React from "react";

type Layer = {
  key: string;
  title: string;
  result: string;
  confidence: number;
  note: string;
  status: "resolved" | "refinable";
};

type UserProfile = {
  kibbe: string;
  season: string;
  essence: string[];
  descriptors: string[];
  confidence: {
    kibbe: number;
    color: number;
    essence: number;
  };
  layers: Layer[];
  palette: string[];
};

const userProfile: UserProfile = {
  kibbe: "Soft Natural",
  season: "Soft Autumn",
  essence: ["Natural", "Romantic"],
  descriptors: ["Warm", "Muted", "Soft Structure", "Natural Presence"],
  confidence: {
    kibbe: 0.82,
    color: 0.76,
    essence: 0.71,
  },
  layers: [
    {
      key: "structure",
      title: "Structure",
      result: "Soft Natural",
      confidence: 0.82,
      note: "Width + softness, relaxed drape over rigid tailoring",
      status: "resolved",
    },
    {
      key: "color",
      title: "Color",
      result: "Soft Autumn",
      confidence: 0.76,
      note: "Warm, muted tones with low-medium contrast",
      status: "refinable",
    },
    {
      key: "presence",
      title: "Presence",
      result: "Natural + Romantic",
      confidence: 0.71,
      note: "Soft, approachable presence with gentle femininity",
      status: "refinable",
    },
  ],
  palette: [
    "#A3A380",
    "#7C8C4A",
    "#C97B5A",
    "#D2A679",
    "#E6B8A2",
    "#5E6B3C",
    "#B8A58A",
    "#C89B3C",
  ],
};

function ProfileHeader({ profile }: { profile: UserProfile }) {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:gap-10">
      <div className="aspect-square w-full rounded-2xl border border-[#e8e3dc] bg-[#efe9e1]" />
      <div className="flex flex-col justify-center gap-5">
        <h1 className="font-serif text-4xl leading-tight text-[#2f2a24] md:text-5xl">Your Profile</h1>
        <p className="text-base leading-tight text-[#5a5046]">{profile.descriptors.join(" · ")}</p>
        <p className="max-w-2xl text-base leading-tight text-[#4f463e]">
          Your profile combines relaxed structure, warm muted color harmony, and a soft natural presence.
        </p>
        <div className="flex flex-wrap items-center gap-6 text-sm leading-tight text-[#4f463e]">
          <span>Structure {Math.round(profile.confidence.kibbe * 100)}%</span>
          <span>Color {Math.round(profile.confidence.color * 100)}%</span>
          <span>Presence {Math.round(profile.confidence.essence * 100)}%</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl border border-[#d2aa72] bg-[#d2aa72] px-5 py-2 text-sm font-medium text-[#2f2a24]">
            Refine Analysis
          </button>
          <button className="rounded-xl border border-[#e8e3dc] bg-[#f7f3ee] px-5 py-2 text-sm font-medium text-[#4f463e]">
            Retake (Form)
          </button>
          <button className="rounded-xl border border-[#e8e3dc] bg-[#f7f3ee] px-5 py-2 text-sm font-medium text-[#4f463e]">
            Retake (Photo)
          </button>
        </div>
      </div>
    </section>
  );
}

function ProfileSnapshot({ profile }: { profile: UserProfile }) {
  const rules = [
    "Soft drape over rigid structure",
    "Warm muted tones",
    "Natural textured fabrics",
    "Relaxed, approachable styling",
  ];

  return (
    <section className="rounded-2xl border border-[#e8e3dc] bg-[#f3eee7] p-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="grid grid-cols-4 gap-3">
          {profile.palette.map((color) => (
            <div
              key={color}
              className="aspect-square rounded-lg border border-[#e8e3dc]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <ul className="list-disc space-y-3 pl-6 text-sm leading-tight text-[#4f463e]">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AnalysisLayerItem({ layer }: { layer: Layer }) {
  return (
    <div className="flex items-start justify-between gap-6 rounded-2xl border border-[#e8e3dc] p-5">
      <div className="space-y-2">
        <h3 className="font-serif text-xl leading-tight text-[#2f2a24]">{layer.title}</h3>
        <p className="text-base font-semibold leading-tight text-[#3f372f]">{layer.result}</p>
        <p className="text-sm leading-tight text-[#5f554b]">{layer.note}</p>
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <p className="text-sm leading-tight text-[#4f463e]">{Math.round(layer.confidence * 100)}%</p>
        <button className="rounded-xl border border-[#e8e3dc] bg-[#f7f3ee] px-4 py-2 text-sm font-medium text-[#4f463e]">
          Refine
        </button>
      </div>
    </div>
  );
}

function AnalysisState() {
  return (
    <section className="rounded-2xl border border-[#e8e3dc] bg-[#f7f3ee] px-6 py-5">
      <div className="flex flex-col justify-between gap-4 text-sm leading-tight text-[#4f463e] md:flex-row md:items-center md:text-base">
        <p>Current Phase: Color refinement</p>
        <p>Last Updated: 2 min ago</p>
        <p>Iterations: 5</p>
      </div>
    </section>
  );
}

function RefinementCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-[#e8e3dc] bg-[#f7f3ee] p-5">
      <div className="space-y-2">
        <h3 className="font-serif text-xl leading-tight text-[#2f2a24]">{title}</h3>
        <p className="text-sm leading-tight text-[#5f554b]">{description}</p>
      </div>
      <button className="w-fit rounded-xl border border-[#e8e3dc] bg-[#f7f3ee] px-4 py-2 text-sm font-medium text-[#4f463e]">
        Start
      </button>
    </div>
  );
}

export default function TypingPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] px-6 py-10 text-[#2f2a24] md:px-10 md:py-14">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-14 md:gap-16">
        <ProfileHeader profile={userProfile} />
        <ProfileSnapshot profile={userProfile} />
        <section className="space-y-4">
          {userProfile.layers.map((layer) => (
            <AnalysisLayerItem key={layer.key} layer={layer} />
          ))}
        </section>
        <AnalysisState />
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <RefinementCard title="Re-evaluate Structure" description="Run another pass on silhouette balance and line accommodation." />
          <RefinementCard title="Re-check Color" description="Validate warmth, value depth, and contrast harmony." />
          <RefinementCard title="Adjust Presence" description="Refine essence weighting for overall styling direction." />
        </section>
      </div>
    </main>
  );
}
