webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./components/FileUpload.js":
/*!**********************************!*\
  !*** ./components/FileUpload.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/fileupload */ "./firebase/fileupload.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\mabet\\Desktop\\nextjs-prueba\\components\\FileUpload.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var FileUpload = function FileUpload() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      files = _useState[0],
      setFiles = _useState[1];

  var handleChange = function handleChange(event) {
    var _loop = function _loop(i) {
      var fileSelected = event.target.files[i];
      fileSelected["id"] = Math.random(); // add an "id" property to each File object

      setFiles(function (prevState) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState), [fileSelected]);
      });
    };

    for (var i = 0; i < event.target.files.length; i++) {
      _loop(i);
    }
  };

  var handleUpload = function handleUpload(event) {
    event.preventDefault();
    Object(_firebase_fileupload__WEBPACK_IMPORTED_MODULE_2__["uploadFilesToFirebase"])(files);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "file",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Upload"), files.map(function (file) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, file.name);
  }), console.log(files));
};

_s(FileUpload, "aPldHTVBr/g7fY6pAkrAgkA0SoA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJoYW5kbGVVcGxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsIm1hcCIsImZpbGUiLCJuYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNiQyxLQURhO0FBQUEsTUFDTkMsUUFETTs7QUFHcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFVO0FBQUEsK0JBQ2xCQyxDQURrQjtBQUV2QixVQUFNQyxZQUFZLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhTixLQUFiLENBQW1CSSxDQUFuQixDQUFyQjtBQUNBQyxrQkFBWSxDQUFDLElBQUQsQ0FBWixHQUFxQkUsSUFBSSxDQUFDQyxNQUFMLEVBQXJCLENBSHVCLENBSTFCOztBQUNHUCxjQUFRLENBQUMsVUFBQVEsU0FBUztBQUFBLHNIQUFRQSxTQUFSLElBQW1CSixZQUFuQjtBQUFBLE9BQVYsQ0FBUjtBQUx1Qjs7QUFDM0IsU0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNHLE1BQU4sQ0FBYU4sS0FBYixDQUFtQlUsTUFBdkMsRUFBK0NOLENBQUMsRUFBaEQsRUFBb0Q7QUFBQSxZQUEzQ0EsQ0FBMkM7QUFLakQ7QUFFTixHQVJEOztBQVVBLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNSLEtBQUQsRUFBVTtBQUMzQkEsU0FBSyxDQUFDUyxjQUFOO0FBQ0FDLHNGQUFxQixDQUFDYixLQUFELENBQXJCO0FBQ0gsR0FIRDs7QUFLQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRUUsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVTLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUdLWCxLQUFLLENBQUNjLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUc7QUFDZCxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsSUFBSSxDQUFDQyxJQUFWLENBREo7QUFHSCxHQUpBLENBSEwsRUFRS0MsT0FBTyxDQUFDQyxHQUFSLENBQVlsQixLQUFaLENBUkwsQ0FESjtBQVlILENBOUJEOztHQUFNRixVOztLQUFBQSxVO0FBZ0NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuZjM2ZmQ2YTkyZTZjOTc2MjE0MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGVzVG9GaXJlYmFzZSB9IGZyb20gXCIuLi9maXJlYmFzZS9maWxldXBsb2FkXCI7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkID0gKCkgPT57XHJcbiAgICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PntcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlU2VsZWN0ZWQgPSBldmVudC50YXJnZXQuZmlsZXNbaV07XHJcbiAgICAgICAgICAgIGZpbGVTZWxlY3RlZFtcImlkXCJdID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgLy8gYWRkIGFuIFwiaWRcIiBwcm9wZXJ0eSB0byBlYWNoIEZpbGUgb2JqZWN0XHJcbiAgICAgICAgICAgIHNldEZpbGVzKHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCBmaWxlU2VsZWN0ZWRdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtmaWxlcy5tYXAoZmlsZSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8bGk+e2ZpbGUubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGZpbGVzKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZDsiXSwic291cmNlUm9vdCI6IiJ9