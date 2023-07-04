/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
declare const layouts: readonly ["1x1", "2x2", "2x1", "1x2", "3x1", "1x3"];
export type MultiChartLayoutType = typeof layouts[number];
export declare const isChartVisibleInMultiChartLayout: (layout: MultiChartLayoutType, chartId: number) => boolean;
export {};
