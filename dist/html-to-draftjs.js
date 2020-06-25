(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("draft-js"), require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["draft-js", "immutable"], factory);
	else if(typeof exports === 'object')
		exports["htmlToDraftjs"] = factory(require("draft-js"), require("immutable"));
	else
		root["htmlToDraftjs"] = factory(root["draft-js"], root["immutable"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_draft_js__, __WEBPACK_EXTERNAL_MODULE_immutable__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/library/chunkBuilder.js":
/*!*************************************!*\
  !*** ./src/library/chunkBuilder.js ***!
  \*************************************/
/*! exports provided: getWhitespaceChunk, createTextChunk, getSoftNewlineChunk, getEmptyChunk, getFirstBlockChunk, getBlockDividerChunk, getAtomicBlockChunk, getLiquidChunk, joinChunks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWhitespaceChunk", function() { return getWhitespaceChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextChunk", function() { return createTextChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSoftNewlineChunk", function() { return getSoftNewlineChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmptyChunk", function() { return getEmptyChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstBlockChunk", function() { return getFirstBlockChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockDividerChunk", function() { return getBlockDividerChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtomicBlockChunk", function() { return getAtomicBlockChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLiquidChunk", function() { return getLiquidChunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinChunks", function() { return joinChunks; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

var SPACE = ' ';
var MAX_DEPTH = 4;
var getWhitespaceChunk = function getWhitespaceChunk(entityId) {
  return {
    text: SPACE,
    inlines: [new immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"]()],
    entities: [entityId],
    blocks: []
  };
};
var createTextChunk = function createTextChunk(node, inlineStyle, entityId) {
  var text = node.textContent;

  if (text.trim() === '') {
    return {
      chunk: getWhitespaceChunk(entityId)
    };
  }

  return {
    chunk: {
      text: text,
      inlines: Array(text.length).fill(inlineStyle),
      entities: Array(text.length).fill(entityId),
      blocks: []
    }
  };
};
var getSoftNewlineChunk = function getSoftNewlineChunk() {
  return {
    text: '\n',
    inlines: [new immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"]()],
    entities: new Array(1),
    blocks: []
  };
};
var getEmptyChunk = function getEmptyChunk() {
  return {
    text: '',
    inlines: [],
    entities: [],
    blocks: []
  };
};
var getFirstBlockChunk = function getFirstBlockChunk(blockType, data) {
  return {
    text: '',
    inlines: [],
    entities: [],
    blocks: [{
      type: blockType,
      depth: 0,
      data: data || new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({})
    }]
  };
};
var getBlockDividerChunk = function getBlockDividerChunk(blockType, depth, data) {
  return {
    text: '\r',
    inlines: [],
    entities: [],
    blocks: [{
      type: blockType,
      depth: Math.max(0, Math.min(MAX_DEPTH, depth)),
      data: data || new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({})
    }]
  };
};
var getAtomicBlockChunk = function getAtomicBlockChunk(entityId) {
  return {
    text: '\r ',
    inlines: [new immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"]()],
    entities: [entityId],
    blocks: [{
      type: 'atomic',
      depth: 0,
      data: new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({})
    }]
  };
};
var getLiquidChunk = function getLiquidChunk(entityId) {
  var textContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  console.log('Text content in getLiquidChunk:', textContent);
  var text = textContent ? textContent : '\r ';
  return {
    text: text,
    inlines: [new immutable__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"]()],
    entities: [entityId],
    blocks: [{
      type: 'liquid',
      depth: 0,
      data: new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({})
    }]
  };
};
var joinChunks = function joinChunks(A, B) {
  return {
    text: A.text + B.text,
    inlines: A.inlines.concat(B.inlines),
    entities: A.entities.concat(B.entities),
    blocks: A.blocks.concat(B.blocks)
  };
};

/***/ }),

/***/ "./src/library/getBlockData.js":
/*!*************************************!*\
  !*** ./src/library/getBlockData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBlockData; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

function getBlockData(node) {
  if (node.style.textAlign) {
    return new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
      'text-align': node.style.textAlign
    });
  } else if (node.style.marginLeft) {
    return new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
      'margin-left': node.style.marginLeft
    });
  }

  return undefined;
}

/***/ }),

/***/ "./src/library/getBlockTypeForTag.js":
/*!*******************************************!*\
  !*** ./src/library/getBlockTypeForTag.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBlockTypeForTag; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

var blockRenderMap = new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
  'header-one': {
    element: 'h1'
  },
  'header-two': {
    element: 'h2'
  },
  'header-three': {
    element: 'h3'
  },
  'header-four': {
    element: 'h4'
  },
  'header-five': {
    element: 'h5'
  },
  'header-six': {
    element: 'h6'
  },
  'unordered-list-item': {
    element: 'li',
    wrapper: 'ul'
  },
  'ordered-list-item': {
    element: 'li',
    wrapper: 'ol'
  },
  blockquote: {
    element: 'blockquote'
  },
  code: {
    element: 'pre'
  },
  atomic: {
    element: 'figure'
  },
  unstyled: {
    element: 'p',
    aliasedElements: ['div']
  }
});
function getBlockTypeForTag(tag, lastList) {
  var matchedTypes = blockRenderMap.filter(function (draftBlock) {
    return draftBlock.element === tag && (!draftBlock.wrapper || draftBlock.wrapper === lastList) || draftBlock.wrapper === tag || draftBlock.aliasedElements && draftBlock.aliasedElements.indexOf(tag) > -1;
  }).keySeq().toSet().toArray();

  if (matchedTypes.length === 1) {
    return matchedTypes[0];
  }

  return undefined;
}

/***/ }),

/***/ "./src/library/getEntityId.js":
/*!************************************!*\
  !*** ./src/library/getEntityId.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);


var getEntityId = function getEntityId(node) {
  var entityId = undefined;

  if (node instanceof HTMLAnchorElement) {
    var entityConfig = {};

    if (node.dataset && node.dataset.mention !== undefined) {
      entityConfig.url = node.href;
      entityConfig.text = node.innerHTML;
      entityConfig.value = node.dataset.value;
      entityId = draft_js__WEBPACK_IMPORTED_MODULE_0__["Entity"].__create('MENTION', 'IMMUTABLE', entityConfig);
    } else {
      entityConfig.url = node.getAttribute ? node.getAttribute('href') || node.href : node.href;
      entityConfig.title = node.innerHTML;
      entityConfig.targetOption = node.target;
      entityId = draft_js__WEBPACK_IMPORTED_MODULE_0__["Entity"].__create('LINK', 'MUTABLE', entityConfig);
    }
  }

  return entityId;
};

/* harmony default export */ __webpack_exports__["default"] = (getEntityId);

/***/ }),

/***/ "./src/library/getSafeBodyFromHTML.js":
/*!********************************************!*\
  !*** ./src/library/getSafeBodyFromHTML.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getSafeBodyFromHTML = function getSafeBodyFromHTML(html) {
  var doc;
  var root = null;

  if (document.implementation && document.implementation.createHTMLDocument) {
    doc = document.implementation.createHTMLDocument('foo');
    doc.documentElement.innerHTML = html;
    root = doc.getElementsByTagName('body')[0];
  }

  return root;
};

/* harmony default export */ __webpack_exports__["default"] = (getSafeBodyFromHTML);

/***/ }),

/***/ "./src/library/index.js":
/*!******************************!*\
  !*** ./src/library/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return htmlToDraft; });
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getSafeBodyFromHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getSafeBodyFromHTML */ "./src/library/getSafeBodyFromHTML.js");
/* harmony import */ var _chunkBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunkBuilder */ "./src/library/chunkBuilder.js");
/* harmony import */ var _getBlockTypeForTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getBlockTypeForTag */ "./src/library/getBlockTypeForTag.js");
/* harmony import */ var _processInlineTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./processInlineTag */ "./src/library/processInlineTag.js");
/* harmony import */ var _getBlockData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getBlockData */ "./src/library/getBlockData.js");
/* harmony import */ var _getEntityId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getEntityId */ "./src/library/getEntityId.js");








var SPACE = ' ';
var REGEX_NBSP = new RegExp('&nbsp;', 'g');
var firstBlock = true;

function genFragment(node, inlineStyle, depth, lastList, inEntity, customChunkGenerator) {
  var nodeName = node.nodeName.toLowerCase();

  if (customChunkGenerator) {
    var value = customChunkGenerator(nodeName, node);

    if (value) {
      var entityId = draft_js__WEBPACK_IMPORTED_MODULE_0__["Entity"].__create(value.type, value.mutability, value.data || {});

      if (value.textContent) {
        return {
          chunk: getLiquidChunk(entityId, value.textContent)
        };
      }

      return {
        chunk: Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["getAtomicBlockChunk"])(entityId)
      };
    }
  }

  if (nodeName === '#text' && node.textContent !== '\n') {
    return Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["createTextChunk"])(node, inlineStyle, inEntity);
  }

  if (nodeName === 'br') {
    return {
      chunk: Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["getSoftNewlineChunk"])()
    };
  }

  if (nodeName === 'img' && node instanceof HTMLImageElement) {
    var entityConfig = {};
    entityConfig.src = node.getAttribute ? node.getAttribute('src') || node.src : node.src;
    entityConfig.alt = node.alt;
    entityConfig.height = node.style.height;
    entityConfig.width = node.style.width;

    if (node.style.float) {
      entityConfig.alignment = node.style.float;
    }

    var _entityId = draft_js__WEBPACK_IMPORTED_MODULE_0__["Entity"].__create('IMAGE', 'MUTABLE', entityConfig);

    return {
      chunk: Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["getAtomicBlockChunk"])(_entityId)
    };
  }

  if (nodeName === 'video' && node instanceof HTMLVideoElement) {
    var _entityConfig = {};
    _entityConfig.src = node.getAttribute ? node.getAttribute('src') || node.src : node.src;
    _entityConfig.alt = node.alt;
    _entityConfig.height = node.style.height;
    _entityConfig.width = node.style.width;

    if (node.style.float) {
      _entityConfig.alignment = node.style.float;
    }

    var _entityId2 = draft_js__WEBPACK_IMPORTED_MODULE_0__["Entity"].__create('VIDEO', 'MUTABLE', _entityConfig);

    return {
      chunk: Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["getAtomicBlockChunk"])(_entityId2)
    };
  }

  if (nodeName === 'iframe' && node instanceof HTMLIFrameElement) {
    var _entityConfig2 = {};
    _entityConfig2.src = node.getAttribute ? node.getAttribute('src') || node.src : node.src;
    _entityConfig2.height = node.height;
    _entityConfig2.width = node.width;

    var _entityId3 = draft_js__WEBPACK_IMPORTED_MODULE_0__["Entity"].__create('EMBEDDED_LINK', 'MUTABLE', _entityConfig2);

    return {
      chunk: Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["getAtomicBlockChunk"])(_entityId3)
    };
  }

  var blockType = Object(_getBlockTypeForTag__WEBPACK_IMPORTED_MODULE_4__["default"])(nodeName, lastList);
  var chunk;

  if (blockType) {
    if (nodeName === 'ul' || nodeName === 'ol') {
      lastList = nodeName;
      depth += 1;
    } else {
      if (blockType !== 'unordered-list-item' && blockType !== 'ordered-list-item') {
        lastList = '';
        depth = -1;
      }

      if (!firstBlock) {
        chunk = Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["getBlockDividerChunk"])(blockType, depth, Object(_getBlockData__WEBPACK_IMPORTED_MODULE_6__["default"])(node));
      } else {
        chunk = Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["getFirstBlockChunk"])(blockType, Object(_getBlockData__WEBPACK_IMPORTED_MODULE_6__["default"])(node));
        firstBlock = false;
      }
    }
  }

  if (!chunk) {
    chunk = Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["getEmptyChunk"])();
  }

  inlineStyle = Object(_processInlineTag__WEBPACK_IMPORTED_MODULE_5__["default"])(nodeName, node, inlineStyle);
  var child = node.firstChild;

  while (child) {
    var _entityId4 = Object(_getEntityId__WEBPACK_IMPORTED_MODULE_7__["default"])(child);

    var _genFragment = genFragment(child, inlineStyle, depth, lastList, _entityId4 || inEntity, customChunkGenerator),
        generatedChunk = _genFragment.chunk;

    chunk = Object(_chunkBuilder__WEBPACK_IMPORTED_MODULE_3__["joinChunks"])(chunk, generatedChunk);
    var sibling = child.nextSibling;
    child = sibling;
  }

  return {
    chunk: chunk
  };
}

function getChunkForHTML(html, customChunkGenerator) {
  var sanitizedHtml = html.trim().replace(REGEX_NBSP, SPACE);
  var safeBody = Object(_getSafeBodyFromHTML__WEBPACK_IMPORTED_MODULE_2__["default"])(sanitizedHtml);

  if (!safeBody) {
    return null;
  }

  firstBlock = true;

  var _genFragment2 = genFragment(safeBody, new immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"](), -1, '', undefined, customChunkGenerator),
      chunk = _genFragment2.chunk;

  return {
    chunk: chunk
  };
}

function htmlToDraft(html, customChunkGenerator) {
  var chunkData = getChunkForHTML(html, customChunkGenerator);

  if (chunkData) {
    var chunk = chunkData.chunk;
    var entityMap = new immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedMap"]({});
    chunk.entities && chunk.entities.forEach(function (entity) {
      if (entity) {
        entityMap = entityMap.set(entity, draft_js__WEBPACK_IMPORTED_MODULE_0__["Entity"].__get(entity));
      }
    });
    var start = 0;
    return {
      contentBlocks: chunk.text.split('\r').map(function (textBlock, ii) {
        var end = start + textBlock.length;
        var inlines = chunk && chunk.inlines.slice(start, end);
        var entities = chunk && chunk.entities.slice(start, end);
        var characterList = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"](inlines.map(function (style, index) {
          var data = {
            style: style,
            entity: null
          };

          if (entities[index]) {
            data.entity = entities[index];
          }

          return draft_js__WEBPACK_IMPORTED_MODULE_0__["CharacterMetadata"].create(data);
        }));
        start = end;
        return new draft_js__WEBPACK_IMPORTED_MODULE_0__["ContentBlock"]({
          key: Object(draft_js__WEBPACK_IMPORTED_MODULE_0__["genKey"])(),
          type: chunk && chunk.blocks[ii] && chunk.blocks[ii].type || 'unstyled',
          depth: chunk && chunk.blocks[ii] && chunk.blocks[ii].depth,
          data: chunk && chunk.blocks[ii] && chunk.blocks[ii].data || new immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]({}),
          text: textBlock,
          characterList: characterList
        });
      }),
      entityMap: entityMap
    };
  }

  return null;
}

/***/ }),

/***/ "./src/library/processInlineTag.js":
/*!*****************************************!*\
  !*** ./src/library/processInlineTag.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processInlineTag; });
var inlineTags = {
  code: 'CODE',
  del: 'STRIKETHROUGH',
  em: 'ITALIC',
  strong: 'BOLD',
  ins: 'UNDERLINE',
  sub: 'SUBSCRIPT',
  sup: 'SUPERSCRIPT'
};
function processInlineTag(tag, node, currentStyle) {
  var styleToCheck = inlineTags[tag];
  var inlineStyle;

  if (styleToCheck) {
    inlineStyle = currentStyle.add(styleToCheck).toOrderedSet();
  } else if (node instanceof HTMLElement) {
    inlineStyle = currentStyle;
    var htmlElement = node;
    inlineStyle = inlineStyle.withMutations(function (style) {
      var color = htmlElement.style.color;
      var backgroundColor = htmlElement.style.backgroundColor;
      var fontSize = htmlElement.style.fontSize;
      var fontFamily = htmlElement.style.fontFamily.replace(/^"|"$/g, '');
      var fontWeight = htmlElement.style.fontWeight;
      var textDecoration = htmlElement.style.textDecoration;
      var fontStyle = htmlElement.style.fontStyle;

      if (color) {
        style.add("color-".concat(color.replace(/ /g, '')));
      }

      if (backgroundColor) {
        style.add("bgcolor-".concat(backgroundColor.replace(/ /g, '')));
      }

      if (fontSize) {
        style.add("fontsize-".concat(fontSize.replace(/px$/g, '')));
      }

      if (fontFamily) {
        style.add("fontfamily-".concat(fontFamily));
      }

      if (fontWeight === 'bold') {
        style.add(inlineTags.strong);
      }

      if (textDecoration === 'underline') {
        style.add(inlineTags.ins);
      }

      if (fontStyle === 'italic') {
        style.add(inlineTags.em);
      }
    }).toOrderedSet();
  }

  return inlineStyle;
}

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/library/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/library/index.js */"./src/library/index.js");


/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_draft_js__;

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;

/***/ })

/******/ });
});
//# sourceMappingURL=html-to-draftjs.js.map