/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(1);


var app = new __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */]({
  target: document.querySelector('#root'),
  data: { weeks: [] }
});

(async function () {
  try {
    var response = await fetch('https://uosdxsnu6j.execute-api.eu-central-1.amazonaws.com/latest/all');
    var result = await response.json();
    console.log(result);
    app.set({ weeks: result });
  } catch (error) {
    console.log(error.message);
  }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Week_html__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var template = function () {

	return {
		components: {
			Week: __WEBPACK_IMPORTED_MODULE_0__Week_html__["a" /* default */]
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\r\n  .foo[svelte-2105908038], [svelte-2105908038] .foo {\r\n    color: red;\r\n    font-size: 2em;\r\n    font-family: 'Comic Sans MS';\r\n  }\r\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var eachBlock_anchor = createComment("#each weeks");
	var eachBlock_value = root.weeks;
	var eachBlock_iterations = [];

	for (var i = 0; i < eachBlock_value.length; i += 1) {
		eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
	}

	return {
		mount: function mount(target, anchor) {
			insertNode(eachBlock_anchor, target, anchor);

			for (var i = 0; i < eachBlock_iterations.length; i += 1) {
				eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
			}
		},

		update: function update(changed, root) {
			var eachBlock_value = root.weeks;

			for (var i = 0; i < eachBlock_value.length; i += 1) {
				if (!eachBlock_iterations[i]) {
					eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
					eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
				} else {
					eachBlock_iterations[i].update(changed, root, eachBlock_value, eachBlock_value[i], i);
				}
			}

			for (var i = eachBlock_value.length; i < eachBlock_iterations.length; i += 1) {
				eachBlock_iterations[i].teardown(true);
			}

			eachBlock_iterations.length = eachBlock_value.length;
		},

		teardown: function teardown(detach) {
			for (var i = 0; i < eachBlock_iterations.length; i += 1) {
				eachBlock_iterations[i].teardown(detach);
			}

			if (detach) {
				detachNode(eachBlock_anchor);
			}
		}
	};
}

function renderEachBlock(root, eachBlock_value, week, week__index, component) {
	var week1_initialData = {
		week: week
	};
	var week1 = new template.components.Week({
		target: null,
		_root: component._root || component,
		data: week1_initialData
	});

	return {
		mount: function mount(target, anchor) {
			week1._fragment.mount(target, anchor);
		},

		update: function update(changed, root, eachBlock_value, week, week__index) {
			var week = eachBlock_value[week__index];

			var week1_changes = {};

			if ('weeks' in changed) week1_changes.week = week;

			if (Object.keys(week1_changes).length) week1.set(week1_changes);
		},

		teardown: function teardown(detach) {
			week1.teardown(detach);
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();
	this._renderHooks = [];

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);

	while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function createComment(data) {
	return document.createComment(data);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function createElement(name) {
	return document.createElement(name);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\r\n  .week[svelte-3885083356], [svelte-3885083356] .week {\r\n    display: flex;\r\n    width: 100%;\r\n    background: white;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\r\n  }\r\n\r\n  .week  .date[svelte-3885083356], .week  [svelte-3885083356] .date, .week[svelte-3885083356]  .date, [svelte-3885083356] .week  .date {\r\n    text-align:center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 0 10px;\r\n  }\r\n\r\n  .week  .date  .number[svelte-3885083356], .week  .date  [svelte-3885083356] .number, .week  .date[svelte-3885083356]  .number, .week  [svelte-3885083356] .date  .number, .week[svelte-3885083356]  .date  .number, [svelte-3885083356] .week  .date  .number {\r\n    font-size: 28px;\r\n    margin: 0;\r\n  }\r\n  .week  .date  .full[svelte-3885083356], .week  .date  [svelte-3885083356] .full, .week  .date[svelte-3885083356]  .full, .week  [svelte-3885083356] .date  .full, .week[svelte-3885083356]  .date  .full, [svelte-3885083356] .week  .date  .full {\r\n    font-size: 13px;\r\n    margin: 0;\r\n    color: rgba(29, 29, 39, 0.7);\r\n  }\r\n\r\n  .week  .text[svelte-3885083356], .week  [svelte-3885083356] .text, .week[svelte-3885083356]  .text, [svelte-3885083356] .week  .text {\r\n    margin: 10px 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n  }\r\n  .week  .text  h4[svelte-3885083356], .week  .text  [svelte-3885083356] h4, .week  .text[svelte-3885083356]  h4, .week  [svelte-3885083356] .text  h4, .week[svelte-3885083356]  .text  h4, [svelte-3885083356] .week  .text  h4 {\r\n    margin: 0;\r\n  }\r\n\r\n  .week  .avatars[svelte-3885083356], .week  [svelte-3885083356] .avatars, .week[svelte-3885083356]  .avatars, [svelte-3885083356] .week  .avatars {\r\n    display: flex;\r\n    align-self: center;\r\n    justify-content: flex-end;\r\n    align-items: flex-end;\r\n  }\r\n\r\n  .week  .avatars  img[svelte-3885083356], .week  .avatars  [svelte-3885083356] img, .week  .avatars[svelte-3885083356]  img, .week  [svelte-3885083356] .avatars  img, .week[svelte-3885083356]  .avatars  img, [svelte-3885083356] .week  .avatars  img {\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n    width: 35%;\r\n  }\r\n\r\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-3885083356', '');
	div.className = "week";

	var div1 = createElement('div');
	setAttribute(div1, 'svelte-3885083356', '');
	div1.className = "date";

	appendNode(div1, div);

	var p = createElement('p');
	setAttribute(p, 'svelte-3885083356', '');
	p.className = "number";

	appendNode(p, div1);
	var text = createText(root.week.week);
	appendNode(text, p);
	appendNode(createText("\r\n    "), div1);

	var p1 = createElement('p');
	setAttribute(p1, 'svelte-3885083356', '');
	p1.className = "full";

	appendNode(p1, div1);
	var text2 = createText(root.week.friday);
	appendNode(text2, p1);
	appendNode(createText("\r\n  "), div);

	var div2 = createElement('div');
	setAttribute(div2, 'svelte-3885083356', '');
	div2.className = "text";

	appendNode(div2, div);

	var h4 = createElement('h4');
	setAttribute(h4, 'svelte-3885083356', '');

	appendNode(h4, div2);
	appendNode(createText("Fika"), h4);
	appendNode(createText("\r\n    "), div2);
	var text6 = createText(root.week.fika.real_name);
	appendNode(text6, div2);
	appendNode(createText("\r\n    "), div2);

	var h41 = createElement('h4');
	setAttribute(h41, 'svelte-3885083356', '');

	appendNode(h41, div2);
	appendNode(createText("Dependencies"), h41);
	appendNode(createText("\r\n    "), div2);
	var text10 = createText(root.week.dependencies.real_name);
	appendNode(text10, div2);
	appendNode(createText("\r\n  "), div);

	var div3 = createElement('div');
	setAttribute(div3, 'svelte-3885083356', '');
	div3.className = "avatars";

	appendNode(div3, div);

	var img = createElement('img');
	setAttribute(img, 'svelte-3885083356', '');
	img.src = root.week.fika.image_48;

	appendNode(img, div3);
	appendNode(createText("\r\n    "), div3);

	var img1 = createElement('img');
	setAttribute(img1, 'svelte-3885083356', '');
	img1.src = root.week.dependencies.image_48;

	appendNode(img1, div3);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: function update(changed, root) {
			text.data = root.week.week;

			text2.data = root.week.friday;

			text6.data = root.week.fika.real_name;

			text10.data = root.week.dependencies.real_name;

			img.src = root.week.fika.image_48;

			img1.src = root.week.dependencies.image_48;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmI5YzM3MmNmYzM0OWJmNmJlOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvV2Vlay5odG1sIl0sIm5hbWVzIjpbImFwcCIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGEiLCJ3ZWVrcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNldCIsImVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUEsSUFBTUEsTUFBTSxJQUFJLHFEQUFKLENBQVE7QUFDbEJDLFVBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FEVTtBQUVsQkMsUUFBTSxFQUFFQyxPQUFPLEVBQVQ7QUFGWSxDQUFSLENBQVo7O0FBS0EsQ0FBQyxrQkFBWTtBQUNYLE1BQUk7QUFDRixRQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHNFQURxQixDQUF2QjtBQUVBLFFBQU1DLFNBQVMsTUFBTUYsU0FBU0csSUFBVCxFQUFyQjtBQUNBQyxZQUFRQyxHQUFSLENBQVlILE1BQVo7QUFDQVIsUUFBSVksR0FBSixDQUFRLEVBQUVQLE9BQU9HLE1BQVQsRUFBUjtBQUNELEdBTkQsQ0FNRSxPQUFPSyxLQUFQLEVBQWM7QUFDZEgsWUFBUUMsR0FBUixDQUFZRSxNQUFNQyxPQUFsQjtBQUNEO0FBQ0YsQ0FWRCxJOzs7Ozs7Ozs7Ozs7MkJDRmlDOztBQUUvQjtBQUNZO0FBS2Q7QUFMZ0I7QUFEQzs7Ozs7Ozs7Ozs7Ozs7NEJBUEo7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQ0VlLEtBQUs7Ozs7Ozs7Ozs2QkFDUCxLQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUl2QixLQUFLLEtBQVU7Ozs7Ozs7Ozs7OEJBRWYsS0FBYSxhQUFVOzs7Ozs7Ozs7Ozs7Z0JBR2xCLFVBQWtCOzs7Ozs7O2lCQUNsQixrQkFBMEI7Ozs7Ozs7Ozs7b0JBWGIsS0FBSzs7cUJBQ1AsS0FBTzs7cUJBSXZCLEtBQUssS0FBVTs7c0JBRWYsS0FBYSxhQUFVOztrQkFHbEIsVUFBa0I7O21CQUNsQixrQkFBMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYjljMzcyY2ZjMzQ5YmY2YmU5MCIsImltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCh7XHJcbiAgdGFyZ2V0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLFxyXG4gIGRhdGE6IHsgd2Vla3M6IFtdIH1cclxufSk7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAnaHR0cHM6Ly91b3NkeHNudTZqLmV4ZWN1dGUtYXBpLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2xhdGVzdC9hbGwnKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBhcHAuc2V0KHsgd2Vla3M6IHJlc3VsdCB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn0pKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsInt7I2VhY2ggd2Vla3MgYXMgd2Vla319XHJcbiAgPFdlZWsgd2Vlaz0ne3t3ZWVrfX0nLz5cclxue3svZWFjaH19XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBXZWVrIGZyb20gJy4vV2Vlay5odG1sJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBXZWVrXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgLmZvbyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0NvbWljIFNhbnMgTVMnO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FwcC5odG1sIiwiPGRpdiBjbGFzcz1cIndlZWtcIj5cclxuICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxyXG4gICAgPHAgY2xhc3M9XCJudW1iZXJcIj57e3dlZWsud2Vla319PC9wPlxyXG4gICAgPHAgY2xhc3M9XCJmdWxsXCI+e3t3ZWVrLmZyaWRheX19PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICA8aDQ+RmlrYTwvaDQ+XHJcbiAgICB7e3dlZWsuZmlrYS5yZWFsX25hbWV9fVxyXG4gICAgPGg0PkRlcGVuZGVuY2llczwvaDQ+XHJcbiAgICB7e3dlZWsuZGVwZW5kZW5jaWVzLnJlYWxfbmFtZX19XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImF2YXRhcnNcIj5cclxuICAgIDxpbWcgc3JjPXt7d2Vlay5maWthLmltYWdlXzQ4fX0gLz5cclxuICAgIDxpbWcgc3JjPXt7d2Vlay5kZXBlbmRlbmNpZXMuaW1hZ2VfNDh9fSAvPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZT5cclxuICAud2VlayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG5cclxuICAud2VlayAuZGF0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcblxyXG4gIC53ZWVrIC5kYXRlIC5udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAud2VlayAuZGF0ZSAuZnVsbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogcmdiYSgyOSwgMjksIDM5LCAwLjcpO1xyXG4gIH1cclxuXHJcbiAgLndlZWsgLnRleHQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gIC53ZWVrIC50ZXh0IGg0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC53ZWVrIC5hdmF0YXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuXHJcbiAgLndlZWsgLmF2YXRhcnMgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgfVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1dlZWsuaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=