interface SidebarProps {
  isDark: boolean
  onToggleTheme: () => void
}

export function Sidebar({ isDark, onToggleTheme }: SidebarProps) {
  return (
    <nav
      className="hidden md:flex h-screen w-72 fixed left-0 top-0 z-40 bg-surface-container-low flex-col py-8 shadow-[20px_0px_40px_rgba(0,0,0,0.4)]"
      aria-label="Yan kenar çubuğu"
    >
      {/* Logo */}
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-black text-primary font-headline tracking-tighter">
          Neonist
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-2 px-4">
        {/* Dashboard - Active */}
        <a
          href="#"
          className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-r-full py-3 px-6 shadow-lg shadow-indigo-500/20 flex items-center gap-4 font-headline uppercase tracking-widest text-xs font-bold scale-105 transition-transform"
          aria-current="page"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            speed
          </span>
          <span>Dashboard</span>
        </a>

        {/* Statistics */}
        <a
          href="#"
          className="text-on-surface-variant py-3 px-6 hover:text-primary hover:bg-surface-container-high transition-all duration-200 flex items-center gap-4 font-headline uppercase tracking-widest text-xs font-bold rounded-r-full"
        >
          <span className="material-symbols-outlined">analytics</span>
          <span>Statistics</span>
        </a>

        {/* Settings */}
        <a
          href="#"
          className="text-on-surface-variant py-3 px-6 hover:text-primary hover:bg-surface-container-high transition-all duration-200 flex items-center gap-4 font-headline uppercase tracking-widest text-xs font-bold rounded-r-full"
        >
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </a>
      </div>

      {/* User Profile */}
      <div className="px-6 mt-auto pt-6 border-t border-outline-variant/15">
        <div className="flex items-center gap-3 py-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface-variant">person</span>
          </div>
          <div>
            <p className="font-headline text-sm font-bold text-on-surface">Kullanıcı</p>
            <p className="text-xs text-on-surface-variant">Aktif</p>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="px-6 mt-2">
        <button
          onClick={onToggleTheme}
          aria-label={isDark ? "Açık moda geç" : "Koyu moda geç"}
          className="w-full flex items-center gap-4 font-headline uppercase tracking-widest text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 rounded-r-full py-3 px-6 cursor-pointer"
        >
          <span className="material-symbols-outlined">
            {isDark ? "dark_mode" : "light_mode"}
          </span>
          <span>{isDark ? "Koyu Mod" : "Açık Mod"}</span>
        </button>
      </div>
    </nav>
  )
}
