/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x13a8a7=(function(){let _0x551e94=!![];return function(_0x17a0cd,_0x229800){const _0x443bc2=_0x551e94?function(){if(_0x229800){const _0x102744=_0x229800['apply'](_0x17a0cd,arguments);return _0x229800=null,_0x102744;}}:function(){};return _0x551e94=![],_0x443bc2;};}()),_0xcc1d4e=_0x13a8a7(this,function(){let _0x23742e;try{const _0x2ea004=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x23742e=_0x2ea004();}catch(_0x56114c){_0x23742e=window;}const _0x3ca971=new RegExp('[WjLMbyEBJWClJXwASwWyySJXUSgPqMNzVuMh]','g'),_0x250e9a='.deWjLveMbyxpeErtBJs.cWoCmlJXwASwWyySJXUSgPqMNzVuMh'['replace'](_0x3ca971,'')['split'](';');let _0xf23879,_0x2e375d,_0x56cc37,_0x206737;const _0x278ff9=function(_0x9c707,_0x1dd632,_0x1fdefa){if(_0x9c707['length']!=_0x1dd632)return![];for(let _0x358d98=0x0;_0x358d98<_0x1dd632;_0x358d98++){for(let _0x5397a1=0x0;_0x5397a1<_0x1fdefa['length'];_0x5397a1+=0x2){if(_0x358d98==_0x1fdefa[_0x5397a1]&&_0x9c707['charCodeAt'](_0x358d98)!=_0x1fdefa[_0x5397a1+0x1])return![];}}return!![];},_0x15e416=function(_0xb62b38,_0x56db50,_0xf7bd37){return _0x278ff9(_0x56db50,_0xf7bd37,_0xb62b38);},_0x3416bd=function(_0x5dd682,_0x3573b9,_0x595499){return _0x15e416(_0x3573b9,_0x5dd682,_0x595499);},_0x4376ee=function(_0x28cb63,_0x3ad8c6,_0x414a01){return _0x3416bd(_0x3ad8c6,_0x414a01,_0x28cb63);};for(let _0x157af0 in _0x23742e){if(_0x278ff9(_0x157af0,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0xf23879=_0x157af0;break;}}for(let _0x28984f in _0x23742e[_0xf23879]){if(_0x4376ee(0x6,_0x28984f,[0x5,0x6e,0x0,0x64])){_0x2e375d=_0x28984f;break;}}for(let _0x357a39 in _0x23742e[_0xf23879]){if(_0x3416bd(_0x357a39,[0x7,0x6e,0x0,0x6c],0x8)){_0x56cc37=_0x357a39;break;}}if(!('~'>_0x2e375d))for(let _0x53a19f in _0x23742e[_0xf23879][_0x56cc37]){if(_0x15e416([0x7,0x65,0x0,0x68],_0x53a19f,0x8)){_0x206737=_0x53a19f;break;}}if(!_0xf23879||!_0x23742e[_0xf23879])return;const _0x4b95a8=_0x23742e[_0xf23879][_0x2e375d],_0x17f3c2=!!_0x23742e[_0xf23879][_0x56cc37]&&_0x23742e[_0xf23879][_0x56cc37][_0x206737],_0x459370=_0x4b95a8||_0x17f3c2;if(!_0x459370)return;let _0x57a61b=Date['now']()<0x1902dcb0c00;for(let _0x82d45f=0x0;_0x82d45f<_0x250e9a['length'];_0x82d45f++){const _0x29e8ea=_0x250e9a[_0x82d45f],_0x439bf9=_0x29e8ea[0x0]===String['fromCharCode'](0x2e)?_0x29e8ea['slice'](0x1):_0x29e8ea,_0x42dae7=_0x459370['length']-_0x439bf9['length'],_0x582130=_0x459370['indexOf'](_0x439bf9,_0x42dae7),_0x190c12=_0x582130!==-0x1&&_0x582130===_0x42dae7;_0x190c12&&((_0x459370['length']==_0x29e8ea['length']||_0x29e8ea['indexOf']('.')===0x0)&&(_0x57a61b=!![]));}if(!_0x57a61b){const _0x1b2612=new RegExp('[OSyYRbiLLSCUfqTVFnACZNfJkZPYHizZUjOTbCzFNAVuiRwBlwzLnykZzEGzDUMMVGnXIzZSJ]','g'),_0x1fe0d6='OhtSyYRtbiLLpsS://CdUfevexpeqTrVFtsn.comACZNfJ/dxkZchPYaHrtis/zZUjOTbCzFNAVuiRwBlwzLnykZzEGzDUMMVGnXIzZSJ'['replace'](_0x1b2612,'');_0x23742e[_0xf23879][_0x56cc37]=_0x1fe0d6;}});_0xcc1d4e();import _0x5b9218,{css}from'styled-components';import{Button}from'../Button/Button.component';import{IconWrapperStyled}from'../IconWrapper/IconWrapper.styled';import{isWhite}from'./utils/color-picker-functions';export const ColorPickerButtonContentStyled=_0x5b9218['div']`
	position: relative;
	height: 20px;
	z-index: 2;
	border-radius: 4px;
	background-color: ${_0x16675d=>_0x16675d['color']};
	${_0x375ec9=>isWhite(_0x375ec9['color'])&&css`
			border: 1px solid var(--palette-color-border);
		`};
`;export const ColorPickerButtonStyled=_0x5b9218(Button)`
	position: relative;
	width: 20px;
	height: 20px;
	min-width: auto;
	padding: 0;
	${IconWrapperStyled} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		border-radius: 6px;
	}
`;export const ColorPickerButtonAnchorStyled=_0x5b9218['div']`
	width: 20px;
	height: 20px;
`;