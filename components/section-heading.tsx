type SectionHeadingProps = {
  label: string;
  title: string;
  text?: string;
  kicker?: string;
  className?: string;
};

export function SectionHeading({ label, title, text, kicker, className = "" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="inline-flex rounded-full px-3 py-1 text-xs font-light uppercase tracking-widest stamp">{label}</p>
      <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground md:text-5xl">{title}</h2>
      {text ? <p className="mt-6 text-base font-extralight leading-8 text-muted">{text}</p> : null}
      {kicker ? <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-foreground">{kicker}</p> : null}
    </div>
  );
}
