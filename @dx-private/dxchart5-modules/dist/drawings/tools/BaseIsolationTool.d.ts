/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure } from '../figures/model/Figure';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { LineProperties } from '../DrawingsConfig';
import { DrawingType } from '../model/DrawingTypes';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/DrawingViewModel';
import { DateValuePoint, IndexValuePoint, PointEvent } from '../model/PointEvent';
import { Vector } from '../model/Vector';
import DrawingsModel from '../model/DrawingsModel';
import { ViewPoint } from '../model/ViewPoint';
interface BaseZoneGradient {
    topColor: string;
    bottomColor: string;
    opacity: number;
}
interface EveryProperties {
    warningBorderColor: string;
    warningIconFillColor: string;
    baseLegOverlayFillColor: string;
    backgroundOffsetWidth: number;
    textBg: string;
    proximalLine: {
        lineColor: string;
        lineWidth: 1;
    };
    distalLine: {
        lineColor: string;
        lineWidth: 3;
    };
    priceLabelColor: string;
    baseZoneGradient: BaseZoneGradient;
    extendedZoneGradient: {
        topColor: string;
        bottomColor: string;
    };
    textSize: string;
}
export interface BaseIsolationToolProperties {
    assignedCurveDemand: EveryProperties;
    assignedCurveSupply: EveryProperties;
    invalid: EveryProperties;
    drawnDemand: EveryProperties;
    drawnDemandHtf: EveryProperties;
    drawnDemandItf: EveryProperties;
    drawnDemandLtf: EveryProperties;
    drawnSupply: EveryProperties;
    drawnSupplyHtf: EveryProperties;
    drawnSupplyItf: EveryProperties;
    drawnSupplyLtf: EveryProperties;
    curveDemand: EveryProperties;
    curveSupply: EveryProperties;
    unselectedDemand: EveryProperties;
    unselectedSupply: EveryProperties;
    tradeDemand: EveryProperties;
    tradeSupply: EveryProperties;
    targetDemand: EveryProperties;
    targetSupply: EveryProperties;
    inactiveDemand: EveryProperties;
    inactiveSupply: EveryProperties;
    calculated: EveryProperties;
    line: LineProperties;
    hatchingColor: string;
    priceLabelTextColor: string;
    fillBackground: boolean;
}
type BaseIsolationToolType = 'supply' | 'demand' | 'unknown';
type BaseIsolationToolStatus = 'DRAWN' | 'INACTIVE' | 'INVALID' | 'CURVE' | 'ASSIGNED_CURVE' | 'TARGET' | 'TRADE' | 'UNSELECTED' | 'HIDDEN';
type BaseIsolationToolPurpose = 'HTF' | 'ITF' | 'LTF';
interface GetTypeResult {
    type: BaseIsolationToolType;
    warningKey: string | null;
}
export interface BaseIsolationToolData {
    type: BaseIsolationToolType;
    status: BaseIsolationToolStatus;
    zonePurpose: BaseIsolationToolPurpose;
    warningKey: string | null;
    topSavedPoint: DateValuePoint;
    bottomSavedPoint: DateValuePoint;
    period: number;
    candlesCount: number;
    text: string;
    additionalLabels: string[];
    bottomLineMoved: boolean;
    topLineMoved: boolean;
    movedPointIndex: number;
}
export declare class BaseIsolationTool extends AbstractFigure<BaseIsolationToolProperties> {
    points: number;
    type: DrawingType;
    data: BaseIsolationToolData;
    updateType(typeResult: GetTypeResult): void;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: BaseIsolationToolProperties, chartBootstrap: ChartBootstrap): void;
    customMoveFigureAction: (viewModel: DrawingViewModel, chartBootstrap: ChartBootstrap, drawings: DrawingsModel, initial: IndexValuePoint, initialValues: IndexValuePoint[], point: PointEvent) => void;
    customEndMoveFigureAction: () => void;
    borderMatchFunction: (viewModel: DrawingViewModel, initialPoint: IndexValuePoint, chartBootstrap: ChartBootstrap) => boolean;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    constraint: (points: Vector[], changedIndex: number) => Vector[];
    showPoints: () => boolean;
}
export {};
