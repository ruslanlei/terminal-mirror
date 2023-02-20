export type BadgeState = 'success' | 'danger' | 'default';
export type BadgeSize = 'sm';

export interface BadgeProps {
    state?: BadgeState,
    size?: BadgeSize,
}
