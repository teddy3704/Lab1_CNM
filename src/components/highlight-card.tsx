type HighlightCardProps = {
  title: string;
  description: string;
  tone: "orange" | "sky";
};

const toneClasses: Record<HighlightCardProps["tone"], string> = {
  orange: "bg-orange-50 text-orange-700",
  sky: "bg-sky-50 text-sky-700",
};

export function HighlightCard({ title, description, tone }: HighlightCardProps) {
  return (
    <div className={`rounded-3xl p-5 ${toneClasses[tone]}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.15em]">{title}</p>
      <p className="mt-3 text-base leading-7 text-slate-700">{description}</p>
    </div>
  );
}