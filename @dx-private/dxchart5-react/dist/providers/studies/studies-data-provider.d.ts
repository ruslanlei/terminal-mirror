/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { StudySeriesConfig } from '@dx-private/dxchart5-modules/dist/studies/model/StudySeries';
import { TickValues } from '@dx-private/dxchart5-modules/dist/studies/model/StudiesModel';
import { TStudySettings } from '../../chart/model/studies.model';
export interface CalculateStudyOptions {
    chartId?: string;
    addedStudies?: TStudySettings[];
}
export interface StudiesDataProvider {
    /**
     * Example of expecting result
     * * [
     *   [0.2, 0.5], // for 1st candle
     *   [0.2, 0.6], // for 2nd candle
     *   [0.2, 0.7], // for 3rd candle
     * ]
     * @param config
     */
    calculateStudy: (config: StudySeriesConfig, options: CalculateStudyOptions) => Promise<TickValues[]>;
}
