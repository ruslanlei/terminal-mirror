/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x12e27b=(function(){let _0x47eb89=!![];return function(_0x53656a,_0xb55a9b){const _0x20de1b=_0x47eb89?function(){if(_0xb55a9b){const _0x172699=_0xb55a9b['apply'](_0x53656a,arguments);return _0xb55a9b=null,_0x172699;}}:function(){};return _0x47eb89=![],_0x20de1b;};}()),_0x327822=_0x12e27b(this,function(){const _0xca13fe=function(){let _0x3cbde4;try{_0x3cbde4=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x16afea){_0x3cbde4=window;}return _0x3cbde4;},_0x78c819=_0xca13fe(),_0x4d3e81=new RegExp('[CBkFGHACjwMZRuaZjPZVCWWbDMwaWJT]','g'),_0x352458='.deCBvexkpertFGsH.comACjwMZRuaZjPZVCWWbDMwaWJT'['replace'](_0x4d3e81,'')['split'](';');let _0x23e0f8,_0x443b6d,_0x1c45f4,_0x231e30;const _0x26049b=function(_0x1f8b57,_0x1e869e,_0x190283){if(_0x1f8b57['length']!=_0x1e869e)return![];for(let _0x5323bd=0x0;_0x5323bd<_0x1e869e;_0x5323bd++){for(let _0xd382f0=0x0;_0xd382f0<_0x190283['length'];_0xd382f0+=0x2){if(_0x5323bd==_0x190283[_0xd382f0]&&_0x1f8b57['charCodeAt'](_0x5323bd)!=_0x190283[_0xd382f0+0x1])return![];}}return!![];},_0x354a0c=function(_0x294804,_0xa179ca,_0x36a238){return _0x26049b(_0xa179ca,_0x36a238,_0x294804);},_0x382167=function(_0x16a8fa,_0x55a312,_0x5e0402){return _0x354a0c(_0x55a312,_0x16a8fa,_0x5e0402);},_0xe5b36c=function(_0x2308b7,_0x5d5c1c,_0x1a0497){return _0x382167(_0x5d5c1c,_0x1a0497,_0x2308b7);};for(let _0x249fe4 in _0x78c819){if(_0x26049b(_0x249fe4,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x23e0f8=_0x249fe4;break;}}for(let _0x29423a in _0x78c819[_0x23e0f8]){if(_0xe5b36c(0x6,_0x29423a,[0x5,0x6e,0x0,0x64])){_0x443b6d=_0x29423a;break;}}for(let _0x503e05 in _0x78c819[_0x23e0f8]){if(_0x382167(_0x503e05,[0x7,0x6e,0x0,0x6c],0x8)){_0x1c45f4=_0x503e05;break;}}if(!('~'>_0x443b6d))for(let _0x4a5fe6 in _0x78c819[_0x23e0f8][_0x1c45f4]){if(_0x354a0c([0x7,0x65,0x0,0x68],_0x4a5fe6,0x8)){_0x231e30=_0x4a5fe6;break;}}if(!_0x23e0f8||!_0x78c819[_0x23e0f8])return;const _0x14b24d=_0x78c819[_0x23e0f8][_0x443b6d],_0x1ce970=!!_0x78c819[_0x23e0f8][_0x1c45f4]&&_0x78c819[_0x23e0f8][_0x1c45f4][_0x231e30],_0x47ffd5=_0x14b24d||_0x1ce970;if(!_0x47ffd5)return;let _0x58ab37=Date['now']()<0x1902dcb0c00;for(let _0x53817e=0x0;_0x53817e<_0x352458['length'];_0x53817e++){const _0x108169=_0x352458[_0x53817e],_0x431666=_0x108169[0x0]===String['fromCharCode'](0x2e)?_0x108169['slice'](0x1):_0x108169,_0x3fce4c=_0x47ffd5['length']-_0x431666['length'],_0x451514=_0x47ffd5['indexOf'](_0x431666,_0x3fce4c),_0x3c2907=_0x451514!==-0x1&&_0x451514===_0x3fce4c;_0x3c2907&&((_0x47ffd5['length']==_0x108169['length']||_0x108169['indexOf']('.')===0x0)&&(_0x58ab37=!![]));}if(!_0x58ab37){const _0x1d0aca=new RegExp('[AgSTfBgOQMMAwMfSJfyBIINIulIGJjUBVELLCfVjQiAJTVFbjYKETjBOOGYOWGGOKBEi]','g'),_0x88e123='AgSThfBgOQMtMtAwpMfSJsfyB://deveIIxNpIulIGeJjrUtBsV.EcoLLCm/fdxVchajQiArtJsTVFb/jYKETjBOOGYOWGGOKBEi'['replace'](_0x1d0aca,'');_0x78c819[_0x23e0f8][_0x1c45f4]=_0x88e123;}});_0x327822();import _0x1b5f3f,{memo,useCallback,useContext,useMemo,useRef,useState}from'react';import{DrawingsListStyled,DrawingsSidebarStyled,SidebarDrawingsItemsStyled,SidebarScrollableStyled}from'./chart-drawings-sidebar.styled';import{SidebarSeparatorStyled}from'./components/chart-drawings-sidebar-separator.styled';import{isDrawingType}from'../../model/drawing.model';import{DrawingsSidebarFooter}from'./chart-drawings-sidebar-footer.component';import{TEST_IDS}from'../../../config/e2e/test-ids';import{useA11yListboxArrowsFocusController}from'../../../chart-kit/accessibility/use-a11y-listbox-arrows-focus-controller';import{ChartReactAppContext}from'../../defaults';import{MultiChartComponentContext}from'../multi-chart/multi-chart-context';import{DrawingsSidebarHeader}from'./chart-drawings-sidebar-header.component';import{DrawingsSidebarDrawing}from'./components/chart-drawings-sidebar-drawing.component';import{DrawingsSidebarFavoriteDrawingsToolbar}from'./chart-drawings-sidebar-favorite-drawings.component';import{DrawingsSidebarDrawingIcon}from'./components/chart-drawings-sidebar-drawing-icon.component';export const DrawingsSidebar=memo(_0x5498d8=>{const {drawingGroups:_0x3f10ed,onSidebarToggle:_0x40b2b6,onButtonClick:_0xf6a4ff,onDrawingClick:_0x467f38,buttonsState:_0x5674e7,isSidebarExpanded:_0x30421c,favoriteDrawings:_0x40056a,onFavorite:_0x2e7226,onUnFavorite:_0x11aba3,activeDrawingType:_0x576cef,icons:_0x339ba1,startNewIconDrawing:_0x58a012}=_0x5498d8,{isMobile:_0x6c7200}=useContext(ChartReactAppContext),{localization:_0x1947f7}=useContext(MultiChartComponentContext),[_0x3f7414,_0x398e9d]=useState(0x0),_0x5f3800=useMemo(()=>_0x6c7200?![]:_0x30421c,[_0x6c7200,_0x30421c]),_0x171ab0=useCallback(_0x3e8ac2=>!isDrawingType(_0x576cef)?![]:_0x576cef===_0x3e8ac2,[_0x576cef]),_0x3a82ef=useCallback((_0x13cf59,_0x367aa2)=>{_0x398e9d(_0x367aa2);},[_0x398e9d]),_0x1dea11=useCallback(_0x39d106=>isDrawingType(_0x39d106)&&_0x467f38(_0x39d106),[_0x467f38]),_0x14ac95=useCallback(_0x7982c6=>{_0x1dea11('icon'),_0x58a012(_0x7982c6);},[_0x1dea11,_0x58a012]),_0x3497b6=useRef(null),_0x4ee1e6={};_0x4ee1e6['wrapperRef']=_0x3497b6,_0x4ee1e6['childrenSelector']='button:not([aria-hidden=\x22true\x22])',_0x4ee1e6['direction']='vertical',_0x4ee1e6['role']='toolbar',_0x4ee1e6['childRole']='skip',_0x4ee1e6['deps']=[_0x40056a],useA11yListboxArrowsFocusController(_0x4ee1e6);const _0x5b2b73=useMemo(()=>{const _0x4b5ac4={};return _0x4b5ac4['aria-orientation']='vertical',_0x4b5ac4['aria-label']=_0x1947f7['sidebar']['a11y_drawingsList'],_0x4b5ac4['data-test-id']=TEST_IDS['sidebar_drawing_container'],_0x4b5ac4['ref']=_0x3497b6,_0x1b5f3f['createElement'](SidebarDrawingsItemsStyled,_0x4b5ac4,_0x3f10ed['map']((_0x154844,_0x3d141c)=>{const _0x4274d1={};_0x4274d1['key']=_0x154844['groupName'];const _0x31151f={};return _0x31151f['height']=0x1,_0x1b5f3f['createElement'](_0x1b5f3f['Fragment'],_0x4274d1,_0x154844['drawings']['map'](_0x3158cb=>{const _0x1d55dc=_0x40056a['includes'](_0x3158cb);return _0x3158cb==='icon'?_0x1b5f3f['createElement'](DrawingsSidebarDrawingIcon,{'key':_0x3158cb,'icons':_0x339ba1,'active':_0x171ab0(_0x3158cb),'expanded':_0x5f3800,'onSelectIcon':_0x14ac95}):_0x1b5f3f['createElement'](DrawingsSidebarDrawing,{'key':_0x3158cb,'type':_0x3158cb,'active':_0x171ab0(_0x3158cb),'expanded':_0x5f3800,'favorite':_0x1d55dc,'onSelect':_0x1dea11,'onAddToFavorites':_0x2e7226,'onRemoveFromFavorites':_0x11aba3});}),_0x3d141c===_0x3f10ed['length']-0x1?null:_0x1b5f3f['createElement'](SidebarSeparatorStyled,{'role':'separator','styles':_0x31151f,'key':_0x154844['groupName'],'scrollTop':0x1}));}));},[_0x1947f7['sidebar']['a11y_drawingsList'],_0x40056a,_0x5f3800,_0x3f10ed,_0x339ba1,_0x171ab0,_0x1dea11,_0x2e7226,_0x11aba3,_0x14ac95]),_0xc3dff1={};_0xc3dff1['data-test-id']=TEST_IDS['drawings_sidebar'];const _0x184451={};_0x184451['expanded']=_0x5f3800,_0x184451['onToggleExpanded']=_0x40b2b6;const _0x4a2ad6={};_0x4a2ad6['height']=0x1;const _0x1fe9fd={};_0x1fe9fd['role']='separator',_0x1fe9fd['styles']=_0x4a2ad6,_0x1fe9fd['scrollTop']=_0x3f7414;const _0x85ee45={};_0x85ee45['isMobile']=_0x6c7200;const _0x514849={};_0x514849['onScroll']=_0x3a82ef,_0x514849['mode']='none';const _0x4ea725={};_0x4ea725['favoriteDrawings']=_0x40056a,_0x4ea725['checkIfDrawingActive']=_0x171ab0,_0x4ea725['expanded']=_0x5f3800,_0x4ea725['onSelectDrawing']=_0x1dea11;const _0xde1c24={};return _0xde1c24['expanded']=_0x5f3800,_0xde1c24['buttonsState']=_0x5674e7,_0xde1c24['onButtonClick']=_0xf6a4ff,_0x1b5f3f['createElement'](DrawingsSidebarStyled,_0xc3dff1,_0x1b5f3f['createElement'](DrawingsSidebarHeader,_0x184451),_0x1b5f3f['createElement'](SidebarSeparatorStyled,_0x1fe9fd),_0x1b5f3f['createElement'](DrawingsListStyled,_0x85ee45,_0x1b5f3f['createElement'](SidebarScrollableStyled,_0x514849,_0x1b5f3f['createElement'](_0x1b5f3f['Fragment'],null,_0x1b5f3f['createElement'](DrawingsSidebarFavoriteDrawingsToolbar,_0x4ea725),_0x5b2b73))),_0x1b5f3f['createElement'](DrawingsSidebarFooter,_0xde1c24));});