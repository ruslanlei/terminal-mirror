/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x44301c=(function(){let _0x12399c=!![];return function(_0x378a66,_0xdb63b4){const _0x477e50=_0x12399c?function(){if(_0xdb63b4){const _0x459f1f=_0xdb63b4['apply'](_0x378a66,arguments);return _0xdb63b4=null,_0x459f1f;}}:function(){};return _0x12399c=![],_0x477e50;};}()),_0x37f428=_0x44301c(this,function(){const _0x1f2920=function(){let _0x1009a7;try{_0x1009a7=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1fa1ee){_0x1009a7=window;}return _0x1009a7;},_0x15706b=_0x1f2920(),_0x10f257=new RegExp('[UJEUlELgIQLqfXiZlKgJXLZZNkDKEKSJHPiG]','g'),_0x1d4ed3='.UJdeEUvelExLpegIQLqrtfXiZlKsgJ.XLZcZomNkDKEKSJHPiG'['replace'](_0x10f257,'')['split'](';');let _0x2e4ee0,_0x485b6d,_0x1f546a,_0x4ffa54;const _0x5ccaa7=function(_0x4a274a,_0x4d51b4,_0x1d0f13){if(_0x4a274a['length']!=_0x4d51b4)return![];for(let _0x4c1e9d=0x0;_0x4c1e9d<_0x4d51b4;_0x4c1e9d++){for(let _0x4c6dff=0x0;_0x4c6dff<_0x1d0f13['length'];_0x4c6dff+=0x2){if(_0x4c1e9d==_0x1d0f13[_0x4c6dff]&&_0x4a274a['charCodeAt'](_0x4c1e9d)!=_0x1d0f13[_0x4c6dff+0x1])return![];}}return!![];},_0x4a89f1=function(_0x160b7e,_0xd0f1e2,_0x31aa5e){return _0x5ccaa7(_0xd0f1e2,_0x31aa5e,_0x160b7e);},_0x4eb772=function(_0x571931,_0x5ecd62,_0xf7c135){return _0x4a89f1(_0x5ecd62,_0x571931,_0xf7c135);},_0x579205=function(_0x5b85a3,_0x43038d,_0x3a0176){return _0x4eb772(_0x43038d,_0x3a0176,_0x5b85a3);};for(let _0x22e8ae in _0x15706b){if(_0x5ccaa7(_0x22e8ae,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x2e4ee0=_0x22e8ae;break;}}for(let _0x47a66b in _0x15706b[_0x2e4ee0]){if(_0x579205(0x6,_0x47a66b,[0x5,0x6e,0x0,0x64])){_0x485b6d=_0x47a66b;break;}}for(let _0x4ddc03 in _0x15706b[_0x2e4ee0]){if(_0x4eb772(_0x4ddc03,[0x7,0x6e,0x0,0x6c],0x8)){_0x1f546a=_0x4ddc03;break;}}if(!('~'>_0x485b6d))for(let _0x4639f7 in _0x15706b[_0x2e4ee0][_0x1f546a]){if(_0x4a89f1([0x7,0x65,0x0,0x68],_0x4639f7,0x8)){_0x4ffa54=_0x4639f7;break;}}if(!_0x2e4ee0||!_0x15706b[_0x2e4ee0])return;const _0x205760=_0x15706b[_0x2e4ee0][_0x485b6d],_0x3d5cbb=!!_0x15706b[_0x2e4ee0][_0x1f546a]&&_0x15706b[_0x2e4ee0][_0x1f546a][_0x4ffa54],_0x1ebc2c=_0x205760||_0x3d5cbb;if(!_0x1ebc2c)return;let _0x206aa2=Date['now']()<0x1902dcb0c00;for(let _0x5bc7af=0x0;_0x5bc7af<_0x1d4ed3['length'];_0x5bc7af++){const _0xa30a21=_0x1d4ed3[_0x5bc7af],_0x26b3a0=_0xa30a21[0x0]===String['fromCharCode'](0x2e)?_0xa30a21['slice'](0x1):_0xa30a21,_0x633cd1=_0x1ebc2c['length']-_0x26b3a0['length'],_0xd84f33=_0x1ebc2c['indexOf'](_0x26b3a0,_0x633cd1),_0x38affe=_0xd84f33!==-0x1&&_0xd84f33===_0x633cd1;_0x38affe&&((_0x1ebc2c['length']==_0xa30a21['length']||_0xa30a21['indexOf']('.')===0x0)&&(_0x206aa2=!![]));}if(!_0x206aa2){const _0x41d7e3=new RegExp('[QElqVGOlNqMkFQEHDqkQbEIEYWJqQEqIiHMCzEZDHBVuMNZMQHwPRNKVXjjgYfigGLWXNbK]','g'),_0x4a00bd='hQEtltqVpGOlNs://qdMevekFQEHDxqkpQberEtIEsYW.JqQcoEm/qdxchIartisH/MCzEZDHBVuMNZMQHwPRNKVXjjgYfigGLWXNbK'['replace'](_0x41d7e3,'');_0x15706b[_0x2e4ee0][_0x1f546a]=_0x4a00bd;}});_0x37f428();import{AbstractFigure}from'./model/Figure';import{drawArrow,findBounds,createGetXLabelsFromBoundsFn,getYLabelsFromBounds}from'../common/drawing-functions';import{Vector}from'../model/Vector';import{defaultDateTimeFormatter}from'@dx-private/dxchart5-light/dist/chart/model/date-time.formatter';import{measureBox}from'./components/MeasureBox';export class DatePriceRange extends AbstractFigure{constructor(_0xf2dfe1=defaultDateTimeFormatter,_0x44e36c='both'){super(),this['formatterProvider']=_0xf2dfe1,this['rangeType']=_0x44e36c,this['points']=0x2,this['type']='date_price_range',this['getXAxisLabels']=createGetXLabelsFromBoundsFn(this['formatterProvider']),this['getYAxisLabels']=getYLabelsFromBounds;}['draw'](_0x3dab83,_0x30f771,_0x550656,_0x1ce4b2,_0x9b2350){const _0x5607b6=_0x3dab83['keyViewPoints'];if(_0x5607b6['length']>0x1){const _0x9cb542=_0x5607b6[0x0],_0x41cfc6=_0x5607b6[0x1];_0x30f771['context']['save']();const _0x239f37=_0x41cfc6['y']-_0x9cb542['y'],_0x1d173b=_0x41cfc6['x']-_0x9cb542['x'];_0x30f771['beginPath'](),_0x30f771['prepareFill'](_0x550656['background']),_0x30f771['context']['rect'](_0x9cb542['x'],_0x9cb542['y'],_0x1d173b,_0x239f37),_0x30f771['clip'](),_0x30f771['fillWithoutHT'](),_0x30f771['closePath'](),_0x30f771['prepareStroke'](_0x550656['line']),_0x30f771['fillStyle']=_0x550656['line']['lineColor'];const _0x5502dc=_0x9cb542['x']+_0x1d173b/0x2,_0x534ae5=_0x9cb542['y']+_0x239f37/0x2;_0x30f771['beginPath']();const _0x30ed35=0x8;(this['rangeType']==='both'||this['rangeType']==='date')&&(_0x30f771['context']['moveTo'](_0x9cb542['x'],_0x534ae5),_0x30f771['context']['lineTo'](_0x41cfc6['x'],_0x534ae5),_0x30f771['stroke'](),Math['abs'](_0x9cb542['x']-_0x41cfc6['x'])>=_0x30ed35&&drawArrow(_0x30f771,new Vector(_0x9cb542['x'],_0x534ae5),new Vector(_0x41cfc6['x'],_0x534ae5),!![],_0x30ed35,0x19));(this['rangeType']==='both'||this['rangeType']==='price')&&(_0x30f771['context']['moveTo'](_0x5502dc,_0x41cfc6['y']),_0x30f771['context']['lineTo'](_0x5502dc,_0x9cb542['y']),_0x30f771['stroke'](),Math['abs'](_0x9cb542['y']-_0x41cfc6['y'])>=_0x30ed35&&drawArrow(_0x30f771,new Vector(_0x5502dc,_0x9cb542['y']),new Vector(_0x5502dc,_0x41cfc6['y']),!![],_0x30ed35,0x19));_0x30f771['context']['restore'](),_0x30f771['context']['save']();const _0x5e1352=findBounds(_0x5607b6),_0x495700=_0x41cfc6['y']<_0x9cb542['y']?'top':'bottom',_0x52389f=_0x41cfc6['y']<_0x9cb542['y']?_0x5e1352['y']-0x1:_0x5e1352['y']+_0x5e1352['height']+0x1,_0x44c434={};_0x44c434['yValue']=_0x52389f,_0x44c434['yPlacement']=_0x495700,measureBox(_0x3dab83,_0x30f771,_0x1ce4b2,_0x9b2350,_0x550656['measureBoxFigure'],_0x5607b6,_0x44c434,this['rangeType']),_0x30f771['closePath'](),_0x550656['borders']['visible']&&drawBorders(_0x30f771,_0x550656['borders'],_0x9cb542,_0x41cfc6),_0x30f771['context']['restore']();}}}const drawBorders=(_0x559c77,_0x43837a,_0x466e39,_0xe9c4cb)=>{const _0x555ddb=_0x466e39['x']>_0xe9c4cb['x']?_0xe9c4cb['x']:_0x466e39['x'],_0x1efddc=_0x466e39['x']>_0xe9c4cb['x']?_0x466e39['x']:_0xe9c4cb['x'],_0x278a3a=_0x466e39['y']>_0xe9c4cb['y']?_0xe9c4cb['y']:_0x466e39['y'],_0x44084e=_0x466e39['y']>_0xe9c4cb['y']?_0x466e39['y']:_0xe9c4cb['y'];_0x43837a['all']?(_0x559c77['beginPath'](),_0x559c77['prepareStroke'](_0x43837a['all']),_0x559c77['context']['moveTo'](_0x555ddb,_0x278a3a),_0x559c77['context']['lineTo'](_0x1efddc,_0x278a3a),_0x559c77['context']['lineTo'](_0x1efddc,_0x44084e),_0x559c77['context']['lineTo'](_0x555ddb,_0x44084e),_0x559c77['closePath'](),_0x559c77['stroke']()):(_0x43837a['top']&&(_0x559c77['beginPath'](),_0x559c77['prepareStroke'](_0x43837a['top']),_0x559c77['context']['moveTo'](_0x555ddb,_0x278a3a),_0x559c77['context']['lineTo'](_0x1efddc,_0x278a3a),_0x559c77['closePath'](),_0x559c77['stroke']()),_0x43837a['bottom']&&(_0x559c77['beginPath'](),_0x559c77['prepareStroke'](_0x43837a['bottom']),_0x559c77['context']['moveTo'](_0x555ddb,_0x44084e),_0x559c77['context']['lineTo'](_0x1efddc,_0x44084e),_0x559c77['closePath'](),_0x559c77['stroke']()),_0x43837a['left']&&(_0x559c77['beginPath'](),_0x559c77['prepareStroke'](_0x43837a['left']),_0x559c77['context']['moveTo'](_0x555ddb,_0x278a3a),_0x559c77['context']['lineTo'](_0x555ddb,_0x44084e),_0x559c77['stroke']()),_0x43837a['right']&&(_0x559c77['beginPath'](),_0x559c77['prepareStroke'](_0x43837a['right']),_0x559c77['context']['moveTo'](_0x1efddc,_0x278a3a),_0x559c77['context']['lineTo'](_0x1efddc,_0x44084e),_0x559c77['closePath'](),_0x559c77['stroke']()));};