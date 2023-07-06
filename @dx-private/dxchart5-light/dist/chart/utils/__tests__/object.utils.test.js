/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{deepEqual as e}from"../object.utils";describe("object",()=>{describe("deepEqual",()=>{it("should deeply compare objects",()=>{expect(e({},{})).toBeTruthy(),expect(e({a:{foo:1}},{a:{foo:1}})).toBeTruthy(),expect(e({a:{foo:1}},{a:{foo:2}})).toBeFalsy(),expect(e({a:{foo:1}},{a:{bar:1}})).toBeFalsy()})})});
