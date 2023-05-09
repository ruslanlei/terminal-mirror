/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export const createBasicScaleViewportTransformer=t=>n=>{if(n.length!==0){const a=n.slice(Math.max(n.length-t.state.defaultViewportItems,0)),e=a[0],i=a[a.length-1];t.setXScale(e.startUnit,i.startUnit+i.width+t.offsets.right),t.doAutoScale(!0),t.recalculateZoomXYRatio(),t.fireChanged()}},createTimeFrameViewportTransformer=(t,n)=>(a,e=null)=>{const[i,o]=a,r=n.candleFromTimestamp(i).startUnit,m=n.candleFromTimestamp(o).startUnit,s=e===null?0:n.mainCandleSeries.meanCandleWidth*2,c=e?r-s:r+s,f=e?m+s:m-s;t.setXScale(c,f)};
