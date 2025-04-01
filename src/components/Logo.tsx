export function Logo({ large = false }: { large?: boolean }) {
  return (
    <div className={`${large ? "text-5xl" : "text-2xl"} font-bold`}>
      <span className="text-primary font-thin">QUIZ</span>
      <span className="text-primary">Mania</span>
    </div>
  );
}
