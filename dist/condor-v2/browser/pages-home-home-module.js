(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "3UD+":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "5UfF":
/*!**************************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/is-nodejs-env.js ***!
  \**************************************************************/
/*! exports provided: isNodeJSEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeJSEnv", function() { return isNodeJSEnv; });
/**
 * Boolean with the result of the check if package
 * is running on the browser or in a NodeJS environment
 *
 * @returns boolean
 *
 */
const isNodeJSEnv = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
// Interesting fact:
// Some bundlers are resolving `process`, so it needs to check for process.release.name
// since it's a NodeJS only environment value.
// More details in https://nodejs.org/api/process.html#process_process_release



/***/ }),

/***/ "9yOZ":
/*!************************************************!*\
  !*** ./src/app/@sharing/faixa/faixa.module.ts ***!
  \************************************************/
/*! exports provided: FaixaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaixaModule", function() { return FaixaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/directive.module */ "YfWO");
/* harmony import */ var _faixa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faixa.component */ "COzk");







class FaixaModule {
}
FaixaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaixaModule });
FaixaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaixaModule_Factory(t) { return new (t || FaixaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaixaModule, { declarations: [_faixa_component__WEBPACK_IMPORTED_MODULE_5__["FaixaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_faixa_component__WEBPACK_IMPORTED_MODULE_5__["FaixaComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaixaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_faixa_component__WEBPACK_IMPORTED_MODULE_5__["FaixaComponent"]],
                exports: [_faixa_component__WEBPACK_IMPORTED_MODULE_5__["FaixaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AOHC":
/*!****************************************************************!*\
  !*** ./src/app/@widgets/institucional/institucional.module.ts ***!
  \****************************************************************/
/*! exports provided: InstitucionalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucionalModule", function() { return InstitucionalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sharing/titulo/titulo.module */ "VlVH");
/* harmony import */ var _institucional_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./institucional.component */ "jj2f");








class InstitucionalModule {
}
InstitucionalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InstitucionalModule });
InstitucionalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InstitucionalModule_Factory(t) { return new (t || InstitucionalModule)(); }, imports: [[
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_5__["TituloModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InstitucionalModule, { declarations: [_institucional_component__WEBPACK_IMPORTED_MODULE_6__["InstitucionalComponent"]], imports: [_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_5__["TituloModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_institucional_component__WEBPACK_IMPORTED_MODULE_6__["InstitucionalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstitucionalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_institucional_component__WEBPACK_IMPORTED_MODULE_6__["InstitucionalComponent"]],
                exports: [_institucional_component__WEBPACK_IMPORTED_MODULE_6__["InstitucionalComponent"]],
                imports: [
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_5__["TituloModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "COzk":
/*!***************************************************!*\
  !*** ./src/app/@sharing/faixa/faixa.component.ts ***!
  \***************************************************/
/*! exports provided: FaixaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaixaComponent", function() { return FaixaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




const _c0 = function () { return ["/institucional/radar-de-ofertas"]; };
function FaixaComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/clubecondor"]; };
function FaixaComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class FaixaComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaixaComponent.ɵfac = function FaixaComponent_Factory(t) { return new (t || FaixaComponent)(); };
FaixaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaixaComponent, selectors: [["app-faixa"]], inputs: { type: "type" }, decls: 2, vars: 2, consts: [["id", "banner-top", "class", "condor-banner", 4, "ngIf"], ["id", "banner-footer", "class", "condor-banner clube-banner", 4, "ngIf"], ["id", "banner-top", 1, "condor-banner"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col"], ["rel", "noopener noreferrer", "target", "_blank", 3, "routerLink"], ["Lazy", "", "id", "banner-top", "src", "/assets/images/radar_ofertas.jpg", "alt", "Radar do Ofertas", 1, "img-fluid", "d-none", "d-md-block"], ["Lazy", "", "id", "banner-top", "src", "./assets/images/radar_ofertas_mobile.jpg", "alt", "Radar do Ofertas", 1, "img-fluid", "d-md-none"], ["id", "banner-footer", 1, "condor-banner", "clube-banner"], [1, "col-xl-8", "col-lg-10", "col-md-11"], ["Lazy", "", "id", "banner-footer", "src", "./assets/images/faixa/clube.png", "alt", "Clube Condor", 1, "img-fluid", "d-none", "d-md-block"], ["Lazy", "", "id", "banner-footer", "src", "./assets/images/faixa/clube_mobile.png", "alt", "Clube Condor", 1, "img-fluid", "d-md-none"]], template: function FaixaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FaixaComponent_section_0_Template, 7, 2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FaixaComponent_section_1_Template, 7, 2, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "radar" || ctx.type === "whats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "clube");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".whats-banner[_ngcontent-%COMP%] {\n  background-image: url('bg_whats.png'), linear-gradient(to right, #004c5a, #047e96, #004c5a);\n}\n\n.clube-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(220, 13, 5, 0) 95%, #dc0d05 95%), linear-gradient(to right, #016798, #01c6fb, #016798);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJpbmcvZmFpeGEvZmFpeGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyRkFBQTtBQUNKOztBQUVBO0VBQ0ksNkhBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyaW5nL2ZhaXhhL2ZhaXhhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoYXRzLWJhbm5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZhaXhhL2JnX3doYXRzLnBuZycpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDRjNWEsICMwNDdlOTYsICMwMDRjNWEpO1xufVxuXG4uY2x1YmUtYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMjAsIDEzLCA1LCAwKSA5NSUsIHJnYmEoMjIwLCAxMywgNSwgMSkgOTUlKSxsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMTY3OTgsICMwMWM2ZmIsICMwMTY3OTgpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIHt9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaixaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faixa',
                templateUrl: './faixa.component.html',
                styleUrls: ['./faixa.component.scss']
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "EuKt":
/*!******************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/marks.js ***!
  \******************************************************/
/*! exports provided: start, end, clear, clearAll, isUserTimingAPISupported, isPerformanceObservableSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAll", function() { return clearAll; });
/* harmony import */ var _is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-user-timing-api-supported */ "oyBm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUserTimingAPISupported", function() { return _is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__["isUserTimingAPISupported"]; });

/* harmony import */ var _is_performance_observable_supported__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-performance-observable-supported */ "dgof");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPerformanceObservableSupported", function() { return _is_performance_observable_supported__WEBPACK_IMPORTED_MODULE_1__["isPerformanceObservableSupported"]; });

/* harmony import */ var _is_nodejs_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-nodejs-env */ "5UfF");



// Map() is not used in order to decrease the bundle
let marksMap = {};
let marksObserver = {};
/**
 * Get the current time based on User Timing API or Date
 *
 * @returns number
 *
 */
const getTimeNow = () => (_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__["isUserTimingAPISupported"] ? performance.now() : Date.now());
/**
 * Clear marks and measure of performance event
 *
 * @param markName - Performance marker to be checked
 *
 * @returns void
 *
 */
const clear = (markName) => {
    marksMap[markName] = undefined;
    // Removes PerformanceObserver references from memory
    if (!!marksObserver[markName]) {
        marksObserver[markName] = undefined;
    }
    if (!_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__["isUserTimingAPISupported"]) {
        return;
    }
    // Some versions of NodeJS doesn't support this method
    if (!_is_nodejs_env__WEBPACK_IMPORTED_MODULE_2__["isNodeJSEnv"]) {
        performance.clearMeasures(markName);
    }
    performance.clearMarks(markName);
};
/**
 * Start performance measure of event
 *
 * @param markName - Performance marker to be started
 *
 * @returns number
 *
 */
const start = (markName) => {
    if (_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__["isUserTimingAPISupported"]) {
        if (_is_nodejs_env__WEBPACK_IMPORTED_MODULE_2__["isNodeJSEnv"] && _is_performance_observable_supported__WEBPACK_IMPORTED_MODULE_1__["isPerformanceObservableSupported"]) {
            // eslint-disable-next-line compat/compat
            const obs = new PerformanceObserver(list => {
                marksObserver[markName] = list.getEntries().find(f => f.name === markName);
                obs.disconnect();
            });
            obs.observe({ entryTypes: ['measure'] });
        }
        performance.mark(markName);
    }
    marksMap[markName] = getTimeNow();
};
/**
 * Finishes performance measure of event and
 * clear marks and measure if applicable
 *
 * @param markName - Performance marker to be checked
 * @param markNameToCompare - Optional mark to compare to
 *
 * @returns PerfMarksPerformanceEntry
 *
 */
const end = (markName, markNameToCompare) => {
    try {
        const startTime = marksMap[markName];
        if (!_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__["isUserTimingAPISupported"]) {
            return startTime
                ? { duration: getTimeNow() - startTime, startTime, entryType: 'measure', name: markName }
                : {};
        }
        // If there's no User Timing mark to be compared with,
        // the package will create one to be used for better comparison
        if (!markNameToCompare) {
            performance.mark(`${markName}-end`);
        }
        performance.measure(markName, markName, markNameToCompare || `${markName}-end`);
        if (_is_nodejs_env__WEBPACK_IMPORTED_MODULE_2__["isNodeJSEnv"]) {
            if (!!marksObserver[markName]) {
                return marksObserver[markName];
            }
            return startTime
                ? { duration: getTimeNow() - startTime, startTime, entryType: 'measure', name: markName }
                : {};
        }
        const entry = performance.getEntriesByName(markName).pop();
        return entry || {};
    }
    catch (e) {
        // If previous mark was missing for some reason, this will throw.
        // This could only happen if something in event loop crashed
        // in an unexpected place earlier.
        // Don't pile on with more errors.
        return {};
    }
    finally {
        // Clear marks immediately to avoid growing buffer.
        clear(markName);
        // Clear marks used for comparison in case of it's value was passed
        // If the mark to compare is not passed, it should remove the one we create with `-end` suffix
        clear(markNameToCompare || `${markName}-end`);
    }
};
/**
 * Clear all marks and measures of performance event
 *
 * @returns void
 *
 */
const clearAll = () => {
    marksMap = {};
    marksObserver = {};
    if (!_is_user_timing_api_supported__WEBPACK_IMPORTED_MODULE_0__["isUserTimingAPISupported"]) {
        return;
    }
    // Some versions of NodeJS doesn't support this method
    if (!_is_nodejs_env__WEBPACK_IMPORTED_MODULE_2__["isNodeJSEnv"]) {
        performance.clearMeasures();
    }
    performance.clearMarks();
};



/***/ }),

/***/ "FCmR":
/*!******************************************************!*\
  !*** ./src/app/@sharing/sem-data/sem-data.module.ts ***!
  \******************************************************/
/*! exports provided: SemDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemDataModule", function() { return SemDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _sem_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sem-data.component */ "q3cj");





class SemDataModule {
}
SemDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SemDataModule });
SemDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SemDataModule_Factory(t) { return new (t || SemDataModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SemDataModule, { declarations: [_sem_data_component__WEBPACK_IMPORTED_MODULE_3__["SemDataComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"]], exports: [_sem_data_component__WEBPACK_IMPORTED_MODULE_3__["SemDataComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SemDataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sem_data_component__WEBPACK_IMPORTED_MODULE_3__["SemDataComponent"]],
                exports: [_sem_data_component__WEBPACK_IMPORTED_MODULE_3__["SemDataComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Iw7Z":
/*!******************************************************!*\
  !*** ./src/app/@widgets/carousel/carousel.module.ts ***!
  \******************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.component */ "TJOJ");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-skeleton-loader */ "WzhS");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-responsive */ "X2yv");
/* harmony import */ var _ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ofertas/ofertas.module */ "klR4");
/* harmony import */ var _sharing_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sharing/swipe/swipe.module */ "zEFZ");












class CarouselModule {
}
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[
            _sharing_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_9__["SwipeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_8__["OfertasModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderModule"],
            ngx_responsive__WEBPACK_IMPORTED_MODULE_7__["ResponsiveModule"].forRoot(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].responsive)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]], imports: [_sharing_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_9__["SwipeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_8__["OfertasModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderModule"], ngx_responsive__WEBPACK_IMPORTED_MODULE_7__["ResponsiveModule"]], exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]],
                exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]],
                imports: [
                    _sharing_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_9__["SwipeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_8__["OfertasModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_6__["NgxSkeletonLoaderModule"],
                    ngx_responsive__WEBPACK_IMPORTED_MODULE_7__["ResponsiveModule"].forRoot(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].responsive)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "JBG6":
/*!***********************************************!*\
  !*** ./src/app/@pages/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "z8v2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _widgets_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@widgets/carousel/carousel.component */ "TJOJ");
/* harmony import */ var _widgets_ofertas_ofertas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@widgets/ofertas/ofertas.component */ "Dyj9");
/* harmony import */ var _sharing_faixa_faixa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@sharing/faixa/faixa.component */ "COzk");
/* harmony import */ var _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@sharing/select-loja/select-loja.component */ "sCWG");
/* harmony import */ var _widgets_banners_banners_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @widgets/banners/banners.component */ "Q3cU");
/* harmony import */ var _widgets_post_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@widgets/post/post.component */ "oC+I");
/* harmony import */ var _widgets_institucional_institucional_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@widgets/institucional/institucional.component */ "jj2f");
/* harmony import */ var _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@sharing/sem-data/sem-data.component */ "q3cj");

















function HomeComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-widget-ofertas", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-faixa", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-select-loja", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-widget-ofertas", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-banners");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-widget-ofertas", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-widget-ofertas", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-faixa", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-widget-post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-widget-institucional");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ofertas_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ofertas_r3[0].code)("title", ofertas_r3[0].titulo)("icon", ofertas_r3[0].icon)("link", ofertas_r3[0].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ofertas_r3[1].code)("title", ofertas_r3[1].titulo)("icon", ofertas_r3[1].icon)("link", ofertas_r3[1].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ofertas_r3[2].code)("title", ofertas_r3[2].titulo)("icon", ofertas_r3[2].icon)("link", ofertas_r3[2].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ofertas_r3[3].code)("title", ofertas_r3[3].titulo)("icon", ofertas_r3[3].icon)("link", ofertas_r3[3].link);
} }
function HomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sem-data");
} }
class HomeComponent {
    constructor(seo, db, util, news, ch, storageMap) {
        this.seo = seo;
        this.db = db;
        this.util = util;
        this.news = news;
        this.ch = ch;
        this.storageMap = storageMap;
        this.show = true;
        this.ofertasdia = [];
        this.getLoadOfertas = () => {
            this.storageMap.watch('Loja').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((res) => {
                this.db.getOfertas(res['loja']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
            });
            this.ch.detectChanges();
        };
    }
    ngOnInit() {
        this.getLoadOfertas();
        this.seo.dataLayerPage('Home');
        this.news.getBanners().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
        this.data$ = this.util.getStatic$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res[3].data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1500));
    }
    ngAfterViewInit() {
        this.getLoadOfertas();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageMap"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["semData", ""], ["type", "slug", 3, "code", "title", "icon", "link"], ["type", "whats"], [1, "container", "my-2"], ["type", "alert"], ["type", "departamento", 3, "code", "title", "icon", "link"], ["type", "clube"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_section_0_Template, 13, 16, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.data$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _widgets_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _widgets_ofertas_ofertas_component__WEBPACK_IMPORTED_MODULE_9__["OfertasComponent"], _sharing_faixa_faixa_component__WEBPACK_IMPORTED_MODULE_10__["FaixaComponent"], _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_11__["SelectLojaComponent"], _widgets_banners_banners_component__WEBPACK_IMPORTED_MODULE_12__["BannersComponent"], _widgets_post_post_component__WEBPACK_IMPORTED_MODULE_13__["PostComponent"], _widgets_institucional_institucional_component__WEBPACK_IMPORTED_MODULE_14__["InstitucionalComponent"], _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_15__["SemDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BwYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }, { type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageMap"] }]; }, null); })();


/***/ }),

/***/ "Q3cU":
/*!*******************************************************!*\
  !*** ./src/app/@widgets/banners/banners.component.ts ***!
  \*******************************************************/
/*! exports provided: BannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersComponent", function() { return BannersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _sharing_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@sharing/image/image.component */ "Zy7B");







function BannersComponent_section_0_mdb_carousel_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", l_r6);
} }
function BannersComponent_section_0_mdb_carousel_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", c_r7);
} }
function BannersComponent_section_0_mdb_carousel_item_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", r_r8);
} }
function BannersComponent_section_0_mdb_carousel_item_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", m_r9);
} }
function BannersComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BannersComponent_section_0_mdb_carousel_item_5_Template, 2, 1, "mdb-carousel-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BannersComponent_section_0_mdb_carousel_item_8_Template, 2, 1, "mdb-carousel-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mdb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BannersComponent_section_0_mdb_carousel_item_11_Template, 2, 1, "mdb-carousel-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mdb-carousel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BannersComponent_section_0_mdb_carousel_item_16_Template, 2, 1, "mdb-carousel-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const banner_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 2050)("animation", "fade")("isControls", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", banner_r1.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 2050)("animation", "fade")("isControls", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", banner_r1.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 2050)("animation", "fade")("isControls", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", banner_r1.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 3500)("animation", "false")("isControls", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.mobile);
} }
class BannersComponent {
    constructor(news) {
        this.news = news;
        this.mobile = [];
    }
    ngOnInit() {
        this.getImage();
    }
    getImage() {
        this.items = this.news.getBanners$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return {
                left: res.filter((rows) => rows.position === 'middle-left'),
                center: res.filter((rows) => rows.position === 'middle-center'),
                right: res.filter((rows) => rows.position === 'middle-right')
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.mobile.push(res.left[0]);
            this.mobile.push(res.center[0]);
            this.mobile.push(res.right[0]);
        }));
    }
}
BannersComponent.ɵfac = function BannersComponent_Factory(t) { return new (t || BannersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"])); };
BannersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannersComponent, selectors: [["app-banners"]], decls: 2, vars: 3, consts: [["id", "bannerTres", "class", "py-3 py-md-0", 4, "ngIf"], ["id", "bannerTres", 1, "py-3", "py-md-0"], [1, "container", "d-none", "d-md-block"], [1, "row", "ios"], [1, "col-sm-4", "ol-md-4", "mb-1"], [1, "carousel", "slide", "carousel-fade", "z-depth-1", 3, "interval", "animation", "isControls"], [4, "ngFor", "ngForOf"], [1, "col-sm-4", "col-md-4", "mb-1"], [1, "container", "d-md-none"], [1, "row"], [1, "col-12"], ["idImage", "banner-middle-left", 3, "code"], ["idImage", "banner-middle-center", 3, "code"], ["idImage", "banner-middle-right", 3, "code"], ["idImage", "banner-X", 3, "code"]], template: function BannersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BannersComponent_section_0_Template, 17, 16, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["SlideComponent"], _sharing_image_image_component__WEBPACK_IMPORTED_MODULE_5__["ImageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".rotativo[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.8rem;\n  margin: 0.75rem 0 0.5rem 0;\n}\n\n@media (max-width: 768px) {\n  .rotativo[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 576px) {\n  .col-lg-8[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    width: 100% !important;\n    padding-right: 0px !important;\n    padding-left: 0px !important;\n  }\n\n  .rotativo[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0 10px;\n  }\n}\n\n@media (max-width: 767px) and (orientation: landscape) {\n  #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    min-width: 100% !important;\n  }\n}\n\n@media (max-width: 450px) {\n  #banner[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvYmFubmVycy9iYW5uZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VBQ0o7QUFDRjs7QUFHQTtFQUNFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQURKOztFQUlBO0lBQ0ksc0JBQUE7SUFDQSw2QkFBQTtJQUNBLDRCQUFBO0VBREo7O0VBR0E7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RUFBSjtBQUNGOztBQUlBO0VBQ0U7SUFDSSwwQkFBQTtFQUZKO0FBQ0Y7O0FBTUE7RUFDRTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7RUFKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHdpZGdldHMvYmFubmVycy9iYW5uZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdGF0aXZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IC44cmVtO1xuICBtYXJnaW46IC43NXJlbSAwIC41cmVtIDA7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yb3RhdGl2byB7XG4gICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNvbC1sZy04LCAuY29sLWxnLTQsIC5jb2wtbWQtNntcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lcntcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJvdGF0aXZvIHtcbiAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICNiYW5uZXIsIC5jb250YWluZXIgeyBcbiAgICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogNDUwcHgpIHtcbiAgI2Jhbm5lciwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wtbWQtNCwgLmNvbC1sZy00LCAuY29sLXNtLTQgeyBcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banners',
                templateUrl: './banners.component.html',
                styleUrls: ['./banners.component.scss'],
            }]
    }], function () { return [{ type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "QOJq":
/*!*************************************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/user-timing-api-resolver.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _is_nodejs_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-nodejs-env */ "5UfF");

if (_is_nodejs_env__WEBPACK_IMPORTED_MODULE_0__["isNodeJSEnv"] &&
    !global.PerformanceObserver &&
    !global.performance &&
    module &&
    typeof module.require === 'function') {
    /**
     * Requires a module which is protected against bundler minification.
     *
     * @param pkg The module path to resolve
     */
    const dynamicRequire = (mod, pkg) => {
        return mod.require(pkg);
    };
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { PerformanceObserver, performance } = dynamicRequire(module, 'perf_hooks');
        global.PerformanceObserver = PerformanceObserver;
        global.performance = performance;
    }
    catch (error) {
        throw new Error(`Your NodeJS application doesn't support 'perf_hooks'. ${error}`);
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "TJOJ":
/*!*********************************************************!*\
  !*** ./src/app/@widgets/carousel/carousel.component.ts ***!
  \*********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-responsive */ "X2yv");
/* harmony import */ var _sharing_swipe_swipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@sharing/swipe/swipe.component */ "a6nB");
/* harmony import */ var _ofertas_ofertas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ofertas/ofertas.component */ "Dyj9");








function CarouselComponent_section_0_app_widget_ofertas_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-widget-ofertas", 11);
} }
function CarouselComponent_section_0_app_widget_ofertas_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-widget-ofertas", 12);
} }
const _c0 = function () { return ["xs"]; };
function CarouselComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_section_0_app_widget_ofertas_4_Template, 1, 0, "app-widget-ofertas", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-swipe", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CarouselComponent_section_0_app_widget_ofertas_8_Template, 1, 0, "app-widget-ofertas", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-swipe", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showItBootstrap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showItBootstrap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.right);
} }
class CarouselComponent {
    constructor(news) {
        this.news = news;
    }
    ngOnInit() {
        this.data$ = this.news.getBanners$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            return {
                left: res === null || res === void 0 ? void 0 : res.filter(row => row.position.includes('top-left')),
                right: res === null || res === void 0 ? void 0 : res.filter(row => row.position.includes('top-right')),
            };
        }));
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 2, vars: 3, consts: [["id", "carousel", "class", "py-0 py-md-3", 4, "ngIf"], ["id", "carousel", 1, "py-0", "py-md-3"], ["id", "banner", 1, "container"], [1, "row", "ios"], [1, "col-sm-8", "col-md-8", "col-lg-8", "mb-1"], ["code", "dia", "title", "Ofertas do dia", "icon", "fas fa-shopping-basket", "link", "/ofertas-do-dia", "type", "slug", 4, "showItBootstrap"], [1, "z-depth-1"], ["idImage", "banner-home-left", "size", "730x350", 3, "data"], [1, "col-sm-4", "col-md-4", "col-lg-4"], ["code", "geral", "title", "Mais procurados", "icon", "fas fa-shopping-basket", "link", "/ofertas-para-voce", "type", "slug", 4, "showItBootstrap"], ["idImage", "banner-home-right", "size", "350x350", 3, "data"], ["code", "dia", "title", "Ofertas do dia", "icon", "fas fa-shopping-basket", "link", "/ofertas-do-dia", "type", "slug"], ["code", "geral", "title", "Mais procurados", "icon", "fas fa-shopping-basket", "link", "/ofertas-para-voce", "type", "slug"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_section_0_Template, 11, 6, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.data$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_responsive__WEBPACK_IMPORTED_MODULE_4__["ShowItBootstrapDirective"], _sharing_swipe_swipe_component__WEBPACK_IMPORTED_MODULE_5__["SwipeComponent"], _ofertas_ofertas_component__WEBPACK_IMPORTED_MODULE_6__["OfertasComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["@media (max-width: 767px) and (orientation: landscape) {\n  #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    min-width: 100% !important;\n  }\n}\n@media (max-width: 450px) {\n  #banner[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLDBCQUFBO0VBQ047QUFDRjtBQUdBO0VBQ0k7SUFDSSw0QkFBQTtJQUNBLDZCQUFBO0VBRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL0B3aWRnZXRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICNiYW5uZXIsIC5jb250YWluZXIgeyBcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgI2Jhbm5lciwgLmNvbC1tZC04LCAuY29sLWxnLTgsIC5jb2wtbWQtNCwgLmNvbC1sZy00IHsgXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss']
            }]
    }], function () { return [{ type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "WzhS":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js ***!
  \**************************************************************************/
/*! exports provided: NgxSkeletonLoaderComponent, NgxSkeletonLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSkeletonLoaderComponent", function() { return NgxSkeletonLoaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSkeletonLoaderModule", function() { return NgxSkeletonLoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perf-marks/marks */ "erbw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-skeleton-loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = function (a0, a1, a2, a3) { return { circle: a0, progress: a1, "progress-dark": a2, pulse: a3 }; };
function NgxSkeletonLoaderComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, ctx_r0.appearance === "circle", ctx_r0.animation === "progress", ctx_r0.animation === "progress-dark", ctx_r0.animation === "pulse"))("ngStyle", ctx_r0.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuetext", ctx_r0.loadingText);
} }
class NgxSkeletonLoaderComponent {
    constructor() {
        this.count = 1;
        this.loadingText = 'Loading...';
        this.appearance = '';
        this.animation = 'progress';
        // This is required since ngStyle is using `any` as well
        // More details in https://angular.io/api/common/NgStyle
        // tslint:disable-next-line: no-any
        this.theme = {};
        // tslint:disable-next-line: no-any
        this.items = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Object(perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__["start"])('NgxSkeletonLoader:Rendered');
        Object(perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__["start"])('NgxSkeletonLoader:Loaded');
        this.validateInputValues();
    }
    /**
     * @private
     * @return {?}
     */
    validateInputValues() {
        // Checking if it's receiving a numeric value (string having ONLY numbers or if it's a number)
        if (!/^\d+$/.test(`${this.count}`)) {
            // Shows error message only in Development
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'count' a numeric value. Forcing default to "1".`);
            }
            this.count = 1;
        }
        this.items.length = this.count;
        /** @type {?} */
        const allowedAnimations = ['progress', 'progress-dark', 'pulse', 'false'];
        if (allowedAnimations.indexOf(String(this.animation)) === -1) {
            // Shows error message only in Development
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${allowedAnimations.join(', ')}. Forcing default to "progress".`);
            }
            this.animation = 'progress';
        }
        if (['circle', ''].indexOf(String(this.appearance)) === -1) {
            // Shows error message only in Development
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'appearance' as: circle or empty string. Forcing default to "''".`);
            }
            this.appearance = '';
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Avoiding multiple calls for the same input in case there's no changes in the fields
        // Checking if the fields that require validation are available and if they were changed
        // In case were not changed, we stop the function. Otherwise, `validateInputValues` will be called.
        if (['count', 'animation', 'appearance'].find((/**
         * @param {?} key
         * @return {?}
         */
        key => changes[key] && (changes[key].isFirstChange() || changes[key].previousValue === changes[key].currentValue)))) {
            return;
        }
        this.validateInputValues();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        Object(perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__["end"])('NgxSkeletonLoader:Rendered');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        Object(perf_marks_marks__WEBPACK_IMPORTED_MODULE_1__["end"])('NgxSkeletonLoader:Loaded');
    }
}
NgxSkeletonLoaderComponent.ɵfac = function NgxSkeletonLoaderComponent_Factory(t) { return new (t || NgxSkeletonLoaderComponent)(); };
NgxSkeletonLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxSkeletonLoaderComponent, selectors: [["ngx-skeleton-loader"]], inputs: { count: "count", loadingText: "loadingText", appearance: "appearance", animation: "animation", theme: "theme" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "loader", "aria-busy", "true", "aria-valuemin", "0", "aria-valuemax", "100", "role", "progressbar", "tabindex", "0", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], ["aria-busy", "true", "aria-valuemin", "0", "aria-valuemax", "100", "role", "progressbar", "tabindex", "0", 1, "loader", 3, "ngClass", "ngStyle"]], template: function NgxSkeletonLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxSkeletonLoaderComponent_span_0_Template, 1, 8, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:no-repeat #eff1f6;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.loader[_ngcontent-%COMP%]:after, .loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%]{transform:translate3d(0,0,0)}.loader.progress-dark[_ngcontent-%COMP%]:after, .loader.progress-dark[_ngcontent-%COMP%]:before, .loader.progress[_ngcontent-%COMP%]:after, .loader.progress[_ngcontent-%COMP%]:before{box-sizing:border-box}.loader.progress-dark[_ngcontent-%COMP%]:before, .loader.progress[_ngcontent-%COMP%]:before{-webkit-animation:2s ease-in-out infinite progress;animation:2s ease-in-out infinite progress;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:\"\"}.loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.loader.pulse[_ngcontent-%COMP%]{-webkit-animation:1.5s cubic-bezier(.4,0,.2,1) infinite pulse;animation:1.5s cubic-bezier(.4,0,.2,1) infinite pulse;-webkit-animation-delay:.5s;animation-delay:.5s}@media (prefers-reduced-motion:reduce){.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%], .loader.pulse[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%]{background-image:none}}@-webkit-keyframes progress{0%{transform:translate3d(-200px,0,0)}100%{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}100%{transform:translate3d(calc(200px + 100vw),0,0)}}@-webkit-keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}"], changeDetection: 0 });
NgxSkeletonLoaderComponent.propDecorators = {
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSkeletonLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-skeleton-loader',
                template: "<span\n  *ngFor=\"let item of items\"\n  class=\"loader\"\n  aria-busy=\"true\"\n  aria-valuemin=\"0\"\n  aria-valuemax=\"100\"\n  [attr.aria-valuetext]=\"loadingText\"\n  role=\"progressbar\"\n  tabindex=\"0\"\n  [ngClass]=\"{\n    circle: appearance === 'circle',\n    progress: animation === 'progress',\n    'progress-dark': animation === 'progress-dark',\n    pulse: animation === 'pulse'\n  }\"\n  [ngStyle]=\"theme\"\n>\n</span>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".loader{box-sizing:border-box;overflow:hidden;position:relative;background:no-repeat #eff1f6;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.loader:after,.loader:before{box-sizing:border-box}.loader.circle{width:40px;height:40px;margin:5px;border-radius:50%}.loader.progress,.loader.progress-dark{transform:translate3d(0,0,0)}.loader.progress-dark:after,.loader.progress-dark:before,.loader.progress:after,.loader.progress:before{box-sizing:border-box}.loader.progress-dark:before,.loader.progress:before{-webkit-animation:2s ease-in-out infinite progress;animation:2s ease-in-out infinite progress;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:\"\"}.loader.progress:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.loader.progress-dark:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.loader.pulse{-webkit-animation:1.5s cubic-bezier(.4,0,.2,1) infinite pulse;animation:1.5s cubic-bezier(.4,0,.2,1) infinite pulse;-webkit-animation-delay:.5s;animation-delay:.5s}@media (prefers-reduced-motion:reduce){.loader.progress,.loader.progress-dark,.loader.pulse{-webkit-animation:none;animation:none}.loader.progress,.loader.progress-dark{background-image:none}}@-webkit-keyframes progress{0%{transform:translate3d(-200px,0,0)}100%{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}100%{transform:translate3d(calc(200px + 100vw),0,0)}}@-webkit-keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}"]
            }]
    }], function () { return []; }, { count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-skeleton-loader.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxSkeletonLoaderModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxSkeletonLoaderModule,
        };
    }
}
NgxSkeletonLoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxSkeletonLoaderModule });
NgxSkeletonLoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxSkeletonLoaderModule_Factory(t) { return new (t || NgxSkeletonLoaderModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxSkeletonLoaderModule, { declarations: function () { return [NgxSkeletonLoaderComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [NgxSkeletonLoaderComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSkeletonLoaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [NgxSkeletonLoaderComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [NgxSkeletonLoaderComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-skeleton-loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-skeleton-loader.js.map

/***/ }),

/***/ "dgof":
/*!************************************************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/is-performance-observable-supported.js ***!
  \************************************************************************************/
/*! exports provided: isPerformanceObservableSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPerformanceObservableSupported", function() { return isPerformanceObservableSupported; });
/**
 * Boolean with the result of the check if PerformanceObservable
 * is supported for the current browser/NodeJS version
 *
 * @returns boolean
 *
 */
const isPerformanceObservableSupported = typeof PerformanceObserver !== 'undefined' &&
    // eslint-disable-next-line compat/compat
    typeof PerformanceObserver.prototype !== 'undefined' &&
    // eslint-disable-next-line compat/compat
    typeof PerformanceObserver.prototype.constructor === 'function';



/***/ }),

/***/ "erbw":
/*!******************************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/entrypoints/marks.js ***!
  \******************************************************************/
/*! exports provided: start, end, clear, clearAll, isUserTimingAPISupported, isPerformanceObservableSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_timing_api_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-timing-api-resolver */ "QOJq");
/* harmony import */ var _marks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marks */ "EuKt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _marks__WEBPACK_IMPORTED_MODULE_1__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _marks__WEBPACK_IMPORTED_MODULE_1__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return _marks__WEBPACK_IMPORTED_MODULE_1__["clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearAll", function() { return _marks__WEBPACK_IMPORTED_MODULE_1__["clearAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUserTimingAPISupported", function() { return _marks__WEBPACK_IMPORTED_MODULE_1__["isUserTimingAPISupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPerformanceObservableSupported", function() { return _marks__WEBPACK_IMPORTED_MODULE_1__["isPerformanceObservableSupported"]; });





/***/ }),

/***/ "jj2f":
/*!*******************************************************************!*\
  !*** ./src/app/@widgets/institucional/institucional.component.ts ***!
  \*******************************************************************/
/*! exports provided: InstitucionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucionalComponent", function() { return InstitucionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sharing_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@sharing/titulo/titulo.component */ "XtQF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/pipes/sort.pipe */ "JbDX");







const _c0 = function (a1) { return ["institucional", a1]; };
function InstitucionalComponent_section_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
} }
function InstitucionalComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-titulo", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InstitucionalComponent_section_0_div_4_Template, 7, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, items_r1, "id"))("ngForTrackBy", ctx_r0.trackByFunction);
} }
class InstitucionalComponent {
    constructor(db) {
        this.db = db;
        this.trackByFunction = (index, items) => items[index];
    }
    ngOnInit() {
        const q = `?include[]=5&include[]=10&include[]=12&include[]=14`;
        this.items$ = this.db.PageCollection(q);
    }
}
InstitucionalComponent.ɵfac = function InstitucionalComponent_Factory(t) { return new (t || InstitucionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"])); };
InstitucionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstitucionalComponent, selectors: [["app-widget-institucional"]], decls: 2, vars: 3, consts: [["id", "PostInstitucional", "class", "py-3", 4, "ngIf"], ["id", "PostInstitucional", 1, "py-3"], [1, "container"], ["icon", "fas fa-newspaper", "titulo", "Condor. H\u00E1 47 anos faz parte da fam\u00EDlia"], [1, "row", "ios"], ["class", "col-12 col-sm-3 col-md-6 col-lg-3 mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-12", "col-sm-3", "col-md-6", "col-lg-3", "mb-3"], [1, "text-muted", "b-06", 3, "routerLink"], [1, "view", "z-depth-3"], ["Lazy", "", 1, "w-100", 3, "src", "alt"], [1, "mask", "flex-center", "rgba-black-light", "cursor"], [1, "b-07", "white-text", "text-center", "text-shadow"]], template: function InstitucionalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InstitucionalComponent_section_0_Template, 6, 5, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _sharing_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_3__["TituloComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _core_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_5__["SortPipe"]], styles: ["@media (max-width: 767px) and (orientation: landscape) {\n  #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    min-width: 100% !important;\n  }\n}\n@media (max-width: 450px) {\n  .col-sm-3[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvaW5zdGl0dWNpb25hbC9pbnN0aXR1Y2lvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSwwQkFBQTtFQUNOO0FBQ0Y7QUFHQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSw2QkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Ad2lkZ2V0cy9pbnN0aXR1Y2lvbmFsL2luc3RpdHVjaW9uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgI2Jhbm5lciwgLmNvbnRhaW5lciB7IFxuICAgICAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAuY29sLXNtLTMgeyBcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstitucionalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-institucional',
                templateUrl: './institucional.component.html',
                styleUrls: ['./institucional.component.scss']
            }]
    }], function () { return [{ type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "mdwe":
/*!********************************************!*\
  !*** ./src/app/@pages/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-responsive */ "X2yv");
/* harmony import */ var _widgets_post_post_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @widgets/post/post.module */ "ocRE");
/* harmony import */ var _sharing_faixa_faixa_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sharing/faixa/faixa.module */ "9yOZ");
/* harmony import */ var _widgets_ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @widgets/ofertas/ofertas.module */ "klR4");
/* harmony import */ var _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/sem-data/sem-data.module */ "FCmR");
/* harmony import */ var _widgets_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @widgets/carousel/carousel.module */ "Iw7Z");
/* harmony import */ var _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sharing/select-loja/select-loja.module */ "HZLR");
/* harmony import */ var _widgets_institucional_institucional_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @widgets/institucional/institucional.module */ "AOHC");
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home.routes */ "uMeW");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.component */ "JBG6");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _widgets_banners_banners_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @widgets/banners/banners.module */ "plLd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");

















class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _home_routes__WEBPACK_IMPORTED_MODULE_10__["HOME_ROUTE"],
            _widgets_post_post_module__WEBPACK_IMPORTED_MODULE_3__["PostModule"],
            _sharing_faixa_faixa_module__WEBPACK_IMPORTED_MODULE_4__["FaixaModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _widgets_ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_5__["OfertasModule"],
            _widgets_banners_banners_module__WEBPACK_IMPORTED_MODULE_13__["BannersModule"],
            _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
            _widgets_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
            _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
            _widgets_institucional_institucional_module__WEBPACK_IMPORTED_MODULE_9__["InstitucionalModule"],
            ngx_responsive__WEBPACK_IMPORTED_MODULE_2__["ResponsiveModule"].forRoot(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__["environment"].responsive),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _widgets_post_post_module__WEBPACK_IMPORTED_MODULE_3__["PostModule"],
        _sharing_faixa_faixa_module__WEBPACK_IMPORTED_MODULE_4__["FaixaModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _widgets_ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_5__["OfertasModule"],
        _widgets_banners_banners_module__WEBPACK_IMPORTED_MODULE_13__["BannersModule"],
        _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
        _widgets_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
        _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
        _widgets_institucional_institucional_module__WEBPACK_IMPORTED_MODULE_9__["InstitucionalModule"], ngx_responsive__WEBPACK_IMPORTED_MODULE_2__["ResponsiveModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
                imports: [
                    _home_routes__WEBPACK_IMPORTED_MODULE_10__["HOME_ROUTE"],
                    _widgets_post_post_module__WEBPACK_IMPORTED_MODULE_3__["PostModule"],
                    _sharing_faixa_faixa_module__WEBPACK_IMPORTED_MODULE_4__["FaixaModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _widgets_ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_5__["OfertasModule"],
                    _widgets_banners_banners_module__WEBPACK_IMPORTED_MODULE_13__["BannersModule"],
                    _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
                    _widgets_carousel_carousel_module__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"],
                    _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_8__["SelectLojaModule"],
                    _widgets_institucional_institucional_module__WEBPACK_IMPORTED_MODULE_9__["InstitucionalModule"],
                    ngx_responsive__WEBPACK_IMPORTED_MODULE_2__["ResponsiveModule"].forRoot(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__["environment"].responsive),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "oC+I":
/*!*************************************************!*\
  !*** ./src/app/@widgets/post/post.component.ts ***!
  \*************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sharing_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@sharing/titulo/titulo.component */ "XtQF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");








const _c0 = function (a1) { return ["/blog", a1]; };
function PostComponent_section_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mdb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdb-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mdb-card-text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r3.medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", post_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, post_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r3.title, "");
} }
const _c1 = function () { return ["/blog"]; };
function PostComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-titulo", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostComponent_section_0_div_4_Template, 12, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ver todos os posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1)("ngForTrackBy", ctx_r0.trackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
class PostComponent {
    constructor(db) {
        this.db = db;
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.items$ = this.db.Blog(1, 4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.body));
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-widget-post"]], decls: 2, vars: 3, consts: [["id", "blogger", "class", "py-3", 4, "ngIf"], ["id", "blogger", 1, "py-3"], [1, "container"], ["icon", "fas fa-rss", "titulo", "Nosso Blog"], [1, "row", "ios", "mb-4"], ["class", "col-sm-3 col-md-3 mb-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-center"], ["mdbBtn", "", "color", "condor", "mdbWavesEffect", "", 1, "rounded-pill", 3, "routerLink"], [1, "col-sm-3", "col-md-3", "mb-3"], ["mdbWavesEffect", "", 1, "view", "rgba-white-slight", "waves-light"], ["LazyLoad", "", 1, "w-100", 3, "src", "alt"], [3, "routerLink"], [1, "mask"], [1, "b-07"], [1, "d-md-none"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostComponent_section_0_Template, 8, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sharing_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_4__["TituloComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardTextComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".card-body[_ngcontent-%COMP%] {\n  height: 120px;\n  padding: 1.25rem 0.75rem;\n}\n\n@media (max-width: 768px) {\n  h5[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n\n  .b-07[_ngcontent-%COMP%] {\n    font-weight: 600 !important;\n  }\n\n  .card-body[_ngcontent-%COMP%] {\n    height: 180px;\n    padding: 1.25rem 0.75rem;\n  }\n}\n\n@media (max-width: 450px) {\n  .card-body[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 0.5rem;\n  }\n}\n\n@media (max-width: 767px) and (orientation: landscape) {\n  #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    min-width: 100% !important;\n  }\n}\n\n@media (max-width: 450px) {\n  #banner[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0FBREo7O0FBS0E7RUFDSTtJQUFJLGtCQUFBO0VBRE47O0VBRUU7SUFBUSwyQkFBQTtFQUVWOztFQURFO0lBQ0ksYUFBQTtJQUNBLHdCQUFBO0VBSU47QUFDRjs7QUFBQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGVBQUE7RUFFTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSwwQkFBQTtFQUFOO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7RUFGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHdpZGdldHMvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jYXJkLWJvZHkge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgcGFkZGluZzogMS4yNXJlbSAuNzVyZW07XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBoNXsgZm9udC1zaXplOiAxLjI1cmVtOyB9XG4gICAgLmItMDcgeyBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7IH1cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbSAuNzVyZW07XG4gICAgfVxufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmNhcmQtYm9keSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgfVxufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAjYmFubmVyLCAuY29udGFpbmVyIHsgXG4gICAgICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICNiYW5uZXIsIC5jb2wtbWQtOCwgLmNvbC1sZy04LCAuY29sLW1kLTQsIC5jb2wtbGctNCwgLmNvbC1zbS00IHsgXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "ocRE":
/*!**********************************************!*\
  !*** ./src/app/@widgets/post/post.module.ts ***!
  \**********************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sharing/titulo/titulo.module */ "VlVH");
/* harmony import */ var _post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.component */ "oC+I");








class PostModule {
}
PostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostModule });
PostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostModule_Factory(t) { return new (t || PostModule)(); }, imports: [[
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_5__["TituloModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostModule, { declarations: [_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]], imports: [_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_5__["TituloModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]],
                exports: [_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]],
                imports: [
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_5__["TituloModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "oyBm":
/*!*****************************************************************************!*\
  !*** ./node_modules/perf-marks/dist/es2015/is-user-timing-api-supported.js ***!
  \*****************************************************************************/
/*! exports provided: isUserTimingAPISupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUserTimingAPISupported", function() { return isUserTimingAPISupported; });
/**
 * Boolean with the result of the check if User Timing API
 * is supported for the current browser/NodeJS version
 *
 * @returns boolean
 *
 */
const isUserTimingAPISupported = typeof performance !== 'undefined' &&
    typeof performance.now !== 'undefined' &&
    typeof performance.mark === 'function' &&
    typeof performance.measure === 'function' &&
    (typeof performance.clearMarks === 'function' || typeof performance.clearMeasures === 'function');



/***/ }),

/***/ "plLd":
/*!****************************************************!*\
  !*** ./src/app/@widgets/banners/banners.module.ts ***!
  \****************************************************/
/*! exports provided: BannersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersModule", function() { return BannersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _widgets_banners_banners_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @widgets/banners/banners.component */ "Q3cU");
/* harmony import */ var _sharing_image_image_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sharing/image/image.module */ "CFN+");







class BannersModule {
}
BannersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BannersModule });
BannersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BannersModule_Factory(t) { return new (t || BannersModule)(); }, imports: [[
            _sharing_image_image_module__WEBPACK_IMPORTED_MODULE_5__["ImageModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BannersModule, { declarations: [_widgets_banners_banners_component__WEBPACK_IMPORTED_MODULE_4__["BannersComponent"]], imports: [_sharing_image_image_module__WEBPACK_IMPORTED_MODULE_5__["ImageModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"]], exports: [_widgets_banners_banners_component__WEBPACK_IMPORTED_MODULE_4__["BannersComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_widgets_banners_banners_component__WEBPACK_IMPORTED_MODULE_4__["BannersComponent"]],
                exports: [_widgets_banners_banners_component__WEBPACK_IMPORTED_MODULE_4__["BannersComponent"]],
                imports: [
                    _sharing_image_image_module__WEBPACK_IMPORTED_MODULE_5__["ImageModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "q3cj":
/*!*********************************************************!*\
  !*** ./src/app/@sharing/sem-data/sem-data.component.ts ***!
  \*********************************************************/
/*! exports provided: SemDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemDataComponent", function() { return SemDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class SemDataComponent {
    constructor() {
        this.height = '80vh';
    }
    ngOnInit() {
    }
}
SemDataComponent.ɵfac = function SemDataComponent_Factory(t) { return new (t || SemDataComponent)(); };
SemDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SemDataComponent, selectors: [["app-sem-data"]], inputs: { height: "height" }, decls: 25, vars: 2, consts: [[1, "semData"], [1, "container"], [1, "d-flex", "align-content-center", "flex-wrap"], [1, "text-center", "w-100"], ["role", "status", 1, "spinner-grow", "text-primary"], [1, "sr-only"], ["role", "status", 1, "spinner-grow", "text-secondary"], ["role", "status", 1, "spinner-grow", "text-success"], ["role", "status", 1, "spinner-grow", "text-danger"], ["role", "status", 1, "spinner-grow", "text-warning"], ["role", "status", 1, "spinner-grow", "text-info"], ["role", "status", 1, "spinner-grow", "text-dark"]], template: function SemDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyaW5nL3NlbS1kYXRhL3NlbS1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SemDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sem-data',
                templateUrl: './sem-data.component.html',
                styleUrls: ['./sem-data.component.scss']
            }]
    }], function () { return []; }, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uMeW":
/*!********************************************!*\
  !*** ./src/app/@pages/home/home.routes.ts ***!
  \********************************************/
/*! exports provided: HOME_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_ROUTE", function() { return HOME_ROUTE; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "JBG6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


const app = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }
];
const HOME_ROUTE = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(app);


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map