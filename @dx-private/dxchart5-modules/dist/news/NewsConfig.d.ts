/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { NewsComponent } from './NewsComponent';
import { FullChartColors, FullChartConfig } from '@dx-private/dxchart5-light/dist/chart/chart.config';
export type ChartWithNews = ChartBootstrap & {
    newsComponent: NewsComponent;
    config: FullChartConfigNews;
};
export type FullChartConfigNews = {
    components: {
        news: ChartConfigComponentsNews;
    };
    colors: {
        newsTheme: NewsTheme;
    };
} & FullChartConfig;
export interface NewsTheme {
    backgroundColor: string;
}
export type FullChartColorsNews = {
    newsTheme: NewsTheme;
} & FullChartColors;
export declare const applyNewsConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        news: ChartConfigComponentsNews;
    };
    colors: {
        newsTheme: NewsTheme;
    };
} & FullChartConfig;
export type NewsDrawerType = 'NEWS' | 'HIT_TEST_NEWS';
export interface ChartConfigComponentsNews {
    visible: boolean;
    radius: {
        common: number;
        hovered: number;
    };
    hitTest: {
        radius: number;
    };
}
