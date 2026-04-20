interface MobileHeaderProps {
  isDark: boolean
  onToggleTheme: () => void
}

export function MobileHeader({ isDark, onToggleTheme }: MobileHeaderProps) {
  return (
    <header
      className="md:hidden fixed top-0 left-0 right-0 z-50 bg-surface-container-low flex justify-between items-center w-full px-6 py-4"
      role="banner"
    >
      {/* Logo */}
      <h1 className="text-2xl font-black text-primary font-headline tracking-tighter">
        Neonist
      </h1>

      {/* Theme Toggle */}
      <button
        onClick={onToggleTheme}
        aria-label={isDark ? "Açık moda geç" : "Koyu moda geç"}
        className="text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors duration-300 p-2 rounded-full cursor-pointer active:scale-95 duration-150"
      >
        <span className="material-symbols-outlined">
          {isDark ? "dark_mode" : "light_mode"}
        </span>
      </button>
    </header>
  )
}
