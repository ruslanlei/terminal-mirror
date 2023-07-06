/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Event } from '@dx-private/dxchart5-light/dist/chart/components/events/events.model';
import { Observable } from 'rxjs';
import { Localization } from '../../config/localization/localization';
import { Event as EventModel, EventsData, EventsDataProvider } from '../../providers/events-data-provider';
import { Property } from '../../utils/property.utils';
import { ChartConfiguratorViewModel } from './chart-configurator.view-model';
import { ChartDataViewModel } from './chart-data.view-model';
import { Option } from 'fp-ts/Option';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { ChartReactConfig } from '../../config/chart-react-config';
export interface EventDataViewModel {
    readonly events: Observable<EventsData>;
    readonly hoveredTarget: Property<Option<EventPopoverData>>;
}
export interface EventRow {
    name: string;
    value: string;
}
export interface EventPopoverData {
    title: string;
    rows: Array<EventRow>;
    color: string;
    x: number;
    y: number;
}
export declare const createEventDataViewModel: import("../../context/context2").Context<Record<"eventsDataProvider", EventsDataProvider> & Record<"chartInstance", ChartWithModules> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig>, import("../../utils/adt/sink.utils").Sink1<"Observable", EventDataViewModel>>;
export declare const toChartCoreEvent: (data: EventModel) => Event;
