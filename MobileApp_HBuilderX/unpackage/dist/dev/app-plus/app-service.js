(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***********************************************************************!*\
  !*** E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/main.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 19));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 22));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBcUI7QUFBQTtBQUVyQkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBQ2hDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNkRyxZQUFHLEVBQ047QUFFRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5BcHAubXBUeXBlID0gJ2FwcCdcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIC4uLkFwcFxufSlcblxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!**************************************************************************!*\
  !*** E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/pages.json ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!*************************************************************************************************!*\
  !*** E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/pages/index/index.vue?mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2tMO0FBQ2xMLGdCQUFnQixzTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL1NvZnR3YXJlL0hidWlsZGVyeC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************************************************************************************************************!*\
  !*** E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "app-container"), attrs: { _i: 0 } },
    [
      _c(
        "scroll-view",
        { staticClass: _vm._$s(1, "sc", "main-content"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm._$s(2, "v-show", _vm.currentTab === 0),
                  expression: "_$s(2,'v-show',currentTab === 0)",
                },
              ],
              staticClass: _vm._$s(2, "sc", "page-section"),
              attrs: { _i: 2 },
            },
            [
              _c(
                "view",
                { staticClass: _vm._$s(3, "sc", "card"), attrs: { _i: 3 } },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(4, "sc", "title"),
                      attrs: { _i: 4 },
                    },
                    [
                      _c("text"),
                      _c(
                        "text",
                        {
                          class: _vm._$s(6, "c", [
                            "status-badge",
                            _vm.connected ? "connected" : "disconnected",
                          ]),
                          attrs: { _i: 6 },
                        },
                        [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.connText)))]
                      ),
                    ]
                  ),
                  _c(
                    "view",
                    { staticClass: _vm._$s(7, "sc", "row"), attrs: { _i: 7 } },
                    [
                      _c("button", {
                        staticClass: _vm._$s(8, "sc", "btn"),
                        attrs: { _i: 8 },
                        on: { click: _vm.openAndScan },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(9, "sc", "btn"),
                        attrs: { _i: 9 },
                        on: { click: _vm.stopScan },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(10, "sc", "btn"),
                        attrs: { _i: 10 },
                        on: { click: _vm.disconnect },
                      }),
                    ]
                  ),
                  _vm._$s(11, "i", _vm.connectedDeviceName)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(11, "sc", "sub mt-10"),
                          attrs: { _i: 11 },
                        },
                        [
                          _c("text"),
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                13,
                                "sc",
                                "device-name-highlight"
                              ),
                              attrs: { _i: 13 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  13,
                                  "t0-0",
                                  _vm._s(_vm.connectedDeviceName)
                                )
                              ),
                            ]
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._$s(14, "i", _vm.devices.length > 0 && !_vm.connected)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(14, "sc", "list"),
                          attrs: { _i: 14 },
                        },
                        _vm._l(
                          _vm._$s(15, "f", { forItems: _vm.devices }),
                          function (d, $10, $20, $30) {
                            return _c(
                              "view",
                              {
                                key: _vm._$s(15, "f", {
                                  forIndex: $20,
                                  key: d.deviceId,
                                }),
                                staticClass: _vm._$s("15-" + $30, "sc", "item"),
                                attrs: { _i: "15-" + $30 },
                              },
                              [
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "16-" + $30,
                                      "sc",
                                      "item-info"
                                    ),
                                    attrs: { _i: "16-" + $30 },
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticClass: _vm._$s(
                                          "17-" + $30,
                                          "sc",
                                          "name"
                                        ),
                                        attrs: { _i: "17-" + $30 },
                                      },
                                      [
                                        _vm._v(
                                          _vm._$s(
                                            "17-" + $30,
                                            "t0-0",
                                            _vm._s(
                                              d.name ||
                                                d.localName ||
                                                "Unnamed Device"
                                            )
                                          )
                                        ),
                                      ]
                                    ),
                                    _c(
                                      "view",
                                      {
                                        staticClass: _vm._$s(
                                          "18-" + $30,
                                          "sc",
                                          "id"
                                        ),
                                        attrs: { _i: "18-" + $30 },
                                      },
                                      [
                                        _vm._v(
                                          _vm._$s(
                                            "18-" + $30,
                                            "t0-0",
                                            _vm._s(d.deviceId)
                                          )
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                _c("button", {
                                  staticClass: _vm._$s(
                                    "19-" + $30,
                                    "sc",
                                    "connect-btn"
                                  ),
                                  attrs: { _i: "19-" + $30 },
                                  on: {
                                    click: function ($event) {
                                      return _vm.connectDevice(d)
                                    },
                                  },
                                }),
                              ]
                            )
                          }
                        ),
                        0
                      )
                    : _vm._e(),
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(20, "sc", "card"), attrs: { _i: 20 } },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(21, "sc", "title"),
                      attrs: { _i: 21 },
                    },
                    [
                      _c("text"),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(23, "sc", "title-actions"),
                          attrs: { _i: 23 },
                        },
                        [
                          _c("button", {
                            staticClass: _vm._$s(24, "sc", "action-btn"),
                            attrs: { _i: 24 },
                            on: {
                              click: function ($event) {
                                return _vm.sendCmd("GET,DATA")
                              },
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(25, "sc", "grid"),
                      attrs: { _i: 25 },
                    },
                    _vm._l(
                      _vm._$s(26, "f", { forItems: _vm.metrics }),
                      function (m, $11, $21, $31) {
                        return _c(
                          "view",
                          {
                            key: _vm._$s(26, "f", { forIndex: $21, key: m.k }),
                            class: _vm._$s("26-" + $31, "c", [
                              "kv",
                              m.k === "ALARM" && m.v === "ON" ? "alert" : "",
                            ]),
                            attrs: { _i: "26-" + $31 },
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "27-" + $31,
                                  "sc",
                                  "kv-header"
                                ),
                                attrs: { _i: "27-" + $31 },
                              },
                              [
                                _c(
                                  "text",
                                  {
                                    staticClass: _vm._$s(
                                      "28-" + $31,
                                      "sc",
                                      "icon"
                                    ),
                                    attrs: { _i: "28-" + $31 },
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "28-" + $31,
                                        "t0-0",
                                        _vm._s(m.icon)
                                      )
                                    ),
                                  ]
                                ),
                                _c(
                                  "text",
                                  {
                                    staticClass: _vm._$s(
                                      "29-" + $31,
                                      "sc",
                                      "k"
                                    ),
                                    attrs: { _i: "29-" + $31 },
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s("29-" + $31, "t0-0", _vm._s(m.k))
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s("30-" + $31, "sc", "v"),
                                attrs: { _i: "30-" + $31 },
                              },
                              [
                                _vm._v(
                                  _vm._$s("30-" + $31, "t0-0", _vm._s(m.v))
                                ),
                              ]
                            ),
                          ]
                        )
                      }
                    ),
                    0
                  ),
                ]
              ),
            ]
          ),
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm._$s(31, "v-show", _vm.currentTab === 1),
                  expression: "_$s(31,'v-show',currentTab === 1)",
                },
              ],
              staticClass: _vm._$s(31, "sc", "page-section"),
              attrs: { _i: 31 },
            },
            [
              _c(
                "view",
                { staticClass: _vm._$s(32, "sc", "card"), attrs: { _i: 32 } },
                [
                  _c("view", {
                    staticClass: _vm._$s(33, "sc", "title"),
                    attrs: { _i: 33 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(34, "sc", "row"),
                      attrs: { _i: 34 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(35, "sc", "btn"),
                        attrs: { _i: 35 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("SET,MODE,AUTO")
                          },
                        },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(36, "sc", "btn"),
                        attrs: { _i: 36 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("SET,MODE,MAN")
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(37, "sc", "row"),
                      attrs: { _i: 37 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(38, "sc", "btn"),
                        attrs: { _i: 38 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("SET,FAN,1")
                          },
                        },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(39, "sc", "btn"),
                        attrs: { _i: 39 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("SET,FAN,0")
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(40, "sc", "row"),
                      attrs: { _i: 40 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(41, "sc", "btn"),
                        attrs: { _i: 41 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("SET,MUTE,1")
                          },
                        },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(42, "sc", "btn"),
                        attrs: { _i: 42 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("SET,MUTE,0")
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(43, "sc", "card"), attrs: { _i: 43 } },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(44, "sc", "title"),
                      attrs: { _i: 44 },
                    },
                    [
                      _c("text"),
                      _c("button", {
                        staticClass: _vm._$s(46, "sc", "action-btn"),
                        attrs: { _i: 46 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("GET,CFG")
                          },
                        },
                      }),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(47, "sc", "form-group"),
                      attrs: { _i: 47 },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(48, "sc", "formRow"),
                          attrs: { _i: 48 },
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(49, "sc", "label"),
                            attrs: { _i: 49 },
                          }),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cfgEdit.co2,
                                expression: "cfgEdit.co2",
                              },
                            ],
                            staticClass: _vm._$s(50, "sc", "ipt"),
                            attrs: { _i: 50 },
                            domProps: {
                              value: _vm._$s(50, "v-model", _vm.cfgEdit.co2),
                            },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.cfgEdit,
                                  "co2",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(51, "sc", "formRow"),
                          attrs: { _i: 51 },
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(52, "sc", "label"),
                            attrs: { _i: 52 },
                          }),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cfgEdit.tvoc,
                                expression: "cfgEdit.tvoc",
                              },
                            ],
                            staticClass: _vm._$s(53, "sc", "ipt"),
                            attrs: { _i: 53 },
                            domProps: {
                              value: _vm._$s(53, "v-model", _vm.cfgEdit.tvoc),
                            },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.cfgEdit,
                                  "tvoc",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(54, "sc", "formRow"),
                          attrs: { _i: 54 },
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(55, "sc", "label"),
                            attrs: { _i: 55 },
                          }),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cfgEdit.pm25,
                                expression: "cfgEdit.pm25",
                              },
                            ],
                            staticClass: _vm._$s(56, "sc", "ipt"),
                            attrs: { _i: 56 },
                            domProps: {
                              value: _vm._$s(56, "v-model", _vm.cfgEdit.pm25),
                            },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.cfgEdit,
                                  "pm25",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(57, "sc", "formRow"),
                          attrs: { _i: 57 },
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(58, "sc", "label"),
                            attrs: { _i: 58 },
                          }),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cfgEdit.mq,
                                expression: "cfgEdit.mq",
                              },
                            ],
                            staticClass: _vm._$s(59, "sc", "ipt"),
                            attrs: { _i: 59 },
                            domProps: {
                              value: _vm._$s(59, "v-model", _vm.cfgEdit.mq),
                            },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.cfgEdit, "mq", $event.target.value)
                              },
                            },
                          }),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(60, "sc", "formRow"),
                          attrs: { _i: 60 },
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(61, "sc", "label"),
                            attrs: { _i: 61 },
                          }),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cfgEdit.fanoff,
                                expression: "cfgEdit.fanoff",
                              },
                            ],
                            staticClass: _vm._$s(62, "sc", "ipt"),
                            attrs: { _i: 62 },
                            domProps: {
                              value: _vm._$s(62, "v-model", _vm.cfgEdit.fanoff),
                            },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.cfgEdit,
                                  "fanoff",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(63, "sc", "row mt-20"),
                      attrs: { _i: 63 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(64, "sc", "btn"),
                        attrs: { _i: 64 },
                        on: { click: _vm.applyConfig },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(65, "sc", "btn"),
                        attrs: { _i: 65 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("SAVE")
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
            ]
          ),
          _c(
            "view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm._$s(66, "v-show", _vm.currentTab === 2),
                  expression: "_$s(66,'v-show',currentTab === 2)",
                },
              ],
              staticClass: _vm._$s(66, "sc", "page-section"),
              attrs: { _i: 66 },
            },
            [
              _c(
                "view",
                { staticClass: _vm._$s(67, "sc", "card"), attrs: { _i: 67 } },
                [
                  _c("view", {
                    staticClass: _vm._$s(68, "sc", "title"),
                    attrs: { _i: 68 },
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(69, "sc", "sub"),
                      attrs: { _i: 69 },
                    },
                    [
                      _c("text"),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(71, "sc", "ack-text"),
                          attrs: { _i: 71 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              71,
                              "t0-0",
                              _vm._s(_vm.lastAck || "暂无数据")
                            )
                          ),
                        ]
                      ),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(72, "sc", "row mt-20"),
                      attrs: { _i: 72 },
                    },
                    [
                      _c("button", {
                        staticClass: _vm._$s(73, "sc", "btn"),
                        attrs: { _i: 73 },
                        on: {
                          click: function ($event) {
                            return _vm.sendCmd("GET,LOG")
                          },
                        },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(74, "sc", "btn"),
                        attrs: { _i: 74 },
                        on: { click: _vm.clearDeviceLogs },
                      }),
                      _c("button", {
                        staticClass: _vm._$s(75, "sc", "btn"),
                        attrs: { _i: 75 },
                        on: { click: _vm.clearLocalLogs },
                      }),
                    ]
                  ),
                  _vm._$s(76, "i", _vm.logs.length > 0)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(76, "sc", "terminal"),
                          attrs: { _i: 76 },
                        },
                        _vm._l(
                          _vm._$s(77, "f", { forItems: _vm.logs }),
                          function (l, idx, $22, $32) {
                            return _c(
                              "view",
                              {
                                key: _vm._$s(77, "f", {
                                  forIndex: $22,
                                  key: idx,
                                }),
                                staticClass: _vm._$s("77-" + $32, "sc", "log"),
                                attrs: { _i: "77-" + $32 },
                              },
                              [
                                _c(
                                  "text",
                                  {
                                    staticClass: _vm._$s(
                                      "78-" + $32,
                                      "sc",
                                      "log-time"
                                    ),
                                    attrs: { _i: "78-" + $32 },
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "78-" + $32,
                                        "t0-0",
                                        _vm._s(l.time)
                                      )
                                    ),
                                  ]
                                ),
                                _c(
                                  "text",
                                  {
                                    staticClass: _vm._$s(
                                      "79-" + $32,
                                      "sc",
                                      "log-msg"
                                    ),
                                    attrs: { _i: "79-" + $32 },
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "79-" + $32,
                                        "t0-0",
                                        _vm._s(l.msg)
                                      )
                                    ),
                                  ]
                                ),
                              ]
                            )
                          }
                        ),
                        0
                      )
                    : _c("view", {
                        staticClass: _vm._$s(80, "sc", "empty-state"),
                        attrs: { _i: 80 },
                      }),
                ]
              ),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(81, "sc", "tab-bar"), attrs: { _i: 81 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(82, "sc", "tab-item"),
              class: _vm._$s(82, "c", { active: _vm.currentTab === 0 }),
              attrs: { _i: 82 },
              on: {
                click: function ($event) {
                  _vm.currentTab = 0
                },
              },
            },
            [
              _c("text", {
                staticClass: _vm._$s(83, "sc", "tab-icon"),
                attrs: { _i: 83 },
              }),
              _c("text", {
                staticClass: _vm._$s(84, "sc", "tab-text"),
                attrs: { _i: 84 },
              }),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(85, "sc", "tab-item"),
              class: _vm._$s(85, "c", { active: _vm.currentTab === 1 }),
              attrs: { _i: 85 },
              on: {
                click: function ($event) {
                  _vm.currentTab = 1
                },
              },
            },
            [
              _c("text", {
                staticClass: _vm._$s(86, "sc", "tab-icon"),
                attrs: { _i: 86 },
              }),
              _c("text", {
                staticClass: _vm._$s(87, "sc", "tab-text"),
                attrs: { _i: 87 },
              }),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(88, "sc", "tab-item"),
              class: _vm._$s(88, "c", { active: _vm.currentTab === 2 }),
              attrs: { _i: 88 },
              on: {
                click: function ($event) {
                  _vm.currentTab = 2
                },
              },
            },
            [
              _c("text", {
                staticClass: _vm._$s(89, "sc", "tab-icon"),
                attrs: { _i: 89 },
              }),
              _c("text", {
                staticClass: _vm._$s(90, "sc", "tab-text"),
                attrs: { _i: 90 },
              }),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!*************************************************************************************************************************!*\
  !*** E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdtQixDQUFnQiwwbUJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vU29mdHdhcmUvSGJ1aWxkZXJ4L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Tb2Z0d2FyZS9IYnVpbGRlcngvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL1NvZnR3YXJlL0hidWlsZGVyeC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL1NvZnR3YXJlL0hidWlsZGVyeC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL1NvZnR3YXJlL0hidWlsZGVyeC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vU29mdHdhcmUvSGJ1aWxkZXJ4L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi9Tb2Z0d2FyZS9IYnVpbGRlcngvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Tb2Z0d2FyZS9IYnVpbGRlcngvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _ble = _interopRequireDefault(__webpack_require__(/*! ../../utils/ble */ 15));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar LOG_KEY = 'airdevice_alarm_logs';\nfunction parseKvLine(line) {\n  var parts = line.split(',');\n  var kv = {};\n  for (var i = 1; i < parts.length; i++) {\n    var p = parts[i];\n    var pos = p.indexOf('=');\n    if (pos > 0) kv[p.slice(0, pos)] = p.slice(pos + 1);\n  }\n  return kv;\n}\nfunction nowText() {\n  var d = new Date();\n  var p = function p(n) {\n    return \"\".concat(n).padStart(2, '0');\n  };\n  return \"\".concat(d.getFullYear(), \"-\").concat(p(d.getMonth() + 1), \"-\").concat(p(d.getDate()), \" \").concat(p(d.getHours()), \":\").concat(p(d.getMinutes()), \":\").concat(p(d.getSeconds()));\n}\nvar _default = {\n  data: function data() {\n    return {\n      currentTab: 0,\n      // 当前所在页：0数据，1设置，2日志\n      ble: null,\n      connText: '未连接',\n      devices: [],\n      connected: false,\n      connectedDeviceName: '',\n      lastAck: '',\n      loadingCfg: false,\n      data: {\n        UP: 0,\n        T: 0,\n        H: 0,\n        CO2: 0,\n        TVOC: 0,\n        PM25: 0,\n        MQ: 0,\n        AQ: 0,\n        LV: 0,\n        ALM: 0,\n        MUTE: 0,\n        FAN: 0,\n        MODE: 0,\n        SGP: 0\n      },\n      cfgEdit: {\n        co2: '1000',\n        tvoc: '300',\n        pm25: '75',\n        mq: '2200',\n        fanoff: '30'\n      },\n      logs: [],\n      tempLogBatch: []\n    };\n  },\n  computed: {\n    // 给数据指标配上了对应的图标\n    metrics: function metrics() {\n      var d = this.data;\n      return [{\n        k: 'T(°C)',\n        v: d.T,\n        icon: '🌡️'\n      }, {\n        k: 'H(%)',\n        v: d.H,\n        icon: '💧'\n      }, {\n        k: 'eCO2',\n        v: d.CO2,\n        icon: '💨'\n      }, {\n        k: 'TVOC',\n        v: d.TVOC,\n        icon: '🧪'\n      }, {\n        k: 'PM2.5',\n        v: d.PM25,\n        icon: '🌫️'\n      }, {\n        k: 'MQ135',\n        v: d.MQ,\n        icon: '🏭'\n      }, {\n        k: 'AQ',\n        v: d.AQ,\n        icon: '🍃'\n      }, {\n        k: 'ALARM',\n        v: d.ALM ? 'ON' : 'OFF',\n        icon: '🚨'\n      }, {\n        k: 'FAN',\n        v: d.FAN ? 'ON' : 'OFF',\n        icon: '🌀'\n      }, {\n        k: 'MODE',\n        v: d.MODE === '1' ? 'MAN' : 'AUTO',\n        icon: '🤖'\n      }, {\n        k: 'SGP30',\n        v: d.SGP ? 'Online' : 'Offline',\n        icon: '🔌'\n      }, {\n        k: 'UP(s)',\n        v: d.UP,\n        icon: '⏱️'\n      }];\n    }\n  },\n  onLoad: function onLoad() {\n    var _this = this;\n    this.ble = new _ble.default();\n    this.ble.onDeviceFound(function (dev) {\n      var existed = _this.devices.find(function (d) {\n        return d.deviceId === dev.deviceId;\n      });\n      if (existed) return;\n      var name = dev.name || dev.localName || '';\n      if (name.toUpperCase().includes('JDY') || name.length > 0) {\n        _this.devices.push(dev);\n      }\n    });\n    this.ble.onState(function (st) {\n      if (st.type === 'adapter') _this.connText = st.ok ? '蓝牙已打开' : '蓝牙打开失败';\n      if (st.type === 'scan') _this.connText = st.scanning ? '扫描中...' : '已停止扫描';\n      if (st.type === 'conn') _this.connected = !!st.connected;\n    });\n    this.ble.onLine(function (line) {\n      return _this.handleLine(line);\n    });\n    this.loadLocalLogs();\n  },\n  onUnload: function onUnload() {\n    if (this.ble) {\n      this.ble.stopScan();\n      this.ble.disconnect();\n    }\n  },\n  methods: {\n    openAndScan: function openAndScan() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _this2.devices = [];\n                _context.next = 4;\n                return _this2.ble.openAdapter();\n              case 4:\n                _this2.ble.startScan();\n                _context.next = 10;\n                break;\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                uni.showToast({\n                  title: '蓝牙打开失败',\n                  icon: 'none'\n                });\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }))();\n    },\n    stopScan: function stopScan() {\n      this.ble.stopScan();\n    },\n    connectDevice: function connectDevice(d) {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return _this3.ble.connect(d.deviceId);\n              case 3:\n                _this3.connectedDeviceName = d.name || d.localName || d.deviceId;\n                _this3.connText = '已连接';\n                _this3.ble.stopScan();\n                _this3.sendCmd('GET,ALL');\n                _context2.next = 13;\n                break;\n              case 9:\n                _context2.prev = 9;\n                _context2.t0 = _context2[\"catch\"](0);\n                _this3.connText = '连接失败';\n                uni.showToast({\n                  title: '连接失败',\n                  icon: 'none'\n                });\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 9]]);\n      }))();\n    },\n    disconnect: function disconnect() {\n      if (this.ble) this.ble.disconnect();\n      this.connText = '已断开';\n      this.connectedDeviceName = '';\n    },\n    sendCmd: function sendCmd(cmd) {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (_this4.connected) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '请先连接设备',\n                  icon: 'none'\n                });\n                return _context3.abrupt(\"return\");\n              case 3:\n                _context3.prev = 3;\n                _context3.next = 6;\n                return _this4.ble.writeLine(cmd);\n              case 6:\n                _context3.next = 11;\n                break;\n              case 8:\n                _context3.prev = 8;\n                _context3.t0 = _context3[\"catch\"](3);\n                uni.showToast({\n                  title: '发送失败',\n                  icon: 'none'\n                });\n              case 11:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[3, 8]]);\n      }))();\n    },\n    applyConfig: function applyConfig() {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n        var list, i;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                list = [\"SET,CO2,\".concat(_this5.cfgEdit.co2), \"SET,TVOC,\".concat(_this5.cfgEdit.tvoc), \"SET,PM25,\".concat(_this5.cfgEdit.pm25), \"SET,MQ135,\".concat(_this5.cfgEdit.mq), \"SET,FANOFF,\".concat(_this5.cfgEdit.fanoff)];\n                i = 0;\n              case 2:\n                if (!(i < list.length)) {\n                  _context4.next = 10;\n                  break;\n                }\n                _context4.next = 5;\n                return _this5.sendCmd(list[i]);\n              case 5:\n                _context4.next = 7;\n                return new Promise(function (r) {\n                  return setTimeout(r, 120);\n                });\n              case 7:\n                i++;\n                _context4.next = 2;\n                break;\n              case 10:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }))();\n    },\n    clearLocalLogs: function clearLocalLogs() {\n      this.logs = [];\n      uni.setStorageSync(LOG_KEY, this.logs);\n    },\n    clearDeviceLogs: function clearDeviceLogs() {\n      this.sendCmd('CLR,LOG');\n    },\n    loadLocalLogs: function loadLocalLogs() {\n      var local = uni.getStorageSync(LOG_KEY);\n      if (Array.isArray(local)) this.logs = local;\n    },\n    pushLog: function pushLog(text) {\n      this.logs.unshift({\n        time: nowText(),\n        msg: text\n      });\n      if (this.logs.length > 200) this.logs = this.logs.slice(0, 200);\n      uni.setStorageSync(LOG_KEY, this.logs);\n    },\n    applyCfgFromKv: function applyCfgFromKv(kv) {\n      if (kv.CO2_TH) this.cfgEdit.co2 = kv.CO2_TH;\n      if (kv.TVOC_TH) this.cfgEdit.tvoc = kv.TVOC_TH;\n      if (kv.PM25_TH) this.cfgEdit.pm25 = kv.PM25_TH;\n      if (kv.MQ_TH) this.cfgEdit.mq = kv.MQ_TH;\n      if (kv.FANOFF) this.cfgEdit.fanoff = kv.FANOFF;\n    },\n    applyDataFromKv: function applyDataFromKv(kv) {\n      var _this6 = this;\n      var keys = Object.keys(this.data);\n      keys.forEach(function (k) {\n        if (kv[k] !== undefined) _this6.$set(_this6.data, k, kv[k]);\n      });\n    },\n    handleLine: function handleLine(line) {\n      var _this7 = this;\n      if (line.startsWith('$DATA,')) {\n        var kv = parseKvLine(line);\n        this.applyDataFromKv(kv);\n        return;\n      }\n      if (line.startsWith('$CFG,')) {\n        var _kv = parseKvLine(line);\n        this.applyCfgFromKv(_kv);\n        return;\n      }\n      if (line.startsWith('$EVT,')) {\n        this.pushLog(line);\n        return;\n      }\n      if (line.startsWith('$LOG,COUNT=')) {\n        this.tempLogBatch = [];\n        return;\n      }\n      if (line.startsWith('$LOG,')) {\n        this.tempLogBatch.push(line);\n        return;\n      }\n      if (line === '$ENDLOG') {\n        this.tempLogBatch.forEach(function (l) {\n          return _this7.pushLog(l);\n        });\n        this.tempLogBatch = [];\n        return;\n      }\n      if (line.startsWith('$ACK,')) {\n        this.lastAck = line;\n      }\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbIkxPR19LRVkiLCJwYXJzZUt2TGluZSIsImxpbmUiLCJwYXJ0cyIsInNwbGl0Iiwia3YiLCJpIiwibGVuZ3RoIiwicCIsInBvcyIsImluZGV4T2YiLCJzbGljZSIsIm5vd1RleHQiLCJkIiwiRGF0ZSIsIm4iLCJwYWRTdGFydCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImRhdGEiLCJjdXJyZW50VGFiIiwiYmxlIiwiY29ublRleHQiLCJkZXZpY2VzIiwiY29ubmVjdGVkIiwiY29ubmVjdGVkRGV2aWNlTmFtZSIsImxhc3RBY2siLCJsb2FkaW5nQ2ZnIiwiVVAiLCJUIiwiSCIsIkNPMiIsIlRWT0MiLCJQTTI1IiwiTVEiLCJBUSIsIkxWIiwiQUxNIiwiTVVURSIsIkZBTiIsIk1PREUiLCJTR1AiLCJjZmdFZGl0IiwiY28yIiwidHZvYyIsInBtMjUiLCJtcSIsImZhbm9mZiIsImxvZ3MiLCJ0ZW1wTG9nQmF0Y2giLCJjb21wdXRlZCIsIm1ldHJpY3MiLCJrIiwidiIsImljb24iLCJvbkxvYWQiLCJCbGVDbGllbnQiLCJvbkRldmljZUZvdW5kIiwiZGV2IiwiZXhpc3RlZCIsImZpbmQiLCJkZXZpY2VJZCIsIm5hbWUiLCJsb2NhbE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwicHVzaCIsIm9uU3RhdGUiLCJzdCIsInR5cGUiLCJvayIsInNjYW5uaW5nIiwib25MaW5lIiwiaGFuZGxlTGluZSIsImxvYWRMb2NhbExvZ3MiLCJvblVubG9hZCIsInN0b3BTY2FuIiwiZGlzY29ubmVjdCIsIm1ldGhvZHMiLCJvcGVuQW5kU2NhbiIsIm9wZW5BZGFwdGVyIiwic3RhcnRTY2FuIiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJjb25uZWN0RGV2aWNlIiwiY29ubmVjdCIsInNlbmRDbWQiLCJjbWQiLCJ3cml0ZUxpbmUiLCJhcHBseUNvbmZpZyIsImxpc3QiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiLCJjbGVhckxvY2FsTG9ncyIsInNldFN0b3JhZ2VTeW5jIiwiY2xlYXJEZXZpY2VMb2dzIiwibG9jYWwiLCJnZXRTdG9yYWdlU3luYyIsIkFycmF5IiwiaXNBcnJheSIsInB1c2hMb2ciLCJ0ZXh0IiwidW5zaGlmdCIsInRpbWUiLCJtc2ciLCJhcHBseUNmZ0Zyb21LdiIsIkNPMl9USCIsIlRWT0NfVEgiLCJQTTI1X1RIIiwiTVFfVEgiLCJGQU5PRkYiLCJhcHBseURhdGFGcm9tS3YiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsInVuZGVmaW5lZCIsIiRzZXQiLCJzdGFydHNXaXRoIiwibCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0pBO0FBcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFJSCxJQUFJLENBQUN5SCxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUIsSUFBTXRILEdBQUUsR0FBR0osV0FBVyxDQUFDQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDNkcsY0FBYyxDQUFDMUcsR0FBRSxDQUFDO1FBQ3ZCO01BQ0Y7TUFDQSxJQUFJSCxJQUFJLENBQUN5SCxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUIsSUFBSSxDQUFDakIsT0FBTyxDQUFDeEcsSUFBSSxDQUFDO1FBQ2xCO01BQ0Y7TUFDQSxJQUFJQSxJQUFJLENBQUN5SCxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDbEMsSUFBSSxDQUFDdEUsWUFBWSxHQUFHLEVBQUU7UUFDdEI7TUFDRjtNQUNBLElBQUluRCxJQUFJLENBQUN5SCxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDNUIsSUFBSSxDQUFDdEUsWUFBWSxDQUFDaUIsSUFBSSxDQUFDcEUsSUFBSSxDQUFDO1FBQzVCO01BQ0Y7TUFDQSxJQUFJQSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3RCLElBQUksQ0FBQ21ELFlBQVksQ0FBQ21FLE9BQU8sQ0FBQyxVQUFDSSxDQUFDO1VBQUEsT0FBSyxNQUFJLENBQUNsQixPQUFPLENBQUNrQixDQUFDLENBQUM7UUFBQSxFQUFDO1FBQ2pELElBQUksQ0FBQ3ZFLFlBQVksR0FBRyxFQUFFO1FBQ3RCO01BQ0Y7TUFDQSxJQUFJbkQsSUFBSSxDQUFDeUgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzVCLElBQUksQ0FBQzdGLE9BQU8sR0FBRzVCLElBQUk7TUFDckI7SUFDRjtFQUNGO0FBQ0YsQ0FBQztBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgQmxlQ2xpZW50IGZyb20gJy4uLy4uL3V0aWxzL2JsZSdcblxuY29uc3QgTE9HX0tFWSA9ICdhaXJkZXZpY2VfYWxhcm1fbG9ncydcblxuZnVuY3Rpb24gcGFyc2VLdkxpbmUobGluZSkge1xuICBjb25zdCBwYXJ0cyA9IGxpbmUuc3BsaXQoJywnKVxuICBjb25zdCBrdiA9IHt9XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwID0gcGFydHNbaV1cbiAgICBjb25zdCBwb3MgPSBwLmluZGV4T2YoJz0nKVxuICAgIGlmIChwb3MgPiAwKSBrdltwLnNsaWNlKDAsIHBvcyldID0gcC5zbGljZShwb3MgKyAxKVxuICB9XG4gIHJldHVybiBrdlxufVxuXG5mdW5jdGlvbiBub3dUZXh0KCkge1xuICBjb25zdCBkID0gbmV3IERhdGUoKVxuICBjb25zdCBwID0gKG4pID0+IGAke259YC5wYWRTdGFydCgyLCAnMCcpXG4gIHJldHVybiBgJHtkLmdldEZ1bGxZZWFyKCl9LSR7cChkLmdldE1vbnRoKCkgKyAxKX0tJHtwKGQuZ2V0RGF0ZSgpKX0gJHtwKGQuZ2V0SG91cnMoKSl9OiR7cChkLmdldE1pbnV0ZXMoKSl9OiR7cChkLmdldFNlY29uZHMoKSl9YFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRUYWI6IDAsIC8vIOW9k+WJjeaJgOWcqOmhte+8mjDmlbDmja7vvIwx6K6+572u77yMMuaXpeW/l1xuICAgICAgYmxlOiBudWxsLFxuICAgICAgY29ublRleHQ6ICfmnKrov57mjqUnLFxuICAgICAgZGV2aWNlczogW10sXG4gICAgICBjb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgY29ubmVjdGVkRGV2aWNlTmFtZTogJycsXG4gICAgICBsYXN0QWNrOiAnJyxcbiAgICAgIGxvYWRpbmdDZmc6IGZhbHNlLFxuICAgICAgZGF0YToge1xuICAgICAgICBVUDogMCwgVDogMCwgSDogMCwgQ08yOiAwLCBUVk9DOiAwLCBQTTI1OiAwLCBNUTogMCwgQVE6IDAsIExWOiAwLCBBTE06IDAsIE1VVEU6IDAsIEZBTjogMCwgTU9ERTogMCwgU0dQOiAwXG4gICAgICB9LFxuICAgICAgY2ZnRWRpdDogeyBjbzI6ICcxMDAwJywgdHZvYzogJzMwMCcsIHBtMjU6ICc3NScsIG1xOiAnMjIwMCcsIGZhbm9mZjogJzMwJyB9LFxuICAgICAgbG9nczogW10sXG4gICAgICB0ZW1wTG9nQmF0Y2g6IFtdXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8vIOe7meaVsOaNruaMh+agh+mFjeS4iuS6huWvueW6lOeahOWbvuagh1xuICAgIG1ldHJpY3MoKSB7XG4gICAgICBjb25zdCBkID0gdGhpcy5kYXRhXG4gICAgICByZXR1cm4gW1xuICAgICAgICB7IGs6ICdUKMKwQyknLCB2OiBkLlQsIGljb246ICfwn4yh77iPJyB9LFxuICAgICAgICB7IGs6ICdIKCUpJywgdjogZC5ILCBpY29uOiAn8J+SpycgfSxcbiAgICAgICAgeyBrOiAnZUNPMicsIHY6IGQuQ08yLCBpY29uOiAn8J+SqCcgfSxcbiAgICAgICAgeyBrOiAnVFZPQycsIHY6IGQuVFZPQywgaWNvbjogJ/Cfp6onIH0sXG4gICAgICAgIHsgazogJ1BNMi41JywgdjogZC5QTTI1LCBpY29uOiAn8J+Mq++4jycgfSxcbiAgICAgICAgeyBrOiAnTVExMzUnLCB2OiBkLk1RLCBpY29uOiAn8J+PrScgfSxcbiAgICAgICAgeyBrOiAnQVEnLCB2OiBkLkFRLCBpY29uOiAn8J+NgycgfSxcbiAgICAgICAgeyBrOiAnQUxBUk0nLCB2OiBkLkFMTSA/ICdPTicgOiAnT0ZGJywgaWNvbjogJ/CfmqgnIH0sXG4gICAgICAgIHsgazogJ0ZBTicsIHY6IGQuRkFOID8gJ09OJyA6ICdPRkYnLCBpY29uOiAn8J+MgCcgfSxcbiAgICAgICAgeyBrOiAnTU9ERScsIHY6IGQuTU9ERSA9PT0gJzEnID8gJ01BTicgOiAnQVVUTycsIGljb246ICfwn6SWJyB9LFxuICAgICAgICB7IGs6ICdTR1AzMCcsIHY6IGQuU0dQID8gJ09ubGluZScgOiAnT2ZmbGluZScsIGljb246ICfwn5SMJyB9LFxuICAgICAgICB7IGs6ICdVUChzKScsIHY6IGQuVVAsIGljb246ICfij7HvuI8nIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmJsZSA9IG5ldyBCbGVDbGllbnQoKVxuICAgIHRoaXMuYmxlLm9uRGV2aWNlRm91bmQoKGRldikgPT4ge1xuICAgICAgY29uc3QgZXhpc3RlZCA9IHRoaXMuZGV2aWNlcy5maW5kKChkKSA9PiBkLmRldmljZUlkID09PSBkZXYuZGV2aWNlSWQpXG4gICAgICBpZiAoZXhpc3RlZCkgcmV0dXJuXG4gICAgICBjb25zdCBuYW1lID0gZGV2Lm5hbWUgfHwgZGV2LmxvY2FsTmFtZSB8fCAnJ1xuICAgICAgaWYgKG5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcygnSkRZJykgfHwgbmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZGV2aWNlcy5wdXNoKGRldilcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuYmxlLm9uU3RhdGUoKHN0KSA9PiB7XG4gICAgICBpZiAoc3QudHlwZSA9PT0gJ2FkYXB0ZXInKSB0aGlzLmNvbm5UZXh0ID0gc3Qub2sgPyAn6JOd54mZ5bey5omT5byAJyA6ICfok53niZnmiZPlvIDlpLHotKUnXG4gICAgICBpZiAoc3QudHlwZSA9PT0gJ3NjYW4nKSB0aGlzLmNvbm5UZXh0ID0gc3Quc2Nhbm5pbmcgPyAn5omr5o+P5LitLi4uJyA6ICflt7LlgZzmraLmiavmj48nXG4gICAgICBpZiAoc3QudHlwZSA9PT0gJ2Nvbm4nKSB0aGlzLmNvbm5lY3RlZCA9ICEhc3QuY29ubmVjdGVkXG4gICAgfSlcbiAgICB0aGlzLmJsZS5vbkxpbmUoKGxpbmUpID0+IHRoaXMuaGFuZGxlTGluZShsaW5lKSlcbiAgICB0aGlzLmxvYWRMb2NhbExvZ3MoKVxuICB9LFxuICBvblVubG9hZCgpIHtcbiAgICBpZiAodGhpcy5ibGUpIHtcbiAgICAgIHRoaXMuYmxlLnN0b3BTY2FuKClcbiAgICAgIHRoaXMuYmxlLmRpc2Nvbm5lY3QoKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIG9wZW5BbmRTY2FuKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5kZXZpY2VzID0gW11cbiAgICAgICAgYXdhaXQgdGhpcy5ibGUub3BlbkFkYXB0ZXIoKVxuICAgICAgICB0aGlzLmJsZS5zdGFydFNjYW4oKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfok53niZnmiZPlvIDlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0b3BTY2FuKCkge1xuICAgICAgdGhpcy5ibGUuc3RvcFNjYW4oKVxuICAgIH0sXG4gICAgYXN5bmMgY29ubmVjdERldmljZShkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmJsZS5jb25uZWN0KGQuZGV2aWNlSWQpXG4gICAgICAgIHRoaXMuY29ubmVjdGVkRGV2aWNlTmFtZSA9IGQubmFtZSB8fCBkLmxvY2FsTmFtZSB8fCBkLmRldmljZUlkXG4gICAgICAgIHRoaXMuY29ublRleHQgPSAn5bey6L+e5o6lJ1xuICAgICAgICB0aGlzLmJsZS5zdG9wU2NhbigpXG4gICAgICAgIHRoaXMuc2VuZENtZCgnR0VULEFMTCcpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuY29ublRleHQgPSAn6L+e5o6l5aSx6LSlJ1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfov57mjqXlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICBpZiAodGhpcy5ibGUpIHRoaXMuYmxlLmRpc2Nvbm5lY3QoKVxuICAgICAgdGhpcy5jb25uVGV4dCA9ICflt7Lmlq3lvIAnXG4gICAgICB0aGlzLmNvbm5lY3RlZERldmljZU5hbWUgPSAnJ1xuICAgIH0sXG4gICAgYXN5bmMgc2VuZENtZChjbWQpIHtcbiAgICAgIGlmICghdGhpcy5jb25uZWN0ZWQpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn6K+35YWI6L+e5o6l6K6+5aSHJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5ibGUud3JpdGVMaW5lKGNtZClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5Y+R6YCB5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBhcHBseUNvbmZpZygpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBbXG4gICAgICAgIGBTRVQsQ08yLCR7dGhpcy5jZmdFZGl0LmNvMn1gLFxuICAgICAgICBgU0VULFRWT0MsJHt0aGlzLmNmZ0VkaXQudHZvY31gLFxuICAgICAgICBgU0VULFBNMjUsJHt0aGlzLmNmZ0VkaXQucG0yNX1gLFxuICAgICAgICBgU0VULE1RMTM1LCR7dGhpcy5jZmdFZGl0Lm1xfWAsXG4gICAgICAgIGBTRVQsRkFOT0ZGLCR7dGhpcy5jZmdFZGl0LmZhbm9mZn1gXG4gICAgICBdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kQ21kKGxpc3RbaV0pXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDEyMCkpXG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhckxvY2FsTG9ncygpIHtcbiAgICAgIHRoaXMubG9ncyA9IFtdXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoTE9HX0tFWSwgdGhpcy5sb2dzKVxuICAgIH0sXG4gICAgY2xlYXJEZXZpY2VMb2dzKCkge1xuICAgICAgdGhpcy5zZW5kQ21kKCdDTFIsTE9HJylcbiAgICB9LFxuICAgIGxvYWRMb2NhbExvZ3MoKSB7XG4gICAgICBjb25zdCBsb2NhbCA9IHVuaS5nZXRTdG9yYWdlU3luYyhMT0dfS0VZKVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobG9jYWwpKSB0aGlzLmxvZ3MgPSBsb2NhbFxuICAgIH0sXG4gICAgcHVzaExvZyh0ZXh0KSB7XG4gICAgICB0aGlzLmxvZ3MudW5zaGlmdCh7IHRpbWU6IG5vd1RleHQoKSwgbXNnOiB0ZXh0IH0pXG4gICAgICBpZiAodGhpcy5sb2dzLmxlbmd0aCA+IDIwMCkgdGhpcy5sb2dzID0gdGhpcy5sb2dzLnNsaWNlKDAsIDIwMClcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhMT0dfS0VZLCB0aGlzLmxvZ3MpXG4gICAgfSxcbiAgICBhcHBseUNmZ0Zyb21Ldihrdikge1xuICAgICAgaWYgKGt2LkNPMl9USCkgdGhpcy5jZmdFZGl0LmNvMiA9IGt2LkNPMl9USFxuICAgICAgaWYgKGt2LlRWT0NfVEgpIHRoaXMuY2ZnRWRpdC50dm9jID0ga3YuVFZPQ19USFxuICAgICAgaWYgKGt2LlBNMjVfVEgpIHRoaXMuY2ZnRWRpdC5wbTI1ID0ga3YuUE0yNV9USFxuICAgICAgaWYgKGt2Lk1RX1RIKSB0aGlzLmNmZ0VkaXQubXEgPSBrdi5NUV9USFxuICAgICAgaWYgKGt2LkZBTk9GRikgdGhpcy5jZmdFZGl0LmZhbm9mZiA9IGt2LkZBTk9GRlxuICAgIH0sXG4gICAgYXBwbHlEYXRhRnJvbUt2KGt2KSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhKVxuICAgICAga2V5cy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGlmIChrdltrXSAhPT0gdW5kZWZpbmVkKSB0aGlzLiRzZXQodGhpcy5kYXRhLCBrLCBrdltrXSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVMaW5lKGxpbmUpIHtcbiAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJyREQVRBLCcpKSB7XG4gICAgICAgIGNvbnN0IGt2ID0gcGFyc2VLdkxpbmUobGluZSlcbiAgICAgICAgdGhpcy5hcHBseURhdGFGcm9tS3Yoa3YpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnJENGRywnKSkge1xuICAgICAgICBjb25zdCBrdiA9IHBhcnNlS3ZMaW5lKGxpbmUpXG4gICAgICAgIHRoaXMuYXBwbHlDZmdGcm9tS3Yoa3YpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnJEVWVCwnKSkge1xuICAgICAgICB0aGlzLnB1c2hMb2cobGluZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAobGluZS5zdGFydHNXaXRoKCckTE9HLENPVU5UPScpKSB7XG4gICAgICAgIHRoaXMudGVtcExvZ0JhdGNoID0gW11cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAobGluZS5zdGFydHNXaXRoKCckTE9HLCcpKSB7XG4gICAgICAgIHRoaXMudGVtcExvZ0JhdGNoLnB1c2gobGluZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAobGluZSA9PT0gJyRFTkRMT0cnKSB7XG4gICAgICAgIHRoaXMudGVtcExvZ0JhdGNoLmZvckVhY2goKGwpID0+IHRoaXMucHVzaExvZyhsKSlcbiAgICAgICAgdGhpcy50ZW1wTG9nQmF0Y2ggPSBbXVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJyRBQ0ssJykpIHtcbiAgICAgICAgdGhpcy5sYXN0QWNrID0gbGluZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 13)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!****************************************************************************!*\
  !*** E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/utils/ble.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 16));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 17));\nfunction strToBuffer(str) {\n  var arr = new Uint8Array(str.length);\n  for (var i = 0; i < str.length; i++) {\n    arr[i] = str.charCodeAt(i);\n  }\n  return arr.buffer;\n}\nfunction bufferToStr(buffer) {\n  var bytes = new Uint8Array(buffer);\n  var out = '';\n  for (var i = 0; i < bytes.length; i++) {\n    out += String.fromCharCode(bytes[i]);\n  }\n  return out;\n}\nvar BleClient = /*#__PURE__*/function () {\n  function BleClient() {\n    (0, _classCallCheck2.default)(this, BleClient);\n    this.deviceId = '';\n    this.serviceId = '';\n    this.writeCharId = '';\n    this.notifyCharId = '';\n    this.lineBuf = '';\n    this.listeners = {\n      deviceFound: null,\n      line: null,\n      state: null\n    };\n  }\n  (0, _createClass2.default)(BleClient, [{\n    key: \"onDeviceFound\",\n    value: function onDeviceFound(cb) {\n      this.listeners.deviceFound = cb;\n    }\n  }, {\n    key: \"onLine\",\n    value: function onLine(cb) {\n      this.listeners.line = cb;\n    }\n  }, {\n    key: \"onState\",\n    value: function onState(cb) {\n      this.listeners.state = cb;\n    }\n  }, {\n    key: \"emitState\",\n    value: function emitState(payload) {\n      if (this.listeners.state) this.listeners.state(payload);\n    }\n  }, {\n    key: \"openAdapter\",\n    value: function () {\n      var _openAdapter = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var _this = this;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n                  uni.openBluetoothAdapter({\n                    success: function success() {\n                      _this.emitState({\n                        type: 'adapter',\n                        ok: true\n                      });\n                      resolve();\n                    },\n                    fail: function fail(err) {\n                      _this.emitState({\n                        type: 'adapter',\n                        ok: false,\n                        err: err\n                      });\n                      reject(err);\n                    }\n                  });\n                }));\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      function openAdapter() {\n        return _openAdapter.apply(this, arguments);\n      }\n      return openAdapter;\n    }()\n  }, {\n    key: \"startScan\",\n    value: function startScan() {\n      var _this2 = this;\n      uni.onBluetoothDeviceFound(function (res) {\n        var devices = res.devices || [];\n        devices.forEach(function (d) {\n          if (_this2.listeners.deviceFound) _this2.listeners.deviceFound(d);\n        });\n      });\n      uni.startBluetoothDevicesDiscovery({\n        allowDuplicatesKey: false,\n        success: function success() {\n          return _this2.emitState({\n            type: 'scan',\n            scanning: true\n          });\n        },\n        fail: function fail(err) {\n          return _this2.emitState({\n            type: 'scan',\n            scanning: false,\n            err: err\n          });\n        }\n      });\n    }\n  }, {\n    key: \"stopScan\",\n    value: function stopScan() {\n      var _this3 = this;\n      uni.stopBluetoothDevicesDiscovery({\n        complete: function complete() {\n          return _this3.emitState({\n            type: 'scan',\n            scanning: false\n          });\n        }\n      });\n    }\n  }, {\n    key: \"connect\",\n    value: function () {\n      var _connect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(deviceId) {\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                this.deviceId = deviceId;\n                _context2.next = 3;\n                return this.createConnection();\n              case 3:\n                _context2.next = 5;\n                return this.pickServiceAndChars();\n              case 5:\n                _context2.next = 7;\n                return this.enableNotify();\n              case 7:\n                this.registerNotifyHandler();\n                this.emitState({\n                  type: 'conn',\n                  connected: true,\n                  deviceId: deviceId\n                });\n              case 9:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n      function connect(_x) {\n        return _connect.apply(this, arguments);\n      }\n      return connect;\n    }()\n  }, {\n    key: \"createConnection\",\n    value: function createConnection() {\n      var _this4 = this;\n      return new Promise(function (resolve, reject) {\n        uni.createBLEConnection({\n          deviceId: _this4.deviceId,\n          timeout: 10000,\n          success: resolve,\n          fail: reject\n        });\n      });\n    }\n  }, {\n    key: \"getServices\",\n    value: function getServices() {\n      var _this5 = this;\n      return new Promise(function (resolve, reject) {\n        uni.getBLEDeviceServices({\n          deviceId: _this5.deviceId,\n          success: function success(res) {\n            return resolve(res.services || []);\n          },\n          fail: reject\n        });\n      });\n    }\n  }, {\n    key: \"getChars\",\n    value: function getChars(serviceId) {\n      var _this6 = this;\n      return new Promise(function (resolve, reject) {\n        uni.getBLEDeviceCharacteristics({\n          deviceId: _this6.deviceId,\n          serviceId: serviceId,\n          success: function success(res) {\n            return resolve(res.characteristics || []);\n          },\n          fail: reject\n        });\n      });\n    }\n  }, {\n    key: \"pickServiceAndChars\",\n    value: function () {\n      var _pickServiceAndChars = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var services, preferred, targetService, chars, preferredChar, writeChar, notifyChar;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return this.getServices();\n              case 2:\n                services = _context3.sent;\n                preferred = services.find(function (s) {\n                  return (s.uuid || '').toUpperCase().includes('FFE0');\n                });\n                targetService = preferred || services[0];\n                if (targetService) {\n                  _context3.next = 7;\n                  break;\n                }\n                throw new Error('No BLE service');\n              case 7:\n                this.serviceId = targetService.uuid;\n                _context3.next = 10;\n                return this.getChars(this.serviceId);\n              case 10:\n                chars = _context3.sent;\n                preferredChar = chars.find(function (c) {\n                  return (c.uuid || '').toUpperCase().includes('FFE1');\n                });\n                writeChar = preferredChar || chars.find(function (c) {\n                  return c.properties && (c.properties.write || c.properties.writeNoResponse);\n                });\n                notifyChar = preferredChar || chars.find(function (c) {\n                  return c.properties && (c.properties.notify || c.properties.indicate);\n                });\n                if (!(!writeChar || !notifyChar)) {\n                  _context3.next = 16;\n                  break;\n                }\n                throw new Error('No writable/notifiable characteristic');\n              case 16:\n                this.writeCharId = writeChar.uuid;\n                this.notifyCharId = notifyChar.uuid;\n              case 18:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n      function pickServiceAndChars() {\n        return _pickServiceAndChars.apply(this, arguments);\n      }\n      return pickServiceAndChars;\n    }()\n  }, {\n    key: \"enableNotify\",\n    value: function enableNotify() {\n      var _this7 = this;\n      return new Promise(function (resolve, reject) {\n        uni.notifyBLECharacteristicValueChange({\n          deviceId: _this7.deviceId,\n          serviceId: _this7.serviceId,\n          characteristicId: _this7.notifyCharId,\n          state: true,\n          success: resolve,\n          fail: reject\n        });\n      });\n    }\n  }, {\n    key: \"registerNotifyHandler\",\n    value: function registerNotifyHandler() {\n      var _this8 = this;\n      uni.onBLECharacteristicValueChange(function (res) {\n        if (res.deviceId !== _this8.deviceId) return;\n        var chunk = bufferToStr(res.value);\n        _this8.lineBuf += chunk;\n        var pos = _this8.lineBuf.indexOf('\\n');\n        while (pos >= 0) {\n          var line = _this8.lineBuf.slice(0, pos).replace(/\\r/g, '').trim();\n          _this8.lineBuf = _this8.lineBuf.slice(pos + 1);\n          if (line && _this8.listeners.line) _this8.listeners.line(line);\n          pos = _this8.lineBuf.indexOf('\\n');\n        }\n      });\n    }\n  }, {\n    key: \"writeLine\",\n    value: function writeLine(line) {\n      var _this9 = this;\n      var payload = \"\".concat(line, \"\\n\");\n      return new Promise(function (resolve, reject) {\n        uni.writeBLECharacteristicValue({\n          deviceId: _this9.deviceId,\n          serviceId: _this9.serviceId,\n          characteristicId: _this9.writeCharId,\n          value: strToBuffer(payload),\n          success: resolve,\n          fail: reject\n        });\n      });\n    }\n  }, {\n    key: \"disconnect\",\n    value: function disconnect() {\n      var _this10 = this;\n      if (!this.deviceId) return;\n      uni.closeBLEConnection({\n        deviceId: this.deviceId,\n        complete: function complete() {\n          _this10.emitState({\n            type: 'conn',\n            connected: false,\n            deviceId: _this10.deviceId\n          });\n          _this10.deviceId = '';\n          _this10.serviceId = '';\n          _this10.writeCharId = '';\n          _this10.notifyCharId = '';\n          _this10.lineBuf = '';\n        }\n      });\n    }\n  }]);\n  return BleClient;\n}();\nexports.default = BleClient;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYmxlLmpzIl0sIm5hbWVzIjpbInN0clRvQnVmZmVyIiwic3RyIiwiYXJyIiwiVWludDhBcnJheSIsImxlbmd0aCIsImkiLCJjaGFyQ29kZUF0IiwiYnVmZmVyIiwiYnVmZmVyVG9TdHIiLCJieXRlcyIsIm91dCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkJsZUNsaWVudCIsImRldmljZUlkIiwic2VydmljZUlkIiwid3JpdGVDaGFySWQiLCJub3RpZnlDaGFySWQiLCJsaW5lQnVmIiwibGlzdGVuZXJzIiwiZGV2aWNlRm91bmQiLCJsaW5lIiwic3RhdGUiLCJjYiIsInBheWxvYWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsIm9wZW5CbHVldG9vdGhBZGFwdGVyIiwic3VjY2VzcyIsImVtaXRTdGF0ZSIsInR5cGUiLCJvayIsImZhaWwiLCJlcnIiLCJvbkJsdWV0b290aERldmljZUZvdW5kIiwicmVzIiwiZGV2aWNlcyIsImZvckVhY2giLCJkIiwic3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5IiwiYWxsb3dEdXBsaWNhdGVzS2V5Iiwic2Nhbm5pbmciLCJzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSIsImNvbXBsZXRlIiwiY3JlYXRlQ29ubmVjdGlvbiIsInBpY2tTZXJ2aWNlQW5kQ2hhcnMiLCJlbmFibGVOb3RpZnkiLCJyZWdpc3Rlck5vdGlmeUhhbmRsZXIiLCJjb25uZWN0ZWQiLCJjcmVhdGVCTEVDb25uZWN0aW9uIiwidGltZW91dCIsImdldEJMRURldmljZVNlcnZpY2VzIiwic2VydmljZXMiLCJnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MiLCJjaGFyYWN0ZXJpc3RpY3MiLCJnZXRTZXJ2aWNlcyIsInByZWZlcnJlZCIsImZpbmQiLCJzIiwidXVpZCIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJ0YXJnZXRTZXJ2aWNlIiwiRXJyb3IiLCJnZXRDaGFycyIsImNoYXJzIiwicHJlZmVycmVkQ2hhciIsImMiLCJ3cml0ZUNoYXIiLCJwcm9wZXJ0aWVzIiwid3JpdGUiLCJ3cml0ZU5vUmVzcG9uc2UiLCJub3RpZnlDaGFyIiwibm90aWZ5IiwiaW5kaWNhdGUiLCJub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlIiwiY2hhcmFjdGVyaXN0aWNJZCIsIm9uQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSIsImNodW5rIiwidmFsdWUiLCJwb3MiLCJpbmRleE9mIiwic2xpY2UiLCJyZXBsYWNlIiwidHJpbSIsIndyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSIsImNsb3NlQkxFQ29ubmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxXQUFXLENBQUNDLEdBQUcsRUFBRTtFQUN4QixJQUFNQyxHQUFHLEdBQUcsSUFBSUMsVUFBVSxDQUFDRixHQUFHLENBQUNHLE1BQU0sQ0FBQztFQUN0QyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0osR0FBRyxDQUFDRyxNQUFNLEVBQUVDLENBQUMsRUFBRSxFQUFFO0lBQ25DSCxHQUFHLENBQUNHLENBQUMsQ0FBQyxHQUFHSixHQUFHLENBQUNLLFVBQVUsQ0FBQ0QsQ0FBQyxDQUFDO0VBQzVCO0VBQ0EsT0FBT0gsR0FBRyxDQUFDSyxNQUFNO0FBQ25CO0FBRUEsU0FBU0MsV0FBVyxDQUFDRCxNQUFNLEVBQUU7RUFDM0IsSUFBTUUsS0FBSyxHQUFHLElBQUlOLFVBQVUsQ0FBQ0ksTUFBTSxDQUFDO0VBQ3BDLElBQUlHLEdBQUcsR0FBRyxFQUFFO0VBQ1osS0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdJLEtBQUssQ0FBQ0wsTUFBTSxFQUFFQyxDQUFDLEVBQUUsRUFBRTtJQUNyQ0ssR0FBRyxJQUFJQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0gsS0FBSyxDQUFDSixDQUFDLENBQUMsQ0FBQztFQUN0QztFQUNBLE9BQU9LLEdBQUc7QUFDWjtBQUFD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O1VBQ2xCLE9BQUksQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7VUFDbkIsT0FBSSxDQUFDQyxXQUFXLEdBQUcsRUFBRTtVQUNyQixPQUFJLENBQUNDLFlBQVksR0FBRyxFQUFFO1VBQ3RCLE9BQUksQ0FBQ0MsT0FBTyxHQUFHLEVBQUU7UUFDbkI7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3RyVG9CdWZmZXIoc3RyKSB7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KHN0ci5sZW5ndGgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyW2ldID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgfVxuICByZXR1cm4gYXJyLmJ1ZmZlclxufVxuXG5mdW5jdGlvbiBidWZmZXJUb1N0cihidWZmZXIpIHtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpXG4gIGxldCBvdXQgPSAnJ1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbGVDbGllbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRldmljZUlkID0gJydcbiAgICB0aGlzLnNlcnZpY2VJZCA9ICcnXG4gICAgdGhpcy53cml0ZUNoYXJJZCA9ICcnXG4gICAgdGhpcy5ub3RpZnlDaGFySWQgPSAnJ1xuICAgIHRoaXMubGluZUJ1ZiA9ICcnXG4gICAgdGhpcy5saXN0ZW5lcnMgPSB7XG4gICAgICBkZXZpY2VGb3VuZDogbnVsbCxcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBzdGF0ZTogbnVsbFxuICAgIH1cbiAgfVxuXG4gIG9uRGV2aWNlRm91bmQoY2IpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5kZXZpY2VGb3VuZCA9IGNiXG4gIH1cblxuICBvbkxpbmUoY2IpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5saW5lID0gY2JcbiAgfVxuXG4gIG9uU3RhdGUoY2IpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5zdGF0ZSA9IGNiXG4gIH1cblxuICBlbWl0U3RhdGUocGF5bG9hZCkge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5zdGF0ZSkgdGhpcy5saXN0ZW5lcnMuc3RhdGUocGF5bG9hZClcbiAgfVxuXG4gIGFzeW5jIG9wZW5BZGFwdGVyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB1bmkub3BlbkJsdWV0b290aEFkYXB0ZXIoe1xuICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0U3RhdGUoeyB0eXBlOiAnYWRhcHRlcicsIG9rOiB0cnVlIH0pXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmVtaXRTdGF0ZSh7IHR5cGU6ICdhZGFwdGVyJywgb2s6IGZhbHNlLCBlcnIgfSlcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBzdGFydFNjYW4oKSB7XG4gICAgdW5pLm9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoKHJlcykgPT4ge1xuICAgICAgY29uc3QgZGV2aWNlcyA9IHJlcy5kZXZpY2VzIHx8IFtdXG4gICAgICBkZXZpY2VzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzLmRldmljZUZvdW5kKSB0aGlzLmxpc3RlbmVycy5kZXZpY2VGb3VuZChkKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdW5pLnN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XG4gICAgICBhbGxvd0R1cGxpY2F0ZXNLZXk6IGZhbHNlLFxuICAgICAgc3VjY2VzczogKCkgPT4gdGhpcy5lbWl0U3RhdGUoeyB0eXBlOiAnc2NhbicsIHNjYW5uaW5nOiB0cnVlIH0pLFxuICAgICAgZmFpbDogKGVycikgPT4gdGhpcy5lbWl0U3RhdGUoeyB0eXBlOiAnc2NhbicsIHNjYW5uaW5nOiBmYWxzZSwgZXJyIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0b3BTY2FuKCkge1xuICAgIHVuaS5zdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XG4gICAgICBjb21wbGV0ZTogKCkgPT4gdGhpcy5lbWl0U3RhdGUoeyB0eXBlOiAnc2NhbicsIHNjYW5uaW5nOiBmYWxzZSB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjb25uZWN0KGRldmljZUlkKSB7XG4gICAgdGhpcy5kZXZpY2VJZCA9IGRldmljZUlkXG4gICAgYXdhaXQgdGhpcy5jcmVhdGVDb25uZWN0aW9uKClcbiAgICBhd2FpdCB0aGlzLnBpY2tTZXJ2aWNlQW5kQ2hhcnMoKVxuICAgIGF3YWl0IHRoaXMuZW5hYmxlTm90aWZ5KClcbiAgICB0aGlzLnJlZ2lzdGVyTm90aWZ5SGFuZGxlcigpXG4gICAgdGhpcy5lbWl0U3RhdGUoeyB0eXBlOiAnY29ubicsIGNvbm5lY3RlZDogdHJ1ZSwgZGV2aWNlSWQgfSlcbiAgfVxuXG4gIGNyZWF0ZUNvbm5lY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHVuaS5jcmVhdGVCTEVDb25uZWN0aW9uKHtcbiAgICAgICAgZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXG4gICAgICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldFNlcnZpY2VzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB1bmkuZ2V0QkxFRGV2aWNlU2VydmljZXMoe1xuICAgICAgICBkZXZpY2VJZDogdGhpcy5kZXZpY2VJZCxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4gcmVzb2x2ZShyZXMuc2VydmljZXMgfHwgW10pLFxuICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldENoYXJzKHNlcnZpY2VJZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB1bmkuZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzKHtcbiAgICAgICAgZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXG4gICAgICAgIHNlcnZpY2VJZCxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4gcmVzb2x2ZShyZXMuY2hhcmFjdGVyaXN0aWNzIHx8IFtdKSxcbiAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBwaWNrU2VydmljZUFuZENoYXJzKCkge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gYXdhaXQgdGhpcy5nZXRTZXJ2aWNlcygpXG4gICAgY29uc3QgcHJlZmVycmVkID0gc2VydmljZXMuZmluZCgocykgPT4gKHMudXVpZCB8fCAnJykudG9VcHBlckNhc2UoKS5pbmNsdWRlcygnRkZFMCcpKVxuICAgIGNvbnN0IHRhcmdldFNlcnZpY2UgPSBwcmVmZXJyZWQgfHwgc2VydmljZXNbMF1cbiAgICBpZiAoIXRhcmdldFNlcnZpY2UpIHRocm93IG5ldyBFcnJvcignTm8gQkxFIHNlcnZpY2UnKVxuICAgIHRoaXMuc2VydmljZUlkID0gdGFyZ2V0U2VydmljZS51dWlkXG5cbiAgICBjb25zdCBjaGFycyA9IGF3YWl0IHRoaXMuZ2V0Q2hhcnModGhpcy5zZXJ2aWNlSWQpXG4gICAgY29uc3QgcHJlZmVycmVkQ2hhciA9IGNoYXJzLmZpbmQoKGMpID0+IChjLnV1aWQgfHwgJycpLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ0ZGRTEnKSlcbiAgICBjb25zdCB3cml0ZUNoYXIgPSBwcmVmZXJyZWRDaGFyIHx8IGNoYXJzLmZpbmQoKGMpID0+IGMucHJvcGVydGllcyAmJiAoYy5wcm9wZXJ0aWVzLndyaXRlIHx8IGMucHJvcGVydGllcy53cml0ZU5vUmVzcG9uc2UpKVxuICAgIGNvbnN0IG5vdGlmeUNoYXIgPSBwcmVmZXJyZWRDaGFyIHx8IGNoYXJzLmZpbmQoKGMpID0+IGMucHJvcGVydGllcyAmJiAoYy5wcm9wZXJ0aWVzLm5vdGlmeSB8fCBjLnByb3BlcnRpZXMuaW5kaWNhdGUpKVxuXG4gICAgaWYgKCF3cml0ZUNoYXIgfHwgIW5vdGlmeUNoYXIpIHRocm93IG5ldyBFcnJvcignTm8gd3JpdGFibGUvbm90aWZpYWJsZSBjaGFyYWN0ZXJpc3RpYycpXG4gICAgdGhpcy53cml0ZUNoYXJJZCA9IHdyaXRlQ2hhci51dWlkXG4gICAgdGhpcy5ub3RpZnlDaGFySWQgPSBub3RpZnlDaGFyLnV1aWRcbiAgfVxuXG4gIGVuYWJsZU5vdGlmeSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdW5pLm5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2Uoe1xuICAgICAgICBkZXZpY2VJZDogdGhpcy5kZXZpY2VJZCxcbiAgICAgICAgc2VydmljZUlkOiB0aGlzLnNlcnZpY2VJZCxcbiAgICAgICAgY2hhcmFjdGVyaXN0aWNJZDogdGhpcy5ub3RpZnlDaGFySWQsXG4gICAgICAgIHN0YXRlOiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlZ2lzdGVyTm90aWZ5SGFuZGxlcigpIHtcbiAgICB1bmkub25CTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGV2aWNlSWQgIT09IHRoaXMuZGV2aWNlSWQpIHJldHVyblxuICAgICAgY29uc3QgY2h1bmsgPSBidWZmZXJUb1N0cihyZXMudmFsdWUpXG4gICAgICB0aGlzLmxpbmVCdWYgKz0gY2h1bmtcbiAgICAgIGxldCBwb3MgPSB0aGlzLmxpbmVCdWYuaW5kZXhPZignXFxuJylcbiAgICAgIHdoaWxlIChwb3MgPj0gMCkge1xuICAgICAgICBjb25zdCBsaW5lID0gdGhpcy5saW5lQnVmLnNsaWNlKDAsIHBvcykucmVwbGFjZSgvXFxyL2csICcnKS50cmltKClcbiAgICAgICAgdGhpcy5saW5lQnVmID0gdGhpcy5saW5lQnVmLnNsaWNlKHBvcyArIDEpXG4gICAgICAgIGlmIChsaW5lICYmIHRoaXMubGlzdGVuZXJzLmxpbmUpIHRoaXMubGlzdGVuZXJzLmxpbmUobGluZSlcbiAgICAgICAgcG9zID0gdGhpcy5saW5lQnVmLmluZGV4T2YoJ1xcbicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHdyaXRlTGluZShsaW5lKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGAke2xpbmV9XFxuYFxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB1bmkud3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHtcbiAgICAgICAgZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXG4gICAgICAgIHNlcnZpY2VJZDogdGhpcy5zZXJ2aWNlSWQsXG4gICAgICAgIGNoYXJhY3RlcmlzdGljSWQ6IHRoaXMud3JpdGVDaGFySWQsXG4gICAgICAgIHZhbHVlOiBzdHJUb0J1ZmZlcihwYXlsb2FkKSxcbiAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkaXNjb25uZWN0KCkge1xuICAgIGlmICghdGhpcy5kZXZpY2VJZCkgcmV0dXJuXG4gICAgdW5pLmNsb3NlQkxFQ29ubmVjdGlvbih7XG4gICAgICBkZXZpY2VJZDogdGhpcy5kZXZpY2VJZCxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdFN0YXRlKHsgdHlwZTogJ2Nvbm4nLCBjb25uZWN0ZWQ6IGZhbHNlLCBkZXZpY2VJZDogdGhpcy5kZXZpY2VJZCB9KVxuICAgICAgICB0aGlzLmRldmljZUlkID0gJydcbiAgICAgICAgdGhpcy5zZXJ2aWNlSWQgPSAnJ1xuICAgICAgICB0aGlzLndyaXRlQ2hhcklkID0gJydcbiAgICAgICAgdGhpcy5ub3RpZnlDaGFySWQgPSAnJ1xuICAgICAgICB0aGlzLmxpbmVCdWYgPSAnJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/*!***********************************************************************!*\
  !*** E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/App.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNEs7QUFDNUssZ0JBQWdCLHNMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vU29mdHdhcmUvSGJ1aWxkZXJ4L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!************************************************************************************************!*\
  !*** E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Software/Hbuilderx/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Software_Hbuilderx_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Software_Hbuilderx_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1rQixDQUFnQiw2bEJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vU29mdHdhcmUvSGJ1aWxkZXJ4L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9Tb2Z0d2FyZS9IYnVpbGRlcngvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL1NvZnR3YXJlL0hidWlsZGVyeC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1NvZnR3YXJlL0hidWlsZGVyeC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vU29mdHdhcmUvSGJ1aWxkZXJ4L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9Tb2Z0d2FyZS9IYnVpbGRlcngvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL1NvZnR3YXJlL0hidWlsZGVyeC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1NvZnR3YXJlL0hidWlsZGVyeC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Workspace/Github_Space/AirDevice/MobileApp_HBuilderX/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {},\n  onShow: function onShow() {},\n  onHide: function onHide() {}\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDYkEsUUFBUSxzQkFBRyxDQUFDLENBQUM7RUFDYkMsTUFBTSxvQkFBRyxDQUFDLENBQUM7RUFDWEMsTUFBTSxvQkFBRyxDQUFDO0FBQ1osQ0FBQztBQUFBIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uTGF1bmNoKCkge30sXG4gIG9uU2hvdygpIHt9LFxuICBvbkhpZGUoKSB7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);