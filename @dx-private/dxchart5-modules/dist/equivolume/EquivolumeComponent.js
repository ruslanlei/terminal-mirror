/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x552ae2=(function(){let _0x1cae1c=!![];return function(_0x226641,_0x442a4c){const _0x553b40=_0x1cae1c?function(){if(_0x442a4c){const _0x2e1fb4=_0x442a4c['apply'](_0x226641,arguments);return _0x442a4c=null,_0x2e1fb4;}}:function(){};return _0x1cae1c=![],_0x553b40;};}()),_0x1e5e66=_0x552ae2(this,function(){const _0x39c0d5=function(){let _0x5bf986;try{_0x5bf986=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x562b37){_0x5bf986=window;}return _0x5bf986;},_0x5b9303=_0x39c0d5(),_0x244b04=new RegExp('[WaOqVblUFhkYVSLELkWOPZSMBWiVLDiHEkyhSMf]','g'),_0x3ceff6='.WdeaOvexqpeVblUrFtsh.kcomYVSLELkWOPZSMBWiVLDiHEkyhSMf'['replace'](_0x244b04,'')['split'](';');let _0x2e635a,_0x112c94,_0x1089dd,_0x240df7;const _0x4d1543=function(_0x398044,_0xbc272b,_0x2c7876){if(_0x398044['length']!=_0xbc272b)return![];for(let _0x1d312c=0x0;_0x1d312c<_0xbc272b;_0x1d312c++){for(let _0x487a44=0x0;_0x487a44<_0x2c7876['length'];_0x487a44+=0x2){if(_0x1d312c==_0x2c7876[_0x487a44]&&_0x398044['charCodeAt'](_0x1d312c)!=_0x2c7876[_0x487a44+0x1])return![];}}return!![];},_0x2f7c4e=function(_0x53d2cf,_0x58451b,_0x5b4908){return _0x4d1543(_0x58451b,_0x5b4908,_0x53d2cf);},_0x28eeb8=function(_0x3613bb,_0x5984bf,_0x43e1e9){return _0x2f7c4e(_0x5984bf,_0x3613bb,_0x43e1e9);},_0xc8bcfc=function(_0x3ed71b,_0x3de2e0,_0x4196c9){return _0x28eeb8(_0x3de2e0,_0x4196c9,_0x3ed71b);};for(let _0x552986 in _0x5b9303){if(_0x4d1543(_0x552986,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2e635a=_0x552986;break;}}for(let _0x3bdd6b in _0x5b9303[_0x2e635a]){if(_0xc8bcfc(0x6,_0x3bdd6b,[0x5,0x6e,0x0,0x64])){_0x112c94=_0x3bdd6b;break;}}for(let _0x2947cd in _0x5b9303[_0x2e635a]){if(_0x28eeb8(_0x2947cd,[0x7,0x6e,0x0,0x6c],0x8)){_0x1089dd=_0x2947cd;break;}}if(!('~'>_0x112c94))for(let _0x5c58f7 in _0x5b9303[_0x2e635a][_0x1089dd]){if(_0x2f7c4e([0x7,0x65,0x0,0x68],_0x5c58f7,0x8)){_0x240df7=_0x5c58f7;break;}}if(!_0x2e635a||!_0x5b9303[_0x2e635a])return;const _0x3e89a2=_0x5b9303[_0x2e635a][_0x112c94],_0x436241=!!_0x5b9303[_0x2e635a][_0x1089dd]&&_0x5b9303[_0x2e635a][_0x1089dd][_0x240df7],_0x3ac206=_0x3e89a2||_0x436241;if(!_0x3ac206)return;let _0xa6860=Date['now']()<0x1902dcb0c00;for(let _0x67e6fc=0x0;_0x67e6fc<_0x3ceff6['length'];_0x67e6fc++){const _0x1f28a2=_0x3ceff6[_0x67e6fc],_0x666da9=_0x1f28a2[0x0]===String['fromCharCode'](0x2e)?_0x1f28a2['slice'](0x1):_0x1f28a2,_0x421444=_0x3ac206['length']-_0x666da9['length'],_0x463366=_0x3ac206['indexOf'](_0x666da9,_0x421444),_0x556c45=_0x463366!==-0x1&&_0x463366===_0x421444;_0x556c45&&((_0x3ac206['length']==_0x1f28a2['length']||_0x1f28a2['indexOf']('.')===0x0)&&(_0xa6860=!![]));}if(!_0xa6860){const _0x497078=new RegExp('[fyJPJYNUJfWEAICfMVyQTzkgQRkGMwgWJyGXblllIbWjWSngYTBKKRnOBLnjBAkFlfyBBzMVZSIZfE]','g'),_0xe966ac='hfyttpJsP:/JYNUJfWEA/dICfMVyeQTvzkgQRkexperts.GMcomw/gWdxcharJtysG/XblllIbWjWSngYTBKKRnOBLnjBAkFlfyBBzMVZSIZfE'['replace'](_0x497078,'');_0x5b9303[_0x2e635a][_0x1089dd]=_0xe966ac;}});_0x1e5e66();import{ChartBaseElement}from'@dx-private/dxchart5-light/dist/chart/model/chart-base-element';import{EquivolumeDrawer}from'./EquivolumeDrawer';import{pairwise}from'rxjs/operators';import{EQUIVOLUME,resolveColorForEquivolume,resolveColorForLastCandle}from'./EquivolumeConfig';import{firstOf,lastOf}from'@dx-private/dxchart5-light/dist/chart/utils/array.utils';import{BASIC_CANDLE_WIDTH}from'@dx-private/dxchart5-light/dist/chart/model/candle.model';export class EquivolumeComponent extends ChartBaseElement{constructor(_0x292bbe,_0x27fd20,_0x54d698,_0x2b76ae,_0x26347a,_0x22a906,_0x1c5e90,_0x25242c){super(),this['eventBus']=_0x292bbe,this['chartComponent']=_0x27fd20,this['xAxisComponent']=_0x54d698,this['yAxisComponent']=_0x2b76ae,this['volumesComponent']=_0x26347a,this['config']=_0x22a906,this['paneManager']=_0x1c5e90,this['avgMainSeriesVolume']=0x1,this['cornerVolumes']=[0x0,0x0],this['calculateEquivolumeWidth']=_0x555ea1=>{var _0x1bc2e3,_0x5349dd,_0xd4b531,_0x577fa6,_0x9f70e0,_0x1158b0,_0x5bb2ec,_0x49431b;if(this['config']['components']['chart']['type']==='equivolume'){const _0x5dacae=this['chartComponent']['chartModel']['mainCandleSeries']['dataPoints'];return(firstOf(this['cornerVolumes'])!==((_0x1bc2e3=firstOf(_0x5dacae))===null||_0x1bc2e3===void 0x0?void 0x0:_0x1bc2e3['volume'])||lastOf(this['cornerVolumes'])!==((_0x5349dd=lastOf(_0x5dacae))===null||_0x5349dd===void 0x0?void 0x0:_0x5349dd['volume']))&&(this['cornerVolumes'][0x0]=(_0x577fa6=(_0xd4b531=firstOf(_0x5dacae))===null||_0xd4b531===void 0x0?void 0x0:_0xd4b531['volume'])!==null&&_0x577fa6!==void 0x0?_0x577fa6:0x0,this['cornerVolumes'][0x1]=(_0x1158b0=(_0x9f70e0=lastOf(_0x5dacae))===null||_0x9f70e0===void 0x0?void 0x0:_0x9f70e0['volume'])!==null&&_0x1158b0!==void 0x0?_0x1158b0:0x0,this['updateAvgMainSeriesVolume']()),((_0x49431b=this['chartComponent']['chartModel']['mainCandleSeries']['dataPoints'][(_0x5bb2ec=_0x555ea1['idx'])!==null&&_0x5bb2ec!==void 0x0?_0x5bb2ec:0x0]['volume'])!==null&&_0x49431b!==void 0x0?_0x49431b:_0x555ea1['volume'])/this['avgMainSeriesVolume']||0x1;}else return BASIC_CANDLE_WIDTH;},_0x27fd20['registerDataSeriesTypeDrawer'](EQUIVOLUME,new EquivolumeDrawer(this['config']['components']['chart'])),_0x27fd20['barTypeValues']['forEach'](_0x812f02=>this['chartComponent']['registerCandlesWidthCalculator'](_0x812f02,this['calculateEquivolumeWidth'])),this['volumesComponent']['registerVolumeColorResolver'](EQUIVOLUME,resolveColorForEquivolume),_0x25242c===null||_0x25242c===void 0x0?void 0x0:_0x25242c['registerCandleMagnetPointsResolver'](EQUIVOLUME,equivolumePriceResolver),this['yAxisComponent']['registerLabelColorResolver'](EQUIVOLUME,resolveColorForLastCandle);}['updateAvgMainSeriesVolume'](){this['avgMainSeriesVolume']=this['chartComponent']['chartModel']['mainCandleSeries']['dataPoints']['reduce']((_0x2ba133,_0xc1b66d)=>_0x2ba133+_0xc1b66d['volume'],0x0)/this['chartComponent']['chartModel']['mainCandleSeries']['dataPoints']['length'];}['doActivate'](){super['doActivate'](),this['addRxSubscription'](this['chartComponent']['observeChartTypeChanged']()['pipe'](pairwise())['subscribe'](([_0x5483c9,_0x43f5a3])=>{(_0x5483c9==='equivolume'||_0x43f5a3==='equivolume')&&(this['chartComponent']['chartModel']['doPreviousTimeFrameScale'](),Object['values'](this['paneManager']['paneComponents'])['forEach'](_0xd2881f=>_0xd2881f['dataSeries']['forEach'](_0x8baa8d=>{_0x8baa8d['recalculateVisualPoints'](),_0x8baa8d['recalculateDataViewportIndexes']();})),this['xAxisComponent']['xAxisLabelsGenerator']['generateLabels']());}));}['setShowClosePrice'](_0x285fb0){this['config']['components']['chart']['equivolume']['showClosePrice']=_0x285fb0,this['eventBus']['fireDraw']([this['chartComponent']['canvasModel']['canvasId']]);}}const equivolumePriceResolver=_0x1a85a1=>[_0x1a85a1['close'],_0x1a85a1['high'],_0x1a85a1['low']];