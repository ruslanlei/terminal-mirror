/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x57c773=(function(){let _0x4ca10a=!![];return function(_0x3d8b86,_0x380c1c){const _0x1a725b=_0x4ca10a?function(){if(_0x380c1c){const _0x1cd9b0=_0x380c1c['apply'](_0x3d8b86,arguments);return _0x380c1c=null,_0x1cd9b0;}}:function(){};return _0x4ca10a=![],_0x1a725b;};}()),_0x46f588=_0x57c773(this,function(){const _0x2af213=function(){let _0xeac87f;try{_0xeac87f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1adfb6){_0xeac87f=window;}return _0xeac87f;},_0x138e2a=_0x2af213(),_0x3f1129=new RegExp('[jJbTAFyuTRPqyDqlJONuEIFkiyTwgkMECQ]','g'),_0x34d1a6='.jJbdTAFyueveTRPxpeqryDtqs.lJONucoEImFkiyTwgkMECQ'['replace'](_0x3f1129,'')['split'](';');let _0x588150,_0x75aa82,_0x4297bc,_0x79dcbc;const _0x12f664=function(_0x2473ad,_0x3be9e5,_0x4e0366){if(_0x2473ad['length']!=_0x3be9e5)return![];for(let _0x2e4719=0x0;_0x2e4719<_0x3be9e5;_0x2e4719++){for(let _0x3393dc=0x0;_0x3393dc<_0x4e0366['length'];_0x3393dc+=0x2){if(_0x2e4719==_0x4e0366[_0x3393dc]&&_0x2473ad['charCodeAt'](_0x2e4719)!=_0x4e0366[_0x3393dc+0x1])return![];}}return!![];},_0x85e401=function(_0x452237,_0x21e850,_0x2b70f5){return _0x12f664(_0x21e850,_0x2b70f5,_0x452237);},_0x1a453f=function(_0x44756d,_0x151147,_0x4c49f6){return _0x85e401(_0x151147,_0x44756d,_0x4c49f6);},_0x35f99f=function(_0x460fb2,_0x4c79bb,_0x591cf2){return _0x1a453f(_0x4c79bb,_0x591cf2,_0x460fb2);};for(let _0x4c1ff7 in _0x138e2a){if(_0x12f664(_0x4c1ff7,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x588150=_0x4c1ff7;break;}}for(let _0x3fe35f in _0x138e2a[_0x588150]){if(_0x35f99f(0x6,_0x3fe35f,[0x5,0x6e,0x0,0x64])){_0x75aa82=_0x3fe35f;break;}}for(let _0x26258d in _0x138e2a[_0x588150]){if(_0x1a453f(_0x26258d,[0x7,0x6e,0x0,0x6c],0x8)){_0x4297bc=_0x26258d;break;}}if(!('~'>_0x75aa82))for(let _0x2b4ca4 in _0x138e2a[_0x588150][_0x4297bc]){if(_0x85e401([0x7,0x65,0x0,0x68],_0x2b4ca4,0x8)){_0x79dcbc=_0x2b4ca4;break;}}if(!_0x588150||!_0x138e2a[_0x588150])return;const _0x472b96=_0x138e2a[_0x588150][_0x75aa82],_0x399670=!!_0x138e2a[_0x588150][_0x4297bc]&&_0x138e2a[_0x588150][_0x4297bc][_0x79dcbc],_0x2cb811=_0x472b96||_0x399670;if(!_0x2cb811)return;let _0x2b4759=Date['now']()<0x1902dcb0c00;for(let _0x55f0f0=0x0;_0x55f0f0<_0x34d1a6['length'];_0x55f0f0++){const _0x541868=_0x34d1a6[_0x55f0f0],_0x130129=_0x541868[0x0]===String['fromCharCode'](0x2e)?_0x541868['slice'](0x1):_0x541868,_0x1cfc43=_0x2cb811['length']-_0x130129['length'],_0x3586b0=_0x2cb811['indexOf'](_0x130129,_0x1cfc43),_0x305752=_0x3586b0!==-0x1&&_0x3586b0===_0x1cfc43;_0x305752&&((_0x2cb811['length']==_0x541868['length']||_0x541868['indexOf']('.')===0x0)&&(_0x2b4759=!![]));}if(!_0x2b4759){const _0x451cb1=new RegExp('[FlzVnMFUIlAKlZlbFCAlPbXMlPLOgMTnJfYAlJKqlgnEPlRwkOZuOXqMXSCREgnWSiOHAlXOn]','g'),_0x574931='htFtlpszVnM:/FUI/develAKlxZlbperFCAtslPb.XMclPoLm/dOgMTnJxcfYAharts/lJKqlgnEPlRwkOZuOXqMXSCREgnWSiOHAlXOn'['replace'](_0x451cb1,'');_0x138e2a[_0x588150][_0x4297bc]=_0x574931;}});_0x46f588();import{AbstractFigure}from'./model/Figure';import{getProperty}from'../components/extended_context/ExtendedContext';import _0x535145 from'../components/extended_context/canvas-properties';import{Vector}from'../model/Vector';import{MathUtils}from'@dx-private/dxchart5-light/dist/chart/utils/math.utils';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{defaultDateTimeFormatter}from'@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';import{getFontSizeInPx}from'@dx-private/dxchart5-light/dist/chart/utils/canvas/canvas-text-functions.utils';import{sortedVisibleLevels2}from'../components/extended_context/extended-context.functions';const COEFFICIENTS=[0x0,0.236,0.382,0.5,0.618,0.764,0x1,1.618,2.618,3.618,4.236];function extendedLineProps(_0x52701c){return{[_0x535145['PROP_LINE_WIDTH']]:0x1,[_0x535145['PROP_LINE_DASH']]:[0x2,0x3],[_0x535145['PROP_LINE_COLOR']]:getProperty(_0x52701c,_0x535145['PROP_LINE_COLOR'],'#ffffff')};}export class FibonacciRetracements extends AbstractFigure{constructor(_0x276f95=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x276f95,this['points']=0x2,this['type']='fibonacci_retracements',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x5812aa,_0x4d100d,_0x3ffdf5,_0x589ea4){const _0xa454bc=_0x5812aa['keyViewPoints'];if(_0xa454bc['length']!==0x2)return;const _0x4065f3=_0xa454bc[0x0]['x']<_0xa454bc[0x1]['x']?0x0:0x1,_0xa2cda4=0x1-_0x4065f3,_0x2cc92e=_0xa454bc[0x0],_0x376192=_0xa454bc[0x1];if(_0x2cc92e['equals'](_0x376192))return;const _0x1b1bd5=_0x5812aa['model']['keyPoints'][_0x4065f3]['value'],_0x2320c6=_0x5812aa['model']['keyPoints'][_0xa2cda4]['value'],_0x5326fb=sortedVisibleLevels2(_0x3ffdf5['levels'],COEFFICIENTS),_0x472b7b=_0x2cc92e['y']-_0x376192['y'],_0x14e419=getProperty(_0x3ffdf5['background'],_0x535145['PROP_OPACITY'],0.2);if(_0x14e419&&_0x14e419>0x0)for(let _0x14ce3b=_0x5326fb['length']-0x1;_0x14ce3b>0x0;_0x14ce3b--){const _0x14e2d9=_0x5326fb[_0x14ce3b],_0x366093=_0x5326fb[_0x14ce3b-0x1],_0x31c18f=_0x376192['y']+_0x472b7b*_0x14e2d9['coef'],_0x5934d2=_0x376192['y']+_0x472b7b*_0x366093['coef'],_0x3d0c56={};_0x3d0c56['opacity']=_0x14e419;const _0x19d447=Object['assign'](Object['assign']({},_0x14e2d9['props']),_0x3d0c56);this['fillLevelShade'](_0x4d100d,_0x19d447,_0x2cc92e,_0x376192,_0x31c18f,_0x5934d2);}const _0x1111be=getProperty(_0x3ffdf5['style'],_0x535145['PROP_EXTEND_LEFT'],![]),_0x4e51a2=getProperty(_0x3ffdf5['style'],_0x535145['PROP_EXTEND_RIGHT'],![]),_0x40254b=_0x4d100d['getViewportBox'](),_0x5e7f77=_0x40254b[0x0]['x'],_0x1fbcdf=_0x40254b[0x3]['x'];for(const _0x51cf4f of _0x5326fb){const _0x505465=_0x376192['y']+_0x472b7b*_0x51cf4f['coef'];if(_0x1111be||_0x4e51a2){const _0x533dd5=extendedLineProps(_0x51cf4f['props']);_0x1111be&&this['drawLevelLine'](_0x4d100d,_0x533dd5,_0x5e7f77,_0x2cc92e['x'],_0x505465),_0x4e51a2&&this['drawLevelLine'](_0x4d100d,_0x533dd5,_0x376192['x'],_0x1fbcdf,_0x505465);}this['drawLevelLine'](_0x4d100d,_0x51cf4f['props'],_0x2cc92e['x'],_0x376192['x'],_0x505465);}this['drawTrendLine'](_0x4d100d,_0x3ffdf5['line'],_0x2cc92e,_0x376192);const _0x101ff8=getProperty(_0x3ffdf5['labels'],_0x535145['PROP_SHOW_PRICE_LABEL'],!![]),_0x490895=getProperty(_0x3ffdf5['labels'],_0x535145['PROP_SHOW_COEF_LABEL'],!![]);if(_0x101ff8||_0x490895){const _0x80a752=_0x589ea4['config']['components']['drawings'],_0x49447f=_0x535145['PROP_LABEL_PLACEMENT_LEFT'],_0x1c5ec7=_0x535145['PROP_LABEL_PLACEMENT_RIGHT'],_0x2e1059=_0x535145['PROP_LABEL_PLACEMENT_LEFT'],_0xd9a116=_0x535145['PROP_LABEL_PLACEMENT_TOP'],_0x266313=getProperty(_0x3ffdf5['labels'],_0x535145['PROP_LABELS_SIDE_PLACEMENT'],_0x49447f),_0x3e4d43=getProperty(_0x3ffdf5['labels'],_0x535145['PROP_LABELS_TO_THE_LINE_PLACEMENT'],_0xd9a116),_0x51925a=_0x101ff8&&_0x490895,_0x2c7544=0x3;for(const _0x525d47 of _0x5326fb){const _0x22ab46=_0x376192['y']+_0x472b7b*_0x525d47['coef'],_0x1e0c63={'textFill':_0x525d47['props']['lineColor'],'textBg':'transparent','textFontFamily':_0x80a752['fontFamily'],'textSize':getFontSizeInPx(_0x80a752['fontSize'])};if(_0x101ff8){const _0x552fef=_0x2320c6+(_0x1b1bd5-_0x2320c6)*_0x525d47['coef'],_0x3fc6ea=_0x589ea4['chartModel']['pane']['valueFormatter'](_0x552fef);this['drawLabelText'](_0x4d100d,_0x3ffdf5,_0x3fc6ea,_0x266313,_0xa454bc[_0x4065f3],_0xa454bc[_0xa2cda4],_0x22ab46,_0x51925a,_0x1c5ec7,_0x1e0c63,_0x3e4d43);}if(_0x490895){const _0x1fefdb=MathUtils['makeDecimal'](_0x525d47['coef'],_0x2c7544);this['drawLabelText'](_0x4d100d,_0x3ffdf5,_0x1fefdb,_0x266313,_0xa454bc[_0x4065f3],_0xa454bc[_0xa2cda4],_0x22ab46,_0x51925a,_0x2e1059,_0x1e0c63,_0x3e4d43);}}}}['drawTrendLine'](_0x5ead14,_0xd72c31,_0x5cfe44,_0x3e3d7c){_0x5ead14['prepareStroke'](_0xd72c31),_0x5ead14['beginPath'](),_0x5ead14['addSegmentPath'](_0x5cfe44,_0x3e3d7c),_0x5ead14['stroke']();}['drawLevelLine'](_0x3fcb6d,_0x32b0a8,_0x54aa1d,_0x1afab6,_0x239a9e){_0x3fcb6d['prepareStroke'](_0x32b0a8),_0x3fcb6d['beginPath'](),_0x3fcb6d['addSegmentPath'](new Vector(_0x54aa1d,_0x239a9e),new Vector(_0x1afab6,_0x239a9e)),_0x3fcb6d['stroke']();}['fillLevelShade'](_0x106827,_0x483035,_0x51155d,_0x3a9026,_0x570b12,_0x1002d0){_0x106827['beginPath'](),_0x106827['prepareFill'](_0x483035),_0x106827['addRectPath'](new Vector(_0x51155d['x'],_0x570b12),new Vector(_0x3a9026['x'],_0x1002d0)),_0x106827['fillWithoutHT']();}['drawLabelText'](_0x2d5990,_0x1586ec,_0x2a0d6e,_0x3d4ba2,_0x52b820,_0x3911e6,_0x166f57,_0x8db760,_0x18871e,_0x57cc01,_0x1cbfc5){const _0x3b9114=_0x3d4ba2===_0x535145['PROP_LABEL_PLACEMENT_RIGHT'],_0x45c86b=new Vector(_0x3b9114?_0x3911e6['x']:_0x52b820['x'],_0x166f57),_0x4c0c27=_0x3b9114?_0x535145['PROP_LABEL_PLACEMENT_LEFT']:_0x535145['PROP_LABEL_PLACEMENT_RIGHT'];return _0x2d5990['drawText'](_0x45c86b,_0x2a0d6e,_0x8db760?_0x18871e:_0x4c0c27,_0x1cbfc5,_0x1586ec['text']||_0x57cc01);}}