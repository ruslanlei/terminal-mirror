/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{calculateSymbolHeight as y,calculateTextWidth as u}from"../../utils/canvas-font-measure-tool.utils";export class TextDrawer{constructor(t){this.config=t}draw(t,r,o,l){t.save(),r.forEach((a,f)=>{var e;const s=o.getPaintConfig(f);t.fillStyle=(e=l.singleColor)!==null&&e!==void 0?e:s.color;const i=s.lineWidth+"px "+this.config.components.yAxis.fontFamily;t.font=i,a.forEach(n=>{const c=o.getTextForPoint(n),g=u(c,t,i),h=y(i,t),v=o.view.toX(n.centerUnit)-g/2,x=o.view.toY(n.close)+h;t.fillText(c,v,x)})}),t.restore()}}
