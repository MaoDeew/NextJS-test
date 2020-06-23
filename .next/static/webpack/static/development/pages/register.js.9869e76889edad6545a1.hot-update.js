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
      return p["catch"](function (e) {
        return e;
      });
    })).then(function (values) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImVycm9yVXBsb2FkIiwic2V0RXJyb3JVcGxvYWQiLCJjb3JyZWN0VXBsb2FkIiwic2V0Q29ycmVjdFVwbG9hZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsImZpbGVTZWxlY3RlZCIsInRhcmdldCIsIk1hdGgiLCJyYW5kb20iLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJwcmV2U3RhdGUiLCJsZW5ndGgiLCJoYW5kbGVVcGxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInByb21pc2VzIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInAiLCJlIiwidGhlbiIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRvdGFsRmlsZXNTaXplIiwicmVkdWNlIiwic3VtRmlsZSIsImZpbGUiLCJzaXplIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsRUFBRCxDQURkO0FBQUEsTUFDYkMsS0FEYTtBQUFBLE1BQ05DLFFBRE07O0FBQUEsbUJBRWtCRixzREFBUSxDQUFDLEVBQUQsQ0FGMUI7QUFBQSxNQUViRyxXQUZhO0FBQUEsTUFFQUMsY0FGQTs7QUFBQSxtQkFHc0JKLHNEQUFRLENBQUMsRUFBRCxDQUg5QjtBQUFBLE1BR2JLLGFBSGE7QUFBQSxNQUdFQyxnQkFIRjs7QUFJcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFVO0FBQUEsK0JBQ2xCQyxDQURrQjtBQUV2QixVQUFNQyxZQUFZLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhVixLQUFiLENBQW1CUSxDQUFuQixDQUFyQjtBQUNBQyxrQkFBWSxDQUFDLElBQUQsQ0FBWixHQUFxQkUsSUFBSSxDQUFDQyxNQUFMLEVBQXJCO0FBQ0FILGtCQUFZLENBQUMsV0FBRCxDQUFaLEdBQTRCQSxZQUFZLENBQUNJLElBQWIsQ0FBa0JDLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxHQUE3QixFQUE1QjtBQUNBZCxjQUFRLENBQUMsVUFBQWUsU0FBUztBQUFBLHNIQUFRQSxTQUFSLElBQW1CUCxZQUFuQjtBQUFBLE9BQVYsQ0FBUjtBQUx1Qjs7QUFDM0IsU0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNHLE1BQU4sQ0FBYVYsS0FBYixDQUFtQmlCLE1BQXZDLEVBQStDVCxDQUFDLEVBQWhELEVBQW9EO0FBQUEsWUFBM0NBLENBQTJDO0FBS2pEO0FBRU4sR0FSRDs7QUFVQSxNQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDWCxLQUFELEVBQVU7QUFDM0JBLFNBQUssQ0FBQ1ksY0FBTjtBQUVBLFFBQU1DLFFBQVEsR0FBR0Msa0ZBQXFCLENBQUNyQixLQUFELENBQXRDO0FBQ0FzQixXQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsU0FBRCxDQUFRLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFKO0FBQUEsT0FBVCxDQUFKO0FBQUEsS0FBZCxDQUFaLEVBQ0NDLElBREQsQ0FDTSxVQUFBQyxNQUFNO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosQ0FBSjtBQUFBLEtBRFosV0FFTyxVQUFBRyxLQUFLO0FBQUEsYUFBSUYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosQ0FBSjtBQUFBLEtBRlo7QUFPSCxHQVhEOztBQWFBLE1BQU1DLGNBQWMsR0FBR2hDLEtBQUssQ0FBQ2lDLE1BQU4sQ0FBYSxVQUFDQyxPQUFELEVBQVNDLElBQVQsRUFBaUI7QUFDakQsV0FBT0QsT0FBTyxHQUFHQyxJQUFJLENBQUNDLElBQXRCO0FBQ0gsR0FGc0IsRUFFckIsQ0FGcUIsQ0FBdkI7QUFJQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsRUFBRTlCLFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVEsV0FBTyxFQUFFWSxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFHS2xCLEtBQUssQ0FBQ3dCLEdBQU4sQ0FBVSxVQUFBVyxJQUFJLEVBQUc7QUFDZCxXQUNJO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNFLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRixJQUFJLENBQUN0QixJQURWLEVBRUtzQixJQUFJLENBQUNDLElBRlYsQ0FESjtBQU1ILEdBUEEsQ0FITCxFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVWxDLFdBQVYsVUFBMkJFLGFBQTNCLENBWEosQ0FESjtBQWVILENBOUNEOztHQUFNTixVOztLQUFBQSxVO0FBZ0RTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuOTg2OWU3Njg4OWVkYWQ2NTQ1YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGVzVG9GaXJlYmFzZSB9IGZyb20gXCIuLi9maXJlYmFzZS9maWxldXBsb2FkXCI7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkID0gKCkgPT57XHJcbiAgICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtlcnJvclVwbG9hZCwgc2V0RXJyb3JVcGxvYWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY29ycmVjdFVwbG9hZCwgc2V0Q29ycmVjdFVwbG9hZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT57XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZVNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzW2ldO1xyXG4gICAgICAgICAgICBmaWxlU2VsZWN0ZWRbXCJpZFwiXSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGZpbGVTZWxlY3RlZFtcImV4dGVuc2lvblwiXSA9IGZpbGVTZWxlY3RlZC5uYW1lLnNwbGl0KCcuJykucG9wKCk7XHJcbiAgICAgICAgICAgIHNldEZpbGVzKHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCBmaWxlU2VsZWN0ZWRdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKVxyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzLm1hcChwID0+IHAuY2F0Y2goZSA9PiBlKSkpXHJcbiAgICAgICAgLnRoZW4odmFsdWVzID0+IGNvbnNvbGUubG9nKHZhbHVlcykpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b3RhbEZpbGVzU2l6ZSA9IGZpbGVzLnJlZHVjZSgoc3VtRmlsZSxmaWxlKSA9PntcclxuICAgICAgICByZXR1cm4gc3VtRmlsZSArIGZpbGUuc2l6ZTtcclxuICAgIH0sMCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVXBsb2FkfT5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAge2ZpbGVzLm1hcChmaWxlID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZpbGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLnNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxwPmVycm9yOntlcnJvclVwbG9hZH0gb2s6e2NvcnJlY3RVcGxvYWR9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkOyJdLCJzb3VyY2VSb290IjoiIn0=