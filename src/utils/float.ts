import currency from 'currency.js';

export const multiply = (
  value: number,
  multiplier: number,
  precision = 0,
) => currency(value, { precision }).multiply(multiplier).value;

export const divide = (
  value: number,
  divider: number,
  precision = 0,
) => currency(value, { precision }).divide(divider).value;
