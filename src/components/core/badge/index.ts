export type BadgeState = 'success' | 'danger' | 'default' | 'background4' | 'skeleton' | 'background5';
export type BadgeSize = 'sm';

export interface BadgeProps {
    state?: BadgeState | BadgeState[],
    size?: BadgeSize,
}
