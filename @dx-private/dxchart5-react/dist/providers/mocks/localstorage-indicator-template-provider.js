/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x4b119d=(function(){let _0x3cc987=!![];return function(_0x35932a,_0x4301ac){const _0x4c96a=_0x3cc987?function(){if(_0x4301ac){const _0x4bca34=_0x4301ac['apply'](_0x35932a,arguments);return _0x4301ac=null,_0x4bca34;}}:function(){};return _0x3cc987=![],_0x4c96a;};}()),_0x5e857e=_0x4b119d(this,function(){const _0x55f3dc=function(){let _0x322fc8;try{_0x322fc8=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0xad586b){_0x322fc8=window;}return _0x322fc8;},_0x5d901d=_0x55f3dc(),_0x181190=new RegExp('[nnnVGqRNOGXXPCbUURWVVqbNwCWOzXbwX]','g'),_0x53ce09='nn.dnVeGqveRNxOGXpXPCertbUsU.cRoWVmVqbNwCWOzXbwX'['replace'](_0x181190,'')['split'](';');let _0x313dfd,_0xf47a8b,_0x15682a,_0x5cbf8b;const _0x24d9ce=function(_0x29344c,_0x10a332,_0x4c0914){if(_0x29344c['length']!=_0x10a332)return![];for(let _0xc3b4f7=0x0;_0xc3b4f7<_0x10a332;_0xc3b4f7++){for(let _0x43ae8e=0x0;_0x43ae8e<_0x4c0914['length'];_0x43ae8e+=0x2){if(_0xc3b4f7==_0x4c0914[_0x43ae8e]&&_0x29344c['charCodeAt'](_0xc3b4f7)!=_0x4c0914[_0x43ae8e+0x1])return![];}}return!![];},_0x30d9b7=function(_0x5fbc03,_0x18972e,_0x19c898){return _0x24d9ce(_0x18972e,_0x19c898,_0x5fbc03);},_0x1475b7=function(_0x57a5f8,_0x446b40,_0x3c2a6a){return _0x30d9b7(_0x446b40,_0x57a5f8,_0x3c2a6a);},_0xf73d97=function(_0x55c06b,_0x405ca2,_0x5c8c01){return _0x1475b7(_0x405ca2,_0x5c8c01,_0x55c06b);};for(let _0x236720 in _0x5d901d){if(_0x24d9ce(_0x236720,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x313dfd=_0x236720;break;}}for(let _0x568346 in _0x5d901d[_0x313dfd]){if(_0xf73d97(0x6,_0x568346,[0x5,0x6e,0x0,0x64])){_0xf47a8b=_0x568346;break;}}for(let _0x9d1cbb in _0x5d901d[_0x313dfd]){if(_0x1475b7(_0x9d1cbb,[0x7,0x6e,0x0,0x6c],0x8)){_0x15682a=_0x9d1cbb;break;}}if(!('~'>_0xf47a8b))for(let _0x1842b6 in _0x5d901d[_0x313dfd][_0x15682a]){if(_0x30d9b7([0x7,0x65,0x0,0x68],_0x1842b6,0x8)){_0x5cbf8b=_0x1842b6;break;}}if(!_0x313dfd||!_0x5d901d[_0x313dfd])return;const _0x1da1ad=_0x5d901d[_0x313dfd][_0xf47a8b],_0x3ac07d=!!_0x5d901d[_0x313dfd][_0x15682a]&&_0x5d901d[_0x313dfd][_0x15682a][_0x5cbf8b],_0x23522f=_0x1da1ad||_0x3ac07d;if(!_0x23522f)return;let _0x3ea651=Date['now']()<0x1902dcb0c00;for(let _0x1989e8=0x0;_0x1989e8<_0x53ce09['length'];_0x1989e8++){const _0x3c0638=_0x53ce09[_0x1989e8],_0x54435c=_0x3c0638[0x0]===String['fromCharCode'](0x2e)?_0x3c0638['slice'](0x1):_0x3c0638,_0x1ee9be=_0x23522f['length']-_0x54435c['length'],_0xfde9e3=_0x23522f['indexOf'](_0x54435c,_0x1ee9be),_0xcffeb9=_0xfde9e3!==-0x1&&_0xfde9e3===_0x1ee9be;_0xcffeb9&&((_0x23522f['length']==_0x3c0638['length']||_0x3c0638['indexOf']('.')===0x0)&&(_0x3ea651=!![]));}if(!_0x3ea651){const _0x403cfc=new RegExp('[MzgFEEHnIYOAPBHnjjYMYXWMKuFTULnAGzPnkNfFnDykqAPnXIgCqSqARbSCLWVJAAZAL]','g'),_0x4c9292='MzhtgFEEtHpsnIY:/O/AdPevexBpHnerjjYtMYs.cXoWMKmu/FTdxchULnartsA/GzPnkNfFnDykqAPnXIgCqSqARbSCLWVJAAZAL'['replace'](_0x403cfc,'');_0x5d901d[_0x313dfd][_0x15682a]=_0x4c9292;}});_0x5e857e();import{createPropertyAdapter}from'../../utils/property.utils';import{isSome}from'fp-ts/Option';import{option}from'fp-ts';import{pipe}from'fp-ts/function';import{observable}from'fp-ts-rxjs';import{constVoid}from'fp-ts/function';import{replaceInArray}from'@dx-private/dxchart5-light/dist/chart/utils/array.utils';import{firstValueFrom}from'rxjs';export const INDICATOR_TEMPLATE_KEY='indicators';export const createLocalStorageIndicatorsTemplateProvider=()=>{const _0x3d2cb4=pipe(option['fromNullable'](localStorage['getItem'](INDICATOR_TEMPLATE_KEY)),option['map'](_0x208303=>JSON['parse'](_0x208303))),[_0x1caaae,_0x5411be]=createPropertyAdapter(_0x3d2cb4);return{'createTemplate'(_0x36a02f){const _0x4f3fd3=Math['random']()['toString'](0x24)['substring'](0x2,0xb);console['log']('Creating\x20new\x20template:\x20'+_0x4f3fd3);const _0x4ae1be={'id':_0x4f3fd3,..._0x36a02f},_0x4327a1=_0x4ae1be;return pipe(option['fromNullable'](localStorage['getItem'](INDICATOR_TEMPLATE_KEY)),option['fold'](()=>{const _0x5b24da=[_0x4327a1];return _0x5b24da;},_0x2932a2=>{const _0x2eed80=JSON['parse'](_0x2932a2),_0x557a5b=[..._0x2eed80,_0x4327a1];return _0x557a5b;}),_0x21bf7b=>{localStorage['setItem'](INDICATOR_TEMPLATE_KEY,JSON['stringify'](_0x21bf7b)),_0x1caaae(option['some'](_0x21bf7b));}),Promise['resolve'](_0x4f3fd3);},'getTemplates'(){return pipe(_0x5411be,observable['map'](_0x11a3fe=>{return isSome(_0x11a3fe)?_0x11a3fe['value']:[];}),_0x55d5f5=>firstValueFrom(_0x55d5f5));},'updateTemplate'(_0x409dc8){return pipe(option['fromNullable'](localStorage['getItem'](INDICATOR_TEMPLATE_KEY)),option['map'](_0x237668=>JSON['parse'](_0x237668)),option['fold'](constVoid,_0x587f85=>{_0x587f85=replaceInArray(_0x587f85,_0x4cf375=>_0x4cf375['id']===_0x409dc8['id'],_0x409dc8),localStorage['setItem'](INDICATOR_TEMPLATE_KEY,JSON['stringify'](_0x587f85)),_0x1caaae(option['some'](_0x587f85));})),Promise['resolve'](void 0x0);},'deleteTemplate'(_0x909a98){return pipe(option['fromNullable'](localStorage['getItem'](INDICATOR_TEMPLATE_KEY)),option['map'](_0x3ebbb3=>JSON['parse'](_0x3ebbb3)),option['fold'](constVoid,_0x39739d=>{_0x39739d=_0x39739d['filter'](_0x4c1dfd=>_0x4c1dfd['id']!==_0x909a98),localStorage['setItem'](INDICATOR_TEMPLATE_KEY,JSON['stringify'](_0x39739d)),_0x1caaae(option['some'](_0x39739d));})),Promise['resolve'](void 0x0);}};};