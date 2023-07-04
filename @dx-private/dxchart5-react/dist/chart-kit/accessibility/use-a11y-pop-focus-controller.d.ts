/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { RefObject } from 'react';
interface A11yPopFocusControllerProps {
    readonly anchorRef: RefObject<HTMLElement>;
    readonly popRef: RefObject<HTMLElement>;
    readonly focusSelector?: string;
}
/**
 * Focuses the focusable element in popup / popover when navigating from anchor.
 * @param props
 * @doc-tags a11y
 */
export declare const useA11yPopFocusController: (props: A11yPopFocusControllerProps) => void;
export {};
