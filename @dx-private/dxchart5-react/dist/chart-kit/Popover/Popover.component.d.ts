/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { AriaRole, PropsWithChildren } from 'react';
import { ScrollableMode } from '../Scrollable/Scrollable';
import { Bounds, PopoverAlign, PopoverCoordinates, PopoverPosition, PopoverSize } from './Popover.model';
export interface CKPopoverProps {
    /**
     * @description
     * Controls, whether `Popover` is opened.
     */
    readonly opened?: boolean;
    /**
     * @description
     * Element, which `Popover` should be appended to.
     */
    readonly anchorRef?: React.RefObject<HTMLElement>;
    /**
     * @description
     * Should be used when anchor is not a button, so the placement should calculate relative to anchorRef but the focus is at the selector
     */
    readonly selectorRef?: React.RefObject<HTMLElement>;
    /**
     * @description
     * Alignment of a `Popover` around an anchor element.
     * @default 'start'
     * @see
     * Default is 'start', which means `top` for a vertical position, and `left` for a horizontal.
     */
    readonly align?: PopoverAlign;
    /**
     * @description
     * Position of a `Popover` around an anchor element.
     * @default 'bottom'
     * @see
     * Default is `bottom`, which means that `Popover` will appear at the bottom of an anchor.
     */
    readonly position?: PopoverPosition;
    /**
     * @description
     * Position, where `Popover` should be open.
     * If it set anchor element will be ignored
     */
    readonly customPosition?: PopoverCoordinates;
    /**
     * @description
     * Controls, whether `Popover` should be closable by clicking outside of it.
     */
    readonly closeOnClickAway?: boolean;
    /**
     * @description
     * Element, which `Popover` will be appended to in a real `DOM` via `React.createPortal`.
     * @default '#chart-react-wrapper'
     */
    readonly appendTo?: Element;
    /**
     * @description
     * Element, that will catch a `clickAway` event of a `Popover`.
     * @see
     * If passed, `Popover` will be closed only if user clicks on that `Element`, outside of a `Popover`.
     * @default '#chart-react-wrapper'
     * @see
     * Default is '#chart-react-wrapper', which means that `Popover` will be closed, when user clicks outside `Popover`.
     */
    readonly parentEventTarget?: HTMLElement;
    /**
     * @description
     * Controls, whether accesibility features should be visible.
     */
    readonly keyboardMode?: boolean;
    /**
     * @description
     * For external control of a styles of a `Popover`.
     */
    readonly style?: React.CSSProperties;
    /**
     * @description
     * Crucial for a correct work of a `styled-components` and styles composition.
     */
    readonly className?: string;
    readonly testId?: string;
    readonly draggable?: boolean;
    readonly scrollableMode?: ScrollableMode;
    /**
     * @description
     * `Bounds` that popover should be limited to.
     * @see
     * This property has the highest priority among other bounds-like properties,
     * such as `appendTo` property and `showPopupsOutside` context value.
     */
    readonly customBounds?: Bounds;
    /**
     * @description
     * Classname for draggable element handler inside popover
     */
    readonly draggableHandlerClass?: string;
    readonly onRequestClose?: (e: Event) => unknown;
    readonly onTabPress?: (e: KeyboardEvent) => unknown;
    readonly updatePopoverCustomPosition?: (position: PopoverCoordinates) => void;
    readonly updatePopoverSize?: (size: PopoverSize) => void;
    readonly role?: AriaRole;
}
/**
 * @description
 * Popover is a modal window that renders relative to Anchor (anchor is any HTML element).
 * Render will always use React.createPortal, by default - body. But you can specify your own container.
 */
export declare const Popover: React.FC<PropsWithChildren<CKPopoverProps>>;
