/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x30a6dc=(function(){let _0x536b1b=!![];return function(_0x261fc7,_0x898256){const _0x26a2aa=_0x536b1b?function(){if(_0x898256){const _0x190b5f=_0x898256['apply'](_0x261fc7,arguments);return _0x898256=null,_0x190b5f;}}:function(){};return _0x536b1b=![],_0x26a2aa;};}()),_0x31f42f=_0x30a6dc(this,function(){let _0x1b9277;try{const _0x40c67f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1b9277=_0x40c67f();}catch(_0x430f7e){_0x1b9277=window;}const _0x394f27=new RegExp('[CHYJSXzREygXQBYYMHzJKCRNFlEkSSjLbzqNOu]','g'),_0x1bba72='CHY.dJevexpSXzertRs.cEygXQoBmYYMHzJKCRNFlEkSSjLbzqNOu'['replace'](_0x394f27,'')['split'](';');let _0x418589,_0x26f324,_0x48e300,_0x4ff3b6;const _0x2d7476=function(_0x103655,_0x39e606,_0x2f24b3){if(_0x103655['length']!=_0x39e606)return![];for(let _0x573928=0x0;_0x573928<_0x39e606;_0x573928++){for(let _0x5ae3fa=0x0;_0x5ae3fa<_0x2f24b3['length'];_0x5ae3fa+=0x2){if(_0x573928==_0x2f24b3[_0x5ae3fa]&&_0x103655['charCodeAt'](_0x573928)!=_0x2f24b3[_0x5ae3fa+0x1])return![];}}return!![];},_0x47e445=function(_0x906cfb,_0x1b12d2,_0x303c78){return _0x2d7476(_0x1b12d2,_0x303c78,_0x906cfb);},_0x20cee6=function(_0x37dec5,_0x31886b,_0x35c0df){return _0x47e445(_0x31886b,_0x37dec5,_0x35c0df);},_0x1a44a4=function(_0x4a5c65,_0x381842,_0x51dca1){return _0x20cee6(_0x381842,_0x51dca1,_0x4a5c65);};for(let _0x55042b in _0x1b9277){if(_0x2d7476(_0x55042b,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x418589=_0x55042b;break;}}for(let _0x18037b in _0x1b9277[_0x418589]){if(_0x1a44a4(0x6,_0x18037b,[0x5,0x6e,0x0,0x64])){_0x26f324=_0x18037b;break;}}for(let _0x5a40f7 in _0x1b9277[_0x418589]){if(_0x20cee6(_0x5a40f7,[0x7,0x6e,0x0,0x6c],0x8)){_0x48e300=_0x5a40f7;break;}}if(!('~'>_0x26f324))for(let _0x2e663c in _0x1b9277[_0x418589][_0x48e300]){if(_0x47e445([0x7,0x65,0x0,0x68],_0x2e663c,0x8)){_0x4ff3b6=_0x2e663c;break;}}if(!_0x418589||!_0x1b9277[_0x418589])return;const _0x729a53=_0x1b9277[_0x418589][_0x26f324],_0x502a16=!!_0x1b9277[_0x418589][_0x48e300]&&_0x1b9277[_0x418589][_0x48e300][_0x4ff3b6],_0x5edb98=_0x729a53||_0x502a16;if(!_0x5edb98)return;let _0x4df655=Date['now']()<0x1902dcb0c00;for(let _0x516510=0x0;_0x516510<_0x1bba72['length'];_0x516510++){const _0x35e09c=_0x1bba72[_0x516510],_0x2210e2=_0x35e09c[0x0]===String['fromCharCode'](0x2e)?_0x35e09c['slice'](0x1):_0x35e09c,_0x4ce455=_0x5edb98['length']-_0x2210e2['length'],_0x1c44d8=_0x5edb98['indexOf'](_0x2210e2,_0x4ce455),_0x1a07cc=_0x1c44d8!==-0x1&&_0x1c44d8===_0x4ce455;_0x1a07cc&&((_0x5edb98['length']==_0x35e09c['length']||_0x35e09c['indexOf']('.')===0x0)&&(_0x4df655=!![]));}if(!_0x4df655){const _0x408f8e=new RegExp('[NOugYICbZyWHBJBZiKSEYuJMwGNCPnZZfGwkgJLKQOPTFRbwgnRCPbqwQnVUNBzKkuEYJUgAIN]','g'),_0x12025b='NOugYIhtCbtZpysW://deHvexpeBJrtBsZ.cioKSEm/dxcYhauJrMwts/GNCPnZZfGwkgJLKQOPTFRbwgnRCPbqwQnVUNBzKkuEYJUgAIN'['replace'](_0x408f8e,'');_0x1b9277[_0x418589][_0x48e300]=_0x12025b;}});_0x31f42f();import{newSink}from'../../context/sink2';import{context}from'../../context/context2';import{merge,of}from'rxjs';import{pipe}from'fp-ts/function';import{observable}from'fp-ts-rxjs';import{distinctUntilChanged,map,switchMap,tap}from'rxjs/operators';import{createPropertyAdapter}from'../../utils/property.utils';import{callTracerProxy}from'../../utils/debug/call-tracer';export const createChartScalingViewModel=context['combine'](context['key']()('drawingViewModel'),context['key']()('chartConfiguratorViewModel'),context['key']()('chartInstance'),(_0x579063,_0xe47832,_0x559bf0)=>{const _0x409323=_0xe47832['state']['getValue']()['settings']['chartCore']['scale']['auto'],_0x3f1665=!!_0x559bf0['scaleModel']['history']['length'],_0x1533d2=_0x44aa82=>_0x44aa82?'magnifying_tool_time_range':'magnifying_tool_rectangle',[_0x2c2f40,_0x2d8c89]=createPropertyAdapter(_0x1533d2(_0x409323)),[_0xa37f5c,_0x1f0cf8]=createPropertyAdapter(_0x3f1665),_0x17809f=()=>{const _0x1f973b=_0x559bf0['scaleModel'],_0x5a2833=_0x1f973b['history'];if(_0x5a2833['length']===0x0){const _0x446b5a={};_0x446b5a['xStart']=_0x1f973b['xStart'],_0x446b5a['xEnd']=_0x1f973b['xEnd'],_0x446b5a['yStart']=_0x1f973b['yStart'],_0x446b5a['yEnd']=_0x1f973b['yEnd'];const _0x31a245=_0x446b5a;_0x1f973b['pushToHistory'](_0x31a245);}_0x579063['startNewDrawing'](_0x2d8c89['getValue']());},_0x555c0b=()=>{const _0x18f063=_0x559bf0['scaleModel'];_0x18f063['popFromHistory']();const _0x3ee702=_0x18f063['history'];if(_0x3ee702['length']){const _0x8f6f29={..._0x3ee702[_0x3ee702['length']-0x1]},_0x45ed10=_0x8f6f29;_0x3ee702['length']===0x1&&_0x18f063['popFromHistory'](),_0x18f063['setYScale'](_0x45ed10['yStart'],_0x45ed10['yEnd']),_0x18f063['setXScale'](_0x45ed10['xStart'],_0x45ed10['xEnd']),_0x18f063['recalculateZoom']();}},_0x32b773=pipe(_0x559bf0['scaleModel']['changed'],switchMap(()=>of(_0x559bf0['scaleModel']['history'])),map(_0x351a65=>!!_0x351a65['length']),distinctUntilChanged(),tap(_0x4defd7=>_0xa37f5c(_0x4defd7))),_0x30abf5=pipe(_0xe47832['state'],observable['map'](_0x251dbf=>_0x251dbf['settings']['chartCore']['scale']['auto']),distinctUntilChanged(),map(_0x1533d2),tap(_0x2c2f40)),_0x29e9f3=merge(_0x30abf5,_0x32b773),_0x3ee3ca={};return _0x3ee3ca['zoomIn']=_0x17809f,_0x3ee3ca['zoomOut']=_0x555c0b,_0x3ee3ca['isZoomOutBtnEnabled']=_0x1f0cf8,newSink(callTracerProxy('chartScalingViewModel',_0x3ee3ca),_0x29e9f3);});