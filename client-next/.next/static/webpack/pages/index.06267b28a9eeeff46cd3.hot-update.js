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
  }, "Admins:"), admins)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FtcGFpZ25NYW5hZ2VyL0NhbXBhaWduTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJDYW1wYWlnbk1hbmFnZXIiLCJuYW1lIiwiYWRtaW5zIiwic3RhdHVzT25DbGlja0hhbmRsZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJDYW1wYWlnbk1hbmFnZXJTdHlsZXMiLCJzZWN0aW9uIiwiaGVhZGVyIiwic3RhdHVzTGlzdCIsIm1hcCIsIml0ZW0iLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUM1QyxNQUFNQyxvQkFBb0I7QUFBQSxpTUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzNCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxTQUF6QixFQUQyQixDQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUDJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXBCTCxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsS0FBMUI7O0FBU0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrSEFBZ0NNLG1FQUFxQixDQUFDQyxPQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVELG1FQUFxQixDQUFDRSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPVixJQUFQLENBREYsRUFFRTtBQUFJLGFBQVMsd0JBQWlCUSxtRUFBcUIsQ0FBQ0csVUFBdkMsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixXQUFsQixFQUErQixRQUEvQixFQUF5Q0MsR0FBekMsQ0FBNkMsVUFBQ0MsSUFBRDtBQUFBLFdBQzVDO0FBQ0UsU0FBRyxFQUFFQSxJQURQO0FBRUUsZUFBUyxZQUFLTCxtRUFBcUIsQ0FBQ00sTUFBM0Isc0JBRlg7QUFHRSxhQUFPLEVBQUVaLG9CQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR1csSUFMSCxDQUQ0QztBQUFBLEdBQTdDLENBREgsQ0FGRixDQURGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLEVBZ0JHWixNQWhCSCxDQURGLENBREYsQ0FERjtBQThCRCxDQXhDRDs7S0FBTUYsZTtBQXlDU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDYyNjdiMjhhOWVlZWZmNDZjZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FtcGFpZ25NYW5hZ2VyU3R5bGVzIGZyb20gJy4vQ2FtcGFpZ25NYW5hZ2VyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IENhbXBhaWduTWFuYWdlciA9ICh7IG5hbWUsIGFkbWlucyB9KSA9PiB7XG4gIGNvbnN0IHN0YXR1c09uQ2xpY2tIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgLy8gY29uc3Qgc3RhdHVzID0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGNvbnN0IHByb3h5UmVzID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAvLyAgIGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvY2FtcGFpZ25zX3N0YXRlLyR7bmFtZX0/c3RhdHVzPSR7c3RhdHVzfWAsXG4gICAgLy8gKTtcbiAgICAvLyBjb25zdCB7IGRhdGEgfSA9IHByb3h5UmVzO1xuICAgIC8vIGNvbnN0IHsgc3VjY2VzcywgcmVzIH0gPSBkYXRhO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGNsYXNzTmFtZT17Q2FtcGFpZ25NYW5hZ2VyU3R5bGVzLnNlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0NhbXBhaWduTWFuYWdlclN0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YGxpc3QtaW5saW5lICR7Q2FtcGFpZ25NYW5hZ2VyU3R5bGVzLnN0YXR1c0xpc3R9YH0+XG4gICAgICAgICAgICAgIHtbJ3NldHVwJywgJ29wZW4nLCAnc3VzcGVuZGVkJywgJ2Nsb3NlZCddLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtDYW1wYWlnbk1hbmFnZXJTdHlsZXMuc3RhdHVzfSBsaXN0LWlubGluZS1pdGVtYH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXR1c09uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxoNj5BZG1pbnM6PC9oNj5cbiAgICAgICAgICB7YWRtaW5zfVxuICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmVcIj5cbiAgICAgICAgICAgIHthZG1pbnMgJiZcbiAgICAgICAgICAgICAgYWRtaW5zLm1hcCgoYWRtaW4pID0+IChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPnthZG1pbn08L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk1hbmFnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9