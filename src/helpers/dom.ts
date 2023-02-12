import { reduce } from '@/utils/fp';

export const arrayOfElements = (
  selector: string,
) => Array.from(document.querySelectorAll(selector));

export const collectSrcSet = (
  src: string[],
) => reduce(
  src,
  (
    srcset: string,
    link: string,
  ) => (srcset === '' ? `${link}` : `${srcset}, ${link}`),
  '',
);
