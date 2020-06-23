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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      errors = _useState2[0],
      setErrors = _useState2[1];

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
    var response = Object(_firebase_fileupload__WEBPACK_IMPORTED_MODULE_2__["uploadFilesToFirebase"])(files);
    console.log(response);
  };

  var totalFilesSize = files.reduce(function (sumFile, file) {
    return sumFile + file.size;
  }, 0);
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
  }, "Upload"), files.map(function (file) {
    return __jsx("li", {
      key: file.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, file.name, file.size);
  }));
};

_s(FileUpload, "qrkd4nYP8cj2VOxoCOHJ7Dhu/Pk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJoYW5kbGVVcGxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIiwiY29uc29sZSIsImxvZyIsInRvdGFsRmlsZXNTaXplIiwicmVkdWNlIiwic3VtRmlsZSIsImZpbGUiLCJzaXplIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsRUFBRCxDQURkO0FBQUEsTUFDYkMsS0FEYTtBQUFBLE1BQ05DLFFBRE07O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWJHLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUdwQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVU7QUFBQSwrQkFDbEJDLENBRGtCO0FBRXZCLFVBQU1DLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFSLEtBQWIsQ0FBbUJNLENBQW5CLENBQXJCO0FBQ0FDLGtCQUFZLENBQUMsSUFBRCxDQUFaLEdBQXFCRSxJQUFJLENBQUNDLE1BQUwsRUFBckI7QUFDQUgsa0JBQVksQ0FBQyxXQUFELENBQVosR0FBNEJBLFlBQVksQ0FBQ0ksSUFBYixDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQTVCO0FBQ0FaLGNBQVEsQ0FBQyxVQUFBYSxTQUFTO0FBQUEsc0hBQVFBLFNBQVIsSUFBbUJQLFlBQW5CO0FBQUEsT0FBVixDQUFSO0FBTHVCOztBQUMzQixTQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ0csTUFBTixDQUFhUixLQUFiLENBQW1CZSxNQUF2QyxFQUErQ1QsQ0FBQyxFQUFoRCxFQUFvRDtBQUFBLFlBQTNDQSxDQUEyQztBQUtqRDtBQUVOLEdBUkQ7O0FBVUEsTUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1gsS0FBRCxFQUFVO0FBQzNCQSxTQUFLLENBQUNZLGNBQU47QUFFQSxRQUFNQyxRQUFRLEdBQUdDLGtGQUFxQixDQUFDbkIsS0FBRCxDQUF0QztBQUNBb0IsV0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFJSCxHQVJEOztBQVVBLE1BQU1JLGNBQWMsR0FBR3RCLEtBQUssQ0FBQ3VCLE1BQU4sQ0FBYSxVQUFDQyxPQUFELEVBQVNDLElBQVQsRUFBaUI7QUFDakQsV0FBT0QsT0FBTyxHQUFHQyxJQUFJLENBQUNDLElBQXRCO0FBQ0gsR0FGc0IsRUFFckIsQ0FGcUIsQ0FBdkI7QUFJQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRXRCLFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVEsV0FBTyxFQUFFWSxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFHS2hCLEtBQUssQ0FBQzJCLEdBQU4sQ0FBVSxVQUFBRixJQUFJLEVBQUc7QUFDZCxXQUNJO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNHLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLSCxJQUFJLENBQUNkLElBRFYsRUFFS2MsSUFBSSxDQUFDQyxJQUZWLENBREo7QUFNSCxHQVBBLENBSEwsQ0FESjtBQWNILENBekNEOztHQUFNNUIsVTs7S0FBQUEsVTtBQTJDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlZ2lzdGVyLmpzLjRkNTQ2MDE3OTcwYWJiODM1NDVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1cGxvYWRGaWxlc1RvRmlyZWJhc2UgfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlsZXVwbG9hZFwiO1xyXG5cclxuY29uc3QgRmlsZVVwbG9hZCA9ICgpID0+e1xyXG4gICAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PntcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlU2VsZWN0ZWQgPSBldmVudC50YXJnZXQuZmlsZXNbaV07XHJcbiAgICAgICAgICAgIGZpbGVTZWxlY3RlZFtcImlkXCJdID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgZmlsZVNlbGVjdGVkW1wiZXh0ZW5zaW9uXCJdID0gZmlsZVNlbGVjdGVkLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXMocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIGZpbGVTZWxlY3RlZF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9IChldmVudCkgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3RhbEZpbGVzU2l6ZSA9IGZpbGVzLnJlZHVjZSgoc3VtRmlsZSxmaWxlKSA9PntcclxuICAgICAgICByZXR1cm4gc3VtRmlsZSArIGZpbGUuc2l6ZTtcclxuICAgIH0sMCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVXBsb2FkfT5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAge2ZpbGVzLm1hcChmaWxlID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZpbGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLnNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==