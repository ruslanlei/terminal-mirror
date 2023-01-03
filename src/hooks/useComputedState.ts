import { useCssModules } from '@/hooks/useCssModules';
import { computed } from 'vue';
import { arrayFrom } from '@/utils/array';

export const useComputedState = (
  props: { state: string | string[] } & Record<any, any>,
) => {
  const {
    $style,
  } = useCssModules();

  return computed(() => arrayFrom(props.state).map((s) => $style[s]));
};
