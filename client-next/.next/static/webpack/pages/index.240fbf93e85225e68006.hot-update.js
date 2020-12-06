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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");
/* harmony import */ var _OpenCampaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OpenCampaign */ "./src/OpenCampaign.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CampaignManager/CampaignManager */ "./src/components/CampaignManager/CampaignManager.js");



var _jsxFileName = "C:\\Users\\sagi.levi\\DevProjects\\sawtooth-dev\\client-next\\src\\Home.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      campaign = _useState[0],
      setCampaign = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      parties = _useState2[0],
      setParties = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      count = _useState3[0],
      setCount = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      admins = _useState5[0],
      setAdmins = _useState5[1];

  var getCampaignState = function getCampaignState(name) {
    return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://127.0.0.1:5000/campaigns_state/".concat(name)).then(function (res) {
      setParties(res.data.res.parties);
      setCount(res.data.res.count);
      setStatus(res.data.res.state);
      setAdmins(res.data.res.admins.split(','));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var updateCamapaigns = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://127.0.0.1:5000/batches/open_campaigns");

              case 2:
                res = _context.sent;
                setCampaigns(res.data.res);

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
  }, __jsx(_src_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_src_Menu__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
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
  }, "Manage Campaigns"), __jsx(_OpenCampaign__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  })))), __jsx(_components_CampaignManager_CampaignManager__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })));
}

_s(Home, "o0sniuCEFLUJFTLp1p//3NTZX+g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiY2FtcGFpZ24iLCJzZXRDYW1wYWlnbiIsInBhcnRpZXMiLCJzZXRQYXJ0aWVzIiwiY291bnQiLCJzZXRDb3VudCIsInN0YXR1cyIsInNldFN0YXR1cyIsImFkbWlucyIsInNldEFkbWlucyIsImdldENhbXBhaWduU3RhdGUiLCJuYW1lIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN0YXRlIiwic3BsaXQiLCJ1c2VFZmZlY3QiLCJ1cGRhdGVDYW1hcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwiY2FtcGFpZ25zIiwiZW5hYmxlZCIsIm1hcCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLEVBRDFCO0FBQUEsTUFDUEMsUUFETztBQUFBLE1BQ0dDLFdBREg7O0FBQUEsbUJBRWdCRixzREFBUSxFQUZ4QjtBQUFBLE1BRVBHLE9BRk87QUFBQSxNQUVFQyxVQUZGOztBQUFBLG1CQUdZSixzREFBUSxFQUhwQjtBQUFBLE1BR1BLLEtBSE87QUFBQSxNQUdBQyxRQUhBOztBQUFBLG1CQUljTixzREFBUSxFQUp0QjtBQUFBLE1BSVBPLE1BSk87QUFBQSxNQUlDQyxTQUpEOztBQUFBLG1CQUtjUixzREFBUSxFQUx0QjtBQUFBLE1BS1BTLE1BTE87QUFBQSxNQUtDQyxTQUxEOztBQU1kLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRDtBQUFBLFdBQ3ZCQyw0Q0FBSyxDQUFDQyxHQUFOLGlEQUFtREYsSUFBbkQsR0FBMkRHLElBQTNELENBQWdFLFVBQUNDLEdBQUQsRUFBUztBQUN2RVosZ0JBQVUsQ0FBQ1ksR0FBRyxDQUFDQyxJQUFKLENBQVNELEdBQVQsQ0FBYWIsT0FBZCxDQUFWO0FBQ0FHLGNBQVEsQ0FBQ1UsR0FBRyxDQUFDQyxJQUFKLENBQVNELEdBQVQsQ0FBYVgsS0FBZCxDQUFSO0FBQ0FHLGVBQVMsQ0FBQ1EsR0FBRyxDQUFDQyxJQUFKLENBQVNELEdBQVQsQ0FBYUUsS0FBZCxDQUFUO0FBQ0FSLGVBQVMsQ0FBQ00sR0FBRyxDQUFDQyxJQUFKLENBQVNELEdBQVQsQ0FBYVAsTUFBYixDQUFvQlUsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBRCxDQUFUO0FBQ0QsS0FMRCxDQUR1QjtBQUFBLEdBQXpCOztBQU9BQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxnQkFBZ0I7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNMUiw0Q0FBSyxDQUFDQyxHQUFOLGdEQURLOztBQUFBO0FBQ2pCRSxtQkFEaUI7QUFJdkJNLDRCQUFZLENBQUNOLEdBQUcsQ0FBQ0MsSUFBSixDQUFTRCxHQUFWLENBQVo7O0FBSnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWhCSyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsT0FBdEI7O0FBTUFBLG9CQUFnQjtBQUNqQixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBU0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUlFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFFRSxNQUFDLHFEQUFEO0FBQWMsYUFBUyxFQUFFRSxTQUF6QjtBQUFvQyxnQkFBWSxFQUFFRCxZQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQW9CO0FBQUEsUUFBakJiLElBQWlCLFNBQWpCQSxJQUFpQjtBQUFBLFFBQVhjLElBQVcsU0FBWEEsSUFBVztBQUN6QyxXQUNFO0FBQ0UsU0FBRyxxQkFBY2QsSUFBZCxDQURMO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTUQsZ0JBQWdCLENBQUNDLElBQUQsQ0FBdEI7QUFBQSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0EsSUFKSCxDQURGO0FBU0QsR0FWQSxDQURILENBRkYsQ0FURixDQURGLEVBMkJFLE1BQUMsbUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixDQUpGLENBREY7QUFvQ0Q7O0dBMURRYixJOztLQUFBQSxJO0FBNERNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNDBmYmY5M2U4NTIyNWU2ODAwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL3NyYy9IZWFkZXInO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vc3JjL01lbnUnO1xyXG5pbXBvcnQgT3BlbkNhbXBhaWduIGZyb20gJy4vT3BlbkNhbXBhaWduJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENhbXBhaWduTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvQ2FtcGFpZ25NYW5hZ2VyL0NhbXBhaWduTWFuYWdlcic7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2NhbXBhaWduLCBzZXRDYW1wYWlnbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwYXJ0aWVzLCBzZXRQYXJ0aWVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFthZG1pbnMsIHNldEFkbWluc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGdldENhbXBhaWduU3RhdGUgPSAobmFtZSkgPT5cclxuICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2NhbXBhaWduc19zdGF0ZS8ke25hbWV9YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFBhcnRpZXMocmVzLmRhdGEucmVzLnBhcnRpZXMpO1xyXG4gICAgICBzZXRDb3VudChyZXMuZGF0YS5yZXMuY291bnQpO1xyXG4gICAgICBzZXRTdGF0dXMocmVzLmRhdGEucmVzLnN0YXRlKTtcclxuICAgICAgc2V0QWRtaW5zKHJlcy5kYXRhLnJlcy5hZG1pbnMuc3BsaXQoJywnKSk7XHJcbiAgICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlQ2FtYXBhaWducyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvYmF0Y2hlcy9vcGVuX2NhbXBhaWduc2AsXHJcbiAgICAgICk7XHJcbiAgICAgIHNldENhbXBhaWducyhyZXMuZGF0YS5yZXMpO1xyXG4gICAgfTtcclxuICAgIHVwZGF0ZUNhbWFwYWlnbnMoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgPGgzPk1hbmFnZSBDYW1wYWlnbnM8L2gzPlxyXG4gICAgICAgICAgICA8T3BlbkNhbXBhaWduIGNhbXBhaWducz17Y2FtcGFpZ25zfSBzZXRDYW1wYWlnbnM9e3NldENhbXBhaWduc30gLz5cclxuICAgICAgICAgICAgey8qIDxTdXNwZW5kQ2FtcGFpZ25cclxuICAgICAgICAgICAgICBjYW1wYWlnbnM9e2NhbXBhaWduc31cclxuICAgICAgICAgICAgICBzZXRDYW1wYWlnbnM9e3NldENhbXBhaWduc31cclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgPGgzPkNhbXBhaWducyBMaXN0PC9oMz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtjYW1wYWlnbnMuZW5hYmxlZC5tYXAoKHsgbmFtZSwgbGluayB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjYW1wYWlnbi0ke25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRDYW1wYWlnblN0YXRlKG5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9e2xpbmt9PjwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhbXBhaWduTWFuYWdlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=