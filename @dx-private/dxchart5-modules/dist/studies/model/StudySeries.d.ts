/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@dx-private/dxchart5-light/dist/chart/components/chart/chart.model';
import { PaneComponent } from '@dx-private/dxchart5-light/dist/chart/components/pane/pane.component';
import { DataSeriesType } from '@dx-private/dxchart5-light/dist/chart/model/data-series.config';
import { ScaleModel } from '@dx-private/dxchart5-light/dist/chart/model/scale.model';
import { FullChartConfigStudies } from '../StudiesConfig';
import { StudySeriesModel } from './study-data-series.model';
export interface StudySeriesConfig {
    id: string;
    uuid: string;
    title: string;
    parameters: any[];
    lines: StudyLine[];
    overlaying: boolean;
    calculateFutureData: boolean;
    categories: string;
}
export interface StudyLine {
    title: string;
    studyLineType: DataSeriesType;
    thickness?: number;
    colors?: string[];
    visible?: boolean;
    offset?: number;
    labelVisible?: boolean;
    symbolMapping?: string;
}
export interface StudyPoint {
    idx: number;
    close: number;
    timestamp: number;
}
/**
 * Single study model. One study = multiple lines.
 * Contains config and data of exactly 1 study, like "MACD" or "Ichimoku".
 * @doc-tags chart-core,model
 */
export default class StudySeries {
    private config;
    private chartModel;
    studyConfig: StudySeriesConfig;
    readonly paneComponent: PaneComponent;
    uuid: string;
    hilo: [number, number];
    dataSeries: StudySeriesModel[];
    scaleModel: ScaleModel;
    private _series;
    get series(): Array<StudyPoint[]>;
    set series(series: Array<StudyPoint[]>);
    /**
     * Indicates that data in the series is outdated and has to be recalculated completly
     * @doc-tags performance
     */
    outdatedData: boolean;
    constructor(id: number, config: FullChartConfigStudies, chartModel: ChartModel, studyConfig: StudySeriesConfig, paneComponent: PaneComponent);
    /**
     * This method only modifies existing series, it doesn't replace all points
     * @param series
     * @doc-tags performance
     */
    updateSeries(series: Array<StudyPoint[]>): void;
    private linkDataSeriesModels;
    private studiesToVisualPoints;
    private studyPoints2DataSeries;
    updateConfig(studyConfig: StudySeriesConfig): void;
    private updateDataSeries;
    getSeriesByIndex(i: number): StudyPoint[];
    priceFormatter(value: number, precision?: number): string;
    private formatDecimal;
    getHighLow(): [number, number];
    /**
     * Identifies whether this study has extremums to calculate high low on.
     */
    hasExtremums(): boolean;
    clearData(): void;
}
