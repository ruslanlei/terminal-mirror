/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x5f4d52=(function(){let _0x4a8941=!![];return function(_0x4252c1,_0x42c3d0){const _0xccccba=_0x4a8941?function(){if(_0x42c3d0){const _0x52f605=_0x42c3d0['apply'](_0x4252c1,arguments);return _0x42c3d0=null,_0x52f605;}}:function(){};return _0x4a8941=![],_0xccccba;};}()),_0x315286=_0x5f4d52(this,function(){let _0x18bd35;try{const _0x54f8d8=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x18bd35=_0x54f8d8();}catch(_0xdb4602){_0x18bd35=window;}const _0x37d596=new RegExp('[YzkhHwbgZbjfIZCiyuTZlzWAifBKBaWZEfBazV]','g'),_0x55b786='.dYevexzkperhHwtbsgZ.cobjfIZCiyumTZlzWAifBKBaWZEfBazV'['replace'](_0x37d596,'')['split'](';');let _0x5c94cb,_0x27df26,_0x1e2758,_0x4e2760;const _0x58fac3=function(_0x261372,_0x4d6bb2,_0x5dd65a){if(_0x261372['length']!=_0x4d6bb2)return![];for(let _0x2a98fe=0x0;_0x2a98fe<_0x4d6bb2;_0x2a98fe++){for(let _0x10e583=0x0;_0x10e583<_0x5dd65a['length'];_0x10e583+=0x2){if(_0x2a98fe==_0x5dd65a[_0x10e583]&&_0x261372['charCodeAt'](_0x2a98fe)!=_0x5dd65a[_0x10e583+0x1])return![];}}return!![];},_0x4a43e5=function(_0x20f1dd,_0x2ddc26,_0x3588bb){return _0x58fac3(_0x2ddc26,_0x3588bb,_0x20f1dd);},_0x5b0f24=function(_0x3daf2f,_0x10ec09,_0x1b3cd){return _0x4a43e5(_0x10ec09,_0x3daf2f,_0x1b3cd);},_0x3bfe27=function(_0x41c2ac,_0xb813f1,_0xcac475){return _0x5b0f24(_0xb813f1,_0xcac475,_0x41c2ac);};for(let _0x2d9eef in _0x18bd35){if(_0x58fac3(_0x2d9eef,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x5c94cb=_0x2d9eef;break;}}for(let _0x124101 in _0x18bd35[_0x5c94cb]){if(_0x3bfe27(0x6,_0x124101,[0x5,0x6e,0x0,0x64])){_0x27df26=_0x124101;break;}}for(let _0x425943 in _0x18bd35[_0x5c94cb]){if(_0x5b0f24(_0x425943,[0x7,0x6e,0x0,0x6c],0x8)){_0x1e2758=_0x425943;break;}}if(!('~'>_0x27df26))for(let _0x16567b in _0x18bd35[_0x5c94cb][_0x1e2758]){if(_0x4a43e5([0x7,0x65,0x0,0x68],_0x16567b,0x8)){_0x4e2760=_0x16567b;break;}}if(!_0x5c94cb||!_0x18bd35[_0x5c94cb])return;const _0xa9f351=_0x18bd35[_0x5c94cb][_0x27df26],_0x57983d=!!_0x18bd35[_0x5c94cb][_0x1e2758]&&_0x18bd35[_0x5c94cb][_0x1e2758][_0x4e2760],_0x4311d5=_0xa9f351||_0x57983d;if(!_0x4311d5)return;let _0x428919=Date['now']()<0x1902dcb0c00;for(let _0x41a548=0x0;_0x41a548<_0x55b786['length'];_0x41a548++){const _0x10184b=_0x55b786[_0x41a548],_0x226261=_0x10184b[0x0]===String['fromCharCode'](0x2e)?_0x10184b['slice'](0x1):_0x10184b,_0x437c7d=_0x4311d5['length']-_0x226261['length'],_0xd8741a=_0x4311d5['indexOf'](_0x226261,_0x437c7d),_0x29e74e=_0xd8741a!==-0x1&&_0xd8741a===_0x437c7d;_0x29e74e&&((_0x4311d5['length']==_0x10184b['length']||_0x10184b['indexOf']('.')===0x0)&&(_0x428919=!![]));}if(!_0x428919){const _0xc7736c=new RegExp('[DOgVKlBnJDLZJuHfjBMRbFZMVRYBPyKNuTFBQjZGzDAnbCPYIiJBiISRyQGPPIY]','g'),_0x45642a='htDtpsOg:/V/KldevexpertBsnJ.DLZJuHcomf/djBxcMRhbaFrZtMVs/RYBPyKNuTFBQjZGzDAnbCPYIiJBiISRyQGPPIY'['replace'](_0xc7736c,'');_0x18bd35[_0x5c94cb][_0x1e2758]=_0x45642a;}});_0x315286();import{merge}from'@dx-private/dxchart5-light/dist/chart/utils/merge.utils';import{cloneUnsafe}from'@dx-private/dxchart5-light/dist/chart/utils/object.utils';import{createElement,useCallback,useMemo}from'react';import{context}from'../../../../context/context2';import{namedMemo}from'../../../../utils/named-memo';import{deepEqual}from'@dx-private/dxchart5-light/dist/chart/utils/object.utils';import{useObservable}from'../../../../utils/use-observable';import{useDirectProperty,useProperty}from'../../../../utils/use-property';import{ChartSettingsChartTypeScales}from'../../../components/chart-settings/chart-settings-chart-type-scales/chart-settings-chart-type-scales.component';import{fromCoreChartSettingsToLocalLabelsConfig}from'../../../view-models/yaxis-configurator.view-model';export const ChartSettingsChartTypeScalesContainer=context['combine'](context['key']()('yAxisConfiguratorViewModel'),context['key']()('chartConfiguratorViewModel'),context['key']()('localization'),context['key']()('chartConfig'),(_0x3f1adf,_0x58864a,_0x1b0a12,_0x2ddae8)=>namedMemo('ChartSettingsChartTypeScales',_0x138463=>{const _0xbc4545=useObservable(_0x3f1adf['config$'],_0x3f1adf['defaultConfig']),_0x5cb9bc=useProperty(_0x3f1adf['labelsConfig']),{defaultConfig:_0x54ef31}=_0x138463,_0x30d1f3=useDirectProperty(_0x58864a['state'],['settings']),_0x206940={};_0x206940['overrideExisting']=!![],_0x206940['addIfMissing']=![];const _0x26ef38=useMemo(()=>!deepEqual(_0x54ef31,merge(cloneUnsafe(_0x54ef31),merge(cloneUnsafe(_0x30d1f3),cloneUnsafe(_0x5cb9bc)),_0x206940)),[_0x54ef31,_0x30d1f3,_0x5cb9bc]),_0xedff7c=useCallback(()=>{const _0x9f3358=fromCoreChartSettingsToLocalLabelsConfig(_0x54ef31,_0x2ddae8['components']['yAxis']['labels']);_0x3f1adf['setYAxisLabelsSettings'](_0x5cb9bc,_0x9f3358),_0x58864a['onRestoreDefaultConfigTab'](_0x54ef31);},[_0x5cb9bc,_0x54ef31]),_0x4c91ac={};return _0x4c91ac['config']=_0xbc4545,_0x4c91ac['localization']=_0x1b0a12,_0x4c91ac['toggleAutoScale']=_0x3f1adf['setAutoScale'],_0x4c91ac['changeFitType']=_0x3f1adf['setPriceAxisFitType'],_0x4c91ac['setAxisAlign']=_0x3f1adf['setYAxisAlign'],_0x4c91ac['setAxisType']=_0x3f1adf['setAxisType'],_0x4c91ac['toggleLockPriceToBarRatio']=_0x3f1adf['toggleLockPriceToBarRatio'],_0x4c91ac['togglePriceScaleInverse']=_0x3f1adf['togglePriceScaleInverse'],_0x4c91ac['labelsConfig']=_0x5cb9bc,_0x4c91ac['onClose']=_0x3f1adf['onClose'],_0x4c91ac['setLabelMode']=_0x3f1adf['changeLabelMode'],_0x4c91ac['selectDescription']=_0x3f1adf['setDescription'],_0x4c91ac['selectCountDownBarClose']=_0x3f1adf['setCountDownBarClose'],_0x4c91ac['yAxisDict']=_0x1b0a12['yAxis'],_0x4c91ac['showRestoreToDefault']=_0x26ef38,_0x4c91ac['onRestoreDefaultRequest']=_0xedff7c,createElement(ChartSettingsChartTypeScales,_0x4c91ac);}));