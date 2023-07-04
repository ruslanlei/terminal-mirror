/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable } from 'rxjs';
import { TimeZone } from '@dx-private/dxchart5-light/dist/chart/model/time-zone.model';
import { Sink } from '../../context/sink2';
import { ChartDataViewModel } from './chart-data.view-model';
import { Property } from '../../utils/property.utils';
import { MultiChartViewModel } from './multi-chart.view-model';
import { Localization } from '../../config/localization/localization';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from './aggregation-period.view-model';
import { TradingSessionsProvider } from '../../providers/sessions/trading-sessions-provider';
export declare const EXCHANGE = "Exchange";
export declare const UTC = "UTC";
export declare const EMPTY_TIMEZONE = "";
export interface TimeZoneViewModel {
    readonly timeZones: Property<TimeZone[]>;
    readonly setTimezone: (timeZone: string) => void;
    readonly currentTimezone: Observable<string>;
    readonly currentExchange: Property<string>;
    readonly onSearchTimezone: (value: string) => void;
    readonly setTimezoneSafe: (value: string) => void;
}
export declare const createTimeZoneViewModel: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"localization", Localization> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"initialTimezones", Promise<TimeZone[]>> & Record<"tradingSessionsProvider", TradingSessionsProvider>, Sink<TimeZoneViewModel>>;
