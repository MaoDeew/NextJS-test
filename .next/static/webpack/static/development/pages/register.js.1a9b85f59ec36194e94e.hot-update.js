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
  var responseUpload = [];
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
        var error = {
          code: response.code,
          message: response.message
        };
        responseUpload.push(error);
      });
    } else {
      var uploaded = {
        code: "OK",
        message: response
      };
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJyZXNwb25zZVVwbG9hZCIsImZvckVhY2giLCJmaWxlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXBsb2FkVGFzayIsInJlZiIsIm5hbWUiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJzbmFwc2hvdCIsInByb2dyZXNzIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJlcnJvciIsInB1c2giLCJhbGwiLCJtYXAiLCJlIiwidGhlbiIsInJlc3BvbnNlcyIsImZvdW5kRXJyb3IiLCJldmVyeSIsInJlc3BvbnNlIiwiY29kZSIsIm1lc3NhZ2UiLCJ1cGxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDBEQUFRLENBQUNELE9BQVQsRUFBaEI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCTyxTQUFTRSxxQkFBVCxDQUErQkMsS0FBL0IsRUFBcUM7QUFDeEMsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBQ0FGLE9BQUssQ0FBQ0csT0FBTixDQUFjLFVBQUFDLElBQUksRUFBRTtBQUNoQixRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUMxQyxVQUFNQyxVQUFVLEdBQUdaLE9BQU8sQ0FBQ2EsR0FBUixpQkFBcUJOLElBQUksQ0FBQ08sSUFBMUIsR0FBa0NDLEdBQWxDLENBQXNDUixJQUF0QyxDQUFuQjtBQUNBSyxnQkFBVSxDQUFDSSxFQUFYLENBQ0lmLDBEQUFRLENBQUNELE9BQVQsQ0FBaUJpQixTQUFqQixDQUEyQkMsYUFEL0IsRUFFSSxVQUFDQyxRQUFELEVBQWE7QUFDVCxZQUFJQyxRQUFRLEdBQUlELFFBQVEsQ0FBQ0UsZ0JBQVQsR0FBNEJGLFFBQVEsQ0FBQ0csVUFBdEMsR0FBb0QsR0FBbkUsQ0FEUyxDQUVUO0FBQ0gsT0FMTCxFQU1JLFVBQUNDLEtBQUQsRUFBVTtBQUNSWixjQUFNLENBQUNZLEtBQUQsQ0FBTjtBQUNELE9BUkwsZ01BU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHYix1QkFBTyxDQUFDLGVBQUQsQ0FBUDs7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVRKO0FBYUgsS0FmZSxDQUFoQjtBQWdCQU4sWUFBUSxDQUFDb0IsSUFBVCxDQUFjaEIsT0FBZDtBQUNILEdBbEJEO0FBb0JBQyxTQUFPLENBQUNnQixHQUFSLENBQVlyQixRQUFRLENBQUNzQixHQUFULENBQWEsVUFBQWxCLE9BQU87QUFBQSxXQUFJQSxPQUFPLFNBQVAsQ0FBYyxVQUFBbUIsQ0FBQztBQUFBLGFBQUlBLENBQUo7QUFBQSxLQUFmLENBQUo7QUFBQSxHQUFwQixDQUFaLEVBQ0tDLElBREwsQ0FDVSxVQUFBQyxTQUFTLEVBQUc7QUFDZCxRQUFNQyxVQUFVLEdBQUdELFNBQVMsQ0FBQ0UsS0FBVixDQUFnQixVQUFBQyxRQUFRO0FBQUEsYUFBR0EsUUFBUSxJQUFFLGVBQWI7QUFBQSxLQUF4QixDQUFuQjs7QUFDQSxRQUFHRixVQUFILEVBQWM7QUFDVkQsZUFBUyxDQUFDdkIsT0FBVixDQUFrQixVQUFBMEIsUUFBUSxFQUFHO0FBQ3hCLFlBQU1ULEtBQUssR0FBRTtBQUNWVSxjQUFJLEVBQUdELFFBQVEsQ0FBQ0MsSUFETjtBQUVWQyxpQkFBTyxFQUFHRixRQUFRLENBQUNFO0FBRlQsU0FBYjtBQUlEN0Isc0JBQWMsQ0FBQ21CLElBQWYsQ0FBb0JELEtBQXBCO0FBQ0gsT0FORDtBQU9ILEtBUkQsTUFRSztBQUNELFVBQU1ZLFFBQVEsR0FBRTtBQUNaRixZQUFJLEVBQUcsSUFESztBQUVaQyxlQUFPLEVBQUdGO0FBRkUsT0FBaEI7QUFJSDtBQUNKLEdBakJMO0FBb0JBLFNBQU8zQixjQUFQO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlZ2lzdGVyLmpzLjFhOWI4NWY1OWVjMzYxOTRlOTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlXCI7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcblxyXG4vKmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpe1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PntcclxuICAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gc3RvcmFnZS5yZWYoYGZpbGVzLyR7ZmlsZS5uYW1lfWApLnB1dChmaWxlKTtcclxuICAgICAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELFxyXG4gICAgICAgICAgICAoc25hcHNob3QpID0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1VwbG9hZCBpcyAnICsgcHJvZ3Jlc3MgKyAnJSBkb25lJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jICgpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZpbGUgJHtmaWxlLm5hbWV9IHVwbG9hZGVkYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBwcm9taXNlcztcclxufSovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKXtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICBjb25zdCByZXNwb25zZVVwbG9hZCA9IFtdO1xyXG4gICAgZmlsZXMuZm9yRWFjaChmaWxlPT57XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGBmaWxlcy8ke2ZpbGUubmFtZX1gKS5wdXQoZmlsZSk7XHJcbiAgICAgICAgICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5zdG9yYWdlLlRhc2tFdmVudC5TVEFURV9DSEFOR0VELFxyXG4gICAgICAgICAgICAgICAgKHNuYXBzaG90KSA9PntcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1VwbG9hZCBpcyAnICsgcHJvZ3Jlc3MgKyAnJSBkb25lJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFzeW5jICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcIkZpbGUgVXBsb2FkZWRcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKVxyXG4gICAgfSlcclxuXHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcy5tYXAocHJvbWlzZSA9PiBwcm9taXNlLmNhdGNoKGUgPT4gZSkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlcyA9PntcclxuICAgICAgICAgICAgY29uc3QgZm91bmRFcnJvciA9IHJlc3BvbnNlcy5ldmVyeShyZXNwb25zZT0+IHJlc3BvbnNlIT1cIkZpbGUgVXBsb2FkZWRcIilcclxuICAgICAgICAgICAgaWYoZm91bmRFcnJvcil7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZXMuZm9yRWFjaChyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZSA6IHJlc3BvbnNlLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgOiByZXNwb25zZS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVXBsb2FkLnB1c2goZXJyb3IpIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRlZCA9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgOiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6IHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiByZXNwb25zZVVwbG9hZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=