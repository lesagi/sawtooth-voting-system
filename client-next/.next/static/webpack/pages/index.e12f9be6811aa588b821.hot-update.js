webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");
/* harmony import */ var _OpenCampaign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OpenCampaign */ "./src/OpenCampaign.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CampaignManager/CampaignManager */ "./src/components/CampaignManager/CampaignManager.js");




var _jsxFileName = "C:\\Users\\sagi.levi\\DevProjects\\sawtooth-dev\\client-next\\src\\Home.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    enabled: [],
    disabled: []
  }),
      campaigns = _useState[0],
      setCampaigns = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      parties = _useState2[0],
      setParties = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      count = _useState3[0],
      setCount = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      admins = _useState5[0],
      setAdmins = _useState5[1];

  var getCampaignState = function getCampaignState(name) {
    return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://127.0.0.1:5000/campaigns_state/".concat(name)).then(function (res) {
      setParties(res.data.res.parties);
      setCount(res.data.res.count);
      setStatus(res.data.res.state);
      setAdmins(res.data.res.admins.split(','));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var updateCamapaigns = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://127.0.0.1:5000/batches/open_campaigns");

              case 2:
                res = _context.sent;
                setCampaigns(_objectSpread(_objectSpread({}, campaigns), {}, {
                  enabled: res.data.res
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function updateCamapaigns() {
        return _ref.apply(this, arguments);
      };
    }();

    updateCamapaigns();
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Manage Campaigns"), __jsx(_OpenCampaign__WEBPACK_IMPORTED_MODULE_6__["default"], {
    campaigns: campaigns,
    setCampaigns: setCampaigns,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Campaigns List"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, campaigns.enabled.map(function (_ref2) {
    var name = _ref2.name,
        link = _ref2.link;
    return __jsx("li", {
      key: "campaign-".concat(name),
      onClick: function onClick() {
        return getCampaignState(name);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, name);
  })))), __jsx(_components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })));
}

_s(Home, "fkb8LD/aQUAdMtk0lgS7lBG2XN4=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiY2FtcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwicGFydGllcyIsInNldFBhcnRpZXMiLCJjb3VudCIsInNldENvdW50Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwiYWRtaW5zIiwic2V0QWRtaW5zIiwiZ2V0Q2FtcGFpZ25TdGF0ZSIsIm5hbWUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3RhdGUiLCJzcGxpdCIsInVzZUVmZmVjdCIsInVwZGF0ZUNhbWFwYWlnbnMiLCJtYXAiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQztBQUFFQyxXQUFPLEVBQUUsRUFBWDtBQUFlQyxZQUFRLEVBQUU7QUFBekIsR0FBRCxDQUQ1QjtBQUFBLE1BQ1BDLFNBRE87QUFBQSxNQUNJQyxZQURKOztBQUFBLG1CQUVnQkosc0RBQVEsRUFGeEI7QUFBQSxNQUVQSyxPQUZPO0FBQUEsTUFFRUMsVUFGRjs7QUFBQSxtQkFHWU4sc0RBQVEsRUFIcEI7QUFBQSxNQUdQTyxLQUhPO0FBQUEsTUFHQUMsUUFIQTs7QUFBQSxtQkFJY1Isc0RBQVEsRUFKdEI7QUFBQSxNQUlQUyxNQUpPO0FBQUEsTUFJQ0MsU0FKRDs7QUFBQSxtQkFLY1Ysc0RBQVEsRUFMdEI7QUFBQSxNQUtQVyxNQUxPO0FBQUEsTUFLQ0MsU0FMRDs7QUFNZCxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQ7QUFBQSxXQUN2QkMsNENBQUssQ0FBQ0MsR0FBTixpREFBbURGLElBQW5ELEdBQTJERyxJQUEzRCxDQUFnRSxVQUFDQyxHQUFELEVBQVM7QUFDdkVaLGdCQUFVLENBQUNZLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRCxHQUFULENBQWFiLE9BQWQsQ0FBVjtBQUNBRyxjQUFRLENBQUNVLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRCxHQUFULENBQWFYLEtBQWQsQ0FBUjtBQUNBRyxlQUFTLENBQUNRLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRCxHQUFULENBQWFFLEtBQWQsQ0FBVDtBQUNBUixlQUFTLENBQUNNLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRCxHQUFULENBQWFQLE1BQWIsQ0FBb0JVLEtBQXBCLENBQTBCLEdBQTFCLENBQUQsQ0FBVDtBQUNELEtBTEQsQ0FEdUI7QUFBQSxHQUF6Qjs7QUFPQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsZ0JBQWdCO0FBQUEsa01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDTFIsNENBQUssQ0FBQ0MsR0FBTixnREFESzs7QUFBQTtBQUNqQkUsbUJBRGlCO0FBSXZCZCw0QkFBWSxpQ0FBTUQsU0FBTjtBQUFpQkYseUJBQU8sRUFBRWlCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRDtBQUFuQyxtQkFBWjs7QUFKdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBaEJLLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxPQUF0Qjs7QUFNQUEsb0JBQWdCO0FBQ2pCLEdBUlEsRUFRTixFQVJNLENBQVQ7QUFTQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFLE1BQUMscURBQUQ7QUFBYyxhQUFTLEVBQUVwQixTQUF6QjtBQUFvQyxnQkFBWSxFQUFFQyxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFNBQVMsQ0FBQ0YsT0FBVixDQUFrQnVCLEdBQWxCLENBQXNCLGlCQUFvQjtBQUFBLFFBQWpCVixJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxRQUFYVyxJQUFXLFNBQVhBLElBQVc7QUFDekMsV0FDRTtBQUNFLFNBQUcscUJBQWNYLElBQWQsQ0FETDtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1ELGdCQUFnQixDQUFDQyxJQUFELENBQXRCO0FBQUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUdBLElBSkgsQ0FERjtBQVNELEdBVkEsQ0FESCxDQUZGLENBVEYsQ0FERixFQTJCRSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsQ0FKRixDQURGO0FBb0NEOztHQTFEUWYsSTs7S0FBQUEsSTtBQTRETUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTEyZjliZTY4MTFhYTU4OGI4MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9zcmMvSGVhZGVyJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3NyYy9NZW51JztcclxuaW1wb3J0IE9wZW5DYW1wYWlnbiBmcm9tICcuL09wZW5DYW1wYWlnbic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDYW1wYWlnbk1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbXBhaWduTWFuYWdlci9DYW1wYWlnbk1hbmFnZXInO1xyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtjYW1wYWlnbnMsIHNldENhbXBhaWduc10gPSB1c2VTdGF0ZSh7IGVuYWJsZWQ6IFtdLCBkaXNhYmxlZDogW10gfSk7XHJcbiAgY29uc3QgW3BhcnRpZXMsIHNldFBhcnRpZXNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2FkbWlucywgc2V0QWRtaW5zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgZ2V0Q2FtcGFpZ25TdGF0ZSA9IChuYW1lKSA9PlxyXG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvY2FtcGFpZ25zX3N0YXRlLyR7bmFtZX1gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0UGFydGllcyhyZXMuZGF0YS5yZXMucGFydGllcyk7XHJcbiAgICAgIHNldENvdW50KHJlcy5kYXRhLnJlcy5jb3VudCk7XHJcbiAgICAgIHNldFN0YXR1cyhyZXMuZGF0YS5yZXMuc3RhdGUpO1xyXG4gICAgICBzZXRBZG1pbnMocmVzLmRhdGEucmVzLmFkbWlucy5zcGxpdCgnLCcpKTtcclxuICAgIH0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVDYW1hcGFpZ25zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9iYXRjaGVzL29wZW5fY2FtcGFpZ25zYCxcclxuICAgICAgKTtcclxuICAgICAgc2V0Q2FtcGFpZ25zKHsgLi4uY2FtcGFpZ25zLCBlbmFibGVkOiByZXMuZGF0YS5yZXMgfSk7XHJcbiAgICB9O1xyXG4gICAgdXBkYXRlQ2FtYXBhaWducygpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICA8aDM+TWFuYWdlIENhbXBhaWduczwvaDM+XHJcbiAgICAgICAgICAgIDxPcGVuQ2FtcGFpZ24gY2FtcGFpZ25zPXtjYW1wYWlnbnN9IHNldENhbXBhaWducz17c2V0Q2FtcGFpZ25zfSAvPlxyXG4gICAgICAgICAgICB7LyogPFN1c3BlbmRDYW1wYWlnblxyXG4gICAgICAgICAgICAgIGNhbXBhaWducz17Y2FtcGFpZ25zfVxyXG4gICAgICAgICAgICAgIHNldENhbXBhaWducz17c2V0Q2FtcGFpZ25zfVxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICA8aDM+Q2FtcGFpZ25zIExpc3Q8L2gzPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge2NhbXBhaWducy5lbmFibGVkLm1hcCgoeyBuYW1lLCBsaW5rIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGNhbXBhaWduLSR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldENhbXBhaWduU3RhdGUobmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj17bGlua30+PC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FtcGFpZ25NYW5hZ2VyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==