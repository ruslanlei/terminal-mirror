export const createBodyObserver = (
  callback: any,
  options = {
    attributes: false,
    childList: true,
    characterData: true,
    subtree: true,
  },
) => {
  const observer = new MutationObserver(callback);
  const bodyElement = document.querySelector('body');

  if (!bodyElement) {
    throw new Error('Cannot find body element');
  }

  const init = () => {
    observer.observe(
      bodyElement,
      options,
    );
  };

  const disconnect = () => {
    observer.disconnect();
  };

  return {
    init,
    disconnect,
  };
};

export const createWindowResizeAndScrollObserver = (callback: () => any) => {
  const setListeners = () => {
    window.addEventListener('resize', callback);
    window.addEventListener('orientationchange', callback);
    // window.addEventListener('scroll', callback);
  };
  const removeListeners = () => {
    window.removeEventListener('resize', callback);
    window.removeEventListener('orientationchange', callback);
    // window.removeEventListener('scroll', callback);
  };

  return {
    setListeners,
    removeListeners,
  };
};
