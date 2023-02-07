import flatten from 'lodash/flatten';

export const arrayFrom = (value: any | any[]) => (Array.isArray(value) ? value : [value]);

export { flatten };
