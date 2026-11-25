const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

/** Fecha sólo-día `aaaa-mm-dd` como `dd/mmm/aaaa`, sin `new Date()` (evita restar un día). */
export function formatDateOnly(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${m[3]}/${MONTHS[Number(m[2]) - 1]}/${m[1]}`;
}

/** Fecha y hora en `dd/mmm/aaaa hh:mm` (24 h, America/Mexico_City). */
export function formatDateTime(date: Date): string {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("es-MX", {
      timeZone: "America/Mexico_City",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  return `${parts.day}/${MONTHS[Number(parts.month) - 1]}/${parts.year} ${parts.hour}:${parts.minute}`;
}
