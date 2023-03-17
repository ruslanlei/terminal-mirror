import { CourseLandingChapter } from '@/components/app/courseLanding';

export interface TerminalLandingHeaderProps {
    activeChapter: CourseLandingChapter['slug'],
    chapters: CourseLandingChapter[],
}

export interface TerminalLandingHeaderEmits {
    (e: 'update:activeChapter', value: CourseLandingChapter['slug']): void,
}
