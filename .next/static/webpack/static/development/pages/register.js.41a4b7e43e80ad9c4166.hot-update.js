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
        message: "All Files Uploaded"
      };
      responseUpload.push(uploaded);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maWxldXBsb2FkLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJmaXJlYmFzZSIsInVwbG9hZEZpbGVzVG9GaXJlYmFzZSIsImZpbGVzIiwicHJvbWlzZXMiLCJyZXNwb25zZVVwbG9hZCIsImZvckVhY2giLCJmaWxlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXBsb2FkVGFzayIsInJlZiIsIm5hbWUiLCJwdXQiLCJvbiIsIlRhc2tFdmVudCIsIlNUQVRFX0NIQU5HRUQiLCJzbmFwc2hvdCIsInByb2dyZXNzIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJlcnJvciIsInB1c2giLCJhbGwiLCJtYXAiLCJlIiwidGhlbiIsInJlc3BvbnNlcyIsImZvdW5kRXJyb3IiLCJldmVyeSIsInJlc3BvbnNlIiwiY29kZSIsIm1lc3NhZ2UiLCJ1cGxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLDBEQUFRLENBQUNELE9BQVQsRUFBaEI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCTyxTQUFTRSxxQkFBVCxDQUErQkMsS0FBL0IsRUFBcUM7QUFDeEMsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBQ0FGLE9BQUssQ0FBQ0csT0FBTixDQUFjLFVBQUFDLElBQUksRUFBRTtBQUNoQixRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUMxQyxVQUFNQyxVQUFVLEdBQUdaLE9BQU8sQ0FBQ2EsR0FBUixpQkFBcUJOLElBQUksQ0FBQ08sSUFBMUIsR0FBa0NDLEdBQWxDLENBQXNDUixJQUF0QyxDQUFuQjtBQUNBSyxnQkFBVSxDQUFDSSxFQUFYLENBQ0lmLDBEQUFRLENBQUNELE9BQVQsQ0FBaUJpQixTQUFqQixDQUEyQkMsYUFEL0IsRUFFSSxVQUFDQyxRQUFELEVBQWE7QUFDVCxZQUFJQyxRQUFRLEdBQUlELFFBQVEsQ0FBQ0UsZ0JBQVQsR0FBNEJGLFFBQVEsQ0FBQ0csVUFBdEMsR0FBb0QsR0FBbkUsQ0FEUyxDQUVUO0FBQ0gsT0FMTCxFQU1JLFVBQUNDLEtBQUQsRUFBVTtBQUNSWixjQUFNLENBQUNZLEtBQUQsQ0FBTjtBQUNELE9BUkwsZ01BU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHYix1QkFBTyxDQUFDLGVBQUQsQ0FBUDs7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVRKO0FBYUgsS0FmZSxDQUFoQjtBQWdCQU4sWUFBUSxDQUFDb0IsSUFBVCxDQUFjaEIsT0FBZDtBQUNILEdBbEJEO0FBb0JBQyxTQUFPLENBQUNnQixHQUFSLENBQVlyQixRQUFRLENBQUNzQixHQUFULENBQWEsVUFBQWxCLE9BQU87QUFBQSxXQUFJQSxPQUFPLFNBQVAsQ0FBYyxVQUFBbUIsQ0FBQztBQUFBLGFBQUlBLENBQUo7QUFBQSxLQUFmLENBQUo7QUFBQSxHQUFwQixDQUFaLEVBQ0tDLElBREwsQ0FDVSxVQUFBQyxTQUFTLEVBQUc7QUFDZCxRQUFNQyxVQUFVLEdBQUdELFNBQVMsQ0FBQ0UsS0FBVixDQUFnQixVQUFBQyxRQUFRO0FBQUEsYUFBR0EsUUFBUSxJQUFFLGVBQWI7QUFBQSxLQUF4QixDQUFuQjs7QUFDQSxRQUFHRixVQUFILEVBQWM7QUFDVkQsZUFBUyxDQUFDdkIsT0FBVixDQUFrQixVQUFBMEIsUUFBUSxFQUFHO0FBQ3hCLFlBQU1ULEtBQUssR0FBRTtBQUNWVSxjQUFJLEVBQUdELFFBQVEsQ0FBQ0MsSUFETjtBQUVWQyxpQkFBTyxFQUFHRixRQUFRLENBQUNFO0FBRlQsU0FBYjtBQUlEN0Isc0JBQWMsQ0FBQ21CLElBQWYsQ0FBb0JELEtBQXBCO0FBQ0gsT0FORDtBQU9ILEtBUkQsTUFRSztBQUNELFVBQU1ZLFFBQVEsR0FBRTtBQUNaRCxlQUFPLEVBQUc7QUFERSxPQUFoQjtBQUdBN0Isb0JBQWMsQ0FBQ21CLElBQWYsQ0FBb0JXLFFBQXBCO0FBQ0g7QUFDSixHQWpCTDtBQW9CQSxTQUFPOUIsY0FBUDtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy40MWE0YjdlNDNlODBhZDljNDE2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9maXJlYmFzZVwiO1xyXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG5cclxuLypleHBvcnQgZnVuY3Rpb24gdXBsb2FkRmlsZXNUb0ZpcmViYXNlKGZpbGVzKXtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT57XHJcbiAgICAgICAgY29uc3QgdXBsb2FkVGFzayA9IHN0b3JhZ2UucmVmKGBmaWxlcy8ke2ZpbGUubmFtZX1gKS5wdXQoZmlsZSk7XHJcbiAgICAgICAgdXBsb2FkVGFzay5vbihcclxuICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgICAgICAgKHNuYXBzaG90KSA9PntcclxuICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVcGxvYWQgaXMgJyArIHByb2dyZXNzICsgJyUgZG9uZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaWxlICR7ZmlsZS5uYW1lfSB1cGxvYWRlZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZXM7XHJcbn0qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGVzVG9GaXJlYmFzZShmaWxlcyl7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgY29uc3QgcmVzcG9uc2VVcGxvYWQgPSBbXTtcclxuICAgIGZpbGVzLmZvckVhY2goZmlsZT0+e1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgZmlsZXMvJHtmaWxlLm5hbWV9YCkucHV0KGZpbGUpO1xyXG4gICAgICAgICAgICB1cGxvYWRUYXNrLm9uKFxyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgICAgICAgICAgIChzbmFwc2hvdCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdVcGxvYWQgaXMgJyArIHByb2dyZXNzICsgJyUgZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXCJGaWxlIFVwbG9hZGVkXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSlcclxuICAgIH0pXHJcblxyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMubWFwKHByb21pc2UgPT4gcHJvbWlzZS5jYXRjaChlID0+IGUpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZXMgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kRXJyb3IgPSByZXNwb25zZXMuZXZlcnkocmVzcG9uc2U9PiByZXNwb25zZSE9XCJGaWxlIFVwbG9hZGVkXCIpXHJcbiAgICAgICAgICAgIGlmKGZvdW5kRXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzLmZvckVhY2gocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgOiByZXNwb25zZS5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlIDogcmVzcG9uc2UubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVVwbG9hZC5wdXNoKGVycm9yKSBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkZWQgPXtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlIDogXCJBbGwgRmlsZXMgVXBsb2FkZWRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VVcGxvYWQucHVzaCh1cGxvYWRlZCkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiByZXNwb25zZVVwbG9hZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=