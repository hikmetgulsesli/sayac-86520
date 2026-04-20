import { Counter } from "./components/Counter"
import { ActionButtons } from "./components/ActionButtons"
import { HistoryList } from "./components/HistoryList"
import { Sidebar } from "./components/Sidebar"
import { MobileHeader } from "./components/MobileHeader"
import { BottomNav } from "./components/BottomNav"
import { useCounter } from "./hooks/useCounter"
import { useTheme } from "./hooks/useTheme"

export function App() {
  const { count, history, increment, decrement, reset } = useCounter()
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col overflow-x-hidden">
      {/* Desktop Sidebar - hidden on mobile */}
      <Sidebar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Mobile Header - shown on mobile only */}
      <MobileHeader isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 relative z-0 pt-20 md:pt-6">
        {/* Counter Section - Left */}
        <section className="flex-1 flex flex-col items-center justify-center min-h-[500px] relative">
          {/* Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[-1]">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-secondary-container rounded-full blur-[100px] opacity-40 translate-x-8 translate-y-8" />
            <div className="w-48 h-48 md:w-72 md:h-72 bg-primary-container rounded-full blur-[80px] opacity-20 -translate-x-12 -translate-y-12" />
          </div>

          {/* Counter + Buttons */}
          <div className="z-10 flex flex-col items-center">
            <Counter count={count} />
            <ActionButtons
              onIncrement={increment}
              onDecrement={decrement}
              onReset={reset}
            />
          </div>
        </section>

        {/* History Section - Right */}
        <section className="w-full lg:w-96 bg-surface-container-low rounded-xl p-6 lg:p-8 flex flex-col shadow-[0px_20px_40px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">
              Değişiklik Geçmişi
            </h3>
            <span className="material-symbols-outlined text-primary">history</span>
          </div>
          <div className="flex-1 overflow-y-auto">
            <HistoryList history={history} />
          </div>
          {history.length > 0 && (
            <button className="w-full mt-6 py-3 font-body text-sm font-medium text-primary hover:text-primary-fixed-dim transition-colors duration-200 cursor-pointer">
              Tüm Geçmişi Gör
            </button>
          )}
        </section>
      </main>

      {/* Mobile Bottom Navigation - shown on mobile only */}
      <BottomNav activeTab="dashboard" />
    </div>
  )
}
