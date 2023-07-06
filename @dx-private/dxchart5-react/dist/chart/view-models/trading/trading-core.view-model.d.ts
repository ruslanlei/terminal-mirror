/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { Property } from '../../../utils/property.utils';
import { Pixel, Price } from '@dx-private/dxchart5-light/dist/chart/model/scaling/viewport.model';
import { Sink } from '../../../utils/sink';
import { Point } from '@dx-private/dxchart5-light/dist/chart/inputlisteners/canvas-input-listener.component';
export interface TradingCoreViewModel {
    readonly marketPrice: Property<number>;
    readonly marketPriceY: Property<number>;
    readonly showTrading: Property<boolean>;
    readonly yToPrice: (y: Pixel) => Price;
    readonly priceToY: (price: Price) => Pixel;
    boundTradingPosition: Property<Point>;
    clampY: (y: number) => number;
}
export declare const createTradingCoreViewModel: import("../../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chartInstance", ChartWithModules>, Sink<TradingCoreViewModel>>;
export declare function clampMap({ value, min, max, mapTo, mapFrom, }: {
    value: number;
    min?: number;
    max?: number;
    mapTo: (a: number) => number;
    mapFrom: (a: number) => number;
}): number;
