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




var CampaignManager = function CampaignManager(_ref) {
  var _jsx;

  var name = _ref.name,
      admins = _ref.admins;

  var statusOnClickHandler = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
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
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", (_jsx = {
    className: "row"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.section), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }), _jsx), __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: _CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, name), __jsx("ul", {
    className: "list-inline ".concat(_CampaignManager_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.statusList),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
        lineNumber: 23,
        columnNumber: 17
      }
    }, item);
  }))), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Admins:"), __jsx("ul", {
    className: "list-inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, admins && admins.map(function (admin) {
    return __jsx("li", {
      className: "list-inline-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, admin);
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FtcGFpZ25NYW5hZ2VyL0NhbXBhaWduTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJDYW1wYWlnbk1hbmFnZXIiLCJuYW1lIiwiYWRtaW5zIiwic3RhdHVzT25DbGlja0hhbmRsZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJDYW1wYWlnbk1hbmFnZXJTdHlsZXMiLCJzZWN0aW9uIiwiaGVhZGVyIiwic3RhdHVzTGlzdCIsIm1hcCIsIml0ZW0iLCJzdGF0dXMiLCJhZG1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQzVDLE1BQU1DLG9CQUFvQjtBQUFBLGlNQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDM0JDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFNBQXpCLEVBRDJCLENBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBcEJMLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxLQUExQjs7QUFTQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtIQUFnQ00sbUVBQXFCLENBQUNDLE9BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUQsbUVBQXFCLENBQUNFLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9WLElBQVAsQ0FERixFQUVFO0FBQUksYUFBUyx3QkFBaUJRLG1FQUFxQixDQUFDRyxVQUF2QyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFdBQWxCLEVBQStCLFFBQS9CLEVBQXlDQyxHQUF6QyxDQUE2QyxVQUFDQyxJQUFEO0FBQUEsV0FDNUM7QUFDRSxTQUFHLEVBQUVBLElBRFA7QUFFRSxlQUFTLFlBQUtMLG1FQUFxQixDQUFDTSxNQUEzQixzQkFGWDtBQUdFLGFBQU8sRUFBRVosb0JBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHVyxJQUxILENBRDRDO0FBQUEsR0FBN0MsQ0FESCxDQUZGLENBREYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsRUFnQkU7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLE1BQU0sSUFDTEEsTUFBTSxDQUFDVyxHQUFQLENBQVcsVUFBQ0csS0FBRDtBQUFBLFdBQ1Q7QUFBSSxlQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFrQ0EsS0FBbEMsQ0FEUztBQUFBLEdBQVgsQ0FGSixDQWhCRixDQURGLENBREYsQ0FERjtBQTZCRCxDQXZDRDs7S0FBTWhCLGU7QUF3Q1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhZWQwMmFiYzBkYjUxM2QyNTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhbXBhaWduTWFuYWdlclN0eWxlcyBmcm9tICcuL0NhbXBhaWduTWFuYWdlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDYW1wYWlnbk1hbmFnZXIgPSAoeyBuYW1lLCBhZG1pbnMgfSkgPT4ge1xuICBjb25zdCBzdGF0dXNPbkNsaWNrSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5pbm5lclRleHQpO1xuICAgIC8vIGNvbnN0IHN0YXR1cyA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBjb25zdCBwcm94eVJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgLy8gICBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2NhbXBhaWduc19zdGF0ZS8ke25hbWV9P3N0YXR1cz0ke3N0YXR1c31gLFxuICAgIC8vICk7XG4gICAgLy8gY29uc3QgeyBkYXRhIH0gPSBwcm94eVJlcztcbiAgICAvLyBjb25zdCB7IHN1Y2Nlc3MsIHJlcyB9ID0gZGF0YTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBjbGFzc05hbWU9e0NhbXBhaWduTWFuYWdlclN0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtDYW1wYWlnbk1hbmFnZXJTdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BsaXN0LWlubGluZSAke0NhbXBhaWduTWFuYWdlclN0eWxlcy5zdGF0dXNMaXN0fWB9PlxuICAgICAgICAgICAgICB7WydzZXR1cCcsICdvcGVuJywgJ3N1c3BlbmRlZCcsICdjbG9zZWQnXS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Q2FtcGFpZ25NYW5hZ2VyU3R5bGVzLnN0YXR1c30gbGlzdC1pbmxpbmUtaXRlbWB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGF0dXNPbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8aDY+QWRtaW5zOjwvaDY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lXCI+XG4gICAgICAgICAgICB7YWRtaW5zICYmXG4gICAgICAgICAgICAgIGFkbWlucy5tYXAoKGFkbWluKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj57YWRtaW59PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk1hbmFnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9