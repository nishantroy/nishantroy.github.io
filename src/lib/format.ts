const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2024-08" -> "Aug 2024", "2024" -> "2024", undefined -> fallback. */
export function formatYearMonth(value: string | undefined, fallback = 'Present'): string {
  if (!value) return fallback;
  const [year, month] = value.split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function yearOf(value: string | undefined): string {
  return value ? value.slice(0, 4) : 'Undated';
}

/** Sort key: newest first; undated entries sink to the bottom. */
export function byDateDesc<T extends { data: { date?: string } }>(a: T, b: T): number {
  return (b.data.date ?? '0000').localeCompare(a.data.date ?? '0000');
}
