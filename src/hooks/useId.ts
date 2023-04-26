import { computed } from 'vue';
import { uuid } from '@/utils/uuid';

export const useId = () => {
  const id = uuid();

  return computed(() => id);
};
