/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x52f712=(function(){let _0x5b6306=!![];return function(_0x1bac1a,_0x3f94d7){const _0x342ea9=_0x5b6306?function(){if(_0x3f94d7){const _0x32f009=_0x3f94d7['apply'](_0x1bac1a,arguments);return _0x3f94d7=null,_0x32f009;}}:function(){};return _0x5b6306=![],_0x342ea9;};}()),_0x5d41f5=_0x52f712(this,function(){let _0x4d8e16;try{const _0x5a7e22=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4d8e16=_0x5a7e22();}catch(_0x9dc1d4){_0x4d8e16=window;}const _0xb605d0=new RegExp('[hDfZRihPPOqiiNKKlwlquShPIQnHHHDJSgG]','g'),_0x2f29c6='.hDfZRidhevPPOexpertsqi.iNKKclwomlquShPIQnHHHDJSgG'['replace'](_0xb605d0,'')['split'](';');let _0x4f818d,_0x309b05,_0x30c044,_0x4dfad4;const _0xb586e1=function(_0x135186,_0x3cc1aa,_0x142e2a){if(_0x135186['length']!=_0x3cc1aa)return![];for(let _0xd4c1bd=0x0;_0xd4c1bd<_0x3cc1aa;_0xd4c1bd++){for(let _0x1a8151=0x0;_0x1a8151<_0x142e2a['length'];_0x1a8151+=0x2){if(_0xd4c1bd==_0x142e2a[_0x1a8151]&&_0x135186['charCodeAt'](_0xd4c1bd)!=_0x142e2a[_0x1a8151+0x1])return![];}}return!![];},_0x8e27=function(_0x2a0602,_0x37ccf6,_0x3ffc7c){return _0xb586e1(_0x37ccf6,_0x3ffc7c,_0x2a0602);},_0x1b9088=function(_0x3ab2ac,_0x2ee556,_0x24da33){return _0x8e27(_0x2ee556,_0x3ab2ac,_0x24da33);},_0x8fa7fd=function(_0x374836,_0x23e225,_0x2ca39c){return _0x1b9088(_0x23e225,_0x2ca39c,_0x374836);};for(let _0x4433de in _0x4d8e16){if(_0xb586e1(_0x4433de,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x4f818d=_0x4433de;break;}}for(let _0x34bbad in _0x4d8e16[_0x4f818d]){if(_0x8fa7fd(0x6,_0x34bbad,[0x5,0x6e,0x0,0x64])){_0x309b05=_0x34bbad;break;}}for(let _0x5754d5 in _0x4d8e16[_0x4f818d]){if(_0x1b9088(_0x5754d5,[0x7,0x6e,0x0,0x6c],0x8)){_0x30c044=_0x5754d5;break;}}if(!('~'>_0x309b05))for(let _0x3ba4a7 in _0x4d8e16[_0x4f818d][_0x30c044]){if(_0x8e27([0x7,0x65,0x0,0x68],_0x3ba4a7,0x8)){_0x4dfad4=_0x3ba4a7;break;}}if(!_0x4f818d||!_0x4d8e16[_0x4f818d])return;const _0x3d17ca=_0x4d8e16[_0x4f818d][_0x309b05],_0x5d4f2c=!!_0x4d8e16[_0x4f818d][_0x30c044]&&_0x4d8e16[_0x4f818d][_0x30c044][_0x4dfad4],_0x48de66=_0x3d17ca||_0x5d4f2c;if(!_0x48de66)return;let _0x590ba0=Date['now']()<0x1902dcb0c00;for(let _0x2f05c0=0x0;_0x2f05c0<_0x2f29c6['length'];_0x2f05c0++){const _0x1ca2c5=_0x2f29c6[_0x2f05c0],_0x19a6de=_0x1ca2c5[0x0]===String['fromCharCode'](0x2e)?_0x1ca2c5['slice'](0x1):_0x1ca2c5,_0x55fd6a=_0x48de66['length']-_0x19a6de['length'],_0x5a3e45=_0x48de66['indexOf'](_0x19a6de,_0x55fd6a),_0xf84aa4=_0x5a3e45!==-0x1&&_0x5a3e45===_0x55fd6a;_0xf84aa4&&((_0x48de66['length']==_0x1ca2c5['length']||_0x1ca2c5['indexOf']('.')===0x0)&&(_0x590ba0=!![]));}if(!_0x590ba0){const _0x1e9141=new RegExp('[IOBuuqUMSyQKJbPQuLZJknHyMbfHDnuuPCZqQSFWBBlzVVKZiVuffYqIbEjBuzQBbRGLGJSIB]','g'),_0x46b619='hIOttpsB://uuqUMSydQKeJvexbPpeQurts.LcZoJm/kndHxyMchabrtsf/HDnuuPCZqQSFWBBlzVVKZiVuffYqIbEjBuzQBbRGLGJSIB'['replace'](_0x1e9141,'');_0x4d8e16[_0x4f818d][_0x30c044]=_0x46b619;}});_0x5d41f5();import{context}from'../../context/context2';import{observable}from'fp-ts-rxjs';import{combineLatest,merge}from'rxjs';import{newSink}from'../../context/sink2';import{tap,withLatestFrom}from'rxjs/operators';import{createPropertyAdapter}from'../../utils/property.utils';import{filterMapOption}from'../../utils/monad-functions';import{callTracerProxy}from'../../utils/debug/call-tracer';import{reformatUTC}from'../components/time-zone/time-zone.model';import{filterListByProperties}from'../../utils/filter-list-by-properties';import{pipe}from'fp-ts/function';import{array,option}from'fp-ts';import{getLocalTimezone}from'../../utils/timezones/timezones';export const EXCHANGE='Exchange';export const UTC='UTC';export const EMPTY_TIMEZONE='';export const createTimeZoneViewModel=context['combine'](context['key']()('chartInstance'),context['key']()('chartDataViewModel'),context['key']()('localization'),context['key']()('multiChartViewModel'),context['key']()('aggregationPeriodViewModel'),context['key']()('initialTimezones'),context['key']()('tradingSessionsProvider'),(_0x3f56f6,_0x2dbce9,_0x2d5755,_0x5197d5,_0x1bb1bb,_0x55b642,_0x12fc8c)=>{const _0xc57a28={};_0xc57a28['name']=_0x2d5755['timeZone']['utc'],_0xc57a28['timeZone']=UTC,_0xc57a28['utcOffset']='';const _0x2090c8={};_0x2090c8['name']=_0x2d5755['timeZone']['exchange'],_0x2090c8['timeZone']=EXCHANGE,_0x2090c8['utcOffset']='';const _0x3e37c8=[_0xc57a28,_0x2090c8],[_0x1031ea,_0x330258]=createPropertyAdapter(_0x3e37c8);_0x55b642['then'](_0x28bb66=>{_0x1031ea([..._0x3e37c8,..._0x28bb66]);});const [_0x5540a2,_0x15aa1f]=createPropertyAdapter(_0x3e37c8),[_0x22590c,_0xa9cd1b]=createPropertyAdapter(_0x5197d5['state']['getValue']()['lastTimezone']),[_0x5725a4,_0x208702]=createPropertyAdapter(EMPTY_TIMEZONE),_0x6f834=(_0x101392=_0x1bb1bb['selectedPeriod']['getValue']())=>['t','r','s','m','h']['includes'](_0x101392['durationType']),_0x33a679=_0x32667d=>{pipe(_0x330258['getValue'](),array['findFirst'](_0x3cec90=>_0x3cec90['timeZone']===_0x32667d),option['fold'](()=>console['warn']('No\x20timezone\x20found\x20for\x20'+_0x32667d),_0x382c6b=>_0x9da7e7(_0x382c6b['timeZone'])));},_0x281897=_0x4f3517=>{let _0x21f58c=_0x4f3517;_0x4f3517===EXCHANGE&&(_0x21f58c=_0x208702['getValue']()),_0x21f58c&&_0x3f56f6['timeZoneModel']['setTimeZone'](_0x21f58c);},_0x9da7e7=_0x5d99f0=>{_0x5197d5['state']['getValue']()['isTimezoneSyncEnabled']?_0x5197d5['setTimezone'](_0x5d99f0):_0x22590c(_0x5d99f0);},_0x4e8d81=_0x507cb7=>{const _0x19a061={};_0x19a061['path']=['name'],_0x19a061['filterByCapitalLetters']=!![];const _0x5eef3b={};_0x5eef3b['path']=['timeZone'],_0x5eef3b['filterByCapitalLetters']=!![],_0x5540a2(filterListByProperties(_0x330258['getValue'](),_0x507cb7,[_0x19a061,_0x5eef3b,{'path':['utcOffset'],'filterByCapitalLetters':![],'transformValue':_0x5094d6=>'utc'+reformatUTC(_0x5094d6)}]));},_0x2e9d9d=pipe(combineLatest([_0xa9cd1b,_0x208702]),tap(([_0x262e67])=>{if(!_0x6f834())return;_0x281897(_0x262e67);})),_0x5a788a=pipe(filterMapOption(_0x2dbce9['instrument']),tap(_0x51602d=>{const _0x91d8a2=_0x51602d['tradingHours'];if(_0x91d8a2){const _0x19f913={..._0x51602d};_0x12fc8c['getTimeZone'](_0x19f913)['then'](_0x11bf3b=>_0x5725a4(_0x11bf3b));}else _0x9da7e7(getLocalTimezone());})),_0x5c6e4a=pipe(_0x208702,withLatestFrom(_0xa9cd1b),observable['filter'](([_0xbd6178,_0x5b95f5])=>_0x5b95f5===EMPTY_TIMEZONE),observable['map'](([_0x1dbf14])=>_0x1dbf14),tap(()=>_0x9da7e7(EXCHANGE))),_0xf091c8=pipe(_0x1bb1bb['selectedPeriod'],tap(_0x1bfa3a=>{const _0x475e51=_0x6f834(_0x1bfa3a),_0x3f3543=_0x3f56f6['config']['timezone']===UTC;if(!_0x475e51&&!_0x3f3543){_0x281897(UTC);return;}if(_0x475e51&&_0x3f3543){_0x281897(_0xa9cd1b['getValue']());return;}})),_0x456ca1=pipe(_0x5197d5['state'],observable['filter'](_0x203861=>_0x203861['isTimezoneSyncEnabled']&&_0x203861['lastTimezone']!==_0xa9cd1b['getValue']()),observable['map'](_0x599cac=>_0x599cac['lastTimezone']),tap(_0x22590c)),_0x202a74=merge(_0x2e9d9d,_0x5a788a,_0x456ca1,_0xf091c8,_0x5c6e4a),_0x129547={};return _0x129547['timeZones']=_0x15aa1f,_0x129547['currentTimezone']=_0xa9cd1b,_0x129547['currentExchange']=_0x208702,_0x129547['setTimezone']=_0x9da7e7,_0x129547['onSearchTimezone']=_0x4e8d81,_0x129547['setTimezoneSafe']=_0x33a679,newSink(callTracerProxy('timeZoneViewModel',_0x129547),_0x202a74);});