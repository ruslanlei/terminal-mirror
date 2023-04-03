export const getCssVariable = (
  variable: string, // argument format: --variable-name
) => getComputedStyle(document.body)
  .getPropertyValue(variable);

export const getCssRgbColor = (
  variable: string,
) => `rgb(${getCssVariable(variable)})`;

export const toCssPixelValue = (
  value: string | number,
) => `${value}px`;

export const toCssClassSelector = (
  value: string | number,
) => `.${value}`;

export const toPositiveNumberString = (
  number: number | string,
) => `+${number}`;

export const toIdSelector = (
  id: string | number,
) => `#${id}`;

export const toCssPercentValue = (
  percents: number,
) => `${percents}%`;

export const querySelectorAll = (
  selector: string,
) => document.querySelectorAll(selector);

export const getElementById = (id: string) => document.getElementById(id);
