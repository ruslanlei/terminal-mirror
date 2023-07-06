/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/**
 * @description
 * Helps with the partial objects functions arguments, but errors the empty object case, which is allowed by simple Partial<T>
 * @example
 * function badUpdateSomeEntity(updates: Partial<Entity>): Entity
 * badUpdateSomeEntity({ property: 123 }) // ok
 * badUpdateSomeEntity() // error - expected
 * badUpdateSomeEntity({}) // ok - not expected, should not be allowed to do such operation
 *
 * function goodUpdateSomeEntity(object: AtLeastOne<Entity>): Entity
 * goodUpdateSomeEntity({ property: 123 }) // ok
 * goodUpdateSomeEntity() // error - expected
 * goodUpdateSomeEntity({}) // error - nice!
 */
export type AtLeastOne<T, Keys extends keyof T = keyof T> = Partial<T> & {
    [K in Keys]: Required<Pick<T, K>>;
}[Keys];
export interface StringTMap<T> {
    [key: string]: T;
}
export type DeepPartial<T> = T extends (...args: unknown[]) => unknown ? T : T extends Record<string, any> ? T extends unknown[] ? DeepPartial<T[number]>[] : {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type DeepRequired<T> = T extends (...args: unknown[]) => unknown ? T : T extends Record<string, any> ? T extends unknown[] ? DeepRequired<T[number]>[] : {
    [P in keyof T]-?: DeepRequired<T[P]>;
} : T;
export declare const cloneUnsafe: <T>(value: T) => T;
type Entries<T extends object> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
export declare function typedEntries_UNSAFE<T extends object>(obj: T): Entries<T>;
export declare const findKeyFromValue: <K, V>(map: Map<K, V>, mapValue: V) => K | undefined;
export declare function keys<K extends string>(r: Partial<Record<K, unknown>>): Array<K>;
/**
 * Deeply compares two objects
 * @param {*} objA
 * @param {*} objB
 * @returns {Boolean}
 */
export declare function deepEqual(objA: object, objB: object): boolean;
export {};
