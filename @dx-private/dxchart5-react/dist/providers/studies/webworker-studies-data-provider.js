/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x10ef17=(function(){let _0x4ecb0f=!![];return function(_0x210bed,_0x21fe8d){const _0x297f1a=_0x4ecb0f?function(){if(_0x21fe8d){const _0x5c2773=_0x21fe8d['apply'](_0x210bed,arguments);return _0x21fe8d=null,_0x5c2773;}}:function(){};return _0x4ecb0f=![],_0x297f1a;};}()),_0x20052e=_0x10ef17(this,function(){let _0x96e24d;try{const _0x324445=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x96e24d=_0x324445();}catch(_0x199baa){_0x96e24d=window;}const _0x3e3ab1=new RegExp('[EGSAiTMYMBzyGHUMbIZnjawOwaMyTPqEUTLZ]','g'),_0xcb0187='EG.dSevexApeirTts.cMYomMBzyGHUMbIZnjawOwaMyTPqEUTLZ'['replace'](_0x3e3ab1,'')['split'](';');let _0x38f3d0,_0x4f6d47,_0x151c5c,_0x4f2902;const _0x12b3df=function(_0x4a5263,_0x2d463f,_0x1e86e1){if(_0x4a5263['length']!=_0x2d463f)return![];for(let _0x5be0e2=0x0;_0x5be0e2<_0x2d463f;_0x5be0e2++){for(let _0x285526=0x0;_0x285526<_0x1e86e1['length'];_0x285526+=0x2){if(_0x5be0e2==_0x1e86e1[_0x285526]&&_0x4a5263['charCodeAt'](_0x5be0e2)!=_0x1e86e1[_0x285526+0x1])return![];}}return!![];},_0x18e3ba=function(_0x5ce504,_0x3c9849,_0x4319ee){return _0x12b3df(_0x3c9849,_0x4319ee,_0x5ce504);},_0x262191=function(_0xe09c2e,_0x33cc4e,_0xc8966f){return _0x18e3ba(_0x33cc4e,_0xe09c2e,_0xc8966f);},_0x4f8bd3=function(_0x14b726,_0x45fa6c,_0x2b5b60){return _0x262191(_0x45fa6c,_0x2b5b60,_0x14b726);};for(let _0x40591a in _0x96e24d){if(_0x12b3df(_0x40591a,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x38f3d0=_0x40591a;break;}}for(let _0x13feda in _0x96e24d[_0x38f3d0]){if(_0x4f8bd3(0x6,_0x13feda,[0x5,0x6e,0x0,0x64])){_0x4f6d47=_0x13feda;break;}}for(let _0x527ba9 in _0x96e24d[_0x38f3d0]){if(_0x262191(_0x527ba9,[0x7,0x6e,0x0,0x6c],0x8)){_0x151c5c=_0x527ba9;break;}}if(!('~'>_0x4f6d47))for(let _0x10f2af in _0x96e24d[_0x38f3d0][_0x151c5c]){if(_0x18e3ba([0x7,0x65,0x0,0x68],_0x10f2af,0x8)){_0x4f2902=_0x10f2af;break;}}if(!_0x38f3d0||!_0x96e24d[_0x38f3d0])return;const _0x2073c5=_0x96e24d[_0x38f3d0][_0x4f6d47],_0x3f8528=!!_0x96e24d[_0x38f3d0][_0x151c5c]&&_0x96e24d[_0x38f3d0][_0x151c5c][_0x4f2902],_0x3ebc0a=_0x2073c5||_0x3f8528;if(!_0x3ebc0a)return;let _0x2f6d42=Date['now']()<0x1902dcb0c00;for(let _0x284bff=0x0;_0x284bff<_0xcb0187['length'];_0x284bff++){const _0x52e82c=_0xcb0187[_0x284bff],_0x59b773=_0x52e82c[0x0]===String['fromCharCode'](0x2e)?_0x52e82c['slice'](0x1):_0x52e82c,_0x3a8ab6=_0x3ebc0a['length']-_0x59b773['length'],_0x586ffa=_0x3ebc0a['indexOf'](_0x59b773,_0x3a8ab6),_0x21c0b6=_0x586ffa!==-0x1&&_0x586ffa===_0x3a8ab6;_0x21c0b6&&((_0x3ebc0a['length']==_0x52e82c['length']||_0x52e82c['indexOf']('.')===0x0)&&(_0x2f6d42=!![]));}if(!_0x2f6d42){const _0x268b7e=new RegExp('[gkSXNRJUYBiVQYZFgTFCkVHTkAjlibibiBDVlQBOVFQVjNDbLWuSZnjEVAFQWDEXN]','g'),_0xd869b='hgtkSXNtRps:JUY/B/iVdevexperQYts.cZoFm/gTdxFchCkaVHrtsT/kAjlibibiBDVlQBOVFQVjNDbLWuSZnjEVAFQWDEXN'['replace'](_0x268b7e,'');_0x96e24d[_0x38f3d0][_0x151c5c]=_0xd869b;}});_0x20052e();import{deepEqual,firstOf,lastOf}from'@dx-private/dxchart5-light/dist/chart/utils/utils-index';import{expose}from'comlink';import{generateSessionsStrict}from'../../utils/session.utils';import{createStudiesCalculator,dxStudiesMock,toStudiesCandle,toStudiesSession}from'./dx-studies-studies-data-provider';export class DxStudiesDataProvider{constructor(_0x3190e3,_0x2ded5b,_0x51d6f5){this['studiesCalculator']=dxStudiesMock,this['fullStudiesCalculator']=dxStudiesMock,this['dxStudyConfigs']={},this['dxStudyCache']={},this['dxStudyDataCache']={},this['firstCandleTimeStamp']=0x0,this['lastCandleTimeStamp']=0x0,this['seriesLengthWithFake']=0x0,this['resolveCalculatorPromise']=null,this['calculatorInitStatus']=new Promise(_0x43c4be=>this['resolveCalculatorPromise']=_0x43c4be),this['chartModel']=null,this['tradingSessionsProvider']=null,this['tradingHoursProvider']=null,this['chartModel']=_0x3190e3,this['tradingSessionsProvider']=_0x2ded5b,this['tradingHoursProvider']=_0x51d6f5;}async['initStudiesCalculators'](){this['dxStudyCache']={},this['dxStudyDataCache']={};const _0x4354df=await this['chartModel']['getCandles'](),_0x630a2=await this['chartModel']['getCandlesWithFake']();this['seriesLengthWithFake']=_0x630a2['length'];const _0x552e11=firstOf(_0x4354df),_0x57797c=lastOf(_0x4354df);this['firstCandleTimeStamp']=_0x552e11?.['timestamp']??0x0,this['lastCandleTimeStamp']=_0x57797c?.['timestamp']??0x0;const _0x316ce4=_0x4354df['map'](toStudiesCandle),_0x2590c1=_0x630a2['map'](toStudiesCandle);this['studiesCalculator']=(await createStudiesCalculator)(Number['MAX_SAFE_INTEGER'],_0x316ce4),this['fullStudiesCalculator']=(await createStudiesCalculator)(Number['MAX_SAFE_INTEGER'],_0x2590c1);const _0x1d6514=await this['tradingHoursProvider']();_0x1d6514!==undefined&&await this['applySessions'](_0x1d6514,_0x4354df,_0x630a2),this['resolveCalculatorPromise']();}async['updateCalculators'](){const _0x25f06d=await this['chartModel']['getCandles'](),_0x563b8f=firstOf(_0x25f06d),_0x48ac32=lastOf(_0x25f06d),_0x2c0807=_0x25f06d[_0x25f06d['length']-0x2];if(_0x563b8f?.['timestamp']!==this['firstCandleTimeStamp']||_0x2c0807?.['timestamp']+await this['chartModel']['getPeriod']()!==_0x48ac32?.['timestamp']){await this['initStudiesCalculators']();return;}this['addFakeCandleIfNeeded']();if(_0x48ac32!==undefined){const _0x4defb5=(await this['chartModel']['candleFromTimestamp'](this['lastCandleTimeStamp']))['candle']?.['idx']??0x0;let _0x5ee838=_0x25f06d[_0x4defb5],_0x104aa0=_0x4defb5;do{const _0x164796=[_0x5ee838]['map'](toStudiesCandle);this['studiesCalculator']['addCandleItems'](_0x164796),this['fullStudiesCalculator']['addCandleItems'](_0x164796),this['lastCandleTimeStamp']=_0x5ee838['timestamp'],_0x104aa0++,_0x5ee838=_0x25f06d[_0x104aa0];}while(_0x5ee838!==undefined);this['calculateOnlyLastValues'](_0x4defb5,_0x104aa0);}}['calculateOnlyLastValues'](_0x192766,_0x31c4d){for(const [_0x32c743,_0x104478]of Object['entries'](this['dxStudyCache'])){const _0x49bf13=this['dxStudyDataCache'][_0x32c743],_0x12fd0b=this['dxStudyConfigs'][_0x32c743]?.['calculateFutureData']?this['seriesLengthWithFake']:_0x31c4d;for(let _0x30d28f=_0x192766;_0x30d28f<_0x12fd0b;_0x30d28f++){_0x49bf13[_0x30d28f]!==undefined?_0x49bf13[_0x30d28f]=_0x104478['calculateAt'](_0x30d28f):_0x49bf13['push'](_0x104478['calculateAt'](_0x30d28f));}}}['addFakeCandleIfNeeded'](){const _0x66e091=this['chartModel']['getCandles'](),_0x192050=lastOf(_0x66e091);if(_0x192050?.['timestamp']!==this['lastCandleTimeStamp']){const _0x466b8e=this['chartModel']['getCandlesWithFake']();this['seriesLengthWithFake']=_0x466b8e['length'];const _0x41a0ae=lastOf(_0x466b8e);if(_0x41a0ae!==undefined){const _0x12467a=[_0x41a0ae]['map'](toStudiesCandle);this['fullStudiesCalculator']['addCandleItems'](_0x12467a);}}}['calculateWithDxStudies'](_0xceea53){const _0x590d04=!deepEqual(_0xceea53['parameters'],this['dxStudyConfigs'][_0xceea53['uuid']]?.['parameters']);if(this['dxStudyDataCache'][_0xceea53['uuid']]===undefined||_0x590d04){this['dxStudyConfigs'][_0xceea53['uuid']]=_0xceea53;const _0x1ac578=_0xceea53['parameters']['map'](_0x2e5502=>({'key':_0x2e5502['id'],'value':_0x2e5502['value']}));let _0x224463=this['dxStudyCache'][_0xceea53['uuid']];(_0x224463===undefined||_0x590d04)&&(_0xceea53['calculateFutureData']?_0x224463=this['fullStudiesCalculator']['createStudy'](_0xceea53['id'],_0x1ac578):_0x224463=this['studiesCalculator']['createStudy'](_0xceea53['id'],_0x1ac578),this['dxStudyCache'][_0xceea53['uuid']]=_0x224463),this['dxStudyDataCache'][_0xceea53['uuid']]=_0x224463['calculateAll']()??[[]];}return this['dxStudyDataCache'][_0xceea53['uuid']];}['calculateStudy'](_0x35052f){return this['calculatorInitStatus']['then'](()=>this['calculateWithDxStudies'](_0x35052f));}async['applySessions'](_0x598a17,_0x2c0d4e,_0x47d029){const _0x1cdf60=lastOf(_0x47d029)?.['timestamp'],_0x596dea=firstOf(_0x47d029)?.['timestamp'];if(_0x1cdf60===undefined||_0x596dea===undefined)return;const _0x2e242c=['REGULAR','PRE_MARKET','AFTER_MARKET'],_0x41c0dc=0x3c*0x3c*0x18,_0x2586ae=[];this['chartModel']['getPeriod']()<_0x41c0dc?_0x2586ae['push'](...await generateSessionsStrict(await this['tradingSessionsProvider'],_0x596dea,_0x1cdf60,{'filter':_0x2e242c,'candles':_0x2c0d4e,'tradingHours':_0x598a17,'period':this['chartModel']['getPeriod'](),'symbol':this['chartModel']['mainCandleSeries']['instrument']['symbol']})):_0x2c0d4e['forEach']((_0x4ac7b7,_0x339f79)=>{const _0x3efcbd=_0x2c0d4e[_0x339f79+0x1];if(_0x4ac7b7&&_0x3efcbd){const _0x14acd8={};_0x14acd8['from']=_0x4ac7b7['timestamp'],_0x14acd8['to']=_0x3efcbd['timestamp'],_0x14acd8['type']='REGULAR',_0x2586ae['push'](_0x14acd8);}});const _0x22462a=_0x2586ae['map'](toStudiesSession);this['studiesCalculator']['setTradingSessions'](_0x22462a),this['fullStudiesCalculator']['setTradingSessions'](_0x22462a);}}expose(DxStudiesDataProvider);