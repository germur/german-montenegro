// Words need spacing; numeric symbols stay attached to the value.
export function formatStat(value, suffix = '') {
  const number = String(value ?? '').trim();
  const unit = String(suffix ?? '').trim();
  if (!unit) return number;
  if (unit.toLowerCase() === 'cinturón') return `Cinturón ${number.toLowerCase()}`;
  return number + (/^[+%°/]/.test(unit) ? '' : ' ') + unit;
}
