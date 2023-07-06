/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../utils/sink';
import { Option } from 'fp-ts/Option';
import { Property } from '../../utils/property.utils';
import { ChartDrawingViewModel } from './drawing.view-model';
import { MultiChartViewModel } from './multi-chart.view-model';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export interface TextDrawingViewModel {
    readonly data: Property<Option<TextDrawingData>>;
    readonly onChange: (value: string) => void;
    readonly onSubmit: () => void;
    readonly onCancel: () => void;
}
export declare const createTextDrawingViewModel: import("../../context/context2").Context<Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartInstance", ChartWithModules> & Record<"drawingViewModel", ChartDrawingViewModel>, Sink<TextDrawingViewModel>>;
interface DrawingPosition {
    readonly x: number;
    readonly y: number;
    readonly width?: number;
    readonly height?: number;
}
export interface TextDrawingData {
    readonly text: string;
    readonly position: DrawingPosition;
    readonly id: string;
    readonly fontSize: string;
    readonly background: string;
    readonly color: string;
    readonly font: string;
}
export {};
