(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["redux-navigation"] = factory();
	else
		root["redux-navigation"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["redux-navigation"] = factory();else root["redux-navigation"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/__webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var _class = function () {
        function _class() {
          _classCallCheck(this, _class);
        }

        _createClass(_class, [{
          key: "render",
          value: function render() {
            console.log(1);
          }
        }]);

        return _class;
      }();

      exports.default = _class;

      /***/
    }])
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavigationManager = __webpack_require__(2);

var _NavigationManager2 = _interopRequireDefault(_NavigationManager);

var _middleware = __webpack_require__(3);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  navigationMgr: _NavigationManager2.default,
  navigationMiddleware: navigationMiddleware
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationManager = function () {
  function NavigationManager() {
    var _this = this;

    _classCallCheck(this, NavigationManager);

    this.encodeRouterObj = function (data) {
      try {
        var objToString = JSON.stringify(data);
        return window.btoa(objToString);
      } catch (e) {
        console.warn('[router] invalid navigation token');
        return false;
      }
    };

    this.decodeRouterUrl = function (code) {
      if (!code && code !== '') return false;
      try {
        var decodeResult = window.atob(code);
        return JSON.parse(decodeResult);
      } catch (e) {
        console.warn('[router] invalid navigation token');
        return false;
      }
    };

    this.getQueryString = function () {
      return window.location.search.substring(0, 1);
    };

    this.startListening = function (pop) {
      window.onpopstate = function () {
        pop();
      };
    };

    this.pushState = function (path, state) {
      history.pushState({
        currentState: state
      }, null, path);
    };

    this.updateQueryString = function (uri, key, value) {
      var re = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');
      var newUri = uri;
      var hash = '';
      if (value === undefined) {
        if (newUri.match(re)) return newUri.replace(re, '$1$2');

        return newUri;
      }
      if (newUri.match(re)) return newUri.replace(re, '$1' + key + '=' + value + '$2');

      if (newUri.indexOf('#') !== -1) {
        hash = newUri.replace(/.*#/, '#');
        newUri = newUri.replace(/#.*/, '');
      }
      var separator = newUri.indexOf('?') !== -1 ? '&' : '?';
      return '' + newUri + separator + key + '=' + value + hash;
    };

    this.getNavigationValue = function (uri, prefix) {
      return uri.split('&').filter(function (value) {
        return value.indexOf(prefix) >= 0;
      }).toString().split(_this.navigationPrefix)[1];
    };

    if (typeof window === 'undefined') return;
    this.navigationPrefix = 'nav';
  }

  /**
   * @param data
   * @description take navigation object return token
   * @returns {*}
   */


  /**
   * @param code
   * @description take token return navigation object
   * @returns {boolean}
   */


  /**
   * @description return the search only
   * @example getQueryString('www.exemple.com/?foo=bar') -> 'foo=bar'
   */


  /**
   * @param pop
   * @description listen on popStateEvent
   */


  /**
   * @param path
   * @param state
   * @description push state and path into history obj
   */


  /**
   * @param uri
   * @param key
   * @param value
   * @returns {*}
   * @description manage queryString
   * @example updateQueryString('www.exemple.com/?foo=bar','toto',1) -> www.exemple.com/?foo=bar&toto=1
   * @example updateQueryString('www.exemple.com/','toto',1) -> www.exemple.com/?toto=1
   */


  /**
   * @param uri
   * @param prefix
   * @description take uri and return navigation token
   * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
   * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
   */


  _createClass(NavigationManager, [{
    key: 'getNavigationFromUrl',


    /**
     * @returns {boolean}
     */
    value: function getNavigationFromUrl() {
      var location = window.location;
      if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

      var codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);

      if (!codeUrl) return false;

      return this.decodeRouterUrl(codeUrl.substring(1));
    }

    /**
     * @param url
     * @description when page is open pushState and update the QueryString
     */

  }, {
    key: 'handleOpen',
    value: function handleOpen(url) {
      if (!url) return;
      var encodeRouterObj = this.encodeRouterObj(url);
      var newUri = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

      this.pushState(newUri, newUri);
    }

    /**
     * @param prevRoute
     * @param currenRoute
     * @description when close or back pushState and update the QueryString
     */

  }, {
    key: 'handleClose',
    value: function handleClose(prevRoute, currenRoute) {
      var location = window.location;
      var encodeRouterObjPrevUrl = prevRoute ? this.encodeRouterObj(prevRoute) : '';
      var encodeRouterObjCurrentRoute = currenRoute ? this.encodeRouterObj(currenRoute) : '';
      var query = location.search.toString().replace(encodeRouterObjCurrentRoute, encodeRouterObjPrevUrl);

      this.pushState('' + location.pathname + query, query);
    }
  }]);

  return NavigationManager;
}();

exports.default = new NavigationManager();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var navigationMiddleware = function navigationMiddleware(store) {
  return function (next) {
    return function (action) {
      console.log(store, next, action);
      return next(action);
    };
  };
};

exports.default = navigationMiddleware;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});