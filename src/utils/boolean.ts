import { curry } from '@/utils/fp';
import lodashIsEqual from 'lodash/isEqual';

export const isEqual = curry(lodashIsEqual);

export const ensureOrFallback = curry(
  (
    validator: (value: any) => boolean,
    defaultValue: any | ((value: any) => boolean),
    value: any,
  ) => (
    validator(value) ? value : (
      typeof defaultValue === 'function'
        ? defaultValue(value)
        : defaultValue
    )
  ),
);

// right to left
export const isMoreThanLeft = curry((
  operand1: number,
  operand2: number,
) => operand1 < operand2);

export const isMoreThanOrEqualTo = curry((
  operand1: number,
  operand2: number,
) => operand1 <= operand2);

export const isLessThanLeft = curry((
  operand1: number,
  operand2: number,
) => operand1 > operand2);
