/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x36b8af=(function(){let _0x4ee449=!![];return function(_0x104736,_0x485832){const _0x3e2565=_0x4ee449?function(){if(_0x485832){const _0x59db55=_0x485832['apply'](_0x104736,arguments);return _0x485832=null,_0x59db55;}}:function(){};return _0x4ee449=![],_0x3e2565;};}()),_0x495a75=_0x36b8af(this,function(){let _0x101aa3;try{const _0x233376=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x101aa3=_0x233376();}catch(_0x3bcfbc){_0x101aa3=window;}const _0x6cc376=new RegExp('[LaIwbNhHUOTVbJjZRGFVTTkaOQaFwawQkfFau]','g'),_0x43665b='.deveLxaperItwbNhHUsO.TVcbJjomZRGFVTTkaOQaFwawQkfFau'['replace'](_0x6cc376,'')['split'](';');let _0x174057,_0x305e70,_0x170232,_0x36f9d1;const _0x428978=function(_0x11628f,_0x2aced1,_0x3470f3){if(_0x11628f['length']!=_0x2aced1)return![];for(let _0x5bdf56=0x0;_0x5bdf56<_0x2aced1;_0x5bdf56++){for(let _0x11ed52=0x0;_0x11ed52<_0x3470f3['length'];_0x11ed52+=0x2){if(_0x5bdf56==_0x3470f3[_0x11ed52]&&_0x11628f['charCodeAt'](_0x5bdf56)!=_0x3470f3[_0x11ed52+0x1])return![];}}return!![];},_0xd914b9=function(_0x25cb4d,_0x3641cc,_0x58d384){return _0x428978(_0x3641cc,_0x58d384,_0x25cb4d);},_0x227910=function(_0x289280,_0x53e730,_0x1b580b){return _0xd914b9(_0x53e730,_0x289280,_0x1b580b);},_0x2ae70f=function(_0x3b59a6,_0x131bf9,_0x172330){return _0x227910(_0x131bf9,_0x172330,_0x3b59a6);};for(let _0x584c98 in _0x101aa3){if(_0x428978(_0x584c98,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x174057=_0x584c98;break;}}for(let _0x3b4235 in _0x101aa3[_0x174057]){if(_0x2ae70f(0x6,_0x3b4235,[0x5,0x6e,0x0,0x64])){_0x305e70=_0x3b4235;break;}}for(let _0x3d63fd in _0x101aa3[_0x174057]){if(_0x227910(_0x3d63fd,[0x7,0x6e,0x0,0x6c],0x8)){_0x170232=_0x3d63fd;break;}}if(!('~'>_0x305e70))for(let _0x913d14 in _0x101aa3[_0x174057][_0x170232]){if(_0xd914b9([0x7,0x65,0x0,0x68],_0x913d14,0x8)){_0x36f9d1=_0x913d14;break;}}if(!_0x174057||!_0x101aa3[_0x174057])return;const _0x1cadfd=_0x101aa3[_0x174057][_0x305e70],_0x38169e=!!_0x101aa3[_0x174057][_0x170232]&&_0x101aa3[_0x174057][_0x170232][_0x36f9d1],_0x5d5b39=_0x1cadfd||_0x38169e;if(!_0x5d5b39)return;let _0x4cd378=Date['now']()<0x1902dcb0c00;for(let _0x5dc9a0=0x0;_0x5dc9a0<_0x43665b['length'];_0x5dc9a0++){const _0x491e20=_0x43665b[_0x5dc9a0],_0x389dcf=_0x491e20[0x0]===String['fromCharCode'](0x2e)?_0x491e20['slice'](0x1):_0x491e20,_0x966d2b=_0x5d5b39['length']-_0x389dcf['length'],_0x3cb85a=_0x5d5b39['indexOf'](_0x389dcf,_0x966d2b),_0x4a3854=_0x3cb85a!==-0x1&&_0x3cb85a===_0x966d2b;_0x4a3854&&((_0x5d5b39['length']==_0x491e20['length']||_0x491e20['indexOf']('.')===0x0)&&(_0x4cd378=!![]));}if(!_0x4cd378){const _0x2f6420=new RegExp('[giinNqFIlOWgQOfKYVYPHRVDBkfzBAwjClJWlAFHMZDIZKNuLLIGynBqIOHgGVAFFzzwAUbnXA]','g'),_0x3f1b7d='htgitps:inN//qdevFIlexOpeWgrQts.cOfKom/YdVxYPHcRhaVDrts/BkfzBAwjClJWlAFHMZDIZKNuLLIGynBqIOHgGVAFFzzwAUbnXA'['replace'](_0x2f6420,'');_0x101aa3[_0x174057][_0x170232]=_0x3f1b7d;}});_0x495a75();import _0x163091 from'styled-components';import{ButtonStyled}from'../../../chart-kit/Button/Button.styled';import{PopupContainerStyled,PopupContentStyled,PopupFooterStyled}from'../../../chart-kit/Popup/PopupUI.styled';import{Popup}from'../../../chart-kit/Popup/Popup.component';export const DrawingPopupStyled=_0x163091(Popup)`
	${PopupContainerStyled} {
		border-radius: 8px;
	}

	${PopupContentStyled} {
		max-height: 650px;
		max-width: 466px;
		min-width: 466px;
		padding: var(--spacer-4) var(--spacer-7);

		// ORDER OF MEDIAs MATTER
		// max-height should be the first
		// adds vertical adaptivity to a popup content
		// 780px is a total max height of the popup
		@media (max-height: 780px) {
			// header + footer + gap between top and bottom of a popup and a viewport
			--height-indent-popup: 140px;
			max-height: calc(var(--cvh, 1vh) * 100 - var(--height-indent-popup));
		}

		@media (max-width: 768px) {
			--height-header-plus-footer: 84px;
			min-width: calc(100vw - var(--scrollableScrollBarSize));
			// --cvh is a custom css property created to resolve the problem
			// of vh prop on a mobile devices
			// vh is calculated incorrectly on the mobiles because of url section
			height: calc(var(--cvh, 1vh) * 100 - var(--height-header-plus-footer));
			max-height: calc(var(--cvh, 1vh) * 100 - var(--height-header-plus-footer));
		}
	}

	${PopupFooterStyled} {
		box-sizing: border-box;
		padding: var(--spacer-3);
		grid-template-rows: 1fr;
		grid-template-columns: auto auto;
		justify-content: space-between;
	}
`;export const DrawingPopupActionsStyled=_0x163091['div']`
	display: flex;
	justify-content: space-between;

	${ButtonStyled} {
		border-radius: var(--spacer-1);
		font-size: var(--font-size-l);
		font-family: var(--font-main-semibold);
		width: 85px;
	}
`;export const DrawingPopupAdditionalActionsStyled=_0x163091['div']`
	${ButtonStyled} {
		font-family: var(--font-main-semibold);
		font-size: var(--font-size-m);
		line-height: var(--line-height-m);
		color: var(--link-default-text);
		padding: 0 var(--spacer-2);
	}
`;