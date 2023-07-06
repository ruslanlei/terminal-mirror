/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { RefObject } from 'react';
/**
 * Hook locks keyboard tabulation inside specific HTML tree.
 * Reference to element is a container. Hook traverses it and finds all interactive elements.
 * When it reaches the last element - it returns focus to first element on next "Tab".
 * @param popupContainerRef - container to loop over
 */
export declare const useA11yModalTabKeyHandler: (popupContainerRef: RefObject<HTMLElement>) => (e: KeyboardEvent) => void;
