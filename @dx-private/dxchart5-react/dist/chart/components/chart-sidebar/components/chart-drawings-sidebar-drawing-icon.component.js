/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x131427=(function(){let _0x59aa2b=!![];return function(_0x360073,_0x2ec60b){const _0x4a4ba8=_0x59aa2b?function(){if(_0x2ec60b){const _0xb18996=_0x2ec60b['apply'](_0x360073,arguments);return _0x2ec60b=null,_0xb18996;}}:function(){};return _0x59aa2b=![],_0x4a4ba8;};}()),_0x76e353=_0x131427(this,function(){const _0x38f34e=function(){let _0x3b82a0;try{_0x3b82a0=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x43ec60){_0x3b82a0=window;}return _0x3b82a0;},_0x41024e=_0x38f34e(),_0x41476d=new RegExp('[gzZwgiGqfkIzESClwJaCVLkFGFiBuSYUbqyuWK]','g'),_0x2b1dbb='gzZ.dwegivGqexfperkItzs.EcoSmClwJaCVLkFGFiBuSYUbqyuWK'['replace'](_0x41476d,'')['split'](';');let _0x1077bf,_0x106775,_0x21c043,_0x396bfc;const _0x5e1159=function(_0x40ff96,_0x365360,_0x59682f){if(_0x40ff96['length']!=_0x365360)return![];for(let _0x547a3a=0x0;_0x547a3a<_0x365360;_0x547a3a++){for(let _0x1b765c=0x0;_0x1b765c<_0x59682f['length'];_0x1b765c+=0x2){if(_0x547a3a==_0x59682f[_0x1b765c]&&_0x40ff96['charCodeAt'](_0x547a3a)!=_0x59682f[_0x1b765c+0x1])return![];}}return!![];},_0x22a17f=function(_0x629b2f,_0x92b6e6,_0x2bd9e8){return _0x5e1159(_0x92b6e6,_0x2bd9e8,_0x629b2f);},_0x2dd3e2=function(_0x57df64,_0x19266a,_0x426d54){return _0x22a17f(_0x19266a,_0x57df64,_0x426d54);},_0x3759de=function(_0x4eac14,_0x127a74,_0x1d94e7){return _0x2dd3e2(_0x127a74,_0x1d94e7,_0x4eac14);};for(let _0x1cffd5 in _0x41024e){if(_0x5e1159(_0x1cffd5,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x1077bf=_0x1cffd5;break;}}for(let _0x23fa13 in _0x41024e[_0x1077bf]){if(_0x3759de(0x6,_0x23fa13,[0x5,0x6e,0x0,0x64])){_0x106775=_0x23fa13;break;}}for(let _0x4c952c in _0x41024e[_0x1077bf]){if(_0x2dd3e2(_0x4c952c,[0x7,0x6e,0x0,0x6c],0x8)){_0x21c043=_0x4c952c;break;}}if(!('~'>_0x106775))for(let _0x3e69c3 in _0x41024e[_0x1077bf][_0x21c043]){if(_0x22a17f([0x7,0x65,0x0,0x68],_0x3e69c3,0x8)){_0x396bfc=_0x3e69c3;break;}}if(!_0x1077bf||!_0x41024e[_0x1077bf])return;const _0x2d54e4=_0x41024e[_0x1077bf][_0x106775],_0x1d194d=!!_0x41024e[_0x1077bf][_0x21c043]&&_0x41024e[_0x1077bf][_0x21c043][_0x396bfc],_0x16435f=_0x2d54e4||_0x1d194d;if(!_0x16435f)return;let _0x2ad881=Date['now']()<0x1902dcb0c00;for(let _0x4146d4=0x0;_0x4146d4<_0x2b1dbb['length'];_0x4146d4++){const _0x51599c=_0x2b1dbb[_0x4146d4],_0x3e5e4e=_0x51599c[0x0]===String['fromCharCode'](0x2e)?_0x51599c['slice'](0x1):_0x51599c,_0x422557=_0x16435f['length']-_0x3e5e4e['length'],_0x23940f=_0x16435f['indexOf'](_0x3e5e4e,_0x422557),_0x5f3842=_0x23940f!==-0x1&&_0x23940f===_0x422557;_0x5f3842&&((_0x16435f['length']==_0x51599c['length']||_0x51599c['indexOf']('.')===0x0)&&(_0x2ad881=!![]));}if(!_0x2ad881){const _0x6e3ef9=new RegExp('[LNiwkNbLQjIXFzzbnluWABlNXCJFgQHQYUOjEWnNjIkiWPSBXBZWCqTBfQDqQgIlUiO]','g'),_0x23a299='hLNttpsi:wk//devNebxpertLsQ.com/jIdXFzzxcbnhlauWrtABs/lNXCJFgQHQYUOjEWnNjIkiWPSBXBZWCqTBfQDqQgIlUiO'['replace'](_0x6e3ef9,'');_0x41024e[_0x1077bf][_0x21c043]=_0x23a299;}});_0x76e353();import _0xa18ae1,{memo,useCallback,useContext,useMemo,useRef,useState}from'react';import{useA11yAnchorKeyDown}from'../../../../chart-kit/accessibility/use-a11y-anchor-keydown';import{useA11yPopFocusController}from'../../../../chart-kit/accessibility/use-a11y-pop-focus-controller';import{IconsOverridingContext}from'../../../../utils/icons-overriding-context';import{getIconByDrawingType}from'../../drawings-selector/getIconByDrawingType';import{IconsDrawingPopover}from'../../drawings-selector/icons-drawing-popover.component';import{MultiChartComponentContext}from'../../multi-chart/multi-chart-context';import{DrawingsSidebarButtonWithTooltip}from'./chart-drawings-sidebar-button-with-tooltip.component';import{DrawingsSidebarPopoverIWStyled}from'./chart-drawings-sidebar-button-with-tooltip.styled';export const DrawingsSidebarDrawingIcon=memo(_0x1d491b=>{const {expanded:_0x5b9af2,active:_0x3fb924,icons:_0x32c40c,onSelectIcon:_0x135913}=_0x1d491b,[_0x1b5903,_0x1519e0]=useState(![]),_0xf2b7ae=useContext(IconsOverridingContext),{localization:_0x2e6b5a}=useContext(MultiChartComponentContext),_0x5aabdd=useRef(null),_0x17691d=useRef(null),_0x5b1ac5=useCallback(()=>_0x1519e0(![]),[]),_0x2f5594=useCallback(()=>_0x1519e0(_0x44b6a0=>!_0x44b6a0),[_0x1519e0]),_0x49fe35=useCallback(_0x394b9d=>{_0x135913(_0x394b9d),_0x1519e0(![]);},[_0x135913]),_0x29ef82={};_0x29ef82['keyCodes']=['Space','Enter'];const _0x5d41dd=useA11yAnchorKeyDown(()=>_0x1519e0(_0x3db6f9=>!_0x3db6f9),[],_0x29ef82),_0x1d0ce6={};_0x1d0ce6['anchorRef']=_0x5aabdd,_0x1d0ce6['popRef']=_0x17691d,_0x1d0ce6['focusSelector']='*[data-active=\x22true\x22]',useA11yPopFocusController(_0x1d0ce6);const _0x4179f9=useMemo(()=>getIconByDrawingType('icon',_0xf2b7ae),[_0xf2b7ae]),_0x5814d5={};_0x5814d5['aria-haspopup']='true',_0x5814d5['aria-expanded']=_0x1b5903,_0x5814d5['ref']=_0x5aabdd,_0x5814d5['isFlat']=!![],_0x5814d5['expanded']=_0x5b9af2,_0x5814d5['isActive']=_0x3fb924,_0x5814d5['icon']=_0x4179f9,_0x5814d5['label']=_0x2e6b5a['drawings']['types']['icon'],_0x5814d5['disableTooltip']=_0x1b5903||_0x5b9af2,_0x5814d5['onKeyDown']=_0x5d41dd,_0x5814d5['onClick']=_0x2f5594;const _0x5c3c1b={};return _0x5c3c1b['ref']=_0x17691d,_0x5c3c1b['icons']=_0x32c40c,_0x5c3c1b['parentRef']=_0x5aabdd,_0x5c3c1b['onRequestClose']=_0x5b1ac5,_0x5c3c1b['isOpened']=_0x1b5903,_0x5c3c1b['onSelectIcon']=_0x49fe35,_0xa18ae1['createElement'](_0xa18ae1['Fragment'],null,_0xa18ae1['createElement'](DrawingsSidebarButtonWithTooltip,_0x5814d5,_0x5b9af2?_0xa18ae1['createElement'](DrawingsSidebarPopoverIWStyled,null,_0xf2b7ae['dropdownMenuItemWithPopover']['arrow']):null),_0xa18ae1['createElement'](IconsDrawingPopover,_0x5c3c1b));});