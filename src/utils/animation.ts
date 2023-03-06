import anime, { AnimeParams } from 'animejs';

export const playAnimation = (
  params: Omit<AnimeParams, 'complete' | 'autoplay'>,
) => new Promise((resolve) => {
  anime({
    ...params,
    autoplay: true,
    complete: resolve,
  });
});
