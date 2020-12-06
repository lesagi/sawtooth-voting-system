webpackHotUpdate_N_E("pages/index",{

/***/ "./src/OpenCampaign.js":
/*!*****************************!*\
  !*** ./src/OpenCampaign.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\sagi.levi\\DevProjects\\sawtooth-dev\\client-next\\src\\OpenCampaign.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var OpenCampaign = function OpenCampaign(_ref) {
  _s();

  var openCampaignClickHandler = _ref.openCampaignClickHandler;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      campaignName = _useState[0],
      setCampaignName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      nameValid = _useState2[0],
      setNameValid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      sendProcessing = _useState3[0],
      setSendProcessing = _useState3[1];

  function validateCampaignName(name) {
    // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(mail);
    return true;
  }

  function addCampaignReqHandler(_x) {
    return _addCampaignReqHandler.apply(this, arguments);
  }

  function _addCampaignReqHandler() {
    _addCampaignReqHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setSendProcessing(true); // await openCampaignClickHandler(campaignName);

              setCampaignName('');
              setSendProcessing(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _addCampaignReqHandler.apply(this, arguments);
  }

  var buttonText = sendProcessing ? 'processing...' : 'Submit';
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "campaignName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Campaign Name"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "campaignName",
    name: "CampaignName",
    "aria-describedby": "campaign name",
    placeholder: "Enter Campaign name",
    value: campaignName,
    onChange: function onChange(e) {
      setNameValid(validateCampaignName(e.target.value));
      return setCampaignName(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("small", {
    id: "emailHelp",
    className: "form-text text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "This name will show publicly to all users")), __jsx("button", {
    disabled: !nameValid || sendProcessing,
    className: "btn btn-primary",
    onClick: addCampaignReqHandler,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, buttonText)));
};

_s(OpenCampaign, "/lNZCoHfPhqaP39api2PS0y508I=");

_c = OpenCampaign;
/* harmony default export */ __webpack_exports__["default"] = (OpenCampaign);

var _c;

$RefreshReg$(_c, "OpenCampaign");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL09wZW5DYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJPcGVuQ2FtcGFpZ24iLCJvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXIiLCJ1c2VTdGF0ZSIsImNhbXBhaWduTmFtZSIsInNldENhbXBhaWduTmFtZSIsIm5hbWVWYWxpZCIsInNldE5hbWVWYWxpZCIsInNlbmRQcm9jZXNzaW5nIiwic2V0U2VuZFByb2Nlc3NpbmciLCJ2YWxpZGF0ZUNhbXBhaWduTmFtZSIsIm5hbWUiLCJhZGRDYW1wYWlnblJlcUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLHdCQUErQixRQUEvQkEsd0JBQStCOztBQUFBLGtCQUNiQyxzREFBUSxDQUFDLEVBQUQsQ0FESztBQUFBLE1BQzlDQyxZQUQ4QztBQUFBLE1BQ2hDQyxlQURnQzs7QUFBQSxtQkFFbkJGLHNEQUFRLENBQUMsS0FBRCxDQUZXO0FBQUEsTUFFOUNHLFNBRjhDO0FBQUEsTUFFbkNDLFlBRm1DOztBQUFBLG1CQUdUSixzREFBUSxDQUFDLEtBQUQsQ0FIQztBQUFBLE1BRzlDSyxjQUg4QztBQUFBLE1BRzlCQyxpQkFIOEI7O0FBS3JELFdBQVNDLG9CQUFULENBQThCQyxJQUE5QixFQUFvQztBQUNsQztBQUNBO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBVG9ELFdBV3RDQyxxQkFYc0M7QUFBQTtBQUFBOztBQUFBO0FBQUEsOE1BV3JELGlCQUFxQ0MsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ0FMLCtCQUFpQixDQUFDLElBQUQsQ0FBakIsQ0FGRixDQUdFOztBQUNBSiw2QkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNBSSwrQkFBaUIsQ0FBQyxLQUFELENBQWpCOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWHFEO0FBQUE7QUFBQTs7QUFtQnJELE1BQU1NLFVBQVUsR0FBR1AsY0FBYyxHQUFHLGVBQUgsR0FBcUIsUUFBdEQ7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSxNQUFFLEVBQUMsY0FITDtBQUlFLFFBQUksRUFBQyxjQUpQO0FBS0Usd0JBQWlCLGVBTG5CO0FBTUUsZUFBVyxFQUFDLHFCQU5kO0FBT0UsU0FBSyxFQUFFSixZQVBUO0FBUUUsWUFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQU87QUFDZlQsa0JBQVksQ0FBQ0csb0JBQW9CLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXJCLENBQVo7QUFDQSxhQUFPYixlQUFlLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXRCO0FBQ0QsS0FYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFlRTtBQUFPLE1BQUUsRUFBQyxXQUFWO0FBQXNCLGFBQVMsRUFBQyxzQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFmRixDQURGLEVBb0JFO0FBQ0UsWUFBUSxFQUFFLENBQUNaLFNBQUQsSUFBY0UsY0FEMUI7QUFFRSxhQUFTLEVBQUMsaUJBRlo7QUFHRSxXQUFPLEVBQUVJLHFCQUhYO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HRyxVQU5ILENBcEJGLENBRkYsQ0FERjtBQWtDRCxDQXZERDs7R0FBTWQsWTs7S0FBQUEsWTtBQXlEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWM1ZmNjNTI5MjRjOWUwNzE5ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuXHJcbmNvbnN0IE9wZW5DYW1wYWlnbiA9ICh7IG9wZW5DYW1wYWlnbkNsaWNrSGFuZGxlciB9KSA9PiB7XHJcbiAgY29uc3QgW2NhbXBhaWduTmFtZSwgc2V0Q2FtcGFpZ25OYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbmFtZVZhbGlkLCBzZXROYW1lVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZW5kUHJvY2Vzc2luZywgc2V0U2VuZFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUNhbXBhaWduTmFtZShuYW1lKSB7XHJcbiAgICAvLyBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgLy8gcmV0dXJuIHJlLnRlc3QobWFpbCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZENhbXBhaWduUmVxSGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlbmRQcm9jZXNzaW5nKHRydWUpO1xyXG4gICAgLy8gYXdhaXQgb3BlbkNhbXBhaWduQ2xpY2tIYW5kbGVyKGNhbXBhaWduTmFtZSk7XHJcbiAgICBzZXRDYW1wYWlnbk5hbWUoJycpO1xyXG4gICAgc2V0U2VuZFByb2Nlc3NpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYnV0dG9uVGV4dCA9IHNlbmRQcm9jZXNzaW5nID8gJ3Byb2Nlc3NpbmcuLi4nIDogJ1N1Ym1pdCc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhbXBhaWduTmFtZVwiPkNhbXBhaWduIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgaWQ9XCJjYW1wYWlnbk5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiQ2FtcGFpZ25OYW1lXCJcclxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNhbXBhaWduIG5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENhbXBhaWduIG5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y2FtcGFpZ25OYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXROYW1lVmFsaWQodmFsaWRhdGVDYW1wYWlnbk5hbWUoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICByZXR1cm4gc2V0Q2FtcGFpZ25OYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICBUaGlzIG5hbWUgd2lsbCBzaG93IHB1YmxpY2x5IHRvIGFsbCB1c2Vyc1xyXG4gICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17IW5hbWVWYWxpZCB8fCBzZW5kUHJvY2Vzc2luZ31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXthZGRDYW1wYWlnblJlcUhhbmRsZXJ9XHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZW5DYW1wYWlnbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==