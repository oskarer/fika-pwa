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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(5);


var app = new __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */]({
  target: document.querySelector('#root'),
  data: { weeks: [] }
});

fetch('https://uosdxsnu6j.execute-api.eu-central-1.amazonaws.com/latest/all').then(function (response) {
  return response.json();
}).then(function (json) {
  var weeks = Object.keys(json);
  var values = Object.values(json);
  var schedule = weeks.map(function (week, index) {
    return {
      dependencies: values[index].dependencies,
      fika: values[index].fika,
      week: week
    };
  });
  console.log('Got schedule', schedule);
  app.set({ weeks: schedule });
}).catch(function (error) {
  console.log(error.message);
});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\r\n  .foo[svelte-459443481], [svelte-459443481] .foo {\r\n    color: red;\r\n    font-size: 2em;\r\n    font-family: 'Comic Sans MS';\r\n  }\r\n";
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

	var text = createText("\r\n\r\n");

	var div = createElement('div');
	setAttribute(div, 'svelte-459443481', '');
	div.className = "foo";

	appendNode(createText("Big red Comic Sans"), div);

	return {
		mount: function mount(target, anchor) {
			insertNode(eachBlock_anchor, target, anchor);

			for (var i = 0; i < eachBlock_iterations.length; i += 1) {
				eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
			}

			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
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
				detachNode(text);
				detachNode(div);
			}
		}
	};
}

function renderEachBlock(root, eachBlock_value, week, week__index, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-459443481', '');

	var text = createText(week.week);
	appendNode(text, div);
	appendNode(createText(" "), div);
	var text2 = createText(week.dependencies);
	appendNode(text2, div);
	appendNode(createText(" "), div);
	var text4 = createText(week.fika);
	appendNode(text4, div);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: function update(changed, root, eachBlock_value, week, week__index) {
			var week = eachBlock_value[week__index];

			text.data = week.week;

			text2.data = week.dependencies;

			text4.data = week.fika;
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

		if (newValue === oldValue && (typeof newValue === "undefined" ? "undefined" : _typeof(newValue)) !== 'object') continue;

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

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function createText(data) {
	return document.createTextNode(data);
}

function appendNode(node, target) {
	target.appendChild(node);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQwNzYyNjliZDVmZDAxMGZkOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAuaHRtbCJdLCJuYW1lcyI6WyJhcHAiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhIiwid2Vla3MiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJPYmplY3QiLCJrZXlzIiwidmFsdWVzIiwic2NoZWR1bGUiLCJtYXAiLCJ3ZWVrIiwiaW5kZXgiLCJkZXBlbmRlbmNpZXMiLCJmaWthIiwiY29uc29sZSIsImxvZyIsInNldCIsImNhdGNoIiwiZXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2hFQTs7QUFFQSxJQUFNQSxNQUFNLElBQUkscURBQUosQ0FBUTtBQUNsQkMsVUFBUUMsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQURVO0FBRWxCQyxRQUFNLEVBQUVDLE9BQU8sRUFBVDtBQUZZLENBQVIsQ0FBWjs7QUFLQUMsTUFBTSxzRUFBTixFQUNHQyxJQURILENBQ1EsVUFBVUMsUUFBVixFQUFvQjtBQUFFLFNBQU9BLFNBQVNDLElBQVQsRUFBUDtBQUF3QixDQUR0RCxFQUVHRixJQUZILENBRVEsVUFBVUUsSUFBVixFQUFnQjtBQUNwQixNQUFNSixRQUFRSyxPQUFPQyxJQUFQLENBQVlGLElBQVosQ0FBZDtBQUNBLE1BQU1HLFNBQVNGLE9BQU9FLE1BQVAsQ0FBY0gsSUFBZCxDQUFmO0FBQ0EsTUFBTUksV0FBV1IsTUFBTVMsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQWtCO0FBQzNDQyxvQkFBY0wsT0FBT0ksS0FBUCxFQUFjQyxZQURlO0FBRTNDQyxZQUFNTixPQUFPSSxLQUFQLEVBQWNFLElBRnVCO0FBRzNDSDtBQUgyQyxLQUFsQjtBQUFBLEdBQVYsQ0FBakI7QUFLQUksVUFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJQLFFBQTVCO0FBQ0FiLE1BQUlxQixHQUFKLENBQVEsRUFBRWhCLE9BQU9RLFFBQVQsRUFBUjtBQUNELENBWkgsRUFhR1MsS0FiSCxDQWFTLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEJKLFVBQVFDLEdBQVIsQ0FBWUcsTUFBTUMsT0FBbEI7QUFDRCxDQWZILEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkNQYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUNBLEtBQUs7Ozt3QkFBUyxLQUFhOzs7d0JBQVMsS0FBSzs7Ozs7Ozs7Ozs7ZUFBekMsS0FBSzs7Z0JBQVMsS0FBYTs7Z0JBQVMsS0FBSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ0MDc2MjY5YmQ1ZmQwMTBmZDlmIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKHtcclxuICB0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JyksXHJcbiAgZGF0YTogeyB3ZWVrczogW10gfVxyXG59KTtcclxuXHJcbmZldGNoKCdodHRwczovL3Vvc2R4c251NmouZXhlY3V0ZS1hcGkuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vbGF0ZXN0L2FsbCcpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5qc29uKCkgfSlcclxuICAudGhlbihmdW5jdGlvbiAoanNvbikge1xyXG4gICAgY29uc3Qgd2Vla3MgPSBPYmplY3Qua2V5cyhqc29uKTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoanNvbilcclxuICAgIGNvbnN0IHNjaGVkdWxlID0gd2Vla3MubWFwKCh3ZWVrLCBpbmRleCkgPT4gKHtcclxuICAgICAgZGVwZW5kZW5jaWVzOiB2YWx1ZXNbaW5kZXhdLmRlcGVuZGVuY2llcyxcclxuICAgICAgZmlrYTogdmFsdWVzW2luZGV4XS5maWthLFxyXG4gICAgICB3ZWVrLFxyXG4gICAgfSkpXHJcbiAgICBjb25zb2xlLmxvZygnR290IHNjaGVkdWxlJywgc2NoZWR1bGUpO1xyXG4gICAgYXBwLnNldCh7IHdlZWtzOiBzY2hlZHVsZSB9KVxyXG4gIH0pXHJcbiAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsInt7I2VhY2ggd2Vla3MgYXMgd2Vla319XHJcbiAgPGRpdj57e3dlZWsud2Vla319IHt7d2Vlay5kZXBlbmRlbmNpZXN9fSB7e3dlZWsuZmlrYX19PC9kaXY+XHJcbnt7L2VhY2h9fVxyXG5cclxuPGRpdiBjbGFzcz0nZm9vJz5cclxuICBCaWcgcmVkIENvbWljIFNhbnNcclxuPC9kaXY+XHJcblxyXG48c3R5bGU+XHJcbiAgLmZvbyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0NvbWljIFNhbnMgTVMnO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FwcC5odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==