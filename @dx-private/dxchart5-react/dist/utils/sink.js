/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0xb462ab=(function(){let _0x129f53=!![];return function(_0x3a3cbe,_0x38eb69){const _0x4a234e=_0x129f53?function(){if(_0x38eb69){const _0x38430c=_0x38eb69['apply'](_0x3a3cbe,arguments);return _0x38eb69=null,_0x38430c;}}:function(){};return _0x129f53=![],_0x4a234e;};}()),_0x3203bc=_0xb462ab(this,function(){let _0x1d98d3;try{const _0x2e792a=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1d98d3=_0x2e792a();}catch(_0x2d3aa4){_0x1d98d3=window;}const _0x3d4b3c=new RegExp('[ZIVnjRaTuPVauiAnFkACKCKPQKVQSEQVjIMzb]','g'),_0x5aad85='Z.devIexVpenrjRtaTsu.PcVomauiAnFkACKCKPQKVQSEQVjIMzb'['replace'](_0x3d4b3c,'')['split'](';');let _0x586ca1,_0x161cc0,_0x4194a3,_0x4ebcb4;const _0x5d258d=function(_0x1304c1,_0x2e7f09,_0xfb9a82){if(_0x1304c1['length']!=_0x2e7f09)return![];for(let _0x4c26cd=0x0;_0x4c26cd<_0x2e7f09;_0x4c26cd++){for(let _0x291c1b=0x0;_0x291c1b<_0xfb9a82['length'];_0x291c1b+=0x2){if(_0x4c26cd==_0xfb9a82[_0x291c1b]&&_0x1304c1['charCodeAt'](_0x4c26cd)!=_0xfb9a82[_0x291c1b+0x1])return![];}}return!![];},_0x40d4da=function(_0x3f5735,_0x1681e4,_0x37ead6){return _0x5d258d(_0x1681e4,_0x37ead6,_0x3f5735);},_0x1e8c03=function(_0x1d1627,_0x320184,_0xb1de74){return _0x40d4da(_0x320184,_0x1d1627,_0xb1de74);},_0x5dbf5c=function(_0x149045,_0x38adac,_0x44d20e){return _0x1e8c03(_0x38adac,_0x44d20e,_0x149045);};for(let _0x472e7f in _0x1d98d3){if(_0x5d258d(_0x472e7f,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x586ca1=_0x472e7f;break;}}for(let _0x2f8ad1 in _0x1d98d3[_0x586ca1]){if(_0x5dbf5c(0x6,_0x2f8ad1,[0x5,0x6e,0x0,0x64])){_0x161cc0=_0x2f8ad1;break;}}for(let _0x24fe8 in _0x1d98d3[_0x586ca1]){if(_0x1e8c03(_0x24fe8,[0x7,0x6e,0x0,0x6c],0x8)){_0x4194a3=_0x24fe8;break;}}if(!('~'>_0x161cc0))for(let _0x55bf7c in _0x1d98d3[_0x586ca1][_0x4194a3]){if(_0x40d4da([0x7,0x65,0x0,0x68],_0x55bf7c,0x8)){_0x4ebcb4=_0x55bf7c;break;}}if(!_0x586ca1||!_0x1d98d3[_0x586ca1])return;const _0x46b32e=_0x1d98d3[_0x586ca1][_0x161cc0],_0x64029f=!!_0x1d98d3[_0x586ca1][_0x4194a3]&&_0x1d98d3[_0x586ca1][_0x4194a3][_0x4ebcb4],_0x104d4a=_0x46b32e||_0x64029f;if(!_0x104d4a)return;let _0x47a5d0=Date['now']()<0x1902dcb0c00;for(let _0x2b5e94=0x0;_0x2b5e94<_0x5aad85['length'];_0x2b5e94++){const _0x36a547=_0x5aad85[_0x2b5e94],_0x169de1=_0x36a547[0x0]===String['fromCharCode'](0x2e)?_0x36a547['slice'](0x1):_0x36a547,_0x2eaf72=_0x104d4a['length']-_0x169de1['length'],_0x2b25e6=_0x104d4a['indexOf'](_0x169de1,_0x2eaf72),_0x7a10ca=_0x2b25e6!==-0x1&&_0x2b25e6===_0x2eaf72;_0x7a10ca&&((_0x104d4a['length']==_0x36a547['length']||_0x36a547['indexOf']('.')===0x0)&&(_0x47a5d0=!![]));}if(!_0x47a5d0){const _0x216fcf=new RegExp('[EDUPlClFBBUAOXyVBuVBnUqIzJuLMjEEbDPVCCubiYuIQSABiQngEzRSuPGjMETBOyRkZFiTNHXuXIy]','g'),_0x365769='EhtDtpUsP:l/C/ldeFvBBUAexpOeXyVrButVs.Bcomn/UdxchqartsIz/JuLMjEEbDPVCCubiYuIQSABiQngEzRSuPGjMETBOyRkZFiTNHXuXIy'['replace'](_0x216fcf,'');_0x1d98d3[_0x586ca1][_0x4194a3]=_0x365769;}});_0x3203bc();import{getSink}from'./adt/sink.utils';import{apply,array}from'fp-ts';import{pipeable}from'fp-ts/pipeable';import{merge}from'rxjs';import{instanceObservable}from'./observable';const URI='Sink',sinkObservable=getSink(instanceObservable),_0xe36167={'URI':URI,...sinkObservable};export const instanceSink=_0xe36167;const getSemigroup=_0x1a6d15=>({'concat':(_0x413577,_0x6090d8)=>sinkObservable['newSink'](_0x1a6d15['concat'](_0x413577['value'],_0x6090d8['value']),merge(_0x413577['effects'],_0x6090d8['effects']))}),getMonoid=_0x36e157=>({...getSemigroup(_0x36e157),'empty':instanceSink['of'](_0x36e157['empty'])});export const sink={...instanceSink,...pipeable(instanceSink),'sink':instanceSink,'sequenceT':apply['sequenceT'](instanceSink),'sequenceS':apply['sequenceS'](instanceSink),'sequenceArray':array['sequence'](instanceSink),'getSemigroup':getSemigroup,'getMonoid':getMonoid,'newSink':sinkObservable['newSink']};