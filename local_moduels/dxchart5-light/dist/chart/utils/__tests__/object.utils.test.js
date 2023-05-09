/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{deepEqual as t,is as e}from"../utils-index";describe("object",()=>{describe("is",()=>{it("should compare objects",()=>{expect(e(void 0,void 0)).toBeTruthy(),expect(e(void 0,1)).toBeFalsy(),expect(e(null,null)).toBeTruthy(),expect(e(1,null)).toBeFalsy(),expect(e(!0,!0)).toBeTruthy(),expect(e(!1,!1)).toBeTruthy(),expect(e(!0,!1)).toBeFalsy(),expect(e("123","123")).toBeTruthy(),expect(e("foo","bar")).toBeFalsy();const o={};expect(e(o,o)).toBeTruthy(),expect(e(o,{})).toBeFalsy(),expect(e(1,1)).toBeTruthy(),expect(e(-1,-1)).toBeTruthy(),expect(e(NaN,NaN)).toBeTruthy(),expect(e(0,0)).toBeTruthy(),expect(e(-0,-0)).toBeTruthy(),expect(e(0,-0)).toBeFalsy(),expect(e(NaN,0/0)).toBeTruthy()})}),describe("deepEqual",()=>{it("should deeply compare objects",()=>{expect(t({},{})).toBeTruthy(),expect(t({a:{foo:1}},{a:{foo:1}})).toBeTruthy(),expect(t({a:{foo:1}},{a:{foo:2}})).toBeFalsy(),expect(t({a:{foo:1}},{a:{bar:1}})).toBeFalsy()})})});
