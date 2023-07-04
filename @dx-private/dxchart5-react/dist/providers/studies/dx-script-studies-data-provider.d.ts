/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { TickValues } from '@dx-private/dxchart5-modules/dist/studies/model/StudiesModel';
import { StudySeriesConfig } from '@dx-private/dxchart5-modules/dist/studies/model/StudySeries';
import { DxScriptRunner, RunScriptResult, SuccessfulRunResult } from '../dx-script-provider';
import { ChartWithModules } from '../../chart/components/canvas-chart-renderer/chart-with-modules';
export interface DxScriptStudiesDataProvider {
    calculateStudy: (script: string, config: StudySeriesConfig) => Promise<TickValues[]>;
}
/**
 * Studies data provider for dxScript.
 */
export declare const createDxScriptStudiesDataProvider: (dxScriptRunner: DxScriptRunner, chartInstance: ChartWithModules) => DxScriptStudiesDataProvider;
export declare const isSuccessRun: (result: RunScriptResult) => result is SuccessfulRunResult;
