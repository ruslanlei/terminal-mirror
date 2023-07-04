import { onBeforeUnmount, ref } from 'vue';
import anime, { AnimeInstance, AnimeParams } from 'animejs';

export const useAnimation = (
  params: () => Omit<AnimeParams, 'complete' | 'autoplay'>,
) => {
  const animation = ref<AnimeInstance>();

  const init = () => {
    animation.value = anime({
      ...params(),
      autoplay: false,
    });
    return animation;
  };

  onBeforeUnmount(() => {
    anime.remove(
      params()?.targets,
    );
  });

  const play = () => new Promise((resolve) => {
    if (!animation.value) {
      resolve(false);
      return;
    }
    animation.value.complete = resolve;

    animation.value.play();
  });

  const pause = () => {
    animation.value?.pause();
  };

  const restart = () => {
    animation.value?.restart();
  };

  const setProgress = (progress: number) => {
    animation.value?.seek(progress);
  };

  return {
    animation,
    init,
    play,
    pause,
    restart,
    setProgress,
  };
};
