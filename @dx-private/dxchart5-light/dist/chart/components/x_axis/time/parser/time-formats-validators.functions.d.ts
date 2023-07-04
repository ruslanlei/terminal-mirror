/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { ParsedTimeFormat } from './time-formats.model';
/**
 * Validators are aimed to check if the `ParsedTimeFormat` is correct
 *
 * @example
 * const timeFormat: ParsedTimeFormat = {
 * 	key: 'day',
 *  value: 13,
 *  exact: true
 * };
 * // valid, because day should be between 1 and 31
 * const valid = validateParsedTimeFormat(timeFormat); // true
 *
 * @example
 * const timeFormat: ParsedTimeFormat = {
 * 	key: 'minute',
 *  value: 255,
 *  exact: true
 * };
 * // INvalid, because minute should be between 1 and 60
 * const valid = validateParsedTimeFormat(timeFormat); // false
 */
export declare const validateParsedTimeFormat: <T extends ParsedTimeFormat>(parsed: T) => boolean;
