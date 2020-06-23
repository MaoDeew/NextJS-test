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
    for (var i = 0; i < event.target.files.length; i++) {
      var fileSelected = event.target.files[i];
      fileSelected["id"] = Math.random(); // add an "id" property to each File object

      setFiles(function (prevState) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState), [newFile]);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaSIsInRhcmdldCIsImxlbmd0aCIsImZpbGVTZWxlY3RlZCIsIk1hdGgiLCJyYW5kb20iLCJwcmV2U3RhdGUiLCJuZXdGaWxlIiwiaGFuZGxlVXBsb2FkIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ2JDLEtBRGE7QUFBQSxNQUNOQyxRQURNOztBQUdwQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVU7QUFDM0IsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUwsS0FBYixDQUFtQk0sTUFBdkMsRUFBK0NGLENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsVUFBTUcsWUFBWSxHQUFHSixLQUFLLENBQUNFLE1BQU4sQ0FBYUwsS0FBYixDQUFtQkksQ0FBbkIsQ0FBckI7QUFDQUcsa0JBQVksQ0FBQyxJQUFELENBQVosR0FBcUJDLElBQUksQ0FBQ0MsTUFBTCxFQUFyQixDQUZnRCxDQUduRDs7QUFDR1IsY0FBUSxDQUFDLFVBQUFTLFNBQVM7QUFBQSxzSEFBUUEsU0FBUixJQUFtQkMsT0FBbkI7QUFBQSxPQUFWLENBQVI7QUFDRDtBQUVOLEdBUkQ7O0FBVUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSztBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7QUFjQUMsc0ZBQXFCLENBQUNiLEtBQUQsQ0FBckI7QUFDSCxHQWhCRDs7QUFrQkEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFRLEVBQUVFLFlBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVEsV0FBTyxFQUFFVSxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosQ0FESjtBQU1ILENBckNEOztHQUFNZCxVOztLQUFBQSxVO0FBdUNTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuN2EwNzQ4YzNmYzI0ZDhhNTYyNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGVzVG9GaXJlYmFzZSB9IGZyb20gXCIuLi9maXJlYmFzZS9maWxldXBsb2FkXCI7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkID0gKCkgPT57XHJcbiAgICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PntcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlU2VsZWN0ZWQgPSBldmVudC50YXJnZXQuZmlsZXNbaV07XHJcbiAgICAgICAgICAgIGZpbGVTZWxlY3RlZFtcImlkXCJdID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgLy8gYWRkIGFuIFwiaWRcIiBwcm9wZXJ0eSB0byBlYWNoIEZpbGUgb2JqZWN0XHJcbiAgICAgICAgICAgIHNldEZpbGVzKHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCBuZXdGaWxlXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkID0gKCkgPT57XHJcbiAgICAgICAgLypjb25zdCB1cGxvYWRUYXNrID0gc3RvcmFnZS5yZWYoYGZpbGVzLyR7ZmlsZS5uYW1lfWApLnB1dChmaWxlKTtcclxuICAgICAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICAgICAgICBcInN0YXRlX2NoYW5nZWRcIixcclxuICAgICAgICAgICAgKHNuYXBzaG90KSA9PntcclxuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXBsb2FkIGlzICcgKyBwcm9ncmVzcyArICclIGRvbmUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZJTEUgVVBMT0FERURcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKi9cclxuICAgICAgICB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVXBsb2FkfT5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZDsiXSwic291cmNlUm9vdCI6IiJ9