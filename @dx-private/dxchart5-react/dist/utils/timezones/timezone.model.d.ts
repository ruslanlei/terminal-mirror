/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface TimeZone {
    readonly timeZone: string;
    readonly name: string;
    readonly utcOffset: string;
}
export interface TimezonesConfig {
    currentTimezone: string;
    listOfTimezones: Array<string>;
}
export declare const LOCALSTORAGE_TIMEZONES_KEY = "timezones";
export interface TimeZonesLocalStorage {
    expireTimeStamp: number;
    timezones: TimeZone[];
    /**
     * This string is used to compare list of cached timezones with
     * current list passed to function and replaces cache
     * if there is a DIFFERENCE IN STRING LENGTH
     * pay attention that it's not a 100% precise method,
     * and it was done to make function faster
     */
    timezonesRaw: string;
}
export declare const parseTimezones: (tzs: string[]) => TimeZone[];
export declare const saveTimeZonesToLS: (timezones: TimeZone[], tzs: string[]) => void;
