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
