export type BadgeState = 'success' | 'danger';
export type BadgeSize = 'sm';

export interface BadgeProps {
    state?: BadgeState,
    size?: BadgeSize,
}
