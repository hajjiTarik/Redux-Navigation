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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _exenv = __webpack_require__(7);

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationManager = function () {
  function NavigationManager() {
    var _this = this;

    _classCallCheck(this, NavigationManager);

    this.encodeRouterObj = function (data) {
      var objToString = JSON.stringify(data);
      return window.btoa(objToString);
    };

    this.decodeRouterUrl = function (url) {
      if (!url) return false;
      var decodeResult = window.atob(url);
      return JSON.parse(decodeResult);
    };

    this.startListening = function (pop) {
      window.onpopstate = function () {
        pop();
      };
    };

    this.pushState = function (path, state) {
      history.pushState({
        currentState: state
      }, '', path);
    };

    this.updateQueryString = function (url, key, value) {
      var regexp = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');
      var newUrl = url;
      var hash = '';
      if (value === undefined) {
        if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1$2');

        return newUrl;
      }
      if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1' + key + '=' + value + '$2');

      if (newUrl.indexOf('#') !== -1) {
        hash = newUrl.replace(/.*#/, '#');
        newUrl = newUrl.replace(/#.*/, '');
      }
      var separator = newUrl.indexOf('?') !== -1 ? '&' : '?';
      return '' + newUrl + separator + key + '=' + value + hash;
    };

    this.getNavigationValue = function (url, prefix) {
      return url.split('&').filter(function (value) {
        return value.indexOf(prefix) >= 0;
      }).toString().split(_this.navigationPrefix)[1];
    };

    if (!_exenv2.default.canUseDOM) return;
    this.navigationPrefix = 'nav';
  }

  /**
   * take navigation object return token
   * @param {Object} data
   * @param {Object} data.pageId
   * @returns {String}
   */


  /**
   * take navigation token and return navigation object
   * @param {String} url
   * @returns {Object} from a token to describe the current path of the navigation
   */


  /**
   * listen on popStateEvent
   * @param {Function} pop
   */


  /**
   * push current state and path into history object
   * @param {String} path
   * @param {String} state
   */


  /**
   * manage search url
   * @param {String} url
   * @param {String} key
   * @param {String} value
   * @returns {String}
   * @example
   * updateQueryString('www.example.com/?foo=bar','toto',1) -> www.example.com/?foo=bar&toto=1
   * @example
   * updateQueryString('www.example.com/','toto',1) -> www.example.com/?toto=1
   */


  /**
   * take url and return navigation token
   * @param {String} url
   * @param {String} prefix
   * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
   * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
   */


  _createClass(NavigationManager, [{
    key: 'getNavigationFromUrl',


    /**
     * check if history has a navigation token and reformat the url and return it
     * @returns {Object}
     */
    value: function getNavigationFromUrl() {
      var location = window.location;
      if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

      var codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);
      if (!codeUrl) return false;

      return this.decodeRouterUrl(codeUrl.substring(1));
    }

    /**
     * when page is open pushState and update the Query String
     * @param {String} url
     */

  }, {
    key: 'handleOpen',
    value: function handleOpen(url) {
      if (!url) return;
      var encodeRouterObj = this.encodeRouterObj(url);
      var newUrl = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

      this.pushState(newUrl, newUrl);
    }

    /**
     * when close or back pushState and update the url search
     * @param {String} prevUrl
     * @param {String} currentUrl
     */

  }, {
    key: 'handleClose',
    value: function handleClose(prevUrl, currentUrl) {
      var location = window.location;
      var encodeRouterObjPrevUrl = prevUrl ? this.encodeRouterObj(prevUrl) : '';
      var encodeRouterObjCurrentUrl = currentUrl ? this.encodeRouterObj(currentUrl) : '';
      var query = location.search.toString().replace(encodeRouterObjCurrentUrl, encodeRouterObjPrevUrl);

      this.pushState('' + location.pathname + query, query);
    }
  }]);

  return NavigationManager;
}();

exports.default = new NavigationManager();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof5(exports)) === 'object' && ( false ? 'undefined' : _typeof5(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof5(exports)) === 'object') exports["redux-navigation"] = factory();else root["redux-navigation"] = factory();
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
      /******/return __webpack_require__(__webpack_require__.s = 9);
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

      var _exenv = __webpack_require__(7);

      var _exenv2 = _interopRequireDefault(_exenv);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var NavigationManager = function () {
        function NavigationManager() {
          var _this = this;

          _classCallCheck(this, NavigationManager);

          this.encodeRouterObj = function (data) {
            var objToString = JSON.stringify(data);
            return window.btoa(objToString);
          };

          this.decodeRouterUrl = function (url) {
            if (!url) return false;
            var decodeResult = window.atob(url);
            return JSON.parse(decodeResult);
          };

          this.startListening = function (pop) {
            window.onpopstate = function () {
              pop();
            };
          };

          this.pushState = function (path, state) {
            history.pushState({
              currentState: state
            }, '', path);
          };

          this.updateQueryString = function (url, key, value) {
            var regexp = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');
            var newUrl = url;
            var hash = '';
            if (value === undefined) {
              if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1$2');

              return newUrl;
            }
            if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1' + key + '=' + value + '$2');

            if (newUrl.indexOf('#') !== -1) {
              hash = newUrl.replace(/.*#/, '#');
              newUrl = newUrl.replace(/#.*/, '');
            }
            var separator = newUrl.indexOf('?') !== -1 ? '&' : '?';
            return '' + newUrl + separator + key + '=' + value + hash;
          };

          this.getNavigationValue = function (url, prefix) {
            return url.split('&').filter(function (value) {
              return value.indexOf(prefix) >= 0;
            }).toString().split(_this.navigationPrefix)[1];
          };

          if (!_exenv2.default.canUseDOM) return;
          this.navigationPrefix = 'nav';
        }

        /**
         * take navigation object return token
         * @param {Object} data
         * @param {Object} data.pageId
         * @returns {String}
         */

        /**
         * take navigation token and return navigation object
         * @param {String} url
         * @returns {Object} from a token to describe the current path of the navigation
         */

        /**
         * listen on popStateEvent
         * @param {Function} pop
         */

        /**
         * push current state and path into history object
         * @param {String} path
         * @param {String} state
         */

        /**
         * manage search url
         * @param {String} url
         * @param {String} key
         * @param {String} value
         * @returns {String}
         * @example
         * updateQueryString('www.example.com/?foo=bar','toto',1) -> www.example.com/?foo=bar&toto=1
         * @example
         * updateQueryString('www.example.com/','toto',1) -> www.example.com/?toto=1
         */

        /**
         * take url and return navigation token
         * @param {String} url
         * @param {String} prefix
         * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
         * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
         */

        _createClass(NavigationManager, [{
          key: 'getNavigationFromUrl',

          /**
           * check if history has a navigation token and reformat the url and return it
           * @returns {Object}
           */
          value: function getNavigationFromUrl() {
            var location = window.location;
            if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

            var codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);
            if (!codeUrl) return false;

            return this.decodeRouterUrl(codeUrl.substring(1));
          }

          /**
           * when page is open pushState and update the Query String
           * @param {String} url
           */

        }, {
          key: 'handleOpen',
          value: function handleOpen(url) {
            if (!url) return;
            var encodeRouterObj = this.encodeRouterObj(url);
            var newUrl = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

            this.pushState(newUrl, newUrl);
          }

          /**
           * when close or back pushState and update the url search
           * @param {String} prevUrl
           * @param {String} currentUrl
           */

        }, {
          key: 'handleClose',
          value: function handleClose(prevUrl, currentUrl) {
            var location = window.location;
            var encodeRouterObjPrevUrl = prevUrl ? this.encodeRouterObj(prevUrl) : '';
            var encodeRouterObjCurrentUrl = currentUrl ? this.encodeRouterObj(currentUrl) : '';
            var query = location.search.toString().replace(encodeRouterObjCurrentUrl, encodeRouterObjPrevUrl);

            this.pushState('' + location.pathname + query, query);
          }
        }]);

        return NavigationManager;
      }();

      exports.default = new NavigationManager();

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (module) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

        var _typeof4 = typeof Symbol === "function" && _typeof5(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof5(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof5(obj);
        };

        (function webpackUniversalModuleDefinition(root, factory) {
          if ((false ? 'undefined' : _typeof4(exports)) === 'object' && (false ? 'undefined' : _typeof4(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof4(exports)) === 'object') exports["redux-navigation"] = factory();else root["redux-navigation"] = factory();
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
              /******/return __webpack_require__(__webpack_require__.s = 9);
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

              var _exenv = __webpack_require__(7);

              var _exenv2 = _interopRequireDefault(_exenv);

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }

              var NavigationManager = function () {
                function NavigationManager() {
                  var _this = this;

                  _classCallCheck(this, NavigationManager);

                  this.encodeRouterObj = function (data) {
                    var objToString = JSON.stringify(data);
                    return window.btoa(objToString);
                  };

                  this.decodeRouterUrl = function (url) {
                    if (!url) return false;
                    var decodeResult = window.atob(url);
                    return JSON.parse(decodeResult);
                  };

                  this.startListening = function (pop) {
                    window.onpopstate = function () {
                      pop();
                    };
                  };

                  this.pushState = function (path, state) {
                    history.pushState({
                      currentState: state
                    }, '', path);
                  };

                  this.updateQueryString = function (url, key, value) {
                    var regexp = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');
                    var newUrl = url;
                    var hash = '';
                    if (value === undefined) {
                      if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1$2');

                      return newUrl;
                    }
                    if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1' + key + '=' + value + '$2');

                    if (newUrl.indexOf('#') !== -1) {
                      hash = newUrl.replace(/.*#/, '#');
                      newUrl = newUrl.replace(/#.*/, '');
                    }
                    var separator = newUrl.indexOf('?') !== -1 ? '&' : '?';
                    return '' + newUrl + separator + key + '=' + value + hash;
                  };

                  this.getNavigationValue = function (url, prefix) {
                    return url.split('&').filter(function (value) {
                      return value.indexOf(prefix) >= 0;
                    }).toString().split(_this.navigationPrefix)[1];
                  };

                  if (!_exenv2.default.canUseDOM) return;
                  this.navigationPrefix = 'nav';
                }

                /**
                 * take navigation object return token
                 * @param {Object} data
                 * @param {Object} data.pageId
                 * @returns {String}
                 */

                /**
                 * take navigation token and return navigation object
                 * @param {String} url
                 * @returns {Object} from a token to describe the current path of the navigation
                 */

                /**
                 * listen on popStateEvent
                 * @param {Function} pop
                 */

                /**
                 * push current state and path into history object
                 * @param {String} path
                 * @param {String} state
                 */

                /**
                 * manage search url
                 * @param {String} url
                 * @param {String} key
                 * @param {String} value
                 * @returns {String}
                 * @example
                 * updateQueryString('www.example.com/?foo=bar','toto',1) -> www.example.com/?foo=bar&toto=1
                 * @example
                 * updateQueryString('www.example.com/','toto',1) -> www.example.com/?toto=1
                 */

                /**
                 * take url and return navigation token
                 * @param {String} url
                 * @param {String} prefix
                 * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
                 * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
                 */

                _createClass(NavigationManager, [{
                  key: 'getNavigationFromUrl',

                  /**
                   * check if history has a navigation token and reformat the url and return it
                   * @returns {Object}
                   */
                  value: function getNavigationFromUrl() {
                    var location = window.location;
                    if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

                    var codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);
                    if (!codeUrl) return false;

                    return this.decodeRouterUrl(codeUrl.substring(1));
                  }

                  /**
                   * when page is open pushState and update the Query String
                   * @param {String} url
                   */

                }, {
                  key: 'handleOpen',
                  value: function handleOpen(url) {
                    if (!url) return;
                    var encodeRouterObj = this.encodeRouterObj(url);
                    var newUrl = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

                    this.pushState(newUrl, newUrl);
                  }

                  /**
                   * when close or back pushState and update the url search
                   * @param {String} prevUrl
                   * @param {String} currentUrl
                   */

                }, {
                  key: 'handleClose',
                  value: function handleClose(prevUrl, currentUrl) {
                    var location = window.location;
                    var encodeRouterObjPrevUrl = prevUrl ? this.encodeRouterObj(prevUrl) : '';
                    var encodeRouterObjCurrentUrl = currentUrl ? this.encodeRouterObj(currentUrl) : '';
                    var query = location.search.toString().replace(encodeRouterObjCurrentUrl, encodeRouterObjPrevUrl);

                    this.pushState('' + location.pathname + query, query);
                  }
                }]);

                return NavigationManager;
              }();

              exports.default = new NavigationManager();

              /***/
            },
            /* 1 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";
              /* WEBPACK VAR INJECTION */

              (function (module) {
                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

                var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                  return typeof obj === 'undefined' ? 'undefined' : _typeof4(obj);
                } : function (obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof4(obj);
                };

                (function webpackUniversalModuleDefinition(root, factory) {
                  if ((false ? 'undefined' : _typeof3(exports)) === 'object' && (false ? 'undefined' : _typeof3(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof3(exports)) === 'object') exports["redux-navigation"] = factory();else root["redux-navigation"] = factory();
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
                      /******/return __webpack_require__(__webpack_require__.s = 9);
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

                      var _isEmpty = __webpack_require__(!function webpackMissingModule() {
                        var e = new Error("Cannot find module \"ramda/src/isEmpty\"");e.code = 'MODULE_NOT_FOUND';throw e;
                      }());

                      var _isEmpty2 = _interopRequireDefault(_isEmpty);

                      var _exenv = __webpack_require__(7);

                      var _exenv2 = _interopRequireDefault(_exenv);

                      function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                      }

                      function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                          throw new TypeError("Cannot call a class as a function");
                        }
                      }

                      var NavigationManager = function () {
                        function NavigationManager() {
                          var _this = this;

                          _classCallCheck(this, NavigationManager);

                          this.encodeRouterObj = function (data) {
                            var objToString = JSON.stringify(data);
                            return window.btoa(objToString);
                          };

                          this.decodeRouterUrl = function (url) {
                            if ((0, _isEmpty2.default)(url)) return false;
                            var decodeResult = window.atob(url);
                            return JSON.parse(decodeResult);
                          };

                          this.startListening = function (pop) {
                            window.onpopstate = function () {
                              pop();
                            };
                          };

                          this.pushState = function (path, state) {
                            history.pushState({
                              currentState: state
                            }, '', path);
                          };

                          this.updateQueryString = function (url, key, value) {
                            var regexp = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');
                            var newUrl = url;
                            var hash = '';
                            if (value === undefined) {
                              if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1$2');

                              return newUrl;
                            }
                            if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1' + key + '=' + value + '$2');

                            if (newUrl.indexOf('#') !== -1) {
                              hash = newUrl.replace(/.*#/, '#');
                              newUrl = newUrl.replace(/#.*/, '');
                            }
                            var separator = newUrl.indexOf('?') !== -1 ? '&' : '?';
                            return '' + newUrl + separator + key + '=' + value + hash;
                          };

                          this.getNavigationValue = function (url, prefix) {
                            return url.split('&').filter(function (value) {
                              return value.indexOf(prefix) >= 0;
                            }).toString().split(_this.navigationPrefix)[1];
                          };

                          if (!_exenv2.default.canUseDOM) return;
                          this.navigationPrefix = 'nav';
                        }

                        /**
                         * take navigation object return token
                         * @param {Object} data
                         * @param {Object} data.pageId
                         * @returns {String}
                         */

                        /**
                         * take navigation token and return navigation object
                         * @param {String} url
                         * @returns {Object} from a token to describe the current path of the navigation
                         */

                        /**
                         * listen on popStateEvent
                         * @param {Function} pop
                         */

                        /**
                         * push current state and path into history object
                         * @param {String} path
                         * @param {String} state
                         */

                        /**
                         * manage search url
                         * @param {String} url
                         * @param {String} key
                         * @param {String} value
                         * @returns {String}
                         * @example
                         * updateQueryString('www.example.com/?foo=bar','toto',1) -> www.example.com/?foo=bar&toto=1
                         * @example
                         * updateQueryString('www.example.com/','toto',1) -> www.example.com/?toto=1
                         */

                        /**
                         * take url and return navigation token
                         * @param {String} url
                         * @param {String} prefix
                         * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
                         * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
                         */

                        _createClass(NavigationManager, [{
                          key: 'getNavigationFromUrl',

                          /**
                           * check if history has a navigation token and reformat the url and return it
                           * @returns {Object}
                           */
                          value: function getNavigationFromUrl() {
                            var location = window.location;
                            if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

                            var codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);
                            if (!codeUrl) return false;

                            return this.decodeRouterUrl(codeUrl.substring(1));
                          }

                          /**
                           * when page is open pushState and update the Query String
                           * @param {String} url
                           */

                        }, {
                          key: 'handleOpen',
                          value: function handleOpen(url) {
                            if (!url) return;
                            var encodeRouterObj = this.encodeRouterObj(url);
                            var newUrl = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

                            this.pushState(newUrl, newUrl);
                          }

                          /**
                           * when close or back pushState and update the url search
                           * @param {String} prevUrl
                           * @param {String} currentUrl
                           */

                        }, {
                          key: 'handleClose',
                          value: function handleClose(prevUrl, currentUrl) {
                            var location = window.location;
                            var encodeRouterObjPrevUrl = prevUrl ? this.encodeRouterObj(prevUrl) : '';
                            var encodeRouterObjCurrentUrl = currentUrl ? this.encodeRouterObj(currentUrl) : '';
                            var query = location.search.toString().replace(encodeRouterObjCurrentUrl, encodeRouterObjPrevUrl);

                            this.pushState('' + location.pathname + query, query);
                          }
                        }]);

                        return NavigationManager;
                      }();

                      exports.default = new NavigationManager();

                      /***/
                    },
                    /* 1 */
                    /***/function (module, exports, __webpack_require__) {

                      "use strict";
                      /* WEBPACK VAR INJECTION */

                      (function (module) {
                        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

                        var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                          return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
                        } : function (obj) {
                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
                        };

                        (function webpackUniversalModuleDefinition(root, factory) {
                          if ((false ? 'undefined' : _typeof2(exports)) === 'object' && (false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["redux-navigation"] = factory();else root["redux-navigation"] = factory();
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
                              /******/return __webpack_require__(__webpack_require__.s = 8);
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

                              var _isEmpty = __webpack_require__(!function webpackMissingModule() {
                                var e = new Error("Cannot find module \"ramda/src/isEmpty\"");e.code = 'MODULE_NOT_FOUND';throw e;
                              }());

                              var _isEmpty2 = _interopRequireDefault(_isEmpty);

                              var _exenv = __webpack_require__(!function webpackMissingModule() {
                                var e = new Error("Cannot find module \"exenv\"");e.code = 'MODULE_NOT_FOUND';throw e;
                              }());

                              var _exenv2 = _interopRequireDefault(_exenv);

                              function _interopRequireDefault(obj) {
                                return obj && obj.__esModule ? obj : { default: obj };
                              }

                              function _classCallCheck(instance, Constructor) {
                                if (!(instance instanceof Constructor)) {
                                  throw new TypeError("Cannot call a class as a function");
                                }
                              }

                              var NavigationManager = function () {
                                function NavigationManager() {
                                  var _this = this;

                                  _classCallCheck(this, NavigationManager);

                                  this.encodeRouterObj = function (data) {
                                    var objToString = JSON.stringify(data);
                                    return window.btoa(objToString);
                                  };

                                  this.decodeRouterUrl = function (url) {
                                    if ((0, _isEmpty2.default)(url)) return false;
                                    var decodeResult = window.atob(url);
                                    return JSON.parse(decodeResult);
                                  };

                                  this.startListening = function (pop) {
                                    window.onpopstate = function () {
                                      pop();
                                    };
                                  };

                                  this.pushState = function (path, state) {
                                    history.pushState({
                                      currentState: state
                                    }, '', path);
                                  };

                                  this.updateQueryString = function (url, key, value) {
                                    var regexp = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');
                                    var newUrl = url;
                                    var hash = '';
                                    if (value === undefined) {
                                      if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1$2');

                                      return newUrl;
                                    }
                                    if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1' + key + '=' + value + '$2');

                                    if (newUrl.indexOf('#') !== -1) {
                                      hash = newUrl.replace(/.*#/, '#');
                                      newUrl = newUrl.replace(/#.*/, '');
                                    }
                                    var separator = newUrl.indexOf('?') !== -1 ? '&' : '?';
                                    return '' + newUrl + separator + key + '=' + value + hash;
                                  };

                                  this.getNavigationValue = function (url, prefix) {
                                    return url.split('&').filter(function (value) {
                                      return value.indexOf(prefix) >= 0;
                                    }).toString().split(_this.navigationPrefix)[1];
                                  };

                                  if (!_exenv2.default.canUseDOM) return;
                                  this.navigationPrefix = 'nav';
                                }

                                /**
                                 * take navigation object return token
                                 * @param {Object} data
                                 * @param {Object} data.pageId
                                 * @returns {String}
                                 */

                                /**
                                 * take navigation token and return navigation object
                                 * @param {String} url
                                 * @returns {Object} from a token to describe the current path of the navigation
                                 */

                                /**
                                 * listen on popStateEvent
                                 * @param {Function} pop
                                 */

                                /**
                                 * push current state and path into history object
                                 * @param {String} path
                                 * @param {String} state
                                 */

                                /**
                                 * manage search url
                                 * @param {String} url
                                 * @param {String} key
                                 * @param {String} value
                                 * @returns {String}
                                 * @example
                                 * updateQueryString('www.example.com/?foo=bar','toto',1) -> www.example.com/?foo=bar&toto=1
                                 * @example
                                 * updateQueryString('www.example.com/','toto',1) -> www.example.com/?toto=1
                                 */

                                /**
                                 * take url and return navigation token
                                 * @param {String} url
                                 * @param {String} prefix
                                 * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
                                 * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
                                 */

                                _createClass(NavigationManager, [{
                                  key: 'getNavigationFromUrl',

                                  /**
                                   * check if history has a navigation token and reformat the url and return it
                                   * @returns {Object}
                                   */
                                  value: function getNavigationFromUrl() {
                                    var location = window.location;
                                    if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

                                    var codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);
                                    if (!codeUrl) return false;

                                    return this.decodeRouterUrl(codeUrl.substring(1));
                                  }

                                  /**
                                   * when page is open pushState and update the Query String
                                   * @param {String} url
                                   */

                                }, {
                                  key: 'handleOpen',
                                  value: function handleOpen(url) {
                                    if (!url) return;
                                    var encodeRouterObj = this.encodeRouterObj(url);
                                    var newUrl = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

                                    this.pushState(newUrl, newUrl);
                                  }

                                  /**
                                   * when close or back pushState and update the url search
                                   * @param {String} prevUrl
                                   * @param {String} currentUrl
                                   */

                                }, {
                                  key: 'handleClose',
                                  value: function handleClose(prevUrl, currentUrl) {
                                    var location = window.location;
                                    var encodeRouterObjPrevUrl = prevUrl ? this.encodeRouterObj(prevUrl) : '';
                                    var encodeRouterObjCurrentUrl = currentUrl ? this.encodeRouterObj(currentUrl) : '';
                                    var query = location.search.toString().replace(encodeRouterObjCurrentUrl, encodeRouterObjPrevUrl);

                                    this.pushState('' + location.pathname + query, query);
                                  }
                                }]);

                                return NavigationManager;
                              }();

                              exports.default = new NavigationManager();

                              /***/
                            },
                            /* 1 */
                            /***/function (module, exports, __webpack_require__) {

                              "use strict";
                              /* WEBPACK VAR INJECTION */

                              (function (module) {
                                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

                                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                                  return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                                } : function (obj) {
                                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                                };

                                (function webpackUniversalModuleDefinition(root, factory) {
                                  if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["redux-navigation"] = factory();else root["redux-navigation"] = factory();
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
                                      /******/return __webpack_require__(__webpack_require__.s = 6);
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

                                      var _isEmpty = __webpack_require__(!function webpackMissingModule() {
                                        var e = new Error("Cannot find module \"ramda/src/isEmpty\"");e.code = 'MODULE_NOT_FOUND';throw e;
                                      }());

                                      var _isEmpty2 = _interopRequireDefault(_isEmpty);

                                      var _exenv = __webpack_require__(!function webpackMissingModule() {
                                        var e = new Error("Cannot find module \"exenv\"");e.code = 'MODULE_NOT_FOUND';throw e;
                                      }());

                                      var _exenv2 = _interopRequireDefault(_exenv);

                                      function _interopRequireDefault(obj) {
                                        return obj && obj.__esModule ? obj : { default: obj };
                                      }

                                      function _classCallCheck(instance, Constructor) {
                                        if (!(instance instanceof Constructor)) {
                                          throw new TypeError("Cannot call a class as a function");
                                        }
                                      }

                                      var NavigationManager = function () {
                                        function NavigationManager() {
                                          var _this = this;

                                          _classCallCheck(this, NavigationManager);

                                          this.encodeRouterObj = function (data) {
                                            var objToString = JSON.stringify(data);
                                            return window.btoa(objToString);
                                          };

                                          this.decodeRouterUrl = function (url) {
                                            if ((0, _isEmpty2.default)(url)) return false;
                                            var decodeResult = window.atob(url);
                                            return JSON.parse(decodeResult);
                                          };

                                          this.startListening = function (pop) {
                                            window.onpopstate = function () {
                                              pop();
                                            };
                                          };

                                          this.pushState = function (path, state) {
                                            history.pushState({
                                              currentState: state
                                            }, '', path);
                                          };

                                          this.updateQueryString = function (url, key, value) {
                                            var regexp = new RegExp('([?&])' + key + '=.*?(&|#|$)', 'i');
                                            var newUrl = url;
                                            var hash = '';
                                            if (value === undefined) {
                                              if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1$2');

                                              return newUrl;
                                            }
                                            if (newUrl.match(regexp)) return newUrl.replace(regexp, '$1' + key + '=' + value + '$2');

                                            if (newUrl.indexOf('#') !== -1) {
                                              hash = newUrl.replace(/.*#/, '#');
                                              newUrl = newUrl.replace(/#.*/, '');
                                            }
                                            var separator = newUrl.indexOf('?') !== -1 ? '&' : '?';
                                            return '' + newUrl + separator + key + '=' + value + hash;
                                          };

                                          this.getNavigationValue = function (url, prefix) {
                                            return url.split('&').filter(function (value) {
                                              return value.indexOf(prefix) >= 0;
                                            }).toString().split(_this.navigationPrefix)[1];
                                          };

                                          if (!_exenv2.default.canUseDOM) return;
                                          this.navigationPrefix = 'nav';
                                        }

                                        /**
                                         * take navigation object return token
                                         * @param {Object} data
                                         * @param {Object} data.pageId
                                         * @returns {String}
                                         */

                                        /**
                                         * take navigation token and return navigation object
                                         * @param {String} url
                                         * @returns {Object} from a token to describe the current path of the navigation
                                         */

                                        /**
                                         * listen on popStateEvent
                                         * @param {Function} pop
                                         */

                                        /**
                                         * push current state and path into history object
                                         * @param {String} path
                                         * @param {String} state
                                         */

                                        /**
                                         * manage search url
                                         * @param {String} url
                                         * @param {String} key
                                         * @param {String} value
                                         * @returns {String}
                                         * @example
                                         * updateQueryString('www.example.com/?foo=bar','toto',1) -> www.example.com/?foo=bar&toto=1
                                         * @example
                                         * updateQueryString('www.example.com/','toto',1) -> www.example.com/?toto=1
                                         */

                                        /**
                                         * take url and return navigation token
                                         * @param {String} url
                                         * @param {String} prefix
                                         * @example getNavigationValue('www.example.com/?nav=eyJwYWdlSWQiOiJGaWx0ZXIifQ==', 'nav')
                                         * -> eyJwYWdlSWQiOiJGaWx0ZXIifQ
                                         */

                                        _createClass(NavigationManager, [{
                                          key: 'getNavigationFromUrl',

                                          /**
                                           * check if history has a navigation token and reformat the url and return it
                                           * @returns {Object}
                                           */
                                          value: function getNavigationFromUrl() {
                                            var location = window.location;
                                            if (!location || location.search === '' || location.search === this.navigationPrefix) return false;

                                            var codeUrl = this.getNavigationValue(location.search, this.navigationPrefix);
                                            if (!codeUrl) return false;

                                            return this.decodeRouterUrl(codeUrl.substring(1));
                                          }

                                          /**
                                           * when page is open pushState and update the Query String
                                           * @param {String} url
                                           */

                                        }, {
                                          key: 'handleOpen',
                                          value: function handleOpen(url) {
                                            if (!url) return;
                                            var encodeRouterObj = this.encodeRouterObj(url);
                                            var newUrl = this.updateQueryString(window.location.href, this.navigationPrefix, encodeRouterObj);

                                            this.pushState(newUrl, newUrl);
                                          }

                                          /**
                                           * when close or back pushState and update the url search
                                           * @param {String} prevUrl
                                           * @param {String} currentUrl
                                           */

                                        }, {
                                          key: 'handleClose',
                                          value: function handleClose(prevUrl, currentUrl) {
                                            var location = window.location;
                                            var encodeRouterObjPrevUrl = prevUrl ? this.encodeRouterObj(prevUrl) : '';
                                            var encodeRouterObjCurrentUrl = currentUrl ? this.encodeRouterObj(currentUrl) : '';
                                            var query = location.search.toString().replace(encodeRouterObjCurrentUrl, encodeRouterObjPrevUrl);

                                            this.pushState('' + location.pathname + query, query);
                                          }
                                        }]);

                                        return NavigationManager;
                                      }();

                                      exports.default = new NavigationManager();

                                      /***/
                                    },
                                    /* 1 */
                                    /***/function (module, exports, __webpack_require__) {

                                      "use strict";

                                      Object.defineProperty(exports, "__esModule", {
                                        value: true
                                      });

                                      var _NavigationManager = __webpack_require__(0);

                                      var _NavigationManager2 = _interopRequireDefault(_NavigationManager);

                                      var _middleware = __webpack_require__(3);

                                      var _middleware2 = _interopRequireDefault(_middleware);

                                      function _interopRequireDefault(obj) {
                                        return obj && obj.__esModule ? obj : { default: obj };
                                      }

                                      exports.default = {
                                        navigationMgr: _NavigationManager2.default,
                                        navigationMiddleware: navigationMiddleware
                                      };

                                      /***/
                                    },
                                    /* 2 */
                                    /***/function (module, exports, __webpack_require__) {

                                      "use strict";

                                      Object.defineProperty(exports, "__esModule", {
                                        value: true
                                      });
                                      var NAVIGATION_CLOSE_PAGE = exports.NAVIGATION_CLOSE_PAGE = 'NAVIGATION_CLOSE_PAGE';
                                      var NAVIGATION_OPEN_PAGE = exports.NAVIGATION_OPEN_PAGE = 'NAVIGATION_OPEN_PAGE';
                                      var NAVIGATION_BROWSER_BACK = exports.NAVIGATION_BROWSER_BACK = 'NAVIGATION_BROWSER_BACK';
                                      var NAVIGATION_CURRENT_ROUTE = exports.NAVIGATION_CURRENT_ROUTE = 'NAVIGATION_CURRENT_ROUTE';

                                      /***/
                                    },
                                    /* 3 */
                                    /***/function (module, exports, __webpack_require__) {

                                      "use strict";

                                      Object.defineProperty(exports, "__esModule", {
                                        value: true
                                      });

                                      var _ = __webpack_require__(0);

                                      var _2 = _interopRequireDefault(_);

                                      var _constants = __webpack_require__(2);

                                      var constants = _interopRequireWildcard(_constants);

                                      var _selectors = __webpack_require__(4);

                                      function _interopRequireWildcard(obj) {
                                        if (obj && obj.__esModule) {
                                          return obj;
                                        } else {
                                          var newObj = {};if (obj != null) {
                                            for (var key in obj) {
                                              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                                            }
                                          }newObj.default = obj;return newObj;
                                        }
                                      }

                                      function _interopRequireDefault(obj) {
                                        return obj && obj.__esModule ? obj : { default: obj };
                                      }

                                      function actionHandler(type, action, cb) {
                                        if (!type) return false;
                                        var actionTypes = type instanceof Array ? type : [type];
                                        actionTypes.map(function (actionType) {
                                          if (actionType === action) cb();
                                        });
                                        return true;
                                      }
                                      function openView(_ref, _ref2) {
                                        var page = _ref.page;
                                        var dispatch = _ref2.dispatch;

                                        if (!page) return false;
                                        return function () {
                                          dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
                                          _2.default.handleOpen(page);
                                        };
                                      }
                                      function closeView(_ref3, store) {
                                        var page = _ref3.page;

                                        if (!page) return false;
                                        var prevPath = (0, _selectors.getPreviousPath)(store.getState());
                                        var currentPath = (0, _selectors.getCurrentPath)(store.getState());
                                        return function () {
                                          store.dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
                                          _2.default.handleClose(prevPath, currentPath);
                                        };
                                      }
                                      var navigationMiddleware = function navigationMiddleware(store) {
                                        return function (next) {
                                          return function (action) {
                                            actionHandler(constants.NAVIGATION_OPEN_PAGE, action, openView(action, store));
                                            actionHandler(constants.NAVIGATION_CLOSE_PAGE, action, closeView(action, store));
                                            return next(action);
                                          };
                                        };
                                      };

                                      exports.default = navigationMiddleware;

                                      /***/
                                    },
                                    /* 4 */
                                    /***/function (module, exports, __webpack_require__) {

                                      "use strict";

                                      Object.defineProperty(exports, "__esModule", {
                                        value: true
                                      });
                                      exports.getPreviousPath = exports.getCurrentPath = undefined;

                                      var _utils = __webpack_require__(5);

                                      var _utils2 = _interopRequireDefault(_utils);

                                      function _interopRequireDefault(obj) {
                                        return obj && obj.__esModule ? obj : { default: obj };
                                      }

                                      var getCurrentPath = exports.getCurrentPath = function getCurrentPath(state) {
                                        if (!state.router) return false;
                                        return state.router.currentRoute;
                                      };
                                      var getPreviousPath = exports.getPreviousPath = function getPreviousPath(state) {
                                        if (!state.router) return false;
                                        return (0, _utils2.default)(state.router.navigation);
                                      };

                                      /***/
                                    },
                                    /* 5 */
                                    /***/function (module, exports, __webpack_require__) {

                                      "use strict";

                                      Object.defineProperty(exports, "__esModule", {
                                        value: true
                                      });
                                      var last = function last(arr) {
                                        return arr[arr.length - 1];
                                      };
                                      exports.default = last;

                                      /***/
                                    },
                                    /* 6 */
                                    /***/function (module, exports, __webpack_require__) {

                                      (function webpackMissingModule() {
                                        throw new Error("Cannot find module \"/Users/hajjiTarek/Desktop/redux-navigation/dist/bundle.js\"");
                                      })();
                                      module.exports = __webpack_require__(1);

                                      /***/
                                    }])
                                  );
                                });
                                /* WEBPACK VAR INJECTION */
                              }).call(exports, __webpack_require__(7)(module));

                              /***/
                            },
                            /* 2 */
                            /***/function (module, exports, __webpack_require__) {

                              "use strict";

                              Object.defineProperty(exports, "__esModule", {
                                value: true
                              });

                              var _NavigationManager = __webpack_require__(0);

                              var _NavigationManager2 = _interopRequireDefault(_NavigationManager);

                              var _middleware = __webpack_require__(4);

                              var _middleware2 = _interopRequireDefault(_middleware);

                              function _interopRequireDefault(obj) {
                                return obj && obj.__esModule ? obj : { default: obj };
                              }

                              exports.default = {
                                navigationMgr: _NavigationManager2.default,
                                navigationMiddleware: navigationMiddleware
                              };

                              /***/
                            },
                            /* 3 */
                            /***/function (module, exports, __webpack_require__) {

                              "use strict";

                              Object.defineProperty(exports, "__esModule", {
                                value: true
                              });
                              var NAVIGATION_CLOSE_PAGE = exports.NAVIGATION_CLOSE_PAGE = 'NAVIGATION_CLOSE_PAGE';
                              var NAVIGATION_OPEN_PAGE = exports.NAVIGATION_OPEN_PAGE = 'NAVIGATION_OPEN_PAGE';
                              var NAVIGATION_BROWSER_BACK = exports.NAVIGATION_BROWSER_BACK = 'NAVIGATION_BROWSER_BACK';
                              var NAVIGATION_CURRENT_ROUTE = exports.NAVIGATION_CURRENT_ROUTE = 'NAVIGATION_CURRENT_ROUTE';

                              /***/
                            },
                            /* 4 */
                            /***/function (module, exports, __webpack_require__) {

                              "use strict";

                              Object.defineProperty(exports, "__esModule", {
                                value: true
                              });

                              var _ = __webpack_require__(0);

                              var _2 = _interopRequireDefault(_);

                              var _constants = __webpack_require__(3);

                              var constants = _interopRequireWildcard(_constants);

                              var _selectors = __webpack_require__(5);

                              function _interopRequireWildcard(obj) {
                                if (obj && obj.__esModule) {
                                  return obj;
                                } else {
                                  var newObj = {};if (obj != null) {
                                    for (var key in obj) {
                                      if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                                    }
                                  }newObj.default = obj;return newObj;
                                }
                              }

                              function _interopRequireDefault(obj) {
                                return obj && obj.__esModule ? obj : { default: obj };
                              }

                              function actionHandler(type, action, cb) {
                                if (!type) return false;
                                var actionTypes = type instanceof Array ? type : [type];
                                actionTypes.map(function (actionType) {
                                  if (actionType === action) cb();
                                });
                                return true;
                              }
                              function openView(_ref, _ref2) {
                                var page = _ref.page;
                                var dispatch = _ref2.dispatch;

                                if (!page) return false;
                                return function () {
                                  dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
                                  _2.default.handleOpen(page);
                                };
                              }
                              function closeView(_ref3, store) {
                                var page = _ref3.page;

                                if (!page) return false;
                                var prevPath = (0, _selectors.getPreviousPath)(store.getState());
                                var currentPath = (0, _selectors.getCurrentPath)(store.getState());
                                return function () {
                                  store.dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
                                  _2.default.handleClose(prevPath, currentPath);
                                };
                              }
                              var navigationMiddleware = function navigationMiddleware(store) {
                                return function (next) {
                                  return function (action) {
                                    actionHandler(constants.NAVIGATION_OPEN_PAGE, action, openView(action, store));
                                    actionHandler(constants.NAVIGATION_CLOSE_PAGE, action, closeView(action, store));
                                    return next(action);
                                  };
                                };
                              };

                              exports.default = navigationMiddleware;

                              /***/
                            },
                            /* 5 */
                            /***/function (module, exports, __webpack_require__) {

                              "use strict";

                              Object.defineProperty(exports, "__esModule", {
                                value: true
                              });
                              exports.getPreviousPath = exports.getCurrentPath = undefined;

                              var _utils = __webpack_require__(6);

                              var _utils2 = _interopRequireDefault(_utils);

                              function _interopRequireDefault(obj) {
                                return obj && obj.__esModule ? obj : { default: obj };
                              }

                              var getCurrentPath = exports.getCurrentPath = function getCurrentPath(state) {
                                if (!state.router) return false;
                                return state.router.currentRoute;
                              };
                              var getPreviousPath = exports.getPreviousPath = function getPreviousPath(state) {
                                if (!state.router) return false;
                                return (0, _utils2.default)(state.router.navigation);
                              };

                              /***/
                            },
                            /* 6 */
                            /***/function (module, exports, __webpack_require__) {

                              "use strict";

                              Object.defineProperty(exports, "__esModule", {
                                value: true
                              });
                              var last = function last(arr) {
                                return arr[arr.length - 1];
                              };
                              exports.default = last;

                              /***/
                            },
                            /* 7 */
                            /***/function (module, exports) {

                              module.exports = function (module) {
                                if (!module.webpackPolyfill) {
                                  module.deprecate = function () {};
                                  module.paths = [];
                                  // module.parent = undefined by default
                                  if (!module.children) module.children = [];
                                  Object.defineProperty(module, "loaded", {
                                    enumerable: true,
                                    get: function get() {
                                      return module.l;
                                    }
                                  });
                                  Object.defineProperty(module, "id", {
                                    enumerable: true,
                                    get: function get() {
                                      return module.i;
                                    }
                                  });
                                  module.webpackPolyfill = 1;
                                }
                                return module;
                              };

                              /***/
                            },
                            /* 8 */
                            /***/function (module, exports, __webpack_require__) {

                              __webpack_require__(1);
                              module.exports = __webpack_require__(2);

                              /***/
                            }])
                          );
                        });
                        /* WEBPACK VAR INJECTION */
                      }).call(exports, __webpack_require__(8)(module));

                      /***/
                    },
                    /* 2 */
                    /***/function (module, exports, __webpack_require__) {

                      "use strict";

                      Object.defineProperty(exports, "__esModule", {
                        value: true
                      });

                      var _NavigationManager = __webpack_require__(0);

                      var _NavigationManager2 = _interopRequireDefault(_NavigationManager);

                      var _middleware = __webpack_require__(4);

                      var _middleware2 = _interopRequireDefault(_middleware);

                      function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                      }

                      exports.default = {
                        navigationMgr: _NavigationManager2.default,
                        navigationMiddleware: navigationMiddleware
                      };

                      /***/
                    },
                    /* 3 */
                    /***/function (module, exports, __webpack_require__) {

                      "use strict";

                      Object.defineProperty(exports, "__esModule", {
                        value: true
                      });
                      var NAVIGATION_CLOSE_PAGE = exports.NAVIGATION_CLOSE_PAGE = 'NAVIGATION_CLOSE_PAGE';
                      var NAVIGATION_OPEN_PAGE = exports.NAVIGATION_OPEN_PAGE = 'NAVIGATION_OPEN_PAGE';
                      var NAVIGATION_BROWSER_BACK = exports.NAVIGATION_BROWSER_BACK = 'NAVIGATION_BROWSER_BACK';
                      var NAVIGATION_CURRENT_ROUTE = exports.NAVIGATION_CURRENT_ROUTE = 'NAVIGATION_CURRENT_ROUTE';

                      /***/
                    },
                    /* 4 */
                    /***/function (module, exports, __webpack_require__) {

                      "use strict";

                      Object.defineProperty(exports, "__esModule", {
                        value: true
                      });

                      var _ = __webpack_require__(0);

                      var _2 = _interopRequireDefault(_);

                      var _constants = __webpack_require__(3);

                      var constants = _interopRequireWildcard(_constants);

                      var _selectors = __webpack_require__(5);

                      function _interopRequireWildcard(obj) {
                        if (obj && obj.__esModule) {
                          return obj;
                        } else {
                          var newObj = {};if (obj != null) {
                            for (var key in obj) {
                              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                            }
                          }newObj.default = obj;return newObj;
                        }
                      }

                      function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                      }

                      function actionHandler(type, action, cb) {
                        if (!type) return false;
                        var actionTypes = type instanceof Array ? type : [type];
                        actionTypes.map(function (actionType) {
                          if (actionType === action) cb();
                        });
                        return true;
                      }
                      function openView(_ref, _ref2) {
                        var page = _ref.page;
                        var dispatch = _ref2.dispatch;

                        if (!page) return false;
                        return function () {
                          dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
                          _2.default.handleOpen(page);
                        };
                      }
                      function closeView(_ref3, store) {
                        var page = _ref3.page;

                        if (!page) return false;
                        var prevPath = (0, _selectors.getPreviousPath)(store.getState());
                        var currentPath = (0, _selectors.getCurrentPath)(store.getState());
                        return function () {
                          store.dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
                          _2.default.handleClose(prevPath, currentPath);
                        };
                      }
                      var navigationMiddleware = function navigationMiddleware(store) {
                        return function (next) {
                          return function (action) {
                            actionHandler(constants.NAVIGATION_OPEN_PAGE, action, openView(action, store));
                            actionHandler(constants.NAVIGATION_CLOSE_PAGE, action, closeView(action, store));
                            return next(action);
                          };
                        };
                      };

                      exports.default = navigationMiddleware;

                      /***/
                    },
                    /* 5 */
                    /***/function (module, exports, __webpack_require__) {

                      "use strict";

                      Object.defineProperty(exports, "__esModule", {
                        value: true
                      });
                      exports.getPreviousPath = exports.getCurrentPath = undefined;

                      var _utils = __webpack_require__(6);

                      var _utils2 = _interopRequireDefault(_utils);

                      function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                      }

                      var getCurrentPath = exports.getCurrentPath = function getCurrentPath(state) {
                        if (!state.router) return false;
                        return state.router.currentRoute;
                      };
                      var getPreviousPath = exports.getPreviousPath = function getPreviousPath(state) {
                        if (!state.router) return false;
                        return (0, _utils2.default)(state.router.navigation);
                      };

                      /***/
                    },
                    /* 6 */
                    /***/function (module, exports, __webpack_require__) {

                      "use strict";

                      Object.defineProperty(exports, "__esModule", {
                        value: true
                      });
                      var last = function last(arr) {
                        return arr[arr.length - 1];
                      };
                      exports.default = last;

                      /***/
                    },
                    /* 7 */
                    /***/function (module, exports, __webpack_require__) {

                      var __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                         Copyright (c) 2015 Jed Watson.
                                                         Based on code that is Copyright 2013-2015, Facebook, Inc.
                                                         All rights reserved.
                                                         */
                      /* global define */

                      (function () {
                        'use strict';

                        var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

                        var ExecutionEnvironment = {

                          canUseDOM: canUseDOM,

                          canUseWorkers: typeof Worker !== 'undefined',

                          canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

                          canUseViewport: canUseDOM && !!window.screen

                        };

                        if (true) {
                          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                            return ExecutionEnvironment;
                          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                        } else if (typeof module !== 'undefined' && module.exports) {
                          module.exports = ExecutionEnvironment;
                        } else {
                          window.ExecutionEnvironment = ExecutionEnvironment;
                        }
                      })();

                      /***/
                    },
                    /* 8 */
                    /***/function (module, exports) {

                      module.exports = function (module) {
                        if (!module.webpackPolyfill) {
                          module.deprecate = function () {};
                          module.paths = [];
                          // module.parent = undefined by default
                          if (!module.children) module.children = [];
                          Object.defineProperty(module, "loaded", {
                            enumerable: true,
                            get: function get() {
                              return module.l;
                            }
                          });
                          Object.defineProperty(module, "id", {
                            enumerable: true,
                            get: function get() {
                              return module.i;
                            }
                          });
                          module.webpackPolyfill = 1;
                        }
                        return module;
                      };

                      /***/
                    },
                    /* 9 */
                    /***/function (module, exports, __webpack_require__) {

                      __webpack_require__(1);
                      module.exports = __webpack_require__(2);

                      /***/
                    }])
                  );
                });
                /* WEBPACK VAR INJECTION */
              }).call(exports, __webpack_require__(8)(module));

              /***/
            },
            /* 2 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _NavigationManager = __webpack_require__(0);

              var _NavigationManager2 = _interopRequireDefault(_NavigationManager);

              var _middleware = __webpack_require__(4);

              var _middleware2 = _interopRequireDefault(_middleware);

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              exports.default = {
                navigationMgr: _NavigationManager2.default,
                navigationMiddleware: navigationMiddleware
              };

              /***/
            },
            /* 3 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              var NAVIGATION_CLOSE_PAGE = exports.NAVIGATION_CLOSE_PAGE = 'NAVIGATION_CLOSE_PAGE';
              var NAVIGATION_OPEN_PAGE = exports.NAVIGATION_OPEN_PAGE = 'NAVIGATION_OPEN_PAGE';
              var NAVIGATION_BROWSER_BACK = exports.NAVIGATION_BROWSER_BACK = 'NAVIGATION_BROWSER_BACK';
              var NAVIGATION_CURRENT_ROUTE = exports.NAVIGATION_CURRENT_ROUTE = 'NAVIGATION_CURRENT_ROUTE';

              /***/
            },
            /* 4 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _ = __webpack_require__(0);

              var _2 = _interopRequireDefault(_);

              var _constants = __webpack_require__(3);

              var constants = _interopRequireWildcard(_constants);

              var _selectors = __webpack_require__(5);

              function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                  return obj;
                } else {
                  var newObj = {};if (obj != null) {
                    for (var key in obj) {
                      if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                  }newObj.default = obj;return newObj;
                }
              }

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              function actionHandler(type, action, cb) {
                if (!type) return false;
                var actionTypes = type instanceof Array ? type : [type];
                actionTypes.map(function (actionType) {
                  if (actionType === action) cb();
                });
                return true;
              }
              function openView(_ref, _ref2) {
                var page = _ref.page;
                var dispatch = _ref2.dispatch;

                if (!page) return false;
                return function () {
                  dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
                  _2.default.handleOpen(page);
                };
              }
              function closeView(_ref3, store) {
                var page = _ref3.page;

                if (!page) return false;
                var prevPath = (0, _selectors.getPreviousPath)(store.getState());
                var currentPath = (0, _selectors.getCurrentPath)(store.getState());
                return function () {
                  store.dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
                  _2.default.handleClose(prevPath, currentPath);
                };
              }
              var navigationMiddleware = function navigationMiddleware(store) {
                return function (next) {
                  return function (action) {
                    actionHandler(constants.NAVIGATION_OPEN_PAGE, action, openView(action, store));
                    actionHandler(constants.NAVIGATION_CLOSE_PAGE, action, closeView(action, store));
                    return next(action);
                  };
                };
              };

              exports.default = navigationMiddleware;

              /***/
            },
            /* 5 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.getPreviousPath = exports.getCurrentPath = undefined;

              var _utils = __webpack_require__(6);

              var _utils2 = _interopRequireDefault(_utils);

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              var getCurrentPath = exports.getCurrentPath = function getCurrentPath(state) {
                if (!state.router) return false;
                return state.router.currentRoute;
              };
              var getPreviousPath = exports.getPreviousPath = function getPreviousPath(state) {
                if (!state.router) return false;
                return (0, _utils2.default)(state.router.navigation);
              };

              /***/
            },
            /* 6 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              var last = function last(arr) {
                return arr[arr.length - 1];
              };
              exports.default = last;

              /***/
            },
            /* 7 */
            /***/function (module, exports, __webpack_require__) {

              var __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                                 Copyright (c) 2015 Jed Watson.
                                                 Based on code that is Copyright 2013-2015, Facebook, Inc.
                                                 All rights reserved.
                                                 */
              /* global define */

              (function () {
                'use strict';

                var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

                var ExecutionEnvironment = {

                  canUseDOM: canUseDOM,

                  canUseWorkers: typeof Worker !== 'undefined',

                  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

                  canUseViewport: canUseDOM && !!window.screen

                };

                if (true) {
                  !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return ExecutionEnvironment;
                  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof module !== 'undefined' && module.exports) {
                  module.exports = ExecutionEnvironment;
                } else {
                  window.ExecutionEnvironment = ExecutionEnvironment;
                }
              })();

              /***/
            },
            /* 8 */
            /***/function (module, exports) {

              module.exports = function (module) {
                if (!module.webpackPolyfill) {
                  module.deprecate = function () {};
                  module.paths = [];
                  // module.parent = undefined by default
                  if (!module.children) module.children = [];
                  Object.defineProperty(module, "loaded", {
                    enumerable: true,
                    get: function get() {
                      return module.l;
                    }
                  });
                  Object.defineProperty(module, "id", {
                    enumerable: true,
                    get: function get() {
                      return module.i;
                    }
                  });
                  module.webpackPolyfill = 1;
                }
                return module;
              };

              /***/
            },
            /* 9 */
            /***/function (module, exports, __webpack_require__) {

              __webpack_require__(1);
              module.exports = __webpack_require__(2);

              /***/
            }])
          );
        });
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(8)(module));

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _NavigationManager = __webpack_require__(0);

      var _NavigationManager2 = _interopRequireDefault(_NavigationManager);

      var _middleware = __webpack_require__(4);

      var _middleware2 = _interopRequireDefault(_middleware);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = {
        navigationMgr: _NavigationManager2.default,
        navigationMiddleware: navigationMiddleware
      };

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var NAVIGATION_CLOSE_PAGE = exports.NAVIGATION_CLOSE_PAGE = 'NAVIGATION_CLOSE_PAGE';
      var NAVIGATION_OPEN_PAGE = exports.NAVIGATION_OPEN_PAGE = 'NAVIGATION_OPEN_PAGE';
      var NAVIGATION_BROWSER_BACK = exports.NAVIGATION_BROWSER_BACK = 'NAVIGATION_BROWSER_BACK';
      var NAVIGATION_CURRENT_ROUTE = exports.NAVIGATION_CURRENT_ROUTE = 'NAVIGATION_CURRENT_ROUTE';

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _ = __webpack_require__(0);

      var _2 = _interopRequireDefault(_);

      var _constants = __webpack_require__(3);

      var constants = _interopRequireWildcard(_constants);

      var _selectors = __webpack_require__(5);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }newObj.default = obj;return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function actionHandler(type, action, cb) {
        if (!type) return false;
        var actionTypes = type instanceof Array ? type : [type];
        actionTypes.map(function (actionType) {
          if (actionType === action) return cb();
          return false;
        });
        return true;
      }
      function openView(_ref, _ref2) {
        var page = _ref.page;
        var dispatch = _ref2.dispatch;

        if (!page) return false;
        return function () {
          dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
          _2.default.handleOpen(page);
        };
      }
      function closeView(_ref3, store) {
        var page = _ref3.page;

        if (!page) return false;
        var prevPath = (0, _selectors.getPreviousPath)(store.getState());
        var currentPath = (0, _selectors.getCurrentPath)(store.getState());
        return function () {
          store.dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
          _2.default.handleClose(prevPath, currentPath);
        };
      }
      var navigationMiddleware = function navigationMiddleware(store) {
        return function (next) {
          return function (action) {
            actionHandler(constants.NAVIGATION_OPEN_PAGE, action, openView(action, store));
            actionHandler([constants.NAVIGATION_CLOSE_PAGE, constants.NAVIGATION_BROWSER_BACK], action, closeView(action, store));
            return next(action);
          };
        };
      };

      exports.default = navigationMiddleware;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getPreviousPath = exports.getCurrentPath = undefined;

      var _utils = __webpack_require__(6);

      var _utils2 = _interopRequireDefault(_utils);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var getCurrentPath = exports.getCurrentPath = function getCurrentPath(state) {
        if (!state.router) return false;
        return state.router.currentRoute;
      };
      var getPreviousPath = exports.getPreviousPath = function getPreviousPath(state) {
        if (!state.router) return false;
        return (0, _utils2.default)(state.router.navigation);
      };

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var last = function last(arr) {
        return arr[arr.length - 1];
      };
      exports.default = last;

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      var __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                         Copyright (c) 2015 Jed Watson.
                                         Based on code that is Copyright 2013-2015, Facebook, Inc.
                                         All rights reserved.
                                         */
      /* global define */

      (function () {
        'use strict';

        var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

        var ExecutionEnvironment = {

          canUseDOM: canUseDOM,

          canUseWorkers: typeof Worker !== 'undefined',

          canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

          canUseViewport: canUseDOM && !!window.screen

        };

        if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return ExecutionEnvironment;
          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module !== 'undefined' && module.exports) {
          module.exports = ExecutionEnvironment;
        } else {
          window.ExecutionEnvironment = ExecutionEnvironment;
        }
      })();

      /***/
    },
    /* 8 */
    /***/function (module, exports) {

      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};
          module.paths = [];
          // module.parent = undefined by default
          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }
        return module;
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      __webpack_require__(1);
      module.exports = __webpack_require__(2);

      /***/
    }])
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavigationManager = __webpack_require__(0);

var _NavigationManager2 = _interopRequireDefault(_NavigationManager);

var _middleware = __webpack_require__(4);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  navigationMgr: _NavigationManager2.default,
  navigationMiddleware: navigationMiddleware
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NAVIGATION_CLOSE_PAGE = exports.NAVIGATION_CLOSE_PAGE = 'NAVIGATION_CLOSE_PAGE';
var NAVIGATION_OPEN_PAGE = exports.NAVIGATION_OPEN_PAGE = 'NAVIGATION_OPEN_PAGE';
var NAVIGATION_BROWSER_BACK = exports.NAVIGATION_BROWSER_BACK = 'NAVIGATION_BROWSER_BACK';
var NAVIGATION_CURRENT_ROUTE = exports.NAVIGATION_CURRENT_ROUTE = 'NAVIGATION_CURRENT_ROUTE';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _constants = __webpack_require__(3);

var constants = _interopRequireWildcard(_constants);

var _selectors = __webpack_require__(5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function actionHandler(type, action, cb) {
  if (!type) return false;
  var actionTypes = type instanceof Array ? type : [type];
  actionTypes.map(function (actionType) {
    if (actionType === action) return cb();
    return false;
  });
  return true;
}
function openView(_ref, _ref2) {
  var page = _ref.page;
  var dispatch = _ref2.dispatch;

  if (!page) return false;
  return function () {
    dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
    _2.default.handleOpen(page);
  };
}
function closeView(_ref3, store) {
  var page = _ref3.page;

  if (!page) return false;
  var prevPath = (0, _selectors.getPreviousPath)(store.getState());
  var currentPath = (0, _selectors.getCurrentPath)(store.getState());
  return function () {
    store.dispatch({ type: constants.NAVIGATION_CURRENT_ROUTE, page: page });
    _2.default.handleClose(prevPath, currentPath);
  };
}
var navigationMiddleware = function navigationMiddleware(store) {
  return function (next) {
    return function (action) {
      actionHandler(constants.NAVIGATION_OPEN_PAGE, action, openView(action, store));
      actionHandler([constants.NAVIGATION_CLOSE_PAGE, constants.NAVIGATION_BROWSER_BACK], action, closeView(action, store));
      return next(action);
    };
  };
};

exports.default = navigationMiddleware;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPreviousPath = exports.getCurrentPath = undefined;

var _utils = __webpack_require__(6);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurrentPath = exports.getCurrentPath = function getCurrentPath(state) {
  if (!state.router) return false;
  return state.router.currentRoute;
};
var getPreviousPath = exports.getPreviousPath = function getPreviousPath(state) {
  if (!state.router) return false;
  return (0, _utils2.default)(state.router.navigation);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var last = function last(arr) {
  return arr[arr.length - 1];
};
exports.default = last;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});