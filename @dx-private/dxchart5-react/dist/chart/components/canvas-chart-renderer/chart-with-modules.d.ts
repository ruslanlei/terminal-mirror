/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartWithDrawings, FullChartColorsDrawings, FullChartConfigDrawings } from '@dx-private/dxchart5-modules/dist/drawings/DrawingsConfig';
import { ChartWithStudies, FullChartConfigStudies } from '@dx-private/dxchart5-modules/dist/studies/StudiesConfig';
import { DeepPartial } from '@dx-private/dxchart5-light/dist/chart/utils/object.utils';
import ChartBootstrap from '@dx-private/dxchart5-light/dist/chart/bootstrap';
import { ChartWithEquivolume, FullChartColorsEquivolume, FullChartConfigEquivolume } from '@dx-private/dxchart5-modules/dist/equivolume/EquivolumeConfig';
import { ChartWithHeikinAshi } from '@dx-private/dxchart5-modules/dist/heikin-ashi/HeikinAshiConfig';
import { ChartWithNews, FullChartColorsNews, FullChartConfigNews } from '@dx-private/dxchart5-modules/dist/news/NewsConfig';
export type FullChartConfigWithModules = FullChartConfigDrawings & FullChartConfigStudies & FullChartConfigEquivolume & FullChartConfigNews;
export type FullChartColorsWithModules = FullChartColorsDrawings & FullChartColorsEquivolume & FullChartColorsNews;
export type PartialChartConfigWithModules = DeepPartial<FullChartConfigWithModules>;
export type ChartWithModules = ChartBootstrap & ChartWithDrawings & ChartWithStudies & ChartWithEquivolume & ChartWithHeikinAshi & ChartWithNews;
export declare const createChartWithModules: (element: HTMLElement, userConfig?: PartialChartConfigWithModules) => ChartWithModules;
export declare const mergeFullChartConfig: (config: PartialChartConfigWithModules, defaultConfig?: FullChartConfigWithModules) => FullChartConfigWithModules;
