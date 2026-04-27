type HighlightCardProps = {
  title: string;
  description: string;
  tone: "orange" | "sky";
};

const toneClasses: Record<HighlightCardProps["tone"], string> = {
  orange:
    "border border-[#d9a46f]/70 bg-[linear-gradient(180deg,rgba(255,243,228,0.98),rgba(255,252,247,0.88))] text-[#8d481e]",
  sky:
    "border border-[#98c7c1]/70 bg-[linear-gradient(180deg,rgba(233,247,245,0.98),rgba(255,252,247,0.88))] text-[#0f4f48]",
};

const accentClasses: Record<HighlightCardProps["tone"], string> = {
  orange: "bg-[#d56c2f]",
  sky: "bg-[#155e63]",
};

export function HighlightCard({ title, description, tone }: HighlightCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.8rem] p-5 shadow-[0_18px_44px_rgba(15,23,42,0.08)] ${toneClasses[tone]}`}
    >
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-white/25 blur-2xl" />
      <div className={`h-1.5 w-16 rounded-full ${accentClasses[tone]}`} />
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em]">
        {title}
      </p>
      <p className="mt-3 text-base leading-7 text-slate-700">{description}</p>
    </div>
  );
}