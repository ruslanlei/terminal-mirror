/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { ChartDataViewModel } from '../../view-models/chart-data.view-model';
import { InstrumentSelectorViewModel } from '../../view-models/instrument-selector.view-model';
import { InstrumentSuggestComponentProps } from './instrument-selector.model';
export declare const InstrumentSuggestComponent: import("../../../context/context2").Context<Record<"instrumentSelectorViewModel", InstrumentSelectorViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartReactConfig", ChartReactConfig>, React.FC<InstrumentSuggestComponentProps>>;
export declare const MainInstrumentSelectorContainer: import("../../../context/context2").Context<Record<"chartDataViewModel", ChartDataViewModel> & Record<"instrumentSelectorViewModel", InstrumentSelectorViewModel> & Record<"chartReactConfig", ChartReactConfig>, React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
    children?: React.ReactNode;
}>)>;
