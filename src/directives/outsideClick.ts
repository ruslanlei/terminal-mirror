import { awaitFrame } from '@/utils/window';

type Handler = {
  el: HTMLElement,
  handler: () => void
}

const handlers: Handler[] = [];

document.addEventListener('click', (event) => {
  const { target } = event;
  handlers.forEach(({ el, handler }) => {
    if (
      el === target || el.contains(target)
    ) {
      return;
    }
    handler(event);
  });
});

export const OutsideClickDirective = {
  async mounted(el, binding) {
    await awaitFrame();
    handlers.push({
      el,
      handler: binding.value,
    });
  },
  beforeUnmount(el) {
    handlers.splice(
      handlers.findIndex((handler) => el === handler.el),
      1,
    );
  },
};
