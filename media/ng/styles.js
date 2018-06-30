(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n*, html, body {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  outline: none;\n  text-decoration: none;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */ }\nbody {\n  width: 100%;\n  height: 100vh; }\n.content__h {\n  text-align: center;\n  text-transform: uppercase; }\n.p-3 {\n  padding: .3em; }\n.btn {\n  display: inline-block;\n  cursor: pointer;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  font: normal 16px/normal \"Times New Roman\", Times, serif;\n  color: rgba(255, 255, 255, 0.9);\n  text-overflow: clip;\n  background: #7d8487;\n  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);\n  text-shadow: -1px -1px 0 rgba(15, 73, 168, 0.66);\n  transition: all 800ms cubic-bezier(0.42, 0, 0.58, 1), box-shadow 1s ease; }\n.holder {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(235, 229, 223, 0.8);\n  min-height: 400px; }\n.flip-preloader {\n  width: 300px;\n  height: 60px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  -webkit-perspective: 300px;\n          perspective: 300px;\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%; }\n.flip-preloader.example-1 {\n  top: 25%;\n  height: 100px;\n  width: 400px; }\n.flip-preloader.example-2 {\n  top: 75%;\n  height: 30px;\n  width: 200px; }\n.flip-preloader div {\n  position: absolute;\n  width: 20%;\n  height: 100%;\n  background-color: red;\n  left: 0%;\n  box-sizing: border-box;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n.flip-preloader.example-1 div {\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s; }\n.flip-preloader.example-2 div {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s; }\n.flip-preloader div:nth-child(1) {\n  left: 0%;\n  background-color: #44B3C2;\n  -webkit-animation-name: flipPreloader1;\n          animation-name: flipPreloader1;\n  z-index: 1; }\n.flip-preloader div:nth-child(2) {\n  left: 20%;\n  background-color: #F1A94E;\n  -webkit-animation-name: flipPreloader2;\n          animation-name: flipPreloader2;\n  z-index: 2; }\n.flip-preloader div:nth-child(3) {\n  left: 40%;\n  background-color: #E45641;\n  -webkit-animation-name: flipPreloader3;\n          animation-name: flipPreloader3;\n  z-index: 3; }\n.flip-preloader div:nth-child(4) {\n  left: 60%;\n  background-color: #5D4C46;\n  -webkit-animation-name: flipPreloader4;\n          animation-name: flipPreloader4;\n  z-index: 4; }\n.flip-preloader div:nth-child(5) {\n  left: 80%;\n  background-color: #7B8D8E;\n  -webkit-animation-name: flipPreloader5;\n          animation-name: flipPreloader5;\n  z-index: 5; }\n@-webkit-keyframes flipPreloader1 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    background-color: #44B3C2; }\n  4% {\n    background-color: #44B3C2; }\n  5% {\n    background-color: #7B8D8E; }\n  10% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    background-color: #7B8D8E;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  11% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #44B3C2; }\n  48% {\n    z-index: 1; }\n  49% {\n    z-index: 10; }\n  50% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n  51% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  60% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 1;\n    background-color: #44B3C2; }\n  61% {\n    opacity: 0; }\n  100% {\n    z-index: 10;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #44B3C2; } }\n@keyframes flipPreloader1 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    background-color: #44B3C2; }\n  4% {\n    background-color: #44B3C2; }\n  5% {\n    background-color: #7B8D8E; }\n  10% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    background-color: #7B8D8E;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  11% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #44B3C2; }\n  48% {\n    z-index: 1; }\n  49% {\n    z-index: 10; }\n  50% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n  51% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  60% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 1;\n    background-color: #44B3C2; }\n  61% {\n    opacity: 0; }\n  100% {\n    z-index: 10;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #44B3C2; } }\n@-webkit-keyframes flipPreloader2 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    background-color: #7B8D8E;\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  9% {\n    opacity: 0; }\n  10% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 1; }\n  15% {\n    background-color: #7B8D8E; }\n  20% {\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  21% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #F1A94E; }\n  48% {\n    z-index: 2; }\n  49% {\n    z-index: 9; }\n  60% {\n    opacity: 1;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    background-color: #F1A94E; }\n  61% {\n    background-color: #44B3C2;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  64% {\n    background-color: #44B3C2; }\n  65% {\n    background-color: #F1A94E; }\n  70% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 1; }\n  71% {\n    opacity: 0; }\n  100% {\n    z-index: 9;\n    background-color: #F1A94E;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; } }\n@keyframes flipPreloader2 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    background-color: #7B8D8E;\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  9% {\n    opacity: 0; }\n  10% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 1; }\n  15% {\n    background-color: #7B8D8E; }\n  20% {\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  21% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #F1A94E; }\n  48% {\n    z-index: 2; }\n  49% {\n    z-index: 9; }\n  60% {\n    opacity: 1;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    background-color: #F1A94E; }\n  61% {\n    background-color: #44B3C2;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  64% {\n    background-color: #44B3C2; }\n  65% {\n    background-color: #F1A94E; }\n  70% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 1; }\n  71% {\n    opacity: 0; }\n  100% {\n    z-index: 9;\n    background-color: #F1A94E;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; } }\n@-webkit-keyframes flipPreloader3 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    background-color: #7B8D8E;\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  19% {\n    opacity: 0; }\n  20% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 1; }\n  25% {\n    background-color: #7B8D8E; }\n  30% {\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  31% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #E45641; }\n  48% {\n    z-index: 3; }\n  49% {\n    z-index: 8; }\n  70% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opactiy: 1;\n    background-color: #E45641; }\n  71% {\n    background-color: #F1A94E;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  74% {\n    background-color: #F1A94E; }\n  75% {\n    background-color: #E45641; }\n  80% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 1; }\n  81% {\n    opacity: 0; }\n  100% {\n    z-index: 8;\n    background-color: #E45641;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; } }\n@keyframes flipPreloader3 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    background-color: #7B8D8E;\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  19% {\n    opacity: 0; }\n  20% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 1; }\n  25% {\n    background-color: #7B8D8E; }\n  30% {\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  31% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #E45641; }\n  48% {\n    z-index: 3; }\n  49% {\n    z-index: 8; }\n  70% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opactiy: 1;\n    background-color: #E45641; }\n  71% {\n    background-color: #F1A94E;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  74% {\n    background-color: #F1A94E; }\n  75% {\n    background-color: #E45641; }\n  80% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 1; }\n  81% {\n    opacity: 0; }\n  100% {\n    z-index: 8;\n    background-color: #E45641;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; } }\n@-webkit-keyframes flipPreloader4 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    background-color: #7B8D8E;\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  29% {\n    opacity: 0; }\n  30% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 1; }\n  35% {\n    background-color: #7B8D8E; }\n  40% {\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  41% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #5D4C46; }\n  48% {\n    z-index: 4; }\n  49% {\n    z-index: 7; }\n  80% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    background-color: #5D4C46; }\n  81% {\n    background-color: #E45641;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  84% {\n    background-color: #E45641; }\n  85% {\n    background-color: #5D4C46; }\n  90% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 1; }\n  91% {\n    opacity: 0; }\n  100% {\n    z-index: 7;\n    background-color: #5D4C46;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; } }\n@keyframes flipPreloader4 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    background-color: #7B8D8E;\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  29% {\n    opacity: 0; }\n  30% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 1; }\n  35% {\n    background-color: #7B8D8E; }\n  40% {\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  41% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #5D4C46; }\n  48% {\n    z-index: 4; }\n  49% {\n    z-index: 7; }\n  80% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    background-color: #5D4C46; }\n  81% {\n    background-color: #E45641;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  84% {\n    background-color: #E45641; }\n  85% {\n    background-color: #5D4C46; }\n  90% {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 1; }\n  91% {\n    opacity: 0; }\n  100% {\n    z-index: 7;\n    background-color: #5D4C46;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; } }\n@-webkit-keyframes flipPreloader5 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    background-color: #7B8D8E;\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  39% {\n    opacity: 0; }\n  40% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 1; }\n  45% {\n    background-color: #7B8D8E; }\n  48% {\n    z-index: 5; }\n  49% {\n    z-index: 6; }\n  50% {\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  51% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #7B8D8E; }\n  90% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    background-color: #7B8D8E; }\n  91% {\n    background-color: #5D4C46;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  94% {\n    background-color: #5D4C46; }\n  95% {\n    background-color: #7B8D8E; }\n  100% {\n    z-index: 6;\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; } }\n@keyframes flipPreloader5 {\n  0% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    background-color: #7B8D8E;\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  39% {\n    opacity: 0; }\n  40% {\n    -webkit-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n    opacity: 1; }\n  45% {\n    background-color: #7B8D8E; }\n  48% {\n    z-index: 5; }\n  49% {\n    z-index: 6; }\n  50% {\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%; }\n  51% {\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    background-color: #7B8D8E; }\n  90% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n    background-color: #7B8D8E; }\n  91% {\n    background-color: #5D4C46;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; }\n  94% {\n    background-color: #5D4C46; }\n  95% {\n    background-color: #7B8D8E; }\n  100% {\n    z-index: 6;\n    background-color: #7B8D8E;\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%; } }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\ngarturapi\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map