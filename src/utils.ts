export const minutesToString = (min: number): string => {
  const hour = Math.floor(min / 60);
  const minutes = min % 60;
  return `${hour}h${minutes > 0 ? ` ${minutes}m` : ''}`;
};

export const sanitizeTitle = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[:,.]/gm, '')
    .replace(/4k/gm, '')
    .replace(/á/gm, 'a')
    .replace(/é/gm, 'e')
    .replace(/í/gm, 'i')
    .replace(/ó/gm, 'o')
    .replace(/ú/gm, 'u')
    .replace(/ñ/gm, 'n')
    .trim();
};

export const ttlCache = 21600; // 12 hours
export const ttlCacheDaily = 43200; // 1 day
