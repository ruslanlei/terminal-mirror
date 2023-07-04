/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LayoutProvider } from '../layout-provider';
interface LocalStorageLayoutProvider {
    expirationPeriod: number;
}
export declare const LAYOUTS_KEY = "layouts";
export declare const DEFAULT_EXPIRATION_PERIOD: number;
export declare const createLocalStorageLayoutProvider: (storageKey?: string, options?: LocalStorageLayoutProvider) => LayoutProvider;
export {};
