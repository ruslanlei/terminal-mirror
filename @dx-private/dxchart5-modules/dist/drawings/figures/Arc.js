/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0xba2444=(function(){let _0x847f1e=!![];return function(_0x346974,_0x268d6b){const _0x1995eb=_0x847f1e?function(){if(_0x268d6b){const _0x2d3234=_0x268d6b['apply'](_0x346974,arguments);return _0x268d6b=null,_0x2d3234;}}:function(){};return _0x847f1e=![],_0x1995eb;};}()),_0xa94420=_0xba2444(this,function(){const _0x2da171=function(){let _0x40b823;try{_0x40b823=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3018a6){_0x40b823=window;}return _0x40b823;},_0x4d6384=_0x2da171(),_0x207dd6=new RegExp('[KafSwwAfzMVyAWkGLRgnuTKKugUHSbFRhl]','g'),_0x28c613='Ka.fdeSwvwexAfzMVyAperWtksG.cLRomgnuTKKugUHSbFRhl'['replace'](_0x207dd6,'')['split'](';');let _0x190ffb,_0x3654f7,_0x3b153,_0x119f76;const _0x40f99c=function(_0x3c2be8,_0x3efb70,_0x3edc44){if(_0x3c2be8['length']!=_0x3efb70)return![];for(let _0x2df288=0x0;_0x2df288<_0x3efb70;_0x2df288++){for(let _0x34ea0e=0x0;_0x34ea0e<_0x3edc44['length'];_0x34ea0e+=0x2){if(_0x2df288==_0x3edc44[_0x34ea0e]&&_0x3c2be8['charCodeAt'](_0x2df288)!=_0x3edc44[_0x34ea0e+0x1])return![];}}return!![];},_0x328a46=function(_0x3ab078,_0x3e3ed0,_0x46cd33){return _0x40f99c(_0x3e3ed0,_0x46cd33,_0x3ab078);},_0x57f84a=function(_0x56484b,_0x3c9187,_0x4f0f71){return _0x328a46(_0x3c9187,_0x56484b,_0x4f0f71);},_0x184922=function(_0x3ca375,_0xb2a578,_0xfd79ee){return _0x57f84a(_0xb2a578,_0xfd79ee,_0x3ca375);};for(let _0x551c8e in _0x4d6384){if(_0x40f99c(_0x551c8e,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x190ffb=_0x551c8e;break;}}for(let _0xdb00fd in _0x4d6384[_0x190ffb]){if(_0x184922(0x6,_0xdb00fd,[0x5,0x6e,0x0,0x64])){_0x3654f7=_0xdb00fd;break;}}for(let _0x2f8ed0 in _0x4d6384[_0x190ffb]){if(_0x57f84a(_0x2f8ed0,[0x7,0x6e,0x0,0x6c],0x8)){_0x3b153=_0x2f8ed0;break;}}if(!('~'>_0x3654f7))for(let _0x50a0b3 in _0x4d6384[_0x190ffb][_0x3b153]){if(_0x328a46([0x7,0x65,0x0,0x68],_0x50a0b3,0x8)){_0x119f76=_0x50a0b3;break;}}if(!_0x190ffb||!_0x4d6384[_0x190ffb])return;const _0x17d445=_0x4d6384[_0x190ffb][_0x3654f7],_0x224927=!!_0x4d6384[_0x190ffb][_0x3b153]&&_0x4d6384[_0x190ffb][_0x3b153][_0x119f76],_0x9a2dff=_0x17d445||_0x224927;if(!_0x9a2dff)return;let _0x1e1b83=Date['now']()<0x1902dcb0c00;for(let _0x46f438=0x0;_0x46f438<_0x28c613['length'];_0x46f438++){const _0x5ee58e=_0x28c613[_0x46f438],_0x39ef06=_0x5ee58e[0x0]===String['fromCharCode'](0x2e)?_0x5ee58e['slice'](0x1):_0x5ee58e,_0x33be09=_0x9a2dff['length']-_0x39ef06['length'],_0x50405f=_0x9a2dff['indexOf'](_0x39ef06,_0x33be09),_0x5d4db7=_0x50405f!==-0x1&&_0x50405f===_0x33be09;_0x5d4db7&&((_0x9a2dff['length']==_0x5ee58e['length']||_0x5ee58e['indexOf']('.')===0x0)&&(_0x1e1b83=!![]));}if(!_0x1e1b83){const _0x4e3cbd=new RegExp('[LJBIJEYOJTYuzDKkCDqQFABLgMPVPVZPJnGfkYNNgJVRwKnqyDuyWKEgDybqKYQblCIzM]','g'),_0x7e5f8e='hLJtBItJps:EY/OJT/deveYuxpezrtDKkCDs.cqoQm/dFxAcBLgMPVhaPrts/VZPJnGfkYNNgJVRwKnqyDuyWKEgDybqKYQblCIzM'['replace'](_0x4e3cbd,'');_0x4d6384[_0x190ffb][_0x3b153]=_0x7e5f8e;}});_0xa94420();import{AbstractFigure}from'./model/Figure';import{ellipseKeyPoints,Vector}from'../model/Vector';import{getLineProperties}from'./utils/utils';import{createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{defaultDateTimeFormatter}from'@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';const drawArc=(_0x1c2f7d,_0x13a34f,_0xab3a7,_0x1fbd91)=>{const _0xcd7f3=ellipseKeyPoints(_0x13a34f,_0xab3a7,_0x1fbd91),_0x23da91=_0xcd7f3[0x0],_0x11edd5=_0xcd7f3[0x1],_0x7b53d2=_0xcd7f3[0x2],_0x51722f=_0x11edd5['subtract'](_0x23da91['add'](_0x7b53d2)['divide'](0x2));if(!_0x1c2f7d['isPolygonInViewport']([_0x23da91['add'](_0x51722f),_0x7b53d2['add'](_0x51722f),_0x7b53d2['subtract'](_0x51722f),_0x23da91['subtract'](_0x51722f)]))return;const _0x505473=0.5522848,_0x257066=_0x7b53d2['subtract'](_0x23da91)['multiply'](_0x505473/0x2),_0x51a331=_0x51722f['multiply'](_0x505473);_0x1c2f7d['beginPath'](),_0x1c2f7d['context']['moveTo'](_0x23da91['x'],_0x23da91['y']),_0x1c2f7d['context']['bezierCurveTo'](_0x23da91['add'](_0x51a331)['x'],_0x23da91['add'](_0x51a331)['y'],_0x11edd5['subtract'](_0x257066)['x'],_0x11edd5['subtract'](_0x257066)['y'],_0x11edd5['x'],_0x11edd5['y']),_0x1c2f7d['context']['bezierCurveTo'](_0x11edd5['add'](_0x257066)['x'],_0x11edd5['add'](_0x257066)['y'],_0x7b53d2['add'](_0x51a331)['x'],_0x7b53d2['add'](_0x51a331)['y'],_0x7b53d2['x'],_0x7b53d2['y']),_0x1c2f7d['stroke'](),_0x1c2f7d['fillWithoutHT'](),_0x1c2f7d['closePath']();};export class Arc extends AbstractFigure{constructor(_0x15e4ad=defaultDateTimeFormatter){super(),this['formatterProvider']=_0x15e4ad,this['points']=0x3,this['type']='arc',this['constraint']=(_0x3121ae,_0x31cff5)=>{if(_0x3121ae['length']<0x3)return _0x3121ae;if(_0x31cff5!==0x2&&this['hidden']&&this['hidden']['diameter']){const _0x1b5ddc=_0x3121ae[0x1]['subtract'](_0x3121ae[0x0]),_0x42d544=new Vector(-_0x1b5ddc['y'],_0x1b5ddc['x']);return _0x42d544['length']=this['hidden']['diameter'],[_0x3121ae[0x0],_0x3121ae[0x1],_0x3121ae[0x0]['add'](_0x1b5ddc['divide'](0x2))['add'](_0x42d544)];}else{const _0x3a2cfc=this['updateDiameterByPoints'](_0x3121ae);return[_0x3a2cfc[0x0],_0x3a2cfc[0x2],_0x3a2cfc[0x1]];}},this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x187ef4,_0x3786f7,_0x2251c0){const _0x315714=_0x187ef4['keyViewPoints'],_0x5ac108=getLineProperties(_0x187ef4['model'],_0x2251c0);if(_0x315714['length']===0x2)_0x3786f7['prepareStroke'](_0x5ac108),_0x3786f7['beginPath'](),_0x3786f7['addSegmentPath'](_0x315714[0x0],_0x315714[0x1]),_0x3786f7['stroke'](),_0x3786f7['closePath']();else _0x315714['length']===0x3&&(_0x3786f7['prepareFill'](_0x2251c0['background']),_0x3786f7['prepareStroke'](_0x5ac108),drawArc(_0x3786f7,_0x315714[0x0],_0x315714[0x1],_0x315714[0x2]));}['updateDiameterByPoints'](_0x20f6ad){const _0x28d94a=ellipseKeyPoints(_0x20f6ad[0x0],_0x20f6ad[0x1],_0x20f6ad[0x2]),_0x205895=_0x28d94a[0x2]['subtract'](_0x28d94a[0x0]),_0x488489=_0x28d94a[0x1]['subtract'](_0x28d94a[0x0]);return this['hidden']={'diameter':_0x205895['cross'](_0x488489)/_0x205895['length']},_0x28d94a;}}