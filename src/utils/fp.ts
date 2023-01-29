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

export {
  curry,
  flowRight as compose,
  map,
};
