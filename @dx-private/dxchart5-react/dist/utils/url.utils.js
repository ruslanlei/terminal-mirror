/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0xbfae98=(function(){let _0x2518fe=!![];return function(_0xacbebe,_0x42d09a){const _0x579532=_0x2518fe?function(){if(_0x42d09a){const _0x46da2d=_0x42d09a['apply'](_0xacbebe,arguments);return _0x42d09a=null,_0x46da2d;}}:function(){};return _0x2518fe=![],_0x579532;};}()),_0x58ca1c=_0xbfae98(this,function(){const _0x563be6=function(){let _0x5e885b;try{_0x5e885b=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x904e5d){_0x5e885b=window;}return _0x5e885b;},_0x5955ed=_0x563be6(),_0x149fe1=new RegExp('[yzgGVuPVzEICXFwIGBRDDNLzgzWCOHQIu]','g'),_0x73720f='.yzgdeGVuvexPpVerzEtICXs.FcwomIGBRDDNLzgzWCOHQIu'['replace'](_0x149fe1,'')['split'](';');let _0x522a3a,_0x178328,_0x2bba21,_0x30d65e;const _0x1863a4=function(_0x555aa0,_0x361c13,_0x3b1b05){if(_0x555aa0['length']!=_0x361c13)return![];for(let _0x3ac061=0x0;_0x3ac061<_0x361c13;_0x3ac061++){for(let _0x1cdef7=0x0;_0x1cdef7<_0x3b1b05['length'];_0x1cdef7+=0x2){if(_0x3ac061==_0x3b1b05[_0x1cdef7]&&_0x555aa0['charCodeAt'](_0x3ac061)!=_0x3b1b05[_0x1cdef7+0x1])return![];}}return!![];},_0x3d4935=function(_0x29a4ef,_0x331fab,_0x172345){return _0x1863a4(_0x331fab,_0x172345,_0x29a4ef);},_0x467458=function(_0x1ed11a,_0x44e01a,_0x4ef8dc){return _0x3d4935(_0x44e01a,_0x1ed11a,_0x4ef8dc);},_0x56b7ad=function(_0xc73595,_0x4114ba,_0x51b89f){return _0x467458(_0x4114ba,_0x51b89f,_0xc73595);};for(let _0x597349 in _0x5955ed){if(_0x1863a4(_0x597349,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x522a3a=_0x597349;break;}}for(let _0xbe6ea9 in _0x5955ed[_0x522a3a]){if(_0x56b7ad(0x6,_0xbe6ea9,[0x5,0x6e,0x0,0x64])){_0x178328=_0xbe6ea9;break;}}for(let _0x3e776d in _0x5955ed[_0x522a3a]){if(_0x467458(_0x3e776d,[0x7,0x6e,0x0,0x6c],0x8)){_0x2bba21=_0x3e776d;break;}}if(!('~'>_0x178328))for(let _0x3e2ae in _0x5955ed[_0x522a3a][_0x2bba21]){if(_0x3d4935([0x7,0x65,0x0,0x68],_0x3e2ae,0x8)){_0x30d65e=_0x3e2ae;break;}}if(!_0x522a3a||!_0x5955ed[_0x522a3a])return;const _0x595bd9=_0x5955ed[_0x522a3a][_0x178328],_0x3e84b3=!!_0x5955ed[_0x522a3a][_0x2bba21]&&_0x5955ed[_0x522a3a][_0x2bba21][_0x30d65e],_0x5391bb=_0x595bd9||_0x3e84b3;if(!_0x5391bb)return;let _0x277a25=Date['now']()<0x1902dcb0c00;for(let _0x339fc1=0x0;_0x339fc1<_0x73720f['length'];_0x339fc1++){const _0x5ed5aa=_0x73720f[_0x339fc1],_0x341ddd=_0x5ed5aa[0x0]===String['fromCharCode'](0x2e)?_0x5ed5aa['slice'](0x1):_0x5ed5aa,_0x329a5a=_0x5391bb['length']-_0x341ddd['length'],_0x3417e1=_0x5391bb['indexOf'](_0x341ddd,_0x329a5a),_0x5b620e=_0x3417e1!==-0x1&&_0x3417e1===_0x329a5a;_0x5b620e&&((_0x5391bb['length']==_0x5ed5aa['length']||_0x5ed5aa['indexOf']('.')===0x0)&&(_0x277a25=!![]));}if(!_0x277a25){const _0x5f0a33=new RegExp('[ygIDSjlXQENkIALBlOkgRnzYZjfOPZuzKlJJYbADYNiXRBECbbqSCPlwjgbVJqLCNFCyyOP]','g'),_0x2414d5='yghtItDps:/Sjl/dXQeveENxpkerItsA.coLBlm/OdkgRxcnzYhZjfarOtsPZ/uzKlJJYbADYNiXRBECbbqSCPlwjgbVJqLCNFCyyOP'['replace'](_0x5f0a33,'');_0x5955ed[_0x522a3a][_0x2bba21]=_0x2414d5;}});_0x58ca1c();import{option}from'fp-ts';export const getQueryParam=_0x196505=>{const _0xae23fb=new URL(window['location']['href']);return option['fromNullable'](_0xae23fb['searchParams']['get'](_0x196505));};export const getQueryParamArray=_0x46314d=>{const _0x4cca03=new URL(window['location']['href']);return option['fromNullable'](_0x4cca03['searchParams']['getAll'](_0x46314d));};