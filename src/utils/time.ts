export function formatDate(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

export function formatDateTime(timestamp: number): { date: string; time: string } {
  return {
    date: formatDate(timestamp),
    time: formatTime(timestamp),
  }
}
