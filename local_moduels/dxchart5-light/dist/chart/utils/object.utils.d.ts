/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export declare const cloneUnsafe: <T>(value: T) => T;
type Entries<T extends object> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
export declare function typedEntries_UNSAFE<T extends object>(obj: T): Entries<T>;
export {};
