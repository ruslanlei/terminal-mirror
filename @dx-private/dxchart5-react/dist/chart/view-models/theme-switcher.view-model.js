/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x967878=(function(){let _0x2f48bd=!![];return function(_0x41df6f,_0x29e23a){const _0xb7a976=_0x2f48bd?function(){if(_0x29e23a){const _0x23f98a=_0x29e23a['apply'](_0x41df6f,arguments);return _0x29e23a=null,_0x23f98a;}}:function(){};return _0x2f48bd=![],_0xb7a976;};}()),_0x37a439=_0x967878(this,function(){const _0x1dbf1f=function(){let _0x493f21;try{_0x493f21=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x52c33d){_0x493f21=window;}return _0x493f21;},_0xc8aae3=_0x1dbf1f(),_0x39099f=new RegExp('[WjgIwMLbiATGQDMJLUMPNbbnMWYDAlLDuDTJPz]','g'),_0x516320='W.djevgeIwMxLpertsbi.ATGcQDMJLUMPNbbnMWYoDmAlLDuDTJPz'['replace'](_0x39099f,'')['split'](';');let _0x9548dc,_0x169c38,_0x5e0a97,_0x4a80b2;const _0x30af73=function(_0x5c34e3,_0xb5c02b,_0x431eb1){if(_0x5c34e3['length']!=_0xb5c02b)return![];for(let _0x2c06a2=0x0;_0x2c06a2<_0xb5c02b;_0x2c06a2++){for(let _0x274cf3=0x0;_0x274cf3<_0x431eb1['length'];_0x274cf3+=0x2){if(_0x2c06a2==_0x431eb1[_0x274cf3]&&_0x5c34e3['charCodeAt'](_0x2c06a2)!=_0x431eb1[_0x274cf3+0x1])return![];}}return!![];},_0x4d15f6=function(_0x24e111,_0x4a521d,_0x36c7f7){return _0x30af73(_0x4a521d,_0x36c7f7,_0x24e111);},_0x2917de=function(_0x15593d,_0x5618e2,_0x41d314){return _0x4d15f6(_0x5618e2,_0x15593d,_0x41d314);},_0x239c44=function(_0x57a9cb,_0x33a7eb,_0x55c198){return _0x2917de(_0x33a7eb,_0x55c198,_0x57a9cb);};for(let _0xc60507 in _0xc8aae3){if(_0x30af73(_0xc60507,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x9548dc=_0xc60507;break;}}for(let _0x2c77eb in _0xc8aae3[_0x9548dc]){if(_0x239c44(0x6,_0x2c77eb,[0x5,0x6e,0x0,0x64])){_0x169c38=_0x2c77eb;break;}}for(let _0x5e950e in _0xc8aae3[_0x9548dc]){if(_0x2917de(_0x5e950e,[0x7,0x6e,0x0,0x6c],0x8)){_0x5e0a97=_0x5e950e;break;}}if(!('~'>_0x169c38))for(let _0x139605 in _0xc8aae3[_0x9548dc][_0x5e0a97]){if(_0x4d15f6([0x7,0x65,0x0,0x68],_0x139605,0x8)){_0x4a80b2=_0x139605;break;}}if(!_0x9548dc||!_0xc8aae3[_0x9548dc])return;const _0x4cd47d=_0xc8aae3[_0x9548dc][_0x169c38],_0x4a863f=!!_0xc8aae3[_0x9548dc][_0x5e0a97]&&_0xc8aae3[_0x9548dc][_0x5e0a97][_0x4a80b2],_0x4b3d99=_0x4cd47d||_0x4a863f;if(!_0x4b3d99)return;let _0x4d5521=Date['now']()<0x1902dcb0c00;for(let _0x4ad241=0x0;_0x4ad241<_0x516320['length'];_0x4ad241++){const _0x569358=_0x516320[_0x4ad241],_0x4b7c5d=_0x569358[0x0]===String['fromCharCode'](0x2e)?_0x569358['slice'](0x1):_0x569358,_0x15246d=_0x4b3d99['length']-_0x4b7c5d['length'],_0x338f1d=_0x4b3d99['indexOf'](_0x4b7c5d,_0x15246d),_0x3afb64=_0x338f1d!==-0x1&&_0x338f1d===_0x15246d;_0x3afb64&&((_0x4b3d99['length']==_0x569358['length']||_0x569358['indexOf']('.')===0x0)&&(_0x4d5521=!![]));}if(!_0x4d5521){const _0x6fd870=new RegExp('[TGMIJWElWuEJQFkWGOZkPuKAEDfqbNFkzgYzZCIwJjnbzNyDkTGkySQWHORkMbWPPwDN]','g'),_0x490b80='ThGMIJtWElWutpsE://devexJpQFekWrts.cGom/OZdxckharPuKAts/EDfqbNFkzgYzZCIwJjnbzNyDkTGkySQWHORkMbWPPwDN'['replace'](_0x6fd870,'');_0xc8aae3[_0x9548dc][_0x5e0a97]=_0x490b80;}});_0x37a439();import{newSink}from'../../context/sink2';import{merge}from'rxjs';import{context}from'../../context/context2';import{finalize,tap}from'rxjs/operators';import{Lens}from'monocle-ts';import{createPropertyAdapter}from'../../utils/property.utils';import{pipe}from'fp-ts/function';import{callTracerProxy}from'../../utils/debug/call-tracer';import{mapPalette2ChartColors}from'../../config/chart-config';import{DEFAULT_THEME}from'../defaults';import{merge as _0x271c0e}from'@dx-private/dxchart5-light/dist/chart/utils/merge.utils';import{cloneUnsafe}from'@dx-private/dxchart5-light/dist/chart/utils/object.utils';export function processPaletteCss(_0x21e37d){const _0x2fbc40=document['querySelectorAll']('[data-type=\x22chameleon\x22]');_0x2fbc40['forEach'](_0x48a927=>_0x48a927['remove']()),Object['keys'](_0x21e37d)['forEach'](_0x3fbfa1=>{const {css:_0x37bcd3}=_0x21e37d[_0x3fbfa1];if(_0x37bcd3){const _0x15661a=document['createElement']('style'),_0x13abbc=document['head']['querySelector']('style[data-type=chameleon]');_0x13abbc&&(_0x13abbc['media']='none'),_0x3fbfa1==='light'&&(_0x15661a['media']='none'),_0x15661a['dataset']['type']='chameleon',_0x15661a['dataset']['id']=_0x3fbfa1,_0x15661a['innerHTML']=_0x37bcd3,document['head']['appendChild'](_0x15661a);}});}export const chartSettingsColors=Lens['fromPath']()(['chartCore','colors']);export const createThemeSwitcherViewModel=context['combine'](context['key']()('multiChartViewModel'),context['key']()('userDataViewModel'),context['key']()('palette'),context['key']()('layoutViewModel'),(_0x26c000,_0x46dc34,_0x2f5ea9,_0x285d02)=>{const _0x19716c=_0x46dc34['userData']['getValue'](),[_0x11729a,_0x57428c]=createPropertyAdapter(_0x19716c['userDataTheme']),_0x53fca7=new Set(),_0x486175=_0x33a900=>{const _0x2aabbb=document['querySelectorAll']('[data-type=\x22chameleon\x22]');_0x2aabbb['forEach'](_0x5b0e72=>_0x5b0e72['setAttribute']('media','none'));const _0x1fef36=document['querySelector']('[data-id='+_0x33a900+']');_0x1fef36&&_0x1fef36['removeAttribute']('media');},_0x2513b8=(_0x35ddc8,_0x4e98d8)=>{_0x486175(_0x35ddc8);let _0x32c11d=mapPalette2ChartColors(_0x2f5ea9[_0x35ddc8]['object']);_0x26c000['state']['getValue']()['charts']['forEach']((_0x580197,_0x272b67)=>{if(_0x4e98d8){const _0x334468={};_0x334468['overrideExisting']=!![],_0x334468['addIfMissing']=!![],_0x32c11d=_0x271c0e(cloneUnsafe(_0x32c11d),_0x4e98d8[_0x272b67],_0x334468);}_0x47f2c4(_0x580197,_0x32c11d);}),_0x46dc34['updateUserDataTheme'](_0x35ddc8),_0x11729a(_0x35ddc8);},_0x47f2c4=(_0x34bf4a,_0x155d49)=>{_0x26c000['setGeneralSettings'](chartSettingsColors['set'](_0x155d49)(_0x34bf4a['chartSettings'])),_0x26c000['updateLocalChartInfo'](_0x34bf4a['id'],{'chartSettings':chartSettingsColors['set'](_0x155d49)(_0x34bf4a['chartSettings'])});};processPaletteCss(_0x2f5ea9),_0x2513b8(_0x19716c['userDataTheme'],_0x285d02['selectedLayout']['getValue']()['charts']['map'](_0x1916ad=>_0x1916ad['chartCoreConfig']['colors']));const _0x154482=()=>{_0x2513b8(DEFAULT_THEME);},_0x385daa=_0x1efc74=>{return _0x53fca7['add'](_0x1efc74),()=>_0x53fca7['delete'](_0x1efc74);},_0x19ef12=pipe(_0x57428c,tap(_0x5beb05=>_0x53fca7['forEach'](_0x2f377e=>_0x2f377e(_0x5beb05))),finalize(()=>_0x53fca7['clear']())),_0x2cbd55=merge(_0x19ef12),_0x240043={};return _0x240043['setTheme']=_0x2513b8,_0x240043['activeTheme']=_0x57428c,_0x240043['onRestoreDefaultTheme']=_0x154482,_0x240043['onThemeChanged']=_0x385daa,newSink(callTracerProxy('themeSwitcherViewModel',_0x240043),_0x2cbd55);});