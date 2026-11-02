/** Formats a date as YYYY-MM-DD in UTC. */
export function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
