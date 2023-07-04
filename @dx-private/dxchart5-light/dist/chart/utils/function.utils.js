/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export function clearerSafe(n){return function(){n.forEach(t=>typeof t=="function"&&t()),n.length=0}}export function identity(n){return n}export function notEmpty(n){return n!=null}export const constVoid=()=>{};export function nonNullableTypeGuard(n){return n!=null}
