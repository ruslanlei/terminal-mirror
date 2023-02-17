import flatten from 'lodash/flatten';
import concat from 'lodash/concat';
import lodashReduceRight from 'lodash/reduceRight';
import {
  map as rambdaMap,
  reduce as rambdaReduce,
  filter as rambdaFilter,
} from 'rambda';
import collect from 'collect.js';

import { curry, CurriedFunc } from '@/utils/fp';

export { flatten, concat };

export const arrayFrom = (value: any | any[]) => (Array.isArray(value) ? value : [value]);

export const arrayOf = curry((
  initializer: () => any,
  length: number,
) => Array(length).fill(0).map(initializer));

export const getLength = (array: any[]) => array.length;

export const getLastElement = (
  array: any[],
) => array?.at(-1) || null;

export const filterNoneUniqueByKey = curry((
  key: string | number,
  array: any[],
) => collect(array).unique(key).all());

export const findMaxByKey = curry((
  key: string | number,
  array: (Record<any, any> | Array<any>)[],
) => collect(array).max(String(key)));

export const findMinByKey = curry((
  key: string | number,
  array: (Record<any, any> | Array<any>)[],
) => collect(array).min(String(key)));

export const arraySum = (
  array: number[],
) => collect(array).sum();

export const map = curry(rambdaMap<any, any>);
export const reduce = curry(rambdaReduce<any, any>) as typeof rambdaReduce;

export const reduceRight = curry(
  lodashReduceRight,
) as CurriedFunc<typeof lodashReduceRight<any, any>>;

export const filter = curry(rambdaFilter) as CurriedFunc<(
  predicate: (...args: any[]) => boolean,
  array: any[],
) => any>;
