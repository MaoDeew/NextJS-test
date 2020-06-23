webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/*! exports provided: storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
 // Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyAKOvDACg5ROdDKxTHQ54AzzioARbENNlU",
  authDomain: "pruebasreactclase.firebaseapp.com",
  databaseURL: "https://pruebasreactclase.firebaseio.com",
  projectId: "pruebasreactclase",
  storageBucket: "pruebasreactclase.appspot.com",
  messagingSenderId: "643911326090",
  appId: "1:643911326090:web:773199624e4d8584c01073",
  measurementId: "G-WY6S230HDV"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
var storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsInN0b3JhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVDOztBQUNBLElBQUlBLGNBQWMsR0FBRztBQUNsQkMsUUFBTSxFQUFFLHlDQURVO0FBRWxCQyxZQUFVLEVBQUUsbUNBRk07QUFHbEJDLGFBQVcsRUFBRSwwQ0FISztBQUlsQkMsV0FBUyxFQUFFLG1CQUpPO0FBS2xCQyxlQUFhLEVBQUUsK0JBTEc7QUFNbEJDLG1CQUFpQixFQUFFLGNBTkQ7QUFPbEJDLE9BQUssRUFBRSwyQ0FQVztBQVFsQkMsZUFBYSxFQUFFO0FBUkcsQ0FBckIsQyxDQVVDOztBQUNBQyxtREFBUSxDQUFDQyxhQUFULENBQXVCVixjQUF2QjtBQUVBLElBQU1XLE9BQU8sR0FBR0YsbURBQVEsQ0FBQ0UsT0FBVCxFQUFoQjtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy5kMWI1MjMzMjFiYWEyMGQ4ZjI5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbiAvLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbiB2YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QUtPdkRBQ2c1Uk9kREt4VEhRNTRBenppb0FSYkVOTmxVXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInBydWViYXNyZWFjdGNsYXNlLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9wcnVlYmFzcmVhY3RjbGFzZS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInBydWViYXNyZWFjdGNsYXNlXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInBydWViYXNyZWFjdGNsYXNlLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2NDM5MTEzMjYwOTBcIixcclxuICAgIGFwcElkOiBcIjE6NjQzOTExMzI2MDkwOndlYjo3NzMxOTk2MjRlNGQ4NTg0YzAxMDczXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctV1k2UzIzMEhEVlwiXHJcbiAgfTtcclxuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG4gIGNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbiAgZXhwb3J0IHtzdG9yYWdlfTsiXSwic291cmNlUm9vdCI6IiJ9