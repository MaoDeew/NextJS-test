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
  var errorObtained;
  files.forEach(function (file) {
    var uploadTask = storage.ref("files/".concat(file.name)).put(file);
    uploadTask.on(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage.TaskEvent.STATE_CHANGED, function (snapshot) {
      var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100; //console.log('Upload is ' + progress + '% done');
    }, function (error) {
      errorObtained = error; //console.log(error)  
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
  Promise.all(promises).then(function () {
    return (
      /*console.log("All files uploaded")*/
      console.log(errorObtained)
    );
  })["catch"](function (error) {
    return (
      /*console.log(error.code)*/
      console.log("ERROR")
    );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJlcnJvck9idGFpbmVkIiwiZm9yRWFjaCIsImZpbGUiLCJ1cGxvYWRUYXNrIiwicmVmIiwibmFtZSIsInB1dCIsIm9uIiwiVGFza0V2ZW50IiwiU1RBVEVfQ0hBTkdFRCIsInNuYXBzaG90IiwicHJvZ3Jlc3MiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsImVycm9yIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsMERBQVEsQ0FBQ0QsT0FBVCxFQUFoQjtBQUVPLFNBQVNFLHFCQUFULENBQStCQyxLQUEvQixFQUFxQztBQUN4QyxNQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQSxNQUFJQyxhQUFKO0FBQ0FGLE9BQUssQ0FBQ0csT0FBTixDQUFjLFVBQUFDLElBQUksRUFBRztBQUNqQixRQUFNQyxVQUFVLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixpQkFBcUJGLElBQUksQ0FBQ0csSUFBMUIsR0FBa0NDLEdBQWxDLENBQXNDSixJQUF0QyxDQUFuQjtBQUNBQyxjQUFVLENBQUNJLEVBQVgsQ0FDSVgsMERBQVEsQ0FBQ0QsT0FBVCxDQUFpQmEsU0FBakIsQ0FBMkJDLGFBRC9CLEVBRUksVUFBQ0MsUUFBRCxFQUFhO0FBQ1QsVUFBSUMsUUFBUSxHQUFJRCxRQUFRLENBQUNFLGdCQUFULEdBQTRCRixRQUFRLENBQUNHLFVBQXRDLEdBQW9ELEdBQW5FLENBRFMsQ0FFVDtBQUNILEtBTEwsRUFNSSxVQUFDQyxLQUFELEVBQVU7QUFDTmQsbUJBQWEsR0FBR2MsS0FBaEIsQ0FETSxDQUVSO0FBQ0QsS0FUTCxnTUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVko7QUFjSCxHQWhCRDtBQWtCQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlqQixRQUFaLEVBQ0NrQixJQURELENBQ007QUFBQTtBQUFNO0FBQXNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWW5CLGFBQVo7QUFBNUM7QUFBQSxHQUROLFdBRU8sVUFBQWMsS0FBSztBQUFBO0FBQUk7QUFBNEJJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFBaEM7QUFBQSxHQUZaO0FBR0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlZ2lzdGVyLmpzLjJkMTc0OGNkMDhkNzg5NjJkZDViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlXCI7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKXtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICB2YXIgZXJyb3JPYnRhaW5lZDtcclxuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PntcclxuICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gc3RvcmFnZS5yZWYoYGZpbGVzLyR7ZmlsZS5uYW1lfWApLnB1dChmaWxlKTtcclxuICAgICAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELFxyXG4gICAgICAgICAgICAoc25hcHNob3QpID0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1VwbG9hZCBpcyAnICsgcHJvZ3Jlc3MgKyAnJSBkb25lJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICBlcnJvck9idGFpbmVkID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcikgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGZpbGUgJHtmaWxlLm5hbWV9IHVwbG9hZGVkYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG4gICAgLnRoZW4oKCkgPT4gLypjb25zb2xlLmxvZyhcIkFsbCBmaWxlcyB1cGxvYWRlZFwiKSovIGNvbnNvbGUubG9nKGVycm9yT2J0YWluZWQpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IC8qY29uc29sZS5sb2coZXJyb3IuY29kZSkqLyBjb25zb2xlLmxvZyhcIkVSUk9SXCIpKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==