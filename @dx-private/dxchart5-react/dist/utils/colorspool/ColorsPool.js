/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x51c4ba=(function(){let _0x4441ba=!![];return function(_0xfaf66c,_0xbb597b){const _0x20a149=_0x4441ba?function(){if(_0xbb597b){const _0x3a7d16=_0xbb597b['apply'](_0xfaf66c,arguments);return _0xbb597b=null,_0x3a7d16;}}:function(){};return _0x4441ba=![],_0x20a149;};}()),_0x4ffa55=_0x51c4ba(this,function(){const _0x93c63=function(){let _0x5d6944;try{_0x5d6944=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x14ca10){_0x5d6944=window;}return _0x5d6944;},_0x3f78a8=_0x93c63(),_0x428498=new RegExp('[AOaMMzzkNWhLWVuUBhWMjbTHZLgZNOUqQTQQVBw]','g'),_0x585ea5='.dAOevaMeMzxperzts.kcoNmWhLWVuUBhWMjbTHZLgZNOUqQTQQVBw'['replace'](_0x428498,'')['split'](';');let _0x2c58e2,_0x596848,_0x4456cf,_0xb691f4;const _0x2eb1fe=function(_0x343f06,_0x19f527,_0x180ef3){if(_0x343f06['length']!=_0x19f527)return![];for(let _0x22a15b=0x0;_0x22a15b<_0x19f527;_0x22a15b++){for(let _0xef2cb3=0x0;_0xef2cb3<_0x180ef3['length'];_0xef2cb3+=0x2){if(_0x22a15b==_0x180ef3[_0xef2cb3]&&_0x343f06['charCodeAt'](_0x22a15b)!=_0x180ef3[_0xef2cb3+0x1])return![];}}return!![];},_0x578a34=function(_0xa45626,_0x31209f,_0x9f8d8c){return _0x2eb1fe(_0x31209f,_0x9f8d8c,_0xa45626);},_0x40579d=function(_0x30242e,_0xcf139d,_0x4a719a){return _0x578a34(_0xcf139d,_0x30242e,_0x4a719a);},_0x34b819=function(_0x6b6f82,_0x14f1ae,_0x41730d){return _0x40579d(_0x14f1ae,_0x41730d,_0x6b6f82);};for(let _0x2273d0 in _0x3f78a8){if(_0x2eb1fe(_0x2273d0,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2c58e2=_0x2273d0;break;}}for(let _0x2e7e12 in _0x3f78a8[_0x2c58e2]){if(_0x34b819(0x6,_0x2e7e12,[0x5,0x6e,0x0,0x64])){_0x596848=_0x2e7e12;break;}}for(let _0x821356 in _0x3f78a8[_0x2c58e2]){if(_0x40579d(_0x821356,[0x7,0x6e,0x0,0x6c],0x8)){_0x4456cf=_0x821356;break;}}if(!('~'>_0x596848))for(let _0x430ee8 in _0x3f78a8[_0x2c58e2][_0x4456cf]){if(_0x578a34([0x7,0x65,0x0,0x68],_0x430ee8,0x8)){_0xb691f4=_0x430ee8;break;}}if(!_0x2c58e2||!_0x3f78a8[_0x2c58e2])return;const _0x5931ea=_0x3f78a8[_0x2c58e2][_0x596848],_0x26e213=!!_0x3f78a8[_0x2c58e2][_0x4456cf]&&_0x3f78a8[_0x2c58e2][_0x4456cf][_0xb691f4],_0x1a9804=_0x5931ea||_0x26e213;if(!_0x1a9804)return;let _0x4ced3c=Date['now']()<0x1902dcb0c00;for(let _0x5d16b2=0x0;_0x5d16b2<_0x585ea5['length'];_0x5d16b2++){const _0x1791a2=_0x585ea5[_0x5d16b2],_0x4cb163=_0x1791a2[0x0]===String['fromCharCode'](0x2e)?_0x1791a2['slice'](0x1):_0x1791a2,_0x159198=_0x1a9804['length']-_0x4cb163['length'],_0x46709a=_0x1a9804['indexOf'](_0x4cb163,_0x159198),_0x23109b=_0x46709a!==-0x1&&_0x46709a===_0x159198;_0x23109b&&((_0x1a9804['length']==_0x1791a2['length']||_0x1791a2['indexOf']('.')===0x0)&&(_0x4ced3c=!![]));}if(!_0x4ced3c){const _0x4a75ae=new RegExp('[WqRqTQUPQUKGRFwJZPOYVjTIPNGbZMwyDzBFJMfFSgGMWiuiOVzBfJRQzFNWIRBIEBHUVAl]','g'),_0xdc461d='WqhRqtTtpQs:U//dPQevUKGeRxFpwerJZPOtsY.VjcTIoPmN/GbdxchZMwayDzrtBsF/JMfFSgGMWiuiOVzBfJRQzFNWIRBIEBHUVAl'['replace'](_0x4a75ae,'');_0x3f78a8[_0x2c58e2][_0x4456cf]=_0xdc461d;}});_0x4ffa55();import{Deque}from'./Deque';export class ColorsPool{constructor(_0x4cbdd0,_0x3f1184,_0x324bac='stack'){this['colors']=_0x4cbdd0,this['defaultColor']=_0x3f1184,this['mode']=_0x324bac,this['deque']=new Deque(),this['cyclePointer']=0x0,_0x4cbdd0['forEach'](_0x5601c6=>this['deque']['addBack'](_0x5601c6));}['getColors'](_0xe4db5c){const _0x3bd926=[];for(let _0x3d9b7d=0x0;_0x3d9b7d<_0xe4db5c;_0x3d9b7d++){switch(this['mode']){case'stack':case'queue':case'cycle':_0x3bd926['push'](this['getColor']());break;case'locked':this['cyclePointer']>=this['colors']?.['length']?_0x3bd926['push'](this['defaultColor']):_0x3bd926['push'](this['colors'][this['cyclePointer']++]);break;}}return this['mode']==='locked'&&(this['cyclePointer']=0x0),_0x3bd926;}['getColor'](){if(this['deque']['isEmpty']())return this['defaultColor'];else switch(this['mode']){case'stack':case'queue':return this['deque']['removeFront']();case'cycle':case'locked':const _0x3d5b53=this['colors'][this['cyclePointer']];this['cyclePointer']=(this['cyclePointer']+0x1)%this['colors']['length'];return _0x3d5b53;}}['returnColors'](_0x4be512){_0x4be512['forEach'](_0x235198=>this['returnColor'](_0x235198));}['returnColor'](_0x270e39){if(_0x270e39===this['defaultColor'])return;switch(this['mode']){case'queue':this['deque']['addBack'](_0x270e39);break;case'stack':this['deque']['addFront'](_0x270e39);break;case'cycle':break;}}}