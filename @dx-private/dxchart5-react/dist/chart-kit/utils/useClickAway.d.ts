/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { RefObject } from 'react';
/**
 * Hook that run callback when click outside of element that attached to containerRef
 */
export declare const useClickAway: <T extends HTMLElement>(ref: RefObject<T>, onClickAwayCallback: () => void) => void;
