/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x3a0848=(function(){let _0x2854a4=!![];return function(_0x3d305e,_0x1ebff6){const _0x1d3677=_0x2854a4?function(){if(_0x1ebff6){const _0x343b3c=_0x1ebff6['apply'](_0x3d305e,arguments);return _0x1ebff6=null,_0x343b3c;}}:function(){};return _0x2854a4=![],_0x1d3677;};}()),_0x14a31e=_0x3a0848(this,function(){const _0x192cce=function(){let _0x4c788f;try{_0x4c788f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5a7588){_0x4c788f=window;}return _0x4c788f;},_0x2849c4=_0x192cce(),_0x43eebb=new RegExp('[bSNSWyjXCgBwDwJnBYKyGKMYzByRXzAhuK]','g'),_0x2fa3ec='.dbeSNvSWeyjXxpeCgrts.BwDcomwJnBYKyGKMYzByRXzAhuK'['replace'](_0x43eebb,'')['split'](';');let _0x5f077a,_0x25be0c,_0x55fe87,_0x1e8370;const _0x5d4166=function(_0x493ed1,_0xaaddb4,_0x479543){if(_0x493ed1['length']!=_0xaaddb4)return![];for(let _0x2d8c76=0x0;_0x2d8c76<_0xaaddb4;_0x2d8c76++){for(let _0x175a7d=0x0;_0x175a7d<_0x479543['length'];_0x175a7d+=0x2){if(_0x2d8c76==_0x479543[_0x175a7d]&&_0x493ed1['charCodeAt'](_0x2d8c76)!=_0x479543[_0x175a7d+0x1])return![];}}return!![];},_0x21c15e=function(_0x283d8a,_0x3b465c,_0x13472e){return _0x5d4166(_0x3b465c,_0x13472e,_0x283d8a);},_0x3f556d=function(_0x371c03,_0x1213c8,_0x21b29e){return _0x21c15e(_0x1213c8,_0x371c03,_0x21b29e);},_0x2f894a=function(_0xd3918f,_0x22cf96,_0x31df84){return _0x3f556d(_0x22cf96,_0x31df84,_0xd3918f);};for(let _0x3ec911 in _0x2849c4){if(_0x5d4166(_0x3ec911,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x5f077a=_0x3ec911;break;}}for(let _0x3b8d7d in _0x2849c4[_0x5f077a]){if(_0x2f894a(0x6,_0x3b8d7d,[0x5,0x6e,0x0,0x64])){_0x25be0c=_0x3b8d7d;break;}}for(let _0x2f4f12 in _0x2849c4[_0x5f077a]){if(_0x3f556d(_0x2f4f12,[0x7,0x6e,0x0,0x6c],0x8)){_0x55fe87=_0x2f4f12;break;}}if(!('~'>_0x25be0c))for(let _0x5cabb5 in _0x2849c4[_0x5f077a][_0x55fe87]){if(_0x21c15e([0x7,0x65,0x0,0x68],_0x5cabb5,0x8)){_0x1e8370=_0x5cabb5;break;}}if(!_0x5f077a||!_0x2849c4[_0x5f077a])return;const _0x4105e8=_0x2849c4[_0x5f077a][_0x25be0c],_0x4685bf=!!_0x2849c4[_0x5f077a][_0x55fe87]&&_0x2849c4[_0x5f077a][_0x55fe87][_0x1e8370],_0xb6c4b9=_0x4105e8||_0x4685bf;if(!_0xb6c4b9)return;let _0x3bd867=Date['now']()<0x1902dcb0c00;for(let _0x33d3d9=0x0;_0x33d3d9<_0x2fa3ec['length'];_0x33d3d9++){const _0x527f28=_0x2fa3ec[_0x33d3d9],_0x40b2e5=_0x527f28[0x0]===String['fromCharCode'](0x2e)?_0x527f28['slice'](0x1):_0x527f28,_0x15859c=_0xb6c4b9['length']-_0x40b2e5['length'],_0x3a760c=_0xb6c4b9['indexOf'](_0x40b2e5,_0x15859c),_0x48ad92=_0x3a760c!==-0x1&&_0x3a760c===_0x15859c;_0x48ad92&&((_0xb6c4b9['length']==_0x527f28['length']||_0x527f28['indexOf']('.')===0x0)&&(_0x3bd867=!![]));}if(!_0x3bd867){const _0x572ec4=new RegExp('[BlMNFuUFiDzZVIyJRbBJiEujPIjKyTJRIyNHPjYBUBQlnMlKNqUljkTJzBWBiTYRMVnUQHVLgER]','g'),_0x328bac='hBlttps://devexpMerNts.FcouUFiDzZVm/IdxcyJRhartbBs/JiEujPIjKyTJRIyNHPjYBUBQlnMlKNqUljkTJzBWBiTYRMVnUQHVLgER'['replace'](_0x572ec4,'');_0x2849c4[_0x5f077a][_0x55fe87]=_0x328bac;}});_0x14a31e();import{context}from'../../context/context2';import{newSink}from'../../context/sink2';import{merge,pairwise}from'rxjs';import{distinctUntilChanged,map,skip,tap,withLatestFrom,filter}from'rxjs/operators';import{chartSettingsAutoScalePriceAxis,chartSettingsPriceAxisFit}from'../model/chart.model';import{lensLockPriceToBarRatio}from'./chart-configurator.view-model';import{convertToProperty,createPropertyAdapter}from'../../utils/property.utils';import{CanvasElement,CHART_UUID}from'@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';import{option,record}from'fp-ts';import{Lens}from'monocle-ts';import{observable}from'fp-ts-rxjs';import{createAdapter}from'../../utils/adapter.utils';import{pipe}from'fp-ts/function';import{callTracerProxy}from'../../utils/debug/call-tracer';import{deepEqual}from'@dx-private/dxchart5-light/dist/chart/utils/object.utils';const lensYAxisAlign=Lens['fromPath']()(['chartCore','components','yAxis','align']),priceScaleInverseLens=Lens['fromPath']()(['chartCore','scale','inverse']),lensYAxis=Lens['fromPath']()(['chartCore','components','yAxis','type']),lensAutoScale=Lens['fromPath']()(['chartCore','scale','auto']);export const createYAxisConfiguratorViewModel=context['combine'](context['key']()('chartConfiguratorViewModel'),context['key']()('actionsHistoryVM'),context['key']()('chartInstance'),context['key']()('multiChartViewModel'),context['key']()('chartDataViewModel'),context['key']()('rootElement'),context['key']()('initialGeneralSettings'),context['key']()('chartId'),context['key']()('chartConfig'),(_0x5b2402,_0x46eb46,_0x1d4a76,_0x48a589,_0x3e8d85,_0x13b16c,_0x3ef9e9,_0x5720ea,_0x21fc2e)=>{const _0x1599e9=fromCoreChartSettingsToLocalLabelsConfig(_0x3ef9e9,_0x21fc2e['components']['yAxis']['labels']),[_0x2c21ba,_0xac643b]=createPropertyAdapter(![]),_0x1539a3={};_0x1539a3['x']=0x0,_0x1539a3['y']=0x0;const [_0x463135,_0x2fcc55]=createPropertyAdapter(_0x1539a3),[_0x285754,_0x106206]=createAdapter(),[_0x1a2cf5,_0x507af1]=createPropertyAdapter(_0x1599e9),_0x4a7b02=convertToProperty(_0x1d4a76['canvasBoundsContainer']['observeBoundsChanged'](CanvasElement['PANE_UUID_Y_AXIS'](CHART_UUID))['pipe'](map(_0xc00f78=>_0xc00f78['width']),distinctUntilChanged()),0x0),_0x56ffef=convertToProperty(_0x1d4a76['canvasBoundsContainer']['observeBoundsChanged'](CanvasElement['PANE_UUID'](CHART_UUID))['pipe'](map(_0x299241=>_0x299241['width']),distinctUntilChanged()),0x0),_0x32d057=convertToProperty(pipe(_0x5b2402['state'],observable['map'](_0x27c983=>_0x27c983['settings']['chartCore']['components']['yAxis']['align'])),'right'),_0x350d65=_0x5d716b=>{if(_0x5b2402['state']['getValue']()['settings']['chartCore']['components']['yAxis']['type']==='percent')return;pipe(_0x5b2402['state']['getValue']()['settings'],chartSettingsAutoScalePriceAxis['set'](_0x5d716b),_0x2e7c03=>_0x5b2402['setConfig'](_0x2e7c03),()=>_0x5b2402['setConfig'](lensAutoScale['set'](_0x5d716b)(_0x5b2402['state']['getValue']()['settings']),![]));},_0x25e302=(_0x52f588,_0x3db928)=>{const _0x51245f=_0x5b2402['state']['getValue']();if(_0x51245f['settings']['chartCore']['components']['yAxis']['type']==='percent')return;const _0xbd946f=getAxisFit(_0x51245f,_0x52f588,_0x3db928);_0x5b2402['setConfig'](chartSettingsPriceAxisFit['set'](_0xbd946f)(_0x51245f['settings']));},_0x2c3dde=(_0x126b95,_0x3b65e1=!![])=>{const _0x15897e=_0x5b2402['state']['getValue']();_0x5b2402['setConfig'](lensYAxis['set'](_0x126b95)(_0x15897e['settings']),_0x3b65e1);},_0x1527bb=()=>{const {lockPriceToBarRatio:_0x386204}=_0x5b2402['state']['getValue']()['settings']['chartCore']['scale'];if(_0x386204)return;const _0x45acd3=_0x5b2402['state']['getValue']()['settings']['chartCore']['components']['yAxis']['type'];_0x2c3dde(_0x45acd3==='percent'?'regular':'percent');},_0x5857a6=()=>{const {lockPriceToBarRatio:_0x1f48dd}=_0x5b2402['state']['getValue']()['settings']['chartCore']['scale'];if(_0x1f48dd)return;const _0xd9fb08=_0x5b2402['state']['getValue']()['settings']['chartCore']['components']['yAxis']['type'];_0x2c3dde(_0xd9fb08==='logarithmic'?'regular':'logarithmic');},_0x5eddda=_0x496e4d=>{_0x5b2402['setConfig'](priceScaleInverseLens['set'](_0x496e4d)(_0x5b2402['state']['getValue']()['settings']));},_0x517635=(_0x3cf2aa,_0x314929=!![])=>{_0x3cf2aa&&(_0x2c3dde('regular'),_0x350d65(![])),_0x5b2402['setConfig'](lensLockPriceToBarRatio['set'](_0x3cf2aa)(_0x5b2402['state']['getValue']()['settings']),_0x314929);},_0xe960a4=_0x1d4a76['canvasBoundsContainer']['getBoundsHitTest'](CanvasElement['PANE_UUID_Y_AXIS'](CHART_UUID));_0x1d4a76['events']['addYAxisContextMenuClickListener'](_0x6b9eaf=>{_0x285754(_0x6b9eaf);});const _0x5ab3db=()=>_0x2c21ba(![]),_0x2c43df=(_0x3efe3c,_0x26fc0e)=>{const _0x2f3b3e=_0x507af1['getValue'](),_0x1975cf={..._0x2f3b3e};_0x1975cf['labels']={..._0x2f3b3e['labels']},_0x1975cf['labels'][_0x3efe3c]=_0x26fc0e;const _0x5e8e5e=_0x1975cf;_0x161ebf(_0x2f3b3e,_0x5e8e5e);},_0x1c204b=_0x376204=>{_0x5b2402['setConfig'](lensYAxisAlign['set'](_0x376204)(_0x5b2402['state']['getValue']()['settings']));},_0x25bb5c=_0x299d19=>{const _0x4e7d77=_0x507af1['getValue'](),_0x3d0d64={..._0x4e7d77};_0x3d0d64['descriptions']=_0x299d19;const _0x40c2a7=_0x3d0d64;_0x161ebf(_0x4e7d77,_0x40c2a7);},_0x469312=_0xf0568a=>{const _0x56ee52=_0x507af1['getValue'](),_0xf132f5={..._0x56ee52};_0xf132f5['countDownToBarClose']=_0xf0568a;const _0x583396=_0xf132f5;_0x161ebf(_0x56ee52,_0x583396);},_0x161ebf=(_0x46d274,_0x32f414)=>{const _0x152aba=_0x45f569=>{if(_0x48a589['state']['getValue']()['isGeneralSettingsSyncEnabled']){const _0x39d2d7=fromLocalLabelsConfigToCoreChartSettings(_0x5b2402['state']['getValue']()['settings'],_0x45f569);_0x48a589['setGeneralSettings'](_0x39d2d7);}else _0x1a2cf5(_0x45f569);},_0x1466b7=()=>_0x152aba(_0x32f414),_0x1b41f7=()=>_0x152aba(_0x46d274),_0x2acbcd={};_0x2acbcd['type']='y_axis_labels_change',_0x2acbcd['redo']=_0x1466b7,_0x2acbcd['undo']=_0x1b41f7,_0x46eb46['pushAction'](_0x2acbcd,!![]);},_0x435387=()=>_0x5eddda(!_0x5b2402['state']['getValue']()['settings']['chartCore']['scale']['inverse']),_0x59d993=()=>_0x517635(!_0x5b2402['state']['getValue']()['settings']['chartCore']['scale']['lockPriceToBarRatio']),_0x4e72bc=pipe(_0x5b2402['state'],observable['map'](_0x2880e5=>_0x2880e5['settings']['chartCore']['scale']['auto']),distinctUntilChanged(),tap(_0x53bd84=>{_0x1d4a76['setAutoScale'](_0x53bd84);})),_0x21d68d=merge(_0x1d4a76['canvasInputListener']['observeLongTouch'](_0xe960a4)['pipe'](map(_0x326b48=>({'x':_0x326b48['targetTouches'][0x0]['clientX'],'y':_0x326b48['targetTouches'][0x0]['clientY']}))),_0x106206['pipe'](tap(_0x5e640f=>_0x5e640f['preventDefault']()),map(_0x3d852c=>{const {left:_0x54ba4e,top:_0x57b0bc}=_0x13b16c['getBoundingClientRect'](),_0x1c19df=_0x3d852c['clientX']-_0x54ba4e,_0x455fa0=_0x3d852c['clientY']-_0x57b0bc,_0x33e508={};return _0x33e508['x']=_0x1c19df,_0x33e508['y']=_0x455fa0,_0x33e508;})))['pipe'](tap(({x:_0x219dc2,y:_0x2410d5})=>{const _0x471f87={};_0x471f87['x']=_0x219dc2,_0x471f87['y']=_0x2410d5,_0x463135(_0x471f87),_0x2c21ba(!![]);})),_0x1b179c=pipe(_0x5b2402['state'],observable['map'](_0x425b6f=>_0x425b6f['settings']['chartCore']['scale']['lockPriceToBarRatio']),distinctUntilChanged(),tap(_0x4f8412=>_0x1d4a76['yAxisComponent']['setLockPriceToBarRatio'](_0x4f8412))),_0x2e2b1e=pipe(_0x507af1,observable['map'](_0xb90e0d=>_0xb90e0d['descriptions']),distinctUntilChanged(),tap(_0x3bf5c0=>_0x1d4a76['yAxisComponent']['changeLabelsDescriptionVisibility'](_0x3bf5c0))),_0x2652bb=pipe(_0x507af1,observable['map'](_0x474da7=>_0x474da7['countDownToBarClose']?'label':'none'),distinctUntilChanged(),tap(_0xcd5a4d=>_0x1d4a76['yAxisComponent']['changeLabelMode']('countdownToBarClose',_0xcd5a4d))),_0x47e0a6=pipe(_0x507af1,observable['map'](_0x2629bc=>_0x2629bc['labels']['lastPrice']),filter(Boolean),distinctUntilChanged(),tap(_0x266afc=>_0x1d4a76['yAxisComponent']['changeLabelMode']('lastPrice',_0x266afc))),_0x24ee4e=pipe(_0x507af1,observable['map'](_0x227806=>_0x227806['labels']['studies']),filter(Boolean),distinctUntilChanged(),tap(_0x4bd1e7=>{const _0x10d024=Object['values'](_0x1d4a76['paneManager']['paneComponents']);_0x10d024['flatMap'](_0x5090e1=>Array['from'](_0x5090e1['dataSeries']))['forEach'](_0x3107d8=>_0x3107d8['config']['labelMode']=_0x4bd1e7),_0x1d4a76['yAxisComponent']['changeLabelMode']('studies',_0x4bd1e7);})),_0x1d0351=pipe(_0x507af1,observable['map'](_0x3576bd=>_0x3576bd['labels']['prevDayClose']),filter(Boolean),distinctUntilChanged(),tap(_0x5107b2=>_0x1d4a76['yAxisComponent']['changeLabelMode']('prevDayClose',_0x5107b2))),_0x4c6f9e=pipe(_0x507af1,observable['map'](_0x4fc857=>_0x4fc857['labels']['prePostMarket']),filter(Boolean),distinctUntilChanged(),tap(_0x530bb4=>_0x1d4a76['yAxisComponent']['changeLabelMode']('prePostMarket',_0x530bb4))),_0x192b6d=pipe(_0x507af1,observable['map'](_0x35ec64=>_0x35ec64['labels']['highLow']),filter(Boolean),distinctUntilChanged(),tap(_0x21bc69=>_0x1d4a76['yAxisComponent']['changeLabelMode']('highLow',_0x21bc69))),_0x3f0b30=pipe(_0x507af1,observable['map'](_0x40743d=>_0x40743d['labels']['bidAsk']),filter(Boolean),distinctUntilChanged(),tap(_0x175896=>_0x1d4a76['yAxisComponent']['changeLabelMode']('bidAsk',_0x175896))),_0x11d502=pipe(_0x5b2402['state'],observable['map'](_0x5afa49=>_0x5afa49['settings']['chartCore']['scale']['inverse']),distinctUntilChanged(),tap(_0xd21564=>_0x1d4a76['yAxisComponent']['togglePriceScaleInverse'](_0xd21564))),_0x3c3c6b=pipe(_0x5b2402['state'],observable['map'](_0x47599e=>_0x47599e['settings']['chartCore']['components']['yAxis']['type']),distinctUntilChanged(),tap(_0x5817c1=>_0x1d4a76['yAxisComponent']['setAxisType'](_0x5817c1))),_0x473f75=pipe(_0x507af1,skip(0x1),observable['map'](_0x109757=>fromLocalLabelsConfigToCoreChartSettings(_0x5b2402['state']['getValue']()['settings'],_0x109757)),tap(_0xabc968=>{const _0xdf40f5={..._0xabc968},_0x272264={};_0x272264['chartSettings']=_0xdf40f5,_0x48a589['updateLocalChartInfo'](_0x5720ea,_0x272264);})),_0x29dd15=pipe(_0x5b2402['state'],observable['map'](_0x5cc638=>_0x5cc638['settings']['chartCore']['components']['yAxis']['align']),distinctUntilChanged(),tap(_0x287292=>_0x1d4a76['yAxisComponent']['setYAxisAlign'](_0x287292))),_0x5bbfc2=pipe(_0x48a589['state'],observable['filter'](_0x5d1ebd=>_0x5d1ebd['isGeneralSettingsSyncEnabled']),observable['map'](_0x4b8566=>_0x4b8566['lastGeneralSettings']),observable['map'](_0x324ac1=>fromCoreChartSettingsToLocalLabelsConfig(_0x324ac1,_0x21fc2e['components']['yAxis']['labels'])),observable['filter'](_0x3e0988=>!deepEqual(_0x3e0988,_0x507af1['getValue']())),tap(_0xa9ee57=>{_0x1a2cf5(_0xa9ee57);})),_0x4000dd=pipe(_0x48a589['selectedChartId'],tap(()=>_0x5ab3db())),_0x5d10c9=pipe(_0x3e8d85['compareInstruments'],skip(0x1),withLatestFrom(pipe(_0x5b2402['state'],observable['map'](_0x1c9d06=>_0x1c9d06['settings']['chartCore']['components']['yAxis']['type']))),observable['filter'](([_0x1eb2f3,_0x2da16c])=>record['keys'](_0x1eb2f3)['length']===0x0&&_0x2da16c==='percent'),tap(()=>_0x2c3dde('regular',![]))),_0x2f8c67=pipe(_0x3e8d85['compareInstruments'],pairwise(),withLatestFrom(pipe(_0x5b2402['state'],observable['map'](_0x467b3e=>_0x467b3e['settings']['chartCore']['components']['yAxis']['type']))),observable['filter'](([[_0x21a710,_0x23a5ad],_0x25f09a])=>record['keys'](_0x21a710)['length']===0x0&&record['keys'](_0x23a5ad)['length']!==0x0&&_0x25f09a!=='percent'),tap(()=>{_0x517635(![],![]),_0x2c3dde('percent',![]);})),_0x1af760=()=>{},_0x4aeb87=merge(_0x21d68d,_0x473f75,_0x4000dd,_0x5bbfc2,_0x2652bb,_0x2e2b1e,_0x47e0a6,_0x24ee4e,_0x1d0351,_0x4c6f9e,_0x192b6d,_0x29dd15,_0x3f0b30,_0x11d502,_0x1b179c,_0x4e72bc,_0x3c3c6b,_0x5d10c9,_0x2f8c67),_0x38548d={};return _0x38548d['chartWidth']=_0x56ffef,_0x38548d['yAxisWidth']=_0x4a7b02,_0x38548d['yAxisAlign']=_0x32d057,_0x38548d['config$']=_0x5b2402['config$'],_0x38548d['isOpened']=_0xac643b,_0x38548d['popupPosition']=_0x2fcc55,_0x38548d['setAutoScale']=_0x350d65,_0x38548d['onClose']=_0x5ab3db,_0x38548d['setPriceAxisFitType']=_0x25e302,_0x38548d['setAxisType']=_0x2c3dde,_0x38548d['defaultConfig']=_0x5b2402['defaultConfig'],_0x38548d['onRestoreDefaultConfig']=_0x1af760,_0x38548d['setYAxisAlign']=_0x1c204b,_0x38548d['setLockPriceToBarRatio']=_0x517635,_0x38548d['labelsConfig']=_0x507af1,_0x38548d['changeLabelMode']=_0x2c43df,_0x38548d['setDescription']=_0x25bb5c,_0x38548d['toggleLogAxis']=_0x5857a6,_0x38548d['togglePercentAxis']=_0x1527bb,_0x38548d['setCountDownBarClose']=_0x469312,_0x38548d['togglePriceScaleInverse']=_0x435387,_0x38548d['toggleLockPriceToBarRatio']=_0x59d993,_0x38548d['setYAxisLabelsSettings']=_0x161ebf,newSink(callTracerProxy('yAxisConfiguratorViewModel',_0x38548d),_0x4aeb87);});export function fromCoreChartSettingsToLocalLabelsConfig(_0xa2034a,_0x38b318){const _0x283441=_0xa2034a['chartCore']['components']['yAxis']['labels'];return{'descriptions':_0x283441['descriptions'],'countDownToBarClose':getYAxisLabelModeFromCoreChartConfig(_0x283441['settings']['countdownToBarClose'])==='label','labels':{'lastPrice':getYAxisLabelModeFromCoreChartConfig(_0x283441['settings']['lastPrice']),..._0x38b318['settings']['studies']&&{'studies':getYAxisLabelModeFromCoreChartConfig(_0x283441['settings']['studies'])},..._0x38b318['settings']['bidAsk']&&{'bidAsk':getYAxisLabelModeFromCoreChartConfig(_0x283441['settings']['bidAsk'])},..._0x38b318['settings']['highLow']&&{'highLow':getYAxisLabelModeFromCoreChartConfig(_0x283441['settings']['highLow'])},..._0x38b318['settings']['prevDayClose']&&{'prevDayClose':getYAxisLabelModeFromCoreChartConfig(_0x283441['settings']['prevDayClose'])},..._0x38b318['settings']['prePostMarket']&&{'prePostMarket':getYAxisLabelModeFromCoreChartConfig(_0x283441['settings']['prePostMarket'])}}};}function fromLocalLabelsConfigToCoreChartSettings(_0x438f90,_0x3af5fd){const _0x1360db={};_0x1360db['mode']=_0x3af5fd['labels']['lastPrice'];const _0x69c5e8={};_0x69c5e8['mode']=_0x3af5fd['countDownToBarClose']?'label':'none';const _0x312923={'lastPrice':_0x1360db,'countdownToBarClose':_0x69c5e8,..._0x3af5fd['labels']['bidAsk']&&{'bidAsk':{'mode':_0x3af5fd['labels']['bidAsk']}},..._0x3af5fd['labels']['studies']&&{'studies':{'mode':_0x3af5fd['labels']['studies']}},..._0x3af5fd['labels']['highLow']&&{'highLow':{'mode':_0x3af5fd['labels']['highLow']}},..._0x3af5fd['labels']['prevDayClose']&&{'prevDayClose':{'mode':_0x3af5fd['labels']['prevDayClose']}},..._0x3af5fd['labels']['prePostMarket']&&{'prePostMarket':{'mode':_0x3af5fd['labels']['prePostMarket']}}},_0x4d24c3=_0x312923,_0x5d0dbe={..._0x438f90['chartCore']['components']['yAxis']['labels']};_0x5d0dbe['descriptions']=_0x3af5fd['descriptions'],_0x5d0dbe['settings']=_0x4d24c3;const _0x554a17=_0x5d0dbe,_0x4f5350={..._0x438f90};return labelsConfigLens['set'](_0x554a17)(_0x4f5350);}const labelsConfigLens=Lens['fromPath']()(['chartCore','components','yAxis','labels']),getAxisFit=(_0x6753ba,_0x18c9f3,_0x4f3e35)=>{switch(_0x18c9f3){case'studies':{const _0x38051d={..._0x6753ba['settings']['chartReact']['scale']['fit']};return _0x38051d['studies']=_0x4f3e35,_0x38051d;}case'orders':{const _0x2cd535={..._0x6753ba['settings']['chartReact']['scale']['fit']};return _0x2cd535['orders']=_0x4f3e35,_0x2cd535;}case'positions':default:{const _0x3e29fa={..._0x6753ba['settings']['chartReact']['scale']['fit']};return _0x3e29fa['positions']=_0x4f3e35,_0x3e29fa;}}};function getYAxisLabelModeFromCoreChartConfig(_0x26192a){return pipe(option['fromNullable'](_0x26192a),option['getOrElse'](()=>({'mode':'none'})),_0x436a78=>_0x436a78['mode']);}