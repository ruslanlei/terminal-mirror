import { computed } from 'vue';
import { uuid } from '@terminal/common/utils/uuid';

export const useId = () => {
  const id = uuid();

  return computed(() => id);
};
