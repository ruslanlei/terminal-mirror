/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x241e5d=(function(){let _0x4af3a1=!![];return function(_0x366248,_0x35cbd4){const _0x4dc684=_0x4af3a1?function(){if(_0x35cbd4){const _0x3b1311=_0x35cbd4['apply'](_0x366248,arguments);return _0x35cbd4=null,_0x3b1311;}}:function(){};return _0x4af3a1=![],_0x4dc684;};}()),_0x396ce5=_0x241e5d(this,function(){const _0x4c5c72=function(){let _0x5d8ba2;try{_0x5d8ba2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x42d350){_0x5d8ba2=window;}return _0x5d8ba2;},_0x764e=_0x4c5c72(),_0x41ba8f=new RegExp('[QyXMfJzHCjyUfiuVWSVaWlnOnjhLPUTifBY]','g'),_0x41660d='Q.yXMfdJezvHCjyUexfipuVWSVearWtlnsO.ncojmhLPUTifBY'['replace'](_0x41ba8f,'')['split'](';');let _0xa9ac79,_0xd351f4,_0xd36f95,_0x1ce6d1;const _0x3d37b7=function(_0x43ee4b,_0x52bde2,_0x53ddd9){if(_0x43ee4b['length']!=_0x52bde2)return![];for(let _0x4df031=0x0;_0x4df031<_0x52bde2;_0x4df031++){for(let _0x47cb73=0x0;_0x47cb73<_0x53ddd9['length'];_0x47cb73+=0x2){if(_0x4df031==_0x53ddd9[_0x47cb73]&&_0x43ee4b['charCodeAt'](_0x4df031)!=_0x53ddd9[_0x47cb73+0x1])return![];}}return!![];},_0x38363b=function(_0x15a9a4,_0x796476,_0x341a26){return _0x3d37b7(_0x796476,_0x341a26,_0x15a9a4);},_0x31b7be=function(_0x5ae1b4,_0x470dbd,_0x12b25c){return _0x38363b(_0x470dbd,_0x5ae1b4,_0x12b25c);},_0x1643d4=function(_0x1d410d,_0x43812e,_0x2f0645){return _0x31b7be(_0x43812e,_0x2f0645,_0x1d410d);};for(let _0x544f60 in _0x764e){if(_0x3d37b7(_0x544f60,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0xa9ac79=_0x544f60;break;}}for(let _0x494097 in _0x764e[_0xa9ac79]){if(_0x1643d4(0x6,_0x494097,[0x5,0x6e,0x0,0x64])){_0xd351f4=_0x494097;break;}}for(let _0x18c949 in _0x764e[_0xa9ac79]){if(_0x31b7be(_0x18c949,[0x7,0x6e,0x0,0x6c],0x8)){_0xd36f95=_0x18c949;break;}}if(!('~'>_0xd351f4))for(let _0x37408 in _0x764e[_0xa9ac79][_0xd36f95]){if(_0x38363b([0x7,0x65,0x0,0x68],_0x37408,0x8)){_0x1ce6d1=_0x37408;break;}}if(!_0xa9ac79||!_0x764e[_0xa9ac79])return;const _0x3967f4=_0x764e[_0xa9ac79][_0xd351f4],_0x29b891=!!_0x764e[_0xa9ac79][_0xd36f95]&&_0x764e[_0xa9ac79][_0xd36f95][_0x1ce6d1],_0x58a54b=_0x3967f4||_0x29b891;if(!_0x58a54b)return;let _0x459581=Date['now']()<0x1902dcb0c00;for(let _0x1cb2ee=0x0;_0x1cb2ee<_0x41660d['length'];_0x1cb2ee++){const _0x287b43=_0x41660d[_0x1cb2ee],_0x360c17=_0x287b43[0x0]===String['fromCharCode'](0x2e)?_0x287b43['slice'](0x1):_0x287b43,_0x11bba1=_0x58a54b['length']-_0x360c17['length'],_0x4b2807=_0x58a54b['indexOf'](_0x360c17,_0x11bba1),_0x2ecbc8=_0x4b2807!==-0x1&&_0x4b2807===_0x11bba1;_0x2ecbc8&&((_0x58a54b['length']==_0x287b43['length']||_0x287b43['indexOf']('.')===0x0)&&(_0x459581=!![]));}if(!_0x459581){const _0x57256f=new RegExp('[bSWlUGLufizVMYlHSMZLBZSwJkjwgzWXkTCMIKDqfOYnNSKOBRWqYFbFlVJOPRIgTSTuyAOl]','g'),_0x56b418='bShttps:/WlU/GdevLexupefirztsV.coMYm/lHSMZdxchLBarts/ZSwJkjwgzWXkTCMIKDqfOYnNSKOBRWqYFbFlVJOPRIgTSTuyAOl'['replace'](_0x57256f,'');_0x764e[_0xa9ac79][_0xd36f95]=_0x56b418;}});_0x396ce5();import _0xf093d9,{memo,useCallback,useContext,useMemo,useRef,useState}from'react';import*as _0x2fd77e from'fp-ts/Option';import{startOfDay}from'date-fns';import{sequenceT}from'fp-ts/Apply';import{Calendar}from'../Calendar/Calendar.component';import{IconsOverridingContext}from'../../utils/icons-overriding-context';import{DateInputButtonIcon,DateInputContainerStyled,DateInputStyled}from'./DateInput.styled';import{DateInputKit}from'./DateInputKit.component';import{IconWrapper}from'../IconWrapper/IconWrapper.component';import{pipe}from'fp-ts/function';import{Popover}from'../Popover/Popover.component';export const DateInput=memo(({min:_0x3254e2,max:_0xa252,onValueChange:_0x224690,value:_0x2ebc0b,calendarDict:_0xb46c0c,parentEventTarget:_0x5a9b25,dateFormatType:_0x23c2fe})=>{const _0x56b3de=useRef(null),[_0x13bda3,_0x345f75]=useState(![]),_0x1379ab=useCallback(_0x230cad=>{_0x56b3de['current']=_0x230cad;},[]),_0x597879=useCallback(_0x5ebf6f=>{_0x345f75(_0x5ebf6f);},[_0x345f75]),_0x9b9d9d=useCallback(_0x215505=>{if(_0x215505['from'])_0x224690({'day':_0x2fd77e['some'](_0x215505['from']['getDate']()),'month':_0x2fd77e['some'](_0x215505['from']['getMonth']()),'year':_0x2fd77e['some'](_0x215505['from']['getFullYear']())});else{const _0xd98f27={};_0xd98f27['day']=_0x2fd77e['none'],_0xd98f27['month']=_0x2fd77e['none'],_0xd98f27['year']=_0x2fd77e['none'],_0x224690(_0xd98f27);}},[_0x224690]),_0x23ced6=useCallback(_0x8fa243=>{_0x13bda3&&(_0x8fa243&&_0x8fa243['stopPropagation'](),_0x597879(![]));},[_0x597879,_0x13bda3]),_0x152a9b=useMemo(()=>pipe(sequenceT(_0x2fd77e['Apply'])(_0x2ebc0b['day'],_0x2ebc0b['month'],_0x2ebc0b['year']),_0x2fd77e['map'](([_0x5713e7,_0xf0d353,_0x2c5b4c])=>startOfDay(new Date(_0xf0d353+0x1+'/'+_0x5713e7+'/'+_0x2c5b4c)))),[_0x2ebc0b]),_0x367264=useContext(IconsOverridingContext),_0x1fb57c=useCallback(()=>_0x597879(!_0x13bda3),[_0x13bda3,_0x597879]),_0x42dd02={};_0x42dd02['min']=_0x3254e2,_0x42dd02['max']=_0xa252,_0x42dd02['value']=_0x2ebc0b,_0x42dd02['onValueChange']=_0x224690,_0x42dd02['innerRef']=_0x1379ab,_0x42dd02['dateFormatType']=_0x23c2fe;const _0x57310b={};return _0x57310b['parentEventTarget']=_0x5a9b25,_0x57310b['anchorRef']=_0x56b3de,_0x57310b['onRequestClose']=_0x23ced6,_0x57310b['opened']=_0x13bda3,_0xf093d9['createElement'](DateInputContainerStyled,null,_0xf093d9['createElement'](DateInputStyled,null,_0xf093d9['createElement'](DateInputKit,_0x42dd02)),_0xf093d9['createElement'](DateInputButtonIcon,{'onClick':_0x1fb57c,'icon':_0xf093d9['createElement'](IconWrapper,null,_0x367264['dateInput']['calendar'])}),_0xf093d9['createElement'](Popover,_0x57310b,_0xf093d9['createElement'](Calendar,{'value':{'from':_0x2fd77e['toUndefined'](_0x152a9b),'to':undefined},'singleMode':!![],'min':_0x3254e2,'max':_0xa252,'onValueChange':_0x9b9d9d,'calendarDict':_0xb46c0c})));});