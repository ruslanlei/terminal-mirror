/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const periodInSecondsFormatter=t=>t<6e4?`${t}s`:t>=6e4&&t<36e5?`${Math.floor(t/6e4)}m`:t>=36e5&&t<864e5?`${Math.floor(t/36e5)}h`:t>=864e5&&t<6048e5?`${Math.floor(t/864e5)}d`:t>=6048e5&&t<24192e5?`${Math.floor(t/6048e5)}w`:t>=24192e5&&t<290304e5?`${Math.floor(t/24192e5)}m`:`${Math.floor(t/290304e5)}y`;
