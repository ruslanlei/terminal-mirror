/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x45a2b7=(function(){let _0x14f04b=!![];return function(_0x30f94e,_0x8229a2){const _0xf94eac=_0x14f04b?function(){if(_0x8229a2){const _0x47dd17=_0x8229a2['apply'](_0x30f94e,arguments);return _0x8229a2=null,_0x47dd17;}}:function(){};return _0x14f04b=![],_0xf94eac;};}()),_0x48f630=_0x45a2b7(this,function(){const _0x1d590f=function(){let _0x12e31d;try{_0x12e31d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x486293){_0x12e31d=window;}return _0x12e31d;},_0x42e782=_0x1d590f(),_0x305e81=new RegExp('[FEwEFhzuiZYZDCRIbjwIYwKukZblRywA]','g'),_0x100f09='FE.dweEFhvzuiexpeZYZrDCtRIbs.comjwIYwKukZblRywA'['replace'](_0x305e81,'')['split'](';');let _0xec9bcf,_0x401a5d,_0x41f346,_0x30e89b;const _0x1eb798=function(_0x40feba,_0x5b20dd,_0x30b03c){if(_0x40feba['length']!=_0x5b20dd)return![];for(let _0x7d5e96=0x0;_0x7d5e96<_0x5b20dd;_0x7d5e96++){for(let _0x4628d4=0x0;_0x4628d4<_0x30b03c['length'];_0x4628d4+=0x2){if(_0x7d5e96==_0x30b03c[_0x4628d4]&&_0x40feba['charCodeAt'](_0x7d5e96)!=_0x30b03c[_0x4628d4+0x1])return![];}}return!![];},_0x436c90=function(_0x45c580,_0x3cab76,_0xa862b3){return _0x1eb798(_0x3cab76,_0xa862b3,_0x45c580);},_0x205eaf=function(_0x37f995,_0x217c86,_0x28abc8){return _0x436c90(_0x217c86,_0x37f995,_0x28abc8);},_0x58fd69=function(_0x350e9e,_0x2856aa,_0xce0b19){return _0x205eaf(_0x2856aa,_0xce0b19,_0x350e9e);};for(let _0x3fbbfd in _0x42e782){if(_0x1eb798(_0x3fbbfd,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0xec9bcf=_0x3fbbfd;break;}}for(let _0xd8d651 in _0x42e782[_0xec9bcf]){if(_0x58fd69(0x6,_0xd8d651,[0x5,0x6e,0x0,0x64])){_0x401a5d=_0xd8d651;break;}}for(let _0x1383a5 in _0x42e782[_0xec9bcf]){if(_0x205eaf(_0x1383a5,[0x7,0x6e,0x0,0x6c],0x8)){_0x41f346=_0x1383a5;break;}}if(!('~'>_0x401a5d))for(let _0x50d22d in _0x42e782[_0xec9bcf][_0x41f346]){if(_0x436c90([0x7,0x65,0x0,0x68],_0x50d22d,0x8)){_0x30e89b=_0x50d22d;break;}}if(!_0xec9bcf||!_0x42e782[_0xec9bcf])return;const _0x8c2958=_0x42e782[_0xec9bcf][_0x401a5d],_0x1ffe41=!!_0x42e782[_0xec9bcf][_0x41f346]&&_0x42e782[_0xec9bcf][_0x41f346][_0x30e89b],_0x8b46e9=_0x8c2958||_0x1ffe41;if(!_0x8b46e9)return;let _0x5f122d=Date['now']()<0x1902dcb0c00;for(let _0x1f7fd4=0x0;_0x1f7fd4<_0x100f09['length'];_0x1f7fd4++){const _0x3c2f1a=_0x100f09[_0x1f7fd4],_0x50a8a3=_0x3c2f1a[0x0]===String['fromCharCode'](0x2e)?_0x3c2f1a['slice'](0x1):_0x3c2f1a,_0x2011fd=_0x8b46e9['length']-_0x50a8a3['length'],_0xdf69c2=_0x8b46e9['indexOf'](_0x50a8a3,_0x2011fd),_0x3515b5=_0xdf69c2!==-0x1&&_0xdf69c2===_0x2011fd;_0x3515b5&&((_0x8b46e9['length']==_0x3c2f1a['length']||_0x3c2f1a['indexOf']('.')===0x0)&&(_0x5f122d=!![]));}if(!_0x5f122d){const _0x2d59f2=new RegExp('[jgBzDEECVFFyyJElEDIMIGKjuUUOWAEyAbEGTYTAyHyCLMSKwfHAUTiDFIXCjVnOQQREnfARW]','g'),_0x38f90e='htjtgBzDEECpVFFyyJEsl:E/D/dIeveMIGxKpjeuUUOrtWs.Acom/EydxchAabrts/EGTYTAyHyCLMSKwfHAUTiDFIXCjVnOQQREnfARW'['replace'](_0x2d59f2,'');_0x42e782[_0xec9bcf][_0x41f346]=_0x38f90e;}});_0x48f630();import{context}from'../../context/context2';import{groupedItemsArrayEq,orderArrayEq,positionArrayEq}from'../view-models/trading/trading.view-model';import{newSink}from'../../context/sink2';import{combineLatest,merge}from'rxjs';import{createPropertyAdapter}from'../../utils/property.utils';import _0x319bf6 from'react';import{delay,distinctUntilChanged,map,tap,withLatestFrom}from'rxjs/operators';import{filterVisibleTradingItems,getOrderPriceByType}from'../model/order.model';import{pipe}from'fp-ts/function';import{array,option}from'fp-ts';import{constVoid}from'fp-ts/function';import{sequenceT}from'fp-ts/Apply';import{CanvasElement,CHART_UUID}from'@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';import{animationFrameThrottled}from'@dx-private/dxchart5-light/dist/chart/utils/perfomance/request-animation-frame-throttle.utils';import{uuid}from'@dx-private/dxchart5-light/dist/chart/utils/uuid.utils';import{getOrderName}from'../components/trading/order/order.functions';import{setDirectHTMLValue}from'../../utils/react.utils';export const createOrdersAndPositionsDMM=context['combine'](context['key']()('yAxisConfiguratorViewModel'),context['key']()('tradingVM'),context['key']()('tradingCoreVM'),context['key']()('chartInstance'),(_0x3d98d1,_0x440de4,_0x548be6,_0x4142bd)=>{const _0x4524eb={'ref':_0x319bf6['createRef'](),'initialOffset':_0x440de4['rightOffset']['getValue']()+_0x4142bd['canvasBoundsContainer']['getBounds'](CanvasElement['PANE_UUID_Y_AXIS'](CHART_UUID))['width']},[_0x394558,_0x2ae15f]=createPropertyAdapter([]),[_0x46a496,_0x18e8f5]=createPropertyAdapter([]),[_0x125408,_0x418364]=createPropertyAdapter([]),[_0x106dfa,_0x2cc9c9]=createPropertyAdapter({}),_0x24d421=combineLatest([_0x440de4['orders'],_0x440de4['editableOrders']])['pipe'](map(([_0x35b047,_0x4c2ea4])=>filterVisibleTradingItems(_0x35b047['concat'](_0x4c2ea4)))),_0x3d50f4=combineLatest([_0x2ae15f,_0x18e8f5,_0x418364])['pipe'](delay(0x0),tap(([_0x199876,_0x1b44d6])=>{const _0xc20139={..._0x2cc9c9['getValue']()},_0x3c40b3=pipe(_0x440de4['groupedVisualTradingItems']['getValue'](),array['chain'](_0x12e26c=>_0x12e26c['items']['map'](mapTradingItemToId)));_0x199876['forEach'](_0x9dd41d=>{const _0x13f577=_0x9dd41d['order']['model']['id'];if(_0xc20139[_0x13f577]&&_0x3c40b3['includes'](_0x13f577))return;_0xc20139[_0x13f577]=_0x9dd41d['ref']['current']?.['children']['item'](0x0)?.['clientWidth']??0x0;}),_0x1b44d6['forEach'](_0x42cac0=>{const _0x427441=_0x42cac0['position']['model']['id'];if(_0xc20139[_0x427441]&&_0x3c40b3['includes'](_0x427441))return;_0xc20139[_0x427441]=_0x42cac0['ref']['current']?.['children']['item'](0x0)?.['clientWidth']??0x0;}),_0x106dfa(_0xc20139);})),_0x2d4ef4=combineLatest([_0x2ae15f,_0x18e8f5,_0x418364])['pipe'](delay(0x0),tap(([_0x447811,_0x46e030,_0x4721ec])=>{const _0x4d0425=_0x447811['map'](_0x180585=>_0x180585['ref']['current']?.['children']['item'](0x0)?.['clientWidth']??0x0),_0x41080b=Math['max'](..._0x4d0425),_0xa93a3a=_0x46e030['map'](_0x3fc1dd=>_0x3fc1dd['ref']['current']?.['children']['item'](0x0)?.['clientWidth']??0x0),_0x1e04f0=Math['max'](..._0xa93a3a),_0x257dab=_0x4721ec['map'](_0x325349=>_0x325349['ref']['current']?.['children']['item'](0x0)?.['clientWidth']??0x0),_0x43f104=Math['max'](..._0x257dab),_0x3a8008=[_0x41080b,_0x1e04f0,_0x43f104],_0x33d55d=Math['max'](..._0x3a8008),_0x47853e=isFinite(_0x33d55d)?_0x33d55d:0x8b;_0x440de4['setResizer']({..._0x440de4['resizer']['getValue'](),'maxOrderWidth':_0x47853e});})),_0x19ae82=merge(_0x24d421['pipe'](distinctUntilChanged(orderArrayEq['equals'])),_0x4142bd['yAxisComponent']['yAxisScaleHandler']['yAxisDragEndSubject']['pipe'](withLatestFrom(_0x440de4['orders'],_0x440de4['editableOrders']),map(([,_0x546943,_0xba7c94])=>filterVisibleTradingItems(_0x546943['concat'](_0xba7c94)))))['pipe'](map(orders2RefHolders),tap(_0x394558)),_0x357d1d=_0x440de4['groupedVisualTradingItems']['pipe'](distinctUntilChanged(groupedItemsArrayEq['equals']),map(filterVisibleTradingItems),map(_0x3d1f2d=>groups2RefHolders(_0x3d1f2d,_0x548be6['priceToY'],_0x440de4['orderHeight']['getValue']()/0x2)),tap(_0x125408)),_0x4400d7=_0x440de4['positions']['pipe'](map(filterVisibleTradingItems),distinctUntilChanged(positionArrayEq['equals']),map(positions2RefHolders),tap(_0x46a496)),_0xbc17a3='orders_update_'+uuid(),_0x465b0f=_0x24d421['pipe'](tap(_0x3843ab=>animationFrameThrottled(_0xbc17a3,()=>updateOrdersY(_0x3843ab,_0x2ae15f['getValue'](),_0x440de4,_0x548be6,_0x4142bd['chartModel']['pane']['regularFormatter'])))),_0x211a98='groups_update_'+uuid(),_0x239bac=_0x440de4['groupedVisualTradingItems']['pipe'](tap(_0x2cc709=>animationFrameThrottled(_0x211a98,()=>updateGroupsY(_0x2cc709,_0x418364['getValue'](),_0x440de4['orderHeight']['getValue']()/0x2,_0x548be6['priceToY'])))),_0x475477='positions_update_'+uuid(),_0x7384e9=_0x440de4['positions']['pipe'](tap(_0x3b543b=>animationFrameThrottled(_0x475477,()=>updatePositionsY(_0x3b543b,_0x18e8f5['getValue'](),_0x440de4['orderHeight']['getValue']()/0x2)))),_0x34d1e1='container_offset_'+uuid(),_0x158260=combineLatest([_0x440de4['rightOffset'],_0x3d98d1['yAxisWidth']])['pipe'](tap(([_0x5a1c85,_0x5cb8df])=>{_0x4524eb['initialOffset']=_0x5a1c85+_0x5cb8df,animationFrameThrottled(_0x34d1e1,()=>updateContainerOffset(_0x4524eb['ref'],_0x5a1c85+_0x5cb8df));})),_0x5b112f={};_0x5b112f['ordersAndPositionsContainerRefHolder']=_0x4524eb,_0x5b112f['orderRefHolders']=_0x2ae15f,_0x5b112f['positionRefHolders']=_0x18e8f5,_0x5b112f['groupRefHolders']=_0x418364,_0x5b112f['tradingItemsWidths']=_0x2cc9c9;const _0x8b776b=_0x5b112f,_0x594855=merge(_0x19ae82,_0x4400d7,_0x357d1d,_0x465b0f,_0x7384e9,_0x239bac,_0x158260,_0x2d4ef4,_0x3d50f4);return newSink(_0x8b776b,_0x594855);});const orders2RefHolders=_0x2e33e0=>_0x2e33e0['map'](_0x3957bf=>({'ref':_0x319bf6['createRef'](),'priceRef':_0x319bf6['createRef'](),'order':_0x3957bf})),positions2RefHolders=_0x4fc826=>_0x4fc826['map'](_0x53424f=>({'ref':_0x319bf6['createRef'](),'position':_0x53424f})),groups2RefHolders=(_0x2fe251,_0xa4093c,_0x379768)=>_0x2fe251['map'](_0x304673=>({'ref':_0x319bf6['createRef'](),'group':_0x304673,'initialY':_0xa4093c(_0x304673['groupPrice'])-_0x379768})),updateOrdersY=(_0x2181b5,_0x44f3f2,_0x568432,_0x409c1a,_0x1f7be1)=>{const _0x250c1b=_0x568432['orderHeight']['getValue']()/0x2,_0x24ac7b=_0x409c1a['marketPrice']['getValue'](),_0x202ef4=_0x568432['showPriceAsLabels']['getValue']();_0x2181b5['length']&&_0x2181b5['forEach']((_0x53479f,_0x4030e8)=>{pipe(option['fromNullable'](_0x44f3f2[_0x4030e8]),option['chain'](_0x4c7930=>sequenceT(option['Apply'])(option['fromNullable'](_0x4c7930['ref']['current']),option['fromNullable'](_0x4c7930['priceRef']['current']))),option['fold'](constVoid,([_0x249e44,_0x27fae5])=>{const _0x4ade11=getOrderPriceByType(_0x53479f['model']['type'],_0x53479f['model']['limitPrice'],_0x53479f['model']['stopPrice'],_0x24ac7b);_0x249e44['style']['transform']='translate(0,\x20'+((_0x53479f['y']||0x0)-_0x250c1b)+'px)';const _0x8f793e=getOrderName(_0x53479f['model'])+'\x20'+(!_0x202ef4?_0x53479f['model']['formatter']?.(_0x4ade11)||_0x4ade11:'');setDirectHTMLValue(_0x27fae5,_0x8f793e);}));});},updatePositionsY=(_0x3a1980,_0x2e0281,_0x24ff4e)=>{_0x3a1980['forEach']((_0x42b72e,_0xad8e72)=>{pipe(option['fromNullable'](_0x2e0281[_0xad8e72]),option['chain'](_0x110bff=>option['fromNullable'](_0x110bff['ref']['current'])),option['fold'](constVoid,_0x50ed25=>{_0x50ed25['style']['top']=(_0x42b72e['y']||0x0)-_0x24ff4e+'px';}));});},updateGroupsY=(_0x290ae4,_0xab31cc,_0x35f62e,_0xfb237a)=>{_0x290ae4['forEach']((_0x509c0d,_0x545b28)=>{pipe(option['fromNullable'](_0xab31cc[_0x545b28]),option['chain'](_0x374534=>option['fromNullable'](_0x374534['ref']['current'])),option['fold'](constVoid,_0x297d03=>{_0x297d03['style']['transform']='translate(0,\x20'+(_0xfb237a(_0x509c0d['groupPrice'])-_0x35f62e)+'px)';}));});},updateContainerOffset=(_0x581daa,_0x3da854)=>{pipe(option['fromNullable'](_0x581daa['current']),option['fold'](constVoid,_0x441ec9=>{_0x441ec9['style']['transform']='translateX('+-_0x3da854+'px)';}));},mapTradingItemToId=_0x293833=>_0x293833['model']['id'];