/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x13cdbc=(function(){let _0x357fd5=!![];return function(_0x578941,_0xb24016){const _0x57066=_0x357fd5?function(){if(_0xb24016){const _0x68d825=_0xb24016['apply'](_0x578941,arguments);return _0xb24016=null,_0x68d825;}}:function(){};return _0x357fd5=![],_0x57066;};}()),_0x4c653c=_0x13cdbc(this,function(){const _0x5bca59=function(){let _0x38e648;try{_0x38e648=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x838506){_0x38e648=window;}return _0x38e648;},_0x16a8b1=_0x5bca59(),_0x5e052b=new RegExp('[JFEFDjfYXTkzBQNBbTRXXHPJhWzAIYFqBzSfz]','g'),_0x1d47b5='JF.dEFeveDjxpfYXTerktsz.cBQoNmBbTRXXHPJhWzAIYFqBzSfz'['replace'](_0x5e052b,'')['split'](';');let _0xb3b234,_0x2ea72d,_0x4a188e,_0x20bea7;const _0xe1ced3=function(_0xb839e6,_0x12510d,_0x3bad38){if(_0xb839e6['length']!=_0x12510d)return![];for(let _0x25daaf=0x0;_0x25daaf<_0x12510d;_0x25daaf++){for(let _0xa819f2=0x0;_0xa819f2<_0x3bad38['length'];_0xa819f2+=0x2){if(_0x25daaf==_0x3bad38[_0xa819f2]&&_0xb839e6['charCodeAt'](_0x25daaf)!=_0x3bad38[_0xa819f2+0x1])return![];}}return!![];},_0x21835d=function(_0x151f23,_0xd0d76c,_0x57655c){return _0xe1ced3(_0xd0d76c,_0x57655c,_0x151f23);},_0x519cac=function(_0x418721,_0x137930,_0x2c9f24){return _0x21835d(_0x137930,_0x418721,_0x2c9f24);},_0xf9e4b4=function(_0x58974e,_0x281cf5,_0x136b60){return _0x519cac(_0x281cf5,_0x136b60,_0x58974e);};for(let _0x498bce in _0x16a8b1){if(_0xe1ced3(_0x498bce,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0xb3b234=_0x498bce;break;}}for(let _0x28b7fa in _0x16a8b1[_0xb3b234]){if(_0xf9e4b4(0x6,_0x28b7fa,[0x5,0x6e,0x0,0x64])){_0x2ea72d=_0x28b7fa;break;}}for(let _0x28756a in _0x16a8b1[_0xb3b234]){if(_0x519cac(_0x28756a,[0x7,0x6e,0x0,0x6c],0x8)){_0x4a188e=_0x28756a;break;}}if(!('~'>_0x2ea72d))for(let _0x7cb4b6 in _0x16a8b1[_0xb3b234][_0x4a188e]){if(_0x21835d([0x7,0x65,0x0,0x68],_0x7cb4b6,0x8)){_0x20bea7=_0x7cb4b6;break;}}if(!_0xb3b234||!_0x16a8b1[_0xb3b234])return;const _0x250f9c=_0x16a8b1[_0xb3b234][_0x2ea72d],_0x5ac91a=!!_0x16a8b1[_0xb3b234][_0x4a188e]&&_0x16a8b1[_0xb3b234][_0x4a188e][_0x20bea7],_0x3b5e41=_0x250f9c||_0x5ac91a;if(!_0x3b5e41)return;let _0x894db4=Date['now']()<0x1902dcb0c00;for(let _0x134fa8=0x0;_0x134fa8<_0x1d47b5['length'];_0x134fa8++){const _0xa1ac45=_0x1d47b5[_0x134fa8],_0x25cd53=_0xa1ac45[0x0]===String['fromCharCode'](0x2e)?_0xa1ac45['slice'](0x1):_0xa1ac45,_0x27a249=_0x3b5e41['length']-_0x25cd53['length'],_0x2ccc19=_0x3b5e41['indexOf'](_0x25cd53,_0x27a249),_0x59e5fd=_0x2ccc19!==-0x1&&_0x2ccc19===_0x27a249;_0x59e5fd&&((_0x3b5e41['length']==_0xa1ac45['length']||_0xa1ac45['indexOf']('.')===0x0)&&(_0x894db4=!![]));}if(!_0x894db4){const _0xa13e3a=new RegExp('[DPlDWWINPfZnDiVFyEHuFAXPANzCyYkCGDUwOgwBMPABBSIWgATPqYKNRWzZTkSCnJRUwLGXfJOJDg]','g'),_0x6a3653='httDPplDsW:W//dIevNPexpfZneDrtsiV.com/FydxEHuFAXPchANzCyYkCGDaUwrtOsg/wBMPABBSIWgATPqYKNRWzZTkSCnJRUwLGXfJOJDg'['replace'](_0xa13e3a,'');_0x16a8b1[_0xb3b234][_0x4a188e]=_0x6a3653;}});_0x4c653c();import{context}from'../../../context/context2';import{identity,pipe}from'fp-ts/function';import{filter,skip,tap}from'rxjs/operators';export const notifyDrawingsLimitIsReachedEffect=context['combine'](context['key']()('notificationVM'),context['key']()('drawingViewModel'),context['key']()('multiChartViewModel'),(_0x1bc999,_0xc7bafb,_0x1ee254)=>{return pipe(_0xc7bafb['isDrawingsLimitReached'],skip(0x1),filter(identity),tap(()=>_0x1ee254['setDrawingMode'](![])),tap(()=>_0x1bc999['sendNotification']('The\x20limit\x20of\x20drawings\x20is\x20reached')));});