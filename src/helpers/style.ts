import { curry } from '@/utils/fp';

const removeCssPropertyFromSingleElement = curry((
  property: string | string[],
  element: HTMLElement,
) => {
  const isManyProperties = Array.isArray(property);

  if (isManyProperties) {
    property.forEach((prop: string) => {
      element.style.removeProperty(prop);
    });
  } else {
    element.style.removeProperty(property);
  }

  return element;
});

export const removeCssProperty = curry((
  property: string | string[],
  element: HTMLElement | HTMLElement[],
) => {
  const isManyElements = Array.isArray(element);

  if (isManyElements) {
    element.forEach(removeCssPropertyFromSingleElement(property));
  } else {
    removeCssPropertyFromSingleElement(property, element);
  }

  return element;
});
