webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");
/* harmony import */ var _OpenCampaign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OpenCampaign */ "./src/OpenCampaign.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CampaignManager/CampaignManager */ "./src/components/CampaignManager/CampaignManager.js");





var _jsxFileName = "C:\\Users\\sagi.levi\\DevProjects\\sawtooth-dev\\client-next\\src\\Home.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    enabled: [],
    disabled: []
  }),
      campaigns = _useState[0],
      setCampaigns = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      campaign = _useState2[0],
      setCampaign = _useState2[1];

  var getCampaignState = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(name) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://127.0.0.1:5000/campaigns_state/".concat(name));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCampaignState(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var openCampaignClickHandler = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      var serverRes, _serverRes$data, res, success, enabled, state;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://127.0.0.1:5000/open_campaign?name=".concat(campaignName));

            case 3:
              serverRes = _context2.sent;
              _serverRes$data = serverRes.data, res = _serverRes$data.res, success = _serverRes$data.success;

              if (!success) {
                _context2.next = 16;
                break;
              }

              enabled = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(campaigns.enabled), [_objectSpread({}, res)]);
              setCampaigns(_objectSpread(_objectSpread({}, campaigns), {}, {
                enabled: enabled
              }));
              setCampaignName('');
              _context2.next = 11;
              return getCampaignState();

            case 11:
              state = _context2.sent.data.res;
              setCampaign(_objectSpread(_objectSpread({}, state), res));
              toast.info("Campaign ".concat(campaignName, " has been added succesfully"));
              _context2.next = 18;
              break;

            case 16:
              toast.info("An error has occured: ");
              console.log(res);

            case 18:
              _context2.next = 24;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              toast.info("An error has occured: ".concat(_context2.t0.message));

            case 24:
              setSendProcessing(false);

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 20]]);
    }));

    return function openCampaignClickHandler() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var updateCamapaigns = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://127.0.0.1:5000/batches/open_campaigns");

              case 2:
                res = _context3.sent;
                setCampaigns(_objectSpread(_objectSpread({}, campaigns), {}, {
                  enabled: res.data.res
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function updateCamapaigns() {
        return _ref3.apply(this, arguments);
      };
    }();

    updateCamapaigns();
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Manage Campaigns"), __jsx(_OpenCampaign__WEBPACK_IMPORTED_MODULE_7__["default"], {
    campaigns: campaigns,
    setCampaigns: setCampaigns,
    openCampaignClickHandler: openCampaignClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Campaigns List"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, campaigns.enabled.map(function (_ref4) {
    var name = _ref4.name,
        link = _ref4.link;
    return __jsx("li", {
      key: "campaign-".concat(name),
      onClick: function onClick() {
        return getCampaignState(name);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, name);
  })))), __jsx(_components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })));
}

_s(Home, "Ag/5Wj8NV6jffbS2a1sbxsUwTck=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiY2FtcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwiY2FtcGFpZ24iLCJzZXRDYW1wYWlnbiIsImdldENhbXBhaWduU3RhdGUiLCJuYW1lIiwiYXhpb3MiLCJnZXQiLCJvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXIiLCJwb3N0IiwiY2FtcGFpZ25OYW1lIiwic2VydmVyUmVzIiwiZGF0YSIsInJlcyIsInN1Y2Nlc3MiLCJzZXRDYW1wYWlnbk5hbWUiLCJzdGF0ZSIsInRvYXN0IiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic2V0U2VuZFByb2Nlc3NpbmciLCJ1c2VFZmZlY3QiLCJ1cGRhdGVDYW1hcGFpZ25zIiwibWFwIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQztBQUFFQyxXQUFPLEVBQUUsRUFBWDtBQUFlQyxZQUFRLEVBQUU7QUFBekIsR0FBRCxDQUQ1QjtBQUFBLE1BQ1BDLFNBRE87QUFBQSxNQUNJQyxZQURKOztBQUFBLG1CQUVrQkosc0RBQVEsRUFGMUI7QUFBQSxNQUVQSyxRQUZPO0FBQUEsTUFFR0MsV0FGSDs7QUFJZCxNQUFNQyxnQkFBZ0I7QUFBQSxnTUFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDakJDLDRDQUFLLENBQUNDLEdBQU4saURBQW1ERixJQUFuRCxFQURpQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEs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QUEsc0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLFNBQVMsQ0FBQ0YsT0FBVixDQUFrQjJCLEdBQWxCLENBQXNCLGlCQUFvQjtBQUFBLFFBQWpCcEIsSUFBaUIsU0FBakJBLElBQWlCO0FBQUEsUUFBWHFCLElBQVcsU0FBWEEsSUFBVztBQUN6QyxXQUNFO0FBQ0UsU0FBRyxxQkFBY3JCLElBQWQsQ0FETDtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1ELGdCQUFnQixDQUFDQyxJQUFELENBQXRCO0FBQUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUdBLElBSkgsQ0FERjtBQVNELEdBVkEsQ0FESCxDQUZGLENBYkYsQ0FERixFQStCRSxNQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkYsQ0FKRixDQURGO0FBd0NEOztHQWhGUVQsSTs7S0FBQUEsSTtBQWtGTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGM3ZGU0NmI4ZTRiNjVkNjEwZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9zcmMvSGVhZGVyJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3NyYy9NZW51JztcclxuaW1wb3J0IE9wZW5DYW1wYWlnbiBmcm9tICcuL09wZW5DYW1wYWlnbic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDYW1wYWlnbk1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbXBhaWduTWFuYWdlci9DYW1wYWlnbk1hbmFnZXInO1xyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtjYW1wYWlnbnMsIHNldENhbXBhaWduc10gPSB1c2VTdGF0ZSh7IGVuYWJsZWQ6IFtdLCBkaXNhYmxlZDogW10gfSk7XHJcbiAgY29uc3QgW2NhbXBhaWduLCBzZXRDYW1wYWlnbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBnZXRDYW1wYWlnblN0YXRlID0gYXN5bmMgKG5hbWUpID0+XHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9jYW1wYWlnbnNfc3RhdGUvJHtuYW1lfWApO1xyXG5cclxuICBjb25zdCBvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZXJ2ZXJSZXMgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvb3Blbl9jYW1wYWlnbj9uYW1lPSR7Y2FtcGFpZ25OYW1lfWAsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHsgcmVzLCBzdWNjZXNzIH0gPSBzZXJ2ZXJSZXMuZGF0YTtcclxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICBjb25zdCBlbmFibGVkID0gWy4uLmNhbXBhaWducy5lbmFibGVkLCB7IC4uLnJlcyB9XTtcclxuICAgICAgICBzZXRDYW1wYWlnbnMoeyAuLi5jYW1wYWlnbnMsIGVuYWJsZWQgfSk7XHJcbiAgICAgICAgc2V0Q2FtcGFpZ25OYW1lKCcnKTtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IChhd2FpdCBnZXRDYW1wYWlnblN0YXRlKCkpLmRhdGEucmVzO1xyXG4gICAgICAgIHNldENhbXBhaWduKHsgLi4uc3RhdGUsIC4uLnJlcyB9KTtcclxuICAgICAgICB0b2FzdC5pbmZvKGBDYW1wYWlnbiAke2NhbXBhaWduTmFtZX0gaGFzIGJlZW4gYWRkZWQgc3VjY2VzZnVsbHlgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdC5pbmZvKGBBbiBlcnJvciBoYXMgb2NjdXJlZDogYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHRvYXN0LmluZm8oYEFuIGVycm9yIGhhcyBvY2N1cmVkOiAke2Vyci5tZXNzYWdlfWApO1xyXG4gICAgfVxyXG4gICAgc2V0U2VuZFByb2Nlc3NpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVDYW1hcGFpZ25zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9iYXRjaGVzL29wZW5fY2FtcGFpZ25zYCxcclxuICAgICAgKTtcclxuICAgICAgc2V0Q2FtcGFpZ25zKHsgLi4uY2FtcGFpZ25zLCBlbmFibGVkOiByZXMuZGF0YS5yZXMgfSk7XHJcbiAgICB9O1xyXG4gICAgdXBkYXRlQ2FtYXBhaWducygpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICA8aDM+TWFuYWdlIENhbXBhaWduczwvaDM+XHJcbiAgICAgICAgICAgIDxPcGVuQ2FtcGFpZ25cclxuICAgICAgICAgICAgICBjYW1wYWlnbnM9e2NhbXBhaWduc31cclxuICAgICAgICAgICAgICBzZXRDYW1wYWlnbnM9e3NldENhbXBhaWduc31cclxuICAgICAgICAgICAgICBvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXI9e29wZW5DYW1wYWlnbkNsaWNrSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxTdXNwZW5kQ2FtcGFpZ25cclxuICAgICAgICAgICAgICBjYW1wYWlnbnM9e2NhbXBhaWduc31cclxuICAgICAgICAgICAgICBzZXRDYW1wYWlnbnM9e3NldENhbXBhaWduc31cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgPGgzPkNhbXBhaWducyBMaXN0PC9oMz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtjYW1wYWlnbnMuZW5hYmxlZC5tYXAoKHsgbmFtZSwgbGluayB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjYW1wYWlnbi0ke25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRDYW1wYWlnblN0YXRlKG5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9e2xpbmt9PjwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhbXBhaWduTWFuYWdlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=