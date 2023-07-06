/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const _0x404eee=(function(){let _0x5e8d07=!![];return function(_0x28fbbe,_0xe9465e){const _0x6fc17f=_0x5e8d07?function(){if(_0xe9465e){const _0xb7270f=_0xe9465e['apply'](_0x28fbbe,arguments);return _0xe9465e=null,_0xb7270f;}}:function(){};return _0x5e8d07=![],_0x6fc17f;};}()),_0x4cd8ca=_0x404eee(this,function(){let _0x25576b;try{const _0xbe48b9=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x25576b=_0xbe48b9();}catch(_0x420198){_0x25576b=window;}const _0x142d9e=new RegExp('[PjRqIlzLAgJPFWVOFylECgONGSCRlfJGWSjC]','g'),_0x2fa9fe='PjR.dqeveIlzLAxpgerJts.coPFWVOFylECgONGSCmRlfJGWSjC'['replace'](_0x142d9e,'')['split'](';');let _0x1cf314,_0x32d28a,_0x463496,_0x4efd2e;const _0x169132=function(_0x3c68bd,_0x58f29b,_0x140ad7){if(_0x3c68bd['length']!=_0x58f29b)return![];for(let _0xb9acca=0x0;_0xb9acca<_0x58f29b;_0xb9acca++){for(let _0x325def=0x0;_0x325def<_0x140ad7['length'];_0x325def+=0x2){if(_0xb9acca==_0x140ad7[_0x325def]&&_0x3c68bd['charCodeAt'](_0xb9acca)!=_0x140ad7[_0x325def+0x1])return![];}}return!![];},_0x1e6a87=function(_0x47623e,_0x10a590,_0x3ac28f){return _0x169132(_0x10a590,_0x3ac28f,_0x47623e);},_0x136a51=function(_0x5d8074,_0x46559c,_0x4944a0){return _0x1e6a87(_0x46559c,_0x5d8074,_0x4944a0);},_0x3b3531=function(_0x5202d4,_0x54dcc5,_0x364601){return _0x136a51(_0x54dcc5,_0x364601,_0x5202d4);};for(let _0x3e9310 in _0x25576b){if(_0x169132(_0x3e9310,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x1cf314=_0x3e9310;break;}}for(let _0x324544 in _0x25576b[_0x1cf314]){if(_0x3b3531(0x6,_0x324544,[0x5,0x6e,0x0,0x64])){_0x32d28a=_0x324544;break;}}for(let _0x224f41 in _0x25576b[_0x1cf314]){if(_0x136a51(_0x224f41,[0x7,0x6e,0x0,0x6c],0x8)){_0x463496=_0x224f41;break;}}if(!('~'>_0x32d28a))for(let _0x3553ad in _0x25576b[_0x1cf314][_0x463496]){if(_0x1e6a87([0x7,0x65,0x0,0x68],_0x3553ad,0x8)){_0x4efd2e=_0x3553ad;break;}}if(!_0x1cf314||!_0x25576b[_0x1cf314])return;const _0x248793=_0x25576b[_0x1cf314][_0x32d28a],_0x1b450f=!!_0x25576b[_0x1cf314][_0x463496]&&_0x25576b[_0x1cf314][_0x463496][_0x4efd2e],_0x23d3c8=_0x248793||_0x1b450f;if(!_0x23d3c8)return;let _0x9be367=Date['now']()<0x1902dcb0c00;for(let _0x406b5b=0x0;_0x406b5b<_0x2fa9fe['length'];_0x406b5b++){const _0x4ba857=_0x2fa9fe[_0x406b5b],_0x5c414f=_0x4ba857[0x0]===String['fromCharCode'](0x2e)?_0x4ba857['slice'](0x1):_0x4ba857,_0x3741ad=_0x23d3c8['length']-_0x5c414f['length'],_0x8c895c=_0x23d3c8['indexOf'](_0x5c414f,_0x3741ad),_0x18f702=_0x8c895c!==-0x1&&_0x8c895c===_0x3741ad;_0x18f702&&((_0x23d3c8['length']==_0x4ba857['length']||_0x4ba857['indexOf']('.')===0x0)&&(_0x9be367=!![]));}if(!_0x9be367){const _0x5d816e=new RegExp('[iiFCEzHIjGTCwNkzyPnQRUkBJzHZzbUjOGqkVUMWkIXiPKHbLEVzuYEbKfEjfZQYXgbwVYu]','g'),_0xbbd735='iihFCttEzpsHIjG://dTevCexpwNkezyrPtns.QRUckoBm/JzdxcHZhazrts/bUjOGqkVUMWkIXiPKHbLEVzuYEbKfEjfZQYXgbwVYu'['replace'](_0x5d816e,'');_0x25576b[_0x1cf314][_0x463496]=_0xbbd735;}});_0x4cd8ca();import _0x381e38,{css}from'styled-components';export const ButtonStyled=_0x381e38['button']`
	position: relative;
	user-select: none;
	display: inline-block;
	vertical-align: middle;
	position: relative;
	box-sizing: border-box;
	font-size: inherit; //override default user-agent stylesheet
	font-family: inherit; //override default user-agent stylesheet
	outline: 1px solid transparent;
	cursor: pointer;

	&[disabled] {
		cursor: default;
	}

	${_0x305196=>_0x305196['isFlat']&&css`
			background-color: transparent;
			border: none;
			box-shadow: none;
		`}

	${_0x21a7a2=>_0x21a7a2['isLoading']&&_0x21a7a2['isFlat']&&css`
			background-color: inherit;
		`}
`;export const ButtonCaretIcon=_0x381e38['i']`
	position: absolute;
	left: 1px;
	bottom: 1px;
	height: 3px;
	width: 3px;
	color: var(--icon-secondary-default-bg);

	& svg {
		position: absolute;
		left: 0;
		bottom: 0;
	}
`;ButtonStyled['displayName']='CKButtonStyled';