interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Açık moda geç" : "Koyu moda geç"}
      className="text-slate-400 hover:text-indigo-200 hover:bg-indigo-500/10 transition-colors duration-300 p-2 rounded-full cursor-pointer"
    >
      <span className="material-symbols-outlined">
        {isDark ? "dark_mode" : "light_mode"}
      </span>
    </button>
  )
}
