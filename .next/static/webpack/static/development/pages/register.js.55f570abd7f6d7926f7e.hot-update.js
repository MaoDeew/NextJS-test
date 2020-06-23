webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./firebase/fileupload.js":
/*!********************************!*\
  !*** ./firebase/fileupload.js ***!
  \********************************/
/*! exports provided: uploadFilesToFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFilesToFirebase", function() { return uploadFilesToFirebase; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.js");



var storage = _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage();
function uploadFilesToFirebase(files) {
  var promises = [];
  files.forEach(function (file) {
    var uploadTask = storage.ref("files/".concat(file.name)).put(file);
    uploadTask.on(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage.TaskEvent.STATE_CHANGED, function (snapshot) {
      var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      console.log('Upload is ' + progress + '% done');
    }, function (error) {
      console.log(error);
    }, /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("file ".concat(file.name, " uploaded"));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  return promises;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJmb3JFYWNoIiwiZmlsZSIsInVwbG9hZFRhc2siLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJUYXNrRXZlbnQiLCJTVEFURV9DSEFOR0VEIiwic25hcHNob3QiLCJwcm9ncmVzcyIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsMERBQVEsQ0FBQ0QsT0FBVCxFQUFoQjtBQUVPLFNBQVNFLHFCQUFULENBQStCQyxLQUEvQixFQUFxQztBQUN4QyxNQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQUQsT0FBSyxDQUFDRSxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFHO0FBQ2pCLFFBQU1DLFVBQVUsR0FBR1AsT0FBTyxDQUFDUSxHQUFSLGlCQUFxQkYsSUFBSSxDQUFDRyxJQUExQixHQUFrQ0MsR0FBbEMsQ0FBc0NKLElBQXRDLENBQW5CO0FBQ0FDLGNBQVUsQ0FBQ0ksRUFBWCxDQUNJViwwREFBUSxDQUFDRCxPQUFULENBQWlCWSxTQUFqQixDQUEyQkMsYUFEL0IsRUFFSSxVQUFDQyxRQUFELEVBQWE7QUFDVCxVQUFJQyxRQUFRLEdBQUlELFFBQVEsQ0FBQ0UsZ0JBQVQsR0FBNEJGLFFBQVEsQ0FBQ0csVUFBdEMsR0FBb0QsR0FBbkU7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksZUFBZUosUUFBZixHQUEwQixRQUF0QztBQUNILEtBTEwsRUFNSSxVQUFDSyxLQUFELEVBQVU7QUFDTkYsYUFBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7QUFDSCxLQVJMLGdNQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUYscUJBQU8sQ0FBQ0MsR0FBUixnQkFBb0JiLElBQUksQ0FBQ0csSUFBekI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FUSjtBQWFILEdBZkQ7QUFnQkEsU0FBT0wsUUFBUDtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy41NWY1NzBhYmQ3ZjZkNzkyNmY3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGVzVG9GaXJlYmFzZShmaWxlcyl7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+e1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgZmlsZXMvJHtmaWxlLm5hbWV9YCkucHV0KGZpbGUpO1xyXG4gICAgICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgICAgICAgIChzbmFwc2hvdCkgPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VwbG9hZCBpcyAnICsgcHJvZ3Jlc3MgKyAnJSBkb25lJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jICgpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZpbGUgJHtmaWxlLm5hbWV9IHVwbG9hZGVkYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==