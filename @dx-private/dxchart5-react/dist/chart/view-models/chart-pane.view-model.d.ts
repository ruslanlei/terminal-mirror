/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
import { Sink } from '../../context/sink2';
import { Property } from '../../utils/property.utils';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { MultiChartViewModel } from './multi-chart.view-model';
export interface PaneData {
    readonly coords: {
        x: number;
        y: number;
    };
    readonly uuid: string;
    readonly isTop?: boolean;
    readonly isBottom?: boolean;
}
export interface ChartPaneViewModel {
    readonly panesData: Property<PaneData[]>;
    readonly hoveredPane: Property<Option<string>>;
    readonly movePaneUp: (uuid: string) => void;
    readonly movePaneDown: (uuid: string) => void;
    readonly setHoveredPane: (data: Option<string>) => void;
}
export declare const createChartPaneViewModel: import("../../context/context2").Context<Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartInstance", ChartWithModules> & Record<"chartId", string>, Sink<ChartPaneViewModel>>;
