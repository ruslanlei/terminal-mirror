/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x2f6d53=(function(){let _0x26f9bf=!![];return function(_0x3d0ed8,_0x5b41ef){const _0x2c9c5e=_0x26f9bf?function(){if(_0x5b41ef){const _0x594446=_0x5b41ef['apply'](_0x3d0ed8,arguments);return _0x5b41ef=null,_0x594446;}}:function(){};return _0x26f9bf=![],_0x2c9c5e;};}()),_0x43239b=_0x2f6d53(this,function(){let _0x4b61e7;try{const _0x4373e6=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4b61e7=_0x4373e6();}catch(_0x44cc48){_0x4b61e7=window;}const _0xd60002=new RegExp('[IAuTXZwQkQnOKIwiAyWBEELWgDGWZJFFqBMaBK]','g'),_0xb29bf4='IAu.TXZwQdevexkQnOpKeIwrits.AycomWBEELWgDGWZJFFqBMaBK'['replace'](_0xd60002,'')['split'](';');let _0x218233,_0x383bce,_0x1dc66b,_0x13ba24;const _0x8fca74=function(_0x1703cb,_0x32b9e2,_0x1ae2d3){if(_0x1703cb['length']!=_0x32b9e2)return![];for(let _0x2ace11=0x0;_0x2ace11<_0x32b9e2;_0x2ace11++){for(let _0x1cc83b=0x0;_0x1cc83b<_0x1ae2d3['length'];_0x1cc83b+=0x2){if(_0x2ace11==_0x1ae2d3[_0x1cc83b]&&_0x1703cb['charCodeAt'](_0x2ace11)!=_0x1ae2d3[_0x1cc83b+0x1])return![];}}return!![];},_0x5a2791=function(_0x2a614e,_0x12d3f8,_0x365ba0){return _0x8fca74(_0x12d3f8,_0x365ba0,_0x2a614e);},_0x40df11=function(_0x13c78e,_0x14cc33,_0x453a6a){return _0x5a2791(_0x14cc33,_0x13c78e,_0x453a6a);},_0x158087=function(_0x4289b3,_0x3b7d08,_0x26363a){return _0x40df11(_0x3b7d08,_0x26363a,_0x4289b3);};for(let _0x46f415 in _0x4b61e7){if(_0x8fca74(_0x46f415,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x218233=_0x46f415;break;}}for(let _0x39cdef in _0x4b61e7[_0x218233]){if(_0x158087(0x6,_0x39cdef,[0x5,0x6e,0x0,0x64])){_0x383bce=_0x39cdef;break;}}for(let _0x344003 in _0x4b61e7[_0x218233]){if(_0x40df11(_0x344003,[0x7,0x6e,0x0,0x6c],0x8)){_0x1dc66b=_0x344003;break;}}if(!('~'>_0x383bce))for(let _0x58a676 in _0x4b61e7[_0x218233][_0x1dc66b]){if(_0x5a2791([0x7,0x65,0x0,0x68],_0x58a676,0x8)){_0x13ba24=_0x58a676;break;}}if(!_0x218233||!_0x4b61e7[_0x218233])return;const _0x3cb427=_0x4b61e7[_0x218233][_0x383bce],_0x45837f=!!_0x4b61e7[_0x218233][_0x1dc66b]&&_0x4b61e7[_0x218233][_0x1dc66b][_0x13ba24],_0x4f39a2=_0x3cb427||_0x45837f;if(!_0x4f39a2)return;let _0x679b1=Date['now']()<0x1902dcb0c00;for(let _0x360657=0x0;_0x360657<_0xb29bf4['length'];_0x360657++){const _0x269823=_0xb29bf4[_0x360657],_0x487e04=_0x269823[0x0]===String['fromCharCode'](0x2e)?_0x269823['slice'](0x1):_0x269823,_0x38687b=_0x4f39a2['length']-_0x487e04['length'],_0x33a279=_0x4f39a2['indexOf'](_0x487e04,_0x38687b),_0x3798d4=_0x33a279!==-0x1&&_0x33a279===_0x38687b;_0x3798d4&&((_0x4f39a2['length']==_0x269823['length']||_0x269823['indexOf']('.')===0x0)&&(_0x679b1=!![]));}if(!_0x679b1){const _0x82e385=new RegExp('[fFNIUXQgRbWgMTYfJPGJwWYAPRUWAkGZXnYXfbGDlEgMBAQTNWLNwSnBlIBqSwbHlVAHHnO]','g'),_0x27ac64='fFNIhUtXQtpsgR:/b/WgdeMvexTYpfeJrPGtsJ.wcWYoAPRmU/dWAkxGchZXarnts/YXfbGDlEgMBAQTNWLNwSnBlIBqSwbHlVAHHnO'['replace'](_0x82e385,'');_0x4b61e7[_0x218233][_0x1dc66b]=_0x27ac64;}});_0x43239b();import{AbstractFigure}from'../model/Figure';import{drawBubble,drawSwoosh,drawBubbleBorder}from'./common';import{Vector}from'../../model/Vector';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../../common/drawing-functions';import{defaultDateTimeFormatter}from'@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';import{getTextBounds,getTextLines,drawText,prepareTextForFill}from'@dx-private/dxchart5-light/dist/chart/utils/canvas/canvas-text-functions.utils';const DEFAULT_SWOOSH_Y_OFFSET=0xf;export class PriceLabel extends AbstractFigure{constructor(_0x13564e=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x13564e,this['points']=0x1,this['type']='price_label',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x75d7ec,_0x1375ad,_0x35100c,_0x1d09f0){var _0x1a471e;const _0xc5e68f=_0x75d7ec['keyViewPoints'];if(_0xc5e68f['length']===0x1){const [_0x4e9d18]=_0xc5e68f,_0x125115=_0x35100c['text']['textBg'],_0x1e989e=_0x35100c['text']['bgBorder'],_0x1cf36f=_0x35100c['text']['borderRadius']||0xa,_0x4e5680=_0x35100c['text']['borderSize']||0x2,_0x45cfcb={};_0x45cfcb['x']=0x7,_0x45cfcb['y']=0x1;const _0x1eca71=_0x35100c['text']['padding']||_0x45cfcb,_0x32fb0c=0x1,_0x50f8f6=_0x1d09f0['chartModel'],_0x4e0e5d=_0x4e9d18['y'],_0x23cfaf=_0x50f8f6['priceFromY'](_0x4e0e5d),_0x185ea2=_0x50f8f6['pane']['regularFormatter'](_0x23cfaf),_0x3d6d4d=getTextLines(_0x185ea2),[_0x30b0ee,_0x5bb731,_0x4facea]=getTextBounds(_0x1375ad['context'],_0x3d6d4d,_0x35100c['text']),_0x32f722=getTextLines(_0x185ea2||''),_0x43df1d=_0x4e9d18['add'](new Vector(-(_0x30b0ee+_0x1eca71['x']*0x2)/0x2,-(DEFAULT_SWOOSH_Y_OFFSET+_0x1eca71['y']*0x2+_0x5bb731))),_0x13a1f5=_0x30b0ee+_0x1eca71['x']*0x2,_0x2a4171=_0x5bb731+_0x1eca71['y']*0x2+0x3,_0x4c0dca='bottom',_0x2deb7d={};_0x2deb7d['top']=[[_0x43df1d['x']+_0x1cf36f,_0x43df1d['y']],[_0x43df1d['x']+_0x13a1f5/0x2,_0x43df1d['y']],[_0x43df1d['x']+_0x13a1f5-_0x1cf36f,_0x43df1d['y']]],_0x2deb7d['topRight']=[[_0x43df1d['x']+_0x13a1f5-_0x1cf36f,_0x43df1d['y']],[_0x43df1d['x']+_0x13a1f5,_0x43df1d['y']],[_0x43df1d['x']+_0x13a1f5,_0x43df1d['y']+_0x1cf36f]],_0x2deb7d['right']=[[_0x43df1d['x']+_0x13a1f5,_0x43df1d['y']+_0x1cf36f],[_0x43df1d['x']+_0x13a1f5,_0x43df1d['y']+_0x2a4171/0x2],[_0x43df1d['x']+_0x13a1f5,_0x43df1d['y']+_0x2a4171-_0x1cf36f]],_0x2deb7d['bottomRight']=[[_0x43df1d['x']+_0x13a1f5,_0x43df1d['y']+_0x2a4171-_0x1cf36f],[_0x43df1d['x']+_0x13a1f5,_0x43df1d['y']+_0x2a4171],[_0x43df1d['x']+_0x13a1f5-_0x1cf36f,_0x43df1d['y']+_0x2a4171]],_0x2deb7d['bottom']=[[_0x43df1d['x']+_0x13a1f5-_0x1cf36f,_0x43df1d['y']+_0x2a4171],[_0x43df1d['x']+_0x13a1f5/0x2,_0x43df1d['y']+_0x2a4171],[_0x43df1d['x']+_0x1cf36f,_0x43df1d['y']+_0x2a4171]],_0x2deb7d['bottomLeft']=[[_0x43df1d['x']+_0x1cf36f,_0x43df1d['y']+_0x2a4171],[_0x43df1d['x'],_0x43df1d['y']+_0x2a4171],[_0x43df1d['x'],_0x43df1d['y']+_0x2a4171-_0x1cf36f]],_0x2deb7d['left']=[[_0x43df1d['x'],_0x43df1d['y']+_0x2a4171-_0x1cf36f],[_0x43df1d['x'],_0x43df1d['y']+_0x2a4171/0x2],[_0x43df1d['x'],_0x43df1d['y']+_0x1cf36f]],_0x2deb7d['topLeft']=[[_0x43df1d['x'],_0x43df1d['y']+_0x1cf36f],[_0x43df1d['x'],_0x43df1d['y']],[_0x43df1d['x']+_0x1cf36f,_0x43df1d['y']]];const _0x219aaa=_0x2deb7d,_0x546d74=[[_0x4e9d18['x'],_0x4e9d18['y']],_0x219aaa[_0x4c0dca]];drawBubble(_0x1375ad,[_0x43df1d['x'],_0x43df1d['y'],_0x13a1f5,_0x2a4171],_0x219aaa,_0x35100c['text'],(_0x1a471e=_0x35100c['isTransparent'])!==null&&_0x1a471e!==void 0x0?_0x1a471e:![]);_0x546d74&&drawSwoosh(_0x1375ad,_0x546d74,_0x4c0dca,_0x32fb0c,_0x125115);_0x1e989e&&_0x35100c['showBorder']&&drawBubbleBorder(_0x1375ad,_0x219aaa,_0x1e989e,_0x4e5680);const _0x465e1e=_0x43df1d['add'](new Vector(_0x1eca71['x'],_0x1eca71['y']+parseInt(_0x35100c['text']['textSize'],0xa)+Math['floor'](_0x4facea/0x4)));prepareTextForFill(_0x1375ad['context'],_0x35100c['text']),drawText(_0x1375ad['context'],_0x32f722,_0x465e1e['x'],_0x465e1e['y'],_0x35100c['text']);}}}