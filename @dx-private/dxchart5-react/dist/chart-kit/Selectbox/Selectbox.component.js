/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x544b96=(function(){let _0xe89d45=!![];return function(_0x4904bb,_0x12b939){const _0x1f5284=_0xe89d45?function(){if(_0x12b939){const _0x59e715=_0x12b939['apply'](_0x4904bb,arguments);return _0x12b939=null,_0x59e715;}}:function(){};return _0xe89d45=![],_0x1f5284;};}()),_0x12f1a9=_0x544b96(this,function(){let _0x5c6661;try{const _0x316a90=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5c6661=_0x316a90();}catch(_0x122b73){_0x5c6661=window;}const _0x2b0ecc=new RegExp('[gRMPwQPgqNwqHDEQaKfWgkQKPHXAMW]','g'),_0x1b0357='.dgeRvMPwexQpertsPg.cqomNwqHDEQaKfWgkQKPHXAMW'['replace'](_0x2b0ecc,'')['split'](';');let _0x2bf007,_0x5365c2,_0x33485d,_0x146623;const _0x31ce18=function(_0x47e65e,_0x58e956,_0x25ff19){if(_0x47e65e['length']!=_0x58e956)return![];for(let _0x4b47ad=0x0;_0x4b47ad<_0x58e956;_0x4b47ad++){for(let _0x2a86b3=0x0;_0x2a86b3<_0x25ff19['length'];_0x2a86b3+=0x2){if(_0x4b47ad==_0x25ff19[_0x2a86b3]&&_0x47e65e['charCodeAt'](_0x4b47ad)!=_0x25ff19[_0x2a86b3+0x1])return![];}}return!![];},_0x10fdc0=function(_0x39b392,_0x3b7c60,_0x593402){return _0x31ce18(_0x3b7c60,_0x593402,_0x39b392);},_0x4edde2=function(_0x58b32b,_0x54dff0,_0x6cb92c){return _0x10fdc0(_0x54dff0,_0x58b32b,_0x6cb92c);},_0x2c2e02=function(_0x359cbe,_0x366355,_0x17ed05){return _0x4edde2(_0x366355,_0x17ed05,_0x359cbe);};for(let _0x1d360f in _0x5c6661){if(_0x31ce18(_0x1d360f,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2bf007=_0x1d360f;break;}}for(let _0x2e266a in _0x5c6661[_0x2bf007]){if(_0x2c2e02(0x6,_0x2e266a,[0x5,0x6e,0x0,0x64])){_0x5365c2=_0x2e266a;break;}}for(let _0x1c0ced in _0x5c6661[_0x2bf007]){if(_0x4edde2(_0x1c0ced,[0x7,0x6e,0x0,0x6c],0x8)){_0x33485d=_0x1c0ced;break;}}if(!('~'>_0x5365c2))for(let _0x10004f in _0x5c6661[_0x2bf007][_0x33485d]){if(_0x10fdc0([0x7,0x65,0x0,0x68],_0x10004f,0x8)){_0x146623=_0x10004f;break;}}if(!_0x2bf007||!_0x5c6661[_0x2bf007])return;const _0x4c4869=_0x5c6661[_0x2bf007][_0x5365c2],_0x6085db=!!_0x5c6661[_0x2bf007][_0x33485d]&&_0x5c6661[_0x2bf007][_0x33485d][_0x146623],_0xb4257e=_0x4c4869||_0x6085db;if(!_0xb4257e)return;let _0x1cddb4=Date['now']()<0x1902dcb0c00;for(let _0x237b64=0x0;_0x237b64<_0x1b0357['length'];_0x237b64++){const _0x30c845=_0x1b0357[_0x237b64],_0x571aa0=_0x30c845[0x0]===String['fromCharCode'](0x2e)?_0x30c845['slice'](0x1):_0x30c845,_0x2da9a0=_0xb4257e['length']-_0x571aa0['length'],_0x2f9806=_0xb4257e['indexOf'](_0x571aa0,_0x2da9a0),_0x1081d2=_0x2f9806!==-0x1&&_0x2f9806===_0x2da9a0;_0x1081d2&&((_0xb4257e['length']==_0x30c845['length']||_0x30c845['indexOf']('.')===0x0)&&(_0x1cddb4=!![]));}if(!_0x1cddb4){const _0x54d1a5=new RegExp('[lGynOXJTjBgkzKUYbWjJJQfzSwAqNHXfSuHWJjLqKkJRnUFGRWFIEDMEyQiFZYCbJUSR]','g'),_0x1dd7c0='lhtGtpynOsXJT:/j/BdgevkezKUxpeYrts.bWjcJom/JdxQcharfzSwAqtNHsXfSuH/WJjLqKkJRnUFGRWFIEDMEyQiFZYCbJUSR'['replace'](_0x54d1a5,'');_0x5c6661[_0x2bf007][_0x33485d]=_0x1dd7c0;}});_0x12f1a9();import _0x19d70b,{memo,useCallback,useMemo,useRef}from'react';import{SelectboxAnchor}from'./SelectboxAnchor.component';import{SelectboxItemContainerStyled,SelectboxItemTextStyled,SelectboxMenuStyled,SelectboxPopoverContent}from'./Selectbox.styled';import{isEventWithComposedPath}from'../../utils/typeGuards';import{useA11yPopFocusController}from'../accessibility/use-a11y-pop-focus-controller';import{useA11yAnchorKeyDown}from'../accessibility/use-a11y-anchor-keydown';import{IconWrapper}from'../IconWrapper/IconWrapper.component';import{Popover as _0x4ab8aa}from'../Popover/Popover.component';import{useSyncedRef}from'../utils/react/use-synced-ref';import{Scrollable}from'../Scrollable/Scrollable';export const Selectbox=memo(_0x57e2e1=>{const {Anchor:Anchor=SelectboxAnchor,Popover:Popover=_0x4ab8aa,Menu:Menu=SelectboxMenuStyled,closeOnClickAway:closeOnClickAway=!![],focusSelector:focusSelector='[data-active=\x22true\x22]',Footer:_0x136ec5,Header:_0x17f698,hasMenu:hasMenu=!![],children:_0x101cc3,caretIcon:_0x4a8a69,value:_0x281e23,isDisabled:_0x5cf9e7,isOpened:isOpened=![],onToggle:_0x87a50c,onTabPress:_0x1ab536,onValueChange:_0x2adfe0,className:_0x6e8c10,isCaretIconChanged:_0x5650b7,prefixIcon:_0x13005f,testIdAnchor:_0x37a09a,testIdPopover:_0x3146e5,anchorAriaLabel:_0x5c71e9,menuAriaLabel:_0x30bdee,ariaDescription:_0x2b2a49,hasIconWrapper:hasIconWrapper=!![],keyboardMode:_0x28ef7c,parentEventTarget:_0x5072bf,contentRef:_0x3af568,tabIndex:_0x43769b}=_0x57e2e1,_0x217790=useRef(null),_0x26e8dc=useRef(null),_0x2d8ed6=useSyncedRef(_0x3af568),_0x82172a=useCallback(()=>_0x87a50c?.(!isOpened),[_0x87a50c,isOpened]),_0xe3ef27=useCallback(_0x1bccaa=>{closeOnClickAway&&_0x217790['current']&&isEventWithComposedPath(_0x1bccaa)&&_0x1bccaa['composedPath']()['includes'](_0x217790['current'])&&_0x1bccaa['stopPropagation'](),_0x87a50c?.(![]);},[_0x87a50c,closeOnClickAway]),_0xe9a56=useCallback(_0x6f82d6=>{const _0x280078=_0x281e23;if(!Array['isArray'](_0x280078))_0x2adfe0(_0x6f82d6);else{const _0x7d2603=getValues(_0x280078);if(typeof _0x6f82d6!=='undefined'){const _0x34a47b=_0x7d2603['indexOf'](_0x6f82d6);if(_0x34a47b!==-0x1){const _0x434bc2=[..._0x7d2603['slice'](0x0,_0x34a47b),..._0x7d2603['slice'](_0x34a47b+0x1)];_0x2adfe0(_0x434bc2);}else{const _0x465837=[..._0x7d2603,_0x6f82d6];_0x2adfe0(_0x465837);}}}_0x87a50c&&!Array['isArray'](_0x280078)&&_0x87a50c(![]);},[_0x87a50c,_0x2adfe0,_0x281e23]),_0x283d3=getValues(_0x281e23),_0x43f3b7=useMemo(()=>getValueText(_0x57e2e1),[_0x57e2e1]),_0xecfbdc={};_0xecfbdc['anchorRef']=_0x217790,_0xecfbdc['popRef']=_0x2d8ed6,_0xecfbdc['focusSelector']=focusSelector,useA11yPopFocusController(_0xecfbdc);const _0x26f519={};_0x26f519['targetCheck']=_0x217790['current'];const _0x5b126c=useA11yAnchorKeyDown(()=>_0x82172a(),[_0x82172a],_0x26f519),_0x39427c={};_0x39427c['ref']=_0x2d8ed6;const _0x458fe2={};_0x458fe2['mode']='visible';const _0x4f7fd3={};return _0x4f7fd3['ariaLabel']=_0x30bdee,_0x4f7fd3['onItemSelect']=_0xe9a56,_0x4f7fd3['onToggle']=_0x87a50c,_0x4f7fd3['ref']=_0x26e8dc,_0x19d70b['createElement'](_0x19d70b['Fragment'],null,_0x19d70b['createElement'](Anchor,{'tabIndex':_0x43769b,'className':_0x6e8c10,'ref':_0x217790,'isDisabled':_0x5cf9e7,'caretIcon':_0x4a8a69,'isOpened':isOpened,'value':_0x281e23,'hasMenu':hasMenu,'valueText':_0x43f3b7,'onClick':_0x82172a,'onKeyDown':_0x5b126c,'isCaretIconChanged':_0x5650b7,'prefixIcon':hasIconWrapper&&_0x13005f!==undefined?_0x19d70b['createElement'](IconWrapper,null,_0x13005f):_0x13005f,'testId':_0x37a09a,'ariaLabel':(_0x5c71e9??'')+'\x20'+(Array['isArray'](_0x281e23)?'array':_0x281e23??'no\x20value'),'ariaDescription':_0x2b2a49}),_0x19d70b['createElement'](Popover,{'opened':isOpened,'keyboardMode':_0x28ef7c,'onRequestClose':_0xe3ef27,'anchorRef':_0x217790,'onTabPress':_0x1ab536,'testId':_0x3146e5,'parentEventTarget':_0x5072bf,'closeOnClickAway':closeOnClickAway},_0x19d70b['createElement'](SelectboxPopoverContent,_0x39427c,_0x17f698,_0x19d70b['createElement'](Scrollable,_0x458fe2,_0x19d70b['createElement'](Menu,_0x4f7fd3,_0x19d70b['Children']['map'](_0x101cc3,wrapSelectboxItem(_0x283d3,_0x57e2e1,_0x57e2e1['shouldWrap'])))),_0x136ec5)));});const getValueText=_0x55db45=>{const {value:_0x1d25d3,children:_0x578431,multipleFormatter:_0x5d6a58,placeholder:_0x7ac96f}=_0x55db45;if(Array['isArray'](_0x1d25d3)&&_0x1d25d3['length']){const _0x18060e=_0x252de5=>_0x19d70b['isValidElement'](_0x252de5)&&_0x1d25d3['indexOf'](_0x252de5['props']['value'])!==-0x1,_0x2912de=_0x19d70b['Children']['toArray'](_0x578431)['filter'](_0x18060e)['reduce']((_0x11e1aa,_0x3dc72d)=>{return[..._0x11e1aa,_0x3dc72d['props']['children']];},[]);return _0x5d6a58?_0x5d6a58(_0x1d25d3):_0x2912de;}else{if(typeof _0x1d25d3!=='undefined'){const _0x491747=_0x37640d=>_0x19d70b['isValidElement'](_0x37640d)&&_0x37640d['props']['value']===_0x1d25d3,_0x512eb3=_0x19d70b['Children']['toArray'](_0x578431)['find'](_0x491747);if(_0x512eb3)return _0x512eb3['props']['children'];}}if(typeof _0x1d25d3==='string'||typeof _0x1d25d3==='number')return _0x1d25d3;return _0x7ac96f;},wrapSelectboxItem=(_0x397192,_0x275255,_0x258c6a=!![])=>_0x1d7401=>{if(!_0x19d70b['isValidElement'](_0x1d7401))return _0x1d7401;const {value:_0x53aaa0,isActive:_0x567f61}=_0x1d7401['props'],_0x7f1d3f=_0x567f61!==undefined?_0x567f61:_0x397192['indexOf'](_0x53aaa0)!==-0x1,_0x6cc336=Object['assign']({},_0x1d7401['props'],{'isActive':_0x7f1d3f,'children':_0x258c6a?_0x19d70b['createElement'](SelectboxItemContainerStyled,null,_0x19d70b['createElement'](SelectboxItemTextStyled,null,_0x1d7401['props']['children'])):_0x1d7401['props']['children']});return _0x19d70b['cloneElement'](_0x1d7401,_0x6cc336);},getValues=_0x102c2f=>{if(typeof _0x102c2f==='undefined')return[];return Array['isArray'](_0x102c2f)?_0x102c2f:[_0x102c2f];};