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
    Promise.all(promises).then(function () {
      return alert('All files uploaded');
    })["catch"](function (err) {
      return console.log(err.code);
    });
  };

  var totalFilesSize = files.reduce(function (sumFile, file) {
    return sumFile + file.size;
  }, 0);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "file",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Upload"), files.map(function (file) {
    return __jsx("li", {
      key: file.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, file.name, file.size);
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImVycm9yVXBsb2FkIiwic2V0RXJyb3JVcGxvYWQiLCJjb3JyZWN0VXBsb2FkIiwic2V0Q29ycmVjdFVwbG9hZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJoYW5kbGVVcGxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInByb21pc2VzIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJhbGVydCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwidG90YWxGaWxlc1NpemUiLCJyZWR1Y2UiLCJzdW1GaWxlIiwiZmlsZSIsInNpemUiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNiQyxLQURhO0FBQUEsTUFDTkMsUUFETTs7QUFBQSxtQkFFa0JGLHNEQUFRLENBQUMsRUFBRCxDQUYxQjtBQUFBLE1BRWJHLFdBRmE7QUFBQSxNQUVBQyxjQUZBOztBQUFBLG1CQUdzQkosc0RBQVEsQ0FBQyxFQUFELENBSDlCO0FBQUEsTUFHYkssYUFIYTtBQUFBLE1BR0VDLGdCQUhGOztBQUlwQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVU7QUFBQSwrQkFDbEJDLENBRGtCO0FBRXZCLFVBQU1DLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFWLEtBQWIsQ0FBbUJRLENBQW5CLENBQXJCO0FBQ0FDLGtCQUFZLENBQUMsSUFBRCxDQUFaLEdBQXFCRSxJQUFJLENBQUNDLE1BQUwsRUFBckI7QUFDQUgsa0JBQVksQ0FBQyxXQUFELENBQVosR0FBNEJBLFlBQVksQ0FBQ0ksSUFBYixDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQTVCO0FBQ0FkLGNBQVEsQ0FBQyxVQUFBZSxTQUFTO0FBQUEsc0hBQVFBLFNBQVIsSUFBbUJQLFlBQW5CO0FBQUEsT0FBVixDQUFSO0FBTHVCOztBQUMzQixTQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0csTUFBTixDQUFhVixLQUFiLENBQW1CaUIsTUFBdkMsRUFBK0NULENBQUMsRUFBaEQsRUFBb0Q7QUFBQSxZQUEzQ0EsQ0FBMkM7QUFLakQ7QUFFTixHQVJEOztBQVVBLE1BQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNYLEtBQUQsRUFBVTtBQUMzQkEsU0FBSyxDQUFDWSxjQUFOO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxrRkFBcUIsQ0FBQ3JCLEtBQUQsQ0FBdEM7QUFDQXNCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaLEVBQ0NJLElBREQsQ0FDTTtBQUFBLGFBQU1DLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQUEsS0FETixXQUVPLFVBQUFDLEdBQUc7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFoQixDQUFKO0FBQUEsS0FGVjtBQUdILEdBTkQ7O0FBUUEsTUFBTUMsY0FBYyxHQUFHOUIsS0FBSyxDQUFDK0IsTUFBTixDQUFhLFVBQUNDLE9BQUQsRUFBU0MsSUFBVCxFQUFpQjtBQUNqRCxXQUFPRCxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsSUFBdEI7QUFDSCxHQUZzQixFQUVyQixDQUZxQixDQUF2QjtBQUlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBUSxFQUFFNUIsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVZLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUdLbEIsS0FBSyxDQUFDbUMsR0FBTixDQUFVLFVBQUFGLElBQUksRUFBRztBQUNkLFdBQ0k7QUFBSSxTQUFHLEVBQUVBLElBQUksQ0FBQ0csRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tILElBQUksQ0FBQ3BCLElBRFYsRUFFS29CLElBQUksQ0FBQ0MsSUFGVixDQURKO0FBTUgsR0FQQSxDQUhMLENBREo7QUFjSCxDQXhDRDs7R0FBTXBDLFU7O0tBQUFBLFU7QUEwQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy41OWFiM2ZkYjQ4ODk5Y2RmMDM5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXBsb2FkRmlsZXNUb0ZpcmViYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpbGV1cGxvYWRcIjtcclxuXHJcbmNvbnN0IEZpbGVVcGxvYWQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yVXBsb2FkLCBzZXRFcnJvclVwbG9hZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjb3JyZWN0VXBsb2FkLCBzZXRDb3JyZWN0VXBsb2FkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PntcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlU2VsZWN0ZWQgPSBldmVudC50YXJnZXQuZmlsZXNbaV07XHJcbiAgICAgICAgICAgIGZpbGVTZWxlY3RlZFtcImlkXCJdID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgZmlsZVNlbGVjdGVkW1wiZXh0ZW5zaW9uXCJdID0gZmlsZVNlbGVjdGVkLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXMocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIGZpbGVTZWxlY3RlZF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9IChldmVudCkgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHVwbG9hZEZpbGVzVG9GaXJlYmFzZShmaWxlcylcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcylcclxuICAgICAgICAudGhlbigoKSA9PiBhbGVydCgnQWxsIGZpbGVzIHVwbG9hZGVkJykpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIuY29kZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvdGFsRmlsZXNTaXplID0gZmlsZXMucmVkdWNlKChzdW1GaWxlLGZpbGUpID0+e1xyXG4gICAgICAgIHJldHVybiBzdW1GaWxlICsgZmlsZS5zaXplO1xyXG4gICAgfSwwKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9PlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7ZmlsZXMubWFwKGZpbGUgPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZmlsZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLm5hbWV9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGUuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZDsiXSwic291cmNlUm9vdCI6IiJ9