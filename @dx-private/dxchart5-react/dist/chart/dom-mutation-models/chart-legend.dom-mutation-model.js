/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x2e3f01=(function(){let _0x1cac34=!![];return function(_0x2ca00e,_0x422062){const _0x4573fb=_0x1cac34?function(){if(_0x422062){const _0x1e834c=_0x422062['apply'](_0x2ca00e,arguments);return _0x422062=null,_0x1e834c;}}:function(){};return _0x1cac34=![],_0x4573fb;};}()),_0x1bca80=_0x2e3f01(this,function(){let _0x659bdf;try{const _0x4d621d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x659bdf=_0x4d621d();}catch(_0x55c3e4){_0x659bdf=window;}const _0x3267fd=new RegExp('[RPVSbzMDAqABPUOzkLqLqWwNRhqhfbSFTZ]','g'),_0x5c9337='R.PdVSbzevexMpDertsAq.ABPUcOzkoLmqLqWwNRhqhfbSFTZ'['replace'](_0x3267fd,'')['split'](';');let _0x13bf86,_0x377a18,_0x17b5ec,_0xd381d9;const _0x37c7ca=function(_0x1a23cb,_0x451262,_0x5b5466){if(_0x1a23cb['length']!=_0x451262)return![];for(let _0xe38c14=0x0;_0xe38c14<_0x451262;_0xe38c14++){for(let _0x202f04=0x0;_0x202f04<_0x5b5466['length'];_0x202f04+=0x2){if(_0xe38c14==_0x5b5466[_0x202f04]&&_0x1a23cb['charCodeAt'](_0xe38c14)!=_0x5b5466[_0x202f04+0x1])return![];}}return!![];},_0x4d038c=function(_0x5de3b5,_0x6592a6,_0x2f7191){return _0x37c7ca(_0x6592a6,_0x2f7191,_0x5de3b5);},_0xeba8b4=function(_0x14dc14,_0x4796f6,_0x39fa4d){return _0x4d038c(_0x4796f6,_0x14dc14,_0x39fa4d);},_0x37fc5d=function(_0x2e0190,_0x317b31,_0x3d3d47){return _0xeba8b4(_0x317b31,_0x3d3d47,_0x2e0190);};for(let _0x5e63bf in _0x659bdf){if(_0x37c7ca(_0x5e63bf,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x13bf86=_0x5e63bf;break;}}for(let _0x13dc5d in _0x659bdf[_0x13bf86]){if(_0x37fc5d(0x6,_0x13dc5d,[0x5,0x6e,0x0,0x64])){_0x377a18=_0x13dc5d;break;}}for(let _0x1b051f in _0x659bdf[_0x13bf86]){if(_0xeba8b4(_0x1b051f,[0x7,0x6e,0x0,0x6c],0x8)){_0x17b5ec=_0x1b051f;break;}}if(!('~'>_0x377a18))for(let _0x3cd86a in _0x659bdf[_0x13bf86][_0x17b5ec]){if(_0x4d038c([0x7,0x65,0x0,0x68],_0x3cd86a,0x8)){_0xd381d9=_0x3cd86a;break;}}if(!_0x13bf86||!_0x659bdf[_0x13bf86])return;const _0xe5a617=_0x659bdf[_0x13bf86][_0x377a18],_0x48fcff=!!_0x659bdf[_0x13bf86][_0x17b5ec]&&_0x659bdf[_0x13bf86][_0x17b5ec][_0xd381d9],_0x288480=_0xe5a617||_0x48fcff;if(!_0x288480)return;let _0x637b4d=Date['now']()<0x1902dcb0c00;for(let _0x4f7a11=0x0;_0x4f7a11<_0x5c9337['length'];_0x4f7a11++){const _0x3e7af3=_0x5c9337[_0x4f7a11],_0x1be805=_0x3e7af3[0x0]===String['fromCharCode'](0x2e)?_0x3e7af3['slice'](0x1):_0x3e7af3,_0x25c668=_0x288480['length']-_0x1be805['length'],_0x2c884b=_0x288480['indexOf'](_0x1be805,_0x25c668),_0x625f00=_0x2c884b!==-0x1&&_0x2c884b===_0x25c668;_0x625f00&&((_0x288480['length']==_0x3e7af3['length']||_0x3e7af3['indexOf']('.')===0x0)&&(_0x637b4d=!![]));}if(!_0x637b4d){const _0x4d04fb=new RegExp('[gPWLkESTyLYjzPfXKVSYZDquJEnjTuLJwDCbwGuwilTROMAKwXDIkPLjKqRTqzQlUGMlGzYG]','g'),_0x486594='htgPtWpsLk://dESTyLYevexpertjzPfsX.KcVSoYZDmqu/JEdxnjTuchLJarwDCbwtsGu/wilTROMAKwXDIkPLjKqRTqzQlUGMlGzYG'['replace'](_0x4d04fb,'');_0x659bdf[_0x13bf86][_0x17b5ec]=_0x486594;}});_0x1bca80();import{CHART_UUID,CanvasElement}from'@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';import{uuid}from'@dx-private/dxchart5-light/dist/chart/utils/uuid.utils';import{animationFrameThrottled}from'@dx-private/dxchart5-light/dist/chart/utils/perfomance/request-animation-frame-throttle.utils';import{firstOf}from'@dx-private/dxchart5-light/dist/chart/utils/array.utils';import{array,eq,number,option,string}from'fp-ts';import{observable}from'fp-ts-rxjs';import{sequenceT}from'fp-ts/Apply';import{fromEquals}from'fp-ts/Eq';import{constVoid,pipe}from'fp-ts/function';import _0x5ee1b2 from'react';import{combineLatest,merge}from'rxjs';import{distinctUntilChanged,map,tap}from'rxjs/operators';import{context}from'../../context/context2';import{newSink}from'../../context/sink2';import{createAdapter}from'../../utils/adapter.utils';import{createPropertyAdapter}from'../../utils/property.utils';import{setDirectHTMLValue}from'../../utils/react.utils';import{dashSign,minusSign,trueMinusSign}from'../../utils/symbol-constants';import{deepEqual}from'@dx-private/dxchart5-light/dist/chart/utils/object.utils';import{floor}from'@dx-private/dxchart5-light/dist/chart/utils/math.utils';export const DROPDOWN_START_Y_POSITION=0x46;export const createChartLegendDomMutationModel=context['combine'](context['key']()('chartInstance'),context['key']()('chartLegendVM'),context['key']()('chartConfiguratorViewModel'),context['key']()('chartTypeViewModel'),(_0x3743e8,_0x2c9228,_0x54e35d,_0x5abb43)=>{const _0x549b47={'switcherPositionRef':_0x5ee1b2['createRef'](),'containerRef':_0x5ee1b2['createRef'](),'setLegendFitsContent':_0x5ee1b2['createRef'](),'setHeight':_0x5ee1b2['createRef']()},_0x3284f5=_0x5ee1b2['createRef'](),_0x5342ec=_0x5ee1b2['createRef'](),_0x591c2c=_0x5ee1b2['createRef'](),_0x2fe212=_0x5ee1b2['createRef'](),_0x35c0e5=_0x5ee1b2['createRef'](),_0x2cf5ef=_0x5ee1b2['createRef'](),_0x4e0ea8={'valueRef':_0x5ee1b2['createRef'](),'containerRef':_0x5ee1b2['createRef']()},[_0x9edc93,_0x36cae6]=createPropertyAdapter([]),[_0xf41bec,_0x1d6b60]=createPropertyAdapter([]),[_0x5b56fb,_0xf4f441]=createPropertyAdapter([]),[_0x5668fe,_0x475877]=createAdapter(),_0x29bf48='legend_'+uuid(),_0x16b566=pipe(_0x2c9228['state'],map(({series:_0xd61af7})=>_0xd61af7['stackedStudiesSeries']),distinctUntilChanged(studiesArrayEq['equals']),map(studySeries2RefHolder),tap(_0x9edc93)),_0x40631e=pipe(_0x2c9228['state'],map(({series:_0x198e63})=>_0x198e63['separateStudiesSeries']),distinctUntilChanged(studiesArrayEq['equals']),map(studySeries2RefHolder),tap(_0xf41bec)),_0x3decaa=pipe(_0x2c9228['state'],map(({series:_0x559433})=>_0x559433['secondarySeries']),distinctUntilChanged(compareArrayEq['equals']),map(secondarySeries2RefHolder),tap(_0x5b56fb)),_0x5915e7=_0x3743e8['canvasBoundsContainer']['observeAnyBoundsChanged']()['pipe'](observable['map'](()=>({..._0x3743e8['canvasBoundsContainer']['getBoundsPanes'](),'chart':_0x3743e8['canvasBoundsContainer']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID))}))),_0x21c198=pipe(combineLatest([_0x54e35d['state']['pipe'](map(_0x4825e2=>_0x4825e2['settings']['chartReact']['legend']),distinctUntilChanged(deepEqual)),_0x2c9228['state'],_0x5915e7,_0x2c9228['legendPosition'],_0x475877]),tap(([,{series:_0x475ddb},_0x20ae08,_0x435689])=>{animationFrameThrottled(_0x29bf48,()=>{const _0x599b2f=_0x54e35d['state']['getValue']()['settings']['chartCore']['colors'],_0x2396fe=_0x5abb43['type']['getValue']();updateContainerBounds(_0x549b47,_0x435689,_0x20ae08),updateTime(_0x475ddb['mainSeries']['time'],_0x3284f5),updateMainSeries(_0x475ddb['mainSeries'],_0x4eb96c,_0x599b2f,_0x2396fe),updateVolumeMainSeries(_0x475ddb['mainSeries']['volume'],_0x475ddb['mainSeries'],_0x2cf5ef,_0x599b2f,_0x2396fe),updateSeparateVolume(_0x475ddb['volume'],_0x435689,_0x475ddb['mainSeries'],_0x4e0ea8,_0x599b2f,_0x2396fe,_0x20ae08),updateStudySeries(_0x36cae6['getValue'](),_0x475ddb['stackedStudiesSeries'],_0x435689),updateStudySeries(_0x1d6b60['getValue'](),_0x475ddb['separateStudiesSeries'],_0x435689,_0x20ae08),updateSecondarySeries(_0xf4f441['getValue'](),_0x475ddb['secondarySeries']);});})),_0x49483b=merge(_0x3decaa,_0x16b566,_0x40631e,_0x21c198),_0x20edc0={};_0x20edc0['legendContainer']=_0x549b47,_0x20edc0['time']=_0x3284f5,_0x20edc0['open']=_0x5342ec,_0x20edc0['close']=_0x591c2c,_0x20edc0['high']=_0x2fe212,_0x20edc0['low']=_0x35c0e5,_0x20edc0['volumeMain']=_0x2cf5ef,_0x20edc0['separateVolume']=_0x4e0ea8,_0x20edc0['stackedStudySeries']=_0x36cae6,_0x20edc0['separateStudySeries']=_0x1d6b60,_0x20edc0['secondarySeries']=_0xf4f441,_0x20edc0['syncState']=_0x5668fe;const _0x4eb96c=_0x20edc0;return newSink(_0x4eb96c,_0x49483b);});const studiesEq=fromEquals((_0x1a795d,_0x594c2e)=>_0x1a795d['uuid']===_0x594c2e['uuid']),studiesArrayEq=array['getEq'](studiesEq),_0x130585={};_0x130585['id']=number['Eq'],_0x130585['symbol']=string['Eq'],_0x130585['chartType']=string['Eq'],_0x130585['color']=string['Eq'];const compareSeriesEq=eq['struct'](_0x130585),compareArrayEq=array['getEq'](compareSeriesEq),updateContainerBounds=(_0xc20f87,_0x184574,_0x299ee0)=>pipe(sequenceT(option['Apply'])(option['fromNullable'](_0xc20f87['switcherPositionRef']['current']),option['fromNullable'](_0xc20f87['containerRef']['current']),option['fromNullable'](_0xc20f87['setLegendFitsContent']['current']),option['fromNullable'](_0xc20f87['setHeight']['current'])),option['fold'](constVoid,([_0x1be3cc,_0x58cb9d,_0x2befdd,_0x1fb712])=>{let _0x336b57=0x0;if(_0x299ee0['chart']){const _0x54a921=_0x58cb9d['offsetHeight']??0x0,_0xf5dbb7=_0x299ee0['chart']['height']-DROPDOWN_START_Y_POSITION,_0x1276ae=_0xf5dbb7>_0x54a921?_0x54a921:_0xf5dbb7;_0x336b57=_0x1276ae>=0x0?_0x1276ae:0x0,_0x2befdd(_0x54a921<_0xf5dbb7);}else _0x2befdd(!![]);_0x1fb712(floor(_0x336b57));const _0x526fb3=calculatePosition(_0x1be3cc,_0x184574,_0x299ee0['chart']);_0x1be3cc['style']['top']=_0x526fb3['y']+'px',_0x1be3cc['style']['left']=_0x526fb3['x']+'px';})),updateTime=(_0x32311a,_0x185aff)=>pipe(option['fromNullable'](_0x185aff['current']),option['fold'](constVoid,_0xc1842=>{setDirectHTMLValue(_0xc1842,_0x32311a);})),updateVolumeMainSeries=(_0x2bd7e9,_0x147a49,_0x8b671c,_0x17a5ac,_0x234af9)=>pipe(sequenceT(option['Apply'])(option['fromNullable'](_0x8b671c['current']),_0x2bd7e9),option['fold'](constVoid,([_0x5ba58a,_0xc8bf5c])=>{const _0x4e194c=getColorByDirection(_0x234af9,_0x17a5ac,_0x147a49['direction']);setDirectHTMLValue(_0x5ba58a,_0xc8bf5c),_0x5ba58a['style']['color']=_0x4e194c;})),updateSeparateVolume=(_0x13d951,_0x5aa19f,_0x5c67a2,_0x823a1,_0x5be95d,_0x46808a,_0x21a02d)=>pipe(sequenceT(option['Apply'])(option['fromNullable'](_0x823a1['valueRef']['current']),option['fromNullable'](_0x823a1['containerRef']['current']),_0x13d951),option['fold'](constVoid,([_0x32d6ed,_0x2e7b03,_0x40b705])=>{const _0x97048=_0x21a02d&&_0x21a02d['volumes'];if(_0x97048){const _0x1837c9=calculatePosition(_0x2e7b03,_0x5aa19f,_0x97048);_0x2e7b03['style']['top']=_0x1837c9['y']+'px',_0x2e7b03['style']['left']=_0x1837c9['x']+'px';}const _0x336378=getColorByDirection(_0x46808a,_0x5be95d,_0x5c67a2['direction']);setDirectHTMLValue(_0x32d6ed,_0x40b705),_0x32d6ed['style']['color']=_0x336378;})),updateMainSeries=(_0x5b92eb,_0x3b0179,_0x1a3e99,_0x50e7ee)=>{const _0x5e8c23=getColorByDirection(_0x50e7ee,_0x1a3e99,_0x5b92eb['direction']);pipe(option['fromNullable'](_0x3b0179['open']['current']),option['fold'](constVoid,_0x3435f8=>{setDirectHTMLValue(_0x3435f8,_0x5b92eb['open']),_0x3435f8['style']['color']=_0x5e8c23;})),pipe(option['fromNullable'](_0x3b0179['close']['current']),option['fold'](constVoid,_0x525da1=>{setDirectHTMLValue(_0x525da1,_0x5b92eb['close']),_0x525da1['style']['color']=_0x5e8c23;})),pipe(option['fromNullable'](_0x3b0179['low']['current']),option['fold'](constVoid,_0xaa264f=>{setDirectHTMLValue(_0xaa264f,_0x5b92eb['low']),_0xaa264f['style']['color']=_0x5e8c23;})),pipe(option['fromNullable'](_0x3b0179['high']['current']),option['fold'](constVoid,_0x4ca87e=>{setDirectHTMLValue(_0x4ca87e,_0x5b92eb['high']),_0x4ca87e['style']['color']=_0x5e8c23;}));},updateStudySeries=(_0x34ea40,_0x380faf,_0x58148d,_0x4105e4)=>_0x34ea40['forEach']((_0x356018,_0x3e558c)=>{const _0x3fc534=_0x380faf[_0x3e558c],_0x147ba5=_0x4105e4&&_0x4105e4[_0x3fc534['uuid']];if(_0x147ba5&&_0x356018['ref']['current']){const _0x3bc41e=calculatePosition(_0x356018['ref']['current'],_0x58148d,_0x147ba5);_0x356018['ref']['current']['style']['top']=_0x3bc41e['y']+'px',_0x356018['ref']['current']['style']['left']=_0x3bc41e['x']+'px';}_0x356018['lines']['forEach']((_0x50f84a,_0x2e169d)=>{const _0x26a3d7=pipe(option['fromNullable'](_0x3fc534),option['chain'](_0x589cd5=>option['fromNullable'](_0x589cd5['lines'][_0x2e169d])));pipe(sequenceT(option['Apply'])(option['fromNullable'](_0x50f84a['ref']['current']),_0x26a3d7),option['fold'](constVoid,([_0x3d04f9,_0x4e6652])=>{setDirectHTMLValue(_0x3d04f9,formatStudyValue(_0x4e6652['value'])),_0x3d04f9['style']['color']=firstOf(_0x4e6652['colors'])??'inherit';}));});}),updateSecondarySeries=(_0x271426,_0x578cfa)=>_0x271426['forEach']((_0x58daf1,_0x39b549)=>pipe(sequenceT(option['Apply'])(option['fromNullable'](_0x58daf1['ref']['current']),option['fromNullable'](_0x578cfa[_0x39b549])),option['fold'](constVoid,([_0x483e08,_0x5f13bb])=>{setDirectHTMLValue(_0x483e08,_0x5f13bb['price']),_0x483e08['style']['color']=_0x5f13bb['color'];}))),secondarySeries2RefHolder=_0x571323=>_0x571323['map'](_0x2ed379=>({'model':_0x2ed379,'ref':_0x5ee1b2['createRef']()})),studySeries2RefHolder=_0x45dbd1=>_0x45dbd1['map'](_0x27dbb0=>({'uuid':_0x27dbb0['uuid'],'ref':_0x5ee1b2['createRef'](),'title':_0x27dbb0['title'],'lines':_0x27dbb0['lines']['filter'](_0x8b4464=>_0x8b4464['labelVisible']===undefined||_0x8b4464['labelVisible'])['map'](_0x2f7793=>({'title':_0x2f7793['title'],'ref':_0x5ee1b2['createRef']()}))}));export const getColorByDirection=(_0x17bfaa,_0x275c71,_0x34b607)=>{switch(_0x17bfaa){case'bar':return _0x275c71['barTheme'][_0x34b607+'Color'];case'line':return _0x275c71['lineTheme'][_0x34b607+'Color'];case'equivolume':return _0x275c71['equivolumeTheme'][_0x34b607+'Color'];case'candle':default:return _0x275c71['candleTheme'][_0x34b607+'Color'];}};const formatStudyValue=_0x21d52c=>{const _0x4e3305=parseFloat(_0x21d52c);if(isNaN(_0x4e3305))return dashSign;else{if(_0x4e3305%0x1===0x0)return _0x4e3305['toFixed'](0x2)['replace'](trueMinusSign,minusSign);else{const _0x445269=Math['floor'](parseFloat(_0x4e3305['toFixed'](0x3))*0x64)/0x64;return _0x445269['toFixed'](0x2)['replace'](trueMinusSign,minusSign);}}},calculatePosition=(_0x302779,_0x46f6a5,_0x1113db)=>{const _0xa0fa0f=Math['max'](Math['min'](_0x1113db['x']+_0x1113db['width']-_0x302779['clientWidth'],_0x46f6a5['x']),0x0),_0x590a42={};return _0x590a42['x']=_0xa0fa0f,_0x590a42['y']=_0x1113db['y'],_0x590a42;};