import { createBodyObserver } from '@/utils/dom';

export const useEnvironmentObserver = (callback: (...args: any[]) => any) => {
  const {
    init: initBodyObserver,
    disconnect: disconnectBodyObserver,
  } = createBodyObserver(callback);

  const setListeners = () => {
    window.addEventListener('resize', callback);
    window.addEventListener('scroll', callback);
    window.addEventListener('orientationchange', callback);
    initBodyObserver();
  };
  const removeListeners = () => {
    window.removeEventListener('resize', callback);
    window.removeEventListener('scroll', callback);
    window.removeEventListener('orientationchange', callback);
    disconnectBodyObserver();
  };

  return {
    setListeners,
    removeListeners,
  };
};
