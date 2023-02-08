export const getCssVariable = (
  variable: string,
) => getComputedStyle(document.body)
  .getPropertyValue(variable);

export const getCssRgbColor = (
  variable: string,
) => `rgb(${getCssVariable(variable)})`;
