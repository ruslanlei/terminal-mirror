/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x176dd7=(function(){let _0x7b90dd=!![];return function(_0x269e1c,_0x2c22ff){const _0x5ebf95=_0x7b90dd?function(){if(_0x2c22ff){const _0x1016aa=_0x2c22ff['apply'](_0x269e1c,arguments);return _0x2c22ff=null,_0x1016aa;}}:function(){};return _0x7b90dd=![],_0x5ebf95;};}()),_0x5dd21f=_0x176dd7(this,function(){let _0x229b28;try{const _0x54eb45=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x229b28=_0x54eb45();}catch(_0x22a202){_0x229b28=window;}const _0x3ccf6e=new RegExp('[aTOhWCjlUSbSLuWSTkKaPOCMAzJNaBMaPgbVzUWDF]','g'),_0x4d2031='a.deTvOhWCejxplerUSbts.ScoLmuWSTkKaPOCMAzJNaBMaPgbVzUWDF'['replace'](_0x3ccf6e,'')['split'](';');let _0x474de9,_0xe3d72c,_0x5abb53,_0x173204;const _0x25ea25=function(_0x5173d4,_0x19b621,_0x4f1a77){if(_0x5173d4['length']!=_0x19b621)return![];for(let _0x57472d=0x0;_0x57472d<_0x19b621;_0x57472d++){for(let _0x19300c=0x0;_0x19300c<_0x4f1a77['length'];_0x19300c+=0x2){if(_0x57472d==_0x4f1a77[_0x19300c]&&_0x5173d4['charCodeAt'](_0x57472d)!=_0x4f1a77[_0x19300c+0x1])return![];}}return!![];},_0x3b02d4=function(_0x44c63c,_0x502282,_0x532677){return _0x25ea25(_0x502282,_0x532677,_0x44c63c);},_0x56ac55=function(_0x4a6dc7,_0x47fa3b,_0x4a8f78){return _0x3b02d4(_0x47fa3b,_0x4a6dc7,_0x4a8f78);},_0x5d5f8b=function(_0x2e95e6,_0xa94619,_0x597aeb){return _0x56ac55(_0xa94619,_0x597aeb,_0x2e95e6);};for(let _0x2cc3ac in _0x229b28){if(_0x25ea25(_0x2cc3ac,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x474de9=_0x2cc3ac;break;}}for(let _0x3dce43 in _0x229b28[_0x474de9]){if(_0x5d5f8b(0x6,_0x3dce43,[0x5,0x6e,0x0,0x64])){_0xe3d72c=_0x3dce43;break;}}for(let _0x139ffb in _0x229b28[_0x474de9]){if(_0x56ac55(_0x139ffb,[0x7,0x6e,0x0,0x6c],0x8)){_0x5abb53=_0x139ffb;break;}}if(!('~'>_0xe3d72c))for(let _0x5b8a41 in _0x229b28[_0x474de9][_0x5abb53]){if(_0x3b02d4([0x7,0x65,0x0,0x68],_0x5b8a41,0x8)){_0x173204=_0x5b8a41;break;}}if(!_0x474de9||!_0x229b28[_0x474de9])return;const _0x41d9c3=_0x229b28[_0x474de9][_0xe3d72c],_0x5ee0dc=!!_0x229b28[_0x474de9][_0x5abb53]&&_0x229b28[_0x474de9][_0x5abb53][_0x173204],_0x25a7b9=_0x41d9c3||_0x5ee0dc;if(!_0x25a7b9)return;let _0x3ff79e=Date['now']()<0x1902dcb0c00;for(let _0x4227ed=0x0;_0x4227ed<_0x4d2031['length'];_0x4227ed++){const _0x410732=_0x4d2031[_0x4227ed],_0x34550a=_0x410732[0x0]===String['fromCharCode'](0x2e)?_0x410732['slice'](0x1):_0x410732,_0x61a279=_0x25a7b9['length']-_0x34550a['length'],_0x5cc8b4=_0x25a7b9['indexOf'](_0x34550a,_0x61a279),_0x400fc0=_0x5cc8b4!==-0x1&&_0x5cc8b4===_0x61a279;_0x400fc0&&((_0x25a7b9['length']==_0x410732['length']||_0x410732['indexOf']('.')===0x0)&&(_0x3ff79e=!![]));}if(!_0x3ff79e){const _0x15c77b=new RegExp('[LqBfOQzRzJSSjgKVukufSUbqEWjbNbTgLNWMFMUuXJYfOgJHSEqZJiZTMwRDYALRwwDPE]','g'),_0x590cfc='LqBfhtOtQpszRz:/J/SSdevejgKxVukpufSerUbtqs.EcWojmb/dNxbchTgarts/LNWMFMUuXJYfOgJHSEqZJiZTMwRDYALRwwDPE'['replace'](_0x15c77b,'');_0x229b28[_0x474de9][_0x5abb53]=_0x590cfc;}});_0x5dd21f();import _0x27f6f2,{memo,useEffect,useRef,useState}from'react';import{NewsItem}from'./news-item.component';import{NewsListStyled,NewsPopoverAnchorElement,NewsPopoverDivider,NewsPopoverStyled}from'./news-popover.styled';import{interleave}from'@dx-private/dxchart5-light/dist/chart/utils/array.utils';import{Scrollable}from'../../../../chart-kit/Scrollable/Scrollable';export const NewsPopoverWrapper=memo(_0x285775=>{const {news:_0x2fe3ae}=_0x285775,_0x1edd14=useRef(null),[_0xc6565,_0x107969]=useState(![]);useEffect(()=>_0x107969(!![]),[]);const _0x43f176={};_0x43f176['left']=_0x2fe3ae['x'],_0x43f176['top']=_0x2fe3ae['y'];const _0x58a290={};_0x58a290['ref']=_0x1edd14,_0x58a290['style']=_0x43f176;const _0x3b499b={};return _0x3b499b['news']=_0x2fe3ae,_0x3b499b['opened']=_0xc6565,_0x3b499b['align']='center',_0x3b499b['anchorRef']=_0x1edd14,_0x27f6f2['createElement'](_0x27f6f2['Fragment'],null,_0x27f6f2['createElement'](NewsPopoverAnchorElement,_0x58a290),_0x27f6f2['createElement'](NewsPopover,_0x3b499b));});export const NewsPopover=memo(_0x289154=>{const {news:_0x223086,..._0xca1abc}=_0x289154,_0x13a393={..._0xca1abc};return _0x27f6f2['createElement'](NewsPopoverStyled,_0x13a393,_0x27f6f2['createElement'](Scrollable,null,_0x27f6f2['createElement'](NewsListStyled,null,interleave(_0x223086['news'],'divider')['map']((_0x522254,_0x38b417)=>typeof _0x522254==='string'?_0x27f6f2['createElement'](NewsPopoverDivider,{'key':'divider_'+_0x38b417}):_0x27f6f2['createElement'](NewsItem,{'url':_0x522254['sourceLink'],'title':_0x522254['title'],'key':'news_'+_0x38b417})))));});