/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CSSProperties } from 'react';
interface AdaptiveHeightHookProps {
    readonly contentShift?: number;
    readonly windowMargin?: number;
}
/**
 * Checks that element fits viewport.
 * If is does not - reduces maxHeight and returns it. We see scrollbar as a consequence.
 * @param anchorRef
 * @param config
 * @doc-tags popover,hooks
 */
export declare const useAdaptiveHeight: (anchorRef: React.RefObject<HTMLElement | null>, config?: AdaptiveHeightHookProps) => CSSProperties;
export {};
