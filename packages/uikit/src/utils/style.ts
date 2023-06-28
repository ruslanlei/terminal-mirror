import { isPositive } from '@terminal/common/utils/number';
import { getCssVariable } from '@/utils/dom';

export const toCssPxValue = (
  value: number,
) => `${value}px`;

export const getCssRgbColor = (
  variable: string,
) => `rgb(${getCssVariable(variable)})`;

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

export const toPnlString = (
  value: number,
) => (
  isPositive(value)
    ? toPositiveNumberString(value)
    : String(value)
);
