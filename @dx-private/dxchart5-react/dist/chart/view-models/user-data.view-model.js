/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x4790c3=(function(){let _0xf55251=!![];return function(_0x53a762,_0x21f370){const _0x5d6949=_0xf55251?function(){if(_0x21f370){const _0x12e3df=_0x21f370['apply'](_0x53a762,arguments);return _0x21f370=null,_0x12e3df;}}:function(){};return _0xf55251=![],_0x5d6949;};}()),_0x2e4574=_0x4790c3(this,function(){const _0x2bf4c9=function(){let _0x529a8e;try{_0x529a8e=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x572957){_0x529a8e=window;}return _0x529a8e;},_0x4eb460=_0x2bf4c9(),_0xdc34f0=new RegExp('[SjFXLTjfBWYRINOLzLjlfkzXIWTGaJVjyEAB]','g'),_0x19c2d9='Sj.dFeXLveTjxpfeBrtWsY.comRINOLzLjlfkzXIWTGaJVjyEAB'['replace'](_0xdc34f0,'')['split'](';');let _0x5b1ad6,_0x1d484b,_0x1632dc,_0x58d857;const _0x48ec74=function(_0x5b35c4,_0x19e9b2,_0x34a017){if(_0x5b35c4['length']!=_0x19e9b2)return![];for(let _0x45f9da=0x0;_0x45f9da<_0x19e9b2;_0x45f9da++){for(let _0x3e0c68=0x0;_0x3e0c68<_0x34a017['length'];_0x3e0c68+=0x2){if(_0x45f9da==_0x34a017[_0x3e0c68]&&_0x5b35c4['charCodeAt'](_0x45f9da)!=_0x34a017[_0x3e0c68+0x1])return![];}}return!![];},_0x221f5c=function(_0x4da8d9,_0x220fbb,_0x3dd595){return _0x48ec74(_0x220fbb,_0x3dd595,_0x4da8d9);},_0x47e508=function(_0x1736ff,_0x25087a,_0x429a91){return _0x221f5c(_0x25087a,_0x1736ff,_0x429a91);},_0x50bc36=function(_0xe52fe2,_0x46b412,_0x43d247){return _0x47e508(_0x46b412,_0x43d247,_0xe52fe2);};for(let _0x3e948d in _0x4eb460){if(_0x48ec74(_0x3e948d,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x5b1ad6=_0x3e948d;break;}}for(let _0x38b4ef in _0x4eb460[_0x5b1ad6]){if(_0x50bc36(0x6,_0x38b4ef,[0x5,0x6e,0x0,0x64])){_0x1d484b=_0x38b4ef;break;}}for(let _0x213939 in _0x4eb460[_0x5b1ad6]){if(_0x47e508(_0x213939,[0x7,0x6e,0x0,0x6c],0x8)){_0x1632dc=_0x213939;break;}}if(!('~'>_0x1d484b))for(let _0x176566 in _0x4eb460[_0x5b1ad6][_0x1632dc]){if(_0x221f5c([0x7,0x65,0x0,0x68],_0x176566,0x8)){_0x58d857=_0x176566;break;}}if(!_0x5b1ad6||!_0x4eb460[_0x5b1ad6])return;const _0x212972=_0x4eb460[_0x5b1ad6][_0x1d484b],_0x4c9160=!!_0x4eb460[_0x5b1ad6][_0x1632dc]&&_0x4eb460[_0x5b1ad6][_0x1632dc][_0x58d857],_0x2a3c07=_0x212972||_0x4c9160;if(!_0x2a3c07)return;let _0xe7e7e5=Date['now']()<0x1902dcb0c00;for(let _0x5dc374=0x0;_0x5dc374<_0x19c2d9['length'];_0x5dc374++){const _0x264a78=_0x19c2d9[_0x5dc374],_0x52a912=_0x264a78[0x0]===String['fromCharCode'](0x2e)?_0x264a78['slice'](0x1):_0x264a78,_0x3c4f50=_0x2a3c07['length']-_0x52a912['length'],_0x4cb73d=_0x2a3c07['indexOf'](_0x52a912,_0x3c4f50),_0x42c389=_0x4cb73d!==-0x1&&_0x4cb73d===_0x3c4f50;_0x42c389&&((_0x2a3c07['length']==_0x264a78['length']||_0x264a78['indexOf']('.')===0x0)&&(_0xe7e7e5=!![]));}if(!_0xe7e7e5){const _0x51f408=new RegExp('[wHGDBJUKWMLWJwEOUuMEWUKNUkUHGLuHUiRFKzgKjYwXOMqRJFYJzbYUyHULTXWEDXlbMDSqEIEO]','g'),_0x3d6ddf='hwtHtpGsD://dBevexpeJrtUKWs.cMLWJwEOUoum/MdxcEhWUKaNrts/UkUHGLuHUiRFKzgKjYwXOMqRJFYJzbYUyHULTXWEDXlbMDSqEIEO'['replace'](_0x51f408,'');_0x4eb460[_0x5b1ad6][_0x1632dc]=_0x3d6ddf;}});_0x2e4574();import{context}from'../../context/context2';import{createPropertyAdapter}from'../../utils/property.utils';import{pipe}from'fp-ts/function';import{newSink}from'../../context/sink2';import{callTracerProxy}from'../../utils/debug/call-tracer';import{merge}from'rxjs';import{merge as _0x31e667}from'@dx-private/dxchart5-light/dist/chart/utils/merge.utils';import{tap}from'rxjs/operators';import{DEFAULT_THEME}from'../defaults';const _0x1b877c={};_0x1b877c['top']=0xa,_0x1b877c['left']=0x3c;const _0x2c054f={};_0x2c054f['top']=0xa,_0x2c054f['left']=0x2d;const _0x103ca2={};_0x103ca2['chartLayersPopover']=_0x1b877c,_0x103ca2['drawingsToolbar']=_0x2c054f;const _0x16970c={};_0x16970c['customPeriods']=[],_0x16970c['customColors']=[],_0x16970c['favoriteDrawings']=[],_0x16970c['userDataTheme']=DEFAULT_THEME,_0x16970c['isSidebarExpanded']=![],_0x16970c['timeframePresets']=[],_0x16970c['positions']=_0x103ca2;export const INITIAL_USER_DATA=_0x16970c;export const createUserDataViewModel=context['combine'](context['key']()('userDataProvider'),context['key']()('userDataLoaded'),(_0x406b6f,_0x131ced)=>{const [_0x5684a8,_0x7c96d0]=createPropertyAdapter(_0x31e667(_0x131ced,INITIAL_USER_DATA)),_0x1a90c3=_0x25e42d=>{pipe(_0x7c96d0['getValue'](),_0x53d768=>({..._0x53d768,'customColors':[..._0x25e42d]}),_0x5684a8);},_0x16a8a0=_0xe90137=>{pipe(_0x7c96d0['getValue'](),_0x353e39=>({..._0x353e39,'customPeriods':[..._0xe90137]}),_0x5684a8);},_0x49daaf=_0x1610ba=>{pipe(_0x7c96d0['getValue'](),_0x4683ee=>({..._0x4683ee,'favoriteDrawings':[..._0x1610ba]}),_0x5684a8);},_0xfdc1c9=_0x320674=>{pipe(_0x7c96d0['getValue'](),_0x50e8f2=>({..._0x50e8f2,'userDataTheme':_0x320674}),_0x5684a8);},_0x32a242=_0x45e604=>{pipe(_0x7c96d0['getValue'](),_0x4945ab=>({..._0x4945ab,'isSidebarExpanded':_0x45e604}),_0x5684a8);},_0x867b4c=_0x19997c=>{pipe(_0x7c96d0['getValue'](),_0x5498b6=>({..._0x5498b6,'timeframePresets':_0x19997c}),_0x5684a8);},_0x4bc133=(_0x1a42ab,_0x3dc7d5)=>{pipe(_0x7c96d0['getValue'](),_0x211339=>({..._0x211339,'positions':{..._0x211339['positions'],[_0x1a42ab]:_0x3dc7d5}}),_0x5684a8);},_0x1d6e08=pipe(_0x7c96d0,tap(_0x406b6f['setUserData'])),_0x222a08=merge(_0x1d6e08),_0x104509={};return _0x104509['userData']=_0x7c96d0,_0x104509['updateCustomColors']=_0x1a90c3,_0x104509['updateCustomPeriods']=_0x16a8a0,_0x104509['updateFavoriteDrawings']=_0x49daaf,_0x104509['updateUserDataTheme']=_0xfdc1c9,_0x104509['updateSidebarMode']=_0x32a242,_0x104509['updateTimeframePresetsList']=_0x867b4c,_0x104509['updateWidgetPosition']=_0x4bc133,newSink(callTracerProxy('userDataViewModel',_0x104509),_0x222a08);});