import cloneDeep from 'lodash/cloneDeep';
import lodashSet from 'lodash/set';
import isEmpty from 'lodash/isEmpty';
import { curry } from './fp';
import collect, { Collection } from 'collect.js';

export const isObject = (item: any) => (typeof item === 'object' && !Array.isArray(item) && item !== null);

export const objectEntries = <T extends Record<any, any>>(
  object: T,
) => Object.entries(object);

export const createObjectWithValues = (
  object: Record<any, any>,
  setValue: any,
): Record<any, any> => Object
  .entries(object)
  .reduce((acc, [key, value]) => ({
    ...acc,
    [key]: isObject(value)
      ? createObjectWithValues(value, setValue)
      : setValue,
  }), {});

export {
  cloneDeep,
};

export const set = curry(lodashSet);

export const getValueByKey = curry((
  key: string,
  object: Record<any, any>,
) => object?.[key] || null);

export { isEmpty };

export const getKeyWithBiggestValue = (
  object: Record<string, number>,
) => (
  Object
    .keys(object)
    .reduce((keyA, keyB) => (object[keyA] > object[keyB] ? keyA : keyB))
);

export const groupBy = curry(
  (
    key: any,
    array: any[],
  ) => (
    collect(array)
      .groupBy(key)
      .map((items: any) => items.all())
      .all()
  ),
);
