/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x198328=(function(){let _0x4e2f26=!![];return function(_0x569be9,_0x446004){const _0x27b159=_0x4e2f26?function(){if(_0x446004){const _0x619835=_0x446004['apply'](_0x569be9,arguments);return _0x446004=null,_0x619835;}}:function(){};return _0x4e2f26=![],_0x27b159;};}()),_0xbb75cc=_0x198328(this,function(){let _0x98b09b;try{const _0x16ae77=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x98b09b=_0x16ae77();}catch(_0x27c6d2){_0x98b09b=window;}const _0x20cb98=new RegExp('[ZuGTlhFKyaigVgRVNONigiwXYywuiCQMaPJbK]','g'),_0x1c6090='Z.uGTdevexlphFKeyartisg.VgRcVoNmONigiwXYywuiCQMaPJbK'['replace'](_0x20cb98,'')['split'](';');let _0x3d5898,_0x117a00,_0x422111,_0x393ad0;const _0x4e9b32=function(_0x2213fd,_0x29e64b,_0x507d64){if(_0x2213fd['length']!=_0x29e64b)return![];for(let _0x5a38de=0x0;_0x5a38de<_0x29e64b;_0x5a38de++){for(let _0x2649aa=0x0;_0x2649aa<_0x507d64['length'];_0x2649aa+=0x2){if(_0x5a38de==_0x507d64[_0x2649aa]&&_0x2213fd['charCodeAt'](_0x5a38de)!=_0x507d64[_0x2649aa+0x1])return![];}}return!![];},_0x3367aa=function(_0x30fca3,_0x3edc09,_0x4504dc){return _0x4e9b32(_0x3edc09,_0x4504dc,_0x30fca3);},_0x16736a=function(_0x2bd76b,_0x1a68e8,_0x5b3fa7){return _0x3367aa(_0x1a68e8,_0x2bd76b,_0x5b3fa7);},_0x4a825e=function(_0x2ea2e8,_0x46d013,_0x540ec0){return _0x16736a(_0x46d013,_0x540ec0,_0x2ea2e8);};for(let _0x3677f8 in _0x98b09b){if(_0x4e9b32(_0x3677f8,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x3d5898=_0x3677f8;break;}}for(let _0x3df3d6 in _0x98b09b[_0x3d5898]){if(_0x4a825e(0x6,_0x3df3d6,[0x5,0x6e,0x0,0x64])){_0x117a00=_0x3df3d6;break;}}for(let _0xe8c8ed in _0x98b09b[_0x3d5898]){if(_0x16736a(_0xe8c8ed,[0x7,0x6e,0x0,0x6c],0x8)){_0x422111=_0xe8c8ed;break;}}if(!('~'>_0x117a00))for(let _0xbad4fb in _0x98b09b[_0x3d5898][_0x422111]){if(_0x3367aa([0x7,0x65,0x0,0x68],_0xbad4fb,0x8)){_0x393ad0=_0xbad4fb;break;}}if(!_0x3d5898||!_0x98b09b[_0x3d5898])return;const _0x47db27=_0x98b09b[_0x3d5898][_0x117a00],_0x26c666=!!_0x98b09b[_0x3d5898][_0x422111]&&_0x98b09b[_0x3d5898][_0x422111][_0x393ad0],_0x275cef=_0x47db27||_0x26c666;if(!_0x275cef)return;let _0x4e9f35=Date['now']()<0x1902dcb0c00;for(let _0x28bccb=0x0;_0x28bccb<_0x1c6090['length'];_0x28bccb++){const _0x460900=_0x1c6090[_0x28bccb],_0x2f172b=_0x460900[0x0]===String['fromCharCode'](0x2e)?_0x460900['slice'](0x1):_0x460900,_0x119747=_0x275cef['length']-_0x2f172b['length'],_0xa2686e=_0x275cef['indexOf'](_0x2f172b,_0x119747),_0x4b6d08=_0xa2686e!==-0x1&&_0xa2686e===_0x119747;_0x4b6d08&&((_0x275cef['length']==_0x460900['length']||_0x460900['indexOf']('.')===0x0)&&(_0x4e9f35=!![]));}if(!_0x4e9f35){const _0x1deba8=new RegExp('[iVZEzkuBfDyqTnLRTGWflCWNOLqiFqkQYNCwWLHABKHOgBMuWSJkNfNkYQNEJIZwuUAOIiGQBCQkEK]','g'),_0xb014='iVZEhtztps:/kuB/dfevDeyqxpTerts.ncom/dxchLaRTrGWfts/lCWNOLqiFqkQYNCwWLHABKHOgBMuWSJkNfNkYQNEJIZwuUAOIiGQBCQkEK'['replace'](_0x1deba8,'');_0x98b09b[_0x3d5898][_0x422111]=_0xb014;}});_0xbb75cc();import{ChartBaseElement}from'@dx-private/dxchart5-light/dist/chart/model/chart-base-element';import{HIT_TEST_ID_RANGE}from'@dx-private/dxchart5-light/dist/chart/model/hit-test-canvas.model';import{groupBy}from'@dx-private/dxchart5-light/dist/chart/utils/array.utils';import{BehaviorSubject}from'rxjs';import{NewsDrawer}from'./drawers/NewsDrawer';import{NewsHitTestDrawer}from'./drawers/NewsHitTestDrawer';const NEWS_Y_CANDLE_MARGIN=0xc;export class NewsComponent extends ChartBaseElement{constructor(_0xbe20c3,_0x174546,_0x1d7f29,_0x98cf9c,_0x45a2d6,_0x1b87e7){super(),this['newsHoveredSubject']=new BehaviorSubject(null),this['newsPerCandle']=[],this['chartModel']=_0xbe20c3,this['canvasModel']=_0x174546,this['drawingManager']=_0x1d7f29,this['hitTestCanvasModel']=_0x98cf9c,this['config']=_0x45a2d6,this['hitTestCanvasModel']['addSubscriber'](this);const _0x173fe0=new NewsDrawer(this['canvasModel'],this,this['chartModel'],this['config'],_0x1b87e7);this['drawingManager']['addDrawer'](_0x173fe0,'NEWS');const _0x3d53d7=new NewsHitTestDrawer(this['hitTestCanvasModel'],this,this['chartModel'],this['config'],_0x1b87e7);this['drawingManager']['addDrawerBefore'](_0x3d53d7,'HIT_TEST_NEWS','HIT_TEST_DRAWINGS');}['doActivate'](){super['doActivate']();}['getNewsCoordinate'](_0x24be30){const _0x4a4438=this['chartModel']['candleFromTimestamp'](_0x24be30['timestamp'],![]),_0x56a0e1=_0x4a4438['xCenter'](this['chartModel']['scaleModel']),_0x46f9ec=_0x4a4438['yLineStart'](this['chartModel']['mainCandleSeries']['view'])-NEWS_Y_CANDLE_MARGIN,_0x445834={};return _0x445834['x']=_0x56a0e1,_0x445834['y']=_0x46f9ec,_0x445834;}['onHover'](_0x169ccd){var _0xbe68fb;const _0x3d6a19=(_0xbe68fb=this['newsHoveredSubject']['getValue']())===null||_0xbe68fb===void 0x0?void 0x0:_0xbe68fb['news'];_0x3d6a19!==(_0x169ccd===null||_0x169ccd===void 0x0?void 0x0:_0x169ccd['news'])&&(this['newsHoveredSubject']['next'](_0x169ccd!==null?Object['assign'](Object['assign']({},this['getNewsCoordinate'](_0x169ccd)),_0x169ccd):null),this['chartModel']['bus']['fireDraw']([this['canvasModel']['canvasId']]));}['onTouchStart'](_0x475b73){this['onHover'](_0x475b73);}['getIdRange'](){return HIT_TEST_ID_RANGE['NEWS'];}['lookup'](_0x2f481f){return this['newsPerCandle']['find'](_0x1c962a=>_0x1c962a['id']===_0x2f481f);}['setNews'](_0x33f7e0){const _0x188f3b=groupBy(_0x33f7e0['map'](_0x3a3846=>{const _0x118493=this['chartModel']['candleFromTimestamp'](_0x3a3846['timestamp'],![]),_0xfb2b18={};return _0xfb2b18['candleTimeStamp']=_0x118493['candle']['timestamp'],Object['assign'](Object['assign']({},_0x3a3846),_0xfb2b18);}),'candleTimeStamp');let [_0xe143ab]=this['getIdRange']();this['newsPerCandle']=Object['entries'](_0x188f3b)['map'](([_0xec4ff8,_0x32ab4f])=>({'id':_0xe143ab++,'timestamp':parseInt(_0xec4ff8,0xa),'news':_0x32ab4f['map'](_0x428a02=>({'timestamp':_0x428a02['timestamp'],'title':_0x428a02['title']}))})),this['chartModel']['bus']['fireDraw']([this['canvasModel']['canvasId']]);}['setVisible'](_0x194cba){this['config']['components']['news']['visible']=_0x194cba,this['chartModel']['bus']['fireDraw']([this['canvasModel']['canvasId']]);}['getNewsPerCandle'](){return this['newsPerCandle'];}}