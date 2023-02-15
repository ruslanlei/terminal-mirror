import { curry } from '@/utils/fp';

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
