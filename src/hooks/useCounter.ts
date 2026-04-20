import { useState, useEffect, useCallback } from "react"
import type { CounterState } from "../types"
import { loadState, saveState, addHistoryEntry } from "../utils/storage"

const MAX_COUNT = 999999

export function useCounter() {
  const [state, setState] = useState<CounterState>(() => loadState())

  useEffect(() => {
    saveState(state)
  }, [state])

  const increment = useCallback(() => {
    setState((prev) => {
      if (prev.count >= MAX_COUNT) return prev
      const newHistory = addHistoryEntry(prev, "increment", prev.count + 1)
      return { count: prev.count + 1, history: newHistory }
    })
  }, [])

  const decrement = useCallback(() => {
    setState((prev) => {
      const newHistory = addHistoryEntry(prev, "decrement", prev.count - 1)
      return { count: prev.count - 1, history: newHistory }
    })
  }, [])

  const reset = useCallback(() => {
    setState((prev) => {
      const newHistory = addHistoryEntry(prev, "reset", 0)
      return { count: 0, history: newHistory }
    })
  }, [])

  return {
    count: state.count,
    history: state.history,
    increment,
    decrement,
    reset,
    isAtMax: state.count >= MAX_COUNT,
  }
}
