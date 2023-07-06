/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { News, NewsData, NewsDataProvider } from '../../../providers/news-data-provider';
import { Sink } from '../../../context/sink2';
import { Observable } from 'rxjs';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { ChartDataViewModel } from '../chart-data.view-model';
export interface HoveredNews {
    readonly news: News[];
    readonly x: number;
    readonly y: number;
}
export interface NewsViewModel {
    readonly news: Observable<NewsData>;
    readonly hoveredNews: Observable<HoveredNews | null>;
}
export declare const createNewsViewModel: import("../../../context/context2").Context<Record<"newsDataProvider", NewsDataProvider> & Record<"chartInstance", ChartWithModules> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartDataViewModel", ChartDataViewModel>, Sink<NewsViewModel>>;
