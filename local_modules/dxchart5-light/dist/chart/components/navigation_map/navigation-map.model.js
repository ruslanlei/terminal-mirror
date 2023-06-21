/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{getTextBounds as p,getTextLines as d}from"../../utils/canvas/canvas-text-functions.utils";export function calcTimeLabelBounds(e,n,o,i){const t=i.components.navigationMap.timeLabels,s=t.padding,a=getFormattedTimeLabel(n,t.dateFormat,o),x=d(a),c={textFontFamily:t.fontFamily,textSize:`${t.fontSize}px`},[r,m]=p(e,x,c);return[r+s.x*2,m+s.y*2]}export function getFormattedTimeLabel(e,n,o){return o(n)(e).split(" ").join(`
`)}
