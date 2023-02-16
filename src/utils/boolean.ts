import { curry } from '@/utils/fp';

// right to left
export const isMoreThan = curry((
  operand1: number,
  operand2: number,
) => operand1 < operand2);
