import { computed } from 'vue';

export const useLocalValue = <T>(
  props: Record<any, any>,
  emit: any,
  field: string = 'modelValue',
) => {
  const event = `update:${field}`;

  return computed<T>({
    get: () => props[field],
    set: (value: T) => emit(event, value),
  });
};
