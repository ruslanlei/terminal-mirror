import flowRight from 'lodash/flowRight';
import curry from 'lodash/curry';
import lodashIsEqual from 'lodash/isEqual';

export const compose = flowRight;

export const isEqual = curry(lodashIsEqual);
