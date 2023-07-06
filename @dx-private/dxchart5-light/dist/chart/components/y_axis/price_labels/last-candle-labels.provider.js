/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{getPrimaryLabelTextColor as b}from"../label-color.functions";import{lastOf as d}from"../../../utils/array.utils";import{getLabelTextColorByBackgroundColor as h}from"../../../utils/canvas/canvas-text-functions.utils";export class LastCandleLabelsProvider{constructor(e,a,t,o){this.chartModel=e,this.config=a,this.lastCandleLabelsByChartType=t,this.resolveLabelColorFn=o}getUnorderedLabels(){const e=[];if(this.config.components.yAxis.labels.settings.lastPrice.mode!=="none"){const t=this.getYAxisVisualLabel(this.chartModel.mainCandleSeries),o=t&&Object.assign(Object.assign({},t),this.getLabelDrawConfig(this.chartModel.mainCandleSeries,!0));if(o){const l={labels:[o]},s=this.lastCandleLabelsByChartType[this.config.components.chart.type];s==null||s(l,this.chartModel.mainCandleSeries),e.push(l)}this.chartModel.candleSeries.forEach((l,s)=>{if(s===0)return;const i=this.getYAxisVisualLabel(l),n=i&&Object.assign(Object.assign({},i),this.getLabelDrawConfig(l,!1));if(n){const c={labels:[n]},r=this.lastCandleLabelsByChartType[l.config.type];r==null||r(c,this.chartModel.mainCandleSeries),e.push(c)}})}return e}getYAxisVisualLabel(e){const a=d(e.dataPoints);if(a){const t=a.close,o=this.config.components.yAxis.labels.settings.lastPrice.mode,l=this.config.components.yAxis.labels.settings.lastPrice.type;return{y:e.view.toY(t),labelWeight:0,labelText:this.chartModel.pane.valueFormatter(t,e),mode:o,labelType:l,description:e.instrument.symbol}}return null}getLabelDrawConfig(e,a){const t=e.colors.labels,o=this.resolveLabelColorFn(e.config.type),{rectLabelTextColor:l,rectLabelInvertedTextColor:s}=this.chartModel.config.colors.yAxis;let i="#FFFFFF",n="#FFFFFF";return t&&(i=o(e.lastPriceMovement,e.colors),n=a?b(e.lastPriceMovement,t):l),{bgColor:i,textColor:h(i,n,s),rounded:!0}}}
