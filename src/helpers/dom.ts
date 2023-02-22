import { reduce } from '@/utils/array';

export const arrayOfElements = (
  selector: string,
) => Array.from(document.querySelectorAll(selector));

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
