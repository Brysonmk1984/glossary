export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" } as const;
  return date.toLocaleDateString("en-US", options);
}
