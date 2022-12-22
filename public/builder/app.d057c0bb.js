(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var _lightcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lightcase */ "./assets/lightcase.js");
/* harmony import */ var odometer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! odometer */ "./node_modules/odometer/odometer.js");
/* harmony import */ var odometer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(odometer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _viewport_jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewport.jquery */ "./assets/viewport.jquery.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _jquery_nice_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jquery.nice-select */ "./assets/jquery.nice-select.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main */ "./assets/main.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_11__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application













/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/jquery.nice-select.js":
/*!**************************************!*\
  !*** ./assets/jquery.nice-select.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



!function (e) {
  e.fn.niceSelect = function (t) {
    if ("string" == typeof t) return "update" == t ? this.each(function () {
      var t = e(this),
        n = e(this).next(".nice-select"),
        i = n.hasClass("open");
      n.length && (n.remove(), s(t), i && t.next().trigger("click"));
    }) : "destroy" == t && (this.each(function () {
      var t = e(this),
        s = e(this).next(".nice-select");
      s.length && (s.remove(), t.css("display", ""));
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")), this;
    function s(t) {
      t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
        var n = e(this),
          i = n.data("display");
        s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
      });
    }
    this.hide(), this.each(function () {
      var t = e(this);
      t.next().hasClass("nice-select") || s(t);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
      var s = e(this);
      e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
    }), e(document).on("click.nice_select", function (t) {
      0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
      var s = e(this),
        n = s.closest(".nice-select");
      n.find(".selected").removeClass("selected"), s.addClass("selected");
      var i = s.data("display") || s.text();
      n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
      var s = e(this),
        n = e(s.find(".focus") || s.find(".list .option.selected"));
      if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
      if (40 == t.keyCode) {
        if (s.hasClass("open")) {
          var i = n.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else s.trigger("click");
        return !1;
      }
      if (38 == t.keyCode) {
        if (s.hasClass("open")) {
          var l = n.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else s.trigger("click");
        return !1;
      }
      if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}((jquery__WEBPACK_IMPORTED_MODULE_2___default()));

/***/ }),

/***/ "./assets/lightcase.js":
/*!*****************************!*\
  !*** ./assets/lightcase.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
/* harmony import */ var core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_dot_all_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_29__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






























;
(function ($) {
  'use strict';

  var _self = {
    cache: {},
    support: {},
    objects: {},
    /**
     * Initializes the plugin
     *
     * @param	{object}	options
     * @return	{object}
     */
    init: function init(options) {
      return this.each(function () {
        $(this).unbind('click.lightcase').bind('click.lightcase', function (event) {
          event.preventDefault();
          $(this).lightcase('start', options);
        });
      });
    },
    /**
     * Starts the plugin
     *
     * @param	{object}	options
     * @return	{void}
     */
    start: function start(options) {
      _self.origin = lightcase.origin = this;
      _self.settings = lightcase.settings = $.extend(true, {
        idPrefix: 'lightcase-',
        classPrefix: 'lightcase-',
        attrPrefix: 'lc-',
        transition: 'elastic',
        transitionOpen: null,
        transitionClose: null,
        transitionIn: null,
        transitionOut: null,
        cssTransitions: true,
        speedIn: 250,
        speedOut: 250,
        width: null,
        height: null,
        maxWidth: 800,
        maxHeight: 500,
        forceWidth: false,
        forceHeight: false,
        liveResize: true,
        fullScreenModeForMobile: true,
        mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,
        disableShrink: false,
        fixedRatio: true,
        shrinkFactor: .75,
        overlayOpacity: .9,
        slideshow: false,
        slideshowAutoStart: true,
        breakBeforeShow: false,
        timeout: 5000,
        swipe: true,
        useKeys: true,
        useCategories: true,
        useAsCollection: false,
        navigateEndless: true,
        closeOnOverlayClick: true,
        title: null,
        caption: null,
        showTitle: true,
        showCaption: true,
        showSequenceInfo: true,
        inline: {
          width: 'auto',
          height: 'auto'
        },
        ajax: {
          width: 'auto',
          height: 'auto',
          type: 'get',
          dataType: 'html',
          data: {}
        },
        iframe: {
          width: 800,
          height: 500,
          frameborder: 0
        },
        flash: {
          width: 400,
          height: 205,
          wmode: 'transparent'
        },
        video: {
          width: 400,
          height: 225,
          poster: '',
          preload: 'auto',
          controls: true,
          autobuffer: true,
          autoplay: true,
          loop: false
        },
        attr: 'data-rel',
        href: null,
        type: null,
        typeMapping: {
          'image': 'jpg,jpeg,gif,png,bmp',
          'flash': 'swf',
          'video': 'mp4,mov,ogv,ogg,webm',
          'iframe': 'html,php',
          'ajax': 'json,txt',
          'inline': '#'
        },
        errorMessage: function errorMessage() {
          return '<p class="' + _self.settings.classPrefix + 'error">' + _self.settings.labels['errorMessage'] + '</p>';
        },
        labels: {
          'errorMessage': 'Source could not be found...',
          'sequenceInfo.of': ' of ',
          'close': 'Close',
          'navigator.prev': 'Prev',
          'navigator.next': 'Next',
          'navigator.play': 'Play',
          'navigator.pause': 'Pause'
        },
        markup: function markup() {
          _self.objects.body.append(_self.objects.overlay = $('<div id="' + _self.settings.idPrefix + 'overlay"></div>'), _self.objects.loading = $('<div id="' + _self.settings.idPrefix + 'loading" class="' + _self.settings.classPrefix + 'icon-spin"></div>'), _self.objects["case"] = $('<div id="' + _self.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>'));
          _self.objects["case"].after(_self.objects.close = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-close"><span>' + _self.settings.labels['close'] + '</span></a>'), _self.objects.nav = $('<div id="' + _self.settings.idPrefix + 'nav"></div>'));
          _self.objects.nav.append(_self.objects.prev = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-prev"><span>' + _self.settings.labels['navigator.prev'] + '</span></a>').hide(), _self.objects.next = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-next"><span>' + _self.settings.labels['navigator.next'] + '</span></a>').hide(), _self.objects.play = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-play"><span>' + _self.settings.labels['navigator.play'] + '</span></a>').hide(), _self.objects.pause = $('<a href="#" class="' + _self.settings.classPrefix + 'icon-pause"><span>' + _self.settings.labels['navigator.pause'] + '</span></a>').hide());
          _self.objects["case"].append(_self.objects.content = $('<div id="' + _self.settings.idPrefix + 'content"></div>'), _self.objects.info = $('<div id="' + _self.settings.idPrefix + 'info"></div>'));
          _self.objects.content.append(_self.objects.contentInner = $('<div class="' + _self.settings.classPrefix + 'contentInner"></div>'));
          _self.objects.info.append(_self.objects.sequenceInfo = $('<div id="' + _self.settings.idPrefix + 'sequenceInfo"></div>'), _self.objects.title = $('<h4 id="' + _self.settings.idPrefix + 'title"></h4>'), _self.objects.caption = $('<p id="' + _self.settings.idPrefix + 'caption"></p>'));
        },
        onInit: {},
        onStart: {},
        onBeforeCalculateDimensions: {},
        onAfterCalculateDimensions: {},
        onBeforeShow: {},
        onFinish: {},
        onResize: {},
        onClose: {},
        onCleanup: {}
      }, options,
      // Load options from data-lc-options attribute
      _self.origin.data ? _self.origin.data('lc-options') : {});
      _self.objects.document = $('html');
      _self.objects.body = $('body');

      // Call onInit hook functions
      _self._callHooks(_self.settings.onInit);
      _self.objectData = _self._setObjectData(this);
      _self._addElements();
      _self._open();
      _self.dimensions = _self.getViewportDimensions();
    },
    /**
     * Getter method for objects
     *
     * @param	{string}	name
     * @return	{object}
     */
    get: function get(name) {
      return _self.objects[name];
    },
    /**
     * Getter method for objectData
     *
     * @return	{object}
     */
    getObjectData: function getObjectData() {
      return _self.objectData;
    },
    /**
     * Sets the object data
     *
     * @param	{object}	object
     * @return	{object}	objectData
     */
    _setObjectData: function _setObjectData(object) {
      var $object = $(object),
        objectData = {
          "this": $(object),
          title: _self.settings.title || $object.attr(_self._prefixAttributeName('title')) || $object.attr('title'),
          caption: _self.settings.caption || $object.attr(_self._prefixAttributeName('caption')) || $object.children('img').attr('alt'),
          url: _self._determineUrl(),
          requestType: _self.settings.ajax.type,
          requestData: _self.settings.ajax.data,
          requestDataType: _self.settings.ajax.dataType,
          rel: $object.attr(_self._determineAttributeSelector()),
          type: _self.settings.type || _self._verifyDataType(_self._determineUrl()),
          isPartOfSequence: _self.settings.useAsCollection || _self._isPartOfSequence($object.attr(_self.settings.attr), ':'),
          isPartOfSequenceWithSlideshow: _self._isPartOfSequence($object.attr(_self.settings.attr), ':slideshow'),
          currentIndex: $(_self._determineAttributeSelector()).index($object),
          sequenceLength: $(_self._determineAttributeSelector()).length
        };

      // Add sequence info to objectData
      objectData.sequenceInfo = objectData.currentIndex + 1 + _self.settings.labels['sequenceInfo.of'] + objectData.sequenceLength;

      // Add next/prev index
      objectData.prevIndex = objectData.currentIndex - 1;
      objectData.nextIndex = objectData.currentIndex + 1;
      return objectData;
    },
    /**
     * Prefixes a data attribute name with defined name from 'settings.attrPrefix'
     * to ensure more uniqueness for all lightcase related/used attributes.
     *
     * @param	{string}	name
     * @return	{string}
     */
    _prefixAttributeName: function _prefixAttributeName(name) {
      return 'data-' + _self.settings.attrPrefix + name;
    },
    /**
     * Determines the link target considering 'settings.href' and data attributes
     * but also with a fallback to the default 'href' value.
     *
     * @return	{string}
     */
    _determineLinkTarget: function _determineLinkTarget() {
      return _self.settings.href || $(_self.origin).attr(_self._prefixAttributeName('href')) || $(_self.origin).attr('href');
    },
    /**
     * Determines the attribute selector to use, depending on
     * whether categorized collections are beeing used or not.
     *
     * @return	{string}	selector
     */
    _determineAttributeSelector: function _determineAttributeSelector() {
      var $origin = $(_self.origin),
        selector = '';
      if (typeof _self.cache.selector !== 'undefined') {
        selector = _self.cache.selector;
      } else if (_self.settings.useCategories === true && $origin.attr(_self._prefixAttributeName('categories'))) {
        var categories = $origin.attr(_self._prefixAttributeName('categories')).split(' ');
        $.each(categories, function (index, category) {
          if (index > 0) {
            selector += ',';
          }
          selector += '[' + _self._prefixAttributeName('categories') + '~="' + category + '"]';
        });
      } else {
        selector = '[' + _self.settings.attr + '="' + $origin.attr(_self.settings.attr) + '"]';
      }
      _self.cache.selector = selector;
      return selector;
    },
    /**
     * Determines the correct resource according to the
     * current viewport and density.
     *
     * @return	{string}	url
     */
    _determineUrl: function _determineUrl() {
      var dataUrl = _self._verifyDataUrl(_self._determineLinkTarget()),
        width = 0,
        density = 0,
        supportLevel = '',
        url;
      $.each(dataUrl, function (index, src) {
        switch (_self._verifyDataType(src.url)) {
          case 'video':
            var video = document.createElement('video'),
              videoType = _self._verifyDataType(src.url) + '/' + _self._getFileUrlSuffix(src.url);

            // Check if browser can play this type of video format
            if (supportLevel !== 'probably' && supportLevel !== video.canPlayType(videoType) && video.canPlayType(videoType) !== '') {
              supportLevel = video.canPlayType(videoType);
              url = src.url;
            }
            break;
          default:
            if (
            // Check density
            _self._devicePixelRatio() >= src.density && src.density >= density &&
            // Check viewport width
            _self._matchMedia()('screen and (min-width:' + src.width + 'px)').matches && src.width >= width) {
              width = src.width;
              density = src.density;
              url = src.url;
            }
            break;
        }
      });
      return url;
    },
    /**
     * Normalizes an url and returns information about the resource path,
     * the viewport width as well as density if defined.
     *
     * @param	{string}	url	Path to resource in format of an url or srcset
     * @return	{object}
     */
    _normalizeUrl: function _normalizeUrl(url) {
      var srcExp = /^\d+$/;
      return url.split(',').map(function (str) {
        var src = {
          width: 0,
          density: 0
        };
        str.trim().split(/\s+/).forEach(function (url, i) {
          if (i === 0) {
            return src.url = url;
          }
          var value = url.substring(0, url.length - 1),
            lastChar = url[url.length - 1],
            intVal = parseInt(value, 10),
            floatVal = parseFloat(value);
          if (lastChar === 'w' && srcExp.test(value)) {
            src.width = intVal;
          } else if (lastChar === 'h' && srcExp.test(value)) {
            src.height = intVal;
          } else if (lastChar === 'x' && !isNaN(floatVal)) {
            src.density = floatVal;
          }
        });
        return src;
      });
    },
    /**
     * Verifies if the link is part of a sequence
     *
     * @param	{string}	rel
     * @param	{string}	expression
     * @return	{boolean}
     */
    _isPartOfSequence: function _isPartOfSequence(rel, expression) {
      var getSimilarLinks = $('[' + _self.settings.attr + '="' + rel + '"]'),
        regexp = new RegExp(expression);
      return regexp.test(rel) && getSimilarLinks.length > 1;
    },
    /**
     * Verifies if the slideshow should be enabled
     *
     * @return	{boolean}
     */
    isSlideshowEnabled: function isSlideshowEnabled() {
      return _self.objectData.isPartOfSequence && (_self.settings.slideshow === true || _self.objectData.isPartOfSequenceWithSlideshow === true);
    },
    /**
     * Loads the new content to show
     *
     * @return	{void}
     */
    _loadContent: function _loadContent() {
      if (_self.cache.originalObject) {
        _self._restoreObject();
      }
      _self._createObject();
    },
    /**
     * Creates a new object
     *
     * @return	{void}
     */
    _createObject: function _createObject() {
      var $object;

      // Create object
      switch (_self.objectData.type) {
        case 'image':
          $object = $(new Image());
          $object.attr({
            // The time expression is required to prevent the binding of an image load
            'src': _self.objectData.url,
            'alt': _self.objectData.title
          });
          break;
        case 'inline':
          $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
          $object.html(_self._cloneObject($(_self.objectData.url)));

          // Add custom attributes from _self.settings
          $.each(_self.settings.inline, function (name, value) {
            $object.attr(_self._prefixAttributeName(name), value);
          });
          break;
        case 'ajax':
          $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');

          // Add custom attributes from _self.settings
          $.each(_self.settings.ajax, function (name, value) {
            if (name !== 'data') {
              $object.attr(_self._prefixAttributeName(name), value);
            }
          });
          break;
        case 'flash':
          $object = $('<embed src="' + _self.objectData.url + '" type="application/x-shockwave-flash"></embed>');

          // Add custom attributes from _self.settings
          $.each(_self.settings.flash, function (name, value) {
            $object.attr(name, value);
          });
          break;
        case 'video':
          $object = $('<video></video>');
          $object.attr('src', _self.objectData.url);

          // Add custom attributes from _self.settings
          $.each(_self.settings.video, function (name, value) {
            $object.attr(name, value);
          });
          break;
        default:
          $object = $('<iframe></iframe>');
          $object.attr({
            'src': _self.objectData.url
          });

          // Add custom attributes from _self.settings
          $.each(_self.settings.iframe, function (name, value) {
            $object.attr(name, value);
          });
          break;
      }
      _self._addObject($object);
      _self._loadObject($object);
    },
    /**
     * Adds the new object to the markup
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _addObject: function _addObject($object) {
      // Add object to content holder
      _self.objects.contentInner.html($object);

      // Start loading
      _self._loading('start');

      // Call onStart hook functions
      _self._callHooks(_self.settings.onStart);

      // Add sequenceInfo to the content holder or hide if its empty
      if (_self.settings.showSequenceInfo === true && _self.objectData.isPartOfSequence) {
        _self.objects.sequenceInfo.html(_self.objectData.sequenceInfo);
        _self.objects.sequenceInfo.show();
      } else {
        _self.objects.sequenceInfo.empty();
        _self.objects.sequenceInfo.hide();
      }
      // Add title to the content holder or hide if its empty
      if (_self.settings.showTitle === true && _self.objectData.title !== undefined && _self.objectData.title !== '') {
        _self.objects.title.html(_self.objectData.title);
        _self.objects.title.show();
      } else {
        _self.objects.title.empty();
        _self.objects.title.hide();
      }
      // Add caption to the content holder or hide if its empty
      if (_self.settings.showCaption === true && _self.objectData.caption !== undefined && _self.objectData.caption !== '') {
        _self.objects.caption.html(_self.objectData.caption);
        _self.objects.caption.show();
      } else {
        _self.objects.caption.empty();
        _self.objects.caption.hide();
      }
    },
    /**
     * Loads the new object
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _loadObject: function _loadObject($object) {
      // Load the object
      switch (_self.objectData.type) {
        case 'inline':
          if ($(_self.objectData.url)) {
            _self._showContent($object);
          } else {
            _self.error();
          }
          break;
        case 'ajax':
          $.ajax($.extend({}, _self.settings.ajax, {
            url: _self.objectData.url,
            type: _self.objectData.requestType,
            dataType: _self.objectData.requestDataType,
            data: _self.objectData.requestData,
            success: function success(data, textStatus, jqXHR) {
              // Check for X-Ajax-Location
              if (jqXHR.getResponseHeader('X-Ajax-Location')) {
                _self.objectData.url = jqXHR.getResponseHeader('X-Ajax-Location');
                _self._loadObject($object);
              } else {
                // Unserialize if data is transferred as json
                if (_self.objectData.requestDataType === 'json') {
                  _self.objectData.data = data;
                } else {
                  $object.html(data);
                }
                _self._showContent($object);
              }
            },
            error: function error(jqXHR, textStatus, errorThrown) {
              _self.error();
            }
          }));
          break;
        case 'flash':
          _self._showContent($object);
          break;
        case 'video':
          if (typeof $object.get(0).canPlayType === 'function' || _self.objects["case"].find('video').length === 0) {
            _self._showContent($object);
          } else {
            _self.error();
          }
          break;
        default:
          if (_self.objectData.url) {
            $object.on('load', function () {
              _self._showContent($object);
            });
            $object.on('error', function () {
              _self.error();
            });
          } else {
            _self.error();
          }
          break;
      }
    },
    /**
     * Throws an error message if something went wrong
     *
     * @return	{void}
     */
    error: function error() {
      _self.objectData.type = 'error';
      var $object = $('<div class="' + _self.settings.classPrefix + 'inlineWrap"></div>');
      $object.html(_self.settings.errorMessage);
      _self.objects.contentInner.html($object);
      _self._showContent(_self.objects.contentInner);
    },
    /**
     * Calculates the dimensions to fit content
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _calculateDimensions: function _calculateDimensions($object) {
      _self._cleanupDimensions();
      if (!$object) return;

      // Set default dimensions
      var dimensions = {
        ratio: 1,
        objectWidth: $object.attr('width') ? $object.attr('width') : $object.attr(_self._prefixAttributeName('width')),
        objectHeight: $object.attr('height') ? $object.attr('height') : $object.attr(_self._prefixAttributeName('height'))
      };
      if (!_self.settings.disableShrink) {
        // Add calculated maximum width/height to dimensions
        dimensions.maxWidth = parseInt(_self.dimensions.windowWidth * _self.settings.shrinkFactor);
        dimensions.maxHeight = parseInt(_self.dimensions.windowHeight * _self.settings.shrinkFactor);

        // If the auto calculated maxWidth/maxHeight greather than the user-defined one, use that.
        if (dimensions.maxWidth > _self.settings.maxWidth) {
          dimensions.maxWidth = _self.settings.maxWidth;
        }
        if (dimensions.maxHeight > _self.settings.maxHeight) {
          dimensions.maxHeight = _self.settings.maxHeight;
        }

        // Calculate the difference between screen width/height and image width/height
        dimensions.differenceWidthAsPercent = parseInt(100 / dimensions.maxWidth * dimensions.objectWidth);
        dimensions.differenceHeightAsPercent = parseInt(100 / dimensions.maxHeight * dimensions.objectHeight);
        switch (_self.objectData.type) {
          case 'image':
          case 'flash':
          case 'video':
          case 'iframe':
          case 'ajax':
          case 'inline':
            if (_self.objectData.type === 'image' || _self.settings.fixedRatio === true) {
              if (dimensions.differenceWidthAsPercent > 100 && dimensions.differenceWidthAsPercent > dimensions.differenceHeightAsPercent) {
                dimensions.objectWidth = dimensions.maxWidth;
                dimensions.objectHeight = parseInt(dimensions.objectHeight / dimensions.differenceWidthAsPercent * 100);
              }
              if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceHeightAsPercent > dimensions.differenceWidthAsPercent) {
                dimensions.objectWidth = parseInt(dimensions.objectWidth / dimensions.differenceHeightAsPercent * 100);
                dimensions.objectHeight = dimensions.maxHeight;
              }
              if (dimensions.differenceHeightAsPercent > 100 && dimensions.differenceWidthAsPercent < dimensions.differenceHeightAsPercent) {
                dimensions.objectWidth = parseInt(dimensions.maxWidth / dimensions.differenceHeightAsPercent * dimensions.differenceWidthAsPercent);
                dimensions.objectHeight = dimensions.maxHeight;
              }
              break;
            }
          case 'error':
            if (!isNaN(dimensions.objectWidth) && dimensions.objectWidth > dimensions.maxWidth) {
              dimensions.objectWidth = dimensions.maxWidth;
            }
            break;
          default:
            if ((isNaN(dimensions.objectWidth) || dimensions.objectWidth > dimensions.maxWidth) && !_self.settings.forceWidth) {
              dimensions.objectWidth = dimensions.maxWidth;
            }
            if ((isNaN(dimensions.objectHeight) && dimensions.objectHeight !== 'auto' || dimensions.objectHeight > dimensions.maxHeight) && !_self.settings.forceHeight) {
              dimensions.objectHeight = dimensions.maxHeight;
            }
            break;
        }
      }
      if (_self.settings.forceWidth) {
        try {
          dimensions.objectWidth = _self.settings[_self.objectData.type].width;
        } catch (e) {
          dimensions.objectWidth = _self.settings.width || dimensions.objectWidth;
        }
        dimensions.maxWidth = null;
      }
      if ($object.attr(_self._prefixAttributeName('max-width'))) {
        dimensions.maxWidth = $object.attr(_self._prefixAttributeName('max-width'));
      }
      if (_self.settings.forceHeight) {
        try {
          dimensions.objectHeight = _self.settings[_self.objectData.type].height;
        } catch (e) {
          dimensions.objectHeight = _self.settings.height || dimensions.objectHeight;
        }
        dimensions.maxHeight = null;
      }
      if ($object.attr(_self._prefixAttributeName('max-height'))) {
        dimensions.maxHeight = $object.attr(_self._prefixAttributeName('max-height'));
      }
      _self._adjustDimensions($object, dimensions);
    },
    /**
     * Adjusts the dimensions
     *
     * @param	{object}	$object
     * @param	{object}	dimensions
     * @return	{void}
     */
    _adjustDimensions: function _adjustDimensions($object, dimensions) {
      // Adjust width and height
      $object.css({
        'width': dimensions.objectWidth,
        'height': dimensions.objectHeight,
        'max-width': dimensions.maxWidth,
        'max-height': dimensions.maxHeight
      });
      _self.objects.contentInner.css({
        'width': $object.outerWidth(),
        'height': $object.outerHeight(),
        'max-width': '100%'
      });
      _self.objects["case"].css({
        'width': _self.objects.contentInner.outerWidth(),
        'max-width': '100%'
      });

      // Adjust margin
      _self.objects["case"].css({
        'margin-top': parseInt(-(_self.objects["case"].outerHeight() / 2)),
        'margin-left': parseInt(-(_self.objects["case"].outerWidth() / 2))
      });
    },
    /**
     * Handles the _loading
     *
     * @param	{string}	process
     * @return	{void}
     */
    _loading: function _loading(process) {
      if (process === 'start') {
        _self.objects["case"].addClass(_self.settings.classPrefix + 'loading');
        _self.objects.loading.show();
      } else if (process === 'end') {
        _self.objects["case"].removeClass(_self.settings.classPrefix + 'loading');
        _self.objects.loading.hide();
      }
    },
    /**
     * Gets the client screen dimensions
     *
     * @return	{object}	dimensions
     */
    getViewportDimensions: function getViewportDimensions() {
      return {
        windowWidth: $(window).innerWidth(),
        windowHeight: $(window).innerHeight()
      };
    },
    /**
     * Verifies the url
     *
     * @param	{string}	dataUrl
     * @return	{object}	dataUrl	Clean url for processing content
     */
    _verifyDataUrl: function _verifyDataUrl(dataUrl) {
      if (!dataUrl || dataUrl === undefined || dataUrl === '') {
        return false;
      }
      if (dataUrl.indexOf('#') > -1) {
        dataUrl = dataUrl.split('#');
        dataUrl = '#' + dataUrl[dataUrl.length - 1];
      }
      return _self._normalizeUrl(dataUrl.toString());
    },
    //
    /**
     * Tries to get the (file) suffix of an url
     *
     * @param	{string}	url
     * @return	{string}
     */
    _getFileUrlSuffix: function _getFileUrlSuffix(url) {
      var re = /(?:\.([^.]+))?$/;
      return re.exec(url.toLowerCase())[1];
    },
    /**
     * Verifies the data type of the content to load
     *
     * @param	{string}			url
     * @return	{string|boolean}	Array key if expression matched, else false
     */
    _verifyDataType: function _verifyDataType(url) {
      var typeMapping = _self.settings.typeMapping;

      // Early abort if dataUrl couldn't be verified
      if (!url) {
        return false;
      }

      // Verify the dataType of url according to typeMapping which
      // has been defined in settings.
      for (var key in typeMapping) {
        if (typeMapping.hasOwnProperty(key)) {
          var suffixArr = typeMapping[key].split(',');
          for (var i = 0; i < suffixArr.length; i++) {
            var suffix = suffixArr[i].toLowerCase(),
              regexp = new RegExp('\.(' + suffix + ')$', 'i'),
              str = url.toLowerCase().split('?')[0].substr(-5);
            if (regexp.test(str) === true || key === 'inline' && url.indexOf(suffix) > -1) {
              return key;
            }
          }
        }
      }

      // If no expression matched, return 'iframe'.
      return 'iframe';
    },
    /**
     * Extends html markup with the essential tags
     *
     * @return	{void}
     */
    _addElements: function _addElements() {
      if (typeof _self.objects["case"] !== 'undefined' && $('#' + _self.objects["case"].attr('id')).length) {
        return;
      }
      _self.settings.markup();
    },
    /**
     * Shows the loaded content
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _showContent: function _showContent($object) {
      // Add data attribute with the object type
      _self.objects.document.attr(_self._prefixAttributeName('type'), _self.objectData.type);
      _self.cache.object = $object;

      // Call onBeforeShow hook functions
      _self._callHooks(_self.settings.onBeforeShow);
      if (_self.settings.breakBeforeShow) return;
      _self.show();
    },
    /**
     * Starts the 'inTransition'
     * @return	{void}
     */
    _startInTransition: function _startInTransition() {
      switch (_self.transition["in"]()) {
        case 'scrollTop':
        case 'scrollRight':
        case 'scrollBottom':
        case 'scrollLeft':
        case 'scrollHorizontal':
        case 'scrollVertical':
          _self.transition.scroll(_self.objects["case"], 'in', _self.settings.speedIn);
          _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
          break;
        case 'elastic':
          if (_self.objects["case"].css('opacity') < 1) {
            _self.transition.zoom(_self.objects["case"], 'in', _self.settings.speedIn);
            _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
          }
        case 'fade':
        case 'fadeInline':
          _self.transition.fade(_self.objects["case"], 'in', _self.settings.speedIn);
          _self.transition.fade(_self.objects.contentInner, 'in', _self.settings.speedIn);
          break;
        default:
          _self.transition.fade(_self.objects["case"], 'in', 0);
          break;
      }

      // End loading.
      _self._loading('end');
      _self.isBusy = false;

      // Set index of the first item opened
      if (!_self.cache.firstOpened) {
        _self.cache.firstOpened = _self.objectData["this"];
      }

      // Fade in the info with delay
      _self.objects.info.hide();
      setTimeout(function () {
        _self.transition.fade(_self.objects.info, 'in', _self.settings.speedIn);
      }, _self.settings.speedIn);

      // Call onFinish hook functions
      _self._callHooks(_self.settings.onFinish);
    },
    /**
     * Processes the content to show
     *
     * @return	{void}
     */
    _processContent: function _processContent() {
      _self.isBusy = true;

      // Fade out the info at first
      _self.transition.fade(_self.objects.info, 'out', 0);
      switch (_self.settings.transitionOut) {
        case 'scrollTop':
        case 'scrollRight':
        case 'scrollBottom':
        case 'scrollLeft':
        case 'scrollVertical':
        case 'scrollHorizontal':
          if (_self.objects["case"].is(':hidden')) {
            _self.transition.fade(_self.objects.contentInner, 'out', 0);
            _self.transition.fade(_self.objects["case"], 'out', 0, 0, function () {
              _self._loadContent();
            });
          } else {
            _self.transition.scroll(_self.objects["case"], 'out', _self.settings.speedOut, function () {
              _self._loadContent();
            });
          }
          break;
        case 'fade':
          if (_self.objects["case"].is(':hidden')) {
            _self.transition.fade(_self.objects["case"], 'out', 0, 0, function () {
              _self._loadContent();
            });
          } else {
            _self.transition.fade(_self.objects["case"], 'out', _self.settings.speedOut, 0, function () {
              _self._loadContent();
            });
          }
          break;
        case 'fadeInline':
        case 'elastic':
          if (_self.objects["case"].is(':hidden')) {
            _self.transition.fade(_self.objects["case"], 'out', 0, 0, function () {
              _self._loadContent();
            });
          } else {
            _self.transition.fade(_self.objects.contentInner, 'out', _self.settings.speedOut, 0, function () {
              _self._loadContent();
            });
          }
          break;
        default:
          _self.transition.fade(_self.objects["case"], 'out', 0, 0, function () {
            _self._loadContent();
          });
          break;
      }
    },
    /**
     * Handles events for gallery buttons
     *
     * @return	{void}
     */
    _handleEvents: function _handleEvents() {
      _self._unbindEvents();
      _self.objects.nav.children().not(_self.objects.close).hide();

      // If slideshow is enabled, show play/pause and start timeout.
      if (_self.isSlideshowEnabled()) {
        // Only start the timeout if slideshow autostart is enabled and slideshow is not pausing
        if ((_self.settings.slideshowAutoStart === true || _self.isSlideshowStarted) && !_self.objects.nav.hasClass(_self.settings.classPrefix + 'paused')) {
          _self._startTimeout();
        } else {
          _self._stopTimeout();
        }
      }
      if (_self.settings.liveResize) {
        _self._watchResizeInteraction();
      }
      _self.objects.close.click(function (event) {
        event.preventDefault();
        _self.close();
      });
      if (_self.settings.closeOnOverlayClick === true) {
        _self.objects.overlay.css('cursor', 'pointer').click(function (event) {
          event.preventDefault();
          _self.close();
        });
      }
      if (_self.settings.useKeys === true) {
        _self._addKeyEvents();
      }
      if (_self.objectData.isPartOfSequence) {
        _self.objects.nav.attr(_self._prefixAttributeName('ispartofsequence'), true);
        _self.objects.nav.data('items', _self._setNavigation());
        _self.objects.prev.click(function (event) {
          event.preventDefault();
          if (_self.settings.navigateEndless === true || !_self.item.isFirst()) {
            _self.objects.prev.unbind('click');
            _self.cache.action = 'prev';
            _self.objects.nav.data('items').prev.click();
            if (_self.isSlideshowEnabled()) {
              _self._stopTimeout();
            }
          }
        });
        _self.objects.next.click(function (event) {
          event.preventDefault();
          if (_self.settings.navigateEndless === true || !_self.item.isLast()) {
            _self.objects.next.unbind('click');
            _self.cache.action = 'next';
            _self.objects.nav.data('items').next.click();
            if (_self.isSlideshowEnabled()) {
              _self._stopTimeout();
            }
          }
        });
        if (_self.isSlideshowEnabled()) {
          _self.objects.play.click(function (event) {
            event.preventDefault();
            _self._startTimeout();
          });
          _self.objects.pause.click(function (event) {
            event.preventDefault();
            _self._stopTimeout();
          });
        }

        // Enable swiping if activated
        if (_self.settings.swipe === true) {
          if ($.isPlainObject($.event.special.swipeleft)) {
            _self.objects["case"].on('swipeleft', function (event) {
              event.preventDefault();
              _self.objects.next.click();
              if (_self.isSlideshowEnabled()) {
                _self._stopTimeout();
              }
            });
          }
          if ($.isPlainObject($.event.special.swiperight)) {
            _self.objects["case"].on('swiperight', function (event) {
              event.preventDefault();
              _self.objects.prev.click();
              if (_self.isSlideshowEnabled()) {
                _self._stopTimeout();
              }
            });
          }
        }
      }
    },
    /**
     * Adds the key events
     *
     * @return	{void}
     */
    _addKeyEvents: function _addKeyEvents() {
      $(document).bind('keyup.lightcase', function (event) {
        // Do nothing if lightcase is in process
        if (_self.isBusy) {
          return;
        }
        switch (event.keyCode) {
          // Escape key
          case 27:
            _self.objects.close.click();
            break;
          // Backward key
          case 37:
            if (_self.objectData.isPartOfSequence) {
              _self.objects.prev.click();
            }
            break;
          // Forward key
          case 39:
            if (_self.objectData.isPartOfSequence) {
              _self.objects.next.click();
            }
            break;
        }
      });
    },
    /**
     * Starts the slideshow timeout
     *
     * @return	{void}
     */
    _startTimeout: function _startTimeout() {
      _self.isSlideshowStarted = true;
      _self.objects.play.hide();
      _self.objects.pause.show();
      _self.cache.action = 'next';
      _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');
      _self.timeout = setTimeout(function () {
        _self.objects.nav.data('items').next.click();
      }, _self.settings.timeout);
    },
    /**
     * Stops the slideshow timeout
     *
     * @return	{void}
     */
    _stopTimeout: function _stopTimeout() {
      _self.objects.play.show();
      _self.objects.pause.hide();
      _self.objects.nav.addClass(_self.settings.classPrefix + 'paused');
      clearTimeout(_self.timeout);
    },
    /**
     * Sets the navigator buttons (prev/next)
     *
     * @return	{object}	items
     */
    _setNavigation: function _setNavigation() {
      var $links = $(_self.cache.selector || _self.settings.attr),
        sequenceLength = _self.objectData.sequenceLength - 1,
        items = {
          prev: $links.eq(_self.objectData.prevIndex),
          next: $links.eq(_self.objectData.nextIndex)
        };
      if (_self.objectData.currentIndex > 0) {
        _self.objects.prev.show();
      } else {
        items.prevItem = $links.eq(sequenceLength);
      }
      if (_self.objectData.nextIndex <= sequenceLength) {
        _self.objects.next.show();
      } else {
        items.next = $links.eq(0);
      }
      if (_self.settings.navigateEndless === true) {
        _self.objects.prev.show();
        _self.objects.next.show();
      }
      return items;
    },
    /**
     * Item information/status
     *
     */
    item: {
      /**
       * Verifies if the current item is first item.
       *
       * @return	{boolean}
       */
      isFirst: function isFirst() {
        return _self.objectData.currentIndex === 0;
      },
      /**
       * Verifies if the current item is first item opened.
       *
       * @return	{boolean}
       */
      isFirstOpened: function isFirstOpened() {
        return _self.objectData["this"].is(_self.cache.firstOpened);
      },
      /**
       * Verifies if the current item is last item.
       *
       * @return	{boolean}
       */
      isLast: function isLast() {
        return _self.objectData.currentIndex === _self.objectData.sequenceLength - 1;
      }
    },
    /**
     * Clones the object for inline elements
     *
     * @param	{object}	$object
     * @return	{object}	$clone
     */
    _cloneObject: function _cloneObject($object) {
      var $clone = $object.clone(),
        objectId = $object.attr('id');

      // If element is hidden, cache the object and remove
      if ($object.is(':hidden')) {
        _self._cacheObjectData($object);
        $object.attr('id', _self.settings.idPrefix + 'temp-' + objectId).empty();
      } else {
        // Prevent duplicated id's
        $clone.removeAttr('id');
      }
      return $clone.show();
    },
    /**
     * Verifies if it is a mobile device
     *
     * @return	{boolean}
     */
    isMobileDevice: function isMobileDevice() {
      var deviceAgent = navigator.userAgent.toLowerCase(),
        agentId = deviceAgent.match(_self.settings.mobileMatchExpression);
      return agentId ? true : false;
    },
    /**
     * Verifies if css transitions are supported
     *
     * @return	{string|boolean}	The transition prefix if supported, else false.
     */
    isTransitionSupported: function isTransitionSupported() {
      var body = _self.objects.body.get(0),
        isTransitionSupported = false,
        transitionMapping = {
          'transition': '',
          'WebkitTransition': '-webkit-',
          'MozTransition': '-moz-',
          'OTransition': '-o-',
          'MsTransition': '-ms-'
        };
      for (var key in transitionMapping) {
        if (transitionMapping.hasOwnProperty(key) && key in body.style) {
          _self.support.transition = transitionMapping[key];
          isTransitionSupported = true;
        }
      }
      return isTransitionSupported;
    },
    /**
     * Transition types
     *
     */
    transition: {
      /**
       * Returns the correct transition type according to the status of interaction.
       *
       * @return	{string}	Transition type
       */
      "in": function _in() {
        if (_self.settings.transitionOpen && !_self.cache.firstOpened) {
          return _self.settings.transitionOpen;
        }
        return _self.settings.transitionIn;
      },
      /**
       * Fades in/out the object
       *
       * @param	{object}	$object
       * @param	{string}	type
       * @param	{number}	speed
       * @param	{number}	opacity
       * @param	{function}	callback
       * @return	{void}		Animates an object
       */
      fade: function fade($object, type, speed, opacity, callback) {
        var isInTransition = type === 'in',
          startTransition = {},
          startOpacity = $object.css('opacity'),
          endTransition = {},
          endOpacity = opacity ? opacity : isInTransition ? 1 : 0;
        if (!_self.isOpen && isInTransition) return;
        startTransition['opacity'] = startOpacity;
        endTransition['opacity'] = endOpacity;
        $object.css(_self.support.transition + 'transition', 'none');
        $object.css(startTransition).show();

        // Css transition
        if (_self.support.transitions) {
          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
          setTimeout(function () {
            $object.css(endTransition);
            setTimeout(function () {
              $object.css(_self.support.transition + 'transition', '');
              if (callback && (_self.isOpen || !isInTransition)) {
                callback();
              }
            }, speed);
          }, 15);
        } else {
          // Fallback to js transition
          $object.stop();
          $object.animate(endTransition, speed, callback);
        }
      },
      /**
       * Scrolls in/out the object
       *
       * @param	{object}	$object
       * @param	{string}	type
       * @param	{number}	speed
       * @param	{function}	callback
       * @return	{void}		Animates an object
       */
      scroll: function scroll($object, type, speed, callback) {
        var isInTransition = type === 'in',
          transition = isInTransition ? _self.settings.transitionIn : _self.settings.transitionOut,
          direction = 'left',
          startTransition = {},
          startOpacity = isInTransition ? 0 : 1,
          startOffset = isInTransition ? '-50%' : '50%',
          endTransition = {},
          endOpacity = isInTransition ? 1 : 0,
          endOffset = isInTransition ? '50%' : '-50%';
        if (!_self.isOpen && isInTransition) return;
        switch (transition) {
          case 'scrollTop':
            direction = 'top';
            break;
          case 'scrollRight':
            startOffset = isInTransition ? '150%' : '50%';
            endOffset = isInTransition ? '50%' : '150%';
            break;
          case 'scrollBottom':
            direction = 'top';
            startOffset = isInTransition ? '150%' : '50%';
            endOffset = isInTransition ? '50%' : '150%';
            break;
          case 'scrollHorizontal':
            startOffset = isInTransition ? '150%' : '50%';
            endOffset = isInTransition ? '50%' : '-50%';
            break;
          case 'scrollVertical':
            direction = 'top';
            startOffset = isInTransition ? '-50%' : '50%';
            endOffset = isInTransition ? '50%' : '150%';
            break;
        }
        if (_self.cache.action === 'prev') {
          switch (transition) {
            case 'scrollHorizontal':
              startOffset = isInTransition ? '-50%' : '50%';
              endOffset = isInTransition ? '50%' : '150%';
              break;
            case 'scrollVertical':
              startOffset = isInTransition ? '150%' : '50%';
              endOffset = isInTransition ? '50%' : '-50%';
              break;
          }
        }
        startTransition['opacity'] = startOpacity;
        startTransition[direction] = startOffset;
        endTransition['opacity'] = endOpacity;
        endTransition[direction] = endOffset;
        $object.css(_self.support.transition + 'transition', 'none');
        $object.css(startTransition).show();

        // Css transition
        if (_self.support.transitions) {
          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
          setTimeout(function () {
            $object.css(endTransition);
            setTimeout(function () {
              $object.css(_self.support.transition + 'transition', '');
              if (callback && (_self.isOpen || !isInTransition)) {
                callback();
              }
            }, speed);
          }, 15);
        } else {
          // Fallback to js transition
          $object.stop();
          $object.animate(endTransition, speed, callback);
        }
      },
      /**
       * Zooms in/out the object
       *
       * @param	{object}	$object
       * @param	{string}	type
       * @param	{number}	speed
       * @param	{function}	callback
       * @return	{void}		Animates an object
       */
      zoom: function zoom($object, type, speed, callback) {
        var isInTransition = type === 'in',
          startTransition = {},
          startOpacity = $object.css('opacity'),
          startScale = isInTransition ? 'scale(0.75)' : 'scale(1)',
          endTransition = {},
          endOpacity = isInTransition ? 1 : 0,
          endScale = isInTransition ? 'scale(1)' : 'scale(0.75)';
        if (!_self.isOpen && isInTransition) return;
        startTransition['opacity'] = startOpacity;
        startTransition[_self.support.transition + 'transform'] = startScale;
        endTransition['opacity'] = endOpacity;
        $object.css(_self.support.transition + 'transition', 'none');
        $object.css(startTransition).show();

        // Css transition
        if (_self.support.transitions) {
          endTransition[_self.support.transition + 'transform'] = endScale;
          endTransition[_self.support.transition + 'transition'] = speed + 'ms ease';
          setTimeout(function () {
            $object.css(endTransition);
            setTimeout(function () {
              $object.css(_self.support.transition + 'transform', '');
              $object.css(_self.support.transition + 'transition', '');
              if (callback && (_self.isOpen || !isInTransition)) {
                callback();
              }
            }, speed);
          }, 15);
        } else {
          // Fallback to js transition
          $object.stop();
          $object.animate(endTransition, speed, callback);
        }
      }
    },
    /**
     * Calls all the registered functions of a specific hook
     *
     * @param	{object}	hooks
     * @return	{void}
     */
    _callHooks: function _callHooks(hooks) {
      if (_typeof(hooks) === 'object') {
        $.each(hooks, function (index, hook) {
          if (typeof hook === 'function') {
            hook.call(_self.origin);
          }
        });
      }
    },
    /**
     * Caches the object data
     *
     * @param	{object}	$object
     * @return	{void}
     */
    _cacheObjectData: function _cacheObjectData($object) {
      $.data($object, 'cache', {
        id: $object.attr('id'),
        content: $object.html()
      });
      _self.cache.originalObject = $object;
    },
    /**
     * Restores the object from cache
     *
     * @return	void
     */
    _restoreObject: function _restoreObject() {
      var $object = $('[id^="' + _self.settings.idPrefix + 'temp-"]');
      $object.attr('id', $.data(_self.cache.originalObject, 'cache').id);
      $object.html($.data(_self.cache.originalObject, 'cache').content);
    },
    /**
     * Executes functions for a window resize.
     * It stops an eventual timeout and recalculates dimensions.
     *
     * @param	{object}	dimensions
     * @return	{void}
     */
    resize: function resize(event, dimensions) {
      if (!_self.isOpen) return;
      if (_self.isSlideshowEnabled()) {
        _self._stopTimeout();
      }
      if (_typeof(dimensions) === 'object' && dimensions !== null) {
        if (dimensions.width) {
          _self.cache.object.attr(_self._prefixAttributeName('width'), dimensions.width);
        }
        if (dimensions.maxWidth) {
          _self.cache.object.attr(_self._prefixAttributeName('max-width'), dimensions.maxWidth);
        }
        if (dimensions.height) {
          _self.cache.object.attr(_self._prefixAttributeName('height'), dimensions.height);
        }
        if (dimensions.maxHeight) {
          _self.cache.object.attr(_self._prefixAttributeName('max-height'), dimensions.maxHeight);
        }
      }
      _self.dimensions = _self.getViewportDimensions();
      _self._calculateDimensions(_self.cache.object);

      // Call onResize hook functions
      _self._callHooks(_self.settings.onResize);
    },
    /**
     * Watches for any resize interaction and caches the new sizes.
     *
     * @return	{void}
     */
    _watchResizeInteraction: function _watchResizeInteraction() {
      $(window).resize(_self.resize);
    },
    /**
     * Stop watching any resize interaction related to _self.
     *
     * @return	{void}
     */
    _unwatchResizeInteraction: function _unwatchResizeInteraction() {
      $(window).off('resize', _self.resize);
    },
    /**
     * Switches to the fullscreen mode
     *
     * @return	{void}
     */
    _switchToFullScreenMode: function _switchToFullScreenMode() {
      _self.settings.shrinkFactor = 1;
      _self.settings.overlayOpacity = 1;
      $('html').addClass(_self.settings.classPrefix + 'fullScreenMode');
    },
    /**
     * Enters into the lightcase view
     *
     * @return	{void}
     */
    _open: function _open() {
      _self.isOpen = true;
      _self.support.transitions = _self.settings.cssTransitions ? _self.isTransitionSupported() : false;
      _self.support.mobileDevice = _self.isMobileDevice();
      if (_self.support.mobileDevice) {
        $('html').addClass(_self.settings.classPrefix + 'isMobileDevice');
        if (_self.settings.fullScreenModeForMobile) {
          _self._switchToFullScreenMode();
        }
      }
      if (!_self.settings.transitionIn) {
        _self.settings.transitionIn = _self.settings.transition;
      }
      if (!_self.settings.transitionOut) {
        _self.settings.transitionOut = _self.settings.transition;
      }
      switch (_self.transition["in"]()) {
        case 'fade':
        case 'fadeInline':
        case 'elastic':
        case 'scrollTop':
        case 'scrollRight':
        case 'scrollBottom':
        case 'scrollLeft':
        case 'scrollVertical':
        case 'scrollHorizontal':
          if (_self.objects["case"].is(':hidden')) {
            _self.objects.close.css('opacity', 0);
            _self.objects.overlay.css('opacity', 0);
            _self.objects["case"].css('opacity', 0);
            _self.objects.contentInner.css('opacity', 0);
          }
          _self.transition.fade(_self.objects.overlay, 'in', _self.settings.speedIn, _self.settings.overlayOpacity, function () {
            _self.transition.fade(_self.objects.close, 'in', _self.settings.speedIn);
            _self._handleEvents();
            _self._processContent();
          });
          break;
        default:
          _self.transition.fade(_self.objects.overlay, 'in', 0, _self.settings.overlayOpacity, function () {
            _self.transition.fade(_self.objects.close, 'in', 0);
            _self._handleEvents();
            _self._processContent();
          });
          break;
      }
      _self.objects.document.addClass(_self.settings.classPrefix + 'open');
      _self.objects["case"].attr('aria-hidden', 'false');
    },
    /**
     * Shows the lightcase by starting the transition
     */
    show: function show() {
      // Call onCalculateDimensions hook functions
      _self._callHooks(_self.settings.onBeforeCalculateDimensions);
      _self._calculateDimensions(_self.cache.object);

      // Call onAfterCalculateDimensions hook functions
      _self._callHooks(_self.settings.onAfterCalculateDimensions);
      _self._startInTransition();
    },
    /**
     * Escapes from the lightcase view
     *
     * @return	{void}
     */
    close: function close() {
      _self.isOpen = false;
      if (_self.isSlideshowEnabled()) {
        _self._stopTimeout();
        _self.isSlideshowStarted = false;
        _self.objects.nav.removeClass(_self.settings.classPrefix + 'paused');
      }
      _self.objects.loading.hide();
      _self._unbindEvents();
      _self._unwatchResizeInteraction();
      $('html').removeClass(_self.settings.classPrefix + 'open');
      _self.objects["case"].attr('aria-hidden', 'true');
      _self.objects.nav.children().hide();
      _self.objects.close.hide();

      // Call onClose hook functions
      _self._callHooks(_self.settings.onClose);

      // Fade out the info at first
      _self.transition.fade(_self.objects.info, 'out', 0);
      switch (_self.settings.transitionClose || _self.settings.transitionOut) {
        case 'fade':
        case 'fadeInline':
        case 'scrollTop':
        case 'scrollRight':
        case 'scrollBottom':
        case 'scrollLeft':
        case 'scrollHorizontal':
        case 'scrollVertical':
          _self.transition.fade(_self.objects["case"], 'out', _self.settings.speedOut, 0, function () {
            _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {
              _self.cleanup();
            });
          });
          break;
        case 'elastic':
          _self.transition.zoom(_self.objects["case"], 'out', _self.settings.speedOut, function () {
            _self.transition.fade(_self.objects.overlay, 'out', _self.settings.speedOut, 0, function () {
              _self.cleanup();
            });
          });
          break;
        default:
          _self.cleanup();
          break;
      }
    },
    /**
     * Unbinds all given events
     *
     * @return	{void}
     */
    _unbindEvents: function _unbindEvents() {
      // Unbind overlay event
      _self.objects.overlay.unbind('click');

      // Unbind key events
      $(document).unbind('keyup.lightcase');

      // Unbind swipe events
      _self.objects["case"].unbind('swipeleft').unbind('swiperight');

      // Unbind navigator events
      _self.objects.prev.unbind('click');
      _self.objects.next.unbind('click');
      _self.objects.play.unbind('click');
      _self.objects.pause.unbind('click');

      // Unbind close event
      _self.objects.close.unbind('click');
    },
    /**
     * Cleans up the dimensions
     *
     * @return	{void}
     */
    _cleanupDimensions: function _cleanupDimensions() {
      var opacity = _self.objects.contentInner.css('opacity');
      _self.objects["case"].css({
        'width': '',
        'height': '',
        'top': '',
        'left': '',
        'margin-top': '',
        'margin-left': ''
      });
      _self.objects.contentInner.removeAttr('style').css('opacity', opacity);
      _self.objects.contentInner.children().removeAttr('style');
    },
    /**
     * Cleanup after aborting lightcase
     *
     * @return	{void}
     */
    cleanup: function cleanup() {
      _self._cleanupDimensions();
      _self.objects.loading.hide();
      _self.objects.overlay.hide();
      _self.objects["case"].hide();
      _self.objects.prev.hide();
      _self.objects.next.hide();
      _self.objects.play.hide();
      _self.objects.pause.hide();
      _self.objects.document.removeAttr(_self._prefixAttributeName('type'));
      _self.objects.nav.removeAttr(_self._prefixAttributeName('ispartofsequence'));
      _self.objects.contentInner.empty().hide();
      _self.objects.info.children().empty();
      if (_self.cache.originalObject) {
        _self._restoreObject();
      }

      // Call onCleanup hook functions
      _self._callHooks(_self.settings.onCleanup);

      // Restore cache
      _self.cache = {};
    },
    /**
     * Returns the supported match media or undefined if the browser
     * doesn't support match media.
     *
     * @return	{mixed}
     */
    _matchMedia: function _matchMedia() {
      return window.matchMedia || window.msMatchMedia;
    },
    /**
     * Returns the devicePixelRatio if supported. Else, it simply returns
     * 1 as the default.
     *
     * @return	{number}
     */
    _devicePixelRatio: function _devicePixelRatio() {
      return window.devicePixelRatio || 1;
    },
    /**
     * Checks if method is public
     *
     * @return	{boolean}
     */
    _isPublicMethod: function _isPublicMethod(method) {
      return typeof _self[method] === 'function' && method.charAt(0) !== '_';
    },
    /**
     * Exports all public methods to be accessible, callable
     * from global scope.
     *
     * @return	{void}
     */
    _export: function _export() {
      window.lightcase = {};
      $.each(_self, function (property) {
        if (_self._isPublicMethod(property)) {
          lightcase[property] = _self[property];
        }
      });
    }
  };
  _self._export();
  $.fn.lightcase = function (method) {
    // Method calling logic (only public methods are applied)
    if (_self._isPublicMethod(method)) {
      return _self[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (_typeof(method) === 'object' || !method) {
      return _self.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.lightcase');
    }
  };
})((jquery__WEBPACK_IMPORTED_MODULE_29___default()));

/***/ }),

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");








(function ($) {
  "user strict";

  // preloader
  $(window).on('load', function () {
    $(".preloader").delay(500).animate({
      "opacity": "0"
    }, 500, function () {
      $(".preloader").css("display", "none");
    });
  });
  $("select").niceSelect(),
  // aos
  aos__WEBPACK_IMPORTED_MODULE_5___default().init();
  $('.video').lightcase();
  $('.img-popup').lightcase();

  //Create Background Image
  (function background() {
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = 'url(' + $(this).data('background') + ')';
      return bg;
    });
  })();
  setInterval(function () {
    $(".banner-group-shape").addClass("active");
  }, 1000);

  // scroll-to-top
  var ScrollTop = $(".scrollToTop");
  $(window).on('scroll', function () {
    if ($(this).scrollTop() < 100) {
      ScrollTop.removeClass("active");
    } else {
      ScrollTop.addClass("active");
    }
  });

  // header-fixed
  var lastScrollTop = '';
  $(window).on('scroll', function () {
    var st = $(this).scrollTop();
    var mainMenuTop = $('.header-section');
    if ($(window).scrollTop() > 500) {
      if (st > lastScrollTop) {
        mainMenuTop.removeClass('animated fadeInDown header-fixed');
      } else {
        mainMenuTop.addClass('animated fadeInDown header-fixed');
      }
    } else {
      mainMenuTop.removeClass('animated fadeInDown header-fixed');
    }
    lastScrollTop = st;
  });

  // navbar-click
  $(".navbar li a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("show")) {
      element.removeClass("show");
      element.children("ul").slideUp(500);
    } else {
      element.siblings("li").removeClass('show');
      element.addClass("show");
      element.siblings("li").find("ul").slideUp(500);
      element.children('ul').slideDown(500);
    }
  });

  // window.addEventListener('resize', function () {
  //   if (screen.width > 1199) {
  //     $('.sub-menu').show();
  //   }else{
  //     $('.sub-menu').hide();
  //   }
  // }, true);

  // navbar-click
  $(".navigation-three li a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("show")) {
      element.removeClass("show");
      element.children("ul").slideUp(500);
    } else {
      element.siblings("li").removeClass('show');
      element.addClass("show");
      element.siblings("li").find("ul").slideUp(500);
      element.children('ul').slideDown(500);
    }
  });

  //Odometer
  if ($(".statistics-item,.icon-box-items,.counter-single-items").length) {
    $(".statistics-item,.icon-box-items,.counter-single-items").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
  }

  // custom cursor 
  var cursor = $(".cursor"),
    follower = $(".cursor-follower");
  var posX = 0,
    posY = 0;
  var mouseX = 0,
    mouseY = 0;
  gsap__WEBPACK_IMPORTED_MODULE_7__["default"].to({}, 0.016, {
    repeat: -1,
    onRepeat: function onRepeat() {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;
      gsap__WEBPACK_IMPORTED_MODULE_7__["default"].set(follower, {
        css: {
          left: posX - 12,
          top: posY - 12
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_7__["default"].set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      });
    }
  });
  $(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  $("a").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
  });
  $("a").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
  });
  $('input').attr('autocomplete', 'off');

  //plan-tab-switcher
  $('.plan-tab-switcher').on('click', function () {
    $(this).toggleClass('active');
    $('.plan-area').toggleClass('change-subs-duration');
  });

  // faq
  $('.faq-wrapper .faq-title').on('click', function (e) {
    var element = $(this).parent('.faq-item');
    if (element.hasClass('open')) {
      element.removeClass('open');
      element.find('.faq-content').removeClass('open');
      element.find('.faq-content').slideUp(300, "swing");
    } else {
      element.addClass('open');
      element.children('.faq-content').slideDown(300, "swing");
      element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
      element.siblings('.faq-item').removeClass('open');
      element.siblings('.faq-item').find('.faq-title').removeClass('open');
      element.siblings('.taq-item').find('.faq-content').slideUp(300, "swing");
    }
  });

  // slider
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.banner-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 2
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.brand-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1
      },
      420: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.brand-slider-two', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 2
      },
      420: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.feature-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.project-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      1300: {
        slidesPerView: 2,
        centeredSlides: false
      },
      1199: {
        slidesPerView: 2,
        centeredSlides: false
      },
      991: {
        slidesPerView: 2,
        centeredSlides: false
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1,
        centeredSlides: false
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.gallery-widget-item-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 1
      },
      767: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.service-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.service-slider-two', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      1590: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.client-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.client-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      1199: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.client-slider-two', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.client-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 1
      },
      767: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.client-slider-three', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 1
      },
      767: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.team-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1
      }
    }
  });
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.blog-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1000,
    breakpoints: {
      991: {
        slidesPerView: 2
      },
      767: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 1
      }
    }
  });

  // Case Study Slider
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.case-study-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    navigation: {
      nextEl: '.next-text',
      prevEl: '.prev-text'
    },
    speed: 1000,
    breakpoints: {
      1300: {
        slidesPerView: 2,
        centeredSlides: false
      },
      1199: {
        slidesPerView: 2,
        centeredSlides: false
      },
      991: {
        slidesPerView: 2,
        centeredSlides: false
      },
      767: {
        slidesPerView: 1,
        centeredSlides: false
      },
      575: {
        slidesPerView: 1,
        centeredSlides: false
      }
    }
  });

  // Banner Three Slider
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_6__["default"]('.banner-three-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: '.next-text',
      prevEl: '.prev-text'
    },
    pagination: {
      el: '.custom-pagination',
      type: 'progressbar'
    },
    autoplay: {
      speeds: 2000,
      delay: 4000
    },
    speed: 1500,
    breakpoints: {
      1300: {
        slidesPerView: 1,
        centeredSlides: false
      },
      1199: {
        slidesPerView: 1,
        centeredSlides: false
      },
      991: {
        slidesPerView: 1,
        centeredSlides: false
      },
      767: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 1,
        centeredSlides: false
      }
    }
  });

  // menu
  $('.menu-toggler').on('click', function () {
    $('.header-bottom-area').toggleClass('open');
  });

  // Home Three Menu Opem
  $('.menu-toggler.home-three').on('click', function () {
    $('.menu-open').addClass('open');
  });
  $('.close-btn').on('click', function () {
    $('.menu-open').removeClass('open');
  });

  // init Isotope
  /*var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    // percentPosition: true,
      masonry: {
        columnWidth: '.grid-item'
      }
  });*/
  /*var $gallery = $(".grid").isotope({
  
  });*/
  // filter items on button click
  $('.filter-btn-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
  $('.filter-btn-group').on('click', 'button', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $(window).on('load', function () {
    galleryMasonaryTwo();
  });
  function galleryMasonaryTwo() {
    // filter functions
    var $grid = $(".grid");
    var filterFns = {};

    // bind filter button click
    $('ul.filter').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
    // change is-checked class on buttons
    $('ul.filter').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li', function () {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  }

  /*-------------------------
      product + - start here
  -------------------------*/
  $(function () {
    $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  });
  $("[data-js-form-slider]", function () {
    var el = $(this);
    var field = el.find('.field');
    var fill = el.find('.fill');
    var label = el.find('.-thumb');
    var min = field.attr('min') || 0;
    var max = field.attr('max') || 100;
    var value = field.val();
    var fillVal = 100 * (value - min) / (max - min);
    fill.css({
      "width": fillVal + "%"
    });
    label.find('.center').text(" " + value + " ");
    field.on('input', function () {
      var value = field.val();
      var fillVal = 100 * (value - min) / (max - min);
      fill.css({
        "width": fillVal + "%"
      });
      label.find('.center').text(" " + value + " ");
    });
  });
  var pagination = document.getElementsByClassName('page-link');
  pagination[0].innerHTML = '<i class="fas fa-angle-left"></i>';
  pagination[pagination.length - 1].innerHTML = '<i class="fas fa-angle-right"></i>';
})((jquery__WEBPACK_IMPORTED_MODULE_4___default()));

/***/ }),

/***/ "./assets/viewport.jquery.js":
/*!***********************************!*\
  !*** ./assets/viewport.jquery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* ====================================================
 * jQuery Is In Viewport.
 * https://github.com/frontid/jQueryIsInViewport
 * Marcelo IvÃ¡n Tosco (capynet)
 * Inspired on https://stackoverflow.com/a/40658647/1413049
 * ==================================================== */

!function ($) {
  'use strict';

  var Class = function Class(el, cb) {
    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
    this.cb = cb;
    this.watch();
    return this;
  };
  Class.prototype = {
    /**
     * Checks if the element is in.
     *
     * @returns {boolean}
     */
    isIn: function isIn() {
      var _self = this;
      var $win = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
      var elementTop = _self.$el.offset().top;
      var elementBottom = elementTop + _self.$el.outerHeight();
      var viewportTop = $win.scrollTop();
      var viewportBottom = viewportTop + $win.height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    },
    /**
     * Launch a callback indicating when the element is in and when is out.
     */
    watch: function watch() {
      var _self = this;
      var _isIn = false;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize scroll', function () {
        if (_self.isIn() && _isIn === false) {
          _self.cb.call(_self.$el, 'entered');
          _isIn = true;
        }
        if (_isIn === true && !_self.isIn()) {
          _self.cb.call(_self.$el, 'leaved');
          _isIn = false;
        }
      });
    }
  };

  // jQuery plugin.
  //-----------------------------------------------------------
  (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.isInViewport) = function (cb) {
    return this.each(function () {
      var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var data = $element.data('isInViewport');
      if (!data) {
        $element.data('isInViewport', new Class(this, cb));
      }
    });
  };
}(window.jQuery);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_species-constructor_js-node_modules_core-js_modules_es-a52b29","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_aos_dist_aos_js-node_-17e571"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmQwNTdjMGJiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0QrQzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUEsT0FVSSxtQkFBVTtNQUNOLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7RUFBQTtBQUFBLEVBSHdCRiwyREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUMwQjs7QUFFMUI7QUFDb0I7QUFDTDtBQUNBO0FBQ0s7QUFDSDtBQUNTO0FBQ2Q7QUFDaUI7QUFDTjtBQUNWO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI2Qzs7QUFFNUQ7QUFDTyxJQUFNSSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRSx5SUFJbkMsQ0FBQzs7QUFFRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y0QjtBQUFBLENBQUMsVUFBU0csQ0FBQyxFQUFDO0VBQUNBLENBQUMsQ0FBQ0MsRUFBRSxDQUFDQyxVQUFVLEdBQUMsVUFBU0MsQ0FBQyxFQUFDO0lBQUMsSUFBRyxRQUFRLElBQUUsT0FBT0EsQ0FBQyxFQUFDLE9BQU0sUUFBUSxJQUFFQSxDQUFDLEdBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUUsWUFBVTtNQUFDLElBQUlELENBQUMsR0FBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUFDSyxDQUFDLEdBQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ00sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUFDQyxDQUFDLEdBQUNGLENBQUMsQ0FBQ0csUUFBUSxDQUFDLE1BQU0sQ0FBQztNQUFDSCxDQUFDLENBQUNJLE1BQU0sS0FBR0osQ0FBQyxDQUFDSyxNQUFNLEVBQUUsRUFBQ0MsQ0FBQyxDQUFDUixDQUFDLENBQUMsRUFBQ0ksQ0FBQyxJQUFFSixDQUFDLENBQUNHLElBQUksRUFBRSxDQUFDTSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFBQSxDQUFDLENBQUUsR0FBQyxTQUFTLElBQUVULENBQUMsS0FBRyxJQUFJLENBQUNDLElBQUksQ0FBRSxZQUFVO01BQUMsSUFBSUQsQ0FBQyxHQUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQUNXLENBQUMsR0FBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTSxJQUFJLENBQUMsY0FBYyxDQUFDO01BQUNLLENBQUMsQ0FBQ0YsTUFBTSxLQUFHRSxDQUFDLENBQUNELE1BQU0sRUFBRSxFQUFDUCxDQUFDLENBQUNVLEdBQUcsQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFBQSxDQUFDLENBQUUsRUFBQyxDQUFDLElBQUViLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQ1MsTUFBTSxJQUFFVCxDQUFDLENBQUNjLFFBQVEsQ0FBQyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBQyxJQUFJO0lBQUMsU0FBU0osQ0FBQyxDQUFDUixDQUFDLEVBQUM7TUFBQ0EsQ0FBQyxDQUFDYSxLQUFLLENBQUNoQixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUNpQixRQUFRLENBQUMsYUFBYSxDQUFDLENBQUNBLFFBQVEsQ0FBQ2QsQ0FBQyxDQUFDZSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUUsRUFBRSxDQUFDLENBQUNELFFBQVEsQ0FBQ2QsQ0FBQyxDQUFDZSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQyxDQUFDQSxJQUFJLENBQUMsVUFBVSxFQUFDZixDQUFDLENBQUNlLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO01BQUMsSUFBSVIsQ0FBQyxHQUFDUixDQUFDLENBQUNHLElBQUksRUFBRTtRQUFDRCxDQUFDLEdBQUNGLENBQUMsQ0FBQ2lCLElBQUksQ0FBQyxRQUFRLENBQUM7UUFBQ2IsQ0FBQyxHQUFDSixDQUFDLENBQUNpQixJQUFJLENBQUMsaUJBQWlCLENBQUM7TUFBQ1QsQ0FBQyxDQUFDUyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNELElBQUksQ0FBQ1osQ0FBQyxDQUFDYyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUVkLENBQUMsQ0FBQ2UsSUFBSSxFQUFFLENBQUMsRUFBQ2pCLENBQUMsQ0FBQ0QsSUFBSSxDQUFFLFVBQVNELENBQUMsRUFBQztRQUFDLElBQUlFLENBQUMsR0FBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQztVQUFDTyxDQUFDLEdBQUNGLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyxTQUFTLENBQUM7UUFBQ1YsQ0FBQyxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUNHLE1BQU0sQ0FBQ3ZCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ2tCLElBQUksQ0FBQyxZQUFZLEVBQUNiLENBQUMsQ0FBQ21CLEdBQUcsRUFBRSxDQUFDLENBQUNOLElBQUksQ0FBQyxjQUFjLEVBQUNYLENBQUMsSUFBRSxJQUFJLENBQUMsQ0FBQ1UsUUFBUSxDQUFDLFFBQVEsSUFBRVosQ0FBQyxDQUFDb0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFDLFdBQVcsR0FBQyxFQUFFLENBQUMsSUFBRXBCLENBQUMsQ0FBQ29CLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ04sSUFBSSxDQUFDZCxDQUFDLENBQUNpQixJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFFO0lBQUE7SUFBQyxJQUFJLENBQUNJLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQ3RCLElBQUksQ0FBRSxZQUFVO01BQUMsSUFBSUQsQ0FBQyxHQUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO01BQUNHLENBQUMsQ0FBQ0csSUFBSSxFQUFFLENBQUNFLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBRUcsQ0FBQyxDQUFDUixDQUFDLENBQUM7SUFBQSxDQUFDLENBQUUsRUFBQ0gsQ0FBQyxDQUFDYyxRQUFRLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFDZixDQUFDLENBQUNjLFFBQVEsQ0FBQyxDQUFDYSxFQUFFLENBQUMsbUJBQW1CLEVBQUMsY0FBYyxFQUFFLFVBQVN4QixDQUFDLEVBQUM7TUFBQyxJQUFJUSxDQUFDLEdBQUNYLENBQUMsQ0FBQyxJQUFJLENBQUM7TUFBQ0EsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDNEIsR0FBRyxDQUFDakIsQ0FBQyxDQUFDLENBQUNrQixXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUNsQixDQUFDLENBQUNtQixXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUNuQixDQUFDLENBQUNILFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBRUcsQ0FBQyxDQUFDUyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUNULENBQUMsQ0FBQ1MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDUyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUNsQixDQUFDLENBQUNTLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQ0gsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFFTixDQUFDLENBQUNvQixLQUFLLEVBQUU7SUFBQSxDQUFDLENBQUUsRUFBQy9CLENBQUMsQ0FBQ2MsUUFBUSxDQUFDLENBQUNhLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFTeEIsQ0FBQyxFQUFDO01BQUMsQ0FBQyxLQUFHSCxDQUFDLENBQUNHLENBQUMsQ0FBQzZCLE1BQU0sQ0FBQyxDQUFDQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUN4QixNQUFNLElBQUVULENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQzZCLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUFBLENBQUMsQ0FBRSxFQUFDcEIsQ0FBQyxDQUFDYyxRQUFRLENBQUMsQ0FBQ2EsRUFBRSxDQUFDLG1CQUFtQixFQUFDLHFDQUFxQyxFQUFFLFVBQVN4QixDQUFDLEVBQUM7TUFBQyxJQUFJUSxDQUFDLEdBQUNYLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFBQ0ssQ0FBQyxHQUFDTSxDQUFDLENBQUNzQixPQUFPLENBQUMsY0FBYyxDQUFDO01BQUM1QixDQUFDLENBQUNlLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQ1MsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFDbEIsQ0FBQyxDQUFDTSxRQUFRLENBQUMsVUFBVSxDQUFDO01BQUMsSUFBSVYsQ0FBQyxHQUFDSSxDQUFDLENBQUNVLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBRVYsQ0FBQyxDQUFDVyxJQUFJLEVBQUU7TUFBQ2pCLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDRSxJQUFJLENBQUNmLENBQUMsQ0FBQyxFQUFDRixDQUFDLENBQUM2QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNWLEdBQUcsQ0FBQ2IsQ0FBQyxDQUFDVSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQ1QsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUFBLENBQUMsQ0FBRSxFQUFDWixDQUFDLENBQUNjLFFBQVEsQ0FBQyxDQUFDYSxFQUFFLENBQUMscUJBQXFCLEVBQUMsY0FBYyxFQUFFLFVBQVN4QixDQUFDLEVBQUM7TUFBQyxJQUFJUSxDQUFDLEdBQUNYLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFBQ0ssQ0FBQyxHQUFDTCxDQUFDLENBQUNXLENBQUMsQ0FBQ1MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFFVCxDQUFDLENBQUNTLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO01BQUMsSUFBRyxFQUFFLElBQUVqQixDQUFDLENBQUNnQyxPQUFPLElBQUUsRUFBRSxJQUFFaEMsQ0FBQyxDQUFDZ0MsT0FBTyxFQUFDLE9BQU94QixDQUFDLENBQUNILFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBQ0gsQ0FBQyxDQUFDTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUNELENBQUMsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQztNQUFDLElBQUcsRUFBRSxJQUFFVCxDQUFDLENBQUNnQyxPQUFPLEVBQUM7UUFBQyxJQUFHeEIsQ0FBQyxDQUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUM7VUFBQyxJQUFJRCxDQUFDLEdBQUNGLENBQUMsQ0FBQytCLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDQyxLQUFLLEVBQUU7VUFBQzlCLENBQUMsQ0FBQ0UsTUFBTSxHQUFDLENBQUMsS0FBR0UsQ0FBQyxDQUFDUyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNTLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBQ3RCLENBQUMsQ0FBQ1UsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQUEsQ0FBQyxNQUFLTixDQUFDLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFBQyxPQUFNLENBQUMsQ0FBQztNQUFBO01BQUMsSUFBRyxFQUFFLElBQUVULENBQUMsQ0FBQ2dDLE9BQU8sRUFBQztRQUFDLElBQUd4QixDQUFDLENBQUNILFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQztVQUFDLElBQUk4QixDQUFDLEdBQUNqQyxDQUFDLENBQUNrQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQ0YsS0FBSyxFQUFFO1VBQUNDLENBQUMsQ0FBQzdCLE1BQU0sR0FBQyxDQUFDLEtBQUdFLENBQUMsQ0FBQ1MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDUyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUNTLENBQUMsQ0FBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUFBLENBQUMsTUFBS04sQ0FBQyxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQUMsT0FBTSxDQUFDLENBQUM7TUFBQTtNQUFDLElBQUcsRUFBRSxJQUFFVCxDQUFDLENBQUNnQyxPQUFPLEVBQUN4QixDQUFDLENBQUNILFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBRUcsQ0FBQyxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFHLENBQUMsSUFBRVQsQ0FBQyxDQUFDZ0MsT0FBTyxJQUFFeEIsQ0FBQyxDQUFDSCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTSxDQUFDLENBQUM7SUFBQSxDQUFDLENBQUU7SUFBQyxJQUFJSCxDQUFDLEdBQUNTLFFBQVEsQ0FBQzBCLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsS0FBSztJQUFDLE9BQU9wQyxDQUFDLENBQUNxQyxPQUFPLEdBQUMscUJBQXFCLEVBQUMsTUFBTSxLQUFHckMsQ0FBQyxDQUFDc0MsYUFBYSxJQUFFM0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDaUIsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEVBQUMsSUFBSTtFQUFBLENBQUM7QUFBQSxDQUFDLENBQUNsQiwrQ0FBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeHVGO0FBQzVCO0FBQUMsQ0FBQyxVQUFVNkMsQ0FBQyxFQUFFO0VBRWQsWUFBWTs7RUFFWixJQUFJQyxLQUFLLEdBQUc7SUFDWEMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUVUQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBRVhDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFWDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDRUMsSUFBSSxFQUFFLGNBQVVDLE9BQU8sRUFBRTtNQUN4QixPQUFPLElBQUksQ0FBQzlDLElBQUksQ0FBQyxZQUFZO1FBQzVCd0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFVBQVVDLEtBQUssRUFBRTtVQUMxRUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDdEJWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1csU0FBUyxDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNILENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDRU0sS0FBSyxFQUFFLGVBQVVOLE9BQU8sRUFBRTtNQUN6QkwsS0FBSyxDQUFDWSxNQUFNLEdBQUdGLFNBQVMsQ0FBQ0UsTUFBTSxHQUFHLElBQUk7TUFFdENaLEtBQUssQ0FBQ2EsUUFBUSxHQUFHSCxTQUFTLENBQUNHLFFBQVEsR0FBR2QsQ0FBQyxDQUFDZSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BEQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsV0FBVyxFQUFFLFlBQVk7UUFDekJDLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxVQUFVLEVBQUUsU0FBUztRQUNyQkMsY0FBYyxFQUFFLElBQUk7UUFDcEJDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxZQUFZLEVBQUUsSUFBSTtRQUNsQkMsYUFBYSxFQUFFLElBQUk7UUFDbkJDLGNBQWMsRUFBRSxJQUFJO1FBQ3BCQyxPQUFPLEVBQUUsR0FBRztRQUNaQyxRQUFRLEVBQUUsR0FBRztRQUNiQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxRQUFRLEVBQUUsR0FBRztRQUNiQyxTQUFTLEVBQUUsR0FBRztRQUNkQyxVQUFVLEVBQUUsS0FBSztRQUNqQkMsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyx1QkFBdUIsRUFBRSxJQUFJO1FBQzdCQyxxQkFBcUIsRUFBRSwrQ0FBK0M7UUFDdEVDLGFBQWEsRUFBRSxLQUFLO1FBQ3BCQyxVQUFVLEVBQUUsSUFBSTtRQUNoQkMsWUFBWSxFQUFFLEdBQUc7UUFDakJDLGNBQWMsRUFBRSxFQUFFO1FBQ2xCQyxTQUFTLEVBQUUsS0FBSztRQUNoQkMsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QkMsZUFBZSxFQUFFLEtBQUs7UUFDdEJDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLEtBQUssRUFBRSxJQUFJO1FBQ1hDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxlQUFlLEVBQUUsS0FBSztRQUN0QkMsZUFBZSxFQUFFLElBQUk7UUFDckJDLG1CQUFtQixFQUFFLElBQUk7UUFDekJDLEtBQUssRUFBRSxJQUFJO1FBQ1hDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLFNBQVMsRUFBRSxJQUFJO1FBQ2ZDLFdBQVcsRUFBRSxJQUFJO1FBQ2pCQyxnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCQyxNQUFNLEVBQUU7VUFDUDVCLEtBQUssRUFBRSxNQUFNO1VBQ2JDLE1BQU0sRUFBRTtRQUNULENBQUM7UUFDRDRCLElBQUksRUFBRTtVQUNMN0IsS0FBSyxFQUFFLE1BQU07VUFDYkMsTUFBTSxFQUFFLE1BQU07VUFDZDZCLElBQUksRUFBRSxLQUFLO1VBQ1hDLFFBQVEsRUFBRSxNQUFNO1VBQ2hCakYsSUFBSSxFQUFFLENBQUM7UUFDUixDQUFDO1FBQ0RrRixNQUFNLEVBQUU7VUFDUGhDLEtBQUssRUFBRSxHQUFHO1VBQ1ZDLE1BQU0sRUFBRSxHQUFHO1VBQ1hnQyxXQUFXLEVBQUU7UUFDZCxDQUFDO1FBQ0RDLEtBQUssRUFBRTtVQUNObEMsS0FBSyxFQUFFLEdBQUc7VUFDVkMsTUFBTSxFQUFFLEdBQUc7VUFDWGtDLEtBQUssRUFBRTtRQUNSLENBQUM7UUFDREMsS0FBSyxFQUFFO1VBQ05wQyxLQUFLLEVBQUUsR0FBRztVQUNWQyxNQUFNLEVBQUUsR0FBRztVQUNYb0MsTUFBTSxFQUFFLEVBQUU7VUFDVkMsT0FBTyxFQUFFLE1BQU07VUFDZkMsUUFBUSxFQUFFLElBQUk7VUFDZEMsVUFBVSxFQUFFLElBQUk7VUFDaEJDLFFBQVEsRUFBRSxJQUFJO1VBQ2RDLElBQUksRUFBRTtRQUNQLENBQUM7UUFDRC9GLElBQUksRUFBRSxVQUFVO1FBQ2hCZ0csSUFBSSxFQUFFLElBQUk7UUFDVmIsSUFBSSxFQUFFLElBQUk7UUFDVmMsV0FBVyxFQUFFO1VBQ1osT0FBTyxFQUFFLHNCQUFzQjtVQUMvQixPQUFPLEVBQUUsS0FBSztVQUNkLE9BQU8sRUFBRSxzQkFBc0I7VUFDL0IsUUFBUSxFQUFFLFVBQVU7VUFDcEIsTUFBTSxFQUFFLFVBQVU7VUFDbEIsUUFBUSxFQUFFO1FBQ1gsQ0FBQztRQUNEQyxZQUFZLEVBQUUsd0JBQVk7VUFDekIsT0FBTyxZQUFZLEdBQUd2RSxLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLFNBQVMsR0FBR2hCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDMkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU07UUFDOUcsQ0FBQztRQUNEQSxNQUFNLEVBQUU7VUFDUCxjQUFjLEVBQUUsOEJBQThCO1VBQzlDLGlCQUFpQixFQUFFLE1BQU07VUFDekIsT0FBTyxFQUFFLE9BQU87VUFDaEIsZ0JBQWdCLEVBQUUsTUFBTTtVQUN4QixnQkFBZ0IsRUFBRSxNQUFNO1VBQ3ZCLGdCQUFnQixFQUFFLE1BQU07VUFDekIsaUJBQWlCLEVBQUU7UUFDcEIsQ0FBQztRQUNEQyxNQUFNLEVBQUUsa0JBQVk7VUFDbkJ6RSxLQUFLLENBQUNHLE9BQU8sQ0FBQ3VFLElBQUksQ0FBQ2hHLE1BQU0sQ0FDeEJzQixLQUFLLENBQUNHLE9BQU8sQ0FBQ3dFLE9BQU8sR0FBRzVFLENBQUMsQ0FBQyxXQUFXLEdBQUdDLEtBQUssQ0FBQ2EsUUFBUSxDQUFDRSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsRUFDcEZmLEtBQUssQ0FBQ0csT0FBTyxDQUFDeUUsT0FBTyxHQUFHN0UsQ0FBQyxDQUFDLFdBQVcsR0FBR0MsS0FBSyxDQUFDYSxRQUFRLENBQUNFLFFBQVEsR0FBRyxrQkFBa0IsR0FBR2YsS0FBSyxDQUFDYSxRQUFRLENBQUNHLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxFQUN4SWhCLEtBQUssQ0FBQ0csT0FBTyxRQUFLLEdBQUdKLENBQUMsQ0FBQyxXQUFXLEdBQUdDLEtBQUssQ0FBQ2EsUUFBUSxDQUFDRSxRQUFRLEdBQUcsK0NBQStDLENBQUMsQ0FDL0c7VUFDRGYsS0FBSyxDQUFDRyxPQUFPLFFBQUssQ0FBQ2hDLEtBQUssQ0FDdkI2QixLQUFLLENBQUNHLE9BQU8sQ0FBQzBFLEtBQUssR0FBRzlFLENBQUMsQ0FBQyxxQkFBcUIsR0FBR0MsS0FBSyxDQUFDYSxRQUFRLENBQUNHLFdBQVcsR0FBRyxvQkFBb0IsR0FBR2hCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDMkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxFQUNuSnhFLEtBQUssQ0FBQ0csT0FBTyxDQUFDMkUsR0FBRyxHQUFHL0UsQ0FBQyxDQUFDLFdBQVcsR0FBR0MsS0FBSyxDQUFDYSxRQUFRLENBQUNFLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FDNUU7VUFDRGYsS0FBSyxDQUFDRyxPQUFPLENBQUMyRSxHQUFHLENBQUNwRyxNQUFNLENBQ3ZCc0IsS0FBSyxDQUFDRyxPQUFPLENBQUNkLElBQUksR0FBR1UsQ0FBQyxDQUFDLHFCQUFxQixHQUFHQyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLG1CQUFtQixHQUFHaEIsS0FBSyxDQUFDYSxRQUFRLENBQUMyRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQzNGLElBQUksRUFBRSxFQUNqS21CLEtBQUssQ0FBQ0csT0FBTyxDQUFDMUMsSUFBSSxHQUFHc0MsQ0FBQyxDQUFDLHFCQUFxQixHQUFHQyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLG1CQUFtQixHQUFHaEIsS0FBSyxDQUFDYSxRQUFRLENBQUMyRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQzNGLElBQUksRUFBRSxFQUNqS21CLEtBQUssQ0FBQ0csT0FBTyxDQUFDNEUsSUFBSSxHQUFHaEYsQ0FBQyxDQUFDLHFCQUFxQixHQUFHQyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLG1CQUFtQixHQUFHaEIsS0FBSyxDQUFDYSxRQUFRLENBQUMyRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQzNGLElBQUksRUFBRSxFQUNqS21CLEtBQUssQ0FBQ0csT0FBTyxDQUFDNkUsS0FBSyxHQUFHakYsQ0FBQyxDQUFDLHFCQUFxQixHQUFHQyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLG9CQUFvQixHQUFHaEIsS0FBSyxDQUFDYSxRQUFRLENBQUMyRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQzNGLElBQUksRUFBRSxDQUNwSztVQUNEbUIsS0FBSyxDQUFDRyxPQUFPLFFBQUssQ0FBQ3pCLE1BQU0sQ0FDeEJzQixLQUFLLENBQUNHLE9BQU8sQ0FBQzhFLE9BQU8sR0FBR2xGLENBQUMsQ0FBQyxXQUFXLEdBQUdDLEtBQUssQ0FBQ2EsUUFBUSxDQUFDRSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsRUFDcEZmLEtBQUssQ0FBQ0csT0FBTyxDQUFDK0UsSUFBSSxHQUFHbkYsQ0FBQyxDQUFDLFdBQVcsR0FBR0MsS0FBSyxDQUFDYSxRQUFRLENBQUNFLFFBQVEsR0FBRyxjQUFjLENBQUMsQ0FDOUU7VUFDRGYsS0FBSyxDQUFDRyxPQUFPLENBQUM4RSxPQUFPLENBQUN2RyxNQUFNLENBQzNCc0IsS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLEdBQUdwRixDQUFDLENBQUMsY0FBYyxHQUFHQyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLHNCQUFzQixDQUFDLENBQ3BHO1VBQ0RoQixLQUFLLENBQUNHLE9BQU8sQ0FBQytFLElBQUksQ0FBQ3hHLE1BQU0sQ0FDeEJzQixLQUFLLENBQUNHLE9BQU8sQ0FBQ2lGLFlBQVksR0FBR3JGLENBQUMsQ0FBQyxXQUFXLEdBQUdDLEtBQUssQ0FBQ2EsUUFBUSxDQUFDRSxRQUFRLEdBQUcsc0JBQXNCLENBQUMsRUFDOUZmLEtBQUssQ0FBQ0csT0FBTyxDQUFDOEMsS0FBSyxHQUFHbEQsQ0FBQyxDQUFDLFVBQVUsR0FBR0MsS0FBSyxDQUFDYSxRQUFRLENBQUNFLFFBQVEsR0FBRyxjQUFjLENBQUMsRUFDOUVmLEtBQUssQ0FBQ0csT0FBTyxDQUFDK0MsT0FBTyxHQUFHbkQsQ0FBQyxDQUFDLFNBQVMsR0FBR0MsS0FBSyxDQUFDYSxRQUFRLENBQUNFLFFBQVEsR0FBRyxlQUFlLENBQUMsQ0FDaEY7UUFDRixDQUFDO1FBQ0RzRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ1ZDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDWEMsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO1FBQy9CQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7UUFDOUJDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDaEJDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDWkMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ1hDLFNBQVMsRUFBRSxDQUFDO01BQ2IsQ0FBQyxFQUNEeEYsT0FBTztNQUNQO01BQ0FMLEtBQUssQ0FBQ1ksTUFBTSxDQUFDcEMsSUFBSSxHQUFHd0IsS0FBSyxDQUFDWSxNQUFNLENBQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFFekR3QixLQUFLLENBQUNHLE9BQU8sQ0FBQ2xDLFFBQVEsR0FBRzhCLENBQUMsQ0FBQyxNQUFNLENBQUM7TUFDbENDLEtBQUssQ0FBQ0csT0FBTyxDQUFDdUUsSUFBSSxHQUFHM0UsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7TUFFOUI7TUFDQUMsS0FBSyxDQUFDOEYsVUFBVSxDQUFDOUYsS0FBSyxDQUFDYSxRQUFRLENBQUN3RSxNQUFNLENBQUM7TUFFdkNyRixLQUFLLENBQUMrRixVQUFVLEdBQUcvRixLQUFLLENBQUNnRyxjQUFjLENBQUMsSUFBSSxDQUFDO01BRTdDaEcsS0FBSyxDQUFDaUcsWUFBWSxFQUFFO01BQ3BCakcsS0FBSyxDQUFDa0csS0FBSyxFQUFFO01BRWJsRyxLQUFLLENBQUNtRyxVQUFVLEdBQUduRyxLQUFLLENBQUNvRyxxQkFBcUIsRUFBRTtJQUNqRCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0VDLEdBQUcsRUFBRSxhQUFVQyxJQUFJLEVBQUU7TUFDcEIsT0FBT3RHLEtBQUssQ0FBQ0csT0FBTyxDQUFDbUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0lBQ0VDLGFBQWEsRUFBRSx5QkFBWTtNQUMxQixPQUFPdkcsS0FBSyxDQUFDK0YsVUFBVTtJQUN4QixDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0VDLGNBQWMsRUFBRSx3QkFBVVEsTUFBTSxFQUFFO01BQ2hDLElBQUlDLE9BQU8sR0FBRzFHLENBQUMsQ0FBQ3lHLE1BQU0sQ0FBQztRQUN2QlQsVUFBVSxHQUFHO1VBQ2IsUUFBTWhHLENBQUMsQ0FBQ3lHLE1BQU0sQ0FBQztVQUNmdkQsS0FBSyxFQUFFakQsS0FBSyxDQUFDYSxRQUFRLENBQUNvQyxLQUFLLElBQUl3RCxPQUFPLENBQUNwSSxJQUFJLENBQUMyQixLQUFLLENBQUMwRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJRCxPQUFPLENBQUNwSSxJQUFJLENBQUMsT0FBTyxDQUFDO1VBQ3pHNkUsT0FBTyxFQUFFbEQsS0FBSyxDQUFDYSxRQUFRLENBQUNxQyxPQUFPLElBQUl1RCxPQUFPLENBQUNwSSxJQUFJLENBQUMyQixLQUFLLENBQUMwRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJRCxPQUFPLENBQUNFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQ3RJLElBQUksQ0FBQyxLQUFLLENBQUM7VUFDN0h1SSxHQUFHLEVBQUU1RyxLQUFLLENBQUM2RyxhQUFhLEVBQUU7VUFDMUJDLFdBQVcsRUFBRTlHLEtBQUssQ0FBQ2EsUUFBUSxDQUFDMEMsSUFBSSxDQUFDQyxJQUFJO1VBQ3JDdUQsV0FBVyxFQUFFL0csS0FBSyxDQUFDYSxRQUFRLENBQUMwQyxJQUFJLENBQUMvRSxJQUFJO1VBQ3JDd0ksZUFBZSxFQUFFaEgsS0FBSyxDQUFDYSxRQUFRLENBQUMwQyxJQUFJLENBQUNFLFFBQVE7VUFDN0N3RCxHQUFHLEVBQUVSLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQzJCLEtBQUssQ0FBQ2tILDJCQUEyQixFQUFFLENBQUM7VUFDdEQxRCxJQUFJLEVBQUV4RCxLQUFLLENBQUNhLFFBQVEsQ0FBQzJDLElBQUksSUFBSXhELEtBQUssQ0FBQ21ILGVBQWUsQ0FBQ25ILEtBQUssQ0FBQzZHLGFBQWEsRUFBRSxDQUFDO1VBQ3pFTyxnQkFBZ0IsRUFBRXBILEtBQUssQ0FBQ2EsUUFBUSxDQUFDaUMsZUFBZSxJQUFJOUMsS0FBSyxDQUFDcUgsaUJBQWlCLENBQUNaLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQzJCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDeEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ25IaUosNkJBQTZCLEVBQUV0SCxLQUFLLENBQUNxSCxpQkFBaUIsQ0FBQ1osT0FBTyxDQUFDcEksSUFBSSxDQUFDMkIsS0FBSyxDQUFDYSxRQUFRLENBQUN4QyxJQUFJLENBQUMsRUFBRSxZQUFZLENBQUM7VUFDdkdrSixZQUFZLEVBQUV4SCxDQUFDLENBQUNDLEtBQUssQ0FBQ2tILDJCQUEyQixFQUFFLENBQUMsQ0FBQ00sS0FBSyxDQUFDZixPQUFPLENBQUM7VUFDbkVnQixjQUFjLEVBQUUxSCxDQUFDLENBQUNDLEtBQUssQ0FBQ2tILDJCQUEyQixFQUFFLENBQUMsQ0FBQ3RKO1FBQ3hELENBQUM7O01BRUQ7TUFDQW1JLFVBQVUsQ0FBQ1gsWUFBWSxHQUFJVyxVQUFVLENBQUN3QixZQUFZLEdBQUcsQ0FBQyxHQUFJdkgsS0FBSyxDQUFDYSxRQUFRLENBQUMyRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBR3VCLFVBQVUsQ0FBQzBCLGNBQWM7O01BRTlIO01BQ0ExQixVQUFVLENBQUMyQixTQUFTLEdBQUczQixVQUFVLENBQUN3QixZQUFZLEdBQUcsQ0FBQztNQUNsRHhCLFVBQVUsQ0FBQzRCLFNBQVMsR0FBRzVCLFVBQVUsQ0FBQ3dCLFlBQVksR0FBRyxDQUFDO01BRWxELE9BQU94QixVQUFVO0lBQ2xCLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNFVyxvQkFBb0IsRUFBRSw4QkFBVUosSUFBSSxFQUFFO01BQ3JDLE9BQU8sT0FBTyxHQUFHdEcsS0FBSyxDQUFDYSxRQUFRLENBQUNJLFVBQVUsR0FBR3FGLElBQUk7SUFDbEQsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNFc0Isb0JBQW9CLEVBQUUsZ0NBQVk7TUFDakMsT0FBTzVILEtBQUssQ0FBQ2EsUUFBUSxDQUFDd0QsSUFBSSxJQUFJdEUsQ0FBQyxDQUFDQyxLQUFLLENBQUNZLE1BQU0sQ0FBQyxDQUFDdkMsSUFBSSxDQUFDMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSTNHLENBQUMsQ0FBQ0MsS0FBSyxDQUFDWSxNQUFNLENBQUMsQ0FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkgsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNFNkksMkJBQTJCLEVBQUUsdUNBQVk7TUFDeEMsSUFBSVcsT0FBTyxHQUFHOUgsQ0FBQyxDQUFDQyxLQUFLLENBQUNZLE1BQU0sQ0FBQztRQUM1QmtILFFBQVEsR0FBRyxFQUFFO01BRWQsSUFBSSxPQUFPOUgsS0FBSyxDQUFDQyxLQUFLLENBQUM2SCxRQUFRLEtBQUssV0FBVyxFQUFFO1FBQ2hEQSxRQUFRLEdBQUc5SCxLQUFLLENBQUNDLEtBQUssQ0FBQzZILFFBQVE7TUFDaEMsQ0FBQyxNQUFNLElBQUk5SCxLQUFLLENBQUNhLFFBQVEsQ0FBQ2dDLGFBQWEsS0FBSyxJQUFJLElBQUlnRixPQUFPLENBQUN4SixJQUFJLENBQUMyQixLQUFLLENBQUMwRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFO1FBQzNHLElBQUlxQixVQUFVLEdBQUdGLE9BQU8sQ0FBQ3hKLElBQUksQ0FBQzJCLEtBQUssQ0FBQzBHLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUNzQixLQUFLLENBQUMsR0FBRyxDQUFDO1FBRWxGakksQ0FBQyxDQUFDeEMsSUFBSSxDQUFDd0ssVUFBVSxFQUFFLFVBQVVQLEtBQUssRUFBRVMsUUFBUSxFQUFFO1VBQzdDLElBQUlULEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDZE0sUUFBUSxJQUFJLEdBQUc7VUFDaEI7VUFDQUEsUUFBUSxJQUFJLEdBQUcsR0FBRzlILEtBQUssQ0FBQzBHLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBR3VCLFFBQVEsR0FBRyxJQUFJO1FBQ3JGLENBQUMsQ0FBQztNQUNILENBQUMsTUFBTTtRQUNOSCxRQUFRLEdBQUcsR0FBRyxHQUFHOUgsS0FBSyxDQUFDYSxRQUFRLENBQUN4QyxJQUFJLEdBQUcsSUFBSSxHQUFHd0osT0FBTyxDQUFDeEosSUFBSSxDQUFDMkIsS0FBSyxDQUFDYSxRQUFRLENBQUN4QyxJQUFJLENBQUMsR0FBRyxJQUFJO01BQ3ZGO01BRUEyQixLQUFLLENBQUNDLEtBQUssQ0FBQzZILFFBQVEsR0FBR0EsUUFBUTtNQUUvQixPQUFPQSxRQUFRO0lBQ2hCLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDRWpCLGFBQWEsRUFBRSx5QkFBWTtNQUMxQixJQUFJcUIsT0FBTyxHQUFHbEksS0FBSyxDQUFDbUksY0FBYyxDQUFDbkksS0FBSyxDQUFDNEgsb0JBQW9CLEVBQUUsQ0FBQztRQUMvRGxHLEtBQUssR0FBRyxDQUFDO1FBQ1QwRyxPQUFPLEdBQUcsQ0FBQztRQUNYQyxZQUFZLEdBQUcsRUFBRTtRQUNqQnpCLEdBQUc7TUFFSjdHLENBQUMsQ0FBQ3hDLElBQUksQ0FBQzJLLE9BQU8sRUFBRSxVQUFVVixLQUFLLEVBQUVjLEdBQUcsRUFBRTtRQUNyQyxRQUFRdEksS0FBSyxDQUFDbUgsZUFBZSxDQUFDbUIsR0FBRyxDQUFDMUIsR0FBRyxDQUFDO1VBQ3JDLEtBQUssT0FBTztZQUNYLElBQUk5QyxLQUFLLEdBQUc3RixRQUFRLENBQUMwQixhQUFhLENBQUMsT0FBTyxDQUFDO2NBQzFDNEksU0FBUyxHQUFHdkksS0FBSyxDQUFDbUgsZUFBZSxDQUFDbUIsR0FBRyxDQUFDMUIsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHNUcsS0FBSyxDQUFDd0ksaUJBQWlCLENBQUNGLEdBQUcsQ0FBQzFCLEdBQUcsQ0FBQzs7WUFFcEY7WUFDQSxJQUFJeUIsWUFBWSxLQUFLLFVBQVUsSUFBSUEsWUFBWSxLQUFLdkUsS0FBSyxDQUFDMkUsV0FBVyxDQUFDRixTQUFTLENBQUMsSUFBSXpFLEtBQUssQ0FBQzJFLFdBQVcsQ0FBQ0YsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFO2NBQ3hIRixZQUFZLEdBQUd2RSxLQUFLLENBQUMyRSxXQUFXLENBQUNGLFNBQVMsQ0FBQztjQUMzQzNCLEdBQUcsR0FBRzBCLEdBQUcsQ0FBQzFCLEdBQUc7WUFDZDtZQUNBO1VBQ0Q7WUFDQztZQUNDO1lBQ0E1RyxLQUFLLENBQUMwSSxpQkFBaUIsRUFBRSxJQUFJSixHQUFHLENBQUNGLE9BQU8sSUFDeENFLEdBQUcsQ0FBQ0YsT0FBTyxJQUFJQSxPQUFPO1lBQ3RCO1lBQ0FwSSxLQUFLLENBQUMySSxXQUFXLEVBQUUsQ0FBQyx3QkFBd0IsR0FBR0wsR0FBRyxDQUFDNUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDa0gsT0FBTyxJQUN6RU4sR0FBRyxDQUFDNUcsS0FBSyxJQUFJQSxLQUFLLEVBQ2pCO2NBQ0RBLEtBQUssR0FBRzRHLEdBQUcsQ0FBQzVHLEtBQUs7Y0FDakIwRyxPQUFPLEdBQUdFLEdBQUcsQ0FBQ0YsT0FBTztjQUNyQnhCLEdBQUcsR0FBRzBCLEdBQUcsQ0FBQzFCLEdBQUc7WUFDZDtZQUNBO1FBQU07TUFFVCxDQUFDLENBQUM7TUFFRixPQUFPQSxHQUFHO0lBQ1gsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0VpQyxhQUFhLEVBQUUsdUJBQVVqQyxHQUFHLEVBQUU7TUFDN0IsSUFBSWtDLE1BQU0sR0FBRyxPQUFPO01BRXBCLE9BQU9sQyxHQUFHLENBQUNvQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNlLEdBQUcsQ0FBQyxVQUFVQyxHQUFHLEVBQUU7UUFDeEMsSUFBSVYsR0FBRyxHQUFHO1VBQ1Q1RyxLQUFLLEVBQUUsQ0FBQztVQUNSMEcsT0FBTyxFQUFFO1FBQ1YsQ0FBQztRQUVEWSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDa0IsT0FBTyxDQUFDLFVBQVV0QyxHQUFHLEVBQUVsSixDQUFDLEVBQUU7VUFDakQsSUFBSUEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNaLE9BQU80SyxHQUFHLENBQUMxQixHQUFHLEdBQUdBLEdBQUc7VUFDckI7VUFFQSxJQUFJdUMsS0FBSyxHQUFHdkMsR0FBRyxDQUFDd0MsU0FBUyxDQUFDLENBQUMsRUFBRXhDLEdBQUcsQ0FBQ2hKLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDM0N5TCxRQUFRLEdBQUd6QyxHQUFHLENBQUNBLEdBQUcsQ0FBQ2hKLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUIwTCxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0osS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUM1QkssUUFBUSxHQUFHQyxVQUFVLENBQUNOLEtBQUssQ0FBQztVQUM3QixJQUFJRSxRQUFRLEtBQUssR0FBRyxJQUFJUCxNQUFNLENBQUNZLElBQUksQ0FBQ1AsS0FBSyxDQUFDLEVBQUU7WUFDM0NiLEdBQUcsQ0FBQzVHLEtBQUssR0FBRzRILE1BQU07VUFDbkIsQ0FBQyxNQUFNLElBQUlELFFBQVEsS0FBSyxHQUFHLElBQUlQLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDUCxLQUFLLENBQUMsRUFBRTtZQUNsRGIsR0FBRyxDQUFDM0csTUFBTSxHQUFHMkgsTUFBTTtVQUNwQixDQUFDLE1BQU0sSUFBSUQsUUFBUSxLQUFLLEdBQUcsSUFBSSxDQUFDTSxLQUFLLENBQUNILFFBQVEsQ0FBQyxFQUFFO1lBQ2hEbEIsR0FBRyxDQUFDRixPQUFPLEdBQUdvQixRQUFRO1VBQ3ZCO1FBQ0QsQ0FBQyxDQUFDO1FBRUYsT0FBT2xCLEdBQUc7TUFDWCxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDRWpCLGlCQUFpQixFQUFFLDJCQUFVSixHQUFHLEVBQUUyQyxVQUFVLEVBQUU7TUFDN0MsSUFBSUMsZUFBZSxHQUFHOUosQ0FBQyxDQUFDLEdBQUcsR0FBR0MsS0FBSyxDQUFDYSxRQUFRLENBQUN4QyxJQUFJLEdBQUcsSUFBSSxHQUFHNEksR0FBRyxHQUFHLElBQUksQ0FBQztRQUNyRTZDLE1BQU0sR0FBRyxJQUFJQyxNQUFNLENBQUNILFVBQVUsQ0FBQztNQUVoQyxPQUFRRSxNQUFNLENBQUNKLElBQUksQ0FBQ3pDLEdBQUcsQ0FBQyxJQUFJNEMsZUFBZSxDQUFDak0sTUFBTSxHQUFHLENBQUM7SUFDdkQsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRW9NLGtCQUFrQixFQUFFLDhCQUFZO01BQy9CLE9BQVFoSyxLQUFLLENBQUMrRixVQUFVLENBQUNxQixnQkFBZ0IsS0FBS3BILEtBQUssQ0FBQ2EsUUFBUSxDQUFDMEIsU0FBUyxLQUFLLElBQUksSUFBSXZDLEtBQUssQ0FBQytGLFVBQVUsQ0FBQ3VCLDZCQUE2QixLQUFLLElBQUksQ0FBQztJQUM1SSxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFMkMsWUFBWSxFQUFFLHdCQUFZO01BQ3pCLElBQUlqSyxLQUFLLENBQUNDLEtBQUssQ0FBQ2lLLGNBQWMsRUFBRTtRQUMvQmxLLEtBQUssQ0FBQ21LLGNBQWMsRUFBRTtNQUN2QjtNQUVBbkssS0FBSyxDQUFDb0ssYUFBYSxFQUFFO0lBQ3RCLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0lBQ0VBLGFBQWEsRUFBRSx5QkFBWTtNQUMxQixJQUFJM0QsT0FBTzs7TUFFWDtNQUNBLFFBQVF6RyxLQUFLLENBQUMrRixVQUFVLENBQUN2QyxJQUFJO1FBQzVCLEtBQUssT0FBTztVQUNYaUQsT0FBTyxHQUFHMUcsQ0FBQyxDQUFDLElBQUlzSyxLQUFLLEVBQUUsQ0FBQztVQUN4QjVELE9BQU8sQ0FBQ3BJLElBQUksQ0FBQztZQUNaO1lBQ0EsS0FBSyxFQUFFMkIsS0FBSyxDQUFDK0YsVUFBVSxDQUFDYSxHQUFHO1lBQzNCLEtBQUssRUFBRTVHLEtBQUssQ0FBQytGLFVBQVUsQ0FBQzlDO1VBQ3pCLENBQUMsQ0FBQztVQUNGO1FBQ0QsS0FBSyxRQUFRO1VBQ1p3RCxPQUFPLEdBQUcxRyxDQUFDLENBQUMsY0FBYyxHQUFHQyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLG9CQUFvQixDQUFDO1VBQy9FeUYsT0FBTyxDQUFDbkksSUFBSSxDQUFDMEIsS0FBSyxDQUFDc0ssWUFBWSxDQUFDdkssQ0FBQyxDQUFDQyxLQUFLLENBQUMrRixVQUFVLENBQUNhLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1VBRXpEO1VBQ0E3RyxDQUFDLENBQUN4QyxJQUFJLENBQUN5QyxLQUFLLENBQUNhLFFBQVEsQ0FBQ3lDLE1BQU0sRUFBRSxVQUFVZ0QsSUFBSSxFQUFFNkMsS0FBSyxFQUFFO1lBQ3BEMUMsT0FBTyxDQUFDcEksSUFBSSxDQUFDMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUNKLElBQUksQ0FBQyxFQUFFNkMsS0FBSyxDQUFDO1VBQ3RELENBQUMsQ0FBQztVQUNGO1FBQ0QsS0FBSyxNQUFNO1VBQ1YxQyxPQUFPLEdBQUcxRyxDQUFDLENBQUMsY0FBYyxHQUFHQyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLG9CQUFvQixDQUFDOztVQUUvRTtVQUNBakIsQ0FBQyxDQUFDeEMsSUFBSSxDQUFDeUMsS0FBSyxDQUFDYSxRQUFRLENBQUMwQyxJQUFJLEVBQUUsVUFBVStDLElBQUksRUFBRTZDLEtBQUssRUFBRTtZQUNsRCxJQUFJN0MsSUFBSSxLQUFLLE1BQU0sRUFBRTtjQUNwQkcsT0FBTyxDQUFDcEksSUFBSSxDQUFDMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUNKLElBQUksQ0FBQyxFQUFFNkMsS0FBSyxDQUFDO1lBQ3REO1VBQ0QsQ0FBQyxDQUFDO1VBQ0Y7UUFDRCxLQUFLLE9BQU87VUFDWDFDLE9BQU8sR0FBRzFHLENBQUMsQ0FBQyxjQUFjLEdBQUdDLEtBQUssQ0FBQytGLFVBQVUsQ0FBQ2EsR0FBRyxHQUFHLGlEQUFpRCxDQUFDOztVQUV0RztVQUNBN0csQ0FBQyxDQUFDeEMsSUFBSSxDQUFDeUMsS0FBSyxDQUFDYSxRQUFRLENBQUMrQyxLQUFLLEVBQUUsVUFBVTBDLElBQUksRUFBRTZDLEtBQUssRUFBRTtZQUNuRDFDLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQ2lJLElBQUksRUFBRTZDLEtBQUssQ0FBQztVQUMxQixDQUFDLENBQUM7VUFDRjtRQUNELEtBQUssT0FBTztVQUNYMUMsT0FBTyxHQUFHMUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1VBQzlCMEcsT0FBTyxDQUFDcEksSUFBSSxDQUFDLEtBQUssRUFBRTJCLEtBQUssQ0FBQytGLFVBQVUsQ0FBQ2EsR0FBRyxDQUFDOztVQUV6QztVQUNBN0csQ0FBQyxDQUFDeEMsSUFBSSxDQUFDeUMsS0FBSyxDQUFDYSxRQUFRLENBQUNpRCxLQUFLLEVBQUUsVUFBVXdDLElBQUksRUFBRTZDLEtBQUssRUFBRTtZQUNuRDFDLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQ2lJLElBQUksRUFBRTZDLEtBQUssQ0FBQztVQUMxQixDQUFDLENBQUM7VUFDRjtRQUNEO1VBQ0MxQyxPQUFPLEdBQUcxRyxDQUFDLENBQUMsbUJBQW1CLENBQUM7VUFDaEMwRyxPQUFPLENBQUNwSSxJQUFJLENBQUM7WUFDWixLQUFLLEVBQUUyQixLQUFLLENBQUMrRixVQUFVLENBQUNhO1VBQ3pCLENBQUMsQ0FBQzs7VUFFRjtVQUNBN0csQ0FBQyxDQUFDeEMsSUFBSSxDQUFDeUMsS0FBSyxDQUFDYSxRQUFRLENBQUM2QyxNQUFNLEVBQUUsVUFBVTRDLElBQUksRUFBRTZDLEtBQUssRUFBRTtZQUNwRDFDLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQ2lJLElBQUksRUFBRTZDLEtBQUssQ0FBQztVQUMxQixDQUFDLENBQUM7VUFDRjtNQUFNO01BR1JuSixLQUFLLENBQUN1SyxVQUFVLENBQUM5RCxPQUFPLENBQUM7TUFDekJ6RyxLQUFLLENBQUN3SyxXQUFXLENBQUMvRCxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNFOEQsVUFBVSxFQUFFLG9CQUFVOUQsT0FBTyxFQUFFO01BQzlCO01BQ0F6RyxLQUFLLENBQUNHLE9BQU8sQ0FBQ2dGLFlBQVksQ0FBQzdHLElBQUksQ0FBQ21JLE9BQU8sQ0FBQzs7TUFFeEM7TUFDQXpHLEtBQUssQ0FBQ3lLLFFBQVEsQ0FBQyxPQUFPLENBQUM7O01BRXZCO01BQ0F6SyxLQUFLLENBQUM4RixVQUFVLENBQUM5RixLQUFLLENBQUNhLFFBQVEsQ0FBQ3lFLE9BQU8sQ0FBQzs7TUFFeEM7TUFDQSxJQUFJdEYsS0FBSyxDQUFDYSxRQUFRLENBQUN3QyxnQkFBZ0IsS0FBSyxJQUFJLElBQUlyRCxLQUFLLENBQUMrRixVQUFVLENBQUNxQixnQkFBZ0IsRUFBRTtRQUNsRnBILEtBQUssQ0FBQ0csT0FBTyxDQUFDaUYsWUFBWSxDQUFDOUcsSUFBSSxDQUFDMEIsS0FBSyxDQUFDK0YsVUFBVSxDQUFDWCxZQUFZLENBQUM7UUFDOURwRixLQUFLLENBQUNHLE9BQU8sQ0FBQ2lGLFlBQVksQ0FBQ3NGLElBQUksRUFBRTtNQUNsQyxDQUFDLE1BQU07UUFDTjFLLEtBQUssQ0FBQ0csT0FBTyxDQUFDaUYsWUFBWSxDQUFDdUYsS0FBSyxFQUFFO1FBQ2xDM0ssS0FBSyxDQUFDRyxPQUFPLENBQUNpRixZQUFZLENBQUN2RyxJQUFJLEVBQUU7TUFDbEM7TUFDQTtNQUNBLElBQUltQixLQUFLLENBQUNhLFFBQVEsQ0FBQ3NDLFNBQVMsS0FBSyxJQUFJLElBQUluRCxLQUFLLENBQUMrRixVQUFVLENBQUM5QyxLQUFLLEtBQUsySCxTQUFTLElBQUk1SyxLQUFLLENBQUMrRixVQUFVLENBQUM5QyxLQUFLLEtBQUssRUFBRSxFQUFFO1FBQy9HakQsS0FBSyxDQUFDRyxPQUFPLENBQUM4QyxLQUFLLENBQUMzRSxJQUFJLENBQUMwQixLQUFLLENBQUMrRixVQUFVLENBQUM5QyxLQUFLLENBQUM7UUFDaERqRCxLQUFLLENBQUNHLE9BQU8sQ0FBQzhDLEtBQUssQ0FBQ3lILElBQUksRUFBRTtNQUMzQixDQUFDLE1BQU07UUFDTjFLLEtBQUssQ0FBQ0csT0FBTyxDQUFDOEMsS0FBSyxDQUFDMEgsS0FBSyxFQUFFO1FBQzNCM0ssS0FBSyxDQUFDRyxPQUFPLENBQUM4QyxLQUFLLENBQUNwRSxJQUFJLEVBQUU7TUFDM0I7TUFDQTtNQUNBLElBQUltQixLQUFLLENBQUNhLFFBQVEsQ0FBQ3VDLFdBQVcsS0FBSyxJQUFJLElBQUlwRCxLQUFLLENBQUMrRixVQUFVLENBQUM3QyxPQUFPLEtBQUswSCxTQUFTLElBQUk1SyxLQUFLLENBQUMrRixVQUFVLENBQUM3QyxPQUFPLEtBQUssRUFBRSxFQUFFO1FBQ3JIbEQsS0FBSyxDQUFDRyxPQUFPLENBQUMrQyxPQUFPLENBQUM1RSxJQUFJLENBQUMwQixLQUFLLENBQUMrRixVQUFVLENBQUM3QyxPQUFPLENBQUM7UUFDcERsRCxLQUFLLENBQUNHLE9BQU8sQ0FBQytDLE9BQU8sQ0FBQ3dILElBQUksRUFBRTtNQUM3QixDQUFDLE1BQU07UUFDTjFLLEtBQUssQ0FBQ0csT0FBTyxDQUFDK0MsT0FBTyxDQUFDeUgsS0FBSyxFQUFFO1FBQzdCM0ssS0FBSyxDQUFDRyxPQUFPLENBQUMrQyxPQUFPLENBQUNyRSxJQUFJLEVBQUU7TUFDN0I7SUFDRCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0UyTCxXQUFXLEVBQUUscUJBQVUvRCxPQUFPLEVBQUU7TUFDL0I7TUFDQSxRQUFRekcsS0FBSyxDQUFDK0YsVUFBVSxDQUFDdkMsSUFBSTtRQUM1QixLQUFLLFFBQVE7VUFDWixJQUFJekQsQ0FBQyxDQUFDQyxLQUFLLENBQUMrRixVQUFVLENBQUNhLEdBQUcsQ0FBQyxFQUFFO1lBQzVCNUcsS0FBSyxDQUFDNkssWUFBWSxDQUFDcEUsT0FBTyxDQUFDO1VBQzVCLENBQUMsTUFBTTtZQUNOekcsS0FBSyxDQUFDOEssS0FBSyxFQUFFO1VBQ2Q7VUFDQTtRQUNELEtBQUssTUFBTTtVQUNWL0ssQ0FBQyxDQUFDd0QsSUFBSSxDQUNMeEQsQ0FBQyxDQUFDZSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVkLEtBQUssQ0FBQ2EsUUFBUSxDQUFDMEMsSUFBSSxFQUFFO1lBQ2pDcUQsR0FBRyxFQUFFNUcsS0FBSyxDQUFDK0YsVUFBVSxDQUFDYSxHQUFHO1lBQ3pCcEQsSUFBSSxFQUFFeEQsS0FBSyxDQUFDK0YsVUFBVSxDQUFDZSxXQUFXO1lBQ2xDckQsUUFBUSxFQUFFekQsS0FBSyxDQUFDK0YsVUFBVSxDQUFDaUIsZUFBZTtZQUMxQ3hJLElBQUksRUFBRXdCLEtBQUssQ0FBQytGLFVBQVUsQ0FBQ2dCLFdBQVc7WUFDbENnRSxPQUFPLEVBQUUsaUJBQVV2TSxJQUFJLEVBQUV3TSxVQUFVLEVBQUVDLEtBQUssRUFBRTtjQUMzQztjQUNBLElBQUlBLEtBQUssQ0FBQ0MsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDL0NsTCxLQUFLLENBQUMrRixVQUFVLENBQUNhLEdBQUcsR0FBR3FFLEtBQUssQ0FBQ0MsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pFbEwsS0FBSyxDQUFDd0ssV0FBVyxDQUFDL0QsT0FBTyxDQUFDO2NBQzNCLENBQUMsTUFDSTtnQkFDSjtnQkFDQSxJQUFJekcsS0FBSyxDQUFDK0YsVUFBVSxDQUFDaUIsZUFBZSxLQUFLLE1BQU0sRUFBRTtrQkFDaERoSCxLQUFLLENBQUMrRixVQUFVLENBQUN2SCxJQUFJLEdBQUdBLElBQUk7Z0JBQzdCLENBQUMsTUFBTTtrQkFDTmlJLE9BQU8sQ0FBQ25JLElBQUksQ0FBQ0UsSUFBSSxDQUFDO2dCQUNuQjtnQkFDQXdCLEtBQUssQ0FBQzZLLFlBQVksQ0FBQ3BFLE9BQU8sQ0FBQztjQUM1QjtZQUNELENBQUM7WUFDRHFFLEtBQUssRUFBRSxlQUFVRyxLQUFLLEVBQUVELFVBQVUsRUFBRUcsV0FBVyxFQUFFO2NBQ2hEbkwsS0FBSyxDQUFDOEssS0FBSyxFQUFFO1lBQ2Q7VUFDRCxDQUFDLENBQUMsQ0FDRjtVQUNEO1FBQ0QsS0FBSyxPQUFPO1VBQ1g5SyxLQUFLLENBQUM2SyxZQUFZLENBQUNwRSxPQUFPLENBQUM7VUFDM0I7UUFDRCxLQUFLLE9BQU87VUFDWCxJQUFJLE9BQU9BLE9BQU8sQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDb0MsV0FBWSxLQUFLLFVBQVUsSUFBSXpJLEtBQUssQ0FBQ0csT0FBTyxRQUFLLENBQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNYLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkdvQyxLQUFLLENBQUM2SyxZQUFZLENBQUNwRSxPQUFPLENBQUM7VUFDNUIsQ0FBQyxNQUFNO1lBQ056RyxLQUFLLENBQUM4SyxLQUFLLEVBQUU7VUFDZDtVQUNBO1FBQ0Q7VUFDQyxJQUFJOUssS0FBSyxDQUFDK0YsVUFBVSxDQUFDYSxHQUFHLEVBQUU7WUFDekJILE9BQU8sQ0FBQzNILEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWTtjQUM5QmtCLEtBQUssQ0FBQzZLLFlBQVksQ0FBQ3BFLE9BQU8sQ0FBQztZQUM1QixDQUFDLENBQUM7WUFDRkEsT0FBTyxDQUFDM0gsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO2NBQy9Ca0IsS0FBSyxDQUFDOEssS0FBSyxFQUFFO1lBQ2QsQ0FBQyxDQUFDO1VBQ0gsQ0FBQyxNQUFNO1lBQ045SyxLQUFLLENBQUM4SyxLQUFLLEVBQUU7VUFDZDtVQUNBO01BQU07SUFFVCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFQSxLQUFLLEVBQUUsaUJBQVk7TUFDbEI5SyxLQUFLLENBQUMrRixVQUFVLENBQUN2QyxJQUFJLEdBQUcsT0FBTztNQUMvQixJQUFJaUQsT0FBTyxHQUFHMUcsQ0FBQyxDQUFDLGNBQWMsR0FBR0MsS0FBSyxDQUFDYSxRQUFRLENBQUNHLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztNQUVuRnlGLE9BQU8sQ0FBQ25JLElBQUksQ0FBQzBCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDMEQsWUFBWSxDQUFDO01BQ3pDdkUsS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLENBQUM3RyxJQUFJLENBQUNtSSxPQUFPLENBQUM7TUFFeEN6RyxLQUFLLENBQUM2SyxZQUFZLENBQUM3SyxLQUFLLENBQUNHLE9BQU8sQ0FBQ2dGLFlBQVksQ0FBQztJQUMvQyxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0VpRyxvQkFBb0IsRUFBRSw4QkFBVTNFLE9BQU8sRUFBRTtNQUN4Q3pHLEtBQUssQ0FBQ3FMLGtCQUFrQixFQUFFO01BRTFCLElBQUksQ0FBQzVFLE9BQU8sRUFBRTs7TUFFZDtNQUNBLElBQUlOLFVBQVUsR0FBRztRQUNoQm1GLEtBQUssRUFBRSxDQUFDO1FBQ1JDLFdBQVcsRUFBRTlFLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBR29JLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBR29JLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQzJCLEtBQUssQ0FBQzBHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlHOEUsWUFBWSxFQUFFL0UsT0FBTyxDQUFDcEksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHb0ksT0FBTyxDQUFDcEksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHb0ksT0FBTyxDQUFDcEksSUFBSSxDQUFDMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsUUFBUSxDQUFDO01BQ2xILENBQUM7TUFFRCxJQUFJLENBQUMxRyxLQUFLLENBQUNhLFFBQVEsQ0FBQ3NCLGFBQWEsRUFBRTtRQUNsQztRQUNBZ0UsVUFBVSxDQUFDdkUsUUFBUSxHQUFHMkgsUUFBUSxDQUFDdkosS0FBSyxDQUFDbUcsVUFBVSxDQUFDc0YsV0FBVyxHQUFHekwsS0FBSyxDQUFDYSxRQUFRLENBQUN3QixZQUFZLENBQUM7UUFDMUY4RCxVQUFVLENBQUN0RSxTQUFTLEdBQUcwSCxRQUFRLENBQUN2SixLQUFLLENBQUNtRyxVQUFVLENBQUN1RixZQUFZLEdBQUcxTCxLQUFLLENBQUNhLFFBQVEsQ0FBQ3dCLFlBQVksQ0FBQzs7UUFFNUY7UUFDQSxJQUFJOEQsVUFBVSxDQUFDdkUsUUFBUSxHQUFHNUIsS0FBSyxDQUFDYSxRQUFRLENBQUNlLFFBQVEsRUFBRTtVQUNsRHVFLFVBQVUsQ0FBQ3ZFLFFBQVEsR0FBRzVCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDZSxRQUFRO1FBQzlDO1FBQ0EsSUFBSXVFLFVBQVUsQ0FBQ3RFLFNBQVMsR0FBRzdCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDZ0IsU0FBUyxFQUFFO1VBQ3BEc0UsVUFBVSxDQUFDdEUsU0FBUyxHQUFHN0IsS0FBSyxDQUFDYSxRQUFRLENBQUNnQixTQUFTO1FBQ2hEOztRQUVBO1FBQ0FzRSxVQUFVLENBQUN3Rix3QkFBd0IsR0FBR3BDLFFBQVEsQ0FBQyxHQUFHLEdBQUdwRCxVQUFVLENBQUN2RSxRQUFRLEdBQUd1RSxVQUFVLENBQUNvRixXQUFXLENBQUM7UUFDbEdwRixVQUFVLENBQUN5Rix5QkFBeUIsR0FBR3JDLFFBQVEsQ0FBQyxHQUFHLEdBQUdwRCxVQUFVLENBQUN0RSxTQUFTLEdBQUdzRSxVQUFVLENBQUNxRixZQUFZLENBQUM7UUFFckcsUUFBUXhMLEtBQUssQ0FBQytGLFVBQVUsQ0FBQ3ZDLElBQUk7VUFDNUIsS0FBSyxPQUFPO1VBQ1osS0FBSyxPQUFPO1VBQ1osS0FBSyxPQUFPO1VBQ1osS0FBSyxRQUFRO1VBQ2IsS0FBSyxNQUFNO1VBQ1gsS0FBSyxRQUFRO1lBQ1osSUFBSXhELEtBQUssQ0FBQytGLFVBQVUsQ0FBQ3ZDLElBQUksS0FBSyxPQUFPLElBQUl4RCxLQUFLLENBQUNhLFFBQVEsQ0FBQ3VCLFVBQVUsS0FBSyxJQUFJLEVBQUU7Y0FDNUUsSUFBSStELFVBQVUsQ0FBQ3dGLHdCQUF3QixHQUFHLEdBQUcsSUFBSXhGLFVBQVUsQ0FBQ3dGLHdCQUF3QixHQUFHeEYsVUFBVSxDQUFDeUYseUJBQXlCLEVBQUU7Z0JBQzVIekYsVUFBVSxDQUFDb0YsV0FBVyxHQUFHcEYsVUFBVSxDQUFDdkUsUUFBUTtnQkFDNUN1RSxVQUFVLENBQUNxRixZQUFZLEdBQUdqQyxRQUFRLENBQUNwRCxVQUFVLENBQUNxRixZQUFZLEdBQUdyRixVQUFVLENBQUN3Rix3QkFBd0IsR0FBRyxHQUFHLENBQUM7Y0FDeEc7Y0FDQSxJQUFJeEYsVUFBVSxDQUFDeUYseUJBQXlCLEdBQUcsR0FBRyxJQUFJekYsVUFBVSxDQUFDeUYseUJBQXlCLEdBQUd6RixVQUFVLENBQUN3Rix3QkFBd0IsRUFBRTtnQkFDN0h4RixVQUFVLENBQUNvRixXQUFXLEdBQUdoQyxRQUFRLENBQUNwRCxVQUFVLENBQUNvRixXQUFXLEdBQUdwRixVQUFVLENBQUN5Rix5QkFBeUIsR0FBRyxHQUFHLENBQUM7Z0JBQ3RHekYsVUFBVSxDQUFDcUYsWUFBWSxHQUFHckYsVUFBVSxDQUFDdEUsU0FBUztjQUMvQztjQUNBLElBQUlzRSxVQUFVLENBQUN5Rix5QkFBeUIsR0FBRyxHQUFHLElBQUl6RixVQUFVLENBQUN3Rix3QkFBd0IsR0FBR3hGLFVBQVUsQ0FBQ3lGLHlCQUF5QixFQUFFO2dCQUM3SHpGLFVBQVUsQ0FBQ29GLFdBQVcsR0FBR2hDLFFBQVEsQ0FBQ3BELFVBQVUsQ0FBQ3ZFLFFBQVEsR0FBR3VFLFVBQVUsQ0FBQ3lGLHlCQUF5QixHQUFHekYsVUFBVSxDQUFDd0Ysd0JBQXdCLENBQUM7Z0JBQ25JeEYsVUFBVSxDQUFDcUYsWUFBWSxHQUFHckYsVUFBVSxDQUFDdEUsU0FBUztjQUMvQztjQUNBO1lBQ0Q7VUFDRCxLQUFLLE9BQU87WUFDWCxJQUFJLENBQUM4SCxLQUFLLENBQUN4RCxVQUFVLENBQUNvRixXQUFXLENBQUMsSUFBSXBGLFVBQVUsQ0FBQ29GLFdBQVcsR0FBR3BGLFVBQVUsQ0FBQ3ZFLFFBQVEsRUFBRTtjQUNuRnVFLFVBQVUsQ0FBQ29GLFdBQVcsR0FBR3BGLFVBQVUsQ0FBQ3ZFLFFBQVE7WUFDN0M7WUFDQTtVQUNEO1lBQ0MsSUFBSSxDQUFDK0gsS0FBSyxDQUFDeEQsVUFBVSxDQUFDb0YsV0FBVyxDQUFDLElBQUlwRixVQUFVLENBQUNvRixXQUFXLEdBQUdwRixVQUFVLENBQUN2RSxRQUFRLEtBQUssQ0FBQzVCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDaUIsVUFBVSxFQUFFO2NBQ2xIcUUsVUFBVSxDQUFDb0YsV0FBVyxHQUFHcEYsVUFBVSxDQUFDdkUsUUFBUTtZQUM3QztZQUNBLElBQUksQ0FBRStILEtBQUssQ0FBQ3hELFVBQVUsQ0FBQ3FGLFlBQVksQ0FBQyxJQUFJckYsVUFBVSxDQUFDcUYsWUFBWSxLQUFLLE1BQU0sSUFBS3JGLFVBQVUsQ0FBQ3FGLFlBQVksR0FBR3JGLFVBQVUsQ0FBQ3RFLFNBQVMsS0FBSyxDQUFDN0IsS0FBSyxDQUFDYSxRQUFRLENBQUNrQixXQUFXLEVBQUU7Y0FDOUpvRSxVQUFVLENBQUNxRixZQUFZLEdBQUdyRixVQUFVLENBQUN0RSxTQUFTO1lBQy9DO1lBQ0E7UUFBTTtNQUVUO01BRUEsSUFBSTdCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDaUIsVUFBVSxFQUFFO1FBQzlCLElBQUk7VUFDSHFFLFVBQVUsQ0FBQ29GLFdBQVcsR0FBR3ZMLEtBQUssQ0FBQ2EsUUFBUSxDQUFDYixLQUFLLENBQUMrRixVQUFVLENBQUN2QyxJQUFJLENBQUMsQ0FBQzlCLEtBQUs7UUFDckUsQ0FBQyxDQUFDLE9BQU92RSxDQUFDLEVBQUU7VUFDWGdKLFVBQVUsQ0FBQ29GLFdBQVcsR0FBR3ZMLEtBQUssQ0FBQ2EsUUFBUSxDQUFDYSxLQUFLLElBQUl5RSxVQUFVLENBQUNvRixXQUFXO1FBQ3hFO1FBRUFwRixVQUFVLENBQUN2RSxRQUFRLEdBQUcsSUFBSTtNQUMzQjtNQUNBLElBQUk2RSxPQUFPLENBQUNwSSxJQUFJLENBQUMyQixLQUFLLENBQUMwRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1FBQzFEUCxVQUFVLENBQUN2RSxRQUFRLEdBQUc2RSxPQUFPLENBQUNwSSxJQUFJLENBQUMyQixLQUFLLENBQUMwRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztNQUM1RTtNQUVBLElBQUkxRyxLQUFLLENBQUNhLFFBQVEsQ0FBQ2tCLFdBQVcsRUFBRTtRQUMvQixJQUFJO1VBQ0hvRSxVQUFVLENBQUNxRixZQUFZLEdBQUd4TCxLQUFLLENBQUNhLFFBQVEsQ0FBQ2IsS0FBSyxDQUFDK0YsVUFBVSxDQUFDdkMsSUFBSSxDQUFDLENBQUM3QixNQUFNO1FBQ3ZFLENBQUMsQ0FBQyxPQUFPeEUsQ0FBQyxFQUFFO1VBQ1hnSixVQUFVLENBQUNxRixZQUFZLEdBQUd4TCxLQUFLLENBQUNhLFFBQVEsQ0FBQ2MsTUFBTSxJQUFJd0UsVUFBVSxDQUFDcUYsWUFBWTtRQUMzRTtRQUVBckYsVUFBVSxDQUFDdEUsU0FBUyxHQUFHLElBQUk7TUFDNUI7TUFDQSxJQUFJNEUsT0FBTyxDQUFDcEksSUFBSSxDQUFDMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRTtRQUMzRFAsVUFBVSxDQUFDdEUsU0FBUyxHQUFHNEUsT0FBTyxDQUFDcEksSUFBSSxDQUFDMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7TUFDOUU7TUFDQTFHLEtBQUssQ0FBQzZMLGlCQUFpQixDQUFDcEYsT0FBTyxFQUFFTixVQUFVLENBQUM7SUFDN0MsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0UwRixpQkFBaUIsRUFBRSwyQkFBVXBGLE9BQU8sRUFBRU4sVUFBVSxFQUFFO01BQ2pEO01BQ0FNLE9BQU8sQ0FBQ3pJLEdBQUcsQ0FBQztRQUNYLE9BQU8sRUFBRW1JLFVBQVUsQ0FBQ29GLFdBQVc7UUFDL0IsUUFBUSxFQUFFcEYsVUFBVSxDQUFDcUYsWUFBWTtRQUNqQyxXQUFXLEVBQUVyRixVQUFVLENBQUN2RSxRQUFRO1FBQ2hDLFlBQVksRUFBRXVFLFVBQVUsQ0FBQ3RFO01BQzFCLENBQUMsQ0FBQztNQUVGN0IsS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLENBQUNuSCxHQUFHLENBQUM7UUFDOUIsT0FBTyxFQUFFeUksT0FBTyxDQUFDcUYsVUFBVSxFQUFFO1FBQzdCLFFBQVEsRUFBRXJGLE9BQU8sQ0FBQ3NGLFdBQVcsRUFBRTtRQUMvQixXQUFXLEVBQUU7TUFDZCxDQUFDLENBQUM7TUFFRi9MLEtBQUssQ0FBQ0csT0FBTyxRQUFLLENBQUNuQyxHQUFHLENBQUM7UUFDdEIsT0FBTyxFQUFFZ0MsS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLENBQUMyRyxVQUFVLEVBQUU7UUFDaEQsV0FBVyxFQUFFO01BQ2QsQ0FBQyxDQUFDOztNQUVGO01BQ0E5TCxLQUFLLENBQUNHLE9BQU8sUUFBSyxDQUFDbkMsR0FBRyxDQUFDO1FBQ3RCLFlBQVksRUFBRXVMLFFBQVEsQ0FBQyxFQUFFdkosS0FBSyxDQUFDRyxPQUFPLFFBQUssQ0FBQzRMLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9ELGFBQWEsRUFBRXhDLFFBQVEsQ0FBQyxFQUFFdkosS0FBSyxDQUFDRyxPQUFPLFFBQUssQ0FBQzJMLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztNQUMvRCxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0VyQixRQUFRLEVBQUUsa0JBQVV1QixPQUFPLEVBQUU7TUFDNUIsSUFBSUEsT0FBTyxLQUFLLE9BQU8sRUFBRTtRQUN4QmhNLEtBQUssQ0FBQ0csT0FBTyxRQUFLLENBQUMvQixRQUFRLENBQUM0QixLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUNuRWhCLEtBQUssQ0FBQ0csT0FBTyxDQUFDeUUsT0FBTyxDQUFDOEYsSUFBSSxFQUFFO01BQzdCLENBQUMsTUFBTSxJQUFJc0IsT0FBTyxLQUFLLEtBQUssRUFBRTtRQUM3QmhNLEtBQUssQ0FBQ0csT0FBTyxRQUFLLENBQUNuQixXQUFXLENBQUNnQixLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUN0RWhCLEtBQUssQ0FBQ0csT0FBTyxDQUFDeUUsT0FBTyxDQUFDL0YsSUFBSSxFQUFFO01BQzdCO0lBQ0QsQ0FBQztJQUdEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRXVILHFCQUFxQixFQUFFLGlDQUFZO01BQ2xDLE9BQU87UUFDTnFGLFdBQVcsRUFBRTFMLENBQUMsQ0FBQ2tNLE1BQU0sQ0FBQyxDQUFDQyxVQUFVLEVBQUU7UUFDbkNSLFlBQVksRUFBRTNMLENBQUMsQ0FBQ2tNLE1BQU0sQ0FBQyxDQUFDRSxXQUFXO01BQ3BDLENBQUM7SUFDRixDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0VoRSxjQUFjLEVBQUUsd0JBQVVELE9BQU8sRUFBRTtNQUNsQyxJQUFJLENBQUNBLE9BQU8sSUFBSUEsT0FBTyxLQUFLMEMsU0FBUyxJQUFJMUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtRQUN4RCxPQUFPLEtBQUs7TUFDYjtNQUVBLElBQUlBLE9BQU8sQ0FBQ2tFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUM5QmxFLE9BQU8sR0FBR0EsT0FBTyxDQUFDRixLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzVCRSxPQUFPLEdBQUcsR0FBRyxHQUFHQSxPQUFPLENBQUNBLE9BQU8sQ0FBQ3RLLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDNUM7TUFFQSxPQUFPb0MsS0FBSyxDQUFDNkksYUFBYSxDQUFDWCxPQUFPLENBQUNtRSxRQUFRLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUE7SUFDRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDRTdELGlCQUFpQixFQUFFLDJCQUFVNUIsR0FBRyxFQUFFO01BQ2pDLElBQUkwRixFQUFFLEdBQUcsaUJBQWlCO01BQzFCLE9BQU9BLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDM0YsR0FBRyxDQUFDNEYsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNFckYsZUFBZSxFQUFFLHlCQUFVUCxHQUFHLEVBQUU7TUFDL0IsSUFBSXRDLFdBQVcsR0FBR3RFLEtBQUssQ0FBQ2EsUUFBUSxDQUFDeUQsV0FBVzs7TUFFNUM7TUFDQSxJQUFJLENBQUNzQyxHQUFHLEVBQUU7UUFDVCxPQUFPLEtBQUs7TUFDYjs7TUFFQTtNQUNBO01BQ0EsS0FBSyxJQUFJNkYsR0FBRyxJQUFJbkksV0FBVyxFQUFFO1FBQzVCLElBQUlBLFdBQVcsQ0FBQ29JLGNBQWMsQ0FBQ0QsR0FBRyxDQUFDLEVBQUU7VUFDcEMsSUFBSUUsU0FBUyxHQUFHckksV0FBVyxDQUFDbUksR0FBRyxDQUFDLENBQUN6RSxLQUFLLENBQUMsR0FBRyxDQUFDO1VBRTNDLEtBQUssSUFBSXRLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2lQLFNBQVMsQ0FBQy9PLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSWtQLE1BQU0sR0FBR0QsU0FBUyxDQUFDalAsQ0FBQyxDQUFDLENBQUM4TyxXQUFXLEVBQUU7Y0FDdEMxQyxNQUFNLEdBQUcsSUFBSUMsTUFBTSxDQUFDLEtBQUssR0FBRzZDLE1BQU0sR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDO2NBQy9DNUQsR0FBRyxHQUFHcEMsR0FBRyxDQUFDNEYsV0FBVyxFQUFFLENBQUN4RSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM2RSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakQsSUFBSS9DLE1BQU0sQ0FBQ0osSUFBSSxDQUFDVixHQUFHLENBQUMsS0FBSyxJQUFJLElBQUt5RCxHQUFHLEtBQUssUUFBUSxJQUFLN0YsR0FBRyxDQUFDd0YsT0FBTyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUcsRUFBRTtjQUNsRixPQUFPSCxHQUFHO1lBQ1g7VUFDRDtRQUNEO01BQ0Q7O01BRUE7TUFDQSxPQUFPLFFBQVE7SUFDaEIsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRXhHLFlBQVksRUFBRSx3QkFBWTtNQUN6QixJQUFJLE9BQU9qRyxLQUFLLENBQUNHLE9BQU8sUUFBSyxLQUFLLFdBQVcsSUFBSUosQ0FBQyxDQUFDLEdBQUcsR0FBR0MsS0FBSyxDQUFDRyxPQUFPLFFBQUssQ0FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDVCxNQUFNLEVBQUU7UUFDL0Y7TUFDRDtNQUVBb0MsS0FBSyxDQUFDYSxRQUFRLENBQUM0RCxNQUFNLEVBQUU7SUFDeEIsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNFb0csWUFBWSxFQUFFLHNCQUFVcEUsT0FBTyxFQUFFO01BQ2hDO01BQ0F6RyxLQUFLLENBQUNHLE9BQU8sQ0FBQ2xDLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEVBQUUxRyxLQUFLLENBQUMrRixVQUFVLENBQUN2QyxJQUFJLENBQUM7TUFFdEZ4RCxLQUFLLENBQUNDLEtBQUssQ0FBQ3VHLE1BQU0sR0FBR0MsT0FBTzs7TUFFNUI7TUFDQXpHLEtBQUssQ0FBQzhGLFVBQVUsQ0FBQzlGLEtBQUssQ0FBQ2EsUUFBUSxDQUFDNEUsWUFBWSxDQUFDO01BRTdDLElBQUl6RixLQUFLLENBQUNhLFFBQVEsQ0FBQzRCLGVBQWUsRUFBRTtNQUNwQ3pDLEtBQUssQ0FBQzBLLElBQUksRUFBRTtJQUNiLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtJQUNFb0Msa0JBQWtCLEVBQUUsOEJBQVk7TUFDL0IsUUFBUTlNLEtBQUssQ0FBQ2tCLFVBQVUsTUFBRyxFQUFFO1FBQzVCLEtBQUssV0FBVztRQUNoQixLQUFLLGFBQWE7UUFDbEIsS0FBSyxjQUFjO1FBQ25CLEtBQUssWUFBWTtRQUNqQixLQUFLLGtCQUFrQjtRQUN2QixLQUFLLGdCQUFnQjtVQUNwQmxCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQzZMLE1BQU0sQ0FBQy9NLEtBQUssQ0FBQ0csT0FBTyxRQUFLLEVBQUUsSUFBSSxFQUFFSCxLQUFLLENBQUNhLFFBQVEsQ0FBQ1csT0FBTyxDQUFDO1VBQ3pFeEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDOEwsSUFBSSxDQUFDaE4sS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLEVBQUUsSUFBSSxFQUFFbkYsS0FBSyxDQUFDYSxRQUFRLENBQUNXLE9BQU8sQ0FBQztVQUMvRTtRQUNELEtBQUssU0FBUztVQUNiLElBQUl4QixLQUFLLENBQUNHLE9BQU8sUUFBSyxDQUFDbkMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQ2dDLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQytMLElBQUksQ0FBQ2pOLEtBQUssQ0FBQ0csT0FBTyxRQUFLLEVBQUUsSUFBSSxFQUFFSCxLQUFLLENBQUNhLFFBQVEsQ0FBQ1csT0FBTyxDQUFDO1lBQ3ZFeEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDOEwsSUFBSSxDQUFDaE4sS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLEVBQUUsSUFBSSxFQUFFbkYsS0FBSyxDQUFDYSxRQUFRLENBQUNXLE9BQU8sQ0FBQztVQUNqRjtRQUNBLEtBQUssTUFBTTtRQUNYLEtBQUssWUFBWTtVQUNoQnhCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQzhMLElBQUksQ0FBQ2hOLEtBQUssQ0FBQ0csT0FBTyxRQUFLLEVBQUUsSUFBSSxFQUFFSCxLQUFLLENBQUNhLFFBQVEsQ0FBQ1csT0FBTyxDQUFDO1VBQ3ZFeEIsS0FBSyxDQUFDa0IsVUFBVSxDQUFDOEwsSUFBSSxDQUFDaE4sS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLEVBQUUsSUFBSSxFQUFFbkYsS0FBSyxDQUFDYSxRQUFRLENBQUNXLE9BQU8sQ0FBQztVQUMvRTtRQUNEO1VBQ0N4QixLQUFLLENBQUNrQixVQUFVLENBQUM4TCxJQUFJLENBQUNoTixLQUFLLENBQUNHLE9BQU8sUUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7VUFDbEQ7TUFBTTs7TUFHUjtNQUNBSCxLQUFLLENBQUN5SyxRQUFRLENBQUMsS0FBSyxDQUFDO01BQ3JCekssS0FBSyxDQUFDa04sTUFBTSxHQUFHLEtBQUs7O01BRXBCO01BQ0EsSUFBSSxDQUFDbE4sS0FBSyxDQUFDQyxLQUFLLENBQUNrTixXQUFXLEVBQUU7UUFDN0JuTixLQUFLLENBQUNDLEtBQUssQ0FBQ2tOLFdBQVcsR0FBR25OLEtBQUssQ0FBQytGLFVBQVUsUUFBSztNQUNoRDs7TUFFQTtNQUNBL0YsS0FBSyxDQUFDRyxPQUFPLENBQUMrRSxJQUFJLENBQUNyRyxJQUFJLEVBQUU7TUFDekJ1TyxVQUFVLENBQUMsWUFBWTtRQUNyQnBOLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQzhMLElBQUksQ0FBQ2hOLEtBQUssQ0FBQ0csT0FBTyxDQUFDK0UsSUFBSSxFQUFFLElBQUksRUFBRWxGLEtBQUssQ0FBQ2EsUUFBUSxDQUFDVyxPQUFPLENBQUM7TUFDekUsQ0FBQyxFQUFFeEIsS0FBSyxDQUFDYSxRQUFRLENBQUNXLE9BQU8sQ0FBQzs7TUFFMUI7TUFDQXhCLEtBQUssQ0FBQzhGLFVBQVUsQ0FBQzlGLEtBQUssQ0FBQ2EsUUFBUSxDQUFDNkUsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0lBQ0UySCxlQUFlLEVBQUUsMkJBQVk7TUFDNUJyTixLQUFLLENBQUNrTixNQUFNLEdBQUcsSUFBSTs7TUFFbkI7TUFDQWxOLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQzhMLElBQUksQ0FBQ2hOLEtBQUssQ0FBQ0csT0FBTyxDQUFDK0UsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7TUFFbkQsUUFBUWxGLEtBQUssQ0FBQ2EsUUFBUSxDQUFDUyxhQUFhO1FBQ25DLEtBQUssV0FBVztRQUNoQixLQUFLLGFBQWE7UUFDbEIsS0FBSyxjQUFjO1FBQ25CLEtBQUssWUFBWTtRQUNqQixLQUFLLGdCQUFnQjtRQUNyQixLQUFLLGtCQUFrQjtVQUN0QixJQUFJdEIsS0FBSyxDQUFDRyxPQUFPLFFBQUssQ0FBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQ29CLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQzhMLElBQUksQ0FBQ2hOLEtBQUssQ0FBQ0csT0FBTyxDQUFDZ0YsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDM0RuRixLQUFLLENBQUNrQixVQUFVLENBQUM4TCxJQUFJLENBQUNoTixLQUFLLENBQUNHLE9BQU8sUUFBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7Y0FDbEVILEtBQUssQ0FBQ2lLLFlBQVksRUFBRTtZQUNyQixDQUFDLENBQUM7VUFDSCxDQUFDLE1BQU07WUFDTmpLLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQzZMLE1BQU0sQ0FBQy9NLEtBQUssQ0FBQ0csT0FBTyxRQUFLLEVBQUUsS0FBSyxFQUFFSCxLQUFLLENBQUNhLFFBQVEsQ0FBQ1ksUUFBUSxFQUFFLFlBQVk7Y0FDdkZ6QixLQUFLLENBQUNpSyxZQUFZLEVBQUU7WUFDckIsQ0FBQyxDQUFDO1VBQ0g7VUFDQTtRQUNELEtBQUssTUFBTTtVQUNWLElBQUlqSyxLQUFLLENBQUNHLE9BQU8sUUFBSyxDQUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JDb0IsS0FBSyxDQUFDa0IsVUFBVSxDQUFDOEwsSUFBSSxDQUFDaE4sS0FBSyxDQUFDRyxPQUFPLFFBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO2NBQ2xFSCxLQUFLLENBQUNpSyxZQUFZLEVBQUU7WUFDckIsQ0FBQyxDQUFDO1VBQ0gsQ0FBQyxNQUFNO1lBQ05qSyxLQUFLLENBQUNrQixVQUFVLENBQUM4TCxJQUFJLENBQUNoTixLQUFLLENBQUNHLE9BQU8sUUFBSyxFQUFFLEtBQUssRUFBRUgsS0FBSyxDQUFDYSxRQUFRLENBQUNZLFFBQVEsRUFBRSxDQUFDLEVBQUUsWUFBWTtjQUN4RnpCLEtBQUssQ0FBQ2lLLFlBQVksRUFBRTtZQUNyQixDQUFDLENBQUM7VUFDSDtVQUNBO1FBQ0QsS0FBSyxZQUFZO1FBQ2pCLEtBQUssU0FBUztVQUNiLElBQUlqSyxLQUFLLENBQUNHLE9BQU8sUUFBSyxDQUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JDb0IsS0FBSyxDQUFDa0IsVUFBVSxDQUFDOEwsSUFBSSxDQUFDaE4sS0FBSyxDQUFDRyxPQUFPLFFBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO2NBQ2xFSCxLQUFLLENBQUNpSyxZQUFZLEVBQUU7WUFDckIsQ0FBQyxDQUFDO1VBQ0gsQ0FBQyxNQUFNO1lBQ05qSyxLQUFLLENBQUNrQixVQUFVLENBQUM4TCxJQUFJLENBQUNoTixLQUFLLENBQUNHLE9BQU8sQ0FBQ2dGLFlBQVksRUFBRSxLQUFLLEVBQUVuRixLQUFLLENBQUNhLFFBQVEsQ0FBQ1ksUUFBUSxFQUFFLENBQUMsRUFBRSxZQUFZO2NBQ2hHekIsS0FBSyxDQUFDaUssWUFBWSxFQUFFO1lBQ3JCLENBQUMsQ0FBQztVQUNIO1VBQ0E7UUFDRDtVQUNDakssS0FBSyxDQUFDa0IsVUFBVSxDQUFDOEwsSUFBSSxDQUFDaE4sS0FBSyxDQUFDRyxPQUFPLFFBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZO1lBQ2xFSCxLQUFLLENBQUNpSyxZQUFZLEVBQUU7VUFDckIsQ0FBQyxDQUFDO1VBQ0Y7TUFBTTtJQUVULENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0lBQ0VxRCxhQUFhLEVBQUUseUJBQVk7TUFDMUJ0TixLQUFLLENBQUN1TixhQUFhLEVBQUU7TUFFckJ2TixLQUFLLENBQUNHLE9BQU8sQ0FBQzJFLEdBQUcsQ0FBQzZCLFFBQVEsRUFBRSxDQUFDNUgsR0FBRyxDQUFDaUIsS0FBSyxDQUFDRyxPQUFPLENBQUMwRSxLQUFLLENBQUMsQ0FBQ2hHLElBQUksRUFBRTs7TUFFNUQ7TUFDQSxJQUFJbUIsS0FBSyxDQUFDZ0ssa0JBQWtCLEVBQUUsRUFBRTtRQUMvQjtRQUNBLElBQ0MsQ0FBQ2hLLEtBQUssQ0FBQ2EsUUFBUSxDQUFDMkIsa0JBQWtCLEtBQUssSUFBSSxJQUFJeEMsS0FBSyxDQUFDd04sa0JBQWtCLEtBQ3ZFLENBQUN4TixLQUFLLENBQUNHLE9BQU8sQ0FBQzJFLEdBQUcsQ0FBQ25ILFFBQVEsQ0FBQ3FDLEtBQUssQ0FBQ2EsUUFBUSxDQUFDRyxXQUFXLEdBQUcsUUFBUSxDQUFDLEVBQ2pFO1VBQ0RoQixLQUFLLENBQUN5TixhQUFhLEVBQUU7UUFDdEIsQ0FBQyxNQUFNO1VBQ056TixLQUFLLENBQUMwTixZQUFZLEVBQUU7UUFDckI7TUFDRDtNQUVBLElBQUkxTixLQUFLLENBQUNhLFFBQVEsQ0FBQ21CLFVBQVUsRUFBRTtRQUM5QmhDLEtBQUssQ0FBQzJOLHVCQUF1QixFQUFFO01BQ2hDO01BRUEzTixLQUFLLENBQUNHLE9BQU8sQ0FBQzBFLEtBQUssQ0FBQytJLEtBQUssQ0FBQyxVQUFVcE4sS0FBSyxFQUFFO1FBQzFDQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtRQUN0QlQsS0FBSyxDQUFDNkUsS0FBSyxFQUFFO01BQ2QsQ0FBQyxDQUFDO01BRUYsSUFBSTdFLEtBQUssQ0FBQ2EsUUFBUSxDQUFDbUMsbUJBQW1CLEtBQUssSUFBSSxFQUFFO1FBQ2hEaEQsS0FBSyxDQUFDRyxPQUFPLENBQUN3RSxPQUFPLENBQUMzRyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDNFAsS0FBSyxDQUFDLFVBQVVwTixLQUFLLEVBQUU7VUFDckVBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBRXRCVCxLQUFLLENBQUM2RSxLQUFLLEVBQUU7UUFDZCxDQUFDLENBQUM7TUFDSDtNQUVBLElBQUk3RSxLQUFLLENBQUNhLFFBQVEsQ0FBQytCLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDcEM1QyxLQUFLLENBQUM2TixhQUFhLEVBQUU7TUFDdEI7TUFFQSxJQUFJN04sS0FBSyxDQUFDK0YsVUFBVSxDQUFDcUIsZ0JBQWdCLEVBQUU7UUFDdENwSCxLQUFLLENBQUNHLE9BQU8sQ0FBQzJFLEdBQUcsQ0FBQ3pHLElBQUksQ0FBQzJCLEtBQUssQ0FBQzBHLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQzVFMUcsS0FBSyxDQUFDRyxPQUFPLENBQUMyRSxHQUFHLENBQUN0RyxJQUFJLENBQUMsT0FBTyxFQUFFd0IsS0FBSyxDQUFDOE4sY0FBYyxFQUFFLENBQUM7UUFFdkQ5TixLQUFLLENBQUNHLE9BQU8sQ0FBQ2QsSUFBSSxDQUFDdU8sS0FBSyxDQUFDLFVBQVVwTixLQUFLLEVBQUU7VUFDekNBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBRXRCLElBQUlULEtBQUssQ0FBQ2EsUUFBUSxDQUFDa0MsZUFBZSxLQUFLLElBQUksSUFBSSxDQUFDL0MsS0FBSyxDQUFDK04sSUFBSSxDQUFDQyxPQUFPLEVBQUUsRUFBRTtZQUNyRWhPLEtBQUssQ0FBQ0csT0FBTyxDQUFDZCxJQUFJLENBQUNpQixNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2xDTixLQUFLLENBQUNDLEtBQUssQ0FBQ2dPLE1BQU0sR0FBRyxNQUFNO1lBQzNCak8sS0FBSyxDQUFDRyxPQUFPLENBQUMyRSxHQUFHLENBQUN0RyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNhLElBQUksQ0FBQ3VPLEtBQUssRUFBRTtZQUU1QyxJQUFJNU4sS0FBSyxDQUFDZ0ssa0JBQWtCLEVBQUUsRUFBRTtjQUMvQmhLLEtBQUssQ0FBQzBOLFlBQVksRUFBRTtZQUNyQjtVQUNEO1FBQ0QsQ0FBQyxDQUFDO1FBRUYxTixLQUFLLENBQUNHLE9BQU8sQ0FBQzFDLElBQUksQ0FBQ21RLEtBQUssQ0FBQyxVQUFVcE4sS0FBSyxFQUFFO1VBQ3pDQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtVQUV0QixJQUFJVCxLQUFLLENBQUNhLFFBQVEsQ0FBQ2tDLGVBQWUsS0FBSyxJQUFJLElBQUksQ0FBQy9DLEtBQUssQ0FBQytOLElBQUksQ0FBQ0csTUFBTSxFQUFFLEVBQUU7WUFDcEVsTyxLQUFLLENBQUNHLE9BQU8sQ0FBQzFDLElBQUksQ0FBQzZDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbENOLEtBQUssQ0FBQ0MsS0FBSyxDQUFDZ08sTUFBTSxHQUFHLE1BQU07WUFDM0JqTyxLQUFLLENBQUNHLE9BQU8sQ0FBQzJFLEdBQUcsQ0FBQ3RHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ2YsSUFBSSxDQUFDbVEsS0FBSyxFQUFFO1lBRTVDLElBQUk1TixLQUFLLENBQUNnSyxrQkFBa0IsRUFBRSxFQUFFO2NBQy9CaEssS0FBSyxDQUFDME4sWUFBWSxFQUFFO1lBQ3JCO1VBQ0Q7UUFDRCxDQUFDLENBQUM7UUFFRixJQUFJMU4sS0FBSyxDQUFDZ0ssa0JBQWtCLEVBQUUsRUFBRTtVQUMvQmhLLEtBQUssQ0FBQ0csT0FBTyxDQUFDNEUsSUFBSSxDQUFDNkksS0FBSyxDQUFDLFVBQVVwTixLQUFLLEVBQUU7WUFDekNBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1lBQ3RCVCxLQUFLLENBQUN5TixhQUFhLEVBQUU7VUFDdEIsQ0FBQyxDQUFDO1VBQ0Z6TixLQUFLLENBQUNHLE9BQU8sQ0FBQzZFLEtBQUssQ0FBQzRJLEtBQUssQ0FBQyxVQUFVcE4sS0FBSyxFQUFFO1lBQzFDQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtZQUN0QlQsS0FBSyxDQUFDME4sWUFBWSxFQUFFO1VBQ3JCLENBQUMsQ0FBQztRQUNIOztRQUVBO1FBQ0EsSUFBSTFOLEtBQUssQ0FBQ2EsUUFBUSxDQUFDOEIsS0FBSyxLQUFLLElBQUksRUFBRTtVQUNsQyxJQUFJNUMsQ0FBQyxDQUFDb08sYUFBYSxDQUFDcE8sQ0FBQyxDQUFDUyxLQUFLLENBQUM0TixPQUFPLENBQUNDLFNBQVMsQ0FBQyxFQUFFO1lBQy9Dck8sS0FBSyxDQUFDRyxPQUFPLFFBQUssQ0FBQ3JCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVTBCLEtBQUssRUFBRTtjQUNuREEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Y0FDdEJULEtBQUssQ0FBQ0csT0FBTyxDQUFDMUMsSUFBSSxDQUFDbVEsS0FBSyxFQUFFO2NBQzFCLElBQUk1TixLQUFLLENBQUNnSyxrQkFBa0IsRUFBRSxFQUFFO2dCQUMvQmhLLEtBQUssQ0FBQzBOLFlBQVksRUFBRTtjQUNyQjtZQUNELENBQUMsQ0FBQztVQUNIO1VBQ0EsSUFBSTNOLENBQUMsQ0FBQ29PLGFBQWEsQ0FBQ3BPLENBQUMsQ0FBQ1MsS0FBSyxDQUFDNE4sT0FBTyxDQUFDRSxVQUFVLENBQUMsRUFBRTtZQUNoRHRPLEtBQUssQ0FBQ0csT0FBTyxRQUFLLENBQUNyQixFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUwQixLQUFLLEVBQUU7Y0FDcERBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2NBQ3RCVCxLQUFLLENBQUNHLE9BQU8sQ0FBQ2QsSUFBSSxDQUFDdU8sS0FBSyxFQUFFO2NBQzFCLElBQUk1TixLQUFLLENBQUNnSyxrQkFBa0IsRUFBRSxFQUFFO2dCQUMvQmhLLEtBQUssQ0FBQzBOLFlBQVksRUFBRTtjQUNyQjtZQUNELENBQUMsQ0FBQztVQUNIO1FBQ0Q7TUFDRDtJQUNELENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0lBQ0VHLGFBQWEsRUFBRSx5QkFBWTtNQUMxQjlOLENBQUMsQ0FBQzlCLFFBQVEsQ0FBQyxDQUFDc0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFVBQVVDLEtBQUssRUFBRTtRQUNwRDtRQUNBLElBQUlSLEtBQUssQ0FBQ2tOLE1BQU0sRUFBRTtVQUNqQjtRQUNEO1FBRUEsUUFBUTFNLEtBQUssQ0FBQ2xCLE9BQU87VUFDcEI7VUFDQSxLQUFLLEVBQUU7WUFDTlUsS0FBSyxDQUFDRyxPQUFPLENBQUMwRSxLQUFLLENBQUMrSSxLQUFLLEVBQUU7WUFDM0I7VUFDRDtVQUNBLEtBQUssRUFBRTtZQUNOLElBQUk1TixLQUFLLENBQUMrRixVQUFVLENBQUNxQixnQkFBZ0IsRUFBRTtjQUN0Q3BILEtBQUssQ0FBQ0csT0FBTyxDQUFDZCxJQUFJLENBQUN1TyxLQUFLLEVBQUU7WUFDM0I7WUFDQTtVQUNEO1VBQ0EsS0FBSyxFQUFFO1lBQ04sSUFBSTVOLEtBQUssQ0FBQytGLFVBQVUsQ0FBQ3FCLGdCQUFnQixFQUFFO2NBQ3RDcEgsS0FBSyxDQUFDRyxPQUFPLENBQUMxQyxJQUFJLENBQUNtUSxLQUFLLEVBQUU7WUFDM0I7WUFDQTtRQUFNO01BRVQsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUgsYUFBYSxFQUFFLHlCQUFZO01BQzFCek4sS0FBSyxDQUFDd04sa0JBQWtCLEdBQUcsSUFBSTtNQUUvQnhOLEtBQUssQ0FBQ0csT0FBTyxDQUFDNEUsSUFBSSxDQUFDbEcsSUFBSSxFQUFFO01BQ3pCbUIsS0FBSyxDQUFDRyxPQUFPLENBQUM2RSxLQUFLLENBQUMwRixJQUFJLEVBQUU7TUFFMUIxSyxLQUFLLENBQUNDLEtBQUssQ0FBQ2dPLE1BQU0sR0FBRyxNQUFNO01BQzNCak8sS0FBSyxDQUFDRyxPQUFPLENBQUMyRSxHQUFHLENBQUM5RixXQUFXLENBQUNnQixLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLFFBQVEsQ0FBQztNQUVwRWhCLEtBQUssQ0FBQzBDLE9BQU8sR0FBRzBLLFVBQVUsQ0FBQyxZQUFZO1FBQ3RDcE4sS0FBSyxDQUFDRyxPQUFPLENBQUMyRSxHQUFHLENBQUN0RyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNmLElBQUksQ0FBQ21RLEtBQUssRUFBRTtNQUM3QyxDQUFDLEVBQUU1TixLQUFLLENBQUNhLFFBQVEsQ0FBQzZCLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFZ0wsWUFBWSxFQUFFLHdCQUFZO01BQ3pCMU4sS0FBSyxDQUFDRyxPQUFPLENBQUM0RSxJQUFJLENBQUMyRixJQUFJLEVBQUU7TUFDekIxSyxLQUFLLENBQUNHLE9BQU8sQ0FBQzZFLEtBQUssQ0FBQ25HLElBQUksRUFBRTtNQUUxQm1CLEtBQUssQ0FBQ0csT0FBTyxDQUFDMkUsR0FBRyxDQUFDMUcsUUFBUSxDQUFDNEIsS0FBSyxDQUFDYSxRQUFRLENBQUNHLFdBQVcsR0FBRyxRQUFRLENBQUM7TUFFakV1TixZQUFZLENBQUN2TyxLQUFLLENBQUMwQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRW9MLGNBQWMsRUFBRSwwQkFBWTtNQUMzQixJQUFJVSxNQUFNLEdBQUd6TyxDQUFDLENBQUVDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDNkgsUUFBUSxJQUFJOUgsS0FBSyxDQUFDYSxRQUFRLENBQUN4QyxJQUFJLENBQUU7UUFDNURvSixjQUFjLEdBQUd6SCxLQUFLLENBQUMrRixVQUFVLENBQUMwQixjQUFjLEdBQUcsQ0FBQztRQUNwRGdILEtBQUssR0FBRztVQUNQcFAsSUFBSSxFQUFFbVAsTUFBTSxDQUFDRSxFQUFFLENBQUMxTyxLQUFLLENBQUMrRixVQUFVLENBQUMyQixTQUFTLENBQUM7VUFDM0NqSyxJQUFJLEVBQUUrUSxNQUFNLENBQUNFLEVBQUUsQ0FBQzFPLEtBQUssQ0FBQytGLFVBQVUsQ0FBQzRCLFNBQVM7UUFDM0MsQ0FBQztNQUVGLElBQUkzSCxLQUFLLENBQUMrRixVQUFVLENBQUN3QixZQUFZLEdBQUcsQ0FBQyxFQUFFO1FBQ3RDdkgsS0FBSyxDQUFDRyxPQUFPLENBQUNkLElBQUksQ0FBQ3FMLElBQUksRUFBRTtNQUMxQixDQUFDLE1BQU07UUFDTitELEtBQUssQ0FBQ0UsUUFBUSxHQUFHSCxNQUFNLENBQUNFLEVBQUUsQ0FBQ2pILGNBQWMsQ0FBQztNQUMzQztNQUNBLElBQUl6SCxLQUFLLENBQUMrRixVQUFVLENBQUM0QixTQUFTLElBQUlGLGNBQWMsRUFBRTtRQUNqRHpILEtBQUssQ0FBQ0csT0FBTyxDQUFDMUMsSUFBSSxDQUFDaU4sSUFBSSxFQUFFO01BQzFCLENBQUMsTUFBTTtRQUNOK0QsS0FBSyxDQUFDaFIsSUFBSSxHQUFHK1EsTUFBTSxDQUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQzFCO01BRUEsSUFBSTFPLEtBQUssQ0FBQ2EsUUFBUSxDQUFDa0MsZUFBZSxLQUFLLElBQUksRUFBRTtRQUM1Qy9DLEtBQUssQ0FBQ0csT0FBTyxDQUFDZCxJQUFJLENBQUNxTCxJQUFJLEVBQUU7UUFDekIxSyxLQUFLLENBQUNHLE9BQU8sQ0FBQzFDLElBQUksQ0FBQ2lOLElBQUksRUFBRTtNQUMxQjtNQUVBLE9BQU8rRCxLQUFLO0lBQ2IsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0lBQ0VWLElBQUksRUFBRTtNQUNMO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7TUFDR0MsT0FBTyxFQUFFLG1CQUFZO1FBQ3BCLE9BQVFoTyxLQUFLLENBQUMrRixVQUFVLENBQUN3QixZQUFZLEtBQUssQ0FBQztNQUM1QyxDQUFDO01BRUQ7QUFDSDtBQUNBO0FBQ0E7QUFDQTtNQUNHcUgsYUFBYSxFQUFFLHlCQUFZO1FBQzFCLE9BQU81TyxLQUFLLENBQUMrRixVQUFVLFFBQUssQ0FBQ25ILEVBQUUsQ0FBQ29CLEtBQUssQ0FBQ0MsS0FBSyxDQUFDa04sV0FBVyxDQUFDO01BQ3pELENBQUM7TUFFRDtBQUNIO0FBQ0E7QUFDQTtBQUNBO01BQ0dlLE1BQU0sRUFBRSxrQkFBWTtRQUNuQixPQUFRbE8sS0FBSyxDQUFDK0YsVUFBVSxDQUFDd0IsWUFBWSxLQUFNdkgsS0FBSyxDQUFDK0YsVUFBVSxDQUFDMEIsY0FBYyxHQUFHLENBQUU7TUFDaEY7SUFDRCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0U2QyxZQUFZLEVBQUUsc0JBQVU3RCxPQUFPLEVBQUU7TUFDaEMsSUFBSW9JLE1BQU0sR0FBR3BJLE9BQU8sQ0FBQ3FJLEtBQUssRUFBRTtRQUMzQkMsUUFBUSxHQUFHdEksT0FBTyxDQUFDcEksSUFBSSxDQUFDLElBQUksQ0FBQzs7TUFFOUI7TUFDQSxJQUFJb0ksT0FBTyxDQUFDN0gsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzFCb0IsS0FBSyxDQUFDZ1AsZ0JBQWdCLENBQUN2SSxPQUFPLENBQUM7UUFDL0JBLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQyxJQUFJLEVBQUUyQixLQUFLLENBQUNhLFFBQVEsQ0FBQ0UsUUFBUSxHQUFHLE9BQU8sR0FBR2dPLFFBQVEsQ0FBQyxDQUFDcEUsS0FBSyxFQUFFO01BQ3pFLENBQUMsTUFBTTtRQUNOO1FBQ0FrRSxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFDeEI7TUFFQSxPQUFPSixNQUFNLENBQUNuRSxJQUFJLEVBQUU7SUFDckIsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRXdFLGNBQWMsRUFBRSwwQkFBWTtNQUMzQixJQUFJQyxXQUFXLEdBQUdDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDN0MsV0FBVyxFQUFFO1FBQ2xEOEMsT0FBTyxHQUFHSCxXQUFXLENBQUNJLEtBQUssQ0FBQ3ZQLEtBQUssQ0FBQ2EsUUFBUSxDQUFDcUIscUJBQXFCLENBQUM7TUFFbEUsT0FBT29OLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSztJQUM5QixDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFRSxxQkFBcUIsRUFBRSxpQ0FBWTtNQUNsQyxJQUFJOUssSUFBSSxHQUFHMUUsS0FBSyxDQUFDRyxPQUFPLENBQUN1RSxJQUFJLENBQUMyQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DbUoscUJBQXFCLEdBQUcsS0FBSztRQUM3QkMsaUJBQWlCLEdBQUc7VUFDbkIsWUFBWSxFQUFFLEVBQUU7VUFDaEIsa0JBQWtCLEVBQUUsVUFBVTtVQUM5QixlQUFlLEVBQUUsT0FBTztVQUN4QixhQUFhLEVBQUUsS0FBSztVQUNwQixjQUFjLEVBQUU7UUFDakIsQ0FBQztNQUVGLEtBQUssSUFBSWhELEdBQUcsSUFBSWdELGlCQUFpQixFQUFFO1FBQ2xDLElBQUlBLGlCQUFpQixDQUFDL0MsY0FBYyxDQUFDRCxHQUFHLENBQUMsSUFBSUEsR0FBRyxJQUFJL0gsSUFBSSxDQUFDOUUsS0FBSyxFQUFFO1VBQy9ESSxLQUFLLENBQUNFLE9BQU8sQ0FBQ2dCLFVBQVUsR0FBR3VPLGlCQUFpQixDQUFDaEQsR0FBRyxDQUFDO1VBQ2pEK0MscUJBQXFCLEdBQUcsSUFBSTtRQUM3QjtNQUNEO01BRUEsT0FBT0EscUJBQXFCO0lBQzdCLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtJQUNFdE8sVUFBVSxFQUFFO01BQ1g7QUFDSDtBQUNBO0FBQ0E7QUFDQTtNQUNHLE1BQUksZUFBWTtRQUNmLElBQUlsQixLQUFLLENBQUNhLFFBQVEsQ0FBQ00sY0FBYyxJQUFJLENBQUNuQixLQUFLLENBQUNDLEtBQUssQ0FBQ2tOLFdBQVcsRUFBRTtVQUM5RCxPQUFPbk4sS0FBSyxDQUFDYSxRQUFRLENBQUNNLGNBQWM7UUFDckM7UUFDQSxPQUFPbkIsS0FBSyxDQUFDYSxRQUFRLENBQUNRLFlBQVk7TUFDbkMsQ0FBQztNQUVEO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0cyTCxJQUFJLEVBQUUsY0FBVXZHLE9BQU8sRUFBRWpELElBQUksRUFBRWtNLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7UUFDeEQsSUFBSUMsY0FBYyxHQUFHck0sSUFBSSxLQUFLLElBQUk7VUFDakNzTSxlQUFlLEdBQUcsQ0FBQyxDQUFDO1VBQ3BCQyxZQUFZLEdBQUd0SixPQUFPLENBQUN6SSxHQUFHLENBQUMsU0FBUyxDQUFDO1VBQ3JDZ1MsYUFBYSxHQUFHLENBQUMsQ0FBQztVQUNsQkMsVUFBVSxHQUFHTixPQUFPLEdBQUdBLE9BQU8sR0FBRUUsY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBRXZELElBQUksQ0FBQzdQLEtBQUssQ0FBQ2tRLE1BQU0sSUFBSUwsY0FBYyxFQUFFO1FBRXJDQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUdDLFlBQVk7UUFDekNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBR0MsVUFBVTtRQUVyQ3hKLE9BQU8sQ0FBQ3pJLEdBQUcsQ0FBQ2dDLEtBQUssQ0FBQ0UsT0FBTyxDQUFDZ0IsVUFBVSxHQUFHLFlBQVksRUFBRSxNQUFNLENBQUM7UUFDNUR1RixPQUFPLENBQUN6SSxHQUFHLENBQUM4UixlQUFlLENBQUMsQ0FBQ3BGLElBQUksRUFBRTs7UUFFbkM7UUFDQSxJQUFJMUssS0FBSyxDQUFDRSxPQUFPLENBQUNpUSxXQUFXLEVBQUU7VUFDOUJILGFBQWEsQ0FBQ2hRLEtBQUssQ0FBQ0UsT0FBTyxDQUFDZ0IsVUFBVSxHQUFHLFlBQVksQ0FBQyxHQUFHd08sS0FBSyxHQUFHLFNBQVM7VUFFMUV0QyxVQUFVLENBQUMsWUFBWTtZQUN0QjNHLE9BQU8sQ0FBQ3pJLEdBQUcsQ0FBQ2dTLGFBQWEsQ0FBQztZQUUxQjVDLFVBQVUsQ0FBQyxZQUFZO2NBQ3RCM0csT0FBTyxDQUFDekksR0FBRyxDQUFDZ0MsS0FBSyxDQUFDRSxPQUFPLENBQUNnQixVQUFVLEdBQUcsWUFBWSxFQUFFLEVBQUUsQ0FBQztjQUV4RCxJQUFJME8sUUFBUSxLQUFLNVAsS0FBSyxDQUFDa1EsTUFBTSxJQUFJLENBQUNMLGNBQWMsQ0FBQyxFQUFFO2dCQUNsREQsUUFBUSxFQUFFO2NBQ1g7WUFDRCxDQUFDLEVBQUVGLEtBQUssQ0FBQztVQUNWLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDUCxDQUFDLE1BQU07VUFDTjtVQUNBakosT0FBTyxDQUFDMkosSUFBSSxFQUFFO1VBQ2QzSixPQUFPLENBQUM0SixPQUFPLENBQUNMLGFBQWEsRUFBRU4sS0FBSyxFQUFFRSxRQUFRLENBQUM7UUFDaEQ7TUFDRCxDQUFDO01BRUQ7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0c3QyxNQUFNLEVBQUUsZ0JBQVV0RyxPQUFPLEVBQUVqRCxJQUFJLEVBQUVrTSxLQUFLLEVBQUVFLFFBQVEsRUFBRTtRQUNqRCxJQUFJQyxjQUFjLEdBQUdyTSxJQUFJLEtBQUssSUFBSTtVQUNqQ3RDLFVBQVUsR0FBRzJPLGNBQWMsR0FBRzdQLEtBQUssQ0FBQ2EsUUFBUSxDQUFDUSxZQUFZLEdBQUdyQixLQUFLLENBQUNhLFFBQVEsQ0FBQ1MsYUFBYTtVQUN4RmdQLFNBQVMsR0FBRyxNQUFNO1VBQ2xCUixlQUFlLEdBQUcsQ0FBQyxDQUFDO1VBQ3BCQyxZQUFZLEdBQUdGLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQztVQUNyQ1UsV0FBVyxHQUFHVixjQUFjLEdBQUcsTUFBTSxHQUFHLEtBQUs7VUFDN0NHLGFBQWEsR0FBRyxDQUFDLENBQUM7VUFDbEJDLFVBQVUsR0FBR0osY0FBYyxHQUFHLENBQUMsR0FBRyxDQUFDO1VBQ25DVyxTQUFTLEdBQUdYLGNBQWMsR0FBRyxLQUFLLEdBQUcsTUFBTTtRQUU1QyxJQUFJLENBQUM3UCxLQUFLLENBQUNrUSxNQUFNLElBQUlMLGNBQWMsRUFBRTtRQUVyQyxRQUFRM08sVUFBVTtVQUNqQixLQUFLLFdBQVc7WUFDZm9QLFNBQVMsR0FBRyxLQUFLO1lBQ2pCO1VBQ0QsS0FBSyxhQUFhO1lBQ2pCQyxXQUFXLEdBQUdWLGNBQWMsR0FBRyxNQUFNLEdBQUcsS0FBSztZQUM3Q1csU0FBUyxHQUFHWCxjQUFjLEdBQUcsS0FBSyxHQUFHLE1BQU07WUFDM0M7VUFDRCxLQUFLLGNBQWM7WUFDbEJTLFNBQVMsR0FBRyxLQUFLO1lBQ2pCQyxXQUFXLEdBQUdWLGNBQWMsR0FBRyxNQUFNLEdBQUcsS0FBSztZQUM3Q1csU0FBUyxHQUFHWCxjQUFjLEdBQUcsS0FBSyxHQUFHLE1BQU07WUFDM0M7VUFDRCxLQUFLLGtCQUFrQjtZQUN0QlUsV0FBVyxHQUFHVixjQUFjLEdBQUcsTUFBTSxHQUFHLEtBQUs7WUFDN0NXLFNBQVMsR0FBR1gsY0FBYyxHQUFHLEtBQUssR0FBRyxNQUFNO1lBQzNDO1VBQ0QsS0FBSyxnQkFBZ0I7WUFDcEJTLFNBQVMsR0FBRyxLQUFLO1lBQ2pCQyxXQUFXLEdBQUdWLGNBQWMsR0FBRyxNQUFNLEdBQUcsS0FBSztZQUM3Q1csU0FBUyxHQUFHWCxjQUFjLEdBQUcsS0FBSyxHQUFHLE1BQU07WUFDM0M7UUFBTTtRQUdSLElBQUk3UCxLQUFLLENBQUNDLEtBQUssQ0FBQ2dPLE1BQU0sS0FBSyxNQUFNLEVBQUU7VUFDbEMsUUFBUS9NLFVBQVU7WUFDakIsS0FBSyxrQkFBa0I7Y0FDdEJxUCxXQUFXLEdBQUdWLGNBQWMsR0FBRyxNQUFNLEdBQUcsS0FBSztjQUM3Q1csU0FBUyxHQUFHWCxjQUFjLEdBQUcsS0FBSyxHQUFHLE1BQU07Y0FDM0M7WUFDRCxLQUFLLGdCQUFnQjtjQUNwQlUsV0FBVyxHQUFHVixjQUFjLEdBQUcsTUFBTSxHQUFHLEtBQUs7Y0FDN0NXLFNBQVMsR0FBR1gsY0FBYyxHQUFHLEtBQUssR0FBRyxNQUFNO2NBQzNDO1VBQU07UUFFVDtRQUVBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUdDLFlBQVk7UUFDekNELGVBQWUsQ0FBQ1EsU0FBUyxDQUFDLEdBQUdDLFdBQVc7UUFFeENQLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBR0MsVUFBVTtRQUNyQ0QsYUFBYSxDQUFDTSxTQUFTLENBQUMsR0FBR0UsU0FBUztRQUVwQy9KLE9BQU8sQ0FBQ3pJLEdBQUcsQ0FBQ2dDLEtBQUssQ0FBQ0UsT0FBTyxDQUFDZ0IsVUFBVSxHQUFHLFlBQVksRUFBRSxNQUFNLENBQUM7UUFDNUR1RixPQUFPLENBQUN6SSxHQUFHLENBQUM4UixlQUFlLENBQUMsQ0FBQ3BGLElBQUksRUFBRTs7UUFFbkM7UUFDQSxJQUFJMUssS0FBSyxDQUFDRSxPQUFPLENBQUNpUSxXQUFXLEVBQUU7VUFDOUJILGFBQWEsQ0FBQ2hRLEtBQUssQ0FBQ0UsT0FBTyxDQUFDZ0IsVUFBVSxHQUFHLFlBQVksQ0FBQyxHQUFHd08sS0FBSyxHQUFHLFNBQVM7VUFFMUV0QyxVQUFVLENBQUMsWUFBWTtZQUN0QjNHLE9BQU8sQ0FBQ3pJLEdBQUcsQ0FBQ2dTLGFBQWEsQ0FBQztZQUUxQjVDLFVBQVUsQ0FBQyxZQUFZO2NBQ3RCM0csT0FBTyxDQUFDekksR0FBRyxDQUFDZ0MsS0FBSyxDQUFDRSxPQUFPLENBQUNnQixVQUFVLEdBQUcsWUFBWSxFQUFFLEVBQUUsQ0FBQztjQUV4RCxJQUFJME8sUUFBUSxLQUFLNVAsS0FBSyxDQUFDa1EsTUFBTSxJQUFJLENBQUNMLGNBQWMsQ0FBQyxFQUFFO2dCQUNsREQsUUFBUSxFQUFFO2NBQ1g7WUFDRCxDQUFDLEVBQUVGLEtBQUssQ0FBQztVQUNWLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDUCxDQUFDLE1BQU07VUFDTjtVQUNBakosT0FBTyxDQUFDMkosSUFBSSxFQUFFO1VBQ2QzSixPQUFPLENBQUM0SixPQUFPLENBQUNMLGFBQWEsRUFBRU4sS0FBSyxFQUFFRSxRQUFRLENBQUM7UUFDaEQ7TUFDRCxDQUFDO01BRUQ7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0czQyxJQUFJLEVBQUUsY0FBVXhHLE9BQU8sRUFBRWpELElBQUksRUFBRWtNLEtBQUssRUFBRUUsUUFBUSxFQUFFO1FBQy9DLElBQUlDLGNBQWMsR0FBR3JNLElBQUksS0FBSyxJQUFJO1VBQ2pDc00sZUFBZSxHQUFHLENBQUMsQ0FBQztVQUNwQkMsWUFBWSxHQUFHdEosT0FBTyxDQUFDekksR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUNyQ3lTLFVBQVUsR0FBR1osY0FBYyxHQUFHLGFBQWEsR0FBRyxVQUFVO1VBQ3hERyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1VBQ2xCQyxVQUFVLEdBQUdKLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQztVQUNuQ2EsUUFBUSxHQUFHYixjQUFjLEdBQUcsVUFBVSxHQUFHLGFBQWE7UUFFdkQsSUFBSSxDQUFDN1AsS0FBSyxDQUFDa1EsTUFBTSxJQUFJTCxjQUFjLEVBQUU7UUFFckNDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBR0MsWUFBWTtRQUN6Q0QsZUFBZSxDQUFDOVAsS0FBSyxDQUFDRSxPQUFPLENBQUNnQixVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUd1UCxVQUFVO1FBRXBFVCxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUdDLFVBQVU7UUFFckN4SixPQUFPLENBQUN6SSxHQUFHLENBQUNnQyxLQUFLLENBQUNFLE9BQU8sQ0FBQ2dCLFVBQVUsR0FBRyxZQUFZLEVBQUUsTUFBTSxDQUFDO1FBQzVEdUYsT0FBTyxDQUFDekksR0FBRyxDQUFDOFIsZUFBZSxDQUFDLENBQUNwRixJQUFJLEVBQUU7O1FBRW5DO1FBQ0EsSUFBSTFLLEtBQUssQ0FBQ0UsT0FBTyxDQUFDaVEsV0FBVyxFQUFFO1VBQzlCSCxhQUFhLENBQUNoUSxLQUFLLENBQUNFLE9BQU8sQ0FBQ2dCLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBR3dQLFFBQVE7VUFDaEVWLGFBQWEsQ0FBQ2hRLEtBQUssQ0FBQ0UsT0FBTyxDQUFDZ0IsVUFBVSxHQUFHLFlBQVksQ0FBQyxHQUFHd08sS0FBSyxHQUFHLFNBQVM7VUFFMUV0QyxVQUFVLENBQUMsWUFBWTtZQUN0QjNHLE9BQU8sQ0FBQ3pJLEdBQUcsQ0FBQ2dTLGFBQWEsQ0FBQztZQUUxQjVDLFVBQVUsQ0FBQyxZQUFZO2NBQ3RCM0csT0FBTyxDQUFDekksR0FBRyxDQUFDZ0MsS0FBSyxDQUFDRSxPQUFPLENBQUNnQixVQUFVLEdBQUcsV0FBVyxFQUFFLEVBQUUsQ0FBQztjQUN2RHVGLE9BQU8sQ0FBQ3pJLEdBQUcsQ0FBQ2dDLEtBQUssQ0FBQ0UsT0FBTyxDQUFDZ0IsVUFBVSxHQUFHLFlBQVksRUFBRSxFQUFFLENBQUM7Y0FFeEQsSUFBSTBPLFFBQVEsS0FBSzVQLEtBQUssQ0FBQ2tRLE1BQU0sSUFBSSxDQUFDTCxjQUFjLENBQUMsRUFBRTtnQkFDbERELFFBQVEsRUFBRTtjQUNYO1lBQ0QsQ0FBQyxFQUFFRixLQUFLLENBQUM7VUFDVixDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxNQUFNO1VBQ047VUFDQWpKLE9BQU8sQ0FBQzJKLElBQUksRUFBRTtVQUNkM0osT0FBTyxDQUFDNEosT0FBTyxDQUFDTCxhQUFhLEVBQUVOLEtBQUssRUFBRUUsUUFBUSxDQUFDO1FBQ2hEO01BQ0Q7SUFDRCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0U5SixVQUFVLEVBQUUsb0JBQVU2SyxLQUFLLEVBQUU7TUFDNUIsSUFBSSxRQUFPQSxLQUFLLE1BQU0sUUFBUSxFQUFFO1FBQy9CNVEsQ0FBQyxDQUFDeEMsSUFBSSxDQUFDb1QsS0FBSyxFQUFFLFVBQVNuSixLQUFLLEVBQUVvSixJQUFJLEVBQUU7VUFDbkMsSUFBSSxPQUFPQSxJQUFLLEtBQUssVUFBVSxFQUFFO1lBQ2hDQSxJQUFJLENBQUNDLElBQUksQ0FBQzdRLEtBQUssQ0FBQ1ksTUFBTSxDQUFDO1VBQ3hCO1FBQ0QsQ0FBQyxDQUFDO01BQ0g7SUFDRCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0VvTyxnQkFBZ0IsRUFBRSwwQkFBVXZJLE9BQU8sRUFBRTtNQUNwQzFHLENBQUMsQ0FBQ3ZCLElBQUksQ0FBQ2lJLE9BQU8sRUFBRSxPQUFPLEVBQUU7UUFDeEJxSyxFQUFFLEVBQUVySyxPQUFPLENBQUNwSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCNEcsT0FBTyxFQUFFd0IsT0FBTyxDQUFDbkksSUFBSTtNQUN0QixDQUFDLENBQUM7TUFFRjBCLEtBQUssQ0FBQ0MsS0FBSyxDQUFDaUssY0FBYyxHQUFHekQsT0FBTztJQUNyQyxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFMEQsY0FBYyxFQUFFLDBCQUFZO01BQzNCLElBQUkxRCxPQUFPLEdBQUcxRyxDQUFDLENBQUMsUUFBUSxHQUFHQyxLQUFLLENBQUNhLFFBQVEsQ0FBQ0UsUUFBUSxHQUFHLFNBQVMsQ0FBQztNQUUvRDBGLE9BQU8sQ0FBQ3BJLElBQUksQ0FBQyxJQUFJLEVBQUUwQixDQUFDLENBQUN2QixJQUFJLENBQUN3QixLQUFLLENBQUNDLEtBQUssQ0FBQ2lLLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQzRHLEVBQUUsQ0FBQztNQUNsRXJLLE9BQU8sQ0FBQ25JLElBQUksQ0FBQ3lCLENBQUMsQ0FBQ3ZCLElBQUksQ0FBQ3dCLEtBQUssQ0FBQ0MsS0FBSyxDQUFDaUssY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDakYsT0FBTyxDQUFDO0lBQ2xFLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNFOEwsTUFBTSxFQUFFLGdCQUFVdlEsS0FBSyxFQUFFMkYsVUFBVSxFQUFFO01BQ3BDLElBQUksQ0FBQ25HLEtBQUssQ0FBQ2tRLE1BQU0sRUFBRTtNQUVuQixJQUFJbFEsS0FBSyxDQUFDZ0ssa0JBQWtCLEVBQUUsRUFBRTtRQUMvQmhLLEtBQUssQ0FBQzBOLFlBQVksRUFBRTtNQUNyQjtNQUVBLElBQUksUUFBT3ZILFVBQVUsTUFBSyxRQUFRLElBQUlBLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDMUQsSUFBSUEsVUFBVSxDQUFDekUsS0FBSyxFQUFFO1VBQ3JCMUIsS0FBSyxDQUFDQyxLQUFLLENBQUN1RyxNQUFNLENBQUNuSSxJQUFJLENBQ3RCMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQ25DUCxVQUFVLENBQUN6RSxLQUFLLENBQ2hCO1FBQ0Y7UUFDQSxJQUFJeUUsVUFBVSxDQUFDdkUsUUFBUSxFQUFFO1VBQ3hCNUIsS0FBSyxDQUFDQyxLQUFLLENBQUN1RyxNQUFNLENBQUNuSSxJQUFJLENBQ3RCMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLEVBQ3ZDUCxVQUFVLENBQUN2RSxRQUFRLENBQ25CO1FBQ0Y7UUFDQSxJQUFJdUUsVUFBVSxDQUFDeEUsTUFBTSxFQUFFO1VBQ3RCM0IsS0FBSyxDQUFDQyxLQUFLLENBQUN1RyxNQUFNLENBQUNuSSxJQUFJLENBQ3RCMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQ3BDUCxVQUFVLENBQUN4RSxNQUFNLENBQ2pCO1FBQ0Y7UUFDQSxJQUFJd0UsVUFBVSxDQUFDdEUsU0FBUyxFQUFFO1VBQ3pCN0IsS0FBSyxDQUFDQyxLQUFLLENBQUN1RyxNQUFNLENBQUNuSSxJQUFJLENBQ3RCMkIsS0FBSyxDQUFDMEcsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEVBQ3hDUCxVQUFVLENBQUN0RSxTQUFTLENBQ3BCO1FBQ0Y7TUFDRDtNQUVBN0IsS0FBSyxDQUFDbUcsVUFBVSxHQUFHbkcsS0FBSyxDQUFDb0cscUJBQXFCLEVBQUU7TUFDaERwRyxLQUFLLENBQUNvTCxvQkFBb0IsQ0FBQ3BMLEtBQUssQ0FBQ0MsS0FBSyxDQUFDdUcsTUFBTSxDQUFDOztNQUU5QztNQUNBeEcsS0FBSyxDQUFDOEYsVUFBVSxDQUFDOUYsS0FBSyxDQUFDYSxRQUFRLENBQUM4RSxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRWdJLHVCQUF1QixFQUFFLG1DQUFZO01BQ3BDNU4sQ0FBQyxDQUFDa00sTUFBTSxDQUFDLENBQUM4RSxNQUFNLENBQUMvUSxLQUFLLENBQUMrUSxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUMseUJBQXlCLEVBQUUscUNBQVk7TUFDdENqUixDQUFDLENBQUNrTSxNQUFNLENBQUMsQ0FBQy9OLEdBQUcsQ0FBQyxRQUFRLEVBQUU4QixLQUFLLENBQUMrUSxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUUsdUJBQXVCLEVBQUUsbUNBQVk7TUFDcENqUixLQUFLLENBQUNhLFFBQVEsQ0FBQ3dCLFlBQVksR0FBRyxDQUFDO01BQy9CckMsS0FBSyxDQUFDYSxRQUFRLENBQUN5QixjQUFjLEdBQUcsQ0FBQztNQUVqQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzNCLFFBQVEsQ0FBQzRCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDRyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7SUFDbEUsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRWtGLEtBQUssRUFBRSxpQkFBWTtNQUNsQmxHLEtBQUssQ0FBQ2tRLE1BQU0sR0FBRyxJQUFJO01BRW5CbFEsS0FBSyxDQUFDRSxPQUFPLENBQUNpUSxXQUFXLEdBQUduUSxLQUFLLENBQUNhLFFBQVEsQ0FBQ1UsY0FBYyxHQUFHdkIsS0FBSyxDQUFDd1AscUJBQXFCLEVBQUUsR0FBRyxLQUFLO01BQ2pHeFAsS0FBSyxDQUFDRSxPQUFPLENBQUNnUixZQUFZLEdBQUdsUixLQUFLLENBQUNrUCxjQUFjLEVBQUU7TUFFbkQsSUFBSWxQLEtBQUssQ0FBQ0UsT0FBTyxDQUFDZ1IsWUFBWSxFQUFFO1FBQy9CblIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDM0IsUUFBUSxDQUFDNEIsS0FBSyxDQUFDYSxRQUFRLENBQUNHLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUVqRSxJQUFJaEIsS0FBSyxDQUFDYSxRQUFRLENBQUNvQix1QkFBdUIsRUFBRTtVQUMzQ2pDLEtBQUssQ0FBQ2lSLHVCQUF1QixFQUFFO1FBQ2hDO01BQ0Q7TUFFQSxJQUFJLENBQUNqUixLQUFLLENBQUNhLFFBQVEsQ0FBQ1EsWUFBWSxFQUFFO1FBQ2pDckIsS0FBSyxDQUFDYSxRQUFRLENBQUNRLFlBQVksR0FBR3JCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDSyxVQUFVO01BQ3hEO01BQ0EsSUFBSSxDQUFDbEIsS0FBSyxDQUFDYSxRQUFRLENBQUNTLGFBQWEsRUFBRTtRQUNsQ3RCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDUyxhQUFhLEdBQUd0QixLQUFLLENBQUNhLFFBQVEsQ0FBQ0ssVUFBVTtNQUN6RDtNQUVBLFFBQVFsQixLQUFLLENBQUNrQixVQUFVLE1BQUcsRUFBRTtRQUM1QixLQUFLLE1BQU07UUFDWCxLQUFLLFlBQVk7UUFDakIsS0FBSyxTQUFTO1FBQ2QsS0FBSyxXQUFXO1FBQ2hCLEtBQUssYUFBYTtRQUNsQixLQUFLLGNBQWM7UUFDbkIsS0FBSyxZQUFZO1FBQ2pCLEtBQUssZ0JBQWdCO1FBQ3JCLEtBQUssa0JBQWtCO1VBQ3RCLElBQUlsQixLQUFLLENBQUNHLE9BQU8sUUFBSyxDQUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JDb0IsS0FBSyxDQUFDRyxPQUFPLENBQUMwRSxLQUFLLENBQUM3RyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNyQ2dDLEtBQUssQ0FBQ0csT0FBTyxDQUFDd0UsT0FBTyxDQUFDM0csR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDdkNnQyxLQUFLLENBQUNHLE9BQU8sUUFBSyxDQUFDbkMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDcENnQyxLQUFLLENBQUNHLE9BQU8sQ0FBQ2dGLFlBQVksQ0FBQ25ILEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1VBQzdDO1VBQ0FnQyxLQUFLLENBQUNrQixVQUFVLENBQUM4TCxJQUFJLENBQUNoTixLQUFLLENBQUNHLE9BQU8sQ0FBQ3dFLE9BQU8sRUFBRSxJQUFJLEVBQUUzRSxLQUFLLENBQUNhLFFBQVEsQ0FBQ1csT0FBTyxFQUFFeEIsS0FBSyxDQUFDYSxRQUFRLENBQUN5QixjQUFjLEVBQUUsWUFBWTtZQUNySHRDLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQzhMLElBQUksQ0FBQ2hOLEtBQUssQ0FBQ0csT0FBTyxDQUFDMEUsS0FBSyxFQUFFLElBQUksRUFBRTdFLEtBQUssQ0FBQ2EsUUFBUSxDQUFDVyxPQUFPLENBQUM7WUFDeEV4QixLQUFLLENBQUNzTixhQUFhLEVBQUU7WUFDckJ0TixLQUFLLENBQUNxTixlQUFlLEVBQUU7VUFDeEIsQ0FBQyxDQUFDO1VBQ0Y7UUFDRDtVQUNDck4sS0FBSyxDQUFDa0IsVUFBVSxDQUFDOEwsSUFBSSxDQUFDaE4sS0FBSyxDQUFDRyxPQUFPLENBQUN3RSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTNFLEtBQUssQ0FBQ2EsUUFBUSxDQUFDeUIsY0FBYyxFQUFFLFlBQVk7WUFDaEd0QyxLQUFLLENBQUNrQixVQUFVLENBQUM4TCxJQUFJLENBQUNoTixLQUFLLENBQUNHLE9BQU8sQ0FBQzBFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ25EN0UsS0FBSyxDQUFDc04sYUFBYSxFQUFFO1lBQ3JCdE4sS0FBSyxDQUFDcU4sZUFBZSxFQUFFO1VBQ3hCLENBQUMsQ0FBQztVQUNGO01BQU07TUFHUnJOLEtBQUssQ0FBQ0csT0FBTyxDQUFDbEMsUUFBUSxDQUFDRyxRQUFRLENBQUM0QixLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLE1BQU0sQ0FBQztNQUNwRWhCLEtBQUssQ0FBQ0csT0FBTyxRQUFLLENBQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0lBQ0VxTSxJQUFJLEVBQUUsZ0JBQVk7TUFDakI7TUFDQTFLLEtBQUssQ0FBQzhGLFVBQVUsQ0FBQzlGLEtBQUssQ0FBQ2EsUUFBUSxDQUFDMEUsMkJBQTJCLENBQUM7TUFFNUR2RixLQUFLLENBQUNvTCxvQkFBb0IsQ0FBQ3BMLEtBQUssQ0FBQ0MsS0FBSyxDQUFDdUcsTUFBTSxDQUFDOztNQUU5QztNQUNBeEcsS0FBSyxDQUFDOEYsVUFBVSxDQUFDOUYsS0FBSyxDQUFDYSxRQUFRLENBQUMyRSwwQkFBMEIsQ0FBQztNQUUzRHhGLEtBQUssQ0FBQzhNLGtCQUFrQixFQUFFO0lBQzNCLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0lBQ0VqSSxLQUFLLEVBQUUsaUJBQVk7TUFDbEI3RSxLQUFLLENBQUNrUSxNQUFNLEdBQUcsS0FBSztNQUVwQixJQUFJbFEsS0FBSyxDQUFDZ0ssa0JBQWtCLEVBQUUsRUFBRTtRQUMvQmhLLEtBQUssQ0FBQzBOLFlBQVksRUFBRTtRQUNwQjFOLEtBQUssQ0FBQ3dOLGtCQUFrQixHQUFHLEtBQUs7UUFDaEN4TixLQUFLLENBQUNHLE9BQU8sQ0FBQzJFLEdBQUcsQ0FBQzlGLFdBQVcsQ0FBQ2dCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDRyxXQUFXLEdBQUcsUUFBUSxDQUFDO01BQ3JFO01BRUFoQixLQUFLLENBQUNHLE9BQU8sQ0FBQ3lFLE9BQU8sQ0FBQy9GLElBQUksRUFBRTtNQUU1Qm1CLEtBQUssQ0FBQ3VOLGFBQWEsRUFBRTtNQUVyQnZOLEtBQUssQ0FBQ2dSLHlCQUF5QixFQUFFO01BRWpDalIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDZixXQUFXLENBQUNnQixLQUFLLENBQUNhLFFBQVEsQ0FBQ0csV0FBVyxHQUFHLE1BQU0sQ0FBQztNQUMxRGhCLEtBQUssQ0FBQ0csT0FBTyxRQUFLLENBQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztNQUU5QzJCLEtBQUssQ0FBQ0csT0FBTyxDQUFDMkUsR0FBRyxDQUFDNkIsUUFBUSxFQUFFLENBQUM5SCxJQUFJLEVBQUU7TUFDbkNtQixLQUFLLENBQUNHLE9BQU8sQ0FBQzBFLEtBQUssQ0FBQ2hHLElBQUksRUFBRTs7TUFFMUI7TUFDQW1CLEtBQUssQ0FBQzhGLFVBQVUsQ0FBQzlGLEtBQUssQ0FBQ2EsUUFBUSxDQUFDK0UsT0FBTyxDQUFDOztNQUV4QztNQUNBNUYsS0FBSyxDQUFDa0IsVUFBVSxDQUFDOEwsSUFBSSxDQUFDaE4sS0FBSyxDQUFDRyxPQUFPLENBQUMrRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztNQUVuRCxRQUFRbEYsS0FBSyxDQUFDYSxRQUFRLENBQUNPLGVBQWUsSUFBSXBCLEtBQUssQ0FBQ2EsUUFBUSxDQUFDUyxhQUFhO1FBQ3JFLEtBQUssTUFBTTtRQUNYLEtBQUssWUFBWTtRQUNqQixLQUFLLFdBQVc7UUFDaEIsS0FBSyxhQUFhO1FBQ2xCLEtBQUssY0FBYztRQUNuQixLQUFLLFlBQVk7UUFDakIsS0FBSyxrQkFBa0I7UUFDdkIsS0FBSyxnQkFBZ0I7VUFDcEJ0QixLQUFLLENBQUNrQixVQUFVLENBQUM4TCxJQUFJLENBQUNoTixLQUFLLENBQUNHLE9BQU8sUUFBSyxFQUFFLEtBQUssRUFBRUgsS0FBSyxDQUFDYSxRQUFRLENBQUNZLFFBQVEsRUFBRSxDQUFDLEVBQUUsWUFBWTtZQUN4RnpCLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQzhMLElBQUksQ0FBQ2hOLEtBQUssQ0FBQ0csT0FBTyxDQUFDd0UsT0FBTyxFQUFFLEtBQUssRUFBRTNFLEtBQUssQ0FBQ2EsUUFBUSxDQUFDWSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFlBQVk7Y0FDM0Z6QixLQUFLLENBQUNtUixPQUFPLEVBQUU7WUFDaEIsQ0FBQyxDQUFDO1VBQ0gsQ0FBQyxDQUFDO1VBQ0Y7UUFDRCxLQUFLLFNBQVM7VUFDYm5SLEtBQUssQ0FBQ2tCLFVBQVUsQ0FBQytMLElBQUksQ0FBQ2pOLEtBQUssQ0FBQ0csT0FBTyxRQUFLLEVBQUUsS0FBSyxFQUFFSCxLQUFLLENBQUNhLFFBQVEsQ0FBQ1ksUUFBUSxFQUFFLFlBQVk7WUFDckZ6QixLQUFLLENBQUNrQixVQUFVLENBQUM4TCxJQUFJLENBQUNoTixLQUFLLENBQUNHLE9BQU8sQ0FBQ3dFLE9BQU8sRUFBRSxLQUFLLEVBQUUzRSxLQUFLLENBQUNhLFFBQVEsQ0FBQ1ksUUFBUSxFQUFFLENBQUMsRUFBRSxZQUFZO2NBQzNGekIsS0FBSyxDQUFDbVIsT0FBTyxFQUFFO1lBQ2hCLENBQUMsQ0FBQztVQUNILENBQUMsQ0FBQztVQUNGO1FBQ0Q7VUFDQ25SLEtBQUssQ0FBQ21SLE9BQU8sRUFBRTtVQUNmO01BQU07SUFFVCxDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtJQUNFNUQsYUFBYSxFQUFFLHlCQUFZO01BQzFCO01BQ0F2TixLQUFLLENBQUNHLE9BQU8sQ0FBQ3dFLE9BQU8sQ0FBQ3JFLE1BQU0sQ0FBQyxPQUFPLENBQUM7O01BRXJDO01BQ0FQLENBQUMsQ0FBQzlCLFFBQVEsQ0FBQyxDQUFDcUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDOztNQUVyQztNQUNBTixLQUFLLENBQUNHLE9BQU8sUUFBSyxDQUFDRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUNBLE1BQU0sQ0FBQyxZQUFZLENBQUM7O01BRTNEO01BQ0FOLEtBQUssQ0FBQ0csT0FBTyxDQUFDZCxJQUFJLENBQUNpQixNQUFNLENBQUMsT0FBTyxDQUFDO01BQ2xDTixLQUFLLENBQUNHLE9BQU8sQ0FBQzFDLElBQUksQ0FBQzZDLE1BQU0sQ0FBQyxPQUFPLENBQUM7TUFDbENOLEtBQUssQ0FBQ0csT0FBTyxDQUFDNEUsSUFBSSxDQUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNsQ04sS0FBSyxDQUFDRyxPQUFPLENBQUM2RSxLQUFLLENBQUMxRSxNQUFNLENBQUMsT0FBTyxDQUFDOztNQUVuQztNQUNBTixLQUFLLENBQUNHLE9BQU8sQ0FBQzBFLEtBQUssQ0FBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRStLLGtCQUFrQixFQUFFLDhCQUFZO01BQy9CLElBQUlzRSxPQUFPLEdBQUczUCxLQUFLLENBQUNHLE9BQU8sQ0FBQ2dGLFlBQVksQ0FBQ25ILEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFFdkRnQyxLQUFLLENBQUNHLE9BQU8sUUFBSyxDQUFDbkMsR0FBRyxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxFQUFFO1FBQ1gsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsWUFBWSxFQUFFLEVBQUU7UUFDaEIsYUFBYSxFQUFFO01BQ2hCLENBQUMsQ0FBQztNQUVGZ0MsS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLENBQUM4SixVQUFVLENBQUMsT0FBTyxDQUFDLENBQUNqUixHQUFHLENBQUMsU0FBUyxFQUFFMlIsT0FBTyxDQUFDO01BQ3RFM1AsS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLENBQUN3QixRQUFRLEVBQUUsQ0FBQ3NJLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDMUQsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRWtDLE9BQU8sRUFBRSxtQkFBWTtNQUNwQm5SLEtBQUssQ0FBQ3FMLGtCQUFrQixFQUFFO01BRTFCckwsS0FBSyxDQUFDRyxPQUFPLENBQUN5RSxPQUFPLENBQUMvRixJQUFJLEVBQUU7TUFDNUJtQixLQUFLLENBQUNHLE9BQU8sQ0FBQ3dFLE9BQU8sQ0FBQzlGLElBQUksRUFBRTtNQUM1Qm1CLEtBQUssQ0FBQ0csT0FBTyxRQUFLLENBQUN0QixJQUFJLEVBQUU7TUFDekJtQixLQUFLLENBQUNHLE9BQU8sQ0FBQ2QsSUFBSSxDQUFDUixJQUFJLEVBQUU7TUFDekJtQixLQUFLLENBQUNHLE9BQU8sQ0FBQzFDLElBQUksQ0FBQ29CLElBQUksRUFBRTtNQUN6Qm1CLEtBQUssQ0FBQ0csT0FBTyxDQUFDNEUsSUFBSSxDQUFDbEcsSUFBSSxFQUFFO01BQ3pCbUIsS0FBSyxDQUFDRyxPQUFPLENBQUM2RSxLQUFLLENBQUNuRyxJQUFJLEVBQUU7TUFFMUJtQixLQUFLLENBQUNHLE9BQU8sQ0FBQ2xDLFFBQVEsQ0FBQ2dSLFVBQVUsQ0FBQ2pQLEtBQUssQ0FBQzBHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQ3JFMUcsS0FBSyxDQUFDRyxPQUFPLENBQUMyRSxHQUFHLENBQUNtSyxVQUFVLENBQUNqUCxLQUFLLENBQUMwRyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO01BRTVFMUcsS0FBSyxDQUFDRyxPQUFPLENBQUNnRixZQUFZLENBQUN3RixLQUFLLEVBQUUsQ0FBQzlMLElBQUksRUFBRTtNQUN6Q21CLEtBQUssQ0FBQ0csT0FBTyxDQUFDK0UsSUFBSSxDQUFDeUIsUUFBUSxFQUFFLENBQUNnRSxLQUFLLEVBQUU7TUFFckMsSUFBSTNLLEtBQUssQ0FBQ0MsS0FBSyxDQUFDaUssY0FBYyxFQUFFO1FBQy9CbEssS0FBSyxDQUFDbUssY0FBYyxFQUFFO01BQ3ZCOztNQUVBO01BQ0FuSyxLQUFLLENBQUM4RixVQUFVLENBQUM5RixLQUFLLENBQUNhLFFBQVEsQ0FBQ2dGLFNBQVMsQ0FBQzs7TUFFMUM7TUFDQTdGLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0UwSSxXQUFXLEVBQUUsdUJBQVk7TUFDeEIsT0FBT3NELE1BQU0sQ0FBQ21GLFVBQVUsSUFBSW5GLE1BQU0sQ0FBQ29GLFlBQVk7SUFDaEQsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNFM0ksaUJBQWlCLEVBQUUsNkJBQVk7TUFDOUIsT0FBT3VELE1BQU0sQ0FBQ3FGLGdCQUFnQixJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7SUFDRUMsZUFBZSxFQUFFLHlCQUFVQyxNQUFNLEVBQUU7TUFDbEMsT0FBUSxPQUFPeFIsS0FBSyxDQUFDd1IsTUFBTSxDQUFDLEtBQUssVUFBVSxJQUFJQSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO0lBQ3hFLENBQUM7SUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDRUMsT0FBTyxFQUFFLG1CQUFZO01BQ3BCekYsTUFBTSxDQUFDdkwsU0FBUyxHQUFHLENBQUMsQ0FBQztNQUVyQlgsQ0FBQyxDQUFDeEMsSUFBSSxDQUFDeUMsS0FBSyxFQUFFLFVBQVUyUixRQUFRLEVBQUU7UUFDakMsSUFBSTNSLEtBQUssQ0FBQ3VSLGVBQWUsQ0FBQ0ksUUFBUSxDQUFDLEVBQUU7VUFDcENqUixTQUFTLENBQUNpUixRQUFRLENBQUMsR0FBRzNSLEtBQUssQ0FBQzJSLFFBQVEsQ0FBQztRQUN0QztNQUNELENBQUMsQ0FBQztJQUNIO0VBQ0QsQ0FBQztFQUVEM1IsS0FBSyxDQUFDMFIsT0FBTyxFQUFFO0VBRWYzUixDQUFDLENBQUMzQyxFQUFFLENBQUNzRCxTQUFTLEdBQUcsVUFBVThRLE1BQU0sRUFBRTtJQUNsQztJQUNBLElBQUl4UixLQUFLLENBQUN1UixlQUFlLENBQUNDLE1BQU0sQ0FBQyxFQUFFO01BQ2xDLE9BQU94UixLQUFLLENBQUN3UixNQUFNLENBQUMsQ0FBQ0ksS0FBSyxDQUFDLElBQUksRUFBRUMsS0FBSyxDQUFDQyxTQUFTLENBQUNDLEtBQUssQ0FBQ2xCLElBQUksQ0FBQ21CLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDLE1BQU0sSUFBSSxRQUFPUixNQUFNLE1BQUssUUFBUSxJQUFJLENBQUNBLE1BQU0sRUFBRTtNQUNqRCxPQUFPeFIsS0FBSyxDQUFDSSxJQUFJLENBQUN3UixLQUFLLENBQUMsSUFBSSxFQUFFSSxTQUFTLENBQUM7SUFDekMsQ0FBQyxNQUFNO01BQ05qUyxDQUFDLENBQUMrSyxLQUFLLENBQUMsU0FBUyxHQUFHMEcsTUFBTSxHQUFHLHFDQUFxQyxDQUFDO0lBQ3BFO0VBQ0QsQ0FBQztBQUNGLENBQUMsRUFBRXRVLGdEQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzMxRGtCO0FBQ047QUFDTTtBQUNBO0FBQzVCLENBQUMsVUFBVTZDLENBQUMsRUFBRTtFQUNaLGFBQWE7O0VBRWI7RUFDQUEsQ0FBQyxDQUFDa00sTUFBTSxDQUFDLENBQUNuTixFQUFFLENBQUMsTUFBTSxFQUFFLFlBQVk7SUFDL0JpQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNxUyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMvQixPQUFPLENBQUM7TUFDakMsU0FBUyxFQUFHO0lBQ1osQ0FBQyxFQUFFLEdBQUcsRUFBRSxZQUFXO01BQ25CdFEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDL0IsR0FBRyxDQUFDLFNBQVMsRUFBQyxNQUFNLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUYrQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMxQyxVQUFVLEVBQUU7RUFFMUI7RUFDQTRVLCtDQUFRLEVBQUU7RUFHVmxTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQ1csU0FBUyxFQUFFO0VBRXZCWCxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNXLFNBQVMsRUFBRTs7RUFFM0I7RUFDQSxDQUFDLFNBQVMyUixVQUFVLEdBQUc7SUFDckIsSUFBSUMsR0FBRyxHQUFHdlMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0QnVTLEdBQUcsQ0FBQ3RVLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO01BQ3RDLElBQUl1VSxFQUFFLEdBQUksTUFBTSxHQUFHeFMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUk7TUFDcEQsT0FBTytULEVBQUU7SUFDWCxDQUFDLENBQUM7RUFDSixDQUFDLEdBQUc7RUFFSkMsV0FBVyxDQUFDLFlBQVU7SUFDcEJ6UyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxRQUFRLENBQUM7RUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQzs7RUFFUjtFQUNBLElBQUlxVSxTQUFTLEdBQUcxUyxDQUFDLENBQUMsY0FBYyxDQUFDO0VBQ2pDQSxDQUFDLENBQUNrTSxNQUFNLENBQUMsQ0FBQ25OLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWTtJQUNqQyxJQUFJaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMlMsU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFO01BQzNCRCxTQUFTLENBQUN6VCxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUMsTUFBTTtNQUNIeVQsU0FBUyxDQUFDclUsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNoQztFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQUl1VSxhQUFhLEdBQUcsRUFBRTtFQUN0QjVTLENBQUMsQ0FBQ2tNLE1BQU0sQ0FBQyxDQUFDbk4sRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZO0lBQy9CLElBQUk4VCxFQUFFLEdBQUc3UyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyUyxTQUFTLEVBQUU7SUFDNUIsSUFBSUcsV0FBVyxHQUFHOVMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQ3RDLElBQUlBLENBQUMsQ0FBQ2tNLE1BQU0sQ0FBQyxDQUFDeUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFO01BQzdCLElBQUlFLEVBQUUsR0FBR0QsYUFBYSxFQUFFO1FBQ3BCRSxXQUFXLENBQUM3VCxXQUFXLENBQUMsa0NBQWtDLENBQUM7TUFFL0QsQ0FBQyxNQUFNO1FBQ0g2VCxXQUFXLENBQUN6VSxRQUFRLENBQUMsa0NBQWtDLENBQUM7TUFDNUQ7SUFDSixDQUFDLE1BQU07TUFDSHlVLFdBQVcsQ0FBQzdULFdBQVcsQ0FBQyxrQ0FBa0MsQ0FBQztJQUMvRDtJQUNBMlQsYUFBYSxHQUFHQyxFQUFFO0VBQ3RCLENBQUMsQ0FBQzs7RUFFRjtFQUNBN1MsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDakIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQ3hDLElBQUlsQyxPQUFPLEdBQUdtRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMrUyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUlsVyxPQUFPLENBQUNlLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtNQUM1QmYsT0FBTyxDQUFDb0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMzQnBDLE9BQU8sQ0FBQytKLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQ29NLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDckMsQ0FBQyxNQUNJO01BQ0huVyxPQUFPLENBQUNvVyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUNoVSxXQUFXLENBQUMsTUFBTSxDQUFDO01BQzFDcEMsT0FBTyxDQUFDd0IsUUFBUSxDQUFDLE1BQU0sQ0FBQztNQUN4QnhCLE9BQU8sQ0FBQ29XLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQ3pVLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ3dVLE9BQU8sQ0FBQyxHQUFHLENBQUM7TUFDOUNuVyxPQUFPLENBQUMrSixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUNzTSxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ3ZDO0VBQ0YsQ0FBQyxDQUFDOztFQUVGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0FsVCxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ2pCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUNsRCxJQUFJbEMsT0FBTyxHQUFHbUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDK1MsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJbFcsT0FBTyxDQUFDZSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7TUFDNUJmLE9BQU8sQ0FBQ29DLFdBQVcsQ0FBQyxNQUFNLENBQUM7TUFDM0JwQyxPQUFPLENBQUMrSixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUNvTSxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3JDLENBQUMsTUFBTTtNQUNMblcsT0FBTyxDQUFDb1csUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDaFUsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMxQ3BDLE9BQU8sQ0FBQ3dCLFFBQVEsQ0FBQyxNQUFNLENBQUM7TUFDeEJ4QixPQUFPLENBQUNvVyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUN6VSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUN3VSxPQUFPLENBQUMsR0FBRyxDQUFDO01BQzlDblcsT0FBTyxDQUFDK0osUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDc00sU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUN2QztFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQUlsVCxDQUFDLENBQUMsd0RBQXdELENBQUMsQ0FBQ25DLE1BQU0sRUFBRTtJQUN0RW1DLENBQUMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDeEMsSUFBSSxDQUFDLFlBQVk7TUFDM0V3QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNtVCxZQUFZLENBQUMsVUFBVUMsTUFBTSxFQUFFO1FBQ3JDLElBQUlBLE1BQU0sS0FBSyxTQUFTLEVBQUU7VUFDeEIsS0FBSyxJQUFJelYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTyxRQUFRLENBQUNtVixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQ3hWLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7WUFDdEUsSUFBSTJWLEVBQUUsR0FBR3BWLFFBQVEsQ0FBQ21WLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDMVYsQ0FBQyxDQUFDO1lBQ2xEMlYsRUFBRSxDQUFDQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ0UsWUFBWSxDQUFDLHFCQUFxQixDQUFDO1VBQ3ZEO1FBQ0Y7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjs7RUFFQTtFQUNBLElBQUlDLE1BQU0sR0FBR3pULENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDckIwVCxRQUFRLEdBQUcxVCxDQUFDLENBQUMsa0JBQWtCLENBQUM7RUFFcEMsSUFBSTJULElBQUksR0FBRyxDQUFDO0lBQ1JDLElBQUksR0FBRyxDQUFDO0VBRVosSUFBSUMsTUFBTSxHQUFHLENBQUM7SUFDVkMsTUFBTSxHQUFHLENBQUM7RUFFZDNCLCtDQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFO0lBQ3JCNkIsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNWQyxRQUFRLEVBQUUsb0JBQVc7TUFDbkJOLElBQUksSUFBSSxDQUFDRSxNQUFNLEdBQUdGLElBQUksSUFBSSxDQUFDO01BQzNCQyxJQUFJLElBQUksQ0FBQ0UsTUFBTSxHQUFHRixJQUFJLElBQUksQ0FBQztNQUUzQnpCLGdEQUFZLENBQUN1QixRQUFRLEVBQUU7UUFDbkJ6VixHQUFHLEVBQUU7VUFDTGtXLElBQUksRUFBRVIsSUFBSSxHQUFHLEVBQUU7VUFDZlMsR0FBRyxFQUFFUixJQUFJLEdBQUc7UUFDWjtNQUNKLENBQUMsQ0FBQztNQUVGekIsZ0RBQVksQ0FBQ3NCLE1BQU0sRUFBRTtRQUNqQnhWLEdBQUcsRUFBRTtVQUNMa1csSUFBSSxFQUFFTixNQUFNO1VBQ1pPLEdBQUcsRUFBRU47UUFDTDtNQUNKLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxDQUFDO0VBRUY5VCxDQUFDLENBQUM5QixRQUFRLENBQUMsQ0FBQ2EsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFTM0IsQ0FBQyxFQUFFO0lBQ3BDeVcsTUFBTSxHQUFHelcsQ0FBQyxDQUFDaVgsT0FBTztJQUNsQlAsTUFBTSxHQUFHMVcsQ0FBQyxDQUFDa1gsT0FBTztFQUN0QixDQUFDLENBQUM7RUFFRnRVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQ2pCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBVztJQUMvQjBVLE1BQU0sQ0FBQ3BWLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDekJxVixRQUFRLENBQUNyVixRQUFRLENBQUMsUUFBUSxDQUFDO0VBQy9CLENBQUMsQ0FBQztFQUNGMkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDakIsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFXO0lBQy9CMFUsTUFBTSxDQUFDeFUsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUM1QnlVLFFBQVEsQ0FBQ3pVLFdBQVcsQ0FBQyxRQUFRLENBQUM7RUFDbEMsQ0FBQyxDQUFDO0VBRUZlLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUMsS0FBSyxDQUFDOztFQUVyQztFQUNBMEIsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNqQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDOUNpQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNkLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFFN0JjLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ2QsV0FBVyxDQUFDLHNCQUFzQixDQUFDO0VBQ3JELENBQUMsQ0FBQzs7RUFFRjtFQUNBYyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2pCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVTNCLENBQUMsRUFBRTtJQUNwRCxJQUFJUCxPQUFPLEdBQUdtRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMrUyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3pDLElBQUlsVyxPQUFPLENBQUNlLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtNQUM1QmYsT0FBTyxDQUFDb0MsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUMzQnBDLE9BQU8sQ0FBQzJCLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ1MsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUNoRHBDLE9BQU8sQ0FBQzJCLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQ3dVLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO0lBQ3BELENBQUMsTUFBTTtNQUNMblcsT0FBTyxDQUFDd0IsUUFBUSxDQUFDLE1BQU0sQ0FBQztNQUN4QnhCLE9BQU8sQ0FBQytKLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQ3NNLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO01BQ3hEclcsT0FBTyxDQUFDb1csUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDck0sUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDb00sT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7TUFDNUVuVyxPQUFPLENBQUNvVyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUNoVSxXQUFXLENBQUMsTUFBTSxDQUFDO01BQ2pEcEMsT0FBTyxDQUFDb1csUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDelUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDUyxXQUFXLENBQUMsTUFBTSxDQUFDO01BQ3BFcEMsT0FBTyxDQUFDb1csUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDelUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDd1UsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7SUFDMUU7RUFDRixDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFJdUIsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLGdCQUFnQixFQUFFO0lBQ3hDb0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxjQUFjLEVBQUUsSUFBSTtJQUNwQnJRLElBQUksRUFBRSxJQUFJO0lBQ1ZzUSxVQUFVLEVBQUU7TUFDVnJCLEVBQUUsRUFBRSxvQkFBb0I7TUFDeEJzQixTQUFTLEVBQUU7SUFDYixDQUFDO0lBQ0R4USxRQUFRLEVBQUU7TUFDUnlRLE1BQU0sRUFBRSxJQUFJO01BQ1p4QyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0QxQyxLQUFLLEVBQUUsSUFBSTtJQUNYbUYsV0FBVyxFQUFFO01BQ1gsR0FBRyxFQUFFO1FBQ0hOLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSUQsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLGVBQWUsRUFBRTtJQUN2Q29DLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxZQUFZLEVBQUUsRUFBRTtJQUNoQnBRLElBQUksRUFBRSxJQUFJO0lBQ1ZELFFBQVEsRUFBRTtNQUNSeVEsTUFBTSxFQUFFLElBQUk7TUFDWnhDLEtBQUssRUFBRTtJQUNULENBQUM7SUFDRDFDLEtBQUssRUFBRSxJQUFJO0lBQ1htRixXQUFXLEVBQUU7TUFDWCxHQUFHLEVBQUU7UUFDSE4sYUFBYSxFQUFFO01BQ2pCLENBQUM7TUFDRCxHQUFHLEVBQUU7UUFDSEEsYUFBYSxFQUFFO01BQ2pCLENBQUM7TUFDRCxHQUFHLEVBQUU7UUFDSEEsYUFBYSxFQUFFO01BQ2pCLENBQUM7TUFDRCxHQUFHLEVBQUU7UUFDSEEsYUFBYSxFQUFFO01BQ2pCO0lBQ0Y7RUFDRixDQUFDLENBQUM7RUFDRixJQUFJRCxNQUFNLEdBQUcsSUFBSW5DLDhDQUFNLENBQUMsbUJBQW1CLEVBQUU7SUFDM0NvQyxhQUFhLEVBQUUsQ0FBQztJQUNoQkMsWUFBWSxFQUFFLEVBQUU7SUFDaEJwUSxJQUFJLEVBQUUsSUFBSTtJQUNWRCxRQUFRLEVBQUU7TUFDUnlRLE1BQU0sRUFBRSxJQUFJO01BQ1p4QyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0QxQyxLQUFLLEVBQUUsSUFBSTtJQUNYbUYsV0FBVyxFQUFFO01BQ1gsR0FBRyxFQUFFO1FBQ0hOLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSUQsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLGlCQUFpQixFQUFFO0lBQ3pDb0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxjQUFjLEVBQUUsSUFBSTtJQUNwQnJRLElBQUksRUFBRSxJQUFJO0lBQ1ZzUSxVQUFVLEVBQUU7TUFDVnJCLEVBQUUsRUFBRSxvQkFBb0I7TUFDeEJzQixTQUFTLEVBQUU7SUFDYixDQUFDO0lBQ0R4USxRQUFRLEVBQUU7TUFDUnlRLE1BQU0sRUFBRSxJQUFJO01BQ1p4QyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0QxQyxLQUFLLEVBQUUsSUFBSTtJQUNYbUYsV0FBVyxFQUFFO01BQ1gsR0FBRyxFQUFFO1FBQ0hOLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSUQsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLGlCQUFpQixFQUFFO0lBQ3pDb0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxjQUFjLEVBQUUsSUFBSTtJQUNwQnJRLElBQUksRUFBRSxJQUFJO0lBQ1YwUSxVQUFVLEVBQUU7TUFDVkMsTUFBTSxFQUFFLGNBQWM7TUFDdEJDLE1BQU0sRUFBRTtJQUNWLENBQUM7SUFDRDdRLFFBQVEsRUFBRTtNQUNSeVEsTUFBTSxFQUFFLElBQUk7TUFDWnhDLEtBQUssRUFBRTtJQUNULENBQUM7SUFDRDFDLEtBQUssRUFBRSxJQUFJO0lBQ1htRixXQUFXLEVBQUU7TUFDWCxJQUFJLEVBQUU7UUFDSk4sYUFBYSxFQUFFLENBQUM7UUFDaEJFLGNBQWMsRUFBRTtNQUNsQixDQUFDO01BQ0QsSUFBSSxFQUFFO1FBQ0pGLGFBQWEsRUFBRSxDQUFDO1FBQ2hCRSxjQUFjLEVBQUU7TUFDbEIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIRixhQUFhLEVBQUUsQ0FBQztRQUNoQkUsY0FBYyxFQUFFO01BQ2xCLENBQUM7TUFDRCxHQUFHLEVBQUU7UUFDSEYsYUFBYSxFQUFFO01BQ2pCLENBQUM7TUFDRCxHQUFHLEVBQUU7UUFDSEEsYUFBYSxFQUFFLENBQUM7UUFDaEJFLGNBQWMsRUFBRTtNQUNsQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSUgsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLDZCQUE2QixFQUFFO0lBQ3JEb0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLFlBQVksRUFBRSxFQUFFO0lBQ2hCcFEsSUFBSSxFQUFFLElBQUk7SUFDVjBRLFVBQVUsRUFBRTtNQUNWQyxNQUFNLEVBQUUsY0FBYztNQUN0QkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUNEN1EsUUFBUSxFQUFFO01BQ1J5USxNQUFNLEVBQUUsSUFBSTtNQUNaeEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEMUMsS0FBSyxFQUFFLElBQUk7SUFDWG1GLFdBQVcsRUFBRTtNQUNYLEdBQUcsRUFBRTtRQUNITixhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUU7TUFDakI7SUFDRjtFQUNGLENBQUMsQ0FBQztFQUVGLElBQUlELE1BQU0sR0FBRyxJQUFJbkMsOENBQU0sQ0FBQyxpQkFBaUIsRUFBRTtJQUN6Q29DLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsY0FBYyxFQUFFLElBQUk7SUFDcEJyUSxJQUFJLEVBQUUsSUFBSTtJQUNWc1EsVUFBVSxFQUFFO01BQ1ZyQixFQUFFLEVBQUUsb0JBQW9CO01BQ3hCc0IsU0FBUyxFQUFFO0lBQ2IsQ0FBQztJQUNEeFEsUUFBUSxFQUFFO01BQ1J5USxNQUFNLEVBQUUsSUFBSTtNQUNaeEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEMUMsS0FBSyxFQUFFLElBQUk7SUFDWG1GLFdBQVcsRUFBRTtNQUNYLEdBQUcsRUFBRTtRQUNITixhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUU7TUFDakI7SUFDRjtFQUNGLENBQUMsQ0FBQztFQUVGLElBQUlELE1BQU0sR0FBRyxJQUFJbkMsOENBQU0sQ0FBQyxxQkFBcUIsRUFBRTtJQUM3Q29DLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxZQUFZLEVBQUUsRUFBRTtJQUNoQnBRLElBQUksRUFBRSxJQUFJO0lBQ1ZzUSxVQUFVLEVBQUU7TUFDVnJCLEVBQUUsRUFBRSxvQkFBb0I7TUFDeEJzQixTQUFTLEVBQUU7SUFDYixDQUFDO0lBQ0R4USxRQUFRLEVBQUU7TUFDUnlRLE1BQU0sRUFBRSxJQUFJO01BQ1p4QyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0QxQyxLQUFLLEVBQUUsSUFBSTtJQUNYbUYsV0FBVyxFQUFFO01BQ1gsSUFBSSxFQUFFO1FBQ0pOLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSUQsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLGdCQUFnQixFQUFFO0lBQ3hDb0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLFlBQVksRUFBRSxFQUFFO0lBQ2hCcFEsSUFBSSxFQUFFLElBQUk7SUFDVnNRLFVBQVUsRUFBRTtNQUNWckIsRUFBRSxFQUFFLG9CQUFvQjtNQUN4QnNCLFNBQVMsRUFBRSxJQUFJO01BQ2ZNLFlBQVksRUFBRSxzQkFBVXpOLEtBQUssRUFBRTBOLFNBQVMsRUFBRTtRQUN0QyxPQUFPLGVBQWUsR0FBR0EsU0FBUyxHQUFHLElBQUksSUFBSTFOLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTO01BQ3ZFO0lBQ0YsQ0FBQztJQUNEc04sVUFBVSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSxjQUFjO01BQ3RCQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBQ0Q3USxRQUFRLEVBQUU7TUFDUnlRLE1BQU0sRUFBRSxJQUFJO01BQ1p4QyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0QxQyxLQUFLLEVBQUUsSUFBSTtJQUNYbUYsV0FBVyxFQUFFO01BQ1gsSUFBSSxFQUFFO1FBQ0pOLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSUQsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLG9CQUFvQixFQUFFO0lBQzVDb0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLFlBQVksRUFBRSxFQUFFO0lBQ2hCcFEsSUFBSSxFQUFFLElBQUk7SUFDVnNRLFVBQVUsRUFBRTtNQUNWckIsRUFBRSxFQUFFLG9CQUFvQjtNQUN4QnNCLFNBQVMsRUFBRSxJQUFJO01BQ2ZNLFlBQVksRUFBRSxzQkFBVXpOLEtBQUssRUFBRTBOLFNBQVMsRUFBRTtRQUN0QyxPQUFPLGVBQWUsR0FBR0EsU0FBUyxHQUFHLElBQUksSUFBSTFOLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTO01BQ3ZFO0lBQ0YsQ0FBQztJQUNEc04sVUFBVSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSxjQUFjO01BQ3RCQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBQ0Q3USxRQUFRLEVBQUU7TUFDUnlRLE1BQU0sRUFBRSxJQUFJO01BQ1p4QyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0QxQyxLQUFLLEVBQUUsSUFBSTtJQUNYbUYsV0FBVyxFQUFFO01BQ1gsR0FBRyxFQUFFO1FBQ0hOLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSUQsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLHNCQUFzQixFQUFFO0lBQzlDb0MsYUFBYSxFQUFFLENBQUM7SUFDaEJDLFlBQVksRUFBRSxFQUFFO0lBQ2hCcFEsSUFBSSxFQUFFLElBQUk7SUFDVjBRLFVBQVUsRUFBRTtNQUNWQyxNQUFNLEVBQUUsY0FBYztNQUN0QkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUNEN1EsUUFBUSxFQUFFO01BQ1J5USxNQUFNLEVBQUUsSUFBSTtNQUNaeEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEMUMsS0FBSyxFQUFFLElBQUk7SUFDWG1GLFdBQVcsRUFBRTtNQUNYLEdBQUcsRUFBRTtRQUNITixhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUU7TUFDakI7SUFDRjtFQUNGLENBQUMsQ0FBQztFQUVGLElBQUlELE1BQU0sR0FBRyxJQUFJbkMsOENBQU0sQ0FBQyxjQUFjLEVBQUU7SUFDdENvQyxhQUFhLEVBQUUsQ0FBQztJQUNoQkMsWUFBWSxFQUFFLEVBQUU7SUFDaEJwUSxJQUFJLEVBQUUsSUFBSTtJQUNWMFEsVUFBVSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSxjQUFjO01BQ3RCQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBQ0Q3USxRQUFRLEVBQUU7TUFDUnlRLE1BQU0sRUFBRSxJQUFJO01BQ1p4QyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0QxQyxLQUFLLEVBQUUsSUFBSTtJQUNYbUYsV0FBVyxFQUFFO01BQ1gsR0FBRyxFQUFFO1FBQ0hOLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hBLGFBQWEsRUFBRTtNQUNqQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSUQsTUFBTSxHQUFHLElBQUluQyw4Q0FBTSxDQUFDLGNBQWMsRUFBRTtJQUN0Q29DLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxZQUFZLEVBQUUsRUFBRTtJQUNoQnBRLElBQUksRUFBRSxJQUFJO0lBQ1ZzUSxVQUFVLEVBQUU7TUFDVnJCLEVBQUUsRUFBRSxvQkFBb0I7TUFDeEJzQixTQUFTLEVBQUU7SUFDYixDQUFDO0lBQ0RHLFVBQVUsRUFBRTtNQUNWQyxNQUFNLEVBQUUsY0FBYztNQUN0QkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUNEN1EsUUFBUSxFQUFFO01BQ1J5USxNQUFNLEVBQUUsSUFBSTtNQUNaeEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEMUMsS0FBSyxFQUFFLElBQUk7SUFDWG1GLFdBQVcsRUFBRTtNQUNYLEdBQUcsRUFBRTtRQUNITixhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUU7TUFDakI7SUFDRjtFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQUlELE1BQU0sR0FBRyxJQUFJbkMsOENBQU0sQ0FBQyxvQkFBb0IsRUFBRTtJQUM1Q29DLGFBQWEsRUFBRSxDQUFDO0lBQ2hCQyxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsY0FBYyxFQUFFLElBQUk7SUFDcEJyUSxJQUFJLEVBQUUsSUFBSTtJQUNWK1EsUUFBUSxFQUFFLElBQUk7SUFDZEMsY0FBYyxFQUFFLElBQUk7SUFDcEJWLFVBQVUsRUFBRTtNQUNWckIsRUFBRSxFQUFFLG9CQUFvQjtNQUN4QjdQLElBQUksRUFBRTtJQUNSLENBQUM7SUFDRFcsUUFBUSxFQUFFO01BQ1J5USxNQUFNLEVBQUUsSUFBSTtNQUNaeEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEMEMsVUFBVSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSxZQUFZO01BQ3BCQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBQ0R0RixLQUFLLEVBQUUsSUFBSTtJQUNYbUYsV0FBVyxFQUFFO01BQ1gsSUFBSSxFQUFFO1FBQ0pOLGFBQWEsRUFBRSxDQUFDO1FBQ2hCRSxjQUFjLEVBQUU7TUFDbEIsQ0FBQztNQUNELElBQUksRUFBRTtRQUNKRixhQUFhLEVBQUUsQ0FBQztRQUNoQkUsY0FBYyxFQUFFO01BQ2xCLENBQUM7TUFDRCxHQUFHLEVBQUU7UUFDSEYsYUFBYSxFQUFFLENBQUM7UUFDaEJFLGNBQWMsRUFBRTtNQUNsQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hGLGFBQWEsRUFBRSxDQUFDO1FBQ2hCRSxjQUFjLEVBQUU7TUFDbEIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIRixhQUFhLEVBQUUsQ0FBQztRQUNoQkUsY0FBYyxFQUFFO01BQ2xCO0lBQ0Y7RUFDRixDQUFDLENBQUM7O0VBR0Y7RUFDQSxJQUFJSCxNQUFNLEdBQUcsSUFBSW5DLDhDQUFNLENBQUMsc0JBQXNCLEVBQUU7SUFDOUNvQyxhQUFhLEVBQUUsQ0FBQztJQUNoQkMsWUFBWSxFQUFFLEVBQUU7SUFDaEJwUSxJQUFJLEVBQUUsSUFBSTtJQUNWaVIsTUFBTSxFQUFFLE1BQU07SUFDZFAsVUFBVSxFQUFFO01BQ1ZDLE1BQU0sRUFBRSxZQUFZO01BQ3BCQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBQ0ROLFVBQVUsRUFBRTtNQUNWckIsRUFBRSxFQUFFLG9CQUFvQjtNQUN4QjdQLElBQUksRUFBRTtJQUNSLENBQUM7SUFDRFcsUUFBUSxFQUFFO01BQ1J5USxNQUFNLEVBQUUsSUFBSTtNQUNaeEMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEMUMsS0FBSyxFQUFFLElBQUk7SUFDWG1GLFdBQVcsRUFBRTtNQUNYLElBQUksRUFBRTtRQUNKTixhQUFhLEVBQUUsQ0FBQztRQUNoQkUsY0FBYyxFQUFFO01BQ2xCLENBQUM7TUFDRCxJQUFJLEVBQUU7UUFDSkYsYUFBYSxFQUFFLENBQUM7UUFDaEJFLGNBQWMsRUFBRTtNQUNsQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0hGLGFBQWEsRUFBRSxDQUFDO1FBQ2hCRSxjQUFjLEVBQUU7TUFDbEIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIRixhQUFhLEVBQUU7TUFDakIsQ0FBQztNQUNELEdBQUcsRUFBRTtRQUNIQSxhQUFhLEVBQUUsQ0FBQztRQUNoQkUsY0FBYyxFQUFFO01BQ2xCO0lBQ0Y7RUFDRixDQUFDLENBQUM7O0VBRUY7RUFDQTFVLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ2pCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVTtJQUN2Q2lCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDZCxXQUFXLENBQUMsTUFBTSxDQUFDO0VBQzlDLENBQUMsQ0FBQzs7RUFFRjtFQUNBYyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ2pCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUNwRGlCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzNCLFFBQVEsQ0FBQyxNQUFNLENBQUM7RUFDbEMsQ0FBQyxDQUFDO0VBRUYyQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNqQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDdENpQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNmLFdBQVcsQ0FBQyxNQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDOztFQUVGO0VBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNBO0FBQ0E7QUFDQTtFQUNBO0VBQ0FlLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDakIsRUFBRSxDQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBVztJQUN2RCxJQUFJd1csV0FBVyxHQUFHdlYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM3Q2tYLEtBQUssQ0FBQ0MsT0FBTyxDQUFDO01BQUVDLE1BQU0sRUFBRUg7SUFBWSxDQUFDLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0VBQ0Z2VixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ2pCLEVBQUUsQ0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVc7SUFDekRpQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMzQixRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM0VSxRQUFRLEVBQUUsQ0FBQ2hVLFdBQVcsQ0FBQyxRQUFRLENBQUM7RUFDM0QsQ0FBQyxDQUFDO0VBRUZlLENBQUMsQ0FBQ2tNLE1BQU0sQ0FBQyxDQUFDbk4sRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFXO0lBQzlCNFcsa0JBQWtCLEVBQUU7RUFDdEIsQ0FBQyxDQUFDO0VBRUYsU0FBU0Esa0JBQWtCLEdBQUU7SUFDM0I7SUFDQSxJQUFJSCxLQUFLLEdBQUd4VixDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3RCLElBQUk0VixTQUFTLEdBQUcsQ0FBQyxDQUFDOztJQUVsQjtJQUNBNVYsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDakIsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWTtNQUMzQyxJQUFJd1csV0FBVyxHQUFHdlYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQztNQUM3QztNQUNBaVgsV0FBVyxHQUFHSyxTQUFTLENBQUNMLFdBQVcsQ0FBQyxJQUFJQSxXQUFXO01BQ25EQyxLQUFLLENBQUNDLE9BQU8sQ0FBQztRQUNaQyxNQUFNLEVBQUVIO01BQ1YsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0Y7SUFDQXZWLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ3hDLElBQUksQ0FBQyxVQUFVRyxDQUFDLEVBQUVrWSxXQUFXLEVBQUU7TUFDNUMsSUFBSUMsWUFBWSxHQUFHOVYsQ0FBQyxDQUFDNlYsV0FBVyxDQUFDO01BQ2pDQyxZQUFZLENBQUMvVyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZO1FBQ3pDK1csWUFBWSxDQUFDdFgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDUyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ2xEZSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMzQixRQUFRLENBQUMsUUFBUSxDQUFDO01BQzVCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKOztFQUVBO0FBQ0E7QUFDQTtFQUNBMkIsQ0FBQyxDQUFDLFlBQVk7SUFDWkEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDakIsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO01BQ3BDLElBQUlnWCxPQUFPLEdBQUcvVixDQUFDLENBQUMsSUFBSSxDQUFDO01BQ3JCLElBQUlnVyxRQUFRLEdBQUdELE9BQU8sQ0FBQ2hELE1BQU0sRUFBRSxDQUFDdlUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDSSxHQUFHLEVBQUU7TUFDbkQsSUFBSW1YLE9BQU8sQ0FBQ3JYLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUN4QixJQUFJdVgsTUFBTSxHQUFHdk0sVUFBVSxDQUFDc00sUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUN6QyxDQUFDLE1BQU07UUFDSDtRQUNBLElBQUlBLFFBQVEsR0FBRyxDQUFDLEVBQUU7VUFDZCxJQUFJQyxNQUFNLEdBQUd2TSxVQUFVLENBQUNzTSxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3pDLENBQUMsTUFBTTtVQUNIQyxNQUFNLEdBQUcsQ0FBQztRQUNkO01BQ0o7TUFDQUYsT0FBTyxDQUFDaEQsTUFBTSxFQUFFLENBQUN2VSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNJLEdBQUcsQ0FBQ3FYLE1BQU0sQ0FBQztJQUM5QyxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFFQWpXLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZO0lBQ3JDLElBQU1zVCxFQUFFLEdBQUd0VCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xCLElBQU1rVyxLQUFLLEdBQUc1QyxFQUFFLENBQUM5VSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9CLElBQU0yWCxJQUFJLEdBQUc3QyxFQUFFLENBQUM5VSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLElBQU00WCxLQUFLLEdBQUc5QyxFQUFFLENBQUM5VSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2hDLElBQU02WCxHQUFHLEdBQUdILEtBQUssQ0FBQzVYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQU1nWSxHQUFHLEdBQUdKLEtBQUssQ0FBQzVYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHO0lBRXBDLElBQUk4SyxLQUFLLEdBQUc4TSxLQUFLLENBQUN0WCxHQUFHLEVBQUU7SUFDdkIsSUFBSTJYLE9BQU8sR0FBRyxHQUFHLElBQUluTixLQUFLLEdBQUdpTixHQUFHLENBQUMsSUFBSUMsR0FBRyxHQUFHRCxHQUFHLENBQUM7SUFFL0NGLElBQUksQ0FBQ2xZLEdBQUcsQ0FBQztNQUFDLE9BQU8sRUFBRXNZLE9BQU8sR0FBRztJQUFHLENBQUMsQ0FBQztJQUNsQ0gsS0FBSyxDQUFDNVgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHMEssS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUU3QzhNLEtBQUssQ0FBQ25YLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUM1QixJQUFJcUssS0FBSyxHQUFHOE0sS0FBSyxDQUFDdFgsR0FBRyxFQUFFO01BQ3ZCLElBQUkyWCxPQUFPLEdBQUcsR0FBRyxJQUFJbk4sS0FBSyxHQUFHaU4sR0FBRyxDQUFDLElBQUlDLEdBQUcsR0FBR0QsR0FBRyxDQUFDO01BRS9DRixJQUFJLENBQUNsWSxHQUFHLENBQUM7UUFBQyxPQUFPLEVBQUVzWSxPQUFPLEdBQUc7TUFBRyxDQUFDLENBQUM7TUFDbENILEtBQUssQ0FBQzVYLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRzBLLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUYsSUFBSXVMLFVBQVUsR0FBR3pXLFFBQVEsQ0FBQ3NZLHNCQUFzQixDQUFDLFdBQVcsQ0FBQztFQUM3RDdCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ3BCLFNBQVMsR0FBRyxtQ0FBbUM7RUFDN0RvQixVQUFVLENBQUNBLFVBQVUsQ0FBQzlXLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQzBWLFNBQVMsR0FBRyxvQ0FBb0M7QUFJbEYsQ0FBQyxFQUFFcFcsK0NBQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM3dkJWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjtBQUMzQixDQUFDLFVBQVU2QyxDQUFDLEVBQUU7RUFDWixZQUFZOztFQUVaLElBQUl5VyxLQUFLLEdBQUcsU0FBUkEsS0FBSyxDQUFhbkQsRUFBRSxFQUFFb0QsRUFBRSxFQUFFO0lBQzVCLElBQUksQ0FBQ0MsR0FBRyxHQUFHeFosNkNBQU0sQ0FBQ21XLEVBQUUsQ0FBQztJQUNyQixJQUFJLENBQUNvRCxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNFLEtBQUssRUFBRTtJQUNaLE9BQU8sSUFBSTtFQUNiLENBQUM7RUFFREgsS0FBSyxDQUFDMUUsU0FBUyxHQUFHO0lBRWhCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFDSThFLElBQUksRUFBRSxTQUFTQSxJQUFJLEdBQUc7TUFDcEIsSUFBSTVXLEtBQUssR0FBRyxJQUFJO01BQ2hCLElBQUk2VyxJQUFJLEdBQUczWiw2Q0FBTSxDQUFDK08sTUFBTSxDQUFDO01BQ3pCLElBQUk2SyxVQUFVLEdBQUc5VyxLQUFLLENBQUMwVyxHQUFHLENBQUNLLE1BQU0sRUFBRSxDQUFDNUMsR0FBRztNQUN2QyxJQUFJNkMsYUFBYSxHQUFHRixVQUFVLEdBQUc5VyxLQUFLLENBQUMwVyxHQUFHLENBQUMzSyxXQUFXLEVBQUU7TUFDeEQsSUFBSWtMLFdBQVcsR0FBR0osSUFBSSxDQUFDbkUsU0FBUyxFQUFFO01BQ2xDLElBQUl3RSxjQUFjLEdBQUdELFdBQVcsR0FBR0osSUFBSSxDQUFDbFYsTUFBTSxFQUFFO01BQ2hELE9BQU9xVixhQUFhLEdBQUdDLFdBQVcsSUFBSUgsVUFBVSxHQUFHSSxjQUFjO0lBQ25FLENBQUM7SUFFRDtBQUNKO0FBQ0E7SUFDSVAsS0FBSyxFQUFFLGlCQUFZO01BQ2pCLElBQUkzVyxLQUFLLEdBQUcsSUFBSTtNQUNoQixJQUFJbVgsS0FBSyxHQUFHLEtBQUs7TUFFakJqYSw2Q0FBTSxDQUFDK08sTUFBTSxDQUFDLENBQUNuTixFQUFFLENBQUMsZUFBZSxFQUFFLFlBQVk7UUFFN0MsSUFBSWtCLEtBQUssQ0FBQzRXLElBQUksRUFBRSxJQUFJTyxLQUFLLEtBQUssS0FBSyxFQUFFO1VBQ25DblgsS0FBSyxDQUFDeVcsRUFBRSxDQUFDNUYsSUFBSSxDQUFDN1EsS0FBSyxDQUFDMFcsR0FBRyxFQUFFLFNBQVMsQ0FBQztVQUNuQ1MsS0FBSyxHQUFHLElBQUk7UUFDZDtRQUVBLElBQUlBLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQ25YLEtBQUssQ0FBQzRXLElBQUksRUFBRSxFQUFFO1VBQ25DNVcsS0FBSyxDQUFDeVcsRUFBRSxDQUFDNUYsSUFBSSxDQUFDN1EsS0FBSyxDQUFDMFcsR0FBRyxFQUFFLFFBQVEsQ0FBQztVQUNsQ1MsS0FBSyxHQUFHLEtBQUs7UUFDZjtNQUVGLENBQUMsQ0FBQztJQUNKO0VBR0YsQ0FBQzs7RUFFRDtFQUNBO0VBQ0FqYSwrREFBc0IsR0FBRyxVQUFVdVosRUFBRSxFQUFFO0lBQ3JDLE9BQU8sSUFBSSxDQUFDbFosSUFBSSxDQUFDLFlBQVk7TUFDM0IsSUFBSTZaLFFBQVEsR0FBR2xhLDZDQUFNLENBQUMsSUFBSSxDQUFDO01BQzNCLElBQUlzQixJQUFJLEdBQUc0WSxRQUFRLENBQUM1WSxJQUFJLENBQUMsY0FBYyxDQUFDO01BQ3hDLElBQUksQ0FBQ0EsSUFBSSxFQUFFO1FBQ1Q0WSxRQUFRLENBQUM1WSxJQUFJLENBQUMsY0FBYyxFQUFHLElBQUlnWSxLQUFLLENBQUMsSUFBSSxFQUFFQyxFQUFFLENBQUMsQ0FBRTtNQUN0RDtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7QUFFSCxDQUFDLENBQUN4SyxNQUFNLENBQUMvTyxNQUFNLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZFaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pxdWVyeS5uaWNlLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGlnaHRjYXNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy92aWV3cG9ydC5qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcclxuaW1wb3J0ICdqcXVlcnknXHJcbmltcG9ydCAnc3dpcGVyJ1xyXG5pbXBvcnQgJy4vbGlnaHRjYXNlJ1xyXG5pbXBvcnQgJ29kb21ldGVyJ1xyXG5pbXBvcnQgJy4vdmlld3BvcnQuanF1ZXJ5J1xyXG5pbXBvcnQgJ2FvcydcclxuaW1wb3J0ICcuL2pxdWVyeS5uaWNlLXNlbGVjdCdcclxuaW1wb3J0ICdpc290b3BlLWxheW91dCdcclxuaW1wb3J0ICdnc2FwJ1xyXG5pbXBvcnQgJy4vbWFpbidcclxuaW1wb3J0ICdib290c3RyYXAnXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsImltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JzshZnVuY3Rpb24oZSl7ZS5mbi5uaWNlU2VsZWN0PWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVyblwidXBkYXRlXCI9PXQ/dGhpcy5lYWNoKChmdW5jdGlvbigpe3ZhciB0PWUodGhpcyksbj1lKHRoaXMpLm5leHQoXCIubmljZS1zZWxlY3RcIiksaT1uLmhhc0NsYXNzKFwib3BlblwiKTtuLmxlbmd0aCYmKG4ucmVtb3ZlKCkscyh0KSxpJiZ0Lm5leHQoKS50cmlnZ2VyKFwiY2xpY2tcIikpfSkpOlwiZGVzdHJveVwiPT10JiYodGhpcy5lYWNoKChmdW5jdGlvbigpe3ZhciB0PWUodGhpcykscz1lKHRoaXMpLm5leHQoXCIubmljZS1zZWxlY3RcIik7cy5sZW5ndGgmJihzLnJlbW92ZSgpLHQuY3NzKFwiZGlzcGxheVwiLFwiXCIpKX0pKSwwPT1lKFwiLm5pY2Utc2VsZWN0XCIpLmxlbmd0aCYmZShkb2N1bWVudCkub2ZmKFwiLm5pY2Vfc2VsZWN0XCIpKSx0aGlzO2Z1bmN0aW9uIHModCl7dC5hZnRlcihlKFwiPGRpdj48L2Rpdj5cIikuYWRkQ2xhc3MoXCJuaWNlLXNlbGVjdFwiKS5hZGRDbGFzcyh0LmF0dHIoXCJjbGFzc1wiKXx8XCJcIikuYWRkQ2xhc3ModC5hdHRyKFwiZGlzYWJsZWRcIik/XCJkaXNhYmxlZFwiOlwiXCIpLmF0dHIoXCJ0YWJpbmRleFwiLHQuYXR0cihcImRpc2FibGVkXCIpP251bGw6XCIwXCIpLmh0bWwoJzxzcGFuIGNsYXNzPVwiY3VycmVudFwiPjwvc3Bhbj48dWwgY2xhc3M9XCJsaXN0XCI+PC91bD4nKSk7dmFyIHM9dC5uZXh0KCksbj10LmZpbmQoXCJvcHRpb25cIiksaT10LmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIik7cy5maW5kKFwiLmN1cnJlbnRcIikuaHRtbChpLmRhdGEoXCJkaXNwbGF5XCIpfHxpLnRleHQoKSksbi5lYWNoKChmdW5jdGlvbih0KXt2YXIgbj1lKHRoaXMpLGk9bi5kYXRhKFwiZGlzcGxheVwiKTtzLmZpbmQoXCJ1bFwiKS5hcHBlbmQoZShcIjxsaT48L2xpPlwiKS5hdHRyKFwiZGF0YS12YWx1ZVwiLG4udmFsKCkpLmF0dHIoXCJkYXRhLWRpc3BsYXlcIixpfHxudWxsKS5hZGRDbGFzcyhcIm9wdGlvblwiKyhuLmlzKFwiOnNlbGVjdGVkXCIpP1wiIHNlbGVjdGVkXCI6XCJcIikrKG4uaXMoXCI6ZGlzYWJsZWRcIik/XCIgZGlzYWJsZWRcIjpcIlwiKSkuaHRtbChuLnRleHQoKSkpfSkpfXRoaXMuaGlkZSgpLHRoaXMuZWFjaCgoZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMpO3QubmV4dCgpLmhhc0NsYXNzKFwibmljZS1zZWxlY3RcIil8fHModCl9KSksZShkb2N1bWVudCkub2ZmKFwiLm5pY2Vfc2VsZWN0XCIpLGUoZG9jdW1lbnQpLm9uKFwiY2xpY2submljZV9zZWxlY3RcIixcIi5uaWNlLXNlbGVjdFwiLChmdW5jdGlvbih0KXt2YXIgcz1lKHRoaXMpO2UoXCIubmljZS1zZWxlY3RcIikubm90KHMpLnJlbW92ZUNsYXNzKFwib3BlblwiKSxzLnRvZ2dsZUNsYXNzKFwib3BlblwiKSxzLmhhc0NsYXNzKFwib3BlblwiKT8ocy5maW5kKFwiLm9wdGlvblwiKSxzLmZpbmQoXCIuZm9jdXNcIikucmVtb3ZlQ2xhc3MoXCJmb2N1c1wiKSxzLmZpbmQoXCIuc2VsZWN0ZWRcIikuYWRkQ2xhc3MoXCJmb2N1c1wiKSk6cy5mb2N1cygpfSkpLGUoZG9jdW1lbnQpLm9uKFwiY2xpY2submljZV9zZWxlY3RcIiwoZnVuY3Rpb24odCl7MD09PWUodC50YXJnZXQpLmNsb3Nlc3QoXCIubmljZS1zZWxlY3RcIikubGVuZ3RoJiZlKFwiLm5pY2Utc2VsZWN0XCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKS5maW5kKFwiLm9wdGlvblwiKX0pKSxlKGRvY3VtZW50KS5vbihcImNsaWNrLm5pY2Vfc2VsZWN0XCIsXCIubmljZS1zZWxlY3QgLm9wdGlvbjpub3QoLmRpc2FibGVkKVwiLChmdW5jdGlvbih0KXt2YXIgcz1lKHRoaXMpLG49cy5jbG9zZXN0KFwiLm5pY2Utc2VsZWN0XCIpO24uZmluZChcIi5zZWxlY3RlZFwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkXCIpLHMuYWRkQ2xhc3MoXCJzZWxlY3RlZFwiKTt2YXIgaT1zLmRhdGEoXCJkaXNwbGF5XCIpfHxzLnRleHQoKTtuLmZpbmQoXCIuY3VycmVudFwiKS50ZXh0KGkpLG4ucHJldihcInNlbGVjdFwiKS52YWwocy5kYXRhKFwidmFsdWVcIikpLnRyaWdnZXIoXCJjaGFuZ2VcIil9KSksZShkb2N1bWVudCkub24oXCJrZXlkb3duLm5pY2Vfc2VsZWN0XCIsXCIubmljZS1zZWxlY3RcIiwoZnVuY3Rpb24odCl7dmFyIHM9ZSh0aGlzKSxuPWUocy5maW5kKFwiLmZvY3VzXCIpfHxzLmZpbmQoXCIubGlzdCAub3B0aW9uLnNlbGVjdGVkXCIpKTtpZigzMj09dC5rZXlDb2RlfHwxMz09dC5rZXlDb2RlKXJldHVybiBzLmhhc0NsYXNzKFwib3BlblwiKT9uLnRyaWdnZXIoXCJjbGlja1wiKTpzLnRyaWdnZXIoXCJjbGlja1wiKSwhMTtpZig0MD09dC5rZXlDb2RlKXtpZihzLmhhc0NsYXNzKFwib3BlblwiKSl7dmFyIGk9bi5uZXh0QWxsKFwiLm9wdGlvbjpub3QoLmRpc2FibGVkKVwiKS5maXJzdCgpO2kubGVuZ3RoPjAmJihzLmZpbmQoXCIuZm9jdXNcIikucmVtb3ZlQ2xhc3MoXCJmb2N1c1wiKSxpLmFkZENsYXNzKFwiZm9jdXNcIikpfWVsc2Ugcy50cmlnZ2VyKFwiY2xpY2tcIik7cmV0dXJuITF9aWYoMzg9PXQua2V5Q29kZSl7aWYocy5oYXNDbGFzcyhcIm9wZW5cIikpe3ZhciBsPW4ucHJldkFsbChcIi5vcHRpb246bm90KC5kaXNhYmxlZClcIikuZmlyc3QoKTtsLmxlbmd0aD4wJiYocy5maW5kKFwiLmZvY3VzXCIpLnJlbW92ZUNsYXNzKFwiZm9jdXNcIiksbC5hZGRDbGFzcyhcImZvY3VzXCIpKX1lbHNlIHMudHJpZ2dlcihcImNsaWNrXCIpO3JldHVybiExfWlmKDI3PT10LmtleUNvZGUpcy5oYXNDbGFzcyhcIm9wZW5cIikmJnMudHJpZ2dlcihcImNsaWNrXCIpO2Vsc2UgaWYoOT09dC5rZXlDb2RlJiZzLmhhc0NsYXNzKFwib3BlblwiKSlyZXR1cm4hMX0pKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKS5zdHlsZTtyZXR1cm4gbi5jc3NUZXh0PVwicG9pbnRlci1ldmVudHM6YXV0b1wiLFwiYXV0b1wiIT09bi5wb2ludGVyRXZlbnRzJiZlKFwiaHRtbFwiKS5hZGRDbGFzcyhcIm5vLWNzc3BvaW50ZXJldmVudHNcIiksdGhpc319KGpRdWVyeSk7IiwiaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xyXG47KGZ1bmN0aW9uICgkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIF9zZWxmID0ge1xyXG5cdFx0Y2FjaGU6IHt9LFxyXG5cclxuXHRcdHN1cHBvcnQ6IHt9LFxyXG5cclxuXHRcdG9iamVjdHM6IHt9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5pdGlhbGl6ZXMgdGhlIHBsdWdpblxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbVx0e29iamVjdH1cdG9wdGlvbnNcclxuXHRcdCAqIEByZXR1cm5cdHtvYmplY3R9XHJcblx0XHQgKi9cclxuXHRcdGluaXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCQodGhpcykudW5iaW5kKCdjbGljay5saWdodGNhc2UnKS5iaW5kKCdjbGljay5saWdodGNhc2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmxpZ2h0Y2FzZSgnc3RhcnQnLCBvcHRpb25zKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3RhcnRzIHRoZSBwbHVnaW5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHRvcHRpb25zXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdF9zZWxmLm9yaWdpbiA9IGxpZ2h0Y2FzZS5vcmlnaW4gPSB0aGlzO1xyXG5cclxuXHRcdFx0X3NlbGYuc2V0dGluZ3MgPSBsaWdodGNhc2Uuc2V0dGluZ3MgPSAkLmV4dGVuZCh0cnVlLCB7XHJcblx0XHRcdFx0aWRQcmVmaXg6ICdsaWdodGNhc2UtJyxcclxuXHRcdFx0XHRjbGFzc1ByZWZpeDogJ2xpZ2h0Y2FzZS0nLFxyXG5cdFx0XHRcdGF0dHJQcmVmaXg6ICdsYy0nLFxyXG5cdFx0XHRcdHRyYW5zaXRpb246ICdlbGFzdGljJyxcclxuXHRcdFx0XHR0cmFuc2l0aW9uT3BlbjogbnVsbCxcclxuXHRcdFx0XHR0cmFuc2l0aW9uQ2xvc2U6IG51bGwsXHJcblx0XHRcdFx0dHJhbnNpdGlvbkluOiBudWxsLFxyXG5cdFx0XHRcdHRyYW5zaXRpb25PdXQ6IG51bGwsXHJcblx0XHRcdFx0Y3NzVHJhbnNpdGlvbnM6IHRydWUsXHJcblx0XHRcdFx0c3BlZWRJbjogMjUwLFxyXG5cdFx0XHRcdHNwZWVkT3V0OiAyNTAsXHJcblx0XHRcdFx0d2lkdGg6IG51bGwsXHJcblx0XHRcdFx0aGVpZ2h0OiBudWxsLFxyXG5cdFx0XHRcdG1heFdpZHRoOiA4MDAsXHJcblx0XHRcdFx0bWF4SGVpZ2h0OiA1MDAsXHJcblx0XHRcdFx0Zm9yY2VXaWR0aDogZmFsc2UsXHJcblx0XHRcdFx0Zm9yY2VIZWlnaHQ6IGZhbHNlLFxyXG5cdFx0XHRcdGxpdmVSZXNpemU6IHRydWUsXHJcblx0XHRcdFx0ZnVsbFNjcmVlbk1vZGVGb3JNb2JpbGU6IHRydWUsXHJcblx0XHRcdFx0bW9iaWxlTWF0Y2hFeHByZXNzaW9uOiAvKGlwaG9uZXxpcG9kfGlwYWR8YW5kcm9pZHxibGFja2JlcnJ5fHN5bWJpYW4pLyxcclxuXHRcdFx0XHRkaXNhYmxlU2hyaW5rOiBmYWxzZSxcclxuXHRcdFx0XHRmaXhlZFJhdGlvOiB0cnVlLFxyXG5cdFx0XHRcdHNocmlua0ZhY3RvcjogLjc1LFxyXG5cdFx0XHRcdG92ZXJsYXlPcGFjaXR5OiAuOSxcclxuXHRcdFx0XHRzbGlkZXNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdHNsaWRlc2hvd0F1dG9TdGFydDogdHJ1ZSxcclxuXHRcdFx0XHRicmVha0JlZm9yZVNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdHRpbWVvdXQ6IDUwMDAsXHJcblx0XHRcdFx0c3dpcGU6IHRydWUsXHJcblx0XHRcdFx0dXNlS2V5czogdHJ1ZSxcclxuXHRcdFx0XHR1c2VDYXRlZ29yaWVzOiB0cnVlLFxyXG5cdFx0XHRcdHVzZUFzQ29sbGVjdGlvbjogZmFsc2UsXHJcblx0XHRcdFx0bmF2aWdhdGVFbmRsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdGNsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXHJcblx0XHRcdFx0dGl0bGU6IG51bGwsXHJcblx0XHRcdFx0Y2FwdGlvbjogbnVsbCxcclxuXHRcdFx0XHRzaG93VGl0bGU6IHRydWUsXHJcblx0XHRcdFx0c2hvd0NhcHRpb246IHRydWUsXHJcblx0XHRcdFx0c2hvd1NlcXVlbmNlSW5mbzogdHJ1ZSxcclxuXHRcdFx0XHRpbmxpbmU6IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAnYXV0bycsXHJcblx0XHRcdFx0XHRoZWlnaHQ6ICdhdXRvJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWpheDoge1xyXG5cdFx0XHRcdFx0d2lkdGg6ICdhdXRvJyxcclxuXHRcdFx0XHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2dldCcsXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2h0bWwnLFxyXG5cdFx0XHRcdFx0ZGF0YToge31cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGlmcmFtZToge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDgwMCxcclxuXHRcdFx0XHRcdGhlaWdodDogNTAwLFxyXG5cdFx0XHRcdFx0ZnJhbWVib3JkZXI6IDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZsYXNoOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDAwLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyMDUsXHJcblx0XHRcdFx0XHR3bW9kZTogJ3RyYW5zcGFyZW50J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmlkZW86IHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0MDAsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDIyNSxcclxuXHRcdFx0XHRcdHBvc3RlcjogJycsXHJcblx0XHRcdFx0XHRwcmVsb2FkOiAnYXV0bycsXHJcblx0XHRcdFx0XHRjb250cm9sczogdHJ1ZSxcclxuXHRcdFx0XHRcdGF1dG9idWZmZXI6IHRydWUsXHJcblx0XHRcdFx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvb3A6IGZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhdHRyOiAnZGF0YS1yZWwnLFxyXG5cdFx0XHRcdGhyZWY6IG51bGwsXHJcblx0XHRcdFx0dHlwZTogbnVsbCxcclxuXHRcdFx0XHR0eXBlTWFwcGluZzoge1xyXG5cdFx0XHRcdFx0J2ltYWdlJzogJ2pwZyxqcGVnLGdpZixwbmcsYm1wJyxcclxuXHRcdFx0XHRcdCdmbGFzaCc6ICdzd2YnLFxyXG5cdFx0XHRcdFx0J3ZpZGVvJzogJ21wNCxtb3Ysb2d2LG9nZyx3ZWJtJyxcclxuXHRcdFx0XHRcdCdpZnJhbWUnOiAnaHRtbCxwaHAnLFxyXG5cdFx0XHRcdFx0J2FqYXgnOiAnanNvbix0eHQnLFxyXG5cdFx0XHRcdFx0J2lubGluZSc6ICcjJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJzxwIGNsYXNzPVwiJyArIF9zZWxmLnNldHRpbmdzLmNsYXNzUHJlZml4ICsgJ2Vycm9yXCI+JyArIF9zZWxmLnNldHRpbmdzLmxhYmVsc1snZXJyb3JNZXNzYWdlJ10gKyAnPC9wPic7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRsYWJlbHM6IHtcclxuXHRcdFx0XHRcdCdlcnJvck1lc3NhZ2UnOiAnU291cmNlIGNvdWxkIG5vdCBiZSBmb3VuZC4uLicsXHJcblx0XHRcdFx0XHQnc2VxdWVuY2VJbmZvLm9mJzogJyBvZiAnLFxyXG5cdFx0XHRcdFx0J2Nsb3NlJzogJ0Nsb3NlJyxcclxuXHRcdFx0XHRcdCduYXZpZ2F0b3IucHJldic6ICdQcmV2JyxcclxuXHRcdFx0XHRcdCduYXZpZ2F0b3IubmV4dCc6ICdOZXh0JyxcclxuIFx0XHRcdFx0XHQnbmF2aWdhdG9yLnBsYXknOiAnUGxheScsXHJcblx0XHRcdFx0XHQnbmF2aWdhdG9yLnBhdXNlJzogJ1BhdXNlJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bWFya3VwOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmJvZHkuYXBwZW5kKFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLm92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwiJyArIF9zZWxmLnNldHRpbmdzLmlkUHJlZml4ICsgJ292ZXJsYXlcIj48L2Rpdj4nKSxcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5sb2FkaW5nID0gJCgnPGRpdiBpZD1cIicgKyBfc2VsZi5zZXR0aW5ncy5pZFByZWZpeCArICdsb2FkaW5nXCIgY2xhc3M9XCInICsgX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnaWNvbi1zcGluXCI+PC9kaXY+JyksXHJcblx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdHMuY2FzZSA9ICQoJzxkaXYgaWQ9XCInICsgX3NlbGYuc2V0dGluZ3MuaWRQcmVmaXggKyAnY2FzZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJkaWFsb2dcIj48L2Rpdj4nKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdF9zZWxmLm9iamVjdHMuY2FzZS5hZnRlcihcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5jbG9zZSA9ICQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCInICsgX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnaWNvbi1jbG9zZVwiPjxzcGFuPicgKyBfc2VsZi5zZXR0aW5ncy5sYWJlbHNbJ2Nsb3NlJ10gKyAnPC9zcGFuPjwvYT4nKSxcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5uYXYgPSAkKCc8ZGl2IGlkPVwiJyArIF9zZWxmLnNldHRpbmdzLmlkUHJlZml4ICsgJ25hdlwiPjwvZGl2PicpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5uYXYuYXBwZW5kKFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLnByZXYgPSAkKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiJyArIF9zZWxmLnNldHRpbmdzLmNsYXNzUHJlZml4ICsgJ2ljb24tcHJldlwiPjxzcGFuPicgKyBfc2VsZi5zZXR0aW5ncy5sYWJlbHNbJ25hdmlnYXRvci5wcmV2J10gKyAnPC9zcGFuPjwvYT4nKS5oaWRlKCksXHJcblx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdHMubmV4dCA9ICQoJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCInICsgX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnaWNvbi1uZXh0XCI+PHNwYW4+JyArIF9zZWxmLnNldHRpbmdzLmxhYmVsc1snbmF2aWdhdG9yLm5leHQnXSArICc8L3NwYW4+PC9hPicpLmhpZGUoKSxcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5wbGF5ID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cIicgKyBfc2VsZi5zZXR0aW5ncy5jbGFzc1ByZWZpeCArICdpY29uLXBsYXlcIj48c3Bhbj4nICsgX3NlbGYuc2V0dGluZ3MubGFiZWxzWyduYXZpZ2F0b3IucGxheSddICsgJzwvc3Bhbj48L2E+JykuaGlkZSgpLFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLnBhdXNlID0gJCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cIicgKyBfc2VsZi5zZXR0aW5ncy5jbGFzc1ByZWZpeCArICdpY29uLXBhdXNlXCI+PHNwYW4+JyArIF9zZWxmLnNldHRpbmdzLmxhYmVsc1snbmF2aWdhdG9yLnBhdXNlJ10gKyAnPC9zcGFuPjwvYT4nKS5oaWRlKClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmNhc2UuYXBwZW5kKFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmNvbnRlbnQgPSAkKCc8ZGl2IGlkPVwiJyArIF9zZWxmLnNldHRpbmdzLmlkUHJlZml4ICsgJ2NvbnRlbnRcIj48L2Rpdj4nKSxcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5pbmZvID0gJCgnPGRpdiBpZD1cIicgKyBfc2VsZi5zZXR0aW5ncy5pZFByZWZpeCArICdpbmZvXCI+PC9kaXY+JylcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmNvbnRlbnQuYXBwZW5kKFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmNvbnRlbnRJbm5lciA9ICQoJzxkaXYgY2xhc3M9XCInICsgX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnY29udGVudElubmVyXCI+PC9kaXY+JylcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmluZm8uYXBwZW5kKFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLnNlcXVlbmNlSW5mbyA9ICQoJzxkaXYgaWQ9XCInICsgX3NlbGYuc2V0dGluZ3MuaWRQcmVmaXggKyAnc2VxdWVuY2VJbmZvXCI+PC9kaXY+JyksXHJcblx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdHMudGl0bGUgPSAkKCc8aDQgaWQ9XCInICsgX3NlbGYuc2V0dGluZ3MuaWRQcmVmaXggKyAndGl0bGVcIj48L2g0PicpLFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmNhcHRpb24gPSAkKCc8cCBpZD1cIicgKyBfc2VsZi5zZXR0aW5ncy5pZFByZWZpeCArICdjYXB0aW9uXCI+PC9wPicpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25Jbml0OiB7fSxcclxuXHRcdFx0XHRvblN0YXJ0OiB7fSxcclxuXHRcdFx0XHRvbkJlZm9yZUNhbGN1bGF0ZURpbWVuc2lvbnM6IHt9LFxyXG5cdFx0XHRcdG9uQWZ0ZXJDYWxjdWxhdGVEaW1lbnNpb25zOiB7fSxcclxuXHRcdFx0XHRvbkJlZm9yZVNob3c6IHt9LFxyXG5cdFx0XHRcdG9uRmluaXNoOiB7fSxcclxuXHRcdFx0XHRvblJlc2l6ZToge30sXHJcblx0XHRcdFx0b25DbG9zZToge30sXHJcblx0XHRcdFx0b25DbGVhbnVwOiB7fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvcHRpb25zLFxyXG5cdFx0XHQvLyBMb2FkIG9wdGlvbnMgZnJvbSBkYXRhLWxjLW9wdGlvbnMgYXR0cmlidXRlXHJcblx0XHRcdF9zZWxmLm9yaWdpbi5kYXRhID8gX3NlbGYub3JpZ2luLmRhdGEoJ2xjLW9wdGlvbnMnKSA6IHt9KTtcclxuXHJcblx0XHRcdF9zZWxmLm9iamVjdHMuZG9jdW1lbnQgPSAkKCdodG1sJyk7XHJcblx0XHRcdF9zZWxmLm9iamVjdHMuYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcblx0XHRcdC8vIENhbGwgb25Jbml0IGhvb2sgZnVuY3Rpb25zXHJcblx0XHRcdF9zZWxmLl9jYWxsSG9va3MoX3NlbGYuc2V0dGluZ3Mub25Jbml0KTtcclxuXHJcblx0XHRcdF9zZWxmLm9iamVjdERhdGEgPSBfc2VsZi5fc2V0T2JqZWN0RGF0YSh0aGlzKTtcclxuXHJcblx0XHRcdF9zZWxmLl9hZGRFbGVtZW50cygpO1xyXG5cdFx0XHRfc2VsZi5fb3BlbigpO1xyXG5cclxuXHRcdFx0X3NlbGYuZGltZW5zaW9ucyA9IF9zZWxmLmdldFZpZXdwb3J0RGltZW5zaW9ucygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdldHRlciBtZXRob2QgZm9yIG9iamVjdHNcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtzdHJpbmd9XHRuYW1lXHJcblx0XHQgKiBAcmV0dXJuXHR7b2JqZWN0fVxyXG5cdFx0ICovXHJcblx0XHRnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XHJcblx0XHRcdHJldHVybiBfc2VsZi5vYmplY3RzW25hbWVdO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdldHRlciBtZXRob2QgZm9yIG9iamVjdERhdGFcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7b2JqZWN0fVxyXG5cdFx0ICovXHJcblx0XHRnZXRPYmplY3REYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfc2VsZi5vYmplY3REYXRhO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldHMgdGhlIG9iamVjdCBkYXRhXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtXHR7b2JqZWN0fVx0b2JqZWN0XHJcblx0XHQgKiBAcmV0dXJuXHR7b2JqZWN0fVx0b2JqZWN0RGF0YVxyXG5cdFx0ICovXHJcblx0XHRfc2V0T2JqZWN0RGF0YTogZnVuY3Rpb24gKG9iamVjdCkge1xyXG5cdFx0IFx0dmFyICRvYmplY3QgPSAkKG9iamVjdCksXHJcblx0XHRcdFx0b2JqZWN0RGF0YSA9IHtcclxuXHRcdFx0XHR0aGlzOiAkKG9iamVjdCksXHJcblx0XHRcdFx0dGl0bGU6IF9zZWxmLnNldHRpbmdzLnRpdGxlIHx8ICRvYmplY3QuYXR0cihfc2VsZi5fcHJlZml4QXR0cmlidXRlTmFtZSgndGl0bGUnKSkgfHwgJG9iamVjdC5hdHRyKCd0aXRsZScpLFxyXG5cdFx0XHRcdGNhcHRpb246IF9zZWxmLnNldHRpbmdzLmNhcHRpb24gfHwgJG9iamVjdC5hdHRyKF9zZWxmLl9wcmVmaXhBdHRyaWJ1dGVOYW1lKCdjYXB0aW9uJykpIHx8ICRvYmplY3QuY2hpbGRyZW4oJ2ltZycpLmF0dHIoJ2FsdCcpLFxyXG5cdFx0XHRcdHVybDogX3NlbGYuX2RldGVybWluZVVybCgpLFxyXG5cdFx0XHRcdHJlcXVlc3RUeXBlOiBfc2VsZi5zZXR0aW5ncy5hamF4LnR5cGUsXHJcblx0XHRcdFx0cmVxdWVzdERhdGE6IF9zZWxmLnNldHRpbmdzLmFqYXguZGF0YSxcclxuXHRcdFx0XHRyZXF1ZXN0RGF0YVR5cGU6IF9zZWxmLnNldHRpbmdzLmFqYXguZGF0YVR5cGUsXHJcblx0XHRcdFx0cmVsOiAkb2JqZWN0LmF0dHIoX3NlbGYuX2RldGVybWluZUF0dHJpYnV0ZVNlbGVjdG9yKCkpLFxyXG5cdFx0XHRcdHR5cGU6IF9zZWxmLnNldHRpbmdzLnR5cGUgfHwgX3NlbGYuX3ZlcmlmeURhdGFUeXBlKF9zZWxmLl9kZXRlcm1pbmVVcmwoKSksXHJcblx0XHRcdFx0aXNQYXJ0T2ZTZXF1ZW5jZTogX3NlbGYuc2V0dGluZ3MudXNlQXNDb2xsZWN0aW9uIHx8IF9zZWxmLl9pc1BhcnRPZlNlcXVlbmNlKCRvYmplY3QuYXR0cihfc2VsZi5zZXR0aW5ncy5hdHRyKSwgJzonKSxcclxuXHRcdFx0XHRpc1BhcnRPZlNlcXVlbmNlV2l0aFNsaWRlc2hvdzogX3NlbGYuX2lzUGFydE9mU2VxdWVuY2UoJG9iamVjdC5hdHRyKF9zZWxmLnNldHRpbmdzLmF0dHIpLCAnOnNsaWRlc2hvdycpLFxyXG5cdFx0XHRcdGN1cnJlbnRJbmRleDogJChfc2VsZi5fZGV0ZXJtaW5lQXR0cmlidXRlU2VsZWN0b3IoKSkuaW5kZXgoJG9iamVjdCksXHJcblx0XHRcdFx0c2VxdWVuY2VMZW5ndGg6ICQoX3NlbGYuX2RldGVybWluZUF0dHJpYnV0ZVNlbGVjdG9yKCkpLmxlbmd0aFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gQWRkIHNlcXVlbmNlIGluZm8gdG8gb2JqZWN0RGF0YVxyXG5cdFx0XHRvYmplY3REYXRhLnNlcXVlbmNlSW5mbyA9IChvYmplY3REYXRhLmN1cnJlbnRJbmRleCArIDEpICsgX3NlbGYuc2V0dGluZ3MubGFiZWxzWydzZXF1ZW5jZUluZm8ub2YnXSArIG9iamVjdERhdGEuc2VxdWVuY2VMZW5ndGg7XHJcblxyXG5cdFx0XHQvLyBBZGQgbmV4dC9wcmV2IGluZGV4XHJcblx0XHRcdG9iamVjdERhdGEucHJldkluZGV4ID0gb2JqZWN0RGF0YS5jdXJyZW50SW5kZXggLSAxO1xyXG5cdFx0XHRvYmplY3REYXRhLm5leHRJbmRleCA9IG9iamVjdERhdGEuY3VycmVudEluZGV4ICsgMTtcclxuXHJcblx0XHRcdHJldHVybiBvYmplY3REYXRhO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFByZWZpeGVzIGEgZGF0YSBhdHRyaWJ1dGUgbmFtZSB3aXRoIGRlZmluZWQgbmFtZSBmcm9tICdzZXR0aW5ncy5hdHRyUHJlZml4J1xyXG5cdFx0ICogdG8gZW5zdXJlIG1vcmUgdW5pcXVlbmVzcyBmb3IgYWxsIGxpZ2h0Y2FzZSByZWxhdGVkL3VzZWQgYXR0cmlidXRlcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtzdHJpbmd9XHRuYW1lXHJcblx0XHQgKiBAcmV0dXJuXHR7c3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRfcHJlZml4QXR0cmlidXRlTmFtZTogZnVuY3Rpb24gKG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuICdkYXRhLScgKyBfc2VsZi5zZXR0aW5ncy5hdHRyUHJlZml4ICsgbmFtZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXRlcm1pbmVzIHRoZSBsaW5rIHRhcmdldCBjb25zaWRlcmluZyAnc2V0dGluZ3MuaHJlZicgYW5kIGRhdGEgYXR0cmlidXRlc1xyXG5cdFx0ICogYnV0IGFsc28gd2l0aCBhIGZhbGxiYWNrIHRvIHRoZSBkZWZhdWx0ICdocmVmJyB2YWx1ZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7c3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRfZGV0ZXJtaW5lTGlua1RhcmdldDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gX3NlbGYuc2V0dGluZ3MuaHJlZiB8fCAkKF9zZWxmLm9yaWdpbikuYXR0cihfc2VsZi5fcHJlZml4QXR0cmlidXRlTmFtZSgnaHJlZicpKSB8fCAkKF9zZWxmLm9yaWdpbikuYXR0cignaHJlZicpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERldGVybWluZXMgdGhlIGF0dHJpYnV0ZSBzZWxlY3RvciB0byB1c2UsIGRlcGVuZGluZyBvblxyXG5cdFx0ICogd2hldGhlciBjYXRlZ29yaXplZCBjb2xsZWN0aW9ucyBhcmUgYmVlaW5nIHVzZWQgb3Igbm90LlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHtzdHJpbmd9XHRzZWxlY3RvclxyXG5cdFx0ICovXHJcblx0XHRfZGV0ZXJtaW5lQXR0cmlidXRlU2VsZWN0b3I6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyXHQkb3JpZ2luID0gJChfc2VsZi5vcmlnaW4pLFxyXG5cdFx0XHRcdHNlbGVjdG9yID0gJyc7XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIF9zZWxmLmNhY2hlLnNlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHNlbGVjdG9yID0gX3NlbGYuY2FjaGUuc2VsZWN0b3I7XHJcblx0XHRcdH0gZWxzZSBpZiAoX3NlbGYuc2V0dGluZ3MudXNlQ2F0ZWdvcmllcyA9PT0gdHJ1ZSAmJiAkb3JpZ2luLmF0dHIoX3NlbGYuX3ByZWZpeEF0dHJpYnV0ZU5hbWUoJ2NhdGVnb3JpZXMnKSkpIHtcclxuXHRcdFx0XHR2YXJcdGNhdGVnb3JpZXMgPSAkb3JpZ2luLmF0dHIoX3NlbGYuX3ByZWZpeEF0dHJpYnV0ZU5hbWUoJ2NhdGVnb3JpZXMnKSkuc3BsaXQoJyAnKTtcclxuXHJcblx0XHRcdFx0JC5lYWNoKGNhdGVnb3JpZXMsIGZ1bmN0aW9uIChpbmRleCwgY2F0ZWdvcnkpIHtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApIHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3IgKz0gJywnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0c2VsZWN0b3IgKz0gJ1snICsgX3NlbGYuX3ByZWZpeEF0dHJpYnV0ZU5hbWUoJ2NhdGVnb3JpZXMnKSArICd+PVwiJyArIGNhdGVnb3J5ICsgJ1wiXSc7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZWN0b3IgPSAnWycgKyBfc2VsZi5zZXR0aW5ncy5hdHRyICsgJz1cIicgKyAkb3JpZ2luLmF0dHIoX3NlbGYuc2V0dGluZ3MuYXR0cikgKyAnXCJdJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3NlbGYuY2FjaGUuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHJcblx0XHRcdHJldHVybiBzZWxlY3RvcjtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEZXRlcm1pbmVzIHRoZSBjb3JyZWN0IHJlc291cmNlIGFjY29yZGluZyB0byB0aGVcclxuXHRcdCAqIGN1cnJlbnQgdmlld3BvcnQgYW5kIGRlbnNpdHkuXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e3N0cmluZ31cdHVybFxyXG5cdFx0ICovXHJcblx0XHRfZGV0ZXJtaW5lVXJsOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhclx0ZGF0YVVybCA9IF9zZWxmLl92ZXJpZnlEYXRhVXJsKF9zZWxmLl9kZXRlcm1pbmVMaW5rVGFyZ2V0KCkpLFxyXG5cdFx0XHRcdHdpZHRoID0gMCxcclxuXHRcdFx0XHRkZW5zaXR5ID0gMCxcclxuXHRcdFx0XHRzdXBwb3J0TGV2ZWwgPSAnJyxcclxuXHRcdFx0XHR1cmw7XHJcblxyXG5cdFx0XHQkLmVhY2goZGF0YVVybCwgZnVuY3Rpb24gKGluZGV4LCBzcmMpIHtcclxuXHRcdFx0XHRzd2l0Y2ggKF9zZWxmLl92ZXJpZnlEYXRhVHlwZShzcmMudXJsKSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAndmlkZW8nOlxyXG5cdFx0XHRcdFx0XHR2YXJcdHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKSxcclxuXHRcdFx0XHRcdFx0XHR2aWRlb1R5cGUgPSBfc2VsZi5fdmVyaWZ5RGF0YVR5cGUoc3JjLnVybCkgKyAnLycgKyBfc2VsZi5fZ2V0RmlsZVVybFN1ZmZpeChzcmMudXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIENoZWNrIGlmIGJyb3dzZXIgY2FuIHBsYXkgdGhpcyB0eXBlIG9mIHZpZGVvIGZvcm1hdFxyXG5cdFx0XHRcdFx0XHRpZiAoc3VwcG9ydExldmVsICE9PSAncHJvYmFibHknICYmIHN1cHBvcnRMZXZlbCAhPT0gdmlkZW8uY2FuUGxheVR5cGUodmlkZW9UeXBlKSAmJiB2aWRlby5jYW5QbGF5VHlwZSh2aWRlb1R5cGUpICE9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdHN1cHBvcnRMZXZlbCA9IHZpZGVvLmNhblBsYXlUeXBlKHZpZGVvVHlwZSk7XHJcblx0XHRcdFx0XHRcdFx0dXJsID0gc3JjLnVybDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0XHQvLyBDaGVjayBkZW5zaXR5XHJcblx0XHRcdFx0XHRcdFx0X3NlbGYuX2RldmljZVBpeGVsUmF0aW8oKSA+PSBzcmMuZGVuc2l0eSAmJlxyXG5cdFx0XHRcdFx0XHRcdHNyYy5kZW5zaXR5ID49IGRlbnNpdHkgJiZcclxuXHRcdFx0XHRcdFx0XHQvLyBDaGVjayB2aWV3cG9ydCB3aWR0aFxyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLl9tYXRjaE1lZGlhKCkoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDonICsgc3JjLndpZHRoICsgJ3B4KScpLm1hdGNoZXMgJiZcclxuXHRcdFx0XHRcdFx0XHRzcmMud2lkdGggPj0gd2lkdGhcclxuXHRcdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGggPSBzcmMud2lkdGg7XHJcblx0XHRcdFx0XHRcdFx0ZGVuc2l0eSA9IHNyYy5kZW5zaXR5O1xyXG5cdFx0XHRcdFx0XHRcdHVybCA9IHNyYy51cmw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB1cmw7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTm9ybWFsaXplcyBhbiB1cmwgYW5kIHJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlc291cmNlIHBhdGgsXHJcblx0XHQgKiB0aGUgdmlld3BvcnQgd2lkdGggYXMgd2VsbCBhcyBkZW5zaXR5IGlmIGRlZmluZWQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtXHR7c3RyaW5nfVx0dXJsXHRQYXRoIHRvIHJlc291cmNlIGluIGZvcm1hdCBvZiBhbiB1cmwgb3Igc3Jjc2V0XHJcblx0XHQgKiBAcmV0dXJuXHR7b2JqZWN0fVxyXG5cdFx0ICovXHJcblx0XHRfbm9ybWFsaXplVXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcblx0XHRcdHZhciBzcmNFeHAgPSAvXlxcZCskLztcclxuXHJcblx0XHRcdHJldHVybiB1cmwuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHN0cikge1xyXG5cdFx0XHRcdHZhciBzcmMgPSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMCxcclxuXHRcdFx0XHRcdGRlbnNpdHk6IDBcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRzdHIudHJpbSgpLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAodXJsLCBpKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gc3JjLnVybCA9IHVybDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKSxcclxuXHRcdFx0XHRcdFx0bGFzdENoYXIgPSB1cmxbdXJsLmxlbmd0aCAtIDFdLFxyXG5cdFx0XHRcdFx0XHRpbnRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApLFxyXG5cdFx0XHRcdFx0XHRmbG9hdFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG5cdFx0XHRcdFx0aWYgKGxhc3RDaGFyID09PSAndycgJiYgc3JjRXhwLnRlc3QodmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdHNyYy53aWR0aCA9IGludFZhbDtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGFzdENoYXIgPT09ICdoJyAmJiBzcmNFeHAudGVzdCh2YWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0c3JjLmhlaWdodCA9IGludFZhbDtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGFzdENoYXIgPT09ICd4JyAmJiAhaXNOYU4oZmxvYXRWYWwpKSB7XHJcblx0XHRcdFx0XHRcdHNyYy5kZW5zaXR5ID0gZmxvYXRWYWw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBzcmM7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFZlcmlmaWVzIGlmIHRoZSBsaW5rIGlzIHBhcnQgb2YgYSBzZXF1ZW5jZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbVx0e3N0cmluZ31cdHJlbFxyXG5cdFx0ICogQHBhcmFtXHR7c3RyaW5nfVx0ZXhwcmVzc2lvblxyXG5cdFx0ICogQHJldHVyblx0e2Jvb2xlYW59XHJcblx0XHQgKi9cclxuXHRcdF9pc1BhcnRPZlNlcXVlbmNlOiBmdW5jdGlvbiAocmVsLCBleHByZXNzaW9uKSB7XHJcblx0XHRcdHZhciBnZXRTaW1pbGFyTGlua3MgPSAkKCdbJyArIF9zZWxmLnNldHRpbmdzLmF0dHIgKyAnPVwiJyArIHJlbCArICdcIl0nKSxcclxuXHRcdFx0XHRyZWdleHAgPSBuZXcgUmVnRXhwKGV4cHJlc3Npb24pO1xyXG5cclxuXHRcdFx0cmV0dXJuIChyZWdleHAudGVzdChyZWwpICYmIGdldFNpbWlsYXJMaW5rcy5sZW5ndGggPiAxKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBWZXJpZmllcyBpZiB0aGUgc2xpZGVzaG93IHNob3VsZCBiZSBlbmFibGVkXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e2Jvb2xlYW59XHJcblx0XHQgKi9cclxuXHRcdGlzU2xpZGVzaG93RW5hYmxlZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gKF9zZWxmLm9iamVjdERhdGEuaXNQYXJ0T2ZTZXF1ZW5jZSAmJiAoX3NlbGYuc2V0dGluZ3Muc2xpZGVzaG93ID09PSB0cnVlIHx8IF9zZWxmLm9iamVjdERhdGEuaXNQYXJ0T2ZTZXF1ZW5jZVdpdGhTbGlkZXNob3cgPT09IHRydWUpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBMb2FkcyB0aGUgbmV3IGNvbnRlbnQgdG8gc2hvd1xyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRfbG9hZENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKF9zZWxmLmNhY2hlLm9yaWdpbmFsT2JqZWN0KSB7XHJcblx0XHRcdFx0X3NlbGYuX3Jlc3RvcmVPYmplY3QoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3NlbGYuX2NyZWF0ZU9iamVjdCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0XHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e3ZvaWR9XHJcblx0XHQgKi9cclxuXHRcdF9jcmVhdGVPYmplY3Q6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyICRvYmplY3Q7XHJcblxyXG5cdFx0XHQvLyBDcmVhdGUgb2JqZWN0XHJcblx0XHRcdHN3aXRjaCAoX3NlbGYub2JqZWN0RGF0YS50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSAnaW1hZ2UnOlxyXG5cdFx0XHRcdFx0JG9iamVjdCA9ICQobmV3IEltYWdlKCkpO1xyXG5cdFx0XHRcdFx0JG9iamVjdC5hdHRyKHtcclxuXHRcdFx0XHRcdFx0Ly8gVGhlIHRpbWUgZXhwcmVzc2lvbiBpcyByZXF1aXJlZCB0byBwcmV2ZW50IHRoZSBiaW5kaW5nIG9mIGFuIGltYWdlIGxvYWRcclxuXHRcdFx0XHRcdFx0J3NyYyc6IF9zZWxmLm9iamVjdERhdGEudXJsLFxyXG5cdFx0XHRcdFx0XHQnYWx0JzogX3NlbGYub2JqZWN0RGF0YS50aXRsZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdpbmxpbmUnOlxyXG5cdFx0XHRcdFx0JG9iamVjdCA9ICQoJzxkaXYgY2xhc3M9XCInICsgX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnaW5saW5lV3JhcFwiPjwvZGl2PicpO1xyXG5cdFx0XHRcdFx0JG9iamVjdC5odG1sKF9zZWxmLl9jbG9uZU9iamVjdCgkKF9zZWxmLm9iamVjdERhdGEudXJsKSkpO1xyXG5cclxuXHRcdFx0XHRcdC8vIEFkZCBjdXN0b20gYXR0cmlidXRlcyBmcm9tIF9zZWxmLnNldHRpbmdzXHJcblx0XHRcdFx0XHQkLmVhY2goX3NlbGYuc2V0dGluZ3MuaW5saW5lLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0JG9iamVjdC5hdHRyKF9zZWxmLl9wcmVmaXhBdHRyaWJ1dGVOYW1lKG5hbWUpLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2FqYXgnOlxyXG5cdFx0XHRcdFx0JG9iamVjdCA9ICQoJzxkaXYgY2xhc3M9XCInICsgX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnaW5saW5lV3JhcFwiPjwvZGl2PicpO1xyXG5cclxuXHRcdFx0XHRcdC8vIEFkZCBjdXN0b20gYXR0cmlidXRlcyBmcm9tIF9zZWxmLnNldHRpbmdzXHJcblx0XHRcdFx0XHQkLmVhY2goX3NlbGYuc2V0dGluZ3MuYWpheCwgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChuYW1lICE9PSAnZGF0YScpIHtcclxuXHRcdFx0XHRcdFx0XHQkb2JqZWN0LmF0dHIoX3NlbGYuX3ByZWZpeEF0dHJpYnV0ZU5hbWUobmFtZSksIHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdmbGFzaCc6XHJcblx0XHRcdFx0XHQkb2JqZWN0ID0gJCgnPGVtYmVkIHNyYz1cIicgKyBfc2VsZi5vYmplY3REYXRhLnVybCArICdcIiB0eXBlPVwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIj48L2VtYmVkPicpO1xyXG5cclxuXHRcdFx0XHRcdC8vIEFkZCBjdXN0b20gYXR0cmlidXRlcyBmcm9tIF9zZWxmLnNldHRpbmdzXHJcblx0XHRcdFx0XHQkLmVhY2goX3NlbGYuc2V0dGluZ3MuZmxhc2gsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG5cdFx0XHRcdFx0XHQkb2JqZWN0LmF0dHIobmFtZSwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICd2aWRlbyc6XHJcblx0XHRcdFx0XHQkb2JqZWN0ID0gJCgnPHZpZGVvPjwvdmlkZW8+Jyk7XHJcblx0XHRcdFx0XHQkb2JqZWN0LmF0dHIoJ3NyYycsIF9zZWxmLm9iamVjdERhdGEudXJsKTtcclxuXHJcblx0XHRcdFx0XHQvLyBBZGQgY3VzdG9tIGF0dHJpYnV0ZXMgZnJvbSBfc2VsZi5zZXR0aW5nc1xyXG5cdFx0XHRcdFx0JC5lYWNoKF9zZWxmLnNldHRpbmdzLnZpZGVvLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0JG9iamVjdC5hdHRyKG5hbWUsIHZhbHVlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdCRvYmplY3QgPSAkKCc8aWZyYW1lPjwvaWZyYW1lPicpO1xyXG5cdFx0XHRcdFx0JG9iamVjdC5hdHRyKHtcclxuXHRcdFx0XHRcdFx0J3NyYyc6IF9zZWxmLm9iamVjdERhdGEudXJsXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQvLyBBZGQgY3VzdG9tIGF0dHJpYnV0ZXMgZnJvbSBfc2VsZi5zZXR0aW5nc1xyXG5cdFx0XHRcdFx0JC5lYWNoKF9zZWxmLnNldHRpbmdzLmlmcmFtZSwgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdCRvYmplY3QuYXR0cihuYW1lLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRfc2VsZi5fYWRkT2JqZWN0KCRvYmplY3QpO1xyXG5cdFx0XHRfc2VsZi5fbG9hZE9iamVjdCgkb2JqZWN0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBZGRzIHRoZSBuZXcgb2JqZWN0IHRvIHRoZSBtYXJrdXBcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHQkb2JqZWN0XHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X2FkZE9iamVjdDogZnVuY3Rpb24gKCRvYmplY3QpIHtcclxuXHRcdFx0Ly8gQWRkIG9iamVjdCB0byBjb250ZW50IGhvbGRlclxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLmNvbnRlbnRJbm5lci5odG1sKCRvYmplY3QpO1xyXG5cclxuXHRcdFx0Ly8gU3RhcnQgbG9hZGluZ1xyXG5cdFx0XHRfc2VsZi5fbG9hZGluZygnc3RhcnQnKTtcclxuXHJcblx0XHRcdC8vIENhbGwgb25TdGFydCBob29rIGZ1bmN0aW9uc1xyXG5cdFx0XHRfc2VsZi5fY2FsbEhvb2tzKF9zZWxmLnNldHRpbmdzLm9uU3RhcnQpO1xyXG5cclxuXHRcdFx0Ly8gQWRkIHNlcXVlbmNlSW5mbyB0byB0aGUgY29udGVudCBob2xkZXIgb3IgaGlkZSBpZiBpdHMgZW1wdHlcclxuXHRcdFx0aWYgKF9zZWxmLnNldHRpbmdzLnNob3dTZXF1ZW5jZUluZm8gPT09IHRydWUgJiYgX3NlbGYub2JqZWN0RGF0YS5pc1BhcnRPZlNlcXVlbmNlKSB7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5zZXF1ZW5jZUluZm8uaHRtbChfc2VsZi5vYmplY3REYXRhLnNlcXVlbmNlSW5mbyk7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5zZXF1ZW5jZUluZm8uc2hvdygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9zZWxmLm9iamVjdHMuc2VxdWVuY2VJbmZvLmVtcHR5KCk7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5zZXF1ZW5jZUluZm8uaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIEFkZCB0aXRsZSB0byB0aGUgY29udGVudCBob2xkZXIgb3IgaGlkZSBpZiBpdHMgZW1wdHlcclxuXHRcdFx0aWYgKF9zZWxmLnNldHRpbmdzLnNob3dUaXRsZSA9PT0gdHJ1ZSAmJiBfc2VsZi5vYmplY3REYXRhLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgX3NlbGYub2JqZWN0RGF0YS50aXRsZSAhPT0gJycpIHtcclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLnRpdGxlLmh0bWwoX3NlbGYub2JqZWN0RGF0YS50aXRsZSk7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy50aXRsZS5zaG93KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy50aXRsZS5lbXB0eSgpO1xyXG5cdFx0XHRcdF9zZWxmLm9iamVjdHMudGl0bGUuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIEFkZCBjYXB0aW9uIHRvIHRoZSBjb250ZW50IGhvbGRlciBvciBoaWRlIGlmIGl0cyBlbXB0eVxyXG5cdFx0XHRpZiAoX3NlbGYuc2V0dGluZ3Muc2hvd0NhcHRpb24gPT09IHRydWUgJiYgX3NlbGYub2JqZWN0RGF0YS5jYXB0aW9uICE9PSB1bmRlZmluZWQgJiYgX3NlbGYub2JqZWN0RGF0YS5jYXB0aW9uICE9PSAnJykge1xyXG5cdFx0XHRcdF9zZWxmLm9iamVjdHMuY2FwdGlvbi5odG1sKF9zZWxmLm9iamVjdERhdGEuY2FwdGlvbik7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5jYXB0aW9uLnNob3coKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLmNhcHRpb24uZW1wdHkoKTtcclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLmNhcHRpb24uaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTG9hZHMgdGhlIG5ldyBvYmplY3RcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHQkb2JqZWN0XHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X2xvYWRPYmplY3Q6IGZ1bmN0aW9uICgkb2JqZWN0KSB7XHJcblx0XHRcdC8vIExvYWQgdGhlIG9iamVjdFxyXG5cdFx0XHRzd2l0Y2ggKF9zZWxmLm9iamVjdERhdGEudHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgJ2lubGluZSc6XHJcblx0XHRcdFx0XHRpZiAoJChfc2VsZi5vYmplY3REYXRhLnVybCkpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYuX3Nob3dDb250ZW50KCRvYmplY3QpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYuZXJyb3IoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2FqYXgnOlxyXG5cdFx0XHRcdFx0JC5hamF4KFxyXG5cdFx0XHRcdFx0XHQkLmV4dGVuZCh7fSwgX3NlbGYuc2V0dGluZ3MuYWpheCwge1xyXG5cdFx0XHRcdFx0XHRcdHVybDogX3NlbGYub2JqZWN0RGF0YS51cmwsXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogX3NlbGYub2JqZWN0RGF0YS5yZXF1ZXN0VHlwZSxcclxuXHRcdFx0XHRcdFx0XHRkYXRhVHlwZTogX3NlbGYub2JqZWN0RGF0YS5yZXF1ZXN0RGF0YVR5cGUsXHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogX3NlbGYub2JqZWN0RGF0YS5yZXF1ZXN0RGF0YSxcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIENoZWNrIGZvciBYLUFqYXgtTG9jYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChqcVhIUi5nZXRSZXNwb25zZUhlYWRlcignWC1BamF4LUxvY2F0aW9uJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0RGF0YS51cmwgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcignWC1BamF4LUxvY2F0aW9uJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdF9zZWxmLl9sb2FkT2JqZWN0KCRvYmplY3QpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFVuc2VyaWFsaXplIGlmIGRhdGEgaXMgdHJhbnNmZXJyZWQgYXMganNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3NlbGYub2JqZWN0RGF0YS5yZXF1ZXN0RGF0YVR5cGUgPT09ICdqc29uJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdERhdGEuZGF0YSA9IGRhdGE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JG9iamVjdC5odG1sKGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdF9zZWxmLl9zaG93Q29udGVudCgkb2JqZWN0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfc2VsZi5lcnJvcigpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdmbGFzaCc6XHJcblx0XHRcdFx0XHRfc2VsZi5fc2hvd0NvbnRlbnQoJG9iamVjdCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICd2aWRlbyc6XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mKCRvYmplY3QuZ2V0KDApLmNhblBsYXlUeXBlKSA9PT0gJ2Z1bmN0aW9uJyB8fCBfc2VsZi5vYmplY3RzLmNhc2UuZmluZCgndmlkZW8nKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYuX3Nob3dDb250ZW50KCRvYmplY3QpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYuZXJyb3IoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRpZiAoX3NlbGYub2JqZWN0RGF0YS51cmwpIHtcclxuXHRcdFx0XHRcdFx0JG9iamVjdC5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRfc2VsZi5fc2hvd0NvbnRlbnQoJG9iamVjdCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQkb2JqZWN0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRfc2VsZi5lcnJvcigpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF9zZWxmLmVycm9yKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRocm93cyBhbiBlcnJvciBtZXNzYWdlIGlmIHNvbWV0aGluZyB3ZW50IHdyb25nXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e3ZvaWR9XHJcblx0XHQgKi9cclxuXHRcdGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9zZWxmLm9iamVjdERhdGEudHlwZSA9ICdlcnJvcic7XHJcblx0XHRcdHZhciAkb2JqZWN0ID0gJCgnPGRpdiBjbGFzcz1cIicgKyBfc2VsZi5zZXR0aW5ncy5jbGFzc1ByZWZpeCArICdpbmxpbmVXcmFwXCI+PC9kaXY+Jyk7XHJcblxyXG5cdFx0XHQkb2JqZWN0Lmh0bWwoX3NlbGYuc2V0dGluZ3MuZXJyb3JNZXNzYWdlKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5jb250ZW50SW5uZXIuaHRtbCgkb2JqZWN0KTtcclxuXHJcblx0XHRcdF9zZWxmLl9zaG93Q29udGVudChfc2VsZi5vYmplY3RzLmNvbnRlbnRJbm5lcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2FsY3VsYXRlcyB0aGUgZGltZW5zaW9ucyB0byBmaXQgY29udGVudFxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbVx0e29iamVjdH1cdCRvYmplY3RcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRfY2FsY3VsYXRlRGltZW5zaW9uczogZnVuY3Rpb24gKCRvYmplY3QpIHtcclxuXHRcdFx0X3NlbGYuX2NsZWFudXBEaW1lbnNpb25zKCk7XHJcblxyXG5cdFx0XHRpZiAoISRvYmplY3QpIHJldHVybjtcclxuXHJcblx0XHRcdC8vIFNldCBkZWZhdWx0IGRpbWVuc2lvbnNcclxuXHRcdFx0dmFyIGRpbWVuc2lvbnMgPSB7XHJcblx0XHRcdFx0cmF0aW86IDEsXHJcblx0XHRcdFx0b2JqZWN0V2lkdGg6ICRvYmplY3QuYXR0cignd2lkdGgnKSA/ICRvYmplY3QuYXR0cignd2lkdGgnKSA6ICRvYmplY3QuYXR0cihfc2VsZi5fcHJlZml4QXR0cmlidXRlTmFtZSgnd2lkdGgnKSksXHJcblx0XHRcdFx0b2JqZWN0SGVpZ2h0OiAkb2JqZWN0LmF0dHIoJ2hlaWdodCcpID8gJG9iamVjdC5hdHRyKCdoZWlnaHQnKSA6ICRvYmplY3QuYXR0cihfc2VsZi5fcHJlZml4QXR0cmlidXRlTmFtZSgnaGVpZ2h0JykpXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoIV9zZWxmLnNldHRpbmdzLmRpc2FibGVTaHJpbmspIHtcclxuXHRcdFx0XHQvLyBBZGQgY2FsY3VsYXRlZCBtYXhpbXVtIHdpZHRoL2hlaWdodCB0byBkaW1lbnNpb25zXHJcblx0XHRcdFx0ZGltZW5zaW9ucy5tYXhXaWR0aCA9IHBhcnNlSW50KF9zZWxmLmRpbWVuc2lvbnMud2luZG93V2lkdGggKiBfc2VsZi5zZXR0aW5ncy5zaHJpbmtGYWN0b3IpO1xyXG5cdFx0XHRcdGRpbWVuc2lvbnMubWF4SGVpZ2h0ID0gcGFyc2VJbnQoX3NlbGYuZGltZW5zaW9ucy53aW5kb3dIZWlnaHQgKiBfc2VsZi5zZXR0aW5ncy5zaHJpbmtGYWN0b3IpO1xyXG5cclxuXHRcdFx0XHQvLyBJZiB0aGUgYXV0byBjYWxjdWxhdGVkIG1heFdpZHRoL21heEhlaWdodCBncmVhdGhlciB0aGFuIHRoZSB1c2VyLWRlZmluZWQgb25lLCB1c2UgdGhhdC5cclxuXHRcdFx0XHRpZiAoZGltZW5zaW9ucy5tYXhXaWR0aCA+IF9zZWxmLnNldHRpbmdzLm1heFdpZHRoKSB7XHJcblx0XHRcdFx0XHRkaW1lbnNpb25zLm1heFdpZHRoID0gX3NlbGYuc2V0dGluZ3MubWF4V2lkdGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkaW1lbnNpb25zLm1heEhlaWdodCA+IF9zZWxmLnNldHRpbmdzLm1heEhlaWdodCkge1xyXG5cdFx0XHRcdFx0ZGltZW5zaW9ucy5tYXhIZWlnaHQgPSBfc2VsZi5zZXR0aW5ncy5tYXhIZWlnaHQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBzY3JlZW4gd2lkdGgvaGVpZ2h0IGFuZCBpbWFnZSB3aWR0aC9oZWlnaHRcclxuXHRcdFx0XHRkaW1lbnNpb25zLmRpZmZlcmVuY2VXaWR0aEFzUGVyY2VudCA9IHBhcnNlSW50KDEwMCAvIGRpbWVuc2lvbnMubWF4V2lkdGggKiBkaW1lbnNpb25zLm9iamVjdFdpZHRoKTtcclxuXHRcdFx0XHRkaW1lbnNpb25zLmRpZmZlcmVuY2VIZWlnaHRBc1BlcmNlbnQgPSBwYXJzZUludCgxMDAgLyBkaW1lbnNpb25zLm1heEhlaWdodCAqIGRpbWVuc2lvbnMub2JqZWN0SGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0c3dpdGNoIChfc2VsZi5vYmplY3REYXRhLnR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ2ltYWdlJzpcclxuXHRcdFx0XHRcdGNhc2UgJ2ZsYXNoJzpcclxuXHRcdFx0XHRcdGNhc2UgJ3ZpZGVvJzpcclxuXHRcdFx0XHRcdGNhc2UgJ2lmcmFtZSc6XHJcblx0XHRcdFx0XHRjYXNlICdhamF4JzpcclxuXHRcdFx0XHRcdGNhc2UgJ2lubGluZSc6XHJcblx0XHRcdFx0XHRcdGlmIChfc2VsZi5vYmplY3REYXRhLnR5cGUgPT09ICdpbWFnZScgfHwgX3NlbGYuc2V0dGluZ3MuZml4ZWRSYXRpbyA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChkaW1lbnNpb25zLmRpZmZlcmVuY2VXaWR0aEFzUGVyY2VudCA+IDEwMCAmJiBkaW1lbnNpb25zLmRpZmZlcmVuY2VXaWR0aEFzUGVyY2VudCA+IGRpbWVuc2lvbnMuZGlmZmVyZW5jZUhlaWdodEFzUGVyY2VudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGltZW5zaW9ucy5vYmplY3RXaWR0aCA9IGRpbWVuc2lvbnMubWF4V2lkdGg7XHJcblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zLm9iamVjdEhlaWdodCA9IHBhcnNlSW50KGRpbWVuc2lvbnMub2JqZWN0SGVpZ2h0IC8gZGltZW5zaW9ucy5kaWZmZXJlbmNlV2lkdGhBc1BlcmNlbnQgKiAxMDApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAoZGltZW5zaW9ucy5kaWZmZXJlbmNlSGVpZ2h0QXNQZXJjZW50ID4gMTAwICYmIGRpbWVuc2lvbnMuZGlmZmVyZW5jZUhlaWdodEFzUGVyY2VudCA+IGRpbWVuc2lvbnMuZGlmZmVyZW5jZVdpZHRoQXNQZXJjZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zLm9iamVjdFdpZHRoID0gcGFyc2VJbnQoZGltZW5zaW9ucy5vYmplY3RXaWR0aCAvIGRpbWVuc2lvbnMuZGlmZmVyZW5jZUhlaWdodEFzUGVyY2VudCAqIDEwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zLm9iamVjdEhlaWdodCA9IGRpbWVuc2lvbnMubWF4SGVpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAoZGltZW5zaW9ucy5kaWZmZXJlbmNlSGVpZ2h0QXNQZXJjZW50ID4gMTAwICYmIGRpbWVuc2lvbnMuZGlmZmVyZW5jZVdpZHRoQXNQZXJjZW50IDwgZGltZW5zaW9ucy5kaWZmZXJlbmNlSGVpZ2h0QXNQZXJjZW50KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zLm9iamVjdFdpZHRoID0gcGFyc2VJbnQoZGltZW5zaW9ucy5tYXhXaWR0aCAvIGRpbWVuc2lvbnMuZGlmZmVyZW5jZUhlaWdodEFzUGVyY2VudCAqIGRpbWVuc2lvbnMuZGlmZmVyZW5jZVdpZHRoQXNQZXJjZW50KTtcclxuXHRcdFx0XHRcdFx0XHRcdGRpbWVuc2lvbnMub2JqZWN0SGVpZ2h0ID0gZGltZW5zaW9ucy5tYXhIZWlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXNlICdlcnJvcic6XHJcblx0XHRcdFx0XHRcdGlmICghaXNOYU4oZGltZW5zaW9ucy5vYmplY3RXaWR0aCkgJiYgZGltZW5zaW9ucy5vYmplY3RXaWR0aCA+IGRpbWVuc2lvbnMubWF4V2lkdGgpIHtcclxuXHRcdFx0XHRcdFx0XHRkaW1lbnNpb25zLm9iamVjdFdpZHRoID0gZGltZW5zaW9ucy5tYXhXaWR0aDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdGlmICgoaXNOYU4oZGltZW5zaW9ucy5vYmplY3RXaWR0aCkgfHwgZGltZW5zaW9ucy5vYmplY3RXaWR0aCA+IGRpbWVuc2lvbnMubWF4V2lkdGgpICYmICFfc2VsZi5zZXR0aW5ncy5mb3JjZVdpZHRoKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGltZW5zaW9ucy5vYmplY3RXaWR0aCA9IGRpbWVuc2lvbnMubWF4V2lkdGg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKCgoaXNOYU4oZGltZW5zaW9ucy5vYmplY3RIZWlnaHQpICYmIGRpbWVuc2lvbnMub2JqZWN0SGVpZ2h0ICE9PSAnYXV0bycpIHx8IGRpbWVuc2lvbnMub2JqZWN0SGVpZ2h0ID4gZGltZW5zaW9ucy5tYXhIZWlnaHQpICYmICFfc2VsZi5zZXR0aW5ncy5mb3JjZUhlaWdodCkge1xyXG5cdFx0XHRcdFx0XHRcdGRpbWVuc2lvbnMub2JqZWN0SGVpZ2h0ID0gZGltZW5zaW9ucy5tYXhIZWlnaHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoX3NlbGYuc2V0dGluZ3MuZm9yY2VXaWR0aCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRkaW1lbnNpb25zLm9iamVjdFdpZHRoID0gX3NlbGYuc2V0dGluZ3NbX3NlbGYub2JqZWN0RGF0YS50eXBlXS53aWR0aDtcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRkaW1lbnNpb25zLm9iamVjdFdpZHRoID0gX3NlbGYuc2V0dGluZ3Mud2lkdGggfHwgZGltZW5zaW9ucy5vYmplY3RXaWR0aDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGRpbWVuc2lvbnMubWF4V2lkdGggPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgkb2JqZWN0LmF0dHIoX3NlbGYuX3ByZWZpeEF0dHJpYnV0ZU5hbWUoJ21heC13aWR0aCcpKSkge1xyXG5cdFx0XHRcdGRpbWVuc2lvbnMubWF4V2lkdGggPSAkb2JqZWN0LmF0dHIoX3NlbGYuX3ByZWZpeEF0dHJpYnV0ZU5hbWUoJ21heC13aWR0aCcpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKF9zZWxmLnNldHRpbmdzLmZvcmNlSGVpZ2h0KSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGRpbWVuc2lvbnMub2JqZWN0SGVpZ2h0ID0gX3NlbGYuc2V0dGluZ3NbX3NlbGYub2JqZWN0RGF0YS50eXBlXS5oZWlnaHQ7XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0ZGltZW5zaW9ucy5vYmplY3RIZWlnaHQgPSBfc2VsZi5zZXR0aW5ncy5oZWlnaHQgfHwgZGltZW5zaW9ucy5vYmplY3RIZWlnaHQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRkaW1lbnNpb25zLm1heEhlaWdodCA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCRvYmplY3QuYXR0cihfc2VsZi5fcHJlZml4QXR0cmlidXRlTmFtZSgnbWF4LWhlaWdodCcpKSkge1xyXG5cdFx0XHRcdGRpbWVuc2lvbnMubWF4SGVpZ2h0ID0gJG9iamVjdC5hdHRyKF9zZWxmLl9wcmVmaXhBdHRyaWJ1dGVOYW1lKCdtYXgtaGVpZ2h0JykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdF9zZWxmLl9hZGp1c3REaW1lbnNpb25zKCRvYmplY3QsIGRpbWVuc2lvbnMpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkanVzdHMgdGhlIGRpbWVuc2lvbnNcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHQkb2JqZWN0XHJcblx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHRkaW1lbnNpb25zXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X2FkanVzdERpbWVuc2lvbnM6IGZ1bmN0aW9uICgkb2JqZWN0LCBkaW1lbnNpb25zKSB7XHJcblx0XHRcdC8vIEFkanVzdCB3aWR0aCBhbmQgaGVpZ2h0XHJcblx0XHRcdCRvYmplY3QuY3NzKHtcclxuXHRcdFx0XHQnd2lkdGgnOiBkaW1lbnNpb25zLm9iamVjdFdpZHRoLFxyXG5cdFx0XHRcdCdoZWlnaHQnOiBkaW1lbnNpb25zLm9iamVjdEhlaWdodCxcclxuXHRcdFx0XHQnbWF4LXdpZHRoJzogZGltZW5zaW9ucy5tYXhXaWR0aCxcclxuXHRcdFx0XHQnbWF4LWhlaWdodCc6IGRpbWVuc2lvbnMubWF4SGVpZ2h0XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0X3NlbGYub2JqZWN0cy5jb250ZW50SW5uZXIuY3NzKHtcclxuXHRcdFx0XHQnd2lkdGgnOiAkb2JqZWN0Lm91dGVyV2lkdGgoKSxcclxuXHRcdFx0XHQnaGVpZ2h0JzogJG9iamVjdC5vdXRlckhlaWdodCgpLFxyXG5cdFx0XHRcdCdtYXgtd2lkdGgnOiAnMTAwJSdcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLmNhc2UuY3NzKHtcclxuXHRcdFx0XHQnd2lkdGgnOiBfc2VsZi5vYmplY3RzLmNvbnRlbnRJbm5lci5vdXRlcldpZHRoKCksXHJcblx0XHRcdFx0J21heC13aWR0aCc6ICcxMDAlJ1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEFkanVzdCBtYXJnaW5cclxuXHRcdFx0X3NlbGYub2JqZWN0cy5jYXNlLmNzcyh7XHJcblx0XHRcdFx0J21hcmdpbi10b3AnOiBwYXJzZUludCgtKF9zZWxmLm9iamVjdHMuY2FzZS5vdXRlckhlaWdodCgpIC8gMikpLFxyXG5cdFx0XHRcdCdtYXJnaW4tbGVmdCc6IHBhcnNlSW50KC0oX3NlbGYub2JqZWN0cy5jYXNlLm91dGVyV2lkdGgoKSAvIDIpKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIYW5kbGVzIHRoZSBfbG9hZGluZ1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbVx0e3N0cmluZ31cdHByb2Nlc3NcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRfbG9hZGluZzogZnVuY3Rpb24gKHByb2Nlc3MpIHtcclxuXHRcdFx0aWYgKHByb2Nlc3MgPT09ICdzdGFydCcpIHtcclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLmNhc2UuYWRkQ2xhc3MoX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnbG9hZGluZycpO1xyXG5cdFx0XHRcdF9zZWxmLm9iamVjdHMubG9hZGluZy5zaG93KCk7XHJcblx0XHRcdH0gZWxzZSBpZiAocHJvY2VzcyA9PT0gJ2VuZCcpIHtcclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLmNhc2UucmVtb3ZlQ2xhc3MoX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnbG9hZGluZycpO1xyXG5cdFx0XHRcdF9zZWxmLm9iamVjdHMubG9hZGluZy5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogR2V0cyB0aGUgY2xpZW50IHNjcmVlbiBkaW1lbnNpb25zXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e29iamVjdH1cdGRpbWVuc2lvbnNcclxuXHRcdCAqL1xyXG5cdFx0Z2V0Vmlld3BvcnREaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0d2luZG93V2lkdGg6ICQod2luZG93KS5pbm5lcldpZHRoKCksXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFZlcmlmaWVzIHRoZSB1cmxcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtzdHJpbmd9XHRkYXRhVXJsXHJcblx0XHQgKiBAcmV0dXJuXHR7b2JqZWN0fVx0ZGF0YVVybFx0Q2xlYW4gdXJsIGZvciBwcm9jZXNzaW5nIGNvbnRlbnRcclxuXHRcdCAqL1xyXG5cdFx0X3ZlcmlmeURhdGFVcmw6IGZ1bmN0aW9uIChkYXRhVXJsKSB7XHJcblx0XHRcdGlmICghZGF0YVVybCB8fCBkYXRhVXJsID09PSB1bmRlZmluZWQgfHwgZGF0YVVybCA9PT0gJycpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChkYXRhVXJsLmluZGV4T2YoJyMnKSA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVVybCA9IGRhdGFVcmwuc3BsaXQoJyMnKTtcclxuXHRcdFx0XHRkYXRhVXJsID0gJyMnICsgZGF0YVVybFtkYXRhVXJsLmxlbmd0aCAtIDFdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gX3NlbGYuX25vcm1hbGl6ZVVybChkYXRhVXJsLnRvU3RyaW5nKCkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRcdC8vXHJcblx0XHQvKipcclxuXHRcdCAqIFRyaWVzIHRvIGdldCB0aGUgKGZpbGUpIHN1ZmZpeCBvZiBhbiB1cmxcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtzdHJpbmd9XHR1cmxcclxuXHRcdCAqIEByZXR1cm5cdHtzdHJpbmd9XHJcblx0XHQgKi9cclxuXHRcdF9nZXRGaWxlVXJsU3VmZml4OiBmdW5jdGlvbiAodXJsKSB7XHJcblx0XHRcdHZhciByZSA9IC8oPzpcXC4oW14uXSspKT8kLztcclxuXHRcdFx0cmV0dXJuIHJlLmV4ZWModXJsLnRvTG93ZXJDYXNlKCkpWzFdO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFZlcmlmaWVzIHRoZSBkYXRhIHR5cGUgb2YgdGhlIGNvbnRlbnQgdG8gbG9hZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbVx0e3N0cmluZ31cdFx0XHR1cmxcclxuXHRcdCAqIEByZXR1cm5cdHtzdHJpbmd8Ym9vbGVhbn1cdEFycmF5IGtleSBpZiBleHByZXNzaW9uIG1hdGNoZWQsIGVsc2UgZmFsc2VcclxuXHRcdCAqL1xyXG5cdFx0X3ZlcmlmeURhdGFUeXBlOiBmdW5jdGlvbiAodXJsKSB7XHJcblx0XHRcdHZhciB0eXBlTWFwcGluZyA9IF9zZWxmLnNldHRpbmdzLnR5cGVNYXBwaW5nO1xyXG5cclxuXHRcdFx0Ly8gRWFybHkgYWJvcnQgaWYgZGF0YVVybCBjb3VsZG4ndCBiZSB2ZXJpZmllZFxyXG5cdFx0XHRpZiAoIXVybCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gVmVyaWZ5IHRoZSBkYXRhVHlwZSBvZiB1cmwgYWNjb3JkaW5nIHRvIHR5cGVNYXBwaW5nIHdoaWNoXHJcblx0XHRcdC8vIGhhcyBiZWVuIGRlZmluZWQgaW4gc2V0dGluZ3MuXHJcblx0XHRcdGZvciAodmFyIGtleSBpbiB0eXBlTWFwcGluZykge1xyXG5cdFx0XHRcdGlmICh0eXBlTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHR2YXIgc3VmZml4QXJyID0gdHlwZU1hcHBpbmdba2V5XS5zcGxpdCgnLCcpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3VmZml4QXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdHZhciBzdWZmaXggPSBzdWZmaXhBcnJbaV0udG9Mb3dlckNhc2UoKSxcclxuXHRcdFx0XHRcdFx0XHRyZWdleHAgPSBuZXcgUmVnRXhwKCdcXC4oJyArIHN1ZmZpeCArICcpJCcsICdpJyksXHJcblx0XHRcdFx0XHRcdFx0c3RyID0gdXJsLnRvTG93ZXJDYXNlKCkuc3BsaXQoJz8nKVswXS5zdWJzdHIoLTUpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHJlZ2V4cC50ZXN0KHN0cikgPT09IHRydWUgfHwgKGtleSA9PT0gJ2lubGluZScgJiYgKHVybC5pbmRleE9mKHN1ZmZpeCkgPiAtMSkpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGtleTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgbm8gZXhwcmVzc2lvbiBtYXRjaGVkLCByZXR1cm4gJ2lmcmFtZScuXHJcblx0XHRcdHJldHVybiAnaWZyYW1lJztcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBFeHRlbmRzIGh0bWwgbWFya3VwIHdpdGggdGhlIGVzc2VudGlhbCB0YWdzXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e3ZvaWR9XHJcblx0XHQgKi9cclxuXHRcdF9hZGRFbGVtZW50czogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIF9zZWxmLm9iamVjdHMuY2FzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgJCgnIycgKyBfc2VsZi5vYmplY3RzLmNhc2UuYXR0cignaWQnKSkubGVuZ3RoKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRfc2VsZi5zZXR0aW5ncy5tYXJrdXAoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTaG93cyB0aGUgbG9hZGVkIGNvbnRlbnRcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHQkb2JqZWN0XHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X3Nob3dDb250ZW50OiBmdW5jdGlvbiAoJG9iamVjdCkge1xyXG5cdFx0XHQvLyBBZGQgZGF0YSBhdHRyaWJ1dGUgd2l0aCB0aGUgb2JqZWN0IHR5cGVcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5kb2N1bWVudC5hdHRyKF9zZWxmLl9wcmVmaXhBdHRyaWJ1dGVOYW1lKCd0eXBlJyksIF9zZWxmLm9iamVjdERhdGEudHlwZSk7XHJcblxyXG5cdFx0XHRfc2VsZi5jYWNoZS5vYmplY3QgPSAkb2JqZWN0O1xyXG5cclxuXHRcdFx0Ly8gQ2FsbCBvbkJlZm9yZVNob3cgaG9vayBmdW5jdGlvbnNcclxuXHRcdFx0X3NlbGYuX2NhbGxIb29rcyhfc2VsZi5zZXR0aW5ncy5vbkJlZm9yZVNob3cpO1xyXG5cclxuXHRcdFx0aWYgKF9zZWxmLnNldHRpbmdzLmJyZWFrQmVmb3JlU2hvdykgcmV0dXJuO1xyXG5cdFx0XHRfc2VsZi5zaG93KCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3RhcnRzIHRoZSAnaW5UcmFuc2l0aW9uJ1xyXG5cdFx0ICogQHJldHVyblx0e3ZvaWR9XHJcblx0XHQgKi9cclxuXHRcdF9zdGFydEluVHJhbnNpdGlvbjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRzd2l0Y2ggKF9zZWxmLnRyYW5zaXRpb24uaW4oKSkge1xyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbFRvcCc6XHJcblx0XHRcdFx0Y2FzZSAnc2Nyb2xsUmlnaHQnOlxyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbEJvdHRvbSc6XHJcblx0XHRcdFx0Y2FzZSAnc2Nyb2xsTGVmdCc6XHJcblx0XHRcdFx0Y2FzZSAnc2Nyb2xsSG9yaXpvbnRhbCc6XHJcblx0XHRcdFx0Y2FzZSAnc2Nyb2xsVmVydGljYWwnOlxyXG5cdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5zY3JvbGwoX3NlbGYub2JqZWN0cy5jYXNlLCAnaW4nLCBfc2VsZi5zZXR0aW5ncy5zcGVlZEluKTtcclxuXHRcdFx0XHRcdF9zZWxmLnRyYW5zaXRpb24uZmFkZShfc2VsZi5vYmplY3RzLmNvbnRlbnRJbm5lciwgJ2luJywgX3NlbGYuc2V0dGluZ3Muc3BlZWRJbik7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdlbGFzdGljJzpcclxuXHRcdFx0XHRcdGlmIChfc2VsZi5vYmplY3RzLmNhc2UuY3NzKCdvcGFjaXR5JykgPCAxKSB7XHJcblx0XHRcdFx0XHRcdF9zZWxmLnRyYW5zaXRpb24uem9vbShfc2VsZi5vYmplY3RzLmNhc2UsICdpbicsIF9zZWxmLnNldHRpbmdzLnNwZWVkSW4pO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50cmFuc2l0aW9uLmZhZGUoX3NlbGYub2JqZWN0cy5jb250ZW50SW5uZXIsICdpbicsIF9zZWxmLnNldHRpbmdzLnNwZWVkSW4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlICdmYWRlJzpcclxuXHRcdFx0XHRjYXNlICdmYWRlSW5saW5lJzpcclxuXHRcdFx0XHRcdF9zZWxmLnRyYW5zaXRpb24uZmFkZShfc2VsZi5vYmplY3RzLmNhc2UsICdpbicsIF9zZWxmLnNldHRpbmdzLnNwZWVkSW4pO1xyXG5cdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5mYWRlKF9zZWxmLm9iamVjdHMuY29udGVudElubmVyLCAnaW4nLCBfc2VsZi5zZXR0aW5ncy5zcGVlZEluKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRfc2VsZi50cmFuc2l0aW9uLmZhZGUoX3NlbGYub2JqZWN0cy5jYXNlLCAnaW4nLCAwKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBFbmQgbG9hZGluZy5cclxuXHRcdFx0X3NlbGYuX2xvYWRpbmcoJ2VuZCcpO1xyXG5cdFx0XHRfc2VsZi5pc0J1c3kgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vIFNldCBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbSBvcGVuZWRcclxuXHRcdFx0aWYgKCFfc2VsZi5jYWNoZS5maXJzdE9wZW5lZCkge1xyXG5cdFx0XHRcdF9zZWxmLmNhY2hlLmZpcnN0T3BlbmVkID0gX3NlbGYub2JqZWN0RGF0YS50aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBGYWRlIGluIHRoZSBpbmZvIHdpdGggZGVsYXlcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5pbmZvLmhpZGUoKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0IF9zZWxmLnRyYW5zaXRpb24uZmFkZShfc2VsZi5vYmplY3RzLmluZm8sICdpbicsIF9zZWxmLnNldHRpbmdzLnNwZWVkSW4pO1xyXG5cdFx0XHR9LCBfc2VsZi5zZXR0aW5ncy5zcGVlZEluKTtcclxuXHJcblx0XHRcdC8vIENhbGwgb25GaW5pc2ggaG9vayBmdW5jdGlvbnNcclxuXHRcdFx0X3NlbGYuX2NhbGxIb29rcyhfc2VsZi5zZXR0aW5ncy5vbkZpbmlzaCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUHJvY2Vzc2VzIHRoZSBjb250ZW50IHRvIHNob3dcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X3Byb2Nlc3NDb250ZW50OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9zZWxmLmlzQnVzeSA9IHRydWU7XHJcblxyXG5cdFx0XHQvLyBGYWRlIG91dCB0aGUgaW5mbyBhdCBmaXJzdFxyXG5cdFx0XHRfc2VsZi50cmFuc2l0aW9uLmZhZGUoX3NlbGYub2JqZWN0cy5pbmZvLCAnb3V0JywgMCk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKF9zZWxmLnNldHRpbmdzLnRyYW5zaXRpb25PdXQpIHtcclxuXHRcdFx0XHRjYXNlICdzY3JvbGxUb3AnOlxyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbFJpZ2h0JzpcclxuXHRcdFx0XHRjYXNlICdzY3JvbGxCb3R0b20nOlxyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbExlZnQnOlxyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbFZlcnRpY2FsJzpcclxuXHRcdFx0XHRjYXNlICdzY3JvbGxIb3Jpem9udGFsJzpcclxuXHRcdFx0XHRcdGlmIChfc2VsZi5vYmplY3RzLmNhc2UuaXMoJzpoaWRkZW4nKSkge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50cmFuc2l0aW9uLmZhZGUoX3NlbGYub2JqZWN0cy5jb250ZW50SW5uZXIsICdvdXQnLCAwKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5mYWRlKF9zZWxmLm9iamVjdHMuY2FzZSwgJ291dCcsIDAsIDAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRfc2VsZi5fbG9hZENvbnRlbnQoKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50cmFuc2l0aW9uLnNjcm9sbChfc2VsZi5vYmplY3RzLmNhc2UsICdvdXQnLCBfc2VsZi5zZXR0aW5ncy5zcGVlZE91dCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLl9sb2FkQ29udGVudCgpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2ZhZGUnOlxyXG5cdFx0XHRcdFx0aWYgKF9zZWxmLm9iamVjdHMuY2FzZS5pcygnOmhpZGRlbicpKSB7XHJcblx0XHRcdFx0XHRcdF9zZWxmLnRyYW5zaXRpb24uZmFkZShfc2VsZi5vYmplY3RzLmNhc2UsICdvdXQnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0X3NlbGYuX2xvYWRDb250ZW50KCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5mYWRlKF9zZWxmLm9iamVjdHMuY2FzZSwgJ291dCcsIF9zZWxmLnNldHRpbmdzLnNwZWVkT3V0LCAwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0X3NlbGYuX2xvYWRDb250ZW50KCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnZmFkZUlubGluZSc6XHJcblx0XHRcdFx0Y2FzZSAnZWxhc3RpYyc6XHJcblx0XHRcdFx0XHRpZiAoX3NlbGYub2JqZWN0cy5jYXNlLmlzKCc6aGlkZGVuJykpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5mYWRlKF9zZWxmLm9iamVjdHMuY2FzZSwgJ291dCcsIDAsIDAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRfc2VsZi5fbG9hZENvbnRlbnQoKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50cmFuc2l0aW9uLmZhZGUoX3NlbGYub2JqZWN0cy5jb250ZW50SW5uZXIsICdvdXQnLCBfc2VsZi5zZXR0aW5ncy5zcGVlZE91dCwgMCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLl9sb2FkQ29udGVudCgpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRfc2VsZi50cmFuc2l0aW9uLmZhZGUoX3NlbGYub2JqZWN0cy5jYXNlLCAnb3V0JywgMCwgMCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5fbG9hZENvbnRlbnQoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIYW5kbGVzIGV2ZW50cyBmb3IgZ2FsbGVyeSBidXR0b25zXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e3ZvaWR9XHJcblx0XHQgKi9cclxuXHRcdF9oYW5kbGVFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X3NlbGYuX3VuYmluZEV2ZW50cygpO1xyXG5cclxuXHRcdFx0X3NlbGYub2JqZWN0cy5uYXYuY2hpbGRyZW4oKS5ub3QoX3NlbGYub2JqZWN0cy5jbG9zZSkuaGlkZSgpO1xyXG5cclxuXHRcdFx0Ly8gSWYgc2xpZGVzaG93IGlzIGVuYWJsZWQsIHNob3cgcGxheS9wYXVzZSBhbmQgc3RhcnQgdGltZW91dC5cclxuXHRcdFx0aWYgKF9zZWxmLmlzU2xpZGVzaG93RW5hYmxlZCgpKSB7XHJcblx0XHRcdFx0Ly8gT25seSBzdGFydCB0aGUgdGltZW91dCBpZiBzbGlkZXNob3cgYXV0b3N0YXJ0IGlzIGVuYWJsZWQgYW5kIHNsaWRlc2hvdyBpcyBub3QgcGF1c2luZ1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdChfc2VsZi5zZXR0aW5ncy5zbGlkZXNob3dBdXRvU3RhcnQgPT09IHRydWUgfHwgX3NlbGYuaXNTbGlkZXNob3dTdGFydGVkKSAmJlxyXG5cdFx0XHRcdFx0IV9zZWxmLm9iamVjdHMubmF2Lmhhc0NsYXNzKF9zZWxmLnNldHRpbmdzLmNsYXNzUHJlZml4ICsgJ3BhdXNlZCcpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRfc2VsZi5fc3RhcnRUaW1lb3V0KCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9zZWxmLl9zdG9wVGltZW91dCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKF9zZWxmLnNldHRpbmdzLmxpdmVSZXNpemUpIHtcclxuXHRcdFx0XHRfc2VsZi5fd2F0Y2hSZXNpemVJbnRlcmFjdGlvbigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLmNsb3NlLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0X3NlbGYuY2xvc2UoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoX3NlbGYuc2V0dGluZ3MuY2xvc2VPbk92ZXJsYXlDbGljayA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdF9zZWxmLm9iamVjdHMub3ZlcmxheS5jc3MoJ2N1cnNvcicsICdwb2ludGVyJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdF9zZWxmLmNsb3NlKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChfc2VsZi5zZXR0aW5ncy51c2VLZXlzID09PSB0cnVlKSB7XHJcblx0XHRcdFx0X3NlbGYuX2FkZEtleUV2ZW50cygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoX3NlbGYub2JqZWN0RGF0YS5pc1BhcnRPZlNlcXVlbmNlKSB7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5uYXYuYXR0cihfc2VsZi5fcHJlZml4QXR0cmlidXRlTmFtZSgnaXNwYXJ0b2ZzZXF1ZW5jZScpLCB0cnVlKTtcclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLm5hdi5kYXRhKCdpdGVtcycsIF9zZWxmLl9zZXROYXZpZ2F0aW9uKCkpO1xyXG5cclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLnByZXYuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChfc2VsZi5zZXR0aW5ncy5uYXZpZ2F0ZUVuZGxlc3MgPT09IHRydWUgfHwgIV9zZWxmLml0ZW0uaXNGaXJzdCgpKSB7XHJcblx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdHMucHJldi51bmJpbmQoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdF9zZWxmLmNhY2hlLmFjdGlvbiA9ICdwcmV2JztcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5uYXYuZGF0YSgnaXRlbXMnKS5wcmV2LmNsaWNrKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoX3NlbGYuaXNTbGlkZXNob3dFbmFibGVkKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRfc2VsZi5fc3RvcFRpbWVvdXQoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLm5leHQuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChfc2VsZi5zZXR0aW5ncy5uYXZpZ2F0ZUVuZGxlc3MgPT09IHRydWUgfHwgIV9zZWxmLml0ZW0uaXNMYXN0KCkpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5uZXh0LnVuYmluZCgnY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuY2FjaGUuYWN0aW9uID0gJ25leHQnO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLm5hdi5kYXRhKCdpdGVtcycpLm5leHQuY2xpY2soKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChfc2VsZi5pc1NsaWRlc2hvd0VuYWJsZWQoKSkge1xyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLl9zdG9wVGltZW91dCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmIChfc2VsZi5pc1NsaWRlc2hvd0VuYWJsZWQoKSkge1xyXG5cdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5wbGF5LmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5fc3RhcnRUaW1lb3V0KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdF9zZWxmLm9iamVjdHMucGF1c2UuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdF9zZWxmLl9zdG9wVGltZW91dCgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBFbmFibGUgc3dpcGluZyBpZiBhY3RpdmF0ZWRcclxuXHRcdFx0XHRpZiAoX3NlbGYuc2V0dGluZ3Muc3dpcGUgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdGlmICgkLmlzUGxhaW5PYmplY3QoJC5ldmVudC5zcGVjaWFsLnN3aXBlbGVmdCkpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5jYXNlLm9uKCdzd2lwZWxlZnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdHMubmV4dC5jbGljaygpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChfc2VsZi5pc1NsaWRlc2hvd0VuYWJsZWQoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0X3NlbGYuX3N0b3BUaW1lb3V0KCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICgkLmlzUGxhaW5PYmplY3QoJC5ldmVudC5zcGVjaWFsLnN3aXBlcmlnaHQpKSB7XHJcblx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdHMuY2FzZS5vbignc3dpcGVyaWdodCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5wcmV2LmNsaWNrKCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKF9zZWxmLmlzU2xpZGVzaG93RW5hYmxlZCgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfc2VsZi5fc3RvcFRpbWVvdXQoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFkZHMgdGhlIGtleSBldmVudHNcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X2FkZEtleUV2ZW50czogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKGRvY3VtZW50KS5iaW5kKCdrZXl1cC5saWdodGNhc2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHQvLyBEbyBub3RoaW5nIGlmIGxpZ2h0Y2FzZSBpcyBpbiBwcm9jZXNzXHJcblx0XHRcdFx0aWYgKF9zZWxmLmlzQnVzeSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0XHQvLyBFc2NhcGUga2V5XHJcblx0XHRcdFx0XHRjYXNlIDI3OlxyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmNsb3NlLmNsaWNrKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Ly8gQmFja3dhcmQga2V5XHJcblx0XHRcdFx0XHRjYXNlIDM3OlxyXG5cdFx0XHRcdFx0XHRpZiAoX3NlbGYub2JqZWN0RGF0YS5pc1BhcnRPZlNlcXVlbmNlKSB7XHJcblx0XHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5wcmV2LmNsaWNrKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHQvLyBGb3J3YXJkIGtleVxyXG5cdFx0XHRcdFx0Y2FzZSAzOTpcclxuXHRcdFx0XHRcdFx0aWYgKF9zZWxmLm9iamVjdERhdGEuaXNQYXJ0T2ZTZXF1ZW5jZSkge1xyXG5cdFx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdHMubmV4dC5jbGljaygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3RhcnRzIHRoZSBzbGlkZXNob3cgdGltZW91dFxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRfc3RhcnRUaW1lb3V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9zZWxmLmlzU2xpZGVzaG93U3RhcnRlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLnBsYXkuaGlkZSgpO1xyXG5cdFx0XHRfc2VsZi5vYmplY3RzLnBhdXNlLnNob3coKTtcclxuXHJcblx0XHRcdF9zZWxmLmNhY2hlLmFjdGlvbiA9ICduZXh0JztcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5uYXYucmVtb3ZlQ2xhc3MoX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAncGF1c2VkJyk7XHJcblxyXG5cdFx0XHRfc2VsZi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5uYXYuZGF0YSgnaXRlbXMnKS5uZXh0LmNsaWNrKCk7XHJcblx0XHRcdH0sIF9zZWxmLnNldHRpbmdzLnRpbWVvdXQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFN0b3BzIHRoZSBzbGlkZXNob3cgdGltZW91dFxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRfc3RvcFRpbWVvdXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5wbGF5LnNob3coKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5wYXVzZS5oaWRlKCk7XHJcblxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLm5hdi5hZGRDbGFzcyhfc2VsZi5zZXR0aW5ncy5jbGFzc1ByZWZpeCArICdwYXVzZWQnKTtcclxuXHJcblx0XHRcdGNsZWFyVGltZW91dChfc2VsZi50aW1lb3V0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBTZXRzIHRoZSBuYXZpZ2F0b3IgYnV0dG9ucyAocHJldi9uZXh0KVxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHtvYmplY3R9XHRpdGVtc1xyXG5cdFx0ICovXHJcblx0XHRfc2V0TmF2aWdhdGlvbjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgJGxpbmtzID0gJCgoX3NlbGYuY2FjaGUuc2VsZWN0b3IgfHwgX3NlbGYuc2V0dGluZ3MuYXR0cikpLFxyXG5cdFx0XHRcdHNlcXVlbmNlTGVuZ3RoID0gX3NlbGYub2JqZWN0RGF0YS5zZXF1ZW5jZUxlbmd0aCAtIDEsXHJcblx0XHRcdFx0aXRlbXMgPSB7XHJcblx0XHRcdFx0XHRwcmV2OiAkbGlua3MuZXEoX3NlbGYub2JqZWN0RGF0YS5wcmV2SW5kZXgpLFxyXG5cdFx0XHRcdFx0bmV4dDogJGxpbmtzLmVxKF9zZWxmLm9iamVjdERhdGEubmV4dEluZGV4KVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoX3NlbGYub2JqZWN0RGF0YS5jdXJyZW50SW5kZXggPiAwKSB7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5wcmV2LnNob3coKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpdGVtcy5wcmV2SXRlbSA9ICRsaW5rcy5lcShzZXF1ZW5jZUxlbmd0aCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKF9zZWxmLm9iamVjdERhdGEubmV4dEluZGV4IDw9IHNlcXVlbmNlTGVuZ3RoKSB7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5uZXh0LnNob3coKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpdGVtcy5uZXh0ID0gJGxpbmtzLmVxKDApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoX3NlbGYuc2V0dGluZ3MubmF2aWdhdGVFbmRsZXNzID09PSB0cnVlKSB7XHJcblx0XHRcdFx0X3NlbGYub2JqZWN0cy5wcmV2LnNob3coKTtcclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLm5leHQuc2hvdygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gaXRlbXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSXRlbSBpbmZvcm1hdGlvbi9zdGF0dXNcclxuXHRcdCAqXHJcblx0XHQgKi9cclxuXHRcdGl0ZW06IHtcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIFZlcmlmaWVzIGlmIHRoZSBjdXJyZW50IGl0ZW0gaXMgZmlyc3QgaXRlbS5cclxuXHRcdFx0ICpcclxuXHRcdFx0ICogQHJldHVyblx0e2Jvb2xlYW59XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpc0ZpcnN0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIChfc2VsZi5vYmplY3REYXRhLmN1cnJlbnRJbmRleCA9PT0gMCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogVmVyaWZpZXMgaWYgdGhlIGN1cnJlbnQgaXRlbSBpcyBmaXJzdCBpdGVtIG9wZW5lZC5cclxuXHRcdFx0ICpcclxuXHRcdFx0ICogQHJldHVyblx0e2Jvb2xlYW59XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpc0ZpcnN0T3BlbmVkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIF9zZWxmLm9iamVjdERhdGEudGhpcy5pcyhfc2VsZi5jYWNoZS5maXJzdE9wZW5lZCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogVmVyaWZpZXMgaWYgdGhlIGN1cnJlbnQgaXRlbSBpcyBsYXN0IGl0ZW0uXHJcblx0XHRcdCAqXHJcblx0XHRcdCAqIEByZXR1cm5cdHtib29sZWFufVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0aXNMYXN0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cmV0dXJuIChfc2VsZi5vYmplY3REYXRhLmN1cnJlbnRJbmRleCA9PT0gKF9zZWxmLm9iamVjdERhdGEuc2VxdWVuY2VMZW5ndGggLSAxKSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDbG9uZXMgdGhlIG9iamVjdCBmb3IgaW5saW5lIGVsZW1lbnRzXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtXHR7b2JqZWN0fVx0JG9iamVjdFxyXG5cdFx0ICogQHJldHVyblx0e29iamVjdH1cdCRjbG9uZVxyXG5cdFx0ICovXHJcblx0XHRfY2xvbmVPYmplY3Q6IGZ1bmN0aW9uICgkb2JqZWN0KSB7XHJcblx0XHRcdHZhciAkY2xvbmUgPSAkb2JqZWN0LmNsb25lKCksXHJcblx0XHRcdFx0b2JqZWN0SWQgPSAkb2JqZWN0LmF0dHIoJ2lkJyk7XHJcblxyXG5cdFx0XHQvLyBJZiBlbGVtZW50IGlzIGhpZGRlbiwgY2FjaGUgdGhlIG9iamVjdCBhbmQgcmVtb3ZlXHJcblx0XHRcdGlmICgkb2JqZWN0LmlzKCc6aGlkZGVuJykpIHtcclxuXHRcdFx0XHRfc2VsZi5fY2FjaGVPYmplY3REYXRhKCRvYmplY3QpO1xyXG5cdFx0XHRcdCRvYmplY3QuYXR0cignaWQnLCBfc2VsZi5zZXR0aW5ncy5pZFByZWZpeCArICd0ZW1wLScgKyBvYmplY3RJZCkuZW1wdHkoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBQcmV2ZW50IGR1cGxpY2F0ZWQgaWQnc1xyXG5cdFx0XHRcdCRjbG9uZS5yZW1vdmVBdHRyKCdpZCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gJGNsb25lLnNob3coKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBWZXJpZmllcyBpZiBpdCBpcyBhIG1vYmlsZSBkZXZpY2VcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7Ym9vbGVhbn1cclxuXHRcdCAqL1xyXG5cdFx0aXNNb2JpbGVEZXZpY2U6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGRldmljZUFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHRcdGFnZW50SWQgPSBkZXZpY2VBZ2VudC5tYXRjaChfc2VsZi5zZXR0aW5ncy5tb2JpbGVNYXRjaEV4cHJlc3Npb24pO1xyXG5cclxuXHRcdFx0cmV0dXJuIGFnZW50SWQgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVmVyaWZpZXMgaWYgY3NzIHRyYW5zaXRpb25zIGFyZSBzdXBwb3J0ZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7c3RyaW5nfGJvb2xlYW59XHRUaGUgdHJhbnNpdGlvbiBwcmVmaXggaWYgc3VwcG9ydGVkLCBlbHNlIGZhbHNlLlxyXG5cdFx0ICovXHJcblx0XHRpc1RyYW5zaXRpb25TdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGJvZHkgPSBfc2VsZi5vYmplY3RzLmJvZHkuZ2V0KDApLFxyXG5cdFx0XHRcdGlzVHJhbnNpdGlvblN1cHBvcnRlZCA9IGZhbHNlLFxyXG5cdFx0XHRcdHRyYW5zaXRpb25NYXBwaW5nID0ge1xyXG5cdFx0XHRcdFx0J3RyYW5zaXRpb24nOiAnJyxcclxuXHRcdFx0XHRcdCdXZWJraXRUcmFuc2l0aW9uJzogJy13ZWJraXQtJyxcclxuXHRcdFx0XHRcdCdNb3pUcmFuc2l0aW9uJzogJy1tb3otJyxcclxuXHRcdFx0XHRcdCdPVHJhbnNpdGlvbic6ICctby0nLFxyXG5cdFx0XHRcdFx0J01zVHJhbnNpdGlvbic6ICctbXMtJ1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gdHJhbnNpdGlvbk1hcHBpbmcpIHtcclxuXHRcdFx0XHRpZiAodHJhbnNpdGlvbk1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgaW4gYm9keS5zdHlsZSkge1xyXG5cdFx0XHRcdFx0X3NlbGYuc3VwcG9ydC50cmFuc2l0aW9uID0gdHJhbnNpdGlvbk1hcHBpbmdba2V5XTtcclxuXHRcdFx0XHRcdGlzVHJhbnNpdGlvblN1cHBvcnRlZCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gaXNUcmFuc2l0aW9uU3VwcG9ydGVkO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRyYW5zaXRpb24gdHlwZXNcclxuXHRcdCAqXHJcblx0XHQgKi9cclxuXHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIFJldHVybnMgdGhlIGNvcnJlY3QgdHJhbnNpdGlvbiB0eXBlIGFjY29yZGluZyB0byB0aGUgc3RhdHVzIG9mIGludGVyYWN0aW9uLlxyXG5cdFx0XHQgKlxyXG5cdFx0XHQgKiBAcmV0dXJuXHR7c3RyaW5nfVx0VHJhbnNpdGlvbiB0eXBlXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpbjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGlmIChfc2VsZi5zZXR0aW5ncy50cmFuc2l0aW9uT3BlbiAmJiAhX3NlbGYuY2FjaGUuZmlyc3RPcGVuZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBfc2VsZi5zZXR0aW5ncy50cmFuc2l0aW9uT3BlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIF9zZWxmLnNldHRpbmdzLnRyYW5zaXRpb25JbjtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBGYWRlcyBpbi9vdXQgdGhlIG9iamVjdFxyXG5cdFx0XHQgKlxyXG5cdFx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHQkb2JqZWN0XHJcblx0XHRcdCAqIEBwYXJhbVx0e3N0cmluZ31cdHR5cGVcclxuXHRcdFx0ICogQHBhcmFtXHR7bnVtYmVyfVx0c3BlZWRcclxuXHRcdFx0ICogQHBhcmFtXHR7bnVtYmVyfVx0b3BhY2l0eVxyXG5cdFx0XHQgKiBAcGFyYW1cdHtmdW5jdGlvbn1cdGNhbGxiYWNrXHJcblx0XHRcdCAqIEByZXR1cm5cdHt2b2lkfVx0XHRBbmltYXRlcyBhbiBvYmplY3RcclxuXHRcdFx0ICovXHJcblx0XHRcdGZhZGU6IGZ1bmN0aW9uICgkb2JqZWN0LCB0eXBlLCBzcGVlZCwgb3BhY2l0eSwgY2FsbGJhY2spIHtcclxuXHRcdFx0XHR2YXIgaXNJblRyYW5zaXRpb24gPSB0eXBlID09PSAnaW4nLFxyXG5cdFx0XHRcdFx0c3RhcnRUcmFuc2l0aW9uID0ge30sXHJcblx0XHRcdFx0XHRzdGFydE9wYWNpdHkgPSAkb2JqZWN0LmNzcygnb3BhY2l0eScpLFxyXG5cdFx0XHRcdFx0ZW5kVHJhbnNpdGlvbiA9IHt9LFxyXG5cdFx0XHRcdFx0ZW5kT3BhY2l0eSA9IG9wYWNpdHkgPyBvcGFjaXR5OiBpc0luVHJhbnNpdGlvbiA/IDEgOiAwO1xyXG5cclxuXHRcdFx0XHRpZiAoIV9zZWxmLmlzT3BlbiAmJiBpc0luVHJhbnNpdGlvbikgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRzdGFydFRyYW5zaXRpb25bJ29wYWNpdHknXSA9IHN0YXJ0T3BhY2l0eTtcclxuXHRcdFx0XHRlbmRUcmFuc2l0aW9uWydvcGFjaXR5J10gPSBlbmRPcGFjaXR5O1xyXG5cclxuXHRcdFx0XHQkb2JqZWN0LmNzcyhfc2VsZi5zdXBwb3J0LnRyYW5zaXRpb24gKyAndHJhbnNpdGlvbicsICdub25lJyk7XHJcblx0XHRcdFx0JG9iamVjdC5jc3Moc3RhcnRUcmFuc2l0aW9uKS5zaG93KCk7XHJcblxyXG5cdFx0XHRcdC8vIENzcyB0cmFuc2l0aW9uXHJcblx0XHRcdFx0aWYgKF9zZWxmLnN1cHBvcnQudHJhbnNpdGlvbnMpIHtcclxuXHRcdFx0XHRcdGVuZFRyYW5zaXRpb25bX3NlbGYuc3VwcG9ydC50cmFuc2l0aW9uICsgJ3RyYW5zaXRpb24nXSA9IHNwZWVkICsgJ21zIGVhc2UnO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHQkb2JqZWN0LmNzcyhlbmRUcmFuc2l0aW9uKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdCRvYmplY3QuY3NzKF9zZWxmLnN1cHBvcnQudHJhbnNpdGlvbiArICd0cmFuc2l0aW9uJywgJycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2sgJiYgKF9zZWxmLmlzT3BlbiB8fCAhaXNJblRyYW5zaXRpb24pKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSwgc3BlZWQpO1xyXG5cdFx0XHRcdFx0fSwgMTUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBqcyB0cmFuc2l0aW9uXHJcblx0XHRcdFx0XHQkb2JqZWN0LnN0b3AoKTtcclxuXHRcdFx0XHRcdCRvYmplY3QuYW5pbWF0ZShlbmRUcmFuc2l0aW9uLCBzcGVlZCwgY2FsbGJhY2spO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBTY3JvbGxzIGluL291dCB0aGUgb2JqZWN0XHJcblx0XHRcdCAqXHJcblx0XHRcdCAqIEBwYXJhbVx0e29iamVjdH1cdCRvYmplY3RcclxuXHRcdFx0ICogQHBhcmFtXHR7c3RyaW5nfVx0dHlwZVxyXG5cdFx0XHQgKiBAcGFyYW1cdHtudW1iZXJ9XHRzcGVlZFxyXG5cdFx0XHQgKiBAcGFyYW1cdHtmdW5jdGlvbn1cdGNhbGxiYWNrXHJcblx0XHRcdCAqIEByZXR1cm5cdHt2b2lkfVx0XHRBbmltYXRlcyBhbiBvYmplY3RcclxuXHRcdFx0ICovXHJcblx0XHRcdHNjcm9sbDogZnVuY3Rpb24gKCRvYmplY3QsIHR5cGUsIHNwZWVkLCBjYWxsYmFjaykge1xyXG5cdFx0XHRcdHZhciBpc0luVHJhbnNpdGlvbiA9IHR5cGUgPT09ICdpbicsXHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uID0gaXNJblRyYW5zaXRpb24gPyBfc2VsZi5zZXR0aW5ncy50cmFuc2l0aW9uSW4gOiBfc2VsZi5zZXR0aW5ncy50cmFuc2l0aW9uT3V0LFxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uID0gJ2xlZnQnLFxyXG5cdFx0XHRcdFx0c3RhcnRUcmFuc2l0aW9uID0ge30sXHJcblx0XHRcdFx0XHRzdGFydE9wYWNpdHkgPSBpc0luVHJhbnNpdGlvbiA/IDAgOiAxLFxyXG5cdFx0XHRcdFx0c3RhcnRPZmZzZXQgPSBpc0luVHJhbnNpdGlvbiA/ICctNTAlJyA6ICc1MCUnLFxyXG5cdFx0XHRcdFx0ZW5kVHJhbnNpdGlvbiA9IHt9LFxyXG5cdFx0XHRcdFx0ZW5kT3BhY2l0eSA9IGlzSW5UcmFuc2l0aW9uID8gMSA6IDAsXHJcblx0XHRcdFx0XHRlbmRPZmZzZXQgPSBpc0luVHJhbnNpdGlvbiA/ICc1MCUnIDogJy01MCUnO1xyXG5cclxuXHRcdFx0XHRpZiAoIV9zZWxmLmlzT3BlbiAmJiBpc0luVHJhbnNpdGlvbikgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKHRyYW5zaXRpb24pIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3Njcm9sbFRvcCc6XHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbiA9ICd0b3AnO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3Njcm9sbFJpZ2h0JzpcclxuXHRcdFx0XHRcdFx0c3RhcnRPZmZzZXQgPSBpc0luVHJhbnNpdGlvbiA/ICcxNTAlJyA6ICc1MCUnO1xyXG5cdFx0XHRcdFx0XHRlbmRPZmZzZXQgPSBpc0luVHJhbnNpdGlvbiA/ICc1MCUnIDogJzE1MCUnO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3Njcm9sbEJvdHRvbSc6XHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbiA9ICd0b3AnO1xyXG5cdFx0XHRcdFx0XHRzdGFydE9mZnNldCA9IGlzSW5UcmFuc2l0aW9uID8gJzE1MCUnIDogJzUwJSc7XHJcblx0XHRcdFx0XHRcdGVuZE9mZnNldCA9IGlzSW5UcmFuc2l0aW9uID8gJzUwJScgOiAnMTUwJSc7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc2Nyb2xsSG9yaXpvbnRhbCc6XHJcblx0XHRcdFx0XHRcdHN0YXJ0T2Zmc2V0ID0gaXNJblRyYW5zaXRpb24gPyAnMTUwJScgOiAnNTAlJztcclxuXHRcdFx0XHRcdFx0ZW5kT2Zmc2V0ID0gaXNJblRyYW5zaXRpb24gPyAnNTAlJyA6ICctNTAlJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdzY3JvbGxWZXJ0aWNhbCc6XHJcblx0XHRcdFx0XHRcdGRpcmVjdGlvbiA9ICd0b3AnO1xyXG5cdFx0XHRcdFx0XHRzdGFydE9mZnNldCA9IGlzSW5UcmFuc2l0aW9uID8gJy01MCUnIDogJzUwJSc7XHJcblx0XHRcdFx0XHRcdGVuZE9mZnNldCA9IGlzSW5UcmFuc2l0aW9uID8gJzUwJScgOiAnMTUwJSc7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKF9zZWxmLmNhY2hlLmFjdGlvbiA9PT0gJ3ByZXYnKSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKHRyYW5zaXRpb24pIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnc2Nyb2xsSG9yaXpvbnRhbCc6XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRPZmZzZXQgPSBpc0luVHJhbnNpdGlvbiA/ICctNTAlJyA6ICc1MCUnO1xyXG5cdFx0XHRcdFx0XHRcdGVuZE9mZnNldCA9IGlzSW5UcmFuc2l0aW9uID8gJzUwJScgOiAnMTUwJSc7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3Njcm9sbFZlcnRpY2FsJzpcclxuXHRcdFx0XHRcdFx0XHRzdGFydE9mZnNldCA9IGlzSW5UcmFuc2l0aW9uID8gJzE1MCUnIDogJzUwJSc7XHJcblx0XHRcdFx0XHRcdFx0ZW5kT2Zmc2V0ID0gaXNJblRyYW5zaXRpb24gPyAnNTAlJyA6ICctNTAlJztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHN0YXJ0VHJhbnNpdGlvblsnb3BhY2l0eSddID0gc3RhcnRPcGFjaXR5O1xyXG5cdFx0XHRcdHN0YXJ0VHJhbnNpdGlvbltkaXJlY3Rpb25dID0gc3RhcnRPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdGVuZFRyYW5zaXRpb25bJ29wYWNpdHknXSA9IGVuZE9wYWNpdHk7XHJcblx0XHRcdFx0ZW5kVHJhbnNpdGlvbltkaXJlY3Rpb25dID0gZW5kT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHQkb2JqZWN0LmNzcyhfc2VsZi5zdXBwb3J0LnRyYW5zaXRpb24gKyAndHJhbnNpdGlvbicsICdub25lJyk7XHJcblx0XHRcdFx0JG9iamVjdC5jc3Moc3RhcnRUcmFuc2l0aW9uKS5zaG93KCk7XHJcblxyXG5cdFx0XHRcdC8vIENzcyB0cmFuc2l0aW9uXHJcblx0XHRcdFx0aWYgKF9zZWxmLnN1cHBvcnQudHJhbnNpdGlvbnMpIHtcclxuXHRcdFx0XHRcdGVuZFRyYW5zaXRpb25bX3NlbGYuc3VwcG9ydC50cmFuc2l0aW9uICsgJ3RyYW5zaXRpb24nXSA9IHNwZWVkICsgJ21zIGVhc2UnO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHQkb2JqZWN0LmNzcyhlbmRUcmFuc2l0aW9uKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdCRvYmplY3QuY3NzKF9zZWxmLnN1cHBvcnQudHJhbnNpdGlvbiArICd0cmFuc2l0aW9uJywgJycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2sgJiYgKF9zZWxmLmlzT3BlbiB8fCAhaXNJblRyYW5zaXRpb24pKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSwgc3BlZWQpO1xyXG5cdFx0XHRcdFx0fSwgMTUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBqcyB0cmFuc2l0aW9uXHJcblx0XHRcdFx0XHQkb2JqZWN0LnN0b3AoKTtcclxuXHRcdFx0XHRcdCRvYmplY3QuYW5pbWF0ZShlbmRUcmFuc2l0aW9uLCBzcGVlZCwgY2FsbGJhY2spO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBab29tcyBpbi9vdXQgdGhlIG9iamVjdFxyXG5cdFx0XHQgKlxyXG5cdFx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHQkb2JqZWN0XHJcblx0XHRcdCAqIEBwYXJhbVx0e3N0cmluZ31cdHR5cGVcclxuXHRcdFx0ICogQHBhcmFtXHR7bnVtYmVyfVx0c3BlZWRcclxuXHRcdFx0ICogQHBhcmFtXHR7ZnVuY3Rpb259XHRjYWxsYmFja1xyXG5cdFx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cdFx0QW5pbWF0ZXMgYW4gb2JqZWN0XHJcblx0XHRcdCAqL1xyXG5cdFx0XHR6b29tOiBmdW5jdGlvbiAoJG9iamVjdCwgdHlwZSwgc3BlZWQsIGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0dmFyIGlzSW5UcmFuc2l0aW9uID0gdHlwZSA9PT0gJ2luJyxcclxuXHRcdFx0XHRcdHN0YXJ0VHJhbnNpdGlvbiA9IHt9LFxyXG5cdFx0XHRcdFx0c3RhcnRPcGFjaXR5ID0gJG9iamVjdC5jc3MoJ29wYWNpdHknKSxcclxuXHRcdFx0XHRcdHN0YXJ0U2NhbGUgPSBpc0luVHJhbnNpdGlvbiA/ICdzY2FsZSgwLjc1KScgOiAnc2NhbGUoMSknLFxyXG5cdFx0XHRcdFx0ZW5kVHJhbnNpdGlvbiA9IHt9LFxyXG5cdFx0XHRcdFx0ZW5kT3BhY2l0eSA9IGlzSW5UcmFuc2l0aW9uID8gMSA6IDAsXHJcblx0XHRcdFx0XHRlbmRTY2FsZSA9IGlzSW5UcmFuc2l0aW9uID8gJ3NjYWxlKDEpJyA6ICdzY2FsZSgwLjc1KSc7XHJcblxyXG5cdFx0XHRcdGlmICghX3NlbGYuaXNPcGVuICYmIGlzSW5UcmFuc2l0aW9uKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdHN0YXJ0VHJhbnNpdGlvblsnb3BhY2l0eSddID0gc3RhcnRPcGFjaXR5O1xyXG5cdFx0XHRcdHN0YXJ0VHJhbnNpdGlvbltfc2VsZi5zdXBwb3J0LnRyYW5zaXRpb24gKyAndHJhbnNmb3JtJ10gPSBzdGFydFNjYWxlO1xyXG5cclxuXHRcdFx0XHRlbmRUcmFuc2l0aW9uWydvcGFjaXR5J10gPSBlbmRPcGFjaXR5O1xyXG5cclxuXHRcdFx0XHQkb2JqZWN0LmNzcyhfc2VsZi5zdXBwb3J0LnRyYW5zaXRpb24gKyAndHJhbnNpdGlvbicsICdub25lJyk7XHJcblx0XHRcdFx0JG9iamVjdC5jc3Moc3RhcnRUcmFuc2l0aW9uKS5zaG93KCk7XHJcblxyXG5cdFx0XHRcdC8vIENzcyB0cmFuc2l0aW9uXHJcblx0XHRcdFx0aWYgKF9zZWxmLnN1cHBvcnQudHJhbnNpdGlvbnMpIHtcclxuXHRcdFx0XHRcdGVuZFRyYW5zaXRpb25bX3NlbGYuc3VwcG9ydC50cmFuc2l0aW9uICsgJ3RyYW5zZm9ybSddID0gZW5kU2NhbGU7XHJcblx0XHRcdFx0XHRlbmRUcmFuc2l0aW9uW19zZWxmLnN1cHBvcnQudHJhbnNpdGlvbiArICd0cmFuc2l0aW9uJ10gPSBzcGVlZCArICdtcyBlYXNlJztcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0JG9iamVjdC5jc3MoZW5kVHJhbnNpdGlvbik7XHJcblxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHQkb2JqZWN0LmNzcyhfc2VsZi5zdXBwb3J0LnRyYW5zaXRpb24gKyAndHJhbnNmb3JtJywgJycpO1xyXG5cdFx0XHRcdFx0XHRcdCRvYmplY3QuY3NzKF9zZWxmLnN1cHBvcnQudHJhbnNpdGlvbiArICd0cmFuc2l0aW9uJywgJycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2sgJiYgKF9zZWxmLmlzT3BlbiB8fCAhaXNJblRyYW5zaXRpb24pKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSwgc3BlZWQpO1xyXG5cdFx0XHRcdFx0fSwgMTUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBqcyB0cmFuc2l0aW9uXHJcblx0XHRcdFx0XHQkb2JqZWN0LnN0b3AoKTtcclxuXHRcdFx0XHRcdCRvYmplY3QuYW5pbWF0ZShlbmRUcmFuc2l0aW9uLCBzcGVlZCwgY2FsbGJhY2spO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENhbGxzIGFsbCB0aGUgcmVnaXN0ZXJlZCBmdW5jdGlvbnMgb2YgYSBzcGVjaWZpYyBob29rXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtXHR7b2JqZWN0fVx0aG9va3NcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRfY2FsbEhvb2tzOiBmdW5jdGlvbiAoaG9va3MpIHtcclxuXHRcdFx0aWYgKHR5cGVvZihob29rcykgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0JC5lYWNoKGhvb2tzLCBmdW5jdGlvbihpbmRleCwgaG9vaykge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZihob29rKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdFx0XHRob29rLmNhbGwoX3NlbGYub3JpZ2luKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENhY2hlcyB0aGUgb2JqZWN0IGRhdGFcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW1cdHtvYmplY3R9XHQkb2JqZWN0XHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X2NhY2hlT2JqZWN0RGF0YTogZnVuY3Rpb24gKCRvYmplY3QpIHtcclxuXHRcdFx0JC5kYXRhKCRvYmplY3QsICdjYWNoZScsIHtcclxuXHRcdFx0XHRpZDogJG9iamVjdC5hdHRyKCdpZCcpLFxyXG5cdFx0XHRcdGNvbnRlbnQ6ICRvYmplY3QuaHRtbCgpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0X3NlbGYuY2FjaGUub3JpZ2luYWxPYmplY3QgPSAkb2JqZWN0O1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlc3RvcmVzIHRoZSBvYmplY3QgZnJvbSBjYWNoZVxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHZvaWRcclxuXHRcdCAqL1xyXG5cdFx0X3Jlc3RvcmVPYmplY3Q6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyICRvYmplY3QgPSAkKCdbaWRePVwiJyArIF9zZWxmLnNldHRpbmdzLmlkUHJlZml4ICsgJ3RlbXAtXCJdJyk7XHJcblxyXG5cdFx0XHQkb2JqZWN0LmF0dHIoJ2lkJywgJC5kYXRhKF9zZWxmLmNhY2hlLm9yaWdpbmFsT2JqZWN0LCAnY2FjaGUnKS5pZCk7XHJcblx0XHRcdCRvYmplY3QuaHRtbCgkLmRhdGEoX3NlbGYuY2FjaGUub3JpZ2luYWxPYmplY3QsICdjYWNoZScpLmNvbnRlbnQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEV4ZWN1dGVzIGZ1bmN0aW9ucyBmb3IgYSB3aW5kb3cgcmVzaXplLlxyXG5cdFx0ICogSXQgc3RvcHMgYW4gZXZlbnR1YWwgdGltZW91dCBhbmQgcmVjYWxjdWxhdGVzIGRpbWVuc2lvbnMuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtXHR7b2JqZWN0fVx0ZGltZW5zaW9uc1xyXG5cdFx0ICogQHJldHVyblx0e3ZvaWR9XHJcblx0XHQgKi9cclxuXHRcdHJlc2l6ZTogZnVuY3Rpb24gKGV2ZW50LCBkaW1lbnNpb25zKSB7XHJcblx0XHRcdGlmICghX3NlbGYuaXNPcGVuKSByZXR1cm47XHJcblxyXG5cdFx0XHRpZiAoX3NlbGYuaXNTbGlkZXNob3dFbmFibGVkKCkpIHtcclxuXHRcdFx0XHRfc2VsZi5fc3RvcFRpbWVvdXQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBkaW1lbnNpb25zID09PSAnb2JqZWN0JyAmJiBkaW1lbnNpb25zICE9PSBudWxsKSB7XHJcblx0XHRcdFx0aWYgKGRpbWVuc2lvbnMud2lkdGgpIHtcclxuXHRcdFx0XHRcdF9zZWxmLmNhY2hlLm9iamVjdC5hdHRyKFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5fcHJlZml4QXR0cmlidXRlTmFtZSgnd2lkdGgnKSxcclxuXHRcdFx0XHRcdFx0ZGltZW5zaW9ucy53aWR0aFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGRpbWVuc2lvbnMubWF4V2lkdGgpIHtcclxuXHRcdFx0XHRcdF9zZWxmLmNhY2hlLm9iamVjdC5hdHRyKFxyXG5cdFx0XHRcdFx0XHRfc2VsZi5fcHJlZml4QXR0cmlidXRlTmFtZSgnbWF4LXdpZHRoJyksXHJcblx0XHRcdFx0XHRcdGRpbWVuc2lvbnMubWF4V2lkdGhcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkaW1lbnNpb25zLmhlaWdodCkge1xyXG5cdFx0XHRcdFx0X3NlbGYuY2FjaGUub2JqZWN0LmF0dHIoXHJcblx0XHRcdFx0XHRcdF9zZWxmLl9wcmVmaXhBdHRyaWJ1dGVOYW1lKCdoZWlnaHQnKSxcclxuXHRcdFx0XHRcdFx0ZGltZW5zaW9ucy5oZWlnaHRcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChkaW1lbnNpb25zLm1heEhlaWdodCkge1xyXG5cdFx0XHRcdFx0X3NlbGYuY2FjaGUub2JqZWN0LmF0dHIoXHJcblx0XHRcdFx0XHRcdF9zZWxmLl9wcmVmaXhBdHRyaWJ1dGVOYW1lKCdtYXgtaGVpZ2h0JyksXHJcblx0XHRcdFx0XHRcdGRpbWVuc2lvbnMubWF4SGVpZ2h0XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3NlbGYuZGltZW5zaW9ucyA9IF9zZWxmLmdldFZpZXdwb3J0RGltZW5zaW9ucygpO1xyXG5cdFx0XHRfc2VsZi5fY2FsY3VsYXRlRGltZW5zaW9ucyhfc2VsZi5jYWNoZS5vYmplY3QpO1xyXG5cclxuXHRcdFx0Ly8gQ2FsbCBvblJlc2l6ZSBob29rIGZ1bmN0aW9uc1xyXG5cdFx0XHRfc2VsZi5fY2FsbEhvb2tzKF9zZWxmLnNldHRpbmdzLm9uUmVzaXplKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBXYXRjaGVzIGZvciBhbnkgcmVzaXplIGludGVyYWN0aW9uIGFuZCBjYWNoZXMgdGhlIG5ldyBzaXplcy5cclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X3dhdGNoUmVzaXplSW50ZXJhY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JCh3aW5kb3cpLnJlc2l6ZShfc2VsZi5yZXNpemUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFN0b3Agd2F0Y2hpbmcgYW55IHJlc2l6ZSBpbnRlcmFjdGlvbiByZWxhdGVkIHRvIF9zZWxmLlxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRfdW53YXRjaFJlc2l6ZUludGVyYWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQod2luZG93KS5vZmYoJ3Jlc2l6ZScsIF9zZWxmLnJlc2l6ZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3dpdGNoZXMgdG8gdGhlIGZ1bGxzY3JlZW4gbW9kZVxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRfc3dpdGNoVG9GdWxsU2NyZWVuTW9kZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRfc2VsZi5zZXR0aW5ncy5zaHJpbmtGYWN0b3IgPSAxO1xyXG5cdFx0XHRfc2VsZi5zZXR0aW5ncy5vdmVybGF5T3BhY2l0eSA9IDE7XHJcblxyXG5cdFx0XHQkKCdodG1sJykuYWRkQ2xhc3MoX3NlbGYuc2V0dGluZ3MuY2xhc3NQcmVmaXggKyAnZnVsbFNjcmVlbk1vZGUnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBFbnRlcnMgaW50byB0aGUgbGlnaHRjYXNlIHZpZXdcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X29wZW46IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X3NlbGYuaXNPcGVuID0gdHJ1ZTtcclxuXHJcblx0XHRcdF9zZWxmLnN1cHBvcnQudHJhbnNpdGlvbnMgPSBfc2VsZi5zZXR0aW5ncy5jc3NUcmFuc2l0aW9ucyA/IF9zZWxmLmlzVHJhbnNpdGlvblN1cHBvcnRlZCgpIDogZmFsc2U7XHJcblx0XHRcdF9zZWxmLnN1cHBvcnQubW9iaWxlRGV2aWNlID0gX3NlbGYuaXNNb2JpbGVEZXZpY2UoKTtcclxuXHJcblx0XHRcdGlmIChfc2VsZi5zdXBwb3J0Lm1vYmlsZURldmljZSkge1xyXG5cdFx0XHRcdCQoJ2h0bWwnKS5hZGRDbGFzcyhfc2VsZi5zZXR0aW5ncy5jbGFzc1ByZWZpeCArICdpc01vYmlsZURldmljZScpO1xyXG5cclxuXHRcdFx0XHRpZiAoX3NlbGYuc2V0dGluZ3MuZnVsbFNjcmVlbk1vZGVGb3JNb2JpbGUpIHtcclxuXHRcdFx0XHRcdF9zZWxmLl9zd2l0Y2hUb0Z1bGxTY3JlZW5Nb2RlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIV9zZWxmLnNldHRpbmdzLnRyYW5zaXRpb25Jbikge1xyXG5cdFx0XHRcdF9zZWxmLnNldHRpbmdzLnRyYW5zaXRpb25JbiA9IF9zZWxmLnNldHRpbmdzLnRyYW5zaXRpb247XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFfc2VsZi5zZXR0aW5ncy50cmFuc2l0aW9uT3V0KSB7XHJcblx0XHRcdFx0X3NlbGYuc2V0dGluZ3MudHJhbnNpdGlvbk91dCA9IF9zZWxmLnNldHRpbmdzLnRyYW5zaXRpb247XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXRjaCAoX3NlbGYudHJhbnNpdGlvbi5pbigpKSB7XHJcblx0XHRcdFx0Y2FzZSAnZmFkZSc6XHJcblx0XHRcdFx0Y2FzZSAnZmFkZUlubGluZSc6XHJcblx0XHRcdFx0Y2FzZSAnZWxhc3RpYyc6XHJcblx0XHRcdFx0Y2FzZSAnc2Nyb2xsVG9wJzpcclxuXHRcdFx0XHRjYXNlICdzY3JvbGxSaWdodCc6XHJcblx0XHRcdFx0Y2FzZSAnc2Nyb2xsQm90dG9tJzpcclxuXHRcdFx0XHRjYXNlICdzY3JvbGxMZWZ0JzpcclxuXHRcdFx0XHRjYXNlICdzY3JvbGxWZXJ0aWNhbCc6XHJcblx0XHRcdFx0Y2FzZSAnc2Nyb2xsSG9yaXpvbnRhbCc6XHJcblx0XHRcdFx0XHRpZiAoX3NlbGYub2JqZWN0cy5jYXNlLmlzKCc6aGlkZGVuJykpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5jbG9zZS5jc3MoJ29wYWNpdHknLCAwKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYub2JqZWN0cy5vdmVybGF5LmNzcygnb3BhY2l0eScsIDApO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5vYmplY3RzLmNhc2UuY3NzKCdvcGFjaXR5JywgMCk7XHJcblx0XHRcdFx0XHRcdF9zZWxmLm9iamVjdHMuY29udGVudElubmVyLmNzcygnb3BhY2l0eScsIDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5mYWRlKF9zZWxmLm9iamVjdHMub3ZlcmxheSwgJ2luJywgX3NlbGYuc2V0dGluZ3Muc3BlZWRJbiwgX3NlbGYuc2V0dGluZ3Mub3ZlcmxheU9wYWNpdHksIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5mYWRlKF9zZWxmLm9iamVjdHMuY2xvc2UsICdpbicsIF9zZWxmLnNldHRpbmdzLnNwZWVkSW4pO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5faGFuZGxlRXZlbnRzKCk7XHJcblx0XHRcdFx0XHRcdF9zZWxmLl9wcm9jZXNzQ29udGVudCgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5mYWRlKF9zZWxmLm9iamVjdHMub3ZlcmxheSwgJ2luJywgMCwgX3NlbGYuc2V0dGluZ3Mub3ZlcmxheU9wYWNpdHksIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYudHJhbnNpdGlvbi5mYWRlKF9zZWxmLm9iamVjdHMuY2xvc2UsICdpbicsIDApO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5faGFuZGxlRXZlbnRzKCk7XHJcblx0XHRcdFx0XHRcdF9zZWxmLl9wcm9jZXNzQ29udGVudCgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3NlbGYub2JqZWN0cy5kb2N1bWVudC5hZGRDbGFzcyhfc2VsZi5zZXR0aW5ncy5jbGFzc1ByZWZpeCArICdvcGVuJyk7XHJcblx0XHRcdF9zZWxmLm9iamVjdHMuY2FzZS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNob3dzIHRoZSBsaWdodGNhc2UgYnkgc3RhcnRpbmcgdGhlIHRyYW5zaXRpb25cclxuXHRcdCAqL1xyXG5cdFx0c2hvdzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQvLyBDYWxsIG9uQ2FsY3VsYXRlRGltZW5zaW9ucyBob29rIGZ1bmN0aW9uc1xyXG5cdFx0XHRfc2VsZi5fY2FsbEhvb2tzKF9zZWxmLnNldHRpbmdzLm9uQmVmb3JlQ2FsY3VsYXRlRGltZW5zaW9ucyk7XHJcblxyXG5cdFx0XHRfc2VsZi5fY2FsY3VsYXRlRGltZW5zaW9ucyhfc2VsZi5jYWNoZS5vYmplY3QpO1xyXG5cclxuXHRcdFx0Ly8gQ2FsbCBvbkFmdGVyQ2FsY3VsYXRlRGltZW5zaW9ucyBob29rIGZ1bmN0aW9uc1xyXG5cdFx0XHRfc2VsZi5fY2FsbEhvb2tzKF9zZWxmLnNldHRpbmdzLm9uQWZ0ZXJDYWxjdWxhdGVEaW1lbnNpb25zKTtcclxuXHJcblx0XHRcdF9zZWxmLl9zdGFydEluVHJhbnNpdGlvbigpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEVzY2FwZXMgZnJvbSB0aGUgbGlnaHRjYXNlIHZpZXdcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0X3NlbGYuaXNPcGVuID0gZmFsc2U7XHJcblxyXG5cdFx0XHRpZiAoX3NlbGYuaXNTbGlkZXNob3dFbmFibGVkKCkpIHtcclxuXHRcdFx0XHRfc2VsZi5fc3RvcFRpbWVvdXQoKTtcclxuXHRcdFx0XHRfc2VsZi5pc1NsaWRlc2hvd1N0YXJ0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRfc2VsZi5vYmplY3RzLm5hdi5yZW1vdmVDbGFzcyhfc2VsZi5zZXR0aW5ncy5jbGFzc1ByZWZpeCArICdwYXVzZWQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X3NlbGYub2JqZWN0cy5sb2FkaW5nLmhpZGUoKTtcclxuXHJcblx0XHRcdF9zZWxmLl91bmJpbmRFdmVudHMoKTtcclxuXHJcblx0XHRcdF9zZWxmLl91bndhdGNoUmVzaXplSW50ZXJhY3Rpb24oKTtcclxuXHJcblx0XHRcdCQoJ2h0bWwnKS5yZW1vdmVDbGFzcyhfc2VsZi5zZXR0aW5ncy5jbGFzc1ByZWZpeCArICdvcGVuJyk7XHJcblx0XHRcdF9zZWxmLm9iamVjdHMuY2FzZS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLm5hdi5jaGlsZHJlbigpLmhpZGUoKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5jbG9zZS5oaWRlKCk7XHJcblxyXG5cdFx0XHQvLyBDYWxsIG9uQ2xvc2UgaG9vayBmdW5jdGlvbnNcclxuXHRcdFx0X3NlbGYuX2NhbGxIb29rcyhfc2VsZi5zZXR0aW5ncy5vbkNsb3NlKTtcclxuXHJcblx0XHRcdC8vIEZhZGUgb3V0IHRoZSBpbmZvIGF0IGZpcnN0XHJcblx0XHRcdF9zZWxmLnRyYW5zaXRpb24uZmFkZShfc2VsZi5vYmplY3RzLmluZm8sICdvdXQnLCAwKTtcclxuXHJcblx0XHRcdHN3aXRjaCAoX3NlbGYuc2V0dGluZ3MudHJhbnNpdGlvbkNsb3NlIHx8IF9zZWxmLnNldHRpbmdzLnRyYW5zaXRpb25PdXQpIHtcclxuXHRcdFx0XHRjYXNlICdmYWRlJzpcclxuXHRcdFx0XHRjYXNlICdmYWRlSW5saW5lJzpcclxuXHRcdFx0XHRjYXNlICdzY3JvbGxUb3AnOlxyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbFJpZ2h0JzpcclxuXHRcdFx0XHRjYXNlICdzY3JvbGxCb3R0b20nOlxyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbExlZnQnOlxyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbEhvcml6b250YWwnOlxyXG5cdFx0XHRcdGNhc2UgJ3Njcm9sbFZlcnRpY2FsJzpcclxuXHRcdFx0XHRcdF9zZWxmLnRyYW5zaXRpb24uZmFkZShfc2VsZi5vYmplY3RzLmNhc2UsICdvdXQnLCBfc2VsZi5zZXR0aW5ncy5zcGVlZE91dCwgMCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50cmFuc2l0aW9uLmZhZGUoX3NlbGYub2JqZWN0cy5vdmVybGF5LCAnb3V0JywgX3NlbGYuc2V0dGluZ3Muc3BlZWRPdXQsIDAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRfc2VsZi5jbGVhbnVwKCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdlbGFzdGljJzpcclxuXHRcdFx0XHRcdF9zZWxmLnRyYW5zaXRpb24uem9vbShfc2VsZi5vYmplY3RzLmNhc2UsICdvdXQnLCBfc2VsZi5zZXR0aW5ncy5zcGVlZE91dCwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50cmFuc2l0aW9uLmZhZGUoX3NlbGYub2JqZWN0cy5vdmVybGF5LCAnb3V0JywgX3NlbGYuc2V0dGluZ3Muc3BlZWRPdXQsIDAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0XHRfc2VsZi5jbGVhbnVwKCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0X3NlbGYuY2xlYW51cCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBVbmJpbmRzIGFsbCBnaXZlbiBldmVudHNcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X3VuYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQvLyBVbmJpbmQgb3ZlcmxheSBldmVudFxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLm92ZXJsYXkudW5iaW5kKCdjbGljaycpO1xyXG5cclxuXHRcdFx0Ly8gVW5iaW5kIGtleSBldmVudHNcclxuXHRcdFx0JChkb2N1bWVudCkudW5iaW5kKCdrZXl1cC5saWdodGNhc2UnKTtcclxuXHJcblx0XHRcdC8vIFVuYmluZCBzd2lwZSBldmVudHNcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5jYXNlLnVuYmluZCgnc3dpcGVsZWZ0JykudW5iaW5kKCdzd2lwZXJpZ2h0Jyk7XHJcblxyXG5cdFx0XHQvLyBVbmJpbmQgbmF2aWdhdG9yIGV2ZW50c1xyXG5cdFx0XHRfc2VsZi5vYmplY3RzLnByZXYudW5iaW5kKCdjbGljaycpO1xyXG5cdFx0XHRfc2VsZi5vYmplY3RzLm5leHQudW5iaW5kKCdjbGljaycpO1xyXG5cdFx0XHRfc2VsZi5vYmplY3RzLnBsYXkudW5iaW5kKCdjbGljaycpO1xyXG5cdFx0XHRfc2VsZi5vYmplY3RzLnBhdXNlLnVuYmluZCgnY2xpY2snKTtcclxuXHJcblx0XHRcdC8vIFVuYmluZCBjbG9zZSBldmVudFxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLmNsb3NlLnVuYmluZCgnY2xpY2snKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDbGVhbnMgdXAgdGhlIGRpbWVuc2lvbnNcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7dm9pZH1cclxuXHRcdCAqL1xyXG5cdFx0X2NsZWFudXBEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBvcGFjaXR5ID0gX3NlbGYub2JqZWN0cy5jb250ZW50SW5uZXIuY3NzKCdvcGFjaXR5Jyk7XHJcblxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLmNhc2UuY3NzKHtcclxuXHRcdFx0XHQnd2lkdGgnOiAnJyxcclxuXHRcdFx0XHQnaGVpZ2h0JzogJycsXHJcblx0XHRcdFx0J3RvcCc6ICcnLFxyXG5cdFx0XHRcdCdsZWZ0JzogJycsXHJcblx0XHRcdFx0J21hcmdpbi10b3AnOiAnJyxcclxuXHRcdFx0XHQnbWFyZ2luLWxlZnQnOiAnJ1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdF9zZWxmLm9iamVjdHMuY29udGVudElubmVyLnJlbW92ZUF0dHIoJ3N0eWxlJykuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XHJcblx0XHRcdF9zZWxmLm9iamVjdHMuY29udGVudElubmVyLmNoaWxkcmVuKCkucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDbGVhbnVwIGFmdGVyIGFib3J0aW5nIGxpZ2h0Y2FzZVxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm5cdHt2b2lkfVxyXG5cdFx0ICovXHJcblx0XHRjbGVhbnVwOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9zZWxmLl9jbGVhbnVwRGltZW5zaW9ucygpO1xyXG5cclxuXHRcdFx0X3NlbGYub2JqZWN0cy5sb2FkaW5nLmhpZGUoKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5vdmVybGF5LmhpZGUoKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5jYXNlLmhpZGUoKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5wcmV2LmhpZGUoKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5uZXh0LmhpZGUoKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5wbGF5LmhpZGUoKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5wYXVzZS5oaWRlKCk7XHJcblxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLmRvY3VtZW50LnJlbW92ZUF0dHIoX3NlbGYuX3ByZWZpeEF0dHJpYnV0ZU5hbWUoJ3R5cGUnKSk7XHJcblx0XHRcdF9zZWxmLm9iamVjdHMubmF2LnJlbW92ZUF0dHIoX3NlbGYuX3ByZWZpeEF0dHJpYnV0ZU5hbWUoJ2lzcGFydG9mc2VxdWVuY2UnKSk7XHJcblxyXG5cdFx0XHRfc2VsZi5vYmplY3RzLmNvbnRlbnRJbm5lci5lbXB0eSgpLmhpZGUoKTtcclxuXHRcdFx0X3NlbGYub2JqZWN0cy5pbmZvLmNoaWxkcmVuKCkuZW1wdHkoKTtcclxuXHJcblx0XHRcdGlmIChfc2VsZi5jYWNoZS5vcmlnaW5hbE9iamVjdCkge1xyXG5cdFx0XHRcdF9zZWxmLl9yZXN0b3JlT2JqZWN0KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIENhbGwgb25DbGVhbnVwIGhvb2sgZnVuY3Rpb25zXHJcblx0XHRcdF9zZWxmLl9jYWxsSG9va3MoX3NlbGYuc2V0dGluZ3Mub25DbGVhbnVwKTtcclxuXHJcblx0XHRcdC8vIFJlc3RvcmUgY2FjaGVcclxuXHRcdFx0X3NlbGYuY2FjaGUgPSB7fTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBzdXBwb3J0ZWQgbWF0Y2ggbWVkaWEgb3IgdW5kZWZpbmVkIGlmIHRoZSBicm93c2VyXHJcblx0XHQgKiBkb2Vzbid0IHN1cHBvcnQgbWF0Y2ggbWVkaWEuXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e21peGVkfVxyXG5cdFx0ICovXHJcblx0XHRfbWF0Y2hNZWRpYTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEgfHwgd2luZG93Lm1zTWF0Y2hNZWRpYTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm5zIHRoZSBkZXZpY2VQaXhlbFJhdGlvIGlmIHN1cHBvcnRlZC4gRWxzZSwgaXQgc2ltcGx5IHJldHVybnNcclxuXHRcdCAqIDEgYXMgdGhlIGRlZmF1bHQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e251bWJlcn1cclxuXHRcdCAqL1xyXG5cdFx0X2RldmljZVBpeGVsUmF0aW86IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2tzIGlmIG1ldGhvZCBpcyBwdWJsaWNcclxuXHRcdCAqXHJcblx0XHQgKiBAcmV0dXJuXHR7Ym9vbGVhbn1cclxuXHRcdCAqL1xyXG5cdFx0X2lzUHVibGljTWV0aG9kOiBmdW5jdGlvbiAobWV0aG9kKSB7XHJcblx0XHRcdHJldHVybiAodHlwZW9mIF9zZWxmW21ldGhvZF0gPT09ICdmdW5jdGlvbicgJiYgbWV0aG9kLmNoYXJBdCgwKSAhPT0gJ18nKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBFeHBvcnRzIGFsbCBwdWJsaWMgbWV0aG9kcyB0byBiZSBhY2Nlc3NpYmxlLCBjYWxsYWJsZVxyXG5cdFx0ICogZnJvbSBnbG9iYWwgc2NvcGUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVyblx0e3ZvaWR9XHJcblx0XHQgKi9cclxuXHRcdF9leHBvcnQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0d2luZG93LmxpZ2h0Y2FzZSA9IHt9O1xyXG5cclxuXHRcdFx0JC5lYWNoKF9zZWxmLCBmdW5jdGlvbiAocHJvcGVydHkpIHtcclxuXHRcdFx0XHRpZiAoX3NlbGYuX2lzUHVibGljTWV0aG9kKHByb3BlcnR5KSkge1xyXG5cdFx0XHRcdFx0bGlnaHRjYXNlW3Byb3BlcnR5XSA9IF9zZWxmW3Byb3BlcnR5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdF9zZWxmLl9leHBvcnQoKTtcclxuXHJcblx0JC5mbi5saWdodGNhc2UgPSBmdW5jdGlvbiAobWV0aG9kKSB7XHJcblx0XHQvLyBNZXRob2QgY2FsbGluZyBsb2dpYyAob25seSBwdWJsaWMgbWV0aG9kcyBhcmUgYXBwbGllZClcclxuXHRcdGlmIChfc2VsZi5faXNQdWJsaWNNZXRob2QobWV0aG9kKSkge1xyXG5cdFx0XHRyZXR1cm4gX3NlbGZbbWV0aG9kXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcclxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ29iamVjdCcgfHwgIW1ldGhvZCkge1xyXG5cdFx0XHRyZXR1cm4gX3NlbGYuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JC5lcnJvcignTWV0aG9kICcgKyBtZXRob2QgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5saWdodGNhc2UnKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KShqUXVlcnkpO1xyXG4iLCJpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0IFR3ZWVuTWF4IGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIFwidXNlciBzdHJpY3RcIjtcclxuXHJcbiAgLy8gcHJlbG9hZGVyXHJcbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5wcmVsb2FkZXJcIikuZGVsYXkoNTAwKS5hbmltYXRlKHtcclxuICAgICAgXCJvcGFjaXR5XCIgOiBcIjBcIlxyXG4gICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKFwiLnByZWxvYWRlclwiKS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJzZWxlY3RcIikubmljZVNlbGVjdCgpLFxyXG5cclxuLy8gYW9zXHJcbkFPUy5pbml0KCk7XHJcblxyXG5cclxuJCgnLnZpZGVvJykubGlnaHRjYXNlKCk7XHJcblxyXG4kKCcuaW1nLXBvcHVwJykubGlnaHRjYXNlKCk7XHJcblxyXG4vL0NyZWF0ZSBCYWNrZ3JvdW5kIEltYWdlXHJcbihmdW5jdGlvbiBiYWNrZ3JvdW5kKCkge1xyXG4gIGxldCBpbWcgPSAkKCcuYmdfaW1nJyk7XHJcbiAgaW1nLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBiZyA9ICgndXJsKCcgKyAkKHRoaXMpLmRhdGEoJ2JhY2tncm91bmQnKSArICcpJyk7XHJcbiAgICByZXR1cm4gYmc7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpeyBcclxuICAkKFwiLmJhbm5lci1ncm91cC1zaGFwZVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKVxyXG59LCAxMDAwKTtcclxuXHJcbi8vIHNjcm9sbC10by10b3BcclxudmFyIFNjcm9sbFRvcCA9ICQoXCIuc2Nyb2xsVG9Ub3BcIik7XHJcbiQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpIDwgMTAwKSB7XHJcbiAgICAgIFNjcm9sbFRvcC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgICBTY3JvbGxUb3AuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGhlYWRlci1maXhlZFxyXG52YXIgbGFzdFNjcm9sbFRvcCA9ICcnO1xyXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICB2YXIgbWFpbk1lbnVUb3AgPSAkKCcuaGVhZGVyLXNlY3Rpb24nKTtcclxuICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA1MDApIHtcclxuICAgICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgIG1haW5NZW51VG9wLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmYWRlSW5Eb3duIGhlYWRlci1maXhlZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYWluTWVudVRvcC5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluRG93biBoZWFkZXItZml4ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1haW5NZW51VG9wLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmYWRlSW5Eb3duIGhlYWRlci1maXhlZCcpO1xyXG4gICAgfVxyXG4gICAgbGFzdFNjcm9sbFRvcCA9IHN0O1xyXG59KTtcclxuXHJcbi8vIG5hdmJhci1jbGlja1xyXG4kKFwiLm5hdmJhciBsaSBhXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gIHZhciBlbGVtZW50ID0gJCh0aGlzKS5wYXJlbnQoXCJsaVwiKTtcclxuICBpZiAoZWxlbWVudC5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgZWxlbWVudC5jaGlsZHJlbihcInVsXCIpLnNsaWRlVXAoNTAwKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBlbGVtZW50LnNpYmxpbmdzKFwibGlcIikucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIGVsZW1lbnQuYWRkQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgZWxlbWVudC5zaWJsaW5ncyhcImxpXCIpLmZpbmQoXCJ1bFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgICBlbGVtZW50LmNoaWxkcmVuKCd1bCcpLnNsaWRlRG93big1MDApO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgIGlmIChzY3JlZW4ud2lkdGggPiAxMTk5KSB7XHJcbi8vICAgICAkKCcuc3ViLW1lbnUnKS5zaG93KCk7XHJcbi8vICAgfWVsc2V7XHJcbi8vICAgICAkKCcuc3ViLW1lbnUnKS5oaWRlKCk7XHJcbi8vICAgfVxyXG4vLyB9LCB0cnVlKTtcclxuXHJcbi8vIG5hdmJhci1jbGlja1xyXG4kKFwiLm5hdmlnYXRpb24tdGhyZWUgbGkgYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZWxlbWVudCA9ICQodGhpcykucGFyZW50KFwibGlcIik7XHJcbiAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuICAgIGVsZW1lbnQuY2hpbGRyZW4oXCJ1bFwiKS5zbGlkZVVwKDUwMCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsZW1lbnQuc2libGluZ3MoXCJsaVwiKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgZWxlbWVudC5hZGRDbGFzcyhcInNob3dcIik7XHJcbiAgICBlbGVtZW50LnNpYmxpbmdzKFwibGlcIikuZmluZChcInVsXCIpLnNsaWRlVXAoNTAwKTtcclxuICAgIGVsZW1lbnQuY2hpbGRyZW4oJ3VsJykuc2xpZGVEb3duKDUwMCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vT2RvbWV0ZXJcclxuaWYgKCQoXCIuc3RhdGlzdGljcy1pdGVtLC5pY29uLWJveC1pdGVtcywuY291bnRlci1zaW5nbGUtaXRlbXNcIikubGVuZ3RoKSB7XHJcbiAgJChcIi5zdGF0aXN0aWNzLWl0ZW0sLmljb24tYm94LWl0ZW1zLC5jb3VudGVyLXNpbmdsZS1pdGVtc1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuaXNJblZpZXdwb3J0KGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gXCJlbnRlcmVkXCIpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2RvbWV0ZXJcIikubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vZG9tZXRlcicpW2ldO1xyXG4gICAgICAgICAgZWwuaW5uZXJIVE1MID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1vZG9tZXRlci1maW5hbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBjdXN0b20gY3Vyc29yIFxyXG52YXIgY3Vyc29yID0gJChcIi5jdXJzb3JcIiksXHJcbiAgICBmb2xsb3dlciA9ICQoXCIuY3Vyc29yLWZvbGxvd2VyXCIpO1xyXG5cclxudmFyIHBvc1ggPSAwLFxyXG4gICAgcG9zWSA9IDA7XHJcblxyXG52YXIgbW91c2VYID0gMCxcclxuICAgIG1vdXNlWSA9IDA7XHJcblxyXG5Ud2Vlbk1heC50byh7fSwgMC4wMTYsIHtcclxuICByZXBlYXQ6IC0xLFxyXG4gIG9uUmVwZWF0OiBmdW5jdGlvbigpIHtcclxuICAgIHBvc1ggKz0gKG1vdXNlWCAtIHBvc1gpIC8gOTtcclxuICAgIHBvc1kgKz0gKG1vdXNlWSAtIHBvc1kpIC8gOTtcclxuICAgIFxyXG4gICAgVHdlZW5NYXguc2V0KGZvbGxvd2VyLCB7XHJcbiAgICAgICAgY3NzOiB7ICAgIFxyXG4gICAgICAgIGxlZnQ6IHBvc1ggLSAxMixcclxuICAgICAgICB0b3A6IHBvc1kgLSAxMlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBUd2Vlbk1heC5zZXQoY3Vyc29yLCB7XHJcbiAgICAgICAgY3NzOiB7ICAgIFxyXG4gICAgICAgIGxlZnQ6IG1vdXNlWCxcclxuICAgICAgICB0b3A6IG1vdXNlWVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBtb3VzZVggPSBlLmNsaWVudFg7XHJcbiAgICBtb3VzZVkgPSBlLmNsaWVudFk7XHJcbn0pO1xyXG5cclxuJChcImFcIikub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgY3Vyc29yLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgZm9sbG93ZXIuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbn0pO1xyXG4kKFwiYVwiKS5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBjdXJzb3IucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICBmb2xsb3dlci5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxufSk7XHJcblxyXG4kKCdpbnB1dCcpLmF0dHIoJ2F1dG9jb21wbGV0ZScsJ29mZicpO1xyXG5cclxuLy9wbGFuLXRhYi1zd2l0Y2hlclxyXG4kKCcucGxhbi10YWItc3dpdGNoZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICQoJy5wbGFuLWFyZWEnKS50b2dnbGVDbGFzcygnY2hhbmdlLXN1YnMtZHVyYXRpb24nKTtcclxufSk7XHJcblxyXG4vLyBmYXFcclxuJCgnLmZhcS13cmFwcGVyIC5mYXEtdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIHZhciBlbGVtZW50ID0gJCh0aGlzKS5wYXJlbnQoJy5mYXEtaXRlbScpO1xyXG4gIGlmIChlbGVtZW50Lmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIGVsZW1lbnQuZmluZCgnLmZhcS1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgIGVsZW1lbnQuZmluZCgnLmZhcS1jb250ZW50Jykuc2xpZGVVcCgzMDAsIFwic3dpbmdcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgIGVsZW1lbnQuY2hpbGRyZW4oJy5mYXEtY29udGVudCcpLnNsaWRlRG93bigzMDAsIFwic3dpbmdcIik7XHJcbiAgICBlbGVtZW50LnNpYmxpbmdzKCcuZmFxLWl0ZW0nKS5jaGlsZHJlbignLmZhcS1jb250ZW50Jykuc2xpZGVVcCgzMDAsIFwic3dpbmdcIik7XHJcbiAgICBlbGVtZW50LnNpYmxpbmdzKCcuZmFxLWl0ZW0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgZWxlbWVudC5zaWJsaW5ncygnLmZhcS1pdGVtJykuZmluZCgnLmZhcS10aXRsZScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICBlbGVtZW50LnNpYmxpbmdzKCcudGFxLWl0ZW0nKS5maW5kKCcuZmFxLWNvbnRlbnQnKS5zbGlkZVVwKDMwMCwgXCJzd2luZ1wiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gc2xpZGVyXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuYmFubmVyLXNsaWRlcicsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBhdXRvcGxheToge1xyXG4gICAgc3BlZWRzOiAyMDAwLFxyXG4gICAgZGVsYXk6IDQwMDAsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgOTkxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNzY3OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNTc1OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gIH1cclxufSk7XHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmJyYW5kLXNsaWRlcicsIHtcclxuICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBhdXRvcGxheToge1xyXG4gICAgc3BlZWRzOiAyMDAwLFxyXG4gICAgZGVsYXk6IDQwMDAsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgOTkxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICB9LFxyXG4gICAgNzY3OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNTc1OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICB9LFxyXG4gICAgNDIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICB9LFxyXG4gIH1cclxufSk7XHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuYnJhbmQtc2xpZGVyLXR3bycsIHtcclxuICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBhdXRvcGxheToge1xyXG4gICAgc3BlZWRzOiAyMDAwLFxyXG4gICAgZGVsYXk6IDQwMDAsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgOTkxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICB9LFxyXG4gICAgNzY3OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNTc1OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNDIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICB9LFxyXG4gIH1cclxufSk7XHJcbiAgIFxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmZlYXR1cmUtc2xpZGVyJywge1xyXG4gIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICBsb29wOiB0cnVlLFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBzcGVlZHM6IDIwMDAsXHJcbiAgICBkZWxheTogNDAwMCxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA5OTE6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICA1NzU6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuICAgXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcucHJvamVjdC1zbGlkZXInLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogMyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnNsaWRlci1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zbGlkZXItcHJldicsXHJcbiAgfSxcclxuICBhdXRvcGxheToge1xyXG4gICAgc3BlZWRzOiAyMDAwLFxyXG4gICAgZGVsYXk6IDQwMDAsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTMwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgMTE5OToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgOTkxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICA1NzU6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9XHJcbn0pO1xyXG4gICBcclxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LXdpZGdldC1pdGVtLXNsaWRlcicsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc2xpZGVyLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnNsaWRlci1wcmV2JyxcclxuICB9LFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBzcGVlZHM6IDIwMDAsXHJcbiAgICBkZWxheTogNDAwMCxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA5OTE6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgICA1NzU6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuICAgXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc2VydmljZS1zbGlkZXInLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogMyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIHNwZWVkczogMjAwMCxcclxuICAgIGRlbGF5OiA0MDAwLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDk5MToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgfSxcclxuICAgIDc2Nzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgfSxcclxuICAgIDU3NToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgfSxcclxuICB9XHJcbn0pO1xyXG4gICBcclxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zZXJ2aWNlLXNsaWRlci10d28nLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogNSxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIHNwZWVkczogMjAwMCxcclxuICAgIGRlbGF5OiA0MDAwLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDE1OTA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIH0sXHJcbiAgICA5OTE6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICA1NzU6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuICAgXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuY2xpZW50LXNsaWRlcicsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5jbGllbnQtcGFnaW5hdGlvbicsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgJzwvc3Bhbj4nO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zbGlkZXItbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc2xpZGVyLXByZXYnLFxyXG4gIH0sXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIHNwZWVkczogMjAwMCxcclxuICAgIGRlbGF5OiA0MDAwLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDExOTk6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICA5OTE6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgICA1NzU6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuICAgXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuY2xpZW50LXNsaWRlci10d28nLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogMixcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuY2xpZW50LXBhZ2luYXRpb24nLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArICc8L3NwYW4+JztcclxuICAgIH0sXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc2xpZGVyLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnNsaWRlci1wcmV2JyxcclxuICB9LFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBzcGVlZHM6IDIwMDAsXHJcbiAgICBkZWxheTogNDAwMCxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA5OTE6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgICA1NzU6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuICAgXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuY2xpZW50LXNsaWRlci10aHJlZScsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc2xpZGVyLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnNsaWRlci1wcmV2JyxcclxuICB9LFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBzcGVlZHM6IDIwMDAsXHJcbiAgICBkZWxheTogNDAwMCxcclxuICB9LFxyXG4gIHNwZWVkOiAxMDAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA5OTE6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgICA1NzU6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuICAgXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcudGVhbS1zbGlkZXInLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogMyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnNsaWRlci1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zbGlkZXItcHJldicsXHJcbiAgfSxcclxuICBhdXRvcGxheToge1xyXG4gICAgc3BlZWRzOiAyMDAwLFxyXG4gICAgZGVsYXk6IDQwMDAsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgOTkxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNzY3OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNTc1OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICB9LFxyXG4gIH1cclxufSk7XHJcbiAgIFxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmJsb2ctc2xpZGVyJywge1xyXG4gIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBsb29wOiB0cnVlLFxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zbGlkZXItbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc2xpZGVyLXByZXYnLFxyXG4gIH0sXHJcbiAgYXV0b3BsYXk6IHtcclxuICAgIHNwZWVkczogMjAwMCxcclxuICAgIGRlbGF5OiA0MDAwLFxyXG4gIH0sXHJcbiAgc3BlZWQ6IDEwMDAsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDk5MToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgfSxcclxuICAgIDc2Nzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgfSxcclxuICAgIDU3NToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgfSxcclxuICB9XHJcbn0pO1xyXG4gICBcclxuLy8gQ2FzZSBTdHVkeSBTbGlkZXJcclxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5jYXNlLXN0dWR5LXNsaWRlcicsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBvYnNlcnZlcjogdHJ1ZSxcclxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgIHR5cGU6IFwicHJvZ3Jlc3NiYXJcIixcclxuICB9LFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBzcGVlZHM6IDIwMDAsXHJcbiAgICBkZWxheTogNDAwMCxcclxuICB9LFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5uZXh0LXRleHQnLFxyXG4gICAgcHJldkVsOiAnLnByZXYtdGV4dCcsXHJcbiAgfSxcclxuICBzcGVlZDogMTAwMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTMwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgMTE5OToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgOTkxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIDU3NToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH1cclxufSk7XHJcbiAgIFxyXG5cclxuLy8gQmFubmVyIFRocmVlIFNsaWRlclxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmJhbm5lci10aHJlZS1zbGlkZXInLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgZWZmZWN0OiBcImZhZGVcIixcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcubmV4dC10ZXh0JyxcclxuICAgIHByZXZFbDogJy5wcmV2LXRleHQnLFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuY3VzdG9tLXBhZ2luYXRpb24nLFxyXG4gICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcclxuICB9LFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBzcGVlZHM6IDIwMDAsXHJcbiAgICBkZWxheTogNDAwMCxcclxuICB9LFxyXG4gIHNwZWVkOiAxNTAwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMzAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICAxMTk5OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICA5OTE6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIDc2Nzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgfSxcclxuICAgIDU3NToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH1cclxufSk7XHJcbiAgIFxyXG4vLyBtZW51XHJcbiQoJy5tZW51LXRvZ2dsZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICQoJy5oZWFkZXItYm90dG9tLWFyZWEnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG59KTtcclxuXHJcbi8vIEhvbWUgVGhyZWUgTWVudSBPcGVtXHJcbiQoJy5tZW51LXRvZ2dsZXIuaG9tZS10aHJlZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcubWVudS1vcGVuJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxufSk7XHJcbiAgXHJcbiQoJy5jbG9zZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnLm1lbnUtb3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbn0pO1xyXG5cclxuLy8gaW5pdCBJc290b3BlXHJcbi8qdmFyICRncmlkID0gJCgnLmdyaWQnKS5pc290b3BlKHtcclxuICAvLyBvcHRpb25zXHJcbiAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXHJcbiAgLy8gcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG4gICAgbWFzb25yeToge1xyXG4gICAgICBjb2x1bW5XaWR0aDogJy5ncmlkLWl0ZW0nXHJcbiAgICB9XHJcbn0pOyovXHJcbi8qdmFyICRnYWxsZXJ5ID0gJChcIi5ncmlkXCIpLmlzb3RvcGUoe1xyXG5cclxufSk7Ki9cclxuLy8gZmlsdGVyIGl0ZW1zIG9uIGJ1dHRvbiBjbGlja1xyXG4kKCcuZmlsdGVyLWJ0bi1ncm91cCcpLm9uKCAnY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGZpbHRlclZhbHVlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xyXG4gICRncmlkLmlzb3RvcGUoeyBmaWx0ZXI6IGZpbHRlclZhbHVlIH0pO1xyXG59KTtcclxuJCgnLmZpbHRlci1idG4tZ3JvdXAnKS5vbiggJ2NsaWNrJywgJ2J1dHRvbicsIGZ1bmN0aW9uKCkge1xyXG4kKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICBnYWxsZXJ5TWFzb25hcnlUd28oKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnlNYXNvbmFyeVR3bygpe1xyXG4gIC8vIGZpbHRlciBmdW5jdGlvbnNcclxuICB2YXIgJGdyaWQgPSAkKFwiLmdyaWRcIik7XHJcbiAgdmFyIGZpbHRlckZucyA9IHt9O1xyXG5cclxuICAvLyBiaW5kIGZpbHRlciBidXR0b24gY2xpY2tcclxuICAkKCd1bC5maWx0ZXInKS5vbignY2xpY2snLCAnbGknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZmlsdGVyVmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XHJcbiAgICAvLyB1c2UgZmlsdGVyRm4gaWYgbWF0Y2hlcyB2YWx1ZVxyXG4gICAgZmlsdGVyVmFsdWUgPSBmaWx0ZXJGbnNbZmlsdGVyVmFsdWVdIHx8IGZpbHRlclZhbHVlO1xyXG4gICAgJGdyaWQuaXNvdG9wZSh7XHJcbiAgICAgIGZpbHRlcjogZmlsdGVyVmFsdWVcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vIGNoYW5nZSBpcy1jaGVja2VkIGNsYXNzIG9uIGJ1dHRvbnNcclxuICAkKCd1bC5maWx0ZXInKS5lYWNoKGZ1bmN0aW9uIChpLCBidXR0b25Hcm91cCkge1xyXG4gICAgdmFyICRidXR0b25Hcm91cCA9ICQoYnV0dG9uR3JvdXApO1xyXG4gICAgJGJ1dHRvbkdyb3VwLm9uKCdjbGljaycsICdsaScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJGJ1dHRvbkdyb3VwLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJvZHVjdCArIC0gc3RhcnQgaGVyZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgJChcIi5xdHlidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkYnV0dG9uID0gJCh0aGlzKTtcclxuICAgICAgdmFyIG9sZFZhbHVlID0gJGJ1dHRvbi5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKCk7XHJcbiAgICAgIGlmICgkYnV0dG9uLnRleHQoKSA9PT0gXCIrXCIpIHtcclxuICAgICAgICAgIHZhciBuZXdWYWwgPSBwYXJzZUZsb2F0KG9sZFZhbHVlKSArIDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBEb24ndCBhbGxvdyBkZWNyZW1lbnRpbmcgYmVsb3cgemVyb1xyXG4gICAgICAgICAgaWYgKG9sZFZhbHVlID4gMSkge1xyXG4gICAgICAgICAgICAgIHZhciBuZXdWYWwgPSBwYXJzZUZsb2F0KG9sZFZhbHVlKSAtIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG5ld1ZhbCA9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJGJ1dHRvbi5wYXJlbnQoKS5maW5kKFwiaW5wdXRcIikudmFsKG5ld1ZhbCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuICAkKFwiW2RhdGEtanMtZm9ybS1zbGlkZXJdXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGVsID0gJCh0aGlzKVxyXG4gICAgY29uc3QgZmllbGQgPSBlbC5maW5kKCcuZmllbGQnKVxyXG4gICAgY29uc3QgZmlsbCA9IGVsLmZpbmQoJy5maWxsJylcclxuICAgIGNvbnN0IGxhYmVsID0gZWwuZmluZCgnLi10aHVtYicpXHJcbiAgICBjb25zdCBtaW4gPSBmaWVsZC5hdHRyKCdtaW4nKSB8fCAwXHJcbiAgICBjb25zdCBtYXggPSBmaWVsZC5hdHRyKCdtYXgnKSB8fCAxMDBcclxuXHJcbiAgICB2YXIgdmFsdWUgPSBmaWVsZC52YWwoKVxyXG4gICAgdmFyIGZpbGxWYWwgPSAxMDAgKiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbilcclxuXHJcbiAgICBmaWxsLmNzcyh7XCJ3aWR0aFwiOiBmaWxsVmFsICsgXCIlXCJ9KVxyXG4gICAgbGFiZWwuZmluZCgnLmNlbnRlcicpLnRleHQoXCIgXCIgKyB2YWx1ZSArIFwiIFwiKVxyXG5cclxuICAgIGZpZWxkLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHZhbHVlID0gZmllbGQudmFsKClcclxuICAgICAgdmFyIGZpbGxWYWwgPSAxMDAgKiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbilcclxuXHJcbiAgICAgIGZpbGwuY3NzKHtcIndpZHRoXCI6IGZpbGxWYWwgKyBcIiVcIn0pXHJcbiAgICAgIGxhYmVsLmZpbmQoJy5jZW50ZXInKS50ZXh0KFwiIFwiICsgdmFsdWUgKyBcIiBcIilcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgdmFyIHBhZ2luYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWdlLWxpbmsnKTtcclxuICBwYWdpbmF0aW9uWzBdLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1sZWZ0XCI+PC9pPic7XHJcbiAgcGFnaW5hdGlvbltwYWdpbmF0aW9uLmxlbmd0aC0xXS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L2k+JztcclxuXHJcbiAgXHJcblxyXG59KShqUXVlcnkpOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogalF1ZXJ5IElzIEluIFZpZXdwb3J0LlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZnJvbnRpZC9qUXVlcnlJc0luVmlld3BvcnRcclxuICogTWFyY2VsbyBJdsODwqFuIFRvc2NvIChjYXB5bmV0KVxyXG4gKiBJbnNwaXJlZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDA2NTg2NDcvMTQxMzA0OVxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5J1xyXG4hZnVuY3Rpb24gKCQpIHtcclxuICAndXNlIHN0cmljdCdcclxuXHJcbiAgdmFyIENsYXNzID0gZnVuY3Rpb24gKGVsLCBjYikge1xyXG4gICAgdGhpcy4kZWwgPSBqUXVlcnkoZWwpO1xyXG4gICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgdGhpcy53YXRjaCgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgQ2xhc3MucHJvdG90eXBlID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBlbGVtZW50IGlzIGluLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc0luOiBmdW5jdGlvbiBpc0luKCkge1xyXG4gICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICB2YXIgJHdpbiA9IGpRdWVyeSh3aW5kb3cpO1xyXG4gICAgICB2YXIgZWxlbWVudFRvcCA9IF9zZWxmLiRlbC5vZmZzZXQoKS50b3A7XHJcbiAgICAgIHZhciBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIF9zZWxmLiRlbC5vdXRlckhlaWdodCgpO1xyXG4gICAgICB2YXIgdmlld3BvcnRUb3AgPSAkd2luLnNjcm9sbFRvcCgpO1xyXG4gICAgICB2YXIgdmlld3BvcnRCb3R0b20gPSB2aWV3cG9ydFRvcCArICR3aW4uaGVpZ2h0KCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Qm90dG9tID4gdmlld3BvcnRUb3AgJiYgZWxlbWVudFRvcCA8IHZpZXdwb3J0Qm90dG9tO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhdW5jaCBhIGNhbGxiYWNrIGluZGljYXRpbmcgd2hlbiB0aGUgZWxlbWVudCBpcyBpbiBhbmQgd2hlbiBpcyBvdXQuXHJcbiAgICAgKi9cclxuICAgIHdhdGNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBfc2VsZiA9IHRoaXM7XHJcbiAgICAgIHZhciBfaXNJbiA9IGZhbHNlO1xyXG5cclxuICAgICAgalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZSBzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmIChfc2VsZi5pc0luKCkgJiYgX2lzSW4gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBfc2VsZi5jYi5jYWxsKF9zZWxmLiRlbCwgJ2VudGVyZWQnKTtcclxuICAgICAgICAgIF9pc0luID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfaXNJbiA9PT0gdHJ1ZSAmJiAhX3NlbGYuaXNJbigpKSB7XHJcbiAgICAgICAgICBfc2VsZi5jYi5jYWxsKF9zZWxmLiRlbCwgJ2xlYXZlZCcpO1xyXG4gICAgICAgICAgX2lzSW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfTtcclxuXHJcbiAgLy8galF1ZXJ5IHBsdWdpbi5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgalF1ZXJ5LmZuLmlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChjYikge1xyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkZWxlbWVudCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKCdpc0luVmlld3BvcnQnKTtcclxuICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgJGVsZW1lbnQuZGF0YSgnaXNJblZpZXdwb3J0JywgKG5ldyBDbGFzcyh0aGlzLCBjYikpKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59KHdpbmRvdy5qUXVlcnkpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwialF1ZXJ5IiwiZSIsImZuIiwibmljZVNlbGVjdCIsInQiLCJlYWNoIiwibiIsIm5leHQiLCJpIiwiaGFzQ2xhc3MiLCJsZW5ndGgiLCJyZW1vdmUiLCJzIiwidHJpZ2dlciIsImNzcyIsImRvY3VtZW50Iiwib2ZmIiwiYWZ0ZXIiLCJhZGRDbGFzcyIsImF0dHIiLCJodG1sIiwiZmluZCIsImRhdGEiLCJ0ZXh0IiwiYXBwZW5kIiwidmFsIiwiaXMiLCJoaWRlIiwib24iLCJub3QiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiZm9jdXMiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJldiIsImtleUNvZGUiLCJuZXh0QWxsIiwiZmlyc3QiLCJsIiwicHJldkFsbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImNzc1RleHQiLCJwb2ludGVyRXZlbnRzIiwiJCIsIl9zZWxmIiwiY2FjaGUiLCJzdXBwb3J0Iiwib2JqZWN0cyIsImluaXQiLCJvcHRpb25zIiwidW5iaW5kIiwiYmluZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsaWdodGNhc2UiLCJzdGFydCIsIm9yaWdpbiIsInNldHRpbmdzIiwiZXh0ZW5kIiwiaWRQcmVmaXgiLCJjbGFzc1ByZWZpeCIsImF0dHJQcmVmaXgiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbk9wZW4iLCJ0cmFuc2l0aW9uQ2xvc2UiLCJ0cmFuc2l0aW9uSW4iLCJ0cmFuc2l0aW9uT3V0IiwiY3NzVHJhbnNpdGlvbnMiLCJzcGVlZEluIiwic3BlZWRPdXQiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiZm9yY2VXaWR0aCIsImZvcmNlSGVpZ2h0IiwibGl2ZVJlc2l6ZSIsImZ1bGxTY3JlZW5Nb2RlRm9yTW9iaWxlIiwibW9iaWxlTWF0Y2hFeHByZXNzaW9uIiwiZGlzYWJsZVNocmluayIsImZpeGVkUmF0aW8iLCJzaHJpbmtGYWN0b3IiLCJvdmVybGF5T3BhY2l0eSIsInNsaWRlc2hvdyIsInNsaWRlc2hvd0F1dG9TdGFydCIsImJyZWFrQmVmb3JlU2hvdyIsInRpbWVvdXQiLCJzd2lwZSIsInVzZUtleXMiLCJ1c2VDYXRlZ29yaWVzIiwidXNlQXNDb2xsZWN0aW9uIiwibmF2aWdhdGVFbmRsZXNzIiwiY2xvc2VPbk92ZXJsYXlDbGljayIsInRpdGxlIiwiY2FwdGlvbiIsInNob3dUaXRsZSIsInNob3dDYXB0aW9uIiwic2hvd1NlcXVlbmNlSW5mbyIsImlubGluZSIsImFqYXgiLCJ0eXBlIiwiZGF0YVR5cGUiLCJpZnJhbWUiLCJmcmFtZWJvcmRlciIsImZsYXNoIiwid21vZGUiLCJ2aWRlbyIsInBvc3RlciIsInByZWxvYWQiLCJjb250cm9scyIsImF1dG9idWZmZXIiLCJhdXRvcGxheSIsImxvb3AiLCJocmVmIiwidHlwZU1hcHBpbmciLCJlcnJvck1lc3NhZ2UiLCJsYWJlbHMiLCJtYXJrdXAiLCJib2R5Iiwib3ZlcmxheSIsImxvYWRpbmciLCJjbG9zZSIsIm5hdiIsInBsYXkiLCJwYXVzZSIsImNvbnRlbnQiLCJpbmZvIiwiY29udGVudElubmVyIiwic2VxdWVuY2VJbmZvIiwib25Jbml0Iiwib25TdGFydCIsIm9uQmVmb3JlQ2FsY3VsYXRlRGltZW5zaW9ucyIsIm9uQWZ0ZXJDYWxjdWxhdGVEaW1lbnNpb25zIiwib25CZWZvcmVTaG93Iiwib25GaW5pc2giLCJvblJlc2l6ZSIsIm9uQ2xvc2UiLCJvbkNsZWFudXAiLCJfY2FsbEhvb2tzIiwib2JqZWN0RGF0YSIsIl9zZXRPYmplY3REYXRhIiwiX2FkZEVsZW1lbnRzIiwiX29wZW4iLCJkaW1lbnNpb25zIiwiZ2V0Vmlld3BvcnREaW1lbnNpb25zIiwiZ2V0IiwibmFtZSIsImdldE9iamVjdERhdGEiLCJvYmplY3QiLCIkb2JqZWN0IiwiX3ByZWZpeEF0dHJpYnV0ZU5hbWUiLCJjaGlsZHJlbiIsInVybCIsIl9kZXRlcm1pbmVVcmwiLCJyZXF1ZXN0VHlwZSIsInJlcXVlc3REYXRhIiwicmVxdWVzdERhdGFUeXBlIiwicmVsIiwiX2RldGVybWluZUF0dHJpYnV0ZVNlbGVjdG9yIiwiX3ZlcmlmeURhdGFUeXBlIiwiaXNQYXJ0T2ZTZXF1ZW5jZSIsIl9pc1BhcnRPZlNlcXVlbmNlIiwiaXNQYXJ0T2ZTZXF1ZW5jZVdpdGhTbGlkZXNob3ciLCJjdXJyZW50SW5kZXgiLCJpbmRleCIsInNlcXVlbmNlTGVuZ3RoIiwicHJldkluZGV4IiwibmV4dEluZGV4IiwiX2RldGVybWluZUxpbmtUYXJnZXQiLCIkb3JpZ2luIiwic2VsZWN0b3IiLCJjYXRlZ29yaWVzIiwic3BsaXQiLCJjYXRlZ29yeSIsImRhdGFVcmwiLCJfdmVyaWZ5RGF0YVVybCIsImRlbnNpdHkiLCJzdXBwb3J0TGV2ZWwiLCJzcmMiLCJ2aWRlb1R5cGUiLCJfZ2V0RmlsZVVybFN1ZmZpeCIsImNhblBsYXlUeXBlIiwiX2RldmljZVBpeGVsUmF0aW8iLCJfbWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJfbm9ybWFsaXplVXJsIiwic3JjRXhwIiwibWFwIiwic3RyIiwidHJpbSIsImZvckVhY2giLCJ2YWx1ZSIsInN1YnN0cmluZyIsImxhc3RDaGFyIiwiaW50VmFsIiwicGFyc2VJbnQiLCJmbG9hdFZhbCIsInBhcnNlRmxvYXQiLCJ0ZXN0IiwiaXNOYU4iLCJleHByZXNzaW9uIiwiZ2V0U2ltaWxhckxpbmtzIiwicmVnZXhwIiwiUmVnRXhwIiwiaXNTbGlkZXNob3dFbmFibGVkIiwiX2xvYWRDb250ZW50Iiwib3JpZ2luYWxPYmplY3QiLCJfcmVzdG9yZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJJbWFnZSIsIl9jbG9uZU9iamVjdCIsIl9hZGRPYmplY3QiLCJfbG9hZE9iamVjdCIsIl9sb2FkaW5nIiwic2hvdyIsImVtcHR5IiwidW5kZWZpbmVkIiwiX3Nob3dDb250ZW50IiwiZXJyb3IiLCJzdWNjZXNzIiwidGV4dFN0YXR1cyIsImpxWEhSIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJlcnJvclRocm93biIsIl9jYWxjdWxhdGVEaW1lbnNpb25zIiwiX2NsZWFudXBEaW1lbnNpb25zIiwicmF0aW8iLCJvYmplY3RXaWR0aCIsIm9iamVjdEhlaWdodCIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiZGlmZmVyZW5jZVdpZHRoQXNQZXJjZW50IiwiZGlmZmVyZW5jZUhlaWdodEFzUGVyY2VudCIsIl9hZGp1c3REaW1lbnNpb25zIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwicHJvY2VzcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImluZGV4T2YiLCJ0b1N0cmluZyIsInJlIiwiZXhlYyIsInRvTG93ZXJDYXNlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzdWZmaXhBcnIiLCJzdWZmaXgiLCJzdWJzdHIiLCJfc3RhcnRJblRyYW5zaXRpb24iLCJzY3JvbGwiLCJmYWRlIiwiem9vbSIsImlzQnVzeSIsImZpcnN0T3BlbmVkIiwic2V0VGltZW91dCIsIl9wcm9jZXNzQ29udGVudCIsIl9oYW5kbGVFdmVudHMiLCJfdW5iaW5kRXZlbnRzIiwiaXNTbGlkZXNob3dTdGFydGVkIiwiX3N0YXJ0VGltZW91dCIsIl9zdG9wVGltZW91dCIsIl93YXRjaFJlc2l6ZUludGVyYWN0aW9uIiwiY2xpY2siLCJfYWRkS2V5RXZlbnRzIiwiX3NldE5hdmlnYXRpb24iLCJpdGVtIiwiaXNGaXJzdCIsImFjdGlvbiIsImlzTGFzdCIsImlzUGxhaW5PYmplY3QiLCJzcGVjaWFsIiwic3dpcGVsZWZ0Iiwic3dpcGVyaWdodCIsImNsZWFyVGltZW91dCIsIiRsaW5rcyIsIml0ZW1zIiwiZXEiLCJwcmV2SXRlbSIsImlzRmlyc3RPcGVuZWQiLCIkY2xvbmUiLCJjbG9uZSIsIm9iamVjdElkIiwiX2NhY2hlT2JqZWN0RGF0YSIsInJlbW92ZUF0dHIiLCJpc01vYmlsZURldmljZSIsImRldmljZUFnZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYWdlbnRJZCIsIm1hdGNoIiwiaXNUcmFuc2l0aW9uU3VwcG9ydGVkIiwidHJhbnNpdGlvbk1hcHBpbmciLCJzcGVlZCIsIm9wYWNpdHkiLCJjYWxsYmFjayIsImlzSW5UcmFuc2l0aW9uIiwic3RhcnRUcmFuc2l0aW9uIiwic3RhcnRPcGFjaXR5IiwiZW5kVHJhbnNpdGlvbiIsImVuZE9wYWNpdHkiLCJpc09wZW4iLCJ0cmFuc2l0aW9ucyIsInN0b3AiLCJhbmltYXRlIiwiZGlyZWN0aW9uIiwic3RhcnRPZmZzZXQiLCJlbmRPZmZzZXQiLCJzdGFydFNjYWxlIiwiZW5kU2NhbGUiLCJob29rcyIsImhvb2siLCJjYWxsIiwiaWQiLCJyZXNpemUiLCJfdW53YXRjaFJlc2l6ZUludGVyYWN0aW9uIiwiX3N3aXRjaFRvRnVsbFNjcmVlbk1vZGUiLCJtb2JpbGVEZXZpY2UiLCJjbGVhbnVwIiwibWF0Y2hNZWRpYSIsIm1zTWF0Y2hNZWRpYSIsImRldmljZVBpeGVsUmF0aW8iLCJfaXNQdWJsaWNNZXRob2QiLCJtZXRob2QiLCJjaGFyQXQiLCJfZXhwb3J0IiwicHJvcGVydHkiLCJhcHBseSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJhcmd1bWVudHMiLCJBT1MiLCJUd2Vlbk1heCIsIlN3aXBlciIsImRlbGF5IiwiYmFja2dyb3VuZCIsImltZyIsImJnIiwic2V0SW50ZXJ2YWwiLCJTY3JvbGxUb3AiLCJzY3JvbGxUb3AiLCJsYXN0U2Nyb2xsVG9wIiwic3QiLCJtYWluTWVudVRvcCIsInBhcmVudCIsInNsaWRlVXAiLCJzaWJsaW5ncyIsInNsaWRlRG93biIsImlzSW5WaWV3cG9ydCIsInN0YXR1cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbCIsImlubmVySFRNTCIsImdldEF0dHJpYnV0ZSIsImN1cnNvciIsImZvbGxvd2VyIiwicG9zWCIsInBvc1kiLCJtb3VzZVgiLCJtb3VzZVkiLCJ0byIsInJlcGVhdCIsIm9uUmVwZWF0Iiwic2V0IiwibGVmdCIsInRvcCIsImNsaWVudFgiLCJjbGllbnRZIiwic3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImNlbnRlcmVkU2xpZGVzIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsInNwZWVkcyIsImJyZWFrcG9pbnRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInJlbmRlckJ1bGxldCIsImNsYXNzTmFtZSIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJlZmZlY3QiLCJmaWx0ZXJWYWx1ZSIsIiRncmlkIiwiaXNvdG9wZSIsImZpbHRlciIsImdhbGxlcnlNYXNvbmFyeVR3byIsImZpbHRlckZucyIsImJ1dHRvbkdyb3VwIiwiJGJ1dHRvbkdyb3VwIiwiJGJ1dHRvbiIsIm9sZFZhbHVlIiwibmV3VmFsIiwiZmllbGQiLCJmaWxsIiwibGFiZWwiLCJtaW4iLCJtYXgiLCJmaWxsVmFsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkNsYXNzIiwiY2IiLCIkZWwiLCJ3YXRjaCIsImlzSW4iLCIkd2luIiwiZWxlbWVudFRvcCIsIm9mZnNldCIsImVsZW1lbnRCb3R0b20iLCJ2aWV3cG9ydFRvcCIsInZpZXdwb3J0Qm90dG9tIiwiX2lzSW4iLCIkZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=