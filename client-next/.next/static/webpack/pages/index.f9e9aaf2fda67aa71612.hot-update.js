webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CampaignManager/CampaignManager.js":
/*!***********************************************************!*\
  !*** ./src/components/CampaignManager/CampaignManager.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CampaignManager.module.scss */ "./src/components/CampaignManager/CampaignManager.module.scss");
/* harmony import */ var _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\sagi.levi\\DevProjects\\sawtooth-dev\\client-next\\src\\components\\CampaignManager\\CampaignManager.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var CampaignManager = function CampaignManager(props) {
  var name = props.name,
      admins = props.admins;

  var statusOnClickHandler = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
  }, __jsx("h3", {
    className: _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, name), __jsx("ul", {
    className: "list-inline ".concat(_CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.statusList),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, ['setup', 'open', 'suspended', 'closed'].map(function (item) {
    return __jsx("li", {
      key: item,
      className: "".concat(_CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.status, " list-inline-item"),
      onClick: statusOnClickHandler,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, item);
  }))), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Admins:"), console.log(props));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FtcGFpZ25NYW5hZ2VyL0NhbXBhaWduTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJDYW1wYWlnbk1hbmFnZXIiLCJwcm9wcyIsIm5hbWUiLCJhZG1pbnMiLCJzdGF0dXNPbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImlubmVyVGV4dCIsIkNhbXBhaWduTWFuYWdlclN0eWxlcyIsImhlYWRlciIsInN0YXR1c0xpc3QiLCJtYXAiLCJpdGVtIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUN6QkMsSUFEeUIsR0FDUkQsS0FEUSxDQUN6QkMsSUFEeUI7QUFBQSxNQUNuQkMsTUFEbUIsR0FDUkYsS0FEUSxDQUNuQkUsTUFEbUI7O0FBRWpDLE1BQU1DLG9CQUFvQjtBQUFBLGdNQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDM0JDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFNBQXpCLEVBRDJCLENBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBcEJMLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxLQUExQjs7QUFTQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRU0sbUVBQXFCLENBQUNDLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ULElBQVAsQ0FERixFQUVFO0FBQUksYUFBUyx3QkFBaUJRLG1FQUFxQixDQUFDRSxVQUF2QyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFdBQWxCLEVBQStCLFFBQS9CLEVBQXlDQyxHQUF6QyxDQUE2QyxVQUFDQyxJQUFEO0FBQUEsV0FDNUM7QUFDRSxTQUFHLEVBQUVBLElBRFA7QUFFRSxlQUFTLFlBQUtKLG1FQUFxQixDQUFDSyxNQUEzQixzQkFGWDtBQUdFLGFBQU8sRUFBRVgsb0JBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHVSxJQUxILENBRDRDO0FBQUEsR0FBN0MsQ0FESCxDQUZGLENBREYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsRUFnQkdSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaLENBaEJILENBREY7QUEwQkQsQ0FyQ0Q7O0tBQU1ELGU7QUFzQ1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5ZTlhYWYyZmRhNjdhYTcxNjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhbXBhaWduTWFuYWdlclN0eWxlcyBmcm9tICcuL0NhbXBhaWduTWFuYWdlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDYW1wYWlnbk1hbmFnZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBhZG1pbnMgfSA9IHByb3BzO1xuICBjb25zdCBzdGF0dXNPbkNsaWNrSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pbm5lclRleHQpO1xuICAgIC8vIGNvbnN0IHN0YXR1cyA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBjb25zdCBwcm94eVJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgLy8gICBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2NhbXBhaWduc19zdGF0ZS8ke25hbWV9P3N0YXR1cz0ke3N0YXR1c31gLFxuICAgIC8vICk7XG4gICAgLy8gY29uc3QgeyBkYXRhIH0gPSBwcm94eVJlcztcbiAgICAvLyBjb25zdCB7IHN1Y2Nlc3MsIHJlcyB9ID0gZGF0YTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzIGNsYXNzTmFtZT17Q2FtcGFpZ25NYW5hZ2VyU3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YGxpc3QtaW5saW5lICR7Q2FtcGFpZ25NYW5hZ2VyU3R5bGVzLnN0YXR1c0xpc3R9YH0+XG4gICAgICAgICAge1snc2V0dXAnLCAnb3BlbicsICdzdXNwZW5kZWQnLCAnY2xvc2VkJ10ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtpdGVtfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake0NhbXBhaWduTWFuYWdlclN0eWxlcy5zdGF0dXN9IGxpc3QtaW5saW5lLWl0ZW1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdGF0dXNPbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9oMz5cbiAgICAgIDxoNj5BZG1pbnM6PC9oNj5cbiAgICAgIHtjb25zb2xlLmxvZyhwcm9wcyl9XG4gICAgICB7LyogPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lXCI+XG4gICAgICAgICAgICB7YWRtaW5zICYmXG4gICAgICAgICAgICAgIGFkbWlucy5tYXAoKGFkbWluKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj57YWRtaW59PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25NYW5hZ2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==