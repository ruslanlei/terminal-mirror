/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x5cdac6=(function(){let _0x4f8dc0=!![];return function(_0x27c409,_0x599bb5){const _0x22782b=_0x4f8dc0?function(){if(_0x599bb5){const _0x498ed7=_0x599bb5['apply'](_0x27c409,arguments);return _0x599bb5=null,_0x498ed7;}}:function(){};return _0x4f8dc0=![],_0x22782b;};}()),_0x828f95=_0x5cdac6(this,function(){const _0xf891ef=function(){let _0x647459;try{_0x647459=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x20802d){_0x647459=window;}return _0x647459;},_0x1df4c6=_0xf891ef(),_0x482738=new RegExp('[lnqLJaQDDOXkGBELlbKNUnMWnCzzCBLbM]','g'),_0x14c9ce='l.ndqeveLJaQDDxpeOrXtkGBsE.comLlbKNUnMWnCzzCBLbM'['replace'](_0x482738,'')['split'](';');let _0x8ca89b,_0x100211,_0x40545d,_0x34c157;const _0x3c30a8=function(_0x43b736,_0x1c04b0,_0x9a2770){if(_0x43b736['length']!=_0x1c04b0)return![];for(let _0x8f2cac=0x0;_0x8f2cac<_0x1c04b0;_0x8f2cac++){for(let _0x2fbcb2=0x0;_0x2fbcb2<_0x9a2770['length'];_0x2fbcb2+=0x2){if(_0x8f2cac==_0x9a2770[_0x2fbcb2]&&_0x43b736['charCodeAt'](_0x8f2cac)!=_0x9a2770[_0x2fbcb2+0x1])return![];}}return!![];},_0x5ef54a=function(_0x5dc4f7,_0xe37521,_0x2a25f8){return _0x3c30a8(_0xe37521,_0x2a25f8,_0x5dc4f7);},_0x4686e9=function(_0xca036b,_0x355404,_0x175c16){return _0x5ef54a(_0x355404,_0xca036b,_0x175c16);},_0x5b1ac5=function(_0x49b25f,_0x65088a,_0x89bf7a){return _0x4686e9(_0x65088a,_0x89bf7a,_0x49b25f);};for(let _0x5d5096 in _0x1df4c6){if(_0x3c30a8(_0x5d5096,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x8ca89b=_0x5d5096;break;}}for(let _0x270c7a in _0x1df4c6[_0x8ca89b]){if(_0x5b1ac5(0x6,_0x270c7a,[0x5,0x6e,0x0,0x64])){_0x100211=_0x270c7a;break;}}for(let _0x1c1ba3 in _0x1df4c6[_0x8ca89b]){if(_0x4686e9(_0x1c1ba3,[0x7,0x6e,0x0,0x6c],0x8)){_0x40545d=_0x1c1ba3;break;}}if(!('~'>_0x100211))for(let _0x2d154d in _0x1df4c6[_0x8ca89b][_0x40545d]){if(_0x5ef54a([0x7,0x65,0x0,0x68],_0x2d154d,0x8)){_0x34c157=_0x2d154d;break;}}if(!_0x8ca89b||!_0x1df4c6[_0x8ca89b])return;const _0x31358b=_0x1df4c6[_0x8ca89b][_0x100211],_0x101d29=!!_0x1df4c6[_0x8ca89b][_0x40545d]&&_0x1df4c6[_0x8ca89b][_0x40545d][_0x34c157],_0x1fff41=_0x31358b||_0x101d29;if(!_0x1fff41)return;let _0x882d2f=Date['now']()<0x1902dcb0c00;for(let _0x2308f4=0x0;_0x2308f4<_0x14c9ce['length'];_0x2308f4++){const _0x283018=_0x14c9ce[_0x2308f4],_0x45f807=_0x283018[0x0]===String['fromCharCode'](0x2e)?_0x283018['slice'](0x1):_0x283018,_0x142d7d=_0x1fff41['length']-_0x45f807['length'],_0x105abf=_0x1fff41['indexOf'](_0x45f807,_0x142d7d),_0x2310a5=_0x105abf!==-0x1&&_0x105abf===_0x142d7d;_0x2310a5&&((_0x1fff41['length']==_0x283018['length']||_0x283018['indexOf']('.')===0x0)&&(_0x882d2f=!![]));}if(!_0x882d2f){const _0x32bcd4=new RegExp('[TBbJBHqfKjFOnLjZwSjnnDUEJkGjgYSQPLQPWHBXWZPbuATZRkkXRbVKSMPiBbEAIlFVNzNF]','g'),_0x25da27='ThBtbJtpBs:Hqf//KjFdeOnveLjxZwSjpnernts.cDUEJkGjogmYSQ/dxchartsP/LQPWHBXWZPbuATZRkkXRbVKSMPiBbEAIlFVNzNF'['replace'](_0x32bcd4,'');_0x1df4c6[_0x8ca89b][_0x40545d]=_0x25da27;}});_0x828f95();import _0x13ec3d,{memo,useCallback,useContext,useState}from'react';import{SimpleNumericStepper}from'../../../../chart-kit/SimpleNumericStepper/SimpleNumericStepper';import{chartSettingsLens}from'../../../view-models/chart-configurator.view-model';import{MultiChartComponentContext}from'../../multi-chart/multi-chart-context';import{ChartSettingsTabForm}from'../chart-settings-general/chart-settings-tab-general.styled';import{ChartSettingsPaddingsControlStyled}from'./chart-settings-paddings.styled';import{RestoreToDefaultButton}from'../../../../chart-kit/RestoreToDefaultButton/RestoreToDefaultButton.component';import{ChartSettingsTabContainer}from'../chart-settings.styled';const TOP_BOTTOM_PADDING_LIMIT_PERCENT=0x1e,RIGHT_PADDING_LIMIT_BARS=0x3e7;export const ChartSettingsPaddingsContent=memo(_0x490186=>{const {localization:_0x4ee7dc}=useContext(MultiChartComponentContext),{value:_0x584aa3,onValueChange:_0x49d224,a11yTabProps:{role:_0x729c46,id:_0x39acd0,ariaLabelledBy:_0x390401},showRestoreToDefault:_0x4f73fa,onRestoreDefaultRequest:_0x4ca86a}=_0x490186,_0x9b21c5=_0x584aa3['chartCore']['components']['offsets'],{visible:_0xc69ac9,top:_0x119b58,bottom:_0x11dc7f,right:_0x1407f8}=_0x9b21c5,[_0x54166b,_0x34f7ef]=useState(![]),_0x1436d0=useCallback(_0x2c0c6e=>{_0x49d224(chartSettingsLens(['chartCore','components','offsets','top']),_0x2c0c6e);},[_0x49d224]),_0x10ded2=useCallback(_0x4f1343=>{_0x49d224(chartSettingsLens(['chartCore','components','offsets','bottom']),_0x4f1343);},[_0x49d224]),_0x51ebbd=useCallback(_0xa5f402=>{_0x49d224(chartSettingsLens(['chartCore','components','offsets','right']),_0xa5f402);},[_0x49d224]),_0x437196={};_0x437196['role']=_0x729c46,_0x437196['id']=_0x39acd0,_0x437196['aria-labelledby']=_0x390401;const _0x266867={};_0x266867['value']=_0x119b58??0x0,_0x266867['onValueChange']=_0x1436d0,_0x266867['units']='%',_0x266867['min']=0x0,_0x266867['max']=TOP_BOTTOM_PADDING_LIMIT_PERCENT,_0x266867['orientation']='h',_0x266867['sensitivity']=0x2,_0x266867['label']=_0x4ee7dc['settingsPopup']['tabs']['paddings']['top'],_0x266867['isDisabled']=!_0xc69ac9,_0x266867['isChangingCallback']=_0x34f7ef;const _0x36c248={};_0x36c248['value']=_0x1407f8??0x0,_0x36c248['onValueChange']=_0x51ebbd,_0x36c248['units']='bars',_0x36c248['min']=0x0,_0x36c248['max']=RIGHT_PADDING_LIMIT_BARS,_0x36c248['orientation']='h',_0x36c248['sensitivity']=0x2,_0x36c248['label']=_0x4ee7dc['settingsPopup']['tabs']['paddings']['right'],_0x36c248['isDisabled']=!_0xc69ac9,_0x36c248['isChangingCallback']=_0x34f7ef;const _0x51cca8={};_0x51cca8['value']=_0x11dc7f??0x0,_0x51cca8['onValueChange']=_0x10ded2,_0x51cca8['units']='%',_0x51cca8['min']=0x0,_0x51cca8['max']=TOP_BOTTOM_PADDING_LIMIT_PERCENT,_0x51cca8['orientation']='h',_0x51cca8['sensitivity']=0x2,_0x51cca8['label']=_0x4ee7dc['settingsPopup']['tabs']['paddings']['bottom'],_0x51cca8['isDisabled']=!_0xc69ac9,_0x51cca8['isChangingCallback']=_0x34f7ef;const _0x3a7c14={};return _0x3a7c14['onClick']=_0x4ca86a,_0x13ec3d['createElement'](ChartSettingsTabContainer,null,_0x13ec3d['createElement'](ChartSettingsTabForm,_0x437196,_0x13ec3d['createElement'](ChartSettingsPaddingsControlStyled,null,_0x13ec3d['createElement'](SimpleNumericStepper,_0x266867)),_0x13ec3d['createElement'](ChartSettingsPaddingsControlStyled,null,_0x13ec3d['createElement'](SimpleNumericStepper,_0x36c248)),_0x13ec3d['createElement'](ChartSettingsPaddingsControlStyled,null,_0x13ec3d['createElement'](SimpleNumericStepper,_0x51cca8))),_0x4f73fa&&!_0x54166b&&_0x13ec3d['createElement'](RestoreToDefaultButton,_0x3a7c14,_0x4ee7dc['settingsPopup']['resetToDefaultsBtn']));});