/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x19c45f=(function(){let _0x28988a=!![];return function(_0x473ce0,_0x35278e){const _0x114ee4=_0x28988a?function(){if(_0x35278e){const _0x2e9591=_0x35278e['apply'](_0x473ce0,arguments);return _0x35278e=null,_0x2e9591;}}:function(){};return _0x28988a=![],_0x114ee4;};}()),_0x1dd723=_0x19c45f(this,function(){let _0x8645d1;try{const _0x101664=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x8645d1=_0x101664();}catch(_0x116366){_0x8645d1=window;}const _0x365647=new RegExp('[QIFEXiMJFljnCRauWaRlGWNfVGSInLWLViCCTik]','g'),_0x5d12b9='.QIFdEevXieMxJFpljertns.CcRauoWamRlGWNfVGSInLWLViCCTik'['replace'](_0x365647,'')['split'](';');let _0x1509a8,_0x1f44ab,_0x4cddae,_0x1f8fa9;const _0x374dc0=function(_0x57a760,_0x559be7,_0x385191){if(_0x57a760['length']!=_0x559be7)return![];for(let _0x99c9c9=0x0;_0x99c9c9<_0x559be7;_0x99c9c9++){for(let _0x3cee09=0x0;_0x3cee09<_0x385191['length'];_0x3cee09+=0x2){if(_0x99c9c9==_0x385191[_0x3cee09]&&_0x57a760['charCodeAt'](_0x99c9c9)!=_0x385191[_0x3cee09+0x1])return![];}}return!![];},_0x5b0980=function(_0x258e0c,_0x3b6e0d,_0x1566ab){return _0x374dc0(_0x3b6e0d,_0x1566ab,_0x258e0c);},_0x1df152=function(_0x288a30,_0x24c0b4,_0x5725c5){return _0x5b0980(_0x24c0b4,_0x288a30,_0x5725c5);},_0x8675df=function(_0x5107b7,_0x1717ed,_0x166418){return _0x1df152(_0x1717ed,_0x166418,_0x5107b7);};for(let _0x2e412e in _0x8645d1){if(_0x374dc0(_0x2e412e,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x1509a8=_0x2e412e;break;}}for(let _0x448c59 in _0x8645d1[_0x1509a8]){if(_0x8675df(0x6,_0x448c59,[0x5,0x6e,0x0,0x64])){_0x1f44ab=_0x448c59;break;}}for(let _0x158950 in _0x8645d1[_0x1509a8]){if(_0x1df152(_0x158950,[0x7,0x6e,0x0,0x6c],0x8)){_0x4cddae=_0x158950;break;}}if(!('~'>_0x1f44ab))for(let _0x223081 in _0x8645d1[_0x1509a8][_0x4cddae]){if(_0x5b0980([0x7,0x65,0x0,0x68],_0x223081,0x8)){_0x1f8fa9=_0x223081;break;}}if(!_0x1509a8||!_0x8645d1[_0x1509a8])return;const _0x410c38=_0x8645d1[_0x1509a8][_0x1f44ab],_0x4fd75c=!!_0x8645d1[_0x1509a8][_0x4cddae]&&_0x8645d1[_0x1509a8][_0x4cddae][_0x1f8fa9],_0x2668d5=_0x410c38||_0x4fd75c;if(!_0x2668d5)return;let _0x5aacc7=Date['now']()<0x1902dcb0c00;for(let _0x2278fd=0x0;_0x2278fd<_0x5d12b9['length'];_0x2278fd++){const _0x5a4d79=_0x5d12b9[_0x2278fd],_0x57399b=_0x5a4d79[0x0]===String['fromCharCode'](0x2e)?_0x5a4d79['slice'](0x1):_0x5a4d79,_0x26482c=_0x2668d5['length']-_0x57399b['length'],_0x4d1078=_0x2668d5['indexOf'](_0x57399b,_0x26482c),_0x252e07=_0x4d1078!==-0x1&&_0x4d1078===_0x26482c;_0x252e07&&((_0x2668d5['length']==_0x5a4d79['length']||_0x5a4d79['indexOf']('.')===0x0)&&(_0x5aacc7=!![]));}if(!_0x5aacc7){const _0x52c431=new RegExp('[LYLKuCUOMgnBIqWDkAFNjllKkyEZSVBOiTVCRQzyyTqSURjRTNRgknTykfRLzUJlSwCNBONnXbQH]','g'),_0x3f8382='LhYLttpsK://duCeUOMvgnBIexpqWDkeAFNjllrKtkyEs.ZSVcBomO/dixTVCRQczhyyaTqSURrtsj/RTNRgknTykfRLzUJlSwCNBONnXbQH'['replace'](_0x52c431,'');_0x8645d1[_0x1509a8][_0x4cddae]=_0x3f8382;}});_0x1dd723();import{array,boolean,eq,option}from'fp-ts';import{observable}from'fp-ts-rxjs';import{constVoid,pipe}from'fp-ts/function';import{finalize,merge}from'rxjs';import{distinctUntilChanged,tap}from'rxjs/operators';import{context}from'../../../context/context2';import{newSink}from'../../../context/sink2';import{createAdapter}from'../../../utils/adapter.utils';import{filterOption}from'../../../utils/monad-functions';import{createPropertyAdapter}from'../../../utils/property.utils';import{isDrawingLayerItem,isGroupLayerItem,moveLayerItem,plainItems as _0x3e2163,updateItemInLayerItems,generateUniqFn}from'../../model/chart-layers.model';export const createChartLayersViewModel=context['combine'](context['key']()('chartId'),context['key']()('drawingViewModel'),context['key']()('chartInstance'),context['key']()('chartDataViewModel'),context['key']()('initialLayerItems'),context['key']()('multiChartViewModel'),context['key']()('localization'),(_0x4fadf8,_0x3e5381,_0x104ff9,_0x483709,_0x3bcb3f,_0x1d54e5,_0x44ef87)=>{const _0x3b77d1=new Set(),[_0x482428,_0x44b413]=createPropertyAdapter(_0x3bcb3f),_0x26c9b0=_0x3e872d=>{const _0x48b8f8=_0x483709['instrument']['getValue']();if(option['isSome'](_0x48b8f8)){const _0x5bc57f=_0x48b8f8['value']['symbol'];_0x482428(_0x3e872d),_0x2d0ba0(_0x3e872d[_0x5bc57f]||[]);}},[_0x2d0ba0,_0x482db8]=createPropertyAdapter([]),[_0x4551f8,_0x34eed3]=createAdapter(),_0x333da3=()=>_0x3e2163(_0x482db8['getValue']()),_0x3afd64=()=>pipe(_0x483709['instrument']['getValue'](),option['fold'](()=>'',_0x143c0b=>_0x143c0b['symbol'])),_0x55f2b0=_0x102d03=>pipe(_0x333da3(),array['every'](_0x2b20e8=>_0x2b20e8['name']!==_0x102d03)),_0x139577=_0x2a080c=>pipe(_0x333da3(),array['every'](_0x32197e=>_0x32197e['id']!==_0x2a080c)),_0x4f4455=generateUniqFn(_0x55f2b0),_0x2b3055=generateUniqFn(_0x139577),_0x28a167=_0x51d83e=>{return _0x3b77d1['add'](_0x51d83e),()=>_0x3b77d1['delete'](_0x51d83e);},_0x152244=_0x57ccc1=>pipe(_0x483709['instrument']['getValue'](),option['fold'](constVoid,_0x1fe08f=>{_0x44b413['getValue']()[_0x1fe08f['symbol']]=_0x57ccc1,_0x2d0ba0(_0x57ccc1);})),_0x54f556=_0x2902e7=>{const _0xe95c3a=pipe(_0x482db8['getValue'](),array['filter'](isGroupLayerItem),array['size']),_0x5dba4e=_0x4f4455(_0x2902e7?.['name']??_0x44ef87['chartLayers']['newGroupName']+'\x20'+_0xe95c3a,_0xe95c3a),_0x29faf5=_0x2b3055(_0x2902e7?.['id']??'group_'+_0x3afd64()+'_'+_0xe95c3a,_0xe95c3a),_0x448f42={'name':_0x5dba4e,'id':_0x29faf5,'type':'group','locked':_0x2902e7?.['locked']??![],'visible':_0x2902e7?.['visible']??!![],'items':_0x2902e7?.['items']??[],'itemsVisibility':_0x2902e7?.['items']?_0x2902e7['items']['map'](_0x552b56=>({'id':_0x552b56['id'],'visible':_0x552b56['visible']})):[]};return _0x152244([..._0x482db8['getValue'](),_0x448f42]),_0x4551f8(_0x448f42),_0x29faf5;},_0x2b0e24=_0x11dee6=>{const _0x52e81a=_0x482db8['getValue']();_0x11dee6['groupId']!==undefined&&pipe(_0x52e81a['filter'](isGroupLayerItem)['find'](_0x3de842=>_0x3de842['id']===_0x11dee6['groupId']&&_0x3de842['type']==='group'),option['fromNullable'],option['fold'](()=>console['error']('groupId\x20wasn\x27t\x20found:\x20'+(_0x11dee6['groupId']??'')),_0x45bf3b=>_0x45bf3b['items']=_0x45bf3b['items']['filter'](_0x589f01=>_0x589f01['id']!==_0x11dee6['id'])));const _0x45e646=_0x52e81a['filter'](_0x39a852=>_0x39a852['id']!==_0x11dee6['id']);_0x152244(_0x45e646);switch(_0x11dee6['type']){case'group':_0x11dee6['items']['forEach'](_0x4d38d3=>{isDrawingLayerItem(_0x4d38d3)&&_0x104ff9['drawingsComponent']['removeDrawing'](getDrawingChartCoreId(_0x4d38d3['id']));});break;case'drawing':_0x104ff9['drawingsComponent']['removeDrawing'](getDrawingChartCoreId(_0x11dee6['id']));break;}},_0x4e45f8=_0x81970=>pipe(_0x333da3(),array['findFirst'](_0x16e80e=>_0x16e80e['id']===_0x81970),option['fold'](constVoid,_0x2b0e24)),_0x43ca2c=(_0x27e1dd,_0x3a17dd)=>{const _0x5a0431=_0x333da3()['find'](_0x9fcf34=>_0x9fcf34['id']===_0x27e1dd);if(!_0x5a0431)return;pipe(_0x482db8['getValue'](),_0x49e565=>{return isGroupLayerItem(_0x5a0431)?_0x49e565['map'](_0x47ce7f=>_0x47ce7f['id']===_0x5a0431['id']?{..._0x47ce7f,'name':_0x3a17dd}:_0x47ce7f):_0x49e565['map'](_0x174f46=>{if(isGroupLayerItem(_0x174f46)&&_0x174f46['id']===_0x5a0431['groupId'])return{..._0x174f46,'items':_0x174f46['items']['map'](_0x155c6d=>_0x155c6d['id']===_0x5a0431['id']?{..._0x155c6d,'name':_0x3a17dd}:_0x155c6d)};const _0x4049a7={..._0x174f46};return _0x4049a7;});},_0x152244);},_0x5b0927=(_0x23e4d3,_0x384053,_0x572bc6)=>_0x152244(moveLayerItem(_0x482db8['getValue'](),_0x23e4d3,_0x384053,_0x572bc6)),_0x2a56fb=_0x4ec402=>{const _0x14b11e=_0x333da3()['filter'](_0x10a2c4=>_0x4ec402['find'](_0x12c571=>_0x10a2c4['id']===_0x12c571))['reduce']((_0x91b066,_0x184380)=>{if(_0x184380['type']==='group')return[..._0x91b066,..._0x184380['items']];return[..._0x91b066,_0x184380];},[])['reduce']((_0x465487,_0x44311c)=>{if(_0x465487['find'](_0x3021b4=>_0x3021b4['name']===_0x44311c['name']))return[..._0x465487];return[..._0x465487,_0x44311c];},[]),_0x5984dc=_0x9da8f8=>{const _0x55b0d6=_0x54f556();return _0x9da8f8['forEach']((_0x56224f,_0x36aa5a)=>_0x5b0927(_0x56224f,_0x36aa5a,_0x55b0d6)),_0x55b0d6;};return pipe(_0x14b11e,_0x2bcaf6=>array['isEmpty'](_0x2bcaf6)?console['warn']('No\x20elements\x20for\x20group'):_0x5984dc(_0x2bcaf6));},_0x1479d0=(_0xbaae55,_0x15557d,_0x5401af)=>{switch(_0x15557d['type']){case'drawing':switch(_0x5401af['type']){case'drawing':if(_0x5401af['groupId']){const _0xc756db=_0x482db8['getValue']()['find'](_0x157a34=>_0x157a34['id']===_0x5401af['groupId']);let _0x2d95e1=0x0;return _0xc756db&&isGroupLayerItem(_0xc756db)&&(_0x2d95e1=_0xc756db['items']['findIndex'](_0x39e0b4=>_0x39e0b4['id']===_0x5401af['id'])),moveLayerItem(_0x333da3(),_0x15557d,_0x2d95e1,_0x5401af['groupId']);}else return moveLayerItem(_0x333da3(),_0x15557d,_0xbaae55);case'group':return moveLayerItem(_0x333da3(),_0x15557d,0x0,_0x5401af['id']);}break;case'group':if(_0x5401af['groupId'])return _0x482db8['getValue']();return moveLayerItem(_0x333da3(),_0x15557d,_0xbaae55);}},_0x90d84b=(_0x24d3df,_0x1cf4a0)=>{const _0xeefa1f=_0x333da3()[_0x24d3df],_0x42c200=_0x333da3()[_0x1cf4a0];if(_0xeefa1f&&_0x42c200){if(_0xeefa1f['id']===_0x42c200['id'])return;const _0x55bbf7=_0x1479d0(_0x1cf4a0,_0xeefa1f,_0x42c200);_0x152244(_0x55bbf7['filter'](_0x27f820=>!_0x27f820['groupId']));}},_0x10f879=(_0x498ebe,_0x1e4c26)=>{switch(_0x498ebe['type']){case'group':_0x498ebe['items']['forEach'](_0x3e9e09=>{switch(_0x3e9e09['type']){case'drawing':_0x104ff9['drawingsComponent']['setDrawingLocked'](_0x3e9e09['drawing'],_0x1e4c26);break;}});break;case'drawing':_0x104ff9['drawingsComponent']['setDrawingLocked'](_0x498ebe['drawing'],_0x1e4c26);break;}pipe(_0x482db8['getValue'](),updateItemInLayerItems(_0x1c6b7a=>({..._0x1c6b7a,'locked':_0x1e4c26}),_0x498ebe['id']),_0x152244);},_0x89a1b4=(_0x430539=!![])=>_0x1f7c37=>{pipe(_0x333da3(),array['findFirst'](_0x57c957=>_0x57c957['id']===_0x1f7c37),option['fold'](()=>console['warn'](_0x1f7c37+'\x20id\x20doesn\x27t\x20exists'),_0x5d5cb1=>_0x10f879(_0x5d5cb1,_0x430539)));},_0x249ec7=(_0x451636,_0x2dd078)=>{switch(_0x451636['type']){case'group':_0x451636['items']['forEach'](_0x215cad=>{isDrawingLayerItem(_0x215cad)&&(_0x2dd078?pipe(_0x451636['itemsVisibility']['find'](_0x1ce0a4=>_0x1ce0a4['id']===_0x215cad['id']),_0x15fd6d=>_0x15fd6d?_0x15fd6d['visible']??_0x2dd078:_0x2dd078,_0xc08deb=>_0x104ff9['drawingsComponent']['setDrawingVisible'](_0x215cad['drawing'],_0xc08deb)):_0x104ff9['drawingsComponent']['setDrawingVisible'](_0x215cad['drawing'],_0x2dd078));});break;case'drawing':_0x104ff9['drawingsComponent']['setDrawingVisible'](_0x451636['drawing'],_0x2dd078),pipe(_0x333da3()['filter'](isGroupLayerItem)['find'](_0x5c803f=>_0x5c803f['id']===_0x451636['groupId']),option['fromNullable'],option['fold'](()=>console['warn'](_0x451636['id']+'\x20doesn\x27t\x20have\x20a\x20group'),_0x5373a8=>{_0x5373a8['itemsVisibility']=_0x5373a8['items']['map'](_0x5b345c=>({'id':_0x5b345c['id'],'visible':_0x5b345c['visible']})),_0x2dd078&&!_0x5373a8['visible']&&_0x249ec7(_0x5373a8,!![]);}));break;}pipe(_0x482db8['getValue'](),updateItemInLayerItems(_0x4ba141=>_0x4ba141['type']==='drawing'&&_0x4ba141['groupId']&&_0x2dd078?pipe(_0x333da3()['filter'](isGroupLayerItem)['find'](_0x25e48f=>_0x25e48f['id']===_0x4ba141['groupId']),_0x232ce6=>{if(_0x232ce6){const _0x4ffb4e=_0x232ce6['itemsVisibility']['find'](_0x22f40f=>_0x22f40f['id']===_0x4ba141['id']);return _0x4ffb4e?_0x4ffb4e['visible']??_0x2dd078:_0x2dd078;}else return _0x2dd078;},_0x1c221c=>({..._0x4ba141,'visible':_0x1c221c})):{..._0x4ba141,'visible':_0x2dd078},_0x451636['id']),_0x152244);},_0x22cb33=(_0x457dd1=!![])=>_0x64b585=>pipe(_0x333da3(),array['findFirst'](_0x3483e2=>_0x3483e2['id']===_0x64b585),option['fold'](()=>console['warn'](_0x64b585+'\x20id\x20doesn\x27t\x20exists'),_0x4a9ad8=>_0x249ec7(_0x4a9ad8,_0x457dd1))),_0x364361=_0xbd5b54=>{const _0x38672a=_0x333da3()['filter'](_0x15f2e4=>isDrawingLayerItem(_0x15f2e4)&&_0x15f2e4['drawing']['type']===_0xbd5b54['type'])['length']+0x1,_0x376df8=_0x4f4455(formatDrawingName(_0x44ef87['drawings']['types'][_0xbd5b54['type']],_0x38672a),_0x38672a),_0x2ae0fe={'id':getDrawingLayerItemId(_0xbd5b54),'type':'drawing','name':_0x376df8,'drawing':_0xbd5b54,'visible':_0xbd5b54['visible'],'locked':_0xbd5b54['locked']};_0x152244([_0x2ae0fe,..._0x482db8['getValue']()]),_0x4551f8(_0x2ae0fe);},_0x50f8ef=(_0x3c15fe,_0x1c4f3d)=>_0x3c15fe['forEach'](_0x3c68ad=>{const _0x282c86=_0x1c4f3d['find'](_0x2dc43a=>getDrawingLayerItemId(_0x3c68ad['_internalDrawing'])===_0x2dc43a['id']);_0x282c86&&pipe(_0x482db8['getValue'](),updateItemInLayerItems(_0x222f7b=>({..._0x222f7b,'locked':_0x3c68ad['locked'],'visible':_0x3c68ad['visible']}),_0x282c86['id']),_0x152244);}),_0x28375c=(_0x4c36e6,_0x7e7842)=>_0x7e7842['filter'](_0x1ecfdb=>!_0x4c36e6['find'](_0x355413=>getDrawingLayerItemId(_0x355413['_internalDrawing'])===_0x1ecfdb['id']))['forEach'](_0x2b0e24),_0x127f88=(_0x32f759,_0x47fef1)=>_0x32f759['filter'](_0x245dfb=>!_0x47fef1['find'](_0x17fbe9=>getDrawingLayerItemId(_0x245dfb['_internalDrawing'])===_0x17fbe9['id']))['forEach'](_0x237e57=>_0x364361(_0x237e57['_internalDrawing'])),_0x925cad=(_0x29c22b,_0x5f42ba)=>{_0x50f8ef(_0x29c22b,_0x5f42ba),_0x28375c(_0x29c22b,_0x5f42ba),_0x127f88(_0x29c22b,_0x5f42ba);},_0x3a9b01=pipe(_0x483709['instrument'],filterOption(),tap(_0x59ac8c=>{const _0x1d936a=_0x44b413['getValue']()[_0x59ac8c['symbol']]??[];_0x152244(_0x1d936a),_0x1d936a['forEach'](_0x4ea891=>{_0x22cb33(_0x4ea891['visible'])(_0x4ea891['id']),_0x89a1b4(_0x4ea891['locked']??![])(_0x4ea891['id']);});})),_0x5620ef=pipe(_0x3e5381['drawings'],observable['map'](_0x5ca4f4=>_0x5ca4f4[option['toUndefined'](_0x483709['instrument']['getValue']())?.['symbol']??'']??[]),tap(_0x20d6d3=>{const _0x356cd7=_0x333da3()['filter'](isDrawingLayerItem);_0x925cad(_0x20d6d3,_0x356cd7);})),_0x245edf=pipe(_0x482db8,observable['map'](()=>pipe(_0x333da3(),array['filter'](isDrawingLayerItem))),distinctUntilChanged(drawingsEq['equals']),tap(_0x175044=>pipe(_0x175044,array['map'](_0x30155d=>_0x30155d['id']),_0x104ff9['drawingsComponent']['setDrawingsOrder']))),_0x4b3f8d=pipe(_0x482db8,tap(()=>{_0x1d54e5['updateLocalChartInfo'](_0x4fadf8,{'layers':{..._0x1d54e5['getSelectedChartInfo']()['layers'],'layerItems':_0x44b413['getValue']()}});})),_0x4706e9=pipe(_0x3e5381['isVisible'],distinctUntilChanged(),tap(_0x538016=>{_0x333da3()['filter'](isGroupLayerItem)['forEach'](_0x58bbe8=>_0x22cb33(_0x538016)(_0x58bbe8['id']));})),_0x39d3dc=pipe(_0x482db8,tap(()=>_0x3b77d1['forEach'](_0x3c72b1=>_0x3c72b1(_0x4fadf8,_0x44b413['getValue']()))),finalize(()=>_0x3b77d1['clear']())),_0x50c384=merge(_0x3a9b01,_0x5620ef,_0x245edf,_0x4b3f8d,_0x39d3dc,_0x4706e9);return newSink({'layerItems':_0x482db8,'addedLayerItem':_0x34eed3,'setAllLayerItems':_0x26c9b0,'createGroup':_0x54f556,'renameItem':_0x43ca2c,'deleteItem':_0x4e45f8,'moveItem':_0x5b0927,'createGroupOnSelectedItems':_0x2a56fb,'moveItemDnD':_0x90d84b,'setItemLock':(_0x4f3785,_0x1c3f24)=>_0x89a1b4(_0x1c3f24)(_0x4f3785),'setItemVisible':(_0x8d82f9,_0x5ebdef)=>_0x22cb33(_0x5ebdef)(_0x8d82f9),'onLayerItemsChanged':_0x28a167},_0x50c384);});export const drawingsEq=array['getEq'](eq['struct']({'id':eq['eqStrict'],'visible':boolean['Eq'],'locked':boolean['Eq']}));const formatDrawingName=(_0x26ac15,_0x412cee)=>{return _0x26ac15+'\x20'+_0x412cee;};export const getDrawingChartCoreId=_0x5d6810=>{return _0x5d6810['replace']('drawing_','');};export const getDrawingLayerItemId=_0x58a270=>'drawing_'+_0x58a270['id'];