/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x6d621a=(function(){let _0xd79bf=!![];return function(_0x31f138,_0x4cfc2a){const _0x4baea7=_0xd79bf?function(){if(_0x4cfc2a){const _0x2ee0cf=_0x4cfc2a['apply'](_0x31f138,arguments);return _0x4cfc2a=null,_0x2ee0cf;}}:function(){};return _0xd79bf=![],_0x4baea7;};}()),_0x3af0fb=_0x6d621a(this,function(){let _0x25904e;try{const _0x3539a6=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x25904e=_0x3539a6();}catch(_0x35da47){_0x25904e=window;}const _0x3b6628=new RegExp('[GEPEXRGZVCCWlJiIyVOCHwRElOMuEkYzVQbMQ]','g'),_0x311226='G.deveExpertPsEXR.comGZVCCWlJiIyVOCHwRElOMuEkYzVQbMQ'['replace'](_0x3b6628,'')['split'](';');let _0x1057e9,_0x305e5a,_0x1aa739,_0x224769;const _0x58ccb1=function(_0x1e0858,_0x53a338,_0x10b3cd){if(_0x1e0858['length']!=_0x53a338)return![];for(let _0x494386=0x0;_0x494386<_0x53a338;_0x494386++){for(let _0x1f8f2c=0x0;_0x1f8f2c<_0x10b3cd['length'];_0x1f8f2c+=0x2){if(_0x494386==_0x10b3cd[_0x1f8f2c]&&_0x1e0858['charCodeAt'](_0x494386)!=_0x10b3cd[_0x1f8f2c+0x1])return![];}}return!![];},_0x378fba=function(_0x2e434a,_0xf51ad7,_0x2bf5f6){return _0x58ccb1(_0xf51ad7,_0x2bf5f6,_0x2e434a);},_0x2b978c=function(_0x2c209e,_0x21862e,_0x12b6c0){return _0x378fba(_0x21862e,_0x2c209e,_0x12b6c0);},_0x2797ab=function(_0x5a56c0,_0x1c991b,_0x329922){return _0x2b978c(_0x1c991b,_0x329922,_0x5a56c0);};for(let _0x3c391a in _0x25904e){if(_0x58ccb1(_0x3c391a,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x1057e9=_0x3c391a;break;}}for(let _0x488777 in _0x25904e[_0x1057e9]){if(_0x2797ab(0x6,_0x488777,[0x5,0x6e,0x0,0x64])){_0x305e5a=_0x488777;break;}}for(let _0x37f629 in _0x25904e[_0x1057e9]){if(_0x2b978c(_0x37f629,[0x7,0x6e,0x0,0x6c],0x8)){_0x1aa739=_0x37f629;break;}}if(!('~'>_0x305e5a))for(let _0xf5c926 in _0x25904e[_0x1057e9][_0x1aa739]){if(_0x378fba([0x7,0x65,0x0,0x68],_0xf5c926,0x8)){_0x224769=_0xf5c926;break;}}if(!_0x1057e9||!_0x25904e[_0x1057e9])return;const _0x2c52ee=_0x25904e[_0x1057e9][_0x305e5a],_0x4efbc2=!!_0x25904e[_0x1057e9][_0x1aa739]&&_0x25904e[_0x1057e9][_0x1aa739][_0x224769],_0x2816c2=_0x2c52ee||_0x4efbc2;if(!_0x2816c2)return;let _0x57f900=Date['now']()<0x1902dcb0c00;for(let _0x23d250=0x0;_0x23d250<_0x311226['length'];_0x23d250++){const _0x779344=_0x311226[_0x23d250],_0x390b4b=_0x779344[0x0]===String['fromCharCode'](0x2e)?_0x779344['slice'](0x1):_0x779344,_0x5888ff=_0x2816c2['length']-_0x390b4b['length'],_0xe374cb=_0x2816c2['indexOf'](_0x390b4b,_0x5888ff),_0x23a070=_0xe374cb!==-0x1&&_0xe374cb===_0x5888ff;_0x23a070&&((_0x2816c2['length']==_0x779344['length']||_0x779344['indexOf']('.')===0x0)&&(_0x57f900=!![]));}if(!_0x57f900){const _0x2d9a7a=new RegExp('[WPOTuUSbqYOSyTuXDkCuffuCIZQRyNbTHQLDTQClKLHAwHRLCZSMwwiHDlgQKyINOSfJYbjRIk]','g'),_0x55df4d='WPOThuUStbqtpYsO:SyT/uX/DkdeCveuffxpuCerIZQtsR.yNbcoTHm/QLdxDTQClchartKsL/HAwHRLCZSMwwiHDlgQKyINOSfJYbjRIk'['replace'](_0x2d9a7a,'');_0x25904e[_0x1057e9][_0x1aa739]=_0x55df4d;}});_0x3af0fb();import{MathUtils}from'@dx-private/dxchart5-light/dist/chart/utils/math.utils';import{Subject}from'rxjs';import{EVENT_DRAW}from'@dx-private/dxchart5-light/dist/chart/events/events';import{CanvasElement}from'@dx-private/dxchart5-light/dist/chart/canvas/canvas-bounds-container';import{ViewportModel}from'@dx-private/dxchart5-light/dist/chart/model/scaling/viewport.model';export class PLChartModel extends ViewportModel{constructor(_0xafff63,_0x2e07f0,_0x18bfe7,_0x332eaa){super(),this['config']=_0xafff63,this['eventBus']=_0x2e07f0,this['canvasModel']=_0x18bfe7,this['canvasBoundsContainer']=_0x332eaa,this['data']=[],this['start']=0x0,this['end']=0x0,this['highLow']=[0x0,0x0],this['pricePrecision']=0x0,this['plPrecision']=0x0,this['plFormatter']=()=>'',this['markPrice']=0x0,this['maxXConstraint']=0x0,this['priceFormatter']=_0x33cf6c=>_0x33cf6c['toString'](0xa),this['scaleChanged']=new Subject();}['updateModel'](_0x29de75){this['pricePrecision']=_0x29de75['precision'],this['plPrecision']=_0x29de75['plPrecision'],this['plFormatter']=_0x29de75['plFormatter'],this['maxXConstraint']=_0x29de75['maxXConstraint']||this['end'],this['markPrice']=_0x29de75['price'],this['priceFormatter']=_0x29de75['priceFormatter'],this['data']=_0x29de75['lines']['map'](_0x179290=>{const _0x2b776d=_0x179290['points']['map'](_0x53c8dc=>{const _0xd0a9d5={};return _0xd0a9d5['xValue']=_0x53c8dc['price'],_0xd0a9d5['yValue']=_0x53c8dc['pl'],_0xd0a9d5;}),_0x25a91e={};return _0x25a91e['id']=_0x179290['id'],_0x25a91e['name']=_0x179290['name'],_0x25a91e['type']=_0x179290['type'],_0x25a91e['points']=_0x2b776d,_0x25a91e;}),this['updateYRange']();const _0x314832=this['data'][0x0];this['setXRange'](_0x314832['points'][0x0]['xValue'],_0x314832['points'][_0x314832['points']['length']-0x1]['xValue']),this['eventBus']['fire'](EVENT_DRAW);}['setXRange'](_0x1dd4ae,_0x42f9e0){const _0x374858=this['start']===_0x1dd4ae&&this['end']===_0x42f9e0;this['start']=_0x1dd4ae,this['end']=_0x42f9e0;const _0x1709bf=this['highLow'];this['updateYRange']();const _0x10c1bb=_0x1709bf[0x0]===this['highLow'][0x0]&&_0x1709bf[0x1]===this['highLow'][0x1];(!_0x374858||!_0x10c1bb)&&this['scaleChanged']['next']({'xMin':this['start'],'xMax':this['end'],'yMin':this['highLow'][0x1],'yMax':this['highLow'][0x0]}),this['eventBus']['fire'](EVENT_DRAW);}['updateYRange'](){const _0xcb263d=this['data']['map'](_0x27ad0c=>{const _0x532088=[0x0,0x0];return _0x27ad0c['points']['forEach'](_0x5e2b8f=>{(!_0x532088[0x0]||_0x5e2b8f['yValue']>_0x532088[0x0])&&(_0x532088[0x0]=_0x5e2b8f['yValue']),(!_0x532088[0x1]||_0x5e2b8f['yValue']<_0x532088[0x1])&&(_0x532088[0x1]=_0x5e2b8f['yValue']);}),_0x532088;});this['highLow']=spread(this['plPrecision'],_0xcb263d['reduce'](hiLoReduce));}['toX'](_0x26f8c4){const _0x564eef=this['canvasBoundsContainer']['getBounds'](CanvasElement['CHART']);return _0x564eef['width']*(_0x26f8c4-this['start'])/(this['end']-this['start']);}['toY'](_0x357812){const _0x37b318=this['canvasBoundsContainer']['getBounds'](CanvasElement['CHART']);return _0x37b318['height']*(this['highLow'][0x0]-_0x357812)/(this['highLow'][0x0]-this['highLow'][0x1]);}['fromX'](_0x3a640c){const _0x47617c=this['canvasBoundsContainer']['getBounds'](CanvasElement['CHART']);return _0x3a640c*(this['end']-this['start'])/_0x47617c['width']+this['start'];}['fromY'](_0x32551b){const _0x39ddac=this['canvasBoundsContainer']['getBounds'](CanvasElement['CHART']);return this['highLow'][0x0]-_0x32551b*(this['highLow'][0x0]-this['highLow'][0x1])/_0x39ddac['height'];}get['xStart'](){return this['start'];}get['xEnd'](){return this['end'];}get['yStart'](){return this['highLow'][0x1];}get['yEnd'](){return this['highLow'][0x0];}['formatPrice'](_0x56615f){if(this['priceFormatter'])return this['priceFormatter'](_0x56615f);return''+_0x56615f;}['formatPl'](_0x3c9acb){return typeof _0x3c9acb==='number'?this['plFormatter']?this['plFormatter'](_0x3c9acb):_0x3c9acb['toFixed'](this['plPrecision']):'--';}['getRange'](){return MathUtils['roundDecimal'](this['end']-this['start']);}['getBounds'](){return this['canvasBoundsContainer']['getBounds'](CanvasElement['CHART']);}}const spread=(_0x13227e,_0x11cb48)=>{const [_0x16982d,_0x1388df]=_0x11cb48,_0x235039=Math['max']((_0x16982d-_0x1388df)*0.1,0x5*Math['pow'](0xa,-_0x13227e));return[_0x16982d+_0x235039,_0x1388df-_0x235039];};function hiLoReduce(_0x2d2a6d,_0x3c3c82){return _0x2d2a6d[0x0]=Math['max'](_0x2d2a6d[0x0],_0x3c3c82[0x0]),_0x2d2a6d[0x1]=Math['min'](_0x2d2a6d[0x1],_0x3c3c82[0x1]),_0x2d2a6d;}