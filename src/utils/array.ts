import flatten from 'lodash/flatten';
import concat from 'lodash/concat';

import collect from 'collect.js';
import { curry } from '@/utils/fp';

export { flatten, concat };

export const arrayFrom = (value: any | any[]) => (Array.isArray(value) ? value : [value]);

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
