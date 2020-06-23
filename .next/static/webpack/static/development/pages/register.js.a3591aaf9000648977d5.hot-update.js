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
            console.log(result.map(function (x) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJmb3JFYWNoIiwiZmlsZSIsInVwbG9hZFRhc2siLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJUYXNrRXZlbnQiLCJTVEFURV9DSEFOR0VEIiwic25hcHNob3QiLCJwcm9ncmVzcyIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJyZXN1bHQiLCJtYXAiLCJ4IiwicyIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDBEQUFRLENBQUNELE9BQVQsRUFBaEI7QUFFTyxTQUFlRSxxQkFBdEI7QUFBQTtBQUFBOzs7NE1BQU8sa0JBQXFDQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0Msb0JBREgsR0FDYyxFQURkO0FBRUhELGlCQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUc7QUFDakIsa0JBQU1DLFVBQVUsR0FBR1AsT0FBTyxDQUFDUSxHQUFSLGlCQUFxQkYsSUFBSSxDQUFDRyxJQUExQixHQUFrQ0MsR0FBbEMsQ0FBc0NKLElBQXRDLENBQW5CO0FBQ0FDLHdCQUFVLENBQUNJLEVBQVgsQ0FDSVYsMERBQVEsQ0FBQ0QsT0FBVCxDQUFpQlksU0FBakIsQ0FBMkJDLGFBRC9CLEVBRUksVUFBQ0MsUUFBRCxFQUFhO0FBQ1Qsb0JBQUlDLFFBQVEsR0FBSUQsUUFBUSxDQUFDRSxnQkFBVCxHQUE0QkYsUUFBUSxDQUFDRyxVQUF0QyxHQUFvRCxHQUFuRSxDQURTLENBRVQ7QUFDSCxlQUxMLEVBTUksVUFBQ0MsS0FBRCxFQUFVO0FBQ1JDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELGVBUkwsZ01BU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKO0FBYUgsYUFmRDtBQUZHO0FBQUEsbUJBbUJrQkcsT0FBTyxDQUFDQyxVQUFSLENBQW1CbEIsUUFBbkIsQ0FuQmxCOztBQUFBO0FBbUJHbUIsa0JBbkJIO0FBb0JISixtQkFBTyxDQUFDQyxHQUFSLENBQVlHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSxxQkFBRUMsQ0FBQyxDQUFDQyxNQUFKO0FBQUEsYUFBWixDQUFaO0FBQ0E7Ozs7QUFyQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuYTM1OTFhYWY5MDAwNjQ4OTc3ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpe1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PntcclxuICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gc3RvcmFnZS5yZWYoYGZpbGVzLyR7ZmlsZS5uYW1lfWApLnB1dChmaWxlKTtcclxuICAgICAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELFxyXG4gICAgICAgICAgICAoc25hcHNob3QpID0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1VwbG9hZCBpcyAnICsgcHJvZ3Jlc3MgKyAnJSBkb25lJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBmaWxlICR7ZmlsZS5uYW1lfSB1cGxvYWRlZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0Lm1hcCh4PT5zLnN0YXR1cykpO1xyXG4gICAgLypQcm9taXNlLmFsbChwcm9taXNlcylcclxuICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiQWxsIGZpbGVzIHVwbG9hZGVkXCIpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLmNvZGUpKSovXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9