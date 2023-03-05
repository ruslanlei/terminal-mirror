export const getCssVariable = (
  variable: string,
) => getComputedStyle(document.body)
  .getPropertyValue(variable);

export const getCssRgbColor = (
  variable: string,
) => `rgb(${getCssVariable(variable)})`;

export const toCssPixelValue = (
  value: string | number,
) => `${value}px`;

export const toPositiveNumberString = (
  number: number,
) => `+${number}`;

export const toIdSelector = (
  id: string | number,
) => `#${id}`;
