/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x12dcc7=(function(){let _0x550357=!![];return function(_0x222578,_0x395103){const _0x597585=_0x550357?function(){if(_0x395103){const _0x44f674=_0x395103['apply'](_0x222578,arguments);return _0x395103=null,_0x44f674;}}:function(){};return _0x550357=![],_0x597585;};}()),_0x5885be=_0x12dcc7(this,function(){const _0x544a43=function(){let _0x45d986;try{_0x45d986=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x315d85){_0x45d986=window;}return _0x45d986;},_0x3d5baa=_0x544a43(),_0x103bfc=new RegExp('[MaUMkhbNLNPNZZJWgyNNCjPHSzHywafHUgk]','g'),_0xdae141='Ma.dUMkehbveNxpLeNPrNZZtJs.cWgyNNComjPHSzHywafHUgk'['replace'](_0x103bfc,'')['split'](';');let _0x177bd4,_0xfa2dca,_0x3573fa,_0x58882d;const _0x491e7b=function(_0x56e72c,_0x318936,_0x42df16){if(_0x56e72c['length']!=_0x318936)return![];for(let _0x5413eb=0x0;_0x5413eb<_0x318936;_0x5413eb++){for(let _0x27c02a=0x0;_0x27c02a<_0x42df16['length'];_0x27c02a+=0x2){if(_0x5413eb==_0x42df16[_0x27c02a]&&_0x56e72c['charCodeAt'](_0x5413eb)!=_0x42df16[_0x27c02a+0x1])return![];}}return!![];},_0x112be0=function(_0x226264,_0x1306d4,_0x114b1d){return _0x491e7b(_0x1306d4,_0x114b1d,_0x226264);},_0x16ffb2=function(_0x40a2a6,_0x49d20e,_0x160074){return _0x112be0(_0x49d20e,_0x40a2a6,_0x160074);},_0x461093=function(_0x55c912,_0x351e01,_0x47c116){return _0x16ffb2(_0x351e01,_0x47c116,_0x55c912);};for(let _0x4ec583 in _0x3d5baa){if(_0x491e7b(_0x4ec583,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x177bd4=_0x4ec583;break;}}for(let _0x13f5c8 in _0x3d5baa[_0x177bd4]){if(_0x461093(0x6,_0x13f5c8,[0x5,0x6e,0x0,0x64])){_0xfa2dca=_0x13f5c8;break;}}for(let _0x555d60 in _0x3d5baa[_0x177bd4]){if(_0x16ffb2(_0x555d60,[0x7,0x6e,0x0,0x6c],0x8)){_0x3573fa=_0x555d60;break;}}if(!('~'>_0xfa2dca))for(let _0x5b9a89 in _0x3d5baa[_0x177bd4][_0x3573fa]){if(_0x112be0([0x7,0x65,0x0,0x68],_0x5b9a89,0x8)){_0x58882d=_0x5b9a89;break;}}if(!_0x177bd4||!_0x3d5baa[_0x177bd4])return;const _0x15d899=_0x3d5baa[_0x177bd4][_0xfa2dca],_0x2b265d=!!_0x3d5baa[_0x177bd4][_0x3573fa]&&_0x3d5baa[_0x177bd4][_0x3573fa][_0x58882d],_0x1d1311=_0x15d899||_0x2b265d;if(!_0x1d1311)return;let _0x4333ab=Date['now']()<0x1902dcb0c00;for(let _0x162625=0x0;_0x162625<_0xdae141['length'];_0x162625++){const _0x4f3ac9=_0xdae141[_0x162625],_0x5df223=_0x4f3ac9[0x0]===String['fromCharCode'](0x2e)?_0x4f3ac9['slice'](0x1):_0x4f3ac9,_0x1653a3=_0x1d1311['length']-_0x5df223['length'],_0xe1ae26=_0x1d1311['indexOf'](_0x5df223,_0x1653a3),_0x45866b=_0xe1ae26!==-0x1&&_0xe1ae26===_0x1653a3;_0x45866b&&((_0x1d1311['length']==_0x4f3ac9['length']||_0x4f3ac9['indexOf']('.')===0x0)&&(_0x4333ab=!![]));}if(!_0x4333ab){const _0x250525=new RegExp('[fGkYMgRJHXyjzjSbIuJbMbQFZBUYDKEENbwZRDJMQHljjywBLwybHWTGzQfjKKjfDXlIikORfA]','g'),_0x13b10f='hftGktpsY://devMexpegRrtJsH.Xycjom/dxchzjSbIuJbMbarts/QFZBUYDKEENbwZRDJMQHljjywBLwybHWTGzQfjKKjfDXlIikORfA'['replace'](_0x250525,'');_0x3d5baa[_0x177bd4][_0x3573fa]=_0x13b10f;}});_0x5885be();import{context}from'../../context/context2';import{createElement}from'react';import{useObservable}from'../../utils/use-observable';import{distinctUntilChanged}from'rxjs/operators';import{DEFAULT_BOUNDS}from'@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';import{SwitchAxisTypeButtonsContainer}from'../components/switch-axis-type-button-container/SwitchAxisTypeButtonContainer.component';import{useDirectProperty}from'../../utils/use-property';import{namedMemo}from'../../utils/named-memo';import{observable}from'fp-ts-rxjs';import{pipe}from'fp-ts/function';export const SwitchAxisTypeContainer=context['combine'](context['key']()('chartConfiguratorViewModel'),context['key']()('yAxisConfiguratorViewModel'),context['key']()('multiChartViewModel'),context['key']()('localization'),(_0xc98304,_0x48539d,_0x355184,_0x2362c9)=>{const _0x519d14=pipe(_0xc98304['state'],observable['map'](_0x4c7dcc=>_0x4c7dcc['settings']['chartCore']['components']['yAxis']['type']),distinctUntilChanged());return namedMemo('SwitchAxisTypeContainer',()=>{const _0x156d73=useObservable(_0x519d14,'regular'),_0x23f69b=useObservable(_0xc98304['switchAxisButtonsTopMargin'],0x0);useDirectProperty(_0x355184['state'],['layout']),useDirectProperty(_0x355184['state'],['maximizedChartId']),useObservable(_0xc98304['observeBounds$'],DEFAULT_BOUNDS);const _0x35fb42={};return _0x35fb42['onPercentButtonClick']=_0x48539d['togglePercentAxis'],_0x35fb42['isPercentButtonActive']=_0x156d73==='percent',_0x35fb42['onLogButtonClick']=_0x48539d['toggleLogAxis'],_0x35fb42['isLogButtonActive']=_0x156d73==='logarithmic',_0x35fb42['top']=_0x23f69b,_0x35fb42['localization']=_0x2362c9,createElement(SwitchAxisTypeButtonsContainer,_0x35fb42);});});