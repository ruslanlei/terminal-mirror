import flowRight from 'lodash/flowRight';
import map from 'lodash/map';
import curry from 'lodash/curry';

export const log = curry((
  message: string | number,
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
