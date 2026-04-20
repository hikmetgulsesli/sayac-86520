import { Counter } from "./components/Counter"
import { ActionButtons } from "./components/ActionButtons"
import { HistoryList } from "./components/HistoryList"
import { ThemeToggle } from "./components/ThemeToggle"
import { useCounter } from "./hooks/useCounter"
import { useTheme } from "./hooks/useTheme"

export function App() {
  const { count, history, increment, decrement, reset, isAtMax } = useCounter()
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col overflow-x-hidden">
      {/* Max Limit Warning Toast */}
      {isAtMax && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
          <div className="bg-error-container/20 backdrop-blur-[20px] rounded-lg p-4 flex items-center gap-3 shadow-[0px_20px_40px_rgba(0,0,0,0.4)] ring-1 ring-error/30">
            <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
              warning
            </span>
            <p className="text-error font-body font-medium text-sm">
              Maksimum sayı limitine ulaşıldı! (999,999)
            </p>
          </div>
        </div>
      )}

      {/* Main Content - Centered */}
      <main className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row gap-12 items-center justify-center relative z-0">
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
              disabled={isAtMax}
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
        </section>
      </main>

      {/* Theme Toggle - Fixed top right */}
      <div className="fixed top-6 right-8 z-50">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>
    </div>
  )
}
