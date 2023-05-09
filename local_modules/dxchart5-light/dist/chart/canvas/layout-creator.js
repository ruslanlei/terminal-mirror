/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{validateChartElements as o}from"./chart-elements";import l from"./canvas-chart-html";export function createDefaultLayoutTemplate(){const e=document.createElement("template");return e.innerHTML=l,e}export function extractElements(e){const t={},n=Array.from(e.querySelectorAll("[data-element]"));if(n.length!==0&&n.forEach(a=>{var r;t[(r=a.getAttribute("data-element"))!==null&&r!==void 0?r:""]=a}),o(t))return t;throw new Error("Some chart elements are missing")}
