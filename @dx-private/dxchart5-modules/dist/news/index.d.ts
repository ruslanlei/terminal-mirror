/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { ChartModule } from '..';
import { NewsComponent } from './NewsComponent';
import { ChartWithNews, FullChartConfigNews } from './NewsConfig';
type ChartCore = {
    newsComponent?: NewsComponent;
} & ChartBootstrap;
export declare const attachNewsComponent: <T extends ChartCore>(_chartInstance: T) => T & ChartBootstrap & {
    newsComponent: NewsComponent;
    config: FullChartConfigNews;
};
export declare const News: ChartModule;
export {};
