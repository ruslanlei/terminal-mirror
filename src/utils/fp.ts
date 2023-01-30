import flowRight from 'lodash/flowRight';
import curry from 'lodash/curry';
import map from 'lodash/map';
import lodashReduce from 'lodash/reduce';
import lodashIsEqual from 'lodash/isEqual';

export const isEqual = curry(lodashIsEqual);

export const reduce = curry(lodashReduce);

export const log = curry((
  message: string,
  value: any,
) => {
  console.log(message, value);
  return value;
});

export const arrayOf = curry((
  initializer: () => any,
  length: number,
) => Array(length).fill(0).map(initializer));

export const getLength = (array: any[]) => array.length;

export {
  curry,
  flowRight as compose,
  map,
};
