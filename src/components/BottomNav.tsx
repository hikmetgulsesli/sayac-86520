interface BottomNavProps {
  activeTab?: 'dashboard' | 'stats' | 'settings'
}

export function BottomNav({ activeTab = 'dashboard' }: BottomNavProps) {
  return (
    <nav
      className="md:hidden fixed bottom-0 w-full bg-surface-container-low border-t border-outline-variant/15 py-3 px-6 flex justify-around z-50 glass-panel"
      role="navigation"
      aria-label="Alt navigasyon"
    >
      {/* Dashboard */}
      <a
        href="#"
        className={`flex flex-col items-center gap-1 font-headline text-xs font-bold cursor-pointer transition-colors ${
          activeTab === 'dashboard'
            ? 'text-primary'
            : 'text-on-surface-variant hover:text-primary-container'
        }`}
        aria-current={activeTab === 'dashboard' ? 'page' : undefined}
      >
        <span
          className="material-symbols-outlined"
          style={activeTab === 'dashboard' ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          speed
        </span>
        <span className="text-[10px] uppercase tracking-wider">Dashboard</span>
      </a>

      {/* Stats */}
      <a
        href="#"
        className={`flex flex-col items-center gap-1 font-headline text-xs font-bold cursor-pointer transition-colors ${
          activeTab === 'stats'
            ? 'text-primary'
            : 'text-on-surface-variant hover:text-primary-container'
        }`}
        aria-current={activeTab === 'stats' ? 'page' : undefined}
      >
        <span className="material-symbols-outlined">analytics</span>
        <span className="text-[10px] uppercase tracking-wider">Stats</span>
      </a>

      {/* Settings */}
      <a
        href="#"
        className={`flex flex-col items-center gap-1 font-headline text-xs font-bold cursor-pointer transition-colors ${
          activeTab === 'settings'
            ? 'text-primary'
            : 'text-on-surface-variant hover:text-primary-container'
        }`}
        aria-current={activeTab === 'settings' ? 'page' : undefined}
      >
        <span className="material-symbols-outlined">settings</span>
        <span className="text-[10px] uppercase tracking-wider">Settings</span>
      </a>
    </nav>
  )
}
