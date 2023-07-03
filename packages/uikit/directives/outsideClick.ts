import { awaitFrame } from '../utils/window';

type wrappedElement = {
  clickOutsideHandler?: (...args: any[]) => void
} & HTMLElement

export const OutsideClickDirective = {
  async mounted(
    element: wrappedElement,
    binding,
  ) {
    await awaitFrame();

    const handler = (event: MouseEvent) => {
      const { target } = event;
      if (
        element === target
        || element.contains(target)
      ) return;

      binding.value(event);
    };

    document.addEventListener('click', handler);
    element.clickOutsideHandler = handler;
  },
  beforeUnmount(element: wrappedElement) {
    document.removeEventListener('click', element.clickOutsideHandler || (() => {}));
  },
};
