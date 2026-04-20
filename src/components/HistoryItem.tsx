import type { HistoryEntry } from "../types"
import { formatDateTime } from "../utils/time"

interface HistoryItemProps {
  entry: HistoryEntry
}

export function HistoryItem({ entry }: HistoryItemProps) {
  const { date, time } = formatDateTime(entry.timestamp)

  const actionLabels: Record<HistoryEntry["action"], { label: string; color: string; badge: string }> = {
    increment: {
      label: "Arttırıldı",
      color: "bg-success",
      badge: `+${entry.value - entry.previousValue}`,
    },
    decrement: {
      label: "Azaltıldı",
      color: "bg-tertiary-container",
      badge: `${entry.value - entry.previousValue}`,
    },
    reset: {
      label: "Sıfırlandı",
      color: "bg-error",
      badge: "(0)",
    },
  }

  const { label, color, badge } = actionLabels[entry.action]

  return (
    <div className="bg-surface-container rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden group">
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${color} opacity-50`} />
      <div className="flex items-center justify-between">
        <span className="font-body font-semibold text-on-surface flex items-center gap-2">
          {label}{" "}
          <span className={`text-sm ${entry.action === "decrement" ? "text-tertiary" : entry.action === "reset" ? "text-error" : "text-success"}`}>
            ({badge})
          </span>
        </span>
        <span className="font-mono text-xs text-on-surface-variant">{date}</span>
      </div>
      <div className="font-mono text-xs text-on-surface-variant opacity-70">{time}</div>
    </div>
  )
}
