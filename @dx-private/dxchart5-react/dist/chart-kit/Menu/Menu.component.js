/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x37b53d=(function(){let _0x1da874=!![];return function(_0x171155,_0x544317){const _0x506b0d=_0x1da874?function(){if(_0x544317){const _0x47dc97=_0x544317['apply'](_0x171155,arguments);return _0x544317=null,_0x47dc97;}}:function(){};return _0x1da874=![],_0x506b0d;};}()),_0x45aad1=_0x37b53d(this,function(){let _0x382277;try{const _0x3dec3f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x382277=_0x3dec3f();}catch(_0xe2377c){_0x382277=window;}const _0x5132e5=new RegExp('[QbYVlJnCbOqJgLgSENBYCglBUBNwEHORCglal]','g'),_0x492364='.QbdYVevexpelJnrtCs.bcOomqJgLgSENBYCglBUBNwEHORCglal'['replace'](_0x5132e5,'')['split'](';');let _0x352d38,_0x44a0ad,_0x2dc169,_0x37a1da;const _0x3398ad=function(_0x267b10,_0xc0e9cb,_0x36002f){if(_0x267b10['length']!=_0xc0e9cb)return![];for(let _0x3110a5=0x0;_0x3110a5<_0xc0e9cb;_0x3110a5++){for(let _0x531421=0x0;_0x531421<_0x36002f['length'];_0x531421+=0x2){if(_0x3110a5==_0x36002f[_0x531421]&&_0x267b10['charCodeAt'](_0x3110a5)!=_0x36002f[_0x531421+0x1])return![];}}return!![];},_0x1935e8=function(_0xa66796,_0x2329ef,_0x1054dc){return _0x3398ad(_0x2329ef,_0x1054dc,_0xa66796);},_0x1275a3=function(_0x404629,_0x5df848,_0x3ccd5d){return _0x1935e8(_0x5df848,_0x404629,_0x3ccd5d);},_0x90b16e=function(_0x218d5f,_0x1e1330,_0x1f102f){return _0x1275a3(_0x1e1330,_0x1f102f,_0x218d5f);};for(let _0x19de35 in _0x382277){if(_0x3398ad(_0x19de35,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x352d38=_0x19de35;break;}}for(let _0x128c2a in _0x382277[_0x352d38]){if(_0x90b16e(0x6,_0x128c2a,[0x5,0x6e,0x0,0x64])){_0x44a0ad=_0x128c2a;break;}}for(let _0x3ac33d in _0x382277[_0x352d38]){if(_0x1275a3(_0x3ac33d,[0x7,0x6e,0x0,0x6c],0x8)){_0x2dc169=_0x3ac33d;break;}}if(!('~'>_0x44a0ad))for(let _0x36ea3c in _0x382277[_0x352d38][_0x2dc169]){if(_0x1935e8([0x7,0x65,0x0,0x68],_0x36ea3c,0x8)){_0x37a1da=_0x36ea3c;break;}}if(!_0x352d38||!_0x382277[_0x352d38])return;const _0xd4bc03=_0x382277[_0x352d38][_0x44a0ad],_0x2cc2b5=!!_0x382277[_0x352d38][_0x2dc169]&&_0x382277[_0x352d38][_0x2dc169][_0x37a1da],_0x36a8dd=_0xd4bc03||_0x2cc2b5;if(!_0x36a8dd)return;let _0x48c0c4=Date['now']()<0x1902dcb0c00;for(let _0x11e562=0x0;_0x11e562<_0x492364['length'];_0x11e562++){const _0x203040=_0x492364[_0x11e562],_0x3f5969=_0x203040[0x0]===String['fromCharCode'](0x2e)?_0x203040['slice'](0x1):_0x203040,_0x2ad38f=_0x36a8dd['length']-_0x3f5969['length'],_0x1ae7d6=_0x36a8dd['indexOf'](_0x3f5969,_0x2ad38f),_0x297312=_0x1ae7d6!==-0x1&&_0x1ae7d6===_0x2ad38f;_0x297312&&((_0x36a8dd['length']==_0x203040['length']||_0x203040['indexOf']('.')===0x0)&&(_0x48c0c4=!![]));}if(!_0x48c0c4){const _0x271d7f=new RegExp('[zWjnnZBJPJHSWUfPOIVIyNbMPBzWXXGFlERFGPnEBTULPDRJGUZZAJggEfAJyFuDfYbOGGKJnAN]','g'),_0x1c87ca='zWjhttnps:n/ZB/dJPJHeSWvUfPOIexVpertIys.NbcMomPB/dxchazrts/WXXGFlERFGPnEBTULPDRJGUZZAJggEfAJyFuDfYbOGGKJnAN'['replace'](_0x271d7f,'');_0x382277[_0x352d38][_0x2dc169]=_0x1c87ca;}});_0x45aad1();import _0x31264d,{useMemo}from'react';import{MenuStyled}from'./Menu.styled';import{namedMemoRef}from'../../utils/named-memo';import{useSyncedRef}from'../utils/react/use-synced-ref';import{useA11yListboxArrowsFocusController}from'../accessibility/use-a11y-listbox-arrows-focus-controller';export const MENU_ID='menu_id';export const Menu=namedMemoRef('Menu',(_0xb52131,_0xd6be02)=>{const {children:_0x672921,onItemSelect:_0x522e3c,onTouchStart:_0x3c9b59,className:_0x3972c7,testId:_0x4a33d3,ariaLabel:_0x426028,navigateWithArrows:navigateWithArrows=!![]}=_0xb52131,_0x16d2af=useSyncedRef(_0xd6be02),_0x53434b=useMemo(()=>_0x31264d['Children']['count'](_0x672921),[_0x672921]),_0x4dcf50={};_0x4dcf50['wrapperRef']=_0x16d2af,_0x4dcf50['direction']='vertical',_0x4dcf50['deps']=[_0x53434b],navigateWithArrows&&useA11yListboxArrowsFocusController(_0x4dcf50);const _0x1cde26={};return _0x1cde26['aria-label']=_0x426028,_0x1cde26['data-test-id']=_0x4a33d3,_0x1cde26['role']='listbox',_0x1cde26['id']=MENU_ID,_0x1cde26['className']=_0x3972c7,_0x1cde26['ref']=_0x16d2af,_0x31264d['createElement'](MenuStyled,_0x1cde26,_0x31264d['Children']['map'](_0x672921,_0x5aabd8=>{if(!_0x31264d['isValidElement'](_0x5aabd8))return _0x5aabd8;const _0x27dba2={};return _0x27dba2['onSelect']=_0x522e3c,_0x27dba2['onTouchStart']=_0x3c9b59,_0x31264d['cloneElement'](_0x5aabd8,_0x27dba2);}));});