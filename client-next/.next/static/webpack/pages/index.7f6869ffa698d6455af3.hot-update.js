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

  var campaigns = _ref.campaigns,
      setCampaigns = _ref.setCampaigns,
      openCampaignClickHandler = _ref.openCampaignClickHandler;

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
              setSendProcessing(true);
              _context.next = 4;
              return openCampaignClickHandler();

            case 4:
              setCampaignName('');
              setSendProcessing(false);

            case 6:
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
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "campaignName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("small", {
    id: "emailHelp",
    className: "form-text text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL09wZW5DYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJPcGVuQ2FtcGFpZ24iLCJjYW1wYWlnbnMiLCJzZXRDYW1wYWlnbnMiLCJvcGVuQ2FtcGFpZ25DbGlja0hhbmRsZXIiLCJ1c2VTdGF0ZSIsImNhbXBhaWduTmFtZSIsInNldENhbXBhaWduTmFtZSIsIm5hbWVWYWxpZCIsInNldE5hbWVWYWxpZCIsInNlbmRQcm9jZXNzaW5nIiwic2V0U2VuZFByb2Nlc3NpbmciLCJ2YWxpZGF0ZUNhbXBhaWduTmFtZSIsIm5hbWUiLCJhZGRDYW1wYWlnblJlcUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BSWY7QUFBQTs7QUFBQSxNQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxNQUZKQyxZQUVJLFFBRkpBLFlBRUk7QUFBQSxNQURKQyx3QkFDSSxRQURKQSx3QkFDSTs7QUFBQSxrQkFDb0NDLHNEQUFRLENBQUMsRUFBRCxDQUQ1QztBQUFBLE1BQ0dDLFlBREg7QUFBQSxNQUNpQkMsZUFEakI7O0FBQUEsbUJBRThCRixzREFBUSxDQUFDLEtBQUQsQ0FGdEM7QUFBQSxNQUVHRyxTQUZIO0FBQUEsTUFFY0MsWUFGZDs7QUFBQSxtQkFHd0NKLHNEQUFRLENBQUMsS0FBRCxDQUhoRDtBQUFBLE1BR0dLLGNBSEg7QUFBQSxNQUdtQkMsaUJBSG5COztBQUtKLFdBQVNDLG9CQUFULENBQThCQyxJQUE5QixFQUFvQztBQUNsQztBQUNBO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBVEcsV0FXV0MscUJBWFg7QUFBQTtBQUFBOztBQUFBO0FBQUEsOE1BV0osaUJBQXFDQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNDLGNBQU47QUFDQUwsK0JBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUZGO0FBQUEscUJBR1FQLHdCQUF3QixFQUhoQzs7QUFBQTtBQUlFRyw2QkFBZSxDQUFDLEVBQUQsQ0FBZjtBQUNBSSwrQkFBaUIsQ0FBQyxLQUFELENBQWpCOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWEk7QUFBQTtBQUFBOztBQW1CSixNQUFNTSxVQUFVLEdBQUdQLGNBQWMsR0FBRyxlQUFILEdBQXFCLFFBQXREO0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsTUFBRSxFQUFDLGNBSEw7QUFJRSxRQUFJLEVBQUMsY0FKUDtBQUtFLHdCQUFpQixlQUxuQjtBQU1FLGVBQVcsRUFBQyxxQkFOZDtBQU9FLFNBQUssRUFBRUosWUFQVDtBQVFFLFlBQVEsRUFBRSxrQkFBQ1ksQ0FBRCxFQUFPO0FBQ2ZULGtCQUFZLENBQUNHLG9CQUFvQixDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQixDQUFaO0FBQ0EsYUFBT2IsZUFBZSxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF0QjtBQUNELEtBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBZUU7QUFBTyxNQUFFLEVBQUMsV0FBVjtBQUFzQixhQUFTLEVBQUMsc0JBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBZkYsQ0FERixFQW9CRTtBQUNFLFlBQVEsRUFBRSxDQUFDWixTQUFELElBQWNFLGNBRDFCO0FBRUUsYUFBUyxFQUFDLGlCQUZaO0FBR0UsV0FBTyxFQUFFSSxxQkFIWDtBQUlFLFFBQUksRUFBQyxRQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0csVUFOSCxDQXBCRixDQUZGLENBREY7QUFrQ0QsQ0EzREQ7O0dBQU1oQixZOztLQUFBQSxZO0FBNkRTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZjY4NjlmZmE2OThkNjQ1NWFmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuY29uc3QgT3BlbkNhbXBhaWduID0gKHtcclxuICBjYW1wYWlnbnMsXHJcbiAgc2V0Q2FtcGFpZ25zLFxyXG4gIG9wZW5DYW1wYWlnbkNsaWNrSGFuZGxlcixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjYW1wYWlnbk5hbWUsIHNldENhbXBhaWduTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25hbWVWYWxpZCwgc2V0TmFtZVZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VuZFByb2Nlc3NpbmcsIHNldFNlbmRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVDYW1wYWlnbk5hbWUobmFtZSkge1xyXG4gICAgLy8gY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIC8vIHJldHVybiByZS50ZXN0KG1haWwpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBhZGRDYW1wYWlnblJlcUhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTZW5kUHJvY2Vzc2luZyh0cnVlKTtcclxuICAgIGF3YWl0IG9wZW5DYW1wYWlnbkNsaWNrSGFuZGxlcigpO1xyXG4gICAgc2V0Q2FtcGFpZ25OYW1lKCcnKTtcclxuICAgIHNldFNlbmRQcm9jZXNzaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ1dHRvblRleHQgPSBzZW5kUHJvY2Vzc2luZyA/ICdwcm9jZXNzaW5nLi4uJyA6ICdTdWJtaXQnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYW1wYWlnbk5hbWVcIj5DYW1wYWlnbiBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwiY2FtcGFpZ25OYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIkNhbXBhaWduTmFtZVwiXHJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjYW1wYWlnbiBuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDYW1wYWlnbiBuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NhbXBhaWduTmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TmFtZVZhbGlkKHZhbGlkYXRlQ2FtcGFpZ25OYW1lKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNldENhbXBhaWduTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNtYWxsIGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgVGhpcyBuYW1lIHdpbGwgc2hvdyBwdWJsaWNseSB0byBhbGwgdXNlcnNcclxuICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFuYW1lVmFsaWQgfHwgc2VuZFByb2Nlc3Npbmd9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17YWRkQ2FtcGFpZ25SZXFIYW5kbGVyfVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVuQ2FtcGFpZ247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=