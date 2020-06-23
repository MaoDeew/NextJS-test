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
    Promise.all(promises).then(function (values) {
      return console.log(values);
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var totalFilesSize = files.reduce(function (sumFile, file) {
    return sumFile + file.size;
  }, 0);
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
  }, "Upload"), files.map(function (file) {
    return __jsx("li", {
      key: file.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, file.name, file.size);
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImVycm9yVXBsb2FkIiwic2V0RXJyb3JVcGxvYWQiLCJjb3JyZWN0VXBsb2FkIiwic2V0Q29ycmVjdFVwbG9hZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJoYW5kbGVVcGxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInByb21pc2VzIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0b3RhbEZpbGVzU2l6ZSIsInJlZHVjZSIsInN1bUZpbGUiLCJmaWxlIiwic2l6ZSIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2JDLEtBRGE7QUFBQSxNQUNOQyxRQURNOztBQUFBLG1CQUVrQkYsc0RBQVEsQ0FBQyxFQUFELENBRjFCO0FBQUEsTUFFYkcsV0FGYTtBQUFBLE1BRUFDLGNBRkE7O0FBQUEsbUJBR3NCSixzREFBUSxDQUFDLEVBQUQsQ0FIOUI7QUFBQSxNQUdiSyxhQUhhO0FBQUEsTUFHRUMsZ0JBSEY7O0FBSXBCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVTtBQUFBLCtCQUNsQkMsQ0FEa0I7QUFFdkIsVUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYVYsS0FBYixDQUFtQlEsQ0FBbkIsQ0FBckI7QUFDQUMsa0JBQVksQ0FBQyxJQUFELENBQVosR0FBcUJFLElBQUksQ0FBQ0MsTUFBTCxFQUFyQjtBQUNBSCxrQkFBWSxDQUFDLFdBQUQsQ0FBWixHQUE0QkEsWUFBWSxDQUFDSSxJQUFiLENBQWtCQyxLQUFsQixDQUF3QixHQUF4QixFQUE2QkMsR0FBN0IsRUFBNUI7QUFDQWQsY0FBUSxDQUFDLFVBQUFlLFNBQVM7QUFBQSxzSEFBUUEsU0FBUixJQUFtQlAsWUFBbkI7QUFBQSxPQUFWLENBQVI7QUFMdUI7O0FBQzNCLFNBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRyxNQUFOLENBQWFWLEtBQWIsQ0FBbUJpQixNQUF2QyxFQUErQ1QsQ0FBQyxFQUFoRCxFQUFvRDtBQUFBLFlBQTNDQSxDQUEyQztBQUtqRDtBQUVOLEdBUkQ7O0FBVUEsTUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1gsS0FBRCxFQUFVO0FBQzNCQSxTQUFLLENBQUNZLGNBQU47QUFFQSxRQUFNQyxRQUFRLEdBQUdDLGtGQUFxQixDQUFDckIsS0FBRCxDQUF0QztBQUNBc0IsV0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVosRUFDQ0ksSUFERCxDQUNNLFVBQUFDLE1BQU07QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixDQUFKO0FBQUEsS0FEWixXQUVPLFVBQUFHLEtBQUs7QUFBQSxhQUFJRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixDQUFKO0FBQUEsS0FGWjtBQU9ILEdBWEQ7O0FBYUEsTUFBTUMsY0FBYyxHQUFHN0IsS0FBSyxDQUFDOEIsTUFBTixDQUFhLFVBQUNDLE9BQUQsRUFBU0MsSUFBVCxFQUFpQjtBQUNqRCxXQUFPRCxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsSUFBdEI7QUFDSCxHQUZzQixFQUVyQixDQUZxQixDQUF2QjtBQUlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBUSxFQUFFM0IsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVZLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQUdLbEIsS0FBSyxDQUFDa0MsR0FBTixDQUFVLFVBQUFGLElBQUksRUFBRztBQUNkLFdBQ0k7QUFBSSxTQUFHLEVBQUVBLElBQUksQ0FBQ0csRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tILElBQUksQ0FBQ25CLElBRFYsRUFFS21CLElBQUksQ0FBQ0MsSUFGVixDQURKO0FBTUgsR0FQQSxDQUhMLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVL0IsV0FBVixVQUEyQkUsYUFBM0IsQ0FYSixDQURKO0FBZUgsQ0E5Q0Q7O0dBQU1OLFU7O0tBQUFBLFU7QUFnRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy5jMDYwYWQ0YjUzYzU5NWIxYjQ0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXBsb2FkRmlsZXNUb0ZpcmViYXNlIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpbGV1cGxvYWRcIjtcclxuXHJcbmNvbnN0IEZpbGVVcGxvYWQgPSAoKSA9PntcclxuICAgIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yVXBsb2FkLCBzZXRFcnJvclVwbG9hZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjb3JyZWN0VXBsb2FkLCBzZXRDb3JyZWN0VXBsb2FkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PntcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlU2VsZWN0ZWQgPSBldmVudC50YXJnZXQuZmlsZXNbaV07XHJcbiAgICAgICAgICAgIGZpbGVTZWxlY3RlZFtcImlkXCJdID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgZmlsZVNlbGVjdGVkW1wiZXh0ZW5zaW9uXCJdID0gZmlsZVNlbGVjdGVkLm5hbWUuc3BsaXQoJy4nKS5wb3AoKTtcclxuICAgICAgICAgICAgc2V0RmlsZXMocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIGZpbGVTZWxlY3RlZF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9IChldmVudCkgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpXHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpXHJcbiAgICAgICAgLnRoZW4odmFsdWVzID0+IGNvbnNvbGUubG9nKHZhbHVlcykpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3RhbEZpbGVzU2l6ZSA9IGZpbGVzLnJlZHVjZSgoc3VtRmlsZSxmaWxlKSA9PntcclxuICAgICAgICByZXR1cm4gc3VtRmlsZSArIGZpbGUuc2l6ZTtcclxuICAgIH0sMCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVXBsb2FkfT5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAge2ZpbGVzLm1hcChmaWxlID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZpbGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLnNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxwPmVycm9yOntlcnJvclVwbG9hZH0gb2s6e2NvcnJlY3RVcGxvYWR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkOyJdLCJzb3VyY2VSb290IjoiIn0=