/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x554ef2=(function(){let _0x4b06b5=!![];return function(_0x1918e9,_0x1dcd11){const _0x32b2ef=_0x4b06b5?function(){if(_0x1dcd11){const _0x29e701=_0x1dcd11['apply'](_0x1918e9,arguments);return _0x1dcd11=null,_0x29e701;}}:function(){};return _0x4b06b5=![],_0x32b2ef;};}()),_0x57c1af=_0x554ef2(this,function(){let _0x10b094;try{const _0x286653=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x10b094=_0x286653();}catch(_0xd398){_0x10b094=window;}const _0x2be979=new RegExp('[SzSUnFyZwVbkWZCjXilHaPWMJYOnYQbUJ]','g'),_0x82523a='Sz.SUdenveFxypZwVbekWZCrjtXilsH.aPcWoMmJYOnYQbUJ'['replace'](_0x2be979,'')['split'](';');let _0x2932ea,_0x5e30b8,_0x284d74,_0x3afe45;const _0x1772d7=function(_0x14bce0,_0x5c4d32,_0x41c922){if(_0x14bce0['length']!=_0x5c4d32)return![];for(let _0x5f5902=0x0;_0x5f5902<_0x5c4d32;_0x5f5902++){for(let _0xce47f7=0x0;_0xce47f7<_0x41c922['length'];_0xce47f7+=0x2){if(_0x5f5902==_0x41c922[_0xce47f7]&&_0x14bce0['charCodeAt'](_0x5f5902)!=_0x41c922[_0xce47f7+0x1])return![];}}return!![];},_0x2165e7=function(_0x11dc08,_0x317af4,_0x1ec9f2){return _0x1772d7(_0x317af4,_0x1ec9f2,_0x11dc08);},_0x880830=function(_0x16794b,_0x3ed1d8,_0x3dc37c){return _0x2165e7(_0x3ed1d8,_0x16794b,_0x3dc37c);},_0x5243df=function(_0x53e60b,_0x38940d,_0x48d0fa){return _0x880830(_0x38940d,_0x48d0fa,_0x53e60b);};for(let _0x3e335e in _0x10b094){if(_0x1772d7(_0x3e335e,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2932ea=_0x3e335e;break;}}for(let _0x4e7486 in _0x10b094[_0x2932ea]){if(_0x5243df(0x6,_0x4e7486,[0x5,0x6e,0x0,0x64])){_0x5e30b8=_0x4e7486;break;}}for(let _0x40e2c8 in _0x10b094[_0x2932ea]){if(_0x880830(_0x40e2c8,[0x7,0x6e,0x0,0x6c],0x8)){_0x284d74=_0x40e2c8;break;}}if(!('~'>_0x5e30b8))for(let _0x5440a3 in _0x10b094[_0x2932ea][_0x284d74]){if(_0x2165e7([0x7,0x65,0x0,0x68],_0x5440a3,0x8)){_0x3afe45=_0x5440a3;break;}}if(!_0x2932ea||!_0x10b094[_0x2932ea])return;const _0x1ffcbc=_0x10b094[_0x2932ea][_0x5e30b8],_0x4847b1=!!_0x10b094[_0x2932ea][_0x284d74]&&_0x10b094[_0x2932ea][_0x284d74][_0x3afe45],_0x235c91=_0x1ffcbc||_0x4847b1;if(!_0x235c91)return;let _0x48830d=Date['now']()<0x1902dcb0c00;for(let _0x1bbb6d=0x0;_0x1bbb6d<_0x82523a['length'];_0x1bbb6d++){const _0x11fc0d=_0x82523a[_0x1bbb6d],_0x281e42=_0x11fc0d[0x0]===String['fromCharCode'](0x2e)?_0x11fc0d['slice'](0x1):_0x11fc0d,_0x386bd3=_0x235c91['length']-_0x281e42['length'],_0x229fc1=_0x235c91['indexOf'](_0x281e42,_0x386bd3),_0x39f596=_0x229fc1!==-0x1&&_0x229fc1===_0x386bd3;_0x39f596&&((_0x235c91['length']==_0x11fc0d['length']||_0x11fc0d['indexOf']('.')===0x0)&&(_0x48830d=!![]));}if(!_0x48830d){const _0x19b979=new RegExp('[SXgKzPDgYkyzSFVRzEzZnuZWPYkJlVFHXllzXORFwqTWOiqlbPXuLuzyLUAzHNCPRUObIzwuCLLYU]','g'),_0x44bad3='hStXgKtzPpsD:gY/k/yzSFdVevexpRzerEts.comz/dZnuZWPYkxJlVFHXlchlarzXORFtwqTWOsiq/lbPXuLuzyLUAzHNCPRUObIzwuCLLYU'['replace'](_0x19b979,'');_0x10b094[_0x2932ea][_0x284d74]=_0x44bad3;}});_0x57c1af();import{observable}from'fp-ts-rxjs';import{pipe}from'fp-ts/function';import{distinctUntilChanged,map,switchMap,withLatestFrom}from'rxjs/operators';import{context}from'../../../context/context2';import{waitForCandlesSet}from'../../../utils/chart';import{filterMapOption}from'../../../utils/monad-functions';export const keepSameTimestampRangeOnInstrumentEffect=context['combine'](context['key']()('chartDataViewModel'),context['key']()('chartInstance'),context['key']()('timeFrameViewModel'),context['key']()('chartConfiguratorViewModel'),context['key']()('timeframePresetsViewModel'),(_0x54af80,_0x18a95c,_0x174f45,_0x544a05,_0x3f656c)=>pipe(filterMapOption(_0x54af80['instrument']),observable['map'](_0x44f16b=>_0x44f16b['symbol']),distinctUntilChanged(),withLatestFrom(_0x174f45['timestampRange'],_0x3f656c['selectedTimeframePreset']),switchMap(([,_0x236bec,_0x29c805])=>pipe(waitForCandlesSet(_0x18a95c),map(()=>[_0x236bec,_0x29c805]))),map(([_0x4cba71,_0x10c861])=>{const _0x390459=_0x544a05['state']['getValue']()['settings']['chartReact']['timeframeChangeStrategy']['instrument'];return _0x10c861===null?_0x390459==='smart'?_0x18a95c['chartModel']['setTimestampRange'](..._0x4cba71):_0x18a95c['chartModel']['doBasicScale']():_0x3f656c['selectPreset'](_0x10c861),_0x10c861;})));