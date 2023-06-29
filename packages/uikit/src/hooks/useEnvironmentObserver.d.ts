import { MaybeComputedElementRef } from '@vueuse/core';
export declare const useEnvironmentObserver: (target: MaybeComputedElementRef, callback: () => any, watchScroll?: boolean, watchResize?: boolean) => {
    setListeners: () => void;
    removeListeners: () => void;
};
