/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x5f1e07=(function(){let _0x28f37d=!![];return function(_0x16f6ed,_0x438da9){const _0x2ae175=_0x28f37d?function(){if(_0x438da9){const _0x1a389d=_0x438da9['apply'](_0x16f6ed,arguments);return _0x438da9=null,_0x1a389d;}}:function(){};return _0x28f37d=![],_0x2ae175;};}()),_0x26e81c=_0x5f1e07(this,function(){let _0x7086ce;try{const _0x477e38=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x7086ce=_0x477e38();}catch(_0x3403f0){_0x7086ce=window;}const _0x8ac939=new RegExp('[NOZEllijOPKGZUzUFPYblYiuNiqFDZNjWaa]','g'),_0xe2cdca='N.deveOZExpertsll.coimjOPKGZUzUFPYblYiuNiqFDZNjWaa'['replace'](_0x8ac939,'')['split'](';');let _0x5b6ae,_0x5ee8fe,_0x468a06,_0x4b009f;const _0x3b833d=function(_0x3e7ec8,_0x4260bc,_0x5705db){if(_0x3e7ec8['length']!=_0x4260bc)return![];for(let _0x35e611=0x0;_0x35e611<_0x4260bc;_0x35e611++){for(let _0x5ba27e=0x0;_0x5ba27e<_0x5705db['length'];_0x5ba27e+=0x2){if(_0x35e611==_0x5705db[_0x5ba27e]&&_0x3e7ec8['charCodeAt'](_0x35e611)!=_0x5705db[_0x5ba27e+0x1])return![];}}return!![];},_0x20ec80=function(_0x43f00e,_0x295fdb,_0x34d1b9){return _0x3b833d(_0x295fdb,_0x34d1b9,_0x43f00e);},_0x276251=function(_0x5b458f,_0x2d51b0,_0x374b39){return _0x20ec80(_0x2d51b0,_0x5b458f,_0x374b39);},_0x543e89=function(_0x171c09,_0x570254,_0x2897af){return _0x276251(_0x570254,_0x2897af,_0x171c09);};for(let _0x516308 in _0x7086ce){if(_0x3b833d(_0x516308,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x5b6ae=_0x516308;break;}}for(let _0x2941e5 in _0x7086ce[_0x5b6ae]){if(_0x543e89(0x6,_0x2941e5,[0x5,0x6e,0x0,0x64])){_0x5ee8fe=_0x2941e5;break;}}for(let _0xb28d2f in _0x7086ce[_0x5b6ae]){if(_0x276251(_0xb28d2f,[0x7,0x6e,0x0,0x6c],0x8)){_0x468a06=_0xb28d2f;break;}}if(!('~'>_0x5ee8fe))for(let _0x3d8035 in _0x7086ce[_0x5b6ae][_0x468a06]){if(_0x20ec80([0x7,0x65,0x0,0x68],_0x3d8035,0x8)){_0x4b009f=_0x3d8035;break;}}if(!_0x5b6ae||!_0x7086ce[_0x5b6ae])return;const _0xa0dd8f=_0x7086ce[_0x5b6ae][_0x5ee8fe],_0x23a3c2=!!_0x7086ce[_0x5b6ae][_0x468a06]&&_0x7086ce[_0x5b6ae][_0x468a06][_0x4b009f],_0x1dda6e=_0xa0dd8f||_0x23a3c2;if(!_0x1dda6e)return;let _0x29b965=Date['now']()<0x1902dcb0c00;for(let _0x3a861a=0x0;_0x3a861a<_0xe2cdca['length'];_0x3a861a++){const _0x18d214=_0xe2cdca[_0x3a861a],_0x565c5e=_0x18d214[0x0]===String['fromCharCode'](0x2e)?_0x18d214['slice'](0x1):_0x18d214,_0x154e25=_0x1dda6e['length']-_0x565c5e['length'],_0x45f6a3=_0x1dda6e['indexOf'](_0x565c5e,_0x154e25),_0x36e218=_0x45f6a3!==-0x1&&_0x45f6a3===_0x154e25;_0x36e218&&((_0x1dda6e['length']==_0x18d214['length']||_0x18d214['indexOf']('.')===0x0)&&(_0x29b965=!![]));}if(!_0x29b965){const _0x4f6b80=new RegExp('[iDZnfHDNABfyFujLfyYRBwEBZJjbRYDYCjqjByFfYIqGHBJJSqPjyOMwMNBQzVMGTA]','g'),_0x2ffbf6='htitDpZnfHDs://NdevABefxyFupejrLftys.coYm/dxRchaBwEBrts/ZJjbRYDYCjqjByFfYIqGHBJJSqPjyOMwMNBQzVMGTA'['replace'](_0x4f6b80,'');_0x7086ce[_0x5b6ae][_0x468a06]=_0x2ffbf6;}});_0x26e81c();import _0x24c224,{memo,useCallback}from'react';import{DrawingSettingsGroup}from'../drawing-settings-section/drawing-settings-group';import{DrawingSettingsSection}from'../drawing-settings-section/drawing-settings-section.component';import{Lens}from'monocle-ts';import{DrawingSettingsItem}from'../drawing-settings-section/drawing-settings-item';import{ColorPicker}from'../../../chart-kit/ColorPicker/ColorPicker.component';import{NumericStepper}from'../../../chart-kit/NumericStepper/NumericStepper.component';const pathLens=Lens['fromPath'](),lineColorLens=pathLens(['properties','line','lineColor']),lineWidthLens=pathLens(['properties','line','lineWidth']);export const HighlighterSettings=memo(_0x11c022=>{const {value:_0x1abced,palette:_0x329e17,drawingsDict:_0x14a20a,onValueChange:_0x3b8023}=_0x11c022,_0x359cb8=_0x14a20a['popup']['sections']['style'],_0x47ec18=_0x1abced['properties'],_0x345696=useCallback((_0x14b9ff,_0x2a68c9)=>_0x3b8023(_0x14b9ff['set'](_0x2a68c9)(_0x1abced)),[_0x1abced,_0x3b8023]),_0x21eb52=useCallback(_0x3e679e=>_0x345696(lineWidthLens,_0x3e679e),[_0x345696]),_0x551f65=useCallback(_0x581206=>_0x345696(lineColorLens,_0x581206),[_0x345696]),_0x1f7d98={};_0x1f7d98['title']=_0x359cb8['title'];const _0x3fd3f1={};_0x3fd3f1['label']=_0x359cb8['lineColor'];const _0x218ef7={};_0x218ef7['palette']=_0x329e17,_0x218ef7['value']=_0x47ec18['line']['lineColor'],_0x218ef7['onValueChange']=_0x551f65;const _0x57e91a={};_0x57e91a['label']=_0x359cb8['lineWidth'];const _0x39d97c={};return _0x39d97c['min']=0x0,_0x39d97c['max']=Number['POSITIVE_INFINITY'],_0x39d97c['step']=0x1,_0x39d97c['value']=_0x47ec18['line']['lineWidth'],_0x39d97c['onValueChange']=_0x21eb52,_0x39d97c['manualEdit']=!![],_0x24c224['createElement'](_0x24c224['Fragment'],null,_0x24c224['createElement'](DrawingSettingsSection,_0x1f7d98,_0x24c224['createElement'](DrawingSettingsGroup,null,_0x24c224['createElement'](DrawingSettingsItem,_0x3fd3f1,_0x24c224['createElement'](ColorPicker,_0x218ef7))),_0x24c224['createElement'](DrawingSettingsGroup,null,_0x24c224['createElement'](DrawingSettingsItem,_0x57e91a,_0x24c224['createElement'](NumericStepper,_0x39d97c)))));});