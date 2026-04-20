import type { HistoryEntry } from "../types"

export function useHistory(history: HistoryEntry[]) {
  return {
    history,
    isEmpty: history.length === 0,
  }
}
