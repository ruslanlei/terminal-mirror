/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FullChartColorsWithModules, FullChartConfigWithModules, PartialChartConfigWithModules } from '../chart/components/canvas-chart-renderer/chart-with-modules';
import { ChartPalette } from './chart-palette';
/**
 * Default chart config in chart-react.
 * @param chartPalette
 * @doc-tags chart-react,default-config
 */
export declare const config: (chartPalette: ChartPalette) => PartialChartConfigWithModules;
export declare const mapPalette2ChartColors: (chartPalette: ChartPalette) => FullChartColorsWithModules;
export declare const getDefaultChartConfig: (chartPalette: ChartPalette) => FullChartConfigWithModules;
export declare const DEFAULT_CHART_CONFIG: FullChartConfigWithModules;
