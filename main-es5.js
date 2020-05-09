function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/all-pokemons/all-pokemons.component */
    "./src/app/pages/all-pokemons/all-pokemons.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Pokemons';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-all-pokemons");
        }
      },
      directives: [_pages_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_1__["AllPokemonsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/all-pokemons/all-pokemons.component */
    "./src/app/pages/all-pokemons/all-pokemons.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_5__["AllPokemonsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_5__["AllPokemonsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/all-pokemons/all-pokemons.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/all-pokemons/all-pokemons.component.ts ***!
    \**************************************************************/

  /*! exports provided: AllPokemonsComponent */

  /***/
  function srcAppPagesAllPokemonsAllPokemonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllPokemonsComponent", function () {
      return AllPokemonsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_all_pokemons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/all-pokemons.service */
    "./src/app/services/all-pokemons.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AllPokemonsComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPokemonsComponent_div_17_Template_input_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.chooseType($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](type_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", type_r3.name, " ");
      }
    }

    function AllPokemonsComponent_div_20_div_2_ng_container_1_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](n_r15.type.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r15.type.name, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function AllPokemonsComponent_div_20_div_2_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllPokemonsComponent_div_20_div_2_ng_container_1_div_1_div_12_Template, 3, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var i_r11 = ctx_r17.index;
        var p_r10 = ctx_r17.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, i_r11));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r10[i_r11], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://pokeres.bastionbot.org/images/pokemon/", p_r10.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r10.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0442\u0443\u0442 \u0456\u0434 ", p_r10.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r10.types);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](p_r10.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r10.url);
      }
    }

    function AllPokemonsComponent_div_20_div_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllPokemonsComponent_div_20_div_2_ng_container_1_div_1_Template, 15, 12, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 0 < i_r11 && i_r11 <= ctx_r12.fiftyOne);
      }
    }

    function AllPokemonsComponent_div_20_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPokemonsComponent_div_20_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var i_r11 = ctx.index;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.onClickMe(ctx_r19.Allpp, i_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllPokemonsComponent_div_20_div_2_ng_container_1_Template, 2, 1, "ng-container", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.hide);
      }
    }

    function AllPokemonsComponent_div_20_div_4_ng_container_1_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](n_r26.type.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r26.type.name, " ");
      }
    }

    function AllPokemonsComponent_div_20_div_4_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllPokemonsComponent_div_20_div_4_ng_container_1_div_1_div_12_Template, 3, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var i_r22 = ctx_r28.index;
        var p_r21 = ctx_r28.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, i_r22));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r21[i_r22], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://pokeres.bastionbot.org/images/pokemon/", p_r21.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0442\u0443\u0442 \u0456\u0434 ", p_r21.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r21.types);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](p_r21.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.url);
      }
    }

    function AllPokemonsComponent_div_20_div_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllPokemonsComponent_div_20_div_4_ng_container_1_div_1_Template, 15, 12, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 51 <= i_r22 && i_r22 <= ctx_r23.oneHundredOne);
      }
    }

    function AllPokemonsComponent_div_20_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPokemonsComponent_div_20_div_4_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var i_r22 = ctx.index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r30.onClickMe(ctx_r30.Allpp, i_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllPokemonsComponent_div_20_div_4_ng_container_1_Template, 2, 1, "ng-container", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.hide);
      }
    }

    function AllPokemonsComponent_div_20_div_6_ng_container_1_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](n_r37.type.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r37.type.name, " ");
      }
    }

    function AllPokemonsComponent_div_20_div_6_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllPokemonsComponent_div_20_div_6_ng_container_1_div_1_div_12_Template, 3, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var i_r33 = ctx_r39.index;
        var p_r32 = ctx_r39.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, i_r33));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r32[i_r33], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://pokeres.bastionbot.org/images/pokemon/", p_r32.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r32.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0442\u0443\u0442 \u0456\u0434 ", p_r32.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r32.types);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](p_r32.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r32.url);
      }
    }

    function AllPokemonsComponent_div_20_div_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllPokemonsComponent_div_20_div_6_ng_container_1_div_1_Template, 15, 12, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r33 >= 101 && i_r33 <= ctx_r34.oneHundredTwentyFive);
      }
    }

    function AllPokemonsComponent_div_20_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPokemonsComponent_div_20_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var i_r33 = ctx.index;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r41.onClickMe(ctx_r41.Allpp, i_r33);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllPokemonsComponent_div_20_div_6_ng_container_1_Template, 2, 1, "ng-container", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.hide);
      }
    }

    function AllPokemonsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllPokemonsComponent_div_20_div_2_Template, 2, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllPokemonsComponent_div_20_div_4_Template, 2, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllPokemonsComponent_div_20_div_6_Template, 2, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.Allpp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.Allpp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.Allpp);
      }
    }

    function AllPokemonsComponent_div_24_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](n_r46.type.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", n_r46.type.name, " ");
      }
    }

    function AllPokemonsComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllPokemonsComponent_div_24_div_3_Template, 3, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://pokeres.bastionbot.org/images/pokemon/", p_r43.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r43.types);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #00", p_r43.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r43.stats[0].stat.name, " ", p_r43.stats[0].base_stat, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r43.stats[1].stat.name, " ", p_r43.stats[1].base_stat, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r43.stats[2].stat.name, " ", p_r43.stats[2].base_stat, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r43.stats[3].stat.name, " ", p_r43.stats[3].base_stat, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r43.stats[4].stat.name, " ", p_r43.stats[4].base_stat, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r43.stats[5].stat.name, " ", p_r43.stats[5].base_stat, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" weight ", p_r43.weight, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" moves ", p_r43.moves.length, "");
      }
    }

    var AllPokemonsComponent =
    /*#__PURE__*/
    function () {
      function AllPokemonsComponent(allPokemonsService, http) {
        _classCallCheck(this, AllPokemonsComponent);

        this.allPokemonsService = allPokemonsService;
        this.http = http;
        this.Arraya = [];
        this.Allpp = [];
        this.hide = true; // 

        this.fiftyOne = 10;
        this.oneHundredOne = 60;
        this.oneHundredTwentyFive = 110;
        this.s = 20;
        this.Clicked = []; // 
        // All Types

        this.Types = [];
      }

      _createClass(AllPokemonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getP();
          this.getT(); // this.createPList()
        }
      }, {
        key: "getP",
        value: function getP() {
          var _this = this;

          // this.allPokemonsService.getAllPokemons
          this.allPokemonsService.getAllPokemons().subscribe(function (data) {
            _this.Arraya = data['results'];
            console.log('this.Arraya', _this.Arraya); // data['results'].forEach(element => {
            //   this.http.get<Array<IAll>>(element.url )
            // })

            _this.Arraya.forEach(function (element) {
              console.log(element.url);

              _this.http.get(element.url).subscribe(function (data) {
                _this.Allpp.push(data);

                console.log(data);
                console.log('this all', _this.Allpp[0]);
              });
            }, function (error) {
              console.log('Oops', error);
            });
          });
        }
      }, {
        key: "getT",
        value: function getT() {
          var _this2 = this;

          this.allPokemonsService.getAllTypes().subscribe(function (data) {
            console.log(data['results']);
            _this2.Types = data['results'];
          });
        } // public createPList():void{
        //   const newP:IAll = new Plist(this.id, this.name , this.url);
        //   if(this.Arraya.length > 0){
        //     newP.id = this.Arraya.slice(-1)[0].url.slice(34, -1);
        //     newP.name = this.Arraya.slice(-1)[0].name
        //     newP.url = this.Arraya.slice(-1)[0].url
        //     console.log('what' , newP)
        //   }
        // }

      }, {
        key: "onClickMe",
        value: function onClickMe(Allpp, i) {
          this.Clicked.push(this.Allpp[i]);
          console.log(this.Allpp[i]);
          console.log(this.Clicked);
        }
      }, {
        key: "loadPokemons",
        value: function loadPokemons() {
          this.fiftyOne += 9;
          this.oneHundredOne += 9;
          this.oneHundredTwentyFive += 9;
        }
      }, {
        key: "chooseType",
        value: function chooseType(event) {
          this.hide = false;
          console.log(event.srcElement.className);

          if (document.getElementById('checker').className != event.srcElement.className) {
            document.getElementById('checker').hidden = true;
          }
        }
      }]);

      return AllPokemonsComponent;
    }();

    AllPokemonsComponent.ɵfac = function AllPokemonsComponent_Factory(t) {
      return new (t || AllPokemonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_all_pokemons_service__WEBPACK_IMPORTED_MODULE_1__["AllPokemonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AllPokemonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllPokemonsComponent,
      selectors: [["app-all-pokemons"]],
      decls: 28,
      vars: 4,
      consts: [[1, "Types"], [1, "Types-action-button"], [1, "Types-action-button__icon"], [1, "Types-buttons"], [1, "Types-buttons__item"], ["href", "#", "data-tooltip", "Facebook", 1, "Types-buttons__link"], [1, "icon-material", "icon-material_fb"], ["href", "#", "data-tooltip", "Twitter", 1, "Types-buttons__link"], [1, "icon-material", "icon-material_tw"], ["href", "#", "data-tooltip", "Linkedin", 1, "Types-buttons__link"], [1, "icon-material", "icon-material_li"], ["href", "#", "data-tooltip", "Google+", 1, "Types-buttons__link"], [1, "icon-material", "icon-material_gp"], [1, "flex"], [4, "ngFor", "ngForOf"], [1, "column"], [1, "main"], ["class", "Pokemons", 4, "ngIf"], [1, "info"], [1, ""], [1, "b1"], [3, "click"], ["type", "checkbox", 3, "click"], [1, "Pokemons"], [1, "Pokemons__List1"], [3, "click", 4, "ngFor", "ngForOf"], [1, "Pokemons__List2"], [1, "Pokemons__List3"], [4, "ngIf"], ["class", "border", 4, "ngIf"], [1, "border"], ["alt", "", 3, "src"], [1, "Pokemons__List1__pName"], [1, "Pokemons__List2__pName"], [1, "Pokemons__List3__pName"]],
      template: function AllPokemonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllPokemonsComponent_div_17_Template, 3, 4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AllPokemonsComponent_div_20_Template, 7, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AllPokemonsComponent_div_24_Template, 22, 17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPokemonsComponent_Template_button_click_26_listener() {
            return ctx.loadPokemons();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Load more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Clicked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Clicked);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.Pokemons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n}\n\n.Pokemons__List1[_ngcontent-%COMP%] {\n  width: 23.3%;\n  height: 150px;\n}\n\n.Pokemons__List2[_ngcontent-%COMP%] {\n  width: 23.3%;\n  height: 150px;\n}\n\n.Pokemons__List3[_ngcontent-%COMP%] {\n  width: 23.3%;\n  height: 150px;\n}\n\n.info[_ngcontent-%COMP%] {\n  right: 0;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  width: 30%;\n}\n\n.normal[_ngcontent-%COMP%] {\n  color: gainsboro;\n}\n\n.fire[_ngcontent-%COMP%] {\n  color: firebrick;\n}\n\n.fighting[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.water[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.flying[_ngcontent-%COMP%] {\n  color: lightblue;\n}\n\n.grass[_ngcontent-%COMP%] {\n  color: 0;\n}\n\n.poison[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.electric[_ngcontent-%COMP%] {\n  color: yellow;\n}\n\n.ground[_ngcontent-%COMP%] {\n  color: darkgoldenrod;\n}\n\n.psychic[_ngcontent-%COMP%] {\n  color: palegreen;\n}\n\n.rock[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.ice[_ngcontent-%COMP%] {\n  color: 0;\n}\n\n.bug[_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n\n.dragon[_ngcontent-%COMP%] {\n  color: darkgoldenrod;\n}\n\n.ghost[_ngcontent-%COMP%] {\n  color: ghostwhite;\n}\n\n.dark[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.steel[_ngcontent-%COMP%] {\n  color: steelblue;\n}\n\n.fairy[_ngcontent-%COMP%] {\n  color: purple;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 100px;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.flex[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.border[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n  margin: 10px 0 10px 0;\n  box-shadow: 4px 4px 13px 0px rgba(0, 0, 0, 0.88);\n}\n\n.b1[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.Types[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  position: fixed;\n  width: 56px;\n  left: 50%;\n  bottom: 15px;\n  margin-left: -28px;\n}\n\n.Types[_ngcontent-%COMP%]:hover   .Types-buttons[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.Types[_ngcontent-%COMP%]:hover   .Types-buttons__link[_ngcontent-%COMP%] {\n  transform: scaleY(1) scaleX(1) translateY(-16px) translateX(0px);\n}\n\n.Types-action-button[_ngcontent-%COMP%]:hover    + .Types-buttons[_ngcontent-%COMP%]   .Types-buttons__link[_ngcontent-%COMP%]:before {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(1);\n  transform-origin: right center 0;\n  transition-delay: 0.3s;\n}\n\n.Types-action-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 56px;\n  height: 56px;\n  background-color: #29B6F6;\n  border-radius: 50%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.Types-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 50px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.2s;\n}\n\n.Types-action-button__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 56px;\n  height: 56px;\n  background: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOCAxNi4wOGMtLjc2IDAtMS40NC4zLTEuOTYuNzdMOC45MSAxMi43Yy4wNS0uMjMuMDktLjQ2LjA5LS43cy0uMDQtLjQ3LS4wOS0uN2w3LjA1LTQuMTFjLjU0LjUgMS4yNS44MSAyLjA0LjgxIDEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDNjMCAuMjQuMDQuNDcuMDkuN0w4LjA0IDkuODFDNy41IDkuMzEgNi43OSA5IDYgOWMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgM2MuNzkgMCAxLjUtLjMxIDIuMDQtLjgxbDcuMTIgNC4xNmMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjYxIDEuMzEgMi45MiAyLjkyIDIuOTIgMS42MSAwIDIuOTItMS4zMSAyLjkyLTIuOTJzLTEuMzEtMi45Mi0yLjkyLTIuOTJ6Ii8+Cjwvc3ZnPg==\") center no-repeat;\n}\n\n.Types-buttons__item[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin: 12px 0;\n}\n\n.Types-buttons__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  text-decoration: none;\n  background-color: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  transform: scaleY(0.5) scaleX(0.5) translateY(0px) translateX(0px);\n  transition: 0.3s;\n}\n\n[data-tooltip][_ngcontent-%COMP%]:before {\n  top: 50%;\n  margin-top: -11px;\n  font-weight: 600;\n  border-radius: 2px;\n  background: #585858;\n  color: #fff;\n  content: attr(data-tooltip);\n  font-size: 12px;\n  text-decoration: none;\n  visibility: hidden;\n  opacity: 0;\n  padding: 4px 7px;\n  margin-right: 12px;\n  position: absolute;\n  transform: scale(0);\n  right: 100%;\n  white-space: nowrap;\n  transform-origin: top right;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n[data-tooltip][_ngcontent-%COMP%]:hover:before {\n  visibility: visible;\n  opacity: 1;\n  transform: scale(1);\n  transform-origin: right center 0;\n}\n\n.icon-material[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n}\n\n.icon-material_fb[_ngcontent-%COMP%] {\n  background: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC1mYWNlYm9vayI+CgkJPHBhdGggZD0iTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxVjUxQzUxMCwyMi45NSw0ODcuMDUsMCw0NTksMHogICAgIE00MzMuNSw1MXY3Ni41aC01MWMtMTUuMywwLTI1LjUsMTAuMi0yNS41LDI1LjV2NTFoNzYuNXY3Ni41SDM1N1Y0NTloLTc2LjVWMjgwLjVoLTUxVjIwNGg1MXYtNjMuNzUgICAgQzI4MC41LDkxLjgsMzIxLjMsNTEsMzY5Ljc1LDUxSDQzMy41eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\") center no-repeat;\n}\n\n.icon-material_gp[_ngcontent-%COMP%] {\n  background: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC1ncGx1cyI+CgkJPHBhdGggZD0iTTIzNC42LDE3NS45NWMwLTI1LjUtMTUuMy03Ni41LTUzLjU1LTc2LjVjLTE1LjMsMC0zMy4xNSwxMC4yLTMzLjE1LDQzLjM1YzAsMzAuNiwxNS4zLDczLjk1LDUxLDczLjk1ICAgIEMxOTguOSwyMTYuNzUsMjM0LjYsMjE0LjIsMjM0LjYsMTc1Ljk1eiBNMjE5LjMsMzAwLjljLTIuNTUsMC01LjEsMC03LjY1LDBsMCwwYy03LjY1LDAtMzAuNiwyLjU1LTQ1LjksNy42NDkgICAgQzE0Ny45LDMxMy42NSwxMjcuNSwzMjYuNCwxMjcuNSwzNTEuOWMwLDI4LjA1LDI1LjUsNTYuMSw3Ni41LDU2LjFjMzguMjUsMCw2MS4yLTI1LjUsNjEuMi01MSAgICBDMjY1LjIsMzM5LjE1LDI1Mi40NSwzMjYuNCwyMTkuMywzMDAuOXogTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxICAgIFY1MUM1MTAsMjIuOTUsNDg3LjA1LDAsNDU5LDB6IE0xODEuMDUsNDM4LjZjLTcxLjQsMC0xMDQuNTUtNDAuOC0xMDQuNTUtNzYuNWMwLTEyLjc1LDIuNTUtNDAuOCwzOC4yNS02MS4xOTkgICAgYzIwLjQtMTIuNzUsNDUuOS0yMC40LDc5LjA1LTIyLjk1Yy01LjEtNS4xMDEtNy42NS0xMi43NS03LjY1LTI1LjVjMC01LjEsMC03LjY1LDIuNTUtMTIuNzVoLTEwLjJjLTUxLDAtODEuNi0zOC4yNS04MS42LTc2LjUgICAgYzAtNDMuMzUsMzMuMTUtOTEuOCwxMDQuNTUtOTEuOGgxMDcuMWwtNy42NDksNy42NUwyODMuMDUsOTYuOWwtMi41NSwyLjU1aC0xNy44NWMxMC4xOTksMTAuMiwyMi45NDksMjguMDUsMjIuOTQ5LDU2LjEgICAgYzAsMzUuNy0xNy44NSw1My41NS00MC44LDY4Ljg1Yy01LjEsMi41NS0xMC4yLDEwLjItMTAuMiwxNy44NXM1LjEsMTIuNzUsMTAuMiwxNS4zYzIuNTUsMi41NSw3LjY1LDUuMTAxLDEyLjc1LDcuNjUgICAgYzIwLjQsMTUuMyw0OC40NSwzMy4xNDksNDguNDUsNzMuOTVDMzA2LDM4NS4wNSwyNzIuODUsNDM4LjYsMTgxLjA1LDQzOC42eiBNNDMzLjUsMjU1aC01MXY1MUgzNTd2LTUxaC01MXYtMjUuNWg1MXYtNTFoMjUuNXY1MSAgICBoNTFWMjU1eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\") center no-repeat;\n}\n\n.icon-material_tw[_ngcontent-%COMP%] {\n  background: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC10d2l0dGVyIj4KCQk8cGF0aCBkPSJNNDU5LDBINTFDMjIuOTUsMCwwLDIyLjk1LDAsNTF2NDA4YzAsMjguMDUsMjIuOTUsNTEsNTEsNTFoNDA4YzI4LjA1LDAsNTEtMjIuOTUsNTEtNTFWNTFDNTEwLDIyLjk1LDQ4Ny4wNSwwLDQ1OSwweiAgICAgTTQwMC4zNSwxODYuMTVjLTIuNTUsMTE3LjMtNzYuNSwxOTguOS0xODguNywyMDRDMTY1Ljc1LDM5Mi43LDEzMi42LDM3Ny40LDEwMiwzNTkuNTVjMzMuMTUsNS4xMDEsNzYuNS03LjY0OSw5OS40NS0yOC4wNSAgICBjLTMzLjE1LTIuNTUtNTMuNTUtMjAuNC02My43NS00OC40NWMxMC4yLDIuNTUsMjAuNCwwLDI4LjA1LDBjLTMwLjYtMTAuMi01MS0yOC4wNS01My41NS02OC44NWM3LjY1LDUuMSwxNy44NSw3LjY1LDI4LjA1LDcuNjUgICAgYy0yMi45NS0xMi43NS0zOC4yNS02MS4yLTIwLjQtOTEuOGMzMy4xNSwzNS43LDczLjk1LDY2LjMsMTQwLjI1LDcxLjRjLTE3Ljg1LTcxLjQsNzkuMDUxLTEwOS42NSwxMTcuMzAxLTYxLjIgICAgYzE3Ljg1LTIuNTUsMzAuNi0xMC4yLDQzLjM1LTE1LjNjLTUuMSwxNy44NS0xNS4zLDI4LjA1LTI4LjA1LDM4LjI1YzEyLjc1LTIuNTUsMjUuNS01LjEsMzUuNy0xMC4yICAgIEM0MjUuODUsMTY1Ljc1LDQxMy4xLDE3NS45NSw0MDAuMzUsMTg2LjE1eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\") center no-repeat;\n}\n\n.icon-material_li[_ngcontent-%COMP%] {\n  background: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1MTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icG9zdC1saW5rZWRpbiI+CgkJPHBhdGggZD0iTTQ1OSwwSDUxQzIyLjk1LDAsMCwyMi45NSwwLDUxdjQwOGMwLDI4LjA1LDIyLjk1LDUxLDUxLDUxaDQwOGMyOC4wNSwwLDUxLTIyLjk1LDUxLTUxVjUxQzUxMCwyMi45NSw0ODcuMDUsMCw0NTksMHogICAgIE0xNTMsNDMzLjVINzYuNVYyMDRIMTUzVjQzMy41eiBNMTE0Ljc1LDE2MC42NWMtMjUuNSwwLTQ1LjktMjAuNC00NS45LTQ1LjlzMjAuNC00NS45LDQ1LjktNDUuOXM0NS45LDIwLjQsNDUuOSw0NS45ICAgIFMxNDAuMjUsMTYwLjY1LDExNC43NSwxNjAuNjV6IE00MzMuNSw0MzMuNUgzNTdWMjk4LjM1YzAtMjAuMzk5LTE3Ljg1LTM4LjI1LTM4LjI1LTM4LjI1cy0zOC4yNSwxNy44NTEtMzguMjUsMzguMjVWNDMzLjVIMjA0ICAgIFYyMDRoNzYuNXYzMC42YzEyLjc1LTIwLjQsNDAuOC0zNS43LDYzLjc1LTM1LjdjNDguNDUsMCw4OS4yNSw0MC44LDg5LjI1LDg5LjI1VjQzMy41eiIgZmlsbD0iIzc1NzU3NSIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\") center no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsLXBva2Vtb25zL0M6XFxVc2Vyc1xcNTU1XFxEZXNrdG9wXFxBUFxcUG9rZW1vbnMvc3JjXFxhcHBcXHBhZ2VzXFxhbGwtcG9rZW1vbnNcXGFsbC1wb2tlbW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWxsLXBva2Vtb25zL2FsbC1wb2tlbW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURJRTtFQUVFLFlBQUE7RUFDQSxhQUFBO0FDSEo7O0FEUUU7RUFHRSxZQUFBO0VBQ0EsYUFBQTtBQ1JKOztBRGNBO0VBRUUsUUFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDZEY7O0FEa0JBO0VBQ0UsZ0JBQUE7QUNmRjs7QURrQkE7RUFDRSxnQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLFlBQUE7QUNmRjs7QURrQkE7RUFDRSxXQUFBO0FDZkY7O0FEa0JBO0VBQ0UsZ0JBQUE7QUNmRjs7QURrQkE7RUFDRSxRQUFBO0FDZkY7O0FEa0JBO0VBQ0UsWUFBQTtBQ2ZGOztBRGtCQTtFQUNFLGFBQUE7QUNmRjs7QURrQkE7RUFDRSxvQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLGdCQUFBO0FDZkY7O0FEa0JBO0VBQ0UsV0FBQTtBQ2ZGOztBRGtCQTtFQUNFLFFBQUE7QUNmRjs7QURrQkE7RUFDRSxrQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLG9CQUFBO0FDZkY7O0FEa0JBO0VBQ0UsaUJBQUE7QUNmRjs7QURrQkE7RUFDRSxZQUFBO0FDZkY7O0FEa0JBO0VBQ0UsZ0JBQUE7QUNmRjs7QURrQkE7RUFDRSxhQUFBO0FDZkY7O0FEbUJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDaEJGOztBRG9CQTtFQUNFLGFBQUE7QUNqQkY7O0FEcUJBO0VBQ0UsZ0JBQUE7QUNsQkY7O0FEc0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFHRixnREFBQTtBQ25CQTs7QURvQ0E7RUFDRSxpQkFBQTtBQ2pDRjs7QURzQ0E7RUFDRSx3QkFBQTtFQUVBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0UsZ0VBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FDcENGOztBRHVDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMHZCQUFBO0FDcENGOztBRHVDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0VBQ0Esa0VBQUE7RUFJQSxnQkFBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EscURBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDcENGOztBRHVDQTtFQUNFLDB5Q0FBQTtBQ3BDRjs7QUR1Q0E7RUFDRSxrMEVBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0UsOHdEQUFBO0FDcENGOztBRHVDQTtFQUNFLHNpREFBQTtBQ3BDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbC1wb2tlbW9ucy9hbGwtcG9rZW1vbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5Qb2tlbW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDcwJTtcblxuICAmX19MaXN0MSB7XG4gICAgd2lkdGg6ICAyMy4zJTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgXG4gICAgJl9fcE5hbWUge31cbiAgfVxuXG4gICZfX0xpc3QyIHtcblxuICAgIHdpZHRoOiAgMjMuMyU7XG4gICAgaGVpZ2h0OiAxNTBweDtcblxuICAgICZfX3BOYW1lIHt9XG4gIH1cblxuICAmX19MaXN0MyB7XG5cblxuICAgIHdpZHRoOiAgMjMuMyU7XG4gICAgaGVpZ2h0OiAxNTBweDtcblxuICAgICZfX3BOYW1lIHt9XG4gIH1cbn1cblxuLmluZm8ge1xuICAvLyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEgcmlnaHQ6MDtcbiAgcmlnaHQ6IDA7XG4gIC8vICAgICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEgcmlnaHQ6MDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMwJTtcblxufVxuXG4ubm9ybWFsIHtcbiAgY29sb3I6IGdhaW5zYm9ybztcbn1cblxuLmZpcmUge1xuICBjb2xvcjogZmlyZWJyaWNrO1xufVxuXG4uZmlnaHRpbmcge1xuICBjb2xvcjogZ3JheXNjYWxlKCRjb2xvcjogIzAwMDAwMClcbn1cblxuLndhdGVyIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5mbHlpbmcge1xuICBjb2xvcjogbGlnaHRibHVlO1xufVxuXG4uZ3Jhc3Mge1xuICBjb2xvcjogZ3JlZW4oJGNvbG9yOiAjMDAwMDAwKTtcbn1cblxuLnBvaXNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVsZWN0cmljIHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLmdyb3VuZCB7XG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xufVxuXG4ucHN5Y2hpYyB7XG4gIGNvbG9yOiBwYWxlZ3JlZW47XG59XG5cbi5yb2NrIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5pY2Uge1xuICBjb2xvcjogYmx1ZSgkY29sb3I6ICMwMDAwMDApO1xufVxuXG4uYnVnIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4uZHJhZ29uIHtcbiAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XG59XG5cbi5naG9zdCB7XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xufVxuXG4uZGFyayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnN0ZWVsIHtcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuLmZhaXJ5IHtcbiAgY29sb3I6IHB1cnBsZTtcbn1cblxuXG5pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5mbGV4ICoge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4vLyAg0YLRg9GCINGE0LvQtdC60YHQuCDRliDRgi7QtFxuLmJvcmRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwIDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggNHB4IDEzcHggMHB4IHJnYmEoMCwwLDAsMC44OCk7XG4tbW96LWJveC1zaGFkb3c6IDRweCA0cHggMTNweCAwcHggcmdiYSgwLDAsMCwwLjg4KTtcbmJveC1zaGFkb3c6IDRweCA0cHggMTNweCAwcHggcmdiYSgwLDAsMCwwLjg4KTtcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAvLyAuUG9rZW1vbnN7XG4gIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gfVxuICAvLyAuUG9rZW1vbnMgKntcbiAgLy8gICBtYXJnaW4tdG9wOiA0MCU7XG4gIC8vICAgbWFyZ2luLWJvdHRvbTogNDAlO1xuICAvLyB9XG59XG5cblxuXG4uYjF7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5cblxuLlR5cGVzIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDU2cHg7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTI4cHg7XG59XG5cbi5UeXBlczpob3ZlciAuVHlwZXMtYnV0dG9ucyB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5UeXBlczpob3ZlciAuVHlwZXMtYnV0dG9uc19fbGluayB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpIHNjYWxlWCgxKSB0cmFuc2xhdGVZKC0xNnB4KSB0cmFuc2xhdGVYKDBweCk7XG59XG5cbi5UeXBlcy1hY3Rpb24tYnV0dG9uOmhvdmVyKy5UeXBlcy1idXR0b25zIC5UeXBlcy1idXR0b25zX19saW5rOmJlZm9yZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlciAwO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4uVHlwZXMtYWN0aW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QjZGNjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5UeXBlcy1idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA1MHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLlR5cGVzLWFjdGlvbi1idXR0b25fX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNJalptWm1abVptSWlCb1pXbG5hSFE5SWpJMElpQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSGRwWkhSb1BTSXlOQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLSUNBZ0lEeHdZWFJvSUdROUlrMHdJREJvTWpSMk1qUklNSG9pSUdacGJHdzlJbTV2Ym1VaUx6NEtJQ0FnSUR4d1lYUm9JR1E5SWsweE9DQXhOaTR3T0dNdExqYzJJREF0TVM0ME5DNHpMVEV1T1RZdU56ZE1PQzQ1TVNBeE1pNDNZeTR3TlMwdU1qTXVNRGt0TGpRMkxqQTVMUzQzY3kwdU1EUXRMalEzTFM0d09TMHVOMnczTGpBMUxUUXVNVEZqTGpVMExqVWdNUzR5TlM0NE1TQXlMakEwTGpneElERXVOallnTUNBekxURXVNelFnTXkwemN5MHhMak0wTFRNdE15MHpMVE1nTVM0ek5DMHpJRE5qTUNBdU1qUXVNRFF1TkRjdU1Ea3VOMHc0TGpBMElEa3VPREZETnk0MUlEa3VNekVnTmk0M09TQTVJRFlnT1dNdE1TNDJOaUF3TFRNZ01TNHpOQzB6SUROek1TNHpOQ0F6SURNZ00yTXVOemtnTUNBeExqVXRMak14SURJdU1EUXRMamd4YkRjdU1USWdOQzR4Tm1NdExqQTFMakl4TFM0d09DNDBNeTB1TURndU5qVWdNQ0F4TGpZeElERXVNekVnTWk0NU1pQXlMamt5SURJdU9USWdNUzQyTVNBd0lESXVPVEl0TVM0ek1TQXlMamt5TFRJdU9USnpMVEV1TXpFdE1pNDVNaTB5TGpreUxUSXVPVEo2SWk4K0Nqd3ZjM1puUGc9PVwiKSBjZW50ZXIgbm8tcmVwZWF0O1xufVxuXG4uVHlwZXMtYnV0dG9uc19faXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTJweCAwO1xufVxuXG4uVHlwZXMtYnV0dG9uc19fbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KSBzY2FsZVgoMC41KSB0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgwcHgpO1xuICAtbW96LXRyYW5zaXRpb246IC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XG4gIC1vLXRyYW5zaXRpb246IC4zcztcbiAgdHJhbnNpdGlvbjogLjNzO1xufVxuXG5bZGF0YS10b29sdGlwXTpiZWZvcmUge1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogIzU4NTg1ODtcbiAgY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10b29sdGlwKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHJpZ2h0OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG59XG5cbltkYXRhLXRvb2x0aXBdOmhvdmVyOmJlZm9yZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlciAwO1xufVxuXG4uaWNvbi1tYXRlcmlhbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmljb24tbWF0ZXJpYWxfZmIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRZdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSWdkMmxrZEdnOUlqRTJjSGdpSUdobGFXZG9kRDBpTVRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1DQTFNVEFpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFV4TUNBMU1UQTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BHYytDZ2s4WnlCcFpEMGljRzl6ZEMxbVlXTmxZbTl2YXlJK0Nna0pQSEJoZEdnZ1pEMGlUVFExT1N3d1NEVXhRekl5TGprMUxEQXNNQ3d5TWk0NU5Td3dMRFV4ZGpRd09HTXdMREk0TGpBMUxESXlMamsxTERVeExEVXhMRFV4YURRd09HTXlPQzR3TlN3d0xEVXhMVEl5TGprMUxEVXhMVFV4VmpVeFF6VXhNQ3d5TWk0NU5TdzBPRGN1TURVc01DdzBOVGtzTUhvZ0lDQWdJRTAwTXpNdU5TdzFNWFkzTmk0MWFDMDFNV010TVRVdU15d3dMVEkxTGpVc01UQXVNaTB5TlM0MUxESTFMalYyTlRGb056WXVOWFkzTmk0MVNETTFOMVkwTlRsb0xUYzJMalZXTWpnd0xqVm9MVFV4VmpJd05HZzFNWFl0TmpNdU56VWdJQ0FnUXpJNE1DNDFMRGt4TGpnc016SXhMak1zTlRFc016WTVMamMxTERVeFNEUXpNeTQxZWlJZ1ptbHNiRDBpSXpjMU56VTNOU0l2UGdvSlBDOW5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0Nqd3ZjM1puUGdvPVwiKSBjZW50ZXIgbm8tcmVwZWF0O1xufVxuXG4uaWNvbi1tYXRlcmlhbF9ncCB7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVFl1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0Nqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0NqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlRMkZ3WVY4eElpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2QybGtkR2c5SWpFMmNIZ2lJR2hsYVdkb2REMGlNVFp3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TUNBMU1UQWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEVXhNQ0ExTVRBN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLUEdjK0NnazhaeUJwWkQwaWNHOXpkQzFuY0d4MWN5SStDZ2tKUEhCaGRHZ2daRDBpVFRJek5DNDJMREUzTlM0NU5XTXdMVEkxTGpVdE1UVXVNeTAzTmk0MUxUVXpMalUxTFRjMkxqVmpMVEUxTGpNc01DMHpNeTR4TlN3eE1DNHlMVE16TGpFMUxEUXpMak0xWXpBc016QXVOaXd4TlM0ekxEY3pMamsxTERVeExEY3pMamsxSUNBZ0lFTXhPVGd1T1N3eU1UWXVOelVzTWpNMExqWXNNakUwTGpJc01qTTBMallzTVRjMUxqazFlaUJOTWpFNUxqTXNNekF3TGpsakxUSXVOVFVzTUMwMUxqRXNNQzAzTGpZMUxEQnNNQ3d3WXkwM0xqWTFMREF0TXpBdU5pd3lMalUxTFRRMUxqa3NOeTQyTkRrZ0lDQWdRekUwTnk0NUxETXhNeTQyTlN3eE1qY3VOU3d6TWpZdU5Dd3hNamN1TlN3ek5URXVPV013TERJNExqQTFMREkxTGpVc05UWXVNU3czTmk0MUxEVTJMakZqTXpndU1qVXNNQ3cyTVM0eUxUSTFMalVzTmpFdU1pMDFNU0FnSUNCRE1qWTFMaklzTXpNNUxqRTFMREkxTWk0ME5Td3pNall1TkN3eU1Ua3VNeXd6TURBdU9Yb2dUVFExT1N3d1NEVXhRekl5TGprMUxEQXNNQ3d5TWk0NU5Td3dMRFV4ZGpRd09HTXdMREk0TGpBMUxESXlMamsxTERVeExEVXhMRFV4YURRd09HTXlPQzR3TlN3d0xEVXhMVEl5TGprMUxEVXhMVFV4SUNBZ0lGWTFNVU0xTVRBc01qSXVPVFVzTkRnM0xqQTFMREFzTkRVNUxEQjZJRTB4T0RFdU1EVXNORE00TGpaakxUY3hMalFzTUMweE1EUXVOVFV0TkRBdU9DMHhNRFF1TlRVdE56WXVOV013TFRFeUxqYzFMREl1TlRVdE5EQXVPQ3d6T0M0eU5TMDJNUzR4T1RrZ0lDQWdZekl3TGpRdE1USXVOelVzTkRVdU9TMHlNQzQwTERjNUxqQTFMVEl5TGprMVl5MDFMakV0TlM0eE1ERXROeTQyTlMweE1pNDNOUzAzTGpZMUxUSTFMalZqTUMwMUxqRXNNQzAzTGpZMUxESXVOVFV0TVRJdU56Vm9MVEV3TGpKakxUVXhMREF0T0RFdU5pMHpPQzR5TlMwNE1TNDJMVGMyTGpVZ0lDQWdZekF0TkRNdU16VXNNek11TVRVdE9URXVPQ3d4TURRdU5UVXRPVEV1T0dneE1EY3VNV3d0Tnk0Mk5Ea3NOeTQyTlV3eU9ETXVNRFVzT1RZdU9Xd3RNaTQxTlN3eUxqVTFhQzB4Tnk0NE5XTXhNQzR4T1Rrc01UQXVNaXd5TWk0NU5Ea3NNamd1TURVc01qSXVPVFE1TERVMkxqRWdJQ0FnWXpBc016VXVOeTB4Tnk0NE5TdzFNeTQxTlMwME1DNDRMRFk0TGpnMVl5MDFMakVzTWk0MU5TMHhNQzR5TERFd0xqSXRNVEF1TWl3eE55NDROWE0xTGpFc01USXVOelVzTVRBdU1pd3hOUzR6WXpJdU5UVXNNaTQxTlN3M0xqWTFMRFV1TVRBeExERXlMamMxTERjdU5qVWdJQ0FnWXpJd0xqUXNNVFV1TXl3ME9DNDBOU3d6TXk0eE5Ea3NORGd1TkRVc056TXVPVFZETXpBMkxETTROUzR3TlN3eU56SXVPRFVzTkRNNExqWXNNVGd4TGpBMUxEUXpPQzQyZWlCTk5ETXpMalVzTWpVMWFDMDFNWFkxTVVnek5UZDJMVFV4YUMwMU1YWXRNalV1TldnMU1YWXROVEZvTWpVdU5YWTFNU0FnSUNCb05URldNalUxZWlJZ1ptbHNiRDBpSXpjMU56VTNOU0l2UGdvSlBDOW5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0Nqd3ZjM1puUGdvPVwiKSBjZW50ZXIgbm8tcmVwZWF0O1xufVxuXG4uaWNvbi1tYXRlcmlhbF90dyB7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVFl1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0Nqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0NqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlRMkZ3WVY4eElpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2QybGtkR2c5SWpFMmNIZ2lJR2hsYVdkb2REMGlNVFp3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TUNBMU1UQWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEVXhNQ0ExTVRBN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLUEdjK0NnazhaeUJwWkQwaWNHOXpkQzEwZDJsMGRHVnlJajRLQ1FrOGNHRjBhQ0JrUFNKTk5EVTVMREJJTlRGRE1qSXVPVFVzTUN3d0xESXlMamsxTERBc05URjJOREE0WXpBc01qZ3VNRFVzTWpJdU9UVXNOVEVzTlRFc05URm9OREE0WXpJNExqQTFMREFzTlRFdE1qSXVPVFVzTlRFdE5URldOVEZETlRFd0xESXlMamsxTERRNE55NHdOU3d3TERRMU9Td3dlaUFnSUNBZ1RUUXdNQzR6TlN3eE9EWXVNVFZqTFRJdU5UVXNNVEUzTGpNdE56WXVOU3d4T1RndU9TMHhPRGd1Tnl3eU1EUkRNVFkxTGpjMUxETTVNaTQzTERFek1pNDJMRE0zTnk0MExERXdNaXd6TlRrdU5UVmpNek11TVRVc05TNHhNREVzTnpZdU5TMDNMalkwT1N3NU9TNDBOUzB5T0M0d05TQWdJQ0JqTFRNekxqRTFMVEl1TlRVdE5UTXVOVFV0TWpBdU5DMDJNeTQzTlMwME9DNDBOV014TUM0eUxESXVOVFVzTWpBdU5Dd3dMREk0TGpBMUxEQmpMVE13TGpZdE1UQXVNaTAxTVMweU9DNHdOUzAxTXk0MU5TMDJPQzQ0TldNM0xqWTFMRFV1TVN3eE55NDROU3czTGpZMUxESTRMakExTERjdU5qVWdJQ0FnWXkweU1pNDVOUzB4TWk0M05TMHpPQzR5TlMwMk1TNHlMVEl3TGpRdE9URXVPR016TXk0eE5Td3pOUzQzTERjekxqazFMRFkyTGpNc01UUXdMakkxTERjeExqUmpMVEUzTGpnMUxUY3hMalFzTnprdU1EVXhMVEV3T1M0Mk5Td3hNVGN1TXpBeExUWXhMaklnSUNBZ1l6RTNMamcxTFRJdU5UVXNNekF1TmkweE1DNHlMRFF6TGpNMUxURTFMak5qTFRVdU1Td3hOeTQ0TlMweE5TNHpMREk0TGpBMUxUSTRMakExTERNNExqSTFZekV5TGpjMUxUSXVOVFVzTWpVdU5TMDFMakVzTXpVdU55MHhNQzR5SUNBZ0lFTTBNalV1T0RVc01UWTFMamMxTERReE15NHhMREUzTlM0NU5TdzBNREF1TXpVc01UZzJMakUxZWlJZ1ptbHNiRDBpSXpjMU56VTNOU0l2UGdvSlBDOW5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0Nqd3ZjM1puUGdvPVwiKSBjZW50ZXIgbm8tcmVwZWF0O1xufVxuXG4uaWNvbi1tYXRlcmlhbF9saSB7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVFl1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0Nqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0NqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlRMkZ3WVY4eElpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2QybGtkR2c5SWpFMmNIZ2lJR2hsYVdkb2REMGlNVFp3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TUNBMU1UQWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEVXhNQ0ExTVRBN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLUEdjK0NnazhaeUJwWkQwaWNHOXpkQzFzYVc1clpXUnBiaUkrQ2drSlBIQmhkR2dnWkQwaVRUUTFPU3d3U0RVeFF6SXlMamsxTERBc01Dd3lNaTQ1TlN3d0xEVXhkalF3T0dNd0xESTRMakExTERJeUxqazFMRFV4TERVeExEVXhhRFF3T0dNeU9DNHdOU3d3TERVeExUSXlMamsxTERVeExUVXhWalV4UXpVeE1Dd3lNaTQ1TlN3ME9EY3VNRFVzTUN3ME5Ua3NNSG9nSUNBZ0lFMHhOVE1zTkRNekxqVklOell1TlZZeU1EUklNVFV6VmpRek15NDFlaUJOTVRFMExqYzFMREUyTUM0Mk5XTXRNalV1TlN3d0xUUTFMamt0TWpBdU5DMDBOUzQ1TFRRMUxqbHpNakF1TkMwME5TNDVMRFExTGprdE5EVXVPWE0wTlM0NUxESXdMalFzTkRVdU9TdzBOUzQ1SUNBZ0lGTXhOREF1TWpVc01UWXdMalkxTERFeE5DNDNOU3d4TmpBdU5qVjZJRTAwTXpNdU5TdzBNek11TlVnek5UZFdNams0TGpNMVl6QXRNakF1TXprNUxURTNMamcxTFRNNExqSTFMVE00TGpJMUxUTTRMakkxY3kwek9DNHlOU3d4Tnk0NE5URXRNemd1TWpVc016Z3VNalZXTkRNekxqVklNakEwSUNBZ0lGWXlNRFJvTnpZdU5YWXpNQzQyWXpFeUxqYzFMVEl3TGpRc05EQXVPQzB6TlM0M0xEWXpMamMxTFRNMUxqZGpORGd1TkRVc01DdzRPUzR5TlN3ME1DNDRMRGc1TGpJMUxEZzVMakkxVmpRek15NDFlaUlnWm1sc2JEMGlJemMxTnpVM05TSXZQZ29KUEM5blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p3dmMzWm5QZ289XCIpIGNlbnRlciBuby1yZXBlYXQ7XG59XG4iLCIubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5Qb2tlbW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDcwJTtcbn1cbi5Qb2tlbW9uc19fTGlzdDEge1xuICB3aWR0aDogMjMuMyU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uUG9rZW1vbnNfX0xpc3QyIHtcbiAgd2lkdGg6IDIzLjMlO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLlBva2Vtb25zX19MaXN0MyB7XG4gIHdpZHRoOiAyMy4zJTtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5pbmZvIHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5ub3JtYWwge1xuICBjb2xvcjogZ2FpbnNib3JvO1xufVxuXG4uZmlyZSB7XG4gIGNvbG9yOiBmaXJlYnJpY2s7XG59XG5cbi5maWdodGluZyB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLndhdGVyIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5mbHlpbmcge1xuICBjb2xvcjogbGlnaHRibHVlO1xufVxuXG4uZ3Jhc3Mge1xuICBjb2xvcjogMDtcbn1cblxuLnBvaXNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVsZWN0cmljIHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuLmdyb3VuZCB7XG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xufVxuXG4ucHN5Y2hpYyB7XG4gIGNvbG9yOiBwYWxlZ3JlZW47XG59XG5cbi5yb2NrIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5pY2Uge1xuICBjb2xvcjogMDtcbn1cblxuLmJ1ZyB7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLmRyYWdvbiB7XG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xufVxuXG4uZ2hvc3Qge1xuICBjb2xvcjogZ2hvc3R3aGl0ZTtcbn1cblxuLmRhcmsge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zdGVlbCB7XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbi5mYWlyeSB7XG4gIGNvbG9yOiBwdXJwbGU7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXggKiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5ib3JkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggNHB4IDEzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC44OCk7XG4gIC1tb3otYm94LXNoYWRvdzogNHB4IDRweCAxM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuODgpO1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC44OCk7XG59XG5cbi5iMSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uVHlwZXMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDU2cHg7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTI4cHg7XG59XG5cbi5UeXBlczpob3ZlciAuVHlwZXMtYnV0dG9ucyB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5UeXBlczpob3ZlciAuVHlwZXMtYnV0dG9uc19fbGluayB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpIHNjYWxlWCgxKSB0cmFuc2xhdGVZKC0xNnB4KSB0cmFuc2xhdGVYKDBweCk7XG59XG5cbi5UeXBlcy1hY3Rpb24tYnV0dG9uOmhvdmVyICsgLlR5cGVzLWJ1dHRvbnMgLlR5cGVzLWJ1dHRvbnNfX2xpbms6YmVmb3JlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyIDA7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5UeXBlcy1hY3Rpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlCNkY2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLlR5cGVzLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDUwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uVHlwZXMtYWN0aW9uLWJ1dHRvbl9faWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCbWFXeHNQU0lqWm1abVptWm1JaUJvWldsbmFIUTlJakkwSWlCMmFXVjNRbTk0UFNJd0lEQWdNalFnTWpRaUlIZHBaSFJvUFNJeU5DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtJQ0FnSUR4d1lYUm9JR1E5SWswd0lEQm9NalIyTWpSSU1Ib2lJR1pwYkd3OUltNXZibVVpTHo0S0lDQWdJRHh3WVhSb0lHUTlJazB4T0NBeE5pNHdPR010TGpjMklEQXRNUzQwTkM0ekxURXVPVFl1TnpkTU9DNDVNU0F4TWk0M1l5NHdOUzB1TWpNdU1Ea3RMalEyTGpBNUxTNDNjeTB1TURRdExqUTNMUzR3T1MwdU4ydzNMakExTFRRdU1URmpMalUwTGpVZ01TNHlOUzQ0TVNBeUxqQTBMamd4SURFdU5qWWdNQ0F6TFRFdU16UWdNeTB6Y3kweExqTTBMVE10TXkwekxUTWdNUzR6TkMweklETmpNQ0F1TWpRdU1EUXVORGN1TURrdU4wdzRMakEwSURrdU9ERkROeTQxSURrdU16RWdOaTQzT1NBNUlEWWdPV010TVM0Mk5pQXdMVE1nTVM0ek5DMHpJRE56TVM0ek5DQXpJRE1nTTJNdU56a2dNQ0F4TGpVdExqTXhJREl1TURRdExqZ3hiRGN1TVRJZ05DNHhObU10TGpBMUxqSXhMUzR3T0M0ME15MHVNRGd1TmpVZ01DQXhMall4SURFdU16RWdNaTQ1TWlBeUxqa3lJREl1T1RJZ01TNDJNU0F3SURJdU9USXRNUzR6TVNBeUxqa3lMVEl1T1RKekxURXVNekV0TWk0NU1pMHlMamt5TFRJdU9USjZJaTgrQ2p3dmMzWm5QZz09XCIpIGNlbnRlciBuby1yZXBlYXQ7XG59XG5cbi5UeXBlcy1idXR0b25zX19pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi5UeXBlcy1idXR0b25zX19saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpIHNjYWxlWCgwLjUpIHRyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKDBweCk7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5bZGF0YS10b29sdGlwXTpiZWZvcmUge1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogIzU4NTg1ODtcbiAgY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10b29sdGlwKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHJpZ2h0OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuXG5bZGF0YS10b29sdGlwXTpob3ZlcjpiZWZvcmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXIgMDtcbn1cblxuLmljb24tbWF0ZXJpYWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pY29uLW1hdGVyaWFsX2ZiIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01UWXVNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVEyRndZVjh4SWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lnZDJsa2RHZzlJakUyY0hnaUlHaGxhV2RvZEQwaU1UWndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lEVXhNQ0ExTVRBaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVeE1DQTFNVEE3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQR2MrQ2drOFp5QnBaRDBpY0c5emRDMW1ZV05sWW05dmF5SStDZ2tKUEhCaGRHZ2daRDBpVFRRMU9Td3dTRFV4UXpJeUxqazFMREFzTUN3eU1pNDVOU3d3TERVeGRqUXdPR013TERJNExqQTFMREl5TGprMUxEVXhMRFV4TERVeGFEUXdPR015T0M0d05Td3dMRFV4TFRJeUxqazFMRFV4TFRVeFZqVXhRelV4TUN3eU1pNDVOU3cwT0RjdU1EVXNNQ3cwTlRrc01Ib2dJQ0FnSUUwME16TXVOU3cxTVhZM05pNDFhQzAxTVdNdE1UVXVNeXd3TFRJMUxqVXNNVEF1TWkweU5TNDFMREkxTGpWMk5URm9Oell1TlhZM05pNDFTRE0xTjFZME5UbG9MVGMyTGpWV01qZ3dMalZvTFRVeFZqSXdOR2cxTVhZdE5qTXVOelVnSUNBZ1F6STRNQzQxTERreExqZ3NNekl4TGpNc05URXNNelk1TGpjMUxEVXhTRFF6TXk0MWVpSWdabWxzYkQwaUl6YzFOelUzTlNJdlBnb0pQQzluUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDand2YzNablBnbz1cIikgY2VudGVyIG5vLXJlcGVhdDtcbn1cblxuLmljb24tbWF0ZXJpYWxfZ3Age1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRZdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSWdkMmxrZEdnOUlqRTJjSGdpSUdobGFXZG9kRDBpTVRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1DQTFNVEFpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFV4TUNBMU1UQTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BHYytDZ2s4WnlCcFpEMGljRzl6ZEMxbmNHeDFjeUkrQ2drSlBIQmhkR2dnWkQwaVRUSXpOQzQyTERFM05TNDVOV013TFRJMUxqVXRNVFV1TXkwM05pNDFMVFV6TGpVMUxUYzJMalZqTFRFMUxqTXNNQzB6TXk0eE5Td3hNQzR5TFRNekxqRTFMRFF6TGpNMVl6QXNNekF1Tml3eE5TNHpMRGN6TGprMUxEVXhMRGN6TGprMUlDQWdJRU14T1RndU9Td3lNVFl1TnpVc01qTTBMallzTWpFMExqSXNNak0wTGpZc01UYzFMamsxZWlCTk1qRTVMak1zTXpBd0xqbGpMVEl1TlRVc01DMDFMakVzTUMwM0xqWTFMREJzTUN3d1l5MDNMalkxTERBdE16QXVOaXd5TGpVMUxUUTFMamtzTnk0Mk5Ea2dJQ0FnUXpFME55NDVMRE14TXk0Mk5Td3hNamN1TlN3ek1qWXVOQ3d4TWpjdU5Td3pOVEV1T1dNd0xESTRMakExTERJMUxqVXNOVFl1TVN3M05pNDFMRFUyTGpGak16Z3VNalVzTUN3Mk1TNHlMVEkxTGpVc05qRXVNaTAxTVNBZ0lDQkRNalkxTGpJc016TTVMakUxTERJMU1pNDBOU3d6TWpZdU5Dd3lNVGt1TXl3ek1EQXVPWG9nVFRRMU9Td3dTRFV4UXpJeUxqazFMREFzTUN3eU1pNDVOU3d3TERVeGRqUXdPR013TERJNExqQTFMREl5TGprMUxEVXhMRFV4TERVeGFEUXdPR015T0M0d05Td3dMRFV4TFRJeUxqazFMRFV4TFRVeElDQWdJRlkxTVVNMU1UQXNNakl1T1RVc05EZzNMakExTERBc05EVTVMREI2SUUweE9ERXVNRFVzTkRNNExqWmpMVGN4TGpRc01DMHhNRFF1TlRVdE5EQXVPQzB4TURRdU5UVXROell1TldNd0xURXlMamMxTERJdU5UVXROREF1T0N3ek9DNHlOUzAyTVM0eE9Ua2dJQ0FnWXpJd0xqUXRNVEl1TnpVc05EVXVPUzB5TUM0MExEYzVMakExTFRJeUxqazFZeTAxTGpFdE5TNHhNREV0Tnk0Mk5TMHhNaTQzTlMwM0xqWTFMVEkxTGpWak1DMDFMakVzTUMwM0xqWTFMREl1TlRVdE1USXVOelZvTFRFd0xqSmpMVFV4TERBdE9ERXVOaTB6T0M0eU5TMDRNUzQyTFRjMkxqVWdJQ0FnWXpBdE5ETXVNelVzTXpNdU1UVXRPVEV1T0N3eE1EUXVOVFV0T1RFdU9HZ3hNRGN1TVd3dE55NDJORGtzTnk0Mk5Vd3lPRE11TURVc09UWXVPV3d0TWk0MU5Td3lMalUxYUMweE55NDROV014TUM0eE9Ua3NNVEF1TWl3eU1pNDVORGtzTWpndU1EVXNNakl1T1RRNUxEVTJMakVnSUNBZ1l6QXNNelV1TnkweE55NDROU3cxTXk0MU5TMDBNQzQ0TERZNExqZzFZeTAxTGpFc01pNDFOUzB4TUM0eUxERXdMakl0TVRBdU1pd3hOeTQ0TlhNMUxqRXNNVEl1TnpVc01UQXVNaXd4TlM0ell6SXVOVFVzTWk0MU5TdzNMalkxTERVdU1UQXhMREV5TGpjMUxEY3VOalVnSUNBZ1l6SXdMalFzTVRVdU15dzBPQzQwTlN3ek15NHhORGtzTkRndU5EVXNOek11T1RWRE16QTJMRE00TlM0d05Td3lOekl1T0RVc05ETTRMallzTVRneExqQTFMRFF6T0M0MmVpQk5ORE16TGpVc01qVTFhQzAxTVhZMU1VZ3pOVGQyTFRVeGFDMDFNWFl0TWpVdU5XZzFNWFl0TlRGb01qVXVOWFkxTVNBZ0lDQm9OVEZXTWpVMWVpSWdabWxzYkQwaUl6YzFOelUzTlNJdlBnb0pQQzluUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDand2YzNablBnbz1cIikgY2VudGVyIG5vLXJlcGVhdDtcbn1cblxuLmljb24tbWF0ZXJpYWxfdHcge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRZdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSWdkMmxrZEdnOUlqRTJjSGdpSUdobGFXZG9kRDBpTVRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1DQTFNVEFpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFV4TUNBMU1UQTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BHYytDZ2s4WnlCcFpEMGljRzl6ZEMxMGQybDBkR1Z5SWo0S0NRazhjR0YwYUNCa1BTSk5ORFU1TERCSU5URkRNakl1T1RVc01Dd3dMREl5TGprMUxEQXNOVEYyTkRBNFl6QXNNamd1TURVc01qSXVPVFVzTlRFc05URXNOVEZvTkRBNFl6STRMakExTERBc05URXRNakl1T1RVc05URXROVEZXTlRGRE5URXdMREl5TGprMUxEUTROeTR3TlN3d0xEUTFPU3d3ZWlBZ0lDQWdUVFF3TUM0ek5Td3hPRFl1TVRWakxUSXVOVFVzTVRFM0xqTXROell1TlN3eE9UZ3VPUzB4T0RndU55d3lNRFJETVRZMUxqYzFMRE01TWk0M0xERXpNaTQyTERNM055NDBMREV3TWl3ek5Ua3VOVFZqTXpNdU1UVXNOUzR4TURFc056WXVOUzAzTGpZME9TdzVPUzQwTlMweU9DNHdOU0FnSUNCakxUTXpMakUxTFRJdU5UVXROVE11TlRVdE1qQXVOQzAyTXk0M05TMDBPQzQwTldNeE1DNHlMREl1TlRVc01qQXVOQ3d3TERJNExqQTFMREJqTFRNd0xqWXRNVEF1TWkwMU1TMHlPQzR3TlMwMU15NDFOUzAyT0M0NE5XTTNMalkxTERVdU1Td3hOeTQ0TlN3M0xqWTFMREk0TGpBMUxEY3VOalVnSUNBZ1l5MHlNaTQ1TlMweE1pNDNOUzB6T0M0eU5TMDJNUzR5TFRJd0xqUXRPVEV1T0dNek15NHhOU3d6TlM0M0xEY3pMamsxTERZMkxqTXNNVFF3TGpJMUxEY3hMalJqTFRFM0xqZzFMVGN4TGpRc056a3VNRFV4TFRFd09TNDJOU3d4TVRjdU16QXhMVFl4TGpJZ0lDQWdZekUzTGpnMUxUSXVOVFVzTXpBdU5pMHhNQzR5TERRekxqTTFMVEUxTGpOakxUVXVNU3d4Tnk0NE5TMHhOUzR6TERJNExqQTFMVEk0TGpBMUxETTRMakkxWXpFeUxqYzFMVEl1TlRVc01qVXVOUzAxTGpFc016VXVOeTB4TUM0eUlDQWdJRU0wTWpVdU9EVXNNVFkxTGpjMUxEUXhNeTR4TERFM05TNDVOU3cwTURBdU16VXNNVGcyTGpFMWVpSWdabWxzYkQwaUl6YzFOelUzTlNJdlBnb0pQQzluUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDand2YzNablBnbz1cIikgY2VudGVyIG5vLXJlcGVhdDtcbn1cblxuLmljb24tbWF0ZXJpYWxfbGkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRZdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSWdkMmxrZEdnOUlqRTJjSGdpSUdobGFXZG9kRDBpTVRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURVeE1DQTFNVEFpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFV4TUNBMU1UQTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BHYytDZ2s4WnlCcFpEMGljRzl6ZEMxc2FXNXJaV1JwYmlJK0Nna0pQSEJoZEdnZ1pEMGlUVFExT1N3d1NEVXhRekl5TGprMUxEQXNNQ3d5TWk0NU5Td3dMRFV4ZGpRd09HTXdMREk0TGpBMUxESXlMamsxTERVeExEVXhMRFV4YURRd09HTXlPQzR3TlN3d0xEVXhMVEl5TGprMUxEVXhMVFV4VmpVeFF6VXhNQ3d5TWk0NU5TdzBPRGN1TURVc01DdzBOVGtzTUhvZ0lDQWdJRTB4TlRNc05ETXpMalZJTnpZdU5WWXlNRFJJTVRVelZqUXpNeTQxZWlCTk1URTBMamMxTERFMk1DNDJOV010TWpVdU5Td3dMVFExTGprdE1qQXVOQzAwTlM0NUxUUTFMamx6TWpBdU5DMDBOUzQ1TERRMUxqa3RORFV1T1hNME5TNDVMREl3TGpRc05EVXVPU3cwTlM0NUlDQWdJRk14TkRBdU1qVXNNVFl3TGpZMUxERXhOQzQzTlN3eE5qQXVOalY2SUUwME16TXVOU3cwTXpNdU5VZ3pOVGRXTWprNExqTTFZekF0TWpBdU16azVMVEUzTGpnMUxUTTRMakkxTFRNNExqSTFMVE00TGpJMWN5MHpPQzR5TlN3eE55NDROVEV0TXpndU1qVXNNemd1TWpWV05ETXpMalZJTWpBMElDQWdJRll5TURSb056WXVOWFl6TUM0Mll6RXlMamMxTFRJd0xqUXNOREF1T0Mwek5TNDNMRFl6TGpjMUxUTTFMamRqTkRndU5EVXNNQ3c0T1M0eU5TdzBNQzQ0TERnNUxqSTFMRGc1TGpJMVZqUXpNeTQxZWlJZ1ptbHNiRDBpSXpjMU56VTNOU0l2UGdvSlBDOW5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0Nqd3ZjM1puUGdvPVwiKSBjZW50ZXIgbm8tcmVwZWF0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllPokemonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-pokemons',
          templateUrl: './all-pokemons.component.html',
          styleUrls: ['./all-pokemons.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_all_pokemons_service__WEBPACK_IMPORTED_MODULE_1__["AllPokemonsService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/all-pokemons.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/all-pokemons.service.ts ***!
    \**************************************************/

  /*! exports provided: AllPokemonsService */

  /***/
  function srcAppServicesAllPokemonsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllPokemonsService", function () {
      return AllPokemonsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AllPokemonsService =
    /*#__PURE__*/
    function () {
      function AllPokemonsService(http) {
        _classCallCheck(this, AllPokemonsService);

        this.http = http;
        this.n = 151;
      }

      _createClass(AllPokemonsService, [{
        key: "getAllPokemons",
        value: function getAllPokemons() {
          return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(this.n)); //     this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.n}`).subscribe(json => console.log('hehe' , json.results.forEach(element => {
          //     console.log(element)
          //     this.results = element
          //     // this.htmlToAdd +=  `<div class="something" > ${ element.url}  </div>  `
          //     console.log('elem.id' , element.id)
          //     // this.element1 = element
          //     console.log('this.url' , element.url)
          //     // this.input =  element.url;
          //     // this. input = this.input.slice(34, -1);
          //     // this.input.substring(this.input.length() - 4);
          // // console.log(this.input);
          // // index = str; 
          //     })))
          //   return   this.element.url
          //   }
        }
      }, {
        key: "getAllTypes",
        value: function getAllTypes() {
          return this.http.get("https://pokeapi.co/api/v2/type/?limit=999");
        }
      }]);

      return AllPokemonsService;
    }();

    AllPokemonsService.ɵfac = function AllPokemonsService_Factory(t) {
      return new (t || AllPokemonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AllPokemonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AllPokemonsService,
      factory: AllPokemonsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllPokemonsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\555\Desktop\AP\Pokemons\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map