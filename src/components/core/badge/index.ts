export type BadgeState = 'success' | 'danger' | 'default' | 'background4';
export type BadgeSize = 'sm';

export interface BadgeProps {
    state?: BadgeState,
    size?: BadgeSize,
}
