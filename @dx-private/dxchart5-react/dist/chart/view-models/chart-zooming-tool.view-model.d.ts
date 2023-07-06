/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../context/sink2';
import { Observable } from 'rxjs';
import { Property } from '../../utils/property.utils';
import { Bounds } from '@dx-private/dxchart5-light/dist/chart/model/bounds.model';
import { ChartConfiguratorViewModel } from './chart-configurator.view-model';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
export interface ChartZoomingToolViewModel {
    readonly zoomIn: () => void;
    readonly zoomOut: () => void;
    readonly buttonsDisabled: Property<ButtonsDisabledState>;
    readonly marginBottom: Observable<number>;
    readonly observeBounds$: Observable<Bounds>;
}
export interface ButtonsDisabledState {
    zoomIn: boolean;
    zoomOut: boolean;
}
export declare const createZoomingToolViewModel: import("../../context/context2").Context<Record<"chartInstance", ChartWithModules> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel>, Sink<ChartZoomingToolViewModel>>;
