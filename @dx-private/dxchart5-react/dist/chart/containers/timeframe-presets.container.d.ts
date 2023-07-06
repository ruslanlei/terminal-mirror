/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { TimeframePresetsViewModel } from '../view-models/timeframe-presets.view-model';
import { ChartReactConfig } from '../../config/chart-react-config';
export declare const TimeframePresetsContainer: import("../../context/context2").Context<Record<"timeframePresetsViewModel", TimeframePresetsViewModel> & Record<"chartReactConfig", ChartReactConfig>, import("react").FC<Record<string, any>>>;
