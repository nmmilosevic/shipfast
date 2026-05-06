type LogoProps = {
  className?: string;
};

export function LogoMark({ className }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="Buildwise"
      className={`font-heading font-light tracking-tight ${className ?? ""}`}
    >
      Buildwise
    </span>
  );
}
