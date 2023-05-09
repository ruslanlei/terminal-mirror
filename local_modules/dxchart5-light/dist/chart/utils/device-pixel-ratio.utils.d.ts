/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export declare let dpr: number;
export declare const getDPR: () => number;
/**
 * Rounds a given number according to the inverse of current DPR.
 * For example, DRP = 2, num = 2, res => 2; DRP = 2, num = 2.5, res => 2.5; DRP = 2, num = 2.333, res => 2.5
 * @param num
 * @doc-tags chart-core,math,dpr
 */
export declare const roundToDPR: (num: number) => number;
export declare const floorToDPR: (num: number) => number;
export declare const ceilToDPR: (num: number) => number;
