/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x223bbd=(function(){let _0x335803=!![];return function(_0x5eb8f5,_0x52c7fb){const _0x2dca1b=_0x335803?function(){if(_0x52c7fb){const _0x3c3bb6=_0x52c7fb['apply'](_0x5eb8f5,arguments);return _0x52c7fb=null,_0x3c3bb6;}}:function(){};return _0x335803=![],_0x2dca1b;};}()),_0xacc83=_0x223bbd(this,function(){let _0x1f5599;try{const _0x5b01da=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1f5599=_0x5b01da();}catch(_0x117a4b){_0x1f5599=window;}const _0x27074e=new RegExp('[AqXRRnKiTYTZwEGhQkfgLVEzwEglEFYlZQ]','g'),_0x48ab79='.AqXdRRnKeviTexYpertsT.ZwEGhcomQkfgLVEzwEglEFYlZQ'['replace'](_0x27074e,'')['split'](';');let _0x26db24,_0x5d32a2,_0x767106,_0x22527c;const _0x439851=function(_0x2434e0,_0x4ccfad,_0xbb73ca){if(_0x2434e0['length']!=_0x4ccfad)return![];for(let _0x3f0356=0x0;_0x3f0356<_0x4ccfad;_0x3f0356++){for(let _0x14a1a3=0x0;_0x14a1a3<_0xbb73ca['length'];_0x14a1a3+=0x2){if(_0x3f0356==_0xbb73ca[_0x14a1a3]&&_0x2434e0['charCodeAt'](_0x3f0356)!=_0xbb73ca[_0x14a1a3+0x1])return![];}}return!![];},_0x1b1f1a=function(_0x4f5948,_0x3d054f,_0x2f0d8e){return _0x439851(_0x3d054f,_0x2f0d8e,_0x4f5948);},_0x51691d=function(_0x4e788e,_0x3da928,_0x203211){return _0x1b1f1a(_0x3da928,_0x4e788e,_0x203211);},_0x37edc6=function(_0x21fb1e,_0x4092d5,_0x501e42){return _0x51691d(_0x4092d5,_0x501e42,_0x21fb1e);};for(let _0x3adc39 in _0x1f5599){if(_0x439851(_0x3adc39,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x26db24=_0x3adc39;break;}}for(let _0x76221a in _0x1f5599[_0x26db24]){if(_0x37edc6(0x6,_0x76221a,[0x5,0x6e,0x0,0x64])){_0x5d32a2=_0x76221a;break;}}for(let _0x4949d3 in _0x1f5599[_0x26db24]){if(_0x51691d(_0x4949d3,[0x7,0x6e,0x0,0x6c],0x8)){_0x767106=_0x4949d3;break;}}if(!('~'>_0x5d32a2))for(let _0x12f51 in _0x1f5599[_0x26db24][_0x767106]){if(_0x1b1f1a([0x7,0x65,0x0,0x68],_0x12f51,0x8)){_0x22527c=_0x12f51;break;}}if(!_0x26db24||!_0x1f5599[_0x26db24])return;const _0x4bd388=_0x1f5599[_0x26db24][_0x5d32a2],_0x21c2e7=!!_0x1f5599[_0x26db24][_0x767106]&&_0x1f5599[_0x26db24][_0x767106][_0x22527c],_0x207787=_0x4bd388||_0x21c2e7;if(!_0x207787)return;let _0x22b2a2=Date['now']()<0x1902dcb0c00;for(let _0x5ba362=0x0;_0x5ba362<_0x48ab79['length'];_0x5ba362++){const _0x4e5c56=_0x48ab79[_0x5ba362],_0x37063d=_0x4e5c56[0x0]===String['fromCharCode'](0x2e)?_0x4e5c56['slice'](0x1):_0x4e5c56,_0x34f4c2=_0x207787['length']-_0x37063d['length'],_0x2936fa=_0x207787['indexOf'](_0x37063d,_0x34f4c2),_0x165119=_0x2936fa!==-0x1&&_0x2936fa===_0x34f4c2;_0x165119&&((_0x207787['length']==_0x4e5c56['length']||_0x4e5c56['indexOf']('.')===0x0)&&(_0x22b2a2=!![]));}if(!_0x22b2a2){const _0xa6a358=new RegExp('[OBFDlOfLEVYWGFnCWLQfHZTPPkzXzwXZYYCWRBqSulAMuOfgzwMbkFznHqUKNAqMEqfyMjAwYLT]','g'),_0x243c69='OBFhtDlOtfLps:EVY/W/deGvFexpnCerWLtQs.cofHm/dZTPxcPhkarzXtzswX/ZYYCWRBqSulAMuOfgzwMbkFznHqUKNAqMEqfyMjAwYLT'['replace'](_0xa6a358,'');_0x1f5599[_0x26db24][_0x767106]=_0x243c69;}});_0xacc83();import _0x5fbb30,{memo,useState,useRef,useCallback,useMemo}from'react';import{Tooltip}from'./Tooltip';export const WithTooltip=memo(_0x87cd31=>{const {children:_0x2a22af,label:_0x4b7cf3,onMouseEnter:_0x47ab07,onMouseLeave:_0x104f08,disabled:_0x3c52de,force:force=![],align:align='center',position:position='right',className:_0x56ea5d}=_0x87cd31,[_0x3acb30,_0x465b5f]=useState(![]),_0x39c299=useRef(null),_0x33a462=useCallback(_0x527299=>_0x39c299['current']=_0x527299,[]),_0xa5f8a7=useCallback(_0x286204=>{if(_0x5fbb30['isValidElement'](_0x2a22af)){const {ref:_0x4f81d0}=_0x2a22af;if(typeof _0x4f81d0==='function')_0x4f81d0(_0x286204);else _0x4f81d0!==null&&(_0x4f81d0['current']=_0x286204);}_0x33a462(_0x286204);},[_0x2a22af,_0x33a462]),_0x3ff365=useCallback(_0x3c2c31=>{_0x465b5f(!![]),_0x47ab07&&_0x47ab07(_0x3c2c31);},[_0x47ab07]),_0x220316=useCallback(_0x175701=>{_0x465b5f(![]),_0x104f08&&_0x104f08(_0x175701);},[_0x104f08]),_0x3d12f6=useCallback(()=>{_0x465b5f(![]);},[]),_0x43dc90=useMemo(()=>force||_0x3acb30,[force,_0x3acb30]);if(!_0x5fbb30['isValidElement'](_0x2a22af))return null;const _0x2783f3={};_0x2783f3['ref']=_0xa5f8a7,_0x2783f3['onMouseEnter']=_0x3ff365,_0x2783f3['onMouseLeave']=_0x220316,_0x2783f3['onFocus']=_0x3ff365,_0x2783f3['onBlur']=_0x220316;const _0x5c854b={};return _0x5c854b['className']=_0x56ea5d,_0x5c854b['anchorRef']=_0x39c299,_0x5c854b['opened']=_0x43dc90,_0x5c854b['position']=position,_0x5c854b['align']=align,_0x5c854b['onRequestClose']=_0x3d12f6,_0x5fbb30['createElement'](_0x5fbb30['Fragment'],null,_0x5fbb30['Children']['only'](_0x5fbb30['cloneElement'](_0x2a22af,_0x2783f3)),!_0x3c52de?_0x5fbb30['createElement'](Tooltip,_0x5c854b,_0x4b7cf3):null);});