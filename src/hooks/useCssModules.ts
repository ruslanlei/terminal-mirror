/* eslint-disable */
import { getCurrentInstance } from 'vue';

export const useCssModules = () => {
  // @ts-ignore
  const { $style } = getCurrentInstance()?.type?.__cssModules;

  return {
    $style,
  }
};
