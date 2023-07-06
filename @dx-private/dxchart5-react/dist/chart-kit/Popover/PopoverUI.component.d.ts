/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { PopoverCoordinates } from './Popover.model';
export interface CKPopoverUIProps {
    /**
     * Position of a popover ui element.
     */
    readonly position: PopoverCoordinates;
    /**
     * @description
     * Element, which `Popover` is appended to.
     */
    readonly anchorRef: React.RefObject<HTMLElement | null>;
    /**
     * @description
     * Crucial for a correct work of a `styled-components` and styles composition.
     */
    readonly className?: string;
    readonly children?: React.ReactNode;
    /**
     * @description
     * For external control of a styles of a `Popover`.
     */
    readonly style?: React.CSSProperties;
    readonly testId?: string;
    readonly draggable?: boolean;
    /**
     * @description
     * Classname for draggable element handler inside popover
     */
    readonly draggableHandlerClass?: string;
    readonly onDragStop?: (position: PopoverCoordinates) => void;
}
/**
 * UI of a `Popover` component.
 * It is very dumb, and just renders the UI on the position passed via `props`.
 */
export declare const PopoverUI: React.MemoExoticComponent<React.ForwardRefExoticComponent<CKPopoverUIProps & React.RefAttributes<HTMLDivElement>>>;
