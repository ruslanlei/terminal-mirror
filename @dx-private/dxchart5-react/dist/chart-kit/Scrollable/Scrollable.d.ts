/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React, { ReactNode } from 'react';
export type ScrollableMode = 'visible' | 'wheeling' | 'none';
export interface ScrollableProps {
    readonly scrollTop?: number;
    readonly onScroll?: (left: number, top: number) => void;
    readonly children: ReactNode;
    readonly containerRef?: React.RefObject<HTMLDivElement>;
    readonly mode?: ScrollableMode;
}
export declare const Scrollable: React.NamedExoticComponent<ScrollableProps>;
