import { MaybeComputedElementRef, useResizeObserver } from '@vueuse/core';
import { onBeforeUnmount, onMounted } from 'vue';

export const useEnvironmentObserver = (
  target: MaybeComputedElementRef,
  callback: () => any,
  watchScroll: boolean = false,
) => {
  const {
    stop: disconnect,
  } = useResizeObserver(target, callback);

  const setListeners = () => {
    window.addEventListener('resize', callback);
    window.addEventListener('orientationchange', callback);
    if (watchScroll) {
      window.addEventListener('scroll', callback);
    }
  };
  const removeListeners = () => {
    window.removeEventListener('resize', callback);
    window.removeEventListener('orientationchange', callback);
    if (watchScroll) {
      window.removeEventListener('scroll', callback);
    }
    disconnect();
  };

  onMounted(setListeners);

  onBeforeUnmount(removeListeners);

  return {
    setListeners,
    removeListeners,
  };
};
