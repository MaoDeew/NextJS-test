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
function uploadFilesToFirebase(_x) {
  return _uploadFilesToFirebase.apply(this, arguments);
}

function _uploadFilesToFirebase() {
  _uploadFilesToFirebase = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(files) {
    var promises, result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            promises = [];
            files.forEach(function (file) {
              var uploadTask = storage.ref("files/".concat(file.name)).put(file);
              uploadTask.on(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage.TaskEvent.STATE_CHANGED, function (snapshot) {
                var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100; //console.log('Upload is ' + progress + '% done');
              }, function (error) {
                console.log(error);
              }, /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
            });
            _context2.next = 4;
            return Promise.allSettled(promises);

          case 4:
            result = _context2.sent;
            console.log(result.map(function (s) {
              return s.status;
            }));
            /*Promise.all(promises)
            .then(() => console.log("All files uploaded"))
            .catch(error => console.log(error.code))*/

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _uploadFilesToFirebase.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJmb3JFYWNoIiwiZmlsZSIsInVwbG9hZFRhc2siLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJUYXNrRXZlbnQiLCJTVEFURV9DSEFOR0VEIiwic25hcHNob3QiLCJwcm9ncmVzcyIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJyZXN1bHQiLCJtYXAiLCJzIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsMERBQVEsQ0FBQ0QsT0FBVCxFQUFoQjtBQUVPLFNBQWVFLHFCQUF0QjtBQUFBO0FBQUE7Ozs0TUFBTyxrQkFBcUNDLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHQyxvQkFESCxHQUNjLEVBRGQ7QUFFSEQsaUJBQUssQ0FBQ0UsT0FBTixDQUFjLFVBQUFDLElBQUksRUFBRztBQUNqQixrQkFBTUMsVUFBVSxHQUFHUCxPQUFPLENBQUNRLEdBQVIsaUJBQXFCRixJQUFJLENBQUNHLElBQTFCLEdBQWtDQyxHQUFsQyxDQUFzQ0osSUFBdEMsQ0FBbkI7QUFDQUMsd0JBQVUsQ0FBQ0ksRUFBWCxDQUNJViwwREFBUSxDQUFDRCxPQUFULENBQWlCWSxTQUFqQixDQUEyQkMsYUFEL0IsRUFFSSxVQUFDQyxRQUFELEVBQWE7QUFDVCxvQkFBSUMsUUFBUSxHQUFJRCxRQUFRLENBQUNFLGdCQUFULEdBQTRCRixRQUFRLENBQUNHLFVBQXRDLEdBQW9ELEdBQW5FLENBRFMsQ0FFVDtBQUNILGVBTEwsRUFNSSxVQUFDQyxLQUFELEVBQVU7QUFDUkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsZUFSTCxnTUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFhSCxhQWZEO0FBRkc7QUFBQSxtQkFtQmtCRyxPQUFPLENBQUNDLFVBQVIsQ0FBbUJsQixRQUFuQixDQW5CbEI7O0FBQUE7QUFtQkdtQixrQkFuQkg7QUFvQkhKLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUcsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQUMsQ0FBQztBQUFBLHFCQUFFQSxDQUFDLENBQUNDLE1BQUo7QUFBQSxhQUFaLENBQVo7QUFDQTs7OztBQXJCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy41OGM5ZGQwMTE0MDkxNTBiMjY5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEZpbGVzVG9GaXJlYmFzZShmaWxlcyl7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+e1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgZmlsZXMvJHtmaWxlLm5hbWV9YCkucHV0KGZpbGUpO1xyXG4gICAgICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgICAgICAgIChzbmFwc2hvdCkgPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnVXBsb2FkIGlzICcgKyBwcm9ncmVzcyArICclIGRvbmUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcikgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGZpbGUgJHtmaWxlLm5hbWV9IHVwbG9hZGVkYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQubWFwKHM9PnMuc3RhdHVzKSk7XHJcbiAgICAvKlByb21pc2UuYWxsKHByb21pc2VzKVxyXG4gICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJBbGwgZmlsZXMgdXBsb2FkZWRcIikpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IuY29kZSkpKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0=