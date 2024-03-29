import flowRight from 'lodash/flowRight';
import curry from 'lodash/curry';
import { DeepPartial } from './typescript';

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
};

export type CurriedFunc<F extends (...args: any) => any> = (
  ...args: DeepPartial<Parameters<F>>
) => ReturnType<F>;

export const ERR = curry((
  prefix: string,
  text: string | Error,
) => {
  throw new Error(`[prefix]: ${text}`);
});
