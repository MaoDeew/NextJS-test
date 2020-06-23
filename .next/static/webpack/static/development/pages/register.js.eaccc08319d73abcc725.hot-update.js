webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./components/FileUpload.js":
/*!**********************************!*\
  !*** ./components/FileUpload.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase_fileupload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/fileupload */ "./firebase/fileupload.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\mabet\\Desktop\\nextjs-prueba\\components\\FileUpload.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FileUpload = function FileUpload() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      file = _useState[0],
      setFile = _useState[1];

  var handleChange = function handleChange(event) {
    var fileSelected = event.target.files[0];

    if (fileSelected) {
      setFile(fileSelected);
    }
  };

  var handleUpload = function handleUpload() {
    /*const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
        "state_changed",
        (snapshot) =>{
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) =>{
            console.log(error);
        },
        () =>{
            console.log("FILE UPLOADED");
        }
    )*/
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "file",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Upload"), console.log("file selected : ", file));
};

_s(FileUpload, "Nkb8eHkBruGouXteoqeZ1R6wRVk=");

_c = FileUpload;
/* harmony default export */ __webpack_exports__["default"] = (FileUpload);

var _c;

$RefreshReg$(_c, "FileUpload");

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

/***/ "./firebase/fileupload.js":
/*!********************************!*\
  !*** ./firebase/fileupload.js ***!
  \********************************/
/*! exports provided: uploadFilesToFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFilesToFirebase", function() { return uploadFilesToFirebase; });
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase/firebase */ "./firebase/firebase.js");

var storage = _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__["default"].storage();
function uploadFilesToFirebase(files) {}

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

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");

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

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
}

/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

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

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");
var component = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
var logger$1 = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

var name$1 = "@firebase/app";
var version = "0.6.6";

var name$2 = "@firebase/analytics";

var name$3 = "@firebase/auth";

var name$4 = "@firebase/database";

var name$5 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$7 = "@firebase/messaging";

var name$8 = "@firebase/performance";

var name$9 = "@firebase/remote-config";

var name$a = "@firebase/storage";

var name$b = "@firebase/firestore";

var name$c = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$1] = 'fire-core',
    _a$1[name$2] = 'fire-analytics',
    _a$1[name$3] = 'fire-auth',
    _a$1[name$4] = 'fire-rtdb',
    _a$1[name$5] = 'fire-fn',
    _a$1[name$6] = 'fire-iid',
    _a$1[name$7] = 'fire-fcm',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$9] = 'fire-rc',
    _a$1[name$a] = 'fire-gcs',
    _a$1[name$b] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$c] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component$1 = _c.value;
                this._addComponent(component$1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "7.15.2";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                util.deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new component.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */, {
                appName: name
            });
        }
        logger$1.setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$1, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

exports.default = firebase$1;
exports.firebase = firebase$1;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var util = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = tslib.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(services
                                .filter(function (service) { return 'INTERNAL' in service; })
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/*! exports provided: LogLevel, Logger, setLogLevel, setUserLogHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function() { return setUserLogHandler; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/storage/dist/index.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: registerStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStorage", function() { return registerStorage; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain name for firebase storage.
 */
var DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */
var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */
var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */
var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
/**
 * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
 * enough for us to use it directly.
 */
var MIN_SAFE_INTEGER = -9007199254740991;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseStorageError = /** @class */ (function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function () {
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function () {
            return this.code_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function () {
            return this.message_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function () {
            return this.serverResponse_;
        },
        enumerable: true,
        configurable: true
    });
    return FirebaseStorageError;
}());
var Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    }
    else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' +
        fnName +
        '`: Expected ' +
        countPart +
        ' ' +
        plural +
        ', received ' +
        real +
        '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
};
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw 'Expected one of the event types: [' +
                StringFormat.RAW +
                ', ' +
                StringFormat.BASE64 +
                ', ' +
                StringFormat.BASE64URL +
                ', ' +
                StringFormat.DATA_URL +
                '].';
    }
}
/**
 * @struct
 */
var StringData = /** @class */ (function () {
    function StringData(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
    }
    return StringData;
}());
function dataFromString(format, stringData) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    var b = [];
    for (var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) === 55296) {
                    // The start of a surrogate pair.
                    var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = value.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) === 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    var decoded;
    try {
        decoded = decodeURIComponent(value);
    }
    catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch (format) {
        case StringFormat.BASE64: {
            var hasMinus = value.indexOf('-') !== -1;
            var hasUnder = value.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            var hasPlus = value.indexOf('+') !== -1;
            var hasSlash = value.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
        // do nothing
    }
    var bytes;
    try {
        bytes = atob(value);
    }
    catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = /** @class */ (function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}());
function dataURLBytes_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(dataUrl) {
    var parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return typeof p === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isInteger(p) {
    return isNumber(p) && Number.isInteger(p);
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @enum{number}
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = /** @class */ (function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(function (resolve) {
            _this.xhr_.addEventListener('abort', function () {
                _this.errorCode_ = ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function () {
                _this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function () {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, body, headers) {
        if (this.sent_) {
            throw internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (isDef(headers)) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    this.xhr_.setRequestHeader(key, headers[key].toString());
                }
            }
        }
        if (isDef(body)) {
            this.xhr_.send(body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw internalError('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = /** @class */ (function () {
    function XhrIoPool() {
    }
    XhrIoPool.prototype.createXhrIo = function () {
        return new NetworkXhrIo();
    };
    return XhrIoPool;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < args.length; i++) {
            bb.append(args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (isNativeBlobDefined()) {
            return new Blob(args);
        }
        else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
var FbsBlob = /** @class */ (function () {
    function FbsBlob(data, elideCopy) {
        var size = 0;
        var blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isNativeBlobDefined()) {
            var blobby = args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(getBlob.apply(null, blobby));
        }
        else {
            var uint8Arrays = args.map(function (val) {
                if (isString(val)) {
                    return dataFromString(StringFormat.RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Location = /** @class */ (function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function () {
            return this.path_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Location.prototype, "isRoot", {
        get: function () {
            return this.path.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw invalidDefaultBucket(bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
        var firebaseStoragePath = '(/([^?#]*).*)?$';
        var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
        var firebaseStorageIndices = { bucket: 1, path: 3 };
        var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
        var cloudStoragePath = '([^?#]*)';
        var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
        var cloudStorageIndices = { bucket: 1, path: 2 };
        var groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw invalidUrl(url);
        }
        return location;
    };
    return Location;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) {
        return obj;
    }
    else {
        return null;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length === 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath
        .split('/')
        .filter(function (component) { return component.length > 0; })
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function makeUrl(urlPart) {
    return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            // @ts-ignore TODO: remove once typescript is upgraded to 3.5.x
            var nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
        }
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
var Mapping = /** @class */ (function () {
    function Mapping(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
    return Mapping;
}());
var mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
    }
    else {
        return lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(_metadata, size) {
        if (isDef(size)) {
            return Number(size);
        }
        else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, authWrapper) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new Location(bucket, path);
        return authWrapper.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(authWrapper, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, authWrapper);
    return metadata;
}
function fromResourceString(authWrapper, resourceString, mappings) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(authWrapper, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
    }
    var tokens = obj['downloadTokens'];
    if (tokens.length === 0) {
        return null;
    }
    var encode = encodeURIComponent;
    var tokensList = tokens.split(',');
    var urls = tokensList.map(function (token) {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        var base = makeUrl(urlPart);
        var queryString = makeQueryString({
            alt: 'media',
            token: token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    if (!isObject(p) || !p) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            var val = p[key];
            if (key === 'customMetadata') {
                if (!isObject(val)) {
                    throw 'Expected object for \'customMetadata\' mapping.';
                }
            }
            else {
                if (isNonNullObject(val)) {
                    throw "Mapping for '" + key + "' cannot be an object.";
                }
            }
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_RESULTS_KEY = 'maxResults';
var MAX_MAX_RESULTS = 1000;
var PAGE_TOKEN_KEY = 'pageToken';
var PREFIXES_KEY = 'prefixes';
var ITEMS_KEY = 'items';
function fromBackendResponse(authWrapper, bucket, resource) {
    var listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) {
        for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathWithoutTrailingSlash = path.replace(/\/$/, '');
            var reference = authWrapper.makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
        }
    }
    if (resource[ITEMS_KEY]) {
        for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
            var item = _c[_b];
            var reference = authWrapper.makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
        }
    }
    return listResult;
}
function fromResponseString(authWrapper, bucket, resourceString) {
    var obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromBackendResponse(authWrapper, bucket, resource);
}
function listOptionsValidator(p) {
    if (!isObject(p) || !p) {
        throw 'Expected ListOptions object.';
    }
    for (var key in p) {
        if (key === MAX_RESULTS_KEY) {
            if (!isInteger(p[MAX_RESULTS_KEY]) ||
                p[MAX_RESULTS_KEY] <= 0) {
                throw 'Expected maxResults to be a positive number.';
            }
            if (p[MAX_RESULTS_KEY] > 1000) {
                throw "Expected maxResults to be less than or equal to " + MAX_MAX_RESULTS + ".";
            }
        }
        else if (key === PAGE_TOKEN_KEY) {
            if (p[PAGE_TOKEN_KEY] && !isString(p[PAGE_TOKEN_KEY])) {
                throw 'Expected pageToken to be string.';
            }
        }
        else {
            throw 'Unknown option: ' + key;
        }
    }
}

var RequestInfo = /** @class */ (function () {
    function RequestInfo(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw unknown();
    }
}
function metadataHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(authWrapper, bucket) {
    function handler(xhr, text) {
        var listResult = fromResponseString(authWrapper, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = fromResourceString(authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = unauthenticated();
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = quotaExceeded(location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = unauthorized(location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list(authWrapper, location, delimiter, pageToken, maxResults) {
    var urlParams = {};
    if (location.isRoot) {
        urlParams['prefix'] = '';
    }
    else {
        urlParams['prefix'] = location.path + '/';
    }
    if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
    }
    if (pageToken) {
        urlParams['pageToken'] = pageToken;
    }
    if (maxResults) {
        urlParams['maxResults'] = maxResults;
    }
    var urlPart = location.bucketOnlyServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new RequestInfo(url, method, listHandler(authWrapper, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getDownloadUrl(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new RequestInfo(url, method, downloadUrlHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(authWrapper, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'PATCH';
    var body = toResourceString(metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(authWrapper, location) {
    var urlPart = location.fullServerUrl();
    var url = makeUrl(urlPart);
    var method = 'DELETE';
    var timeout = authWrapper.maxOperationRetryTime();
    function handler(_xhr, _text) { }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, metadata) {
    var metadataClone = Object.assign({}, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
    }
    return metadataClone;
}
function multipartUpload(authWrapper, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str =
                str +
                    Math.random()
                        .toString()
                        .slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata_ = metadataForUpload_(location, blob, metadata);
    var metadataString = toResourceString(metadata_, mappings);
    var preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata_['contentType'] +
        '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw cannotSliceBlob();
    }
    var urlParams = { name: metadata_['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = /** @class */ (function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}());
function checkResumeHeader_(xhr, allowed) {
    var status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    var allowedStatus = allowed || ['active'];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(authWrapper, location, mappings, blob, metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadataForUpload = metadataForUpload_(location, blob, metadata);
    var urlParams = { name: metadataForUpload['fullPath'] };
    var url = makeUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = toResourceString(metadataForUpload, mappings);
    var timeout = authWrapper.maxUploadRetryTime();
    function handler(xhr) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(authWrapper, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) {
            // null or empty string
            handlerCheck(false);
        }
        var size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    }
    else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
    }
    var bytesLeft = status_.total - status_.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status_.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status_.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status_.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(authWrapper, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 */
var Observer = /** @class */ (function () {
    function Observer(nextOrObserver, error, complete) {
        var asFunctions = isFunction(nextOrObserver) ||
            isDef(error) ||
            isDef(complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error || null;
            this.complete = complete || null;
        }
        else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}());

var UploadTaskSnapshot = /** @class */ (function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    return UploadTaskSnapshot;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw invalidArgumentCount(minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw invalidArgument(i, name, e.message);
            }
            else {
                throw invalidArgument(i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
var ArgSpec = /** @class */ (function () {
    function ArgSpec(validator, optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !isJustDef(p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!optional;
    }
    return ArgSpec;
}());
function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(validator, optional) {
    function stringValidator(p) {
        if (!isString(p)) {
            throw 'Expected string.';
        }
    }
    var chainedValidator;
    if (validator) {
        chainedValidator = and_(stringValidator, validator);
    }
    else {
        chainedValidator = stringValidator;
    }
    return new ArgSpec(chainedValidator, optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array ||
            p instanceof ArrayBuffer ||
            (isNativeBlobDefined() && p instanceof Blob);
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(optional) {
    return new ArgSpec(metadataValidator, optional);
}
function listOptionSpec(optional) {
    return new ArgSpec(listOptionsValidator, optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = isNumber(p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(validator, optional) {
    function isLooseObjectValidator(p) {
        var isLooseObject = p === null || (isDef(p) && p instanceof Object);
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (validator !== undefined && validator !== null) {
            validator(p);
        }
    }
    return new ArgSpec(isLooseObjectValidator, optional);
}
function nullFunctionSpec(optional) {
    function validator(p) {
        var valid = p === null || isFunction(p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, optional);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(function () { return f.apply(void 0, argsToForward); });
    };
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
var UploadTask = /** @class */ (function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
        var _this = this;
        if (metadata === void 0) { metadata = null; }
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.authWrapper_ = authWrapper;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = InternalTaskState.RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(Code.CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(Code.CANCELED)) {
                _this.completeTransitions_();
            }
            else {
                _this.error_ = error;
                _this.transition_(InternalTaskState.ERROR);
            }
        };
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () { });
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded) { return _this.updateProgress_(sizeBefore + loaded); };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            }
            else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                }
                else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    }
                    else {
                        this.continueUpload_();
                    }
                }
            }
        }
        else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.authWrapper_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case InternalTaskState.RUNNING:
                    callback(authToken);
                    break;
                case InternalTaskState.CANCELING:
                    _this.transition_(InternalTaskState.CANCELED);
                    break;
                case InternalTaskState.PAUSING:
                    _this.transition_(InternalTaskState.PAUSED);
                    break;
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = createResumableUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = getResumableUploadStatus(_this.authWrapper_, _this.location_, url, _this.blob_);
            var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new ResumableUploadStatus(this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = continueResumableUpload(_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            }
            catch (e) {
                _this.error_ = e;
                _this.transition_(InternalTaskState.ERROR);
                return;
            }
            var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest
                .getPromise()
                .then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(InternalTaskState.SUCCESS);
                }
                else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = resumableUploadChunkSize * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = getMetadata(_this.authWrapper_, _this.location_, _this.mappings_);
            var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = multipartUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case InternalTaskState.CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case InternalTaskState.RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === InternalTaskState.PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case InternalTaskState.PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = canceled();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case InternalTaskState.SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case InternalTaskState.PAUSING:
                this.transition_(InternalTaskState.PAUSED);
                break;
            case InternalTaskState.CANCELING:
                this.transition_(InternalTaskState.CANCELED);
                break;
            case InternalTaskState.RUNNING:
                this.start_();
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function () {
            var externalState = taskStateFromInternalTaskState(this.state_);
            return new UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        function typeValidator() {
            if (type !== TaskEvent.STATE_CHANGED) {
                throw "Expected one of the event types: [" + TaskEvent.STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' +
            '`next`, `error`, `complete` properties.';
        var nextValidator = nullFunctionSpec(true).validator;
        var observerValidator = looseObjectSpec(null, true).validator;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            }
            catch (e) { }
            try {
                observerValidator(p);
                var anyDefined = isJustDef(p['next']) ||
                    isJustDef(p['error']) ||
                    isJustDef(p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            }
            catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [
            stringSpec(typeValidator),
            looseObjectSpec(nextOrObserverValidator, true),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        validate('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, complete) {
                if (specs !== null) {
                    validate('on', specs, arguments);
                }
                var observer = new Observer(nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [
            looseObjectSpec(binderNextOrObserverValidator),
            nullFunctionSpec(true),
            nullFunctionSpec(true)
        ];
        var typeOnly = !(isJustDef(nextOrObserver) ||
            isJustDef(error) ||
            isJustDef(completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        }
        else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        var i = this.observers_.indexOf(observer);
        if (i !== -1) {
            this.observers_.splice(i, 1);
        }
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = this.observers_.slice();
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (taskStateFromInternalTaskState(this.state_)) {
                case TaskState.SUCCESS:
                    async(this.resolve_.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    var toCall = this.reject_;
                    async(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = taskStateFromInternalTaskState(this.state_);
        switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) {
                    async(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case TaskState.SUCCESS:
                if (observer.complete) {
                    async(observer.complete.bind(observer))();
                }
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) {
                    async(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) {
                    async(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        validate('resume', [], arguments);
        var valid = this.state_ === InternalTaskState.PAUSED ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        validate('pause', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING;
        if (valid) {
            this.transition_(InternalTaskState.PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        validate('cancel', [], arguments);
        var valid = this.state_ === InternalTaskState.RUNNING ||
            this.state_ === InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(InternalTaskState.CANCELING);
        }
        return valid;
    };
    return UploadTask;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
var Reference = /** @class */ (function () {
    function Reference(authWrapper, location) {
        this.authWrapper = authWrapper;
        if (location instanceof Location) {
            this.location = location;
        }
        else {
            this.location = Location.makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (authWrapper, location) {
        return new Reference(authWrapper, location);
    };
    Reference.prototype.mappings = function () {
        return getMappings();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        validate('child', [stringSpec()], arguments);
        var newPath = child(this.location.path, childPath);
        var location = new Location(this.location.bucket, newPath);
        return this.newRef(this.authWrapper, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function () {
            var newPath = parent(this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new Location(this.location.bucket, newPath);
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function () {
            var location = new Location(this.location.bucket, '');
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function () {
            return this.location.bucket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function () {
            return this.location.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function () {
            return lastComponent(this.location.path);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function () {
            return this.authWrapper.service();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) { metadata = null; }
        validate('put', [uploadDataSpec(), metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new UploadTask(this, this.authWrapper, this.location, this.mappings(), new FbsBlob(data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param value The string to upload.
     * @param format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (value, format, metadata) {
        if (format === void 0) { format = StringFormat.RAW; }
        validate('putString', [stringSpec(), stringSpec(formatValidator, true), metadataSpec(true)], arguments);
        this.throwIfRoot_('putString');
        var data = dataFromString(format, value);
        var metadataClone = Object.assign({}, metadata);
        if (!isDef(metadataClone['contentType']) &&
            isDef(data.contentType)) {
            metadataClone['contentType'] = data.contentType;
        }
        return new UploadTask(this, this.authWrapper, this.location, this.mappings(), new FbsBlob(data.data, true), metadataClone);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        var _this = this;
        validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = deleteObject(_this.authWrapper, _this.location);
            return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * List all items (files) and prefixes (folders) under this storage reference.
     *
     * This is a helper method for calling list() repeatedly until there are
     * no more results. The default pagination size is 1000.
     *
     * Note: The results may not be consistent if objects are changed while this
     * operation is running.
     *
     * Warning: listAll may potentially consume too many resources if there are
     * too many results.
     *
     * @return A Promise that resolves with all the items and prefixes under
     *      the current storage reference. `prefixes` contains references to
     *      sub-directories and `items` contains references to objects in this
     *      folder. `nextPageToken` is never returned.
     */
    Reference.prototype.listAll = function () {
        validate('listAll', [], arguments);
        var accumulator = {
            prefixes: [],
            items: []
        };
        return this.listAllHelper(accumulator).then(function () { return accumulator; });
    };
    Reference.prototype.listAllHelper = function (accumulator, pageToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
            var opt, nextPage;
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        opt = {
                            // maxResults is 1000 by default.
                            pageToken: pageToken
                        };
                        return [4 /*yield*/, this.list(opt)];
                    case 1:
                        nextPage = _c.sent();
                        (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);
                        (_b = accumulator.items).push.apply(_b, nextPage.items);
                        if (!(nextPage.nextPageToken != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.listAllHelper(accumulator, nextPage.nextPageToken)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List items (files) and prefixes (folders) under this storage reference.
     *
     * List API is only available for Firebase Rules Version 2.
     *
     * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
     * delimited folder structure.
     * Refer to GCS's List API if you want to learn more.
     *
     * To adhere to Firebase Rules's Semantics, Firebase Storage does not
     * support objects whose paths end with "/" or contain two consecutive
     * "/"s. Firebase Storage List API will filter these unsupported objects.
     * list() may fail if there are too many unsupported objects in the bucket.
     *
     * @param options See ListOptions for details.
     * @return A Promise that resolves with the items and prefixes.
     *      `prefixes` contains references to sub-folders and `items`
     *      contains references to objects in this folder. `nextPageToken`
     *      can be used to get the rest of the results.
     */
    Reference.prototype.list = function (options) {
        validate('list', [listOptionSpec(true)], arguments);
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var op = options || {};
            var requestInfo = list(self.authWrapper, self.location, 
            /*delimiter= */ '/', op.pageToken, op.maxResults);
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        var _this = this;
        validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = getMetadata(_this.authWrapper, _this.location, _this.mappings());
            return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        var _this = this;
        validate('updateMetadata', [metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = updateMetadata(_this.authWrapper, _this.location, metadata, _this.mappings());
            return _this.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        var _this = this;
        validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = getDownloadUrl(_this.authWrapper, _this.location, _this.mappings());
            return _this.authWrapper
                .makeRequest(requestInfo, authToken)
                .getPromise()
                .then(function (url) {
                if (url === null) {
                    throw noDownloadURL();
                }
                return url;
            });
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw invalidRootOperation(name);
        }
    };
    return Reference;
}());

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = /** @class */ (function () {
    function FailRequest(error) {
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (_appDelete) {
    };
    return FailRequest;
}());

var RequestMap = /** @class */ (function () {
    function RequestMap() {
        this.map = new Map();
        this.id = MIN_SAFE_INTEGER;
    }
    /**
     * Registers the given request with this map.
     * The request is unregistered when it completes.
     *
     * @param request The request to register.
     */
    RequestMap.prototype.addRequest = function (request) {
        var _this = this;
        var id = this.id;
        this.id++;
        this.map.set(id, request);
        request.getPromise().then(function () { return _this.map.delete(id); }, function () { return _this.map.delete(id); });
    };
    /**
     * Cancels all registered requests.
     */
    RequestMap.prototype.clear = function () {
        this.map.forEach(function (v) {
            v && v.cancel(true);
        });
        this.map.clear();
    };
    return RequestMap;
}());

/**
 * @param app If null, getAuthToken always resolves with null.
 * @param service The storage service associated with this auth wrapper.
 *     Untyped to avoid circular type dependencies.
 * @struct
 */
var AuthWrapper = /** @class */ (function () {
    function AuthWrapper(app, authProvider, maker, requestMaker, service, pool) {
        var _a;
        this.bucket_ = null;
        this.appId_ = null;
        this.deleted_ = false;
        this.app_ = app;
        if (this.app_ !== null) {
            var options = this.app_.options;
            if (isDef(options)) {
                this.bucket_ = AuthWrapper.extractBucket_(options);
                this.appId_ = (_a = options.appId) !== null && _a !== void 0 ? _a : null;
            }
        }
        this.authProvider_ = authProvider;
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this.maxUploadRetryTime_ = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this.requestMap_ = new RequestMap();
    }
    AuthWrapper.extractBucket_ = function (config) {
        var bucketString = config[CONFIG_STORAGE_BUCKET_KEY] || null;
        if (bucketString == null) {
            return null;
        }
        var loc = Location.makeFromBucketSpec(bucketString);
        return loc.bucket;
    };
    AuthWrapper.prototype.getAuthToken = function () {
        var auth = this.authProvider_.getImmediate({ optional: true });
        if (auth) {
            return auth.getToken().then(function (response) {
                if (response !== null) {
                    return response.accessToken;
                }
                else {
                    return null;
                }
            }, function () { return null; });
        }
        else {
            return Promise.resolve(null);
        }
    };
    AuthWrapper.prototype.bucket = function () {
        if (this.deleted_) {
            throw appDeleted();
        }
        else {
            return this.bucket_;
        }
    };
    /**
     * The service associated with this auth wrapper. Untyped to avoid circular
     * type dependencies.
     */
    AuthWrapper.prototype.service = function () {
        return this.service_;
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
     * at the given Location.
     * @param loc The Location.
     * @return Actually a firebaseStorage.Reference, typing not allowed
     *     because of circular dependency problems.
     */
    AuthWrapper.prototype.makeStorageReference = function (loc) {
        return this.storageRefMaker_(this, loc);
    };
    AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
        if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, this.appId_, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
        }
        else {
            return new FailRequest(appDeleted());
        }
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    AuthWrapper.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
    };
    AuthWrapper.prototype.maxUploadRetryTime = function () {
        return this.maxUploadRetryTime_;
    };
    AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
        this.maxUploadRetryTime_ = time;
    };
    AuthWrapper.prototype.maxOperationRetryTime = function () {
        return this.maxOperationRetryTime_;
    };
    AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
        this.maxOperationRetryTime_ = time;
    };
    return AuthWrapper;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function triggerCallback() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
    // the no-explicit-any rule when ESlint releases it.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handler(success) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArrays"])([null, success], args));
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @struct
 * @template T
 */
var NetworkRequest = /** @class */ (function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        var _this = this;
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        this.promise_ = new Promise(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            xhr
                .send(self.url_, self.method_, self.body_, self.headers_)
                .then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = self.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (isJustDef(result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (xhr !== null) {
                    var err = unknown();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        var err = self.appDelete_ ? appDeleted() : canceled();
                        reject(err);
                    }
                    else {
                        var err = retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            stop(this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}());
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = /** @class */ (function () {
    function RequestEndStatus(wasSuccessCode, xhr, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!canceled;
    }
    return RequestEndStatus;
}());
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var version = typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a !== 'undefined' ? _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + version;
}
function addGmpidHeader_(headers, appId) {
    if (appId) {
        headers['X-Firebase-GMPID'] = appId;
    }
}
/**
 * @template T
 */
function makeRequest(requestInfo, appId, authToken, pool) {
    var queryPart = makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
var Service = /** @class */ (function () {
    function Service(app, authProvider, pool, url) {
        this.bucket_ = null;
        function maker(authWrapper, loc) {
            return new Reference(authWrapper, loc);
        }
        this.authWrapper_ = new AuthWrapper(app, authProvider, maker, makeRequest, this, pool);
        this.app_ = app;
        if (url != null) {
            this.bucket_ = Location.makeFromBucketSpec(url);
        }
        else {
            var authWrapperBucket = this.authWrapper_.bucket();
            if (authWrapperBucket != null) {
                this.bucket_ = new Location(authWrapperBucket, '');
            }
        }
        this.internals_ = new ServiceInternals(this);
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    Service.prototype.ref = function (path) {
        function validator(path) {
            if (typeof path !== 'string') {
                throw 'Path is not a string.';
            }
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        validate('ref', [stringSpec(validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new Reference(this.authWrapper_, this.bucket_);
        if (path != null) {
            return ref.child(path);
        }
        else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    Service.prototype.refFromURL = function (url) {
        function validator(p) {
            if (typeof p !== 'string') {
                throw 'Path is not a string.';
            }
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                Location.makeFromUrl(p);
            }
            catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        validate('refFromURL', [stringSpec(validator, false)], arguments);
        return new Reference(this.authWrapper_, url);
    };
    Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
        get: function () {
            return this.authWrapper_.maxUploadRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxUploadRetryTime = function (time) {
        validate('setMaxUploadRetryTime', [nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxUploadRetryTime(time);
    };
    Service.prototype.setMaxOperationRetryTime = function (time) {
        validate('setMaxOperationRetryTime', [nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxOperationRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "app", {
        get: function () {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "INTERNAL", {
        get: function () {
            return this.internals_;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());
/**
 * @struct
 */
var ServiceInternals = /** @class */ (function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     * @see {!fbs.AuthWrapper.prototype.deleteApp}
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.authWrapper_.deleteApp();
        return Promise.resolve();
    };
    return ServiceInternals;
}());

var name = "@firebase/storage";
var version = "0.3.36";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage';
function factory(container, url) {
    // Dependencies
    var app = container.getProvider('app').getImmediate();
    var authProvider = container.getProvider('auth-internal');
    return new Service(app, authProvider, new XhrIoPool(), url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: TaskState,
        TaskEvent: TaskEvent,
        StringFormat: StringFormat,
        Storage: Service,
        Reference: Reference
    };
    instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */)
        .setServiceProps(namespaceExports)
        .setMultipleInstances(true));
    instance.registerVersion(name, version);
}
registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"));

var name = "firebase";
var version = "7.15.3";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name, version, 'app');

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvZmlsZXVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9kaXN0L2luZGV4LmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2xvZ2dlci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2UvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL2Rpc3QvaW5kZXguY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hcHAvZGlzdC9pbmRleC5janMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL3N0b3JhZ2UvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyJdLCJuYW1lcyI6WyJGaWxlVXBsb2FkIiwidXNlU3RhdGUiLCJmaWxlIiwic2V0RmlsZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiZmlsZVNlbGVjdGVkIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVVcGxvYWQiLCJjb25zb2xlIiwibG9nIiwic3RvcmFnZSIsImZpcmViYXNlIiwidXBsb2FkRmlsZXNUb0ZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxJQUFELENBRFo7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsT0FETzs7QUFHcEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFVO0FBQzNCLFFBQUlDLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBbkI7O0FBQ0EsUUFBR0YsWUFBSCxFQUFnQjtBQUNaSCxhQUFPLENBQUNHLFlBQUQsQ0FBUDtBQUNIO0FBQ0osR0FMRDs7QUFPQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFLO0FBQ3RCOzs7Ozs7Ozs7Ozs7OztBQWNILEdBZkQ7O0FBaUJBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBUSxFQUFFTCxZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFRLFdBQU8sRUFBRUssWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBR0tDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQStCVCxJQUEvQixDQUhMLENBREo7QUFPSCxDQWxDRDs7R0FBTUYsVTs7S0FBQUEsVTtBQW9DU0EseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFNWSxPQUFPLEdBQUdDLDBEQUFRLENBQUNELE9BQVQsRUFBaEI7QUFFTyxTQUFTRSxxQkFBVCxDQUErQk4sS0FBL0IsRUFBcUMsQ0FFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQzs7QUFDQSxJQUFJTyxjQUFjLEdBQUc7QUFDbEJDLFFBQU0sRUFBRSx5Q0FEVTtBQUVsQkMsWUFBVSxFQUFFLG1DQUZNO0FBR2xCQyxhQUFXLEVBQUUsMENBSEs7QUFJbEJDLFdBQVMsRUFBRSxtQkFKTztBQUtsQkMsZUFBYSxFQUFFLCtCQUxHO0FBTWxCQyxtQkFBaUIsRUFBRSxjQU5EO0FBT2xCQyxPQUFLLEVBQUUsMkNBUFc7QUFRbEJDLGVBQWEsRUFBRTtBQVJHLENBQXJCLEMsQ0FXQzs7QUFDQSxJQUFJLENBQUNWLG1EQUFRLENBQUNXLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekJaLHFEQUFRLENBQUNhLGFBQVQsQ0FBdUJYLGNBQXZCO0FBQ0g7O0FBR2NGLGtIQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmE7O0FBRWIsOENBQThDLGNBQWM7O0FBRTVELFlBQVksbUJBQU8sQ0FBQyxnREFBTztBQUMzQixXQUFXLG1CQUFPLENBQUMsdUVBQWdCO0FBQ25DLGdCQUFnQixtQkFBTyxDQUFDLGlGQUFxQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsMkVBQWtCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0EsaUVBQWlFLFNBQVM7QUFDMUUsb0VBQW9FLFNBQVM7QUFDN0UsZ0VBQWdFLFNBQVM7QUFDekUsdUVBQXVFLFNBQVM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsY0FBYyxFQUFFO0FBQ3ZGO0FBQ0E7QUFDQSxzR0FBc0csVUFBVTtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1RkFBdUYsMEJBQTBCLEVBQUU7QUFDbkgsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMseUNBQXlDO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx5Q0FBeUM7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxzQkFBc0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsZ0JBQWdCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDZFQUE2RSxnQkFBZ0I7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsbUJBQW1CLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0JBQWdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1QkFBdUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxVQUFVO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVEsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGLFVBQVUscUNBQXFDLEVBQUUsRUFBRTtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsd0JBQXdCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMENBQTBDLGtCQUFrQixFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5Ryw2Q0FBNkMsRUFBRTtBQUN4SjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqcUJhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RCxZQUFZLG1CQUFPLENBQUMsZ0RBQU87QUFDM0IsV0FBVyxtQkFBTyxDQUFDLHVFQUFnQjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlDQUFpQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGtEQUFrRDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixVQUFVO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVEsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDhCQUE4QixFQUFFO0FBQzVGO0FBQ0EseURBQXlELGtDQUFrQyxFQUFFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pELHdDQUF3QyxRQUFRO0FBQ2hELHdEQUF3RCxRQUFRO0FBQ2hFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiw0Q0FBNEMsWUFBWSxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEQ7QUFDNUQ7Ozs7Ozs7Ozs7Ozs7QUM5UkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDMEI7QUFDZjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0EsYUFBYSwyREFBMkQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkJBQTZCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxnQkFBZ0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0JBQWdCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx1Q0FBdUMsRUFBRTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw4Q0FBOEMsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBbUQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxvQkFBb0IsRUFBRTtBQUN2RjtBQUNBO0FBQ0EsZUFBZSx1REFBUztBQUN4QjtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNkJBQTZCLEVBQUUsZUFBZSw2QkFBNkIsRUFBRTtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUJBQWlCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWUsYUFBYSxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDREQUFjO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDREQUFjO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBUSxtQkFBbUIsb0RBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNkRBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQVE7O0FBRUc7QUFDM0I7Ozs7Ozs7Ozs7Ozs7QUN6L0dBLDhDQUFhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RCxZQUFZLG1CQUFPLENBQUMsZ0RBQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGdCQUFnQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLE1BQU0sSUFBSTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxFQUFFO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhLFdBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGdCQUFnQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseUJBQXlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNybkRhOztBQUViLCtCQUErQixpRkFBaUY7O0FBRWhILCtCQUErQixtQkFBTyxDQUFDLHFFQUFlOztBQUV0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQTJCO0FBQzNCOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVPO0FBQ1A7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBOztBQUVPO0FBQ1AsbUNBQW1DLG9DQUFvQztBQUN2RTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUCwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1AsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRU87QUFDUCxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQixzRkFBc0YsYUFBYSxFQUFFO0FBQ3RILHNCQUFzQixnQ0FBZ0MscUNBQXFDLDBDQUEwQyxFQUFFLEVBQUUsR0FBRztBQUM1SSwyQkFBMkIsTUFBTSxlQUFlLEVBQUUsWUFBWSxvQkFBb0IsRUFBRTtBQUNwRixzQkFBc0Isb0dBQW9HO0FBQzFILDZCQUE2Qix1QkFBdUI7QUFDcEQsNEJBQTRCLHdCQUF3QjtBQUNwRCwyQkFBMkIseURBQXlEO0FBQ3BGOztBQUVPO0FBQ1A7QUFDQSxpQkFBaUIsNENBQTRDLFNBQVMsRUFBRSxxREFBcUQsYUFBYSxFQUFFO0FBQzVJLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLGdEQUFnRCxnQkFBZ0IsRUFBRSxLQUFLO0FBQ2pKOztBQUVPO0FBQ1A7QUFDQTtBQUNBLDJHQUEyRyxzRkFBc0YsYUFBYSxFQUFFO0FBQ2hOLHNCQUFzQiw4QkFBOEIsZ0RBQWdELHVEQUF1RCxFQUFFLEVBQUUsR0FBRztBQUNsSyw0Q0FBNEMsc0NBQXNDLFVBQVUsb0JBQW9CLEVBQUUsRUFBRSxVQUFVO0FBQzlIOztBQUVPO0FBQ1AsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsNENBQTRDO0FBQzVDOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuZWFjY2MwODMxOWQ3M2FiY2M3MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ICB9IGZyb20gXCIuLi9maXJlYmFzZS9maWxldXBsb2FkXCI7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkID0gKCkgPT57XHJcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PntcclxuICAgICAgICBsZXQgZmlsZVNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGlmKGZpbGVTZWxlY3RlZCl7XHJcbiAgICAgICAgICAgIHNldEZpbGUoZmlsZVNlbGVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGxvYWQgPSAoKSA9PntcclxuICAgICAgICAvKmNvbnN0IHVwbG9hZFRhc2sgPSBzdG9yYWdlLnJlZihgZmlsZXMvJHtmaWxlLm5hbWV9YCkucHV0KGZpbGUpO1xyXG4gICAgICAgIHVwbG9hZFRhc2sub24oXHJcbiAgICAgICAgICAgIFwic3RhdGVfY2hhbmdlZFwiLFxyXG4gICAgICAgICAgICAoc25hcHNob3QpID0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVcGxvYWQgaXMgJyArIHByb2dyZXNzICsgJyUgZG9uZScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklMRSBVUExPQURFRFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkqL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhcImZpbGUgc2VsZWN0ZWQgOiBcIixmaWxlKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZDsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlXCI7XHJcbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlc1RvRmlyZWJhc2UoZmlsZXMpe1xyXG5cclxufSIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL3N0b3JhZ2VcIlxyXG5cclxuIC8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cclxuIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lBS092REFDZzVST2RES3hUSFE1NEF6emlvQVJiRU5ObFVcIixcclxuICAgIGF1dGhEb21haW46IFwicHJ1ZWJhc3JlYWN0Y2xhc2UuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3BydWViYXNyZWFjdGNsYXNlLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwicHJ1ZWJhc3JlYWN0Y2xhc2VcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicHJ1ZWJhc3JlYWN0Y2xhc2UuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY0MzkxMTMyNjA5MFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo2NDM5MTEzMjYwOTA6d2ViOjc3MzE5OTYyNGU0ZDg1ODRjMDEwNzNcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1XWTZTMjMwSERWXCJcclxuICB9O1xyXG5cclxuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnQGZpcmViYXNlL3V0aWwnKTtcbnZhciBjb21wb25lbnQgPSByZXF1aXJlKCdAZmlyZWJhc2UvY29tcG9uZW50Jyk7XG52YXIgbG9nZ2VyJDEgPSByZXF1aXJlKCdAZmlyZWJhc2UvbG9nZ2VyJyk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYTtcclxudmFyIEVSUk9SUyA9IChfYSA9IHt9LFxyXG4gICAgX2FbXCJuby1hcHBcIiAvKiBOT19BUFAgKi9dID0gXCJObyBGaXJlYmFzZSBBcHAgJ3skYXBwTmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQgLSBcIiArXHJcbiAgICAgICAgJ2NhbGwgRmlyZWJhc2UgQXBwLmluaXRpYWxpemVBcHAoKScsXHJcbiAgICBfYVtcImJhZC1hcHAtbmFtZVwiIC8qIEJBRF9BUFBfTkFNRSAqL10gPSBcIklsbGVnYWwgQXBwIG5hbWU6ICd7JGFwcE5hbWV9XCIsXHJcbiAgICBfYVtcImR1cGxpY2F0ZS1hcHBcIiAvKiBEVVBMSUNBVEVfQVBQICovXSA9IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGV4aXN0c1wiLFxyXG4gICAgX2FbXCJhcHAtZGVsZXRlZFwiIC8qIEFQUF9ERUxFVEVEICovXSA9IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGRlbGV0ZWRcIixcclxuICAgIF9hW1wiaW52YWxpZC1hcHAtYXJndW1lbnRcIiAvKiBJTlZBTElEX0FQUF9BUkdVTUVOVCAqL10gPSAnZmlyZWJhc2UueyRhcHBOYW1lfSgpIHRha2VzIGVpdGhlciBubyBhcmd1bWVudCBvciBhICcgK1xyXG4gICAgICAgICdGaXJlYmFzZSBBcHAgaW5zdGFuY2UuJyxcclxuICAgIF9hW1wiaW52YWxpZC1sb2ctYXJndW1lbnRcIiAvKiBJTlZBTElEX0xPR19BUkdVTUVOVCAqL10gPSAnRmlyc3QgYXJndW1lbnQgdG8gYG9uTG9nYCBtdXN0IGJlIG51bGwgb3IgYSBmdW5jdGlvbi4nLFxyXG4gICAgX2EpO1xyXG52YXIgRVJST1JfRkFDVE9SWSA9IG5ldyB1dGlsLkVycm9yRmFjdG9yeSgnYXBwJywgJ0ZpcmViYXNlJywgRVJST1JTKTtcblxudmFyIG5hbWUkMSA9IFwiQGZpcmViYXNlL2FwcFwiO1xudmFyIHZlcnNpb24gPSBcIjAuNi42XCI7XG5cbnZhciBuYW1lJDIgPSBcIkBmaXJlYmFzZS9hbmFseXRpY3NcIjtcblxudmFyIG5hbWUkMyA9IFwiQGZpcmViYXNlL2F1dGhcIjtcblxudmFyIG5hbWUkNCA9IFwiQGZpcmViYXNlL2RhdGFiYXNlXCI7XG5cbnZhciBuYW1lJDUgPSBcIkBmaXJlYmFzZS9mdW5jdGlvbnNcIjtcblxudmFyIG5hbWUkNiA9IFwiQGZpcmViYXNlL2luc3RhbGxhdGlvbnNcIjtcblxudmFyIG5hbWUkNyA9IFwiQGZpcmViYXNlL21lc3NhZ2luZ1wiO1xuXG52YXIgbmFtZSQ4ID0gXCJAZmlyZWJhc2UvcGVyZm9ybWFuY2VcIjtcblxudmFyIG5hbWUkOSA9IFwiQGZpcmViYXNlL3JlbW90ZS1jb25maWdcIjtcblxudmFyIG5hbWUkYSA9IFwiQGZpcmViYXNlL3N0b3JhZ2VcIjtcblxudmFyIG5hbWUkYiA9IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG52YXIgbmFtZSRjID0gXCJmaXJlYmFzZS13cmFwcGVyXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYSQxO1xyXG52YXIgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XHJcbnZhciBQTEFURk9STV9MT0dfU1RSSU5HID0gKF9hJDEgPSB7fSxcclxuICAgIF9hJDFbbmFtZSQxXSA9ICdmaXJlLWNvcmUnLFxyXG4gICAgX2EkMVtuYW1lJDJdID0gJ2ZpcmUtYW5hbHl0aWNzJyxcclxuICAgIF9hJDFbbmFtZSQzXSA9ICdmaXJlLWF1dGgnLFxyXG4gICAgX2EkMVtuYW1lJDRdID0gJ2ZpcmUtcnRkYicsXHJcbiAgICBfYSQxW25hbWUkNV0gPSAnZmlyZS1mbicsXHJcbiAgICBfYSQxW25hbWUkNl0gPSAnZmlyZS1paWQnLFxyXG4gICAgX2EkMVtuYW1lJDddID0gJ2ZpcmUtZmNtJyxcclxuICAgIF9hJDFbbmFtZSQ4XSA9ICdmaXJlLXBlcmYnLFxyXG4gICAgX2EkMVtuYW1lJDldID0gJ2ZpcmUtcmMnLFxyXG4gICAgX2EkMVtuYW1lJGFdID0gJ2ZpcmUtZ2NzJyxcclxuICAgIF9hJDFbbmFtZSRiXSA9ICdmaXJlLWZzdCcsXHJcbiAgICBfYSQxWydmaXJlLWpzJ10gPSAnZmlyZS1qcycsXHJcbiAgICBfYSQxW25hbWUkY10gPSAnZmlyZS1qcy1hbGwnLFxyXG4gICAgX2EkMSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBsb2dnZXIgPSBuZXcgbG9nZ2VyJDEuTG9nZ2VyKCdAZmlyZWJhc2UvYXBwJyk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBHbG9iYWwgY29udGV4dCBvYmplY3QgZm9yIGEgY29sbGVjdGlvbiBvZiBzZXJ2aWNlcyB1c2luZ1xyXG4gKiBhIHNoYXJlZCBhdXRoZW50aWNhdGlvbiBzdGF0ZS5cclxuICovXHJcbnZhciBGaXJlYmFzZUFwcEltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGaXJlYmFzZUFwcEltcGwob3B0aW9ucywgY29uZmlnLCBmaXJlYmFzZV8pIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZmlyZWJhc2VfID0gZmlyZWJhc2VfO1xyXG4gICAgICAgIHRoaXMuaXNEZWxldGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmFtZV8gPSBjb25maWcubmFtZTtcclxuICAgICAgICB0aGlzLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZF8gPVxyXG4gICAgICAgICAgICBjb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc18gPSB1dGlsLmRlZXBDb3B5KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IGNvbXBvbmVudC5Db21wb25lbnRDb250YWluZXIoY29uZmlnLm5hbWUpO1xyXG4gICAgICAgIC8vIGFkZCBpdHNlbGYgdG8gY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KG5ldyBjb21wb25lbnQuQ29tcG9uZW50KCdhcHAnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpczsgfSwgXCJQVUJMSUNcIiAvKiBQVUJMSUMgKi8pKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBDb21wb25lbnRDb250YWluZXIgd2l0aCBleGlzdGluZyBjb21wb25lbnRzXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gdHNsaWIuX192YWx1ZXModGhpcy5maXJlYmFzZV8uSU5URVJOQUwuY29tcG9uZW50cy52YWx1ZXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQkMSA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ29tcG9uZW50KGNvbXBvbmVudCQxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZSwgXCJhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRfO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWRfKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkXyA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLCBcIm5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNoZWNrRGVzdHJveWVkXygpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5maXJlYmFzZV8uSU5URVJOQUwucmVtb3ZlQXBwKF90aGlzLm5hbWVfKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF90aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKS5tYXAoZnVuY3Rpb24gKHByb3ZpZGVyKSB7IHJldHVybiBwcm92aWRlci5kZWxldGUoKTsgfSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuaXNEZWxldGVkXyA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBzZXJ2aWNlIGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFwcCAoY3JlYXRpbmcgaXRcclxuICAgICAqIG9uIGRlbWFuZCksIGlkZW50aWZpZWQgYnkgdGhlIHBhc3NlZCBpbnN0YW5jZUlkZW50aWZpZXIuXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogQ3VycmVudGx5IHN0b3JhZ2UgYW5kIGZ1bmN0aW9ucyBhcmUgdGhlIG9ubHkgb25lcyB0aGF0IGFyZSBsZXZlcmFnaW5nIHRoaXNcclxuICAgICAqIGZ1bmN0aW9uYWxpdHkuIFRoZXkgaW52b2tlIGl0IGJ5IGNhbGxpbmc6XHJcbiAgICAgKlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICogZmlyZWJhc2UuYXBwKCkuc3RvcmFnZSgnU1RPUkFHRSBCVUNLRVQgSUQnKVxyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogVGhlIHNlcnZpY2UgbmFtZSBpcyBwYXNzZWQgdG8gdGhpcyBhbHJlYWR5XHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgRmlyZWJhc2VBcHBJbXBsLnByb3RvdHlwZS5fZ2V0U2VydmljZSA9IGZ1bmN0aW9uIChuYW1lLCBpbnN0YW5jZUlkZW50aWZpZXIpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2VJZGVudGlmaWVyID09PSB2b2lkIDApIHsgaW5zdGFuY2VJZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FOyB9XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZF8oKTtcclxuICAgICAgICAvLyBnZXRJbW1lZGlhdGUgd2lsbCBhbHdheXMgc3VjY2VlZCBiZWNhdXNlIF9nZXRTZXJ2aWNlIGlzIG9ubHkgY2FsbGVkIGZvciByZWdpc3RlcmVkIGNvbXBvbmVudHMuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVyKG5hbWUpLmdldEltbWVkaWF0ZSh7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IGluc3RhbmNlSWRlbnRpZmllclxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgc2VydmljZSBpbnN0YW5jZSBmcm9tIHRoZSBjYWNoZSwgc28gd2Ugd2lsbCBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgZm9yIHRoaXMgc2VydmljZVxyXG4gICAgICogd2hlbiBwZW9wbGUgdHJ5IHRvIGdldCB0aGlzIHNlcnZpY2UgYWdhaW4uXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogY3VycmVudGx5IG9ubHkgZmlyZXN0b3JlIGlzIHVzaW5nIHRoaXMgZnVuY3Rpb25hbGl0eSB0byBzdXBwb3J0IGZpcmVzdG9yZSBzaHV0ZG93bi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgc2VydmljZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VJZGVudGlmaWVyIGluc3RhbmNlIGlkZW50aWZpZXIgaW4gY2FzZSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIGFsbG93ZWRcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLl9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UgPSBmdW5jdGlvbiAobmFtZSwgaW5zdGFuY2VJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlSWRlbnRpZmllciA9PT0gdm9pZCAwKSB7IGluc3RhbmNlSWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXIobmFtZSkuY2xlYXJJbnN0YW5jZShpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuX2FkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFwiQ29tcG9uZW50IFwiICsgY29tcG9uZW50Lm5hbWUgKyBcIiBmYWlsZWQgdG8gcmVnaXN0ZXIgd2l0aCBGaXJlYmFzZUFwcCBcIiArIHRoaXMubmFtZSwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZE9yT3ZlcndyaXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxyXG4gICAgICogdXNlIGJlZm9yZSBwZXJmb3JtaW5nIEFQSSBhY3Rpb25zIG9uIHRoZSBBcHAuXHJcbiAgICAgKi9cclxuICAgIEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUuY2hlY2tEZXN0cm95ZWRfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtZGVsZXRlZFwiIC8qIEFQUF9ERUxFVEVEICovLCB7IGFwcE5hbWU6IHRoaXMubmFtZV8gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBGaXJlYmFzZUFwcEltcGw7XHJcbn0oKSk7XHJcbi8vIFByZXZlbnQgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIG9mIHRoZXNlIG1ldGhvZHMgdy9vIGludmFsaWQgcHJvcGVydHlcclxuLy8gY29weWluZy5cclxuKEZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGUubmFtZSAmJiBGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLm9wdGlvbnMpIHx8XHJcbiAgICBGaXJlYmFzZUFwcEltcGwucHJvdG90eXBlLmRlbGV0ZSB8fFxyXG4gICAgY29uc29sZS5sb2coJ2RjJyk7XG5cbnZhciB2ZXJzaW9uJDEgPSBcIjcuMTUuMlwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQmVjYXVzZSBhdXRoIGNhbid0IHNoYXJlIGNvZGUgd2l0aCBvdGhlciBjb21wb25lbnRzLCB3ZSBhdHRhY2ggdGhlIHV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqIGluIGFuIGludGVybmFsIG5hbWVzcGFjZSB0byBzaGFyZSBjb2RlLlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybiBhIGZpcmViYXNlIG5hbWVzcGFjZSBvYmplY3Qgd2l0aG91dFxyXG4gKiBhbnkgdXRpbGl0eSBmdW5jdGlvbnMsIHNvIGl0IGNhbiBiZSBzaGFyZWQgYmV0d2VlbiB0aGUgcmVndWxhciBmaXJlYmFzZU5hbWVzcGFjZSBhbmRcclxuICogdGhlIGxpdGUgdmVyc2lvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpcmViYXNlTmFtZXNwYWNlQ29yZShmaXJlYmFzZUFwcEltcGwpIHtcclxuICAgIHZhciBhcHBzID0ge307XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgdmFyIGNvbXBvbmVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICAvLyBBIG5hbWVzcGFjZSBpcyBhIHBsYWluIEphdmFTY3JpcHQgT2JqZWN0LlxyXG4gICAgdmFyIG5hbWVzcGFjZSA9IHtcclxuICAgICAgICAvLyBIYWNrIHRvIHByZXZlbnQgQmFiZWwgZnJvbSBtb2RpZnlpbmcgdGhlIG9iamVjdCByZXR1cm5lZFxyXG4gICAgICAgIC8vIGFzIHRoZSBmaXJlYmFzZSBuYW1lc3BhY2UuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIF9fZXNNb2R1bGU6IHRydWUsXHJcbiAgICAgICAgaW5pdGlhbGl6ZUFwcDogaW5pdGlhbGl6ZUFwcCxcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgYXBwOiBhcHAsXHJcbiAgICAgICAgcmVnaXN0ZXJWZXJzaW9uOiByZWdpc3RlclZlcnNpb24sXHJcbiAgICAgICAgc2V0TG9nTGV2ZWw6IGxvZ2dlciQxLnNldExvZ0xldmVsLFxyXG4gICAgICAgIG9uTG9nOiBvbkxvZyxcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgYXBwczogbnVsbCxcclxuICAgICAgICBTREtfVkVSU0lPTjogdmVyc2lvbiQxLFxyXG4gICAgICAgIElOVEVSTkFMOiB7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyQ29tcG9uZW50OiByZWdpc3RlckNvbXBvbmVudCxcclxuICAgICAgICAgICAgcmVtb3ZlQXBwOiByZW1vdmVBcHAsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXHJcbiAgICAgICAgICAgIHVzZUFzU2VydmljZTogdXNlQXNTZXJ2aWNlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIEluamVjdCBhIGNpcmN1bGFyIGRlZmF1bHQgZXhwb3J0IHRvIGFsbG93IEJhYmVsIHVzZXJzIHdobyB3ZXJlIHByZXZpb3VzbHlcclxuICAgIC8vIHVzaW5nOlxyXG4gICAgLy9cclxuICAgIC8vICAgaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuICAgIC8vICAgd2hpY2ggYmVjb21lczogdmFyIGZpcmViYXNlID0gcmVxdWlyZSgnZmlyZWJhc2UnKS5kZWZhdWx0O1xyXG4gICAgLy9cclxuICAgIC8vIGluc3RlYWQgb2ZcclxuICAgIC8vXHJcbiAgICAvLyAgIGltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuICAgIC8vICAgd2hpY2ggYmVjb21lczogdmFyIGZpcmViYXNlID0gcmVxdWlyZSgnZmlyZWJhc2UnKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICBuYW1lc3BhY2VbJ2RlZmF1bHQnXSA9IG5hbWVzcGFjZTtcclxuICAgIC8vIGZpcmViYXNlLmFwcHMgaXMgYSByZWFkLW9ubHkgZ2V0dGVyLlxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5hbWVzcGFjZSwgJ2FwcHMnLCB7XHJcbiAgICAgICAgZ2V0OiBnZXRBcHBzXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIGJ5IEFwcC5kZWxldGUoKSAtIGJ1dCBiZWZvcmUgYW55IHNlcnZpY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgQXBwXHJcbiAgICAgKiBhcmUgZGVsZXRlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQXBwKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgYXBwc1tuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBBcHAgb2JqZWN0IGZvciBhIGdpdmVuIG5hbWUgKG9yIERFRkFVTFQpLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBhcHAobmFtZSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lIHx8IERFRkFVTFRfRU5UUllfTkFNRTtcclxuICAgICAgICBpZiAoIXV0aWwuY29udGFpbnMoYXBwcywgbmFtZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1hcHBcIiAvKiBOT19BUFAgKi8sIHsgYXBwTmFtZTogbmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFwcHNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBhcHBbJ0FwcCddID0gZmlyZWJhc2VBcHBJbXBsO1xyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChvcHRpb25zLCByYXdDb25maWcpIHtcclxuICAgICAgICBpZiAocmF3Q29uZmlnID09PSB2b2lkIDApIHsgcmF3Q29uZmlnID0ge307IH1cclxuICAgICAgICBpZiAodHlwZW9mIHJhd0NvbmZpZyAhPT0gJ29iamVjdCcgfHwgcmF3Q29uZmlnID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSByYXdDb25maWc7XHJcbiAgICAgICAgICAgIHJhd0NvbmZpZyA9IHsgbmFtZTogbmFtZV8xIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb25maWcgPSByYXdDb25maWc7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5uYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uZmlnLm5hbWUgPSBERUZBVUxUX0VOVFJZX05BTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCAhbmFtZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImJhZC1hcHAtbmFtZVwiIC8qIEJBRF9BUFBfTkFNRSAqLywge1xyXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogU3RyaW5nKG5hbWUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXRpbC5jb250YWlucyhhcHBzLCBuYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImR1cGxpY2F0ZS1hcHBcIiAvKiBEVVBMSUNBVEVfQVBQICovLCB7IGFwcE5hbWU6IG5hbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhcHAgPSBuZXcgZmlyZWJhc2VBcHBJbXBsKG9wdGlvbnMsIGNvbmZpZywgbmFtZXNwYWNlKTtcclxuICAgICAgICBhcHBzW25hbWVdID0gYXBwO1xyXG4gICAgICAgIHJldHVybiBhcHA7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgICogUmV0dXJuIGFuIGFycmF5IG9mIGFsbCB0aGUgbm9uLWRlbGV0ZWQgRmlyZWJhc2VBcHBzLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRBcHBzKCkge1xyXG4gICAgICAgIC8vIE1ha2UgYSBjb3B5IHNvIGNhbGxlciBjYW5ub3QgbXV0YXRlIHRoZSBhcHBzIGxpc3QuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGFwcHMpLm1hcChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gYXBwc1tuYW1lXTsgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAgICAgICB2YXIgZV8xLCBfYTtcclxuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5uYW1lO1xyXG4gICAgICAgIGlmIChjb21wb25lbnRzLmhhcyhjb21wb25lbnROYW1lKSkge1xyXG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoXCJUaGVyZSB3ZXJlIG11bHRpcGxlIGF0dGVtcHRzIHRvIHJlZ2lzdGVyIGNvbXBvbmVudCBcIiArIGNvbXBvbmVudE5hbWUgKyBcIi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQudHlwZSA9PT0gXCJQVUJMSUNcIiAvKiBQVUJMSUMgKi9cclxuICAgICAgICAgICAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2VbY29tcG9uZW50TmFtZV1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcG9uZW50cy5zZXQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcclxuICAgICAgICAvLyBjcmVhdGUgc2VydmljZSBuYW1lc3BhY2UgZm9yIHB1YmxpYyBjb21wb25lbnRzXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudC50eXBlID09PSBcIlBVQkxJQ1wiIC8qIFBVQkxJQyAqLykge1xyXG4gICAgICAgICAgICAvLyBUaGUgU2VydmljZSBuYW1lc3BhY2UgaXMgYW4gYWNjZXNzb3IgZnVuY3Rpb24gLi4uXHJcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlTmFtZXNwYWNlID0gZnVuY3Rpb24gKGFwcEFyZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFwcEFyZyA9PT0gdm9pZCAwKSB7IGFwcEFyZyA9IGFwcCgpOyB9XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcHBBcmdbY29tcG9uZW50TmFtZV0gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIGFyZ3VtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaGFwcGVucyBpbiB0aGUgZm9sbG93aW5nIGNhc2U6IGZpcmViYXNlLnN0b3JhZ2UoJ2dzOi8nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZC1hcHAtYXJndW1lbnRcIiAvKiBJTlZBTElEX0FQUF9BUkdVTUVOVCAqLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBjb21wb25lbnROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBGb3J3YXJkIHNlcnZpY2UgaW5zdGFuY2UgbG9va3VwIHRvIHRoZSBGaXJlYmFzZUFwcC5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwQXJnW2NvbXBvbmVudE5hbWVdKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIC4uLiBhbmQgYSBjb250YWluZXIgZm9yIHNlcnZpY2UtbGV2ZWwgcHJvcGVydGllcy5cclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5zZXJ2aWNlUHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKHNlcnZpY2VOYW1lc3BhY2UsIGNvbXBvbmVudC5zZXJ2aWNlUHJvcHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgIG5hbWVzcGFjZVtjb21wb25lbnROYW1lXSA9IHNlcnZpY2VOYW1lc3BhY2U7XHJcbiAgICAgICAgICAgIC8vIFBhdGNoIHRoZSBGaXJlYmFzZUFwcEltcGwgcHJvdG90eXBlXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgIGZpcmViYXNlQXBwSW1wbC5wcm90b3R5cGVbY29tcG9uZW50TmFtZV0gPVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhlIGVzbGludCBkaXNhYmxlIGNhbiBiZSByZW1vdmVkIGFuZCB0aGUgJ2lnbm9yZVJlc3RBcmdzJ1xyXG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uIGFkZGVkIHRvIHRoZSBuby1leHBsaWNpdC1hbnkgcnVsZSB3aGVuIEVTbGludCByZWxlYXNlcyBpdC5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlRnhuID0gdGhpcy5fZ2V0U2VydmljZS5iaW5kKHRoaXMsIGNvbXBvbmVudE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlRnhuLmFwcGx5KHRoaXMsIGNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyA/IGFyZ3MgOiBbXSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGNvbXBvbmVudCB0byBleGlzdGluZyBhcHAgaW5zdGFuY2VzXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gdHNsaWIuX192YWx1ZXMoT2JqZWN0LmtleXMoYXBwcykpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXBwTmFtZSA9IF9jLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYXBwc1thcHBOYW1lXS5fYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQudHlwZSA9PT0gXCJQVUJMSUNcIiAvKiBQVUJMSUMgKi9cclxuICAgICAgICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlW2NvbXBvbmVudE5hbWVdXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyVmVyc2lvbihsaWJyYXJ5S2V5T3JOYW1lLCB2ZXJzaW9uLCB2YXJpYW50KSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIC8vIFRPRE86IFdlIGNhbiB1c2UgdGhpcyBjaGVjayB0byB3aGl0ZWxpc3Qgc3RyaW5ncyB3aGVuL2lmIHdlIHNldCB1cFxyXG4gICAgICAgIC8vIGEgZ29vZCB3aGl0ZWxpc3Qgc3lzdGVtLlxyXG4gICAgICAgIHZhciBsaWJyYXJ5ID0gKF9hID0gUExBVEZPUk1fTE9HX1NUUklOR1tsaWJyYXJ5S2V5T3JOYW1lXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbGlicmFyeUtleU9yTmFtZTtcclxuICAgICAgICBpZiAodmFyaWFudCkge1xyXG4gICAgICAgICAgICBsaWJyYXJ5ICs9IFwiLVwiICsgdmFyaWFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxpYnJhcnlNaXNtYXRjaCA9IGxpYnJhcnkubWF0Y2goL1xcc3xcXC8vKTtcclxuICAgICAgICB2YXIgdmVyc2lvbk1pc21hdGNoID0gdmVyc2lvbi5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2ggfHwgdmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgIHZhciB3YXJuaW5nID0gW1xyXG4gICAgICAgICAgICAgICAgXCJVbmFibGUgdG8gcmVnaXN0ZXIgbGlicmFyeSBcXFwiXCIgKyBsaWJyYXJ5ICsgXCJcXFwiIHdpdGggdmVyc2lvbiBcXFwiXCIgKyB2ZXJzaW9uICsgXCJcXFwiOlwiXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmcucHVzaChcImxpYnJhcnkgbmFtZSBcXFwiXCIgKyBsaWJyYXJ5ICsgXCJcXFwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcXFwiL1xcXCIpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2ggJiYgdmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nLnB1c2goJ2FuZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmcucHVzaChcInZlcnNpb24gbmFtZSBcXFwiXCIgKyB2ZXJzaW9uICsgXCJcXFwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcXFwiL1xcXCIpXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKHdhcm5pbmcuam9pbignICcpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWdpc3RlckNvbXBvbmVudChuZXcgY29tcG9uZW50LkNvbXBvbmVudChsaWJyYXJ5ICsgXCItdmVyc2lvblwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBsaWJyYXJ5OiBsaWJyYXJ5LCB2ZXJzaW9uOiB2ZXJzaW9uIH0pOyB9LCBcIlZFUlNJT05cIiAvKiBWRVJTSU9OICovKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbkxvZyhsb2dDYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChsb2dDYWxsYmFjayAhPT0gbnVsbCAmJiB0eXBlb2YgbG9nQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnZhbGlkLWxvZy1hcmd1bWVudFwiIC8qIElOVkFMSURfTE9HX0FSR1VNRU5UICovLCB7XHJcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBuYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIkMS5zZXRVc2VyTG9nSGFuZGxlcihsb2dDYWxsYmFjaywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvLyBNYXAgdGhlIHJlcXVlc3RlZCBzZXJ2aWNlIHRvIGEgcmVnaXN0ZXJlZCBzZXJ2aWNlIG5hbWVcclxuICAgIC8vICh1c2VkIHRvIG1hcCBhdXRoIHRvIHNlcnZlckF1dGggc2VydmljZSB3aGVuIG5lZWRlZCkuXHJcbiAgICBmdW5jdGlvbiB1c2VBc1NlcnZpY2UoYXBwLCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzZXJ2ZXJBdXRoJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVzZVNlcnZpY2UgPSBuYW1lO1xyXG4gICAgICAgIHJldHVybiB1c2VTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hbWVzcGFjZTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJuIGEgZmlyZWJhc2UgbmFtZXNwYWNlIG9iamVjdC5cclxuICpcclxuICogSW4gcHJvZHVjdGlvbiwgdGhpcyB3aWxsIGJlIGNhbGxlZCBleGFjdGx5IG9uY2UgYW5kIHRoZSByZXN1bHRcclxuICogYXNzaWduZWQgdG8gdGhlICdmaXJlYmFzZScgZ2xvYmFsLiAgSXQgbWF5IGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lc1xyXG4gKiBpbiB1bml0IHRlc3RzLlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRmlyZWJhc2VOYW1lc3BhY2UoKSB7XHJcbiAgICB2YXIgbmFtZXNwYWNlID0gY3JlYXRlRmlyZWJhc2VOYW1lc3BhY2VDb3JlKEZpcmViYXNlQXBwSW1wbCk7XHJcbiAgICBuYW1lc3BhY2UuSU5URVJOQUwgPSB0c2xpYi5fX2Fzc2lnbih0c2xpYi5fX2Fzc2lnbih7fSwgbmFtZXNwYWNlLklOVEVSTkFMKSwgeyBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZTogY3JlYXRlRmlyZWJhc2VOYW1lc3BhY2UsXHJcbiAgICAgICAgZXh0ZW5kTmFtZXNwYWNlOiBleHRlbmROYW1lc3BhY2UsXHJcbiAgICAgICAgY3JlYXRlU3Vic2NyaWJlOiB1dGlsLmNyZWF0ZVN1YnNjcmliZSxcclxuICAgICAgICBFcnJvckZhY3Rvcnk6IHV0aWwuRXJyb3JGYWN0b3J5LFxyXG4gICAgICAgIGRlZXBFeHRlbmQ6IHV0aWwuZGVlcEV4dGVuZCB9KTtcclxuICAgIC8qKlxyXG4gICAgICogUGF0Y2ggdGhlIHRvcC1sZXZlbCBmaXJlYmFzZSBuYW1lc3BhY2Ugd2l0aCBhZGRpdGlvbmFsIHByb3BlcnRpZXMuXHJcbiAgICAgKlxyXG4gICAgICogZmlyZWJhc2UuSU5URVJOQUwuZXh0ZW5kTmFtZXNwYWNlKClcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZXh0ZW5kTmFtZXNwYWNlKHByb3BzKSB7XHJcbiAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKG5hbWVzcGFjZSwgcHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hbWVzcGFjZTtcclxufVxyXG52YXIgZmlyZWJhc2UgPSBjcmVhdGVGaXJlYmFzZU5hbWVzcGFjZSgpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgLy8gSW4gaW5pdGlhbCBpbXBsZW1lbnRhdGlvbiwgdGhpcyB3aWxsIGJlIGNhbGxlZCBieSBpbnN0YWxsYXRpb25zIG9uXHJcbiAgICAvLyBhdXRoIHRva2VuIHJlZnJlc2gsIGFuZCBpbnN0YWxsYXRpb25zIHdpbGwgc2VuZCB0aGlzIHN0cmluZy5cclxuICAgIFBsYXRmb3JtTG9nZ2VyU2VydmljZS5wcm90b3R5cGUuZ2V0UGxhdGZvcm1JbmZvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwcm92aWRlcnMgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKTtcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggcHJvdmlkZXJzIGFuZCBnZXQgbGlicmFyeS92ZXJzaW9uIHBhaXJzIGZyb20gYW55IHRoYXQgYXJlXHJcbiAgICAgICAgLy8gdmVyc2lvbiBjb21wb25lbnRzLlxyXG4gICAgICAgIHJldHVybiBwcm92aWRlcnNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgICAgICAgICAgaWYgKGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0gcHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZS5saWJyYXJ5ICsgXCIvXCIgKyBzZXJ2aWNlLnZlcnNpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGxvZ1N0cmluZykgeyByZXR1cm4gbG9nU3RyaW5nOyB9KVxyXG4gICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF0Zm9ybUxvZ2dlclNlcnZpY2U7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvdmlkZXIgY2hlY2sgaWYgdGhpcyBwcm92aWRlciBwcm92aWRlcyBhIFZlcnNpb25TZXJ2aWNlXHJcbiAqXHJcbiAqIE5PVEU6IFVzaW5nIFByb3ZpZGVyPCdhcHAtdmVyc2lvbic+IGlzIGEgaGFjayB0byBpbmRpY2F0ZSB0aGF0IHRoZSBwcm92aWRlclxyXG4gKiBwcm92aWRlcyBWZXJzaW9uU2VydmljZS4gVGhlIHByb3ZpZGVyIGlzIG5vdCBuZWNlc3NhcmlseSBhICdhcHAtdmVyc2lvbidcclxuICogcHJvdmlkZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXIpIHtcclxuICAgIHZhciBjb21wb25lbnQgPSBwcm92aWRlci5nZXRDb21wb25lbnQoKTtcclxuICAgIHJldHVybiAoY29tcG9uZW50ID09PSBudWxsIHx8IGNvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcG9uZW50LnR5cGUpID09PSBcIlZFUlNJT05cIiAvKiBWRVJTSU9OICovO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29yZUNvbXBvbmVudHMoZmlyZWJhc2UsIHZhcmlhbnQpIHtcclxuICAgIGZpcmViYXNlLklOVEVSTkFMLnJlZ2lzdGVyQ29tcG9uZW50KG5ldyBjb21wb25lbnQuQ29tcG9uZW50KCdwbGF0Zm9ybS1sb2dnZXInLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7IHJldHVybiBuZXcgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlKGNvbnRhaW5lcik7IH0sIFwiUFJJVkFURVwiIC8qIFBSSVZBVEUgKi8pKTtcclxuICAgIC8vIFJlZ2lzdGVyIGBhcHBgIHBhY2thZ2UuXHJcbiAgICBmaXJlYmFzZS5yZWdpc3RlclZlcnNpb24obmFtZSQxLCB2ZXJzaW9uLCB2YXJpYW50KTtcclxuICAgIC8vIFJlZ2lzdGVyIHBsYXRmb3JtIFNESyBpZGVudGlmaWVyIChubyB2ZXJzaW9uKS5cclxuICAgIGZpcmViYXNlLnJlZ2lzdGVyVmVyc2lvbignZmlyZS1qcycsICcnKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vLyBGaXJlYmFzZSBMaXRlIGRldGVjdGlvbiB0ZXN0XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmlmICh1dGlsLmlzQnJvd3NlcigpICYmIHNlbGYuZmlyZWJhc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgbG9nZ2VyLndhcm4oXCJcXG4gICAgV2FybmluZzogRmlyZWJhc2UgaXMgYWxyZWFkeSBkZWZpbmVkIGluIHRoZSBnbG9iYWwgc2NvcGUuIFBsZWFzZSBtYWtlIHN1cmVcXG4gICAgRmlyZWJhc2UgbGlicmFyeSBpcyBvbmx5IGxvYWRlZCBvbmNlLlxcbiAgXCIpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB2YXIgc2RrVmVyc2lvbiA9IHNlbGYuZmlyZWJhc2UuU0RLX1ZFUlNJT047XHJcbiAgICBpZiAoc2RrVmVyc2lvbiAmJiBzZGtWZXJzaW9uLmluZGV4T2YoJ0xJVEUnKSA+PSAwKSB7XHJcbiAgICAgICAgbG9nZ2VyLndhcm4oXCJcXG4gICAgV2FybmluZzogWW91IGFyZSB0cnlpbmcgdG8gbG9hZCBGaXJlYmFzZSB3aGlsZSB1c2luZyBGaXJlYmFzZSBQZXJmb3JtYW5jZSBzdGFuZGFsb25lIHNjcmlwdC5cXG4gICAgWW91IHNob3VsZCBsb2FkIEZpcmViYXNlIFBlcmZvcm1hbmNlIHdpdGggdGhpcyBpbnN0YW5jZSBvZiBGaXJlYmFzZSB0byBhdm9pZCBsb2FkaW5nIGR1cGxpY2F0ZSBjb2RlLlxcbiAgICBcIik7XHJcbiAgICB9XHJcbn1cclxudmFyIGluaXRpYWxpemVBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwO1xyXG4vLyBUT0RPOiBUaGlzIGRpc2FibGUgY2FuIGJlIHJlbW92ZWQgYW5kIHRoZSAnaWdub3JlUmVzdEFyZ3MnIG9wdGlvbiBhZGRlZCB0b1xyXG4vLyB0aGUgbm8tZXhwbGljaXQtYW55IHJ1bGUgd2hlbiBFU2xpbnQgcmVsZWFzZXMgaXQuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICAvLyBFbnZpcm9ubWVudCBjaGVjayBiZWZvcmUgaW5pdGlhbGl6aW5nIGFwcFxyXG4gICAgLy8gRG8gdGhlIGNoZWNrIGluIGluaXRpYWxpemVBcHAsIHNvIHBlb3BsZSBoYXZlIGEgY2hhbmNlIHRvIGRpc2FibGUgaXQgYnkgc2V0dGluZyBsb2dMZXZlbFxyXG4gICAgLy8gaW4gQGZpcmViYXNlL2xvZ2dlclxyXG4gICAgaWYgKHV0aWwuaXNOb2RlKCkpIHtcclxuICAgICAgICBsb2dnZXIud2FybihcIlxcbiAgICAgIFdhcm5pbmc6IFRoaXMgaXMgYSBicm93c2VyLXRhcmdldGVkIEZpcmViYXNlIGJ1bmRsZSBidXQgaXQgYXBwZWFycyBpdCBpcyBiZWluZ1xcbiAgICAgIHJ1biBpbiBhIE5vZGUgZW52aXJvbm1lbnQuICBJZiBydW5uaW5nIGluIGEgTm9kZSBlbnZpcm9ubWVudCwgbWFrZSBzdXJlIHlvdVxcbiAgICAgIGFyZSB1c2luZyB0aGUgYnVuZGxlIHNwZWNpZmllZCBieSB0aGUgXFxcIm1haW5cXFwiIGZpZWxkIGluIHBhY2thZ2UuanNvbi5cXG4gICAgICBcXG4gICAgICBJZiB5b3UgYXJlIHVzaW5nIFdlYnBhY2ssIHlvdSBjYW4gc3BlY2lmeSBcXFwibWFpblxcXCIgYXMgdGhlIGZpcnN0IGl0ZW0gaW5cXG4gICAgICBcXFwicmVzb2x2ZS5tYWluRmllbGRzXFxcIjpcXG4gICAgICBodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vcmVzb2x2ZS8jcmVzb2x2ZW1haW5maWVsZHNcXG4gICAgICBcXG4gICAgICBJZiB1c2luZyBSb2xsdXAsIHVzZSB0aGUgcm9sbHVwLXBsdWdpbi1ub2RlLXJlc29sdmUgcGx1Z2luIGFuZCBzcGVjaWZ5IFxcXCJtYWluXFxcIlxcbiAgICAgIGFzIHRoZSBmaXJzdCBpdGVtIGluIFxcXCJtYWluRmllbGRzXFxcIiwgZS5nLiBbJ21haW4nLCAnbW9kdWxlJ10uXFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAtcGx1Z2luLW5vZGUtcmVzb2x2ZVxcbiAgICAgIFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbml0aWFsaXplQXBwLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XHJcbn07XHJcbnZhciBmaXJlYmFzZSQxID0gZmlyZWJhc2U7XHJcbnJlZ2lzdGVyQ29yZUNvbXBvbmVudHMoZmlyZWJhc2UkMSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZpcmViYXNlJDE7XG5leHBvcnRzLmZpcmViYXNlID0gZmlyZWJhc2UkMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHRzbGliID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnQGZpcmViYXNlL3V0aWwnKTtcblxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcclxuICovXHJcbnZhciBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgcHVibGljIHNlcnZpY2UgbmFtZSwgZS5nLiBhcHAsIGF1dGgsIGZpcmVzdG9yZSwgZGF0YWJhc2VcclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZUZhY3RvcnkgU2VydmljZSBmYWN0b3J5IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgcHVibGljIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIHR5cGUgd2hldGhlciB0aGUgc2VydmljZSBwcm92aWRlZCBieSB0aGUgY29tcG9uZW50IGlzIHB1YmxpYyBvciBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudChuYW1lLCBpbnN0YW5jZUZhY3RvcnksIHR5cGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VGYWN0b3J5ID0gaW5zdGFuY2VGYWN0b3J5O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByb3BlcnRpZXMgdG8gYmUgYWRkZWQgdG8gdGhlIHNlcnZpY2UgbmFtZXNwYWNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlUHJvcHMgPSB7fTtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25Nb2RlID0gXCJMQVpZXCIgLyogTEFaWSAqLztcclxuICAgIH1cclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0SW5zdGFudGlhdGlvbk1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBtb2RlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0TXVsdGlwbGVJbnN0YW5jZXMgPSBmdW5jdGlvbiAobXVsdGlwbGVJbnN0YW5jZXMpIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gbXVsdGlwbGVJbnN0YW5jZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTZXJ2aWNlUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGVyIGZvciBpbnN0YW5jZSBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gJ2F1dGgnLCAnYXV0aC1pbnRlcm5hbCdcclxuICogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIGlzIGFuIGFsaWFzIGZvciB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2VcclxuICovXHJcbnZhciBQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKG5hbWUsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBpZGVudGlmaWVyIEEgcHJvdmlkZXIgY2FuIHByb3ZpZGUgbXVsaXRwbGUgaW5zdGFuY2VzIG9mIGEgc2VydmljZVxyXG4gICAgICogaWYgdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIgPT09IHZvaWQgMCkgeyBpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FOyB9XHJcbiAgICAgICAgLy8gaWYgbXVsdGlwbGVJbnN0YW5jZXMgaXMgbm90IHN1cHBvcnRlZCwgdXNlIHRoZSBkZWZhdWx0IG5hbWVcclxuICAgICAgICB2YXIgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuaGFzKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBuZXcgdXRpbC5EZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2VydmljZSBpbnN0YW5jZSBpcyBhdmFpbGFibGUsIHJlc29sdmUgdGhlIHByb21pc2Ugd2l0aCBpdCBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IHRocm93cyBhbiBleGNlcHRpb24gZHVyaW5nIGdldCgpLCBpdCBzaG91bGQgbm90IGNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IHJldHVybiB0aGUgdW5yZXNvbHZlZCBwcm9taXNlIGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpLnByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldEltbWVkaWF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdHNsaWIuX19hc3NpZ24oeyBpZGVudGlmaWVyOiBERUZBVUxUX0VOVFJZX05BTUUsIG9wdGlvbmFsOiBmYWxzZSB9LCBvcHRpb25zKSwgaWRlbnRpZmllciA9IF9hLmlkZW50aWZpZXIsIG9wdGlvbmFsID0gX2Eub3B0aW9uYWw7XHJcbiAgICAgICAgLy8gaWYgbXVsdGlwbGVJbnN0YW5jZXMgaXMgbm90IHN1cHBvcnRlZCwgdXNlIHRoZSBkZWZhdWx0IG5hbWVcclxuICAgICAgICB2YXIgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uobm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiU2VydmljZSBcIiArIHRoaXMubmFtZSArIFwiIGlzIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuc2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBlXzEsIF9hO1xyXG4gICAgICAgIGlmIChjb21wb25lbnQubmFtZSAhPT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTWlzbWF0Y2hpbmcgQ29tcG9uZW50IFwiICsgY29tcG9uZW50Lm5hbWUgKyBcIiBmb3IgUHJvdmlkZXIgXCIgKyB0aGlzLm5hbWUgKyBcIi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkNvbXBvbmVudCBmb3IgXCIgKyB0aGlzLm5hbWUgKyBcIiBoYXMgYWxyZWFkeSBiZWVuIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICAvLyBpZiB0aGUgc2VydmljZSBpcyBlYWdlciwgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZVxyXG4gICAgICAgIGlmIChpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZShERUZBVUxUX0VOVFJZX05BTUUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IGZvciBhbiBlYWdlciBDb21wb25lbnQgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgdGhlIGVhZ2VyXHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXphdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZSBhIGZhdGFsIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW52ZXN0aWdhdGUgaWYgd2UgbmVlZCB0byBtYWtlIGl0IGNvbmZpZ3VyYWJsZSwgYmVjYXVzZSBzb21lIGNvbXBvbmVudCBtYXkgd2FudCB0byBjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvciBpbiB0aGlzIGNhc2U/XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNlcnZpY2UgaW5zdGFuY2VzIGZvciB0aGUgcGVuZGluZyBwcm9taXNlcyBhbmQgcmVzb2x2ZSB0aGVtXHJcbiAgICAgICAgICAgIC8vIE5PVEU6IGlmIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgaXMgZmFsc2UsIG9ubHkgdGhlIGRlZmF1bHQgaW5zdGFuY2Ugd2lsbCBiZSBjcmVhdGVkXHJcbiAgICAgICAgICAgIC8vIGFuZCBhbGwgcHJvbWlzZXMgd2l0aCByZXNvbHZlIHdpdGggaXQgcmVnYXJkbGVzcyBvZiB0aGUgaWRlbnRpZmllci5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSB0c2xpYi5fX3ZhbHVlcyh0aGlzLmluc3RhbmNlc0RlZmVycmVkLmVudHJpZXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfZCA9IHRzbGliLl9fcmVhZChfYy52YWx1ZSwgMiksIGluc3RhbmNlSWRlbnRpZmllciA9IF9kWzBdLCBpbnN0YW5jZURlZmVycmVkID0gX2RbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBgZ2V0T3JJbml0aWFsaXplU2VydmljZSgpYCBzaG91bGQgYWx3YXlzIHJldHVybiBhIHZhbGlkIGluc3RhbmNlIHNpbmNlIGEgY29tcG9uZW50IGlzIGd1YXJhbnRlZWQuIHVzZSAhIHRvIG1ha2UgdHlwZXNjcmlwdCBoYXBweS5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uobm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IuIFdlIGp1c3QgbGVhdmUgdGhlIHByb21pc2UgdW5yZXNvbHZlZC5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNsZWFySW5zdGFuY2UgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZGVsZXRlKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgIH07XHJcbiAgICAvLyBhcHAuZGVsZXRlKCkgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIG9uIGV2ZXJ5IHByb3ZpZGVyIHRvIGRlbGV0ZSB0aGUgc2VydmljZXNcclxuICAgIC8vIFRPRE86IHNob3VsZCB3ZSBtYXJrIHRoZSBwcm92aWRlciBhcyBkZWxldGVkP1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWIuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRzbGliLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZXMgPSBBcnJheS5mcm9tKHRoaXMuaW5zdGFuY2VzLnZhbHVlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoc2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXJ2aWNlKSB7IHJldHVybiAnSU5URVJOQUwnIGluIHNlcnZpY2U7IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXJ2aWNlKSB7IHJldHVybiBzZXJ2aWNlLklOVEVSTkFMLmRlbGV0ZSgpOyB9KSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5pc0NvbXBvbmVudFNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQgIT0gbnVsbDtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0T3JJbml0aWFsaXplU2VydmljZSA9IGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXMuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UgJiYgdGhpcy5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZUZhY3RvcnkodGhpcy5jb250YWluZXIsIG5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5KGlkZW50aWZpZXIpKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGlkZW50aWZpZXIsIGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlIHx8IG51bGw7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllciA9IGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyA/IGlkZW50aWZpZXIgOiBERUZBVUxUX0VOVFJZX05BTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllcjsgLy8gYXNzdW1lIG11bHRpcGxlIGluc3RhbmNlcyBhcmUgc3VwcG9ydGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHByb3ZpZGVkLlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUHJvdmlkZXI7XHJcbn0oKSk7XHJcbi8vIHVuZGVmaW5lZCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBzZXJ2aWNlIGZhY3RvcnkgZm9yIHRoZSBkZWZhdWx0IGluc3RhbmNlXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5KGlkZW50aWZpZXIpIHtcclxuICAgIHJldHVybiBpZGVudGlmaWVyID09PSBERUZBVUxUX0VOVFJZX05BTUUgPyB1bmRlZmluZWQgOiBpZGVudGlmaWVyO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ29tcG9uZW50RWFnZXIoY29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gY29tcG9uZW50Lmluc3RhbnRpYXRpb25Nb2RlID09PSBcIkVBR0VSXCIgLyogRUFHRVIgKi87XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIENvbXBvbmVudENvbnRhaW5lciB0aGF0IHByb3ZpZGVzIFByb3ZpZGVycyBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcclxuICovXHJcbnZhciBDb21wb25lbnRDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21wb25lbnRDb250YWluZXIobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBiZWluZyBhZGRlZFxyXG4gICAgICogQHBhcmFtIG92ZXJ3cml0ZSBXaGVuIGEgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgbmFtZSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQsXHJcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgdHJ1ZTogb3ZlcndyaXRlIHRoZSBleGlzdGluZyBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGNvbXBvbmVudCBhbmQgY3JlYXRlIGEgbmV3XHJcbiAgICAgKiBwcm92aWRlciB3aXRoIHRoZSBuZXcgY29tcG9uZW50LiBJdCBjYW4gYmUgdXNlZnVsIGluIHRlc3RzIHdoZXJlIHlvdSB3YW50IHRvIHVzZSBkaWZmZXJlbnQgbW9ja3NcclxuICAgICAqIGZvciBkaWZmZXJlbnQgdGVzdHMuXHJcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgZmFsc2U6IHRocm93IGFuIGV4Y2VwdGlvblxyXG4gICAgICovXHJcbiAgICBDb21wb25lbnRDb250YWluZXIucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb21wb25lbnQgXCIgKyBjb21wb25lbnQubmFtZSArIFwiIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCB3aXRoIFwiICsgdGhpcy5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdmlkZXIuc2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50Q29udGFpbmVyLnByb3RvdHlwZS5hZGRPck92ZXJ3cml0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIGV4aXN0aW5nIHByb3ZpZGVyIGZyb20gdGhlIGNvbnRhaW5lciwgc28gd2UgY2FuIHJlZ2lzdGVyIHRoZSBuZXcgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzLmRlbGV0ZShjb21wb25lbnQubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRQcm92aWRlciBwcm92aWRlcyBhIHR5cGUgc2FmZSBpbnRlcmZhY2Ugd2hlcmUgaXQgY2FuIG9ubHkgYmUgY2FsbGVkIHdpdGggYSBmaWVsZCBuYW1lXHJcbiAgICAgKiBwcmVzZW50IGluIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UuXHJcbiAgICAgKlxyXG4gICAgICogRmlyZWJhc2UgU0RLcyBwcm92aWRpbmcgc2VydmljZXMgc2hvdWxkIGV4dGVuZCBOYW1lU2VydmljZU1hcHBpbmcgaW50ZXJmYWNlIHRvIHJlZ2lzdGVyXHJcbiAgICAgKiB0aGVtc2VsdmVzLlxyXG4gICAgICovXHJcbiAgICBDb21wb25lbnRDb250YWluZXIucHJvdG90eXBlLmdldFByb3ZpZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVycy5nZXQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIFByb3ZpZGVyIGZvciBhIHNlcnZpY2UgdGhhdCBoYXNuJ3QgcmVnaXN0ZXJlZCB3aXRoIEZpcmViYXNlXHJcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IFByb3ZpZGVyKG5hbWUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzLnNldChuYW1lLCBwcm92aWRlcik7XHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudENvbnRhaW5lci5wcm90b3R5cGUuZ2V0UHJvdmlkZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucHJvdmlkZXJzLnZhbHVlcygpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29tcG9uZW50Q29udGFpbmVyO1xyXG59KCkpO1xuXG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuQ29tcG9uZW50Q29udGFpbmVyID0gQ29tcG9uZW50Q29udGFpbmVyO1xuZXhwb3J0cy5Qcm92aWRlciA9IFByb3ZpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguY2pzLmpzLm1hcFxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIF9hO1xyXG4vKipcclxuICogQSBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgTG9nZ2VyIGluc3RhbmNlc1xyXG4gKi9cclxudmFyIGluc3RhbmNlcyA9IFtdO1xyXG4vKipcclxuICogVGhlIEpTIFNESyBzdXBwb3J0cyA1IGxvZyBsZXZlbHMgYW5kIGFsc28gYWxsb3dzIGEgdXNlciB0aGUgYWJpbGl0eSB0b1xyXG4gKiBzaWxlbmNlIHRoZSBsb2dzIGFsdG9nZXRoZXIuXHJcbiAqXHJcbiAqIFRoZSBvcmRlciBpcyBhIGZvbGxvd3M6XHJcbiAqIERFQlVHIDwgVkVSQk9TRSA8IElORk8gPCBXQVJOIDwgRVJST1JcclxuICpcclxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIHdpbGwgYmUgY2FwdHVyZWQgKGkuZS4gaWZcclxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBJTkZPYCwgZXJyb3JzIHdpbGwgc3RpbGwgYmUgbG9nZ2VkLCBidXQgYERFQlVHYCBhbmRcclxuICogYFZFUkJPU0VgIGxvZ3Mgd2lsbCBub3QpXHJcbiAqL1xyXG52YXIgTG9nTGV2ZWw7XHJcbihmdW5jdGlvbiAoTG9nTGV2ZWwpIHtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiREVCVUdcIl0gPSAwXSA9IFwiREVCVUdcIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiVkVSQk9TRVwiXSA9IDFdID0gXCJWRVJCT1NFXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIklORk9cIl0gPSAyXSA9IFwiSU5GT1wiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJXQVJOXCJdID0gM10gPSBcIldBUk5cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRVJST1JcIl0gPSA0XSA9IFwiRVJST1JcIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiU0lMRU5UXCJdID0gNV0gPSBcIlNJTEVOVFwiO1xyXG59KShMb2dMZXZlbCB8fCAoTG9nTGV2ZWwgPSB7fSkpO1xyXG52YXIgbGV2ZWxTdHJpbmdUb0VudW0gPSB7XHJcbiAgICAnZGVidWcnOiBMb2dMZXZlbC5ERUJVRyxcclxuICAgICd2ZXJib3NlJzogTG9nTGV2ZWwuVkVSQk9TRSxcclxuICAgICdpbmZvJzogTG9nTGV2ZWwuSU5GTyxcclxuICAgICd3YXJuJzogTG9nTGV2ZWwuV0FSTixcclxuICAgICdlcnJvcic6IExvZ0xldmVsLkVSUk9SLFxyXG4gICAgJ3NpbGVudCc6IExvZ0xldmVsLlNJTEVOVFxyXG59O1xyXG4vKipcclxuICogVGhlIGRlZmF1bHQgbG9nIGxldmVsXHJcbiAqL1xyXG52YXIgZGVmYXVsdExvZ0xldmVsID0gTG9nTGV2ZWwuSU5GTztcclxuLyoqXHJcbiAqIEJ5IGRlZmF1bHQsIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgZGlzcGxheWVkIGluIHRoZSBkZXZlbG9wZXIgY29uc29sZSAoaW5cclxuICogY2hyb21lKS4gVG8gYXZvaWQgZm9yY2luZyB1c2VycyB0byBoYXZlIHRvIG9wdC1pbiB0byB0aGVzZSBsb2dzIHR3aWNlXHJcbiAqIChpLmUuIG9uY2UgZm9yIGZpcmViYXNlLCBhbmQgb25jZSBpbiB0aGUgY29uc29sZSksIHdlIGFyZSBzZW5kaW5nIGBERUJVR2BcclxuICogbG9ncyB0byB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbi5cclxuICovXHJcbnZhciBDb25zb2xlTWV0aG9kID0gKF9hID0ge30sXHJcbiAgICBfYVtMb2dMZXZlbC5ERUJVR10gPSAnbG9nJyxcclxuICAgIF9hW0xvZ0xldmVsLlZFUkJPU0VdID0gJ2xvZycsXHJcbiAgICBfYVtMb2dMZXZlbC5JTkZPXSA9ICdpbmZvJyxcclxuICAgIF9hW0xvZ0xldmVsLldBUk5dID0gJ3dhcm4nLFxyXG4gICAgX2FbTG9nTGV2ZWwuRVJST1JdID0gJ2Vycm9yJyxcclxuICAgIF9hKTtcclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGxvZyBoYW5kbGVyIHdpbGwgZm9yd2FyZCBERUJVRywgVkVSQk9TRSwgSU5GTywgV0FSTiwgYW5kIEVSUk9SXHJcbiAqIG1lc3NhZ2VzIG9uIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uc29sZSBjb3VudGVycGFydHMgKGlmIHRoZSBsb2cgbWV0aG9kXHJcbiAqIGlzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBsb2cgbGV2ZWwpXHJcbiAqL1xyXG52YXIgZGVmYXVsdExvZ0hhbmRsZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIGxvZ1R5cGUpIHtcclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAobG9nVHlwZSA8IGluc3RhbmNlLmxvZ0xldmVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgIHZhciBtZXRob2QgPSBDb25zb2xlTWV0aG9kW2xvZ1R5cGVdO1xyXG4gICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5cyhbXCJbXCIgKyBub3cgKyBcIl0gIFwiICsgaW5zdGFuY2UubmFtZSArIFwiOlwiXSwgYXJncykpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIGxvZyBhIG1lc3NhZ2Ugd2l0aCBhbiBpbnZhbGlkIGxvZ1R5cGUgKHZhbHVlOiBcIiArIGxvZ1R5cGUgKyBcIilcIik7XHJcbiAgICB9XHJcbn07XHJcbnZhciBMb2dnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEdpdmVzIHlvdSBhbiBpbnN0YW5jZSBvZiBhIExvZ2dlciB0byBjYXB0dXJlIG1lc3NhZ2VzIGFjY29yZGluZyB0b1xyXG4gICAgICogRmlyZWJhc2UncyBsb2dnaW5nIHNjaGVtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSB0aGF0IHRoZSBsb2dzIHdpbGwgYmUgYXNzb2NpYXRlZCB3aXRoXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIExvZ2dlcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbG9nIGxldmVsIG9mIHRoZSBnaXZlbiBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSBkZWZhdWx0TG9nTGV2ZWw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1haW4gKGludGVybmFsKSBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKiBDYW4gYmUgc2V0IHRvIGEgbmV3IGZ1bmN0aW9uIGluIGludGVybmFsIHBhY2thZ2UgY29kZSBidXQgbm90IGJ5IHVzZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlciA9IGRlZmF1bHRMb2dIYW5kbGVyO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvcHRpb25hbCwgYWRkaXRpb25hbCwgdXNlci1kZWZpbmVkIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYXB0dXJlIHRoZSBjdXJyZW50IGluc3RhbmNlIGZvciBsYXRlciB1c2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb2dnZXIucHJvdG90eXBlLCBcImxvZ0xldmVsXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0xldmVsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICghKHZhbCBpbiBMb2dMZXZlbCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHZhbHVlIFxcXCJcIiArIHZhbCArIFwiXFxcIiBhc3NpZ25lZCB0byBgbG9nTGV2ZWxgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLy8gV29ya2Fyb3VuZCBmb3Igc2V0dGVyL2dldHRlciBoYXZpbmcgdG8gYmUgdGhlIHNhbWUgdHlwZS5cclxuICAgIExvZ2dlci5wcm90b3R5cGUuc2V0TG9nTGV2ZWwgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IGxldmVsU3RyaW5nVG9FbnVtW3ZhbF0gOiB2YWw7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExvZ2dlci5wcm90b3R5cGUsIFwibG9nSGFuZGxlclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2dIYW5kbGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBhc3NpZ25lZCB0byBgbG9nSGFuZGxlcmAgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbG9nSGFuZGxlciA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb2dnZXIucHJvdG90eXBlLCBcInVzZXJMb2dIYW5kbGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJMb2dIYW5kbGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZnVuY3Rpb25zIGJlbG93IGFyZSBhbGwgYmFzZWQgb24gdGhlIGBjb25zb2xlYCBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLkRFQlVHXSwgYXJncykpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLkRFQlVHXSwgYXJncykpO1xyXG4gICAgfTtcclxuICAgIExvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlci5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbdGhpcywgTG9nTGV2ZWwuVkVSQk9TRV0sIGFyZ3MpKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5WRVJCT1NFXSwgYXJncykpO1xyXG4gICAgfTtcclxuICAgIExvZ2dlci5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLklORk9dLCBhcmdzKSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlci5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbdGhpcywgTG9nTGV2ZWwuSU5GT10sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5XQVJOXSwgYXJncykpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLldBUk5dLCBhcmdzKSk7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLkVSUk9SXSwgYXJncykpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLkVSUk9SXSwgYXJncykpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMb2dnZXI7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7XHJcbiAgICBpbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zdCkge1xyXG4gICAgICAgIGluc3Quc2V0TG9nTGV2ZWwobGV2ZWwpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc2V0VXNlckxvZ0hhbmRsZXIobG9nQ2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIGN1c3RvbUxvZ0xldmVsID0gbnVsbDtcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxldmVsKSB7XHJcbiAgICAgICAgICAgIGN1c3RvbUxvZ0xldmVsID0gbGV2ZWxTdHJpbmdUb0VudW1bb3B0aW9ucy5sZXZlbF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2dDYWxsYmFjayA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS51c2VyTG9nSGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS51c2VyTG9nSGFuZGxlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgbGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IGFyZ3NcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8IHR5cGVvZiBhcmcgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoaWdub3JlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gYXJnOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPj0gKGN1c3RvbUxvZ0xldmVsICE9PSBudWxsICYmIGN1c3RvbUxvZ0xldmVsICE9PSB2b2lkIDAgPyBjdXN0b21Mb2dMZXZlbCA6IGluc3RhbmNlLmxvZ0xldmVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0NhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IExvZ0xldmVsW2xldmVsXS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpbnN0YW5jZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgaW5zdGFuY2VzXzEgPSBpbnN0YW5jZXM7IF9pIDwgaW5zdGFuY2VzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gaW5zdGFuY2VzXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzEoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IExvZ0xldmVsLCBMb2dnZXIsIHNldExvZ0xldmVsLCBzZXRVc2VyTG9nSGFuZGxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciwgX19zcHJlYWRBcnJheXMgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgQ29uc3RhbnRzIHVzZWQgaW4gdGhlIEZpcmViYXNlIFN0b3JhZ2UgbGlicmFyeS5cclxuICovXHJcbi8qKlxyXG4gKiBEb21haW4gbmFtZSBmb3IgZmlyZWJhc2Ugc3RvcmFnZS5cclxuICovXHJcbnZhciBERUZBVUxUX0hPU1QgPSAnZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tJztcclxuLyoqXHJcbiAqIFRoZSBrZXkgaW4gRmlyZWJhc2UgY29uZmlnIGpzb24gZm9yIHRoZSBzdG9yYWdlIGJ1Y2tldC5cclxuICovXHJcbnZhciBDT05GSUdfU1RPUkFHRV9CVUNLRVRfS0VZID0gJ3N0b3JhZ2VCdWNrZXQnO1xyXG4vKipcclxuICogMiBtaW51dGVzXHJcbiAqXHJcbiAqIFRoZSB0aW1lb3V0IGZvciBhbGwgb3BlcmF0aW9ucyBleGNlcHQgdXBsb2FkLlxyXG4gKi9cclxudmFyIERFRkFVTFRfTUFYX09QRVJBVElPTl9SRVRSWV9USU1FID0gMiAqIDYwICogMTAwMDtcclxuLyoqXHJcbiAqIDEwIG1pbnV0ZXNcclxuICpcclxuICogVGhlIHRpbWVvdXQgZm9yIHVwbG9hZC5cclxuICovXHJcbnZhciBERUZBVUxUX01BWF9VUExPQURfUkVUUllfVElNRSA9IDEwICogNjAgKiAxMDAwO1xyXG4vKipcclxuICogVGhpcyBpcyB0aGUgdmFsdWUgb2YgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsIHdoaWNoIGlzIG5vdCB3ZWxsIHN1cHBvcnRlZFxyXG4gKiBlbm91Z2ggZm9yIHVzIHRvIHVzZSBpdCBkaXJlY3RseS5cclxuICovXHJcbnZhciBNSU5fU0FGRV9JTlRFR0VSID0gLTkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBGaXJlYmFzZVN0b3JhZ2VFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZpcmViYXNlU3RvcmFnZUVycm9yKGNvZGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLmNvZGVfID0gcHJlcGVuZENvZGUoY29kZSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlXyA9ICdGaXJlYmFzZSBTdG9yYWdlOiAnICsgbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnNlcnZlclJlc3BvbnNlXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uYW1lXyA9ICdGaXJlYmFzZUVycm9yJztcclxuICAgIH1cclxuICAgIEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZS5jb2RlUHJvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2RlO1xyXG4gICAgfTtcclxuICAgIEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZS5jb2RlRXF1YWxzID0gZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgICAgICByZXR1cm4gcHJlcGVuZENvZGUoY29kZSkgPT09IHRoaXMuY29kZVByb3AoKTtcclxuICAgIH07XHJcbiAgICBGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUuc2VydmVyUmVzcG9uc2VQcm9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZlclJlc3BvbnNlXztcclxuICAgIH07XHJcbiAgICBGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUuc2V0U2VydmVyUmVzcG9uc2VQcm9wID0gZnVuY3Rpb24gKHNlcnZlclJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJSZXNwb25zZV8gPSBzZXJ2ZXJSZXNwb25zZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VTdG9yYWdlRXJyb3IucHJvdG90eXBlLCBcIm5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaXJlYmFzZVN0b3JhZ2VFcnJvci5wcm90b3R5cGUsIFwiY29kZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvZGVfO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpcmViYXNlU3RvcmFnZUVycm9yLnByb3RvdHlwZSwgXCJtZXNzYWdlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZV87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmlyZWJhc2VTdG9yYWdlRXJyb3IucHJvdG90eXBlLCBcInNlcnZlclJlc3BvbnNlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVyUmVzcG9uc2VfO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEZpcmViYXNlU3RvcmFnZUVycm9yO1xyXG59KCkpO1xyXG52YXIgQ29kZSA9IHtcclxuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIGFsbCBwbGF0Zm9ybXNcclxuICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICAgIE9CSkVDVF9OT1RfRk9VTkQ6ICdvYmplY3Qtbm90LWZvdW5kJyxcclxuICAgIEJVQ0tFVF9OT1RfRk9VTkQ6ICdidWNrZXQtbm90LWZvdW5kJyxcclxuICAgIFBST0pFQ1RfTk9UX0ZPVU5EOiAncHJvamVjdC1ub3QtZm91bmQnLFxyXG4gICAgUVVPVEFfRVhDRUVERUQ6ICdxdW90YS1leGNlZWRlZCcsXHJcbiAgICBVTkFVVEhFTlRJQ0FURUQ6ICd1bmF1dGhlbnRpY2F0ZWQnLFxyXG4gICAgVU5BVVRIT1JJWkVEOiAndW5hdXRob3JpemVkJyxcclxuICAgIFJFVFJZX0xJTUlUX0VYQ0VFREVEOiAncmV0cnktbGltaXQtZXhjZWVkZWQnLFxyXG4gICAgSU5WQUxJRF9DSEVDS1NVTTogJ2ludmFsaWQtY2hlY2tzdW0nLFxyXG4gICAgQ0FOQ0VMRUQ6ICdjYW5jZWxlZCcsXHJcbiAgICAvLyBKUyBzcGVjaWZpY1xyXG4gICAgSU5WQUxJRF9FVkVOVF9OQU1FOiAnaW52YWxpZC1ldmVudC1uYW1lJyxcclxuICAgIElOVkFMSURfVVJMOiAnaW52YWxpZC11cmwnLFxyXG4gICAgSU5WQUxJRF9ERUZBVUxUX0JVQ0tFVDogJ2ludmFsaWQtZGVmYXVsdC1idWNrZXQnLFxyXG4gICAgTk9fREVGQVVMVF9CVUNLRVQ6ICduby1kZWZhdWx0LWJ1Y2tldCcsXHJcbiAgICBDQU5OT1RfU0xJQ0VfQkxPQjogJ2Nhbm5vdC1zbGljZS1ibG9iJyxcclxuICAgIFNFUlZFUl9GSUxFX1dST05HX1NJWkU6ICdzZXJ2ZXItZmlsZS13cm9uZy1zaXplJyxcclxuICAgIE5PX0RPV05MT0FEX1VSTDogJ25vLWRvd25sb2FkLXVybCcsXHJcbiAgICBJTlZBTElEX0FSR1VNRU5UOiAnaW52YWxpZC1hcmd1bWVudCcsXHJcbiAgICBJTlZBTElEX0FSR1VNRU5UX0NPVU5UOiAnaW52YWxpZC1hcmd1bWVudC1jb3VudCcsXHJcbiAgICBBUFBfREVMRVRFRDogJ2FwcC1kZWxldGVkJyxcclxuICAgIElOVkFMSURfUk9PVF9PUEVSQVRJT046ICdpbnZhbGlkLXJvb3Qtb3BlcmF0aW9uJyxcclxuICAgIElOVkFMSURfRk9STUFUOiAnaW52YWxpZC1mb3JtYXQnLFxyXG4gICAgSU5URVJOQUxfRVJST1I6ICdpbnRlcm5hbC1lcnJvcidcclxufTtcclxuZnVuY3Rpb24gcHJlcGVuZENvZGUoY29kZSkge1xyXG4gICAgcmV0dXJuICdzdG9yYWdlLycgKyBjb2RlO1xyXG59XHJcbmZ1bmN0aW9uIHVua25vd24oKSB7XHJcbiAgICB2YXIgbWVzc2FnZSA9ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgY2hlY2sgdGhlIGVycm9yIHBheWxvYWQgZm9yICcgK1xyXG4gICAgICAgICdzZXJ2ZXIgcmVzcG9uc2UuJztcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5VTktOT1dOLCBtZXNzYWdlKTtcclxufVxyXG5mdW5jdGlvbiBvYmplY3ROb3RGb3VuZChwYXRoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuT0JKRUNUX05PVF9GT1VORCwgXCJPYmplY3QgJ1wiICsgcGF0aCArIFwiJyBkb2VzIG5vdCBleGlzdC5cIik7XHJcbn1cclxuZnVuY3Rpb24gcXVvdGFFeGNlZWRlZChidWNrZXQpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5RVU9UQV9FWENFRURFRCwgXCJRdW90YSBmb3IgYnVja2V0ICdcIiArXHJcbiAgICAgICAgYnVja2V0ICtcclxuICAgICAgICBcIicgZXhjZWVkZWQsIHBsZWFzZSB2aWV3IHF1b3RhIG9uIFwiICtcclxuICAgICAgICAnaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3ByaWNpbmcvLicpO1xyXG59XHJcbmZ1bmN0aW9uIHVuYXV0aGVudGljYXRlZCgpIHtcclxuICAgIHZhciBtZXNzYWdlID0gJ1VzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQsIHBsZWFzZSBhdXRoZW50aWNhdGUgdXNpbmcgRmlyZWJhc2UgJyArXHJcbiAgICAgICAgJ0F1dGhlbnRpY2F0aW9uIGFuZCB0cnkgYWdhaW4uJztcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5VTkFVVEhFTlRJQ0FURUQsIG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIHVuYXV0aG9yaXplZChwYXRoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuVU5BVVRIT1JJWkVELCBcIlVzZXIgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyAnXCIgKyBwYXRoICsgXCInLlwiKTtcclxufVxyXG5mdW5jdGlvbiByZXRyeUxpbWl0RXhjZWVkZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuUkVUUllfTElNSVRfRVhDRUVERUQsICdNYXggcmV0cnkgdGltZSBmb3Igb3BlcmF0aW9uIGV4Y2VlZGVkLCBwbGVhc2UgdHJ5IGFnYWluLicpO1xyXG59XHJcbmZ1bmN0aW9uIGNhbmNlbGVkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLkNBTkNFTEVELCAnVXNlciBjYW5jZWxlZCB0aGUgdXBsb2FkL2Rvd25sb2FkLicpO1xyXG59XHJcbmZ1bmN0aW9uIGludmFsaWRVcmwodXJsKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuSU5WQUxJRF9VUkwsIFwiSW52YWxpZCBVUkwgJ1wiICsgdXJsICsgXCInLlwiKTtcclxufVxyXG5mdW5jdGlvbiBpbnZhbGlkRGVmYXVsdEJ1Y2tldChidWNrZXQpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5JTlZBTElEX0RFRkFVTFRfQlVDS0VULCBcIkludmFsaWQgZGVmYXVsdCBidWNrZXQgJ1wiICsgYnVja2V0ICsgXCInLlwiKTtcclxufVxyXG5mdW5jdGlvbiBjYW5ub3RTbGljZUJsb2IoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuQ0FOTk9UX1NMSUNFX0JMT0IsICdDYW5ub3Qgc2xpY2UgYmxvYiBmb3IgdXBsb2FkLiBQbGVhc2UgcmV0cnkgdGhlIHVwbG9hZC4nKTtcclxufVxyXG5mdW5jdGlvbiBzZXJ2ZXJGaWxlV3JvbmdTaXplKCkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLlNFUlZFUl9GSUxFX1dST05HX1NJWkUsICdTZXJ2ZXIgcmVjb3JkZWQgaW5jb3JyZWN0IHVwbG9hZCBmaWxlIHNpemUsIHBsZWFzZSByZXRyeSB0aGUgdXBsb2FkLicpO1xyXG59XHJcbmZ1bmN0aW9uIG5vRG93bmxvYWRVUkwoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuTk9fRE9XTkxPQURfVVJMLCAnVGhlIGdpdmVuIGZpbGUgZG9lcyBub3QgaGF2ZSBhbnkgZG93bmxvYWQgVVJMcy4nKTtcclxufVxyXG5mdW5jdGlvbiBpbnZhbGlkQXJndW1lbnQoaW5kZXgsIGZuTmFtZSwgbWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLklOVkFMSURfQVJHVU1FTlQsICdJbnZhbGlkIGFyZ3VtZW50IGluIGAnICsgZm5OYW1lICsgJ2AgYXQgaW5kZXggJyArIGluZGV4ICsgJzogJyArIG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIGludmFsaWRBcmd1bWVudENvdW50KGFyZ01pbiwgYXJnTWF4LCBmbk5hbWUsIHJlYWwpIHtcclxuICAgIHZhciBjb3VudFBhcnQ7XHJcbiAgICB2YXIgcGx1cmFsO1xyXG4gICAgaWYgKGFyZ01pbiA9PT0gYXJnTWF4KSB7XHJcbiAgICAgICAgY291bnRQYXJ0ID0gYXJnTWluO1xyXG4gICAgICAgIHBsdXJhbCA9IGFyZ01pbiA9PT0gMSA/ICdhcmd1bWVudCcgOiAnYXJndW1lbnRzJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvdW50UGFydCA9ICdiZXR3ZWVuICcgKyBhcmdNaW4gKyAnIGFuZCAnICsgYXJnTWF4O1xyXG4gICAgICAgIHBsdXJhbCA9ICdhcmd1bWVudHMnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBGaXJlYmFzZVN0b3JhZ2VFcnJvcihDb2RlLklOVkFMSURfQVJHVU1FTlRfQ09VTlQsICdJbnZhbGlkIGFyZ3VtZW50IGNvdW50IGluIGAnICtcclxuICAgICAgICBmbk5hbWUgK1xyXG4gICAgICAgICdgOiBFeHBlY3RlZCAnICtcclxuICAgICAgICBjb3VudFBhcnQgK1xyXG4gICAgICAgICcgJyArXHJcbiAgICAgICAgcGx1cmFsICtcclxuICAgICAgICAnLCByZWNlaXZlZCAnICtcclxuICAgICAgICByZWFsICtcclxuICAgICAgICAnLicpO1xyXG59XHJcbmZ1bmN0aW9uIGFwcERlbGV0ZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuQVBQX0RFTEVURUQsICdUaGUgRmlyZWJhc2UgYXBwIHdhcyBkZWxldGVkLicpO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgd2FzIGludmFsaWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZhbGlkUm9vdE9wZXJhdGlvbihuYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcmViYXNlU3RvcmFnZUVycm9yKENvZGUuSU5WQUxJRF9ST09UX09QRVJBVElPTiwgXCJUaGUgb3BlcmF0aW9uICdcIiArXHJcbiAgICAgICAgbmFtZSArXHJcbiAgICAgICAgXCInIGNhbm5vdCBiZSBwZXJmb3JtZWQgb24gYSByb290IHJlZmVyZW5jZSwgY3JlYXRlIGEgbm9uLXJvb3QgXCIgK1xyXG4gICAgICAgIFwicmVmZXJlbmNlIHVzaW5nIGNoaWxkLCBzdWNoIGFzIC5jaGlsZCgnZmlsZS5wbmcnKS5cIik7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBmb3JtYXQgVGhlIGZvcm1hdCB0aGF0IHdhcyBub3QgdmFsaWQuXHJcbiAqIEBwYXJhbSBtZXNzYWdlIEEgbWVzc2FnZSBkZXNjcmliaW5nIHRoZSBmb3JtYXQgdmlvbGF0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gaW52YWxpZEZvcm1hdChmb3JtYXQsIG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5JTlZBTElEX0ZPUk1BVCwgXCJTdHJpbmcgZG9lcyBub3QgbWF0Y2ggZm9ybWF0ICdcIiArIGZvcm1hdCArIFwiJzogXCIgKyBtZXNzYWdlKTtcclxufVxyXG4vKipcclxuICogQHBhcmFtIG1lc3NhZ2UgQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGludGVybmFsIGVycm9yLlxyXG4gKi9cclxuZnVuY3Rpb24gaW50ZXJuYWxFcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgRmlyZWJhc2VTdG9yYWdlRXJyb3IoQ29kZS5JTlRFUk5BTF9FUlJPUiwgJ0ludGVybmFsIGVycm9yOiAnICsgbWVzc2FnZSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIFN0cmluZ0Zvcm1hdCA9IHtcclxuICAgIFJBVzogJ3JhdycsXHJcbiAgICBCQVNFNjQ6ICdiYXNlNjQnLFxyXG4gICAgQkFTRTY0VVJMOiAnYmFzZTY0dXJsJyxcclxuICAgIERBVEFfVVJMOiAnZGF0YV91cmwnXHJcbn07XHJcbmZ1bmN0aW9uIGZvcm1hdFZhbGlkYXRvcihzdHJpbmdGb3JtYXQpIHtcclxuICAgIHN3aXRjaCAoc3RyaW5nRm9ybWF0KSB7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuUkFXOlxyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NDpcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjRVUkw6XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuREFUQV9VUkw6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgb25lIG9mIHRoZSBldmVudCB0eXBlczogWycgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nRm9ybWF0LlJBVyArXHJcbiAgICAgICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgICAgIFN0cmluZ0Zvcm1hdC5CQVNFNjQgK1xyXG4gICAgICAgICAgICAgICAgJywgJyArXHJcbiAgICAgICAgICAgICAgICBTdHJpbmdGb3JtYXQuQkFTRTY0VVJMICtcclxuICAgICAgICAgICAgICAgICcsICcgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nRm9ybWF0LkRBVEFfVVJMICtcclxuICAgICAgICAgICAgICAgICddLic7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBTdHJpbmdEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU3RyaW5nRGF0YShkYXRhLCBjb250ZW50VHlwZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nRGF0YTtcclxufSgpKTtcclxuZnVuY3Rpb24gZGF0YUZyb21TdHJpbmcoZm9ybWF0LCBzdHJpbmdEYXRhKSB7XHJcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LlJBVzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdEYXRhKHV0ZjhCeXRlc18oc3RyaW5nRGF0YSkpO1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NDpcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjRVUkw6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YShiYXNlNjRCeXRlc18oZm9ybWF0LCBzdHJpbmdEYXRhKSk7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuREFUQV9VUkw6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YShkYXRhVVJMQnl0ZXNfKHN0cmluZ0RhdGEpLCBkYXRhVVJMQ29udGVudFR5cGVfKHN0cmluZ0RhdGEpKTtcclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgICAvLyBhc3NlcnQoZmFsc2UpO1xyXG4gICAgdGhyb3cgdW5rbm93bigpO1xyXG59XHJcbmZ1bmN0aW9uIHV0ZjhCeXRlc18odmFsdWUpIHtcclxuICAgIHZhciBiID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDw9IDEyNykge1xyXG4gICAgICAgICAgICBiLnB1c2goYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYyA8PSAyMDQ3KSB7XHJcbiAgICAgICAgICAgICAgICBiLnB1c2goMTkyIHwgKGMgPj4gNiksIDEyOCB8IChjICYgNjMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgoYyAmIDY0NTEyKSA9PT0gNTUyOTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgc3RhcnQgb2YgYSBzdXJyb2dhdGUgcGFpci5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSBpIDwgdmFsdWUubGVuZ3RoIC0gMSAmJiAodmFsdWUuY2hhckNvZGVBdChpICsgMSkgJiA2NDUxMikgPT09IDU2MzIwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBzdXJyb2dhdGUgd2Fzbid0IHRoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnB1c2goMjM5LCAxOTEsIDE4OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGkgPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG8gPSB2YWx1ZS5jaGFyQ29kZUF0KCsraSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSA2NTUzNiB8ICgoaGkgJiAxMDIzKSA8PCAxMCkgfCAobG8gJiAxMDIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5wdXNoKDI0MCB8IChjID4+IDE4KSwgMTI4IHwgKChjID4+IDEyKSAmIDYzKSwgMTI4IHwgKChjID4+IDYpICYgNjMpLCAxMjggfCAoYyAmIDYzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjICYgNjQ1MTIpID09PSA1NjMyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIGxvdyBzdXJyb2dhdGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucHVzaCgyMzksIDE5MSwgMTg5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucHVzaCgyMjQgfCAoYyA+PiAxMiksIDEyOCB8ICgoYyA+PiA2KSAmIDYzKSwgMTI4IHwgKGMgJiA2MykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShiKTtcclxufVxyXG5mdW5jdGlvbiBwZXJjZW50RW5jb2RlZEJ5dGVzXyh2YWx1ZSkge1xyXG4gICAgdmFyIGRlY29kZWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KFN0cmluZ0Zvcm1hdC5EQVRBX1VSTCwgJ01hbGZvcm1lZCBkYXRhIFVSTC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1dGY4Qnl0ZXNfKGRlY29kZWQpO1xyXG59XHJcbmZ1bmN0aW9uIGJhc2U2NEJ5dGVzXyhmb3JtYXQsIHZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NDoge1xyXG4gICAgICAgICAgICB2YXIgaGFzTWludXMgPSB2YWx1ZS5pbmRleE9mKCctJykgIT09IC0xO1xyXG4gICAgICAgICAgICB2YXIgaGFzVW5kZXIgPSB2YWx1ZS5pbmRleE9mKCdfJykgIT09IC0xO1xyXG4gICAgICAgICAgICBpZiAoaGFzTWludXMgfHwgaGFzVW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnZhbGlkQ2hhciA9IGhhc01pbnVzID8gJy0nIDogJ18nO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChmb3JtYXQsIFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiICtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ2hhciArXHJcbiAgICAgICAgICAgICAgICAgICAgXCInIGZvdW5kOiBpcyBpdCBiYXNlNjR1cmwgZW5jb2RlZD9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NFVSTDoge1xyXG4gICAgICAgICAgICB2YXIgaGFzUGx1cyA9IHZhbHVlLmluZGV4T2YoJysnKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIHZhciBoYXNTbGFzaCA9IHZhbHVlLmluZGV4T2YoJy8nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIGlmIChoYXNQbHVzIHx8IGhhc1NsYXNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW52YWxpZENoYXIgPSBoYXNQbHVzID8gJysnIDogJy8nO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChmb3JtYXQsIFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiICsgaW52YWxpZENoYXIgKyBcIicgZm91bmQ6IGlzIGl0IGJhc2U2NCBlbmNvZGVkP1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcbiAgICB2YXIgYnl0ZXM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJ5dGVzID0gYXRvYih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoZm9ybWF0LCAnSW52YWxpZCBjaGFyYWN0ZXIgZm91bmQnKTtcclxuICAgIH1cclxuICAgIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVzLmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBieXRlcy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcbi8qKlxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgRGF0YVVSTFBhcnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGF0YVVSTFBhcnRzKGRhdGFVUkwpIHtcclxuICAgICAgICB0aGlzLmJhc2U2NCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudFR5cGUgPSBudWxsO1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gZGF0YVVSTC5tYXRjaCgvXmRhdGE6KFteLF0rKT8sLyk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChTdHJpbmdGb3JtYXQuREFUQV9VUkwsIFwiTXVzdCBiZSBmb3JtYXR0ZWQgJ2RhdGE6WzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtaWRkbGUgPSBtYXRjaGVzWzFdIHx8IG51bGw7XHJcbiAgICAgICAgaWYgKG1pZGRsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZTY0ID0gZW5kc1dpdGgobWlkZGxlLCAnO2Jhc2U2NCcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRUeXBlID0gdGhpcy5iYXNlNjRcclxuICAgICAgICAgICAgICAgID8gbWlkZGxlLnN1YnN0cmluZygwLCBtaWRkbGUubGVuZ3RoIC0gJztiYXNlNjQnLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIDogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3QgPSBkYXRhVVJMLnN1YnN0cmluZyhkYXRhVVJMLmluZGV4T2YoJywnKSArIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERhdGFVUkxQYXJ0cztcclxufSgpKTtcclxuZnVuY3Rpb24gZGF0YVVSTEJ5dGVzXyhkYXRhVXJsKSB7XHJcbiAgICB2YXIgcGFydHMgPSBuZXcgRGF0YVVSTFBhcnRzKGRhdGFVcmwpO1xyXG4gICAgaWYgKHBhcnRzLmJhc2U2NCkge1xyXG4gICAgICAgIHJldHVybiBiYXNlNjRCeXRlc18oU3RyaW5nRm9ybWF0LkJBU0U2NCwgcGFydHMucmVzdCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGVyY2VudEVuY29kZWRCeXRlc18ocGFydHMucmVzdCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGF0YVVSTENvbnRlbnRUeXBlXyhkYXRhVXJsKSB7XHJcbiAgICB2YXIgcGFydHMgPSBuZXcgRGF0YVVSTFBhcnRzKGRhdGFVcmwpO1xyXG4gICAgcmV0dXJuIHBhcnRzLmNvbnRlbnRUeXBlO1xyXG59XHJcbmZ1bmN0aW9uIGVuZHNXaXRoKHMsIGVuZCkge1xyXG4gICAgdmFyIGxvbmdFbm91Z2ggPSBzLmxlbmd0aCA+PSBlbmQubGVuZ3RoO1xyXG4gICAgaWYgKCFsb25nRW5vdWdoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHMuc3Vic3RyaW5nKHMubGVuZ3RoIC0gZW5kLmxlbmd0aCkgPT09IGVuZDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgVGFza0V2ZW50ID0ge1xyXG4gICAgLyoqIFRyaWdnZXJlZCB3aGVuZXZlciB0aGUgdGFzayBjaGFuZ2VzIG9yIHByb2dyZXNzIGlzIHVwZGF0ZWQuICovXHJcbiAgICBTVEFURV9DSEFOR0VEOiAnc3RhdGVfY2hhbmdlZCdcclxufTtcclxudmFyIEludGVybmFsVGFza1N0YXRlID0ge1xyXG4gICAgUlVOTklORzogJ3J1bm5pbmcnLFxyXG4gICAgUEFVU0lORzogJ3BhdXNpbmcnLFxyXG4gICAgUEFVU0VEOiAncGF1c2VkJyxcclxuICAgIFNVQ0NFU1M6ICdzdWNjZXNzJyxcclxuICAgIENBTkNFTElORzogJ2NhbmNlbGluZycsXHJcbiAgICBDQU5DRUxFRDogJ2NhbmNlbGVkJyxcclxuICAgIEVSUk9SOiAnZXJyb3InXHJcbn07XHJcbnZhciBUYXNrU3RhdGUgPSB7XHJcbiAgICAvKiogVGhlIHRhc2sgaXMgY3VycmVudGx5IHRyYW5zZmVycmluZyBkYXRhLiAqL1xyXG4gICAgUlVOTklORzogJ3J1bm5pbmcnLFxyXG4gICAgLyoqIFRoZSB0YXNrIHdhcyBwYXVzZWQgYnkgdGhlIHVzZXIuICovXHJcbiAgICBQQVVTRUQ6ICdwYXVzZWQnLFxyXG4gICAgLyoqIFRoZSB0YXNrIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuICovXHJcbiAgICBTVUNDRVNTOiAnc3VjY2VzcycsXHJcbiAgICAvKiogVGhlIHRhc2sgd2FzIGNhbmNlbGVkLiAqL1xyXG4gICAgQ0FOQ0VMRUQ6ICdjYW5jZWxlZCcsXHJcbiAgICAvKiogVGhlIHRhc2sgZmFpbGVkIHdpdGggYW4gZXJyb3IuICovXHJcbiAgICBFUlJPUjogJ2Vycm9yJ1xyXG59O1xyXG5mdW5jdGlvbiB0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUoc3RhdGUpIHtcclxuICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlJVTk5JTkc6XHJcbiAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HOlxyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLlJVTk5JTkc7XHJcbiAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQ6XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuUEFVU0VEO1xyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5TVUNDRVNTO1xyXG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMRUQ6XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuQ0FOQ0VMRUQ7XHJcbiAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5FUlJPUjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5FUlJPUjtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHJldHVybiBGYWxzZSBpZiB0aGUgb2JqZWN0IGlzIHVuZGVmaW5lZCBvciBudWxsLCB0cnVlIG90aGVyd2lzZS5cclxuICovXHJcbmZ1bmN0aW9uIGlzRGVmKHApIHtcclxuICAgIHJldHVybiBwICE9IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gaXNKdXN0RGVmKHApIHtcclxuICAgIHJldHVybiBwICE9PSB2b2lkIDA7XHJcbn1cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihwKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHAgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuZnVuY3Rpb24gaXNPYmplY3QocCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSAnb2JqZWN0JztcclxufVxyXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QocCkge1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHApICYmIHAgIT09IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gaXNOb25BcnJheU9iamVjdChwKSB7XHJcbiAgICByZXR1cm4gaXNPYmplY3QocCkgJiYgIUFycmF5LmlzQXJyYXkocCk7XHJcbn1cclxuZnVuY3Rpb24gaXNTdHJpbmcocCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSAnc3RyaW5nJyB8fCBwIGluc3RhbmNlb2YgU3RyaW5nO1xyXG59XHJcbmZ1bmN0aW9uIGlzSW50ZWdlcihwKSB7XHJcbiAgICByZXR1cm4gaXNOdW1iZXIocCkgJiYgTnVtYmVyLmlzSW50ZWdlcihwKTtcclxufVxyXG5mdW5jdGlvbiBpc051bWJlcihwKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHAgPT09ICdudW1iZXInIHx8IHAgaW5zdGFuY2VvZiBOdW1iZXI7XHJcbn1cclxuZnVuY3Rpb24gaXNOYXRpdmVCbG9iKHApIHtcclxuICAgIHJldHVybiBpc05hdGl2ZUJsb2JEZWZpbmVkKCkgJiYgcCBpbnN0YW5jZW9mIEJsb2I7XHJcbn1cclxuZnVuY3Rpb24gaXNOYXRpdmVCbG9iRGVmaW5lZCgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBlbnVte251bWJlcn1cclxuICovXHJcbnZhciBFcnJvckNvZGU7XHJcbihmdW5jdGlvbiAoRXJyb3JDb2RlKSB7XHJcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiTk9fRVJST1JcIl0gPSAwXSA9IFwiTk9fRVJST1JcIjtcclxuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJORVRXT1JLX0VSUk9SXCJdID0gMV0gPSBcIk5FVFdPUktfRVJST1JcIjtcclxuICAgIEVycm9yQ29kZVtFcnJvckNvZGVbXCJBQk9SVFwiXSA9IDJdID0gXCJBQk9SVFwiO1xyXG59KShFcnJvckNvZGUgfHwgKEVycm9yQ29kZSA9IHt9KSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBXZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIGdvb2cubmV0LlhocklvIGJlY2F1c2UgZ29vZy5uZXQuWGhySW8gaXMgaHl1dXV1Z2UgYW5kXHJcbiAqIGRvZXNuJ3Qgd29yayBpbiBSZWFjdCBOYXRpdmUgb24gQW5kcm9pZC5cclxuICovXHJcbnZhciBOZXR3b3JrWGhySW8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOZXR3b3JrWGhySW8oKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNlbnRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy54aHJfID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLk5PX0VSUk9SO1xyXG4gICAgICAgIHRoaXMuc2VuZFByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgX3RoaXMueGhyXy5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yQ29kZV8gPSBFcnJvckNvZGUuQUJPUlQ7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnhocl8uYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLk5FVFdPUktfRVJST1I7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKF90aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnhocl8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuc2VuZCgpIG1vcmUgdGhhbiBvbmNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VudF8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMueGhyXy5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgICAgICBpZiAoaXNEZWYoaGVhZGVycykpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnhocl8uc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNEZWYoYm9keSkpIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnNlbmQoYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnhocl8uc2VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kUHJvbWlzZV87XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgTmV0d29ya1hocklvLnByb3RvdHlwZS5nZXRFcnJvckNvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0RXJyb3JDb2RlKCkgYmVmb3JlIHNlbmRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JDb2RlXztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VudF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRTdGF0dXMoKSBiZWZvcmUgc2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54aHJfLnN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmdldFJlc3BvbnNlVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VudF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRSZXNwb25zZVRleHQoKSBiZWZvcmUgc2VuZGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy54aHJfLnJlc3BvbnNlVGV4dDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFib3J0cyB0aGUgcmVxdWVzdC5cclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueGhyXy5hYm9ydCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbiAoaGVhZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueGhyXy5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtYaHJJby5wcm90b3R5cGUuYWRkVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmIChpc0RlZih0aGlzLnhocl8udXBsb2FkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnhocl8udXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBOZXR3b3JrWGhySW8ucHJvdG90eXBlLnJlbW92ZVVwbG9hZFByb2dyZXNzTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAoaXNEZWYodGhpcy54aHJfLnVwbG9hZCkpIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnVwbG9hZC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5ldHdvcmtYaHJJbztcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEZhY3RvcnktbGlrZSBjbGFzcyBmb3IgY3JlYXRpbmcgWGhySW8gaW5zdGFuY2VzLlxyXG4gKi9cclxudmFyIFhocklvUG9vbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFhocklvUG9vbCgpIHtcclxuICAgIH1cclxuICAgIFhocklvUG9vbC5wcm90b3R5cGUuY3JlYXRlWGhySW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrWGhySW8oKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gWGhySW9Qb29sO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCbG9iQnVpbGRlcigpIHtcclxuICAgIGlmICh0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIEJsb2JCdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIFdlYktpdEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBXZWJLaXRCbG9iQnVpbGRlcjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyBvbmUgb3IgbW9yZSB2YWx1ZXMgdG9nZXRoZXIgYW5kIGNvbnZlcnRzIHRoZW0gdG8gYSBCbG9iLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXJncyBUaGUgdmFsdWVzIHRoYXQgd2lsbCBtYWtlIHVwIHRoZSByZXN1bHRpbmcgYmxvYi5cclxuICogQHJldHVybiBUaGUgYmxvYi5cclxuICovXHJcbmZ1bmN0aW9uIGdldEJsb2IoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgQmxvYkJ1aWxkZXIgPSBnZXRCbG9iQnVpbGRlcigpO1xyXG4gICAgaWYgKEJsb2JCdWlsZGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmIuYXBwZW5kKGFyZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmIuZ2V0QmxvYigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBjcmVhdGluZyBCbG9ic1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFNsaWNlcyB0aGUgYmxvYi4gVGhlIHJldHVybmVkIGJsb2IgY29udGFpbnMgZGF0YSBmcm9tIHRoZSBzdGFydCBieXRlXHJcbiAqIChpbmNsdXNpdmUpIHRpbGwgdGhlIGVuZCBieXRlIChleGNsdXNpdmUpLiBOZWdhdGl2ZSBpbmRpY2VzIGNhbm5vdCBiZSB1c2VkLlxyXG4gKlxyXG4gKiBAcGFyYW0gYmxvYiBUaGUgYmxvYiB0byBiZSBzbGljZWQuXHJcbiAqIEBwYXJhbSBzdGFydCBJbmRleCBvZiB0aGUgc3RhcnRpbmcgYnl0ZS5cclxuICogQHBhcmFtIGVuZCBJbmRleCBvZiB0aGUgZW5kaW5nIGJ5dGUuXHJcbiAqIEByZXR1cm4gVGhlIGJsb2Igc2xpY2Ugb3IgbnVsbCBpZiBub3Qgc3VwcG9ydGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gc2xpY2VCbG9iKGJsb2IsIHN0YXJ0LCBlbmQpIHtcclxuICAgIGlmIChibG9iLndlYmtpdFNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2Iud2Via2l0U2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChibG9iLm1velNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2IubW96U2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChibG9iLnNsaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2Iuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIG9wdF9lbGlkZUNvcHkgSWYgdHJ1ZSwgZG9lc24ndCBjb3B5IG11dGFibGUgaW5wdXQgZGF0YVxyXG4gKiAgICAgKGUuZy4gVWludDhBcnJheXMpLiBQYXNzIHRydWUgb25seSBpZiB5b3Uga25vdyB0aGUgb2JqZWN0cyB3aWxsIG5vdCBiZVxyXG4gKiAgICAgbW9kaWZpZWQgYWZ0ZXIgdGhpcyBibG9iJ3MgY29uc3RydWN0aW9uLlxyXG4gKi9cclxudmFyIEZic0Jsb2IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGYnNCbG9iKGRhdGEsIGVsaWRlQ29weSkge1xyXG4gICAgICAgIHZhciBzaXplID0gMDtcclxuICAgICAgICB2YXIgYmxvYlR5cGUgPSAnJztcclxuICAgICAgICBpZiAoaXNOYXRpdmVCbG9iKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBkYXRhO1xyXG4gICAgICAgICAgICBzaXplID0gZGF0YS5zaXplO1xyXG4gICAgICAgICAgICBibG9iVHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGlkZUNvcHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBuZXcgVWludDhBcnJheShkYXRhLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXy5zZXQobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpemUgPSB0aGlzLmRhdGFfLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKGVsaWRlQ29weSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXyA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXy5zZXQoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2l6ZSA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNpemVfID0gc2l6ZTtcclxuICAgICAgICB0aGlzLnR5cGVfID0gYmxvYlR5cGU7XHJcbiAgICB9XHJcbiAgICBGYnNCbG9iLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemVfO1xyXG4gICAgfTtcclxuICAgIEZic0Jsb2IucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZV87XHJcbiAgICB9O1xyXG4gICAgRmJzQmxvYi5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnRCeXRlLCBlbmRCeXRlKSB7XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYih0aGlzLmRhdGFfKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVhbEJsb2IgPSB0aGlzLmRhdGFfO1xyXG4gICAgICAgICAgICB2YXIgc2xpY2VkID0gc2xpY2VCbG9iKHJlYWxCbG9iLCBzdGFydEJ5dGUsIGVuZEJ5dGUpO1xyXG4gICAgICAgICAgICBpZiAoc2xpY2VkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZic0Jsb2Ioc2xpY2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBzbGljZSA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YV8uYnVmZmVyLCBzdGFydEJ5dGUsIGVuZEJ5dGUgLSBzdGFydEJ5dGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZic0Jsb2Ioc2xpY2UsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBGYnNCbG9iLmdldEJsb2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05hdGl2ZUJsb2JEZWZpbmVkKCkpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2JieSA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGYnNCbG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5kYXRhXztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZic0Jsb2IoZ2V0QmxvYi5hcHBseShudWxsLCBibG9iYnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB1aW50OEFycmF5cyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFGcm9tU3RyaW5nKFN0cmluZ0Zvcm1hdC5SQVcsIHZhbCkuZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJsb2JzIGRvbid0IGV4aXN0LCBzbyB0aGlzIGhhcyB0byBiZSBhIFVpbnQ4QXJyYXkuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5kYXRhXztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBmaW5hbExlbmd0aF8xID0gMDtcclxuICAgICAgICAgICAgdWludDhBcnJheXMuZm9yRWFjaChmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsTGVuZ3RoXzEgKz0gYXJyYXkuYnl0ZUxlbmd0aDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBtZXJnZWRfMSA9IG5ldyBVaW50OEFycmF5KGZpbmFsTGVuZ3RoXzEpO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXhfMSA9IDA7XHJcbiAgICAgICAgICAgIHVpbnQ4QXJyYXlzLmZvckVhY2goZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkXzFbaW5kZXhfMSsrXSA9IGFycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKG1lcmdlZF8xLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRmJzQmxvYi5wcm90b3R5cGUudXBsb2FkRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhXztcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmJzQmxvYjtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBMb2NhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvY2F0aW9uKGJ1Y2tldCwgcGF0aCkge1xyXG4gICAgICAgIHRoaXMuYnVja2V0ID0gYnVja2V0O1xyXG4gICAgICAgIHRoaXMucGF0aF8gPSBwYXRoO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExvY2F0aW9uLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGF0aF87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9jYXRpb24ucHJvdG90eXBlLCBcImlzUm9vdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhdGgubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmZ1bGxTZXJ2ZXJVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcclxuICAgICAgICByZXR1cm4gJy9iLycgKyBlbmNvZGUodGhpcy5idWNrZXQpICsgJy9vLycgKyBlbmNvZGUodGhpcy5wYXRoKTtcclxuICAgIH07XHJcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuYnVja2V0T25seVNlcnZlclVybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xyXG4gICAgICAgIHJldHVybiAnL2IvJyArIGVuY29kZSh0aGlzLmJ1Y2tldCkgKyAnL28nO1xyXG4gICAgfTtcclxuICAgIExvY2F0aW9uLm1ha2VGcm9tQnVja2V0U3BlYyA9IGZ1bmN0aW9uIChidWNrZXRTdHJpbmcpIHtcclxuICAgICAgICB2YXIgYnVja2V0TG9jYXRpb247XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYnVja2V0TG9jYXRpb24gPSBMb2NhdGlvbi5tYWtlRnJvbVVybChidWNrZXRTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBOb3QgdmFsaWQgVVJMLCB1c2UgYXMtaXMuIFRoaXMgbGV0cyB5b3UgcHV0IGJhcmUgYnVja2V0IG5hbWVzIGluXHJcbiAgICAgICAgICAgIC8vIGNvbmZpZy5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbihidWNrZXRTdHJpbmcsICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ1Y2tldExvY2F0aW9uLnBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidWNrZXRMb2NhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWREZWZhdWx0QnVja2V0KGJ1Y2tldFN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExvY2F0aW9uLm1ha2VGcm9tVXJsID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdmFyIGJ1Y2tldERvbWFpbiA9ICcoW0EtWmEtejAtOS5cXFxcLV9dKyknO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdzTW9kaWZ5KGxvYykge1xyXG4gICAgICAgICAgICBpZiAobG9jLnBhdGguY2hhckF0KGxvYy5wYXRoLmxlbmd0aCAtIDEpID09PSAnLycpIHtcclxuICAgICAgICAgICAgICAgIGxvYy5wYXRoXyA9IGxvYy5wYXRoXy5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGdzUGF0aCA9ICcoLyguKikpPyQnO1xyXG4gICAgICAgIHZhciBnc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXmdzOi8vJyArIGJ1Y2tldERvbWFpbiArIGdzUGF0aCwgJ2knKTtcclxuICAgICAgICB2YXIgZ3NJbmRpY2VzID0geyBidWNrZXQ6IDEsIHBhdGg6IDMgfTtcclxuICAgICAgICBmdW5jdGlvbiBodHRwTW9kaWZ5KGxvYykge1xyXG4gICAgICAgICAgICBsb2MucGF0aF8gPSBkZWNvZGVVUklDb21wb25lbnQobG9jLnBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmVyc2lvbiA9ICd2W0EtWmEtejAtOV9dKyc7XHJcbiAgICAgICAgdmFyIGZpcmViYXNlU3RvcmFnZUhvc3QgPSBERUZBVUxUX0hPU1QucmVwbGFjZSgvWy5dL2csICdcXFxcLicpO1xyXG4gICAgICAgIHZhciBmaXJlYmFzZVN0b3JhZ2VQYXRoID0gJygvKFtePyNdKikuKik/JCc7XHJcbiAgICAgICAgdmFyIGZpcmViYXNlU3RvcmFnZVJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeaHR0cHM/Oi8vXCIgKyBmaXJlYmFzZVN0b3JhZ2VIb3N0ICsgXCIvXCIgKyB2ZXJzaW9uICsgXCIvYi9cIiArIGJ1Y2tldERvbWFpbiArIFwiL29cIiArIGZpcmViYXNlU3RvcmFnZVBhdGgsICdpJyk7XHJcbiAgICAgICAgdmFyIGZpcmViYXNlU3RvcmFnZUluZGljZXMgPSB7IGJ1Y2tldDogMSwgcGF0aDogMyB9O1xyXG4gICAgICAgIHZhciBjbG91ZFN0b3JhZ2VIb3N0ID0gJyg/OnN0b3JhZ2UuZ29vZ2xlYXBpcy5jb218c3RvcmFnZS5jbG91ZC5nb29nbGUuY29tKSc7XHJcbiAgICAgICAgdmFyIGNsb3VkU3RvcmFnZVBhdGggPSAnKFtePyNdKiknO1xyXG4gICAgICAgIHZhciBjbG91ZFN0b3JhZ2VSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXmh0dHBzPzovL1wiICsgY2xvdWRTdG9yYWdlSG9zdCArIFwiL1wiICsgYnVja2V0RG9tYWluICsgXCIvXCIgKyBjbG91ZFN0b3JhZ2VQYXRoLCAnaScpO1xyXG4gICAgICAgIHZhciBjbG91ZFN0b3JhZ2VJbmRpY2VzID0geyBidWNrZXQ6IDEsIHBhdGg6IDIgfTtcclxuICAgICAgICB2YXIgZ3JvdXBzID0gW1xyXG4gICAgICAgICAgICB7IHJlZ2V4OiBnc1JlZ2V4LCBpbmRpY2VzOiBnc0luZGljZXMsIHBvc3RNb2RpZnk6IGdzTW9kaWZ5IH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiBmaXJlYmFzZVN0b3JhZ2VSZWdFeHAsXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzOiBmaXJlYmFzZVN0b3JhZ2VJbmRpY2VzLFxyXG4gICAgICAgICAgICAgICAgcG9zdE1vZGlmeTogaHR0cE1vZGlmeVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWdleDogY2xvdWRTdG9yYWdlUmVnRXhwLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlczogY2xvdWRTdG9yYWdlSW5kaWNlcyxcclxuICAgICAgICAgICAgICAgIHBvc3RNb2RpZnk6IGh0dHBNb2RpZnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGdyb3VwID0gZ3JvdXBzW2ldO1xyXG4gICAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBncm91cC5yZWdleC5leGVjKHVybCk7XHJcbiAgICAgICAgICAgIGlmIChjYXB0dXJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ1Y2tldFZhbHVlID0gY2FwdHVyZXNbZ3JvdXAuaW5kaWNlcy5idWNrZXRdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGhWYWx1ZSA9IGNhcHR1cmVzW2dyb3VwLmluZGljZXMucGF0aF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhdGhWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24oYnVja2V0VmFsdWUsIHBhdGhWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBncm91cC5wb3N0TW9kaWZ5KGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWRVcmwodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMb2NhdGlvbjtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIE9iamVjdCByZXN1bHRpbmcgZnJvbSBwYXJzaW5nIHRoZSBnaXZlbiBKU09OLCBvciBudWxsIGlmIHRoZVxyXG4gKiBnaXZlbiBzdHJpbmcgZG9lcyBub3QgcmVwcmVzZW50IGEgSlNPTiBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBqc29uT2JqZWN0T3JOdWxsKHMpIHtcclxuICAgIHZhciBvYmo7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9iaiA9IEpTT04ucGFyc2Uocyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTm9uQXJyYXlPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBDb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW5nIHBhdGhzLlxyXG4gKi9cclxuLyoqXHJcbiAqIEByZXR1cm4gTnVsbCBpZiB0aGUgcGF0aCBpcyBhbHJlYWR5IGF0IHRoZSByb290LlxyXG4gKi9cclxuZnVuY3Rpb24gcGFyZW50KHBhdGgpIHtcclxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHZhciBuZXdQYXRoID0gcGF0aC5zbGljZSgwLCBpbmRleCk7XHJcbiAgICByZXR1cm4gbmV3UGF0aDtcclxufVxyXG5mdW5jdGlvbiBjaGlsZChwYXRoLCBjaGlsZFBhdGgpIHtcclxuICAgIHZhciBjYW5vbmljYWxDaGlsZFBhdGggPSBjaGlsZFBhdGhcclxuICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGNvbXBvbmVudCkgeyByZXR1cm4gY29tcG9uZW50Lmxlbmd0aCA+IDA7IH0pXHJcbiAgICAgICAgLmpvaW4oJy8nKTtcclxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjYW5vbmljYWxDaGlsZFBhdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGF0aCArICcvJyArIGNhbm9uaWNhbENoaWxkUGF0aDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgbGFzdCBjb21wb25lbnQgb2YgYSBwYXRoLlxyXG4gKiAnL2Zvby9iYXInIC0+ICdiYXInXHJcbiAqICcvZm9vL2Jhci9iYXovJyAtPiAnYmF6LydcclxuICogJy9hJyAtPiAnYSdcclxuICovXHJcbmZ1bmN0aW9uIGxhc3RDb21wb25lbnQocGF0aCkge1xyXG4gICAgdmFyIGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycsIHBhdGgubGVuZ3RoIC0gMik7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGF0aC5zbGljZShpbmRleCArIDEpO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VVcmwodXJsUGFydCkge1xyXG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9cIiArIERFRkFVTFRfSE9TVCArIFwiL3YwXCIgKyB1cmxQYXJ0O1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VRdWVyeVN0cmluZyhwYXJhbXMpIHtcclxuICAgIHZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICB2YXIgcXVlcnlQYXJ0ID0gJz8nO1xyXG4gICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IHJlbW92ZSBvbmNlIHR5cGVzY3JpcHQgaXMgdXBncmFkZWQgdG8gMy41LnhcclxuICAgICAgICAgICAgdmFyIG5leHRQYXJ0ID0gZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUocGFyYW1zW2tleV0pO1xyXG4gICAgICAgICAgICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQgKyBuZXh0UGFydCArICcmJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDaG9wIG9mZiB0aGUgZXh0cmEgJyYnIG9yICc/JyBvbiB0aGUgZW5kXHJcbiAgICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQuc2xpY2UoMCwgLTEpO1xyXG4gICAgcmV0dXJuIHF1ZXJ5UGFydDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBub1hmb3JtXyhtZXRhZGF0YSwgdmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4vKipcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIE1hcHBpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXBwaW5nKHNlcnZlciwgbG9jYWwsIHdyaXRhYmxlLCB4Zm9ybSkge1xyXG4gICAgICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xyXG4gICAgICAgIHRoaXMubG9jYWwgPSBsb2NhbCB8fCBzZXJ2ZXI7XHJcbiAgICAgICAgdGhpcy53cml0YWJsZSA9ICEhd3JpdGFibGU7XHJcbiAgICAgICAgdGhpcy54Zm9ybSA9IHhmb3JtIHx8IG5vWGZvcm1fO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hcHBpbmc7XHJcbn0oKSk7XHJcbnZhciBtYXBwaW5nc18gPSBudWxsO1xyXG5mdW5jdGlvbiB4Zm9ybVBhdGgoZnVsbFBhdGgpIHtcclxuICAgIGlmICghaXNTdHJpbmcoZnVsbFBhdGgpIHx8IGZ1bGxQYXRoLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICByZXR1cm4gZnVsbFBhdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbGFzdENvbXBvbmVudChmdWxsUGF0aCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0TWFwcGluZ3MoKSB7XHJcbiAgICBpZiAobWFwcGluZ3NfKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hcHBpbmdzXztcclxuICAgIH1cclxuICAgIHZhciBtYXBwaW5ncyA9IFtdO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnYnVja2V0JykpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnZ2VuZXJhdGlvbicpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ21ldGFnZW5lcmF0aW9uJykpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnbmFtZScsICdmdWxsUGF0aCcsIHRydWUpKTtcclxuICAgIGZ1bmN0aW9uIG1hcHBpbmdzWGZvcm1QYXRoKF9tZXRhZGF0YSwgZnVsbFBhdGgpIHtcclxuICAgICAgICByZXR1cm4geGZvcm1QYXRoKGZ1bGxQYXRoKTtcclxuICAgIH1cclxuICAgIHZhciBuYW1lTWFwcGluZyA9IG5ldyBNYXBwaW5nKCduYW1lJyk7XHJcbiAgICBuYW1lTWFwcGluZy54Zm9ybSA9IG1hcHBpbmdzWGZvcm1QYXRoO1xyXG4gICAgbWFwcGluZ3MucHVzaChuYW1lTWFwcGluZyk7XHJcbiAgICAvKipcclxuICAgICAqIENvZXJjZXMgdGhlIHNlY29uZCBwYXJhbSB0byBhIG51bWJlciwgaWYgaXQgaXMgZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24geGZvcm1TaXplKF9tZXRhZGF0YSwgc2l6ZSkge1xyXG4gICAgICAgIGlmIChpc0RlZihzaXplKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHNpemVNYXBwaW5nID0gbmV3IE1hcHBpbmcoJ3NpemUnKTtcclxuICAgIHNpemVNYXBwaW5nLnhmb3JtID0geGZvcm1TaXplO1xyXG4gICAgbWFwcGluZ3MucHVzaChzaXplTWFwcGluZyk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCd0aW1lQ3JlYXRlZCcpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ3VwZGF0ZWQnKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdtZDVIYXNoJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY2FjaGVDb250cm9sJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudERpc3Bvc2l0aW9uJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudEVuY29kaW5nJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudExhbmd1YWdlJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnY29udGVudFR5cGUnLCBudWxsLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdtZXRhZGF0YScsICdjdXN0b21NZXRhZGF0YScsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzXyA9IG1hcHBpbmdzO1xyXG4gICAgcmV0dXJuIG1hcHBpbmdzXztcclxufVxyXG5mdW5jdGlvbiBhZGRSZWYobWV0YWRhdGEsIGF1dGhXcmFwcGVyKSB7XHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJlZigpIHtcclxuICAgICAgICB2YXIgYnVja2V0ID0gbWV0YWRhdGFbJ2J1Y2tldCddO1xyXG4gICAgICAgIHZhciBwYXRoID0gbWV0YWRhdGFbJ2Z1bGxQYXRoJ107XHJcbiAgICAgICAgdmFyIGxvYyA9IG5ldyBMb2NhdGlvbihidWNrZXQsIHBhdGgpO1xyXG4gICAgICAgIHJldHVybiBhdXRoV3JhcHBlci5tYWtlU3RvcmFnZVJlZmVyZW5jZShsb2MpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1ldGFkYXRhLCAncmVmJywgeyBnZXQ6IGdlbmVyYXRlUmVmIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZyb21SZXNvdXJjZShhdXRoV3JhcHBlciwgcmVzb3VyY2UsIG1hcHBpbmdzKSB7XHJcbiAgICB2YXIgbWV0YWRhdGEgPSB7fTtcclxuICAgIG1ldGFkYXRhWyd0eXBlJ10gPSAnZmlsZSc7XHJcbiAgICB2YXIgbGVuID0gbWFwcGluZ3MubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHZhciBtYXBwaW5nID0gbWFwcGluZ3NbaV07XHJcbiAgICAgICAgbWV0YWRhdGFbbWFwcGluZy5sb2NhbF0gPSBtYXBwaW5nLnhmb3JtKG1ldGFkYXRhLCByZXNvdXJjZVttYXBwaW5nLnNlcnZlcl0pO1xyXG4gICAgfVxyXG4gICAgYWRkUmVmKG1ldGFkYXRhLCBhdXRoV3JhcHBlcik7XHJcbiAgICByZXR1cm4gbWV0YWRhdGE7XHJcbn1cclxuZnVuY3Rpb24gZnJvbVJlc291cmNlU3RyaW5nKGF1dGhXcmFwcGVyLCByZXNvdXJjZVN0cmluZywgbWFwcGluZ3MpIHtcclxuICAgIHZhciBvYmogPSBqc29uT2JqZWN0T3JOdWxsKHJlc291cmNlU3RyaW5nKTtcclxuICAgIGlmIChvYmogPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciByZXNvdXJjZSA9IG9iajtcclxuICAgIHJldHVybiBmcm9tUmVzb3VyY2UoYXV0aFdyYXBwZXIsIHJlc291cmNlLCBtYXBwaW5ncyk7XHJcbn1cclxuZnVuY3Rpb24gZG93bmxvYWRVcmxGcm9tUmVzb3VyY2VTdHJpbmcobWV0YWRhdGEsIHJlc291cmNlU3RyaW5nKSB7XHJcbiAgICB2YXIgb2JqID0ganNvbk9iamVjdE9yTnVsbChyZXNvdXJjZVN0cmluZyk7XHJcbiAgICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzU3RyaW5nKG9ialsnZG93bmxvYWRUb2tlbnMnXSkpIHtcclxuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgb2JqZWN0cyBhcmUgdXBsb2FkZWQgdGhyb3VnaCBHQ1MgYW5kIHJldHJpZXZlZFxyXG4gICAgICAgIC8vIHRocm91Z2ggbGlzdCwgc28gd2UgZG9uJ3Qgd2FudCB0byB0aHJvdyBhbiBFcnJvci5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHZhciB0b2tlbnMgPSBvYmpbJ2Rvd25sb2FkVG9rZW5zJ107XHJcbiAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcclxuICAgIHZhciB0b2tlbnNMaXN0ID0gdG9rZW5zLnNwbGl0KCcsJyk7XHJcbiAgICB2YXIgdXJscyA9IHRva2Vuc0xpc3QubWFwKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIHZhciBidWNrZXQgPSBtZXRhZGF0YVsnYnVja2V0J107XHJcbiAgICAgICAgdmFyIHBhdGggPSBtZXRhZGF0YVsnZnVsbFBhdGgnXTtcclxuICAgICAgICB2YXIgdXJsUGFydCA9ICcvYi8nICsgZW5jb2RlKGJ1Y2tldCkgKyAnL28vJyArIGVuY29kZShwYXRoKTtcclxuICAgICAgICB2YXIgYmFzZSA9IG1ha2VVcmwodXJsUGFydCk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gbWFrZVF1ZXJ5U3RyaW5nKHtcclxuICAgICAgICAgICAgYWx0OiAnbWVkaWEnLFxyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW5cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYmFzZSArIHF1ZXJ5U3RyaW5nO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXJsc1swXTtcclxufVxyXG5mdW5jdGlvbiB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhLCBtYXBwaW5ncykge1xyXG4gICAgdmFyIHJlc291cmNlID0ge307XHJcbiAgICB2YXIgbGVuID0gbWFwcGluZ3MubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHZhciBtYXBwaW5nID0gbWFwcGluZ3NbaV07XHJcbiAgICAgICAgaWYgKG1hcHBpbmcud3JpdGFibGUpIHtcclxuICAgICAgICAgICAgcmVzb3VyY2VbbWFwcGluZy5zZXJ2ZXJdID0gbWV0YWRhdGFbbWFwcGluZy5sb2NhbF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc291cmNlKTtcclxufVxyXG5mdW5jdGlvbiBtZXRhZGF0YVZhbGlkYXRvcihwKSB7XHJcbiAgICBpZiAoIWlzT2JqZWN0KHApIHx8ICFwKSB7XHJcbiAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIE1ldGFkYXRhIG9iamVjdC4nO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIga2V5IGluIHApIHtcclxuICAgICAgICBpZiAocC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBwW2tleV07XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjdXN0b21NZXRhZGF0YScpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNPYmplY3QodmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBvYmplY3QgZm9yIFxcJ2N1c3RvbU1ldGFkYXRhXFwnIG1hcHBpbmcuJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc05vbk51bGxPYmplY3QodmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiTWFwcGluZyBmb3IgJ1wiICsga2V5ICsgXCInIGNhbm5vdCBiZSBhbiBvYmplY3QuXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIE1BWF9SRVNVTFRTX0tFWSA9ICdtYXhSZXN1bHRzJztcclxudmFyIE1BWF9NQVhfUkVTVUxUUyA9IDEwMDA7XHJcbnZhciBQQUdFX1RPS0VOX0tFWSA9ICdwYWdlVG9rZW4nO1xyXG52YXIgUFJFRklYRVNfS0VZID0gJ3ByZWZpeGVzJztcclxudmFyIElURU1TX0tFWSA9ICdpdGVtcyc7XHJcbmZ1bmN0aW9uIGZyb21CYWNrZW5kUmVzcG9uc2UoYXV0aFdyYXBwZXIsIGJ1Y2tldCwgcmVzb3VyY2UpIHtcclxuICAgIHZhciBsaXN0UmVzdWx0ID0ge1xyXG4gICAgICAgIHByZWZpeGVzOiBbXSxcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgbmV4dFBhZ2VUb2tlbjogcmVzb3VyY2VbJ25leHRQYWdlVG9rZW4nXVxyXG4gICAgfTtcclxuICAgIGlmIChyZXNvdXJjZVtQUkVGSVhFU19LRVldKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHJlc291cmNlW1BSRUZJWEVTX0tFWV07IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gX2FbX2ldO1xyXG4gICAgICAgICAgICB2YXIgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xyXG4gICAgICAgICAgICB2YXIgcmVmZXJlbmNlID0gYXV0aFdyYXBwZXIubWFrZVN0b3JhZ2VSZWZlcmVuY2UobmV3IExvY2F0aW9uKGJ1Y2tldCwgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoKSk7XHJcbiAgICAgICAgICAgIGxpc3RSZXN1bHQucHJlZml4ZXMucHVzaChyZWZlcmVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChyZXNvdXJjZVtJVEVNU19LRVldKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IHJlc291cmNlW0lURU1TX0tFWV07IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2NbX2JdO1xyXG4gICAgICAgICAgICB2YXIgcmVmZXJlbmNlID0gYXV0aFdyYXBwZXIubWFrZVN0b3JhZ2VSZWZlcmVuY2UobmV3IExvY2F0aW9uKGJ1Y2tldCwgaXRlbVsnbmFtZSddKSk7XHJcbiAgICAgICAgICAgIGxpc3RSZXN1bHQuaXRlbXMucHVzaChyZWZlcmVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0UmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGZyb21SZXNwb25zZVN0cmluZyhhdXRoV3JhcHBlciwgYnVja2V0LCByZXNvdXJjZVN0cmluZykge1xyXG4gICAgdmFyIG9iaiA9IGpzb25PYmplY3RPck51bGwocmVzb3VyY2VTdHJpbmcpO1xyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc291cmNlID0gb2JqO1xyXG4gICAgcmV0dXJuIGZyb21CYWNrZW5kUmVzcG9uc2UoYXV0aFdyYXBwZXIsIGJ1Y2tldCwgcmVzb3VyY2UpO1xyXG59XHJcbmZ1bmN0aW9uIGxpc3RPcHRpb25zVmFsaWRhdG9yKHApIHtcclxuICAgIGlmICghaXNPYmplY3QocCkgfHwgIXApIHtcclxuICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgTGlzdE9wdGlvbnMgb2JqZWN0Lic7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gcCkge1xyXG4gICAgICAgIGlmIChrZXkgPT09IE1BWF9SRVNVTFRTX0tFWSkge1xyXG4gICAgICAgICAgICBpZiAoIWlzSW50ZWdlcihwW01BWF9SRVNVTFRTX0tFWV0pIHx8XHJcbiAgICAgICAgICAgICAgICBwW01BWF9SRVNVTFRTX0tFWV0gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIG1heFJlc3VsdHMgdG8gYmUgYSBwb3NpdGl2ZSBudW1iZXIuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocFtNQVhfUkVTVUxUU19LRVldID4gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJFeHBlY3RlZCBtYXhSZXN1bHRzIHRvIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBcIiArIE1BWF9NQVhfUkVTVUxUUyArIFwiLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gUEFHRV9UT0tFTl9LRVkpIHtcclxuICAgICAgICAgICAgaWYgKHBbUEFHRV9UT0tFTl9LRVldICYmICFpc1N0cmluZyhwW1BBR0VfVE9LRU5fS0VZXSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBwYWdlVG9rZW4gdG8gYmUgc3RyaW5nLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93ICdVbmtub3duIG9wdGlvbjogJyArIGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxudmFyIFJlcXVlc3RJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB3aXRoIHdoaWNoIHRvIHJlc29sdmUgdGhlIHJlcXVlc3QncyBwcm9taXNlLiBPbmx5IGNhbGxlZFxyXG4gICAgICogaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC4gVGhyb3cgZnJvbSB0aGlzIGZ1bmN0aW9uIHRvIHJlamVjdCB0aGVcclxuICAgICAqIHJldHVybmVkIFJlcXVlc3QncyBwcm9taXNlIHdpdGggdGhlIHRocm93biBlcnJvci5cclxuICAgICAqIE5vdGU6IFRoZSBYaHJJbyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBtYXkgYmUgcmV1c2VkIGFmdGVyIHRoaXMgY2FsbGJhY2tcclxuICAgICAqIHJldHVybnMuIERvIG5vdCBrZWVwIGEgcmVmZXJlbmNlIHRvIGl0IGluIGFueSB3YXkuXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXIsIHRpbWVvdXQpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy51cmxQYXJhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsZWQgd2l0aCB0aGUgY3VycmVudCBudW1iZXIgb2YgYnl0ZXMgdXBsb2FkZWQgYW5kIHRvdGFsIHNpemUgKC0xIGlmIG5vdFxyXG4gICAgICAgICAqIGNvbXB1dGFibGUpIG9mIHRoZSByZXF1ZXN0IGJvZHkgKGkuZS4gdXNlZCB0byByZXBvcnQgdXBsb2FkIHByb2dyZXNzKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3VjY2Vzc0NvZGVzID0gWzIwMF07XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2RlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlcXVlc3RJbmZvO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhyb3dzIHRoZSBVTktOT1dOIEZpcmViYXNlU3RvcmFnZUVycm9yIGlmIGNuZG4gaXMgZmFsc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVyQ2hlY2soY25kbikge1xyXG4gICAgaWYgKCFjbmRuKSB7XHJcbiAgICAgICAgdGhyb3cgdW5rbm93bigpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1ldGFkYXRhSGFuZGxlcihhdXRoV3JhcHBlciwgbWFwcGluZ3MpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gZnJvbVJlc291cmNlU3RyaW5nKGF1dGhXcmFwcGVyLCB0ZXh0LCBtYXBwaW5ncyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKG1ldGFkYXRhICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBsaXN0SGFuZGxlcihhdXRoV3JhcHBlciwgYnVja2V0KSB7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhociwgdGV4dCkge1xyXG4gICAgICAgIHZhciBsaXN0UmVzdWx0ID0gZnJvbVJlc3BvbnNlU3RyaW5nKGF1dGhXcmFwcGVyLCBidWNrZXQsIHRleHQpO1xyXG4gICAgICAgIGhhbmRsZXJDaGVjayhsaXN0UmVzdWx0ICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gbGlzdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBoYW5kbGVyO1xyXG59XHJcbmZ1bmN0aW9uIGRvd25sb2FkVXJsSGFuZGxlcihhdXRoV3JhcHBlciwgbWFwcGluZ3MpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gZnJvbVJlc291cmNlU3RyaW5nKGF1dGhXcmFwcGVyLCB0ZXh0LCBtYXBwaW5ncyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKG1ldGFkYXRhICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gZG93bmxvYWRVcmxGcm9tUmVzb3VyY2VTdHJpbmcobWV0YWRhdGEsIHRleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZXI7XHJcbn1cclxuZnVuY3Rpb24gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoeGhyLCBlcnIpIHtcclxuICAgICAgICB2YXIgbmV3RXJyO1xyXG4gICAgICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMSkge1xyXG4gICAgICAgICAgICBuZXdFcnIgPSB1bmF1dGhlbnRpY2F0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMikge1xyXG4gICAgICAgICAgICAgICAgbmV3RXJyID0gcXVvdGFFeGNlZWRlZChsb2NhdGlvbi5idWNrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RXJyID0gdW5hdXRob3JpemVkKGxvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RXJyID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0Vyci5zZXRTZXJ2ZXJSZXNwb25zZVByb3AoZXJyLnNlcnZlclJlc3BvbnNlUHJvcCgpKTtcclxuICAgICAgICByZXR1cm4gbmV3RXJyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ySGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pIHtcclxuICAgIHZhciBzaGFyZWQgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKHhociwgZXJyKSB7XHJcbiAgICAgICAgdmFyIG5ld0VyciA9IHNoYXJlZCh4aHIsIGVycik7XHJcbiAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgIG5ld0VyciA9IG9iamVjdE5vdEZvdW5kKGxvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdFcnIuc2V0U2VydmVyUmVzcG9uc2VQcm9wKGVyci5zZXJ2ZXJSZXNwb25zZVByb3AoKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0VycjtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvckhhbmRsZXI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0TWV0YWRhdGEoYXV0aFdyYXBwZXIsIGxvY2F0aW9uLCBtYXBwaW5ncykge1xyXG4gICAgdmFyIHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XHJcbiAgICB2YXIgdXJsID0gbWFrZVVybCh1cmxQYXJ0KTtcclxuICAgIHZhciBtZXRob2QgPSAnR0VUJztcclxuICAgIHZhciB0aW1lb3V0ID0gYXV0aFdyYXBwZXIubWF4T3BlcmF0aW9uUmV0cnlUaW1lKCk7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIG1ldGFkYXRhSGFuZGxlcihhdXRoV3JhcHBlciwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gbGlzdChhdXRoV3JhcHBlciwgbG9jYXRpb24sIGRlbGltaXRlciwgcGFnZVRva2VuLCBtYXhSZXN1bHRzKSB7XHJcbiAgICB2YXIgdXJsUGFyYW1zID0ge307XHJcbiAgICBpZiAobG9jYXRpb24uaXNSb290KSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydwcmVmaXgnXSA9ICcnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydwcmVmaXgnXSA9IGxvY2F0aW9uLnBhdGggKyAnLyc7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVsaW1pdGVyICYmIGRlbGltaXRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydkZWxpbWl0ZXInXSA9IGRlbGltaXRlcjtcclxuICAgIH1cclxuICAgIGlmIChwYWdlVG9rZW4pIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ3BhZ2VUb2tlbiddID0gcGFnZVRva2VuO1xyXG4gICAgfVxyXG4gICAgaWYgKG1heFJlc3VsdHMpIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ21heFJlc3VsdHMnXSA9IG1heFJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBhdXRoV3JhcHBlci5tYXhPcGVyYXRpb25SZXRyeVRpbWUoKTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgbGlzdEhhbmRsZXIoYXV0aFdyYXBwZXIsIGxvY2F0aW9uLmJ1Y2tldCksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8udXJsUGFyYW1zID0gdXJsUGFyYW1zO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG5mdW5jdGlvbiBnZXREb3dubG9hZFVybChhdXRoV3JhcHBlciwgbG9jYXRpb24sIG1hcHBpbmdzKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdHRVQnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBhdXRoV3JhcHBlci5tYXhPcGVyYXRpb25SZXRyeVRpbWUoKTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgZG93bmxvYWRVcmxIYW5kbGVyKGF1dGhXcmFwcGVyLCBtYXBwaW5ncyksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gb2JqZWN0RXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVNZXRhZGF0YShhdXRoV3JhcHBlciwgbG9jYXRpb24sIG1ldGFkYXRhLCBtYXBwaW5ncykge1xyXG4gICAgdmFyIHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XHJcbiAgICB2YXIgdXJsID0gbWFrZVVybCh1cmxQYXJ0KTtcclxuICAgIHZhciBtZXRob2QgPSAnUEFUQ0gnO1xyXG4gICAgdmFyIGJvZHkgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhLCBtYXBwaW5ncyk7XHJcbiAgICB2YXIgaGVhZGVycyA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyB9O1xyXG4gICAgdmFyIHRpbWVvdXQgPSBhdXRoV3JhcHBlci5tYXhPcGVyYXRpb25SZXRyeVRpbWUoKTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgbWV0YWRhdGFIYW5kbGVyKGF1dGhXcmFwcGVyLCBtYXBwaW5ncyksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0KGF1dGhXcmFwcGVyLCBsb2NhdGlvbikge1xyXG4gICAgdmFyIHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XHJcbiAgICB2YXIgdXJsID0gbWFrZVVybCh1cmxQYXJ0KTtcclxuICAgIHZhciBtZXRob2QgPSAnREVMRVRFJztcclxuICAgIHZhciB0aW1lb3V0ID0gYXV0aFdyYXBwZXIubWF4T3BlcmF0aW9uUmV0cnlUaW1lKCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKF94aHIsIF90ZXh0KSB7IH1cclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5zdWNjZXNzQ29kZXMgPSBbMjAwLCAyMDRdO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gb2JqZWN0RXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG5mdW5jdGlvbiBkZXRlcm1pbmVDb250ZW50VHlwZV8obWV0YWRhdGEsIGJsb2IpIHtcclxuICAgIHJldHVybiAoKG1ldGFkYXRhICYmIG1ldGFkYXRhWydjb250ZW50VHlwZSddKSB8fFxyXG4gICAgICAgIChibG9iICYmIGJsb2IudHlwZSgpKSB8fFxyXG4gICAgICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKTtcclxufVxyXG5mdW5jdGlvbiBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICB2YXIgbWV0YWRhdGFDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGFkYXRhKTtcclxuICAgIG1ldGFkYXRhQ2xvbmVbJ2Z1bGxQYXRoJ10gPSBsb2NhdGlvbi5wYXRoO1xyXG4gICAgbWV0YWRhdGFDbG9uZVsnc2l6ZSddID0gYmxvYi5zaXplKCk7XHJcbiAgICBpZiAoIW1ldGFkYXRhQ2xvbmVbJ2NvbnRlbnRUeXBlJ10pIHtcclxuICAgICAgICBtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddID0gZGV0ZXJtaW5lQ29udGVudFR5cGVfKG51bGwsIGJsb2IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1ldGFkYXRhQ2xvbmU7XHJcbn1cclxuZnVuY3Rpb24gbXVsdGlwYXJ0VXBsb2FkKGF1dGhXcmFwcGVyLCBsb2NhdGlvbiwgbWFwcGluZ3MsIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLVByb3RvY29sJzogJ211bHRpcGFydCdcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBnZW5Cb3VuZGFyeSgpIHtcclxuICAgICAgICB2YXIgc3RyID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgc3RyID1cclxuICAgICAgICAgICAgICAgIHN0ciArXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgICB2YXIgYm91bmRhcnkgPSBnZW5Cb3VuZGFyeSgpO1xyXG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnbXVsdGlwYXJ0L3JlbGF0ZWQ7IGJvdW5kYXJ5PScgKyBib3VuZGFyeTtcclxuICAgIHZhciBtZXRhZGF0YV8gPSBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKTtcclxuICAgIHZhciBtZXRhZGF0YVN0cmluZyA9IHRvUmVzb3VyY2VTdHJpbmcobWV0YWRhdGFfLCBtYXBwaW5ncyk7XHJcbiAgICB2YXIgcHJlQmxvYlBhcnQgPSAnLS0nICtcclxuICAgICAgICBib3VuZGFyeSArXHJcbiAgICAgICAgJ1xcclxcbicgK1xyXG4gICAgICAgICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcXHJcXG5cXHJcXG4nICtcclxuICAgICAgICBtZXRhZGF0YVN0cmluZyArXHJcbiAgICAgICAgJ1xcclxcbi0tJyArXHJcbiAgICAgICAgYm91bmRhcnkgK1xyXG4gICAgICAgICdcXHJcXG4nICtcclxuICAgICAgICAnQ29udGVudC1UeXBlOiAnICtcclxuICAgICAgICBtZXRhZGF0YV9bJ2NvbnRlbnRUeXBlJ10gK1xyXG4gICAgICAgICdcXHJcXG5cXHJcXG4nO1xyXG4gICAgdmFyIHBvc3RCbG9iUGFydCA9ICdcXHJcXG4tLScgKyBib3VuZGFyeSArICctLSc7XHJcbiAgICB2YXIgYm9keSA9IEZic0Jsb2IuZ2V0QmxvYihwcmVCbG9iUGFydCwgYmxvYiwgcG9zdEJsb2JQYXJ0KTtcclxuICAgIGlmIChib2R5ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgY2Fubm90U2xpY2VCbG9iKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgdXJsUGFyYW1zID0geyBuYW1lOiBtZXRhZGF0YV9bJ2Z1bGxQYXRoJ10gfTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdQT1NUJztcclxuICAgIHZhciB0aW1lb3V0ID0gYXV0aFdyYXBwZXIubWF4VXBsb2FkUmV0cnlUaW1lKCk7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIG1ldGFkYXRhSGFuZGxlcihhdXRoV3JhcHBlciwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLnVybFBhcmFtcyA9IHVybFBhcmFtcztcclxuICAgIHJlcXVlc3RJbmZvLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHkudXBsb2FkRGF0YSgpO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG4vKipcclxuICogQHBhcmFtIGN1cnJlbnQgVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IGhhdmUgYmVlbiB1cGxvYWRlZCBzbyBmYXIuXHJcbiAqIEBwYXJhbSB0b3RhbCBUaGUgdG90YWwgbnVtYmVyIG9mIGJ5dGVzIGluIHRoZSB1cGxvYWQuXHJcbiAqIEBwYXJhbSBvcHRfZmluYWxpemVkIFRydWUgaWYgdGhlIHNlcnZlciBoYXMgZmluaXNoZWQgdGhlIHVwbG9hZC5cclxuICogQHBhcmFtIG9wdF9tZXRhZGF0YSBUaGUgdXBsb2FkIG1ldGFkYXRhLCBzaG91bGRcclxuICogICAgIG9ubHkgYmUgcGFzc2VkIGlmIG9wdF9maW5hbGl6ZWQgaXMgdHJ1ZS5cclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIFJlc3VtYWJsZVVwbG9hZFN0YXR1cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlc3VtYWJsZVVwbG9hZFN0YXR1cyhjdXJyZW50LCB0b3RhbCwgZmluYWxpemVkLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xyXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gISFmaW5hbGl6ZWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzdW1hYmxlVXBsb2FkU3RhdHVzO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBjaGVja1Jlc3VtZUhlYWRlcl8oeGhyLCBhbGxvd2VkKSB7XHJcbiAgICB2YXIgc3RhdHVzID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RhdHVzID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVN0YXR1cycpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdmFyIGFsbG93ZWRTdGF0dXMgPSBhbGxvd2VkIHx8IFsnYWN0aXZlJ107XHJcbiAgICBoYW5kbGVyQ2hlY2soISFzdGF0dXMgJiYgYWxsb3dlZFN0YXR1cy5pbmRleE9mKHN0YXR1cykgIT09IC0xKTtcclxuICAgIHJldHVybiBzdGF0dXM7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUmVzdW1hYmxlVXBsb2FkKGF1dGhXcmFwcGVyLCBsb2NhdGlvbiwgbWFwcGluZ3MsIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICB2YXIgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcclxuICAgIHZhciBtZXRhZGF0YUZvclVwbG9hZCA9IG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpO1xyXG4gICAgdmFyIHVybFBhcmFtcyA9IHsgbmFtZTogbWV0YWRhdGFGb3JVcGxvYWRbJ2Z1bGxQYXRoJ10gfTtcclxuICAgIHZhciB1cmwgPSBtYWtlVXJsKHVybFBhcnQpO1xyXG4gICAgdmFyIG1ldGhvZCA9ICdQT1NUJztcclxuICAgIHZhciBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLVByb3RvY29sJzogJ3Jlc3VtYWJsZScsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6ICdzdGFydCcsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtSGVhZGVyLUNvbnRlbnQtTGVuZ3RoJzogYmxvYi5zaXplKCksXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtSGVhZGVyLUNvbnRlbnQtVHlwZSc6IG1ldGFkYXRhRm9yVXBsb2FkWydjb250ZW50VHlwZSddLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcclxuICAgIH07XHJcbiAgICB2YXIgYm9keSA9IHRvUmVzb3VyY2VTdHJpbmcobWV0YWRhdGFGb3JVcGxvYWQsIG1hcHBpbmdzKTtcclxuICAgIHZhciB0aW1lb3V0ID0gYXV0aFdyYXBwZXIubWF4VXBsb2FkUmV0cnlUaW1lKCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhocikge1xyXG4gICAgICAgIGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIpO1xyXG4gICAgICAgIHZhciB1cmw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXJsID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVVSTCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVyQ2hlY2soaXNTdHJpbmcodXJsKSk7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5O1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG4vKipcclxuICogQHBhcmFtIHVybCBGcm9tIGEgY2FsbCB0byBmYnMucmVxdWVzdHMuY3JlYXRlUmVzdW1hYmxlVXBsb2FkLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVzdW1hYmxlVXBsb2FkU3RhdHVzKGF1dGhXcmFwcGVyLCBsb2NhdGlvbiwgdXJsLCBibG9iKSB7XHJcbiAgICB2YXIgaGVhZGVycyA9IHsgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6ICdxdWVyeScgfTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyKSB7XHJcbiAgICAgICAgdmFyIHN0YXR1cyA9IGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIsIFsnYWN0aXZlJywgJ2ZpbmFsJ10pO1xyXG4gICAgICAgIHZhciBzaXplU3RyaW5nID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzaXplU3RyaW5nID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVNpemUtUmVjZWl2ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaXplU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIG51bGwgb3IgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgICAgIGhhbmRsZXJDaGVjayhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaXplID0gTnVtYmVyKHNpemVTdHJpbmcpO1xyXG4gICAgICAgIGhhbmRsZXJDaGVjayghaXNOYU4oc2l6ZSkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKHNpemUsIGJsb2Iuc2l6ZSgpLCBzdGF0dXMgPT09ICdmaW5hbCcpO1xyXG4gICAgfVxyXG4gICAgdmFyIG1ldGhvZCA9ICdQT1NUJztcclxuICAgIHZhciB0aW1lb3V0ID0gYXV0aFdyYXBwZXIubWF4VXBsb2FkUmV0cnlUaW1lKCk7XHJcbiAgICB2YXIgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbi8qKlxyXG4gKiBBbnkgdXBsb2FkcyB2aWEgdGhlIHJlc3VtYWJsZSB1cGxvYWQgQVBJIG11c3QgdHJhbnNmZXIgYSBudW1iZXIgb2YgYnl0ZXNcclxuICogdGhhdCBpcyBhIG11bHRpcGxlIG9mIHRoaXMgbnVtYmVyLlxyXG4gKi9cclxudmFyIHJlc3VtYWJsZVVwbG9hZENodW5rU2l6ZSA9IDI1NiAqIDEwMjQ7XHJcbi8qKlxyXG4gKiBAcGFyYW0gdXJsIEZyb20gYSBjYWxsIHRvIGZicy5yZXF1ZXN0cy5jcmVhdGVSZXN1bWFibGVVcGxvYWQuXHJcbiAqIEBwYXJhbSBjaHVua1NpemUgTnVtYmVyIG9mIGJ5dGVzIHRvIHVwbG9hZC5cclxuICogQHBhcmFtIHN0YXR1cyBUaGUgcHJldmlvdXMgc3RhdHVzLlxyXG4gKiAgICAgSWYgbm90IHBhc3NlZCBvciBudWxsLCB3ZSBzdGFydCBmcm9tIHRoZSBiZWdpbm5pbmcuXHJcbiAqIEB0aHJvd3MgZmJzLkVycm9yIElmIHRoZSB1cGxvYWQgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlIHBhc3NlZCBpbiBzdGF0dXNcclxuICogICAgIGhhcyBhIGZpbmFsIHNpemUgaW5jb25zaXN0ZW50IHdpdGggdGhlIGJsb2IsIG9yIHRoZSBibG9iIGNhbm5vdCBiZSBzbGljZWRcclxuICogICAgIGZvciB1cGxvYWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb250aW51ZVJlc3VtYWJsZVVwbG9hZChsb2NhdGlvbiwgYXV0aFdyYXBwZXIsIHVybCwgYmxvYiwgY2h1bmtTaXplLCBtYXBwaW5ncywgc3RhdHVzLCBwcm9ncmVzc0NhbGxiYWNrKSB7XHJcbiAgICAvLyBUT0RPKGFuZHlzb3RvKTogc3RhbmRhcmRpemUgb24gaW50ZXJuYWwgYXNzZXJ0c1xyXG4gICAgLy8gYXNzZXJ0KCEob3B0X3N0YXR1cyAmJiBvcHRfc3RhdHVzLmZpbmFsaXplZCkpO1xyXG4gICAgdmFyIHN0YXR1c18gPSBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKDAsIDApO1xyXG4gICAgaWYgKHN0YXR1cykge1xyXG4gICAgICAgIHN0YXR1c18uY3VycmVudCA9IHN0YXR1cy5jdXJyZW50O1xyXG4gICAgICAgIHN0YXR1c18udG90YWwgPSBzdGF0dXMudG90YWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGF0dXNfLmN1cnJlbnQgPSAwO1xyXG4gICAgICAgIHN0YXR1c18udG90YWwgPSBibG9iLnNpemUoKTtcclxuICAgIH1cclxuICAgIGlmIChibG9iLnNpemUoKSAhPT0gc3RhdHVzXy50b3RhbCkge1xyXG4gICAgICAgIHRocm93IHNlcnZlckZpbGVXcm9uZ1NpemUoKTtcclxuICAgIH1cclxuICAgIHZhciBieXRlc0xlZnQgPSBzdGF0dXNfLnRvdGFsIC0gc3RhdHVzXy5jdXJyZW50O1xyXG4gICAgdmFyIGJ5dGVzVG9VcGxvYWQgPSBieXRlc0xlZnQ7XHJcbiAgICBpZiAoY2h1bmtTaXplID4gMCkge1xyXG4gICAgICAgIGJ5dGVzVG9VcGxvYWQgPSBNYXRoLm1pbihieXRlc1RvVXBsb2FkLCBjaHVua1NpemUpO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0YXJ0Qnl0ZSA9IHN0YXR1c18uY3VycmVudDtcclxuICAgIHZhciBlbmRCeXRlID0gc3RhcnRCeXRlICsgYnl0ZXNUb1VwbG9hZDtcclxuICAgIHZhciB1cGxvYWRDb21tYW5kID0gYnl0ZXNUb1VwbG9hZCA9PT0gYnl0ZXNMZWZ0ID8gJ3VwbG9hZCwgZmluYWxpemUnIDogJ3VwbG9hZCc7XHJcbiAgICB2YXIgaGVhZGVycyA9IHtcclxuICAgICAgICAnWC1Hb29nLVVwbG9hZC1Db21tYW5kJzogdXBsb2FkQ29tbWFuZCxcclxuICAgICAgICAnWC1Hb29nLVVwbG9hZC1PZmZzZXQnOiBzdGF0dXNfLmN1cnJlbnRcclxuICAgIH07XHJcbiAgICB2YXIgYm9keSA9IGJsb2Iuc2xpY2Uoc3RhcnRCeXRlLCBlbmRCeXRlKTtcclxuICAgIGlmIChib2R5ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgY2Fubm90U2xpY2VCbG9iKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhociwgdGV4dCkge1xyXG4gICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOiBWZXJpZnkgdGhlIE1ENSBvZiBlYWNoIHVwbG9hZGVkIHJhbmdlOlxyXG4gICAgICAgIC8vIHRoZSAneC1yYW5nZS1tZDUnIGhlYWRlciBjb21lcyBiYWNrIHdpdGggc3RhdHVzIGNvZGUgMzA4IHJlc3BvbnNlcy5cclxuICAgICAgICAvLyBXZSdsbCBvbmx5IGJlIGFibGUgdG8gYmFpbCBvdXQgdGhvdWdoLCBiZWNhdXNlIHlvdSBjYW4ndCByZS11cGxvYWQgYVxyXG4gICAgICAgIC8vIHJhbmdlIHRoYXQgeW91IHByZXZpb3VzbHkgdXBsb2FkZWQuXHJcbiAgICAgICAgdmFyIHVwbG9hZFN0YXR1cyA9IGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIsIFsnYWN0aXZlJywgJ2ZpbmFsJ10pO1xyXG4gICAgICAgIHZhciBuZXdDdXJyZW50ID0gc3RhdHVzXy5jdXJyZW50ICsgYnl0ZXNUb1VwbG9hZDtcclxuICAgICAgICB2YXIgc2l6ZSA9IGJsb2Iuc2l6ZSgpO1xyXG4gICAgICAgIHZhciBtZXRhZGF0YTtcclxuICAgICAgICBpZiAodXBsb2FkU3RhdHVzID09PSAnZmluYWwnKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhID0gbWV0YWRhdGFIYW5kbGVyKGF1dGhXcmFwcGVyLCBtYXBwaW5ncykoeGhyLCB0ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMobmV3Q3VycmVudCwgc2l6ZSwgdXBsb2FkU3RhdHVzID09PSAnZmluYWwnLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcbiAgICB2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgdmFyIHRpbWVvdXQgPSBhdXRoV3JhcHBlci5tYXhVcGxvYWRSZXRyeVRpbWUoKTtcclxuICAgIHZhciByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5LnVwbG9hZERhdGEoKTtcclxuICAgIHJlcXVlc3RJbmZvLnByb2dyZXNzQ2FsbGJhY2sgPSBwcm9ncmVzc0NhbGxiYWNrIHx8IG51bGw7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAc3RydWN0XHJcbiAqL1xyXG52YXIgT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPYnNlcnZlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKSB7XHJcbiAgICAgICAgdmFyIGFzRnVuY3Rpb25zID0gaXNGdW5jdGlvbihuZXh0T3JPYnNlcnZlcikgfHxcclxuICAgICAgICAgICAgaXNEZWYoZXJyb3IpIHx8XHJcbiAgICAgICAgICAgIGlzRGVmKGNvbXBsZXRlKTtcclxuICAgICAgICBpZiAoYXNGdW5jdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gbmV4dE9yT2JzZXJ2ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvciB8fCBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGUgfHwgbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5leHRPck9ic2VydmVyO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQgPSBvYnNlcnZlci5uZXh0IHx8IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBvYnNlcnZlci5lcnJvciB8fCBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gb2JzZXJ2ZXIuY29tcGxldGUgfHwgbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JzZXJ2ZXI7XHJcbn0oKSk7XG5cbnZhciBVcGxvYWRUYXNrU25hcHNob3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVcGxvYWRUYXNrU25hcHNob3QoYnl0ZXNUcmFuc2ZlcnJlZCwgdG90YWxCeXRlcywgc3RhdGUsIG1ldGFkYXRhLCB0YXNrLCByZWYpIHtcclxuICAgICAgICB0aGlzLmJ5dGVzVHJhbnNmZXJyZWQgPSBieXRlc1RyYW5zZmVycmVkO1xyXG4gICAgICAgIHRoaXMudG90YWxCeXRlcyA9IHRvdGFsQnl0ZXM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xyXG4gICAgICAgIHRoaXMucmVmID0gcmVmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFVwbG9hZFRhc2tTbmFwc2hvdDtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gc3BlY3MgQXJndW1lbnQgc3BlY3MuXHJcbiAqIEBwYXJhbSBwYXNzZWQgVGhlIGFjdHVhbCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cclxuICogQHRocm93cyB7ZmJzLkVycm9yfSBJZiB0aGUgYXJndW1lbnRzIGFyZSBpbnZhbGlkLlxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGUobmFtZSwgc3BlY3MsIHBhc3NlZCkge1xyXG4gICAgdmFyIG1pbkFyZ3MgPSBzcGVjcy5sZW5ndGg7XHJcbiAgICB2YXIgbWF4QXJncyA9IHNwZWNzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BlY3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3BlY3NbaV0ub3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgbWluQXJncyA9IGk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciB2YWxpZExlbmd0aCA9IG1pbkFyZ3MgPD0gcGFzc2VkLmxlbmd0aCAmJiBwYXNzZWQubGVuZ3RoIDw9IG1heEFyZ3M7XHJcbiAgICBpZiAoIXZhbGlkTGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50Q291bnQobWluQXJncywgbWF4QXJncywgbmFtZSwgcGFzc2VkLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhc3NlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNwZWNzW2ldLnZhbGlkYXRvcihwYXNzZWRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBpbnZhbGlkQXJndW1lbnQoaSwgbmFtZSwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGludmFsaWRBcmd1bWVudChpLCBuYW1lLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIEFyZ1NwZWMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcmdTcGVjKHZhbGlkYXRvciwgb3B0aW9uYWwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25hbCAmJiAhaXNKdXN0RGVmKHApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsaWRhdG9yKHApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcHRpb25hbCA9ICEhb3B0aW9uYWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJnU3BlYztcclxufSgpKTtcclxuZnVuY3Rpb24gYW5kXyh2MSwgdjIpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgIHYxKHApO1xyXG4gICAgICAgIHYyKHApO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdTcGVjKHZhbGlkYXRvciwgb3B0aW9uYWwpIHtcclxuICAgIGZ1bmN0aW9uIHN0cmluZ1ZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgaWYgKCFpc1N0cmluZyhwKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgc3RyaW5nLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGNoYWluZWRWYWxpZGF0b3I7XHJcbiAgICBpZiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgY2hhaW5lZFZhbGlkYXRvciA9IGFuZF8oc3RyaW5nVmFsaWRhdG9yLCB2YWxpZGF0b3IpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2hhaW5lZFZhbGlkYXRvciA9IHN0cmluZ1ZhbGlkYXRvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQXJnU3BlYyhjaGFpbmVkVmFsaWRhdG9yLCBvcHRpb25hbCk7XHJcbn1cclxuZnVuY3Rpb24gdXBsb2FkRGF0YVNwZWMoKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0b3IocCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHAgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8XHJcbiAgICAgICAgICAgIHAgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fFxyXG4gICAgICAgICAgICAoaXNOYXRpdmVCbG9iRGVmaW5lZCgpICYmIHAgaW5zdGFuY2VvZiBCbG9iKTtcclxuICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBCbG9iIG9yIEZpbGUuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWModmFsaWRhdG9yKTtcclxufVxyXG5mdW5jdGlvbiBtZXRhZGF0YVNwZWMob3B0aW9uYWwpIHtcclxuICAgIHJldHVybiBuZXcgQXJnU3BlYyhtZXRhZGF0YVZhbGlkYXRvciwgb3B0aW9uYWwpO1xyXG59XHJcbmZ1bmN0aW9uIGxpc3RPcHRpb25TcGVjKG9wdGlvbmFsKSB7XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWMobGlzdE9wdGlvbnNWYWxpZGF0b3IsIG9wdGlvbmFsKTtcclxufVxyXG5mdW5jdGlvbiBub25OZWdhdGl2ZU51bWJlclNwZWMoKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0b3IocCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IGlzTnVtYmVyKHApICYmIHAgPj0gMDtcclxuICAgICAgICBpZiAoIXZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBhIG51bWJlciAwIG9yIGdyZWF0ZXIuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWModmFsaWRhdG9yKTtcclxufVxyXG5mdW5jdGlvbiBsb29zZU9iamVjdFNwZWModmFsaWRhdG9yLCBvcHRpb25hbCkge1xyXG4gICAgZnVuY3Rpb24gaXNMb29zZU9iamVjdFZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgdmFyIGlzTG9vc2VPYmplY3QgPSBwID09PSBudWxsIHx8IChpc0RlZihwKSAmJiBwIGluc3RhbmNlb2YgT2JqZWN0KTtcclxuICAgICAgICBpZiAoIWlzTG9vc2VPYmplY3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGFuIE9iamVjdC4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsaWRhdG9yICE9PSB1bmRlZmluZWQgJiYgdmFsaWRhdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcihwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWMoaXNMb29zZU9iamVjdFZhbGlkYXRvciwgb3B0aW9uYWwpO1xyXG59XHJcbmZ1bmN0aW9uIG51bGxGdW5jdGlvblNwZWMob3B0aW9uYWwpIHtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkID0gcCA9PT0gbnVsbCB8fCBpc0Z1bmN0aW9uKHApO1xyXG4gICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGEgRnVuY3Rpb24uJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEFyZ1NwZWModmFsaWRhdG9yLCBvcHRpb25hbCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgZiB3aXRoIGl0cyBhcmd1bWVudHMgYXN5bmNocm9ub3VzbHkgYXMgYVxyXG4gKiBtaWNyb3Rhc2ssIGkuZS4gYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciB0aGUgY3VycmVudCBzY3JpcHQgcmV0dXJucyBiYWNrXHJcbiAqIGludG8gYnJvd3NlciBjb2RlLlxyXG4gKi9cclxuZnVuY3Rpb24gYXN5bmMoZikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJnc1RvRm9yd2FyZCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NUb0ZvcndhcmRbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZi5hcHBseSh2b2lkIDAsIGFyZ3NUb0ZvcndhcmQpOyB9KTtcclxuICAgIH07XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBibG9iIGJlaW5nIHVwbG9hZGVkLiBDYW4gYmUgdXNlZCB0byBwYXVzZS9yZXN1bWUvY2FuY2VsIHRoZVxyXG4gKiB1cGxvYWQgYW5kIG1hbmFnZSBjYWxsYmFja3MgZm9yIHZhcmlvdXMgZXZlbnRzLlxyXG4gKi9cclxudmFyIFVwbG9hZFRhc2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSByZWYgVGhlIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2Ugb2JqZWN0IHRoaXMgdGFzayBjYW1lXHJcbiAgICAgKiAgICAgZnJvbSwgdW50eXBlZCB0byBhdm9pZCBjeWNsaWMgZGVwZW5kZW5jaWVzLlxyXG4gICAgICogQHBhcmFtIGJsb2IgVGhlIGJsb2IgdG8gdXBsb2FkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBVcGxvYWRUYXNrKHJlZiwgYXV0aFdyYXBwZXIsIGxvY2F0aW9uLCBtYXBwaW5ncywgYmxvYiwgbWV0YWRhdGEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChtZXRhZGF0YSA9PT0gdm9pZCAwKSB7IG1ldGFkYXRhID0gbnVsbDsgfVxyXG4gICAgICAgIHRoaXMudHJhbnNmZXJyZWRfID0gMDtcclxuICAgICAgICB0aGlzLm5lZWRUb0ZldGNoU3RhdHVzXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmVlZFRvRmV0Y2hNZXRhZGF0YV8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyc18gPSBbXTtcclxuICAgICAgICB0aGlzLmVycm9yXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51cGxvYWRVcmxfID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlcXVlc3RfID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNodW5rTXVsdGlwbGllcl8gPSAxO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZV8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVqZWN0XyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWZfID0gcmVmO1xyXG4gICAgICAgIHRoaXMuYXV0aFdyYXBwZXJfID0gYXV0aFdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbl8gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLmJsb2JfID0gYmxvYjtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhXyA9IG1ldGFkYXRhO1xyXG4gICAgICAgIHRoaXMubWFwcGluZ3NfID0gbWFwcGluZ3M7XHJcbiAgICAgICAgdGhpcy5yZXN1bWFibGVfID0gdGhpcy5zaG91bGREb1Jlc3VtYWJsZV8odGhpcy5ibG9iXyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZV8gPSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HO1xyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyXyA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgIF90aGlzLmNodW5rTXVsdGlwbGllcl8gPSAxO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZUVxdWFscyhDb2RlLkNBTkNFTEVEKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubmVlZFRvRmV0Y2hTdGF0dXNfID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lcnJvcl8gPSBlcnJvcjtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLkVSUk9SKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YUVycm9ySGFuZGxlcl8gPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IuY29kZUVxdWFscyhDb2RlLkNBTkNFTEVEKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yXyA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuRVJST1IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlXyA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIF90aGlzLnJlamVjdF8gPSByZWplY3Q7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0XygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFByZXZlbnQgdW5jYXVnaHQgcmVqZWN0aW9ucyBvbiB0aGUgaW50ZXJuYWwgcHJvbWlzZSBmcm9tIGJ1YmJsaW5nIG91dFxyXG4gICAgICAgIC8vIHRvIHRoZSB0b3AgbGV2ZWwgd2l0aCBhIGR1bW15IGhhbmRsZXIuXHJcbiAgICAgICAgdGhpcy5wcm9taXNlXy50aGVuKG51bGwsIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICB9XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5tYWtlUHJvZ3Jlc3NDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgc2l6ZUJlZm9yZSA9IHRoaXMudHJhbnNmZXJyZWRfO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobG9hZGVkKSB7IHJldHVybiBfdGhpcy51cGRhdGVQcm9ncmVzc18oc2l6ZUJlZm9yZSArIGxvYWRlZCk7IH07XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuc2hvdWxkRG9SZXN1bWFibGVfID0gZnVuY3Rpb24gKGJsb2IpIHtcclxuICAgICAgICByZXR1cm4gYmxvYi5zaXplKCkgPiAyNTYgKiAxMDI0O1xyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLnN0YXJ0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZV8gIT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHNvbWVvbmUgcGF1c2VzIHVzIGluIGEgcmVzdW1lIGNhbGxiYWNrLCBmb3IgZXhhbXBsZS5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0XyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJlc3VtYWJsZV8pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXBsb2FkVXJsXyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSZXN1bWFibGVfKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZWVkVG9GZXRjaFN0YXR1c18pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoU3RhdHVzXygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubmVlZFRvRmV0Y2hNZXRhZGF0YV8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFwcGVucyBpZiB3ZSBtaXNzIHRoZSBtZXRhZGF0YSBvbiB1cGxvYWQgY29tcGxldGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaE1ldGFkYXRhXygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250aW51ZVVwbG9hZF8oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25lU2hvdFVwbG9hZF8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUucmVzb2x2ZVRva2VuXyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMuYXV0aFdyYXBwZXJfLmdldEF1dGhUb2tlbigpLnRoZW4oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF90aGlzLnN0YXRlXykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORzpcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlBBVVNJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQgZmFsc2VcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmNyZWF0ZVJlc3VtYWJsZV8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlc29sdmVUb2tlbl8oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm8gPSBjcmVhdGVSZXN1bWFibGVVcGxvYWQoX3RoaXMuYXV0aFdyYXBwZXJfLCBfdGhpcy5sb2NhdGlvbl8sIF90aGlzLm1hcHBpbmdzXywgX3RoaXMuYmxvYl8sIF90aGlzLm1ldGFkYXRhXyk7XHJcbiAgICAgICAgICAgIHZhciBjcmVhdGVSZXF1ZXN0ID0gX3RoaXMuYXV0aFdyYXBwZXJfLm1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pO1xyXG4gICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IGNyZWF0ZVJlcXVlc3Q7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBsb2FkVXJsXyA9IHVybDtcclxuICAgICAgICAgICAgICAgIF90aGlzLm5lZWRUb0ZldGNoU3RhdHVzXyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgfSwgX3RoaXMuZXJyb3JIYW5kbGVyXyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuZmV0Y2hTdGF0dXNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6IGFzc2VydCh0aGlzLnVwbG9hZFVybF8gIT09IG51bGwpO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnVwbG9hZFVybF87XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlVG9rZW5fKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gZ2V0UmVzdW1hYmxlVXBsb2FkU3RhdHVzKF90aGlzLmF1dGhXcmFwcGVyXywgX3RoaXMubG9jYXRpb25fLCB1cmwsIF90aGlzLmJsb2JfKTtcclxuICAgICAgICAgICAgdmFyIHN0YXR1c1JlcXVlc3QgPSBfdGhpcy5hdXRoV3JhcHBlcl8ubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gc3RhdHVzUmVxdWVzdDtcclxuICAgICAgICAgICAgc3RhdHVzUmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQcm9ncmVzc18oc3RhdHVzLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubmVlZFRvRmV0Y2hTdGF0dXNfID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5lZWRUb0ZldGNoTWV0YWRhdGFfID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XHJcbiAgICAgICAgICAgIH0sIF90aGlzLmVycm9ySGFuZGxlcl8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmNvbnRpbnVlVXBsb2FkXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjaHVua1NpemUgPSByZXN1bWFibGVVcGxvYWRDaHVua1NpemUgKiB0aGlzLmNodW5rTXVsdGlwbGllcl87XHJcbiAgICAgICAgdmFyIHN0YXR1cyA9IG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXModGhpcy50cmFuc2ZlcnJlZF8sIHRoaXMuYmxvYl8uc2l6ZSgpKTtcclxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KHRoaXMudXBsb2FkVXJsXyAhPT0gbnVsbCk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMudXBsb2FkVXJsXztcclxuICAgICAgICB0aGlzLnJlc29sdmVUb2tlbl8oZnVuY3Rpb24gKGF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEluZm87XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SW5mbyA9IGNvbnRpbnVlUmVzdW1hYmxlVXBsb2FkKF90aGlzLmxvY2F0aW9uXywgX3RoaXMuYXV0aFdyYXBwZXJfLCB1cmwsIF90aGlzLmJsb2JfLCBjaHVua1NpemUsIF90aGlzLm1hcHBpbmdzXywgc3RhdHVzLCBfdGhpcy5tYWtlUHJvZ3Jlc3NDYWxsYmFja18oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVycm9yXyA9IGU7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5FUlJPUik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHVwbG9hZFJlcXVlc3QgPSBfdGhpcy5hdXRoV3JhcHBlcl8ubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gdXBsb2FkUmVxdWVzdDtcclxuICAgICAgICAgICAgdXBsb2FkUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgLmdldFByb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5ld1N0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5jcmVhc2VNdWx0aXBsaWVyXygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUHJvZ3Jlc3NfKG5ld1N0YXR1cy5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0dXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWV0YWRhdGFfID0gbmV3U3RhdHVzLm1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgX3RoaXMuZXJyb3JIYW5kbGVyXyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUuaW5jcmVhc2VNdWx0aXBsaWVyXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VycmVudFNpemUgPSByZXN1bWFibGVVcGxvYWRDaHVua1NpemUgKiB0aGlzLmNodW5rTXVsdGlwbGllcl87XHJcbiAgICAgICAgLy8gTWF4IGNodW5rIHNpemUgaXMgMzJNLlxyXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA8IDMyICogMTAyNCAqIDEwMjQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaHVua011bHRpcGxpZXJfICo9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmZldGNoTWV0YWRhdGFfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlVG9rZW5fKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gZ2V0TWV0YWRhdGEoX3RoaXMuYXV0aFdyYXBwZXJfLCBfdGhpcy5sb2NhdGlvbl8sIF90aGlzLm1hcHBpbmdzXyk7XHJcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YVJlcXVlc3QgPSBfdGhpcy5hdXRoV3JhcHBlcl8ubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbik7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcXVlc3RfID0gbWV0YWRhdGFSZXF1ZXN0O1xyXG4gICAgICAgICAgICBtZXRhZGF0YVJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0XyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5tZXRhZGF0YV8gPSBtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICAgICAgICB9LCBfdGhpcy5tZXRhZGF0YUVycm9ySGFuZGxlcl8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLm9uZVNob3RVcGxvYWRfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlVG9rZW5fKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gbXVsdGlwYXJ0VXBsb2FkKF90aGlzLmF1dGhXcmFwcGVyXywgX3RoaXMubG9jYXRpb25fLCBfdGhpcy5tYXBwaW5nc18sIF90aGlzLmJsb2JfLCBfdGhpcy5tZXRhZGF0YV8pO1xyXG4gICAgICAgICAgICB2YXIgbXVsdGlwYXJ0UmVxdWVzdCA9IF90aGlzLmF1dGhXcmFwcGVyXy5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKTtcclxuICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBtdWx0aXBhcnRSZXF1ZXN0O1xyXG4gICAgICAgICAgICBtdWx0aXBhcnRSZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKGZ1bmN0aW9uIChtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdF8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubWV0YWRhdGFfID0gbWV0YWRhdGE7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQcm9ncmVzc18oX3RoaXMuYmxvYl8uc2l6ZSgpKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1MpO1xyXG4gICAgICAgICAgICB9LCBfdGhpcy5lcnJvckhhbmRsZXJfKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS51cGRhdGVQcm9ncmVzc18gPSBmdW5jdGlvbiAodHJhbnNmZXJyZWQpIHtcclxuICAgICAgICB2YXIgb2xkID0gdGhpcy50cmFuc2ZlcnJlZF87XHJcbiAgICAgICAgdGhpcy50cmFuc2ZlcnJlZF8gPSB0cmFuc2ZlcnJlZDtcclxuICAgICAgICAvLyBBIHByb2dyZXNzIHVwZGF0ZSBjYW4gbWFrZSB0aGUgXCJ0cmFuc2ZlcnJlZFwiIHZhbHVlIHNtYWxsZXIgKGUuZy4gYVxyXG4gICAgICAgIC8vIHBhcnRpYWwgdXBsb2FkIG5vdCBjb21wbGV0ZWQgYnkgc2VydmVyLCBhZnRlciB3aGljaCB0aGUgXCJ0cmFuc2ZlcnJlZFwiXHJcbiAgICAgICAgLy8gdmFsdWUgbWF5IHJlc2V0IHRvIHRoZSB2YWx1ZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSByZXF1ZXN0KS5cclxuICAgICAgICBpZiAodGhpcy50cmFuc2ZlcnJlZF8gIT09IG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVyc18oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUudHJhbnNpdGlvbl8gPSBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZV8gPT09IHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcXVlc3RfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0Xy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlBBVVNJTkc6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXyA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVxdWVzdF8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RfLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2FzUGF1c2VkID0gdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVfID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAod2FzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydF8oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlBBVVNFRDpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVfID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVyc18oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTEVEOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRCB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcl8gPSBjYW5jZWxlZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuRVJST1I6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXyA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLmNvbXBsZXRlVHJhbnNpdGlvbnNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZV8pIHtcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uXyhJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxFRCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydF8oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVXBsb2FkVGFzay5wcm90b3R5cGUsIFwic25hcHNob3RcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZXh0ZXJuYWxTdGF0ZSA9IHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLnN0YXRlXyk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXBsb2FkVGFza1NuYXBzaG90KHRoaXMudHJhbnNmZXJyZWRfLCB0aGlzLmJsb2JfLnNpemUoKSwgZXh0ZXJuYWxTdGF0ZSwgdGhpcy5tZXRhZGF0YV8sIHRoaXMsIHRoaXMucmVmXyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBjYWxsYmFjayBmb3IgYW4gZXZlbnQuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICh0eXBlLCBuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlZCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIHR5cGVWYWxpZGF0b3IoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBUYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJFeHBlY3RlZCBvbmUgb2YgdGhlIGV2ZW50IHR5cGVzOiBbXCIgKyBUYXNrRXZlbnQuU1RBVEVfQ0hBTkdFRCArIFwiXS5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV4dE9yT2JzZXJ2ZXJNZXNzYWdlID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24gb3IgYW4gT2JqZWN0IHdpdGggb25lIG9mICcgK1xyXG4gICAgICAgICAgICAnYG5leHRgLCBgZXJyb3JgLCBgY29tcGxldGVgIHByb3BlcnRpZXMuJztcclxuICAgICAgICB2YXIgbmV4dFZhbGlkYXRvciA9IG51bGxGdW5jdGlvblNwZWModHJ1ZSkudmFsaWRhdG9yO1xyXG4gICAgICAgIHZhciBvYnNlcnZlclZhbGlkYXRvciA9IGxvb3NlT2JqZWN0U3BlYyhudWxsLCB0cnVlKS52YWxpZGF0b3I7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBmdW5jdGlvbiBuZXh0T3JPYnNlcnZlclZhbGlkYXRvcihwKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0VmFsaWRhdG9yKHApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyVmFsaWRhdG9yKHApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFueURlZmluZWQgPSBpc0p1c3REZWYocFsnbmV4dCddKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSnVzdERlZihwWydlcnJvciddKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSnVzdERlZihwWydjb21wbGV0ZSddKTtcclxuICAgICAgICAgICAgICAgIGlmICghYW55RGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXh0T3JPYnNlcnZlck1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNwZWNzID0gW1xyXG4gICAgICAgICAgICBzdHJpbmdTcGVjKHR5cGVWYWxpZGF0b3IpLFxyXG4gICAgICAgICAgICBsb29zZU9iamVjdFNwZWMobmV4dE9yT2JzZXJ2ZXJWYWxpZGF0b3IsIHRydWUpLFxyXG4gICAgICAgICAgICBudWxsRnVuY3Rpb25TcGVjKHRydWUpLFxyXG4gICAgICAgICAgICBudWxsRnVuY3Rpb25TcGVjKHRydWUpXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YWxpZGF0ZSgnb24nLCBzcGVjcywgYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gbWFrZUJpbmRlcihzcGVjcykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBiaW5kZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwZWNzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUoJ29uJywgc3BlY3MsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hZGRPYnNlcnZlcl8ob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZU9ic2VydmVyXyhvYnNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBiaW5kZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRlck5leHRPck9ic2VydmVyVmFsaWRhdG9yKHApIHtcclxuICAgICAgICAgICAgaWYgKHAgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5leHRPck9ic2VydmVyTWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXh0T3JPYnNlcnZlclZhbGlkYXRvcihwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGJpbmRlclNwZWNzID0gW1xyXG4gICAgICAgICAgICBsb29zZU9iamVjdFNwZWMoYmluZGVyTmV4dE9yT2JzZXJ2ZXJWYWxpZGF0b3IpLFxyXG4gICAgICAgICAgICBudWxsRnVuY3Rpb25TcGVjKHRydWUpLFxyXG4gICAgICAgICAgICBudWxsRnVuY3Rpb25TcGVjKHRydWUpXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgdHlwZU9ubHkgPSAhKGlzSnVzdERlZihuZXh0T3JPYnNlcnZlcikgfHxcclxuICAgICAgICAgICAgaXNKdXN0RGVmKGVycm9yKSB8fFxyXG4gICAgICAgICAgICBpc0p1c3REZWYoY29tcGxldGVkKSk7XHJcbiAgICAgICAgaWYgKHR5cGVPbmx5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlQmluZGVyKGJpbmRlclNwZWNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWtlQmluZGVyKG51bGwpKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG9iamVjdCBiZWhhdmVzIGxpa2UgYSBQcm9taXNlLCBhbmQgcmVzb2x2ZXMgd2l0aCBpdHMgc25hcHNob3QgZGF0YVxyXG4gICAgICogd2hlbiB0aGUgdXBsb2FkIGNvbXBsZXRlcy5cclxuICAgICAqIEBwYXJhbSBvbkZ1bGZpbGxlZCBUaGUgZnVsZmlsbG1lbnQgY2FsbGJhY2suIFByb21pc2UgY2hhaW5pbmcgd29ya3MgYXMgbm9ybWFsLlxyXG4gICAgICogQHBhcmFtIG9uUmVqZWN0ZWQgVGhlIHJlamVjdGlvbiBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xyXG4gICAgICAgIC8vIFRoZXNlIGNhc3RzIGFyZSBuZWVkZWQgc28gdGhhdCBUeXBlU2NyaXB0IGNhbiBpbmZlciB0aGUgdHlwZXMgb2YgdGhlXHJcbiAgICAgICAgLy8gcmVzdWx0aW5nIFByb21pc2UuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZV8udGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFcXVpdmFsZW50IHRvIGNhbGxpbmcgYHRoZW4obnVsbCwgb25SZWplY3RlZClgLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIGdpdmVuIG9ic2VydmVyLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5hZGRPYnNlcnZlcl8gPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyc18ucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcl8ob2JzZXJ2ZXIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gb2JzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIFVwbG9hZFRhc2sucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyXyA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHZhciBpID0gdGhpcy5vYnNlcnZlcnNfLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgIGlmIChpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyc18uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5ub3RpZnlPYnNlcnZlcnNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5maW5pc2hQcm9taXNlXygpO1xyXG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc18uc2xpY2UoKTtcclxuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJfKG9ic2VydmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5maW5pc2hQcm9taXNlXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5yZXNvbHZlXyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgdHJpZ2dlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3dpdGNoICh0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUodGhpcy5zdGF0ZV8pKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKHRoaXMucmVzb2x2ZV8uYmluZChudWxsLCB0aGlzLnNuYXBzaG90KSkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLkNBTkNFTEVEOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuRVJST1I6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ2FsbCA9IHRoaXMucmVqZWN0XztcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyh0b0NhbGwuYmluZChudWxsLCB0aGlzLmVycm9yXykpKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZV8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWplY3RfID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5ub3RpZnlPYnNlcnZlcl8gPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB2YXIgZXh0ZXJuYWxTdGF0ZSA9IHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLnN0YXRlXyk7XHJcbiAgICAgICAgc3dpdGNoIChleHRlcm5hbFN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlJVTk5JTkc6XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlBBVVNFRDpcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyLCB0aGlzLnNuYXBzaG90KSkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlcikpKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuQ0FOQ0VMRUQ6XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLkVSUk9SOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciwgdGhpcy5lcnJvcl8pKSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlci5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIsIHRoaXMuZXJyb3JfKSkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN1bWVzIGEgcGF1c2VkIHRhc2suIEhhcyBubyBlZmZlY3Qgb24gYSBjdXJyZW50bHkgcnVubmluZyBvciBmYWlsZWQgdGFzay5cclxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIHRvb2sgZWZmZWN0LCBmYWxzZSBpZiBpZ25vcmVkLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ3Jlc3VtZScsIFtdLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkc7XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFBhdXNlcyBhIGN1cnJlbnRseSBydW5uaW5nIHRhc2suIEhhcyBubyBlZmZlY3Qgb24gYSBwYXVzZWQgb3IgZmFpbGVkIHRhc2suXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgVXBsb2FkVGFzay5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ3BhdXNlJywgW10sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkc7XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbl8oSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENhbmNlbHMgYSBjdXJyZW50bHkgcnVubmluZyBvciBwYXVzZWQgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIGNvbXBsZXRlIG9yXHJcbiAgICAgKiBmYWlsZWQgdGFzay5cclxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIHRvb2sgZWZmZWN0LCBmYWxzZSBpZiBpZ25vcmVkLlxyXG4gICAgICovXHJcbiAgICBVcGxvYWRUYXNrLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ2NhbmNlbCcsIFtdLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HO1xyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25fKEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVXBsb2FkVGFzaztcclxufSgpKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGVzIG1ldGhvZHMgdG8gaW50ZXJhY3Qgd2l0aCBhIGJ1Y2tldCBpbiB0aGUgRmlyZWJhc2UgU3RvcmFnZSBzZXJ2aWNlLlxyXG4gKiBAcGFyYW0gbG9jYXRpb24gQW4gZmJzLmxvY2F0aW9uLCBvciB0aGUgVVJMIGF0XHJcbiAqICAgICB3aGljaCB0byBiYXNlIHRoaXMgb2JqZWN0LCBpbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtczpcclxuICogICAgICAgICBnczovLzxidWNrZXQ+LzxvYmplY3QtcGF0aD5cclxuICogICAgICAgICBodHRwW3NdOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL1xyXG4gKiAgICAgICAgICAgICAgICAgICAgIDxhcGktdmVyc2lvbj4vYi88YnVja2V0Pi9vLzxvYmplY3QtcGF0aD5cclxuICogICAgIEFueSBxdWVyeSBvciBmcmFnbWVudCBzdHJpbmdzIHdpbGwgYmUgaWdub3JlZCBpbiB0aGUgaHR0cFtzXVxyXG4gKiAgICAgZm9ybWF0LiBJZiBubyB2YWx1ZSBpcyBwYXNzZWQsIHRoZSBzdG9yYWdlIG9iamVjdCB3aWxsIHVzZSBhIFVSTCBiYXNlZCBvblxyXG4gKiAgICAgdGhlIHByb2plY3QgSUQgb2YgdGhlIGJhc2UgZmlyZWJhc2UuQXBwIGluc3RhbmNlLlxyXG4gKi9cclxudmFyIFJlZmVyZW5jZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlZmVyZW5jZShhdXRoV3JhcHBlciwgbG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLmF1dGhXcmFwcGVyID0gYXV0aFdyYXBwZXI7XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uIGluc3RhbmNlb2YgTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IExvY2F0aW9uLm1ha2VGcm9tVXJsKGxvY2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4gVGhlIFVSTCBmb3IgdGhlIGJ1Y2tldCBhbmQgcGF0aCB0aGlzIG9iamVjdCByZWZlcmVuY2VzLFxyXG4gICAgICogICAgIGluIHRoZSBmb3JtIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFsaWRhdGUoJ3RvU3RyaW5nJywgW10sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgcmV0dXJuICdnczovLycgKyB0aGlzLmxvY2F0aW9uLmJ1Y2tldCArICcvJyArIHRoaXMubG9jYXRpb24ucGF0aDtcclxuICAgIH07XHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLm5ld1JlZiA9IGZ1bmN0aW9uIChhdXRoV3JhcHBlciwgbG9jYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZShhdXRoV3JhcHBlciwgbG9jYXRpb24pO1xyXG4gICAgfTtcclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUubWFwcGluZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldE1hcHBpbmdzKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIEEgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3Qgb2J0YWluZWQgYnlcclxuICAgICAqICAgICBhcHBlbmRpbmcgY2hpbGRQYXRoLCByZW1vdmluZyBhbnkgZHVwbGljYXRlLCBiZWdpbm5pbmcsIG9yIHRyYWlsaW5nXHJcbiAgICAgKiAgICAgc2xhc2hlcy5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5jaGlsZCA9IGZ1bmN0aW9uIChjaGlsZFBhdGgpIHtcclxuICAgICAgICB2YWxpZGF0ZSgnY2hpbGQnLCBbc3RyaW5nU3BlYygpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgbmV3UGF0aCA9IGNoaWxkKHRoaXMubG9jYXRpb24ucGF0aCwgY2hpbGRQYXRoKTtcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24odGhpcy5sb2NhdGlvbi5idWNrZXQsIG5ld1BhdGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ld1JlZih0aGlzLmF1dGhXcmFwcGVyLCBsb2NhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZmVyZW5jZS5wcm90b3R5cGUsIFwicGFyZW50XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcmV0dXJuIEEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgb2YgdGhlXHJcbiAgICAgICAgICogICAgIGN1cnJlbnQgb2JqZWN0LCBvciBudWxsIGlmIHRoZSBjdXJyZW50IG9iamVjdCBpcyB0aGUgcm9vdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1BhdGggPSBwYXJlbnQodGhpcy5sb2NhdGlvbi5wYXRoKTtcclxuICAgICAgICAgICAgaWYgKG5ld1BhdGggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbih0aGlzLmxvY2F0aW9uLmJ1Y2tldCwgbmV3UGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1JlZih0aGlzLmF1dGhXcmFwcGVyLCBsb2NhdGlvbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJyb290XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcmV0dXJuIEFuIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBvZiB0aGlzXHJcbiAgICAgICAgICogICAgIG9iamVjdCdzIGJ1Y2tldC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMubG9jYXRpb24uYnVja2V0LCAnJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1JlZih0aGlzLmF1dGhXcmFwcGVyLCBsb2NhdGlvbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJidWNrZXRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5idWNrZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJmdWxsUGF0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnBhdGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmZXJlbmNlLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxhc3RDb21wb25lbnQodGhpcy5sb2NhdGlvbi5wYXRoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWZlcmVuY2UucHJvdG90eXBlLCBcInN0b3JhZ2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoV3JhcHBlci5zZXJ2aWNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZHMgYSBibG9iIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgYmxvYiB0byB1cGxvYWQuXHJcbiAgICAgKiBAcmV0dXJuIEFuIFVwbG9hZFRhc2sgdGhhdCBsZXRzIHlvdSBjb250cm9sIGFuZFxyXG4gICAgICogICAgIG9ic2VydmUgdGhlIHVwbG9hZC5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoZGF0YSwgbWV0YWRhdGEpIHtcclxuICAgICAgICBpZiAobWV0YWRhdGEgPT09IHZvaWQgMCkgeyBtZXRhZGF0YSA9IG51bGw7IH1cclxuICAgICAgICB2YWxpZGF0ZSgncHV0JywgW3VwbG9hZERhdGFTcGVjKCksIG1ldGFkYXRhU3BlYyh0cnVlKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmUm9vdF8oJ3B1dCcpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVXBsb2FkVGFzayh0aGlzLCB0aGlzLmF1dGhXcmFwcGVyLCB0aGlzLmxvY2F0aW9uLCB0aGlzLm1hcHBpbmdzKCksIG5ldyBGYnNCbG9iKGRhdGEpLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGxvYWRzIGEgc3RyaW5nIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB0byB1cGxvYWQuXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFRoZSBmb3JtYXQgb2YgdGhlIHN0cmluZyB0byB1cGxvYWQuXHJcbiAgICAgKiBAcmV0dXJuIEFuIFVwbG9hZFRhc2sgdGhhdCBsZXRzIHlvdSBjb250cm9sIGFuZFxyXG4gICAgICogICAgIG9ic2VydmUgdGhlIHVwbG9hZC5cclxuICAgICAqL1xyXG4gICAgUmVmZXJlbmNlLnByb3RvdHlwZS5wdXRTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIGZvcm1hdCwgbWV0YWRhdGEpIHtcclxuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gU3RyaW5nRm9ybWF0LlJBVzsgfVxyXG4gICAgICAgIHZhbGlkYXRlKCdwdXRTdHJpbmcnLCBbc3RyaW5nU3BlYygpLCBzdHJpbmdTcGVjKGZvcm1hdFZhbGlkYXRvciwgdHJ1ZSksIG1ldGFkYXRhU3BlYyh0cnVlKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmUm9vdF8oJ3B1dFN0cmluZycpO1xyXG4gICAgICAgIHZhciBkYXRhID0gZGF0YUZyb21TdHJpbmcoZm9ybWF0LCB2YWx1ZSk7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhQ2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgaWYgKCFpc0RlZihtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddKSAmJlxyXG4gICAgICAgICAgICBpc0RlZihkYXRhLmNvbnRlbnRUeXBlKSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddID0gZGF0YS5jb250ZW50VHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVcGxvYWRUYXNrKHRoaXMsIHRoaXMuYXV0aFdyYXBwZXIsIHRoaXMubG9jYXRpb24sIHRoaXMubWFwcGluZ3MoKSwgbmV3IEZic0Jsb2IoZGF0YS5kYXRhLCB0cnVlKSwgbWV0YWRhdGFDbG9uZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGVzIHRoZSBvYmplY3QgYXQgdGhpcyBsb2NhdGlvbi5cclxuICAgICAqIEByZXR1cm4gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGRlbGV0aW9uIHN1Y2NlZWRzLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhbGlkYXRlKCdkZWxldGUnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnRocm93SWZSb290XygnZGVsZXRlJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFdyYXBwZXIuZ2V0QXV0aFRva2VuKCkudGhlbihmdW5jdGlvbiAoYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IGRlbGV0ZU9iamVjdChfdGhpcy5hdXRoV3JhcHBlciwgX3RoaXMubG9jYXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYXV0aFdyYXBwZXIubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbikuZ2V0UHJvbWlzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBhbGwgaXRlbXMgKGZpbGVzKSBhbmQgcHJlZml4ZXMgKGZvbGRlcnMpIHVuZGVyIHRoaXMgc3RvcmFnZSByZWZlcmVuY2UuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgZm9yIGNhbGxpbmcgbGlzdCgpIHJlcGVhdGVkbHkgdW50aWwgdGhlcmUgYXJlXHJcbiAgICAgKiBubyBtb3JlIHJlc3VsdHMuIFRoZSBkZWZhdWx0IHBhZ2luYXRpb24gc2l6ZSBpcyAxMDAwLlxyXG4gICAgICpcclxuICAgICAqIE5vdGU6IFRoZSByZXN1bHRzIG1heSBub3QgYmUgY29uc2lzdGVudCBpZiBvYmplY3RzIGFyZSBjaGFuZ2VkIHdoaWxlIHRoaXNcclxuICAgICAqIG9wZXJhdGlvbiBpcyBydW5uaW5nLlxyXG4gICAgICpcclxuICAgICAqIFdhcm5pbmc6IGxpc3RBbGwgbWF5IHBvdGVudGlhbGx5IGNvbnN1bWUgdG9vIG1hbnkgcmVzb3VyY2VzIGlmIHRoZXJlIGFyZVxyXG4gICAgICogdG9vIG1hbnkgcmVzdWx0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYWxsIHRoZSBpdGVtcyBhbmQgcHJlZml4ZXMgdW5kZXJcclxuICAgICAqICAgICAgdGhlIGN1cnJlbnQgc3RvcmFnZSByZWZlcmVuY2UuIGBwcmVmaXhlc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0b1xyXG4gICAgICogICAgICBzdWItZGlyZWN0b3JpZXMgYW5kIGBpdGVtc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIHRoaXNcclxuICAgICAqICAgICAgZm9sZGVyLiBgbmV4dFBhZ2VUb2tlbmAgaXMgbmV2ZXIgcmV0dXJuZWQuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUubGlzdEFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YWxpZGF0ZSgnbGlzdEFsbCcsIFtdLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBhY2N1bXVsYXRvciA9IHtcclxuICAgICAgICAgICAgcHJlZml4ZXM6IFtdLFxyXG4gICAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RBbGxIZWxwZXIoYWNjdW11bGF0b3IpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gYWNjdW11bGF0b3I7IH0pO1xyXG4gICAgfTtcclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUubGlzdEFsbEhlbHBlciA9IGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgcGFnZVRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0LCBuZXh0UGFnZTtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4UmVzdWx0cyBpcyAxMDAwIGJ5IGRlZmF1bHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVG9rZW46IHBhZ2VUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmxpc3Qob3B0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gYWNjdW11bGF0b3IucHJlZml4ZXMpLnB1c2guYXBwbHkoX2EsIG5leHRQYWdlLnByZWZpeGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF9iID0gYWNjdW11bGF0b3IuaXRlbXMpLnB1c2guYXBwbHkoX2IsIG5leHRQYWdlLml0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobmV4dFBhZ2UubmV4dFBhZ2VUb2tlbiAhPSBudWxsKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubGlzdEFsbEhlbHBlcihhY2N1bXVsYXRvciwgbmV4dFBhZ2UubmV4dFBhZ2VUb2tlbildO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTGlzdCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBMaXN0IEFQSSBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgRmlyZWJhc2UgUnVsZXMgVmVyc2lvbiAyLlxyXG4gICAgICpcclxuICAgICAqIEdDUyBpcyBhIGtleS1ibG9iIHN0b3JlLiBGaXJlYmFzZSBTdG9yYWdlIGltcG9zZXMgdGhlIHNlbWFudGljIG9mICcvJ1xyXG4gICAgICogZGVsaW1pdGVkIGZvbGRlciBzdHJ1Y3R1cmUuXHJcbiAgICAgKiBSZWZlciB0byBHQ1MncyBMaXN0IEFQSSBpZiB5b3Ugd2FudCB0byBsZWFybiBtb3JlLlxyXG4gICAgICpcclxuICAgICAqIFRvIGFkaGVyZSB0byBGaXJlYmFzZSBSdWxlcydzIFNlbWFudGljcywgRmlyZWJhc2UgU3RvcmFnZSBkb2VzIG5vdFxyXG4gICAgICogc3VwcG9ydCBvYmplY3RzIHdob3NlIHBhdGhzIGVuZCB3aXRoIFwiL1wiIG9yIGNvbnRhaW4gdHdvIGNvbnNlY3V0aXZlXHJcbiAgICAgKiBcIi9cInMuIEZpcmViYXNlIFN0b3JhZ2UgTGlzdCBBUEkgd2lsbCBmaWx0ZXIgdGhlc2UgdW5zdXBwb3J0ZWQgb2JqZWN0cy5cclxuICAgICAqIGxpc3QoKSBtYXkgZmFpbCBpZiB0aGVyZSBhcmUgdG9vIG1hbnkgdW5zdXBwb3J0ZWQgb2JqZWN0cyBpbiB0aGUgYnVja2V0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIFNlZSBMaXN0T3B0aW9ucyBmb3IgZGV0YWlscy5cclxuICAgICAqIEByZXR1cm4gQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgaXRlbXMgYW5kIHByZWZpeGVzLlxyXG4gICAgICogICAgICBgcHJlZml4ZXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gc3ViLWZvbGRlcnMgYW5kIGBpdGVtc2BcclxuICAgICAqICAgICAgY29udGFpbnMgcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIHRoaXMgZm9sZGVyLiBgbmV4dFBhZ2VUb2tlbmBcclxuICAgICAqICAgICAgY2FuIGJlIHVzZWQgdG8gZ2V0IHRoZSByZXN0IG9mIHRoZSByZXN1bHRzLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhbGlkYXRlKCdsaXN0JywgW2xpc3RPcHRpb25TcGVjKHRydWUpXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFdyYXBwZXIuZ2V0QXV0aFRva2VuKCkudGhlbihmdW5jdGlvbiAoYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciBvcCA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IGxpc3Qoc2VsZi5hdXRoV3JhcHBlciwgc2VsZi5sb2NhdGlvbiwgXHJcbiAgICAgICAgICAgIC8qZGVsaW1pdGVyPSAqLyAnLycsIG9wLnBhZ2VUb2tlbiwgb3AubWF4UmVzdWx0cyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmF1dGhXcmFwcGVyLm1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhdXRoVG9rZW4pLmdldFByb21pc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqICAgICBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuIElmIHRoaXNcclxuICAgICAqICAgICBvYmplY3QgZG9lc24ndCBleGlzdCBvciBtZXRhZGF0YSBjYW5ub3QgYmUgcmV0cmVpdmVkLCB0aGUgcHJvbWlzZSBpc1xyXG4gICAgICogICAgIHJlamVjdGVkLlxyXG4gICAgICovXHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLmdldE1ldGFkYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFsaWRhdGUoJ2dldE1ldGFkYXRhJywgW10sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmUm9vdF8oJ2dldE1ldGFkYXRhJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFdyYXBwZXIuZ2V0QXV0aFRva2VuKCkudGhlbihmdW5jdGlvbiAoYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IGdldE1ldGFkYXRhKF90aGlzLmF1dGhXcmFwcGVyLCBfdGhpcy5sb2NhdGlvbiwgX3RoaXMubWFwcGluZ3MoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5hdXRoV3JhcHBlci5tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKS5nZXRQcm9taXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gbWV0YWRhdGEgVGhlIG5ldyBtZXRhZGF0YSBmb3IgdGhlIG9iamVjdC5cclxuICAgICAqICAgICBPbmx5IHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBleHBsaWNpdGx5IHNldCB3aWxsIGJlIGNoYW5nZWQuIEV4cGxpY2l0bHlcclxuICAgICAqICAgICBzZXR0aW5nIGEgdmFsdWUgdG8gbnVsbCB3aWxsIHJlbW92ZSB0aGUgbWV0YWRhdGEuXHJcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzXHJcbiAgICAgKiAgICAgd2l0aCB0aGUgbmV3IG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC5cclxuICAgICAqICAgICBAc2VlIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UucHJvdG90eXBlLmdldE1ldGFkYXRhXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUudXBkYXRlTWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGEpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhbGlkYXRlKCd1cGRhdGVNZXRhZGF0YScsIFttZXRhZGF0YVNwZWMoKV0sIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmUm9vdF8oJ3VwZGF0ZU1ldGFkYXRhJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFdyYXBwZXIuZ2V0QXV0aFRva2VuKCkudGhlbihmdW5jdGlvbiAoYXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IHVwZGF0ZU1ldGFkYXRhKF90aGlzLmF1dGhXcmFwcGVyLCBfdGhpcy5sb2NhdGlvbiwgbWV0YWRhdGEsIF90aGlzLm1hcHBpbmdzKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYXV0aFdyYXBwZXIubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbikuZ2V0UHJvbWlzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkb3dubG9hZFxyXG4gICAgICogICAgIFVSTCBmb3IgdGhpcyBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIFJlZmVyZW5jZS5wcm90b3R5cGUuZ2V0RG93bmxvYWRVUkwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YWxpZGF0ZSgnZ2V0RG93bmxvYWRVUkwnLCBbXSwgYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnRocm93SWZSb290XygnZ2V0RG93bmxvYWRVUkwnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoV3JhcHBlci5nZXRBdXRoVG9rZW4oKS50aGVuKGZ1bmN0aW9uIChhdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RJbmZvID0gZ2V0RG93bmxvYWRVcmwoX3RoaXMuYXV0aFdyYXBwZXIsIF90aGlzLmxvY2F0aW9uLCBfdGhpcy5tYXBwaW5ncygpKTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmF1dGhXcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAubWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGF1dGhUb2tlbilcclxuICAgICAgICAgICAgICAgIC5nZXRQcm9taXNlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBub0Rvd25sb2FkVVJMKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBSZWZlcmVuY2UucHJvdG90eXBlLnRocm93SWZSb290XyA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb24ucGF0aCA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhyb3cgaW52YWxpZFJvb3RPcGVyYXRpb24obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWZlcmVuY2U7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBBIHJlcXVlc3Qgd2hvc2UgcHJvbWlzZSBhbHdheXMgZmFpbHMuXHJcbiAqIEBzdHJ1Y3RcclxuICogQHRlbXBsYXRlIFRcclxuICovXHJcbnZhciBGYWlsUmVxdWVzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZhaWxSZXF1ZXN0KGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlXyA9IFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgRmFpbFJlcXVlc3QucHJvdG90eXBlLmdldFByb21pc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XHJcbiAgICB9O1xyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBGYWlsUmVxdWVzdC5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKF9hcHBEZWxldGUpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmFpbFJlcXVlc3Q7XHJcbn0oKSk7XG5cbnZhciBSZXF1ZXN0TWFwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVxdWVzdE1hcCgpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlkID0gTUlOX1NBRkVfSU5URUdFUjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIHRoZSBnaXZlbiByZXF1ZXN0IHdpdGggdGhpcyBtYXAuXHJcbiAgICAgKiBUaGUgcmVxdWVzdCBpcyB1bnJlZ2lzdGVyZWQgd2hlbiBpdCBjb21wbGV0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIFJlcXVlc3RNYXAucHJvdG90eXBlLmFkZFJlcXVlc3QgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmlkKys7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0KGlkLCByZXF1ZXN0KTtcclxuICAgICAgICByZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1hcC5kZWxldGUoaWQpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5tYXAuZGVsZXRlKGlkKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWxzIGFsbCByZWdpc3RlcmVkIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBSZXF1ZXN0TWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHYgJiYgdi5jYW5jZWwodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXAuY2xlYXIoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVxdWVzdE1hcDtcclxufSgpKTtcblxuLyoqXHJcbiAqIEBwYXJhbSBhcHAgSWYgbnVsbCwgZ2V0QXV0aFRva2VuIGFsd2F5cyByZXNvbHZlcyB3aXRoIG51bGwuXHJcbiAqIEBwYXJhbSBzZXJ2aWNlIFRoZSBzdG9yYWdlIHNlcnZpY2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYXV0aCB3cmFwcGVyLlxyXG4gKiAgICAgVW50eXBlZCB0byBhdm9pZCBjaXJjdWxhciB0eXBlIGRlcGVuZGVuY2llcy5cclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIEF1dGhXcmFwcGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXV0aFdyYXBwZXIoYXBwLCBhdXRoUHJvdmlkZXIsIG1ha2VyLCByZXF1ZXN0TWFrZXIsIHNlcnZpY2UsIHBvb2wpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5idWNrZXRfID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFwcElkXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZWxldGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXBwXyA9IGFwcDtcclxuICAgICAgICBpZiAodGhpcy5hcHBfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5hcHBfLm9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChpc0RlZihvcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWNrZXRfID0gQXV0aFdyYXBwZXIuZXh0cmFjdEJ1Y2tldF8ob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcElkXyA9IChfYSA9IG9wdGlvbnMuYXBwSWQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoUHJvdmlkZXJfID0gYXV0aFByb3ZpZGVyO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVJlZk1ha2VyXyA9IG1ha2VyO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdE1ha2VyXyA9IHJlcXVlc3RNYWtlcjtcclxuICAgICAgICB0aGlzLnBvb2xfID0gcG9vbDtcclxuICAgICAgICB0aGlzLnNlcnZpY2VfID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLm1heE9wZXJhdGlvblJldHJ5VGltZV8gPSBERUZBVUxUX01BWF9PUEVSQVRJT05fUkVUUllfVElNRTtcclxuICAgICAgICB0aGlzLm1heFVwbG9hZFJldHJ5VGltZV8gPSBERUZBVUxUX01BWF9VUExPQURfUkVUUllfVElNRTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RNYXBfID0gbmV3IFJlcXVlc3RNYXAoKTtcclxuICAgIH1cclxuICAgIEF1dGhXcmFwcGVyLmV4dHJhY3RCdWNrZXRfID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHZhciBidWNrZXRTdHJpbmcgPSBjb25maWdbQ09ORklHX1NUT1JBR0VfQlVDS0VUX0tFWV0gfHwgbnVsbDtcclxuICAgICAgICBpZiAoYnVja2V0U3RyaW5nID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsb2MgPSBMb2NhdGlvbi5tYWtlRnJvbUJ1Y2tldFNwZWMoYnVja2V0U3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gbG9jLmJ1Y2tldDtcclxuICAgIH07XHJcbiAgICBBdXRoV3JhcHBlci5wcm90b3R5cGUuZ2V0QXV0aFRva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhdXRoID0gdGhpcy5hdXRoUHJvdmlkZXJfLmdldEltbWVkaWF0ZSh7IG9wdGlvbmFsOiB0cnVlIH0pO1xyXG4gICAgICAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdXRoLmdldFRva2VuKCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5hY2Nlc3NUb2tlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEF1dGhXcmFwcGVyLnByb3RvdHlwZS5idWNrZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsZXRlZF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgYXBwRGVsZXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVja2V0XztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2VydmljZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBhdXRoIHdyYXBwZXIuIFVudHlwZWQgdG8gYXZvaWQgY2lyY3VsYXJcclxuICAgICAqIHR5cGUgZGVwZW5kZW5jaWVzLlxyXG4gICAgICovXHJcbiAgICBBdXRoV3JhcHBlci5wcm90b3R5cGUuc2VydmljZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlXztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBuZXcgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBvYmplY3QgcmVmZXJlbmNpbmcgdGhpcyBBdXRoV3JhcHBlclxyXG4gICAgICogYXQgdGhlIGdpdmVuIExvY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIGxvYyBUaGUgTG9jYXRpb24uXHJcbiAgICAgKiBAcmV0dXJuIEFjdHVhbGx5IGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSwgdHlwaW5nIG5vdCBhbGxvd2VkXHJcbiAgICAgKiAgICAgYmVjYXVzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmN5IHByb2JsZW1zLlxyXG4gICAgICovXHJcbiAgICBBdXRoV3JhcHBlci5wcm90b3R5cGUubWFrZVN0b3JhZ2VSZWZlcmVuY2UgPSBmdW5jdGlvbiAobG9jKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVJlZk1ha2VyXyh0aGlzLCBsb2MpO1xyXG4gICAgfTtcclxuICAgIEF1dGhXcmFwcGVyLnByb3RvdHlwZS5tYWtlUmVxdWVzdCA9IGZ1bmN0aW9uIChyZXF1ZXN0SW5mbywgYXV0aFRva2VuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRlbGV0ZWRfKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5yZXF1ZXN0TWFrZXJfKHJlcXVlc3RJbmZvLCB0aGlzLmFwcElkXywgYXV0aFRva2VuLCB0aGlzLnBvb2xfKTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0TWFwXy5hZGRSZXF1ZXN0KHJlcXVlc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmFpbFJlcXVlc3QoYXBwRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIHJ1bm5pbmcgcmVxdWVzdHMgYW5kIHByZXZlbnQgbW9yZSBmcm9tIGJlaW5nIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIEF1dGhXcmFwcGVyLnByb3RvdHlwZS5kZWxldGVBcHAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVkXyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hcHBfID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlcXVlc3RNYXBfLmNsZWFyKCk7XHJcbiAgICB9O1xyXG4gICAgQXV0aFdyYXBwZXIucHJvdG90eXBlLm1heFVwbG9hZFJldHJ5VGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXhVcGxvYWRSZXRyeVRpbWVfO1xyXG4gICAgfTtcclxuICAgIEF1dGhXcmFwcGVyLnByb3RvdHlwZS5zZXRNYXhVcGxvYWRSZXRyeVRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgIHRoaXMubWF4VXBsb2FkUmV0cnlUaW1lXyA9IHRpbWU7XHJcbiAgICB9O1xyXG4gICAgQXV0aFdyYXBwZXIucHJvdG90eXBlLm1heE9wZXJhdGlvblJldHJ5VGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXhPcGVyYXRpb25SZXRyeVRpbWVfO1xyXG4gICAgfTtcclxuICAgIEF1dGhXcmFwcGVyLnByb3RvdHlwZS5zZXRNYXhPcGVyYXRpb25SZXRyeVRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgIHRoaXMubWF4T3BlcmF0aW9uUmV0cnlUaW1lXyA9IHRpbWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEF1dGhXcmFwcGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIGYgTWF5IGJlIGludm9rZWRcclxuICogICAgIGJlZm9yZSB0aGUgZnVuY3Rpb24gcmV0dXJucy5cclxuICogQHBhcmFtIGNhbGxiYWNrIEdldCBhbGwgdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uXHJcbiAqICAgICBwYXNzZWQgdG8gZiwgaW5jbHVkaW5nIHRoZSBpbml0aWFsIGJvb2xlYW4uXHJcbiAqL1xyXG5mdW5jdGlvbiBzdGFydChmLCBjYWxsYmFjaywgdGltZW91dCkge1xyXG4gICAgLy8gVE9ETyhhbmR5c290byk6IG1ha2UgdGhpcyBjb2RlIGNsZWFuZXIgKHByb2JhYmx5IHJlZmFjdG9yIGludG8gYW4gYWN0dWFsXHJcbiAgICAvLyB0eXBlIGluc3RlYWQgb2YgYSBidW5jaCBvZiBmdW5jdGlvbnMgd2l0aCBzdGF0ZSBzaGFyZWQgaW4gdGhlIGNsb3N1cmUpXHJcbiAgICB2YXIgd2FpdFNlY29uZHMgPSAxO1xyXG4gICAgLy8gV291bGQgdHlwZSB0aGlzIGFzIFwibnVtYmVyXCIgYnV0IHRoYXQgZG9lc24ndCB3b3JrIGZvciBOb2RlIHNvIMKvXFxfKOODhClfL8KvXHJcbiAgICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGV4Y2x1ZGUgTm9kZSB0eXBlIGRlZmluaXRpb24gZm9yIHN0b3JhZ2UgYmVjYXVzZSBzdG9yYWdlIG9ubHkgd29ya3MgaW4gYnJvd3NlclxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIHZhciB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgdmFyIGhpdFRpbWVvdXQgPSBmYWxzZTtcclxuICAgIHZhciBjYW5jZWxTdGF0ZSA9IDA7XHJcbiAgICBmdW5jdGlvbiBjYW5jZWxlZCgpIHtcclxuICAgICAgICByZXR1cm4gY2FuY2VsU3RhdGUgPT09IDI7XHJcbiAgICB9XHJcbiAgICB2YXIgdHJpZ2dlcmVkQ2FsbGJhY2sgPSBmYWxzZTtcclxuICAgIC8vIFRPRE86IFRoaXMgZGlzYWJsZSBjYW4gYmUgcmVtb3ZlZCBhbmQgdGhlICdpZ25vcmVSZXN0QXJncycgb3B0aW9uIGFkZGVkIHRvXHJcbiAgICAvLyB0aGUgbm8tZXhwbGljaXQtYW55IHJ1bGUgd2hlbiBFU2xpbnQgcmVsZWFzZXMgaXQuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckNhbGxiYWNrKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRyaWdnZXJlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJlZENhbGxiYWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsbFdpdGhEZWxheShtaWxsaXMpIHtcclxuICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgZihoYW5kbGVyLCBjYW5jZWxlZCgpKTtcclxuICAgICAgICB9LCBtaWxsaXMpO1xyXG4gICAgfVxyXG4gICAgLy8gVE9ETzogVGhpcyBkaXNhYmxlIGNhbiBiZSByZW1vdmVkIGFuZCB0aGUgJ2lnbm9yZVJlc3RBcmdzJyBvcHRpb24gYWRkZWQgdG9cclxuICAgIC8vIHRoZSBuby1leHBsaWNpdC1hbnkgcnVsZSB3aGVuIEVTbGludCByZWxlYXNlcyBpdC5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHN1Y2Nlc3MpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmlnZ2VyZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJDYWxsYmFjay5jYWxsLmFwcGx5KHRyaWdnZXJDYWxsYmFjaywgX19zcHJlYWRBcnJheXMoW251bGwsIHN1Y2Nlc3NdLCBhcmdzKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG11c3RTdG9wID0gY2FuY2VsZWQoKSB8fCBoaXRUaW1lb3V0O1xyXG4gICAgICAgIGlmIChtdXN0U3RvcCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQ2FsbGJhY2suY2FsbC5hcHBseSh0cmlnZ2VyQ2FsbGJhY2ssIF9fc3ByZWFkQXJyYXlzKFtudWxsLCBzdWNjZXNzXSwgYXJncykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3YWl0U2Vjb25kcyA8IDY0KSB7XHJcbiAgICAgICAgICAgIC8qIFRPRE8oYW5keXNvdG8pOiBkb24ndCBiYWNrIG9mZiBzbyBxdWlja2x5IGlmIHdlIGtub3cgd2UncmUgb2ZmbGluZS4gKi9cclxuICAgICAgICAgICAgd2FpdFNlY29uZHMgKj0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHdhaXRNaWxsaXM7XHJcbiAgICAgICAgaWYgKGNhbmNlbFN0YXRlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbFN0YXRlID0gMjtcclxuICAgICAgICAgICAgd2FpdE1pbGxpcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3YWl0TWlsbGlzID0gKHdhaXRTZWNvbmRzICsgTWF0aC5yYW5kb20oKSkgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsV2l0aERlbGF5KHdhaXRNaWxsaXMpO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcclxuICAgIGZ1bmN0aW9uIHN0b3Aod2FzVGltZW91dCkge1xyXG4gICAgICAgIGlmIChzdG9wcGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcHBlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoIXdhc1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFN0YXRlID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgY2FsbFdpdGhEZWxheSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghd2FzVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FsbFdpdGhEZWxheSgwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGhpdFRpbWVvdXQgPSB0cnVlO1xyXG4gICAgICAgIHN0b3AodHJ1ZSk7XHJcbiAgICB9LCB0aW1lb3V0KTtcclxuICAgIHJldHVybiBzdG9wO1xyXG59XHJcbi8qKlxyXG4gKiBTdG9wcyB0aGUgcmV0cnkgbG9vcCBmcm9tIHJlcGVhdGluZy5cclxuICogSWYgdGhlIGZ1bmN0aW9uIGlzIGN1cnJlbnRseSBcImluIGJldHdlZW5cIiByZXRyaWVzLCBpdCBpcyBpbnZva2VkIGltbWVkaWF0ZWx5XHJcbiAqIHdpdGggdGhlIHNlY29uZCBwYXJhbWV0ZXIgYXMgXCJ0cnVlXCIuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBpbnZva2VkIG9uY2UgbW9yZVxyXG4gKiBhZnRlciB0aGUgY3VycmVudCBpbnZvY2F0aW9uIGZpbmlzaGVzIGlmZiB0aGUgY3VycmVudCBpbnZvY2F0aW9uIHdvdWxkIGhhdmVcclxuICogdHJpZ2dlcmVkIGFub3RoZXIgcmV0cnkuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdG9wKGlkKSB7XHJcbiAgICBpZChmYWxzZSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICogQHRlbXBsYXRlIFRcclxuICovXHJcbnZhciBOZXR3b3JrUmVxdWVzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5ldHdvcmtSZXF1ZXN0KHVybCwgbWV0aG9kLCBoZWFkZXJzLCBib2R5LCBzdWNjZXNzQ29kZXMsIGFkZGl0aW9uYWxSZXRyeUNvZGVzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgdGltZW91dCwgcHJvZ3Jlc3NDYWxsYmFjaywgcG9vbCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nWGhyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5iYWNrb2ZmSWRfID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlc29sdmVfID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlamVjdF8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsZWRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hcHBEZWxldGVfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cmxfID0gdXJsO1xyXG4gICAgICAgIHRoaXMubWV0aG9kXyA9IG1ldGhvZDtcclxuICAgICAgICB0aGlzLmhlYWRlcnNfID0gaGVhZGVycztcclxuICAgICAgICB0aGlzLmJvZHlfID0gYm9keTtcclxuICAgICAgICB0aGlzLnN1Y2Nlc3NDb2Rlc18gPSBzdWNjZXNzQ29kZXMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxSZXRyeUNvZGVzXyA9IGFkZGl0aW9uYWxSZXRyeUNvZGVzLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2tfID0gZXJyb3JDYWxsYmFjaztcclxuICAgICAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfID0gcHJvZ3Jlc3NDYWxsYmFjaztcclxuICAgICAgICB0aGlzLnRpbWVvdXRfID0gdGltZW91dDtcclxuICAgICAgICB0aGlzLnBvb2xfID0gcG9vbDtcclxuICAgICAgICB0aGlzLnByb21pc2VfID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlXyA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIF90aGlzLnJlamVjdF8gPSByZWplY3Q7XHJcbiAgICAgICAgICAgIF90aGlzLnN0YXJ0XygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3R1YWxseSBzdGFydHMgdGhlIHJldHJ5IGxvb3AuXHJcbiAgICAgKi9cclxuICAgIE5ldHdvcmtSZXF1ZXN0LnByb3RvdHlwZS5zdGFydF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGhlUmVxdWVzdChiYWNrb2ZmQ2FsbGJhY2ssIGNhbmNlbGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjYW5jZWxlZCkge1xyXG4gICAgICAgICAgICAgICAgYmFja29mZkNhbGxiYWNrKGZhbHNlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBzZWxmLnBvb2xfLmNyZWF0ZVhocklvKCk7XHJcbiAgICAgICAgICAgIHNlbGYucGVuZGluZ1hocl8gPSB4aHI7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByb2dyZXNzTGlzdGVuZXIocHJvZ3Jlc3NFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvYWRlZCA9IHByb2dyZXNzRXZlbnQubG9hZGVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsID0gcHJvZ3Jlc3NFdmVudC5sZW5ndGhDb21wdXRhYmxlID8gcHJvZ3Jlc3NFdmVudC50b3RhbCA6IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvZ3Jlc3NDYWxsYmFja18gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2dyZXNzQ2FsbGJhY2tfKGxvYWRlZCwgdG90YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuYWRkVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lcihwcm9ncmVzc0xpc3RlbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgIHhoclxyXG4gICAgICAgICAgICAgICAgLnNlbmQoc2VsZi51cmxfLCBzZWxmLm1ldGhvZF8sIHNlbGYuYm9keV8sIHNlbGYuaGVhZGVyc18pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm9ncmVzc0NhbGxiYWNrXyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5yZW1vdmVVcGxvYWRQcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nWGhyXyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB4aHIgPSB4aHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGl0U2VydmVyID0geGhyLmdldEVycm9yQ29kZSgpID09PSBFcnJvckNvZGUuTk9fRVJST1I7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0geGhyLmdldFN0YXR1cygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoaXRTZXJ2ZXIgfHwgc2VsZi5pc1JldHJ5U3RhdHVzQ29kZV8oc3RhdHVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3YXNDYW5jZWxlZCA9IHhoci5nZXRFcnJvckNvZGUoKSA9PT0gRXJyb3JDb2RlLkFCT1JUO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tvZmZDYWxsYmFjayhmYWxzZSwgbmV3IFJlcXVlc3RFbmRTdGF0dXMoZmFsc2UsIG51bGwsIHdhc0NhbmNlbGVkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDb2RlID0gc2VsZi5zdWNjZXNzQ29kZXNfLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICBiYWNrb2ZmQ2FsbGJhY2sodHJ1ZSwgbmV3IFJlcXVlc3RFbmRTdGF0dXMoc3VjY2Vzc0NvZGUsIHhocikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHJlcXVlc3RXZW50VGhyb3VnaCBUcnVlIGlmIHRoZSByZXF1ZXN0IGV2ZW50dWFsbHkgd2VudFxyXG4gICAgICAgICAqICAgICB0aHJvdWdoLCBmYWxzZSBpZiBpdCBoaXQgdGhlIHJldHJ5IGxpbWl0IG9yIHdhcyBjYW5jZWxlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBiYWNrb2ZmRG9uZShyZXF1ZXN0V2VudFRocm91Z2gsIHN0YXR1cykge1xyXG4gICAgICAgICAgICB2YXIgcmVzb2x2ZSA9IHNlbGYucmVzb2x2ZV87XHJcbiAgICAgICAgICAgIHZhciByZWplY3QgPSBzZWxmLnJlamVjdF87XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBzdGF0dXMueGhyO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzLndhc1N1Y2Nlc3NDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZWxmLmNhbGxiYWNrXyh4aHIsIHhoci5nZXRSZXNwb25zZVRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSnVzdERlZihyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gdW5rbm93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVyci5zZXRTZXJ2ZXJSZXNwb25zZVByb3AoeGhyLmdldFJlc3BvbnNlVGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5lcnJvckNhbGxiYWNrXykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc2VsZi5lcnJvckNhbGxiYWNrXyh4aHIsIGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5jYW5jZWxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gc2VsZi5hcHBEZWxldGVfID8gYXBwRGVsZXRlZCgpIDogY2FuY2VsZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmV0cnlMaW1pdEV4Y2VlZGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYW5jZWxlZF8pIHtcclxuICAgICAgICAgICAgYmFja29mZkRvbmUoZmFsc2UsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKGZhbHNlLCBudWxsLCB0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tvZmZJZF8gPSBzdGFydChkb1RoZVJlcXVlc3QsIGJhY2tvZmZEb25lLCB0aGlzLnRpbWVvdXRfKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuZ2V0UHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcclxuICAgIH07XHJcbiAgICAvKiogQGluaGVyaXREb2MgKi9cclxuICAgIE5ldHdvcmtSZXF1ZXN0LnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoYXBwRGVsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxlZF8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwRGVsZXRlXyA9IGFwcERlbGV0ZSB8fCBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5iYWNrb2ZmSWRfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0b3AodGhpcy5iYWNrb2ZmSWRfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ1hocl8gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nWGhyXy5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOZXR3b3JrUmVxdWVzdC5wcm90b3R5cGUuaXNSZXRyeVN0YXR1c0NvZGVfID0gZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICAgIC8vIFRoZSBjb2RlcyBmb3Igd2hpY2ggdG8gcmV0cnkgY2FtZSBmcm9tIHRoaXMgcGFnZTpcclxuICAgICAgICAvLyBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vc3RvcmFnZS9kb2NzL2V4cG9uZW50aWFsLWJhY2tvZmZcclxuICAgICAgICB2YXIgaXNGaXZlSHVuZHJlZENvZGUgPSBzdGF0dXMgPj0gNTAwICYmIHN0YXR1cyA8IDYwMDtcclxuICAgICAgICB2YXIgZXh0cmFSZXRyeUNvZGVzID0gW1xyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0IFRpbWVvdXQ6IHdlYiBzZXJ2ZXIgZGlkbid0IHJlY2VpdmUgZnVsbCByZXF1ZXN0IGluIHRpbWUuXHJcbiAgICAgICAgICAgIDQwOCxcclxuICAgICAgICAgICAgLy8gVG9vIE1hbnkgUmVxdWVzdHM6IHlvdSdyZSBnZXR0aW5nIHJhdGUtbGltaXRlZCwgYmFzaWNhbGx5LlxyXG4gICAgICAgICAgICA0MjlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBpc0V4dHJhUmV0cnlDb2RlID0gZXh0cmFSZXRyeUNvZGVzLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTE7XHJcbiAgICAgICAgdmFyIGlzUmVxdWVzdFNwZWNpZmljUmV0cnlDb2RlID0gdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2Rlc18uaW5kZXhPZihzdGF0dXMpICE9PSAtMTtcclxuICAgICAgICByZXR1cm4gaXNGaXZlSHVuZHJlZENvZGUgfHwgaXNFeHRyYVJldHJ5Q29kZSB8fCBpc1JlcXVlc3RTcGVjaWZpY1JldHJ5Q29kZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTmV0d29ya1JlcXVlc3Q7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlc3VsdCBvZiBhIG5ldHdvcmsgcmVxdWVzdC5cclxuICogQHBhcmFtIG9wdF9jYW5jZWxlZCBEZWZhdWx0cyB0byBmYWxzZS5cclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIFJlcXVlc3RFbmRTdGF0dXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXF1ZXN0RW5kU3RhdHVzKHdhc1N1Y2Nlc3NDb2RlLCB4aHIsIGNhbmNlbGVkKSB7XHJcbiAgICAgICAgdGhpcy53YXNTdWNjZXNzQ29kZSA9IHdhc1N1Y2Nlc3NDb2RlO1xyXG4gICAgICAgIHRoaXMueGhyID0geGhyO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsZWQgPSAhIWNhbmNlbGVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlcXVlc3RFbmRTdGF0dXM7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIGFkZEF1dGhIZWFkZXJfKGhlYWRlcnMsIGF1dGhUb2tlbikge1xyXG4gICAgaWYgKGF1dGhUb2tlbiAhPT0gbnVsbCAmJiBhdXRoVG9rZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdGaXJlYmFzZSAnICsgYXV0aFRva2VuO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZFZlcnNpb25IZWFkZXJfKGhlYWRlcnMpIHtcclxuICAgIHZhciB2ZXJzaW9uID0gdHlwZW9mIGZpcmViYXNlICE9PSAndW5kZWZpbmVkJyA/IGZpcmViYXNlLlNES19WRVJTSU9OIDogJ0FwcE1hbmFnZXInO1xyXG4gICAgaGVhZGVyc1snWC1GaXJlYmFzZS1TdG9yYWdlLVZlcnNpb24nXSA9ICd3ZWJqcy8nICsgdmVyc2lvbjtcclxufVxyXG5mdW5jdGlvbiBhZGRHbXBpZEhlYWRlcl8oaGVhZGVycywgYXBwSWQpIHtcclxuICAgIGlmIChhcHBJZCkge1xyXG4gICAgICAgIGhlYWRlcnNbJ1gtRmlyZWJhc2UtR01QSUQnXSA9IGFwcElkO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIGFwcElkLCBhdXRoVG9rZW4sIHBvb2wpIHtcclxuICAgIHZhciBxdWVyeVBhcnQgPSBtYWtlUXVlcnlTdHJpbmcocmVxdWVzdEluZm8udXJsUGFyYW1zKTtcclxuICAgIHZhciB1cmwgPSByZXF1ZXN0SW5mby51cmwgKyBxdWVyeVBhcnQ7XHJcbiAgICB2YXIgaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3RJbmZvLmhlYWRlcnMpO1xyXG4gICAgYWRkR21waWRIZWFkZXJfKGhlYWRlcnMsIGFwcElkKTtcclxuICAgIGFkZEF1dGhIZWFkZXJfKGhlYWRlcnMsIGF1dGhUb2tlbik7XHJcbiAgICBhZGRWZXJzaW9uSGVhZGVyXyhoZWFkZXJzKTtcclxuICAgIHJldHVybiBuZXcgTmV0d29ya1JlcXVlc3QodXJsLCByZXF1ZXN0SW5mby5tZXRob2QsIGhlYWRlcnMsIHJlcXVlc3RJbmZvLmJvZHksIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcywgcmVxdWVzdEluZm8uYWRkaXRpb25hbFJldHJ5Q29kZXMsIHJlcXVlc3RJbmZvLmhhbmRsZXIsIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciwgcmVxdWVzdEluZm8udGltZW91dCwgcmVxdWVzdEluZm8ucHJvZ3Jlc3NDYWxsYmFjaywgcG9vbCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEEgc2VydmljZSB0aGF0IHByb3ZpZGVzIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UgaW5zdGFuY2VzLlxyXG4gKiBAcGFyYW0gb3B0X3VybCBnczovLyB1cmwgdG8gYSBjdXN0b20gU3RvcmFnZSBCdWNrZXRcclxuICpcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIFNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZXJ2aWNlKGFwcCwgYXV0aFByb3ZpZGVyLCBwb29sLCB1cmwpIHtcclxuICAgICAgICB0aGlzLmJ1Y2tldF8gPSBudWxsO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VyKGF1dGhXcmFwcGVyLCBsb2MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UoYXV0aFdyYXBwZXIsIGxvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aFdyYXBwZXJfID0gbmV3IEF1dGhXcmFwcGVyKGFwcCwgYXV0aFByb3ZpZGVyLCBtYWtlciwgbWFrZVJlcXVlc3QsIHRoaXMsIHBvb2wpO1xyXG4gICAgICAgIHRoaXMuYXBwXyA9IGFwcDtcclxuICAgICAgICBpZiAodXJsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5idWNrZXRfID0gTG9jYXRpb24ubWFrZUZyb21CdWNrZXRTcGVjKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYXV0aFdyYXBwZXJCdWNrZXQgPSB0aGlzLmF1dGhXcmFwcGVyXy5idWNrZXQoKTtcclxuICAgICAgICAgICAgaWYgKGF1dGhXcmFwcGVyQnVja2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVja2V0XyA9IG5ldyBMb2NhdGlvbihhdXRoV3JhcHBlckJ1Y2tldCwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXyA9IG5ldyBTZXJ2aWNlSW50ZXJuYWxzKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBmb3IgdGhlIGdpdmVuIHBhdGggaW4gdGhlIGRlZmF1bHRcclxuICAgICAqIGJ1Y2tldC5cclxuICAgICAqL1xyXG4gICAgU2VydmljZS5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0b3IocGF0aCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnUGF0aCBpcyBub3QgYSBzdHJpbmcuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoL15bQS1aYS16XSs6XFwvXFwvLy50ZXN0KHBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgY2hpbGQgcGF0aCBidXQgZ290IGEgVVJMLCB1c2UgcmVmRnJvbVVSTCBpbnN0ZWFkLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsaWRhdGUoJ3JlZicsIFtzdHJpbmdTcGVjKHZhbGlkYXRvciwgdHJ1ZSldLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIGlmICh0aGlzLmJ1Y2tldF8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFN0b3JhZ2UgQnVja2V0IGRlZmluZWQgaW4gRmlyZWJhc2UgT3B0aW9ucy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlZiA9IG5ldyBSZWZlcmVuY2UodGhpcy5hdXRoV3JhcHBlcl8sIHRoaXMuYnVja2V0Xyk7XHJcbiAgICAgICAgaWYgKHBhdGggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVmLmNoaWxkKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBvYmplY3QgZm9yIHRoZSBnaXZlbiBhYnNvbHV0ZSBVUkwsXHJcbiAgICAgKiB3aGljaCBtdXN0IGJlIGEgZ3M6Ly8gb3IgaHR0cFtzXTovLyBVUkwuXHJcbiAgICAgKi9cclxuICAgIFNlcnZpY2UucHJvdG90eXBlLnJlZkZyb21VUkwgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdG9yKHApIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ1BhdGggaXMgbm90IGEgc3RyaW5nLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEvXltBLVphLXpdKzpcXC9cXC8vLnRlc3QocCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdFeHBlY3RlZCBmdWxsIFVSTCBidXQgZ290IGEgY2hpbGQgcGF0aCwgdXNlIHJlZiBpbnN0ZWFkLic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIExvY2F0aW9uLm1ha2VGcm9tVXJsKHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgdmFsaWQgZnVsbCBVUkwgYnV0IGdvdCBhbiBpbnZhbGlkIG9uZS4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbGlkYXRlKCdyZWZGcm9tVVJMJywgW3N0cmluZ1NwZWModmFsaWRhdG9yLCBmYWxzZSldLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlKHRoaXMuYXV0aFdyYXBwZXJfLCB1cmwpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXJ2aWNlLnByb3RvdHlwZSwgXCJtYXhVcGxvYWRSZXRyeVRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoV3JhcHBlcl8ubWF4VXBsb2FkUmV0cnlUaW1lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBTZXJ2aWNlLnByb3RvdHlwZS5zZXRNYXhVcGxvYWRSZXRyeVRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgIHZhbGlkYXRlKCdzZXRNYXhVcGxvYWRSZXRyeVRpbWUnLCBbbm9uTmVnYXRpdmVOdW1iZXJTcGVjKCldLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuYXV0aFdyYXBwZXJfLnNldE1heFVwbG9hZFJldHJ5VGltZSh0aW1lKTtcclxuICAgIH07XHJcbiAgICBTZXJ2aWNlLnByb3RvdHlwZS5zZXRNYXhPcGVyYXRpb25SZXRyeVRpbWUgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgIHZhbGlkYXRlKCdzZXRNYXhPcGVyYXRpb25SZXRyeVRpbWUnLCBbbm9uTmVnYXRpdmVOdW1iZXJTcGVjKCldLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuYXV0aFdyYXBwZXJfLnNldE1heE9wZXJhdGlvblJldHJ5VGltZSh0aW1lKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VydmljZS5wcm90b3R5cGUsIFwiYXBwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwXztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXJ2aWNlLnByb3RvdHlwZSwgXCJJTlRFUk5BTFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsc187XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gU2VydmljZTtcclxufSgpKTtcclxuLyoqXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBTZXJ2aWNlSW50ZXJuYWxzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2VydmljZUludGVybmFscyhzZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXyA9IHNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBhc3NvY2lhdGVkIGFwcCBpcyBkZWxldGVkLlxyXG4gICAgICogQHNlZSB7IWZicy5BdXRoV3JhcHBlci5wcm90b3R5cGUuZGVsZXRlQXBwfVxyXG4gICAgICovXHJcbiAgICBTZXJ2aWNlSW50ZXJuYWxzLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlXy5hdXRoV3JhcHBlcl8uZGVsZXRlQXBwKCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZXJ2aWNlSW50ZXJuYWxzO1xyXG59KCkpO1xuXG52YXIgbmFtZSA9IFwiQGZpcmViYXNlL3N0b3JhZ2VcIjtcbnZhciB2ZXJzaW9uID0gXCIwLjMuMzZcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFR5cGUgY29uc3RhbnQgZm9yIEZpcmViYXNlIFN0b3JhZ2UuXHJcbiAqL1xyXG52YXIgU1RPUkFHRV9UWVBFID0gJ3N0b3JhZ2UnO1xyXG5mdW5jdGlvbiBmYWN0b3J5KGNvbnRhaW5lciwgdXJsKSB7XHJcbiAgICAvLyBEZXBlbmRlbmNpZXNcclxuICAgIHZhciBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgdmFyIGF1dGhQcm92aWRlciA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXV0aC1pbnRlcm5hbCcpO1xyXG4gICAgcmV0dXJuIG5ldyBTZXJ2aWNlKGFwcCwgYXV0aFByb3ZpZGVyLCBuZXcgWGhySW9Qb29sKCksIHVybCk7XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0ZXJTdG9yYWdlKGluc3RhbmNlKSB7XHJcbiAgICB2YXIgbmFtZXNwYWNlRXhwb3J0cyA9IHtcclxuICAgICAgICAvLyBuby1pbmxpbmVcclxuICAgICAgICBUYXNrU3RhdGU6IFRhc2tTdGF0ZSxcclxuICAgICAgICBUYXNrRXZlbnQ6IFRhc2tFdmVudCxcclxuICAgICAgICBTdHJpbmdGb3JtYXQ6IFN0cmluZ0Zvcm1hdCxcclxuICAgICAgICBTdG9yYWdlOiBTZXJ2aWNlLFxyXG4gICAgICAgIFJlZmVyZW5jZTogUmVmZXJlbmNlXHJcbiAgICB9O1xyXG4gICAgaW5zdGFuY2UuSU5URVJOQUwucmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChTVE9SQUdFX1RZUEUsIGZhY3RvcnksIFwiUFVCTElDXCIgLyogUFVCTElDICovKVxyXG4gICAgICAgIC5zZXRTZXJ2aWNlUHJvcHMobmFtZXNwYWNlRXhwb3J0cylcclxuICAgICAgICAuc2V0TXVsdGlwbGVJbnN0YW5jZXModHJ1ZSkpO1xyXG4gICAgaW5zdGFuY2UucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xyXG59XHJcbnJlZ2lzdGVyU3RvcmFnZShmaXJlYmFzZSk7XG5cbmV4cG9ydCB7IHJlZ2lzdGVyU3RvcmFnZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgdHNsaWIgPSByZXF1aXJlKCd0c2xpYicpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBGaXJlYmFzZSBjb25zdGFudHMuICBTb21lIG9mIHRoZXNlIChAZGVmaW5lcykgY2FuIGJlIG92ZXJyaWRkZW4gYXQgY29tcGlsZS10aW1lLlxyXG4gKi9cclxudmFyIENPTlNUQU5UUyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBjbGllbnQgTm9kZS5qcyBTREsuXHJcbiAgICAgKi9cclxuICAgIE5PREVfQ0xJRU5UOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBBZG1pbiBOb2RlLmpzIFNESy5cclxuICAgICAqL1xyXG4gICAgTk9ERV9BRE1JTjogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZpcmViYXNlIFNESyBWZXJzaW9uXHJcbiAgICAgKi9cclxuICAgIFNES19WRVJTSU9OOiAnJHtKU0NPUkVfVkVSU0lPTn0nXHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHByb3ZpZGVkIGFzc2VydGlvbiBpcyBmYWxzeVxyXG4gKi9cclxudmFyIGFzc2VydCA9IGZ1bmN0aW9uIChhc3NlcnRpb24sIG1lc3NhZ2UpIHtcclxuICAgIGlmICghYXNzZXJ0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgYXNzZXJ0aW9uRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEVycm9yIG9iamVjdCBzdWl0YWJsZSBmb3IgdGhyb3dpbmcuXHJcbiAqL1xyXG52YXIgYXNzZXJ0aW9uRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG5ldyBFcnJvcignRmlyZWJhc2UgRGF0YWJhc2UgKCcgK1xyXG4gICAgICAgIENPTlNUQU5UUy5TREtfVkVSU0lPTiArXHJcbiAgICAgICAgJykgSU5URVJOQUwgQVNTRVJUIEZBSUxFRDogJyArXHJcbiAgICAgICAgbWVzc2FnZSk7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBzdHJpbmdUb0J5dGVBcnJheSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXHJcbiAgICB2YXIgb3V0ID0gW107XHJcbiAgICB2YXIgcCA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSBjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgoYyAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJlxyXG4gICAgICAgICAgICBpICsgMSA8IHN0ci5sZW5ndGggJiZcclxuICAgICAgICAgICAgKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xyXG4gICAgICAgICAgICAvLyBTdXJyb2dhdGUgUGFpclxyXG4gICAgICAgICAgICBjID0gMHgxMDAwMCArICgoYyAmIDB4MDNmZikgPDwgMTApICsgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweDAzZmYpO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDE4KSB8IDI0MDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTIpIHwgMjI0O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG4vKipcclxuICogVHVybnMgYW4gYXJyYXkgb2YgbnVtYmVycyBpbnRvIHRoZSBzdHJpbmcgZ2l2ZW4gYnkgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlXHJcbiAqIGNoYXJhY3RlcnMgdG8gd2hpY2ggdGhlIG51bWJlcnMgY29ycmVzcG9uZC5cclxuICogQHBhcmFtIGJ5dGVzIEFycmF5IG9mIG51bWJlcnMgcmVwcmVzZW50aW5nIGNoYXJhY3RlcnMuXHJcbiAqIEByZXR1cm4gU3RyaW5naWZpY2F0aW9uIG9mIHRoZSBhcnJheS5cclxuICovXHJcbnZhciBieXRlQXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uIChieXRlcykge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIHZhciBvdXQgPSBbXTtcclxuICAgIHZhciBwb3MgPSAwLCBjID0gMDtcclxuICAgIHdoaWxlIChwb3MgPCBieXRlcy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgYzEgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgaWYgKGMxIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMxID4gMTkxICYmIGMxIDwgMjI0KSB7XHJcbiAgICAgICAgICAgIHZhciBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYzEgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjMSA+IDIzOSAmJiBjMSA8IDM2NSkge1xyXG4gICAgICAgICAgICAvLyBTdXJyb2dhdGUgUGFpclxyXG4gICAgICAgICAgICB2YXIgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIHZhciBjMyA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgdmFyIGM0ID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICB2YXIgdSA9ICgoKGMxICYgNykgPDwgMTgpIHwgKChjMiAmIDYzKSA8PCAxMikgfCAoKGMzICYgNjMpIDw8IDYpIHwgKGM0ICYgNjMpKSAtXHJcbiAgICAgICAgICAgICAgICAweDEwMDAwO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKHUgPj4gMTApKTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZGMwMCArICh1ICYgMTAyMykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGMyID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICB2YXIgYzMgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQuam9pbignJyk7XHJcbn07XHJcbi8vIFdlIGRlZmluZSBpdCBhcyBhbiBvYmplY3QgbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY2xhc3MgYmVjYXVzZSBhIGNsYXNzIGNvbXBpbGVkIGRvd24gdG8gZXM1IGNhbid0XHJcbi8vIGJlIHRyZWVzaGFrZWQuIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNjkxXHJcbi8vIFN0YXRpYyBsb29rdXAgbWFwcywgbGF6aWx5IHBvcHVsYXRlZCBieSBpbml0XygpXHJcbnZhciBiYXNlNjQgPSB7XHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYnl0ZXMgdG8gY2hhcmFjdGVycy5cclxuICAgICAqL1xyXG4gICAgYnl0ZVRvQ2hhck1hcF86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgY2hhcmFjdGVycyB0byBieXRlcy5cclxuICAgICAqL1xyXG4gICAgY2hhclRvQnl0ZU1hcF86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYnl0ZXMgdG8gd2Vic2FmZSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYnl0ZVRvQ2hhck1hcFdlYlNhZmVfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIHdlYnNhZmUgY2hhcmFjdGVycyB0byBieXRlcy5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNoYXJUb0J5dGVNYXBXZWJTYWZlXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQsIHNoYXJlZCBiZXR3ZWVuXHJcbiAgICAgKiBFTkNPREVEX1ZBTFMgYW5kIEVOQ09ERURfVkFMU19XRUJTQUZFXHJcbiAgICAgKi9cclxuICAgIEVOQ09ERURfVkFMU19CQVNFOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonICsgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyArICcwMTIzNDU2Nzg5JyxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQuIFZhbHVlIDY0ICg9KSBpcyBzcGVjaWFsOyBpdCBtZWFucyBcIm5vdGhpbmcuXCJcclxuICAgICAqL1xyXG4gICAgZ2V0IEVOQ09ERURfVkFMUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICcrLz0nO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIHdlYnNhZmUgYWxwaGFiZXQuXHJcbiAgICAgKi9cclxuICAgIGdldCBFTkNPREVEX1ZBTFNfV0VCU0FGRSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICctXy4nO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGF0b2IgYW5kIGJ0b2EgZnVuY3Rpb25zLiBUaGlzIGV4dGVuc2lvblxyXG4gICAgICogc3RhcnRlZCBhdCBNb3ppbGxhIGJ1dCBpcyBub3cgaW1wbGVtZW50ZWQgYnkgbWFueSBicm93c2Vycy4gV2UgdXNlIHRoZVxyXG4gICAgICogQVNTVU1FXyogdmFyaWFibGVzIHRvIGF2b2lkIHB1bGxpbmcgaW4gdGhlIGZ1bGwgdXNlcmFnZW50IGRldGVjdGlvbiBsaWJyYXJ5XHJcbiAgICAgKiBidXQgc3RpbGwgYWxsb3dpbmcgdGhlIHN0YW5kYXJkIHBlci1icm93c2VyIGNvbXBpbGF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIEhBU19OQVRJVkVfU1VQUE9SVDogdHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicsXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1lbmNvZGUgYW4gYXJyYXkgb2YgYnl0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IEFuIGFycmF5IG9mIGJ5dGVzIChudW1iZXJzIHdpdGhcclxuICAgICAqICAgICB2YWx1ZSBpbiBbMCwgMjU1XSkgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgQm9vbGVhbiBpbmRpY2F0aW5nIHdlIHNob3VsZCB1c2UgdGhlXHJcbiAgICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZUJ5dGVBcnJheTogZnVuY3Rpb24gKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdF8oKTtcclxuICAgICAgICB2YXIgYnl0ZVRvQ2hhck1hcCA9IHdlYlNhZmVcclxuICAgICAgICAgICAgPyB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1xyXG4gICAgICAgICAgICA6IHRoaXMuYnl0ZVRvQ2hhck1hcF87XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgdmFyIGJ5dGUxID0gaW5wdXRbaV07XHJcbiAgICAgICAgICAgIHZhciBoYXZlQnl0ZTIgPSBpICsgMSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUyID0gaGF2ZUJ5dGUyID8gaW5wdXRbaSArIDFdIDogMDtcclxuICAgICAgICAgICAgdmFyIGhhdmVCeXRlMyA9IGkgKyAyIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBpbnB1dFtpICsgMl0gOiAwO1xyXG4gICAgICAgICAgICB2YXIgb3V0Qnl0ZTEgPSBieXRlMSA+PiAyO1xyXG4gICAgICAgICAgICB2YXIgb3V0Qnl0ZTIgPSAoKGJ5dGUxICYgMHgwMykgPDwgNCkgfCAoYnl0ZTIgPj4gNCk7XHJcbiAgICAgICAgICAgIHZhciBvdXRCeXRlMyA9ICgoYnl0ZTIgJiAweDBmKSA8PCAyKSB8IChieXRlMyA+PiA2KTtcclxuICAgICAgICAgICAgdmFyIG91dEJ5dGU0ID0gYnl0ZTMgJiAweDNmO1xyXG4gICAgICAgICAgICBpZiAoIWhhdmVCeXRlMykge1xyXG4gICAgICAgICAgICAgICAgb3V0Qnl0ZTQgPSA2NDtcclxuICAgICAgICAgICAgICAgIGlmICghaGF2ZUJ5dGUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0Qnl0ZTMgPSA2NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChieXRlVG9DaGFyTWFwW291dEJ5dGUxXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMl0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTNdLCBieXRlVG9DaGFyTWFwW291dEJ5dGU0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZW5jb2RlIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbnB1dCBBIHN0cmluZyB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBJZiB0cnVlLCB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBlbmNvZGVTdHJpbmc6IGZ1bmN0aW9uIChpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XHJcbiAgICAgICAgLy8gYSBuYXRpdmUgYmFzZTY0IGVuY29kZXIgaW4gdGhlIGZvcm0gb2YgXCJidG9hL2F0b2JcIlxyXG4gICAgICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYnRvYShpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmVuY29kZUJ5dGVBcnJheShzdHJpbmdUb0J5dGVBcnJheShpbnB1dCksIHdlYlNhZmUpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZVxyXG4gICAgICogICAgIGFsdGVybmF0aXZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmc6IGZ1bmN0aW9uIChpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XHJcbiAgICAgICAgLy8gYSBuYXRpdmUgYmFzZTY0IGVuY29kZXIgaW4gdGhlIGZvcm0gb2YgXCJidG9hL2F0b2JcIlxyXG4gICAgICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXRvYihpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBieXRlQXJyYXlUb1N0cmluZyh0aGlzLmRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlNjQtZGVjb2RlIGEgc3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEluIGJhc2UtNjQgZGVjb2RpbmcsIGdyb3VwcyBvZiBmb3VyIGNoYXJhY3RlcnMgYXJlIGNvbnZlcnRlZCBpbnRvIHRocmVlXHJcbiAgICAgKiBieXRlcy4gIElmIHRoZSBlbmNvZGVyIGRpZCBub3QgYXBwbHkgcGFkZGluZywgdGhlIGlucHV0IGxlbmd0aCBtYXkgbm90XHJcbiAgICAgKiBiZSBhIG11bHRpcGxlIG9mIDQuXHJcbiAgICAgKlxyXG4gICAgICogSW4gdGhpcyBjYXNlLCB0aGUgbGFzdCBncm91cCB3aWxsIGhhdmUgZmV3ZXIgdGhhbiA0IGNoYXJhY3RlcnMsIGFuZFxyXG4gICAgICogcGFkZGluZyB3aWxsIGJlIGluZmVycmVkLiAgSWYgdGhlIGdyb3VwIGhhcyBvbmUgb3IgdHdvIGNoYXJhY3RlcnMsIGl0IGRlY29kZXNcclxuICAgICAqIHRvIG9uZSBieXRlLiAgSWYgdGhlIGdyb3VwIGhhcyB0aHJlZSBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzIHRvIHR3byBieXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQgdG8gZGVjb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgVHJ1ZSBpZiB3ZSBzaG91bGQgdXNlIHRoZSB3ZWItc2FmZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gYnl0ZXMgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBkZWNvZGVTdHJpbmdUb0J5dGVBcnJheTogZnVuY3Rpb24gKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0XygpO1xyXG4gICAgICAgIHZhciBjaGFyVG9CeXRlTWFwID0gd2ViU2FmZVxyXG4gICAgICAgICAgICA/IHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfXHJcbiAgICAgICAgICAgIDogdGhpcy5jaGFyVG9CeXRlTWFwXztcclxuICAgICAgICB2YXIgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlMSA9IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkrKyldO1xyXG4gICAgICAgICAgICB2YXIgaGF2ZUJ5dGUyID0gaSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUyID0gaGF2ZUJ5dGUyID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogMDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICB2YXIgaGF2ZUJ5dGUzID0gaSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGJ5dGUzID0gaGF2ZUJ5dGUzID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgdmFyIGhhdmVCeXRlNCA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBieXRlNCA9IGhhdmVCeXRlNCA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGlmIChieXRlMSA9PSBudWxsIHx8IGJ5dGUyID09IG51bGwgfHwgYnl0ZTMgPT0gbnVsbCB8fCBieXRlNCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvdXRCeXRlMSA9IChieXRlMSA8PCAyKSB8IChieXRlMiA+PiA0KTtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTEpO1xyXG4gICAgICAgICAgICBpZiAoYnl0ZTMgIT09IDY0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0Qnl0ZTIgPSAoKGJ5dGUyIDw8IDQpICYgMHhmMCkgfCAoYnl0ZTMgPj4gMik7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZTQgIT09IDY0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxyXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbml0XzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ieXRlVG9DaGFyTWFwXykge1xyXG4gICAgICAgICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF8gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV8gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV8gPSB7fTtcclxuICAgICAgICAgICAgLy8gV2Ugd2FudCBxdWljayBtYXBwaW5ncyBiYWNrIGFuZCBmb3J0aCwgc28gd2UgcHJlY29tcHV0ZSB0d28gbWFwcy5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLkVOQ09ERURfVkFMUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwX1tpXSA9IHRoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5ieXRlVG9DaGFyTWFwX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV9baV0gPSB0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldXSA9IGk7XHJcbiAgICAgICAgICAgICAgICAvLyBCZSBmb3JnaXZpbmcgd2hlbiBkZWNvZGluZyBhbmQgY29ycmVjdGx5IGRlY29kZSBib3RoIGVuY29kaW5ncy5cclxuICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwX1t0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nXHJcbiAqL1xyXG52YXIgYmFzZTY0RW5jb2RlID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIHV0ZjhCeXRlcyA9IHN0cmluZ1RvQnl0ZUFycmF5KHN0cik7XHJcbiAgICByZXR1cm4gYmFzZTY0LmVuY29kZUJ5dGVBcnJheSh1dGY4Qnl0ZXMsIHRydWUpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGRlY29kaW5nXHJcbiAqXHJcbiAqIE5PVEU6IERPIE5PVCB1c2UgdGhlIGdsb2JhbCBhdG9iKCkgZnVuY3Rpb24gLSBpdCBkb2VzIE5PVCBzdXBwb3J0IHRoZVxyXG4gKiBiYXNlNjRVcmwgdmFyaWFudCBlbmNvZGluZy5cclxuICpcclxuICogQHBhcmFtIHN0ciBUbyBiZSBkZWNvZGVkXHJcbiAqIEByZXR1cm4gRGVjb2RlZCByZXN1bHQsIGlmIHBvc3NpYmxlXHJcbiAqL1xyXG52YXIgYmFzZTY0RGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYmFzZTY0LmRlY29kZVN0cmluZyhzdHIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdiYXNlNjREZWNvZGUgZmFpbGVkOiAnLCBlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRG8gYSBkZWVwLWNvcHkgb2YgYmFzaWMgSmF2YVNjcmlwdCBPYmplY3RzIG9yIEFycmF5cy5cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBDb3B5KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZGVlcEV4dGVuZCh1bmRlZmluZWQsIHZhbHVlKTtcclxufVxyXG4vKipcclxuICogQ29weSBwcm9wZXJ0aWVzIGZyb20gc291cmNlIHRvIHRhcmdldCAocmVjdXJzaXZlbHkgYWxsb3dzIGV4dGVuc2lvblxyXG4gKiBvZiBPYmplY3RzIGFuZCBBcnJheXMpLiAgU2NhbGFyIHZhbHVlcyBpbiB0aGUgdGFyZ2V0IGFyZSBvdmVyLXdyaXR0ZW4uXHJcbiAqIElmIHRhcmdldCBpcyB1bmRlZmluZWQsIGFuIG9iamVjdCBvZiB0aGUgYXBwcm9wcmlhdGUgdHlwZSB3aWxsIGJlIGNyZWF0ZWRcclxuICogKGFuZCByZXR1cm5lZCkuXHJcbiAqXHJcbiAqIFdlIHJlY3Vyc2l2ZWx5IGNvcHkgYWxsIGNoaWxkIHByb3BlcnRpZXMgb2YgcGxhaW4gT2JqZWN0cyBpbiB0aGUgc291cmNlLSBzb1xyXG4gKiB0aGF0IG5hbWVzcGFjZS0gbGlrZSBkaWN0aW9uYXJpZXMgYXJlIG1lcmdlZC5cclxuICpcclxuICogTm90ZSB0aGF0IHRoZSB0YXJnZXQgY2FuIGJlIGEgZnVuY3Rpb24sIGluIHdoaWNoIGNhc2UgdGhlIHByb3BlcnRpZXMgaW5cclxuICogdGhlIHNvdXJjZSBPYmplY3QgYXJlIGNvcGllZCBvbnRvIGl0IGFzIHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoZSBGdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBFeHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChzb3VyY2UuY29uc3RydWN0b3IpIHtcclxuICAgICAgICBjYXNlIERhdGU6XHJcbiAgICAgICAgICAgIC8vIFRyZWF0IERhdGVzIGxpa2Ugc2NhbGFyczsgaWYgdGhlIHRhcmdldCBkYXRlIG9iamVjdCBoYWQgYW55IGNoaWxkXHJcbiAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgLSB0aGV5IHdpbGwgYmUgbG9zdCFcclxuICAgICAgICAgICAgdmFyIGRhdGVWYWx1ZSA9IHNvdXJjZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVWYWx1ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGNhc2UgT2JqZWN0OlxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQXJyYXk6XHJcbiAgICAgICAgICAgIC8vIEFsd2F5cyBjb3B5IHRoZSBhcnJheSBzb3VyY2UgYW5kIG92ZXJ3cml0ZSB0aGUgdGFyZ2V0LlxyXG4gICAgICAgICAgICB0YXJnZXQgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gTm90IGEgcGxhaW4gT2JqZWN0IC0gdHJlYXQgaXQgYXMgYSBzY2FsYXIuXHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xyXG4gICAgICAgIGlmICghc291cmNlLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBkZWVwRXh0ZW5kKHRhcmdldFtwcm9wXSwgc291cmNlW3Byb3BdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIERlZmVycmVkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGVmZXJyZWQoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlamVjdCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICB0aGlzLnJlc29sdmUgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgX3RoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgQVBJIGludGVybmFscyBhcmUgbm90IHByb21pc2VpZmllZCBhbmQgY2Fubm90IGJlY2F1c2Ugb3VyIGNhbGxiYWNrIEFQSXMgaGF2ZSBzdWJ0bGUgZXhwZWN0YXRpb25zIGFyb3VuZFxyXG4gICAgICogaW52b2tpbmcgcHJvbWlzZXMgaW5saW5lLCB3aGljaCBQcm9taXNlcyBhcmUgZm9yYmlkZGVuIHRvIGRvLiBUaGlzIG1ldGhvZCBhY2NlcHRzIGFuIG9wdGlvbmFsIG5vZGUtc3R5bGUgY2FsbGJhY2tcclxuICAgICAqIGFuZCByZXR1cm5zIGEgbm9kZS1zdHlsZSBjYWxsYmFjayB3aGljaCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0IHRoZSBEZWZlcnJlZCdzIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIERlZmVycmVkLnByb3RvdHlwZS53cmFwQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIC8vIEF0dGFjaGluZyBub29wIGhhbmRsZXIganVzdCBpbiBjYXNlIGRldmVsb3BlciB3YXNuJ3QgZXhwZWN0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlc1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gU29tZSBvZiBvdXIgY2FsbGJhY2tzIGRvbid0IGV4cGVjdCBhIHZhbHVlIGFuZCBvdXIgb3duIHRlc3RzXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQgdGhhdCB0aGUgcGFyYW1ldGVyIGxlbmd0aCBpcyAxXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERlZmVycmVkO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyBuYXZpZ2F0b3IudXNlckFnZW50IHN0cmluZyBvciAnJyBpZiBpdCdzIG5vdCBkZWZpbmVkLlxyXG4gKiBAcmV0dXJuIHVzZXIgYWdlbnQgc3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRVQSgpIHtcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIHR5cGVvZiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQ29yZG92YSAvIFBob25lR2FwIC8gSW9uaWMgZnJhbWV3b3JrcyBvbiBhIG1vYmlsZSBkZXZpY2UuXHJcbiAqXHJcbiAqIERlbGliZXJhdGVseSBkb2VzIG5vdCByZWx5IG9uIGNoZWNraW5nIGBmaWxlOi8vYCBVUkxzIChhcyB0aGlzIGZhaWxzIFBob25lR2FwXHJcbiAqIGluIHRoZSBSaXBwbGUgZW11bGF0b3IpIG5vciBDb3Jkb3ZhIGBvbkRldmljZVJlYWR5YCwgd2hpY2ggd291bGQgbm9ybWFsbHlcclxuICogd2FpdCBmb3IgYSBjYWxsYmFjay5cclxuICovXHJcbmZ1bmN0aW9uIGlzTW9iaWxlQ29yZG92YSgpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAvLyBAdHMtaWdub3JlIFNldHRpbmcgdXAgYW4gYnJvYWRseSBhcHBsaWNhYmxlIGluZGV4IHNpZ25hdHVyZSBmb3IgV2luZG93XHJcbiAgICAgICAgLy8ganVzdCB0byBkZWFsIHdpdGggdGhpcyBjYXNlIHdvdWxkIHByb2JhYmx5IGJlIGEgYmFkIGlkZWEuXHJcbiAgICAgICAgISEod2luZG93Wydjb3Jkb3ZhJ10gfHwgd2luZG93WydwaG9uZWdhcCddIHx8IHdpbmRvd1snUGhvbmVHYXAnXSkgJiZcclxuICAgICAgICAvaW9zfGlwaG9uZXxpcG9kfGlwYWR8YW5kcm9pZHxibGFja2JlcnJ5fGllbW9iaWxlL2kudGVzdChnZXRVQSgpKSk7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBOb2RlLmpzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgTm9kZS5qcyBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cclxuICovXHJcbi8vIE5vZGUgZGV0ZWN0aW9uIGxvZ2ljIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9pbGlha2FuL2RldGVjdC1ub2RlL1xyXG5mdW5jdGlvbiBpc05vZGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQnJvd3NlciBFbnZpcm9ubWVudFxyXG4gKi9cclxuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGY7XHJcbn1cclxuZnVuY3Rpb24gaXNCcm93c2VyRXh0ZW5zaW9uKCkge1xyXG4gICAgdmFyIHJ1bnRpbWUgPSB0eXBlb2YgY2hyb21lID09PSAnb2JqZWN0J1xyXG4gICAgICAgID8gY2hyb21lLnJ1bnRpbWVcclxuICAgICAgICA6IHR5cGVvZiBicm93c2VyID09PSAnb2JqZWN0J1xyXG4gICAgICAgICAgICA/IGJyb3dzZXIucnVudGltZVxyXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB0eXBlb2YgcnVudGltZSA9PT0gJ29iamVjdCcgJiYgcnVudGltZS5pZCAhPT0gdW5kZWZpbmVkO1xyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgUmVhY3QgTmF0aXZlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnQgaXMgZGV0ZWN0ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1JlYWN0TmF0aXZlKCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiBuYXZpZ2F0b3JbJ3Byb2R1Y3QnXSA9PT0gJ1JlYWN0TmF0aXZlJyk7XHJcbn1cclxuLyoqIERldGVjdHMgRWxlY3Ryb24gYXBwcy4gKi9cclxuZnVuY3Rpb24gaXNFbGVjdHJvbigpIHtcclxuICAgIHJldHVybiBnZXRVQSgpLmluZGV4T2YoJ0VsZWN0cm9uLycpID49IDA7XHJcbn1cclxuLyoqIERldGVjdHMgSW50ZXJuZXQgRXhwbG9yZXIuICovXHJcbmZ1bmN0aW9uIGlzSUUoKSB7XHJcbiAgICB2YXIgdWEgPSBnZXRVQSgpO1xyXG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ01TSUUgJykgPj0gMCB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpID49IDA7XHJcbn1cclxuLyoqIERldGVjdHMgVW5pdmVyc2FsIFdpbmRvd3MgUGxhdGZvcm0gYXBwcy4gKi9cclxuZnVuY3Rpb24gaXNVV1AoKSB7XHJcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdNU0FwcEhvc3QvJykgPj0gMDtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIGN1cnJlbnQgU0RLIGJ1aWxkIGlzIHRoZSBOb2RlIHZlcnNpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpdCdzIHRoZSBOb2RlIFNESyBidWlsZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzTm9kZVNkaygpIHtcclxuICAgIHJldHVybiBDT05TVEFOVFMuTk9ERV9DTElFTlQgPT09IHRydWUgfHwgQ09OU1RBTlRTLk5PREVfQURNSU4gPT09IHRydWU7XHJcbn1cclxuLyoqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgcnVubmluZyBpbiBTYWZhcmkuICovXHJcbmZ1bmN0aW9uIGlzU2FmYXJpKCkge1xyXG4gICAgcmV0dXJuICghaXNOb2RlKCkgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdTYWZhcmknKSAmJlxyXG4gICAgICAgICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdDaHJvbWUnKSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIEVSUk9SX05BTUUgPSAnRmlyZWJhc2VFcnJvcic7XHJcbi8vIEJhc2VkIG9uIGNvZGUgZnJvbTpcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjQ3VzdG9tX0Vycm9yX1R5cGVzXHJcbnZhciBGaXJlYmFzZUVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgdHNsaWIuX19leHRlbmRzKEZpcmViYXNlRXJyb3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGaXJlYmFzZUVycm9yKGNvZGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBFUlJPUl9OQU1FO1xyXG4gICAgICAgIC8vIEZpeCBGb3IgRVM1XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0LXdpa2kvYmxvYi9tYXN0ZXIvQnJlYWtpbmctQ2hhbmdlcy5tZCNleHRlbmRpbmctYnVpbHQtaW5zLWxpa2UtZXJyb3ItYXJyYXktYW5kLW1hcC1tYXktbm8tbG9uZ2VyLXdvcmtcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIEZpcmViYXNlRXJyb3IucHJvdG90eXBlKTtcclxuICAgICAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93bi5cclxuICAgICAgICAvLyBPbmx5IGF2YWlsYWJsZSBvbiBWOC5cclxuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcclxuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIEVycm9yRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZpcmViYXNlRXJyb3I7XHJcbn0oRXJyb3IpKTtcclxudmFyIEVycm9yRmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVycm9yRmFjdG9yeShzZXJ2aWNlLCBzZXJ2aWNlTmFtZSwgZXJyb3JzKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcclxuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gc2VydmljZU5hbWU7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB9XHJcbiAgICBFcnJvckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBkYXRhW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VzdG9tRGF0YSA9IGRhdGFbMF0gfHwge307XHJcbiAgICAgICAgdmFyIGZ1bGxDb2RlID0gdGhpcy5zZXJ2aWNlICsgXCIvXCIgKyBjb2RlO1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuZXJyb3JzW2NvZGVdO1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gdGVtcGxhdGUgPyByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGUsIGN1c3RvbURhdGEpIDogJ0Vycm9yJztcclxuICAgICAgICAvLyBTZXJ2aWNlIE5hbWU6IEVycm9yIG1lc3NhZ2UgKHNlcnZpY2UvY29kZSkuXHJcbiAgICAgICAgdmFyIGZ1bGxNZXNzYWdlID0gdGhpcy5zZXJ2aWNlTmFtZSArIFwiOiBcIiArIG1lc3NhZ2UgKyBcIiAoXCIgKyBmdWxsQ29kZSArIFwiKS5cIjtcclxuICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRmlyZWJhc2VFcnJvcihmdWxsQ29kZSwgZnVsbE1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIEtleXMgd2l0aCBhbiB1bmRlcnNjb3JlIGF0IHRoZSBlbmQgb2YgdGhlaXIgbmFtZSBhcmUgbm90IGluY2x1ZGVkIGluXHJcbiAgICAgICAgLy8gZXJyb3IuZGF0YSBmb3Igc29tZSByZWFzb24uXHJcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB3aXRoIE9iamVjdC5lbnRyaWVzIHdoZW4gbGliIGlzIHVwZGF0ZWQgdG8gZXMyMDE3LlxyXG4gICAgICAgIGZvciAodmFyIF9hID0gMCwgX2IgPSBPYmplY3Qua2V5cyhjdXN0b21EYXRhKTsgX2EgPCBfYi5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9iW19hXTtcclxuICAgICAgICAgICAgaWYgKGtleS5zbGljZSgtMSkgIT09ICdfJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk92ZXJ3cml0aW5nIEZpcmViYXNlRXJyb3IgYmFzZSBmaWVsZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY2FuIGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXJyb3Jba2V5XSA9IGN1c3RvbURhdGFba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVycm9yRmFjdG9yeTtcclxufSgpKTtcclxuZnVuY3Rpb24gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShQQVRURVJOLCBmdW5jdGlvbiAoXywga2V5KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gdmFsdWUudG9TdHJpbmcoKSA6IFwiPFwiICsga2V5ICsgXCI/PlwiO1xyXG4gICAgfSk7XHJcbn1cclxudmFyIFBBVFRFUk4gPSAvXFx7XFwkKFtefV0rKX0vZztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEV2YWx1YXRlcyBhIEpTT04gc3RyaW5nIGludG8gYSBqYXZhc2NyaXB0IG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBBIHN0cmluZyBjb250YWluaW5nIEpTT04uXHJcbiAqIEByZXR1cm4geyp9IFRoZSBqYXZhc2NyaXB0IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHNwZWNpZmllZCBKU09OLlxyXG4gKi9cclxuZnVuY3Rpb24ganNvbkV2YWwoc3RyKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIEpTT04gcmVwcmVzZW50aW5nIGEgamF2YXNjcmlwdCBvYmplY3QuXHJcbiAqIEBwYXJhbSB7Kn0gZGF0YSBKYXZhc2NyaXB0IG9iamVjdCB0byBiZSBzdHJpbmdpZmllZC5cclxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSlNPTiBjb250ZW50cyBvZiB0aGUgb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gc3RyaW5naWZ5KGRhdGEpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGludG8gY29uc3RpdHVlbnQgcGFydHMuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gd2l0aCBpbnZhbGlkIC8gaW5jb21wbGV0ZSBjbGFpbXMgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgZGVjb2RlID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICB2YXIgaGVhZGVyID0ge30sIGNsYWltcyA9IHt9LCBkYXRhID0ge30sIHNpZ25hdHVyZSA9ICcnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgcGFydHMgPSB0b2tlbi5zcGxpdCgnLicpO1xyXG4gICAgICAgIGhlYWRlciA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1swXSkgfHwgJycpO1xyXG4gICAgICAgIGNsYWltcyA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1sxXSkgfHwgJycpO1xyXG4gICAgICAgIHNpZ25hdHVyZSA9IHBhcnRzWzJdO1xyXG4gICAgICAgIGRhdGEgPSBjbGFpbXNbJ2QnXSB8fCB7fTtcclxuICAgICAgICBkZWxldGUgY2xhaW1zWydkJ107XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogaGVhZGVyLFxyXG4gICAgICAgIGNsYWltczogY2xhaW1zLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc2lnbmF0dXJlOiBzaWduYXR1cmVcclxuICAgIH07XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIHRpbWUtYmFzZWQgY2xhaW1zLiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZVxyXG4gKiB0b2tlbiBpcyB3aXRoaW4gdGhlIHRpbWUgd2luZG93IGF1dGhvcml6ZWQgYnkgdGhlICduYmYnIChub3QtYmVmb3JlKSBhbmQgJ2lhdCcgKGlzc3VlZC1hdCkgY2xhaW1zLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgaXNWYWxpZFRpbWVzdGFtcCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgdmFyIGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgdmFyIG5vdyA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgIHZhciB2YWxpZFNpbmNlID0gMCwgdmFsaWRVbnRpbCA9IDA7XHJcbiAgICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCduYmYnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWyduYmYnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWydpYXQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnZXhwJykpIHtcclxuICAgICAgICAgICAgdmFsaWRVbnRpbCA9IGNsYWltc1snZXhwJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0b2tlbiB3aWxsIGV4cGlyZSBhZnRlciAyNGggYnkgZGVmYXVsdFxyXG4gICAgICAgICAgICB2YWxpZFVudGlsID0gdmFsaWRTaW5jZSArIDg2NDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoISFub3cgJiZcclxuICAgICAgICAhIXZhbGlkU2luY2UgJiZcclxuICAgICAgICAhIXZhbGlkVW50aWwgJiZcclxuICAgICAgICBub3cgPj0gdmFsaWRTaW5jZSAmJlxyXG4gICAgICAgIG5vdyA8PSB2YWxpZFVudGlsKTtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgcmV0dXJucyBpdHMgaXNzdWVkIGF0IHRpbWUgaWYgdmFsaWQsIG51bGwgb3RoZXJ3aXNlLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIG51bGwgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgaXNzdWVkQXRUaW1lID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICB2YXIgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xyXG4gICAgICAgIHJldHVybiBjbGFpbXNbJ2lhdCddO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIGZvcm1hdC4gRXhwZWN0cyBhIHZhbGlkIGlzc3VlZC1hdCB0aW1lLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgaXNWYWxpZEZvcm1hdCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgdmFyIGRlY29kZWQgPSBkZWNvZGUodG9rZW4pLCBjbGFpbXMgPSBkZWNvZGVkLmNsYWltcztcclxuICAgIHJldHVybiAhIWNsYWltcyAmJiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpO1xyXG59O1xyXG4vKipcclxuICogQXR0ZW1wdHMgdG8gcGVlciBpbnRvIGFuIGF1dGggdG9rZW4gYW5kIGRldGVybWluZSBpZiBpdCdzIGFuIGFkbWluIGF1dGggdG9rZW4gYnkgbG9va2luZyBhdCB0aGUgY2xhaW1zIHBvcnRpb24uXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbnZhciBpc0FkbWluID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICB2YXIgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICByZXR1cm4gdHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zWydhZG1pbiddID09PSB0cnVlO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb250YWlucyhvYmosIGtleSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XHJcbn1cclxuZnVuY3Rpb24gc2FmZUdldChvYmosIGtleSkge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICByZXR1cm4gb2JqW2tleV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIG1hcChvYmosIGZuLCBjb250ZXh0T2JqKSB7XHJcbiAgICB2YXIgcmVzID0ge307XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICAgICAgcmVzW2tleV0gPSBmbi5jYWxsKGNvbnRleHRPYmosIG9ialtrZXldLCBrZXksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyBhIHF1ZXJ5c3RyaW5nLWZvcm1hdHRlZCBzdHJpbmcgKGUuZy4gJmFyZz12YWwmYXJnMj12YWwyKSBmcm9tIGFcclxuICogcGFyYW1zIG9iamVjdCAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcclxuICogTm90ZTogWW91IG11c3QgcHJlcGVuZCBpdCB3aXRoID8gd2hlbiBhZGRpbmcgaXQgdG8gYSBVUkwuXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeXN0cmluZ1BhcmFtcykge1xyXG4gICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChhcnJheVZhbCkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJyYXlWYWwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMocXVlcnlzdHJpbmdQYXJhbXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgX2xvb3BfMShrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID8gJyYnICsgcGFyYW1zLmpvaW4oJyYnKSA6ICcnO1xyXG59XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgcXVlcnlzdHJpbmcgKGUuZy4gP2FyZz12YWwmYXJnMj12YWwyKSBpbnRvIGEgcGFyYW1zIG9iamVjdFxyXG4gKiAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nRGVjb2RlKHF1ZXJ5c3RyaW5nKSB7XHJcbiAgICB2YXIgb2JqID0ge307XHJcbiAgICB2YXIgdG9rZW5zID0gcXVlcnlzdHJpbmcucmVwbGFjZSgvXlxcPy8sICcnKS5zcGxpdCgnJicpO1xyXG4gICAgdG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSB0b2tlbi5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBvYmpba2V5WzBdXSA9IGtleVsxXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoLlxyXG4gKiBWYXJpYWJsZSBuYW1lcyBmb2xsb3cgdGhlIG5vdGF0aW9uIGluIEZJUFMgUFVCIDE4MC0zOlxyXG4gKiBodHRwOi8vY3NyYy5uaXN0Lmdvdi9wdWJsaWNhdGlvbnMvZmlwcy9maXBzMTgwLTMvZmlwczE4MC0zX2ZpbmFsLnBkZi5cclxuICpcclxuICogVXNhZ2U6XHJcbiAqICAgdmFyIHNoYTEgPSBuZXcgc2hhMSgpO1xyXG4gKiAgIHNoYTEudXBkYXRlKGJ5dGVzKTtcclxuICogICB2YXIgaGFzaCA9IHNoYTEuZGlnZXN0KCk7XHJcbiAqXHJcbiAqIFBlcmZvcm1hbmNlOlxyXG4gKiAgIENocm9tZSAyMzogICB+NDAwIE1iaXQvc1xyXG4gKiAgIEZpcmVmb3ggMTY6ICB+MjUwIE1iaXQvc1xyXG4gKlxyXG4gKi9cclxuLyoqXHJcbiAqIFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaCBjb25zdHJ1Y3Rvci5cclxuICpcclxuICogVGhlIHByb3BlcnRpZXMgZGVjbGFyZWQgaGVyZSBhcmUgZGlzY3Vzc2VkIGluIHRoZSBhYm92ZSBhbGdvcml0aG0gZG9jdW1lbnQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZmluYWxcclxuICogQHN0cnVjdFxyXG4gKi9cclxudmFyIFNoYTEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTaGExKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhvbGRzIHRoZSBwcmV2aW91cyB2YWx1ZXMgb2YgYWNjdW11bGF0ZWQgdmFyaWFibGVzIGEtZSBpbiB0aGUgY29tcHJlc3NfXHJcbiAgICAgICAgICogZnVuY3Rpb24uXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNoYWluXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgYnVmZmVyIGhvbGRpbmcgdGhlIHBhcnRpYWxseSBjb21wdXRlZCBoYXNoIHJlc3VsdC5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnVmXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGFycmF5IG9mIDgwIGJ5dGVzLCBlYWNoIGEgcGFydCBvZiB0aGUgbWVzc2FnZSB0byBiZSBoYXNoZWQuICBSZWZlcnJlZCB0b1xyXG4gICAgICAgICAqIGFzIHRoZSBtZXNzYWdlIHNjaGVkdWxlIGluIHRoZSBkb2NzLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5XXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbnRhaW5zIGRhdGEgbmVlZGVkIHRvIHBhZCBtZXNzYWdlcyBsZXNzIHRoYW4gNjQgYnl0ZXMuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnBhZF8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaW5idWZfID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudG90YWxfID0gMDtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IDUxMiAvIDg7XHJcbiAgICAgICAgdGhpcy5wYWRfWzBdID0gMTI4O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5ibG9ja1NpemU7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZF9baV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICBTaGExLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoYWluX1swXSA9IDB4Njc0NTIzMDE7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMV0gPSAweGVmY2RhYjg5O1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzJdID0gMHg5OGJhZGNmZTtcclxuICAgICAgICB0aGlzLmNoYWluX1szXSA9IDB4MTAzMjU0NzY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bNF0gPSAweGMzZDJlMWYwO1xyXG4gICAgICAgIHRoaXMuaW5idWZfID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsXyA9IDA7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBjb21wcmVzcyBoZWxwZXIgZnVuY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gYnVmIEJsb2NrIHRvIGNvbXByZXNzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgb2YgdGhlIGJsb2NrIGluIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBTaGExLnByb3RvdHlwZS5jb21wcmVzc18gPSBmdW5jdGlvbiAoYnVmLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9mZnNldCkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgVyA9IHRoaXMuV187XHJcbiAgICAgICAgLy8gZ2V0IDE2IGJpZyBlbmRpYW4gd29yZHNcclxuICAgICAgICBpZiAodHlwZW9mIGJ1ZiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKHVzZXIpOiBbYnVnIDgxNDAxMjJdIFJlY2VudCB2ZXJzaW9ucyBvZiBTYWZhcmkgZm9yIE1hYyBPUyBhbmQgaU9TXHJcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGEgYnVnIHRoYXQgdHVybnMgdGhlIHBvc3QtaW5jcmVtZW50ICsrIG9wZXJhdG9yIGludG8gcHJlLWluY3JlbWVudFxyXG4gICAgICAgICAgICAgICAgLy8gZHVyaW5nIEpJVCBjb21waWxhdGlvbi4gIFdlIGhhdmUgY29kZSB0aGF0IGRlcGVuZHMgaGVhdmlseSBvbiBTSEEtMSBmb3JcclxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3RuZXNzIGFuZCB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIGJ1Zywgc28gSSd2ZSByZW1vdmVkIGFsbCB1c2VzXHJcbiAgICAgICAgICAgICAgICAvLyBvZiBwb3N0LWluY3JlbWVudCArKyBpbiB3aGljaCB0aGUgcmVzdWx0IHZhbHVlIGlzIHVzZWQuICBXZSBjYW4gcmV2ZXJ0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNoYW5nZSBvbmNlIHRoZSBTYWZhcmkgYnVnXHJcbiAgICAgICAgICAgICAgICAvLyAoaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEwOTAzNikgaGFzIGJlZW4gZml4ZWQgYW5kXHJcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGNsaWVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcbiAgICAgICAgICAgICAgICBXW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0KSA8PCAyNCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMSkgPDwgMTYpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDIpIDw8IDgpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMyk7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBXW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldF0gPDwgMjQpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1ZltvZmZzZXQgKyAxXSA8PCAxNikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldCArIDJdIDw8IDgpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmW29mZnNldCArIDNdO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXhwYW5kIHRvIDgwIHdvcmRzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE2OyBpIDwgODA7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdCA9IFdbaSAtIDNdIF4gV1tpIC0gOF0gXiBXW2kgLSAxNF0gXiBXW2kgLSAxNl07XHJcbiAgICAgICAgICAgIFdbaV0gPSAoKHQgPDwgMSkgfCAodCA+Pj4gMzEpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy5jaGFpbl9bMF07XHJcbiAgICAgICAgdmFyIGIgPSB0aGlzLmNoYWluX1sxXTtcclxuICAgICAgICB2YXIgYyA9IHRoaXMuY2hhaW5fWzJdO1xyXG4gICAgICAgIHZhciBkID0gdGhpcy5jaGFpbl9bM107XHJcbiAgICAgICAgdmFyIGUgPSB0aGlzLmNoYWluX1s0XTtcclxuICAgICAgICB2YXIgZiwgaztcclxuICAgICAgICAvLyBUT0RPKHVzZXIpOiBUcnkgdG8gdW5yb2xsIHRoaXMgbG9vcCB0byBzcGVlZCB1cCB0aGUgY29tcHV0YXRpb24uXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgNDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgMjApIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gZCBeIChiICYgKGMgXiBkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4NWE4Mjc5OTk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gYiBeIGMgXiBkO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDZlZDllYmExO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSAoYiAmIGMpIHwgKGQgJiAoYiB8IGMpKTtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg4ZjFiYmNkYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBiIF4gYyBeIGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4Y2E2MmMxZDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHQgPSAoKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBmICsgZSArIGsgKyBXW2ldKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGUgPSBkO1xyXG4gICAgICAgICAgICBkID0gYztcclxuICAgICAgICAgICAgYyA9ICgoYiA8PCAzMCkgfCAoYiA+Pj4gMikpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICAgICAgYiA9IGE7XHJcbiAgICAgICAgICAgIGEgPSB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYWluX1swXSA9ICh0aGlzLmNoYWluX1swXSArIGEpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1sxXSA9ICh0aGlzLmNoYWluX1sxXSArIGIpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9ICh0aGlzLmNoYWluX1syXSArIGMpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1szXSA9ICh0aGlzLmNoYWluX1szXSArIGQpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1s0XSA9ICh0aGlzLmNoYWluX1s0XSArIGUpICYgMHhmZmZmZmZmZjtcclxuICAgIH07XHJcbiAgICBTaGExLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoYnl0ZXMsIGxlbmd0aCkge1xyXG4gICAgICAgIC8vIFRPRE8oam9obmxlbnopOiB0aWdodGVuIHRoZSBmdW5jdGlvbiBzaWduYXR1cmUgYW5kIHJlbW92ZSB0aGlzIGNoZWNrXHJcbiAgICAgICAgaWYgKGJ5dGVzID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGVuZ3RoID0gYnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuZ3RoTWludXNCbG9jayA9IGxlbmd0aCAtIHRoaXMuYmxvY2tTaXplO1xyXG4gICAgICAgIHZhciBuID0gMDtcclxuICAgICAgICAvLyBVc2luZyBsb2NhbCBpbnN0ZWFkIG9mIG1lbWJlciB2YXJpYWJsZXMgZ2l2ZXMgfjUlIHNwZWVkdXAgb24gRmlyZWZveCAxNi5cclxuICAgICAgICB2YXIgYnVmID0gdGhpcy5idWZfO1xyXG4gICAgICAgIHZhciBpbmJ1ZiA9IHRoaXMuaW5idWZfO1xyXG4gICAgICAgIC8vIFRoZSBvdXRlciB3aGlsZSBsb29wIHNob3VsZCBleGVjdXRlIGF0IG1vc3QgdHdpY2UuXHJcbiAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBoYXZlIG5vIGRhdGEgaW4gdGhlIGJsb2NrIHRvIHRvcCB1cCwgd2UgY2FuIGRpcmVjdGx5IHByb2Nlc3MgdGhlXHJcbiAgICAgICAgICAgIC8vIGlucHV0IGJ1ZmZlciAoYXNzdW1pbmcgaXQgY29udGFpbnMgc3VmZmljaWVudCBkYXRhKS4gVGhpcyBnaXZlcyB+MjUlXHJcbiAgICAgICAgICAgIC8vIHNwZWVkdXAgb24gQ2hyb21lIDIzIGFuZCB+MTUlIHNwZWVkdXAgb24gRmlyZWZveCAxNiwgYnV0IHJlcXVpcmVzIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIGRhdGEgaXMgcHJvdmlkZWQgaW4gbGFyZ2UgY2h1bmtzIChvciBpbiBtdWx0aXBsZXMgb2YgNjQgYnl0ZXMpLlxyXG4gICAgICAgICAgICBpZiAoaW5idWYgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDw9IGxlbmd0aE1pbnVzQmxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhieXRlcywgbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbiArPSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXMuY2hhckNvZGVBdChuKTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSBpbmJ1ZjtcclxuICAgICAgICB0aGlzLnRvdGFsXyArPSBsZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgLyoqIEBvdmVycmlkZSAqL1xyXG4gICAgU2hhMS5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkaWdlc3QgPSBbXTtcclxuICAgICAgICB2YXIgdG90YWxCaXRzID0gdGhpcy50b3RhbF8gKiA4O1xyXG4gICAgICAgIC8vIEFkZCBwYWQgMHg4MCAweDAwKi5cclxuICAgICAgICBpZiAodGhpcy5pbmJ1Zl8gPCA1Nikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLnBhZF8sIDU2IC0gdGhpcy5pbmJ1Zl8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCB0aGlzLmJsb2NrU2l6ZSAtICh0aGlzLmluYnVmXyAtIDU2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCAjIGJpdHMuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYmxvY2tTaXplIC0gMTsgaSA+PSA1NjsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmX1tpXSA9IHRvdGFsQml0cyAmIDI1NTtcclxuICAgICAgICAgICAgdG90YWxCaXRzIC89IDI1NjsgLy8gRG9uJ3QgdXNlIGJpdC1zaGlmdGluZyBoZXJlIVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXByZXNzXyh0aGlzLmJ1Zl8pO1xyXG4gICAgICAgIHZhciBuID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMjQ7IGogPj0gMDsgaiAtPSA4KSB7XHJcbiAgICAgICAgICAgICAgICBkaWdlc3Rbbl0gPSAodGhpcy5jaGFpbl9baV0gPj4gaikgJiAyNTU7XHJcbiAgICAgICAgICAgICAgICArK247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZ2VzdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2hhMTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIGEgU3Vic2NyaWJlIGZ1bmN0aW9uIChqdXN0IGxpa2UgUHJvbWlzZSBoZWxwcyBtYWtlIGFcclxuICogVGhlbmFibGUpLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICogICAgIGFzIGEgcHJveHkuXHJcbiAqIEBwYXJhbSBvbk5vT2JzZXJ2ZXJzIENhbGxiYWNrIHdoZW4gY291bnQgb2YgT2JzZXJ2ZXJzIGdvZXMgdG8gemVyby5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmliZShleGVjdXRvciwgb25Ob09ic2VydmVycykge1xyXG4gICAgdmFyIHByb3h5ID0gbmV3IE9ic2VydmVyUHJveHkoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpO1xyXG4gICAgcmV0dXJuIHByb3h5LnN1YnNjcmliZS5iaW5kKHByb3h5KTtcclxufVxyXG4vKipcclxuICogSW1wbGVtZW50IGZhbi1vdXQgZm9yIGFueSBudW1iZXIgb2YgT2JzZXJ2ZXJzIGF0dGFjaGVkIHZpYSBhIHN1YnNjcmliZVxyXG4gKiBmdW5jdGlvbi5cclxuICovXHJcbnZhciBPYnNlcnZlclByb3h5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICAgICAqICAgICBhcyBhIHByb3h5LlxyXG4gICAgICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBPYnNlcnZlclByb3h5KGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVzID0gW107XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlckNvdW50ID0gMDtcclxuICAgICAgICAvLyBNaWNyby10YXNrIHNjaGVkdWxpbmcgYnkgY2FsbGluZyB0YXNrLnRoZW4oKS5cclxuICAgICAgICB0aGlzLnRhc2sgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25Ob09ic2VydmVycyA9IG9uTm9PYnNlcnZlcnM7XHJcbiAgICAgICAgLy8gQ2FsbCB0aGUgZXhlY3V0b3IgYXN5bmNocm9ub3VzbHkgc28gc3Vic2NyaWJlcnMgdGhhdCBhcmUgY2FsbGVkXHJcbiAgICAgICAgLy8gc3luY2hyb25vdXNseSBhZnRlciB0aGUgY3JlYXRpb24gb2YgdGhlIHN1YnNjcmliZSBmdW5jdGlvblxyXG4gICAgICAgIC8vIGNhbiBzdGlsbCByZWNlaXZlIHRoZSB2ZXJ5IGZpcnN0IHZhbHVlIGdlbmVyYXRlZCBpbiB0aGUgZXhlY3V0b3IuXHJcbiAgICAgICAgdGhpcy50YXNrXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhlY3V0b3IoX3RoaXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoZXJyb3IpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBhbiBPYnNlcnZlciB0byB0aGUgZmFuLW91dCBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIC0gV2UgcmVxdWlyZSB0aGF0IG5vIGV2ZW50IGlzIHNlbnQgdG8gYSBzdWJzY3JpYmVyIHN5Y2hyb25vdXNseSB0byB0aGVpclxyXG4gICAgICogICBjYWxsIHRvIHN1YnNjcmliZSgpLlxyXG4gICAgICovXHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyO1xyXG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlciA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGVycm9yID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgY29tcGxldGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgT2JzZXJ2ZXIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFzc2VtYmxlIGFuIE9ic2VydmVyIG9iamVjdCB3aGVuIHBhc3NlZCBhcyBjYWxsYmFjayBmdW5jdGlvbnMuXHJcbiAgICAgICAgaWYgKGltcGxlbWVudHNBbnlNZXRob2RzKG5leHRPck9ic2VydmVyLCBbXHJcbiAgICAgICAgICAgICduZXh0JyxcclxuICAgICAgICAgICAgJ2Vycm9yJyxcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJ1xyXG4gICAgICAgIF0pKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV4dE9yT2JzZXJ2ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IHtcclxuICAgICAgICAgICAgICAgIG5leHQ6IG5leHRPck9ic2VydmVyLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5uZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdW5zdWIgPSB0aGlzLnVuc3Vic2NyaWJlT25lLmJpbmQodGhpcywgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKTtcclxuICAgICAgICAvLyBBdHRlbXB0IHRvIHN1YnNjcmliZSB0byBhIHRlcm1pbmF0ZWQgT2JzZXJ2YWJsZSAtIHdlXHJcbiAgICAgICAgLy8ganVzdCByZXNwb25kIHRvIHRoZSBPYnNlcnZlciB3aXRoIHRoZSBmaW5hbCBlcnJvciBvciBjb21wbGV0ZVxyXG4gICAgICAgIC8vIGV2ZW50LlxyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgICAgIHRoaXMudGFzay50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmZpbmFsRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoX3RoaXMuZmluYWxFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuIHVuc3ViO1xyXG4gICAgfTtcclxuICAgIC8vIFVuc3Vic2NyaWJlIGlzIHN5bmNocm9ub3VzIC0gd2UgZ3VhcmFudGVlIHRoYXQgbm8gZXZlbnRzIGFyZSBzZW50IHRvXHJcbiAgICAvLyBhbnkgdW5zdWJzY3JpYmVkIE9ic2VydmVyLlxyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUudW5zdWJzY3JpYmVPbmUgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub2JzZXJ2ZXJzW2ldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgdGhpcy5vYnNlcnZlcnNbaV07XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlckNvdW50IC09IDE7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJDb3VudCA9PT0gMCAmJiB0aGlzLm9uTm9PYnNlcnZlcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTm9PYnNlcnZlcnModGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLmZvckVhY2hPYnNlcnZlciA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAvLyBBbHJlYWR5IGNsb3NlZCBieSBwcmV2aW91cyBldmVudC4uLi5qdXN0IGVhdCB0aGUgYWRkaXRpb25hbCB2YWx1ZXMuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2luY2Ugc2VuZE9uZSBjYWxscyBhc3luY2hyb25vdXNseSAtIHRoZXJlIGlzIG5vIGNoYW5jZSB0aGF0XHJcbiAgICAgICAgLy8gdGhpcy5vYnNlcnZlcnMgd2lsbCBiZWNvbWUgdW5kZWZpbmVkLlxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kT25lKGksIGZuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gQ2FsbCB0aGUgT2JzZXJ2ZXIgdmlhIG9uZSBvZiBpdCdzIGNhbGxiYWNrIGZ1bmN0aW9uLiBXZSBhcmUgY2FyZWZ1bCB0b1xyXG4gICAgLy8gY29uZmlybSB0aGF0IHRoZSBvYnNlcnZlIGhhcyBub3QgYmVlbiB1bnN1YnNjcmliZWQgc2luY2UgdGhpcyBhc3luY2hyb25vdXNcclxuICAgIC8vIGZ1bmN0aW9uIGhhZCBiZWVuIHF1ZXVlZC5cclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLnNlbmRPbmUgPSBmdW5jdGlvbiAoaSwgZm4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGNhbGxiYWNrIGFzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMudGFzay50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9ic2VydmVycyAhPT0gdW5kZWZpbmVkICYmIF90aGlzLm9ic2VydmVyc1tpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZuKF90aGlzLm9ic2VydmVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBleGNlcHRpb25zIHJhaXNlZCBpbiBPYnNlcnZlcnMgb3IgbWlzc2luZyBtZXRob2RzIG9mIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIGVycm9yIHRvIGNvbnNvbGUuIGIvMzE0MDQ4MDZcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZXJyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5hbEVycm9yID0gZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcm94eSBpcyBubyBsb25nZXIgbmVlZGVkIC0gZ2FyYmFnZSBjb2xsZWN0IHJlZmVyZW5jZXNcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy50YXNrLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5vYnNlcnZlcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIF90aGlzLm9uTm9PYnNlcnZlcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmVyUHJveHk7XHJcbn0oKSk7XHJcbi8qKiBUdXJuIHN5bmNocm9ub3VzIGZ1bmN0aW9uIGludG8gb25lIGNhbGxlZCBhc3luY2hyb25vdXNseS4gKi9cclxuZnVuY3Rpb24gYXN5bmMoZm4sIG9uRXJyb3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybiB0cnVlIGlmIHRoZSBvYmplY3QgcGFzc2VkIGluIGltcGxlbWVudHMgYW55IG9mIHRoZSBuYW1lZCBtZXRob2RzLlxyXG4gKi9cclxuZnVuY3Rpb24gaW1wbGVtZW50c0FueU1ldGhvZHMob2JqLCBtZXRob2RzKSB7XHJcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBtZXRob2RzXzEgPSBtZXRob2RzOyBfaSA8IG1ldGhvZHNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gbWV0aG9kc18xW19pXTtcclxuICAgICAgICBpZiAobWV0aG9kIGluIG9iaiAmJiB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIG5vb3AoKSB7XHJcbiAgICAvLyBkbyBub3RoaW5nXHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcHJvdmlkZWQgZm9yIGEgcHVibGljIGZ1bmN0aW9uLlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgaXQgZmFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcclxuICogQHBhcmFtIG1pbkNvdW50IFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgdG8gYWxsb3cgZm9yIHRoZSBmdW5jdGlvbiBjYWxsXHJcbiAqIEBwYXJhbSBtYXhDb3VudCBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnQgdG8gYWxsb3cgZm9yIHRoZSBmdW5jdGlvbiBjYWxsXHJcbiAqIEBwYXJhbSBhcmdDb3VudCBUaGUgYWN0dWFsIG51bWJlciBvZiBhcmd1bWVudHMgcHJvdmlkZWQuXHJcbiAqL1xyXG52YXIgdmFsaWRhdGVBcmdDb3VudCA9IGZ1bmN0aW9uIChmbk5hbWUsIG1pbkNvdW50LCBtYXhDb3VudCwgYXJnQ291bnQpIHtcclxuICAgIHZhciBhcmdFcnJvcjtcclxuICAgIGlmIChhcmdDb3VudCA8IG1pbkNvdW50KSB7XHJcbiAgICAgICAgYXJnRXJyb3IgPSAnYXQgbGVhc3QgJyArIG1pbkNvdW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXJnQ291bnQgPiBtYXhDb3VudCkge1xyXG4gICAgICAgIGFyZ0Vycm9yID0gbWF4Q291bnQgPT09IDAgPyAnbm9uZScgOiAnbm8gbW9yZSB0aGFuICcgKyBtYXhDb3VudDtcclxuICAgIH1cclxuICAgIGlmIChhcmdFcnJvcikge1xyXG4gICAgICAgIHZhciBlcnJvciA9IGZuTmFtZSArXHJcbiAgICAgICAgICAgICcgZmFpbGVkOiBXYXMgY2FsbGVkIHdpdGggJyArXHJcbiAgICAgICAgICAgIGFyZ0NvdW50ICtcclxuICAgICAgICAgICAgKGFyZ0NvdW50ID09PSAxID8gJyBhcmd1bWVudC4nIDogJyBhcmd1bWVudHMuJykgK1xyXG4gICAgICAgICAgICAnIEV4cGVjdHMgJyArXHJcbiAgICAgICAgICAgIGFyZ0Vycm9yICtcclxuICAgICAgICAgICAgJy4nO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgdG8gcHJlZml4IGFuIGVycm9yIG1lc3NhZ2UgYWJvdXQgZmFpbGVkIGFyZ3VtZW50IHZhbGlkYXRpb25cclxuICpcclxuICogQHBhcmFtIGZuTmFtZSBUaGUgZnVuY3Rpb24gbmFtZVxyXG4gKiBAcGFyYW0gYXJndW1lbnROdW1iZXIgVGhlIGluZGV4IG9mIHRoZSBhcmd1bWVudFxyXG4gKiBAcGFyYW0gb3B0aW9uYWwgV2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50IGlzIG9wdGlvbmFsXHJcbiAqIEByZXR1cm4gVGhlIHByZWZpeCB0byBhZGQgdG8gdGhlIGVycm9yIHRocm93biBmb3IgdmFsaWRhdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROdW1iZXIsIG9wdGlvbmFsKSB7XHJcbiAgICB2YXIgYXJnTmFtZSA9ICcnO1xyXG4gICAgc3dpdGNoIChhcmd1bWVudE51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgYXJnTmFtZSA9IG9wdGlvbmFsID8gJ2ZpcnN0JyA6ICdGaXJzdCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgYXJnTmFtZSA9IG9wdGlvbmFsID8gJ3NlY29uZCcgOiAnU2Vjb25kJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBhcmdOYW1lID0gb3B0aW9uYWwgPyAndGhpcmQnIDogJ1RoaXJkJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBhcmdOYW1lID0gb3B0aW9uYWwgPyAnZm91cnRoJyA6ICdGb3VydGgnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yUHJlZml4IGNhbGxlZCB3aXRoIGFyZ3VtZW50TnVtYmVyID4gNC4gIE5lZWQgdG8gdXBkYXRlIGl0PycpO1xyXG4gICAgfVxyXG4gICAgdmFyIGVycm9yID0gZm5OYW1lICsgJyBmYWlsZWQ6ICc7XHJcbiAgICBlcnJvciArPSBhcmdOYW1lICsgJyBhcmd1bWVudCAnO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gZm5OYW1lXHJcbiAqIEBwYXJhbSBhcmd1bWVudE51bWJlclxyXG4gKiBAcGFyYW0gbmFtZXNwYWNlXHJcbiAqIEBwYXJhbSBvcHRpb25hbFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UoZm5OYW1lLCBhcmd1bWVudE51bWJlciwgbmFtZXNwYWNlLCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFuYW1lc3BhY2UpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvL1RPRE86IEkgc2hvdWxkIGRvIG1vcmUgdmFsaWRhdGlvbiBoZXJlLiBXZSBvbmx5IGFsbG93IGNlcnRhaW4gY2hhcnMgaW4gbmFtZXNwYWNlcy5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE51bWJlciwgb3B0aW9uYWwpICtcclxuICAgICAgICAgICAgJ211c3QgYmUgYSB2YWxpZCBmaXJlYmFzZSBuYW1lc3BhY2UuJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDYWxsYmFjayhmbk5hbWUsIGFyZ3VtZW50TnVtYmVyLCBjYWxsYmFjaywgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROdW1iZXIsIG9wdGlvbmFsKSArXHJcbiAgICAgICAgICAgICdtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0T2JqZWN0KGZuTmFtZSwgYXJndW1lbnROdW1iZXIsIGNvbnRleHQsIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIWNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgIT09ICdvYmplY3QnIHx8IGNvbnRleHQgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE51bWJlciwgb3B0aW9uYWwpICtcclxuICAgICAgICAgICAgJ211c3QgYmUgYSB2YWxpZCBjb250ZXh0IG9iamVjdC4nKTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vLyBDb2RlIG9yaWdpbmFsbHkgY2FtZSBmcm9tIGdvb2cuY3J5cHQuc3RyaW5nVG9VdGY4Qnl0ZUFycmF5LCBidXQgZm9yIHNvbWUgcmVhc29uIHRoZXlcclxuLy8gYXV0b21hdGljYWxseSByZXBsYWNlZCAnXFxyXFxuJyB3aXRoICdcXG4nLCBhbmQgdGhleSBkaWRuJ3QgaGFuZGxlIHN1cnJvZ2F0ZSBwYWlycyxcclxuLy8gc28gaXQncyBiZWVuIG1vZGlmaWVkLlxyXG4vLyBOb3RlIHRoYXQgbm90IGFsbCBVbmljb2RlIGNoYXJhY3RlcnMgYXBwZWFyIGFzIHNpbmdsZSBjaGFyYWN0ZXJzIGluIEphdmFTY3JpcHQgc3RyaW5ncy5cclxuLy8gZnJvbUNoYXJDb2RlIHJldHVybnMgdGhlIFVURi0xNiBlbmNvZGluZyBvZiBhIGNoYXJhY3RlciAtIHNvIHNvbWUgVW5pY29kZSBjaGFyYWN0ZXJzXHJcbi8vIHVzZSAyIGNoYXJhY3RlcnMgaW4gSmF2YXNjcmlwdC4gIEFsbCA0LWJ5dGUgVVRGLTggY2hhcmFjdGVycyBiZWdpbiB3aXRoIGEgZmlyc3RcclxuLy8gY2hhcmFjdGVyIGluIHRoZSByYW5nZSAweEQ4MDAgLSAweERCRkYgKHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzby1jYWxsZWQgc3Vycm9nYXRlXHJcbi8vIHBhaXIpLlxyXG4vLyBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTE1LjEuM1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICovXHJcbnZhciBzdHJpbmdUb0J5dGVBcnJheSQxID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIG91dCA9IFtdO1xyXG4gICAgdmFyIHAgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIC8vIElzIHRoaXMgdGhlIGxlYWQgc3Vycm9nYXRlIGluIGEgc3Vycm9nYXRlIHBhaXI/XHJcbiAgICAgICAgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XHJcbiAgICAgICAgICAgIHZhciBoaWdoID0gYyAtIDB4ZDgwMDsgLy8gdGhlIGhpZ2ggMTAgYml0cy5cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBhc3NlcnQoaSA8IHN0ci5sZW5ndGgsICdTdXJyb2dhdGUgcGFpciBtaXNzaW5nIHRyYWlsIHN1cnJvZ2F0ZS4nKTtcclxuICAgICAgICAgICAgdmFyIGxvdyA9IHN0ci5jaGFyQ29kZUF0KGkpIC0gMHhkYzAwOyAvLyB0aGUgbG93IDEwIGJpdHMuXHJcbiAgICAgICAgICAgIGMgPSAweDEwMDAwICsgKGhpZ2ggPDwgMTApICsgbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gNikgfCAxOTI7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCA2NTUzNikge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDE4KSB8IDI0MDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG4vKipcclxuICogQ2FsY3VsYXRlIGxlbmd0aCB3aXRob3V0IGFjdHVhbGx5IGNvbnZlcnRpbmc7IHVzZWZ1bCBmb3IgZG9pbmcgY2hlYXBlciB2YWxpZGF0aW9uLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBzdHJpbmdMZW5ndGggPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB2YXIgcCA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgcCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OCkge1xyXG4gICAgICAgICAgICBwICs9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmKSB7XHJcbiAgICAgICAgICAgIC8vIExlYWQgc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXIuICBUaGUgcGFpciB0b2dldGhlciB3aWxsIHRha2UgNCBieXRlcyB0byByZXByZXNlbnQuXHJcbiAgICAgICAgICAgIHAgKz0gNDtcclxuICAgICAgICAgICAgaSsrOyAvLyBza2lwIHRyYWlsIHN1cnJvZ2F0ZS5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAgKz0gMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcDtcclxufTtcblxuZXhwb3J0cy5DT05TVEFOVFMgPSBDT05TVEFOVFM7XG5leHBvcnRzLkRlZmVycmVkID0gRGVmZXJyZWQ7XG5leHBvcnRzLkVycm9yRmFjdG9yeSA9IEVycm9yRmFjdG9yeTtcbmV4cG9ydHMuRmlyZWJhc2VFcnJvciA9IEZpcmViYXNlRXJyb3I7XG5leHBvcnRzLlNoYTEgPSBTaGExO1xuZXhwb3J0cy5hc3NlcnQgPSBhc3NlcnQ7XG5leHBvcnRzLmFzc2VydGlvbkVycm9yID0gYXNzZXJ0aW9uRXJyb3I7XG5leHBvcnRzLmFzeW5jID0gYXN5bmM7XG5leHBvcnRzLmJhc2U2NCA9IGJhc2U2NDtcbmV4cG9ydHMuYmFzZTY0RGVjb2RlID0gYmFzZTY0RGVjb2RlO1xuZXhwb3J0cy5iYXNlNjRFbmNvZGUgPSBiYXNlNjRFbmNvZGU7XG5leHBvcnRzLmNvbnRhaW5zID0gY29udGFpbnM7XG5leHBvcnRzLmNyZWF0ZVN1YnNjcmliZSA9IGNyZWF0ZVN1YnNjcmliZTtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZXhwb3J0cy5kZWVwQ29weSA9IGRlZXBDb3B5O1xuZXhwb3J0cy5kZWVwRXh0ZW5kID0gZGVlcEV4dGVuZDtcbmV4cG9ydHMuZXJyb3JQcmVmaXggPSBlcnJvclByZWZpeDtcbmV4cG9ydHMuZ2V0VUEgPSBnZXRVQTtcbmV4cG9ydHMuaXNBZG1pbiA9IGlzQWRtaW47XG5leHBvcnRzLmlzQnJvd3NlciA9IGlzQnJvd3NlcjtcbmV4cG9ydHMuaXNCcm93c2VyRXh0ZW5zaW9uID0gaXNCcm93c2VyRXh0ZW5zaW9uO1xuZXhwb3J0cy5pc0VsZWN0cm9uID0gaXNFbGVjdHJvbjtcbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5leHBvcnRzLmlzSUUgPSBpc0lFO1xuZXhwb3J0cy5pc01vYmlsZUNvcmRvdmEgPSBpc01vYmlsZUNvcmRvdmE7XG5leHBvcnRzLmlzTm9kZSA9IGlzTm9kZTtcbmV4cG9ydHMuaXNOb2RlU2RrID0gaXNOb2RlU2RrO1xuZXhwb3J0cy5pc1JlYWN0TmF0aXZlID0gaXNSZWFjdE5hdGl2ZTtcbmV4cG9ydHMuaXNTYWZhcmkgPSBpc1NhZmFyaTtcbmV4cG9ydHMuaXNVV1AgPSBpc1VXUDtcbmV4cG9ydHMuaXNWYWxpZEZvcm1hdCA9IGlzVmFsaWRGb3JtYXQ7XG5leHBvcnRzLmlzVmFsaWRUaW1lc3RhbXAgPSBpc1ZhbGlkVGltZXN0YW1wO1xuZXhwb3J0cy5pc3N1ZWRBdFRpbWUgPSBpc3N1ZWRBdFRpbWU7XG5leHBvcnRzLmpzb25FdmFsID0ganNvbkV2YWw7XG5leHBvcnRzLm1hcCA9IG1hcDtcbmV4cG9ydHMucXVlcnlzdHJpbmcgPSBxdWVyeXN0cmluZztcbmV4cG9ydHMucXVlcnlzdHJpbmdEZWNvZGUgPSBxdWVyeXN0cmluZ0RlY29kZTtcbmV4cG9ydHMuc2FmZUdldCA9IHNhZmVHZXQ7XG5leHBvcnRzLnN0cmluZ0xlbmd0aCA9IHN0cmluZ0xlbmd0aDtcbmV4cG9ydHMuc3RyaW5nVG9CeXRlQXJyYXkgPSBzdHJpbmdUb0J5dGVBcnJheSQxO1xuZXhwb3J0cy5zdHJpbmdpZnkgPSBzdHJpbmdpZnk7XG5leHBvcnRzLnZhbGlkYXRlQXJnQ291bnQgPSB2YWxpZGF0ZUFyZ0NvdW50O1xuZXhwb3J0cy52YWxpZGF0ZUNhbGxiYWNrID0gdmFsaWRhdGVDYWxsYmFjaztcbmV4cG9ydHMudmFsaWRhdGVDb250ZXh0T2JqZWN0ID0gdmFsaWRhdGVDb250ZXh0T2JqZWN0O1xuZXhwb3J0cy52YWxpZGF0ZU5hbWVzcGFjZSA9IHZhbGlkYXRlTmFtZXNwYWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguY2pzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIGZpcmViYXNlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ0BmaXJlYmFzZS9hcHAnKSk7XG5cbnZhciBuYW1lID0gXCJmaXJlYmFzZVwiO1xudmFyIHZlcnNpb24gPSBcIjcuMTUuM1wiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5maXJlYmFzZS5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2FwcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguY2pzLmpzLm1hcFxuIiwiaW1wb3J0ICdAZmlyZWJhc2Uvc3RvcmFnZSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9