webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CampaignManager/CampaignManager.js":
/*!***********************************************************!*\
  !*** ./src/components/CampaignManager/CampaignManager.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CampaignManager.module.scss */ "./src/components/CampaignManager/CampaignManager.module.scss");
/* harmony import */ var _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\sagi.levi\\DevProjects\\sawtooth-dev\\client-next\\src\\components\\CampaignManager\\CampaignManager.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var CampaignManager = function CampaignManager(props) {
  var _jsx;

  var name = props.name,
      admins = props.admins;

  var statusOnClickHandler = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(event.target.innerText); // const status = event.target.innerText.toLowerCase();
              // const proxyRes = await axios.post(
              //   `http://127.0.0.1:5000/campaigns_state/${name}?status=${status}`,
              // );
              // const { data } = proxyRes;
              // const { success, res } = data;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function statusOnClickHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", (_jsx = {
    className: "row"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.section), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }), _jsx), __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, name), __jsx("ul", {
    className: "list-inline ".concat(_CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.statusList),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, ['setup', 'open', 'suspended', 'closed'].map(function (item) {
    return __jsx("li", {
      key: item,
      className: "".concat(_CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.status, " list-inline-item"),
      onClick: statusOnClickHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, item);
  }))), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Admins:"), console.log(props))));
};

_c = CampaignManager;
/* harmony default export */ __webpack_exports__["default"] = (CampaignManager);

var _c;

$RefreshReg$(_c, "CampaignManager");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FtcGFpZ25NYW5hZ2VyL0NhbXBhaWduTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJDYW1wYWlnbk1hbmFnZXIiLCJwcm9wcyIsIm5hbWUiLCJhZG1pbnMiLCJzdGF0dXNPbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImlubmVyVGV4dCIsIkNhbXBhaWduTWFuYWdlclN0eWxlcyIsInNlY3Rpb24iLCJoZWFkZXIiLCJzdGF0dXNMaXN0IiwibWFwIiwiaXRlbSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUN6QkMsSUFEeUIsR0FDUkQsS0FEUSxDQUN6QkMsSUFEeUI7QUFBQSxNQUNuQkMsTUFEbUIsR0FDUkYsS0FEUSxDQUNuQkUsTUFEbUI7O0FBRWpDLE1BQU1DLG9CQUFvQjtBQUFBLGdNQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDM0JDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFNBQXpCLEVBRDJCLENBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBcEJMLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxLQUExQjs7QUFTQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtIQUFnQ00sbUVBQXFCLENBQUNDLE9BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUQsbUVBQXFCLENBQUNFLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9WLElBQVAsQ0FERixFQUVFO0FBQUksYUFBUyx3QkFBaUJRLG1FQUFxQixDQUFDRyxVQUF2QyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFdBQWxCLEVBQStCLFFBQS9CLEVBQXlDQyxHQUF6QyxDQUE2QyxVQUFDQyxJQUFEO0FBQUEsV0FDNUM7QUFDRSxTQUFHLEVBQUVBLElBRFA7QUFFRSxlQUFTLFlBQUtMLG1FQUFxQixDQUFDTSxNQUEzQixzQkFGWDtBQUdFLGFBQU8sRUFBRVosb0JBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHVyxJQUxILENBRDRDO0FBQUEsR0FBN0MsQ0FESCxDQUZGLENBREYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsRUFnQkdULE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaLENBaEJILENBREYsQ0FERixDQURGO0FBOEJELENBekNEOztLQUFNRCxlO0FBMENTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZWRlM2ZmOTQ0YmRlZDkzZTY2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYW1wYWlnbk1hbmFnZXJTdHlsZXMgZnJvbSAnLi9DYW1wYWlnbk1hbmFnZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQ2FtcGFpZ25NYW5hZ2VyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgYWRtaW5zIH0gPSBwcm9wcztcbiAgY29uc3Qgc3RhdHVzT25DbGlja0hhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAvLyBjb25zdCBzdGF0dXMgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gY29uc3QgcHJveHlSZXMgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgIC8vICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9jYW1wYWlnbnNfc3RhdGUvJHtuYW1lfT9zdGF0dXM9JHtzdGF0dXN9YCxcbiAgICAvLyApO1xuICAgIC8vIGNvbnN0IHsgZGF0YSB9ID0gcHJveHlSZXM7XG4gICAgLy8gY29uc3QgeyBzdWNjZXNzLCByZXMgfSA9IGRhdGE7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgY2xhc3NOYW1lPXtDYW1wYWlnbk1hbmFnZXJTdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17Q2FtcGFpZ25NYW5hZ2VyU3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgbGlzdC1pbmxpbmUgJHtDYW1wYWlnbk1hbmFnZXJTdHlsZXMuc3RhdHVzTGlzdH1gfT5cbiAgICAgICAgICAgICAge1snc2V0dXAnLCAnb3BlbicsICdzdXNwZW5kZWQnLCAnY2xvc2VkJ10ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0NhbXBhaWduTWFuYWdlclN0eWxlcy5zdGF0dXN9IGxpc3QtaW5saW5lLWl0ZW1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RhdHVzT25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGg2PkFkbWluczo8L2g2PlxuICAgICAgICAgIHtjb25zb2xlLmxvZyhwcm9wcyl9XG4gICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPlxuICAgICAgICAgICAge2FkbWlucyAmJlxuICAgICAgICAgICAgICBhZG1pbnMubWFwKChhZG1pbikgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+e2FkbWlufTwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTWFuYWdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=