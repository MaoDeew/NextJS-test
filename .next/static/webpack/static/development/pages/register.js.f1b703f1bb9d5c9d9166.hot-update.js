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
  var uploadStatus = {
    error: "",
    correctly: ""
  };
  files.forEach(function (file) {
    var uploadTask = storage.ref("files/".concat(file.name)).put(file);
    uploadTask.on(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage.TaskEvent.STATE_CHANGED, function (snapshot) {
      var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100; //console.log('Upload is ' + progress + '% done');
    }, function (error) {
      uploadStatus.error = error;
    }, /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //console.log(`file ${file.name} uploaded`);
              uploadStatus.correctly = "OK";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJ1cGxvYWRTdGF0dXMiLCJlcnJvciIsImNvcnJlY3RseSIsImZvckVhY2giLCJmaWxlIiwidXBsb2FkVGFzayIsInJlZiIsIm5hbWUiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJzbmFwc2hvdCIsInByb2dyZXNzIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImFsZXJ0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHQywwREFBUSxDQUFDRCxPQUFULEVBQWhCO0FBRU8sU0FBU0UscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXFDO0FBQ3hDLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBSyxFQUFHLEVBRFM7QUFFakJDLGFBQVMsRUFBRztBQUZLLEdBQXJCO0FBSUFKLE9BQUssQ0FBQ0ssT0FBTixDQUFjLFVBQUFDLElBQUksRUFBRztBQUNqQixRQUFNQyxVQUFVLEdBQUdWLE9BQU8sQ0FBQ1csR0FBUixpQkFBcUJGLElBQUksQ0FBQ0csSUFBMUIsR0FBa0NDLEdBQWxDLENBQXNDSixJQUF0QyxDQUFuQjtBQUNBQyxjQUFVLENBQUNJLEVBQVgsQ0FDSWIsMERBQVEsQ0FBQ0QsT0FBVCxDQUFpQmUsU0FBakIsQ0FBMkJDLGFBRC9CLEVBRUksVUFBQ0MsUUFBRCxFQUFhO0FBQ1QsVUFBSUMsUUFBUSxHQUFJRCxRQUFRLENBQUNFLGdCQUFULEdBQTRCRixRQUFRLENBQUNHLFVBQXRDLEdBQW9ELEdBQW5FLENBRFMsQ0FFVDtBQUNILEtBTEwsRUFNSSxVQUFDZCxLQUFELEVBQVU7QUFDTkQsa0JBQVksQ0FBQ0MsS0FBYixHQUFxQkEsS0FBckI7QUFDSCxLQVJMLGdNQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUNBRCwwQkFBWSxDQUFDRSxTQUFiLEdBQXlCLElBQXpCOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVEo7QUFjSCxHQWhCRDtBQWlCQWMsU0FBTyxDQUFDQyxHQUFSLENBQVlsQixRQUFaLEVBQ0NtQixJQURELENBQ007QUFBQSxXQUFNQyxLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUFBLEdBRE4sV0FFTyxVQUFBQyxHQUFHO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEIsQ0FBSjtBQUFBLEdBRlY7QUFJQSxTQUFPeEIsUUFBUDtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy5mMWI3MDNmMWJiOWQ1YzlkOTE2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGVzVG9GaXJlYmFzZShmaWxlcyl7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgY29uc3QgdXBsb2FkU3RhdHVzID0ge1xyXG4gICAgICAgIGVycm9yIDogXCJcIixcclxuICAgICAgICBjb3JyZWN0bHkgOiBcIlwiXHJcbiAgICB9XHJcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT57XHJcbiAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGBmaWxlcy8ke2ZpbGUubmFtZX1gKS5wdXQoZmlsZSk7XHJcbiAgICAgICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgICAgICAgKHNuYXBzaG90KSA9PntcclxuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVcGxvYWQgaXMgJyArIHByb2dyZXNzICsgJyUgZG9uZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgdXBsb2FkU3RhdHVzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jICgpID0+e1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgZmlsZSAke2ZpbGUubmFtZX0gdXBsb2FkZWRgKTtcclxuICAgICAgICAgICAgICAgIHVwbG9hZFN0YXR1cy5jb3JyZWN0bHkgPSBcIk9LXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcylcclxuICAgIC50aGVuKCgpID0+IGFsZXJ0KCdBbGwgZmlsZXMgdXBsb2FkZWQnKSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLmNvZGUpKTtcclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZXM7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9