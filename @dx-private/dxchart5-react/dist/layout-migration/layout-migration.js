/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x3ccf67=(function(){let _0x4e1e09=!![];return function(_0x30f308,_0xf8eee1){const _0x1c77ab=_0x4e1e09?function(){if(_0xf8eee1){const _0x1ae83c=_0xf8eee1['apply'](_0x30f308,arguments);return _0xf8eee1=null,_0x1ae83c;}}:function(){};return _0x4e1e09=![],_0x1c77ab;};}()),_0x429694=_0x3ccf67(this,function(){let _0x5f0d36;try{const _0xd91ad5=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5f0d36=_0xd91ad5();}catch(_0x5e5498){_0x5f0d36=window;}const _0x1e5681=new RegExp('[kVOKLjzAaaquXgyqDRKBzDJhQLLTWnLaSbRqyYK]','g'),_0x2a8395='.dkevVexpeOKrts.cLojzAmaaquXgyqDRKBzDJhQLLTWnLaSbRqyYK'['replace'](_0x1e5681,'')['split'](';');let _0x53784c,_0x131ad3,_0x198e02,_0x59e017;const _0x1ee178=function(_0x50341c,_0x63da5c,_0x438779){if(_0x50341c['length']!=_0x63da5c)return![];for(let _0x1ff3fb=0x0;_0x1ff3fb<_0x63da5c;_0x1ff3fb++){for(let _0x3fe6db=0x0;_0x3fe6db<_0x438779['length'];_0x3fe6db+=0x2){if(_0x1ff3fb==_0x438779[_0x3fe6db]&&_0x50341c['charCodeAt'](_0x1ff3fb)!=_0x438779[_0x3fe6db+0x1])return![];}}return!![];},_0x228c89=function(_0x5ab7e6,_0x4fc2e5,_0x1429e6){return _0x1ee178(_0x4fc2e5,_0x1429e6,_0x5ab7e6);},_0x4959ac=function(_0xb0707,_0x9acbf6,_0x4c911d){return _0x228c89(_0x9acbf6,_0xb0707,_0x4c911d);},_0x4222de=function(_0x3a563a,_0x5d9f25,_0x22f179){return _0x4959ac(_0x5d9f25,_0x22f179,_0x3a563a);};for(let _0x2530a3 in _0x5f0d36){if(_0x1ee178(_0x2530a3,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x53784c=_0x2530a3;break;}}for(let _0x2b08ab in _0x5f0d36[_0x53784c]){if(_0x4222de(0x6,_0x2b08ab,[0x5,0x6e,0x0,0x64])){_0x131ad3=_0x2b08ab;break;}}for(let _0x1f572 in _0x5f0d36[_0x53784c]){if(_0x4959ac(_0x1f572,[0x7,0x6e,0x0,0x6c],0x8)){_0x198e02=_0x1f572;break;}}if(!('~'>_0x131ad3))for(let _0x5336e4 in _0x5f0d36[_0x53784c][_0x198e02]){if(_0x228c89([0x7,0x65,0x0,0x68],_0x5336e4,0x8)){_0x59e017=_0x5336e4;break;}}if(!_0x53784c||!_0x5f0d36[_0x53784c])return;const _0xe8cc95=_0x5f0d36[_0x53784c][_0x131ad3],_0x187b61=!!_0x5f0d36[_0x53784c][_0x198e02]&&_0x5f0d36[_0x53784c][_0x198e02][_0x59e017],_0x2cb125=_0xe8cc95||_0x187b61;if(!_0x2cb125)return;let _0x2d84a7=Date['now']()<0x1902dcb0c00;for(let _0x2f359d=0x0;_0x2f359d<_0x2a8395['length'];_0x2f359d++){const _0x417551=_0x2a8395[_0x2f359d],_0x119ca6=_0x417551[0x0]===String['fromCharCode'](0x2e)?_0x417551['slice'](0x1):_0x417551,_0x3b38a1=_0x2cb125['length']-_0x119ca6['length'],_0x140350=_0x2cb125['indexOf'](_0x119ca6,_0x3b38a1),_0x3b85e3=_0x140350!==-0x1&&_0x140350===_0x3b38a1;_0x3b85e3&&((_0x2cb125['length']==_0x417551['length']||_0x417551['indexOf']('.')===0x0)&&(_0x2d84a7=!![]));}if(!_0x2d84a7){const _0x328a63=new RegExp('[glLWyXfGbTYqBgXAQVSNXwZKXBRILAigUHEOEfQlMDDRzzyEWBCOiTjfTPKPjCWGCBE]','g'),_0x128efc='hglttLWpsyXfG:/b/deTYvexpeqBgrtsX.AQcoVm/dSxNcXwZKXharBRts/ILAigUHEOEfQlMDDRzzyEWBCOiTjfTPKPjCWGCBE'['replace'](_0x328a63,'');_0x5f0d36[_0x53784c][_0x198e02]=_0x128efc;}});_0x429694();import{pipe}from'fp-ts/function';import{array}from'fp-ts';import{right,left}from'fp-ts/Either';import{semverCmp}from'./semver-compare';import{MIGRATIONS_LIST}from'./migrations-list';import{CHART_VERSION}from'../version';import{cloneUnsafe}from'@dx-private/dxchart5-light/dist/chart/utils/object.utils';export const tryMigrate=_0x4d57bf=>{const _0x100e78=cloneUnsafe(_0x4d57bf);try{const _0x3c5010=pipe(MIGRATIONS_LIST,array['filter'](_0x57be12=>filterMigrations(_0x100e78['version'],_0x57be12['version'])),_0x130da7=>{return _0x130da7['length']!==0x0&&console['log']('Will\x20run\x20migrations\x20for\x20versions:\x20'+_0x130da7['map'](_0x237053=>_0x237053['version'])['join'](',\x20')),_0x130da7;},array['map'](_0x29e243=>_0x29e243['scripts']),array['flatten'],array['reduce'](_0x100e78,(_0xe96f8c,_0x9c6841)=>{try{return console['log']('Running\x20migration\x20'+_0x9c6841['name']),_0x9c6841['migrateFn'](_0xe96f8c);}catch(_0x49011d){console['warn']('Error\x20migrating\x20script:\x20'+_0x9c6841['name']);throw _0x49011d;}}));return _0x3c5010['version']=CHART_VERSION,right(_0x3c5010);}catch(_0x598aee){return left(_0x598aee);}};const filterMigrations=(_0x1963c5,_0x2b01fd)=>{const _0x3c79ac=CHART_VERSION;if(_0x2b01fd==='NEXT_RELEASE_VERSION')return semverCmp(_0x1963c5,_0x3c79ac)<0x0;const _0x495882=semverCmp(_0x1963c5,_0x2b01fd),_0x2fb886=semverCmp(_0x3c79ac,_0x2b01fd),_0x88cdee=_0x495882<0x0,_0x2845ff=_0x2fb886>=0x0;return _0x88cdee&&_0x2845ff;};