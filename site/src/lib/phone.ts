// Teléfono México a 10 dígitos, formato "442 123 4567".
export function phoneDigits(value = "") {
  let d = String(value).replace(/\D/g, "");
  if (d.length > 10 && d.startsWith("52")) d = d.slice(2); // +52
  if (d.length > 10 && d.startsWith("1")) d = d.slice(1); // 52 1 antiguo
  return d.slice(0, 10);
}

export function formatPhone(value = "") {
  const d = phoneDigits(value);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`;
  return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`;
}

// Posición del cursor tras reformatear: cuenta dígitos a la izquierda del cursor.
export function caretAfterFormat(formatted: string, digitsBefore: number) {
  if (digitsBefore <= 0) return 0;
  let seen = 0;
  for (let i = 0; i < formatted.length; i += 1) {
    if (/\d/.test(formatted[i])) seen += 1;
    if (seen === digitsBefore) return i + 1;
  }
  return formatted.length;
}
