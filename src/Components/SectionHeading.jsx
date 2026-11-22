export default function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
      <div className="reveal">
        <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-flame">
          <span className="h-px w-8 bg-flame" /> {index} / {eyebrow}
        </p>
        <h2 className="section-title mt-5 font-display uppercase leading-[0.88] tracking-tight">
          {title}
          <br />
          <span className="text-stroke">{accent}</span>
        </h2>
      </div>
      {description ? (
        <p
          className="reveal max-w-sm text-sm leading-relaxed text-white/50 lg:justify-self-end lg:pb-2"
          style={{ "--d": "120ms" }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
