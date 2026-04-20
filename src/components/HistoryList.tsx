import type { HistoryEntry } from "../types"
import { HistoryItem } from "./HistoryItem"

interface HistoryListProps {
  history: HistoryEntry[]
}

export function HistoryList({ history }: HistoryListProps) {
  if (history.length === 0) {
    return (
      <div className="w-full max-w-sm text-center flex flex-col items-center justify-center gap-6">
        <div className="w-32 h-32 rounded-full bg-surface-container-high flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] mb-4">
          <span className="material-symbols-outlined text-6xl text-outline opacity-50">
            history_toggle_off
          </span>
        </div>
        <h3 className="font-headline text-2xl font-bold text-on-surface">Geçmiş</h3>
        <p className="font-body text-on-surface-variant text-lg">
          Henüz işlem yapılmadı
        </p>
        <div className="mt-8 px-6 py-4 bg-surface-container rounded-xl w-full border border-outline-variant/15 text-sm text-on-surface-variant text-center">
          İlk işleminizi yaptığınızda geçmiş burada görünecektir.
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {history.map((entry) => (
        <HistoryItem key={entry.id} entry={entry} />
      ))}
    </div>
  )
}
