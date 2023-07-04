/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{DEFAULT_MERGE_OPTIONS as n,merge as i}from"./utils/merge.utils";export const MAIN_FONT="Open Sans Semibold, sans-serif",LastBarRedrawableBarTypes=["candle","bar","scatterPlot","trend","hollow","histogram"],isLastBarRedrawAvailable=r=>LastBarRedrawableBarTypes.find(o=>o===r)!==void 0,getDefaultConfig=()=>({devexpertsPromoLink:!0,useUTCTimeOverride:!1,shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rtl:!1,scale:{keepZoomXOnYAxisChange:!0,auto:!0,zoomToCursor:!1,lockPriceToBarRatio:!1,autoScaleOnCandles:!0,autoScaleDisableOnDrag:{enabled:!0,edgeAngle:Math.PI/15,yDiff:80},inverse:!1,zoomSensitivity:.25,defaultViewportItems:100},timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,components:{chart:{type:"candle",showCandlesBorder:!0,showActiveCandlesBorder:!0,showWicks:!0,candleLineWidth:1,lineWidth:1,areaLineWidth:1,barLineWidth:1,minWidth:.5,minCandles:10,candlePaddingPercent:.25,highlightActiveCandle:!0,cursor:"default",selectedWidth:3,minCandlesOffset:2,defaultZoomCandleWidth:7,zoomStep:0,histogram:{barCapSize:1}},yAxis:{type:"regular",visible:!0,valueLines:100,zeroPercentLine:!0,customScale:!0,customScaleDblClick:!0,align:"right",fontSize:12,fontFamily:MAIN_FONT,cursor:"ns-resize",labelBoxMargin:{top:4,bottom:4,end:8,start:10},typeConfig:{badge:{rounded:!0,paddings:{top:4,bottom:4,end:4,start:4}},plain:{},rectangle:{rounded:!1,paddings:{top:4,bottom:4,end:4,start:4}}},labels:{descriptions:!1,settings:{lastPrice:{mode:"label",type:"badge"},countdownToBarClose:{mode:"none",type:"rectangle"}}},width:60},xAxis:{visible:!0,formatsForLabelsConfig:{lessThanSecond:"mm:ss",second_1:"HH:mm:ss",minute_1:"HH:mm",minute_5:"HH:mm",minute_30:"HH:mm",hour_1:"HH:mm",day_1:"dd.MM",month_1:"MMM",year_1:"YYYY"},fontSize:12,fontFamily:MAIN_FONT,cursor:"ew-resize",padding:{top:8,bottom:16},fontStyle:""},events:{visible:!1,eventsVisibility:{"conference-calls":!0,dividends:!0,splits:!0,earnings:!0},height:20,cursor:"default",xAxisLabelFormat:[{format:"d MMM"}],icons:{earnings:{normal:'<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.06066 6.5L6.5 1.06066L11.9393 6.5L6.5 11.9393L1.06066 6.5Z" stroke="#D92C40" stroke-width="1.5"/></svg>',hover:'<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.06066 6.5L6.5 1.06066L11.9393 6.5L6.5 11.9393L1.06066 6.5Z" fill="#D92C40" stroke="#D92C40" stroke-width="1.5"/></svg>'}}},offsets:{visible:!0,right:10,top:10,bottom:20,left:0},waterMark:{visible:!1,fontFamily:"Open Sans, sans-serif",firstRowFontSize:80,firstRowBottomPadding:10,secondRowFontSize:40,secondRowBottomPadding:25,thirdRowFontSize:40,thirdRowBottomPadding:15,position:"center",offsetX:20,offsetY:20,logoWidth:20,logoHeight:20},highLow:{visible:!1,font:"12px sans-serif"},highlights:{visible:!1,fontFamily:"Open Sans",fontSize:13,border:{width:1,dash:[8,4]}},crossTool:{type:"cross-and-labels",discrete:!1,magnetTarget:"none",lineDash:[4,6],xAxisLabelFormat:[{format:"dd.MM.YYYY",showWhen:{periodMoreThen:846e5}},{format:"dd.MM.YYYY HH:mm",showWhen:{periodLessThen:846e5,periodMoreThen:6e3}},{format:"dd.MM.YYYY HH:mm:ss",showWhen:{periodLessThen:6e3}}],xLabel:{padding:{top:4,bottom:4,right:8,left:8},margin:{top:4}},yLabel:{padding:{top:4,bottom:4,end:4,start:4},type:"badge"}},grid:{visible:!0,horizontal:!1,vertical:!0,width:1,dash:[0,0],color:"#FFFFFF"},volumes:{visible:!0,showSeparately:!1,valueLines:15,barCapSize:1,volumeBarSpace:0,volumeFillColor:"#FFFFFF"},navigationMap:{visible:!1,allCandlesHistory:!0,timeLabels:{visible:!1,dateFormat:"dd.MM.YYYY HH:mm",fontFamily:"Open Sans",fontSize:13,padding:{x:10,y:1}},minSliderWindowWidth:10,cursors:{chart:"default",buttonLeft:"pointer",buttonRight:"pointer",leftResizer:"ew-resize",rightResizer:"ew-resize",slider:"grab"},knots:{height:35,width:7,border:0,lineWidth:1}},baseline:{cursor:"ns-resize",dragZone:3,height:1},paneResizer:{cursor:"ns-resize",height:1,visible:!0,fixedMode:!1,dragZone:3}},colors:{candleTheme:{upColor:"rgba(77,153,83,1)",downColor:"rgba(217,44,64,1)",noneColor:"rgba(255,255,255,1)",upWickColor:"rgba(77,153,83,1)",downWickColor:"rgba(217,44,64,1)",noneWickColor:"rgba(255,255,255,1)",borderOpacity:1},barTheme:{upColor:"rgba(77,153,83,1)",downColor:"rgba(217,44,64,1)",noneColor:"rgba(255,255,255,1)"},lineTheme:{upColor:"rgba(77,153,83,1)",downColor:"rgba(217,44,64,1)",noneColor:"rgba(255,255,255,1)"},chartAreaTheme:{backgroundMode:"regular",backgroundColor:"rgba(20,20,19,1)",backgroundGradientTopColor:"red",backgroundGradientBottomColor:"blue",axisColor:"rgba(128,128,128,1)",gridColor:"rgba(37,37,36,1)"},scatterPlot:{mainColor:"rgba(255,255,255,1)"},areaTheme:{lineColor:"rgba(127,120,214,1)",startColor:"rgba(169,38,251,1)",stopColor:"rgba(169,38,251,0.8)"},baseLineTheme:{lowerSectionStrokeColor:"rgba(217,44,64,1)",upperSectionStrokeColor:"rgba(77,153,83,1)",lowerSectionFillColor:"rgba(217, 44, 64, 0.07)",upperSectionFillColor:"rgba(77, 153, 83, 0.07)",baselineColor:"rgba(55,55,54,1)"},histogram:{upCap:"rgba(77,153,83,1)",upBottom:"rgba(77,153,83,0.1)",upBright:"rgba(77,153,83,0.4)",downCap:"rgba(217,44,64,1)",downBottom:"rgba(217,44,64,0.1)",downBright:"rgba(217,44,64,0.4)",noneCap:"rgba(255,255,255,1)",noneBottom:"rgba(255,255,255,0.1)",noneBright:"rgba(255,255,255,0.4)"},crossTool:{lineColor:"rgba(107,96,86,1)",labelBoxColor:"rgba(107,96,86,1)",labelTextColor:"rgba(255,255,255,1)"},waterMarkTheme:{firstRowColor:"rgba(255,255,255,0.2)",secondRowColor:"rgba(255,255,255,0.2)",thirdRowColor:"rgba(255,255,255,0.2)"},highlights:{NO_TRADING:{border:"rgba(107,96,86,1)",background:"transparent",label:"transparent"},AFTER_MARKET:{border:"rgba(107,96,86,1)",background:"rgba(38, 251, 149, 0.05)",label:"transparent"},PRE_MARKET:{border:"rgba(107,96,86,1)",background:"rgba(255, 170, 0, 0.05)",label:"transparent"},REGULAR:{border:"rgba(107,96,86,1)",background:"transparent",label:"transparent"}},activeCandleTheme:{upColor:"rgba(98,201,93,1)",downColor:"rgba(255,47,47,1)",noneColor:"rgba(255,255,255,1)",upWickColor:"rgba(98,201,93,1)",downWickColor:"rgba(255,47,47,1)",noneWickColor:"rgba(255,255,255,1)",borderOpacity:.5},volume:{downBarColor:"rgba(99,30,37,1)",upBarColor:"rgba(42,72,44,1)",noneBarColor:"rgba(255,255,255,0.4)",upCapColor:"rgba(42,72,44,1)",downCapColor:"rgba(99,30,37,1)",noneCapColor:"rgba(255,255,255,0.4)"},highLowTheme:{highColor:"rgba(223,222,223,1)",lowColor:"rgba(223,222,223,1)"},instrumentInfo:{textColor:"#aeb1b3"},paneResizer:{lineColor:"rgba(55,55,54,1)",bgColor:"rgba(20,20,19,1)",bgHoverColor:"rgba(55,55,54,0.6)"},events:{earnings:{color:"rgba(217,44,64,1)"},dividends:{color:"rgba(169,38,251,1)"},splits:{color:"rgba(244,187,63,1)"},"conference-calls":{color:"rgba(48,194,97,1)"}},secondaryChartTheme:[{lineTheme:{upColor:"rgba(226,61,25,1)",downColor:"rgba(226,61,25,1)",noneColor:"rgba(226,61,25,1)"},areaTheme:{lineColor:"rgba(226,61,25,1)",startColor:"rgba(226,61,25,0.8)",stopColor:"rgba(226,61,25,0)"}},{lineTheme:{upColor:"rgba(250,191,64,1)",downColor:"rgba(250,191,64,1)",noneColor:"rgba(250,191,64,1)"},areaTheme:{lineColor:"rgba(250,191,64,1)",startColor:"rgba(250,191,64,0.8)",stopColor:"rgba(250,191,64,0)"}},{lineTheme:{upColor:"rgba(169,38,251,1)",downColor:"rgba(169,38,251,1)",noneColor:"rgba(169,38,251,1)"},areaTheme:{lineColor:"rgba(169,38,251,1)",startColor:"rgba(169,38,251,0.8)",stopColor:"rgba(169,38,251,0)"}},{lineTheme:{upColor:"rgba(77,211,240,1)",downColor:"rgba(77,211,240,1)",noneColor:"rgba(77,211,240,1)"},areaTheme:{lineColor:"rgba(77,211,240,1)",startColor:"rgba(77,211,240,0.8)",stopColor:"rgba(77,211,240,0)"}},{lineTheme:{upColor:"rgba(59,203,91,1)",downColor:"rgba(59,203,91,1)",noneColor:"rgba(59,203,91,1)"},areaTheme:{lineColor:"rgba(59,203,91,1)",startColor:"rgba(59,203,91,0.8)",stopColor:"rgba(59,203,91,0)"}}],yAxis:{backgroundColor:"transparent",backgroundHoverColor:"rgba(20,20,19,1)",labelBoxColor:"rgba(20,20,19,1)",labelDescriptionFillColor:"rgba(20,20,19,1)",labelTextColor:"rgba(128,128,128,1)",labelInvertedTextColor:"rgba(20,20,19,1)",rectLabelTextColor:"rgba(255,255,255,1)",rectLabelInvertedTextColor:"rgba(20,20,19,1)",zeroPercentLine:"rgba(55,55,54,1)"},labels:{lastPrice:{textNegative:"rgba(255,255,255,1)",textPositive:"rgba(255,255,255,1)",textSelected:"rgba(0,0,0,1)",boxNegative:"rgba(217,44,64,1)",boxPositive:"rgba(77,153,83,1)",boxSelected:"rgba(255,255,255,1)"},countdownToBarClose:{textNegative:"rgba(255,255,255,1)",textPositive:"rgba(255,255,255,1)",textSelected:"rgba(255,255,255,1)",boxNegative:"rgba(217,44,64,1)",boxPositive:"rgba(77,153,83,1)",boxSelected:"rgba(255,255,255,1)"},highLow:{high:{boxColor:"rgba(107,96,86,1)",textColor:"rgba(255,255,255,1)",descriptionText:"High"},low:{boxColor:"rgba(107,96,86,1)",textColor:"rgba(255,255,255,1)",descriptionText:"Low"}},bidAsk:{bid:{boxColor:"rgba(77,153,83,1)",textColor:"rgba(255,255,255,1)",descriptionText:"Bid"},ask:{boxColor:"rgba(217,44,64,1)",textColor:"rgba(255,255,255,1)",descriptionText:"Ask"}},prePostMarket:{post:{boxColor:"rgba(38,251,149,1)",textColor:"rgba(20,20,19,1)",descriptionText:"Post"},pre:{boxColor:"rgba(255,170,0,1)",textColor:"rgba(20,20,19,1)",descriptionText:"Pre"}},prevDayClose:{boxColor:"rgba(107,96,86,1)",textColor:"rgba(255,255,255,1)"}},xAxis:{backgroundColor:"transparent",labelTextColor:"rgba(128,128,128,1)"},navigationMap:{backgroundColor:"transparent",buttonColor:"rgba(255,255,255,0.1)",buttonArrowColor:"rgba(212,212,211,1)",knotColor:"rgba(255,255,255,0.1)",knotLineColor:"rgba(212,212,211,1)",sliderColor:"rgba(255,255,255,0.08)",knotBorderColor:"#0b0d1a",timeLabelsTextColor:"rgba(128,128,128,1)",mapColor:"rgba(255,255,255,0.1)",mapFillColor:"rgba(255,255,255,0.1)",mapGradientTopColor:"rgba(255,255,255,0.1)",mapGradientBottomColor:"rgba(255,255,255,0.1)"}},animation:{moveDuration:1e3,candleDuration:200,paneResizer:{bgMode:!0,enabled:!0,duration:40},yAxis:{background:{enabled:!1,duration:40}}},drawingOrder:["OVER_SERIES_CLEAR","MAIN_CLEAR","SERIES_CLEAR","GRID","X_AXIS","Y_AXIS","UNDERLAY_VOLUMES_AREA","VOLUMES","DATA_SERIES","DRAWINGS","WATERMARK","N_MAP_CHART","EVENTS"]});export function mergeWithDefaultConfig(r,o=getDefaultConfig()){return i(r,o,n),r}export function mergeWithDefaultConfigCopy(r,o=getDefaultConfig()){const e=Object.assign({},r);return i(e,o,n),e}export function rewrite(r,o){Object.keys(r).forEach(e=>delete r[e]),Object.keys(o).forEach(e=>r[e]=o[e])}function s(r){return typeof r=="object"&&r!==null}function b(r,o){return[...r].map(a=>l(a,o))}const g=r=>Array.isArray(r);function l(r,o){if(!s(r))return r;if(g(r))return b(r,o);{const e=immutableMerge({},r,o);return Object.setPrototypeOf(e,Object.getPrototypeOf(r)),e}}export function immutableMerge(r,o,e){if(!s(r))return e.overrideExisting?o:r;if(Array.isArray(r)&&Array.isArray(o)){const t=e.overrideExisting?o:r;return b(t,e)}const a=Object.create(Object.getPrototypeOf(r));return Object.keys(r).forEach(t=>a[t]=l(r[t],e)),Object.keys(o).forEach(t=>{t in r?a[t]=immutableMerge(r[t],o[t],e):e.addIfMissing&&(a[t]=l(o[t],e))}),a}
