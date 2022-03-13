// --- Intl.NumberFormat() ada di docs developer.mozilla.org
export default function formatNumber(number) {
  const formatNumbering = new Intl.NumberFormat('id-ID');
  return formatNumbering.format(number);
}
