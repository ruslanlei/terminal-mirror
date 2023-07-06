/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { BaseHover, HoverProducerPart } from '@dx-private/dxchart5-light/dist/chart/inputhandlers/hover-producer.component';
import { StudiesModel } from './StudiesModel';
export interface HoverStudyLine {
    title: string;
    colors?: string[];
    visible?: boolean;
    labelVisible?: boolean;
    value: string;
}
export interface HoverStudySeries {
    id: number;
    lines: HoverStudyLine[];
    overlaying: boolean;
    parameters: any[];
    title: string;
    uuid: string;
}
export declare class StudiesHover {
    private studiesModel;
    private idx;
    private _studies;
    private _studiesMap;
    private gTrapHover;
    constructor(chartModel: ChartModel, studiesModel: StudiesModel, idx: number);
    private copyStudyWithValues;
    private getStudyModel;
    get studies(): HoverStudySeries[];
    get studiesMap(): Record<string, HoverStudySeries>;
    get overlays(): HoverStudySeries[];
    private overlaying;
    get underlays(): HoverStudySeries[];
}
export declare class StudiesHoverProducerPart implements HoverProducerPart<StudiesHover> {
    private chartModel;
    private studiesModel;
    constructor(chartModel: ChartModel, studiesModel: StudiesModel);
    getData(hover: BaseHover): StudiesHover;
}
