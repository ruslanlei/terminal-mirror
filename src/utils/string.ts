export const replaceAt = (
  str: string,
  index: number,
  char: string,
) => `${str.substring(0, index)}${char}${str.substring(index + 1)}`;

export const capitalizeFirstLetter = (
  string: string,
) => string.charAt(0).toUpperCase() + string.slice(1);

export const firstLetter = (string: string) => string.charAt(0);
