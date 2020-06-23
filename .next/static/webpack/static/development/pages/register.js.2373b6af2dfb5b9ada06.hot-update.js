webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./components/FileUpload.js":
/*!**********************************!*\
  !*** ./components/FileUpload.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\mabet\\Desktop\\nextjs-prueba\\components\\FileUpload.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FileUpload = function FileUpload() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      file = _useState[0],
      setFile = _useState[1];

  var handleChange = function handleChange(event) {
    var fileSelected = event.target.files[0];

    if (fileSelected) {
      setFile(fileSelected);
    }
  };

  var handleUpload = function handleUpload() {
    var uploadTask = _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__["storage"].ref("files/".concat(file.name)).put(file);
    uploadTask.on("state_changed", function (snapshot) {
      var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      console.log('Upload is ' + progress + '% done');
    }, function (error) {
      console.log(error);
    }, function () {
      console.log("FILE UPLOADED");
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "file",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Upload"), console.log("file selected : ", file));
};

_s(FileUpload, "Nkb8eHkBruGouXteoqeZ1R6wRVk=");

_c = FileUpload;
/* harmony default export */ __webpack_exports__["default"] = (FileUpload);

var _c;

$RefreshReg$(_c, "FileUpload");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZSIsInNldEZpbGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVXBsb2FkIiwidXBsb2FkVGFzayIsInN0b3JhZ2UiLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJzbmFwc2hvdCIsInByb2dyZXNzIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsSUFBRCxDQURaO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLE9BRE87O0FBR3BCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVTtBQUMzQixRQUFJQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBQW5COztBQUNBLFFBQUdGLFlBQUgsRUFBZ0I7QUFDWkgsYUFBTyxDQUFDRyxZQUFELENBQVA7QUFDSDtBQUNKLEdBTEQ7O0FBT0EsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSztBQUN0QixRQUFNQyxVQUFVLEdBQUdDLDBEQUFPLENBQUNDLEdBQVIsaUJBQXFCVixJQUFJLENBQUNXLElBQTFCLEdBQWtDQyxHQUFsQyxDQUFzQ1osSUFBdEMsQ0FBbkI7QUFDQVEsY0FBVSxDQUFDSyxFQUFYLENBQ0ksZUFESixFQUVJLFVBQUNDLFFBQUQsRUFBYTtBQUNULFVBQUlDLFFBQVEsR0FBSUQsUUFBUSxDQUFDRSxnQkFBVCxHQUE0QkYsUUFBUSxDQUFDRyxVQUF0QyxHQUFvRCxHQUFuRTtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlSixRQUFmLEdBQTBCLFFBQXRDO0FBQ0gsS0FMTCxFQU1JLFVBQUNLLEtBQUQsRUFBVTtBQUNORixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNILEtBUkwsRUFTSSxZQUFLO0FBQ0RGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSCxLQVhMO0FBYUgsR0FmRDs7QUFpQkEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFRLEVBQUVqQixZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFRLFdBQU8sRUFBRUssWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBR0tXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQStCbkIsSUFBL0IsQ0FITCxDQURKO0FBT0gsQ0FsQ0Q7O0dBQU1GLFU7O0tBQUFBLFU7QUFvQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy4yMzczYjZhZjJkZmI1YjlhZGEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5cclxuY29uc3QgRmlsZVVwbG9hZCA9ICgpID0+e1xyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT57XHJcbiAgICAgICAgbGV0IGZpbGVTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBpZihmaWxlU2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICBzZXRGaWxlKGZpbGVTZWxlY3RlZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGBmaWxlcy8ke2ZpbGUubmFtZX1gKS5wdXQoZmlsZSk7XHJcbiAgICAgICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgICAgICAgXCJzdGF0ZV9jaGFuZ2VkXCIsXHJcbiAgICAgICAgICAgIChzbmFwc2hvdCkgPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VwbG9hZCBpcyAnICsgcHJvZ3Jlc3MgKyAnJSBkb25lJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSUxFIFVQTE9BREVEXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImZpbGUgc2VsZWN0ZWQgOiBcIixmaWxlKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZDsiXSwic291cmNlUm9vdCI6IiJ9