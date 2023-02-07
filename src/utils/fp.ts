import flowRight from 'lodash/flowRight';
import curry from 'lodash/curry';
import map from 'lodash/map';
import lodashFilter from 'lodash/filter';
import lodashReduce from 'lodash/reduce';
import lodashReduceRight from 'lodash/reduceRight';
import lodashIsEqual from 'lodash/isEqual';

export const isEqual = curry(lodashIsEqual);

export const reduce = curry(lodashReduce);
export const reduceRight = curry(lodashReduceRight);
export const filter = curry(lodashFilter);

export const log = curry((
  message: string | number,
  value: any,
) => {
  console.log(message, value);
  return value;
});

export const { abs: toAbsolute } = Math;

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
