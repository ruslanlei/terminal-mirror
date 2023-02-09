import flatten from 'lodash/flatten';
import concat from 'lodash/concat';

import collect from 'collect.js';
import { curry } from '@/utils/fp';

export { flatten, concat };

export const arrayFrom = (value: any | any[]) => (Array.isArray(value) ? value : [value]);

export const filterByUniqueKey = curry((
  key: string | number,
  array: any[],
) => collect(array).unique(key).all());
