webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./firebase/fileupload.js":
/*!********************************!*\
  !*** ./firebase/fileupload.js ***!
  \********************************/
/*! exports provided: progress, uploadFilesToFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFilesToFirebase", function() { return uploadFilesToFirebase; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.js");



var storage = _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage();
var progress;
function uploadFilesToFirebase(files) {
  var promises = [];
  files.forEach(function (file) {
    var uploadTask = storage.ref("files/".concat(file.name)).put(file);
    uploadTask.on(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage.TaskEvent.STATE_CHANGED, function (snapshot) {
      progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
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
  Promise.all(promises).then(function () {
    return alert('All files uploaded');
  })["catch"](function (err) {
    return console.log(err.code);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInByb2dyZXNzIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIiwiZmlsZXMiLCJwcm9taXNlcyIsImZvckVhY2giLCJmaWxlIiwidXBsb2FkVGFzayIsInJlZiIsIm5hbWUiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJzbmFwc2hvdCIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJhbGVydCIsImVyciIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsMERBQVEsQ0FBQ0QsT0FBVCxFQUFoQjtBQUNPLElBQUlFLFFBQUo7QUFDQSxTQUFTQyxxQkFBVCxDQUErQkMsS0FBL0IsRUFBcUM7QUFDeEMsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0FELE9BQUssQ0FBQ0UsT0FBTixDQUFjLFVBQUFDLElBQUksRUFBRztBQUNqQixRQUFNQyxVQUFVLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixpQkFBcUJGLElBQUksQ0FBQ0csSUFBMUIsR0FBa0NDLEdBQWxDLENBQXNDSixJQUF0QyxDQUFuQjtBQUNBQyxjQUFVLENBQUNJLEVBQVgsQ0FDSVgsMERBQVEsQ0FBQ0QsT0FBVCxDQUFpQmEsU0FBakIsQ0FBMkJDLGFBRC9CLEVBRUksVUFBQ0MsUUFBRCxFQUFhO0FBQ1RiLGNBQVEsR0FBSWEsUUFBUSxDQUFDQyxnQkFBVCxHQUE0QkQsUUFBUSxDQUFDRSxVQUF0QyxHQUFvRCxHQUEvRDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlakIsUUFBZixHQUEwQixRQUF0QztBQUNILEtBTEwsRUFNSSxVQUFDa0IsS0FBRCxFQUFVO0FBQ05GLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBQ0gsS0FSTCxnTUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lGLHFCQUFPLENBQUNDLEdBQVIsZ0JBQW9CWixJQUFJLENBQUNHLElBQXpCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVEo7QUFhSCxHQWZEO0FBZ0JBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWWpCLFFBQVosRUFDQ2tCLElBREQsQ0FDTTtBQUFBLFdBQU1DLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQUEsR0FETixXQUVPLFVBQUFDLEdBQUc7QUFBQSxXQUFJUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBRyxDQUFDQyxJQUFoQixDQUFKO0FBQUEsR0FGVjtBQUdIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy43NzExYzgyY2UyMTA2MjIwMjNiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5leHBvcnQgdmFyIHByb2dyZXNzO1xyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKXtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT57XHJcbiAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGBmaWxlcy8ke2ZpbGUubmFtZX1gKS5wdXQoZmlsZSk7XHJcbiAgICAgICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgICAgICAgKHNuYXBzaG90KSA9PntcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVcGxvYWQgaXMgJyArIHByb2dyZXNzICsgJyUgZG9uZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaWxlICR7ZmlsZS5uYW1lfSB1cGxvYWRlZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG4gICAgLnRoZW4oKCkgPT4gYWxlcnQoJ0FsbCBmaWxlcyB1cGxvYWRlZCcpKVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIuY29kZSkpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==