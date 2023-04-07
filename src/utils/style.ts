import { getCssVariable } from '@/utils/dom';

export const toCssPxValue = (
  value: number,
) => `${value}px`;

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
