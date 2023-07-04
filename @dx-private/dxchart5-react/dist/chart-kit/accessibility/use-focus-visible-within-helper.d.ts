/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { RefObject } from 'react';
/**
 * Listens to all 'focusin' events and triggers listeners.
 * We need it to subscribe to focusin only once.
 */
export declare const useFocusVisibleWithinHelper: () => void;
/**
 * Replacement for un-implemented CSS selector :focus-visible-within
 * https://github.com/WICG/focus-visible/issues/151
 *
 * Checks that internal element is focused.
 *
 * @param containerRef
 * @param selector - selector for internal element
 * @doc-tags a11y
 */
export declare const useFocusVisibleWithin: (containerRef: RefObject<HTMLDivElement>, selector: string) => boolean;
