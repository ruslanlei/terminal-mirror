import { isObject } from '@/utils/object';

export const useChain = (
  object: Record<any, any>,
  chain: string,
): any => {
  const chainUnits = chain.split('.');

  const cortege = chainUnits.reduce(
    (object, field) => (
      isObject(object?.[field])
        ? object?.[field]
        : [object, field]
    ),
    object,
  );
  const [parentObject, fieldName] = (Array.isArray(cortege)
    ? cortege
    : [{}, '']);

  const get = (): any => parentObject[fieldName];

  const set = (value: any) => {
    parentObject[fieldName] = value;
  };

  return [get, set];
};
