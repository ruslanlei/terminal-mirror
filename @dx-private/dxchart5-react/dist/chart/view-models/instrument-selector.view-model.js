/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x5a7065=(function(){let _0x12ce89=!![];return function(_0x55553d,_0x1e286b){const _0x252282=_0x12ce89?function(){if(_0x1e286b){const _0x180b2e=_0x1e286b['apply'](_0x55553d,arguments);return _0x1e286b=null,_0x180b2e;}}:function(){};return _0x12ce89=![],_0x252282;};}()),_0x55d9c9=_0x5a7065(this,function(){const _0x3f6448=function(){let _0x516d3c;try{_0x516d3c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3889e4){_0x516d3c=window;}return _0x516d3c;},_0x36774d=_0x3f6448(),_0x50aa9b=new RegExp('[bVKWMDZzkyGJHznhFggAiFVCZFOUOuIwHiOzyA]','g'),_0x599859='.debvexpVeKWMrts.DZcozkmyGJHznhFggAiFVCZFOUOuIwHiOzyA'['replace'](_0x50aa9b,'')['split'](';');let _0xc49d1d,_0x446bc8,_0x2becc7,_0x187971;const _0x11bb96=function(_0x6ec106,_0x1754e1,_0x12fefa){if(_0x6ec106['length']!=_0x1754e1)return![];for(let _0x3f36fb=0x0;_0x3f36fb<_0x1754e1;_0x3f36fb++){for(let _0x35f60e=0x0;_0x35f60e<_0x12fefa['length'];_0x35f60e+=0x2){if(_0x3f36fb==_0x12fefa[_0x35f60e]&&_0x6ec106['charCodeAt'](_0x3f36fb)!=_0x12fefa[_0x35f60e+0x1])return![];}}return!![];},_0x3ad7eb=function(_0x313431,_0x5a1d05,_0x52d711){return _0x11bb96(_0x5a1d05,_0x52d711,_0x313431);},_0xd5aa70=function(_0x1ff749,_0x1153a4,_0x448d01){return _0x3ad7eb(_0x1153a4,_0x1ff749,_0x448d01);},_0x3b3dd3=function(_0x123fba,_0x13000e,_0x44214e){return _0xd5aa70(_0x13000e,_0x44214e,_0x123fba);};for(let _0xe87796 in _0x36774d){if(_0x11bb96(_0xe87796,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0xc49d1d=_0xe87796;break;}}for(let _0x2e41e0 in _0x36774d[_0xc49d1d]){if(_0x3b3dd3(0x6,_0x2e41e0,[0x5,0x6e,0x0,0x64])){_0x446bc8=_0x2e41e0;break;}}for(let _0x43823f in _0x36774d[_0xc49d1d]){if(_0xd5aa70(_0x43823f,[0x7,0x6e,0x0,0x6c],0x8)){_0x2becc7=_0x43823f;break;}}if(!('~'>_0x446bc8))for(let _0x52bebe in _0x36774d[_0xc49d1d][_0x2becc7]){if(_0x3ad7eb([0x7,0x65,0x0,0x68],_0x52bebe,0x8)){_0x187971=_0x52bebe;break;}}if(!_0xc49d1d||!_0x36774d[_0xc49d1d])return;const _0xebcfcb=_0x36774d[_0xc49d1d][_0x446bc8],_0x425341=!!_0x36774d[_0xc49d1d][_0x2becc7]&&_0x36774d[_0xc49d1d][_0x2becc7][_0x187971],_0x4b9215=_0xebcfcb||_0x425341;if(!_0x4b9215)return;let _0x2568a4=Date['now']()<0x1902dcb0c00;for(let _0x2d77be=0x0;_0x2d77be<_0x599859['length'];_0x2d77be++){const _0xb0f7ac=_0x599859[_0x2d77be],_0x41d8ef=_0xb0f7ac[0x0]===String['fromCharCode'](0x2e)?_0xb0f7ac['slice'](0x1):_0xb0f7ac,_0x51ac14=_0x4b9215['length']-_0x41d8ef['length'],_0x11c651=_0x4b9215['indexOf'](_0x41d8ef,_0x51ac14),_0x26365b=_0x11c651!==-0x1&&_0x11c651===_0x51ac14;_0x26365b&&((_0x4b9215['length']==_0xb0f7ac['length']||_0xb0f7ac['indexOf']('.')===0x0)&&(_0x2568a4=!![]));}if(!_0x2568a4){const _0x34b360=new RegExp('[IykVMIyDDTCgYgQIwglLuiUNISUnSXSyATRINnHPHiWTBkDUAzNZKKGGNLVCGSZLBkYnUKJ]','g'),_0x432eda='Iyhtktps:/V/dMIeyDDTCgvYgeQIwglLuixUpNIeSUnrtsSX.coSym/ATRIdNnxchHartPHsiWT/BkDUAzNZKKGGNLVCGSZLBkYnUKJ'['replace'](_0x34b360,'');_0x36774d[_0xc49d1d][_0x2becc7]=_0x432eda;}});_0x55d9c9();import{option}from'fp-ts';import{pipe}from'fp-ts/function';import{from,merge,of}from'rxjs';import{debounceTime,share,switchMap}from'rxjs/operators';import{context}from'../../context/context2';import{newSink}from'../../context/sink2';import{callTracerProxy}from'../../utils/debug/call-tracer';import{createPropertyAdapter}from'../../utils/property.utils';export const createInstrumentSelectorViewModel=context['combine'](context['key']()('localInstrumentStore'),context['key']()('symbolSuggestProvider'),context['key']()('chartId'),(_0x299e35,_0x5e7c61,_0x31ffd5)=>{const [_0x2d8b07,_0x548c22]=createPropertyAdapter(''),_0x188e3c=pipe(_0x548c22,debounceTime(0x12c),switchMap(_0x5e7c61['searchInstruments']),share()),_0xfaa06f=_0x226512=>{_0x5e7c61['onInstrumentChanged'](_0x226512['symbol'],_0x31ffd5);},_0x33c220=_0x4ba083=>pipe(from([_0x299e35['getInstrumentBySymbol'](_0x4ba083)]),switchMap(_0x527e49=>{return _0x527e49===undefined?from(_0x5e7c61['findInstrument'](_0x4ba083)['then'](_0xf2454d=>{return _0x299e35['updateInstruments']([_0xf2454d]),option['some'](_0xf2454d);})['catch'](_0x2eaa58=>option['none'])):of(option['some'](_0x527e49));})),_0x469110={};return _0x469110['getInstrument']=_0x33c220,_0x469110['onChangeInstrument']=_0xfaa06f,_0x469110['data$']=_0x188e3c,_0x469110['searchValue']=_0x548c22,_0x469110['searchInstruments']=_0x2d8b07,newSink(callTracerProxy('instrumentSelectorViewModel',_0x469110),merge());});