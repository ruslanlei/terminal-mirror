/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
/**
 * @param el
 * @param callback
 * @param useAnimationFrame Animation frame prevents error, but in rare cases we need to execute the function within the same animation frame
 */
export declare function useResizeObserver(el: React.RefObject<HTMLElement | null>, callback: ResizeObserverCallback, useAnimationFrame?: boolean): void;
