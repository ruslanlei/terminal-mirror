/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
/**
 * This context is unique for every displayed chart
 */
export interface LocalChartContextState {
    /**
     * this ref holds current local chart container, which is unique for every chart
     * can be useful for position some elements relatively to local chart
     */
    readonly containerRef: React.RefObject<HTMLElement>;
}
export declare const LocalChartContext: import("react").Context<LocalChartContextState>;
