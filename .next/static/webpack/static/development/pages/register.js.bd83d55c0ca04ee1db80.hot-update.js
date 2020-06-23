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
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.js");




var storage = _firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage();
/*export function uploadFilesToFirebase(files){
    const promises = [];
    files.forEach(file =>{
        const uploadTask = storage.ref(`files/${file.name}`).put(file);
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) =>{
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //console.log('Upload is ' + progress + '% done');
            },
            (error) =>{
              
            },
            async () =>{
                console.log(`file ${file.name} uploaded`);
            }
        )
    })

    return promises;
}*/

function uploadFilesToFirebase(files) {
  var promises = [];
  var responseUpload = [];
  files.forEach(function (file) {
    var promise = new Promise(function (resolve, reject) {
      var uploadTask = storage.ref("files/".concat(file.name)).put(file);
      uploadTask.on(_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__["default"].storage.TaskEvent.STATE_CHANGED, function (snapshot) {
        var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100; //console.log('Upload is ' + progress + '% done');
      }, function (error) {
        reject(error);
      }, /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                resolve("File Uploaded");

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    });
    promises.push(promise);
  });
  Promise.all(promises.map(function (promise) {
    return promise["catch"](function (e) {
      return e;
    });
  })).then(function (responses) {
    var foundError = responses.every(function (response) {
      return response != "File Uploaded";
    });

    if (foundError) {
      responses.forEach(function (response) {
        responseUpload = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("responseUpload"), {
          code: response.code,
          message: response.message
        });
      });
    } else {
      responseUpload = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("responseUpload"), {
        code: "OK",
        message: response
      });
    }
  });
  return responseUpload;
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9yZWFkT25seUVycm9yLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJyZXNwb25zZVVwbG9hZCIsImZvckVhY2giLCJmaWxlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXBsb2FkVGFzayIsInJlZiIsIm5hbWUiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJzbmFwc2hvdCIsInByb2dyZXNzIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJlcnJvciIsInB1c2giLCJhbGwiLCJtYXAiLCJlIiwidGhlbiIsInJlc3BvbnNlcyIsImZvdW5kRXJyb3IiLCJldmVyeSIsInJlc3BvbnNlIiwiY29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDBEQUFRLENBQUNELE9BQVQsRUFBaEI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCTyxTQUFTRSxxQkFBVCxDQUErQkMsS0FBL0IsRUFBcUM7QUFDeEMsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBQ0FGLE9BQUssQ0FBQ0csT0FBTixDQUFjLFVBQUFDLElBQUksRUFBRTtBQUNoQixRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUMxQyxVQUFNQyxVQUFVLEdBQUdaLE9BQU8sQ0FBQ2EsR0FBUixpQkFBcUJOLElBQUksQ0FBQ08sSUFBMUIsR0FBa0NDLEdBQWxDLENBQXNDUixJQUF0QyxDQUFuQjtBQUNBSyxnQkFBVSxDQUFDSSxFQUFYLENBQ0lmLDBEQUFRLENBQUNELE9BQVQsQ0FBaUJpQixTQUFqQixDQUEyQkMsYUFEL0IsRUFFSSxVQUFDQyxRQUFELEVBQWE7QUFDVCxZQUFJQyxRQUFRLEdBQUlELFFBQVEsQ0FBQ0UsZ0JBQVQsR0FBNEJGLFFBQVEsQ0FBQ0csVUFBdEMsR0FBb0QsR0FBbkUsQ0FEUyxDQUVUO0FBQ0gsT0FMTCxFQU1JLFVBQUNDLEtBQUQsRUFBVTtBQUNSWixjQUFNLENBQUNZLEtBQUQsQ0FBTjtBQUNELE9BUkwsZ01BU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHYix1QkFBTyxDQUFDLGVBQUQsQ0FBUDs7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVRKO0FBYUgsS0FmZSxDQUFoQjtBQWdCQU4sWUFBUSxDQUFDb0IsSUFBVCxDQUFjaEIsT0FBZDtBQUNILEdBbEJEO0FBb0JBQyxTQUFPLENBQUNnQixHQUFSLENBQVlyQixRQUFRLENBQUNzQixHQUFULENBQWEsVUFBQWxCLE9BQU87QUFBQSxXQUFJQSxPQUFPLFNBQVAsQ0FBYyxVQUFBbUIsQ0FBQztBQUFBLGFBQUlBLENBQUo7QUFBQSxLQUFmLENBQUo7QUFBQSxHQUFwQixDQUFaLEVBQ0tDLElBREwsQ0FDVSxVQUFBQyxTQUFTLEVBQUc7QUFDZCxRQUFNQyxVQUFVLEdBQUdELFNBQVMsQ0FBQ0UsS0FBVixDQUFnQixVQUFBQyxRQUFRO0FBQUEsYUFBR0EsUUFBUSxJQUFFLGVBQWI7QUFBQSxLQUF4QixDQUFuQjs7QUFDQSxRQUFHRixVQUFILEVBQWM7QUFDVkQsZUFBUyxDQUFDdkIsT0FBVixDQUFrQixVQUFBMEIsUUFBUSxFQUFHO0FBQ3pCM0Isc0JBQWMsZ0hBQUU7QUFDWjRCLGNBQUksRUFBR0QsUUFBUSxDQUFDQyxJQURKO0FBRVpDLGlCQUFPLEVBQUdGLFFBQVEsQ0FBQ0U7QUFGUCxTQUFGLENBQWQ7QUFJSCxPQUxEO0FBTUgsS0FQRCxNQU9LO0FBQ0Q3QixvQkFBYyxnSEFBRTtBQUNaNEIsWUFBSSxFQUFHLElBREs7QUFFWkMsZUFBTyxFQUFHRjtBQUZFLE9BQUYsQ0FBZDtBQUlIO0FBQ0osR0FoQkw7QUFtQkEsU0FBTzNCLGNBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVEO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuYmQ4M2Q1NWMwY2EwNGVlMWRiODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbi8qZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGVzVG9GaXJlYmFzZShmaWxlcyl7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+e1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgZmlsZXMvJHtmaWxlLm5hbWV9YCkucHV0KGZpbGUpO1xyXG4gICAgICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgICAgICAgIChzbmFwc2hvdCkgPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnVXBsb2FkIGlzICcgKyBwcm9ncmVzcyArICclIGRvbmUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlsZSAke2ZpbGUubmFtZX0gdXBsb2FkZWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHByb21pc2VzO1xyXG59Ki9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpe1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgIGNvbnN0IHJlc3BvbnNlVXBsb2FkID0gW107XHJcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGU9PntcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gc3RvcmFnZS5yZWYoYGZpbGVzLyR7ZmlsZS5uYW1lfWApLnB1dChmaWxlKTtcclxuICAgICAgICAgICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgICAgICAgICAgICAoc25hcHNob3QpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnVXBsb2FkIGlzICcgKyBwcm9ncmVzcyArICclIGRvbmUnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXN5bmMgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICByZXNvbHZlKFwiRmlsZSBVcGxvYWRlZFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpXHJcbiAgICB9KVxyXG5cclxuICAgIFByb21pc2UuYWxsKHByb21pc2VzLm1hcChwcm9taXNlID0+IHByb21pc2UuY2F0Y2goZSA9PiBlKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VzID0+e1xyXG4gICAgICAgICAgICBjb25zdCBmb3VuZEVycm9yID0gcmVzcG9uc2VzLmV2ZXJ5KHJlc3BvbnNlPT4gcmVzcG9uc2UhPVwiRmlsZSBVcGxvYWRlZFwiKVxyXG4gICAgICAgICAgICBpZihmb3VuZEVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlcy5mb3JFYWNoKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVXBsb2FkID17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgOiByZXNwb25zZS5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlIDogcmVzcG9uc2UubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VVcGxvYWQgPXtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlIDogXCJPS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVzcG9uc2VVcGxvYWQ7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=