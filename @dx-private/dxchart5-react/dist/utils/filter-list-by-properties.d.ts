/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
interface TProperty<K> {
    path: [K];
    filterByCapitalLetters?: boolean;
    transformValue?: (value: string) => string;
}
export declare function filterListByProperties<T extends object, K extends keyof T>(list: T[], filter: string, properties: TProperty<K>[]): T[];
export {};
