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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(event) {
      var serverRes, _serverRes$data, res, success, enabled, state;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.prev = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://127.0.0.1:5000/open_campaign?name=".concat(campaignName));

            case 4:
              serverRes = _context2.sent;
              _serverRes$data = serverRes.data, res = _serverRes$data.res, success = _serverRes$data.success;

              if (!success) {
                _context2.next = 17;
                break;
              }

              enabled = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(campaigns.enabled), [_objectSpread({}, res)]);
              setCampaigns(_objectSpread(_objectSpread({}, campaigns), {}, {
                enabled: enabled
              }));
              setCampaignName('');
              _context2.next = 12;
              return getCampaignState();

            case 12:
              state = _context2.sent.data.res;
              setCampaign(_objectSpread(_objectSpread({}, state), res));
              toast.info("Campaign ".concat(campaignName, " has been added succesfully"));
              _context2.next = 19;
              break;

            case 17:
              toast.info("An error has occured: ");
              console.log(res);

            case 19:
              _context2.next = 25;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              toast.info("An error has occured: ".concat(_context2.t0.message));

            case 25:
              setSendProcessing(false);

            case 26:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 21]]);
    }));

    return function openCampaignClickHandler(_x2) {
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
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Manage Campaigns"), __jsx(_OpenCampaign__WEBPACK_IMPORTED_MODULE_7__["default"], {
    campaigns: campaigns,
    setCampaigns: setCampaigns,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Campaigns List"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
        lineNumber: 68,
        columnNumber: 19
      }
    }, name);
  })))), __jsx(_components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiY2FtcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwiY2FtcGFpZ24iLCJzZXRDYW1wYWlnbiIsImdldENhbXBhaWduU3RhdGUiLCJuYW1lIiwiYXhpb3MiLCJnZXQiLCJvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImNhbXBhaWduTmFtZSIsInNlcnZlclJlcyIsImRhdGEiLCJyZXMiLCJzdWNjZXNzIiwic2V0Q2FtcGFpZ25OYW1lIiwic3RhdGUiLCJ0b2FzdCIsImluZm8iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInNldFNlbmRQcm9jZXNzaW5nIiwidXNlRWZmZWN0IiwidXBkYXRlQ2FtYXBhaWducyIsIm1hcCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDb0JDLHNEQUFRLENBQUM7QUFBRUMsV0FBTyxFQUFFLEVBQVg7QUFBZUMsWUFBUSxFQUFFO0FBQXpCLEdBQUQsQ0FENUI7QUFBQSxNQUNQQyxTQURPO0FBQUEsTUFDSUMsWUFESjs7QUFBQSxtQkFFa0JKLHNEQUFRLEVBRjFCO0FBQUEsTUFFUEssUUFGTztBQUFBLE1BRUdDLFdBRkg7O0FBSWQsTUFBTUMsZ0JBQWdCO0FBQUEsZ01BQUcsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2pCQyw0Q0FBSyxDQUFDQyxHQUFOLGlEQUFtREYsSUFBbkQsRUFEaUI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFo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QTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsU0FBUyxDQUFDRixPQUFWLENBQWtCNkIsR0FBbEIsQ0FBc0IsaUJBQW9CO0FBQUEsUUFBakJ0QixJQUFpQixTQUFqQkEsSUFBaUI7QUFBQSxRQUFYdUIsSUFBVyxTQUFYQSxJQUFXO0FBQ3pDLFdBQ0U7QUFDRSxTQUFHLHFCQUFjdkIsSUFBZCxDQURMO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUQsZ0JBQWdCLENBQUNDLElBQUQsQ0FBdEI7QUFBQSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0EsSUFKSCxDQURGO0FBU0QsR0FWQSxDQURILENBRkYsQ0FURixDQURGLEVBMkJFLE1BQUMsbUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixDQUpGLENBREY7QUFvQ0Q7O0dBN0VRVCxJOztLQUFBQSxJO0FBK0VNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZmRjY2I0ZWUyYjMxNjlhOWI1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL3NyYy9IZWFkZXInO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vc3JjL01lbnUnO1xyXG5pbXBvcnQgT3BlbkNhbXBhaWduIGZyb20gJy4vT3BlbkNhbXBhaWduJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENhbXBhaWduTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FtcGFpZ25NYW5hZ2VyL0NhbXBhaWduTWFuYWdlcic7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2NhbXBhaWducywgc2V0Q2FtcGFpZ25zXSA9IHVzZVN0YXRlKHsgZW5hYmxlZDogW10sIGRpc2FibGVkOiBbXSB9KTtcclxuICBjb25zdCBbY2FtcGFpZ24sIHNldENhbXBhaWduXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGdldENhbXBhaWduU3RhdGUgPSBhc3luYyAobmFtZSkgPT5cclxuICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2NhbXBhaWduc19zdGF0ZS8ke25hbWV9YCk7XHJcblxyXG4gIGNvbnN0IG9wZW5DYW1wYWlnbkNsaWNrSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlcnZlclJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9vcGVuX2NhbXBhaWduP25hbWU9JHtjYW1wYWlnbk5hbWV9YCxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyByZXMsIHN1Y2Nlc3MgfSA9IHNlcnZlclJlcy5kYXRhO1xyXG4gICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnN0IGVuYWJsZWQgPSBbLi4uY2FtcGFpZ25zLmVuYWJsZWQsIHsgLi4ucmVzIH1dO1xyXG4gICAgICAgIHNldENhbXBhaWducyh7IC4uLmNhbXBhaWducywgZW5hYmxlZCB9KTtcclxuICAgICAgICBzZXRDYW1wYWlnbk5hbWUoJycpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gKGF3YWl0IGdldENhbXBhaWduU3RhdGUoKSkuZGF0YS5yZXM7XHJcbiAgICAgICAgc2V0Q2FtcGFpZ24oeyAuLi5zdGF0ZSwgLi4ucmVzIH0pO1xyXG4gICAgICAgIHRvYXN0LmluZm8oYENhbXBhaWduICR7Y2FtcGFpZ25OYW1lfSBoYXMgYmVlbiBhZGRlZCBzdWNjZXNmdWxseWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmluZm8oYEFuIGVycm9yIGhhcyBvY2N1cmVkOiBgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgdG9hc3QuaW5mbyhgQW4gZXJyb3IgaGFzIG9jY3VyZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICB9XHJcbiAgICBzZXRTZW5kUHJvY2Vzc2luZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZUNhbWFwYWlnbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2JhdGNoZXMvb3Blbl9jYW1wYWlnbnNgLFxyXG4gICAgICApO1xyXG4gICAgICBzZXRDYW1wYWlnbnMoeyAuLi5jYW1wYWlnbnMsIGVuYWJsZWQ6IHJlcy5kYXRhLnJlcyB9KTtcclxuICAgIH07XHJcbiAgICB1cGRhdGVDYW1hcGFpZ25zKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxNZW51IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgIDxoMz5NYW5hZ2UgQ2FtcGFpZ25zPC9oMz5cclxuICAgICAgICAgICAgPE9wZW5DYW1wYWlnbiBjYW1wYWlnbnM9e2NhbXBhaWduc30gc2V0Q2FtcGFpZ25zPXtzZXRDYW1wYWlnbnN9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8U3VzcGVuZENhbXBhaWduXHJcbiAgICAgICAgICAgICAgY2FtcGFpZ25zPXtjYW1wYWlnbnN9XHJcbiAgICAgICAgICAgICAgc2V0Q2FtcGFpZ25zPXtzZXRDYW1wYWlnbnN9XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgIDxoMz5DYW1wYWlnbnMgTGlzdDwvaDM+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7Y2FtcGFpZ25zLmVuYWJsZWQubWFwKCh7IG5hbWUsIGxpbmsgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2FtcGFpZ24tJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0Q2FtcGFpZ25TdGF0ZShuYW1lKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPXtsaW5rfT48L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYW1wYWlnbk1hbmFnZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9