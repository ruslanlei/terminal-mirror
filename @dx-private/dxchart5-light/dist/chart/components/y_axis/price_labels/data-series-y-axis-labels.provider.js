/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{DEFAULT_DATA_SERIES_PAINT_CONFIG as d}from"../../../model/data-series.config";import{getLabelTextColorByBackgroundColor as g}from"../../../utils/canvas/canvas-text-functions.utils";export class DataSeriesYAxisLabelsProvider{constructor(i,e,s){this.series=i,this.config=e,this.yAxisBoundsProvider=s}getUnorderedLabels(){if(this.config.visible){const e=this.config.labelLastValue==="series"?this.series.getLastDataSeriesPoint:this.series.getLastVisualSeriesPoint,s=[],t=this.yAxisBoundsProvider(),n=this.config.labelMode,a=this.config.labelAppearanceType,o=e();if(o!==void 0){const r=this.series.view.toY(o.close),l=this.series.valueFormatter(o.close),c=this.getLabelDrawConfig();return s.push(Object.assign({y:r,description:this.series.name,mode:n,labelType:a,labelText:l},c)),[{labels:[...s],bounds:t}]}}return[]}getLabelDrawConfig(){var i;const e=this.series.config,t=((i=e.paintConfig[0])!==null&&i!==void 0?i:d).color;return{textColor:g(t,"white","black"),bgColor:t,paddingBottom:e.labelPaddingBottom,paddingEnd:e.labelPaddingEnd,paddingTop:e.labelPaddingTop}}}