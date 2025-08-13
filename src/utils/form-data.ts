
export function formatDate(isoDate: string): string {
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr"
  ];

  const date = new Date(isoDate);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = months[date.getMonth()];

  return `${day} ${month} ${year}`;
}