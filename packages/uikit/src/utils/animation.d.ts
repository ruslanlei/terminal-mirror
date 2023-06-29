import { AnimeParams } from 'animejs';
export declare const playAnimation: (params: Omit<AnimeParams, 'complete' | 'autoplay'>) => Promise<unknown>;
