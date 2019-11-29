webpackHotUpdate("cms",{

/***/ "../gatsby-theme-bd-salong/src/templates/services-page.js":
/*!****************************************************************!*\
  !*** ../gatsby-theme-bd-salong/src/templates/services-page.js ***!
  \****************************************************************/
/*! exports provided: ServicesPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageTemplate", function() { return ServicesPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "../node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "../gatsby-theme-bd-salong/src/components/Layout.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Content */ "../gatsby-theme-bd-salong/src/components/Content.js");
var _jsxFileName = "D:\\web\\bokadirekt\\gatsby-theme-bd-salong\\src\\templates\\services-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var ServicesPageTemplate = function ServicesPageTemplate(_ref) {
  var title = _ref.title,
      helmet = _ref.helmet;
  var PageContent = _components_Content__WEBPACK_IMPORTED_MODULE_5__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, helmet || '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title is-size-2 has-text-weight-bold is-bold-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title)))));
};
ServicesPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  helmet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var ServicesPage = function ServicesPage(_ref2) {
  var data = _ref2.data;
  var serviceCategory = data.allServiceListJson.edges[0].node;
  var title = serviceCategory.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesPageTemplate, {
    helmet: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      titleTemplate: "%s | Blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "" + title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })),
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
};

ServicesPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
};
var _default = ServicesPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "2166550887";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ServicesPageTemplate, "ServicesPageTemplate", "D:\\web\\bokadirekt\\gatsby-theme-bd-salong\\src\\templates\\services-page.js");
  reactHotLoader.register(ServicesPage, "ServicesPage", "D:\\web\\bokadirekt\\gatsby-theme-bd-salong\\src\\templates\\services-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "D:\\web\\bokadirekt\\gatsby-theme-bd-salong\\src\\templates\\services-page.js");
  reactHotLoader.register(_default, "default", "D:\\web\\bokadirekt\\gatsby-theme-bd-salong\\src\\templates\\services-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.f47b31baf48608316687.hot-update.js.map