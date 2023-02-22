import { TerminalLandingChapter } from '@/components/app/terminalLanding';

export interface TerminalLandingHeaderProps {
    activeChapter: TerminalLandingChapter['slug'],
    chapters: TerminalLandingChapter[],
}

export interface TerminalLandingHeaderEmits {
    (e: 'update:activeChapter', value: TerminalLandingChapter['slug']): void,
}
