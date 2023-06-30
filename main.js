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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  margin: 0px;\\n \\n}\\nbody{\\n  display: grid;\\n  height:100vh;\\n  grid-template-columns: repeat(5,1fr);\\n  grid-template-rows: repeat(10,1fr);\\n  column-gap: 20px;\\n}\\n\\n.header{\\n  background-color: rgba(248, 96, 96, 1);\\n  grid-column:1/6;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-style: italic;\\n  font-size:40px;\\n  font-weight: 800;\\n  color: rgba(255, 255, 255, 1);\\n}\\n\\n.sidebar{\\n  grid-column: 1/2;\\n  grid-row: 2/11;\\n  background-color: rgba(240, 240, 240, 1);\\n  display:flex;\\n  flex-direction: column;\\n  padding-top:41px;\\n  padding-left:34px;\\n  color:black;\\n}\\n\\n.main{\\n  grid-area: 2/2/11/6;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 41px;\\n  padding-left: 205px;\\n  padding-right: 331px;\\n}\\n\\n.mainTitle,.task{\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-size: 24px;\\n  font-weight: 800;\\n}\\n.taskContainer{\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.addnewtask{\\n  width: 100%;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  margin-top:16px;\\n  color:rgba(109, 109, 109, 1);\\n}\\n.mainTitle{\\n  margin-bottom:73px;\\n}\\n.sortBtn{\\n  display: flex;\\n  align-items: center;\\n  font-size: 20px;\\n  font-weight:400;\\n}\\n.sdt{\\n  height:38px;\\n  width:250px;\\n  font-size: 24px;\\n  font-weight: 600;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n.task{\\n  margin-bottom: 16px;\\n  display: flex;\\n  align-items: center;\\n  font-size:16px;\\n  font-weight: 400;\\n  border-bottom: solid rgba(184, 184, 184, 1) 1px;\\n}\\n.statusBtn{\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 100%;\\n  background-color: white;\\n  border: 1px solid rgba(0, 0, 0, 0.227);\\n  margin-right:10px;\\n}\\n.statusBtn:hover,.dueDate:hover,.editTask:hover,.sortImg:hover,.plus:hover,\\n.pickDate:hover,.flag:hover,.addtaskImg:hover{\\n  background-color: rgba(184, 182, 182, 0.268);\\n}\\n.addtaskImg{\\n  margin-right:6px;\\n}\\n.dueDate,.sortImg{\\n  margin-right:16px\\n}\\n.form{\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  margin: 10px;\\n}\\n.taskForm{\\n  display: flex;\\n  width: 100%;\\n  border: 1px solid rgba(174, 174, 174, 1);\\n  border-radius: 10px;\\n}\\n.tname{\\n  border:0px;\\n  padding-left:16px;\\n  color:rgba(109, 109, 109, 1);\\n  font-size:20px;\\n}\\n.taskdesc{\\n  padding-left:16px;\\n  resize:none;\\n  border:0px;\\n  color: rgba(109, 109, 109, 1); \\n  font-size: 16px;\\n  line-height: 19px;\\n}\\n.formFooter{\\n  padding-left:16px;\\n  padding-top:10px;\\n  padding-right:16px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-top: 1px solid rgba(174, 174, 174, 1);\\n}\\n.imgDivs{\\n  display: flex;\\n  justify-content: space-between;\\n  width:67px;\\n}\\n.btnDivs{\\n  width: 206px;\\n  display: flex;\\n  justify-content: space-between;\\n  font-size:16px;\\n}\\n.cancelBtn, .addtaskBtn{\\n  width:95px;\\n  height:24px;\\n  border-radius: 5px;\\n  border: 0px;\\n  font-weight: 600;\\n}\\n.cancelBtn{\\n  background-color: rgba(248, 96, 96, 0.51);\\n  color:white;\\n}\\n.taskdesc:focus,.tname:focus{\\n  outline: 0px;     \\n}\\n\\n.pNames{\\n  margin-top:64px;\\n  font-size:24px;\\n  padding-left: 16px;\\n  padding-right: 20px;\\n}\\n\\n.pdiv{\\n  display: flex;\\n  align-items: center;\\n  height:40px;\\n  padding-left: 16px;\\n  overflow:auto;\\n}\\n.pdiv:hover{\\n  background-color: rgba(184, 182, 182, 0.268);\\n  border-radius: 5px;\\n}\\n.pdiv:focus{\\n  background-color: rgba(184, 182, 182, 0.268);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/common_Assets/imageNode.js":
/*!****************************************!*\
  !*** ./src/common_Assets/imageNode.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ imageNode)\n/* harmony export */ });\n/* eslint-disable require-jsdoc */\nfunction imageNode(imgSrc, imgClassName) {\n  const imgNode = new Image();\n  imgNode.className = imgClassName;\n  imgNode.src = imgSrc;\n  return imgNode;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/common_Assets/imageNode.js?");

/***/ }),

/***/ "./src/common_Assets/projectHeaderNode.js":
/*!************************************************!*\
  !*** ./src/common_Assets/projectHeaderNode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectHeader)\n/* harmony export */ });\n/* harmony import */ var _imageNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageNode */ \"./src/common_Assets/imageNode.js\");\n/* harmony import */ var _images_sort_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/sort.svg */ \"./src/images/sort.svg\");\n/* eslint-disable require-jsdoc */\n\n\n\nfunction projectHeader(title) {\n  const header = document.createElement('div');\n  header.classList.add('mainTitle');\n  header.classList.add(title);\n  const sortBtn = document.createElement('div');\n  sortBtn.className = 'sortBtn';\n  const sortImg = (0,_imageNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_images_sort_svg__WEBPACK_IMPORTED_MODULE_1__, 'sortImg');\n  sortBtn.append(sortImg, document.createTextNode('Sort by priority'));\n  const tNode = document.createElement('div');\n  tNode.classList.add('projNameText');\n  tNode.textContent = title;\n  header.append(tNode, sortBtn);\n  return header;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/common_Assets/projectHeaderNode.js?");

/***/ }),

/***/ "./src/common_Assets/projectNode.js":
/*!******************************************!*\
  !*** ./src/common_Assets/projectNode.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectNode)\n/* harmony export */ });\n/* eslint-disable require-jsdoc */\nfunction projectNode(title) {\n  const pdiv = document.createElement('input');\n  pdiv.type = 'text';\n  pdiv.defaultValue = '• Default';\n  pdiv.maxLength = 20;\n  pdiv.classList.add('pdiv');\n  pdiv.classList.add(title);\n  pdiv.value=title;\n  return pdiv;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/common_Assets/projectNode.js?");

/***/ }),

/***/ "./src/common_Assets/taskFormNode.js":
/*!*******************************************!*\
  !*** ./src/common_Assets/taskFormNode.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskFormNode)\n/* harmony export */ });\n/* harmony import */ var _imageNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageNode */ \"./src/common_Assets/imageNode.js\");\n/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/calendar.svg */ \"./src/images/calendar.svg\");\n/* harmony import */ var _images_flag_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/flag.svg */ \"./src/images/flag.svg\");\n/* eslint-disable require-jsdoc */\n\n\n\nfunction taskFormNode(payload = '') {\n  const taskForm = document.createElement('div');\n  taskForm.classList.add('taskForm');\n\n  const form = document.createElement('form');\n  form.classList.add('form');\n  form.method = 'get';\n\n  const tname = document.createElement('input');\n  tname.classList.add('tname');\n\n  tname.placeholder='Task Name';\n\n  const taskdesc = document.createElement('textarea');\n  taskdesc.classList.add('taskdesc');\n  taskdesc.placeholder='Description';\n  if (payload!='') {\n    tname.defaultValue = payload[0];\n    taskdesc.defaultValue = payload[1];\n  }\n  const imgDivs = document.createElement('div');\n  imgDivs.classList.add('imgDivs');\n  const pickDate = (0,_imageNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_images_calendar_svg__WEBPACK_IMPORTED_MODULE_1__, 'pickDate');\n  const flag = (0,_imageNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_images_flag_svg__WEBPACK_IMPORTED_MODULE_2__, 'flag');\n  imgDivs.append(pickDate, flag);\n\n  const btnDivs = document.createElement('div');\n  btnDivs.classList.add('btnDivs');\n  const cancelBtn = document.createElement('button');\n  cancelBtn.type = 'button';\n  cancelBtn.textContent = 'Cancel';\n  const addtaskBtn = document.createElement('button');\n  addtaskBtn.type = 'button';\n  cancelBtn.classList.add('cancelBtn');\n  addtaskBtn.textContent = 'Add Task';\n  addtaskBtn.classList.add('addtaskBtn');\n  btnDivs.append(cancelBtn, addtaskBtn);\n\n  const formFooter = document.createElement('div');\n  formFooter.classList.add('formFooter');\n  formFooter.append(imgDivs, btnDivs);\n\n  form.append(tname, taskdesc, formFooter);\n  taskForm.appendChild(form);\n  return taskForm;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/common_Assets/taskFormNode.js?");

/***/ }),

/***/ "./src/common_Assets/taskNode.js":
/*!***************************************!*\
  !*** ./src/common_Assets/taskNode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskNode)\n/* harmony export */ });\n/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/calendar.svg */ \"./src/images/calendar.svg\");\n/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/edit.svg */ \"./src/images/edit.svg\");\n/* harmony import */ var _imageNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageNode */ \"./src/common_Assets/imageNode.js\");\n/* eslint-disable require-jsdoc */\n\n\n\n\nfunction taskNode(tname, tdesc = '') {\n  const task = document.createElement('div');\n  task.classList.add('task');\n  const imgAction = document.createElement('div');\n  imgAction.className = 'imgAction';\n\n  const taskMeta = document.createElement('div');\n  taskMeta.className = 'taskMeta';\n\n  const edit = (0,_imageNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_images_edit_svg__WEBPACK_IMPORTED_MODULE_1__, 'editTask');\n  const calendar = (0,_imageNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_images_calendar_svg__WEBPACK_IMPORTED_MODULE_0__, 'dueDate');\n\n  const statusBtn = document.createElement('button');\n  statusBtn.classList.add('statusBtn');\n  const taskName = document.createTextNode(tname);\n\n  taskMeta.append(statusBtn, taskName);\n  imgAction.append(calendar, edit);\n\n  task.appendChild(taskMeta);\n  task.appendChild(imgAction);\n  return task;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/common_Assets/taskNode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_loaders_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_loaders/main */ \"./src/ui_loaders/main.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_loaders_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_loaders/sidebar.js */ \"./src/ui_loaders/sidebar.js\");\n/* harmony import */ var _common_Assets_taskFormNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common_Assets/taskFormNode */ \"./src/common_Assets/taskFormNode.js\");\n/* harmony import */ var _common_Assets_taskNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common_Assets/taskNode */ \"./src/common_Assets/taskNode.js\");\n/* harmony import */ var _common_Assets_projectNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common_Assets/projectNode */ \"./src/common_Assets/projectNode.js\");\n/* harmony import */ var _common_Assets_projectHeaderNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common_Assets/projectHeaderNode */ \"./src/common_Assets/projectHeaderNode.js\");\n/* harmony import */ var _pubsub_parts_Event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pubsub_parts/Event */ \"./src/pubsub_parts/Event.js\");\n/* harmony import */ var _pubsub_parts_callbacks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pubsub_parts/callbacks */ \"./src/pubsub_parts/callbacks.js\");\n/* eslint-disable max-len */\n/* eslint-disable no-unused-vars */\n/* eslint-disable require-jsdoc */\n\n\n\n\n\n\n\n\n\n\n\nconst loadpage = ((sidebarLoader, mainLoader)=> {\n  const content = document.querySelector('body');\n  const header = document.createElement('div');\n  header.className = 'header';\n  header.textContent = 'ToDo';\n  const sidebar = document.createElement('div');\n  sidebar.className = 'sidebar';\n  const main = document.createElement('div');\n  main.className = 'main';\n\n  content.appendChild(header);\n  content.appendChild(sidebar);\n  content.appendChild(main);\n  sidebarLoader(sidebar);\n  mainLoader(main);\n})(_ui_loaders_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.sidebarLoader, _ui_loaders_main__WEBPACK_IMPORTED_MODULE_0__.mainLoader);\n\nconst events = new _pubsub_parts_Event__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\nevents.subscribe('addTask', _pubsub_parts_callbacks__WEBPACK_IMPORTED_MODULE_8__.addTaskHandler);\nevents.subscribe('editTask', _pubsub_parts_callbacks__WEBPACK_IMPORTED_MODULE_8__.editTaskHandler);\nevents.subscribe('deleteTask', _pubsub_parts_callbacks__WEBPACK_IMPORTED_MODULE_8__.deleteTaskHandler);\nevents.subscribe('addProject', _pubsub_parts_callbacks__WEBPACK_IMPORTED_MODULE_8__.addProjectHandler);\nevents.subscribe('projSwitch', _pubsub_parts_callbacks__WEBPACK_IMPORTED_MODULE_8__.projSwitchHandler);\n\nconst taskBtn = document.querySelector('.addtaskImg');\ntaskBtn.addEventListener('click', ()=> {\n  events.publish('addTask');\n});\n\n\nconst newProjBtn = document.querySelector('.plus');\nconst defaultpdiv = document.querySelector('.pdiv');\nconst projNameText = document.querySelector('.projNameText');\ndefaultpdiv.addEventListener('input', ()=>{\n  projNameText.textContent = defaultpdiv.value;\n});\n\n// update project Name in header\nconst taskContainer = document.querySelector('.taskContainer');\ntaskContainer.addEventListener('click', (e)=> {\n  if (e.target.matches('.statusBtn')) {\n    events.publish('deleteTask', e);\n  } else if (e.target.matches('.editTask')) {\n    events.publish('editTask', e);\n  }\n});\nconst projContainer = document.querySelector('.pNames');\nprojContainer.addEventListener('click', (e)=>{\n  if (e.target.classList.contains('pdiv')) {\n    const currProj = e.target;\n    const index = parseInt(e.target.classList[2]);\n    events.publish('projSwitch', [currProj, index]);\n  }\n});\n\nprojContainer.addEventListener('input', (e)=>{\n  if (e.target.classList.contains('pdiv')) {\n    const currProj = e.target;\n    const projNameText = document.querySelector('.projNameText');\n    projNameText.textContent = currProj.value;\n  }\n});\nnewProjBtn.addEventListener('click', ()=>{\n  events.publish('addProject');\n});\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/pubsub_parts/Event.js":
/*!***********************************!*\
  !*** ./src/pubsub_parts/Event.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Event)\n/* harmony export */ });\n/* eslint-disable require-jsdoc */\nclass Event {\n  constructor() {\n    this.events = {};\n  }\n\n  subscribe(eventName, cbFn) {\n    this.events[eventName] = this.events[eventName] || [];\n    this.events[eventName].push(cbFn);\n  }\n\n  unsubscribe(eventName, cbFn) {\n    if (this.events[eventName]) {\n      for (let i = 0; i<this.events[eventName].length; i++) {\n        if (this.events[eventName][i] === cbFn) {\n          this.events[eventName].splice(i, 1);\n          break;\n        }\n      }\n    }\n  }\n\n  publish(eventName, data = '') {\n    if (this.events[eventName]) {\n      this.events[eventName].forEach(function(fn) {\n        fn(data);\n      });\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/pubsub_parts/Event.js?");

/***/ }),

/***/ "./src/pubsub_parts/callbacks.js":
/*!***************************************!*\
  !*** ./src/pubsub_parts/callbacks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectHandler\": () => (/* binding */ addProjectHandler),\n/* harmony export */   \"addTaskHandler\": () => (/* binding */ addTaskHandler),\n/* harmony export */   \"deleteTaskHandler\": () => (/* binding */ deleteTaskHandler),\n/* harmony export */   \"editTaskHandler\": () => (/* binding */ editTaskHandler),\n/* harmony export */   \"projSwitchHandler\": () => (/* binding */ projSwitchHandler)\n/* harmony export */ });\n/* harmony import */ var _common_Assets_taskFormNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common_Assets/taskFormNode */ \"./src/common_Assets/taskFormNode.js\");\n/* harmony import */ var _common_Assets_taskNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common_Assets/taskNode */ \"./src/common_Assets/taskNode.js\");\n/* harmony import */ var _common_Assets_projectNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common_Assets/projectNode */ \"./src/common_Assets/projectNode.js\");\n/* harmony import */ var _common_Assets_projectHeaderNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common_Assets/projectHeaderNode */ \"./src/common_Assets/projectHeaderNode.js\");\n/* eslint-disable max-len */\n/* eslint-disable require-jsdoc */\n\n\n\n\nlet pi = 0;\nlet ti = 0;\n// const existingTasks = [];\nconst existingProjects = [];\nlet taskFormFlag = false;\nlet projectIndex = 0;\n\n\nclass Task {\n  constructor(title, description, projectIndex, taskIndex) {\n    this.title = title;\n    this.description = description;\n    this.projectIndex = projectIndex;\n    this.taskIndex = taskIndex;\n  }\n}\nclass Project {\n  constructor(projectIndex, tasks) {\n    this.projectIndex = projectIndex;\n    this.tasks = tasks;\n  }\n}\nfunction makeDefaultProj() {\n  if (pi==0) {\n    existingProjects.push(new Project(pi, []));\n    console.log('added default proj');\n  }\n};\nmakeDefaultProj();\nconst addTaskHandler = ()=> {\n  if (!taskFormFlag) {\n    const taskContainer = document.querySelector('.taskContainer');\n    const newTask = (0,_common_Assets_taskFormNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    taskContainer.appendChild(newTask);\n    taskFormFlag = true;\n\n    const cancelBtn = document.querySelector('.cancelBtn');\n    cancelBtn.addEventListener('click', ()=> {\n      taskFormFlag = false;\n      newTask.remove();\n    });\n    const addTaskBtn = document.querySelector('.addtaskBtn');\n    addTaskBtn.addEventListener('click', ()=> {\n      const inputName = document.querySelector('.tname').value;\n      const inputDesc = document.querySelector('.taskdesc').value;\n      const task = new Task(inputName, inputDesc, pi, ti);\n      existingProjects[projectIndex].tasks.push(task);\n      ti++;\n      localStorage.setItem('existingProjects', JSON.stringify(existingProjects));\n      // console.log(JSON.parse(localStorage.getItem('existingTasks')));\n      const tnode = (0,_common_Assets_taskNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task.title);\n      newTask.remove();\n      taskFormFlag = false;\n      taskContainer.appendChild(tnode);\n    });\n  }\n};\n\nconst deleteTaskHandler = (e) => {\n  const deletedNode = e.target.parentElement.parentElement;\n  const taskContainer = document.querySelector('.taskContainer');\n  const childNodes = taskContainer.childNodes;\n  let j = 0;\n  const currProject = JSON.parse(localStorage.getItem('existingProjects'))[projectIndex];\n  for (let i = 0; i< childNodes.length; i++) {\n    const childNode = childNodes[i];\n    if (childNode=== deletedNode) {\n      currProject.tasks.splice(i, 1);\n      console.log('in deleted Node');\n      continue;\n    }\n    currProject.tasks[j].taskIndex = j;\n    console.log(j);\n    j++;\n  }\n  existingProjects[projectIndex] = currProject;\n  localStorage.setItem('existingProjects', JSON.stringify(existingProjects));\n  e.target.parentElement.parentElement.remove();\n};\n\nconst editTaskHandler = (e) => {\n  const editedNode = e.target.parentElement.parentElement;\n  const taskContainer = document.querySelector('.taskContainer');\n  const childNodes = taskContainer.childNodes;\n  let taskIndex;\n\n  for (let i = 0; i< childNodes.length; i++) {\n    const childNode = childNodes[i];\n    if (childNode === editedNode) {\n      taskIndex = i;\n      console.log('in edited Node');\n      break;\n    }\n  }\n  const target = existingProjects[projectIndex].tasks[taskIndex];\n  const editForm = (0,_common_Assets_taskFormNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([target.title, target.description]);\n  taskContainer.appendChild(editForm);\n\n  const cancelBtn = document.querySelector('.cancelBtn');\n  cancelBtn.addEventListener('click', ()=> {\n    editForm.remove();\n    taskFormFlag = false;\n  });\n  const addTaskBtn = document.querySelector('.addtaskBtn');\n  addTaskBtn.addEventListener('click', ()=> {\n    taskFormFlag = true;\n    const inputName = document.querySelector('.tname').value;\n    const inputDesc = document.querySelector('.taskdesc').value;\n    const task = new Task(inputName, inputDesc, pi, ti);\n    const tnode = (0,_common_Assets_taskNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task.title);\n    // taskContainer.replaceChild(task, editedNode);\n    taskContainer.replaceChild(tnode, editedNode);\n    existingProjects[projectIndex].tasks[taskIndex] = task;\n    localStorage.setItem('existingProjects', JSON.stringify(existingProjects));\n    editForm.remove();\n  });\n};\n\nconst addProjectHandler = ()=> {\n  pi++;\n  projectIndex = pi;\n  existingProjects.push(new Project(pi, []));\n  const projContainer = document.querySelector('.pNames');\n  const main = document.querySelector('.main');\n  const mainTitle = document.querySelector('.mainTitle');\n  const newProj = (0,_common_Assets_projectNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`Default${pi}`);\n  newProj.classList.add(`${pi}`);\n  const newProjHeader = (0,_common_Assets_projectHeaderNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(`Default${pi}`);\n  const projNameText = document.querySelector('.projNameText');\n  projNameText.classList.add(pi);\n  ti = 0;\n  // now replace sidebar and main area\n  const taskContainer = document.querySelector('.taskContainer');\n  taskContainer.replaceChildren();\n  main.replaceChild(newProjHeader, mainTitle);\n  // now add the new projectTitle\n  projContainer.append(newProj);\n};\n\nconst projSwitchHandler = (data)=> {\n  const projNameText = document.querySelector('.projNameText');\n  const taskContainer = document.querySelector('.taskContainer');\n  projNameText.textContent = data[0].value;\n  taskContainer.replaceChildren();\n  projectIndex = data[1];\n  console.log(projectIndex);\n  const temp = JSON.parse(localStorage.getItem('existingProjects'))[projectIndex].tasks;\n  temp.forEach((task) => {\n    taskContainer.appendChild((0,_common_Assets_taskNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task.title));\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/pubsub_parts/callbacks.js?");

/***/ }),

/***/ "./src/ui_loaders/main.js":
/*!********************************!*\
  !*** ./src/ui_loaders/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainLoader\": () => (/* binding */ mainLoader)\n/* harmony export */ });\n/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/plus.svg */ \"./src/images/plus.svg\");\n/* harmony import */ var _common_Assets_imageNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common_Assets/imageNode */ \"./src/common_Assets/imageNode.js\");\n/* harmony import */ var _common_Assets_taskNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common_Assets/taskNode */ \"./src/common_Assets/taskNode.js\");\n/* harmony import */ var _common_Assets_taskFormNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common_Assets/taskFormNode */ \"./src/common_Assets/taskFormNode.js\");\n/* harmony import */ var _common_Assets_projectHeaderNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common_Assets/projectHeaderNode */ \"./src/common_Assets/projectHeaderNode.js\");\n/* eslint-disable require-jsdoc */\n\n\n\n\n\n\nfunction mainLoader(main) {\n  const defaultTitle = (0,_common_Assets_projectHeaderNode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('Default');\n  const taskContainer = document.createElement('div');\n  taskContainer.classList.add('taskContainer');\n  taskContainer.className = 'taskContainer';\n\n  const defaultTask = (0,_common_Assets_taskNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Default');\n  const task2 = (0,_common_Assets_taskNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('task2');\n  const tform = (0,_common_Assets_taskFormNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const addNewTask = document.createElement('div');\n  addNewTask.className = 'addnewtask';\n  const addtaskImg = (0,_common_Assets_imageNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_images_plus_svg__WEBPACK_IMPORTED_MODULE_0__, 'addtaskImg');\n  addNewTask.append(addtaskImg, document.createTextNode('Add Task'));\n\n  main.append(defaultTitle, taskContainer, addNewTask);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/ui_loaders/main.js?");

/***/ }),

/***/ "./src/ui_loaders/sidebar.js":
/*!***********************************!*\
  !*** ./src/ui_loaders/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sidebarLoader\": () => (/* binding */ sidebarLoader)\n/* harmony export */ });\n/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/plus.svg */ \"./src/images/plus.svg\");\n/* harmony import */ var _images_group_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/group.svg */ \"./src/images/group.svg\");\n/* harmony import */ var _common_Assets_imageNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common_Assets/imageNode */ \"./src/common_Assets/imageNode.js\");\n/* harmony import */ var _common_Assets_projectNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common_Assets/projectNode */ \"./src/common_Assets/projectNode.js\");\n/* eslint-disable require-jsdoc */\n\n\n\n\nfunction sidebarLoader(sidebar) {\n  const group = (0,_common_Assets_imageNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_images_group_svg__WEBPACK_IMPORTED_MODULE_1__, 'group');\n  const plus = (0,_common_Assets_imageNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_images_plus_svg__WEBPACK_IMPORTED_MODULE_0__, 'plus');\n  const sidebarTitle = document.createElement('div');\n  sidebarTitle.className = 'sdt';\n  sidebarTitle.append(group, document.createTextNode('Projects'), plus);\n  const pNames = document.createElement('div');\n  pNames.classList.add('pNames');\n  const x = (0,_common_Assets_projectNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Default');\n  x.classList.add('0');\n  pNames.append(x);\n  sidebar.append(sidebarTitle, pNames);\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/ui_loaders/sidebar.js?");

/***/ }),

/***/ "./src/images/calendar.svg":
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dfcd1d2c94cb1ff030c6.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/calendar.svg?");

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9227fc0d0d6e6776d4e8.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/edit.svg?");

/***/ }),

/***/ "./src/images/flag.svg":
/*!*****************************!*\
  !*** ./src/images/flag.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc9b7b1e829bfe40fc35.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/flag.svg?");

/***/ }),

/***/ "./src/images/group.svg":
/*!******************************!*\
  !*** ./src/images/group.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56df518f74b0b1608042.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/group.svg?");

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b470bae29880d2a7e7d.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/plus.svg?");

/***/ }),

/***/ "./src/images/sort.svg":
/*!*****************************!*\
  !*** ./src/images/sort.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"454a8423524d6dfa4c62.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/sort.svg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;