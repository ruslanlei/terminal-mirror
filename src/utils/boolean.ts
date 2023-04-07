import { curry } from '@/utils/fp';
import lodashIsEqual from 'lodash/isEqual';

export const isEqual = curry(lodashIsEqual);

// right to left
export const isMoreThan = curry((
  operand1: number,
  operand2: number,
) => operand1 < operand2);

export const isMoreThanOrEqualTo = curry((
  operand1: number,
  operand2: number,
) => operand1 <= operand2);

export const isLessThan = curry((
  operand1: number,
  operand2: number,
) => operand1 > operand2);
