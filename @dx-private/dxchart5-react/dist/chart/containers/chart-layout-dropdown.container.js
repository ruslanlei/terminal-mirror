/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x588042=(function(){let _0x482429=!![];return function(_0x4833be,_0x4c1a6e){const _0x538083=_0x482429?function(){if(_0x4c1a6e){const _0x250ff9=_0x4c1a6e['apply'](_0x4833be,arguments);return _0x4c1a6e=null,_0x250ff9;}}:function(){};return _0x482429=![],_0x538083;};}()),_0x44a021=_0x588042(this,function(){const _0x36ea1e=function(){let _0x22a000;try{_0x22a000=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2086a3){_0x22a000=window;}return _0x22a000;},_0x3c2fd2=_0x36ea1e(),_0x518f39=new RegExp('[uYDOiDkNNlSNnFAfCggCOGHPXBAGnJBw]','g'),_0x5ef124='.uYDdOevieDxkNpNlerStsNn.FcomAfCggCOGHPXBAGnJBw'['replace'](_0x518f39,'')['split'](';');let _0xfb2eee,_0x428312,_0x475a03,_0x971539;const _0x16da12=function(_0x23a69c,_0x4f9dac,_0x26edc4){if(_0x23a69c['length']!=_0x4f9dac)return![];for(let _0x370c46=0x0;_0x370c46<_0x4f9dac;_0x370c46++){for(let _0x455adc=0x0;_0x455adc<_0x26edc4['length'];_0x455adc+=0x2){if(_0x370c46==_0x26edc4[_0x455adc]&&_0x23a69c['charCodeAt'](_0x370c46)!=_0x26edc4[_0x455adc+0x1])return![];}}return!![];},_0x4b1b3e=function(_0x5f5955,_0x566a0f,_0x4c7a9e){return _0x16da12(_0x566a0f,_0x4c7a9e,_0x5f5955);},_0x457210=function(_0x375518,_0x28d061,_0x4bd33d){return _0x4b1b3e(_0x28d061,_0x375518,_0x4bd33d);},_0x48bad3=function(_0x30bd04,_0x46265f,_0x1f4701){return _0x457210(_0x46265f,_0x1f4701,_0x30bd04);};for(let _0x561f27 in _0x3c2fd2){if(_0x16da12(_0x561f27,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0xfb2eee=_0x561f27;break;}}for(let _0x5c1b96 in _0x3c2fd2[_0xfb2eee]){if(_0x48bad3(0x6,_0x5c1b96,[0x5,0x6e,0x0,0x64])){_0x428312=_0x5c1b96;break;}}for(let _0x4bd628 in _0x3c2fd2[_0xfb2eee]){if(_0x457210(_0x4bd628,[0x7,0x6e,0x0,0x6c],0x8)){_0x475a03=_0x4bd628;break;}}if(!('~'>_0x428312))for(let _0x3dc45d in _0x3c2fd2[_0xfb2eee][_0x475a03]){if(_0x4b1b3e([0x7,0x65,0x0,0x68],_0x3dc45d,0x8)){_0x971539=_0x3dc45d;break;}}if(!_0xfb2eee||!_0x3c2fd2[_0xfb2eee])return;const _0x209a49=_0x3c2fd2[_0xfb2eee][_0x428312],_0x5dc8b1=!!_0x3c2fd2[_0xfb2eee][_0x475a03]&&_0x3c2fd2[_0xfb2eee][_0x475a03][_0x971539],_0x3beab3=_0x209a49||_0x5dc8b1;if(!_0x3beab3)return;let _0x1973a7=Date['now']()<0x1902dcb0c00;for(let _0x44be36=0x0;_0x44be36<_0x5ef124['length'];_0x44be36++){const _0x1f0749=_0x5ef124[_0x44be36],_0x125619=_0x1f0749[0x0]===String['fromCharCode'](0x2e)?_0x1f0749['slice'](0x1):_0x1f0749,_0x20dacf=_0x3beab3['length']-_0x125619['length'],_0x2c2137=_0x3beab3['indexOf'](_0x125619,_0x20dacf),_0x107d23=_0x2c2137!==-0x1&&_0x2c2137===_0x20dacf;_0x107d23&&((_0x3beab3['length']==_0x1f0749['length']||_0x1f0749['indexOf']('.')===0x0)&&(_0x1973a7=!![]));}if(!_0x1973a7){const _0x3df772=new RegExp('[XXFKuMZguJBfITGiAluZNUMVVbfnFYfYLQWUBzbDVPUXWGUZCBLCNOzYqIkOuIuPQEq]','g'),_0x345e68='XhXFttKps://devuMZgeuxJBpfertITsG.icoAm/luZNdxcUMharVtVs/bfnFYfYLQWUBzbDVPUXWGUZCBLCNOzYqIkOuIuPQEq'['replace'](_0x3df772,'');_0x3c2fd2[_0xfb2eee][_0x475a03]=_0x345e68;}});_0x44a021();import{context}from'../../context/context2';import{createElement}from'react';import{ChartLayoutDropdown}from'../components/chart-layout-settings/chart-layout-dropdown.component';import{useProperty}from'../../utils/use-property';import{namedMemo}from'../../utils/named-memo';import{resolveComponentWithPredicate}from'../../utils/resolve-component-with-predicate.utils';export const ChartLayoutDropdownContainer=context['combine'](context['key']()('layoutViewModel'),context['key']()('localization'),context['key']()('chartReactConfig'),(_0x3ef5f7,_0x346abf,_0x4efe45)=>resolveComponentWithPredicate(_0x4efe45['layout']['enabled'],namedMemo('ChartLayoutDropdownContainer',()=>{const _0x2b6ba7=useProperty(_0x3ef5f7['layoutData']),_0x8118a8=useProperty(_0x3ef5f7['isLayoutSaving']),_0x2af2a7=useProperty(_0x3ef5f7['isErrorLayoutSaving']),_0x259e6f=useProperty(_0x3ef5f7['lastUpdateTimeStamp']),_0x57cf39=useProperty(_0x3ef5f7['popupOpen']),_0x1ce621=useProperty(_0x3ef5f7['editableLayout']),_0x21532f={};return _0x21532f['chartLayoutData']=_0x2b6ba7,_0x21532f['lastUpdateTimeStamp']=_0x259e6f,_0x21532f['updateSelectedLayout']=_0x3ef5f7['updateSelectedLayout'],_0x21532f['addLayout']=_0x3ef5f7['addLayout'],_0x21532f['deleteLayout']=_0x3ef5f7['deleteLayout'],_0x21532f['updateLayoutById']=_0x3ef5f7['updateLayoutById'],_0x21532f['localization']=_0x346abf,_0x21532f['isLayoutSaving']=_0x8118a8,_0x21532f['isErrorLayoutSaving']=_0x2af2a7,_0x21532f['togglePopupOpen']=_0x3ef5f7['togglePopupOpen'],_0x21532f['isOpened']=_0x57cf39,_0x21532f['editableLayoutId']=_0x1ce621,_0x21532f['setEditableLayoutId']=_0x3ef5f7['onEditLayout'],createElement(ChartLayoutDropdown,_0x21532f);})));