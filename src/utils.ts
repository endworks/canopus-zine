export const minutesToString = (min: number) => {
  const hour = Math.floor(min / 60);
  const minutes = min % 60;
  return `${hour}:${minutes < 10 ? '0' + minutes : minutes}`;
};
