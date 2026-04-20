interface ActionButtonsProps {
  onIncrement: () => void
  onDecrement: () => void
  onReset: () => void
  disabled?: boolean
}

export function ActionButtons({
  onIncrement,
  onDecrement,
  onReset,
  disabled = false,
}: ActionButtonsProps) {
  return (
    <div className="flex gap-6 mt-8">
      {/* Decrement Button */}
      <button
        onClick={onDecrement}
        aria-label="Azalt"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-highest border border-outline-variant/15 flex items-center justify-center text-on-surface-variant hover:bg-surface-bright transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-4xl">remove</span>
      </button>

      {/* Increment Button */}
      <button
        onClick={onIncrement}
        aria-label="Artır"
        disabled={disabled}
        className={`h-20 md:h-24 px-12 md:px-16 rounded-full font-headline font-bold text-2xl md:text-3xl shadow-[0px_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-4 cursor-pointer transition-transform ${
          disabled
            ? "bg-surface-variant text-on-surface-variant opacity-50 cursor-not-allowed border border-outline-variant/15 shadow-none"
            : "bg-gradient-to-br from-primary to-primary-container text-on-primary hover:scale-105 active:scale-95"
        }`}
      >
        <span className="material-symbols-outlined text-3xl filled">add</span>
        Artır
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        aria-label="Sıfırla"
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-highest border border-outline-variant/15 flex items-center justify-center text-error hover:bg-error-container hover:text-on-error-container transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-3xl">restart_alt</span>
      </button>
    </div>
  )
}
