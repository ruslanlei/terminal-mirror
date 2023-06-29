/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import{Subject as v}from"rxjs";import{distinctUntilChanged as f,skip as u,startWith as C}from"rxjs/operators";import{DynamicDrawerType as s}from"../../drawers/drawing-manager";import{ChartBaseElement as b}from"../../model/chart-base-element";import{DragNDropYComponent as D}from"../dran-n-drop_helper/drag-n-drop-y.component";import{BarResizerDrawer as A}from"./bar-resizer.drawer";export class BarResizerComponent extends b{constructor(t,i,n,a,o,e,r,h,d,c,m){super(),this.id=t,this.boundsProvider=i,this.hitTest=n,this.dragTickCb=a,this.chartPanComponent=o,this.canvasModel=e,this.drawingManager=r,this.canvasInputListener=h,this.canvasAnimation=d,this.config=c,this.canvasBoundsContainer=m,this.initialY=0,this.resizeEvent$=new v,this.onYDragStart=()=>{this.config.components.crossTool.type="none",this.initialY=this.boundsProvider().y},this.onYDragEnd=()=>{this.config.components.crossTool.type="cross-and-labels",this.initialY=this.boundsProvider().y,this.canvasBoundsContainer.graphsHeightRatioChangedSubject.next(this.canvasBoundsContainer.graphsHeightRatio)},this.onYDragTick=g=>{const{delta:p,draggedPixels:l}=g;Math.abs(this.initialY-this.boundsProvider().y+l)>=0&&(this.dragTickCb(p),this.resizeEvent$.next())},this.animationId=`${this.id}_RESIZER`}doActivate(){if(super.doActivate(),!this.config.components.paneResizer.fixedMode){const n=new D(this.hitTest,{onDragTick:this.onYDragTick,onDragStart:this.onYDragStart,onDragEnd:this.onYDragEnd},this.canvasInputListener,this.chartPanComponent);this.addChildEntity(n),this.config.animation.paneResizer.enabled&&this.addRxSubscription(this.canvasInputListener.observeMouseEnter(this.hitTest,!0).pipe(C(!1),f(),u(1)).subscribe(a=>{a?this.handleHoverAnimation("appearing"):this.handleHoverAnimation("fading")}))}const i=new A(this.config,this.boundsProvider,this.canvasModel,this.canvasAnimation,this.animationId,this.canvasBoundsContainer);this.drawingManager.addDrawer(i,s.paneResizer(this.id)),this.addSubscription(()=>this.drawingManager.removeDrawerByName(s.paneResizer(this.id)))}doDeactivate(){super.doDeactivate(),this.resizeEvent$.complete()}handleHoverAnimation(t){let i;this.config.animation.paneResizer.bgMode?(i=this.canvasAnimation.getColorAlphaAnimation(this.animationId),(!i||!i.animationInProgress)&&this.canvasAnimation.startColorAlphaAnimation(this.animationId,[{color:this.config.colors.paneResizer.bgHoverColor,type:t}])):(i=this.canvasAnimation.getColorTransitionAnimation(this.animationId),(!i||!i.animationInProgress)&&this.canvasAnimation.startColorTransitionAnimation(this.animationId,[{startColor:this.config.colors.paneResizer.bgColor,endColor:this.config.colors.paneResizer.bgHoverColor,type:t}],this.config.animation.paneResizer.duration)),i&&i.animationInProgress&&i.revert()}}