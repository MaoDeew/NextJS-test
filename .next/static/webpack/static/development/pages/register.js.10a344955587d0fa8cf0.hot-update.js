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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      uploaded = _useState2[0],
      isUploaded = _useState2[1];

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
      return p["catch"](function (e) {
        return e;
      });
    })).then(function (values) {
      return console.log(values);
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
  }));
};

_s(FileUpload, "MwYVkg3+cJJK1qwWbAmrdyavxGM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsInVwbG9hZGVkIiwiaXNVcGxvYWRlZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJoYW5kbGVVcGxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInByb21pc2VzIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInAiLCJlIiwidGhlbiIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbEZpbGVzU2l6ZSIsInJlZHVjZSIsInN1bUZpbGUiLCJmaWxlIiwic2l6ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2JDLEtBRGE7QUFBQSxNQUNOQyxRQURNOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLEtBQUQsQ0FGbkI7QUFBQSxNQUViRyxRQUZhO0FBQUEsTUFFSEMsVUFGRzs7QUFHcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFVO0FBQUEsK0JBQ2xCQyxDQURrQjtBQUV2QixVQUFNQyxZQUFZLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhUixLQUFiLENBQW1CTSxDQUFuQixDQUFyQjtBQUNBQyxrQkFBWSxDQUFDLElBQUQsQ0FBWixHQUFxQkUsSUFBSSxDQUFDQyxNQUFMLEVBQXJCO0FBQ0FILGtCQUFZLENBQUMsV0FBRCxDQUFaLEdBQTRCQSxZQUFZLENBQUNJLElBQWIsQ0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxHQUE3QixFQUE1QjtBQUNBWixjQUFRLENBQUMsVUFBQWEsU0FBUztBQUFBLHNIQUFRQSxTQUFSLElBQW1CUCxZQUFuQjtBQUFBLE9BQVYsQ0FBUjtBQUx1Qjs7QUFDM0IsU0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNHLE1BQU4sQ0FBYVIsS0FBYixDQUFtQmUsTUFBdkMsRUFBK0NULENBQUMsRUFBaEQsRUFBb0Q7QUFBQSxZQUEzQ0EsQ0FBMkM7QUFLakQ7QUFFTixHQVJEOztBQVVBLE1BQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNYLEtBQUQsRUFBVTtBQUMzQkEsU0FBSyxDQUFDWSxjQUFOO0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxrRkFBcUIsQ0FBQ25CLEtBQUQsQ0FBdEM7QUFDQW9CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxTQUFELENBQVEsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUo7QUFBQSxPQUFULENBQUo7QUFBQSxLQUFkLENBQVosRUFDQ0MsSUFERCxDQUNNLFVBQUFDLE1BQU07QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixDQUFKO0FBQUEsS0FEWjtBQU1ILEdBVkQ7O0FBWUEsTUFBTUcsY0FBYyxHQUFHN0IsS0FBSyxDQUFDOEIsTUFBTixDQUFhLFVBQUNDLE9BQUQsRUFBU0MsSUFBVCxFQUFpQjtBQUNqRCxXQUFPRCxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsSUFBdEI7QUFDSCxHQUZzQixFQUVyQixDQUZxQixDQUF2QjtBQUlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBUSxFQUFFN0IsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVZLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUdLaEIsS0FBSyxDQUFDc0IsR0FBTixDQUFVLFVBQUFVLElBQUksRUFBRztBQUNkLFdBQ0k7QUFBSSxTQUFHLEVBQUVBLElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tGLElBQUksQ0FBQ3JCLElBRFYsRUFFS3FCLElBQUksQ0FBQ0MsSUFGVixDQURKO0FBTUgsR0FQQSxDQUhMLENBREo7QUFjSCxDQTNDRDs7R0FBTW5DLFU7O0tBQUFBLFU7QUE2Q1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy4xMGEzNDQ5NTU1ODdkMGZhOGNmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXBsb2FkRmlsZXNUb0ZpcmViYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpbGV1cGxvYWRcIjtcclxuXHJcbmNvbnN0IEZpbGVVcGxvYWQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3VwbG9hZGVkLCBpc1VwbG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT57XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZVNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzW2ldO1xyXG4gICAgICAgICAgICBmaWxlU2VsZWN0ZWRbXCJpZFwiXSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGZpbGVTZWxlY3RlZFtcImV4dGVuc2lvblwiXSA9IGZpbGVTZWxlY3RlZC5uYW1lLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzKHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCBmaWxlU2VsZWN0ZWRdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKVxyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzLm1hcChwID0+IHAuY2F0Y2goZSA9PiBlKSkpXHJcbiAgICAgICAgLnRoZW4odmFsdWVzID0+IGNvbnNvbGUubG9nKHZhbHVlcykpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG90YWxGaWxlc1NpemUgPSBmaWxlcy5yZWR1Y2UoKHN1bUZpbGUsZmlsZSkgPT57XHJcbiAgICAgICAgcmV0dXJuIHN1bUZpbGUgKyBmaWxlLnNpemU7XHJcbiAgICB9LDApO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtmaWxlcy5tYXAoZmlsZSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtmaWxlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGUubmFtZX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkOyJdLCJzb3VyY2VSb290IjoiIn0=