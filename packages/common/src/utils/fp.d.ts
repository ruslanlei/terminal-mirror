import flowRight from 'lodash/flowRight';
import curry from 'lodash/curry';
import { DeepPartial } from './typescript';
export declare const log: import("lodash").CurriedFunction2<string | number, any, any>;
export { curry, flowRight as compose, };
export type CurriedFunc<F extends (...args: any) => any> = (...args: DeepPartial<Parameters<F>>) => ReturnType<F>;
export declare const ERR: import("lodash").CurriedFunction2<string, string | Error, never>;
