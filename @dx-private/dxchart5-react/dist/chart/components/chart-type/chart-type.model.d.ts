/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Localization } from '../../../config/localization/localization';
import { ChartType } from '../../model/chart.model';
export declare const typeToString: (type: ChartType, localization?: Localization) => string;
export declare const toType: (type: string, localization?: Localization) => ChartType;
