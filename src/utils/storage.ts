import type { CounterState, HistoryEntry } from '../types'

const STORAGE_KEY = 'sayac_state'

export function loadState(): CounterState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      return JSON.parse(raw) as CounterState
    }
  } catch {
    // ignore parse errors
  }
  return { count: 0, history: [] }
}

export function saveState(state: CounterState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore storage errors
  }
}

export function addHistoryEntry(
  state: CounterState,
  action: HistoryEntry['action'],
  value: number,
): HistoryEntry[] {
  const entry: HistoryEntry = {
    id: crypto.randomUUID(),
    action,
    value,
    timestamp: Date.now(),
    previousValue: state.count,
  }
  const history = [entry, ...state.history].slice(0, 10)
  return history
}
