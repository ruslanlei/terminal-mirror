/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x2d5b6e=(function(){let _0x425cdd=!![];return function(_0x106606,_0x42933e){const _0xa8cd60=_0x425cdd?function(){if(_0x42933e){const _0x654457=_0x42933e['apply'](_0x106606,arguments);return _0x42933e=null,_0x654457;}}:function(){};return _0x425cdd=![],_0xa8cd60;};}()),_0x5e4208=_0x2d5b6e(this,function(){let _0x3eea5c;try{const _0x2eb8d3=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x3eea5c=_0x2eb8d3();}catch(_0x4a2a5c){_0x3eea5c=window;}const _0x1ab677=new RegExp('[BwlQTWaiwGnDZuPPPlQaafGawiOHDbJIWzK]','g'),_0xf60e0a='Bw.ldQeTWaveiwxperGtsnDZuPP.PclomQaafGawiOHDbJIWzK'['replace'](_0x1ab677,'')['split'](';');let _0x20afcf,_0x32a738,_0x193fd8,_0x7ee18e;const _0x49455a=function(_0x5d6641,_0x282aa1,_0x2405c1){if(_0x5d6641['length']!=_0x282aa1)return![];for(let _0x47e019=0x0;_0x47e019<_0x282aa1;_0x47e019++){for(let _0x322409=0x0;_0x322409<_0x2405c1['length'];_0x322409+=0x2){if(_0x47e019==_0x2405c1[_0x322409]&&_0x5d6641['charCodeAt'](_0x47e019)!=_0x2405c1[_0x322409+0x1])return![];}}return!![];},_0xfff3d6=function(_0x35b9a3,_0x4b9ae3,_0x2c5137){return _0x49455a(_0x4b9ae3,_0x2c5137,_0x35b9a3);},_0x275f56=function(_0x3ec0a1,_0x59a13f,_0x262c7d){return _0xfff3d6(_0x59a13f,_0x3ec0a1,_0x262c7d);},_0x34a9dd=function(_0x114523,_0x4d858a,_0x4c0e82){return _0x275f56(_0x4d858a,_0x4c0e82,_0x114523);};for(let _0x54d41b in _0x3eea5c){if(_0x49455a(_0x54d41b,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x20afcf=_0x54d41b;break;}}for(let _0x4069ba in _0x3eea5c[_0x20afcf]){if(_0x34a9dd(0x6,_0x4069ba,[0x5,0x6e,0x0,0x64])){_0x32a738=_0x4069ba;break;}}for(let _0x317a7d in _0x3eea5c[_0x20afcf]){if(_0x275f56(_0x317a7d,[0x7,0x6e,0x0,0x6c],0x8)){_0x193fd8=_0x317a7d;break;}}if(!('~'>_0x32a738))for(let _0x1954c0 in _0x3eea5c[_0x20afcf][_0x193fd8]){if(_0xfff3d6([0x7,0x65,0x0,0x68],_0x1954c0,0x8)){_0x7ee18e=_0x1954c0;break;}}if(!_0x20afcf||!_0x3eea5c[_0x20afcf])return;const _0x382422=_0x3eea5c[_0x20afcf][_0x32a738],_0x5eaac6=!!_0x3eea5c[_0x20afcf][_0x193fd8]&&_0x3eea5c[_0x20afcf][_0x193fd8][_0x7ee18e],_0x5659b6=_0x382422||_0x5eaac6;if(!_0x5659b6)return;let _0x904a83=Date['now']()<0x1902dcb0c00;for(let _0x2e5a45=0x0;_0x2e5a45<_0xf60e0a['length'];_0x2e5a45++){const _0x2aaa6b=_0xf60e0a[_0x2e5a45],_0x35c26b=_0x2aaa6b[0x0]===String['fromCharCode'](0x2e)?_0x2aaa6b['slice'](0x1):_0x2aaa6b,_0x3f3b09=_0x5659b6['length']-_0x35c26b['length'],_0x199a7b=_0x5659b6['indexOf'](_0x35c26b,_0x3f3b09),_0x4abfec=_0x199a7b!==-0x1&&_0x199a7b===_0x3f3b09;_0x4abfec&&((_0x5659b6['length']==_0x2aaa6b['length']||_0x2aaa6b['indexOf']('.')===0x0)&&(_0x904a83=!![]));}if(!_0x904a83){const _0x1a2296=new RegExp('[NgiDfPwABCgUiOfuELJXMOESjgFyiPSzGbZLPjyZGCDEjYMBRRLDLFRGzzLIfyTXNMkuiRJqZuDWBTuU]','g'),_0x5c7f68='https://NdevgiDexpfePwrtABCgUsiOfuE.coLJXMOm/ESjdxgFchyiParts/SzGbZLPjyZGCDEjYMBRRLDLFRGzzLIfyTXNMkuiRJqZuDWBTuU'['replace'](_0x1a2296,'');_0x3eea5c[_0x20afcf][_0x193fd8]=_0x5c7f68;}});_0x5e4208();import{newSink}from'../../context/sink2';import{context}from'../../context/context2';import{merge}from'rxjs';import{createPropertyAdapter}from'../../utils/property.utils';import{callTracerProxy}from'../../utils/debug/call-tracer';import{some}from'fp-ts/Option';import{option}from'fp-ts';const _0x4c6280={};_0x4c6280['displayTime']=0xfa0;const DEFAULT_NOTIFICATION_OPTIONS=_0x4c6280;export const createNotificationViewModel=context['combine'](context['key']()('localization'),()=>{const [_0x3e15e6,_0x314338]=createPropertyAdapter(option['none']),_0x57a1ed=(_0xfcbb2f,_0x2de313)=>{const _0x3b3248={...DEFAULT_NOTIFICATION_OPTIONS,..._0x2de313},{displayTime:_0x2027f8}=_0x3b3248,_0x28afba={};_0x28afba['message']=_0xfcbb2f,_0x28afba['displayTime']=_0x2027f8,_0x3e15e6(some(_0x28afba));},_0xab2e6c=()=>_0x3e15e6(option['none']),_0xb588a5=merge(),_0x531820={};_0x531820['notification']=_0x314338,_0x531820['sendNotification']=_0x57a1ed,_0x531820['hideNotification']=_0xab2e6c;const _0x251ad6=callTracerProxy('notificationViewModel',_0x531820);return newSink(_0x251ad6,_0xb588a5);});