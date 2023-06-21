/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export interface Unsubscriber {
    (): void;
}
export declare function clearerSafe(arr: Array<Unsubscriber>): Unsubscriber;
export declare function identity<T>(x: T): T;
export declare function notEmpty<T>(value: T | null | undefined): value is T;
export declare const constVoid: () => undefined;
export declare function nonNullableTypeGuard<T>(x: T | undefined | null): x is T;
