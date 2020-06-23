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
  var responseUpload;
  files.forEach(function (file) {
    var promise = new Promise(function (resolve, reject) {
      var uploadTask = storage.ref("files/".concat(file.name)).put(file);
      uploadTask.on(_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage.TaskEvent.STATE_CHANGED, function (snapshot) {
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
        responseUpload = {
          code: response.code,
          message: response.message
        };
      });
    } else {
      responseUpload = {
        code: response.code,
        message: response.message
      };
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJyZXNwb25zZVVwbG9hZCIsImZvckVhY2giLCJmaWxlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXBsb2FkVGFzayIsInJlZiIsIm5hbWUiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJzbmFwc2hvdCIsInByb2dyZXNzIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJlcnJvciIsInB1c2giLCJhbGwiLCJtYXAiLCJlIiwidGhlbiIsInJlc3BvbnNlcyIsImZvdW5kRXJyb3IiLCJldmVyeSIsInJlc3BvbnNlIiwiY29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHQywwREFBUSxDQUFDRCxPQUFULEVBQWhCO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQk8sU0FBU0UscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXFDO0FBQ3hDLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLE1BQUlDLGNBQUo7QUFDQUYsT0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFFO0FBQ2hCLFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQWtCO0FBQzFDLFVBQU1DLFVBQVUsR0FBR1osT0FBTyxDQUFDYSxHQUFSLGlCQUFxQk4sSUFBSSxDQUFDTyxJQUExQixHQUFrQ0MsR0FBbEMsQ0FBc0NSLElBQXRDLENBQW5CO0FBQ0FLLGdCQUFVLENBQUNJLEVBQVgsQ0FDSWYsMERBQVEsQ0FBQ0QsT0FBVCxDQUFpQmlCLFNBQWpCLENBQTJCQyxhQUQvQixFQUVJLFVBQUNDLFFBQUQsRUFBYTtBQUNULFlBQUlDLFFBQVEsR0FBSUQsUUFBUSxDQUFDRSxnQkFBVCxHQUE0QkYsUUFBUSxDQUFDRyxVQUF0QyxHQUFvRCxHQUFuRSxDQURTLENBRVQ7QUFDSCxPQUxMLEVBTUksVUFBQ0MsS0FBRCxFQUFVO0FBQ1JaLGNBQU0sQ0FBQ1ksS0FBRCxDQUFOO0FBQ0QsT0FSTCxnTUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0diLHVCQUFPLENBQUMsZUFBRCxDQUFQOztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BVEo7QUFhSCxLQWZlLENBQWhCO0FBZ0JBTixZQUFRLENBQUNvQixJQUFULENBQWNoQixPQUFkO0FBQ0gsR0FsQkQ7QUFvQkFDLFNBQU8sQ0FBQ2dCLEdBQVIsQ0FBWXJCLFFBQVEsQ0FBQ3NCLEdBQVQsQ0FBYSxVQUFBbEIsT0FBTztBQUFBLFdBQUlBLE9BQU8sU0FBUCxDQUFjLFVBQUFtQixDQUFDO0FBQUEsYUFBSUEsQ0FBSjtBQUFBLEtBQWYsQ0FBSjtBQUFBLEdBQXBCLENBQVosRUFDS0MsSUFETCxDQUNVLFVBQUFDLFNBQVMsRUFBRztBQUNkLFFBQU1DLFVBQVUsR0FBR0QsU0FBUyxDQUFDRSxLQUFWLENBQWdCLFVBQUFDLFFBQVE7QUFBQSxhQUFHQSxRQUFRLElBQUUsZUFBYjtBQUFBLEtBQXhCLENBQW5COztBQUNBLFFBQUdGLFVBQUgsRUFBYztBQUNWRCxlQUFTLENBQUN2QixPQUFWLENBQWtCLFVBQUEwQixRQUFRLEVBQUc7QUFDekIzQixzQkFBYyxHQUFFO0FBQ1o0QixjQUFJLEVBQUdELFFBQVEsQ0FBQ0MsSUFESjtBQUVaQyxpQkFBTyxFQUFHRixRQUFRLENBQUNFO0FBRlAsU0FBaEI7QUFJSCxPQUxEO0FBTUgsS0FQRCxNQU9LO0FBQ0Q3QixvQkFBYyxHQUFFO0FBQ1o0QixZQUFJLEVBQUdELFFBQVEsQ0FBQ0MsSUFESjtBQUVaQyxlQUFPLEVBQUdGLFFBQVEsQ0FBQ0U7QUFGUCxPQUFoQjtBQUlIO0FBQ0osR0FoQkw7QUFtQkEsU0FBTzlCLFFBQVA7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuMTVhZDc3MGE0M2Y0OGQ5MGVjZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbi8qZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGVzVG9GaXJlYmFzZShmaWxlcyl7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlID0+e1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgZmlsZXMvJHtmaWxlLm5hbWV9YCkucHV0KGZpbGUpO1xyXG4gICAgICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgICAgICAgIGZpcmViYXNlLnN0b3JhZ2UuVGFza0V2ZW50LlNUQVRFX0NIQU5HRUQsXHJcbiAgICAgICAgICAgIChzbmFwc2hvdCkgPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnVXBsb2FkIGlzICcgKyBwcm9ncmVzcyArICclIGRvbmUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlsZSAke2ZpbGUubmFtZX0gdXBsb2FkZWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHByb21pc2VzO1xyXG59Ki9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpe1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgIHZhciByZXNwb25zZVVwbG9hZDtcclxuICAgIGZpbGVzLmZvckVhY2goZmlsZT0+e1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgZmlsZXMvJHtmaWxlLm5hbWV9YCkucHV0KGZpbGUpO1xyXG4gICAgICAgICAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgICAgICAgICAgIChzbmFwc2hvdCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVcGxvYWQgaXMgJyArIHByb2dyZXNzICsgJyUgZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXCJGaWxlIFVwbG9hZGVkXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSlcclxuICAgIH0pXHJcblxyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMubWFwKHByb21pc2UgPT4gcHJvbWlzZS5jYXRjaChlID0+IGUpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZXMgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kRXJyb3IgPSByZXNwb25zZXMuZXZlcnkocmVzcG9uc2U9PiByZXNwb25zZSE9XCJGaWxlIFVwbG9hZGVkXCIpXHJcbiAgICAgICAgICAgIGlmKGZvdW5kRXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzLmZvckVhY2gocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VVcGxvYWQgPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSA6IHJlc3BvbnNlLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiByZXNwb25zZS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVVwbG9hZCA9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgOiByZXNwb25zZS5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiByZXNwb25zZS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiBwcm9taXNlcztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=