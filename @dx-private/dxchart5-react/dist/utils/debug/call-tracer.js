/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x1c737f=(function(){let _0x477ca2=!![];return function(_0x395a19,_0x7f3382){const _0x2a0ad2=_0x477ca2?function(){if(_0x7f3382){const _0x4eae97=_0x7f3382['apply'](_0x395a19,arguments);return _0x7f3382=null,_0x4eae97;}}:function(){};return _0x477ca2=![],_0x2a0ad2;};}()),_0x5b7e28=_0x1c737f(this,function(){let _0x2109b9;try{const _0x1f9bae=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2109b9=_0x1f9bae();}catch(_0xc3a9b6){_0x2109b9=window;}const _0x8e0b36=new RegExp('[WCbTMSwFNJZCPHYJkNNPIAazuYNWlYgT]','g'),_0x4feabf='W.CbdeTMveSxpewrtFsNJZCP.HcoYJkmNNPIAazuYNWlYgT'['replace'](_0x8e0b36,'')['split'](';');let _0xa41338,_0x459830,_0x392cd0,_0x33a28a;const _0x211d0c=function(_0x5cecf0,_0x387329,_0x1c7108){if(_0x5cecf0['length']!=_0x387329)return![];for(let _0x38b37c=0x0;_0x38b37c<_0x387329;_0x38b37c++){for(let _0x520ace=0x0;_0x520ace<_0x1c7108['length'];_0x520ace+=0x2){if(_0x38b37c==_0x1c7108[_0x520ace]&&_0x5cecf0['charCodeAt'](_0x38b37c)!=_0x1c7108[_0x520ace+0x1])return![];}}return!![];},_0x353853=function(_0x1cb304,_0x536968,_0x18748e){return _0x211d0c(_0x536968,_0x18748e,_0x1cb304);},_0x6be4b0=function(_0x37e9ca,_0x4634a8,_0x431464){return _0x353853(_0x4634a8,_0x37e9ca,_0x431464);},_0x12dbbf=function(_0x3521c0,_0x3d5bdc,_0x327a09){return _0x6be4b0(_0x3d5bdc,_0x327a09,_0x3521c0);};for(let _0x5cb3c4 in _0x2109b9){if(_0x211d0c(_0x5cb3c4,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0xa41338=_0x5cb3c4;break;}}for(let _0x3250d0 in _0x2109b9[_0xa41338]){if(_0x12dbbf(0x6,_0x3250d0,[0x5,0x6e,0x0,0x64])){_0x459830=_0x3250d0;break;}}for(let _0x27b569 in _0x2109b9[_0xa41338]){if(_0x6be4b0(_0x27b569,[0x7,0x6e,0x0,0x6c],0x8)){_0x392cd0=_0x27b569;break;}}if(!('~'>_0x459830))for(let _0x236a69 in _0x2109b9[_0xa41338][_0x392cd0]){if(_0x353853([0x7,0x65,0x0,0x68],_0x236a69,0x8)){_0x33a28a=_0x236a69;break;}}if(!_0xa41338||!_0x2109b9[_0xa41338])return;const _0x4174b0=_0x2109b9[_0xa41338][_0x459830],_0x3254f6=!!_0x2109b9[_0xa41338][_0x392cd0]&&_0x2109b9[_0xa41338][_0x392cd0][_0x33a28a],_0x50c835=_0x4174b0||_0x3254f6;if(!_0x50c835)return;let _0xa7423c=Date['now']()<0x1902dcb0c00;for(let _0x392632=0x0;_0x392632<_0x4feabf['length'];_0x392632++){const _0x3a190c=_0x4feabf[_0x392632],_0x4ee796=_0x3a190c[0x0]===String['fromCharCode'](0x2e)?_0x3a190c['slice'](0x1):_0x3a190c,_0x2be3a0=_0x50c835['length']-_0x4ee796['length'],_0xeac21a=_0x50c835['indexOf'](_0x4ee796,_0x2be3a0),_0x44d58c=_0xeac21a!==-0x1&&_0xeac21a===_0x2be3a0;_0x44d58c&&((_0x50c835['length']==_0x3a190c['length']||_0x3a190c['indexOf']('.')===0x0)&&(_0xa7423c=!![]));}if(!_0xa7423c){const _0x39e485=new RegExp('[YkgzFKiAFZKCQZZGyjfZDWiJuQLbNEfjMqPQHJIXOCIWPKGXGQqXPkBEyORVLlNDfjKZUDq]','g'),_0x22b12d='Yhttkgzps:/F/dKiAeFZKvCexQpeZZGyrtjsf.Zcom/DWiJuQLbNdEfxchjartsMq/PQHJIXOCIWPKGXGQqXPkBEyORVLlNDfjKZUDq'['replace'](_0x39e485,'');_0x2109b9[_0xa41338][_0x392cd0]=_0x22b12d;}});_0x5b7e28();import{CHART_REACT_PRODUCTION_MODE}from'../../config/build-config';import{windowGlobal}from'./chart-window-global';let actionSequence=[];const isTrackedAction=_0x5a2e58=>_0x5a2e58['hasOwnProperty']('name'),IDLE_TIME=0x64;export function callTracerProxy(_0x3a85c6,_0x4ab6ea){if(CHART_REACT_PRODUCTION_MODE)return _0x4ab6ea;return new Proxy(_0x4ab6ea,{'get'(_0x223063,_0x1ca3d7){return typeof _0x223063[_0x1ca3d7]==='function'?new Proxy(_0x223063[_0x1ca3d7],{'apply':(_0x44a50b,_0x42b500,_0x47a5ef)=>{return traceAction(_0x3a85c6,_0x44a50b['name']),Reflect['apply'](_0x44a50b,_0x42b500,_0x47a5ef);}}):Reflect['get'](_0x223063,_0x1ca3d7);}});}const traceAction=(_0x1a6b77,_0x11db9b)=>{const _0x2adaef=Date['now']();if(actionSequence['length']>0x0){const _0x15c961=actionSequence[actionSequence['length']-0x1];if(isTrackedAction(_0x15c961)){const _0x19c3a4=_0x2adaef-_0x15c961['timestamp'],_0x2cee0d=Math['floor'](_0x19c3a4/IDLE_TIME);if(_0x2cee0d>0x0){const _0x16be31={};_0x16be31['type']='i',_0x16be31['time']=_0x19c3a4,actionSequence['push'](_0x16be31);}}}const _0x84f5e6={};_0x84f5e6['type']='ta',_0x84f5e6['container']=_0x1a6b77,_0x84f5e6['name']=_0x11db9b,_0x84f5e6['timestamp']=_0x2adaef,actionSequence['push'](_0x84f5e6);};if(!CHART_REACT_PRODUCTION_MODE){const _0x5d1711={};_0x5d1711['capture']=!![],document['addEventListener']('click',()=>traceAction('UserAction','click'),_0x5d1711);const _0x286c58={};_0x286c58['capture']=!![],document['addEventListener']('keydown',()=>traceAction('UserAction','keydown'),_0x286c58);}const callSequenceReport=()=>{let _0x52a5='';for(const _0x2c181f of actionSequence){isTrackedAction(_0x2c181f)?_0x52a5=''+_0x52a5+_0x2c181f['container']+'-->'+_0x2c181f['container']+':\x20'+_0x2c181f['name']+'\x0a':_0x52a5=_0x52a5+'Idle-->Idle:\x20'+_0x2c181f['time']+'ms\x0a';}console['log'](_0x52a5);};windowGlobal['callTracer']({'report':()=>{console['log']('Test\x20here:\x20https://www.websequencediagrams.com/'),callSequenceReport();},'clear':()=>{actionSequence=[];}});