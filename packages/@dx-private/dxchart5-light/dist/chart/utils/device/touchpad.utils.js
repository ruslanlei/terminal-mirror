/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),l=!!window.chrome;export const isFirefox=typeof InstallTrigger!="undefined";const d=navigator.platform.indexOf("Win")>-1;export const touchpadDetector=t=>{let i=!1;const{wheelDeltaY:a,wheelDeltaX:s}=t;if(a||s){let e;if(o)e=a===t.deltaY*-3||Math.abs(a+Math.sign(a))===Math.abs(Math.round(t.deltaY)*3)||Math.abs(a-Math.sign(a))===Math.abs(Math.round(t.deltaY)*3);else if(l){if(e=a+Math.sign(a)===t.deltaY*-3?a+Math.sign(a)===t.deltaY*-3:a===t.deltaY*-3,d){const n=Math.round(t.deltaY)===a||Math.abs(Math.round(t.deltaY)+Math.sign(t.deltaY))===Math.abs(a)||Math.abs(Math.round(t.deltaY)-Math.sign(t.deltaY))===Math.abs(a);e=Math.abs(a)===Math.abs(t.deltaY)||n}}else isFirefox?Math.abs(t.deltaY)>Math.abs(t.deltaX)?e=!1:e=s===t.deltaX*-3:e=a===t.deltaY*-3;e&&(i=!0)}else t.deltaMode===0&&(i=!0);return isFirefox&&t.deltaY>=16&&Math.abs(t.deltaY)%16===0&&(i=!1),t.ctrlKey&&(i=!0),i},getTouchpadSensitivity=t=>t.components.yAxis.type==="percent"?t.scale.zoomSensitivity/4:t.scale.zoomSensitivity;