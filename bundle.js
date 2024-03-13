/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/gameHandler.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/gameHandler.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.game-handler {\n\tdisplay: none;\n\twidth: 100%;\n\theight: 100%;\n\tjustify-content: center;\n\talign-items: center;\n\topacity: 0;\n}\n#announcement {\n\topacity: 0;\n\theight: 50px;\n\twidth: 70%;\n\tposition: absolute;\n\tcolor: white;\n\tfont-size: 1.5rem;\n\ttop: 20%;\n\tleft: 18%;\n\tborder: 2px solid black;\n\tborder-radius: 10px;\n\tz-index: 2;\n\t/* transition: opacity ease-in-out; */\n}\n.player-grid-container,\n.computer-grid-container {\n\twidth: 450px;\n\theight: 80%;\n}\n.player-grid-container,\n.computer-grid-container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.computer-grid-container {\n\topacity: 0;\n}\n.player-grid {\n\twidth: 420px;\n\theight: 420px;\n\tborder: 1px solid black;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-template-rows: repeat(10, 1fr);\n}\n\n.computer-grid {\n\twidth: 420px;\n\theight: 420px;\n\tborder: 1px solid black;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-template-rows: repeat(10, 1fr);\n\t/* opacity: 0; */\n}\n\n.cell {\n\tborder: 0.5px solid black;\n\tbackground-color: rgb(100, 179, 249);\n\tfont-size: 1.5rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\t/* cursor: url(./images/crosshair-bold-svgrepo-com.svg) 20 20, auto; */\n}\n.cell:hover {\n\tborder: 1px solid red;\n}\n.cell.carrier {\n\tbackground-color: yellow;\n}\n.cell.battleship {\n\tbackground-color: rgb(255, 128, 0);\n}\n.cell.cruiser {\n\tbackground-color: rgb(166, 255, 0);\n}\n.cell.submarine {\n\tbackground-color: rgb(0, 255, 128);\n}\n.cell.destroyer {\n\tbackground-color: rgb(0, 251, 255);\n}\n.selected-ship {\n\tbackground-color: lightgrey;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/gameHandler.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/FortunerHeavyPersonalUse.otf */ \"./src/fonts/FortunerHeavyPersonalUse.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sea.jpg */ \"./src/images/sea.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/carrier.png */ \"./src/images/carrier.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/battleship.png */ \"./src/images/battleship.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cruiser.png */ \"./src/images/cruiser.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/submarine.png */ \"./src/images/submarine.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/destroyer.png */ \"./src/images/destroyer.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/dot.svg */ \"./src/images/dot.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cross.svg */ \"./src/images/cross.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n\tfont-family: Military;\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n* {\n\tbox-sizing: border-box;\n}\nbody {\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n\tbackground-size: fill;\n}\n.main-container {\n\twidth: 30%;\n\theight: 60%;\n\tborder-radius: 20px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-rows: 20% 1fr;\n\tbackground-color: rgba(211, 211, 211, 0.587);\n\ttransition: width 3s, height 3s;\n}\n/* //Big main container sizing */\n.active {\n\twidth: 80%;\n\theight: 90%;\n\tborder-radius: 20px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: grid;\n\tgrid-template-rows: 15% 1fr;\n\talign-items: start;\n\tbackground-color: rgba(38, 68, 36, 0.618);\n}\n/* ////////// */\n.header {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 20px 20px 0 0;\n\tbackground: #44a08d;\n\tbackground: -webkit-linear-gradient(to bottom, #093637, #44a07b);\n\tbackground: linear-gradient(to bottom, #093637, #44a07b);\n}\n#header-logo {\n\tfont-size: 4rem;\n\tfont-family: Military;\n}\n.initiator {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n}\n.ships-container {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(6, 1fr);\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 300px;\n\theight: 380px;\n\tbackground-color: rgba(128, 128, 128, 0.603);\n\tborder-radius: 15px;\n}\n.ship-carrier {\n\twidth: 210px;\n\theight: 42px;\n\tbackground-color: rgba(255, 255, 0);\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n}\n.ship-battleship {\n\twidth: 168px;\n\theight: 42px;\n\tbackground-color: rgb(255, 128, 0);\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom;\n}\n.ship-cruiser {\n\twidth: 126px;\n\theight: 42px;\n\tbackground-color: rgb(166, 255, 0);\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom;\n}\n.ship-submarine {\n\twidth: 126px;\n\theight: 42px;\n\tbackground-color: rgb(0, 255, 128);\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n}\n.ship-destroyer {\n\twidth: 84px;\n\theight: 42px;\n\tbackground-color: rgb(0, 251, 255);\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom;\n}\n.chosen {\n\tbackground-color: greenyellow;\n}\n.draggable {\n\tcursor: move;\n}\n.miss {\n\tbackground-color: rgb(138, 171, 182);\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n}\n.hit {\n\tbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n}\n.glow {\n\tanimation: glow 1s infinite alternate;\n}\n\n@keyframes glow {\n\tfrom {\n\t\tbox-shadow: 0 0 10px rgba(255, 255, 0, 0.5);\n\t}\n\tto {\n\t\tbox-shadow: 0 0 20px rgba(255, 255, 0, 1);\n\t}\n}\n#play-button {\n\twidth: 250px;\n\theight: 80px;\n\tfont-size: 1.5rem;\n\tbackground-color: #44a07b;\n}\n#random-ships-button {\n\twidth: 80px;\n\theight: 30px;\n}\n#reset-button {\n\twidth: 60px;\n\theight: 30px;\n}\n.orientation-buttons {\n\twidth: 30px;\n\theight: 30px;\n\tborder-radius: 50px;\n\tborder: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/audio/cannon_attack.mp3":
/*!*************************************!*\
  !*** ./src/audio/cannon_attack.mp3 ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"audio/cannon_attack.mp3\");\n\n//# sourceURL=webpack://battleship/./src/audio/cannon_attack.mp3?");

/***/ }),

/***/ "./src/gameHandler.css":
/*!*****************************!*\
  !*** ./src/gameHandler.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameHandler_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./gameHandler.css */ \"./node_modules/css-loader/dist/cjs.js!./src/gameHandler.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameHandler_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameHandler_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_gameHandler_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_gameHandler_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/gameHandler.css?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerGridDiv: () => (/* binding */ computerGridDiv),\n/* harmony export */   displayController: () => (/* binding */ displayController),\n/* harmony export */   playerGridDiv: () => (/* binding */ playerGridDiv)\n/* harmony export */ });\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ \"./src/gameController.js\");\n/* harmony import */ var _shipsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipsController */ \"./src/shipsController.js\");\n\n\n// import './images/dot.svg';\n\nconst playerGridDiv = document.querySelector('.player-grid');\nconst computerGridDiv = document.querySelector('.computer-grid');\n\nconst displayController = (() => {\n\tconst startGameBtn = document.querySelector('#play-button');\n\tconst mainContainer = document.querySelector('.main-container');\n\tconst initiatorContainer = document.querySelector('.initiator');\n\tconst gameHandler = document.querySelector('.game-handler');\n\tconst resetBtn = document.querySelector('#reset-button');\n\tconst announce = document.querySelector('#announcement');\n\tconst shipsContainer = document.querySelector('.ships-container');\n\tconst computerGridContainter = document.querySelector(\n\t\t'.computer-grid-container'\n\t);\n\n\tconst compAttackBtn = document.querySelector('#comp-attack-button');\n\n\tstartGameBtn.addEventListener('click', () => {\n\t\tinitiatorContainer.style.display = 'none';\n\t\tbuildFlot();\n\t});\n\n\tasync function buildFlot() {\n\t\tmainContainer.classList.add('active');\n\t\tsetTimeout(() => {\n\t\t\tannounce.style.transition = 'opacity 1s ease-in-out';\n\t\t\tannounce.style.opacity = '1';\n\t\t}, 3000);\n\n\t\tsetTimeout(() => {\n\t\t\tgameHandler.style.display = 'flex';\n\t\t\tsetTimeout(() => {\n\t\t\t\tgameHandler.style.transition = 'opacity 1s ease-in-out';\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tgameHandler.style.opacity = '1';\n\t\t\t\t}, 100);\n\t\t\t}, 0);\n\t\t}, 7000);\n\t\tshipsContainer.classList.add('glow');\n\t\tawait finishFlot();\n\t\tshipsContainer.classList.remove('glow');\n\t\tsetTimeout(() => {\n\t\t\tcomputerGridContainter.style.display = 'flex';\n\t\t\tsetTimeout(() => {\n\t\t\t\tcomputerGridContainter.style.transition =\n\t\t\t\t\t'opacity 1s ease-in-out';\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tcomputerGridContainter.style.opacity = '1';\n\t\t\t\t}, 100);\n\t\t\t}, 0);\n\t\t}, 2000);\n\t}\n\n\tasync function finishFlot() {\n\t\treturn new Promise((resolve) => {\n\t\t\tconst checkConditions = () => {\n\t\t\t\tlet draggable = _shipsController__WEBPACK_IMPORTED_MODULE_1__.shipsController.getDraggables();\n\t\t\t\tconst randomize = _shipsController__WEBPACK_IMPORTED_MODULE_1__.shipsController.getRandomizeStatus();\n\t\t\t\tif (draggable === false && randomize === false) {\n\t\t\t\t\tsetTimeout(checkConditions, 2000);\n\t\t\t\t} else {\n\t\t\t\t\tconsole.log('flot is done');\n\t\t\t\t\tresolve();\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tcheckConditions(); // Start checking the conditions\n\t\t});\n\t}\n\n\t// function finishFlot() {\n\t// \tconst draggables = shipsController.getDraggables();\n\t// \tconst radomize = shipsController.getRandomizeStatus();\n\t// \tif (!draggables.length || radomize) {\n\t// \t\tconsole.log('flot is done');\n\t// \t\treturn true;\n\t// \t}\n\t// \treturn false;\n\t// }\n\n\tresetBtn.addEventListener('click', () => {\n\t\t_gameController__WEBPACK_IMPORTED_MODULE_0__.gameController.clearGrid(_gameController__WEBPACK_IMPORTED_MODULE_0__.playerGrid);\n\t\tplayerGridDiv.innerHTML = '';\n\t\t_gameController__WEBPACK_IMPORTED_MODULE_0__.gameController.createGrid(_gameController__WEBPACK_IMPORTED_MODULE_0__.playerGrid);\n\t\trenderGrid(_gameController__WEBPACK_IMPORTED_MODULE_0__.playerGrid, 'player-grid');\n\t});\n\n\t// compAttackBtn.addEventListener('click', () => {\n\t// \tlet attack = gameController.makeComputerAttack(playerGrid);\n\t// \tlet cell = document.querySelector(\n\t// \t\t`[data-row=\"${attack.row}\"][data-col=\"${attack.col}\"]`\n\t// \t);\n\t// \tupdateCellHits(playerGrid, attack.row, attack.col, cell);\n\t// });\n\n\t// playerGrid.addEventListener('click', function (event) {\n\t// \tconst cell = event.target;\n\t// \tif (cell.classList.contains('cells')) {\n\t// \t\tconst row = cell.dataset.row;\n\t// \t\tconst col = cell.dataset.col;\n\n\t// \t\tupdateCellHits(playerGrid, row, col, cell);\n\t// \t}\n\t// });\n\n\tcomputerGridDiv.addEventListener('click', function (event) {\n\t\tconst cell = event.target;\n\t\tif (cell.classList.contains('cell')) {\n\t\t\tconst row = cell.dataset.row;\n\t\t\tconst col = cell.dataset.col;\n\t\t\t_gameController__WEBPACK_IMPORTED_MODULE_0__.gameController.makeAttack(row, col, _gameController__WEBPACK_IMPORTED_MODULE_0__.computerGrid);\n\t\t\tupdateCellHits(_gameController__WEBPACK_IMPORTED_MODULE_0__.computerGrid, row, col, cell);\n\t\t}\n\t\t_gameController__WEBPACK_IMPORTED_MODULE_0__.gameController.makeComputerAttack();\n\t});\n\n\tfunction updateCellHits(grid, x, y, target) {\n\t\tif (grid[x][y].ship !== null) {\n\t\t\ttarget.style.backgroundColor = 'rgb(138, 171, 182)';\n\t\t\ttarget.classList.add('hit');\n\t\t\ttarget.dataset.hit = 'true';\n\t\t} else {\n\t\t\ttarget.classList.add('miss');\n\t\t\ttarget.style.backgroundColor = 'lightblue';\n\t\t\ttarget.dataset.hit = 'true';\n\t\t}\n\t}\n\n\tfunction renderGrid(grid, gridClass) {\n\t\tlet total = 0;\n\t\tconst gridElement = document.querySelector('.' + gridClass);\n\t\tgridElement.innerHTML = '';\n\t\tgrid.forEach((row, rowIndex) => {\n\t\t\trow.forEach((col, colIndex) => {\n\t\t\t\tconst newCell = document.createElement('div');\n\t\t\t\tnewCell.classList.add('cell');\n\t\t\t\tif (gridClass === 'player-grid') {\n\t\t\t\t\tif (col.ship !== null) {\n\t\t\t\t\t\tswitch (col.ship) {\n\t\t\t\t\t\t\tcase 'carrier':\n\t\t\t\t\t\t\t\tnewCell.classList.add('carrier');\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'battleship':\n\t\t\t\t\t\t\t\tnewCell.classList.add('battleship');\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'cruiser':\n\t\t\t\t\t\t\t\tnewCell.classList.add('cruiser');\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'submarine':\n\t\t\t\t\t\t\t\tnewCell.classList.add('submarine');\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'destroyer':\n\t\t\t\t\t\t\t\tnewCell.classList.add('destroyer');\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tnewCell.setAttribute('data-ship', col.ship);\n\t\t\t\t}\n\t\t\t\t// \tgridElement.style.cursor =\n\t\t\t\t// \t\t'url(./images/crosshair-bold-svgrepo-com.svg) 20 20, auto';\n\t\t\t\t// }\n\t\t\t\tif (col.hit) {\n\t\t\t\t\tnewCell.classList.add('hit');\n\t\t\t\t}\n\t\t\t\tnewCell.setAttribute('data-row', rowIndex);\n\t\t\t\tnewCell.setAttribute('data-col', colIndex);\n\t\t\t\tnewCell.setAttribute('data-hit', col.hit);\n\t\t\t\tgridElement.appendChild(newCell);\n\t\t\t\ttotal++;\n\t\t\t});\n\t\t});\n\t\t// console.log(total);\n\t}\n\n\tfunction initiateRenderGrid() {\n\t\trenderGrid(_gameController__WEBPACK_IMPORTED_MODULE_0__.playerGrid, 'player-grid');\n\t\trenderGrid(_gameController__WEBPACK_IMPORTED_MODULE_0__.computerGrid, 'computer-grid');\n\t}\n\n\treturn {\n\t\trenderGrid,\n\t\tinitiateRenderGrid,\n\t\t// renderPlayer2Attack,\n\t\tupdateCellHits,\n\t\t// computerGrid,\n\t};\n})();\n\n\n//# sourceURL=webpack://battleship/./src/displayController.js?");

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerGrid: () => (/* binding */ computerGrid),\n/* harmony export */   gameController: () => (/* binding */ gameController),\n/* harmony export */   playerGrid: () => (/* binding */ playerGrid)\n/* harmony export */ });\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _shipsController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipsController.js */ \"./src/shipsController.js\");\n/* harmony import */ var _audio_cannon_attack_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/cannon_attack.mp3 */ \"./src/audio/cannon_attack.mp3\");\n\n\n\n\nlet playerGrid = [];\nlet computerGrid = [];\n\nconst gameController = (() => {\n\tconst gridSize = 10;\n\n\tlet mySound = new Audio(_audio_cannon_attack_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\tfunction createGrid(grid) {\n\t\tfor (let i = 0; i < gridSize; i++) {\n\t\t\tgrid[i] = [];\n\t\t\tfor (let j = 0; j < gridSize; j++) {\n\t\t\t\tgrid[i][j] = { ship: null, hit: false };\n\t\t\t}\n\t\t}\n\t}\n\tfunction clearGrid(grid) {\n\t\tgrid = [];\n\t}\n\n\tfunction makeAttack(row, col, grid) {\n\t\tconsole.log('Computer ships');\n\t\tconsole.log(_shipsController_js__WEBPACK_IMPORTED_MODULE_1__.computerShips);\n\t\tif (grid[row][col].hit === false) {\n\t\t\tgrid[row][col].hit = true;\n\t\t\tcheckAttack(row, col, computerGrid, _shipsController_js__WEBPACK_IMPORTED_MODULE_1__.computerShips);\n\t\t\tmySound.play().catch((error) => {\n\t\t\t\tconsole.error('Failed to play audio:', error);\n\t\t\t});\n\t\t\tcheckWin();\n\t\t} else {\n\t\t\tthrow new Error();\n\t\t}\n\t}\n\n\tfunction makeComputerAttack() {\n\t\tconst randomCoordinates = getRandomCoordinates();\n\t\tconst { row, col } = randomCoordinates;\n\t\tif (!playerGrid[row][col].hit) {\n\t\t\tplayerGrid[row][col].hit = true;\n\t\t\tlet cell = document.querySelector(\n\t\t\t\t`[data-row=\"${row}\"][data-col=\"${col}\"]`\n\t\t\t);\n\t\t\t_displayController_js__WEBPACK_IMPORTED_MODULE_0__.displayController.updateCellHits(playerGrid, row, col, cell);\n\t\t\tcheckAttack(row, col, playerGrid, _shipsController_js__WEBPACK_IMPORTED_MODULE_1__.playerShips);\n\t\t\tmySound.play().catch((error) => {\n\t\t\t\tconsole.error('Failed to play audio:', error);\n\t\t\t});\n\t\t\tcheckWin();\n\t\t\treturn { row, col };\n\t\t} else {\n\t\t\treturn makeComputerAttack(playerGrid);\n\t\t}\n\t}\n\n\tfunction getRandomCoordinates() {\n\t\tconst row = Math.floor(Math.random() * gridSize);\n\t\tconst col = Math.floor(Math.random() * gridSize);\n\n\t\treturn { row, col };\n\t}\n\n\tfunction checkAttack(row, col, grid, ships) {\n\t\tswitch (grid[row][col].ship) {\n\t\t\tcase 'carrier':\n\t\t\t\tships[0].hit();\n\t\t\t\tbreak;\n\t\t\tcase 'battleship':\n\t\t\t\tships[1].hit();\n\t\t\t\tbreak;\n\t\t\tcase 'cruiser':\n\t\t\t\tships[2].hit();\n\t\t\t\tbreak;\n\t\t\tcase 'submarine':\n\t\t\t\tships[3].hit();\n\t\t\t\tbreak;\n\t\t\tcase 'destroyer':\n\t\t\t\tships[4].hit();\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\tfunction checkWin() {\n\t\tif (_shipsController_js__WEBPACK_IMPORTED_MODULE_1__.playerShips.every((ship) => ship.isSunk)) {\n\t\t\tconsole.log('Computer has won!');\n\t\t\treturn true;\n\t\t} else if (_shipsController_js__WEBPACK_IMPORTED_MODULE_1__.computerShips.every((ship) => ship.isSunk)) {\n\t\t\tconsole.log('You have won');\n\t\t\treturn true;\n\t\t}\n\t\treturn false;\n\t}\n\n\tfunction initiateGameWithRandomShips() {\n\t\tcreateGrid(playerGrid);\n\t\tcreateGrid(computerGrid);\n\t\t_shipsController_js__WEBPACK_IMPORTED_MODULE_1__.shipsController.createRandomShips(computerGrid, _shipsController_js__WEBPACK_IMPORTED_MODULE_1__.computerShips);\n\t}\n\tfunction game() {\n\t\twhile (!checkWin()) {\n\t\t\tmakeAttack(row, col, computerGrid);\n\t\t\tmakeComputerAttack();\n\t\t}\n\t}\n\n\treturn {\n\t\tcreateGrid,\n\t\tmakeAttack,\n\t\tcheckAttack,\n\t\tcheckWin,\n\t\tgetRandomCoordinates,\n\t\tinitiateGameWithRandomShips,\n\t\tmakeComputerAttack,\n\t\tclearGrid,\n\t};\n})();\n\n\n//# sourceURL=webpack://battleship/./src/gameController.js?");

/***/ }),

/***/ "./src/initiator.js":
/*!**************************!*\
  !*** ./src/initiator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _gameHandler_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameHandler.css */ \"./src/gameHandler.css\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameController */ \"./src/gameController.js\");\n/* harmony import */ var _shipsController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipsController */ \"./src/shipsController.js\");\n\n\n\n\n\n\n\n\n\n_gameController__WEBPACK_IMPORTED_MODULE_3__.gameController.initiateGameWithRandomShips();\n_displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.initiateRenderGrid();\n// gameController.game();\n\n\n//# sourceURL=webpack://battleship/./src/initiator.js?");

/***/ }),

/***/ "./src/shipsController.js":
/*!********************************!*\
  !*** ./src/shipsController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship),\n/* harmony export */   computerShips: () => (/* binding */ computerShips),\n/* harmony export */   playerShips: () => (/* binding */ playerShips),\n/* harmony export */   shipsController: () => (/* binding */ shipsController)\n/* harmony export */ });\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController */ \"./src/gameController.js\");\n\n\n\nclass Ship {\n\tconstructor(name, length, hp) {\n\t\tthis.name = name;\n\t\tthis.length = length;\n\t\tthis.hp = hp;\n\t\tthis.isSunk = false;\n\t}\n\n\thit() {\n\t\tthis.hp--;\n\t\tif (this.hp === 0) {\n\t\t\tthis.isSunk = true;\n\t\t}\n\t}\n\tstatic createCarrier() {\n\t\treturn new Ship('carrier', 5, 5);\n\t}\n\n\tstatic createBattleship() {\n\t\treturn new Ship('battleship', 4, 4);\n\t}\n\n\tstatic createCruiser() {\n\t\treturn new Ship('cruiser', 3, 3);\n\t}\n\n\tstatic createSubmarine() {\n\t\treturn new Ship('submarine', 3, 3);\n\t}\n\n\tstatic createDestroyer() {\n\t\treturn new Ship('destroyer', 2, 2);\n\t}\n}\n\nconst playerShips = [\n\tShip.createCarrier(),\n\tShip.createBattleship(),\n\tShip.createCruiser(),\n\tShip.createSubmarine(),\n\tShip.createDestroyer(),\n];\n\nconst computerShips = [\n\tShip.createCarrier(),\n\tShip.createBattleship(),\n\tShip.createCruiser(),\n\tShip.createSubmarine(),\n\tShip.createDestroyer(),\n];\n\nconst shipsController = (() => {\n\tfunction playerSelfShipPlacement(ship, row, col, orientation, grid) {\n\t\tif (canPlaceShip(ship, row, col, orientation, grid)) {\n\t\t\tplaceShip(ship, row, col, orientation, grid);\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\tfunction placeShip(shipType, row, col, orientation, grid) {\n\t\tconst shipSize = shipType.length;\n\t\tfor (let i = 0; i < shipSize; i++) {\n\t\t\tif (orientation === 'horizontal') {\n\t\t\t\tif (grid[row] && grid[row][col + i]) {\n\t\t\t\t\tgrid[row][col + i].ship = shipType.name;\n\t\t\t\t} else {\n\t\t\t\t\tconsole.log('Invalid cell:', row, col + i);\n\t\t\t\t}\n\t\t\t} else if (orientation === 'vertical') {\n\t\t\t\tif (grid[row + i] && grid[row + i][col]) {\n\t\t\t\t\tgrid[row + i][col].ship = shipType.name;\n\t\t\t\t} else {\n\t\t\t\t\tconsole.log('Invalid cell:', row + i, col);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction canPlaceShip(ship, row, col, orientation, grid) {\n\t\tconst gridSize = grid.length;\n\t\tconst shipSize = ship.length;\n\n\t\tif (orientation === 'horizontal' && col + shipSize > gridSize) {\n\t\t\treturn false;\n\t\t} else if (orientation === 'vertical' && row + shipSize > gridSize) {\n\t\t\treturn false;\n\t\t}\n\n\t\tfor (let i = -1; i <= shipSize; i++) {\n\t\t\tfor (let j = -1; j <= 1; j++) {\n\t\t\t\tif (\n\t\t\t\t\torientation === 'horizontal' &&\n\t\t\t\t\tgrid[row + j] &&\n\t\t\t\t\tgrid[row + j][col + i] &&\n\t\t\t\t\tgrid[row + j][col + i].ship !== null\n\t\t\t\t) {\n\t\t\t\t\treturn false;\n\t\t\t\t} else if (\n\t\t\t\t\torientation === 'vertical' &&\n\t\t\t\t\tgrid[row + i] &&\n\t\t\t\t\tgrid[row + i][col + j] &&\n\t\t\t\t\tgrid[row + i][col + j].ship !== null\n\t\t\t\t) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn true;\n\t}\n\n\tfunction createRandomShips(grid, ships) {\n\t\tships.forEach((ship) => {\n\t\t\tlet random;\n\t\t\tlet placed = false;\n\t\t\twhile (!placed) {\n\t\t\t\trandom = _gameController__WEBPACK_IMPORTED_MODULE_1__.gameController.getRandomCoordinates();\n\t\t\t\tconst orientation =\n\t\t\t\t\tMath.random() < 0.5 ? 'horizontal' : 'vertical';\n\t\t\t\tif (\n\t\t\t\t\tcanPlaceShip(\n\t\t\t\t\t\tship,\n\t\t\t\t\t\trandom.row,\n\t\t\t\t\t\trandom.col,\n\t\t\t\t\t\torientation,\n\t\t\t\t\t\tgrid\n\t\t\t\t\t)\n\t\t\t\t) {\n\t\t\t\t\tplaceShip(ship, random.row, random.col, orientation, grid);\n\t\t\t\t\tplaced = true;\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\tlet radnomizeBtnClicked = false;\n\n\tfunction getRandomizeStatus() {\n\t\treturn radnomizeBtnClicked;\n\t}\n\n\tconst randomShipsBtn = document.querySelector('#random-ships-button');\n\trandomShipsBtn.addEventListener('click', () => {\n\t\t_gameController__WEBPACK_IMPORTED_MODULE_1__.playerGrid.innerHTML = '';\n\t\t_gameController__WEBPACK_IMPORTED_MODULE_1__.gameController.createGrid(_gameController__WEBPACK_IMPORTED_MODULE_1__.playerGrid);\n\t\tcreateRandomShips(_gameController__WEBPACK_IMPORTED_MODULE_1__.playerGrid, playerShips);\n\t\t_displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.renderGrid(_gameController__WEBPACK_IMPORTED_MODULE_1__.playerGrid, 'player-grid');\n\t\tradnomizeBtnClicked = true;\n\t});\n\n\tlet dragged = null;\n\tlet draggedElement = null;\n\tlet shipDragged = 0;\n\n\tconst draggables = document.querySelectorAll('.draggable');\n\n\tfunction getDraggables() {\n\t\tif (shipDragged < 5) {\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n\n\tdraggables.forEach((draggable) => {\n\t\tdraggable.addEventListener('dragstart', (e) => {\n\t\t\tdraggedElement = e.target;\n\n\t\t\tif (e.target.classList.contains('draggable')) {\n\t\t\t\tswitch (true) {\n\t\t\t\t\tcase e.target.classList.contains('ship-carrier'):\n\t\t\t\t\t\tdragged = playerShips[0];\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase e.target.classList.contains('ship-battleship'):\n\t\t\t\t\t\tdragged = playerShips[1];\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase e.target.classList.contains('ship-cruiser'):\n\t\t\t\t\t\tdragged = playerShips[2];\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase e.target.classList.contains('ship-submarine'):\n\t\t\t\t\t\tdragged = playerShips[3];\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase e.target.classList.contains('ship-destroyer'):\n\t\t\t\t\t\tdragged = playerShips[4];\n\t\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t});\n\n\tconst playerGridDiv = document.querySelector('.player-grid');\n\tconst computerGridDiv = document.querySelector('.computer-grid');\n\n\tplayerGridDiv.addEventListener('dragover', (e) => {\n\t\te.preventDefault();\n\t\tconst cell = e.target.closest('.cell');\n\t\tif (cell) {\n\t\t\tconst row = parseInt(cell.dataset.row);\n\t\t\tconst col = parseInt(cell.dataset.col);\n\t\t\tconst orientation = document.querySelector('.chosen').id;\n\t\t\tconst shipLength = dragged.length;\n\n\t\t\tdocument.querySelectorAll('.cell').forEach((c) => {\n\t\t\t\tc.style.border = '';\n\t\t\t});\n\n\t\t\tlet validPlacement = canPlaceShip(\n\t\t\t\tdragged,\n\t\t\t\trow,\n\t\t\t\tcol,\n\t\t\t\torientation,\n\t\t\t\t_gameController__WEBPACK_IMPORTED_MODULE_1__.playerGrid\n\t\t\t);\n\n\t\t\tif (validPlacement) {\n\t\t\t\tif (orientation === 'vertical') {\n\t\t\t\t\tfor (let i = 0; i < shipLength; i++) {\n\t\t\t\t\t\tconst nextCell = document.querySelector(\n\t\t\t\t\t\t\t`[data-row=\"${row + i}\"][data-col=\"${col}\"]`\n\t\t\t\t\t\t);\n\t\t\t\t\t\tif (nextCell) {\n\t\t\t\t\t\t\tnextCell.style.border = '2px solid green';\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tfor (let i = 0; i < shipLength; i++) {\n\t\t\t\t\t\tconst nextCell = document.querySelector(\n\t\t\t\t\t\t\t`[data-row=\"${row}\"][data-col=\"${col + i}\"]`\n\t\t\t\t\t\t);\n\t\t\t\t\t\tif (nextCell) {\n\t\t\t\t\t\t\tnextCell.style.border = '2px solid green';\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif (orientation === 'vertical') {\n\t\t\t\t\tfor (let i = 0; i < shipLength; i++) {\n\t\t\t\t\t\tconst nextCell = document.querySelector(\n\t\t\t\t\t\t\t`[data-row=\"${row + i}\"][data-col=\"${col}\"]`\n\t\t\t\t\t\t);\n\t\t\t\t\t\tif (nextCell) {\n\t\t\t\t\t\t\tnextCell.style.border = '2px solid red';\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tfor (let i = 0; i < shipLength; i++) {\n\t\t\t\t\t\tconst nextCell = document.querySelector(\n\t\t\t\t\t\t\t`[data-row=\"${row}\"][data-col=\"${col + i}\"]`\n\t\t\t\t\t\t);\n\t\t\t\t\t\tif (nextCell) {\n\t\t\t\t\t\t\tnextCell.style.border = '2px solid red';\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n\n\tplayerGridDiv.addEventListener('dragleave', (e) => {\n\t\tconst cell = e.target.closest('.cell');\n\t\tif (cell) {\n\t\t\tcell.style.border = '';\n\t\t}\n\t});\n\n\tplayerGridDiv.addEventListener('drop', (e) => {\n\t\te.preventDefault();\n\t\tlet orientation = document.querySelector('.chosen').id;\n\t\tconst cell = e.target.closest('.cell');\n\t\tif (cell) {\n\t\t\tif (\n\t\t\t\tplayerSelfShipPlacement(\n\t\t\t\t\tdragged,\n\t\t\t\t\tparseInt(cell.dataset.row),\n\t\t\t\t\tparseInt(cell.dataset.col),\n\t\t\t\t\torientation,\n\t\t\t\t\t_gameController__WEBPACK_IMPORTED_MODULE_1__.playerGrid\n\t\t\t\t)\n\t\t\t) {\n\t\t\t\tshipDragged++;\n\t\t\t\tdraggedElement.parentNode.removeChild(draggedElement);\n\t\t\t}\n\t\t}\n\n\t\t_displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.renderGrid(_gameController__WEBPACK_IMPORTED_MODULE_1__.playerGrid, 'player-grid');\n\t});\n\n\tconst orientationBtns = document.querySelectorAll('.orientation-buttons');\n\n\torientationBtns.forEach((button) => {\n\t\tbutton.addEventListener('click', () => {\n\t\t\torientationBtns.forEach((btn) => btn.classList.remove('chosen'));\n\t\t\tbutton.classList.add('chosen');\n\t\t});\n\t});\n\n\treturn { createRandomShips, getDraggables, getRandomizeStatus };\n})();\n\n\n//# sourceURL=webpack://battleship/./src/shipsController.js?");

/***/ }),

/***/ "./src/fonts/FortunerHeavyPersonalUse.otf":
/*!************************************************!*\
  !*** ./src/fonts/FortunerHeavyPersonalUse.otf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca8361dcc2acb4c9bdb9.otf\";\n\n//# sourceURL=webpack://battleship/./src/fonts/FortunerHeavyPersonalUse.otf?");

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/battleship.png\";\n\n//# sourceURL=webpack://battleship/./src/images/battleship.png?");

/***/ }),

/***/ "./src/images/carrier.png":
/*!********************************!*\
  !*** ./src/images/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/carrier.png\";\n\n//# sourceURL=webpack://battleship/./src/images/carrier.png?");

/***/ }),

/***/ "./src/images/cross.svg":
/*!******************************!*\
  !*** ./src/images/cross.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cross.svg\";\n\n//# sourceURL=webpack://battleship/./src/images/cross.svg?");

/***/ }),

/***/ "./src/images/cruiser.png":
/*!********************************!*\
  !*** ./src/images/cruiser.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cruiser.png\";\n\n//# sourceURL=webpack://battleship/./src/images/cruiser.png?");

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/destroyer.png\";\n\n//# sourceURL=webpack://battleship/./src/images/destroyer.png?");

/***/ }),

/***/ "./src/images/dot.svg":
/*!****************************!*\
  !*** ./src/images/dot.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/dot.svg\";\n\n//# sourceURL=webpack://battleship/./src/images/dot.svg?");

/***/ }),

/***/ "./src/images/sea.jpg":
/*!****************************!*\
  !*** ./src/images/sea.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/sea.jpg\";\n\n//# sourceURL=webpack://battleship/./src/images/sea.jpg?");

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/submarine.png\";\n\n//# sourceURL=webpack://battleship/./src/images/submarine.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/initiator.js");
/******/ 	
/******/ })()
;