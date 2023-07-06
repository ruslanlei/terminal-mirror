/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { CursorType, FullChartConfig } from '@dx-private/dxchart5-light/dist/chart/chart.config';
import { StudiesHover } from './model/StudiesHover';
import { StudySeriesConfig } from './model/StudySeries';
import { StudiesComponent } from './StudiesComponent';
declare module '@dx-private/dxchart5-light/dist/chart/inputhandlers/hover-producer.component' {
    interface HoverParts {
        studiesHover: StudiesHover;
    }
}
export type ChartWithStudies = {
    studiesComponent: StudiesComponent;
    config: FullChartConfigStudies;
} & ChartBootstrap;
export interface ChartConfigComponentsStudies {
    visible: boolean;
    /**
     * List of study configurations. Requires study data as well, use API to set the data.
     */
    studies?: Array<StudySeriesConfig>;
    histogramLineWidth: number;
    /**
     * Use when you need to format high precision values up to 10 signs after 0.
     */
    useHighPrecisionFormat?: boolean;
    cursors: {
        main: CursorType;
    };
    /**
     * 'viewport' study labels will show last visible on the screen study series value.
     * 'series'  study labels will show last overall study series value (even if not visible).
     */
    labels: {
        lastValue: 'series' | 'viewport';
    };
}
export type FullChartConfigStudies = {
    components: {
        studies: ChartConfigComponentsStudies;
    };
} & FullChartConfig;
export declare const defaultStudiesComponentConfig: ChartConfigComponentsStudies;
export declare const applyStudiesComponentConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        studies: ChartConfigComponentsStudies;
    };
} & FullChartConfig;
