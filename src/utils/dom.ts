import { curry } from '@/utils/fp';

export const getCssVariable = (
  variable: string, // argument format: --variable-name
) => getComputedStyle(document.body)
  .getPropertyValue(variable);

export const querySelectorAll = (
  selector: string,
) => document.querySelectorAll(selector);

export const getElementById = (id: string) => document.getElementById(id);

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
  property: keyof CSSStyleDeclaration | (keyof CSSStyleDeclaration)[],
  element: HTMLElement | HTMLElement[],
) => {
  const isManyElements = Array.isArray(element);

  if (isManyElements) {
    // @ts-ignore
    element.forEach(removeCssPropertyFromSingleElement(property));
  } else {
    // @ts-ignore
    removeCssPropertyFromSingleElement(property, element);
  }

  return element;
});

export const addCssProperty = curry((
  property: [
    keyof CSSStyleDeclaration,
      string | number,
  ],
  element: HTMLElement,
) => {
  const [
    cssProperty,
    cssPropertyValue,
  ] = property;

  // @ts-ignore
  element.style[cssProperty] = String(cssPropertyValue);

  return element;
});

export const getRect = (
  element: HTMLElement,
) => element.getBoundingClientRect();

export const getRectField = curry((
  field: keyof DOMRect,
  element: HTMLElement,
) => getRect(element)[field]);
