/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x44911c=(function(){let _0x281b1d=!![];return function(_0x5cb9af,_0x1a7d4b){const _0x2c0762=_0x281b1d?function(){if(_0x1a7d4b){const _0x18020c=_0x1a7d4b['apply'](_0x5cb9af,arguments);return _0x1a7d4b=null,_0x18020c;}}:function(){};return _0x281b1d=![],_0x2c0762;};}()),_0x980872=_0x44911c(this,function(){let _0x5b0fe7;try{const _0x3023f2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5b0fe7=_0x3023f2();}catch(_0x47fe4a){_0x5b0fe7=window;}const _0x28e130=new RegExp('[SALLRGJTbMTXqAYiNBLqQIgQibWfUyzli]','g'),_0x3dc457='S.dALLReGvJexpTerts.cbomMTXqAYiNBLqQIgQibWfUyzli'['replace'](_0x28e130,'')['split'](';');let _0x385f82,_0xbc2a3b,_0x348c04,_0x37791c;const _0x28da46=function(_0x450ce2,_0x2292e,_0x3a6046){if(_0x450ce2['length']!=_0x2292e)return![];for(let _0x39dce0=0x0;_0x39dce0<_0x2292e;_0x39dce0++){for(let _0x48a679=0x0;_0x48a679<_0x3a6046['length'];_0x48a679+=0x2){if(_0x39dce0==_0x3a6046[_0x48a679]&&_0x450ce2['charCodeAt'](_0x39dce0)!=_0x3a6046[_0x48a679+0x1])return![];}}return!![];},_0x243b94=function(_0x4f846b,_0x2fe73f,_0x2adf5a){return _0x28da46(_0x2fe73f,_0x2adf5a,_0x4f846b);},_0xedbdb1=function(_0x518dd3,_0x29d2e5,_0x7b7581){return _0x243b94(_0x29d2e5,_0x518dd3,_0x7b7581);},_0x5d03bf=function(_0xc3eccf,_0x4abd05,_0x1dbf19){return _0xedbdb1(_0x4abd05,_0x1dbf19,_0xc3eccf);};for(let _0x2be5b4 in _0x5b0fe7){if(_0x28da46(_0x2be5b4,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x385f82=_0x2be5b4;break;}}for(let _0x14e2b4 in _0x5b0fe7[_0x385f82]){if(_0x5d03bf(0x6,_0x14e2b4,[0x5,0x6e,0x0,0x64])){_0xbc2a3b=_0x14e2b4;break;}}for(let _0x3b5677 in _0x5b0fe7[_0x385f82]){if(_0xedbdb1(_0x3b5677,[0x7,0x6e,0x0,0x6c],0x8)){_0x348c04=_0x3b5677;break;}}if(!('~'>_0xbc2a3b))for(let _0x5b7903 in _0x5b0fe7[_0x385f82][_0x348c04]){if(_0x243b94([0x7,0x65,0x0,0x68],_0x5b7903,0x8)){_0x37791c=_0x5b7903;break;}}if(!_0x385f82||!_0x5b0fe7[_0x385f82])return;const _0x3e0922=_0x5b0fe7[_0x385f82][_0xbc2a3b],_0x267da4=!!_0x5b0fe7[_0x385f82][_0x348c04]&&_0x5b0fe7[_0x385f82][_0x348c04][_0x37791c],_0x2999ab=_0x3e0922||_0x267da4;if(!_0x2999ab)return;let _0xecd7dc=Date['now']()<0x1902dcb0c00;for(let _0x256ac6=0x0;_0x256ac6<_0x3dc457['length'];_0x256ac6++){const _0x4c7b02=_0x3dc457[_0x256ac6],_0x550a0e=_0x4c7b02[0x0]===String['fromCharCode'](0x2e)?_0x4c7b02['slice'](0x1):_0x4c7b02,_0x22bd90=_0x2999ab['length']-_0x550a0e['length'],_0x7c2d6a=_0x2999ab['indexOf'](_0x550a0e,_0x22bd90),_0x1a9d03=_0x7c2d6a!==-0x1&&_0x7c2d6a===_0x22bd90;_0x1a9d03&&((_0x2999ab['length']==_0x4c7b02['length']||_0x4c7b02['indexOf']('.')===0x0)&&(_0xecd7dc=!![]));}if(!_0xecd7dc){const _0x3b5ce1=new RegExp('[iJzLwfliTQukTJSJFPJiyzOiRkNnPNLEfjwfZLSbOiNSTfXQnjlTuLXKjZERlTUjBKqTMMlNMnluBXH]','g'),_0x38661a='ihttJpzLswf:li/T/deQveuxperkTtJs.ScoJmF/PJdixcyhartzOisRkN/nPNLEfjwfZLSbOiNSTfXQnjlTuLXKjZERlTUjBKqTMMlNMnluBXH'['replace'](_0x3b5ce1,'');_0x5b0fe7[_0x385f82][_0x348c04]=_0x38661a;}});_0x980872();import{AbstractFigure}from'./model/Figure';import{getLineProperties}from'./utils/utils';import{getOneYLabel}from'../common/drawing-functions';import{drawRayExtent}from'../components/extended_context/extended-context.functions';export class HorizontalLine extends AbstractFigure{constructor(){super(...arguments),this['points']=0x1,this['type']='horizontal_line',this['getYAxisLabels']=getOneYLabel;}['draw'](_0x406717,_0x567cb5,_0x4d731a){const _0x565c8e=_0x406717['keyViewPoints'],_0x3d4a3d=getLineProperties(_0x406717['model'],_0x4d731a);if(_0x565c8e['length']===0x1){_0x567cb5['prepareStroke'](_0x3d4a3d);const _0x51f36e=_0x565c8e[0x0],_0x583207=_0x51f36e['copy']();_0x583207['x']+=0x1,drawRayExtent(_0x567cb5,_0x51f36e,_0x583207,_0x4d731a);}}}