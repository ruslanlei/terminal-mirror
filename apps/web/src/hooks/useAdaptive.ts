import { useBreakpoints } from '@vueuse/core';

export const useAdaptive = () => {
  const breakpoints = useBreakpoints({
    tablet: 640,
    desktop: 1280,
  });

  const isMobile = breakpoints.isSmallerOrEqual('tablet');
  const isTablet = breakpoints.between('tablet', 'desktop');
  const isDesktop = breakpoints.greaterOrEqual('desktop');

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
