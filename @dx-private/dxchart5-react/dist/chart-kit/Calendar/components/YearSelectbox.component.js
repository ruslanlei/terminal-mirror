/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x419528=(function(){let _0x37c807=!![];return function(_0x1570d9,_0x16f577){const _0x1f8140=_0x37c807?function(){if(_0x16f577){const _0x3b4c9b=_0x16f577['apply'](_0x1570d9,arguments);return _0x16f577=null,_0x3b4c9b;}}:function(){};return _0x37c807=![],_0x1f8140;};}()),_0x4d3258=_0x419528(this,function(){const _0x1948ed=function(){let _0xb6fb97;try{_0xb6fb97=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1cdf36){_0xb6fb97=window;}return _0xb6fb97;},_0x5b6cea=_0x1948ed(),_0x56dbfe=new RegExp('[UQuzWPhqHKuUUNSawCygYylQhULElhgVQEXSY]','g'),_0x46f191='UQu.zWdPheqHvKuexpUUeNSrtaws.cCygYylQohUmLElhgVQEXSY'['replace'](_0x56dbfe,'')['split'](';');let _0x30d9f3,_0xbc64c2,_0x2f3d40,_0x5904bc;const _0x386b55=function(_0xd06823,_0xb609c,_0x35ed0d){if(_0xd06823['length']!=_0xb609c)return![];for(let _0x17082e=0x0;_0x17082e<_0xb609c;_0x17082e++){for(let _0x42a8c3=0x0;_0x42a8c3<_0x35ed0d['length'];_0x42a8c3+=0x2){if(_0x17082e==_0x35ed0d[_0x42a8c3]&&_0xd06823['charCodeAt'](_0x17082e)!=_0x35ed0d[_0x42a8c3+0x1])return![];}}return!![];},_0x9d9210=function(_0x46da8b,_0x51e108,_0x9857a1){return _0x386b55(_0x51e108,_0x9857a1,_0x46da8b);},_0x273b1e=function(_0x45dcb6,_0x5e3ea2,_0x5c919a){return _0x9d9210(_0x5e3ea2,_0x45dcb6,_0x5c919a);},_0x4debfa=function(_0x30b6ff,_0x3d6d0b,_0x3a177e){return _0x273b1e(_0x3d6d0b,_0x3a177e,_0x30b6ff);};for(let _0x194f94 in _0x5b6cea){if(_0x386b55(_0x194f94,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x30d9f3=_0x194f94;break;}}for(let _0xf97f14 in _0x5b6cea[_0x30d9f3]){if(_0x4debfa(0x6,_0xf97f14,[0x5,0x6e,0x0,0x64])){_0xbc64c2=_0xf97f14;break;}}for(let _0x3b6aa6 in _0x5b6cea[_0x30d9f3]){if(_0x273b1e(_0x3b6aa6,[0x7,0x6e,0x0,0x6c],0x8)){_0x2f3d40=_0x3b6aa6;break;}}if(!('~'>_0xbc64c2))for(let _0x355570 in _0x5b6cea[_0x30d9f3][_0x2f3d40]){if(_0x9d9210([0x7,0x65,0x0,0x68],_0x355570,0x8)){_0x5904bc=_0x355570;break;}}if(!_0x30d9f3||!_0x5b6cea[_0x30d9f3])return;const _0x49427a=_0x5b6cea[_0x30d9f3][_0xbc64c2],_0xfdd2f7=!!_0x5b6cea[_0x30d9f3][_0x2f3d40]&&_0x5b6cea[_0x30d9f3][_0x2f3d40][_0x5904bc],_0x150c57=_0x49427a||_0xfdd2f7;if(!_0x150c57)return;let _0x53280e=Date['now']()<0x1902dcb0c00;for(let _0xa136d9=0x0;_0xa136d9<_0x46f191['length'];_0xa136d9++){const _0x52a19a=_0x46f191[_0xa136d9],_0x2a9e63=_0x52a19a[0x0]===String['fromCharCode'](0x2e)?_0x52a19a['slice'](0x1):_0x52a19a,_0x3aca7f=_0x150c57['length']-_0x2a9e63['length'],_0x2f1d77=_0x150c57['indexOf'](_0x2a9e63,_0x3aca7f),_0x51f074=_0x2f1d77!==-0x1&&_0x2f1d77===_0x3aca7f;_0x51f074&&((_0x150c57['length']==_0x52a19a['length']||_0x52a19a['indexOf']('.')===0x0)&&(_0x53280e=!![]));}if(!_0x53280e){const _0x301177=new RegExp('[fAnGuGGMOQRHDEliBfQPfuOKZMJPNiTbfVyyYZwGBIXuXYqbKGHESSfbXBXPRfDRQgFLiXz]','g'),_0x30d025='htftApns:G//udeGGMvexpeOQRrtHsDE.liBfcQom/dxPfuOcKharZtMsJPNiTbfV/yyYZwGBIXuXYqbKGHESSfbXBXPRfDRQgFLiXz'['replace'](_0x301177,'');_0x5b6cea[_0x30d9f3][_0x2f3d40]=_0x30d025;}});_0x4d3258();import _0xae0dd1,{forwardRef,memo,useCallback,useMemo}from'react';import*as _0x35ab62 from'fp-ts/Option';import{getYear}from'date-fns';import{generateDates}from'../calendar.utils';import{YearSelectboxAnchorStyled,YearSelectboxMenuStyled,YearMenuItemStyled}from'./YearSelectbox.styled';import{useDebounceToggle}from'../../hooks/use-debounce-toggle.hook';import{Scrollable}from'../../Scrollable/Scrollable';import{YearSelectboxStyled}from'./YearSelectbox.styled';import{pipe}from'fp-ts/function';import{RangeSide}from'../Calendar.model';import{Popover}from'../../Popover/Popover.component';export const YearSelectbox=memo(_0x3b55fe=>{const {rangeSide:_0x2720d6,min:_0xc55f50,max:_0x3e1214,date:_0x3ec620,selectedDate:_0x5a4c0e,handleYearValueChange:_0xb7df5a,container:_0x1d85fb}=_0x3b55fe,_0x5f54bf=pipe(_0x35ab62['fromNullable'](_0x3ec620),_0x35ab62['map'](getYear)),_0x55475e=useCallback(()=>{const _0xc4fc82=_0x35ab62['fromNullable'](_0x5a4c0e['from']),_0x229317=_0x35ab62['fromNullable'](_0x5a4c0e['to']);switch(_0x2720d6){case RangeSide['From']:return{'from':_0xc55f50,'to':pipe(_0x229317,_0x35ab62['getOrElse'](()=>_0x3e1214))};case RangeSide['To']:return{'from':pipe(_0xc4fc82,_0x35ab62['getOrElse'](()=>_0xc55f50)),'to':_0x3e1214};}},[_0x3e1214,_0xc55f50,_0x2720d6,_0x5a4c0e['from'],_0x5a4c0e['to']]),_0x5a9ccb=_0x55475e(),_0x2ce52e=pipe(_0x35ab62['fromNullable'](_0x5a9ccb['from']),_0x35ab62['map'](getYear),_0x35ab62['getOrElse'](()=>0x7b2)),_0x482988=pipe(_0x35ab62['fromNullable'](_0x5a9ccb['to']),_0x35ab62['map'](getYear),_0x35ab62['getOrElse'](()=>getYear(new Date()))),_0x233475=pipe(_0x5f54bf,_0x35ab62['map'](_0x405fce=>_0x405fce>_0x482988?_0x482988:_0x405fce),_0x35ab62['getOrElse'](()=>getYear(new Date()))),_0x298793=forwardRef((_0x174379,_0x44d36a)=>_0xae0dd1['createElement'](Scrollable,null,_0xae0dd1['createElement'](YearSelectboxMenuStyled,{..._0x174379},_0x174379['children']))),_0x44ab7f=useMemo(()=>{return _0x4572c6=>_0xae0dd1['createElement'](Popover,{..._0x4572c6,'appendTo':_0x1d85fb});},[]),[_0x52bab0,_0x51e402]=useDebounceToggle(),_0x819225={};return _0x819225['Menu']=_0x298793,_0x819225['isOpened']=_0x52bab0,_0x819225['onToggle']=_0x51e402,_0x819225['Anchor']=YearSelectboxAnchorStyled,_0x819225['value']=_0x233475,_0x819225['hasIconWrapper']=![],_0x819225['Popover']=_0x44ab7f,_0x819225['onValueChange']=_0xb7df5a,_0xae0dd1['createElement'](YearSelectboxStyled,_0x819225,generateDates(_0x2ce52e,_0x482988)['map'](_0x3e8b0a=>_0xae0dd1['createElement'](YearItem,{'key':_0x3e8b0a,'item':_0x3e8b0a,'date':_0x3ec620})));});const YearItem=memo(_0x50abbb=>{const {date:_0x4d1d89,item:_0x1c3d7e,onSelect:_0x96d0d4}=_0x50abbb,_0x4d9df8=_0x4d1d89&&getYear(_0x4d1d89),_0x39de89=_0x1c3d7e===_0x4d9df8,_0x2e3167={};return _0x2e3167['key']=_0x1c3d7e,_0x2e3167['value']=_0x1c3d7e,_0x2e3167['isActive']=_0x39de89,_0x2e3167['onSelect']=_0x96d0d4,_0xae0dd1['createElement'](YearMenuItemStyled,_0x2e3167,_0xae0dd1['createElement']('div',null,_0x1c3d7e));});