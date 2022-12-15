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
