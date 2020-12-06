webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");
/* harmony import */ var _OpenCampaign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OpenCampaign */ "./src/OpenCampaign.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CampaignManager/CampaignManager */ "./src/components/CampaignManager/CampaignManager.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");






var _jsxFileName = "C:\\Users\\sagi.levi\\DevProjects\\sawtooth-dev\\client-next\\src\\Home.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    enabled: [],
    disabled: []
  }),
      campaigns = _useState[0],
      setCampaigns = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      campaign = _useState2[0],
      setCampaign = _useState2[1];

  var getCampaignState = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(name) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://127.0.0.1:5000/campaigns_state/".concat(name));

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
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(name) {
      var serverRes, _serverRes$data, res, success, enabled, state;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://127.0.0.1:5000/open_campaign?name=".concat(name));

            case 3:
              serverRes = _context2.sent;
              _serverRes$data = serverRes.data, res = _serverRes$data.res, success = _serverRes$data.success;

              if (!success) {
                _context2.next = 15;
                break;
              }

              enabled = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(campaigns.enabled), [_objectSpread({}, res)]);
              setCampaigns(_objectSpread(_objectSpread({}, campaigns), {}, {
                enabled: enabled
              }));
              _context2.next = 10;
              return getCampaignState();

            case 10:
              state = _context2.sent.data.res;
              setCampaign(_objectSpread(_objectSpread({}, state), res));
              react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].info("Campaign ".concat(name, " has been added succesfully"));
              _context2.next = 17;
              break;

            case 15:
              react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].info("An error has occured: ");
              console.log(res);

            case 17:
              _context2.next = 23;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].info("An error has occured: ".concat(_context2.t0.message));

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 19]]);
    }));

    return function openCampaignClickHandler(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var updateCamapaigns = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://127.0.0.1:5000/batches/open_campaigns");

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
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_7__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, !campaign && __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, console.log(campaign), __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Manage Campaigns"), __jsx(_OpenCampaign__WEBPACK_IMPORTED_MODULE_8__["default"], {
    campaigns: campaigns,
    setCampaigns: setCampaigns,
    openCampaignClickHandler: openCampaignClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Campaigns List"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, campaigns.enabled.map(function (_ref4) {
    var name = _ref4.name,
        link = _ref4.link;
    return __jsx("li", {
      key: "campaign-".concat(name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 23
      }
    }, name));
  })))), __jsx(_components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, campaign, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZW5hYmxlZCIsImRpc2FibGVkIiwiY2FtcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwiY2FtcGFpZ24iLCJzZXRDYW1wYWlnbiIsImdldENhbXBhaWduU3RhdGUiLCJuYW1lIiwiYXhpb3MiLCJnZXQiLCJvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXIiLCJwb3N0Iiwic2VydmVyUmVzIiwiZGF0YSIsInJlcyIsInN1Y2Nlc3MiLCJzdGF0ZSIsInRvYXN0IiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwidXBkYXRlQ2FtYXBhaWducyIsIm1hcCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQztBQUFFQyxXQUFPLEVBQUUsRUFBWDtBQUFlQyxZQUFRLEVBQUU7QUFBekIsR0FBRCxDQUQ1QjtBQUFBLE1BQ1BDLFNBRE87QUFBQSxNQUNJQyxZQURKOztBQUFBLG1CQUVrQkosc0RBQVEsRUFGMUI7QUFBQSxNQUVQSyxRQUZPO0FBQUEsTUFFR0MsV0FGSDs7QUFJZCxNQUFNQyxnQkFBZ0I7QUFBQSxnTUFBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDakJDLDRDQUFLLENBQUNDLEdBQU4saURBQW1ERixJQUFuRCxFQURpQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCRCxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBR0EsTUFBTUksd0JBQXdCO0FBQUEsaU1BQUcsa0JBQU9ILElB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QSxLQUNHUixTQUFTLENBQUNGLE9BQVYsQ0FBa0J3QixHQUFsQixDQUFzQixpQkFBb0I7QUFBQSxRQUFqQmpCLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLFFBQVhrQixJQUFXLFNBQVhBLElBQVc7QUFDekMsV0FDRTtBQUFJLFNBQUcscUJBQWNsQixJQUFkLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFFa0IsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdCbEIsSUFBaEIsQ0FERixDQURGO0FBS0QsR0FOQSxDQURILENBRkYsQ0FWRixDQUZKLEVBMEJFLE1BQUMsb0ZBQUQseUZBQXFCSCxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUJGLENBSkYsQ0FERjtBQW1DRDs7R0F6RVFOLEk7O0tBQUFBLEk7QUEyRU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0YzUwN2I4ZDRjOWEyMTFjYzRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vc3JjL0hlYWRlcic7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9zcmMvTWVudSc7XHJcbmltcG9ydCBPcGVuQ2FtcGFpZ24gZnJvbSAnLi9PcGVuQ2FtcGFpZ24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ2FtcGFpZ25NYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50cy9DYW1wYWlnbk1hbmFnZXIvQ2FtcGFpZ25NYW5hZ2VyJztcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtjYW1wYWlnbnMsIHNldENhbXBhaWduc10gPSB1c2VTdGF0ZSh7IGVuYWJsZWQ6IFtdLCBkaXNhYmxlZDogW10gfSk7XHJcbiAgY29uc3QgW2NhbXBhaWduLCBzZXRDYW1wYWlnbl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBnZXRDYW1wYWlnblN0YXRlID0gYXN5bmMgKG5hbWUpID0+XHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9jYW1wYWlnbnNfc3RhdGUvJHtuYW1lfWApO1xyXG5cclxuICBjb25zdCBvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXIgPSBhc3luYyAobmFtZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2VydmVyUmVzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgaHR0cDovLzEyNy4wLjAuMTo1MDAwL29wZW5fY2FtcGFpZ24/bmFtZT0ke25hbWV9YCxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyByZXMsIHN1Y2Nlc3MgfSA9IHNlcnZlclJlcy5kYXRhO1xyXG4gICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnN0IGVuYWJsZWQgPSBbLi4uY2FtcGFpZ25zLmVuYWJsZWQsIHsgLi4ucmVzIH1dO1xyXG4gICAgICAgIHNldENhbXBhaWducyh7IC4uLmNhbXBhaWducywgZW5hYmxlZCB9KTtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IChhd2FpdCBnZXRDYW1wYWlnblN0YXRlKCkpLmRhdGEucmVzO1xyXG4gICAgICAgIHNldENhbXBhaWduKHsgLi4uc3RhdGUsIC4uLnJlcyB9KTtcclxuICAgICAgICB0b2FzdC5pbmZvKGBDYW1wYWlnbiAke25hbWV9IGhhcyBiZWVuIGFkZGVkIHN1Y2Nlc2Z1bGx5YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9hc3QuaW5mbyhgQW4gZXJyb3IgaGFzIG9jY3VyZWQ6IGApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB0b2FzdC5pbmZvKGBBbiBlcnJvciBoYXMgb2NjdXJlZDogJHtlcnIubWVzc2FnZX1gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlQ2FtYXBhaWducyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvYmF0Y2hlcy9vcGVuX2NhbXBhaWduc2AsXHJcbiAgICAgICk7XHJcbiAgICAgIHNldENhbXBhaWducyh7IC4uLmNhbXBhaWducywgZW5hYmxlZDogcmVzLmRhdGEucmVzIH0pO1xyXG4gICAgfTtcclxuICAgIHVwZGF0ZUNhbWFwYWlnbnMoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgeyFjYW1wYWlnbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7Y29uc29sZS5sb2coY2FtcGFpZ24pfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgPGgzPk1hbmFnZSBDYW1wYWlnbnM8L2gzPlxyXG4gICAgICAgICAgICAgIDxPcGVuQ2FtcGFpZ25cclxuICAgICAgICAgICAgICAgIGNhbXBhaWducz17Y2FtcGFpZ25zfVxyXG4gICAgICAgICAgICAgICAgc2V0Q2FtcGFpZ25zPXtzZXRDYW1wYWlnbnN9XHJcbiAgICAgICAgICAgICAgICBvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXI9e29wZW5DYW1wYWlnbkNsaWNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgIDxoMz5DYW1wYWlnbnMgTGlzdDwvaDM+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2NhbXBhaWducy5lbmFibGVkLm1hcCgoeyBuYW1lLCBsaW5rIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgY2FtcGFpZ24tJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGlua30+e25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPENhbXBhaWduTWFuYWdlciB7Li4uY2FtcGFpZ259IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==