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
      var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100; //console.log('Upload is ' + progress + '% done');
    }, function (error) {//console.log(error)  
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
    return console.log("All files uploaded");
  })["catch"](function (error) {
    return console.log(error.code);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJmb3JFYWNoIiwiZmlsZSIsInVwbG9hZFRhc2siLCJyZWYiLCJuYW1lIiwicHV0Iiwib24iLCJUYXNrRXZlbnQiLCJTVEFURV9DSEFOR0VEIiwic25hcHNob3QiLCJwcm9ncmVzcyIsImJ5dGVzVHJhbnNmZXJyZWQiLCJ0b3RhbEJ5dGVzIiwiZXJyb3IiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsMERBQVEsQ0FBQ0QsT0FBVCxFQUFoQjtBQUVPLFNBQVNFLHFCQUFULENBQStCQyxLQUEvQixFQUFxQztBQUN4QyxNQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFDQUQsT0FBSyxDQUFDRSxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFHO0FBQ2pCLFFBQU1DLFVBQVUsR0FBR1AsT0FBTyxDQUFDUSxHQUFSLGlCQUFxQkYsSUFBSSxDQUFDRyxJQUExQixHQUFrQ0MsR0FBbEMsQ0FBc0NKLElBQXRDLENBQW5CO0FBQ0FDLGNBQVUsQ0FBQ0ksRUFBWCxDQUNJViwwREFBUSxDQUFDRCxPQUFULENBQWlCWSxTQUFqQixDQUEyQkMsYUFEL0IsRUFFSSxVQUFDQyxRQUFELEVBQWE7QUFDVCxVQUFJQyxRQUFRLEdBQUlELFFBQVEsQ0FBQ0UsZ0JBQVQsR0FBNEJGLFFBQVEsQ0FBQ0csVUFBdEMsR0FBb0QsR0FBbkUsQ0FEUyxDQUVUO0FBQ0gsS0FMTCxFQU1JLFVBQUNDLEtBQUQsRUFBVSxDQUNSO0FBQ0QsS0FSTCxnTUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVEo7QUFhSCxHQWZEO0FBaUJBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWWhCLFFBQVosRUFDQ2lCLElBREQsQ0FDTTtBQUFBLFdBQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLENBQU47QUFBQSxHQUROLFdBRU8sVUFBQUwsS0FBSztBQUFBLFdBQUlJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFLLENBQUNNLElBQWxCLENBQUo7QUFBQSxHQUZaO0FBR0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlZ2lzdGVyLmpzLjU1N2RlYmQ0ZjdmZGQ4MDRiZWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlXCI7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKXtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT57XHJcbiAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGBmaWxlcy8ke2ZpbGUubmFtZX1gKS5wdXQoZmlsZSk7XHJcbiAgICAgICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgICAgICAgKHNuYXBzaG90KSA9PntcclxuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVcGxvYWQgaXMgJyArIHByb2dyZXNzICsgJyUgZG9uZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBmaWxlICR7ZmlsZS5uYW1lfSB1cGxvYWRlZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcylcclxuICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiQWxsIGZpbGVzIHVwbG9hZGVkXCIpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLmNvZGUpKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==