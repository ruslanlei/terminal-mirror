import { compose, curry } from '@terminal/common/utils/fp';
import { reduce, toArray } from '@terminal/common/utils/array';

export const getCssVariable = (
  variable: string, /* argument format: --variable-name */
) => getComputedStyle(document.body)
  .getPropertyValue(variable);

export const querySelectorAll = (
  selector: string,
) => document.querySelectorAll(selector);

export const querySelector = (
  selector: string,
) => document.querySelector(selector);

export const queryChildSelector = (
  selector: string,
  parent: HTMLElement,
) => parent.querySelector(selector);

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
): Omit<DOMRect, 'toJSON'> => element.getBoundingClientRect();

export const getRectField = curry((
  field: keyof Omit<DOMRect, 'toJSON'>,
  element: HTMLElement,
): number => getRect(element)[field]);

export const arrayOfElements = (
  selector: string,
) => compose(
  toArray,
  querySelectorAll,
)(selector);

export const collectSrcSet = (
  src: string[],
) => reduce(
  (
    srcset: string,
    link: string,
  ) => (srcset === '' ? `${link}` : `${srcset}, ${link}`),
  '',
  src,
);

export const setHref = curry(
  (href: string, element: HTMLLinkElement | HTMLAnchorElement) => {
    element.href = href;

    return element;
  },
);

export const setFavicon = (iconLink: string) => {
  compose(
    setHref(iconLink),
    querySelector,
  )('link[rel="icon"]');
};
