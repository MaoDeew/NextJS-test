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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      errorUpload = _useState2[0],
      setErrorUpload = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      correctUpload = _useState3[0],
      setCorrectUpload = _useState3[1];

  var handleChange = function handleChange(event) {
    var _loop = function _loop(i) {
      var fileSelected = event.target.files[i];
      fileSelected["id"] = Math.random();
      fileSelected["extension"] = fileSelected.name.split('.').pop();
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
    var promises = Object(_firebase_fileupload__WEBPACK_IMPORTED_MODULE_2__["uploadFilesToFirebase"])(files);
    Promise.all(promises.map(function (p) {
      return p["catch"](function () {
        return console.log(p);
      });
    })).then(function () {
      return console.log('done!');
    });
  };

  var totalFilesSize = files.reduce(function (sumFile, file) {
    return sumFile + file.size;
  }, 0);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "file",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Upload"), files.map(function (file) {
    return __jsx("li", {
      key: file.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, file.name, file.size);
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "error:", errorUpload, " ok:", correctUpload));
};

_s(FileUpload, "BQNU3aURGjRbXeec3emEhN2076E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImVycm9yVXBsb2FkIiwic2V0RXJyb3JVcGxvYWQiLCJjb3JyZWN0VXBsb2FkIiwic2V0Q29ycmVjdFVwbG9hZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJoYW5kbGVVcGxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInByb21pc2VzIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInAiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInRvdGFsRmlsZXNTaXplIiwicmVkdWNlIiwic3VtRmlsZSIsImZpbGUiLCJzaXplIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsRUFBRCxDQURkO0FBQUEsTUFDYkMsS0FEYTtBQUFBLE1BQ05DLFFBRE07O0FBQUEsbUJBRWtCRixzREFBUSxDQUFDLEVBQUQsQ0FGMUI7QUFBQSxNQUViRyxXQUZhO0FBQUEsTUFFQUMsY0FGQTs7QUFBQSxtQkFHc0JKLHNEQUFRLENBQUMsRUFBRCxDQUg5QjtBQUFBLE1BR2JLLGFBSGE7QUFBQSxNQUdFQyxnQkFIRjs7QUFJcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFVO0FBQUEsK0JBQ2xCQyxDQURrQjtBQUV2QixVQUFNQyxZQUFZLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhVixLQUFiLENBQW1CUSxDQUFuQixDQUFyQjtBQUNBQyxrQkFBWSxDQUFDLElBQUQsQ0FBWixHQUFxQkUsSUFBSSxDQUFDQyxNQUFMLEVBQXJCO0FBQ0FILGtCQUFZLENBQUMsV0FBRCxDQUFaLEdBQTRCQSxZQUFZLENBQUNJLElBQWIsQ0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxHQUE3QixFQUE1QjtBQUNBZCxjQUFRLENBQUMsVUFBQWUsU0FBUztBQUFBLHNIQUFRQSxTQUFSLElBQW1CUCxZQUFuQjtBQUFBLE9BQVYsQ0FBUjtBQUx1Qjs7QUFDM0IsU0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNHLE1BQU4sQ0FBYVYsS0FBYixDQUFtQmlCLE1BQXZDLEVBQStDVCxDQUFDLEVBQWhELEVBQW9EO0FBQUEsWUFBM0NBLENBQTJDO0FBS2pEO0FBRU4sR0FSRDs7QUFVQSxNQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDWCxLQUFELEVBQVU7QUFDM0JBLFNBQUssQ0FBQ1ksY0FBTjtBQUVBLFFBQU1DLFFBQVEsR0FBR0Msa0ZBQXFCLENBQUNyQixLQUFELENBQXRDO0FBQ0FzQixXQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsU0FBRCxDQUFRO0FBQUEsZUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVosQ0FBTjtBQUFBLE9BQVIsQ0FBSjtBQUFBLEtBQWQsQ0FBWixFQUE4REcsSUFBOUQsQ0FBbUU7QUFBQSxhQUFNRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLENBQU47QUFBQSxLQUFuRTtBQUtILEdBVEQ7O0FBV0EsTUFBTUUsY0FBYyxHQUFHN0IsS0FBSyxDQUFDOEIsTUFBTixDQUFhLFVBQUNDLE9BQUQsRUFBU0MsSUFBVCxFQUFpQjtBQUNqRCxXQUFPRCxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsSUFBdEI7QUFDSCxHQUZzQixFQUVyQixDQUZxQixDQUF2QjtBQUlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBUSxFQUFFM0IsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVZLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUdLbEIsS0FBSyxDQUFDd0IsR0FBTixDQUFVLFVBQUFRLElBQUksRUFBRztBQUNkLFdBQ0k7QUFBSSxTQUFHLEVBQUVBLElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tGLElBQUksQ0FBQ25CLElBRFYsRUFFS21CLElBQUksQ0FBQ0MsSUFGVixDQURKO0FBTUgsR0FQQSxDQUhMLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVL0IsV0FBVixVQUEyQkUsYUFBM0IsQ0FYSixDQURKO0FBZUgsQ0E1Q0Q7O0dBQU1OLFU7O0tBQUFBLFU7QUE4Q1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy5kZmU5YmQ5NzM2NDg0ZDY0NWFmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXBsb2FkRmlsZXNUb0ZpcmViYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpbGV1cGxvYWRcIjtcclxuXHJcbmNvbnN0IEZpbGVVcGxvYWQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yVXBsb2FkLCBzZXRFcnJvclVwbG9hZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjb3JyZWN0VXBsb2FkLCBzZXRDb3JyZWN0VXBsb2FkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PntcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlU2VsZWN0ZWQgPSBldmVudC50YXJnZXQuZmlsZXNbaV07XHJcbiAgICAgICAgICAgIGZpbGVTZWxlY3RlZFtcImlkXCJdID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgZmlsZVNlbGVjdGVkW1wiZXh0ZW5zaW9uXCJdID0gZmlsZVNlbGVjdGVkLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXMocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIGZpbGVTZWxlY3RlZF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9IChldmVudCkgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpXHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMubWFwKHAgPT4gcC5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZyhwKSkpKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdkb25lIScpKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvdGFsRmlsZXNTaXplID0gZmlsZXMucmVkdWNlKChzdW1GaWxlLGZpbGUpID0+e1xyXG4gICAgICAgIHJldHVybiBzdW1GaWxlICsgZmlsZS5zaXplO1xyXG4gICAgfSwwKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9PlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7ZmlsZXMubWFwKGZpbGUgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZmlsZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLm5hbWV9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGUuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPHA+ZXJyb3I6e2Vycm9yVXBsb2FkfSBvazp7Y29ycmVjdFVwbG9hZH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==