/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import t from"color";export const VOLUMES_COLOR_OPACITY=.3,resolveColorForBar=(o,r)=>{const e=r.barTheme[`${o}Color`];return t(e).alpha(VOLUMES_COLOR_OPACITY).toString()},resolveColorForLine=(o,r)=>{const e=r.lineTheme[`${o}Color`];return t(e).alpha(VOLUMES_COLOR_OPACITY).toString()},resolveColorForCandle=(o,r)=>{const e=r.candleTheme[`${o}Color`];return t(e).alpha(VOLUMES_COLOR_OPACITY).toString()};
