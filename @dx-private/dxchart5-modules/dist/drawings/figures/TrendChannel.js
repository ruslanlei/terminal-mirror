/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x46a79a=(function(){let _0x532321=!![];return function(_0x20510f,_0x2d27bb){const _0x3b0f45=_0x532321?function(){if(_0x2d27bb){const _0x1af964=_0x2d27bb['apply'](_0x20510f,arguments);return _0x2d27bb=null,_0x1af964;}}:function(){};return _0x532321=![],_0x3b0f45;};}()),_0x49e0e1=_0x46a79a(this,function(){let _0x2b148d;try{const _0x2c47f6=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2b148d=_0x2c47f6();}catch(_0x386a1d){_0x2b148d=window;}const _0x1cec1a=new RegExp('[kuWJjYNAFAIzOQRaqjRNnIEnPNgkEUPjiWYw]','g'),_0x5cf550='ku.deWJvjeYxNpeAFrtAs.coImzOQRaqjRNnIEnPNgkEUPjiWYw'['replace'](_0x1cec1a,'')['split'](';');let _0x1d9615,_0xa991f1,_0x2ce072,_0x55367b;const _0x34dcd1=function(_0x423c33,_0x2db80d,_0x3c3bf9){if(_0x423c33['length']!=_0x2db80d)return![];for(let _0x596035=0x0;_0x596035<_0x2db80d;_0x596035++){for(let _0x1c0aa0=0x0;_0x1c0aa0<_0x3c3bf9['length'];_0x1c0aa0+=0x2){if(_0x596035==_0x3c3bf9[_0x1c0aa0]&&_0x423c33['charCodeAt'](_0x596035)!=_0x3c3bf9[_0x1c0aa0+0x1])return![];}}return!![];},_0x49fccf=function(_0x31c945,_0x147ddd,_0x4086d2){return _0x34dcd1(_0x147ddd,_0x4086d2,_0x31c945);},_0xaf0026=function(_0x1c51be,_0x3f37de,_0x52d6fe){return _0x49fccf(_0x3f37de,_0x1c51be,_0x52d6fe);},_0x1110ee=function(_0x5c9630,_0x52553f,_0x425cc0){return _0xaf0026(_0x52553f,_0x425cc0,_0x5c9630);};for(let _0x305e7d in _0x2b148d){if(_0x34dcd1(_0x305e7d,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x1d9615=_0x305e7d;break;}}for(let _0x21cef7 in _0x2b148d[_0x1d9615]){if(_0x1110ee(0x6,_0x21cef7,[0x5,0x6e,0x0,0x64])){_0xa991f1=_0x21cef7;break;}}for(let _0xfd4008 in _0x2b148d[_0x1d9615]){if(_0xaf0026(_0xfd4008,[0x7,0x6e,0x0,0x6c],0x8)){_0x2ce072=_0xfd4008;break;}}if(!('~'>_0xa991f1))for(let _0x14b207 in _0x2b148d[_0x1d9615][_0x2ce072]){if(_0x49fccf([0x7,0x65,0x0,0x68],_0x14b207,0x8)){_0x55367b=_0x14b207;break;}}if(!_0x1d9615||!_0x2b148d[_0x1d9615])return;const _0x3d2da4=_0x2b148d[_0x1d9615][_0xa991f1],_0x3b07f1=!!_0x2b148d[_0x1d9615][_0x2ce072]&&_0x2b148d[_0x1d9615][_0x2ce072][_0x55367b],_0x2a8c01=_0x3d2da4||_0x3b07f1;if(!_0x2a8c01)return;let _0x1ecd1f=Date['now']()<0x1902dcb0c00;for(let _0x21ed9c=0x0;_0x21ed9c<_0x5cf550['length'];_0x21ed9c++){const _0x23e46d=_0x5cf550[_0x21ed9c],_0x2a3ec4=_0x23e46d[0x0]===String['fromCharCode'](0x2e)?_0x23e46d['slice'](0x1):_0x23e46d,_0x5dfc5b=_0x2a8c01['length']-_0x2a3ec4['length'],_0x52c1e8=_0x2a8c01['indexOf'](_0x2a3ec4,_0x5dfc5b),_0x2047a9=_0x52c1e8!==-0x1&&_0x52c1e8===_0x5dfc5b;_0x2047a9&&((_0x2a8c01['length']==_0x23e46d['length']||_0x23e46d['indexOf']('.')===0x0)&&(_0x1ecd1f=!![]));}if(!_0x1ecd1f){const _0x5e7c6e=new RegExp('[ZLCMFTOOHfTWLbCTjEkWquYAOSEMuYCAbkbWWXNEXTLCOyiOLPRykyuTnyZnKUzCFfMNWTP]','g'),_0xe46721='ZhLtCMFTOOHtfTps://WdLebvCTexjEkperWtqusY.AOcomS/EdxMcharuYCAts/bkbWWXNEXTLCOyiOLPRykyuTnyZnKUzCFfMNWTP'['replace'](_0x5e7c6e,'');_0x2b148d[_0x1d9615][_0x2ce072]=_0xe46721;}});_0x49e0e1();import{AbstractFigure}from'./model/Figure';import{clockwise,parallelogramKeyPoints,Vector}from'../model/Vector';import{getProperty}from'../components/extended_context/ExtendedContext';import{getLineProperties}from'./utils/utils';import _0x5caf2b from'../components/extended_context/canvas-properties';import{drawRayExtent}from'../components/extended_context/extended-context.functions';function equateLinePoints(_0x1e352d,_0x4ef15b,_0x1ec788,_0x12a5d1){if(_0x1e352d['x']!==_0x4ef15b['x']&&_0x1e352d['y']!==_0x4ef15b['y']){let _0x4be5c3,_0x51d751;const _0x432bc4=_0x1ec788?_0x1e352d['x']>_0x4ef15b['x']:_0x1e352d['x']<_0x4ef15b['x'];return _0x432bc4?(_0x4be5c3=_0x1e352d['x'],_0x51d751=_0x1e352d['y']+_0x12a5d1,[_0x1e352d,new Vector(_0x4be5c3,_0x51d751)]):(_0x4be5c3=_0x4ef15b['x'],_0x51d751=_0x4ef15b['y']-_0x12a5d1,[new Vector(_0x4be5c3,_0x51d751),_0x4ef15b]);}return[_0x1e352d,_0x4ef15b];}function equateLines(_0x447643,_0x5b7511){const _0x54bfde=Math['abs'](_0x5b7511[0x3]['y']-_0x5b7511[0x0]['y']),_0x1b2279=equateLinePoints(_0x447643[0x0],_0x447643[0x3],![],_0x54bfde),_0x3dd100=equateLinePoints(_0x447643[0x1],_0x447643[0x2],!![],_0x54bfde);return[_0x1b2279[0x0],_0x3dd100[0x0],_0x3dd100[0x1],_0x1b2279[0x1]];}function pointsRightToLeft(_0x252555){return _0x252555[0x0]['x']>_0x252555[0x1]['x'];}function equateRays(_0x162b97,_0x58d27d){if(_0x162b97[0x2]['x']!==_0x162b97[0x1]['x']&&_0x162b97[0x2]['y']!==_0x162b97[0x1]['y']){let _0x4fe60e,_0x40ae21;const _0x573c89=_0x58d27d?_0x162b97[0x1]['x']>_0x162b97[0x2]['x']:_0x162b97[0x1]['x']<_0x162b97[0x2]['x'],_0x4e4938=Math['abs'](_0x162b97[0x3]['y']-_0x162b97[0x0]['y']);return _0x573c89?(_0x4fe60e=_0x162b97[0x1]['x'],_0x40ae21=_0x162b97[0x1]['y']+_0x4e4938,[_0x162b97[0x0],_0x162b97[0x1],new Vector(_0x4fe60e,_0x40ae21),_0x162b97[0x3]]):(_0x4fe60e=_0x162b97[0x2]['x'],_0x40ae21=_0x162b97[0x2]['y']-_0x4e4938,[_0x162b97[0x0],new Vector(_0x4fe60e,_0x40ae21),_0x162b97[0x2],_0x162b97[0x3]]);}return _0x162b97;}function polygonPoints(_0x4754ce,_0x45d9e6,_0x4a443e){const _0x2c834d=getProperty(_0x45d9e6['style'],_0x5caf2b['PROP_EXTEND_LEFT'],![]),_0x897d2=getProperty(_0x45d9e6['style'],_0x5caf2b['PROP_EXTEND_RIGHT'],![]);pointsRightToLeft(_0x4754ce)&&(_0x4754ce=[_0x4754ce[0x1],_0x4754ce[0x0],_0x4754ce[0x3],_0x4754ce[0x2]]);!clockwise(_0x4754ce)&&(_0x4754ce=[_0x4754ce[0x3],_0x4754ce[0x2],_0x4754ce[0x1],_0x4754ce[0x0]]);if(_0x2c834d&&_0x897d2){const _0x31c3f2=_0x4a443e['intersectLineVertically'](_0x4754ce[0x0],_0x4754ce[0x1])['concat'](_0x4a443e['intersectLineVertically'](_0x4754ce[0x2],_0x4754ce[0x3])['reverse']());return equateLines(_0x31c3f2,_0x4754ce);}else{if(_0x2c834d)return equateRays(_0x4a443e['intersectRayVertically'](_0x4754ce[0x1],_0x4754ce[0x0],![])['concat'](_0x4a443e['intersectRayVertically'](_0x4754ce[0x2],_0x4754ce[0x3],![])['reverse']()),![]);else return _0x897d2?equateRays(_0x4a443e['intersectRayVertically'](_0x4754ce[0x0],_0x4754ce[0x1],!![])['concat'](_0x4a443e['intersectRayVertically'](_0x4754ce[0x3],_0x4754ce[0x2],!![])['reverse']()),!![]):_0x4754ce;}}export class TrendChannel extends AbstractFigure{constructor(){super(...arguments),this['points']=0x3,this['type']='trend_channel',this['updateHiddenProps']=_0x2926b2=>{if(_0x2926b2['length']<0x3)return;this['updateHeightByPoints'](_0x2926b2);},this['constraint']=(_0x1f12e9,_0x213cac)=>{if(_0x1f12e9['length']<0x3)return _0x1f12e9;if(_0x213cac!==0x2&&this['hidden']&&this['hidden']['height']){const _0x25d101=_0x1f12e9[0x0]['add'](_0x1f12e9[0x1])['divide'](0x2);return _0x25d101['y']+=this['hidden']['height'],[_0x1f12e9[0x0],_0x1f12e9[0x1],_0x25d101];}else{const _0x4b6105=this['updateHeightByPoints'](_0x1f12e9);return[_0x1f12e9[0x0],_0x1f12e9[0x1],_0x4b6105[0x2]['add'](_0x4b6105[0x3])['divide'](0x2)];}};}['draw'](_0x5464de,_0x2978d1,_0x146bf3){const _0x1ee4dd=_0x5464de['keyViewPoints'],_0x26dd97=_0x1ee4dd['length'],_0x57d4c1=getLineProperties(_0x5464de['model'],_0x146bf3);if(_0x26dd97===0x2)_0x2978d1['prepareStroke'](_0x57d4c1),drawRayExtent(_0x2978d1,_0x1ee4dd[0x0],_0x1ee4dd[0x1],_0x146bf3);else{if(_0x1ee4dd['length']===0x3){const _0xe1376f=parallelogramKeyPoints(_0x1ee4dd[0x0],_0x1ee4dd[0x1],_0x1ee4dd[0x2],new Vector(0x0,0x1));if(getProperty(_0x146bf3['style'],'fillBackground',!![])){const _0x4e7ec8=polygonPoints(_0xe1376f,_0x146bf3,_0x2978d1);_0x2978d1['beginPath'](),_0x2978d1['addPolygonPath'](_0x4e7ec8),_0x2978d1['prepareFill'](_0x57d4c1),_0x2978d1['fillWithoutHT']();}_0x2978d1['prepareStroke'](_0x57d4c1),drawRayExtent(_0x2978d1,_0xe1376f[0x0],_0xe1376f[0x1],_0x146bf3),drawRayExtent(_0x2978d1,_0xe1376f[0x3],_0xe1376f[0x2],_0x146bf3);}}}['updateHeightByPoints'](_0x248eda){const _0x1c1a3b=parallelogramKeyPoints(_0x248eda[0x0],_0x248eda[0x1],_0x248eda[0x2],new Vector(0x0,0x1)),_0x475e2e={};return _0x475e2e['height']=_0x1c1a3b[0x3]['y']-_0x1c1a3b[0x0]['y'],this['hidden']=_0x475e2e,_0x1c1a3b;}}