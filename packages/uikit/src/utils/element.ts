export const setMaximalScrollLeft = (
  element: HTMLElement,
) => {
  const scrollPosition = element.scrollLeft;

  if (scrollPosition === 0) {
    const { scrollWidth } = element;
    const elementWidth = element.offsetWidth;
    element.scrollLeft = scrollWidth - elementWidth;
  }
};
