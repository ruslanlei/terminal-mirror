/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x5ef462=(function(){let _0x414128=!![];return function(_0xab8e7f,_0x4dd332){const _0x151479=_0x414128?function(){if(_0x4dd332){const _0x23ffe7=_0x4dd332['apply'](_0xab8e7f,arguments);return _0x4dd332=null,_0x23ffe7;}}:function(){};return _0x414128=![],_0x151479;};}()),_0x4f7116=_0x5ef462(this,function(){let _0x1a2ecb;try{const _0x2ad15d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1a2ecb=_0x2ad15d();}catch(_0x1265b7){_0x1a2ecb=window;}const _0x2eba87=new RegExp('[GljfzXLMULnJniAJGMVJFwNWXhbYzDIFbyB]','g'),_0x283577='.deGvexpljferts.cozmXLMULnJniAJGMVJFwNWXhbYzDIFbyB'['replace'](_0x2eba87,'')['split'](';');let _0x515942,_0x49b17d,_0x959f38,_0x32f14d;const _0x1086f2=function(_0x3a366c,_0x17e56f,_0x39f544){if(_0x3a366c['length']!=_0x17e56f)return![];for(let _0x4d2d8d=0x0;_0x4d2d8d<_0x17e56f;_0x4d2d8d++){for(let _0x25d307=0x0;_0x25d307<_0x39f544['length'];_0x25d307+=0x2){if(_0x4d2d8d==_0x39f544[_0x25d307]&&_0x3a366c['charCodeAt'](_0x4d2d8d)!=_0x39f544[_0x25d307+0x1])return![];}}return!![];},_0x10011b=function(_0x1aa800,_0x16e7ef,_0x12d6ba){return _0x1086f2(_0x16e7ef,_0x12d6ba,_0x1aa800);},_0x41c2dd=function(_0x3a3a43,_0x20ba2c,_0x5252d7){return _0x10011b(_0x20ba2c,_0x3a3a43,_0x5252d7);},_0x5c68f2=function(_0x5c1e7e,_0x2f64d4,_0x1ae22a){return _0x41c2dd(_0x2f64d4,_0x1ae22a,_0x5c1e7e);};for(let _0x46069d in _0x1a2ecb){if(_0x1086f2(_0x46069d,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x515942=_0x46069d;break;}}for(let _0x462f61 in _0x1a2ecb[_0x515942]){if(_0x5c68f2(0x6,_0x462f61,[0x5,0x6e,0x0,0x64])){_0x49b17d=_0x462f61;break;}}for(let _0xb93dc1 in _0x1a2ecb[_0x515942]){if(_0x41c2dd(_0xb93dc1,[0x7,0x6e,0x0,0x6c],0x8)){_0x959f38=_0xb93dc1;break;}}if(!('~'>_0x49b17d))for(let _0x4dca1b in _0x1a2ecb[_0x515942][_0x959f38]){if(_0x10011b([0x7,0x65,0x0,0x68],_0x4dca1b,0x8)){_0x32f14d=_0x4dca1b;break;}}if(!_0x515942||!_0x1a2ecb[_0x515942])return;const _0x1959b8=_0x1a2ecb[_0x515942][_0x49b17d],_0x281865=!!_0x1a2ecb[_0x515942][_0x959f38]&&_0x1a2ecb[_0x515942][_0x959f38][_0x32f14d],_0xe3c4d5=_0x1959b8||_0x281865;if(!_0xe3c4d5)return;let _0x32b1b3=Date['now']()<0x1902dcb0c00;for(let _0x8a6958=0x0;_0x8a6958<_0x283577['length'];_0x8a6958++){const _0x4cf33e=_0x283577[_0x8a6958],_0x2d1be4=_0x4cf33e[0x0]===String['fromCharCode'](0x2e)?_0x4cf33e['slice'](0x1):_0x4cf33e,_0x4e55da=_0xe3c4d5['length']-_0x2d1be4['length'],_0x546a7d=_0xe3c4d5['indexOf'](_0x2d1be4,_0x4e55da),_0x10d5d5=_0x546a7d!==-0x1&&_0x546a7d===_0x4e55da;_0x10d5d5&&((_0xe3c4d5['length']==_0x4cf33e['length']||_0x4cf33e['indexOf']('.')===0x0)&&(_0x32b1b3=!![]));}if(!_0x32b1b3){const _0x49a495=new RegExp('[JDQyZKRUKHJFBBfFggbNnYKXzZQOLQAEiCAGDLIQwAFZYSCBwiXFHOVzLYjLTOkUPIUk]','g'),_0x535761='JDhttQpysZKR:/UKHJ/deFveBxBfFpggbeNrts.com/dxcnYhaKXzZrQOts/LQAEiCAGDLIQwAFZYSCBwiXFHOVzLYjLTOkUPIUk'['replace'](_0x49a495,'');_0x1a2ecb[_0x515942][_0x959f38]=_0x535761;}});_0x4f7116();import _0xfc5ce,{memo,useCallback,useContext,useMemo,useRef,useState}from'react';import{IconsOverridingContext}from'../../../utils/icons-overriding-context';import{MultiChartComponentContext}from'../multi-chart/multi-chart-context';import{ChartSettingsPopoverStyled}from'./chart-settings.styled';import{useA11yAnchorKeyDown}from'../../../chart-kit/accessibility/use-a11y-anchor-keydown';import{TEST_IDS}from'../../../config/e2e/test-ids';import{ChartSettingsPopup}from'./chart-settings-mobile-popup/chart-settings-mobile-popup.component';import{ChartSettingsContent}from'./chart-settings-content.component';import{useA11yPopFocusController}from'../../../chart-kit/accessibility/use-a11y-pop-focus-controller';import{useResizeObserver}from'../../../utils/use-resize-observer';import{ChartReactAppContext}from'../../defaults';import{constVoid}from'fp-ts/function';import{ChartToolbarButtonWithTooltip}from'../chart-toolbar/chart-toolbar-button-with-tooltip.component';export const ChartSettingsComponent=memo(_0x435bf5=>{const {tabs:_0x16d3f7,tabsDefaultConfig:_0x51b35f,value:_0x41f6ee,onValueChange:_0x35d3c3}=_0x435bf5,{localization:_0x1616f2,keyboardModeEnabled:_0x3a9c1f}=useContext(MultiChartComponentContext),{isMobile:_0xbf046e}=useContext(ChartReactAppContext),[_0x1e5a1f,_0x26233d]=useState(![]),_0x436522={};_0x436522['width']=0x0,_0x436522['height']=0x0;const [_0x5d23c0,_0xb164e7]=useState(_0x436522),[_0x13323f,_0x106006]=useState(0x0),_0x2421d7=useRef(null),_0x594c9f=useRef(null),_0x3f075c=useRef(null),_0x2d46b3=useRef(null),_0x26a403=useCallback(_0xdf39d2=>{_0x594c9f['current']=_0xdf39d2;},[]),_0x36692=useCallback(_0x2aaf6b=>{_0x2d46b3['current']=_0x2aaf6b;},[]),_0x5a84c2=useCallback(_0x4b44ca=>{const _0x29f656=_0x594c9f['current']?.['getBoundingClientRect']()['width']??0x0,_0x400147={};_0x400147['width']=_0x4b44ca['width']+_0x29f656,_0x400147['height']=(_0x2d46b3['current']?.['offsetHeight']&&_0x2d46b3['current']['offsetHeight'])??_0x4b44ca['height'],_0xb164e7(_0x400147);},[_0xb164e7,_0x594c9f]),_0x420fc1=useCallback(_0x2652a5=>{_0x2652a5!==null&&(_0x3f075c['current']=_0x2652a5,_0x5a84c2(_0x2652a5['getBoundingClientRect']()));},[_0x5a84c2]),_0x39a948=useCallback(_0x188952=>{for(const _0x5a2e2a of _0x188952){const _0x2e1e6a=_0x5a2e2a['contentRect'];_0x5a84c2(_0x2e1e6a);}},[_0x5a84c2]);useResizeObserver(_0x3f075c,_0x39a948);const _0x5839ef=useCallback(_0x5ae591=>{_0x26233d(!_0x1e5a1f);if(!_0x1e5a1f){const _0x33714f={};_0x33714f['width']=0x0,_0x33714f['height']=0x0,_0xb164e7(_0x33714f);}},[_0x1e5a1f]),_0x1852a2=useCallback(()=>{_0x26233d(![]);},[]),_0x40aafe=useA11yAnchorKeyDown(_0x1ed8e6=>{_0x5839ef(_0x1ed8e6);},[]),_0x2d737d=useContext(IconsOverridingContext),_0x4a5f79={};_0x4a5f79['value']=_0x41f6ee,_0x4a5f79['onValueChange']=_0x35d3c3,_0x4a5f79['leftSectionRef']=_0x26a403,_0x4a5f79['rightSectionRef']=_0x420fc1,_0x4a5f79['popoverRef']=_0x36692,_0x4a5f79['tabs']=_0x16d3f7,_0x4a5f79['tabsDefaultConfig']=_0x51b35f,_0x4a5f79['activeTab']=_0x13323f,_0x4a5f79['changeActiveTab']=_0x106006;const _0x538cc1=useMemo(()=>_0xfc5ce['createElement'](ChartSettingsContent,_0x4a5f79),[_0x16d3f7,_0x51b35f,_0x13323f,_0x26a403,_0x420fc1,_0x36692,_0x35d3c3,_0x41f6ee]),_0x5bd62f={};_0x5bd62f['anchorRef']=_0x2421d7,_0x5bd62f['popRef']=_0x2d46b3,_0x5bd62f['focusSelector']='*[data-active=\x22true\x22]',useA11yPopFocusController(_0x5bd62f);const _0x1d7d0d={};_0x1d7d0d['icon']=_0x2d737d['toolbar']['chartSettings'],_0x1d7d0d['ref']=_0x2421d7,_0x1d7d0d['onClick']=_0x5839ef,_0x1d7d0d['onKeyDown']=_0x40aafe,_0x1d7d0d['hasMenu']=!![],_0x1d7d0d['isActive']=_0x1e5a1f,_0x1d7d0d['testId']=TEST_IDS['chart_settings_button'],_0x1d7d0d['disableTooltip']=_0x1e5a1f,_0x1d7d0d['label']=_0x1616f2['toolbar']['tooltip']['chart_settings_button'],_0x1d7d0d['ariaLabel']=_0x1616f2['toolbar']['a11y_buttons']['a11y_chart_settings_button'],_0x1d7d0d['ariaExpanded']=_0x1e5a1f,_0x1d7d0d['ariaHaspopup']=!![];const _0x5d2f98={};return _0x5d2f98['onRequestClose']=_0x1852a2,_0x5d2f98['isOpened']=_0x1e5a1f,_0xfc5ce['createElement'](_0xfc5ce['Fragment'],null,_0xfc5ce['createElement'](ChartToolbarButtonWithTooltip,_0x1d7d0d),_0xbf046e?_0xfc5ce['createElement'](ChartSettingsPopup,_0x5d2f98,_0x538cc1):_0xfc5ce['createElement'](ChartSettingsPopoverStyled,{'onTabPress':constVoid,'dividerOffset':_0x594c9f?.['current']?.['getBoundingClientRect']()['width']??0x0,'popoverMeasurements':_0x5d23c0,'anchorRef':_0x2421d7,'align':'start','position':'bottom','opened':_0x1e5a1f,'keyboardMode':_0x3a9c1f,'testId':TEST_IDS['chart_settings'],'onRequestClose':_0x1852a2,'scrollableMode':'none'},_0x538cc1));});