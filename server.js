module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);



var fetchPosts = function fetchPosts() {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()('https://jsonplaceholder.typicode.com/posts').then(function (res) {
      return res.json();
    }).then(function (posts) {
      return dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* FETCH_POSTS */],
        payload: posts
      });
    });
  };
};

var createPost = function createPost(postData) {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(function (res) {
      return res.json();
    }).then(function (post) {
      return dispatch({
        type: __WEBPACK_IMPORTED_MODULE_0__types__["b" /* NEW_POST */],
        payload: post
      });
    });
  };
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NEW_POST; });
var FETCH_POSTS = 'FETCH_POSTS';
var NEW_POST = 'NEW_POST';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middleware_renderer__ = __webpack_require__(8);


// we'll talk about this in a minute:


var PORT = process.env.PORT || 3000;

// initialize the application and create the routes
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// root (/) should always serve our server rendered page
app.use('^/$', __WEBPACK_IMPORTED_MODULE_1__middleware_renderer__["a" /* default */]);

// other static resources should just be served as they are
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('build', { maxAge: '30d' }));

// all other routes should be rendered based on the route
app.use('*', __WEBPACK_IMPORTED_MODULE_1__middleware_renderer__["a" /* default */]);

// start the app
app.listen(PORT, function (error) {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App__ = __webpack_require__(10);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/server/middleware/renderer.js',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// import our main App component


var path = __webpack_require__(21);
var fs = __webpack_require__(22);

/* harmony default export */ __webpack_exports__["a"] = (function (req, res, next) {

    // point to the html file created by CRA's build tool
    var filePath = path.resolve('build', 'index.html');

    fs.readFile(filePath, 'utf8', function (err, htmlData) {
        if (err) {
            console.error('err', err);
            return res.status(404).end();
        }

        // render the app as a string
        var html = __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_App__["a" /* default */], _defineProperty({
            __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            },
            __self: _this
        }, '__self', _this)));

        // inject the rendered app into our html and send it
        return res.send(htmlData.replace('<div id="root"></div>', '<div id="root">' + html + '</div>'));
    });
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loadable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Posts__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Postform__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Loading__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__(17);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import logo from './logo.svg';










// const PostForm = Loadable({
//   loader: () => import('./components/Postform'),
//   loading: () => Loading
// });

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
        _defineProperty({ store: __WEBPACK_IMPORTED_MODULE_7__store__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, '__self', this),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          _defineProperty({ className: 'App', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, '__self', this),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'header',
            _defineProperty({ className: 'App-header', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            }, '__self', this),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              _defineProperty({ className: 'App-title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              }, '__self', this),
              'Welcome to React'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Postform__["a" /* default */], _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, '__self', this)),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, '__self', this)),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Posts__["a" /* default */], _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, '__self', this))
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_postActions__ = __webpack_require__(3);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/components/Posts.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Posts = function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
  }

  _createClass(Posts, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchPosts();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.newPost) {
        this.props.posts.unshift(nextProps.newPost);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var postItems = this.props.posts.map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          _defineProperty({ key: post.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: _this2
          }, '__self', _this2),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: _this2
            }, '__self', _this2),
            post.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: _this2
            }, '__self', _this2),
            post.body
          )
        );
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _defineProperty({
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, '__self', this),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, '__self', this),
          'Posts'
        ),
        postItems
      );
    }
  }]);

  return Posts;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Posts.propTypes = {
  fetchPosts: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  posts: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
  newPost: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    newPost: state.posts.item
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { fetchPosts: __WEBPACK_IMPORTED_MODULE_3__actions_postActions__["b" /* fetchPosts */] })(Posts));

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_postActions__ = __webpack_require__(3);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/components/Postform.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PostForm = function (_Component) {
  _inherits(PostForm, _Component);

  function PostForm(props) {
    _classCallCheck(this, PostForm);

    var _this = _possibleConstructorReturn(this, (PostForm.__proto__ || Object.getPrototypeOf(PostForm)).call(this, props));

    _this.state = {
      title: '',
      body: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(PostForm, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();

      var post = {
        title: this.state.title,
        body: this.state.body
      };

      this.props.createPost(post);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _defineProperty({
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, '__self', this),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, '__self', this),
          'Add Post'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          _defineProperty({ onSubmit: this.onSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, '__self', this),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            }, '__self', this),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              _defineProperty({
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                },
                __self: this
              }, '__self', this),
              'Title: '
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }, '__self', this)),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _defineProperty({
              type: 'text',
              name: 'title',
              onChange: this.onChange,
              value: this.state.title,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, '__self', this))
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, '__self', this)),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            }, '__self', this),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              _defineProperty({
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              }, '__self', this),
              'Body: '
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', _defineProperty({
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            }, '__self', this)),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', _defineProperty({
              name: 'body',
              onChange: this.onChange,
              value: this.state.body,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            }, '__self', this))
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', _defineProperty({
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, '__self', this)),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            _defineProperty({ type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            }, '__self', this),
            'Submit'
          )
        )
      );
    }
  }]);

  return PostForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PostForm.propTypes = {
  createPost: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(null, { createPost: __WEBPACK_IMPORTED_MODULE_3__actions_postActions__["a" /* createPost */] })(PostForm));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/dimukhin/playground/react/react-ssr-redux/src/components/Loading.js',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* unused harmony default export */ var _unused_webpack_default_export = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        _defineProperty({
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            },
            __self: _this
        }, '__self', _this),
        'Loading...'
    );
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(19);




var initialState = {};

var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a];

var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middleware));

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__postReducer__ = __webpack_require__(20);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  posts: __WEBPACK_IMPORTED_MODULE_1__postReducer__["a" /* default */]
}));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(4);


var initialState = {
  items: [],
  item: {}
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["a" /* FETCH_POSTS */]:
      return Object.assign({}, state, {
        items: action.payload
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["b" /* NEW_POST */]:
      return Object.assign({}, state, {
        item: action.payload
      });
    default:
      return state;
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map