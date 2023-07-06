/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x11c8e6=(function(){let _0x36dd5c=!![];return function(_0x56477b,_0x4d8ab4){const _0x4d99b9=_0x36dd5c?function(){if(_0x4d8ab4){const _0x5ca75c=_0x4d8ab4['apply'](_0x56477b,arguments);return _0x4d8ab4=null,_0x5ca75c;}}:function(){};return _0x36dd5c=![],_0x4d99b9;};}()),_0xd4602a=_0x11c8e6(this,function(){const _0x3b7778=function(){let _0xa0c88f;try{_0xa0c88f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x574f5d){_0xa0c88f=window;}return _0xa0c88f;},_0x1fd0b7=_0x3b7778(),_0x5f1ed5=new RegExp('[lXQBlHawgWBQlwuYATaGHTUGwISAufzzjbFATR]','g'),_0x363448='l.XdevQBlexHpertawgsW.BQcolmwuYATaGHTUGwISAufzzjbFATR'['replace'](_0x5f1ed5,'')['split'](';');let _0x519560,_0x2888b5,_0x48e424,_0x22905c;const _0x2343c8=function(_0x1f6059,_0x1702c3,_0x4f7a03){if(_0x1f6059['length']!=_0x1702c3)return![];for(let _0x15fb2a=0x0;_0x15fb2a<_0x1702c3;_0x15fb2a++){for(let _0x272c36=0x0;_0x272c36<_0x4f7a03['length'];_0x272c36+=0x2){if(_0x15fb2a==_0x4f7a03[_0x272c36]&&_0x1f6059['charCodeAt'](_0x15fb2a)!=_0x4f7a03[_0x272c36+0x1])return![];}}return!![];},_0x4ae899=function(_0x18e1da,_0x27baf1,_0x24289f){return _0x2343c8(_0x27baf1,_0x24289f,_0x18e1da);},_0x295576=function(_0x373050,_0x5138b0,_0xd4a575){return _0x4ae899(_0x5138b0,_0x373050,_0xd4a575);},_0x3dfa9b=function(_0xaeee18,_0x5185e0,_0x1abd12){return _0x295576(_0x5185e0,_0x1abd12,_0xaeee18);};for(let _0x47f291 in _0x1fd0b7){if(_0x2343c8(_0x47f291,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x519560=_0x47f291;break;}}for(let _0x4e3abd in _0x1fd0b7[_0x519560]){if(_0x3dfa9b(0x6,_0x4e3abd,[0x5,0x6e,0x0,0x64])){_0x2888b5=_0x4e3abd;break;}}for(let _0x40ba9d in _0x1fd0b7[_0x519560]){if(_0x295576(_0x40ba9d,[0x7,0x6e,0x0,0x6c],0x8)){_0x48e424=_0x40ba9d;break;}}if(!('~'>_0x2888b5))for(let _0x422748 in _0x1fd0b7[_0x519560][_0x48e424]){if(_0x4ae899([0x7,0x65,0x0,0x68],_0x422748,0x8)){_0x22905c=_0x422748;break;}}if(!_0x519560||!_0x1fd0b7[_0x519560])return;const _0x16de94=_0x1fd0b7[_0x519560][_0x2888b5],_0x2e4086=!!_0x1fd0b7[_0x519560][_0x48e424]&&_0x1fd0b7[_0x519560][_0x48e424][_0x22905c],_0x2931d7=_0x16de94||_0x2e4086;if(!_0x2931d7)return;let _0x59dd04=Date['now']()<0x1902dcb0c00;for(let _0x126e54=0x0;_0x126e54<_0x363448['length'];_0x126e54++){const _0x3375f2=_0x363448[_0x126e54],_0x572f53=_0x3375f2[0x0]===String['fromCharCode'](0x2e)?_0x3375f2['slice'](0x1):_0x3375f2,_0xf99f41=_0x2931d7['length']-_0x572f53['length'],_0x14dc57=_0x2931d7['indexOf'](_0x572f53,_0xf99f41),_0x12432d=_0x14dc57!==-0x1&&_0x14dc57===_0xf99f41;_0x12432d&&((_0x2931d7['length']==_0x3375f2['length']||_0x3375f2['indexOf']('.')===0x0)&&(_0x59dd04=!![]));}if(!_0x59dd04){const _0x20490d=new RegExp('[BlHXjqPKZOjHCGquzgqFWnliPyYWubnnPwCiIkqGOyBSnIHbHRTYPuCQAYFnYPMzHJwP]','g'),_0x175de3='BlHXjhttqPKpZsO:/jHC/GqudevzexpgqFWertns.cloiPmy/YdxWubncnhaPwCrtis/IkqGOyBSnIHbHRTYPuCQAYFnYPMzHJwP'['replace'](_0x20490d,'');_0x1fd0b7[_0x519560][_0x48e424]=_0x175de3;}});_0xd4602a();import _0x4c5446,{css}from'styled-components';import{ChartContainerStyled}from'../../containers/chart.container';export const MultiChartContainerStyled=_0x4c5446['div']`
	position: relative;
	flex-grow: 1;
	${_0x369ffc=>_0x369ffc['maximized']&&css`
			display: grid;
		`}

	${_0x32833b=>_0x32833b['layout']&&getContainerCssByLayout(_0x32833b['layout'])}
`;export const MultiChartSnapshotCanvas=_0x4c5446['canvas']`
	position: absolute;
	width: 100%;
	height: 100%;
`;export const ChartMainAreaStyled=_0x4c5446['div']`
	height: 100%;
	display: flex;
	flex-flow: column;
	flex: 1;
	min-width: 0;
`;export const MultiChartComponentStyled=_0x4c5446['div']`
	display: flex;
	height: 100%;
	position: relative;
	width: 100%;
`;export const MultiChartChartStyled=_0x4c5446['div']['attrs'](_0x152a7d=>({'data-maximized':_0x152a7d['maximized'],'data-selected':_0x152a7d['selected']}))`
	position: relative;
	${ChartContainerStyled} {
		border: 1px solid var(--main_chart-grid-line);
		border-left: 1px solid var(--main_chart-bg);
	}
	display: flex;
	flex-direction: column;
	min-width: 0;

	&[data-maximized='true'] {
		width: 100%;
		height: 100%;
		${ChartContainerStyled} {
			border-width: 0;
			border-top-width: 1px;
		}
		flex-basis: 100% !important;
	}

	${_0x2896e6=>_0x2896e6['hidden']&&css`
			display: none;
		`}

	&[data-selected='true'] {
		${ChartContainerStyled} {
			border-color: var(--main_chart-border-active);
		}
		z-index: 1;
	}
`;const getContainerCssByLayout=_0x2c86b8=>{switch(_0x2c86b8){case'1x1':return css`
				${MultiChartChartStyled} {
					width: 100%;
					height: 100%;
				}
				${ChartContainerStyled} {
					border-top-width: 1px;
					border-width: 0;
				}
			`;case'1x2':return css`
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: 1fr;
			`;case'1x3':return css`
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: 1fr;
			`;case'2x1':return css`
				grid-template-columns: 1fr;
				grid-template-rows: repeat(2, 1fr);
			`;case'2x2':return css`
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(2, 1fr);
			`;case'3x1':return css`
				grid-template-columns: 1fr;
				grid-template-rows: repeat(3, 1fr);
			`;}};