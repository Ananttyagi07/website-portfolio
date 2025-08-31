export default function HologramTitle() {
  return (
    <div className="absolute left-32 bottom-1/3 pointer-events-none z-20 animate-fade-in" style={{ animationDelay: '3.2s' }}>
      <h1 className="hologram-text text-2xl md:text-3xl tracking-wide font-orbitron">
        Click me!
      </h1>
      <p className="text-xs text-muted-foreground font-jetbrains mt-1 opacity-80">
        Ask anything...
      </p>
    </div>
  );
}
