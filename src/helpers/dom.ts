import { reduce, toArray } from '@/utils/array';

export const arrayOfElements = (
  selector: string,
) => toArray(document.querySelectorAll(selector));

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
