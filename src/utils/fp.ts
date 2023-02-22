import flowRight from 'lodash/flowRight';
import map from 'lodash/map';
import curry from 'lodash/curry';
import { DeepPartial } from '@/utils/typescript';

export const log = curry((
  message: string | number,
  value: any,
) => {
  console.log(message, value);
  return value;
});

export {
  curry,
  flowRight as compose,
  map,
};

export type CurriedFunc<F extends (...args: any) => any> = (
  ...args: DeepPartial<Parameters<F>>
) => ReturnType<F>;
