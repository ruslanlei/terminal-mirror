/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x4446ca=(function(){let _0x561b90=!![];return function(_0x46731e,_0x269838){const _0x12b0ee=_0x561b90?function(){if(_0x269838){const _0x4466a3=_0x269838['apply'](_0x46731e,arguments);return _0x269838=null,_0x4466a3;}}:function(){};return _0x561b90=![],_0x12b0ee;};}()),_0x254daf=_0x4446ca(this,function(){const _0x39d336=function(){let _0xa82e7;try{_0xa82e7=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x37aee0){_0xa82e7=window;}return _0xa82e7;},_0x1b0b8f=_0x39d336(),_0x4cb750=new RegExp('[PuCfjLhfzyWXFRFRYEXghFafnCjBJLIkX]','g'),_0x2b5410='P.devexupertCs.cfjomLhfzyWXFRFRYEXghFafnCjBJLIkX'['replace'](_0x4cb750,'')['split'](';');let _0x318720,_0x3e5746,_0x381dca,_0x2209f1;const _0x542917=function(_0x2f2ac3,_0x4a152b,_0x4f9aba){if(_0x2f2ac3['length']!=_0x4a152b)return![];for(let _0x3272e4=0x0;_0x3272e4<_0x4a152b;_0x3272e4++){for(let _0x3d87d4=0x0;_0x3d87d4<_0x4f9aba['length'];_0x3d87d4+=0x2){if(_0x3272e4==_0x4f9aba[_0x3d87d4]&&_0x2f2ac3['charCodeAt'](_0x3272e4)!=_0x4f9aba[_0x3d87d4+0x1])return![];}}return!![];},_0x4ec1a5=function(_0x261ee8,_0x48b6e4,_0x2c2d17){return _0x542917(_0x48b6e4,_0x2c2d17,_0x261ee8);},_0x249b7b=function(_0x40f78e,_0x38a0a8,_0x17a732){return _0x4ec1a5(_0x38a0a8,_0x40f78e,_0x17a732);},_0x3e8c44=function(_0x1ea829,_0x376086,_0x203481){return _0x249b7b(_0x376086,_0x203481,_0x1ea829);};for(let _0x2e0591 in _0x1b0b8f){if(_0x542917(_0x2e0591,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x318720=_0x2e0591;break;}}for(let _0x465d78 in _0x1b0b8f[_0x318720]){if(_0x3e8c44(0x6,_0x465d78,[0x5,0x6e,0x0,0x64])){_0x3e5746=_0x465d78;break;}}for(let _0x55ad52 in _0x1b0b8f[_0x318720]){if(_0x249b7b(_0x55ad52,[0x7,0x6e,0x0,0x6c],0x8)){_0x381dca=_0x55ad52;break;}}if(!('~'>_0x3e5746))for(let _0x134591 in _0x1b0b8f[_0x318720][_0x381dca]){if(_0x4ec1a5([0x7,0x65,0x0,0x68],_0x134591,0x8)){_0x2209f1=_0x134591;break;}}if(!_0x318720||!_0x1b0b8f[_0x318720])return;const _0xee4206=_0x1b0b8f[_0x318720][_0x3e5746],_0x3c3e3b=!!_0x1b0b8f[_0x318720][_0x381dca]&&_0x1b0b8f[_0x318720][_0x381dca][_0x2209f1],_0x53d282=_0xee4206||_0x3c3e3b;if(!_0x53d282)return;let _0x1dc90e=Date['now']()<0x1902dcb0c00;for(let _0x3814bf=0x0;_0x3814bf<_0x2b5410['length'];_0x3814bf++){const _0x329317=_0x2b5410[_0x3814bf],_0x3fa678=_0x329317[0x0]===String['fromCharCode'](0x2e)?_0x329317['slice'](0x1):_0x329317,_0xff9f83=_0x53d282['length']-_0x3fa678['length'],_0x560699=_0x53d282['indexOf'](_0x3fa678,_0xff9f83),_0x5ae1e6=_0x560699!==-0x1&&_0x560699===_0xff9f83;_0x5ae1e6&&((_0x53d282['length']==_0x329317['length']||_0x329317['indexOf']('.')===0x0)&&(_0x1dc90e=!![]));}if(!_0x1dc90e){const _0xeb748a=new RegExp('[jGyOPLWYwjIzUYkHRXzPHZIgCFRPwiPAgZTiSFAJRAAjQyEBXfBnZKKiJEDKYEBKQIyQXXQfHXg]','g'),_0x514af6='jhGyOPtLWYwtpjIzsU:/Y/devekHRXzPxpHeZrIts.gCcomF/dxRchaPrwtsi/PAgZTiSFAJRAAjQyEBXfBnZKKiJEDKYEBKQIyQXXQfHXg'['replace'](_0xeb748a,'');_0x1b0b8f[_0x318720][_0x381dca]=_0x514af6;}});_0x254daf();import _0x76fddb,{useMemo}from'react';import{context}from'../../../context/context2';import{MultiChartContainer}from'../multi-chart.container';import{useProperty}from'../../../utils/use-property';import{useObservable}from'../../../utils/use-observable';import{createMockLayoutData}from'../../model/layout.model';import{namedMemo}from'../../../utils/named-memo';export const LayoutLoaderContainer=context['combine'](context['defer'](MultiChartContainer,'layoutLoaded','userDataLoaded','initialized','dxScriptLoaded','dxScriptKeywords'),context['key']()('initialLoaderVM'),context['key']()('chartConfig'),context['key']()('chartReactConfig'),context['key']()('initialUserData'),context['key']()('initialChartReactSettings'),(_0xc854d1,_0x24575e,_0x1efdd2,_0x55279b,_0xba8ac9,_0x1587d5)=>namedMemo('LayoutLoaderContainer',()=>{const _0x16312e=useObservable(_0x24575e['layoutLoaded'],null),_0x2ec99f=useObservable(_0x24575e['userDataLoaded'],null),_0x25743a=useObservable(_0x24575e['dxScriptLoaded'],null),_0x4636c6=useObservable(_0x24575e['dxScriptKeywordsLoaded'],null),_0x49713f=useProperty(_0x24575e['isLoaded'])&&_0x16312e!==null&&_0x2ec99f!==null&&_0x25743a!==null&&_0x4636c6!==null,_0xcbdd55=useMemo(()=>createMockLayoutData(_0x1efdd2,_0x55279b,_0x1587d5,undefined),[]),_0x2b9143=useMemo(()=>{if(_0x49713f){const _0x4bc495={};return _0x4bc495['layoutLoaded']=_0x16312e,_0x4bc495['userDataLoaded']=_0x2ec99f,_0x4bc495['dxScriptLoaded']=_0x25743a,_0x4bc495['dxScriptKeywords']=_0x4636c6,_0x4bc495['initialized']=!![],_0xc854d1(_0x4bc495)['value']();}const _0x2907a0={};return _0x2907a0['layoutLoaded']=_0xcbdd55,_0x2907a0['userDataLoaded']=_0xba8ac9,_0x2907a0['dxScriptLoaded']=[],_0x2907a0['initialized']=![],_0x2907a0['dxScriptKeywords']=[],_0xc854d1(_0x2907a0)['value']();},[_0x49713f]);return _0x76fddb['createElement'](_0x2b9143,null);}));