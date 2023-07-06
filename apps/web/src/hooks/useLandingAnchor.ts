import {
  ref,
  watch,
  nextTick,
  onBeforeUnmount,
  onMounted,
} from 'vue';
import { getElementById, getRectField } from '@terminal/uikit/utils/dom';
import { compose } from '@terminal/common/utils/fp';
import { add } from '@terminal/common/utils/number';

export const useLandingAnchor = (
  sectionIds: string[],
) => {
  const isAutoScrollBlocked = ref(false);
  const blockAutoScroll = () => {
    isAutoScrollBlocked.value = true;
  };
  const unblockAutoScroll = () => {
    isAutoScrollBlocked.value = false;
  };

  const activeSection = ref<string | null>();
  watch(activeSection, () => {
    if (isAutoScrollBlocked.value) return;

    const sectionElement = getElementById(activeSection.value || '');

    if (!sectionElement) return;

    const targetSectionTop = compose(
      add(window.scrollY),
      getRectField('top'),
    )(sectionElement);

    window.scrollTo({
      top: targetSectionTop,
      behavior: 'smooth',
    });
  });

  const onIntersection = (
    entries: IntersectionObserverEntry[],
  ) => {
    entries.forEach((entry) => {
      const { id } = entry.target;

      let nextChapter = activeSection.value;
      if (entry.isIntersecting) {
        if (!id) return;
        nextChapter = id;
      } else if (id === activeSection.value) {
        nextChapter = null;
      }

      blockAutoScroll();

      activeSection.value = nextChapter;

      nextTick(unblockAutoScroll);
    });
  };

  const observerOptions = {
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(onIntersection, observerOptions);

  onMounted(() => {
    sectionIds.forEach((id: string) => {
      const section = getElementById(id);

      if (!section) return;

      observer.observe(section);
    });
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });

  return {
    activeSection,
  };
};
