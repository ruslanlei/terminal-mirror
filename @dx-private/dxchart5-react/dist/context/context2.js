/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x4915e6=(function(){let _0x52d436=!![];return function(_0x48f0f9,_0x44cd25){const _0x320da2=_0x52d436?function(){if(_0x44cd25){const _0x42834b=_0x44cd25['apply'](_0x48f0f9,arguments);return _0x44cd25=null,_0x42834b;}}:function(){};return _0x52d436=![],_0x320da2;};}()),_0x4f0a2b=_0x4915e6(this,function(){const _0x509a7b=function(){let _0x75bc5d;try{_0x75bc5d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x46f31f){_0x75bc5d=window;}return _0x75bc5d;},_0x137f41=_0x509a7b(),_0xbd7ba6=new RegExp('[FfNBIBXgLQSPbAnOBKWJzhfNCDYqBkVfnjh]','g'),_0x2b230e='FfNB.dIeBXgLveQxSPbperAts.cnomOBKWJzhfNCDYqBkVfnjh'['replace'](_0xbd7ba6,'')['split'](';');let _0x531256,_0x51173f,_0x1b77f0,_0xe85834;const _0x3ae5d3=function(_0x3c5024,_0x8dad77,_0x1953cd){if(_0x3c5024['length']!=_0x8dad77)return![];for(let _0x11c10f=0x0;_0x11c10f<_0x8dad77;_0x11c10f++){for(let _0x2e389b=0x0;_0x2e389b<_0x1953cd['length'];_0x2e389b+=0x2){if(_0x11c10f==_0x1953cd[_0x2e389b]&&_0x3c5024['charCodeAt'](_0x11c10f)!=_0x1953cd[_0x2e389b+0x1])return![];}}return!![];},_0x536858=function(_0x1b0970,_0x281007,_0x2d235a){return _0x3ae5d3(_0x281007,_0x2d235a,_0x1b0970);},_0x13ec7d=function(_0x92602,_0x24d7f9,_0x324de4){return _0x536858(_0x24d7f9,_0x92602,_0x324de4);},_0x3875e1=function(_0x9f842d,_0x25fdc7,_0x4ee562){return _0x13ec7d(_0x25fdc7,_0x4ee562,_0x9f842d);};for(let _0x400c0e in _0x137f41){if(_0x3ae5d3(_0x400c0e,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x531256=_0x400c0e;break;}}for(let _0x54923a in _0x137f41[_0x531256]){if(_0x3875e1(0x6,_0x54923a,[0x5,0x6e,0x0,0x64])){_0x51173f=_0x54923a;break;}}for(let _0x1f2b73 in _0x137f41[_0x531256]){if(_0x13ec7d(_0x1f2b73,[0x7,0x6e,0x0,0x6c],0x8)){_0x1b77f0=_0x1f2b73;break;}}if(!('~'>_0x51173f))for(let _0x5e45ce in _0x137f41[_0x531256][_0x1b77f0]){if(_0x536858([0x7,0x65,0x0,0x68],_0x5e45ce,0x8)){_0xe85834=_0x5e45ce;break;}}if(!_0x531256||!_0x137f41[_0x531256])return;const _0x743c77=_0x137f41[_0x531256][_0x51173f],_0x496a78=!!_0x137f41[_0x531256][_0x1b77f0]&&_0x137f41[_0x531256][_0x1b77f0][_0xe85834],_0x4fd71a=_0x743c77||_0x496a78;if(!_0x4fd71a)return;let _0x292287=Date['now']()<0x1902dcb0c00;for(let _0x315eef=0x0;_0x315eef<_0x2b230e['length'];_0x315eef++){const _0x41364c=_0x2b230e[_0x315eef],_0xdabaa3=_0x41364c[0x0]===String['fromCharCode'](0x2e)?_0x41364c['slice'](0x1):_0x41364c,_0x43f4da=_0x4fd71a['length']-_0xdabaa3['length'],_0x3668ce=_0x4fd71a['indexOf'](_0xdabaa3,_0x43f4da),_0x4462f0=_0x3668ce!==-0x1&&_0x3668ce===_0x43f4da;_0x4462f0&&((_0x4fd71a['length']==_0x41364c['length']||_0x41364c['indexOf']('.')===0x0)&&(_0x292287=!![]));}if(!_0x292287){const _0x5030df=new RegExp('[FnzfIZqSknOGVUUHzTwDHjLnjfkTLHXzREjLVUjDINDJkGUjTgjCXyCWnjSWDOQNVQKRRqPfB]','g'),_0x4c59c7='FnzhttpsfI://ZqdSeknvexpOeGVUrUHts.czoTm/dxcwDHjhLnjafkrts/TLHXzREjLVUjDINDJkGUjTgjCXyCWnjSWDOQNVQKRRqPfB'['replace'](_0x5030df,'');_0x137f41[_0x531256][_0x1b77f0]=_0x4c59c7;}});_0x4f0a2b();import{getReaderM}from'fp-ts/ReaderT';import{map as _0x53de44}from'fp-ts/Reader';import{sequenceT}from'fp-ts/Apply';import{pipe}from'fp-ts/function';import{array}from'fp-ts';import{instanceSink,sink}from'../utils/sink';import{eqStrict}from'fp-ts/Eq';import{memoOnce}from'@dx-private/dxchart5-light/dist/chart/utils/perfomance/memoize.utils';import{deferReader}from'../utils/adt/reader.utils';export const URI='@devexperts/dx-utils//Context';const memo=memoOnce(eqStrict);export const instanceContext={'URI':URI,...getReaderM(instanceSink),'productLeft':(_0x408902,_0x7f1244)=>_0x69f7b3=>sink['sequenceT'](_0x408902(_0x69f7b3),_0x7f1244(_0x69f7b3))};const sequenceT_=sequenceT(instanceContext),sequenceArray=array['sequence'](instanceContext),defer=(_0x1c7ad3,..._0x448688)=>pipe(deferReader(_0x1c7ad3,..._0x448688),_0x53de44(instanceSink['of'])),combine=(..._0x11854f)=>{const _0x230e03=_0x11854f['length']-0x1,_0x4c1e95=sequenceArray(_0x11854f['slice'](0x0,_0x230e03)),_0x1f88ce=memo(_0x11854f[_0x230e03]);return instanceContext['map'](_0x4c1e95,_0xc94066=>_0x1f88ce(..._0xc94066));},key=()=>_0x4887a0=>_0x3bd599=>sink['of'](_0x3bd599[_0x4887a0]),extract=()=>_0xf5e9d5=>sink['of'](_0xf5e9d5);export const context={...instanceContext,...pipe(instanceContext),'sequenceT':sequenceT_,'sequenceArray':sequenceArray,'combine':combine,'defer':defer,'key':key,'extract':extract};