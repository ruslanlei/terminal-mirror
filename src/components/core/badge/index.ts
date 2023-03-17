export type BadgeState = 'success' | 'danger' | 'default' | 'background4' | 'skeleton' | 'background5' | 'accent1Background';
export type BadgeSize = 'sm' | 'xs' | 'md';

export interface BadgeProps {
    state?: BadgeState | BadgeState[],
    size?: BadgeSize,
}
