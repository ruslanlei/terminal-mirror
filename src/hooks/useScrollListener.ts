import { computed, ref } from 'vue';

export enum scrollDirections {
  UP = 'UP',
  DOWN = 'DOWN',
}

export const useScrollListener = (target: Window | HTMLElement) => {
  const scrollTop = ref(0);
  const lastScrollTop = ref(0);
  const scrollDirection = ref(scrollDirections.DOWN);

  target.addEventListener('scroll', () => {
    let scrollY: number = 0;
    if (target instanceof HTMLElement) {
      scrollY = target.scrollTop;
    }
    if (target === window) {
      scrollY = target.scrollY;
    }

    if (scrollY > lastScrollTop.value) {
      scrollDirection.value = scrollDirections.DOWN;
    } else {
      scrollDirection.value = scrollDirections.UP;
    }

    lastScrollTop.value = scrollY <= 0 ? 0 : scrollY;
    scrollTop.value = scrollY;
  });

  return {
    scrollTop: computed(() => scrollTop.value ?? 0),
    scrollDirection,
  };
};
