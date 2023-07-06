/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingType } from '../model/DrawingTypes';
import { DateTimeFormatter } from '@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';
import { ExtendedContext, YPlacement } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { PointEvent } from '../model/PointEvent';
import { AbstractFigure, CommonFigureProps } from './model/Figure';
import { TextLabels } from './Text/Text';
import { ChartWithDrawings } from '../DrawingsConfig';
export interface ElliottWaveProperties extends CommonFigureProps {
    text: TextLabels;
    settings: ElliottWaveSettings;
}
export type DegreeType = 'Subminutte' | 'Minutte' | 'Minute' | 'Minor' | 'Intermediate' | 'Primary' | 'Cycle' | 'Super Cycle' | 'Grand Super Cycle';
export interface ElliottWaveSettings {
    degreeType: DegreeType;
}
export interface ElliottWaveData {
    alphabet: Record<DegreeType, string[]>;
    numberOfWaves: number;
    firstPointYPlacement: YPlacement;
    lastPointYPlacement: YPlacement;
    yTopPlacementPoints: Array<number>;
}
export declare class ElliottWave extends AbstractFigure<ElliottWaveProperties> {
    private formatterProvider;
    points: number;
    readonly type: DrawingType;
    readonly commitOnEnter: boolean;
    data: ElliottWaveData;
    constructor(data: ElliottWaveData, formatterProvider?: () => DateTimeFormatter);
    FIRST_POINT_TEXT: string;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: ElliottWaveProperties, chartInstance: ChartWithDrawings): void;
    protected formatTextByDegree(text: string, properties: ElliottWaveProperties): string;
    pointConstraint: (point: PointEvent, model: DrawingViewModel) => boolean;
    getXAxisLabels: (chartInstance: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/Vector").Vector[]) => import("@dx-private/dxchart5-light/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => import("@dx-private/dxchart5-light/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
