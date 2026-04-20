interface CounterProps {
  count: number
}

export function Counter({ count }: CounterProps) {
  const formatted = count.toLocaleString("tr-TR")

  return (
    <div className="relative w-full aspect-square max-w-[400px] flex items-center justify-center mb-12">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-secondary-container rounded-full opacity-40 blur-3xl scale-125" />
      {/* Counter Display */}
      <div className="relative z-10 bg-surface-container-low/60 backdrop-blur-md rounded-full w-full h-full flex flex-col items-center justify-center shadow-[0px_20px_40px_rgba(0,0,0,0.4)]">
        <p className="font-headline text-on-surface-variant text-lg tracking-widest uppercase mb-2">
          Güncel Sayım
        </p>
        <h1 className="font-mono text-7xl md:text-8xl font-bold text-on-surface tracking-tighter tabular-nums">
          {formatted}
        </h1>
      </div>
    </div>
  )
}
