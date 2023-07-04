/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { UserDataProvider } from '../user-data-provider';
interface LocalStorageUserDataProvider {
    expirationPeriod: number;
}
export declare const USER_DATA_KEY = "userData";
export declare const createLocalStorageUserDataProvider: (storageKey?: string, options?: LocalStorageUserDataProvider) => UserDataProvider;
export {};
