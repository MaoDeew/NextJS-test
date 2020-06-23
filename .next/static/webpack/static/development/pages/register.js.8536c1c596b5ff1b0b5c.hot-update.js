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

  var handleUpload = function handleUpload() {
    /*const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
        "state_changed",
        (snapshot) =>{
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) =>{
            console.log(error);
        },
        () =>{
            console.log("FILE UPLOADED");
        }
    )*/
    Object(_firebase_fileupload__WEBPACK_IMPORTED_MODULE_2__["uploadFilesToFirebase"])(files);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "file",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Upload"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJoYW5kbGVVcGxvYWQiLCJ1cGxvYWRGaWxlc1RvRmlyZWJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsRUFBRCxDQURkO0FBQUEsTUFDYkMsS0FEYTtBQUFBLE1BQ05DLFFBRE07O0FBR3BCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVTtBQUFBLCtCQUNsQkMsQ0FEa0I7QUFFdkIsVUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYU4sS0FBYixDQUFtQkksQ0FBbkIsQ0FBckI7QUFDQUMsa0JBQVksQ0FBQyxJQUFELENBQVosR0FBcUJFLElBQUksQ0FBQ0MsTUFBTCxFQUFyQixDQUh1QixDQUkxQjs7QUFDR1AsY0FBUSxDQUFDLFVBQUFRLFNBQVM7QUFBQSxzSEFBUUEsU0FBUixJQUFtQkosWUFBbkI7QUFBQSxPQUFWLENBQVI7QUFMdUI7O0FBQzNCLFNBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRyxNQUFOLENBQWFOLEtBQWIsQ0FBbUJVLE1BQXZDLEVBQStDTixDQUFDLEVBQWhELEVBQW9EO0FBQUEsWUFBM0NBLENBQTJDO0FBS2pEO0FBRU4sR0FSRDs7QUFVQSxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFLO0FBQ3RCOzs7Ozs7Ozs7Ozs7OztBQWNBQyxzRkFBcUIsQ0FBQ1osS0FBRCxDQUFyQjtBQUNILEdBaEJEOztBQWtCQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRUUsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVTLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixDQURKO0FBTUgsQ0FyQ0Q7O0dBQU1iLFU7O0tBQUFBLFU7QUF1Q1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy44NTM2YzFjNTk2YjVmZjFiMGI1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXBsb2FkRmlsZXNUb0ZpcmViYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpbGV1cGxvYWRcIjtcclxuXHJcbmNvbnN0IEZpbGVVcGxvYWQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC5maWxlc1tpXTtcclxuICAgICAgICAgICAgZmlsZVNlbGVjdGVkW1wiaWRcIl0gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAvLyBhZGQgYW4gXCJpZFwiIHByb3BlcnR5IHRvIGVhY2ggRmlsZSBvYmplY3RcclxuICAgICAgICAgICAgc2V0RmlsZXMocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIGZpbGVTZWxlY3RlZF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpID0+e1xyXG4gICAgICAgIC8qY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGBmaWxlcy8ke2ZpbGUubmFtZX1gKS5wdXQoZmlsZSk7XHJcbiAgICAgICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgICAgICAgXCJzdGF0ZV9jaGFuZ2VkXCIsXHJcbiAgICAgICAgICAgIChzbmFwc2hvdCkgPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VwbG9hZCBpcyAnICsgcHJvZ3Jlc3MgKyAnJSBkb25lJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGSUxFIFVQTE9BREVEXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSovXHJcbiAgICAgICAgdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==