/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x5b2b9c=(function(){let _0x5bb038=!![];return function(_0x457fb4,_0x280a16){const _0xef54fe=_0x5bb038?function(){if(_0x280a16){const _0x3f556c=_0x280a16['apply'](_0x457fb4,arguments);return _0x280a16=null,_0x3f556c;}}:function(){};return _0x5bb038=![],_0xef54fe;};}()),_0x3784e6=_0x5b2b9c(this,function(){let _0x115851;try{const _0x3f4c4d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x115851=_0x3f4c4d();}catch(_0x3b5850){_0x115851=window;}const _0x4dffd5=new RegExp('[FiWuIXwNFTTRlKERhqLqPghihbMIJCBjTIl]','g'),_0xac4d18='.dFieveWuIXxwNFpTTeRrtlKEsR.hcqoLqPghimhbMIJCBjTIl'['replace'](_0x4dffd5,'')['split'](';');let _0x25d181,_0xf1e7fb,_0x5cbab8,_0x558822;const _0xcc21f4=function(_0x1e0df2,_0xf474ef,_0x59c889){if(_0x1e0df2['length']!=_0xf474ef)return![];for(let _0x2b3fa0=0x0;_0x2b3fa0<_0xf474ef;_0x2b3fa0++){for(let _0x5db8f9=0x0;_0x5db8f9<_0x59c889['length'];_0x5db8f9+=0x2){if(_0x2b3fa0==_0x59c889[_0x5db8f9]&&_0x1e0df2['charCodeAt'](_0x2b3fa0)!=_0x59c889[_0x5db8f9+0x1])return![];}}return!![];},_0x8f1298=function(_0xdce0b6,_0xf87373,_0x429bb6){return _0xcc21f4(_0xf87373,_0x429bb6,_0xdce0b6);},_0x423778=function(_0x2207f9,_0x4c56c9,_0x2ea88d){return _0x8f1298(_0x4c56c9,_0x2207f9,_0x2ea88d);},_0x40e1d8=function(_0x68f516,_0x4766c6,_0x416249){return _0x423778(_0x4766c6,_0x416249,_0x68f516);};for(let _0x144890 in _0x115851){if(_0xcc21f4(_0x144890,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x25d181=_0x144890;break;}}for(let _0x1575e0 in _0x115851[_0x25d181]){if(_0x40e1d8(0x6,_0x1575e0,[0x5,0x6e,0x0,0x64])){_0xf1e7fb=_0x1575e0;break;}}for(let _0x3785da in _0x115851[_0x25d181]){if(_0x423778(_0x3785da,[0x7,0x6e,0x0,0x6c],0x8)){_0x5cbab8=_0x3785da;break;}}if(!('~'>_0xf1e7fb))for(let _0x416381 in _0x115851[_0x25d181][_0x5cbab8]){if(_0x8f1298([0x7,0x65,0x0,0x68],_0x416381,0x8)){_0x558822=_0x416381;break;}}if(!_0x25d181||!_0x115851[_0x25d181])return;const _0x4ca19f=_0x115851[_0x25d181][_0xf1e7fb],_0xa0be6c=!!_0x115851[_0x25d181][_0x5cbab8]&&_0x115851[_0x25d181][_0x5cbab8][_0x558822],_0x3c5380=_0x4ca19f||_0xa0be6c;if(!_0x3c5380)return;let _0x20548c=Date['now']()<0x1902dcb0c00;for(let _0x659e2d=0x0;_0x659e2d<_0xac4d18['length'];_0x659e2d++){const _0x7a0db7=_0xac4d18[_0x659e2d],_0x50d102=_0x7a0db7[0x0]===String['fromCharCode'](0x2e)?_0x7a0db7['slice'](0x1):_0x7a0db7,_0x422716=_0x3c5380['length']-_0x50d102['length'],_0xc49e1c=_0x3c5380['indexOf'](_0x50d102,_0x422716),_0x5abcce=_0xc49e1c!==-0x1&&_0xc49e1c===_0x422716;_0x5abcce&&((_0x3c5380['length']==_0x7a0db7['length']||_0x7a0db7['indexOf']('.')===0x0)&&(_0x20548c=!![]));}if(!_0x20548c){const _0x550ae6=new RegExp('[uYVwWOPjgAURTDUKBBjXyTLKAyJNECgMyTEyuwgSnDFzgCBIMUJCHbNnqCjuHRVkliSuZWywRJFCi]','g'),_0x463b6e='uYVwhttWOPjpgsA:U//dRTDUKBeBvejxpeXrtsyTL.coKAm/dxycJhNEaCgrtsMyT/EyuwgSnDFzgCBIMUJCHbNnqCjuHRVkliSuZWywRJFCi'['replace'](_0x550ae6,'');_0x115851[_0x25d181][_0x5cbab8]=_0x463b6e;}});_0x3784e6();import{context}from'../../context/context2';import{createElement,memo,useMemo}from'react';import{useObservable}from'../../utils/use-observable';import{OrderAndPositions}from'../components/trading/orders-positions.component';import{useDirectProperty,useProperty}from'../../utils/use-property';import{createOrdersAndPositionsDMM}from'../dom-mutation-models/orders-and-positions.dom-mutation-model';import{useSink}from'../../utils/use-sink';import{namedMemo}from'../../utils/named-memo';const OrderAndPositionsComponent=context['combine'](createOrdersAndPositionsDMM,context['key']()('yAxisConfiguratorViewModel'),context['key']()('tradingVM'),context['key']()('tradingCoreVM'),context['key']()('chartReactConfig'),context['key']()('chartConfiguratorViewModel'),(_0x4ec6ea,_0xac38b,_0x335db8,_0x245c69,_0x4edd8e,_0x48e754)=>memo(()=>{const _0x13f5db=useSink(()=>_0x4ec6ea,[]),_0x30dea0=useProperty(_0x13f5db['orderRefHolders']),_0x2331f1=useProperty(_0x13f5db['positionRefHolders']),_0x21995f=useProperty(_0x13f5db['groupRefHolders']),_0x294d93=useProperty(_0x13f5db['tradingItemsWidths']),_0x276ab6=useMemo(()=>({'orderRefHolders':_0x30dea0,'positionRefHolders':_0x2331f1,'groupRefHolders':_0x21995f,'ordersAndPositionsContainerRefHolder':_0x13f5db['ordersAndPositionsContainerRefHolder']}),[_0x21995f,_0x30dea0,_0x13f5db['ordersAndPositionsContainerRefHolder'],_0x2331f1]),_0x449c78=useProperty(_0x335db8['resizer']),_0x3edebe=useProperty(_0x335db8['orderHeight']),_0x342120=useProperty(_0x335db8['showPriceAsLabels']),_0x37a9de=useProperty(_0x335db8['ordersBounds']),_0x4eb45a=useProperty(_0x245c69['marketPrice']),_0x2d16e6=useProperty(_0xac38b['chartWidth']),_0x28907a=useProperty(_0xac38b['yAxisWidth']),_0x2d4131=useObservable(_0x335db8['rightOffset'],0x0),_0x535f6a=useProperty(_0x335db8['isDragging']),_0x56e12a=useProperty(_0x335db8['editableOrders']),_0xf4e2ff=useDirectProperty(_0x48e754['state'],['settings','chartReact','trading']),_0x375859={};return _0x375859['domMutationProps']=_0x276ab6,_0x375859['marketPrice']=_0x4eb45a,_0x375859['yToPrice']=_0x245c69['yToPrice'],_0x375859['removeOrder']=_0x335db8['removeOrder'],_0x375859['selectOrder']=_0x335db8['selectOrder'],_0x375859['onOrderClick']=_0x335db8['onOrderClick'],_0x375859['onOrderDblClick']=_0x335db8['onOrderDblClick'],_0x375859['onDragStartFromGroup']=_0x335db8['onDragStartFromGroup'],_0x375859['deselectOrder']=_0x335db8['deselectOrder'],_0x375859['removePosition']=_0x335db8['removePosition'],_0x375859['onOrderDragStart']=_0x335db8['onOrderDragStart'],_0x375859['updateOrderPosition']=_0x335db8['updateOrderPosition'],_0x375859['createLinkedOrder']=_0x335db8['createLinkedOrder'],_0x375859['onGroupItemSelect']=_0x335db8['onGroupItemSelect'],_0x375859['resizer']=_0x449c78,_0x375859['onResizerDrag']=_0x335db8['onResizerDrag'],_0x375859['onResizerHover']=_0x335db8['onResizerHover'],_0x375859['orderHeight']=_0x3edebe,_0x375859['currency']=_0x4edd8e['trading']['currency'],_0x375859['takeProfitStopLossEnabled']=_0x4edd8e['trading']['takeProfitStopLossEnabled'],_0x375859['showPriceAsLabels']=_0x342120,_0x375859['ordersBounds']=_0x37a9de,_0x375859['chartWidth']=_0x2d16e6,_0x375859['yAxisWidth']=_0x28907a,_0x375859['onOrderDrag']=_0x335db8['updateOrderPriceUI'],_0x375859['rightOffset']=_0x2d4131,_0x375859['tradingItemsWidths']=_0x294d93,_0x375859['isDragging']=_0x535f6a,_0x375859['tradingSettings']=_0xf4e2ff,_0x375859['editableOrders']=_0x56e12a,createElement(OrderAndPositions,_0x375859);}));export const OrderAndPositionsContainer=context['combine'](OrderAndPositionsComponent,context['key']()('chartConfiguratorViewModel'),(_0x385e34,_0x4d9f60)=>namedMemo('OrderAndPositionsContainer',()=>{const _0x1e922d=useDirectProperty(_0x4d9f60['state'],['settings','chartReact','trading','visible']);return _0x1e922d?createElement(_0x385e34):null;}));