/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { MultiChartLayout } from '../chart/model/layout.model';
export interface ChartLayoutData {
    /**
     * The ID of selected layout, should always be presented
     */
    selectedLayoutId: string;
    /**
     * List of layouts.
     */
    layouts: ChartLayoutWithId[];
}
export interface ChartLayoutNamed extends MultiChartLayout {
    readonly name: string;
}
export interface ChartLayoutWithId extends ChartLayoutNamed {
    readonly id: string;
    readonly lastUpdateTimeStamp: number;
}
export interface LayoutProvider {
    /**
     * Creates the new layout. Returns either the ID or error.
     * @param layout - new layout to create
     */
    createLayout(layout: ChartLayoutNamed): Promise<string>;
    /**
     * Loads all available layouts including default one.
     * If layout is loaded for the first time - expected empty layouts array and undefined selected layout id.
     * If empty - updateLayouts will be called with default layout created.
     */
    getLayouts(): Promise<ChartLayoutData>;
    /**
     * Update layout to persistence layer.
     * No update expected from subscribeLayouts when this fn is called.
     * The layout will be updated with different version if layout version does not match chart's version (migration will be performed).
     * @param layoutData - layout to update
     */
    updateLayout(layoutData: ChartLayoutWithId): Promise<void>;
    /**
     * Updates selected layout state.
     * @param id - layout that's need to be selected
     */
    updateSelectedLayout(id: string): Promise<void>;
    /**
     * Delete layout by id from layout state.
     * @param id - layout with that id will be deleted
     */
    deleteLayout(id: string): Promise<void>;
}
export declare const getSelectedLayout: (layoutData: ChartLayoutData) => ChartLayoutWithId;
