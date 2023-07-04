/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartLayoutWithId } from '../../../providers/layout-provider';
import { ChartDataSubscriptionKey } from '../../services/multichart-data.utils';
export declare const getChartDataKeysFromLayout: (layout: ChartLayoutWithId) => ChartDataSubscriptionKey[];
