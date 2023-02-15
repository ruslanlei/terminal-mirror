import { curry } from '@/utils/fp';

export const findAndDelete = curry((
  predicate: Parameters<typeof Array.prototype.findIndex>[0],
  array: any[],
) => {
  const deletingIndex = array.findIndex(predicate);

  return deletingIndex ? [
    ...array.slice(0, deletingIndex),
    ...array.slice(deletingIndex + 1),
  ] : array;
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
