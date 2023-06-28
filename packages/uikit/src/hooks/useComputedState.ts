import { computed } from 'vue';
import { useCssModules } from '@/hooks/useCssModules';
import { arrayFrom } from '@terminal/common/utils/array';

export const useComputedState = (
  props: { state: null | string | string[] } & Record<any, any>,
) => {
  const {
    $style,
  } = useCssModules();

  return computed(() => arrayFrom(props.state).map((s) => $style[s]));
};
