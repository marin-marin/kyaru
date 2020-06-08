/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/kyaru.css":
/*!**************************!*\
  !*** ./assets/kyaru.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js??ref--5-1!./kyaru.css */ \"./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js?!./assets/kyaru.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./assets/kyaru.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _kyaru = __webpack_require__(/*! ./src/kyaru */ \"./src/kyaru.js\");\n\nvar _kyaru2 = _interopRequireDefault(_kyaru);\n\n__webpack_require__(/*! ./assets/kyaru.css */ \"./assets/kyaru.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _kyaru2.default)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js?!./assets/kyaru.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js??ref--5-1!./assets/kyaru.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".A35RjmtjO1dc3g7YjkyJa {\\r\\n  display: flex;\\r\\n}\\r\\n.DGjEKEIPaopoIrgXI497E {\\r\\n  flex: 1;\\r\\n}\\r\\n._1tL_oDSRzxi8NXGyElToP8 {\\r\\n  flex-basis: 120px;\\r\\n  text-align: center;\\r\\n}\\r\\n._3EEDFEgIf1ObHJbPG6DZ9 {\\r\\n  border: 1px solid #c15aee;\\r\\n  background: #ac73c5;\\r\\n  color: #fff;\\r\\n  cursor: pointer;\\r\\n  transition: background .3s;\\r\\n}\\r\\n._3EEDFEgIf1ObHJbPG6DZ9:hover {\\r\\n  background: #c746ff;\\r\\n}\\r\\n._1_n0NTZ6tEX4HEn9ybOW_u {\\r\\n  overflow: hidden;\\r\\n  padding: 20px 5px;\\r\\n}\\r\\n\\r\\n._1ZczpaVgmd8z5ZziMnxF0M {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n._2Ye1KDC-5Nq2QhPR0KUcG3 {\\r\\n  display: block;\\r\\n  width: 96vw;\\r\\n  height: 2.5rem;\\r\\n  line-height: 2.5rem;\\r\\n  margin: 20px auto;\\r\\n  border: 1px solid #c15aee;\\r\\n  background: #ac73c5;\\r\\n  color: #fff;\\r\\n  cursor: pointer;\\r\\n  transition: background .3s;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"row-1\": \"A35RjmtjO1dc3g7YjkyJa\",\n\t\"victim-field\": \"DGjEKEIPaopoIrgXI497E\",\n\t\"finish-field\": \"_1tL_oDSRzxi8NXGyElToP8\",\n\t\"finish-btn\": \"_3EEDFEgIf1ObHJbPG6DZ9\",\n\t\"kyaru-heads\": \"_1_n0NTZ6tEX4HEn9ybOW_u\",\n\t\"need-more-btn\": \"_1ZczpaVgmd8z5ZziMnxF0M\",\n\t\"finish-btn--mobile\": \"_2Ye1KDC-5Nq2QhPR0KUcG3\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./assets/kyaru.css?./node_modules/_css-loader@3.5.3@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.5.3@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/kyaru.js":
/*!**********************!*\
  !*** ./src/kyaru.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var flipIcon = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABWklEQVRYR+3XPUsdURDG8d/9CFa+VIKCjWCVRkU0kEIF0YQUdnZJaWVjYz5BSiGNvTYWgoWIIpgyhWjANJYBbS0tZOBcOCy73vV60cI9MCx7ds48f55TzGzLG6/WG+trAMocWMUfXPfwegbwBVc4zesWAX5iPSWc4TjFeRcww/iMFUxn58fwr/1eBDjBbInY3wwmoO4rgKL4YoqPFTlzuQtVAD/wCZMlRW6xj2/ZtylsYKmGU7UBtjCBhQQTB/MVAL/Sxi6+1hCPlGcBFGvOINyJa4pnQMaquroyphcB5GINQONA40DjQOPA+3NgBB9SG36VZhStNgTz6MvaW96Ot/G9l+34IAn3lxT9jaOsFUdK5G1iHqMdQGq142KNGCQDKoQvOggERDvKYJ4EWMNOEgjRPRzipqa9xbQY6ZbTYNqGGcL/qqE09gfxgLsuRauOjeOy+LH5M2oceAQNmIwhbwQKzQAAAABJRU5ErkJggg==\";\n  var deleteIcon = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABNElEQVRYR+2XsU4CQRCGv2t5AzttKOzsTZSWBzBQKZVPQK3WPAGVUkl4AFo0oaezoIGON6DFTLJnjsnt7Q135ih2utvbmf/LP7mdvYSGIzlB/xp4AO5U7jcwA34sNU8BeAeePCIfwOA/AS6BjRP4UkL37vkK2JaFsDogIgtXvAOkEL71IMfZAYyBdgA7tdrXAr2uy62B53RRO3AIelbPhj/dswMo04KqHhS2oGpxc771KzALhBJ8AF1gGEo2vh8Bc53jA3gFXowCoe1vgNQ9ighgdUCGzMR5qFskFks8AjK0dNTSAjlmZQhJyFDKHst561mICBAdiA5EB2pxoPGTMDTxit6bHOgBn1XUcnL7wLTsOG4BS+CmJogVcAvsywLIvgt3f9c/oVYm+WmVy+4uL7HxO+EvDoFqIaO0EOIAAAAASUVORK5CYII=\";\n  var flipImg = document.createElement('img');\n  flipImg.src = flipIcon;\n  var delImg = document.createElement('img');\n  delImg.src = deleteIcon;\n  fabric.Object.prototype.controls.flipY = new fabric.Control({\n    position: {\n      x: -0.4,\n      y: -0.6\n    },\n    cursorStyle: 'pointer',\n    mouseUpHandler: flipObject,\n    render: renderIcon(flipImg),\n    cornerSize: 24\n  });\n  fabric.Object.prototype.controls.deleteControl = new fabric.Control({\n    position: {\n      x: 0.4,\n      y: -0.6\n    },\n    cursorStyle: 'pointer',\n    mouseUpHandler: deleteObject,\n    render: renderIcon(delImg),\n    cornerSize: 24\n  });\n\n  function deleteObject(eventData, target) {\n    var canvas = target.canvas;\n    canvas.remove(target);\n    canvas.requestRenderAll();\n  }\n\n  function flipObject(eventData, target) {\n    var canvas = target.canvas;\n    target.flipX = !target.flipX;\n    canvas.requestRenderAll();\n  }\n\n  function renderIcon(icon) {\n    return function renderIcon(ctx, left, top, styleOverride, fabricObject) {\n      var size = this.cornerSize;\n      ctx.save();\n      ctx.translate(left, top);\n      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));\n      ctx.drawImage(icon, -size / 2, -size / 2, size, size);\n      ctx.restore();\n    };\n  }\n\n  new Vue({\n    el: '#kyaru',\n    data: function data() {\n      return {\n        heads: Array.from([].concat(_toConsumableArray(new Array(39))).keys()),\n        img: null,\n        draggingImg: null,\n        canvas: document.querySelector('canvas'),\n        ctx: document.querySelector('canvas').getContext('2d'),\n        fabricCanvas: null,\n        fabImg: null,\n        headImg: null,\n        isMobile: /iphone|ipod|ipad|android/.test(navigator.userAgent.toLowerCase()),\n        showMoreHead: false,\n        mobileCanvasWidth: document.body.clientWidth - 30\n      };\n    },\n    mounted: function mounted() {\n      this.fabricCanvas = new fabric.Canvas('canvas');\n      this.fabricCanvas.selection = false;\n    },\n    methods: {\n      fileUploaded: function fileUploaded(e) {\n        var _this = this;\n\n        var file = document.querySelector('#selector').files[0];\n\n        if (!~file.type.indexOf('image/')) {\n          return alert('请选择受害者的图片');\n        }\n\n        this.fabricCanvas.clear();\n        setTimeout(function () {\n          var fr = new FileReader();\n\n          fr.onload = function () {\n            var img = new Image();\n            img.src = fr.result;\n            img.setAttribute('crossOrigin', 'anonymous');\n            _this.img = img;\n\n            img.onload = function () {\n              var fabImg = new fabric.Image(img, {\n                top: 10,\n                left: 10,\n                width: img.width,\n                height: img.height\n              });\n              _this.fabImg = fabImg;\n\n              _this.fabricCanvas.setBackgroundImage(fabImg, _this.fabricCanvas.renderAll.bind(_this.fabricCanvas), {});\n\n              _this.fabricCanvas.setWidth(_this.fabImg.width + 100);\n\n              _this.fabricCanvas.setHeight(_this.fabImg.height + 100);\n            };\n          };\n\n          fr.readAsDataURL(file);\n          e.target.value = null;\n        }, 10);\n      },\n      setCanvasSize: function setCanvasSize(_ref) {\n        var width = _ref.width,\n            height = _ref.height;\n        this.canvas.width = width;\n        this.canvas.height = height;\n      },\n      drawImage: function drawImage(img) {\n        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : img.width;\n        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : img.height;\n\n        this.canvas.ondragover = function (e) {\n          e.preventDefault();\n          return false;\n        };\n      },\n      dragStart: function dragStart(e) {\n        this.draggingImg = e.target;\n      },\n      dragEnd: function dragEnd(e) {\n        this.draggingImg = null;\n      },\n      ondrop: function ondrop(e) {\n        var offsetX = e.offsetX,\n            offsetY = e.offsetY;\n        var headImg = new fabric.Image(this.draggingImg, {\n          top: offsetY,\n          left: offsetX\n        });\n        this.fabricCanvas.add(headImg);\n        this.headImg = headImg;\n      },\n      clearKyaru: function clearKyaru() {\n        this.fabricCanvas.remove(this.headImg);\n        this.headImg = null;\n      },\n      finishKyaru: function finishKyaru() {\n        var url = this.fabricCanvas.toDataURL({\n          format: 'png',\n          width: this.fabImg.width,\n          height: this.fabImg.height\n        });\n        var a = document.createElement('a');\n        a.className = 'download';\n        a.target = '_blank';\n        a.href = url;\n        a.download = '接头霸王.png';\n        a.hidden = true;\n        document.body.appendChild(a);\n        a.click();\n        document.body.removeChild(a);\n      },\n      mobileAddHead: function mobileAddHead(e) {\n        if (!this.isMobile) {\n          return;\n        } // 移动端使用点击添加添加\n\n\n        var headImg = new fabric.Image(e.target, {});\n        this.fabricCanvas.add(headImg);\n        this.headImg = headImg;\n      },\n      finishKyaru_mobile: function finishKyaru_mobile() {\n        try {\n          var url = this.fabricCanvas.toDataURL({\n            format: 'png',\n            width: this.fabImg.width || this.fabricCanvas.width,\n            height: this.fabImg.height || this.fabricCanvas.height\n          });\n          window.location.href = url.replace(\"image/png\", \"image/octet-stream\"); // let newWindow = window.open('about:blank;', '接头霸王')\n          // newWindow.document.write(`<div>长按图片保存到本地</div><img src=\"${url}\" alt=\"迫害成果\" />`)\n        } catch (error) {\n          document.body.append(error);\n        }\n      }\n    }\n  });\n};\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//# sourceURL=webpack:///./src/kyaru.js?");

/***/ })

/******/ });