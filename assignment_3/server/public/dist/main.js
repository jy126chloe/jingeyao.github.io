"use strict";
(self["webpackChunkstock_search"] = self["webpackChunkstock_search"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _component_search_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/search/search.component */ 4874);
/* harmony import */ var _component_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/recommend/recommend.component */ 7964);
/* harmony import */ var _component_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/watchlist/watchlist.component */ 3184);
/* harmony import */ var _component_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/portfolio/portfolio.component */ 1060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  redirectTo: '/search',
  pathMatch: 'full'
}, {
  path: 'search',
  component: _component_search_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent,
  children: [{
    path: ':ticker',
    component: _component_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_1__.RecommendComponent
  }, {
    path: 'home',
    component: _component_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_1__.RecommendComponent
  }]
}, {
  path: 'watchlist',
  component: _component_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__.WatchlistComponent
}, {
  path: 'portfolio',
  component: _component_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
      useHash: false
    }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/footer/footer.component */ 652);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/header/header.component */ 7264);




class AppComponent {
  constructor() {
    this.title = 'stock_search';
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _component_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ 6100);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _component_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/search/search.component */ 4874);
/* harmony import */ var _component_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/recommend/recommend.component */ 7964);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/footer/footer.component */ 652);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/header/header.component */ 7264);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! highcharts-angular */ 1769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_15__.HighchartsChartModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _component_search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, _component_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_4__.RecommendComponent, _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _component_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_15__.HighchartsChartModule]
  });
})();

/***/ }),

/***/ 6100:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AppService {
  static #_ = this.ɵfac = function AppService_Factory(t) {
    return new (t || AppService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AppService,
    factory: AppService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 652:
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 5,
    vars: 0,
    consts: [[1, "bg-dark-subtle", "text-center", "py-3", "fixed-bottom"], ["href", "https://Finnhub.io"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Finnhub.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7264:
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const _c0 = () => ["/search"];
const _c1 = () => ["/watchlist"];
const _c2 = () => ["/portfolio"];
class HeaderComponent {
  constructor() {
    this.activeTab = '';
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 17,
    vars: 6,
    consts: [["aria-label", "Main navigation", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-blue", 2, "background-color", "#1c279d"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapseContent", "aria-controls", "navbarCollapseContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapseContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["aria-current", "page", "routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stock Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() {
          return ctx.setActiveTab("search");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() {
          return ctx.setActiveTab("watchlist");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Watchlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7)(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
          return ctx.setActiveTab("portfolio");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: [".nav-link[_ngcontent-%COMP%]:hover {\n    border: 0.5px solid white;\n    border-radius: 5px;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbms6aG92ZXIge1xuICAgIGJvcmRlcjogMC41cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1060:
/*!************************************************************!*\
  !*** ./src/app/component/portfolio/portfolio.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioComponent: () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_service_new_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/new.service */ 8089);





function PortfolioComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.successClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.currentPortfolio == null ? null : ctx_r1.currentPortfolio.ticker, " ", ctx_r1.buySuccess, " Successfully! ");
  }
}
function PortfolioComponent_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Money in Wallet: $", ctx_r1.walletmoney, "");
  }
}
function PortfolioComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 27)(2, "div", 28)(3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Currently you don't have any stock. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function PortfolioComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function PortfolioComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "ul", 39)(3, "li", 40)(4, "div", 41)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 42)(10, "div", 43)(11, "div", 44)(12, "div", 45)(13, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 45)(16, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 45)(19, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Change:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 47)(22, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 45)(25, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Avg.Cost / Share:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 45)(28, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 45)(31, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Current Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 45)(34, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 45)(37, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Total Cost:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 45)(40, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 45)(43, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Market Value:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 45)(46, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 49)(49, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_div_8_div_1_Template_button_click_49_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      const quantity_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.buyModal(i_r4, quantity_r5.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_div_8_div_1_Template_button_click_52_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      const quantitysell_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.buyModal(i_r4, quantitysell_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r7.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.change);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.avg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r7.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.currentPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", item_r7.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.marketValue);
  }
}
function PortfolioComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortfolioComponent_div_8_div_1_Template, 54, 11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.portfolio);
  }
}
function PortfolioComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.currentPortfolio == null ? null : ctx_r1.currentPortfolio.ticker, " ");
  }
}
function PortfolioComponent_h4_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current Price: ", ctx_r1.currentPortfolio == null ? null : ctx_r1.currentPortfolio.currentPrice, "");
  }
}
function PortfolioComponent_h4_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Money in Wallet: ", ctx_r1.walletmoney, "");
  }
}
function PortfolioComponent_h4_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not Enough Money in Wallet! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PortfolioComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.currentPortfolio == null ? null : ctx_r1.currentPortfolio.ticker, " ");
  }
}
function PortfolioComponent_h4_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current Price: ", ctx_r1.currentPortfolio == null ? null : ctx_r1.currentPortfolio.currentPrice, "");
  }
}
function PortfolioComponent_h4_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Money in Wallet: ", ctx_r1.walletmoney, "");
  }
}
function PortfolioComponent_h4_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You can not sell the stocks that you don't have! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class PortfolioComponent {
  constructor(service) {
    this.service = service;
    this.objectKeys = Object.keys;
    this.buyList = [];
    this.walletmoney = -1;
    this.portfolio = [];
    this.portfolioKey = [];
    this.isLoading = true;
    this.buyTicker = '';
    this.buyResult = false;
    this.buySuccess = 'Bought';
    this.successClass = 'alert-success';
    this.bsInput = 0;
    this.currentPortfolio = {};
    this.boughtQuantity = 0;
    this.boughtTotal = 0;
    this.inputBuyQuantity = 0;
    this.sellTotal = 0;
  }
  ngOnInit() {
    const options = {
      documentName: 'wallet',
      params: {}
    };
    const Promise = this.service.getData(options);
    Promise.then(result => {
      if (result.length == 0) {
        const options = {
          documentName: 'wallet',
          params: {
            money: 25000
          }
        };
        const savePromise = this.service.createDataI(options);
        savePromise.then(results => {
          this.walletmoney = 25000;
        }).catch(err => {
          throw err;
        });
      } else {
        this.walletmoney = parseFloat(result[0].money);
        this.updateportfolio();
      }
    }).catch(err => {
      throw err;
    });
  }
  updateportfolio() {
    this.isLoading = true;
    this.portfolio = [];
    let optionsPf = {
      documentName: 'portfolio',
      params: {}
    };
    const PromisePf = this.service.getData(optionsPf);
    PromisePf.then(result => {
      if (result?.length == 0) {
        this.portfolio = result;
        this.isLoading = false;
        this.noPortfolio = true;
        return;
      }
      this.buyList = result;
      let z = 0;
      result.forEach((v, i) => {
        this.portfolio[i] = {
          _id: v._id,
          ticker: v.ticker,
          name: v.name,
          quantity: v.quantity,
          total: parseFloat(v.total.toFixed(2)),
          avg: parseFloat((parseFloat(v.total.toFixed(2)) / parseFloat(v.quantity)).toFixed(2))
        };
        //finnhub quote
        const promiseQuote = this.service.finnhubQuote({
          key: v.ticker
        });
        promiseQuote.then(resultq => {
          this.portfolio[i].currentPrice = parseFloat(resultq.c.toFixed(2));
          this.portfolio[i].change = parseFloat((this.portfolio[i].avg - this.portfolio[i].currentPrice).toFixed(2));
          this.portfolio[i].marketValue = parseFloat((this.portfolio[i].currentPrice * this.portfolio[i].quantity).toFixed(2));
          if (this.portfolio[i].currentPrice > this.portfolio[i].avg) {
            this.portfolio[i].class = 'text-success';
          } else if (this.portfolio[i].currentPrice == this.portfolio[i].avg) {
            this.portfolio[i].class = 'text-dark';
          } else {
            this.portfolio[i].class = 'text-danger';
          }
          z += 1;
          this.isLoading = z === this.portfolio.length ? false : true;
        }).catch(err => {
          throw err;
        });
      });
    }).catch(err => {
      throw err;
    });
  }
  buyModal(i, quantity) {
    this.inputBuyQuantity = parseInt(quantity);
    if (this.currentPortfolio.ticker !== this.portfolio[i].ticker && Object.keys(this.currentPortfolio).length > 0) {
      this.buytotal = parseFloat((this.portfolio[i].currentPrice * this.inputBuyQuantity).toFixed(2));
      this.sellTotal = parseFloat((this.portfolio[i].currentPrice * this.inputBuyQuantity).toFixed(2));
      this.sellButtonDisabled = this.portfolio[i]?.quantity < this.inputBuyQuantity || this.sellTotal == 0 ? true : false;
    }
    this.currentPortfolio = this.portfolio[i];
    this.boughtTotal += this.portfolio[i].total;
    this.boughtQuantity += this.portfolio[i].quantity;
    this.buySuccess = "bought";
  }
  // calculate stock when purchase
  calculateBuyQuantity(quantity) {
    quantity = parseInt(quantity);
    this.buytotal = parseFloat((this.currentPortfolio.currentPrice * parseFloat(quantity)).toFixed(2));
    this.buytotal = isNaN(this.buytotal) ? 0 : this.buytotal;
  }
  // calculate stock when sell
  calculateSellQuantity(quantity) {
    this.sellTotal = parseFloat((this.currentPortfolio.currentPrice * parseFloat(quantity)).toFixed(2));
    this.sellTotal = isNaN(this.sellTotal) ? 0 : this.sellTotal;
    this.sellButtonDisabled = this.currentPortfolio?.quantity < parseFloat(quantity) || this.sellTotal == 0 ? true : false;
  }
  buy(quantity) {
    quantity = parseInt(quantity);
    var options = {
      documentName: 'portfolio',
      data: {
        quantity: quantity + this.currentPortfolio.quantity,
        pricevw: ((this.buytotal + this.currentPortfolio.total) / (quantity + this.currentPortfolio.quantity)).toFixed(2),
        total: parseFloat((this.buytotal + this.currentPortfolio.total).toFixed(2))
      },
      filter: {
        _id: this.currentPortfolio._id
      }
    };
    const Promise = this.service.updateOne(options);
    Promise.then(results => {
      this.boughtQuantity = options.data.quantity;
      this.boughtTotal = options.data.total;
      let optionsWallet = {
        documentName: 'wallet',
        params: {
          money: parseFloat((this.walletmoney - this.buytotal).toFixed(2))
        }
      };
      const savePromise = this.service.updateData(optionsWallet);
      savePromise.then(results => {
        this.buySuccess = "Bought";
        this.buyResult = results == "ok" ? true : false;
        this.walletmoney = optionsWallet.params.money;
        this.updateportfolio();
        let timer = null;
        timer = setTimeout(() => {
          this.buyResult = false;
        }, 5000);
      });
    }).catch(err => {
      throw err;
    });
  }
  sell(quantity) {
    quantity = parseInt(quantity);
    if (this.currentPortfolio.quantity > quantity) {
      var options = {
        documentName: 'portfolio',
        data: {
          quantity: this.currentPortfolio.quantity - quantity,
          total: parseFloat((this.currentPortfolio.total - this.sellTotal).toFixed(2))
        },
        filter: {
          _id: this.currentPortfolio._id
        }
      };
      const Promise = this.service.updateOne(options);
      Promise.then(results => {
        let optionsWallet = {
          documentName: 'wallet',
          params: {
            money: parseFloat((this.walletmoney + this.sellTotal).toFixed(2))
          }
        };
        const savePromise = this.service.updateData(optionsWallet);
        savePromise.then(results => {
          this.buySuccess = "Sold";
          this.boughtTotal = 0;
          this.currentPortfolio.quantity = this.boughtQuantity = options.data.quantity;
          this.currentPortfolio.total = this.boughtTotal = options.data.total;
          this.sellButtonDisabled = null;
          this.walletmoney = optionsWallet.params.money;
          this.buyResult = results == "ok" ? true : false;
          this.updateportfolio();
          let timer = null;
          timer = setTimeout(() => {
            this.buyResult = false;
          }, 5000);
        });
      }).catch(err => {
        throw err;
      });
    } else if (this.currentPortfolio.quantity == quantity) {
      let params = {
        ticker: this.currentPortfolio.ticker
      };
      const options = {
        documentName: 'portfolio',
        params: params
      };
      const savePromise = this.service.deleteData(options);
      savePromise.then(results => {
        this.buyResult = results == "ok" ? true : false;
        if (this.buyResult === true) {
          let optionsWallet = {
            documentName: 'wallet',
            params: {
              money: parseFloat((this.walletmoney + this.sellTotal).toFixed(2))
            }
          };
          const savePromise = this.service.updateData(optionsWallet);
          savePromise.then(results => {
            this.buySuccess = "Sold";
            this.boughtTotal = 0;
            this.currentPortfolio.quantity = this.boughtQuantity = 0;
            this.currentPortfolio.total = this.boughtTotal = 0;
            this.sellButtonDisabled = null;
            this.walletmoney = optionsWallet.params.money;
            this.buyResult = results == "ok" ? true : false;
            this.updateportfolio();
            let timer = null;
            timer = setTimeout(() => {
              this.buyResult = false;
            }, 5000);
          });
        }
      }).catch(err => {
        throw err;
      });
    }
  }
  static #_ = this.ɵfac = function PortfolioComponent_Factory(t) {
    return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_new_service__WEBPACK_IMPORTED_MODULE_0__.NewService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PortfolioComponent,
    selectors: [["app-portfolio"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 56,
    vars: 31,
    consts: [["quantity", ""], ["quantitysell", ""], ["class", "container-fluid custom-container", "style", "padding-top: 20px;", 4, "ngIf"], [1, "container-fluid", "container"], [1, "custom-margin"], [4, "ngIf"], ["class", "container-fluid custom-container", 4, "ngIf"], ["class", "container d-flex justify-content-center align-items-center", "style", "min-height: 50vh;", 4, "ngIf"], ["id", "buyModal", "tabindex", "-1", "aria-labelledby", "buyModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], ["class", "modal-header d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "modal-body"], ["ng-app", "myApp", "ng-controller", "validateCtrl", "name", "myForm"], [1, "row", "mb-3"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "number", "name", "quuantity", "onkeyup", "value=value.replace(/^(0+)|[^\\d]+/g,'')", "ng-model", "quuantity", "required", "", "min", "0", "oninput", "if(value<0)value=0;", 1, "form-control", 3, "input", "value"], ["style", "color: red;", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-between"], [1, "align-baseline", "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-success", 3, "click", "disabled"], ["id", "sellModal", "tabindex", "-1", "aria-labelledby", "sellModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["ng-app", "sell", "ng-controller", "validateCtrl", "name", "sell"], ["type", "number", "onkeyup", "value=value.replace(/^(0+)|[^\\d]+/g,'')", "name", "quantitysell", "ng-model", "quantitysell", "required", "", "min", "0", "oninput", "if(value<0)value=0;", 1, "form-control", 3, "input", "value"], [1, "align-baseline"], [1, "container-fluid", "custom-container", 2, "padding-top", "20px"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-10", "col-md-8", "col-lg-7"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "d-flex", "justify-content-center", 3, "ngClass"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "container-fluid", "custom-container"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", "d-flex", "justify-content-center"], [1, "container", "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "50vh"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["class", "card col-12 col-md-10 col-lg-7 mx-auto", 4, "ngFor", "ngForOf"], [1, "card", "col-12", "col-md-10", "col-lg-7", "mx-auto"], [1, "card-header"], [1, "list-inline", "d-flex", "align-items-center", "mb-0"], [1, "list-inline-item", "mb-0", "d-flex", "align-items-center"], [1, "h4", "mb-0"], [1, "card-body"], [1, "card", "container", "text-left", "border-0"], [1, "row", "row-cols-2", "row-cols-lg-4", "g-2", "g-lg-3", "text-dark"], [1, "col"], [1, ""], [1, "col", 3, "ngClass"], [1, "", 3, "ngClass"], [1, "card-footer", "text-muted"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#buyModal", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#sellModal", 1, "btn", "btn-danger", 3, "click"], [1, "modal-header", "d-flex", "justify-content-between", "align-items-center"], ["id", "buyModalLabel", 1, "modal-title", "fs-5", "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [2, "color", "red"], ["id", "sellModalLabel", 1, "modal-title", "fs-5", "mb-0"]],
    template: function PortfolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PortfolioComponent_div_0_Template, 6, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PortfolioComponent_h3_5_Template, 2, 1, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PortfolioComponent_div_6_Template, 5, 0, "div", 6)(7, PortfolioComponent_div_7_Template, 4, 0, "div", 7)(8, PortfolioComponent_div_8_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PortfolioComponent_div_12_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "form", 13)(16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PortfolioComponent_h4_17_Template, 2, 1, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PortfolioComponent_h4_19_Template, 2, 1, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Quantity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "input", 17, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function PortfolioComponent_Template_input_input_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const quantity_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.calculateBuyQuantity(quantity_r5.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PortfolioComponent_h4_26_Template, 2, 0, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19)(28, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const quantity_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.buy(quantity_r5.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22)(33, "div", 9)(34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PortfolioComponent_div_35_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12)(38, "form", 23)(39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, PortfolioComponent_h4_40_Template, 2, 1, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, PortfolioComponent_h4_42_Template, 2, 1, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Quantity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16)(47, "input", 24, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function PortfolioComponent_Template_input_input_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const quantitysell_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.calculateSellQuantity(quantitysell_r6.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, PortfolioComponent_h4_50_Template, 2, 0, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19)(52, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const quantitysell_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.sell(quantitysell_r6.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const quantity_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
        const quantitysell_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.buyResult === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.walletmoney > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noPortfolio === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 19, ctx.currentPortfolio) != "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 21, ctx.currentPortfolio) != "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 23, ctx.currentPortfolio) != "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.bsInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.buytotal > ctx.walletmoney);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: ", ctx.buytotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.buytotal > ctx.walletmoney || ctx.buytotal == 0 || quantity_r5.value == "0" ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 25, ctx.currentPortfolio) != "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 27, ctx.currentPortfolio) != "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 29, ctx.currentPortfolio) != "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.bsInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sellButtonDisabled === true && quantitysell_r6.value != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: ", ctx.sellTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.sellButtonDisabled === true ? "disabled" : null);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    styles: [".custom-margin[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-top: 3rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 750px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLW1hcmdpbiB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7964:
/*!************************************************************!*\
  !*** ./src/app/component/recommend/recommend.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecommendComponent: () => (/* binding */ RecommendComponent)
/* harmony export */ });
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts/highstock */ 3746);
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/indicators/indicators */ 3773);
/* harmony import */ var highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/indicators/volume-by-price */ 783);
/* harmony import */ var highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_service_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/new.service */ 8089);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_service_searchHistory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/searchHistory.service */ 6935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts-angular */ 1769);










function RecommendComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r1.ticker, " ", ctx_r1.buySuccess, " Successfully! ");
  }
}
function RecommendComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.hostList["ticker"], " added to watchlist! ");
  }
}
function RecommendComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " No data found. Please enter a valid Ticker ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function RecommendComponent_div_3_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_3_a_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.saveWatchList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function RecommendComponent_div_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecommendComponent_div_3_span_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_3_span_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.buyModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function RecommendComponent_div_3_span_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_3_span_18_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.buyModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function RecommendComponent_div_3_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "div", 66)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Market is Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function RecommendComponent_div_3_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "div", 67)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Market Closed On ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 1, ctx_r1.marketServerTime, "yyyy-MM-dd HH:mm"), "");
  }
}
function RecommendComponent_div_3_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "div", 68)(2, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 69)(5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.polygonAggsVw);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.polygonAggsPriceC, " (", ctx_r1.polygonAggsPercent, "%)");
  }
}
function RecommendComponent_div_3_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "div", 71)(2, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 69)(5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.polygonAggsVw);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.polygonAggsPriceC, " (", ctx_r1.polygonAggsPercent, "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 4, ctx_r1.polygonAggsTime, "yyyy-MM-dd HH:mm"));
  }
}
function RecommendComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "div", 30)(2, "div", 48)(3, "div", 49)(4, "div", 50)(5, "a", 51)(6, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RecommendComponent_div_3_a_8_Template, 3, 0, "a", 53)(9, RecommendComponent_div_3_span_9_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 55)(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 55)(14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, RecommendComponent_div_3_span_17_Template, 3, 0, "span", 57)(18, RecommendComponent_div_3_span_18_Template, 4, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 49)(20, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br")(23, "br")(24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, RecommendComponent_div_3_span_26_Template, 4, 0, "span", 57)(27, RecommendComponent_div_3_span_27_Template, 5, 4, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RecommendComponent_div_3_span_29_Template, 9, 3, "span", 57)(30, RecommendComponent_div_3_span_30_Template, 12, 7, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx_r1.hostList["weburl"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.hostList["ticker"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isWatchlist == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isWatchlist > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.hostList["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.hostList["exchange"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.ticker && ctx_r1.walletmoney > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.boughtTotal > 0 && ctx_r1.walletmoney > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r1.hostList["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.marketstatus == "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.marketstatus != "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.polygonAggsPriceC >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.polygonAggsPriceC < 0);
  }
}
function RecommendComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 73)(1, "ul", 74)(2, "li", 75)(3, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_4_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.tabsChanges("Summary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 75)(6, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_4_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.tabsChanges("Top News"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Top News");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 75)(9, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_4_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.tabsChanges("Charts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Charts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 75)(12, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_4_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.tabsChanges("Insights"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.tabs == "Summary" ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.tabs == "Top News" ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.tabs == "Charts" ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r1.tabs == "Insights" ? "active" : "");
  }
}
function RecommendComponent_div_5_span_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_5_span_48_Template_a_click_1_listener() {
      const peer_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.searchClick(peer_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const peer_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](peer_r8);
  }
}
function RecommendComponent_div_5_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "highcharts-chart", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Highcharts", ctx_r1.Highcharts)("options", ctx_r1.coption)("constructorType", ctx_r1.chartConstructor);
  }
}
function RecommendComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77)(1, "div", 78)(2, "div", 79)(3, "div", 80)(4, "div", 81)(5, "ul", 82)(6, "li", 83)(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "High Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 83)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Low Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 83)(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Open Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li", 83)(19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Prev. Close:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 85)(26, "div", 86)(27, "h3", 87)(28, "u")(29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "About The Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "h5", 88)(32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "IPO Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h5", 88)(36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Industry:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h5", 88)(40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Webpage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "h5", 88)(45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Company Peers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "h5", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, RecommendComponent_div_5_span_48_Template, 4, 1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, RecommendComponent_div_5_div_50_Template, 2, 3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](51, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.priceH, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.pricel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.priceo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.pricep, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.hostList["ipo"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.hostList["finnhubIndustry"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx_r1.hostList["weburl"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.hostList["weburl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.peers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](51, 10, ctx_r1.coption) != "{}");
  }
}
function RecommendComponent_h4_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Not Enough Money in Wallet! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecommendComponent_h4_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " You cannot sell the socks that you don't have! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RecommendComponent_div_56_div_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 106);
  }
  if (rf & 2) {
    const news_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", news_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function RecommendComponent_div_56_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99)(1, "div", 100)(2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, RecommendComponent_div_56_div_2_img_3_Template, 1, 1, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 103)(5, "h5", 104)(6, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_div_56_div_2_Template_a_click_6_listener() {
      const n_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.newsDetail(n_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const news_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", news_r12.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", news_r12.headline, " ");
  }
}
function RecommendComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 96)(1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RecommendComponent_div_56_div_2_Template, 8, 2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.topNews);
  }
}
function RecommendComponent_div_90_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "highcharts-chart", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Highcharts", ctx_r1.Highcharts)("options", ctx_r1.chartoption)("constructorType", ctx_r1.chartConstructor);
  }
}
function RecommendComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 107)(1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RecommendComponent_div_90_div_2_Template, 2, 3, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r1.chartoption) != "{}");
  }
}
function RecommendComponent_div_91_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "highcharts-chart", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Highcharts", ctx_r1.Highcharts)("options", ctx_r1.insightsoption);
  }
}
function RecommendComponent_div_91_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "highcharts-chart", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Highcharts", ctx_r1.Highcharts)("options", ctx_r1.earningOption);
  }
}
function RecommendComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 112)(4, "div", 113)(5, "h3")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Insider Sentiments");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 114)(9, "div", 115)(10, "table", 116)(11, "thead")(12, "tr")(13, "th", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "MSPR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tbody")(20, "tr")(21, "th", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "tr")(28, "th", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Positive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "tr")(35, "th", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 30)(42, "div", 42)(43, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, RecommendComponent_div_91_div_44_Template, 2, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, RecommendComponent_div_91_div_47_Template, 2, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.hostList["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.msprTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.changeTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.msprPositive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.changePositive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.msprNagtive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.changeNagtive);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 9, ctx_r1.insightsoption) != "{}");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 11, ctx_r1.insightsoption) != "{}");
  }
}
highcharts_indicators_indicators__WEBPACK_IMPORTED_MODULE_1___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
highcharts_indicators_volume_by_price__WEBPACK_IMPORTED_MODULE_2___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__);
class RecommendComponent {
  constructor(server, route, ngZone, router, el, searchHistoryService) {
    this.server = server;
    this.route = route;
    this.ngZone = ngZone;
    this.router = router;
    this.el = el;
    this.searchHistoryService = searchHistoryService;
    this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_0__;
    this.chartConstructor = 'stockChart';
    this.updateFlag = false;
    this.oneToOneFlag = true;
    this.runOutsideAngular = false;
    this.showWatchlistAlert = false;
    this.coption = {};
    this.hostList = [];
    this.polygonAggsVw = 0.00;
    this.priceH = 0.00;
    this.pricel = 0.00;
    this.priceo = 0.00;
    this.pricep = 0.00;
    this.ticker = '';
    this.isWatchlist = -1;
    this.buyResult = false;
    this.buytotal = 0;
    this.sellTotal = 0;
    this.walletmoney = -1;
    this.portfolio = null;
    this.boughtQuantity = 0;
    this.boughtTotal = 0;
    this.peers = Array();
    this.buySuccess = 'Bought';
    this.tabs = "Summary";
    this.topNews = [];
    this.chartsData = [];
    this.chartoption = {};
    this.insightsData = [];
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.walletmoney = -1;
      this.isWatchlist = -1;
      if ((params.ticker == 'home' || params.ticker == 'HOME') && this.searchHistoryService.searchHistory?.length == 0) {
        return;
      } else if ((params.ticker == 'home' || params.ticker == 'HOME') && this.searchHistoryService.searchHistory?.length > 0) {
        this.router.navigate(['search', this.searchHistoryService.searchHistory]);
        this.searchHistoryService.searchHistory = '';
        return;
      }
      if (this.searchHistoryService.searchHistory?.length > 0 || params.ticker.length > 0) {
        let searchTicker = params.ticker != this.searchHistoryService.searchHistory ? params.ticker.toUpperCase() : this.searchHistoryService.searchHistory;
        var paramsSearch = {
          key: searchTicker
        };
        const promise = this.server.searchStock(paramsSearch);
        promise.then(result => {
          let arr = [];
          Object.keys(result).map(function (key) {
            arr[key] = result[key];
          });
          this.hostList = arr;
          this.searchHistoryService.searchHistory = this.hostList['ticker'];
          if (!this.hostList['ticker']) {
            this.hostList['f'] = true;
            return true;
          }
          {
            this.hostList['f'] = false;
          }
          //Search polygon
          const pPromise = this.server.polygonAggs(paramsSearch);
          pPromise.then(result => {
            this.ticker = result.ticker;
            //Finnhub quote
            const promiseQuote = this.server.finnhubQuote(paramsSearch);
            promiseQuote.then(result => {
              this.polygonAggsVw = Number(result.c);
              this.polygonAggsPriceC = Number(result.d);
              this.polygonAggsPercent = Number(result.dp);
              this.polygonAggsPercent = this.polygonAggsPercent.toFixed(2);
              this.marketServerTime = Number(result.t) * 1000;
              this.polygonAggsTime = this.marketServerTime;
              let usUnixTime = Number(new Date());
              this.marketstatus = usUnixTime - this.marketServerTime < 5 * 60 * 1000 ? "open" : "closed";
              this.priceH = result.h;
              this.pricel = result.l;
              this.priceo = result.o;
              this.pricep = result.pc;
              //Update price when open
              if (this.marketstatus == 'open') this.timer = setInterval(() => {
                this.ngZone.run(() => {
                  const promiseQuote = this.server.finnhubQuote(paramsSearch);
                  promiseQuote.then(resultZ => {
                    this.polygonAggsVw = Number(resultZ.c);
                    this.polygonAggsPriceC = Number(resultZ.d);
                    this.polygonAggsPercent = Number(resultZ.dp);
                    this.polygonAggsPercent = this.polygonAggsPercent.toFixed(2);
                    this.marketServerTime = Number(resultZ.t) * 1000;
                    this.polygonAggsTime = this.marketServerTime;
                    let usUnixTime = Number(new Date());
                    this.marketstatus = usUnixTime - this.marketServerTime < 5 * 60000 ? "open" : "closed";
                    this.priceH = result.h;
                    this.pricel = result.l;
                    this.priceo = result.o;
                    this.pricep = result.pc;
                  });
                });
              }, 15000);
            }).catch(err => {
              throw err;
            });
            if (typeof result.results == "object") {
              const options = {
                documentName: 'watchlist',
                params: {
                  ticker: this.ticker
                }
              };
              const Promise = this.server.getData(options);
              Promise.then(result => {
                this.isWatchlist = result.length;
                this.getThisPortFolio();
              }).catch(err => {
                throw err;
              });
            }
          }).catch(err => {
            throw err;
          });
        }).catch(err => {
          throw err;
        });
      }
    });
  }
  getThisPortFolio() {
    let optionsPf = {
      documentName: 'portfolio',
      params: {
        ticker: this.ticker
      }
    };
    const PromisePf = this.server.getData(optionsPf);
    PromisePf.then(resultPf => {
      if (typeof resultPf[0] == "object") {
        resultPf[0].quantity = parseFloat(resultPf[0].quantity);
        resultPf[0].total = parseFloat(resultPf[0].total);
        this.portfolio = resultPf[0];
        this.sellTotal = this.boughtTotal = parseFloat(this.portfolio.total);
        this.boughtQuantity = parseFloat(this.portfolio.quantity);
        this.buySuccess = "bought";
      }
      this.getWallet();
    }).catch(err => {
      throw err;
    });
  }
  //Save Watchlist
  saveWatchList() {
    const options = {
      documentName: 'watchlist',
      params: {
        ticker: this.hostList['ticker'],
        name: this.hostList['name'],
        vw: this.polygonAggsVw,
        percent: this.polygonAggsPercent,
        price: this.polygonAggsPriceC
      }
    };
    this.server.createData(options).then(results => {
      this.isWatchlist = results == 'ok' ? 1 : 0;
      if (this.isWatchlist) {
        this.showWatchlistAlert = true;
        setTimeout(() => this.showWatchlistAlert = false, 3000);
      }
    }).catch(err => {
      console.error('Error adding to watchlist:', err);
    });
  }
  getWallet() {
    this.walletmoney = -1;
    let options = {
      documentName: 'wallet',
      params: {}
    };
    const Promise = this.server.getData(options);
    Promise.then(result => {
      if (typeof result[0] == "object") {
        this.walletmoney = parseFloat(result[0].money);
      } else {
        this.walletmoney = 0;
      }
      this.tabsChanges('Summary');
    }).catch(err => {
      throw err;
    });
  }
  buyModal() {
    if (this.portfolio?.length > 0) {
      this.boughtTotal += this.portfolio.total;
      this.boughtQuantity += this.portfolio.quantity;
      this.buySuccess = "bought";
    } else if (this.portfolio?.length == 0) {
      const options = {
        documentName: 'wallet',
        params: {
          money: 25000
        }
      };
      const savePromise = this.server.createDataI(options);
      savePromise.then(results => {
        this.walletmoney = 25000;
      }).catch(err => {
        throw err;
      });
    }
  }
  // Calculate stock when purchase
  calculateBuyQuantity(quantity) {
    this.buytotal = parseFloat((this.polygonAggsVw * parseFloat(quantity)).toFixed(2));
    this.buytotal = isNaN(this.buytotal) ? 0 : this.buytotal;
  }
  // Calculate stock when sell
  calculateSellQuantity(quantity) {
    this.sellTotal = parseFloat((this.polygonAggsVw * parseFloat(quantity)).toFixed(2));
    this.sellTotal = isNaN(this.sellTotal) ? 0 : this.sellTotal;
    this.sellButtonDisabled = this.portfolio?.quantity < parseFloat(quantity) || this.sellTotal == 0 ? true : false;
  }
  // Buy button
  buy(quantity) {
    quantity = parseFloat(quantity);
    if (this.portfolio?.length == 0 || this.portfolio == null) {
      let params = {
        ticker: this.ticker,
        name: this.hostList['name'],
        pricevw: this.polygonAggsVw,
        quantity: quantity,
        total: this.buytotal
      };
      const options = {
        documentName: 'portfolio',
        params: params
      };
      const savePromise = this.server.createDataI(options);
      savePromise.then(results => {
        this.buyResult = results == "ok" ? true : false;
        if (this.buyResult === true) {
          this.boughtQuantity = params.quantity;
          this.boughtTotal = params.total;
          let options = {
            documentName: 'wallet',
            params: {
              money: (this.walletmoney - this.buytotal).toFixed(2)
            }
          };
          const savePromise = this.server.updateData(options);
          savePromise.then(results => {
            this.buySuccess = "Bought";
          });
        }
      }).catch(err => {
        throw err;
      });
    } else {
      var options = {
        documentName: 'portfolio',
        data: {
          quantity: quantity + this.portfolio.quantity,
          pricevw: ((this.buytotal + this.portfolio.total) / (quantity + this.portfolio.quantity)).toFixed(2),
          total: parseFloat((this.buytotal + this.portfolio.total).toFixed(2))
        },
        filter: {
          _id: this.portfolio._id
        }
      };
      const Promise = this.server.updateOne(options);
      Promise.then(results => {
        this.boughtQuantity = options.data.quantity;
        this.boughtTotal = options.data.total;
        let optionsWallet = {
          documentName: 'wallet',
          params: {
            money: parseFloat((this.walletmoney - this.buytotal).toFixed(2))
          }
        };
        const savePromise = this.server.updateData(optionsWallet);
        savePromise.then(results => {
          this.buySuccess = "Bought";
          this.buyResult = results == "ok" ? true : false;
          this.walletmoney = optionsWallet.params.money;
          let timer = null;
          timer = setTimeout(() => {
            this.buyResult = false;
          }, 5000);
        });
      }).catch(err => {
        throw err;
      });
    }
  }
  // Sell
  sell(quantity) {
    quantity = parseInt(quantity);
    if (this.portfolio.quantity > quantity) {
      var options = {
        documentName: 'portfolio',
        data: {
          quantity: this.portfolio.quantity - quantity,
          total: parseFloat((this.portfolio.total - this.sellTotal).toFixed(2))
        },
        filter: {
          _id: this.portfolio._id
        }
      };
      const Promise = this.server.updateOne(options);
      Promise.then(results => {
        let optionsWallet = {
          documentName: 'wallet',
          params: {
            money: parseFloat((this.walletmoney + this.sellTotal).toFixed(2))
          }
        };
        const savePromise = this.server.updateData(optionsWallet);
        savePromise.then(results => {
          this.buySuccess = "Sold";
          this.boughtTotal = 0;
          this.portfolio.quantity = this.boughtQuantity = options.data.quantity;
          this.portfolio.total = this.boughtTotal = options.data.total;
          this.sellButtonDisabled = null;
          this.walletmoney = optionsWallet.params.money;
          this.buyResult = results == "ok" ? true : false;
          let timer = null;
          timer = setTimeout(() => {
            this.buyResult = false;
          }, 5000);
        });
      }).catch(err => {
        throw err;
      });
    } else if (this.portfolio.quantity == quantity) {
      let params = {
        ticker: this.ticker
      };
      const options = {
        documentName: 'portfolio',
        params: params
      };
      const savePromise = this.server.deleteData(options);
      savePromise.then(results => {
        this.buyResult = results == "ok" ? true : false;
        if (this.buyResult === true) {
          let optionsWallet = {
            documentName: 'wallet',
            params: {
              money: parseFloat((this.walletmoney + this.sellTotal).toFixed(2))
            }
          };
          const savePromise = this.server.updateData(optionsWallet);
          savePromise.then(results => {
            this.buySuccess = "Sold";
            this.boughtTotal = 0;
            this.portfolio.quantity = this.boughtQuantity = 0;
            this.portfolio.total = this.boughtTotal = 0;
            this.sellButtonDisabled = null;
            this.walletmoney = optionsWallet.params.money;
            this.buyResult = results == "ok" ? true : false;
          });
        }
      }).catch(err => {
        throw err;
      });
    }
  }
  // Navigation
  tabsChanges(event) {
    this.tabs = event;
    switch (event) {
      case 'Summary':
        const Promise = this.server.finhubPeers({
          key: this.hostList['ticker']
        });
        Promise.then(resultFp => {
          this.peers = resultFp;
          this.candlestickAndVolume();
        });
        break;
      case 'Top News':
        if (this.topNews.length > 1 || this.ticker?.length == 0) {
          break;
        }
        this.topNewsTab();
        break;
      case 'Charts':
        if (this.chartsData.length > 1) {
          break;
        }
        this.charts();
        break;
      case 'Insights':
        if (this.insightsData.length > 1) {
          break;
        }
        this.insights();
        break;
    }
  }
  searchClick(searchword) {
    let searchwordone = searchword.split('|', 1);
    const reg = /\s+$/g;
    searchwordone[0] = searchwordone[0].replace(reg, '');
    this.router.navigate(['search', encodeURIComponent(searchwordone[0])]);
  }
  candlestickAndVolume() {
    let paramsSearch = {};
    let fromUnixTime = Number(new Date());
    if (this.marketServerTime == undefined) {
      return;
    }
    if (this.marketstatus == 'open') {
      this.tabFrom = fromUnixTime - 24 * 3600 * 1000;
      this.tabto = fromUnixTime;
    } else {
      this.tabFrom = this.marketServerTime - 24 * 3600 * 1000;
      this.tabto = this.marketServerTime;
    }
    paramsSearch = {
      ticker: this.ticker,
      day: 1,
      range: "hour",
      from: this.tabFrom,
      to: this.tabto
    };
    let data = [];
    const pPromise = this.server.polygonAggsTicker(paramsSearch);
    pPromise.then(result => {
      if (typeof result.results == "object") {
        result.results.forEach(element => {
          data.push([element.t, element.c]);
        });
        let seriesColor = this.polygonAggsPriceC >= 0 ? '#008000' : '#FF0000'; // Green if >= 0, red if < 0
        this.coption = {
          chart: {
            type: 'spline',
            reflow: true,
            height: 300,
            width: 350,
            backgroundColor: '#F5F5F5'
          },
          title: {
            text: this.ticker + ' Hourly Price Variation'
          },
          series: [{
            name: this.ticker + ' Hourly Price Variation',
            data: data,
            type: 'area',
            color: seriesColor,
            threshold: null,
            tooltip: {
              valueDecimals: 2
            },
            fillColor: 'rgba(0, 0, 0, 0)'
          }],
          accessibility: {
            enabled: false
          },
          rangeSelector: {
            enabled: false
          },
          navigator: {
            enabled: false
          }
        };
      }
    }).catch(err => {
      throw err;
    });
  }
  // Top News Tab
  topNewsTab() {
    let paramsSearch = {
      ticker: this.ticker,
      from: new Date(this.tabFrom).getFullYear() + '-' + String(new Date(this.tabFrom).getMonth() + 1).padStart(2, '0') + '-' + +String(new Date(this.tabFrom).getDate()).padStart(2, '0'),
      to: new Date(this.tabto).getFullYear() + '-' + String(new Date(this.tabto).getMonth() + 1).padStart(2, '0') + '-' + +String(new Date(this.tabto).getDate()).padStart(2, '0')
    };
    const pPromise = this.server.companyNews(paramsSearch);
    pPromise.then(result => {
      this.topNews = result;
    }).catch(err => {
      throw err;
    });
  }
  newsDetail(n) {
    this.topNewsDetail = this.topNews[n];
    this.topNewsDetail.headlineencode = encodeURIComponent(this.topNewsDetail?.headline);
    this.topNewsDetail.urlencode = encodeURIComponent(this.topNewsDetail?.url);
  }
  // Chart Tab
  charts() {
    let paramsSearch = {
      ticker: this.ticker,
      day: 1,
      range: "day",
      from: new Date(this.tabto).getFullYear() - 2 + '-' + String(new Date(this.tabto).getMonth() + 1).padStart(2, '0') + '-' + +String(new Date(this.tabto).getDate()).padStart(2, '0'),
      to: new Date(this.tabto).getFullYear() + '-' + String(new Date(this.tabto).getMonth() + 1).padStart(2, '0') + '-' + +String(new Date(this.tabto).getDate()).padStart(2, '0')
    };
    const pPromise = this.server.polygonAggsTicker(paramsSearch);
    pPromise.then(result => {
      if (typeof result.results == "object") {
        let ohlc = result.results,
          volume = [],
          groupingUnits = [['day', [1]], ['day', [1, 2, 3, 4, 6]]];
        for (let i = 0; i < ohlc.length; i += 1) {
          this.chartsData.push([ohlc[i]['t'], ohlc[i]['o'], ohlc[i]['h'], ohlc[i]['l'], ohlc[i]['c']]);
          volume.push([ohlc[i]['t'], ohlc[i]['v']]);
        }
        this.chartoption = {
          chart: {
            backgroundColor: '#F5F5F5'
          },
          rangeSelector: {
            selected: 2
          },
          title: {
            text: this.ticker + ' Historical'
          },
          subtitle: {
            text: 'With SMA and Volume by Price technical indicators'
          },
          yAxis: [{
            startOnTick: false,
            endOnTick: false,
            labels: {
              align: 'right',
              x: -3
            },
            title: {
              text: 'OHLC'
            },
            height: '60%',
            lineWidth: 2,
            resize: {
              enabled: true
            }
          }, {
            labels: {
              align: 'right',
              x: -3
            },
            title: {
              text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
          }],
          tooltip: {
            split: true
          },
          plotOptions: {
            series: {
              dataGrouping: {
                units: groupingUnits
              }
            },
            vbp: {}
          },
          series: [{
            type: 'candlestick',
            name: this.ticker,
            id: 'aapl',
            zIndex: 2,
            data: this.chartsData
          }, {
            type: 'column',
            name: 'Volume',
            id: 'volume',
            data: volume,
            yAxis: 1
          }, {
            type: 'vbp',
            linkedTo: 'aapl',
            params: {
              volumeSeriesID: 'volume'
            },
            dataLabels: {
              enabled: false
            },
            zoneLines: {
              enabled: false
            }
          }, {
            type: 'sma',
            linkedTo: this.ticker,
            zIndex: 1,
            marker: {
              enabled: false
            }
          }]
        };
      }
    }).catch(err => {
      throw err;
    });
  }
  // Insights Tab
  insights() {
    let paramsSearch = {
      ticker: this.ticker,
      from: "2022-01-01"
    };
    const pPromise = this.server.insider(paramsSearch);
    pPromise.then(result => {
      if (result.data.length > 1) {
        this.insightsData = result.data;
        let msprP = 0;
        let msprN = 0;
        let changeP = 0;
        let changeN = 0;
        result?.data.forEach(element => {
          msprP += element.mspr >= 0 ? element.mspr : 0;
          msprN += element.mspr < 0 ? element.mspr : 0;
          changeP += element.change >= 0 ? element.change : 0;
          changeN += element.change < 0 ? element.change : 0;
        });
        let msprT = msprP + msprN;
        let changeT = changeP + changeN;
        this.msprPositive = msprP.toFixed(2);
        this.msprNagtive = msprN.toFixed(2);
        this.msprTotal = msprT.toFixed(2);
        this.changePositive = changeP;
        this.changeNagtive = changeN;
        this.changeTotal = changeT;
      }
    }).catch(err => {
      throw err;
    });
    const rPromise = this.server.recommendation({
      ticker: this.ticker
    });
    rPromise.then(result => {
      if (result?.length > 0) {
        this.insightsoption = {
          chart: {
            type: 'column',
            backgroundColor: '#F5F5F5'
          },
          title: {
            text: 'Recommendation Trends',
            align: 'center',
            style: {
              fontWeight: 'bold'
            }
          },
          xAxis: {
            categories: [result[0].period, result[1].period, result[2].period, result[3].period]
          },
          yAxis: {
            min: 0,
            title: {
              text: '#Analysis',
              textAlign: 'left'
            },
            stackLabels: {
              enabled: true
            }
          },
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            shadow: false
          },
          tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
          },
          plotOptions: {
            column: {
              stacking: 'normal',
              dataLabels: {
                enabled: true
              }
            }
          },
          series: [{
            name: 'Strong Buy',
            color: '#006633',
            data: [result[0].strongBuy, result[1].strongBuy, result[2].strongBuy, result[3].strongBuy]
          }, {
            name: 'Buy',
            color: '#339933',
            data: [result[0].buy, result[1].buy, result[2].buy, result[3].buy]
          }, {
            name: 'Hold',
            color: '#CC9933',
            data: [result[0].hold, result[1].hold, result[2].hold, result[3].hold]
          }, {
            name: 'Sell',
            color: '#CC3300',
            data: [result[0].sell, result[1].sell, result[2].sell, result[3].sell]
          }, {
            name: 'Strong Sell',
            color: '#660000',
            data: [result[0].strongSell, result[1].strongSell, result[2].strongSell, result[3].strongSell]
          }]
        };
      }
    }).catch(err => {
      throw err;
    });
    const ePromise = this.server.earning({
      ticker: this.ticker
    });
    ePromise.then(result => {
      if (result?.length > 0) {
        result.forEach((element, index) => {
          result[index].actual = element.actual == null ? 0 : element.actual;
          result[index].estimate = element.estimate == null ? 0 : element.estimate;
          result[index].surprise = element.surprise == null ? 0 : element.surprise;
          result[index].surprisePercent = element.surprisePercent == null ? 0 : element.surprisePercent;
        });
        let a = [[result[0].surprise, result[0].actual], [result[1].surprise, result[1].actual], [result[2].surprise, result[2].actual], [result[3].surprise, result[3].actual]];
        this.earningOption = {
          chart: {
            type: 'spline',
            backgroundColor: '#F5F5F5'
          },
          title: {
            text: 'Historical EPS Surprise',
            align: 'center'
          },
          xAxis: {
            categories: [result[0].period + "<br/>Surprise:" + result[0].surprise, result[1].period + "<br/>Surprise:" + result[1].surprise, result[2].period + "<br/>Surprise:" + result[2].surprise, result[3].period + "<br/>Surprise:" + result[3].surprise],
            reversed: false,
            title: {
              enabled: true
            },
            labels: {
              format: '{value}'
            },
            accessibility: {
              rangeDescription: 'Range: 0 to 10'
            },
            maxPadding: 0.05,
            showLastLabel: true
          },
          yAxis: {
            title: {
              enabled: true,
              text: 'Quarterly EPS'
            },
            labels: {
              format: '{value}'
            },
            accessibility: {
              rangeDescription: 'Range: -90°C to 20°C.'
            },
            lineWidth: 2
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x}: {point.y}'
          },
          plotOptions: {
            spline: {
              marker: {
                enable: false
              }
            }
          },
          series: [{
            name: 'Actual',
            data: [result[0].actual, result[1].actual, result[2].actual, result[3].actual]
          }, {
            name: 'Estimate',
            data: [result[0].estimate, result[1].estimate, result[2].estimate, result[3].estimate]
          }]
        };
      }
    }).catch(err => {
      throw err;
    });
  }
  static #_ = this.ɵfac = function RecommendComponent_Factory(t) {
    return new (t || RecommendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_new_service__WEBPACK_IMPORTED_MODULE_3__.NewService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_searchHistory_service__WEBPACK_IMPORTED_MODULE_4__.SearchHistoryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RecommendComponent,
    selectors: [["app-recommend"]],
    decls: 92,
    vars: 35,
    consts: [["quantity", ""], ["quantitysell", ""], ["class", "container-fluid custom-container", 4, "ngIf"], ["class", "album py-4", 4, "ngIf"], ["class", "col-12 col-md-8 col-lg-8 mx-auto", 4, "ngIf"], ["class", "detail-container", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "align-items-center"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["ng-app", "myApp", "ng-controller", "validateCtrl", "name", "myForm"], [1, "row", "mb-3"], ["for", "inputEmail3", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "number", "onkeyup", "value=value.replace(/^(0+)|[^\\d]+/g,'')", "name", "quuantity", "ng-model", "quuantity", "required", "", "min", "0", "oninput", "if(value<0)value=0;", 1, "form-control", 3, "input"], ["style", "color: red;", 4, "ngIf"], [1, "modal-footer", "justify-content-between"], [1, "align-baseline"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-success", "btn", 3, "click", "disabled"], ["id", "sellModal", "tabindex", "-1", "aria-labelledby", "esellModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "sellModalLabel", 1, "modal-title", "fs-5"], ["ng-app", "sell", "ng-controller", "validateCtrl", "name", "sell"], ["type", "number", "onkeyup", "value=value.replace(/^(0+)|[^\\d]+/g,'')", "name", "quantitysell", "ng-model", "quantitysell", "oninput", "if(value<0)value=0;", "required", "", "min", "0", 1, "form-control", 3, "input", "value"], ["class", "container text-center", 4, "ngIf"], ["id", "newsModal", "tabindex", "-1", "aria-labelledby", "newsModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-header"], [1, "d-flex", "flex-column", "align-items-start"], [1, "container"], ["target", "_blank", 3, "href"], [1, "card"], [1, "card-body"], [2, "display", "flex", "align-items", "center", "justify-content", "start"], ["target", "_blank", 1, "twitter-share-button", 2, "margin-right", "10px", 3, "href"], [1, "fa", "fa-twitter"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "", "data-size", "", 1, "fb-share-button"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fa", "fa-facebook"], ["class", "chart-container chart-container-custom d-flex justify-content-center", 4, "ngIf"], [1, "container-fluid", "custom-container"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-10", "col-md-8", "col-lg-7"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "album", "py-4"], [1, "row", "g-3"], [1, "col-4"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "text-align", "center"], ["target", "_blank", 1, "link-no-underline", 3, "href"], [1, "mb-0"], ["href", "javascript:void(0);", 3, "click", 4, "ngIf"], ["class", "material-icons icon-star-added", 4, "ngIf"], [2, "text-align", "center"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-nowrap", 2, "text-align", "center"], [4, "ngIf"], [1, "card", "border-0", "align-items-center"], ["alt", "Company Logo", 1, "img-fluid", "img-lg-custom", 3, "src"], [1, "market-status-container", "text-center", "mt-3"], ["href", "javascript:void(0);", 3, "click"], [1, "material-icons-outlined", "icon-star-not-added"], [1, "material-icons", "icon-star-added"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-success", "btn-sm", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#sellModal", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "text-success", "text-size-small"], [1, "text-danger", 2, "font-size", "12px"], [2, "text-align", "center", "color", "green"], [1, "d-flex", "flex-nowrap", "justify-content-center", "align-items-center"], [1, "material-icons", "md-dark"], [2, "text-align", "center", "color", "red"], [2, "text-align", "center", "font-size", "12px"], [1, "col-12", "col-md-8", "col-lg-8", "mx-auto"], [1, "nav", "nav-tabs", "nav-fill"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click", "ngClass"], [1, "detail-container"], [1, "row", "no-gutters"], [1, "col-12", "col-md-6"], [1, "row"], [1, "col-12"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "no-border", "text-center", "small", "py-1"], [1, "col-md-6", "d-none", "d-md-block"], [1, "col-12", "col-md-6", "px-md-0"], [1, "text-center", "text-md-right", "mb-2"], [1, "mb-2"], [1, "mt-1", "mb-1"], [3, "href"], [1, "mt-1"], [4, "ngFor", "ngForOf"], ["class", "chart-container p-3", 4, "ngIf"], [1, "chart-container", "p-3"], [2, "width", "100%", "height", "auto", 3, "Highcharts", "options", "constructorType"], [2, "color", "red"], [1, "container", "text-center"], [1, "row", "mt-2"], ["class", "col-12 col-md-6 news-card-container", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "news-card-container"], [1, "card", "news-card"], [1, "news-image-container"], ["alt", "News image", "class", "news-image", 3, "src", 4, "ngIf"], [1, "news-content"], [1, "card-title"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#newsModal", 1, "stretched-link", 2, "text-decoration", "none", "color", "inherit", 3, "click"], ["alt", "News image", 1, "news-image", 3, "src"], [1, "chart-container", "chart-container-custom", "d-flex", "justify-content-center"], [1, "row", "w-100", "justify-content-center"], ["class", "col-lg-10 col-md-8 col-sm-6", 4, "ngIf"], [1, "col-lg-10", "col-md-8", "col-sm-6"], [2, "display", "block", "height", "100%", "min-height", "600px", 3, "Highcharts", "options", "constructorType"], [1, "row", "justify-content-lg-center"], [1, "col-xl-auto", "text-center"], [1, "row", "justify-content-xl-center"], [1, "col-lg-8"], [1, "table", "wd-100", "text-center"], ["scope", "col"], ["scope", "row"], [1, "col-12", "col-lg", "p-2", 2, "max-width", "450px"], [2, "width", "100%", "height", "300px", "display", "block", 3, "Highcharts", "options"]],
    template: function RecommendComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RecommendComponent_div_0_Template, 6, 2, "div", 2)(1, RecommendComponent_div_1_Template, 5, 1, "div", 2)(2, RecommendComponent_div_2_Template, 6, 0, "div", 2)(3, RecommendComponent_div_3_Template, 31, 13, "div", 3)(4, RecommendComponent_div_4_Template, 14, 4, "div", 4)(5, RecommendComponent_div_5_Template, 52, 12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12)(14, "form", 13)(15, "div", 14)(16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Quantity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16)(23, "input", 17, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function RecommendComponent_Template_input_input_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          const quantity_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.calculateBuyQuantity(quantity_r9.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, RecommendComponent_h4_25_Template, 2, 0, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 19)(27, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          const quantity_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.buy(quantity_r9.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 22)(32, "div", 7)(33, "div", 8)(34, "div", 9)(35, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 12)(39, "form", 24)(40, "div", 14)(41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Quantity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 16)(48, "input", 25, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function RecommendComponent_Template_input_input_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          const quantitysell_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](49);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.calculateSellQuantity(quantitysell_r10.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, RecommendComponent_h4_50_Template, 2, 0, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 19)(52, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RecommendComponent_Template_button_click_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          const quantitysell_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](49);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.sell(quantitysell_r10.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, RecommendComponent_div_56_Template, 3, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 27)(58, "div", 7)(59, "div", 8)(60, "div", 28)(61, "div", 29)(62, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p")(65, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](67, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 12)(70, "div", 30)(71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "p")(76, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "For more details click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 32)(81, "div", 33)(82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 34)(85, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 37)(88, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, RecommendComponent_div_90_Template, 4, 3, "div", 40)(91, RecommendComponent_div_91_Template, 49, 13, "div", 5);
      }
      if (rf & 2) {
        const quantitysell_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.buyResult === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showWatchlistAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hostList["f"] == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hostList["ticker"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hostList["ticker"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hostList["ticker"] && ctx.tabs == "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Current Price: ", ctx.polygonAggsVw, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Money in Wallet: ", ctx.walletmoney, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.buytotal > ctx.walletmoney);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total: ", ctx.buytotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.buytotal > ctx.walletmoney || ctx.buytotal <= 0 ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Current Price: ", ctx.polygonAggsVw, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Money in Wallet: ", ctx.walletmoney, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.boughtQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sellButtonDisabled === true && quantitysell_r10.value != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total: ", ctx.sellTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.sellButtonDisabled === true ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.topNews.length > 0 && ctx.tabs == "Top News");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.topNewsDetail == null ? null : ctx.topNewsDetail.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](67, 32, (ctx.topNewsDetail == null ? null : ctx.topNewsDetail.datetime) * 1000, "longDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.topNewsDetail == null ? null : ctx.topNewsDetail.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.topNewsDetail == null ? null : ctx.topNewsDetail.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx.topNewsDetail == null ? null : ctx.topNewsDetail.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=", ctx.topNewsDetail == null ? null : ctx.topNewsDetail.headlineencode, " ", ctx.topNewsDetail == null ? null : ctx.topNewsDetail.urlencode, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=", ctx.topNewsDetail == null ? null : ctx.topNewsDetail.urlencode, "&src=sdkpreparse", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.chartsData == null ? null : ctx.chartsData.length) > 0 && ctx.tabs == "Charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.insightsData == null ? null : ctx.insightsData.length) > 0 && ctx.tabs == "Insights");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, highcharts_angular__WEBPACK_IMPORTED_MODULE_9__.HighchartsChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: ["\n\n.img-lg-custom[_ngcontent-%COMP%] {\n  max-width: 80px;\n  height: auto; \n}\n\n\n\n.icon-star-not-added[_ngcontent-%COMP%] {\n  color: black;\n  cursor: pointer;\n}\n\n.icon-star-added[_ngcontent-%COMP%] {\n  color: #ebd917;\n  cursor: pointer;\n}\n\n.link-no-underline[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n\n.text-size-small[_ngcontent-%COMP%] {\n  font-size: 0.8rem; \n}\n\n.text-size-regular[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n\n\n.nav-link[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border: none;\n  color: #1c279d;\n  border-bottom: 2px solid #1c279d;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n}\n\n\n\n.no-border[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n\n\n.chart-container-custom[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.chart-container[_ngcontent-%COMP%] {\n    padding-bottom: 60px;\n}  \n\n\n\n.news-card-container[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n\n\n\n.news-card-container[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n}\n\n\n\n.news-card[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: row; \n  align-items: stretch;\n  width: 100%;\n  overflow: hidden;\n  margin-bottom: 10px; \n  border-radius: 5px;\n}\n\n.news-image-container[_ngcontent-%COMP%] {\n  flex: 0 0 30%;\n  height: 100px;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n\n\n.news-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: cover;\n}\n\n\n\n.news-content[_ngcontent-%COMP%] {\n  flex-grow: 1; \n  padding: 0 10px;\n  display: flex;\n  align-items: center; \n  justify-content: center;\n}\n\n@media (max-width: 767px) {\n  .news-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .news-image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100px;\n    background-color: #f0f0f0;\n  }\n\n  .news-image[_ngcontent-%COMP%] {\n    max-height: 100%;\n    max-width: auto;\n    object-fit: contain;\n  }\n\n  .news-content[_ngcontent-%COMP%] {\n    width: 100%; \n    padding: 10px;\n  }\n}\n\n\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.btn-close[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n\n\n.fa-twitter[_ngcontent-%COMP%], .fa-facebook[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n\n\n.detail-container[_ngcontent-%COMP%]{\n  padding-bottom: 60px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L3JlY29tbWVuZC9yZWNvbW1lbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLGVBQWU7QUFDZjtFQUNFLGVBQWU7QUFDakI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usb0JBQW9CO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RvY2sgSW5mb3JtYXRpb24gKi9cbi5pbWctbGctY3VzdG9tIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IGF1dG87IFxufVxuXG4vKiBBZGQgdG8gd2F0Y2hsaXN0ICovXG4uaWNvbi1zdGFyLW5vdC1hZGRlZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1zdGFyLWFkZGVkIHtcbiAgY29sb3I6ICNlYmQ5MTc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpbmstbm8tdW5kZXJsaW5lIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0LXNpemUtc21hbGwge1xuICBmb250LXNpemU6IDAuOHJlbTsgXG59XG5cbi50ZXh0LXNpemUtcmVndWxhciB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLyogTmF2aWdhdGlvbiAqL1xuLm5hdi1saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2LXRhYnMge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzFjMjc5ZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYzI3OWQ7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbmsge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qIFN1bW1hcnkgdGFiICovXG4ubm8tYm9yZGVyIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIENoYXJ0cyAqL1xuLmNoYXJ0LWNvbnRhaW5lci1jdXN0b20ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59ICBcblxuLyogTmV3cyBDYXJkIENvbnRhaW5lciAqL1xuLm5ld3MtY2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi8qIE5ld3MgQ2FyZCBDb250YWluZXIgKi9cbi5uZXdzLWNhcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4vKiBOZXdzIENhcmQgKi9cbi5uZXdzLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5ld3MtaW1hZ2UtY29udGFpbmVyIHtcbiAgZmxleDogMCAwIDMwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBOZXdzIEltYWdlICovXG4ubmV3cy1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi8qIE5ld3MgQ29udGVudCAqL1xuLm5ld3MtY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTsgXG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5ld3MtY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5uZXdzLWltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB9XG5cbiAgLm5ld3MtaW1hZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICAubmV3cy1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuXG4vKiBOZXdzIG1vZGFsIGhlYWRlciAqL1xuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tb2RhbC1oZWFkZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5idG4tY2xvc2Uge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuXG4vKiBOZXdzIHNoYXJlICovXG4uZmEtdHdpdHRlciwgLmZhLWZhY2Vib29rIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4vKiBQYWdlIHBhZGRpbmcgKi9cbi5kZXRhaWwtY29udGFpbmVye1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4874:
/*!******************************************************!*\
  !*** ./src/app/component/search/search.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9803);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_service_new_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/new.service */ 8089);
/* harmony import */ var src_app_service_auto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auto.service */ 1478);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 4646);













function SearchComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option")(1, "div", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function SearchComponent_span_15_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}
function SearchComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_span_15_mat_option_1_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r3.filteredOptions));
  }
}
class SearchComponent {
  constructor(router, route, server, autoserver) {
    this.router = router;
    this.route = route;
    this.server = server;
    this.autoserver = autoserver;
    this.autocLoading = false;
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('');
    this.options = [];
    this.currentValue = '';
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.route.params.subscribe(data => {
      let urlParams = this.router.url.split('/');
      if (urlParams[1] != 'search' || urlParams[2] == undefined) {
        this.router.navigate(['search', 'home']);
      }
    });
    this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(500)).subscribe(value => {
      this.currentValue = value;
      if (value.length === 0) {
        this.options = [];
        this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => this._filter(value || '')));
      } else {
        var params = {
          key: value
        };
        this.autocLoading = true;
        this.options = [];
        const promise = this.autoserver.autoComplate(params);
        promise.then(result => {
          let arr = [];
          if (result['result'][0] instanceof Object) {
            arr.push(result['result'][0]['displaySymbol'] + ' | ' + result['result'][0]['description'], result['result'][1]['displaySymbol'] + ' | ' + result['result'][1]['description'], result['result'][2]['displaySymbol'] + ' | ' + result['result'][2]['description'], result['result'][3]['displaySymbol'] + ' | ' + result['result'][3]['description'], result['result'][4]['displaySymbol'] + ' | ' + result['result'][4]['description']);
            this.autocLoading = false;
          }
          this.options = this.currentValue.length == 0 ? [] : arr;
        }).catch(err => {
          throw err;
        });
      }
    });
    this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => this._filter(value || '')));
  }
  _filter(value) {
    if (value.length === 0 && this.options.length === 0) {
      this.options = [];
    }
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  // clear button function
  clearSearchInput() {
    this.myControl.setValue('');
  }
  // search button function
  searchClick(searchword) {
    let ticker = searchword.split(' | ')[0].trim();
    this.myControl.setValue(ticker);
    this.search$.next('');
    this.router.navigate(['search', ticker]);
  }
  // click ticker search function
  onOptionSelected(event) {
    const ticker = event.option.viewValue.split(' | ')[0].trim();
    this.searchClick(ticker);
  }
  onSearch(value) {
    value = value.replace(/^\s+|\s+$/g, '');
    this.search$.next(value);
  }
  // autocomplete function
  autoC(searchword) {
    const params = {
      key: searchword
    };
    this.autocLoading = true;
    this.autoserver.autoComplate(params).then(result => {
      let arr = result['result'].map(item => item['displaySymbol'] + ' | ' + item['description']);
      this.options = arr;
      this.autocLoading = false;
      this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => this._filter(value)));
    }).catch(err => {
      console.error(err);
      this.autocLoading = false;
    });
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_new_service__WEBPACK_IMPORTED_MODULE_0__.NewService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_auto_service__WEBPACK_IMPORTED_MODULE_1__.AutoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["app-search"]],
    decls: 17,
    vars: 4,
    consts: [["searchword", ""], ["auto", "matAutocomplete"], [1, "container"], [1, "p-1", "rounded"], [1, "col-12", "col-sm-7", "py-3", "mx-auto"], [1, "display-5", "fw-normal", "text-center"], [1, "input-group", "mb-3", "w-100"], ["placeholder", "Enter stock ticker symbol", "aria-label", "Search", "control-id", "ControlID-3", "matInput", "", 1, "form-control", "form-control-lg", "search-input", 3, "ngModelChange", "keyup.enter", "formControl", "matAutocomplete"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-search"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-times"], [3, "optionSelected"], [4, "ngIf"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "STOCK SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6)(6, "input", 7, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSearch($event));
        })("keyup.enter", function SearchComponent_Template_input_keyup_enter_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          const searchword_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.searchClick(searchword_r2.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          const searchword_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.searchClick(searchword_r2.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.clearSearchInput());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-autocomplete", 12, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function SearchComponent_Template_mat_autocomplete_optionSelected_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onOptionSelected($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SearchComponent_mat_option_14_Template, 4, 0, "mat-option", 13)(15, SearchComponent_span_15_Template, 3, 3, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "router-outlet");
      }
      if (rf & 2) {
        const auto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", auto_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.autocLoading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.autocLoading === false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: [".search-input[_ngcontent-%COMP%]::placeholder {\n    font-size: 1rem;\n    color: #6c757d;\n  }\n\n.search-input[_ngcontent-%COMP%] {\n  border-right: none !important;\n  border: 3px solid #1c279d; \n  border-top-left-radius: 1.5rem !important;\n  border-bottom-left-radius: 1.5rem !important;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n    border-color: #1c279d;\n    border-right: none !important; \n    box-shadow: none;\n  }\n\n  .btn-outline-primary[_ngcontent-%COMP%] {\n  border-right: none !important; \n  border-left: none !important; \n  border: 3px solid #1c279d; \n  border-color: #1c279d;\n  color: #1c279d;\n  background-color: transparent;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n    border-left: none !important;\n    border: 3px solid #1c279d;\n    color: #1c279d;\n    background-color: transparent;\n    border-top-right-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n  }  \n\n.btn-outline-primary[_ngcontent-%COMP%]:hover, .btn-outline-primary[_ngcontent-%COMP%]:focus, .btn-outline-primary[_ngcontent-%COMP%]:active {\n  border-color: #1c279d;\n  color: #1c279d;\n  background-color: transparent;\n  box-shadow: none;\n}\n\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover, .btn-outline-secondary[_ngcontent-%COMP%]:focus, .btn-outline-secondary[_ngcontent-%COMP%]:active {\n  border-color: #1c279d;\n  color: #1c279d;\n  background-color: transparent;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztBQUVGO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6Qix5Q0FBeUM7RUFDekMsNENBQTRDO0FBQzlDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixnQkFBZ0I7RUFDbEI7O0VBRUE7RUFDQSw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QiwwQ0FBMEM7SUFDMUMsNkNBQTZDO0VBQy9DOztBQUVGOzs7RUFHRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7OztBQUdBOzs7RUFHRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzFjMjc5ZDsgXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWMyNzlkO1xuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50OyBcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDsgXG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7IFxuICBib3JkZXI6IDNweCBzb2xpZCAjMWMyNzlkOyBcbiAgYm9yZGVyLWNvbG9yOiAjMWMyNzlkO1xuICBjb2xvcjogIzFjMjc5ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzFjMjc5ZDtcbiAgICBjb2xvcjogIzFjMjc5ZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9ICBcblxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIsXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpmb2N1cyxcbi5idG4tb3V0bGluZS1wcmltYXJ5OmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzFjMjc5ZDtcbiAgY29sb3I6ICMxYzI3OWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIsXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmZvY3VzLFxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTphY3RpdmUge1xuICBib3JkZXItY29sb3I6ICMxYzI3OWQ7XG4gIGNvbG9yOiAjMWMyNzlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3184:
/*!************************************************************!*\
  !*** ./src/app/component/watchlist/watchlist.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WatchlistComponent: () => (/* binding */ WatchlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_service_new_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/new.service */ 8089);





const _c0 = a0 => ["/search", a0];
const _c1 = (a0, a1, a2) => ({
  "text-success": a0,
  "text-dark": a1,
  "text-danger": a2
});
function WatchlistComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Currently you don't have any stock. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function WatchlistComponent_div_6_div_3_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WatchlistComponent_div_6_div_3_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WatchlistComponent_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 12)(2, "div", 13)(3, "div", 14)(4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WatchlistComponent_div_6_div_3_Template_button_click_4_listener($event) {
      const list_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onButtonClick($event, list_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16)(6, "div", 17)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, WatchlistComponent_div_6_div_3_span_15_Template, 2, 0, "span", 20)(16, WatchlistComponent_div_6_div_3_span_16_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const list_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, list_r2.ticker));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r2.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](11, _c1, list_r2.price > 0, list_r2.price == 0, list_r2.price < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r2.vw);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r2.price > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r2.price < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", list_r2.price, " (", list_r2.percent, "%)");
  }
}
function WatchlistComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WatchlistComponent_div_6_div_3_Template, 19, 15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.watchlist);
  }
}
class WatchlistComponent {
  constructor(server) {
    this.server = server;
    this.watchlist = [];
  }
  ngOnInit() {
    const options = {
      documentName: 'watchlist',
      params: {}
    };
    const Promise = this.server.getData(options);
    Promise.then(result => {
      this.watchlist = result.length == 0 ? [[]] : result;
    }).catch(err => {
      throw err;
    });
  }
  onButtonClick(event, id) {
    event.stopPropagation();
    this.delWatchlist(id);
  }
  delWatchlist(_id) {
    const options = {
      documentName: 'watchlist',
      params: {
        _id: _id
      }
    };
    const savePromise = this.server.del(options);
    savePromise.then(results => {
      if (results == 'ok') {
        window.location.reload();
      }
    }).catch(err => {
      throw err;
    });
  }
  static #_ = this.ɵfac = function WatchlistComponent_Factory(t) {
    return new (t || WatchlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_new_service__WEBPACK_IMPORTED_MODULE_0__.NewService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WatchlistComponent,
    selectors: [["app-watchlist"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 6,
    consts: [[1, "container-fluid", "container"], [1, "custom-margin"], ["class", "container-fluid custom-container", 4, "ngIf"], ["class", "card-container py-3", 4, "ngIf"], [1, "container-fluid", "custom-container"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-10", "col-md-8", "col-lg-7"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show"], [1, "card-container", "py-3"], [1, "row"], [1, "col-12", "col-md-10", "col-lg-7", "mx-auto"], [4, "ngFor", "ngForOf"], [1, "no-underline", 3, "routerLink"], [1, "card", "mb-3"], [1, "card-body"], ["type", "button", "aria-label", "Close", 1, "btn-close", "position-absolute", "top-0", "end-0", "me-3", "mt-3", 2, "width", "1rem", "height", "1rem", 3, "click"], [1, "row", "g-0"], [1, "col-9"], [1, "col-3", 3, "ngClass"], [2, "line-height", "24px"], ["class", "material-icons md-dark", "style", "vertical-align: middle;", 4, "ngIf"], [2, "vertical-align", "middle"], [1, "material-icons", "md-dark", 2, "vertical-align", "middle"]],
    template: function WatchlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "My Watchlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WatchlistComponent_div_4_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WatchlistComponent_div_6_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "json");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx.watchlist[0]) == "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, ctx.watchlist[0]) != "{}" && (ctx.watchlist[0] == null ? null : ctx.watchlist[0].length) != 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".custom-margin[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-top: 3rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 750px;\n}\n\n.card-container[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 1.5rem;\n    height: 1.5rem;\n    z-index: 10;\n}\n  \n.card-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    margin-left: 2rem;\n}\n\n.no-underline[_ngcontent-%COMP%] {\n    text-decoration: none;\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50L3dhdGNobGlzdC93YXRjaGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLW1hcmdpbiB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmJ0bi1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC41cmVtO1xuICAgIHJpZ2h0OiAwLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB6LWluZGV4OiAxMDtcbn1cbiAgXG4uY2FyZC1jb250YWluZXIgLmNhcmQtdGl0bGUsXG4uY2FyZC1jb250YWluZXIgLmNhcmQtdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbi5uby11bmRlcmxpbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1478:
/*!*****************************************!*\
  !*** ./src/app/service/auto.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoService: () => (/* binding */ AutoService)
/* harmony export */ });
/* harmony import */ var _Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 5677);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class AutoService {
  constructor() {
    const portSuffix = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.port ? `:${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.port}` : '';
    this.baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.protocol}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.hostname}${portSuffix}`;
  }
  autoComplate(options) {
    var _this = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this.baseUrl + '/api/index/autocom';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  static #_ = this.ɵfac = function AutoService_Factory(t) {
    return new (t || AutoService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AutoService,
    factory: AutoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8089:
/*!****************************************!*\
  !*** ./src/app/service/new.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewService: () => (/* binding */ NewService)
/* harmony export */ });
/* harmony import */ var _Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 5677);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class NewService {
  constructor() {
    this.protocol = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.protocol;
    this.hostname = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.hostname;
    this.baseUrl = `${this.protocol}://${this.hostname}`;
    if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production && location.hostname === 'localhost') {
      this.baseUrl = `${this.baseUrl}:${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.port}`;
    }
  }
  // get data
  getData(options) {
    var _this = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this.baseUrl + '/api/getData';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  // write data
  createData(options) {
    var _this2 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this2.baseUrl + '/api/database/create';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().post(httpUrl, options);
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  // create data i 
  createDataI(options) {
    var _this3 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this3.baseUrl + '/api/database/initialWallet';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().post(httpUrl, options);
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  // update data
  updateData(options) {
    var _this4 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this4.baseUrl + '/api/database/update';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().post(httpUrl, options);
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  // update one
  updateOne(options) {
    var _this5 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this5.baseUrl + '/api/database/updateOne';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().post(httpUrl, options);
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  // delete data 
  deleteData(options) {
    var _this6 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this6.baseUrl + '/api/database/deleteData';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().post(httpUrl, options);
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  // del watchlist
  del(options) {
    var _this7 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this7.baseUrl + '/api/database/del';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().post(httpUrl, options);
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  // delete many
  delMany(options) {
    var _this8 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this8.baseUrl + '/api/database/delMany';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().post(httpUrl, options);
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //get stock profile
  searchStock(options) {
    var _this9 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this9.baseUrl + '/api/index/searchStock';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //finnhub peers
  finhubPeers(options) {
    var _this10 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this10.baseUrl + '/api/index/finnhubpeers';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //get news
  companyNews(options) {
    var _this11 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this11.baseUrl + '/api/index/companynews';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //finnhub stock quote
  finnhubQuote(options) {
    var _this12 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this12.baseUrl + '/api/index/finnhubquote';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //polygon
  polygonAggs(options) {
    var _this13 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this13.baseUrl + '/api/index/search/polygonaggs';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //polygon ticker
  polygonAggsTicker(options) {
    var _this14 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this14.baseUrl + '/api/index/search/polygonaggsticker';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //market status
  marketStatus(options) {
    var _this15 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this15.baseUrl + '/api/index/marketstatus';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //get insider
  insider(options) {
    var _this16 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this16.baseUrl + '/api/index/search/insider';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //get recommendation
  recommendation(options) {
    var _this17 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this17.baseUrl + '/api/index/search/recommendation';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  //get earning
  earning(options) {
    var _this18 = this;
    return (0,_Users_jingeyao_Desktop_stocksearch_hw3_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpUrl = _this18.baseUrl + '/api/index/search/earning';
      let promise;
      try {
        promise = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(httpUrl, {
          params: options
        });
      } catch (error) {
        throw error;
      }
      return promise.data;
    })();
  }
  static #_ = this.ɵfac = function NewService_Factory(t) {
    return new (t || NewService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: NewService,
    factory: NewService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6935:
/*!**************************************************!*\
  !*** ./src/app/service/searchHistory.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchHistoryService: () => (/* binding */ SearchHistoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SearchHistoryService {
  constructor() {
    this.searchHistory = '';
  }
  static #_ = this.ɵfac = function SearchHistoryService_Factory(t) {
    return new (t || SearchHistoryService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SearchHistoryService,
    factory: SearchHistoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  protocol: 'http',
  hostname: 'localhost',
  port: '8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map