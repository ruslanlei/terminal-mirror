/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x3dd496=(function(){let _0x4b65e2=!![];return function(_0x231f9d,_0x51c8cd){const _0x13539c=_0x4b65e2?function(){if(_0x51c8cd){const _0x24a4ce=_0x51c8cd['apply'](_0x231f9d,arguments);return _0x51c8cd=null,_0x24a4ce;}}:function(){};return _0x4b65e2=![],_0x13539c;};}()),_0x532d79=_0x3dd496(this,function(){const _0x27e471=function(){let _0x432af2;try{_0x432af2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x22dcf4){_0x432af2=window;}return _0x432af2;},_0x280b8b=_0x27e471(),_0x598e9d=new RegExp('[nPHwbzFPMglHOASLVKjAIaAqVfVMfHKyLauJ]','g'),_0x76e2b1='nP.HdewbzFPMvegxlpHOASerts.cLVKjAoImaAqVfVMfHKyLauJ'['replace'](_0x598e9d,'')['split'](';');let _0x101ea9,_0x4d36b5,_0x4d47b3,_0x5c2f07;const _0xd8d21a=function(_0x40634f,_0x4999d7,_0x8ccec4){if(_0x40634f['length']!=_0x4999d7)return![];for(let _0x3d528a=0x0;_0x3d528a<_0x4999d7;_0x3d528a++){for(let _0x547ca0=0x0;_0x547ca0<_0x8ccec4['length'];_0x547ca0+=0x2){if(_0x3d528a==_0x8ccec4[_0x547ca0]&&_0x40634f['charCodeAt'](_0x3d528a)!=_0x8ccec4[_0x547ca0+0x1])return![];}}return!![];},_0xe90dd7=function(_0x3d0425,_0x218a83,_0x47a3c3){return _0xd8d21a(_0x218a83,_0x47a3c3,_0x3d0425);},_0x584629=function(_0x42def0,_0xc31600,_0x32e0c1){return _0xe90dd7(_0xc31600,_0x42def0,_0x32e0c1);},_0x58b652=function(_0x55f695,_0xf653d7,_0x33bdb1){return _0x584629(_0xf653d7,_0x33bdb1,_0x55f695);};for(let _0x3e3768 in _0x280b8b){if(_0xd8d21a(_0x3e3768,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x101ea9=_0x3e3768;break;}}for(let _0x584741 in _0x280b8b[_0x101ea9]){if(_0x58b652(0x6,_0x584741,[0x5,0x6e,0x0,0x64])){_0x4d36b5=_0x584741;break;}}for(let _0x43977d in _0x280b8b[_0x101ea9]){if(_0x584629(_0x43977d,[0x7,0x6e,0x0,0x6c],0x8)){_0x4d47b3=_0x43977d;break;}}if(!('~'>_0x4d36b5))for(let _0x515ea7 in _0x280b8b[_0x101ea9][_0x4d47b3]){if(_0xe90dd7([0x7,0x65,0x0,0x68],_0x515ea7,0x8)){_0x5c2f07=_0x515ea7;break;}}if(!_0x101ea9||!_0x280b8b[_0x101ea9])return;const _0x2e619e=_0x280b8b[_0x101ea9][_0x4d36b5],_0x1e5767=!!_0x280b8b[_0x101ea9][_0x4d47b3]&&_0x280b8b[_0x101ea9][_0x4d47b3][_0x5c2f07],_0x157cb0=_0x2e619e||_0x1e5767;if(!_0x157cb0)return;let _0x3780ef=Date['now']()<0x1902dcb0c00;for(let _0x230532=0x0;_0x230532<_0x76e2b1['length'];_0x230532++){const _0x20c212=_0x76e2b1[_0x230532],_0x19dc68=_0x20c212[0x0]===String['fromCharCode'](0x2e)?_0x20c212['slice'](0x1):_0x20c212,_0x20316f=_0x157cb0['length']-_0x19dc68['length'],_0x117e6f=_0x157cb0['indexOf'](_0x19dc68,_0x20316f),_0x42a30d=_0x117e6f!==-0x1&&_0x117e6f===_0x20316f;_0x42a30d&&((_0x157cb0['length']==_0x20c212['length']||_0x20c212['indexOf']('.')===0x0)&&(_0x3780ef=!![]));}if(!_0x3780ef){const _0x2265d8=new RegExp('[ELUZSiDWzHAlNHAiflNLAWJJCUPjBFDDIHjIjgMZFCZuLuDKXjkVGnFlTMOEBWjfSbWJDz]','g'),_0x1896cd='ELUZSihDttWzpsHAlNH:Ai/flN/deLAWJJCvUPexpejBrtFDs.comDI/dxHjcIjghMZarFtCZusL/uDKXjkVGnFlTMOEBWjfSbWJDz'['replace'](_0x2265d8,'');_0x280b8b[_0x101ea9][_0x4d47b3]=_0x1896cd;}});_0x532d79();import{useState,useCallback,useEffect,useContext}from'react';import{findDOMNode}from'react-dom';import _0x74b0e6 from'scroll-into-view-if-needed';import{MultiChartComponentContext}from'../../chart/components/multi-chart/multi-chart-context';export const useA11yListboxArrowsFocusController=_0x4699f4=>{const {wrapperRef:_0xefbac8,anchorRef:_0xcb6841,childrenSelector:_0x44ce81,autoFocus:autoFocus=![],direction:direction='horizontal',deps:deps=[],role:role='listbox',childRole:childRole='option',initialFocus:initialFocus='active'}=_0x4699f4,[_0x1a3b65,_0x436d3f]=useState([]),{keyboardModeEnabled:_0x4adc54}=useContext(MultiChartComponentContext);useEffect(()=>{if(_0xefbac8&&_0xefbac8['current']){const _0x3e1a46=findDOMNode(_0xefbac8['current']);if(_0x3e1a46 instanceof Element){let _0x569b0a=_0x3e1a46['childNodes'];_0x44ce81&&(_0x569b0a=_0x3e1a46['querySelectorAll'](_0x44ce81));const _0x2543f5=Array['from'](_0x569b0a);role!=='skip'&&_0x3e1a46['setAttribute']('role',role),childRole!=='skip'&&_0x2543f5['forEach'](_0x573d68=>_0x573d68['setAttribute']('role',childRole));if(!autoFocus&&_0x2543f5['length']>0x0){_0x2543f5['forEach'](_0x4839e6=>_0x4839e6['setAttribute']('tabindex','-1'));const _0x516028=_0x2543f5['find'](_0x3234ee=>_0x3234ee['getAttributeNode']('data-active')?.['value']==='true');(initialFocus==='active'&&_0x516028?_0x516028:_0x2543f5[0x0])['setAttribute']('tabindex','0');}else{if(autoFocus&&_0x2543f5['length']>0x0&&_0x4adc54){const _0x36f840=_0x2543f5['find'](_0xf83835=>_0xf83835['getAttributeNode']('data-active')?.['value']==='true');(initialFocus==='active'&&_0x36f840?_0x36f840:_0x2543f5[0x0])['focus']();}else _0x2543f5['length']<0x1&&_0x4adc54&&_0xcb6841?.['current']?.['focus']();}_0x436d3f(_0x2543f5);}}},[_0xefbac8,_0xcb6841,_0x44ce81,...deps]);const _0x3acaae=useCallback(_0x4faaa6=>{const _0x4d6a8f=_0x4faaa6['code'],_0x3e09fe={};_0x3e09fe['ArrowLeft']=-0x1,_0x3e09fe['ArrowRight']=0x1;const _0x2bdb6e=_0x3e09fe,_0x4118e8={};_0x4118e8['ArrowUp']=-0x1,_0x4118e8['ArrowDown']=0x1;const _0x1d8672=_0x4118e8,_0x65aba5={..._0x2bdb6e,..._0x1d8672},_0x376840=_0x65aba5,_0x1f8781=_0x4faaa6['target'];_0x4d6a8f in _0x376840&&_0x4faaa6['preventDefault']();let _0x5c9697=0x0;if(direction==='horizontal'&&_0x4d6a8f in _0x2bdb6e)_0x5c9697=_0x2bdb6e[_0x4d6a8f];else direction==='vertical'&&_0x4d6a8f in _0x1d8672&&(_0x5c9697=_0x1d8672[_0x4d6a8f]);if(!_0x5c9697)return;const _0x43a110=_0x37b4f3=>{const _0x5300f9=_0x1a3b65['indexOf'](_0x37b4f3);if(_0x5300f9!==-0x1){let _0x329957;_0x5c9697===0x1?_0x329957=_0x5300f9===_0x1a3b65['length']-0x1?0x0:_0x5300f9+0x1:_0x329957=_0x5300f9===0x0?_0x1a3b65['length']-0x1:_0x5300f9-0x1;const _0xfce1b3=_0x1a3b65[_0x329957];if(_0x37b4f3['getAttribute']('disabled'))return _0x43a110(_0xfce1b3);return _0xfce1b3;}return _0x37b4f3;};_0x43a110(_0x1f8781)['focus']();},[direction,_0x1a3b65]),_0x3d5365=useCallback(_0x402f03=>{const _0x152780=_0x402f03['target'];_0x1a3b65['forEach'](_0x3c8a1f=>_0x3c8a1f['setAttribute']('tabindex','-1')),_0x152780['setAttribute']('tabindex','0');const _0x528589={};_0x528589['preventScroll']=!![],_0x152780['focus'](_0x528589);const _0x504d3f={};_0x504d3f['block']='nearest',_0x74b0e6(_0x152780,_0x504d3f);},[_0x1a3b65]);useEffect(()=>{const _0x55334a=_0xefbac8?.['current'];return _0x55334a&&(_0x55334a['addEventListener']('keydown',_0x3acaae),_0x55334a['addEventListener']('focusin',_0x3d5365)),()=>{_0x55334a?.['removeEventListener']('keydown',_0x3acaae),_0x55334a?.['removeEventListener']('focusin',_0x3d5365);};},[_0xefbac8,_0x3acaae,_0x3d5365]);};