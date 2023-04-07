import cloneDeep from 'lodash/cloneDeep';
import lodashSet from 'lodash/set';
import isEmpty from 'lodash/isEmpty';
import { curry } from '@/utils/fp';

export const isObject = (item: any) => (typeof item === 'object' && !Array.isArray(item) && item !== null);

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
