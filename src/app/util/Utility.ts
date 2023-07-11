export const getLocal = (key: string): string | null => {
  return localStorage?.getItem(key);
};

export const setLocal = (key: string, value: string) => {
  return localStorage?.setItem(key, value);
};
