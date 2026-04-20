export interface HistoryEntry {
  id: string
  action: 'increment' | 'decrement' | 'reset'
  value: number
  timestamp: number
  previousValue: number
}

export interface CounterState {
  count: number
  history: HistoryEntry[]
}

export type ThemeMode = 'light' | 'dark'

export interface AppSettings {
  theme: ThemeMode
}
