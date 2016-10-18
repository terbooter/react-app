/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/index.d.ts" />
	var ReactDOM = __webpack_require__(1);
	var React = __webpack_require__(2);
	var NotesApp_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(NotesApp_1.NotesApp, null), document.getElementById('container'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(4);
	var NoteEditor_1 = __webpack_require__(8);
	var NotesGrid_1 = __webpack_require__(11);
	var Properties = (function () {
	    function Properties() {
	    }
	    return Properties;
	}());
	var State = (function () {
	    function State() {
	    }
	    return State;
	}());
	var NotesApp = (function (_super) {
	    __extends(NotesApp, _super);
	    function NotesApp(props) {
	        _super.call(this, props);
	        this.state = { notes: [] };
	    }
	    NotesApp.prototype.componentDidMount = function () {
	        var localNotes = JSON.parse(localStorage.getItem('notes'));
	        if (localNotes) {
	            this.setState({ notes: localNotes });
	        }
	    };
	    NotesApp.prototype.componentDidUpdate = function () {
	        this.updateLocalStorage();
	    };
	    NotesApp.prototype.handleNoteDelete = function (note) {
	        var noteId = note.id;
	        var newNotes = this.state.notes.filter(function (note) {
	            return note.id !== noteId;
	        });
	        this.setState({ notes: newNotes });
	    };
	    NotesApp.prototype.handleNoteAdd = function (newNote) {
	        var newNotes = this.state.notes.slice();
	        newNotes.unshift(newNote);
	        this.setState({ notes: newNotes });
	    };
	    NotesApp.prototype.render = function () {
	        return (React.createElement("div", {className: "notes-app"}, 
	            React.createElement("h2", {className: "app-header"}, "NotesApp"), 
	            React.createElement(NoteEditor_1.NoteEditor, {onNoteAdd: this.handleNoteAdd.bind(this)}), 
	            React.createElement(NotesGrid_1.NotesGrid, {notes: this.state.notes, onNoteDelete: this.handleNoteDelete.bind(this)})));
	    };
	    NotesApp.prototype.updateLocalStorage = function () {
	        var notes = JSON.stringify(this.state.notes);
	        localStorage.setItem('notes', notes);
	    };
	    return NotesApp;
	}(React.Component));
	exports.NotesApp = NotesApp;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./NotesApp.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./NotesApp.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n    font-weight: 300;\n    background-color: #eaeaea;\n}\n\n#mount-point {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.notes-app {\n    max-width: 960px;\n    width: 100%;\n}\n\n.app-header {\n    text-align: center;\n    font-weight: 500;\n    color: grey;\n    text-shadow: 0px 2px 3px rgba(255,255,255,0.5);\n}", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(9);
	var Properties = (function () {
	    function Properties() {
	    }
	    return Properties;
	}());
	var State = (function () {
	    function State() {
	    }
	    return State;
	}());
	var NoteEditor = (function (_super) {
	    __extends(NoteEditor, _super);
	    function NoteEditor(props) {
	        _super.call(this, props);
	        this.state = { text: '' };
	    }
	    NoteEditor.prototype.handleTextChange = function (event) {
	        this.setState({ text: event.target.value });
	    };
	    NoteEditor.prototype.handleNoteAdd = function () {
	        var newNote = {
	            text: this.state.text,
	            color: 'yellow',
	            id: Date.now()
	        };
	        this.props.onNoteAdd(newNote);
	        this.setState({ text: '' });
	    };
	    NoteEditor.prototype.render = function () {
	        return (React.createElement("div", {className: "note-editor"}, 
	            React.createElement("textarea", {placeholder: "Enter your note here... 123", rows: 5, className: "textarea", value: this.state.text, onChange: this.handleTextChange.bind(this)}), 
	            React.createElement("button", {className: "add-button", onClick: this.handleNoteAdd.bind(this)}, "Add")));
	    };
	    return NoteEditor;
	}(React.Component));
	exports.NoteEditor = NoteEditor;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./NoteEditor.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./NoteEditor.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".note-editor {\n    width: 100%;\n    max-width: 600px;\n    padding: 16px;\n    margin: 16px auto;\n    background-color: white;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    border-radius: 2px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.textarea {\n    width: 100%;\n    resize: none;\n    margin: 5px;\n    font-size: 14px;\n    border: none;\n    font-weight: 300;\n}\n\n.textarea:focus {\n    outline: 0;\n}\n\n.add-button {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    width: 100px;\n    background-color:#44c767;\n    border-radius:28px;\n    border:1px solid #18ab29;\n    cursor:pointer;\n    color:#ffffff;\n    font-size:14px;\n    padding:8px 8px;\n    text-transform: uppercase;\n    text-decoration:none;\n    text-shadow:0px 1px 0px #2f6627;\n}\n\n.add-button:hover {\n    background-color:#5cbf2a;\n}\n\n.add-button:active {\n    position:relative;\n    top:1px;\n}\n\n.add-button:focus {\n    outline: 0;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/index.d.ts" />
	var React = __webpack_require__(2);
	var Note_1 = __webpack_require__(12);
	__webpack_require__(15);
	var Properties = (function () {
	    function Properties() {
	    }
	    return Properties;
	}());
	var NotesGrid = (function (_super) {
	    __extends(NotesGrid, _super);
	    function NotesGrid() {
	        _super.apply(this, arguments);
	    }
	    NotesGrid.prototype.componentDidMount = function () {
	        var grid = this.refs["grid"];
	        this.masonry = new Masonry(grid, {
	            itemSelector: '.note',
	            columnWidth: 200,
	            gutter: 10,
	            fitWidth: true
	        });
	    };
	    NotesGrid.prototype.componentDidUpdate = function (prevProps) {
	        if (this.props.notes.length !== prevProps.notes.length) {
	            this.masonry.reloadItems();
	            this.masonry.layout();
	        }
	    };
	    NotesGrid.prototype.render = function () {
	        var onNoteDelete = this.props.onNoteDelete;
	        return (React.createElement("div", {className: "notes-grid", ref: "grid"}, this.props.notes.map(function (note) {
	            return (React.createElement(Note_1.Note, {key: note.id, onDelete: onNoteDelete.bind(null, note), color: note.color}, note.text));
	        })));
	    };
	    return NotesGrid;
	}(React.Component));
	exports.NotesGrid = NotesGrid;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	__webpack_require__(13);
	var Propertires = (function () {
	    function Propertires() {
	    }
	    return Propertires;
	}());
	exports.Propertires = Propertires;
	var Note = (function (_super) {
	    __extends(Note, _super);
	    function Note() {
	        _super.apply(this, arguments);
	    }
	    Note.prototype.render = function () {
	        var style = { backgroundColor: this.props.color };
	        return (React.createElement("div", {className: "note", style: style}, 
	            React.createElement("span", {className: "delete-note", onClick: this.props.onDelete}, " × "), 
	            this.props.children));
	    };
	    return Note;
	}(React.Component));
	exports.Note = Note;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./Note.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./Note.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".note {\n    width: 200px;\n    height: auto;\n    float: left;\n    background-color: yellow;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    border-radius: 2px;\n    padding: 10px;\n    margin-bottom: 10px;\n    -webkit-transition: box-shadow .3s;\n    transition: box-shadow .3s;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n}\n\n.note:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\n\n.delete-note {\n    position: absolute;\n    top:5px;\n    right:5px;\n    display: none;\n    color: rgba(0,0,0,0.6);\n    cursor: pointer;\n}\n\n.note:hover .delete-note {\n    display: block;\n}", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./NotesGrid.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./NotesGrid.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".notes-grid {\n    margin: 0 auto;\n}", ""]);

	// exports


/***/ }
/******/ ]);