/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AtLeastOne } from '@dx-private/dxchart5-light/dist/chart/utils/object.utils';
interface RequestNewsOptions {
    /**
     * You can specify fromTime to reduce amount of news loaded to the chart
     */
    readonly fromTime: number;
}
export interface NewsDataProvider {
    requestNews(symbol: string, options?: AtLeastOne<RequestNewsOptions>): Promise<NewsData>;
}
export interface News {
    readonly title: string;
    readonly timestamp: number;
    readonly sourceLink: string;
}
export interface NewsData {
    readonly news: News[];
}
export {};
