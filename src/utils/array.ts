import flatten from 'lodash/flatten';
import concat from 'lodash/concat';
import repeat from 'lodash/repeat';
import lodashReduceRight from 'lodash/reduceRight';
import {
  filter as rambdaFilter,
  forEach as rambdaForEach,
  map as rambdaMap,
  reduce as rambdaReduce,
} from 'rambda';
import collect from 'collect.js';

import { CurriedFunc, curry } from '@/utils/fp';

export { flatten, concat, repeat };

export const arrayFrom = (value: any | any[]) => (Array.isArray(value) ? value : [value]);

export const isArray = (
  maybeArray: any,
) => Array.isArray(maybeArray);

export const { from: toArray } = Array;

export const arrayOf = curry((
  initializer: () => any,
  length: number,
) => Array(length).fill(0).map(initializer));

export const getLength = (array: any[]) => array.length;

export const getLastElement = (
  array: any[],
) => array?.at(-1) || null;

export const getFirstElement = (
  array: any[],
) => array?.at(0) || null;

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

export const map = curry(rambdaMap) as CurriedFunc<(
  predicate?: (...args: any[]) => boolean,
  array?: any[],
) => any>;

export const reduce = curry(rambdaReduce<any, any>) as typeof rambdaReduce;

export const reduceRight = curry(
  lodashReduceRight,
) as CurriedFunc<typeof lodashReduceRight<any, any>>;

export const filter = curry(rambdaFilter) as CurriedFunc<(
  predicate?: (...args: any[]) => boolean,
  array?: any[],
) => any>;

export const forEach = curry(rambdaForEach) as CurriedFunc<(
  predicate?: (...args: any[]) => boolean,
  array?: any[],
) => any>;

export const countBy = curry(
  (
    key: string,
    listOfObjects: Array<Record<string, any>>,
  ) => (
    collect(listOfObjects)
      .countBy(key)
      .all()
  ),
);
export const findAndDelete = curry((
  predicate: Parameters<typeof Array.prototype.findIndex>[0],
  array: any[],
) => {
  const deletingIndex = array.findIndex(predicate);

  const isElementFound = deletingIndex !== -1;

  if (isElementFound) {
    array.splice(deletingIndex, 1);
  }
});

export const findAndUpdateObject = curry((
  predicate: Parameters<typeof Array.prototype.find>[0],
  array: any[],
  updatedObject: Record<any, any>,
) => {
  const cachedObject = array.find(predicate);

  if (cachedObject) {
    Object.assign(cachedObject, updatedObject);
  }
});
