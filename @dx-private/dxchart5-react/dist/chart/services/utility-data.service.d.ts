/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartDataProvider, ServiceData } from '../../providers/chart-data-provider';
import { Observable } from 'rxjs';
export interface UtilityDataService {
    readonly subscribeServiceData: (symbol: string) => Observable<ServiceData>;
}
export declare const createUtilityDataService: import("../../context/context2").Context<Record<"chartDataProvider", ChartDataProvider>, UtilityDataService>;
