/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../utils/property.utils';
import { Sink } from '../../utils/sink';
export interface BrowserApiViewModel {
    isOnline: Property<boolean>;
}
/**
 * Controls that browser has internet.
 */
export declare const createBrowserApiViewModel: () => Sink<BrowserApiViewModel>;
