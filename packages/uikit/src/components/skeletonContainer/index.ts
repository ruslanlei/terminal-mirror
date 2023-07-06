export { default as UiSkeletonContainer } from './SkeletonContainer.vue';
import { InjectionKey } from 'vue';

export const SkeletonContainerIdInjectionKey: InjectionKey<string> = Symbol(
  'SkeletonContainerId',
);
