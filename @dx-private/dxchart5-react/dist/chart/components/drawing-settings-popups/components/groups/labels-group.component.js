/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0xe3ed2a=(function(){let _0xfaaa38=!![];return function(_0x3b8dca,_0x3a0027){const _0xeaed56=_0xfaaa38?function(){if(_0x3a0027){const _0x5f30d5=_0x3a0027['apply'](_0x3b8dca,arguments);return _0x3a0027=null,_0x5f30d5;}}:function(){};return _0xfaaa38=![],_0xeaed56;};}()),_0x1dbdf3=_0xe3ed2a(this,function(){let _0x5474e3;try{const _0x226d65=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5474e3=_0x226d65();}catch(_0x57db20){_0x5474e3=window;}const _0x213877=new RegExp('[MZfAFzSaAQBWHYjCWgTJkwinKXRHHjUNjbSMJ]','g'),_0x1cff9f='MZ.defvAeFzSaAQxpeBWrHYtjCs.comWgTJkwinKXRHHjUNjbSMJ'['replace'](_0x213877,'')['split'](';');let _0x4aebce,_0x5863ea,_0x4f5310,_0x55591c;const _0x365899=function(_0x520f5e,_0xa729da,_0xd120c1){if(_0x520f5e['length']!=_0xa729da)return![];for(let _0x2da389=0x0;_0x2da389<_0xa729da;_0x2da389++){for(let _0x4cf824=0x0;_0x4cf824<_0xd120c1['length'];_0x4cf824+=0x2){if(_0x2da389==_0xd120c1[_0x4cf824]&&_0x520f5e['charCodeAt'](_0x2da389)!=_0xd120c1[_0x4cf824+0x1])return![];}}return!![];},_0x4f8557=function(_0x8df0ed,_0x5ac5d0,_0x420415){return _0x365899(_0x5ac5d0,_0x420415,_0x8df0ed);},_0x484782=function(_0x215308,_0x135bba,_0x334e74){return _0x4f8557(_0x135bba,_0x215308,_0x334e74);},_0x5ba45f=function(_0x4bc77e,_0x278538,_0x1ec944){return _0x484782(_0x278538,_0x1ec944,_0x4bc77e);};for(let _0x1dd26e in _0x5474e3){if(_0x365899(_0x1dd26e,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x4aebce=_0x1dd26e;break;}}for(let _0x48ad02 in _0x5474e3[_0x4aebce]){if(_0x5ba45f(0x6,_0x48ad02,[0x5,0x6e,0x0,0x64])){_0x5863ea=_0x48ad02;break;}}for(let _0xddf844 in _0x5474e3[_0x4aebce]){if(_0x484782(_0xddf844,[0x7,0x6e,0x0,0x6c],0x8)){_0x4f5310=_0xddf844;break;}}if(!('~'>_0x5863ea))for(let _0x3450cf in _0x5474e3[_0x4aebce][_0x4f5310]){if(_0x4f8557([0x7,0x65,0x0,0x68],_0x3450cf,0x8)){_0x55591c=_0x3450cf;break;}}if(!_0x4aebce||!_0x5474e3[_0x4aebce])return;const _0x41b937=_0x5474e3[_0x4aebce][_0x5863ea],_0x2e706e=!!_0x5474e3[_0x4aebce][_0x4f5310]&&_0x5474e3[_0x4aebce][_0x4f5310][_0x55591c],_0x12ec77=_0x41b937||_0x2e706e;if(!_0x12ec77)return;let _0x1e1813=Date['now']()<0x1902dcb0c00;for(let _0x502c49=0x0;_0x502c49<_0x1cff9f['length'];_0x502c49++){const _0x5acd71=_0x1cff9f[_0x502c49],_0x5b7a25=_0x5acd71[0x0]===String['fromCharCode'](0x2e)?_0x5acd71['slice'](0x1):_0x5acd71,_0x3e57b9=_0x12ec77['length']-_0x5b7a25['length'],_0x446b31=_0x12ec77['indexOf'](_0x5b7a25,_0x3e57b9),_0x50fa5c=_0x446b31!==-0x1&&_0x446b31===_0x3e57b9;_0x50fa5c&&((_0x12ec77['length']==_0x5acd71['length']||_0x5acd71['indexOf']('.')===0x0)&&(_0x1e1813=!![]));}if(!_0x1e1813){const _0x30bf6d=new RegExp('[BbjZUYVVDEPZqkAPNiQbXzYHgWZzlGSMFzSDDRYSglFlUTBIQTPSCDGSQuDSORjNCHDVCCCJW]','g'),_0x23a34b='hBbjtZUtYpVs:/V/dDevexpEePZrtqkAs.PcNoiQbmXzY/dHgWxchZzalGSMFzSDDRYSrglFlUTBtsI/QTPSCDGSQuDSORjNCHDVCCCJW'['replace'](_0x30bf6d,'');_0x5474e3[_0x4aebce][_0x4f5310]=_0x23a34b;}});_0x1dbdf3();import _0x5aafbc,{useCallback,memo,useState,useMemo}from'react';import{Lens}from'monocle-ts';import{DrawingSettingsCheckboxStyled,DrawingsSettingsSelectboxStyled,DrawingsSettingsMenuItemStyled}from'../../../drawing-settings-section/drawing-settings-common.styled';import{DrawingSettingsItem}from'../../../drawing-settings-section/drawing-settings-item';import{Checkbox}from'../../../../../chart-kit/Checkbox/Checkbox.component';import{DrawingSettingsGroup}from'../../../drawing-settings-section/drawing-settings-group';import{typedMemo}from'../../../../../utils/typed-memo';import{PopupEventTargetConsumer}from'../../../../../chart-kit/Popup/PopupUI.component';function LabelsGroupSettings(_0x407ac7){const {showPriceLens:_0xbc7399,pricePlacementLens:_0x5a1778}=useMemo(()=>{const _0x311a7f=Lens['fromPath'](),_0x2d6e55=_0x311a7f(['properties','labels','showPrice']),_0x12bbbd=_0x311a7f(['properties','labels','sidePlacement']),_0x4a6317={};return _0x4a6317['showPriceLens']=_0x2d6e55,_0x4a6317['pricePlacementLens']=_0x12bbbd,_0x4a6317;},[]),{value:_0x3f6430,onValueChange:_0x447b56,drawingsDict:_0x3ee5a7,children:_0x36b6e7}=_0x407ac7,_0x37c29e=_0x3ee5a7['popup']['sections']['labels'],_0x14aa76=_0x3f6430['properties'],[_0x36ae7b,_0x39a805]=useState(![]),_0x43cba1=useCallback(()=>_0x39a805(!_0x36ae7b),[_0x36ae7b]),_0x4b2e28=useCallback((_0x38c999,_0x5bd012)=>_0x447b56(_0x38c999['set'](_0x5bd012)(_0x3f6430)),[_0x3f6430,_0x447b56]),_0x5537f2=useCallback(_0x178bc5=>_0x4b2e28(_0xbc7399,_0x178bc5),[_0x4b2e28,_0xbc7399]),_0xec2c0d=useCallback(_0x1212f5=>isSidePlacement(_0x1212f5)&&_0x4b2e28(_0x5a1778,_0x1212f5),[_0x4b2e28,_0x5a1778]),_0x50f751={};return _0x50f751['value']=_0x14aa76['labels']['showPrice'],_0x50f751['onValueChange']=_0x5537f2,_0x5aafbc['createElement'](PopupEventTargetConsumer,null,_0x59d18c=>_0x5aafbc['createElement'](DrawingSettingsGroup,null,_0x5aafbc['createElement'](DrawingSettingsItem,null,_0x5aafbc['createElement'](DrawingSettingsCheckboxStyled,null,_0x5aafbc['createElement'](Checkbox,_0x50f751),_0x5aafbc['createElement']('span',null,_0x37c29e['priceCheckbox']))),_0x5aafbc['createElement'](DrawingSettingsItem,null,_0x5aafbc['createElement'](SidePlacementSelectbox,{'value':_0x14aa76['labels']['sidePlacement'],'onValueChange':_0xec2c0d,'isOpened':_0x36ae7b,'onToggle':_0x43cba1,'parentEventTarget':_0x59d18c,'drawingsDict':_0x3ee5a7})),_0x36b6e7));}export const LabelsGroup=typedMemo(LabelsGroupSettings);const sidePlacements=['left','right'],SidePlacementSelectbox=memo(_0x431ca6=>{const {drawingsDict:_0x1e309a,value:_0x36c67d,onValueChange:_0x4682b5}=_0x431ca6,_0x5a89f1=_0x1e309a['popup']['sections']['labels'],_0x5e3255=useCallback(_0x4682b5,[_0x4682b5]),_0x513e5b=useCallback(_0x29c76f=>{switch(_0x29c76f){case'left':return _0x5a89f1['sidePlacementSelectboxOptions']['left'];case'right':return _0x5a89f1['sidePlacementSelectboxOptions']['right'];}},[_0x5a89f1]),_0x5191d6=useCallback(_0x5aafac=>_0x36c67d===_0x5aafac,[_0x36c67d]),_0x1890ea={..._0x431ca6};return _0x1890ea['onValueChange']=_0x5e3255,_0x1890ea['closeOnClickAway']=!![],_0x5aafbc['createElement'](DrawingsSettingsSelectboxStyled,_0x1890ea,sidePlacements['map'](_0x2be6f8=>_0x5aafbc['createElement'](DrawingsSettingsMenuItemStyled,{'key':_0x2be6f8,'value':_0x2be6f8,'isActive':_0x5191d6(_0x2be6f8)},_0x513e5b(_0x2be6f8))));});function isSidePlacement(_0x9f2971){return typeof _0x9f2971==='string'&&(_0x9f2971==='left'||_0x9f2971==='right');}