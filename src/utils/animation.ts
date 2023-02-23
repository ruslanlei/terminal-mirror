import anime, { AnimeInstance, AnimeParams } from 'animejs';

export const playAnimation = (
  params: Omit<AnimeParams, 'complete' | 'autoplay'>,
) => new Promise((resolve) => {
  anime({
    ...params,
    autoplay: true,
    complete: resolve,
  });
});

export const createAnimation = (
  params: () => Omit<AnimeParams, 'complete' | 'autoplay'>,
) => {
  let animation: AnimeInstance | null = null;

  const init = () => {
    animation = anime({
      ...params(),
      autoplay: false,
    });
    return animation;
  };

  const play = () => new Promise((resolve) => {
    if (!animation) {
      resolve(false);
      return;
    }
    animation.complete = resolve;

    animation.play();
  });

  const pause = () => {
    animation?.pause();
  };

  const restart = () => {
    animation?.restart();
  };

  return {
    animation,
    init,
    play,
    pause,
    restart,
  };
};
