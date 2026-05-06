type SectionHeadingProps = {
  label: string;
  title: string;
  text?: string;
  className?: string;
};

export function SectionHeading({ label, title, text, className = "" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="text-xs font-light uppercase tracking-widest text-brand">{label}</p>
      <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground md:text-5xl">{title}</h2>
      {text ? <p className="mt-6 text-base font-extralight leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
