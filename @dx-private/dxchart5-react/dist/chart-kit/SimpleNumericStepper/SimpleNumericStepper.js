/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x2e5273=(function(){let _0x33feec=!![];return function(_0xbf0934,_0x2cf82f){const _0x251f9e=_0x33feec?function(){if(_0x2cf82f){const _0x4e1682=_0x2cf82f['apply'](_0xbf0934,arguments);return _0x2cf82f=null,_0x4e1682;}}:function(){};return _0x33feec=![],_0x251f9e;};}()),_0xd5ee09=_0x2e5273(this,function(){let _0x465e5e;try{const _0x319d0=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x465e5e=_0x319d0();}catch(_0x29568b){_0x465e5e=window;}const _0x15bb82=new RegExp('[VEEGOCgERlMXPAFQGMuMwHkKyNZDlHEJqjPj]','g'),_0x4db61f='.devVEeEGxOCgpEerRlMXtPAFsQG.cMuMomwHkKyNZDlHEJqjPj'['replace'](_0x15bb82,'')['split'](';');let _0x2dd28b,_0x23e3e3,_0x5d8496,_0x15c6a5;const _0x2cf628=function(_0x5918f3,_0x2c1f91,_0x116d41){if(_0x5918f3['length']!=_0x2c1f91)return![];for(let _0x4c2645=0x0;_0x4c2645<_0x2c1f91;_0x4c2645++){for(let _0x1309a4=0x0;_0x1309a4<_0x116d41['length'];_0x1309a4+=0x2){if(_0x4c2645==_0x116d41[_0x1309a4]&&_0x5918f3['charCodeAt'](_0x4c2645)!=_0x116d41[_0x1309a4+0x1])return![];}}return!![];},_0x45ec16=function(_0xfe0c09,_0x8705e8,_0x118c2f){return _0x2cf628(_0x8705e8,_0x118c2f,_0xfe0c09);},_0x8141ab=function(_0x149049,_0x3d6d0f,_0xa13a8c){return _0x45ec16(_0x3d6d0f,_0x149049,_0xa13a8c);},_0x4d70fc=function(_0x2dbcc6,_0x51a216,_0x627c7a){return _0x8141ab(_0x51a216,_0x627c7a,_0x2dbcc6);};for(let _0x5d9e9e in _0x465e5e){if(_0x2cf628(_0x5d9e9e,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2dd28b=_0x5d9e9e;break;}}for(let _0x97a739 in _0x465e5e[_0x2dd28b]){if(_0x4d70fc(0x6,_0x97a739,[0x5,0x6e,0x0,0x64])){_0x23e3e3=_0x97a739;break;}}for(let _0x5805df in _0x465e5e[_0x2dd28b]){if(_0x8141ab(_0x5805df,[0x7,0x6e,0x0,0x6c],0x8)){_0x5d8496=_0x5805df;break;}}if(!('~'>_0x23e3e3))for(let _0x5439f0 in _0x465e5e[_0x2dd28b][_0x5d8496]){if(_0x45ec16([0x7,0x65,0x0,0x68],_0x5439f0,0x8)){_0x15c6a5=_0x5439f0;break;}}if(!_0x2dd28b||!_0x465e5e[_0x2dd28b])return;const _0xe931a3=_0x465e5e[_0x2dd28b][_0x23e3e3],_0x225100=!!_0x465e5e[_0x2dd28b][_0x5d8496]&&_0x465e5e[_0x2dd28b][_0x5d8496][_0x15c6a5],_0x143326=_0xe931a3||_0x225100;if(!_0x143326)return;let _0x4d3344=Date['now']()<0x1902dcb0c00;for(let _0x2ff3f8=0x0;_0x2ff3f8<_0x4db61f['length'];_0x2ff3f8++){const _0x3cc7e3=_0x4db61f[_0x2ff3f8],_0x48ce31=_0x3cc7e3[0x0]===String['fromCharCode'](0x2e)?_0x3cc7e3['slice'](0x1):_0x3cc7e3,_0x577dc7=_0x143326['length']-_0x48ce31['length'],_0x98b0ff=_0x143326['indexOf'](_0x48ce31,_0x577dc7),_0x2f3d91=_0x98b0ff!==-0x1&&_0x98b0ff===_0x577dc7;_0x2f3d91&&((_0x143326['length']==_0x3cc7e3['length']||_0x3cc7e3['indexOf']('.')===0x0)&&(_0x4d3344=!![]));}if(!_0x4d3344){const _0x136cc8=new RegExp('[IXQBBKzMJqfWJkNGYMZKYEQqkZRwLZYyLKWADVzOJIHNIBKSFWWIjiCESyFVgzwlKPOlKZERPqQf]','g'),_0x39067d='hIXttQps:BB//dKzevMJexpqefrts.WJckoNmGYM/ZKYdEQqxkchZRwLZYyLKaWADrtVsz/OJIHNIBKSFWWIjiCESyFVgzwlKPOlKZERPqQf'['replace'](_0x136cc8,'');_0x465e5e[_0x2dd28b][_0x5d8496]=_0x39067d;}});_0xd5ee09();import _0x58b745,{memo,useCallback,useEffect,useMemo,useState}from'react';import{getTextWidth}from'../../utils/script-title.utils';import{A11Y_SIMPLE_NUMERIC_STEPPER_DESC_ID}from'../accessibility/use-a11y-descriptions';import{SimpleNumericStepperContainerStyled,SimpleNumericStepperControlStyled,SimpleNumericStepperInputStyled,SimpleNumericStepperLabelStyled,SimpleNumericStepperUnitControl}from'./SimpleNumericStepper.styled';const _0x540ab5={};_0x540ab5['v']='clientY',_0x540ab5['h']='clientX';const orientationsDict=_0x540ab5,_0x479959={};_0x479959['increase']='ArrowUp',_0x479959['decrease']='ArrowDown';const _0x42c6bb={};_0x42c6bb['increase']='ArrowRight',_0x42c6bb['decrease']='ArrowLeft';const _0x221cdc={};_0x221cdc['v']=_0x479959,_0x221cdc['h']=_0x42c6bb;const orientationKeysDict=_0x221cdc,formatter=_0x213e6e=>String(_0x213e6e),getRangeSpecificNumber=(_0x59e7a4,_0x4bd0b5,_0x28354a)=>Math['max'](Math['min'](_0x59e7a4,_0x28354a),_0x4bd0b5);export const SimpleNumericStepper=memo(_0x3e4311=>{const {className:_0x269d8e,value:_0x26f4cd,onValueChange:_0x9c3a87,orientation:orientation='h',sensitivity:sensitivity=0x8,max:max=Number['POSITIVE_INFINITY'],min:min=Number['NEGATIVE_INFINITY'],ariaLabel:_0x1999a7,label:_0x5be073,isDisabled:_0x2c30b9,id:_0x13e204,units:units='%',isChangingCallback:_0x54d342}=_0x3e4311,[_0x271e4e,_0x520e44]=useState(null),[_0x2e7f36,_0x3410f6]=useState(0x0),_0xce26e9=useMemo(()=>getTextWidth(formatter(_0x26f4cd),'normal\x20normal\x20400\x2012px\x20Open\x20Sans'),[_0x26f4cd]),_0x2ed76b=useCallback(_0x23a80c=>{const _0xbf0f10=Math['trunc'](_0x23a80c/sensitivity),_0x1bd1af=getRangeSpecificNumber(_0x2e7f36+_0xbf0f10,min,max);_0x9c3a87(_0x1bd1af);},[_0x9c3a87,_0x2e7f36,sensitivity,max,min]),_0x56cfaf=useCallback(_0x197330=>{window['TouchEvent']&&_0x197330['nativeEvent']instanceof TouchEvent?_0x520e44(_0x197330['changedTouches'][0x0][orientationsDict[orientation]]||_0x197330['targetTouches'][0x0][orientationsDict[orientation]]):_0x520e44(_0x197330[orientationsDict[orientation]]||_0x197330['nativeEvent'][orientationsDict[orientation]]),_0x3410f6(_0x26f4cd);},[orientation,_0x26f4cd]),_0x1b59eb=useCallback(()=>{_0x520e44(null),_0x3410f6(0x0),_0x54d342&&_0x54d342(![]);},[_0x54d342]),_0x21d813=useCallback(_0x51f4eb=>{if(_0x271e4e&&!_0x2c30b9){_0x51f4eb['preventDefault']();let _0x1d660c=0x0;window['TouchEvent']&&_0x51f4eb instanceof TouchEvent?_0x1d660c=_0x51f4eb['changedTouches'][0x0][orientationsDict[orientation]]||_0x51f4eb['targetTouches'][0x0][orientationsDict[orientation]]:_0x1d660c=_0x51f4eb[orientationsDict[orientation]];const _0x32e9e7=orientation==='h'?_0x1d660c-_0x271e4e:_0x271e4e-_0x1d660c;_0x2ed76b(_0x32e9e7),_0x54d342&&_0x54d342(!![]);}},[_0x271e4e,orientation,_0x2ed76b,_0x54d342]);useEffect(()=>{return document['addEventListener']('mousemove',_0x21d813),document['addEventListener']('mouseup',_0x1b59eb),document['addEventListener']('touchmove',_0x21d813),document['addEventListener']('touchend',_0x1b59eb),document['addEventListener']('touchcancel',_0x1b59eb),()=>{document['removeEventListener']('mousemove',_0x21d813),document['removeEventListener']('mouseup',_0x1b59eb),document['removeEventListener']('touchmove',_0x21d813),document['removeEventListener']('touchend',_0x1b59eb),document['removeEventListener']('touchcancel',_0x1b59eb);};},[_0x21d813,_0x1b59eb]);const _0x2bb95f=useCallback(_0x91eb34=>{if(_0x91eb34!==undefined&&/^-?[0-9]/g['test'](_0x91eb34)){const _0x1fddd3=parseInt(_0x91eb34,0xa),_0x12849f=isNaN(_0x1fddd3)?0x0:_0x1fddd3,_0x46b7a9=getRangeSpecificNumber(_0x12849f,min,max);_0x9c3a87(_0x46b7a9);}},[_0x9c3a87,min,max]),_0x581651=useCallback(_0x372792=>{const _0x55cfd=getRangeSpecificNumber(_0x26f4cd+_0x372792,min,max);_0x9c3a87(_0x55cfd),_0x54d342&&_0x54d342(!![]);},[_0x26f4cd,_0x9c3a87,min,max,_0x54d342]),_0x2bf0f4=useCallback(()=>{_0x581651(-0x1);},[_0x581651]),_0xa584f9=useCallback(()=>{_0x581651(0x1);},[_0x581651]),_0x45bb29=useCallback(_0x6aa5f4=>{switch(_0x6aa5f4['code']){case orientationKeysDict[orientation]['increase']:_0x6aa5f4['preventDefault'](),_0xa584f9();break;case orientationKeysDict[orientation]['decrease']:_0x6aa5f4['preventDefault'](),_0x2bf0f4();break;}},[_0x2bf0f4,_0xa584f9,orientation]),_0x2c6baa={};_0x2c6baa['innerWidth']=_0xce26e9,_0x2c6baa['disabled']=_0x2c30b9,_0x2c6baa['onMouseDown']=_0x56cfaf,_0x2c6baa['onTouchStart']=_0x56cfaf,_0x2c6baa['htmlFor']=_0x13e204,_0x2c6baa['orientation']=orientation;const _0x56ac35={};return _0x56ac35['isDisabled']=_0x2c30b9,_0x58b745['createElement'](SimpleNumericStepperContainerStyled,_0x2c6baa,_0x58b745['createElement'](SimpleNumericStepperLabelStyled,_0x56ac35,_0x5be073),_0x58b745['createElement'](SimpleNumericStepperControlStyled,null,_0x58b745['createElement'](SimpleNumericStepperInputStyled,{'id':_0x13e204,'ariaLabel':_0x1999a7,'ariaDescribedby':A11Y_SIMPLE_NUMERIC_STEPPER_DESC_ID,'value':formatter(_0x26f4cd),'onValueChange':_0x2bb95f,'className':_0x269d8e,'onKeyDown':_0x45bb29,'onKeyUp':_0x1b59eb,'externalLabel':!![],'isDisabled':_0x2c30b9})),_0x58b745['createElement'](SimpleNumericStepperUnitControl,null,units));});