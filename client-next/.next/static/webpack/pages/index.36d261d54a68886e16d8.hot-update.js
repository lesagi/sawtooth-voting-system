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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");





var _this = undefined,
    _jsxFileName = "C:\\Users\\sagi.levi\\DevProjects\\sawtooth-dev\\client-next\\src\\OpenCampaign.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var OpenCampaign = function OpenCampaign(_ref) {
  _s();

  var campaigns = _ref.campaigns,
      setCampaigns = _ref.setCampaigns,
      openCampaignClickHandler = _ref.openCampaignClickHandler;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      campaignName = _useState[0],
      setCampaignName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      nameValid = _useState2[0],
      setNameValid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
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
    _addCampaignReqHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var serverRes, _serverRes$data, res, success, id, link, name, enabled;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setSendProcessing(true);
              _context.prev = 2;
              _context.next = 5;
              return axios.post("http://127.0.0.1:5000/open_campaign?name=".concat(campaignName));

            case 5:
              serverRes = _context.sent;
              _serverRes$data = serverRes.data, res = _serverRes$data.res, success = _serverRes$data.success;
              console.log(serverRes);

              if (success) {
                id = res.id, link = res.link, name = res.name;
                enabled = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(campaigns.enabled), [{
                  name: name,
                  id: id,
                  link: link
                }]);
                setCampaigns(_objectSpread(_objectSpread({}, campaigns), {}, {
                  enabled: enabled
                }));
                setCampaignName('');
                react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].info("Campaign ".concat(campaignName, " has been added succesfully"));
              } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].info("An error has occured: ");
                console.log(res);
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].info("An error has occured: ".concat(_context.t0.message));

            case 15:
              setSendProcessing(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));
    return _addCampaignReqHandler.apply(this, arguments);
  }

  var buttonText = sendProcessing ? 'processing...' : 'Submit';
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "campaignName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("small", {
    id: "emailHelp",
    className: "form-text text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL09wZW5DYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJPcGVuQ2FtcGFpZ24iLCJjYW1wYWlnbnMiLCJzZXRDYW1wYWlnbnMiLCJvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXIiLCJ1c2VTdGF0ZSIsImNhbXBhaWduTmFtZSIsInNldENhbXBhaWduTmFtZSIsIm5hbWVWYWxpZCIsInNldE5hbWVWYWxpZCIsInNlbmRQcm9jZXNzaW5nIiwic2V0U2VuZFByb2Nlc3NpbmciLCJ2YWxpZGF0ZUNhbXBhaWduTmFtZSIsIm5hbWUiLCJhZGRDYW1wYWlnblJlcUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInNlcnZlclJlcyIsImRhdGEiLCJyZXMiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImlkIiwibGluayIsImVuYWJsZWQiLCJ0b2FzdCIsImluZm8iLCJtZXNzYWdlIiwiYnV0dG9uVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BSWY7QUFBQTs7QUFBQSxNQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxNQUZKQyxZQUVJLFFBRkpBLFlBRUk7QUFBQSxNQURKQyx3QkFDSSxRQURKQSx3QkFDSTs7QUFBQSxrQkFDb0NDLHNEQUFRLENBQUMsRUFBRCxDQUQ1QztBQUFBLE1BQ0dDLFlBREg7QUFBQSxNQUNpQkMsZUFEakI7O0FBQUEsbUJBRThCRixzREFBUSxDQUFDLEtBQUQsQ0FGdEM7QUFBQSxNQUVHRyxTQUZIO0FBQUEsTUFFY0MsWUFGZDs7QUFBQSxtQkFHd0NKLHNEQUFRLENBQUMsS0FBRCxDQUhoRDtBQUFBLE1BR0dL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O0FBQUE7QUFBQTtBQUFBLGlEQWZGLENBREYsRUFvQkU7QUFDRSxZQUFRLEVBQUUsQ0FBQ3pCLFNBQUQsSUFBY0UsY0FEMUI7QUFFRSxhQUFTLEVBQUMsaUJBRlo7QUFHRSxXQUFPLEVBQUVJLHFCQUhYO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HZ0IsVUFOSCxDQXBCRixDQUZGLENBREY7QUFrQ0QsQ0E3RUQ7O0dBQU03QixZOztLQUFBQSxZO0FBK0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNmQyNjFkNTRhNjg4ODZlMTZkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuY29uc3QgT3BlbkNhbXBhaWduID0gKHtcclxuICBjYW1wYWlnbnMsXHJcbiAgc2V0Q2FtcGFpZ25zLFxyXG4gIG9wZW5DYW1wYWlnbkNsaWNrSGFuZGxlcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjYW1wYWlnbk5hbWUsIHNldENhbXBhaWduTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25hbWVWYWxpZCwgc2V0TmFtZVZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VuZFByb2Nlc3NpbmcsIHNldFNlbmRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVDYW1wYWlnbk5hbWUobmFtZSkge1xyXG4gICAgLy8gY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIC8vIHJldHVybiByZS50ZXN0KG1haWwpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhZGRDYW1wYWlnblJlcUhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZW5kUHJvY2Vzc2luZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlcnZlclJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYGh0dHA6Ly8xMjcuMC4wLjE6NTAwMC9vcGVuX2NhbXBhaWduP25hbWU9JHtjYW1wYWlnbk5hbWV9YCxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgeyByZXMsIHN1Y2Nlc3MgfSA9IHNlcnZlclJlcy5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhzZXJ2ZXJSZXMpO1xyXG4gICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIGxpbmssIG5hbWUgfSA9IHJlcztcclxuICAgICAgICBjb25zdCBlbmFibGVkID0gWy4uLmNhbXBhaWducy5lbmFibGVkLCB7IG5hbWUsIGlkLCBsaW5rIH1dO1xyXG4gICAgICAgIHNldENhbXBhaWducyh7IC4uLmNhbXBhaWducywgZW5hYmxlZCB9KTtcclxuICAgICAgICBzZXRDYW1wYWlnbk5hbWUoJycpO1xyXG4gICAgICAgIHRvYXN0LmluZm8oYENhbXBhaWduICR7Y2FtcGFpZ25OYW1lfSBoYXMgYmVlbiBhZGRlZCBzdWNjZXNmdWxseWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmluZm8oYEFuIGVycm9yIGhhcyBvY2N1cmVkOiBgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgdG9hc3QuaW5mbyhgQW4gZXJyb3IgaGFzIG9jY3VyZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgICB9XHJcbiAgICBzZXRTZW5kUHJvY2Vzc2luZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBidXR0b25UZXh0ID0gc2VuZFByb2Nlc3NpbmcgPyAncHJvY2Vzc2luZy4uLicgOiAnU3VibWl0JztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FtcGFpZ25OYW1lXCI+Q2FtcGFpZ24gTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cImNhbXBhaWduTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJDYW1wYWlnbk5hbWVcIlxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY2FtcGFpZ24gbmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2FtcGFpZ24gbmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjYW1wYWlnbk5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE5hbWVWYWxpZCh2YWxpZGF0ZUNhbXBhaWduTmFtZShlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZXRDYW1wYWlnbk5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzbWFsbCBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgIFRoaXMgbmFtZSB3aWxsIHNob3cgcHVibGljbHkgdG8gYWxsIHVzZXJzXHJcbiAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGRpc2FibGVkPXshbmFtZVZhbGlkIHx8IHNlbmRQcm9jZXNzaW5nfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2FkZENhbXBhaWduUmVxSGFuZGxlcn1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtidXR0b25UZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlbkNhbXBhaWduO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9