(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/editor2/project/condor-site/nova-versao/src/main.ts */"zUnb");


/***/ }),

/***/ "0a9U":
/*!*************************************************!*\
  !*** ./src/app/@widgets/lgpd/lgpd.component.ts ***!
  \*************************************************/
/*! exports provided: LgpdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LgpdComponent", function() { return LgpdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");




function LgpdComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class LgpdComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.items$ = this.db.PageSlug('politica-de-privacidade');
    }
}
LgpdComponent.ɵfac = function LgpdComponent_Factory(t) { return new (t || LgpdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"])); };
LgpdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LgpdComponent, selectors: [["app-lgpd"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], [3, "innerHtml"]], template: function LgpdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LgpdComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B3aWRnZXRzL2xncGQvbGdwZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LgpdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lgpd',
                templateUrl: './lgpd.component.html',
                styleUrls: ['./lgpd.component.scss']
            }]
    }], function () { return [{ type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "1OEv":
/*!*******************************************!*\
  !*** ./src/app/@core/animations/slide.ts ***!
  \*******************************************/
/*! exports provided: slideLeftInOut, slideDownInOut, slideInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideLeftInOut", function() { return slideLeftInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDownInOut", function() { return slideDownInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOut", function() { return slideInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "GS7A");

const slideLeftInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideLeftInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', 'background-color': 'rgba(0, 0, 0, .8)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', 'background-color': 'rgba(0, 0, 0, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out'))
]);
const slideDownInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideDownInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '500px', 'opacity': '1', 'visibility': 'visible' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '0px', 'opacity': '0', 'visibility': 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'opacity': '0' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '0px' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'visibility': 'hidden' }))
        ])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'visibility': 'visible' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'max-height': '500px' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'opacity': '1' }))
        ])])
]);
const slideInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0,0,0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(100%, 0, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out'))
]);


/***/ }),

/***/ "6N8t":
/*!**********************************************!*\
  !*** ./src/app/@core/pipes/truncate.pipe.ts ***!
  \**********************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class TruncatePipe {
    transform(value, limit = 35, completeWords = false, ellipsis = '...') {
        value = `${value}`;
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
        }
        return (value === null || value === void 0 ? void 0 : value.length) > limit ? value.substr(0, limit) + ellipsis : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();


/***/ }),

/***/ "6q/u":
/*!*************************************************!*\
  !*** ./src/app/@sharing/menu/menu.component.ts ***!
  \*************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




const _c0 = function (a0) { return [a0]; };
function MenuComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
class MenuComponent {
    constructor() {
        this.items = [];
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "nav", "flex-column", "px-2"], ["class", "nav-link active white-text border-bottom", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "nav-link", "active", "white-text", "border-bottom", 3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_a_1_Template, 2, 4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyaW5nL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8YIC":
/*!************************************************!*\
  !*** ./src/app/@core/services/util.service.ts ***!
  \************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-toolkit/universal */ "o+Og");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/ajax */ "laIk");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");










const v2 = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].v2.url;
class UtilService {
    constructor(
    // tslint:disable-next-line: ban-types
    platformId, localStorage, http) {
        this.platformId = platformId;
        this.localStorage = localStorage;
        this.http = http;
        this.top$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.menu$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.header$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.footer$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.offers$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.static$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        // Menus
        // toData
        this.toData = (file) => this.http.get(`./assets/data/${file}.json`);
        this.setStatic$ = (items) => this.static$.next(items);
        this.getStatic$ = () => this.static$.asObservable();
        this.getStatic = () => this.http.get(`${v2}/menus`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => this.setStatic$(data)));
        // toCEP
        this.toCEP = (cep) => Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_4__["ajax"])(`https://viacep.com.br/ws/${cep}/json/`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((res) => res.response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error)));
    }
    // getStatic = () => ajax(`${ v2 }/menus`).pipe(
    //   map((res) => res.response),
    //   tap(data => this.setStatic$(data)),
    //   catchError(error =>of(error))
    // );
    // setMenu$  = (items: any) => this.menu$.next(items);
    // getMenu$  = (): Observable<any> => this.menu$.asObservable();
    // getMenu = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/1`).pipe(map(data => data['data']), tap(data => this.setMenu$(data)));
    // setTop$  = (items: any) => this.top$.next(items);
    // getTop$  = (): Observable<any> => this.top$.asObservable();
    // getTop = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/5`).pipe(map(data => data['data']), tap(data => this.setTop$(data)));
    // setHeader$  = (items: any) => this.header$.next(items);
    // getHeader$  = (): Observable<any> => this.header$.asObservable();
    // getHeader = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/3`).pipe(map(data => data['data']), tap(data => this.setHeader$(data)));
    // setFooter$  = (items: any) => this.footer$.next(items);
    // getFooter$  = (): Observable<any> => this.footer$.asObservable();
    // getFooter = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/2`).pipe(map(data => data['data']), tap(data => this.setFooter$(data)));
    // setOffers$  = (items: any) => this.offers$.next(items);
    // getOffers$  = (): Observable<any> => this.offers$.asObservable();
    // getOffers = (): Observable<any[]> => this.http.get<any[]>(`${ v2 }/menus/4`).pipe(map(data => data['data']), tap(data => this.setOffers$(data)));
    /** Funcion Storage */
    StorageParse(Item) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return JSON.parse(this.localStorage.getItem(Item));
        }
    }
    StorageSimple(Item) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return this.localStorage.getItem(Item);
        }
    }
    StorageAddKey(key, data) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return this.localStorage.setItem(key, JSON.stringify(data));
        }
    }
    StorageRemoveKey(key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            return this.localStorage.removeItem(key);
        }
    }
    /** Function Javascript */
    // toRandom
    toRandom(arr, n) {
        const result = new Array(n);
        let len = arr.length;
        const taken = new Array(len);
        if (n > len) {
            throw new RangeError('toRandom: more elements taken than available');
        }
        while (n--) {
            const x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    // toSlug
    toSlug(str) {
        str = `${str}`;
        str = str.replace(/^\s+|\s+$/g, '');
        str = str.toLowerCase();
        const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
        const to = 'aaaaaeeeeiiiioooouuuunc------';
        for (let i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
        return str;
    }
    // toChunk
    toChunk(arr, chunkSize) {
        const R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
    // to Message Alert
    sweetalert(title, text, icon = 'success', position = 'top-end') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({ icon, title, text, position });
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"])); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9iOA":
/*!************************************!*\
  !*** ./src/app/external.routes.ts ***!
  \************************************/
/*! exports provided: EXTERNAL_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTERNAL_ROUTES", function() { return EXTERNAL_ROUTES; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/redirect.guard */ "z/i2");


const appRoute = [
    {
        path: 'passeio-ciclistico',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/passeio-ciclistico/index.html',
        },
    },
    {
        path: 'corrente-esperanca',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/corrente-esperanca/index.html',
        },
    },
    {
        path: 'entreposto',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/entreposto/index.html',
        },
    },
    {
        path: 'dia-das-maes',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/dia-das-maes/index.html',
        },
    },
    {
        path: 'promocao-peg',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/promocao-peg/index.html',
        },
    },
    {
        path: 'promocao-kelloggs-parati',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/promocao-kelloggs-parati/index.html',
        },
    },
    {
        path: 'especialmulher',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/especial-mulher/index.html',
        },
    },
    {
        path: 'especial-mulher',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/especial-mulher/index.html',
        },
    },
    {
        path: 'ofertas-combos',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/ofertas-combos/index.html',
        },
    },
    {
        path: 'cestas-de-natal',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/cestas-de-natal/index.html',
        },
    },
    {
        path: 'natal',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/natal/index.html',
        },
    },
    {
        path: 'cestasdenatal',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/cestas-de-natal/index.html',
        },
    },
    {
        path: 'sortedoce',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/sortedoce/index.html',
        },
    },
    {
        path: 'dia-das-criancas',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/dia-das-criancas/index.html',
        },
    },
    {
        path: 'travessuras-ou-gostosuras',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/travessuras-ou-gostosuras/index.html',
        },
    },
    {
        path: 'jogos',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/jogos/index.html',
        },
    },
    {
        path: 'maes',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/dia-das-maes/index.html',
        },
    },
    {
        path: 'autoposto',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/autoposto/index.html',
        },
    },
    {
        path: 'condor-auto-posto',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/autoposto/index.html',
        },
    },
    {
        path: 'familiacondor',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/familiacondor/index.html',
        },
    },
    {
        path: 'catalogo',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/catalogo/index.html',
        },
    },
    {
        path: 'nissin',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/nissin/index.html',
        },
    },
    {
        path: 'campanhasolidaria',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/campanhasolidaria/index.html',
        },
    },
    {
        path: 'frisco',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/frisco/index.html',
        },
    },
    {
        path: 'femsa',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/femsa/index.html',
        },
    },
    {
        path: 'promocao-nestle-mais-sabor',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/promocao-nestle-mais-sabor/index.html',
        },
    },
    {
        path: 'limpeza',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/limpeza/index.html',
        },
    },
    {
        path: 'marilan',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/marilan/index.html',
        },
    },
    {
        path: 'dia-dos-namorados',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/dia-dos-namorados/index.html',
        },
    },
    {
        path: 'aniversario',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/aniversario/index.html',
        },
    },
    {
        path: 'delivery',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/delivery/index.html',
        },
    },
    {
        path: 'gourmet',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/gourmet/index.html',
        },
    },
    {
        path: 'ofertas-bebe',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/ofertas-bebe/index.html',
        },
    },
    {
        path: 'coronavirus',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/coronavirus/index.html',
        },
    },
    {
        path: 'sabores-de-inverno',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/sabores-de-inverno/index.html',
        },
    },
    {
        path: 'promocao-dia-dos-namorados',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/promocao-dia-dos-namorados/index.html',
        },
    },
    {
        path: 'pet-shop',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/pet-shop/index.html',
        },
    },
    {
        path: 'compra-solidaria',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/compra-solidaria/index.html',
        },
    },
    {
        path: 'outono-inverno',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/outono-inverno/index.html',
        },
    },
    {
        path: 'pais',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/dia-dos-pais/index.html',
        },
    },
    {
        path: 'dia-dos-pais',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/dia-dos-pais/index.html',
        },
    },
    {
        path: 'promocoes',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/promocoes/index.html',
        },
    },
    {
        path: 'black-friday',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/black-friday/index.html',
        },
    },
    {
        path: 'dinheiro-de-volta',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/dinheiro-de-volta/index.html',
        },
    },
    {
        path: 'mepatrocina',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/mepatrocina/index.html',
        },
    },
    {
        path: 'pascoa',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/pascoa/index.html',
        },
    },
    {
        path: 'ofertas-pascoa',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/ofertas-pascoa/index.html',
        },
    },
    {
        path: 'sabor-da-sorte',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/sabor-da-sorte/index.html',
        },
    },
    {
        path: 'especialmulher',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/especial-mulher/index.html',
        },
    },
    {
        path: 'especial-mulher',
        canActivate: [_core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"]],
        component: _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_1__["RedirectGuard"],
        data: {
            externalUrl: 'https://www.condor.com.br/especial-mulher/index.html',
        },
    },
];
const EXTERNAL_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoute);


/***/ }),

/***/ "9t6m":
/*!**************************************************!*\
  !*** ./src/app/@widgets/mobile/mobile.module.ts ***!
  \**************************************************/
/*! exports provided: MobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileModule", function() { return MobileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile.component */ "UrC9");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-responsive */ "X2yv");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sharing/link/link.module */ "fE7R");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _widgets_ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @widgets/ofertas/ofertas.module */ "klR4");
/* harmony import */ var _sharing_mobile_link_mobile_link_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sharing/mobile-link/mobile-link.module */ "jdR/");
/* harmony import */ var _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sharing/select-loja/select-loja.module */ "HZLR");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");















class MobileModule {
}
MobileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MobileModule });
MobileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MobileModule_Factory(t) { return new (t || MobileModule)(); }, imports: [[
            _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_7__["LinkModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _widgets_ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_9__["OfertasModule"],
            _sharing_mobile_link_mobile_link_module__WEBPACK_IMPORTED_MODULE_10__["MobileLinkModule"],
            _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_11__["SelectLojaModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
            ngx_responsive__WEBPACK_IMPORTED_MODULE_3__["ResponsiveModule"].forRoot(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__["environment"].responsive)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MobileModule, { declarations: [_mobile_component__WEBPACK_IMPORTED_MODULE_2__["MobileComponent"]], imports: [_sharing_link_link_module__WEBPACK_IMPORTED_MODULE_7__["LinkModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _widgets_ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_9__["OfertasModule"],
        _sharing_mobile_link_mobile_link_module__WEBPACK_IMPORTED_MODULE_10__["MobileLinkModule"],
        _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_11__["SelectLojaModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"], ngx_responsive__WEBPACK_IMPORTED_MODULE_3__["ResponsiveModule"]], exports: [_mobile_component__WEBPACK_IMPORTED_MODULE_2__["MobileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_mobile_component__WEBPACK_IMPORTED_MODULE_2__["MobileComponent"]],
                exports: [_mobile_component__WEBPACK_IMPORTED_MODULE_2__["MobileComponent"]],
                imports: [
                    _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_7__["LinkModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _widgets_ofertas_ofertas_module__WEBPACK_IMPORTED_MODULE_9__["OfertasModule"],
                    _sharing_mobile_link_mobile_link_module__WEBPACK_IMPORTED_MODULE_10__["MobileLinkModule"],
                    _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_11__["SelectLojaModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
                    ngx_responsive__WEBPACK_IMPORTED_MODULE_3__["ResponsiveModule"].forRoot(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__["environment"].responsive)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AGod":
/*!**********************************************!*\
  !*** ./src/app/@widgets/lgpd/lgpd.module.ts ***!
  \**********************************************/
/*! exports provided: LgpdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LgpdModule", function() { return LgpdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _lgpd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lgpd.component */ "0a9U");





class LgpdModule {
}
LgpdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LgpdModule });
LgpdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LgpdModule_Factory(t) { return new (t || LgpdModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LgpdModule, { declarations: [_lgpd_component__WEBPACK_IMPORTED_MODULE_3__["LgpdComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"]], exports: [_lgpd_component__WEBPACK_IMPORTED_MODULE_3__["LgpdComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LgpdModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_lgpd_component__WEBPACK_IMPORTED_MODULE_3__["LgpdComponent"]],
                exports: [_lgpd_component__WEBPACK_IMPORTED_MODULE_3__["LgpdComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    v1: {
        url: 'https://marketing.condor.com.br/api',
        key: ''
    },
    v2: {
        url: 'https://painel.condor.com.br',
    },
    news: {
        url: 'https://teste.condor.com.br/news/wp-json/wp/v2',
        key: 'Basic Y29uZG9yOmFkbWluMTIzIUAj'
    },
    blog: {
        url: 'https://teste.condor.com.br/blog/wp-json/wp/v2',
        key: 'Basic Y29uZG9yOmFkbWluMTIz',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DRh4":
/*!*************************************************!*\
  !*** ./src/app/@sharing/link/link.component.ts ***!
  \*************************************************/
/*! exports provided: LinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComponent", function() { return LinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




function LinkComponent_a_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.item.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r2.item.name || ctx_r2.item.alt);
} }
function LinkComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LinkComponent_a_0_img_1_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.name);
} }
function LinkComponent_a_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.item.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r3.item.name || ctx_r3.item.alt);
} }
const _c0 = function (a0) { return [a0]; };
function LinkComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LinkComponent_a_1_img_1_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r1.item.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.name);
} }
class LinkComponent {
    constructor() {
        this.item = [];
        this.class = '';
        this.style = '';
    }
    ngOnInit() {
    }
}
LinkComponent.ɵfac = function LinkComponent_Factory(t) { return new (t || LinkComponent)(); };
LinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkComponent, selectors: [["app-link"]], inputs: { item: "item", class: "class", style: "style" }, decls: 2, vars: 2, consts: [["rel", "noopener", "target", "_blank", 3, "class", "style", "href", 4, "ngIf"], [3, "class", "style", "routerLink", 4, "ngIf"], ["rel", "noopener", "target", "_blank", 3, "href"], ["height", "30px", 3, "src", "alt", 4, "ngIf"], [1, "d-none", "d-lg-block", "mt-2"], ["height", "30px", 3, "src", "alt"], [3, "routerLink"]], template: function LinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LinkComponent_a_0_Template, 5, 7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LinkComponent_a_1_Template, 5, 9, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.external);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.external);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyaW5nL2xpbmsvbGluay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-link',
                templateUrl: './link.component.html',
                styleUrls: ['./link.component.scss']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Dyj9":
/*!*******************************************************!*\
  !*** ./src/app/@widgets/ofertas/ofertas.component.ts ***!
  \*******************************************************/
/*! exports provided: OfertasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasComponent", function() { return OfertasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "z8v2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sharing_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@sharing/titulo/titulo.component */ "XtQF");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ "3II9");
/* harmony import */ var _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sharing/product/product.component */ "YXfc");










function OfertasComponent_section_0_div_1_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product", 7);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", item_r4)("loja", ctx_r5.loja);
} }
function OfertasComponent_section_0_div_1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OfertasComponent_section_0_div_1_3_ng_template_0_Template, 1, 2, "ng-template", 6);
} }
function OfertasComponent_section_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-titulo", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OfertasComponent_section_0_div_1_3_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx_r2.title)("icon", ctx_r2.icon)("link", ctx_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazy", true)("config", ctx_r2.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1);
} }
function OfertasComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OfertasComponent_section_0_div_1_Template, 4, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.total > 0);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_2__["EffectFade"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["A11y"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["Lazy"]]);
class OfertasComponent {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        // titulo
        this.icon = '';
        this.link = '';
        this.title = '';
        this.loja = [];
        this.total = 0;
        this.options = {
            freeMode: true,
            spaceBetween: 15,
            grabCursor: true,
            slidesPerView: 1.5,
            type: 'progressbar',
            loop: true,
            autoplay: { delay: 1800 },
            breakpoints: {
                360: { slidesPerView: 2 },
                768: { slidesPerView: 3.5 },
                1024: { slidesPerView: 4.5 },
                1200: { slidesPerView: 5 },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        this.getOfertas = (code) => {
            let result = [];
            this.items$ = this.db.getOfertas$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
                if (this.type === 'slug')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.slug === code));
                else if (this.type === 'campanha')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.campanha === code));
                else if (this.type === 'departamento')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.departamento === code));
                return result === null || result === void 0 ? void 0 : result.slice(0, 15);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => this.total = res.length));
        };
    }
    ngOnInit() {
        this.getOfertas(this.code);
        this.storage.get('Loja').subscribe((res) => this.loja = res);
    }
}
OfertasComponent.ɵfac = function OfertasComponent_Factory(t) { return new (t || OfertasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"])); };
OfertasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfertasComponent, selectors: [["app-widget-ofertas"]], inputs: { icon: "icon", link: "link", title: "title", code: "code", type: "type", sector: "sector" }, decls: 2, vars: 3, consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "titulo", "icon", "link"], [3, "lazy", "config"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [3, "code", "loja"]], template: function OfertasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OfertasComponent_section_0_Template, 2, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _sharing_titulo_titulo_component__WEBPACK_IMPORTED_MODULE_6__["TituloComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_7__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_7__["SwiperSlideDirective"], _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 2rem 0 !important;\n}\n\n.titulo-black[_ngcontent-%COMP%] {\n  color: var(--color-red-primary) !important;\n}\n\n.titulo-black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-red-primary) !important;\n}\n\n.bg-black[_ngcontent-%COMP%] {\n  background: var(--color-blue-primary);\n}\n\n@media (max-width: 767px) and (orientation: landscape) {\n  #banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] {\n    min-width: 100% !important;\n  }\n}\n\n@media (max-width: 450px) {\n  .titulo-black[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    padding: 0 15px;\n  }\n}\n\n@media (max-width: 375px) {\n  .titulo-black[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvb2ZlcnRhcy9vZmVydGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRjs7QUFHQTtFQUNFLDBDQUFBO0FBQUY7O0FBQ0U7RUFBRywwQ0FBQTtBQUVMOztBQUNBO0VBQ0kscUNBQUE7QUFFSjs7QUFFQTtFQUNJO0lBQ0ksMEJBQUE7RUFDTjtBQUNGOztBQUlBO0VBQ0k7SUFBZSxpQkFBQTtJQUFtQixlQUFBO0VBQXBDO0FBQ0Y7O0FBRUE7RUFDSTtJQUFlLGlCQUFBO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Ad2lkZ2V0cy9vZmVydGFzL29mZXJ0YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uID4gZGl2IHtcbiAgcGFkZGluZzogMnJlbSAwICFpbXBvcnRhbnQ7XG5cbn1cblxuLnRpdHVsby1ibGFja3tcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZC1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBheyBjb2xvcjogdmFyKC0tY29sb3ItcmVkLXByaW1hcnkpICFpbXBvcnRhbnQ7IH1cbn1cblxuLmJnLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibHVlLXByaW1hcnkpO1xufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAjYmFubmVyLCAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cblxuQG1lZGlhKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAudGl0dWxvLWJsYWNreyBmb250LXNpemU6IDEuNXJlbTsgcGFkZGluZzogMCAxNXB4OyB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgLnRpdHVsby1ibGFja3sgZm9udC1zaXplOiAxLjNyZW07IH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfertasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-ofertas',
                templateUrl: './ofertas.component.html',
                styleUrls: ['./ofertas.component.scss'],
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"] }]; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Dzqi":
/*!************************************************!*\
  !*** ./src/app/@core/services/news.service.ts ***!
  \************************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");







const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].news.url;
const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].news.key}` });
const urlBlog = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].blog.url;
const headersBlog = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].blog.key}` });
class NewsService {
    constructor(http) {
        this.http = http;
        this.region$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.loja$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.banner$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        // Banners
        this.setBanners$ = (items) => this.banner$.next(items);
        this.getBanners$ = () => this.banner$.asObservable();
        this.getBanners = () => {
            return this.http.get(`${url}/imagens`, { params: { per_page: `100` } })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => this.setBanners$(data)));
        };
        // Cidade
        this.setRegion$ = (items) => this.region$.next(items);
        this.getRegion$ = () => this.region$.asObservable();
        this.getRegion = () => {
            return this.http.get(`${url}/region`, { params: { per_page: `100` } })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => this.setRegion$(data)));
        };
        // Loja
        this.setLoja$ = (items) => this.loja$.next(items);
        this.getLoja$ = () => this.loja$.asObservable();
        this.getLoja = () => {
            return this.http.get(`${url}/loja?per_page=100`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => this.setLoja$(data)));
        };
        this.getSelector = () => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
                region: this.http.get(`${url}/region`, { params: { per_page: `100` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data)),
                lojas: this.http.get(`${url}/loja`, { params: { per_page: `100` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data))
            });
        };
        this.getImage = (id) => {
            return this.http.get(`${url}/media/${id}`);
        };
        /** Module Page */
        this.Page = () => {
            return this.http.get(`${url}/pages`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data));
        };
        this.getPage = () => {
            return this.http.get(`${url}/pages`);
        };
        this.PageSlug = (slug) => this.http.get(`${url}/pages`, { params: { slug: `${slug}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res[0]));
        /** Module Post */
        this.Posts = (p, page) => this.http.get(`${url}/posts?page=${p}&per_page=${page}`, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data));
        this.PostId = (id) => this.http.get(`${url}/posts/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.PostSlug = (slug) => this.http.get(`${url}/posts`, { params: { slug: `${slug}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data[0]));
        this.PostSearch = (search) => this.http.get(`${url}/posts`, { params: { search: `${search}` }, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        /** Module Loja */
        this.Lojas = (limit) => this.http.get(`${url}/loja`, { params: { per_page: `${limit}` }, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.LojaId = (id) => this.http.get(`${url}/loja/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.LojaSlug = (slug) => this.http.get(`${url}/loja`, { params: { slug: `${slug}` }, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data[0]));
        this.LojaCodigo = (id) => this.http.get(`${url}/loja`, { params: { meta_key: 'cod_loja', meta_value: `${id}` }, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.LojaRegion = () => this.http.get(`${url}/region`, { params: { per_page: `100` }, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.LojaPorRegion = (id) => this.http.get(`${url}/loja?region=${id}&per_page=100`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        /** Tabloide */
        this.Tabloides = (limit) => this.http.get(`${url}/tabloide`, { params: { per_page: `${limit}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.TabloideId = (id) => this.http.get(`${url}/tabloide/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.TabloideSlug = (slug) => this.http.get(`${url}/tabloide`, { params: { slug: `${slug}` }, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        /** Post Blog */
        this.Blog = (p, page) => this.http.get(`${urlBlog}/posts?page=${p}&per_page=${page}`, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.BlogId = (id) => this.http.get(`${urlBlog}/posts/${id}`, { headers: headersBlog }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.Blogger = () => this.http.get(`${urlBlog}/posts`, { observe: 'response' });
        this.BlogSlug = (slug) => this.http.get(`${urlBlog}/posts`, { params: { slug: `${slug}` }, headers: headersBlog }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data[0]));
        this.BlogImage = (id) => this.http.get(`${urlBlog}/media/${id}`, { headers: headersBlog }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
        this.getBlogCollection = (collection) => this.http.get(`${urlBlog}/${collection}`, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    LastNews(limit) {
        return this.http.get(`${url}/posts`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data['slice'](0, limit)));
    }
    PageCollection(collection) {
        return this.http.get(`${url}/pages${collection}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
    }
    PageId(id) {
        const sql = `${url}/pages`;
        return this.http.get(`${url}/pages/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data));
    }
    /** Module Imagens */
    ImagensPosition(position) {
        return this.http.get(`${url}/imagens`, {
            params: { position }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.filter(row => row.status === 'publish' || row.position == position)));
    }
    /** Module Campanha */
    Campanha(slug) {
        return this.http.get(`${url}/posto`, {
            params: { slug: `${slug}` }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data));
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "E5c8":
/*!*********************************************************!*\
  !*** ./src/app/@core/directives/lazy-load.directive.ts ***!
  \*********************************************************/
/*! exports provided: LazyLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadDirective", function() { return LazyLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class LazyLoadDirective {
    constructor(el) {
        this.el = el;
        this.srcAttr = null;
    }
    ngAfterViewInit() {
        this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
    }
    canLazyLoad() {
        return window && 'IntersectionObserver' in window;
    }
    lazyLoadImage() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(({ isIntersecting }) => {
                if (isIntersecting) {
                    this.loadImage();
                    obs.unobserve(this.el.nativeElement);
                }
            });
        });
        obs.observe(this.el.nativeElement);
    }
    loadImage() {
        this.srcAttr = this.src;
    }
}
LazyLoadDirective.ɵfac = function LazyLoadDirective_Factory(t) { return new (t || LazyLoadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LazyLoadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyLoadDirective, selectors: [["img", "LazyLoad", ""]], hostVars: 1, hostBindings: function LazyLoadDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.srcAttr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, inputs: { src: "src" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyLoadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'img[LazyLoad]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { srcAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.src']
        }], src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GFCv":
/*!*********************************************!*\
  !*** ./src/app/@core/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe.pipe */ "oeKb");
/* harmony import */ var _sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort.pipe */ "JbDX");
/* harmony import */ var _filtro_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtro.pipe */ "m8Mh");
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truncate.pipe */ "6N8t");
/* harmony import */ var _lojafilter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lojafilter.pipe */ "um0u");








class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
        _sort_pipe__WEBPACK_IMPORTED_MODULE_3__["SortPipe"],
        _filtro_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPipe"],
        _truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"],
        _lojafilter_pipe__WEBPACK_IMPORTED_MODULE_6__["LojafilterPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
        _sort_pipe__WEBPACK_IMPORTED_MODULE_3__["SortPipe"],
        _filtro_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPipe"],
        _truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"],
        _lojafilter_pipe__WEBPACK_IMPORTED_MODULE_6__["LojafilterPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
                    _sort_pipe__WEBPACK_IMPORTED_MODULE_3__["SortPipe"],
                    _filtro_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPipe"],
                    _truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"],
                    _lojafilter_pipe__WEBPACK_IMPORTED_MODULE_6__["LojafilterPipe"],
                ],
                exports: [
                    _safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
                    _sort_pipe__WEBPACK_IMPORTED_MODULE_3__["SortPipe"],
                    _filtro_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPipe"],
                    _truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"],
                    _lojafilter_pipe__WEBPACK_IMPORTED_MODULE_6__["LojafilterPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GOo+":
/*!***********************************************!*\
  !*** ./src/app/@core/services/seo.service.ts ***!
  \***********************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class SeoService {
    constructor(meta, title, router, doc, platformId) {
        this.meta = meta;
        this.title = title;
        this.router = router;
        this.doc = doc;
        this.platformId = platformId;
        this.addTags = (data) => this.meta.addTags([
            { name: 'title', 'content': data.title },
            { name: 'og:title', 'content': data.title },
            { name: 'twitter:title', 'content': data.title },
            { name: 'description', 'content': data.description },
            { name: 'og:description', 'content': data.description },
            { name: 'twitter:description', 'content': data.description },
            { name: 'og:image', 'content': data.image },
            { name: 'twitter:image', 'content': data.image },
            { name: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' }
        ]);
        this.updateTags = (data) => {
            const description = data.description;
            const content = description.replace(/(<([^>]+)>)/gi, "");
            let conteudo = content.substr(0, 155);
            conteudo = `${conteudo}`;
            this.setTitle(data.title);
            this.updateTag('og:type', 'website');
            this.updateTag('og:image', data.image);
            this.updateTag('og:title', data.title);
            this.updateTag('description', conteudo);
            this.updateTag('og:description', conteudo);
            this.updateTag('twitter:image', data.image);
            this.updateTag('twitter:title', data.title);
            this.updateTag('twitter:description', conteudo);
            this.updateTag('twitter:card', 'summary_large_image');
        };
        this.updateTag = (name, content) => this.meta.updateTag({ name, content });
        this.updateTagName = (content) => {
            this.meta.updateTag({ name: 'title', content: content });
            this.meta.updateTag({ name: 'og:title', content: content });
            this.meta.updateTag({ name: 'twitter:title', content: content });
        };
        this.addTagDescription = (content) => {
            return this.meta.addTags([
                { name: 'description', content },
                { name: 'og:description', content },
                { name: 'twitter:description', content }
            ]);
        };
        this.updateTagDescription = (content) => {
            this.meta.updateTag({ name: 'description', content: content });
            this.meta.updateTag({ name: 'og:description', content: content });
            this.meta.updateTag({ name: 'twitter:description', content: content });
        };
        this.addCanonical = () => {
            let link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
            link.setAttribute('href', this.doc.URL);
        };
        this.addTagImage = (content) => {
            return this.meta.addTags([
                { name: 'og:image', content },
                { name: 'twitter:image', content }
            ]);
        };
        this.updateTagImage = (content) => {
            this.meta.updateTag({ name: 'og:image', content: content });
            this.meta.updateTag({ name: 'twitter:image', content: content });
        };
        this.addGeolocation = (cidade, latLng) => {
            let uf;
            if (cidade === 'Curitiba')
                uf = 'BR-PR';
            else
                uf = 'BR-SC';
            return this.meta.addTags([
                { name: 'geo.region', content: uf },
                { name: 'geo.placename', content: cidade },
                { name: 'geo.position', content: latLng },
                { name: 'ICBM', content: latLng }
            ]);
        };
        this.dataLayerPage = (pageTitle) => {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId))
                window['dataLayer'].push({ event: 'pageview', pagePath: this.router.url, pageTitle });
            else
                true;
        };
        this.dataLayerBlog = (arr) => {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId))
                window['dataLayer'].push(arr);
            else
                true;
        };
        this.dataLayerProduct = (arr) => {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId))
                window['dataLayer'].push(arr);
            else
                true;
        };
        this.dataLayerTracking = (arr) => {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId))
                window.dataLayer.push(arr);
            else
                true;
        };
        this.meta.addTags([
            { name: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' }
        ]);
    }
    setTitle(titulo) {
        return this.title.setTitle(titulo);
    }
    addTagName(content) {
        return this.meta.addTags([
            { name: 'title', content },
            { name: 'og:title', content },
            { name: 'twitter:title', content }
        ]);
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "HZLR":
/*!************************************************************!*\
  !*** ./src/app/@sharing/select-loja/select-loja.module.ts ***!
  \************************************************************/
/*! exports provided: SelectLojaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLojaModule", function() { return SelectLojaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _select_loja_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-loja.component */ "sCWG");







class SelectLojaModule {
}
SelectLojaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SelectLojaModule });
SelectLojaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SelectLojaModule_Factory(t) { return new (t || SelectLojaModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectLojaModule, { declarations: [_select_loja_component__WEBPACK_IMPORTED_MODULE_5__["SelectLojaComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"]], exports: [_select_loja_component__WEBPACK_IMPORTED_MODULE_5__["SelectLojaComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectLojaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_select_loja_component__WEBPACK_IMPORTED_MODULE_5__["SelectLojaComponent"]],
                exports: [_select_loja_component__WEBPACK_IMPORTED_MODULE_5__["SelectLojaComponent"]],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "JbDX":
/*!******************************************!*\
  !*** ./src/app/@core/pipes/sort.pipe.ts ***!
  \******************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class SortPipe {
    transform(array, field) {
        if (!Array.isArray(array)) {
            return;
        }
        array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sort'
            }]
    }], null, null); })();


/***/ }),

/***/ "OKHZ":
/*!***********************************************************!*\
  !*** ./src/app/@sharing/drop-menu/drop-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: DropMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropMenuComponent", function() { return DropMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




function DropMenuComponent_li_6_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.nome, " ");
} }
const _c0 = function (a0) { return [a0]; };
function DropMenuComponent_li_6_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.nome, " ");
} }
function DropMenuComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropMenuComponent_li_6_a_1_Template, 2, 2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropMenuComponent_li_6_a_2_Template, 2, 4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.external);
} }
class DropMenuComponent {
    constructor() {
        this.data = [];
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
    }
}
DropMenuComponent.ɵfac = function DropMenuComponent_Factory(t) { return new (t || DropMenuComponent)(); };
DropMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropMenuComponent, selectors: [["app-drop-menu"]], inputs: { titulo: "titulo", data: "data" }, decls: 7, vars: 3, consts: [[1, "drop-menu", "sub-menu", "my-3"], [1, "titulo"], ["href", "#"], [1, "list-unstyled"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "p-0 menu-item white-text", "rel", "noopener", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "p-0 menu-item white-text", 3, "routerLink", 4, "ngIf"], ["rel", "noopener", "target", "_blank", 1, "p-0", "menu-item", "white-text", 3, "href"], [1, "p-0", "menu-item", "white-text", 3, "routerLink"]], template: function DropMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DropMenuComponent_li_6_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".drop-menu[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.drop-menu[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9rem !important;\n  text-decoration: underline;\n}\n.drop-menu[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n  color: #fafafa !important;\n}\n.drop-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.drop-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n.drop-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJpbmcvZHJvcC1tZW51L2Ryb3AtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQUNOO0FBQU07RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FBRVI7QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUFNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmluZy9kcm9wLW1lbnUvZHJvcC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3AtbWVudXtcbiAgLnRpdHVsbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBoNiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IC45cmVtICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGEge1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgbGkge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drop-menu',
                templateUrl: './drop-menu.component.html',
                styleUrls: ['./drop-menu.component.scss']
            }]
    }], function () { return []; }, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTE", function() { return APP_ROUTE; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quicklink */ "bYOv");


const app = [
    { path: '', loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~pages-blog-blog-module~pages-home-home-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./@pages/home/home.module */ "mdwe")).then(mod => mod.HomeModule) },
    { path: 'institucional/imprensa', loadChildren: () => Promise.all(/*! import() | pages-imprensa-imprensa-module */[__webpack_require__.e("default~pages-blog-blog-module~pages-imprensa-imprensa-module~pages-lojas-lojas-module~pages-ofertas~de7fe046"), __webpack_require__.e("common"), __webpack_require__.e("pages-imprensa-imprensa-module")]).then(__webpack_require__.bind(null, /*! ./@pages/imprensa/imprensa.module */ "Ec0c")).then(mod => mod.ImprensaModule) },
    { path: 'institucional', loadChildren: () => Promise.all(/*! import() | pages-news-news-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null, /*! ./@pages/news/news.module */ "IYRn")).then(mod => mod.NewsModule) },
    { path: 'tabloide-online', loadChildren: () => __webpack_require__.e(/*! import() | pages-tabloide-tabloide-module */ "pages-tabloide-tabloide-module").then(__webpack_require__.bind(null, /*! ./@pages/tabloide/tabloide.module */ "4Rld")).then(mod => mod.TabloideModule) },
    { path: 'lojas', loadChildren: () => Promise.all(/*! import() | pages-lojas-lojas-module */[__webpack_require__.e("default~pages-blog-blog-module~pages-imprensa-imprensa-module~pages-lojas-lojas-module~pages-ofertas~de7fe046"), __webpack_require__.e("pages-lojas-lojas-module")]).then(__webpack_require__.bind(null, /*! ./@pages/lojas/lojas.module */ "zspJ")).then(mod => mod.LojasModule) },
    { path: 'produto', loadChildren: () => __webpack_require__.e(/*! import() | pages-ofertas-product-id-product-id-module */ "pages-ofertas-product-id-product-id-module").then(__webpack_require__.bind(null, /*! ./@pages/ofertas/product-id/product-id.module */ "dlVB")).then(mod => mod.ProductIdModule) },
    { path: 'campanha', loadChildren: () => Promise.all(/*! import() | pages-ofertas-campanha-campanha-module */[__webpack_require__.e("default~pages-blog-blog-module~pages-imprensa-imprensa-module~pages-lojas-lojas-module~pages-ofertas~de7fe046"), __webpack_require__.e("pages-ofertas-campanha-campanha-module")]).then(__webpack_require__.bind(null, /*! ./@pages/ofertas/campanha/campanha.module */ "REog")).then(mod => mod.CampanhaModule) },
    { path: 'departamento', loadChildren: () => Promise.all(/*! import() | pages-ofertas-departamento-departamento-module */[__webpack_require__.e("default~pages-blog-blog-module~pages-imprensa-imprensa-module~pages-lojas-lojas-module~pages-ofertas~de7fe046"), __webpack_require__.e("pages-ofertas-departamento-departamento-module")]).then(__webpack_require__.bind(null, /*! ./@pages/ofertas/departamento/departamento.module */ "6e9W")).then(mod => mod.DepartamentoModule) },
    { path: 'blog', loadChildren: () => Promise.all(/*! import() | pages-blog-blog-module */[__webpack_require__.e("default~pages-blog-blog-module~pages-imprensa-imprensa-module~pages-lojas-lojas-module~pages-ofertas~de7fe046"), __webpack_require__.e("default~pages-blog-blog-module~pages-home-home-module"), __webpack_require__.e("pages-blog-blog-module")]).then(__webpack_require__.bind(null, /*! ./@pages/blog/blog.module */ "Nn4g")).then(mod => mod.BlogModule) },
    { path: 'receitas', loadChildren: () => Promise.all(/*! import() | pages-blog-blog-module */[__webpack_require__.e("default~pages-blog-blog-module~pages-imprensa-imprensa-module~pages-lojas-lojas-module~pages-ofertas~de7fe046"), __webpack_require__.e("default~pages-blog-blog-module~pages-home-home-module"), __webpack_require__.e("pages-blog-blog-module")]).then(__webpack_require__.bind(null, /*! ./@pages/blog/blog.module */ "Nn4g")).then(mod => mod.BlogModule) },
    { path: 'fale-conosco/sac', loadChildren: () => Promise.all(/*! import() | pages-sac-sac-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-sac-sac-module")]).then(__webpack_require__.bind(null, /*! ./@pages/sac/sac.module */ "PDlY")).then(mod => mod.SacModule) },
    { path: 'fale-conosco', loadChildren: () => Promise.all(/*! import() | pages-news-news-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null, /*! ./@pages/news/news.module */ "IYRn")).then(mod => mod.NewsModule) },
    { path: 'acoes-condor', loadChildren: () => Promise.all(/*! import() | pages-news-news-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null, /*! ./@pages/news/news.module */ "IYRn")).then(mod => mod.NewsModule) },
    { path: 'para-sua-empresa', loadChildren: () => Promise.all(/*! import() | pages-news-news-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null, /*! ./@pages/news/news.module */ "IYRn")).then(mod => mod.NewsModule) },
    { path: 'servicos-financeiro', loadChildren: () => Promise.all(/*! import() | pages-news-news-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null, /*! ./@pages/news/news.module */ "IYRn")).then(mod => mod.NewsModule) },
    { path: 'pesquisa-usuario', loadChildren: () => __webpack_require__.e(/*! import() | pages-ofertas-search-search-module */ "pages-ofertas-search-search-module").then(__webpack_require__.bind(null, /*! ./@pages/ofertas/search/search.module */ "NjoI")).then(mod => mod.SearchModule) },
    { path: 'clubecondor', redirectTo: 'fale-conosco/baixe-o-app' },
    { path: 'combo', redirectTo: 'servicos-financeiro/combo-eletro-36x' },
    { path: 'trabalhe-conosco', redirectTo: 'fale-conosco/trabalhe-conosco' },
    { path: 'radar-de-ofertas', redirectTo: 'institucional/radar-de-ofertas', },
    { path: 'cartao-presente', redirectTo: 'para-sua-empresa/cartao-presente-condor' },
    { path: 'mundo-saudavel', redirectTo: 'departamento/alimentos/setor/saudaveis' },
];
const APP_ROUTE = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(app, { scrollPositionRestoration: 'enabled', preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__["QuicklinkStrategy"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _core_services_update_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@core/services/update.service */ "w18I");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "z8v2");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookieconsent */ "uOen");
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-google-tag-manager */ "iCZg");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _widgets_lgpd_lgpd_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./@widgets/lgpd/lgpd.component */ "0a9U");
/* harmony import */ var _widgets_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./@widgets/mobile/mobile.component */ "UrC9");
/* harmony import */ var _widgets_top_top_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./@widgets/top/top.component */ "b4qz");
/* harmony import */ var _widgets_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./@widgets/header/header.component */ "kr9m");
/* harmony import */ var _widgets_menu_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./@widgets/menu/menu.component */ "mcjh");
/* harmony import */ var _widgets_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./@widgets/footer/footer.component */ "VD/p");
























const _c0 = ["politica"];
function AppComponent_main_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mobile", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-top", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "router-outlet", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_main_0_Template_router_outlet_activate_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onActivate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", data_r2[0].data)("condor", data_r2[4].data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", data_r2[0].data)("json", data_r2[4].data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", data_r2[2].data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("json", data_r2[0].data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", data_r2[1].data);
} }
class AppComponent {
    constructor(router, seo, util, news, sw, storageMap, translateService, ccService, gtmService, platformId) {
        this.seo = seo;
        this.util = util;
        this.news = news;
        this.sw = sw;
        this.storageMap = storageMap;
        this.translateService = translateService;
        this.ccService = ccService;
        this.gtmService = gtmService;
        this.platformId = platformId;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.setCookies = () => {
            this.getLang();
            this.popupCookies();
        };
        this.popupCookies = () => {
            this.ccService.initialize$.subscribe((event) => console.log(`initialize: ${JSON.stringify(event)}`));
            this.ccService.popupOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(() => {
                const link = document.getElementsByClassName("cc-politica");
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(link, 'click').subscribe(() => this.politica.show());
            });
        };
        this.getLang = () => {
            const browserLang = this.translateService.getBrowserLang();
            this.translateService.use((browserLang === null || browserLang === void 0 ? void 0 : browserLang.match(/en|fr|pt/)) ? browserLang : 'pt');
            this.translateService.addLangs(['en', 'fr', 'pt']);
            this.translateService.setDefaultLang('pt');
            this.translateService.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].cookies).subscribe(data => {
                this.ccService.getConfig().content = this.ccService.getConfig().content || {};
                this.ccService.getConfig().content.allow = data['cookie.allow'];
                this.ccService.getConfig().content.deny = data['cookie.deny'];
                this.ccService.getConfig().content.link = data['cookie.link'];
                this.ccService.getConfig().content.href = data['cookie.href'];
                this.ccService.getConfig().content.policy = data['cookie.policy'];
                this.ccService.getConfig().content.header = data['cookie.header'];
                this.ccService.getConfig().content.message = data['cookie.message'];
                this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
                this.ccService.destroy();
                this.ccService.init(this.ccService.getConfig());
            });
        };
        this.dados = () => {
            this.data$ = this.util.getStatic();
            this.news.getLoja().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe();
            this.news.getRegion().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe();
        };
        this.getSeo = () => {
            const data = {
                title: 'Rede Condor | Supermercado On-line | Condor.com.br',
                description: 'Compre Online, Confira os Tabloides ou encontre o Supermercado Condor mais próximo! Toda loja em até 6x, Bazar em até 10x e Eletro em até 20x Sem Juros*',
                image: 'https://www.condor.com.br/assets/images/card.jpg'
            };
            this.seo.updateTags(data);
            this.seo.addCanonical();
        };
        router.events.forEach((item) => {
            if (item instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.gtmService.pushTag({ event: 'page', pageName: item.url });
            }
        });
        sw.checkForUpdates();
    }
    ngOnInit() {
        this.dados();
        this.getSeo();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId))
            this.setCookies();
    }
    ngAfterViewInit() {
        this.storageMap.has('Loja').subscribe(res => {
            if (res === false) {
                this.storageMap.set('Loja', src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].loja).subscribe(() => { });
            }
        });
    }
    onActivate(event) {
        // const scrollToTop = window.setInterval(() => {
        //   const pos = window.pageYOffset;
        //   if (pos > 0) window.scrollTo(0, pos - 20);
        //   else window.clearInterval(scrollToTop);
        // }, 16);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_8__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_update_service__WEBPACK_IMPORTED_MODULE_9__["UpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_10__["StorageMap"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_12__["NgcCookieConsentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_13__["GoogleTagManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.politica = _t.first);
    } }, decls: 17, vars: 3, consts: [[4, "ngIf"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", "overflow-auto", 2, "z-index", "100000000!important"], ["politica", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "bg-condor"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["id", "myModalLabel", 1, "modal-title", "w-100", "py-2"], [1, "modal-body"], [1, "overflow-y"], [1, "modal-footer"], ["type", "button", "mdbBtn", "", "color", "primary", "aria-label", "Close", "mdbWavesEffect", "", 1, "waves-light", 3, "click"], [3, "items", "condor"], [3, "items", "json"], [3, "items"], [3, "json"], [1, "type"], [3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_main_0_Template, 8, 7, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r1.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-lgpd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r1.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fechar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.data$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["ModalDirective"], _widgets_lgpd_lgpd_component__WEBPACK_IMPORTED_MODULE_15__["LgpdComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["WavesDirective"], _widgets_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_16__["MobileComponent"], _widgets_top_top_component__WEBPACK_IMPORTED_MODULE_17__["TopComponent"], _widgets_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], _widgets_menu_menu_component__WEBPACK_IMPORTED_MODULE_19__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _widgets_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".type[_ngcontent-%COMP%] {\n  margin-top: 120px;\n}\n\n.bg-condor[_ngcontent-%COMP%] {\n  background-color: #447ab3 !important;\n}\n\n.bg-condor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n@media (min-width: 1024px) {\n  .type[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLG9DQUFBO0FBQUY7O0FBQ0U7RUFDRSxzQkFBQTtBQUNKOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eXBlIHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG5cblxuLmJnLWNvbmRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDdhYjMgIWltcG9ydGFudDtcbiAgYnV0dG9uIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLnR5cGV7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }, { type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_8__["NewsService"] }, { type: _core_services_update_service__WEBPACK_IMPORTED_MODULE_9__["UpdateService"] }, { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_10__["StorageMap"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }, { type: ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_12__["NgcCookieConsentService"] }, { type: angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_13__["GoogleTagManagerService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { politica: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['politica', { static: true }]
        }] }); })();


/***/ }),

/***/ "U1ei":
/*!***************************************************************!*\
  !*** ./src/app/@sharing/mobile-link/mobile-link.component.ts ***!
  \***************************************************************/
/*! exports provided: MobileLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLinkComponent", function() { return MobileLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_animations_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/animations/slide */ "1OEv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");






function MobileLinkComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileLinkComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const data_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onLink(data_r1.url || data_r1.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.nome || data_r1.name, " ");
} }
class MobileLinkComponent {
    constructor(router) {
        this.router = router;
        this.items = [];
        this.titulo = '';
        this.toogle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.active = 'out';
        this.height = '0px';
        this.toogleSubMenu = () => {
            this.active = this.active === 'out' ? 'in' : 'out';
        };
        this.onLink = (slug) => {
            this.router.navigateByUrl(slug);
            this.toogle.emit('out');
        };
    }
}
MobileLinkComponent.ɵfac = function MobileLinkComponent_Factory(t) { return new (t || MobileLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MobileLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileLinkComponent, selectors: [["app-mobile-link"]], inputs: { items: "items", titulo: "titulo" }, outputs: { toogle: "toogle" }, decls: 7, vars: 4, consts: [[1, "items", 3, "click"], [1, "item"], [1, "icon"], [1, "fas", 3, "ngClass"], [1, "submenu"], ["class", "sub-menu-items", 3, "click", 4, "ngFor", "ngForOf"], [1, "sub-menu-items", 3, "click"], ["mdbWavesEffect", "", 1, "item"], [1, "fas", "fa-angle-right", "float-right"]], template: function MobileLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileLinkComponent_Template_div_click_0_listener() { return ctx.toogleSubMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MobileLinkComponent_div_6_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.active === "out" ? "fa-plus" : "fa-minus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideDownInOut", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"]], styles: [".items[_ngcontent-%COMP%] {\n  flex: row;\n  display: flex;\n  font-size: 0.9rem;\n  align-items: center;\n  padding: 0.35rem 0.5rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ececec;\n}\n.items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0;\n}\n.items[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 10%;\n  text-align: right;\n}\n.sub-menu-items[_ngcontent-%COMP%] {\n  flex: row;\n  display: flex;\n  align-items: center;\n  padding: 0.35rem 0.5rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ececec;\n}\n.sub-menu-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 85%;\n  font-size: 0.8rem;\n  margin-bottom: 0;\n}\n.sub-menu-items[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJpbmcvbW9iaWxlLWxpbmsvbW9iaWxlLWxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUVBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUU7RUFDRSxVQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmluZy9tb2JpbGUtbGluay9tb2JpbGUtbGluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtcyB7XG4gIGZsZXg6IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAuOXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogLjM1cmVtIC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLml0ZW17XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5pY29uIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5cbi5zdWItbWVudS1pdGVtc3tcbiAgZmxleDogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAuMzVyZW0gLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAuaXRlbSB7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmljb257XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxufVxuIl19 */"], data: { animation: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_1__["slideDownInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-link',
                templateUrl: './mobile-link.component.html',
                styleUrls: ['./mobile-link.component.scss'],
                animations: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_1__["slideDownInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toogle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "UE6f":
/*!*****************************************************!*\
  !*** ./src/app/@sharing/menu/mobile-link.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuSharingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSharingModule", function() { return MenuSharingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.component */ "6q/u");






class MenuSharingModule {
}
MenuSharingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MenuSharingModule });
MenuSharingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MenuSharingModule_Factory(t) { return new (t || MenuSharingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MenuSharingModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuSharingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
                exports: [_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "UrC9":
/*!*****************************************************!*\
  !*** ./src/app/@widgets/mobile/mobile.component.ts ***!
  \*****************************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_animations_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/animations/slide */ "1OEv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-responsive */ "X2yv");
/* harmony import */ var _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@sharing/select-loja/select-loja.component */ "sCWG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sharing_mobile_link_mobile_link_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@sharing/mobile-link/mobile-link.component */ "U1ei");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");














const _c0 = ["search"];
function MobileComponent_main_0_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_div_26_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const menu_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onLink("departamento/" + menu_r6.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r6.nome, " ");
} }
function MobileComponent_main_0_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_div_28_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const campanha_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onLink(campanha_r9.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campanha_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", campanha_r9.nome, " ");
} }
function MobileComponent_main_0_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const center_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", center_r12.name, " ");
} }
const _c1 = function (a0) { return [a0]; };
function MobileComponent_main_0_div_29_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_div_29_ng_template_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.activeSidebar = "out"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const center_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, center_r12.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", center_r12.name, " ");
} }
function MobileComponent_main_0_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_div_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.activeSidebar = "out"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobileComponent_main_0_div_29_div_2_Template, 5, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobileComponent_main_0_div_29_ng_template_3_Template, 6, 4, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const center_r12 = ctx.$implicit;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", center_r12.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", center_r12.external)("ngIfElse", _r14);
} }
function MobileComponent_main_0_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", header_r22.iconmobile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", header_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r22.name, " ");
} }
function MobileComponent_main_0_div_36_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_div_36_ng_template_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r27.activeSidebar = "out"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, header_r22.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", header_r22.iconmobile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", header_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r22.name, " ");
} }
function MobileComponent_main_0_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_div_36_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.activeSidebar = "out"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobileComponent_main_0_div_36_div_2_Template, 6, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobileComponent_main_0_div_36_ng_template_3_Template, 7, 6, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r22 = ctx.$implicit;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", header_r22.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", header_r22.external)("ngIfElse", _r24);
} }
function MobileComponent_main_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.toogleSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-select-loja");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MobileComponent_main_0_Template_input_keyup_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.getSearch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onLink(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.toogleMenuOfertas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ofertas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MobileComponent_main_0_div_26_Template, 6, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MobileComponent_main_0_div_28_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MobileComponent_main_0_div_29_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_Template_div_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onLink("/blog"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Blog ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MobileComponent_main_0_div_36_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "app-mobile-link", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onToogle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-mobile-link", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onToogle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-mobile-link", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onToogle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-mobile-link", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.onToogle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-mobile-link", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MobileComponent_main_0_Template_app_mobile_link_toogle_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.onToogle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileComponent_main_0_Template_div_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.toogleSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideLeftInOut", ctx_r0.activeSidebar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.activeMenuOfertas === "out" ? "fa-plus" : "fa-minus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideDownInOut", ctx_r0.activeMenuOfertas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 16, ctx_r0.menuOfertas$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items.campanha);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items.center);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.faleConosco);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx_r0.condor.institucional.title)("items", ctx_r0.condor.institucional.menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx_r0.condor.acoes.title)("items", ctx_r0.condor.acoes.menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx_r0.condor.financeiro.title)("items", ctx_r0.condor.financeiro.menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx_r0.condor.empresa.title)("items", ctx_r0.condor.empresa.menu);
} }
const _c2 = function () { return ["xs", "sm"]; };
class MobileComponent {
    constructor(router, seo, db, news, util) {
        this.router = router;
        this.seo = seo;
        this.db = db;
        this.news = news;
        this.util = util;
        this.salida = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeSidebar = 'out';
        this.activeMenuOfertas = 'out';
        this.items = [];
        this.condor = [];
        this.faleConosco = [];
        this.toogleSidebar = () => this.activeSidebar = this.activeSidebar === 'out' ? 'in' : 'out';
        this.toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';
        this.convertFaleConosco = () => {
            this.condor.sac.forEach(el => this.faleConosco.push(el));
            this.condor.trabalhe.forEach(el => this.faleConosco.push(el));
            this.condor.denuncia.forEach(el => this.faleConosco.push(el));
            this.faleConosco.push({ nome: 'Notícias', url: '/institucional/imprensa' });
        };
        this.onLink = (slug) => {
            console.log(slug);
            const validate = slug.startsWith('http');
            if (validate)
                window.open(slug, '_blank');
            else
                this.router.navigateByUrl(slug);
            this.activeSidebar = 'out';
        };
        this.onToogle = (ev) => this.activeSidebar = ev;
        this.getSearch = (event) => {
            if (event.keyCode === 13) {
                if (!event.target.value)
                    return;
                return this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);
            }
        };
        this.getSearchClick = () => {
            if (!this.search.nativeElement.value)
                return;
            return this.router.navigate(['pesquisa-usuario', this.util.toSlug(this.search.nativeElement.value)]);
        };
        this.getCategory = () => this.category = this.news.getBlogCollection('categories?orderby=count&order=desc&per_page=10')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.body));
        this.goToCategory = (e) => this.router.navigate(['/blog', 'categoria', e.target.value]);
        this.goToDepartamento = (e) => this.router.navigate(['/departamento', e.target.value]);
        // toog = (ev) => this.entrada = false;
        this.Click = (event) => {
            if (event.keyCode === 13) {
                if (!event.target.value)
                    return;
                this.seo.dataLayerTracking({ event: 'blogsearch', searchTerm: event.target.value });
                return this.router.navigate(['blog', 'search', this.util.toSlug(event.target.value)]);
            }
        };
    }
    ngOnInit() {
        this.getCategory();
        this.convertFaleConosco();
        this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
    }
}
MobileComponent.ɵfac = function MobileComponent_Factory(t) { return new (t || MobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_6__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"])); };
MobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileComponent, selectors: [["app-mobile"]], viewQuery: function MobileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
    } }, inputs: { activeSidebar: "activeSidebar", items: "items", condor: "condor" }, outputs: { salida: "salida" }, decls: 1, vars: 2, consts: [["id", "mobile", 4, "showItBootstrap"], ["id", "mobile"], [1, "fixed-top"], [1, "top"], [1, "menu"], [1, "fa", "white-text", "fa-bars", 3, "click"], ["href", "#"], ["src", "./assets/images/logo.png", "alt", "Logo Condor", "width", "265", "height", "55", 1, "logo"], [1, "select-loja"], [1, "search"], ["placeholder", "O que voc\u00EA est\u00E1 procurando?", 3, "keyup"], ["search", ""], [1, "sidebar"], [1, "menu", "overflow-auto"], [2, "height", "40px"], [1, "items", 3, "click"], [1, "item"], [1, "icon"], [1, "fas", "fa-angle-right", "float-right"], [1, "fas", 3, "ngClass"], [1, "submenu"], ["class", "sub-menu-items", 3, "click", 4, "ngFor", "ngForOf"], ["class", "items", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "space"], ["titulo", "Fale Conosco", 3, "items", "toogle"], [3, "titulo", "items", "toogle"], [1, "vacio", 3, "click"], [1, "fa", "white-text", "fa-times"], [1, "sub-menu-items", 3, "click"], ["mdbWavesEffect", "", "routerLinkActive", "active", 1, "item"], [1, "fas", "fa-shopping-basket", "mr-1"], ["target", "_blank", 3, "href", "click"], ["class", "items", 4, "ngIf", "ngIfElse"], ["Internal", ""], [1, "items"], [3, "routerLink", "click"], [3, "src", "alt"]], template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MobileComponent_main_0_Template, 44, 18, "main", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showItBootstrap", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
    } }, directives: [ngx_responsive__WEBPACK_IMPORTED_MODULE_8__["ShowItBootstrapDirective"], _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_9__["SelectLojaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _sharing_mobile_link_mobile_link_component__WEBPACK_IMPORTED_MODULE_11__["MobileLinkComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["#mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #444 !important;\n}\n#mobile[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  padding: 0.45rem 0;\n  text-align: center;\n  background-color: var(--color-blue-primary);\n}\n#mobile[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: auto;\n  height: 30px;\n}\n#mobile[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  left: 0.75rem;\n  font-size: 1.3rem;\n  position: absolute;\n}\n#mobile[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .select-loja[_ngcontent-%COMP%] {\n  background-color: var(--color-red-secondary);\n}\n#mobile[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px;\n  color: #727272;\n  min-height: 40px;\n  font-size: 0.9rem;\n  padding: 0.25rem 0.5rem;\n  border-bottom: 1px solid #ececec;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  flex: row;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  height: 100vh;\n  z-index: 10000000000;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100vh;\n  z-index: 100000;\n  background-color: var(--color-default--background-2);\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  flex: row;\n  display: flex;\n  font-size: 0.9rem;\n  align-items: center;\n  padding: 0.35rem 0.5rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ececec;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 10%;\n  text-align: right;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .sub-menu-items[_ngcontent-%COMP%] {\n  flex: row;\n  display: flex;\n  align-items: center;\n  padding: 0.35rem 0.5rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ececec;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .sub-menu-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 85%;\n  font-size: 0.8rem;\n  margin-bottom: 0;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .sub-menu-items[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 15%;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n#mobile[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .vacio[_ngcontent-%COMP%] {\n  width: 20%;\n  color: #fff;\n  font-weight: 700;\n  font-size: 1.8rem;\n  text-align: center;\n  padding-top: 1.3rem;\n}\n#mobile[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  background-color: var(--color-blue-primary);\n}\n#mobile[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0FBQUo7QUFHSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQUROO0FBRU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRU07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBR0k7RUFDRSw0Q0FBQTtBQUROO0FBSU07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQUZSO0FBTUU7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQU1JO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7QUFKTjtBQUtNO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBSFI7QUFJUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUZWO0FBSVE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFGVjtBQUlRO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBRlY7QUFLTTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFIUjtBQUlRO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGVjtBQUlRO0VBQ0UsVUFBQTtBQUZWO0FBS007RUFDRSxpQkFBQTtBQUhSO0FBTUk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSk47QUFPRTtFQUNFLDJDQUFBO0FBTEo7QUFNSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSk4iLCJmaWxlIjoic3JjL2FwcC9Ad2lkZ2V0cy9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21vYmlsZSB7XG4gIGF7XG4gICAgY29sb3I6ICM0NDQgIWltcG9ydGFudDtcbiAgfVxuICBoZWFkZXJ7XG4gICAgLnRvcCB7XG4gICAgICBwYWRkaW5nOiAuNDVyZW0gMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtcHJpbWFyeSk7XG4gICAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgICAubWVudSB7XG4gICAgICAgIGxlZnQ6IC43NXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNlbGVjdC1sb2phIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZC1zZWNvbmRhcnkpO1xuICAgIH1cbiAgICAuc2VhcmNoIHtcbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICBjb2xvcjogIzcyNzI3MjtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnNpZGViYXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGZsZXg6IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwMDAwO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC43MCk7XG4gICAgLm1lbnUge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0LS1iYWNrZ3JvdW5kLTIpO1xuICAgICAgLml0ZW1zIHtcbiAgICAgICAgZmxleDogcm93O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAuMzVyZW0gLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbXtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zdWItbWVudS1pdGVtc3tcbiAgICAgICAgZmxleDogcm93O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAuMzVyZW0gLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmljb257XG4gICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnNwYWNlIHtcbiAgICAgICAgbWFyZ2luOiAuMjVyZW0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhY2lvIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctdG9wOiAxLjNyZW07XG4gICAgfVxuICB9XG4gIGZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS1wcmltYXJ5KTtcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"], data: { animation: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_2__["slideDownInOut"], _core_animations_slide__WEBPACK_IMPORTED_MODULE_2__["slideLeftInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile',
                templateUrl: './mobile.component.html',
                styleUrls: ['./mobile.component.scss'],
                animations: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_2__["slideDownInOut"], _core_animations_slide__WEBPACK_IMPORTED_MODULE_2__["slideLeftInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_4__["SeoService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_6__["NewsService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }]; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search']
        }], salida: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], condor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VD/p":
/*!*****************************************************!*\
  !*** ./src/app/@widgets/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sharing_social_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@sharing/social/social.component */ "oIzZ");
/* harmony import */ var _sharing_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@sharing/menu/menu.component */ "6q/u");






const _c0 = function () { return ["/fale-conosco/trabalhe-conosco"]; };
const _c1 = function () { return ["/fale/conosco/sac"]; };
class FooterComponent {
    constructor() {
        this.items = [];
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { items: "items" }, decls: 29, vars: 10, consts: [[1, "pt-3", "pt-md-5"], [1, "container", "pb-md-5"], [1, "row", "ios"], [1, "col-12", "d-md-none", "mb-4"], [1, "list-group", "list-group-flush", 2, "background", "none !important", "color", "#fff !important"], [1, "list-group-item", "rgba-0", 2, "background", "none !important", "color", "#fff !important"], ["href", "tel:0800416655", 1, "white-text"], ["fas", "", "icon", "phone", 1, "mr-1"], [1, "white-text", 3, "routerLink"], ["fas", "", "icon", "briefcase", 1, "mr-1"], ["fas", "", "icon", "headset", 1, "mr-1"], [1, "col-12", "col-md-6", "col-lg-3", "d-none", "d-md-block"], ["Lazy", "", "alt", "", 1, "img-fluid", "mb-4", 3, "src"], [1, "col-12", "col-md-6", "col-lg-3", "d-lg-none"], [3, "items"], [1, "col-6", "col-md-6", "col-lg-3", "d-none", "d-lg-block", "text-center"], [1, "copyright"], [1, "footer-copyright", "text-center", "mb-0", "py-2", "b-04", 3, "innerHTML"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mdb-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fale Conosco 0800 416655 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mdb-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Trabalhe Conosco ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mdb-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-social", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-menu", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-menu", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-social", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.items.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items.midia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items.institucional);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items.servicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items.midia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.items.copyright, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["FasDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _sharing_social_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"], _sharing_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]], styles: ["footer[_ngcontent-%COMP%] {\n  background-color: var(--color-blue-primary);\n}\nfooter[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUFBO0FBQ0Y7QUFBRTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL0B3aWRnZXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlLXByaW1hcnkpO1xuICAuY29weXJpZ2h0e1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjI1KTtcbiAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VlVH":
/*!**************************************************!*\
  !*** ./src/app/@sharing/titulo/titulo.module.ts ***!
  \**************************************************/
/*! exports provided: TituloModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TituloModule", function() { return TituloModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/directive.module */ "YfWO");
/* harmony import */ var _titulo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./titulo.component */ "XtQF");







class TituloModule {
}
TituloModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TituloModule });
TituloModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TituloModule_Factory(t) { return new (t || TituloModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TituloModule, { declarations: [_titulo_component__WEBPACK_IMPORTED_MODULE_5__["TituloComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_titulo_component__WEBPACK_IMPORTED_MODULE_5__["TituloComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TituloModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_titulo_component__WEBPACK_IMPORTED_MODULE_5__["TituloComponent"]],
                exports: [_titulo_component__WEBPACK_IMPORTED_MODULE_5__["TituloComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "XtQF":
/*!*****************************************************!*\
  !*** ./src/app/@sharing/titulo/titulo.component.ts ***!
  \*****************************************************/
/*! exports provided: TituloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TituloComponent", function() { return TituloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




const _c0 = function (a0) { return [a0]; };
function TituloComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.icon, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);
} }
function TituloComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r1.icon, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.titulo);
} }
class TituloComponent {
    constructor() {
        this.link = '';
    }
}
TituloComponent.ɵfac = function TituloComponent_Factory(t) { return new (t || TituloComponent)(); };
TituloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TituloComponent, selectors: [["app-titulo"]], inputs: { titulo: "titulo", icon: "icon", link: "link" }, decls: 2, vars: 2, consts: [["class", "b-07 mb-4 pb-1 border-bottom", 4, "ngIf"], ["class", "titulo-balck b-07 mb-4 pb-1 border-bottom", 4, "ngIf"], [1, "b-07", "mb-4", "pb-1", "border-bottom"], [3, "routerLink"], ["aria-hidden", "true"], [1, "titulo-balck", "b-07", "mb-4", "pb-1", "border-bottom"]], template: function TituloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TituloComponent_h2_0_Template, 5, 7, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TituloComponent_h2_1_Template, 4, 4, "h2", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.link);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  color: var(--color-red-secondary) !important;\n}\n\n@media (max-width: 450px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    padding: 0 15px;\n  }\n}\n\n@media (max-width: 375px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJpbmcvdGl0dWxvL3RpdHVsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLDRDQUFBO0FBRVA7O0FBQUE7RUFDRTtJQUFJLGlCQUFBO0lBQW1CLGVBQUE7RUFLdkI7QUFDRjs7QUFIQTtFQUNFO0lBQUksaUJBQUE7RUFNSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJpbmcvdGl0dWxvL3RpdHVsby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyLCBheyBjb2xvcjogdmFyKC0tY29sb3ItcmVkLXNlY29uZGFyeSkgIWltcG9ydGFudDsgfVxuXG5AbWVkaWEobWF4LXdpZHRoOiA0NTBweCkge1xuICBoMnsgZm9udC1zaXplOiAxLjVyZW07IHBhZGRpbmc6IDAgMTVweDsgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAzNzVweCkge1xuICBoMnsgZm9udC1zaXplOiAxLjNyZW07IH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TituloComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-titulo',
                templateUrl: './titulo.component.html',
                styleUrls: ['./titulo.component.scss']
            }]
    }], null, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Xx/V":
/*!**************************************************************!*\
  !*** ./src/app/@sharing/menu-sidebar/menu-sidebar.module.ts ***!
  \**************************************************************/
/*! exports provided: MenuSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSidebarModule", function() { return MenuSidebarModule; });
/* harmony import */ var _sharing_mobile_link_mobile_link_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sharing/mobile-link/mobile-link.module */ "jdR/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-sidebar.component */ "opPO");







class MenuSidebarModule {
}
MenuSidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MenuSidebarModule });
MenuSidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MenuSidebarModule_Factory(t) { return new (t || MenuSidebarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"],
            _sharing_mobile_link_mobile_link_module__WEBPACK_IMPORTED_MODULE_0__["MobileLinkModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MenuSidebarModule, { declarations: [_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"],
        _sharing_mobile_link_mobile_link_module__WEBPACK_IMPORTED_MODULE_0__["MobileLinkModule"]], exports: [_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MenuSidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"]],
                exports: [_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["MenuSidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"],
                    _sharing_mobile_link_mobile_link_module__WEBPACK_IMPORTED_MODULE_0__["MobileLinkModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "YXfc":
/*!*******************************************************!*\
  !*** ./src/app/@sharing/product/product.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "z8v2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_directives_product_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/directives/product.directive */ "nJ/e");
/* harmony import */ var _core_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/pipes/truncate.pipe */ "6N8t");









function ProductComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+18");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} }
function ProductComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function ProductComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ProductComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} }
const _c0 = function (a0) { return [a0, "R$", "symbol", "1.2-2", "pt"]; };
function ProductComponent_div_22_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r9.code.qtd_clube || 0, "x de ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r9.code.parcela_clube || 0)), " no cart\u00E3o Condor. ");
} }
function ProductComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductComponent_div_22_div_6_Template, 4, 10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r6.code.preco_clube || 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.code.produtos.embalagem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.code.parcela_clube)("ngIfElse", _r7);
} }
function ProductComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
class ProductComponent {
    constructor(router, seo, util, storageMap) {
        this.router = router;
        this.seo = seo;
        this.util = util;
        this.storageMap = storageMap;
        this.code = [];
        this.loja = [];
        this.mas18 = 'Aprecie com moderação. É proibida a venda de bebidas alcoólicas a menores de 18 anos (Lei nº 8.069/90 Art.81, Estatuto da Criança e do Adolescente).';
        this.product = [];
        this.imagem = [];
        this.goToProduct = () => {
            this.seo.dataLayerTracking({
                event: 'productInteraction',
                productAction: 'Visualizar Produto',
                productName: this.code.produtos.dsc_produto
            });
            this.router.navigate([
                'produto',
                this.util.toSlug(this.code.produtos.dsc_departamento),
                this.util.toSlug(this.code.produtos.dsc_setor),
                this.code.produtos.slug
            ]);
        };
    }
    ngOnInit() {
        this.product = this.code.produtos;
        this.storageMap.watch('Loja').subscribe((res) => {
            if (res)
                this.loja = res;
            else
                this.loja = { loja: 0, slug: '', nome: '' };
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { code: "code", loja: "loja" }, decls: 32, vars: 33, consts: [[1, "product", 3, "click"], [1, "message"], ["class", "mas18", 4, "ngIf"], ["class", "kit", 4, "ngIf"], [1, "images"], ["appProduct", "", 3, "src", "alt"], [1, "promotion"], ["Lazy", "", "src", "./assets/images/clube.png", "alt", "Tag Clube Condor", "class", "selo_clube", 4, "ngIf"], ["Lazy", "", "src", "./assets/images/selo_ddv.png", "alt", "Dinheiro de Volta", "class", "selo_ddv", 4, "ngIf"], [1, "content"], [1, "title"], [1, "regular"], [4, "ngIf"], ["style", "height: 54px;", 4, "ngIf"], [3, "ngClass"], [2, "height", "18px"], ["class", "clube", 4, "ngIf"], [1, "validade"], ["semParcela", ""], [1, "mas18"], [1, "kit"], ["Lazy", "", "src", "./assets/images/clube.png", "alt", "Tag Clube Condor", 1, "selo_clube"], ["Lazy", "", "src", "./assets/images/selo_ddv.png", "alt", "Dinheiro de Volta", 1, "selo_ddv"], [2, "height", "54px"], [1, "clube"], [1, "price"], ["class", "parcela", 4, "ngIf", "ngIfElse"], [1, "parcela"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_div_click_0_listener() { return ctx.goToProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductComponent_img_7_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductComponent_img_8_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "truncate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductComponent_div_14_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductComponent_div_15_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductComponent_div_22_Template, 7, 12, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProductComponent_ng_template_30_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.code.image === ctx.mas18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.code.kit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.code.host, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.code.produtos.dsc_produto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.code.preco_clube);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.code.preco_cashback);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 16, ctx.code.produtos.dsc_produto, 70));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.code.preco_clube);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.code.preco_clube);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.code.preco_clube ? "price-clube" : "price-normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](18, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.code.preco_regular || 0)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.code.produtos.embalagem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.code.preco_clube);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Oferta V\u00E1lida de ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 25, ctx.code.produtos.start, "dd/MM/yyyy"), " a ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 28, ctx.code.produtos.end, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.loja.nome, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _core_directives_product_directive__WEBPACK_IMPORTED_MODULE_6__["ProductDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_core_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".product[_ngcontent-%COMP%] {\n  color: var(--product-text);\n  position: relative;\n  border-radius: 10px;\n  background-color: var(--product-background);\n  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);\n}\n.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .mas18[_ngcontent-%COMP%] {\n  border-radius: 10px 0 0 0;\n  position: absolute;\n  background-color: var(--product-mas18);\n  width: auto;\n  height: 30px;\n  top: 0;\n  left: 0;\n}\n.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .mas18[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  padding: 0 10px;\n  font-weight: 600;\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 0px;\n  color: var(--product-color-text-mas18);\n}\n.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .kit[_ngcontent-%COMP%] {\n  border-radius: 0 10px 0 0;\n  position: absolute;\n  background-color: var(--product-kit);\n  width: auto;\n  height: 30px;\n  top: 0;\n  right: 0;\n}\n.product[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .kit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  padding: 0 10px;\n  font-weight: 600;\n  font-size: 1rem;\n  text-align: center;\n  margin-bottom: 0px;\n  color: var(--product-color-text-mas18);\n}\n.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%] {\n  position: relative;\n}\n.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]   .selo_clube[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 10px;\n  width: 40px;\n  height: auto;\n}\n.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .promotion[_ngcontent-%COMP%]   .selo_ddv[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  right: 10px;\n  width: 40px;\n  height: auto;\n}\n.product[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  height: 130px;\n  width: auto;\n  margin: 0 auto;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0.35rem;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  min-height: 48px;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]   .price-normal[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.2rem;\n  margin-bottom: 0px;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .regular[_ngcontent-%COMP%]   .price-clube[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .clube[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin-bottom: 0px;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .clube[_ngcontent-%COMP%]   .parcela[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.75rem;\n  margin-bottom: 0px;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%] {\n  margin: 0.2rem 0;\n}\n.product[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .validade[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n  font-size: 0.65rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJpbmcvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQ0FBQTtBQUNGO0FBQ0k7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ047QUFBTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBRVI7QUFDSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFDTjtBQUFNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUFFUjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRVI7QUFBTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ047QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFDSTtFQUNFLGtCQUFBO0FBQ047QUFBTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQU07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFSO0FBR1E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFEVjtBQUtJO0VBQ0UsZ0JBQUE7QUFITjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmluZy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XG4gIGNvbG9yOiB2YXIoLS1wcm9kdWN0LXRleHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2R1Y3QtYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNHB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC4yMCk7XG4gIC5tZXNzYWdlIHtcbiAgICAubWFzMTgge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2R1Y3QtbWFzMTgpO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJvZHVjdC1jb2xvci10ZXh0LW1hczE4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmtpdCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZHVjdC1raXQpO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByb2R1Y3QtY29sb3ItdGV4dC1tYXMxOCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbWFnZXN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5wcm9tb3Rpb257XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAuc2Vsb19jbHViZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgLnNlbG9fZGR2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgICBpbWcge1xuICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICB9XG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAuMzVyZW07XG4gICAgLnRpdGxlIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgfVxuICAgIC5yZWd1bGFyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIC5wcmljZS1ub3JtYWwge1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgICAgLnByaWNlLWNsdWJlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAuODVyZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5jbHViZSB7XG4gICAgICAucHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgICAgLnBhcmNlbGEge1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudmFsaWRhZGUge1xuICAgICAgbWFyZ2luOiAuMjByZW0gMDtcbiAgICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjY1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }, { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"] }]; }, { code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loja: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YfWO":
/*!******************************************************!*\
  !*** ./src/app/@core/directives/directive.module.ts ***!
  \******************************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-load.directive */ "E5c8");
/* harmony import */ var _product_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.directive */ "nJ/e");





class DirectiveModule {
}
DirectiveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectiveModule });
DirectiveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectiveModule_Factory(t) { return new (t || DirectiveModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectiveModule, { declarations: [_product_directive__WEBPACK_IMPORTED_MODULE_3__["ProductDirective"], _lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__["LazyLoadDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_product_directive__WEBPACK_IMPORTED_MODULE_3__["ProductDirective"], _lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__["LazyLoadDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectiveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_product_directive__WEBPACK_IMPORTED_MODULE_3__["ProductDirective"], _lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__["LazyLoadDirective"]],
                exports: [_product_directive__WEBPACK_IMPORTED_MODULE_3__["ProductDirective"], _lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__["LazyLoadDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _widgets_lgpd_lgpd_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@widgets/lgpd/lgpd.module */ "AGod");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "3pDu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-toolkit/universal */ "o+Og");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookieconsent */ "uOen");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-quicklink */ "bYOv");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _external_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./external.routes */ "9iOA");
/* harmony import */ var _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/services/redirect.guard */ "z/i2");
/* harmony import */ var _widgets_top_top_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @widgets/top/top.module */ "erc9");
/* harmony import */ var _widgets_menu_menu_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @widgets/menu/menu.module */ "vreI");
/* harmony import */ var _widgets_footer_footer_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @widgets/footer/footer.module */ "pR+U");
/* harmony import */ var _widgets_header_header_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @widgets/header/header.module */ "sFsK");
/* harmony import */ var _widgets_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @widgets/mobile/mobile.module */ "9t6m");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "iInd");































Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2___default.a);
const cookieConfig = {
    cookie: { domain: 'condor.com.br' },
    position: "bottom",
    theme: "edgeless",
    palette: {
        popup: { background: "#000000", text: "#ffffff" },
        button: { background: "#f1d600", text: "#000000" }
    },
    layout: 'my-custom-layout',
    layouts: { "my-custom-layout": '{{messagelink}}{{compliance}}' },
    elements: {
        messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link cc-politica">Políticas de privacidade</a>.
    </span>
    `,
    },
    type: 'info'
};
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
        { provide: 'googleTagManagerId', useValue: 'GTM-T7FLP2C' },
        _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_17__["RedirectGuard"],
    ], imports: [[
            _app_routes__WEBPACK_IMPORTED_MODULE_14__["APP_ROUTE"],
            _widgets_top_top_module__WEBPACK_IMPORTED_MODULE_18__["TopModule"],
            _widgets_menu_menu_module__WEBPACK_IMPORTED_MODULE_19__["MenuModule"],
            _widgets_lgpd_lgpd_module__WEBPACK_IMPORTED_MODULE_0__["LgpdModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _widgets_header_header_module__WEBPACK_IMPORTED_MODULE_21__["HeaderModule"],
            _widgets_footer_footer_module__WEBPACK_IMPORTED_MODULE_20__["FooterModule"],
            _widgets_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_22__["MobileModule"],
            ngx_quicklink__WEBPACK_IMPORTED_MODULE_13__["QuicklinkModule"],
            _external_routes__WEBPACK_IMPORTED_MODULE_16__["EXTERNAL_ROUTES"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_9__["NgtUniversalModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBBootstrapModule"].forRoot(),
            ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_12__["NgcCookieConsentModule"].forRoot(cookieConfig),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_23__["environment"].production, scope: './', registrationStrategy: 'registerImmediately' }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                loader: {
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"], useFactory: HttpLoaderFactory,
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], _widgets_top_top_module__WEBPACK_IMPORTED_MODULE_18__["TopModule"],
        _widgets_menu_menu_module__WEBPACK_IMPORTED_MODULE_19__["MenuModule"],
        _widgets_lgpd_lgpd_module__WEBPACK_IMPORTED_MODULE_0__["LgpdModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _widgets_header_header_module__WEBPACK_IMPORTED_MODULE_21__["HeaderModule"],
        _widgets_footer_footer_module__WEBPACK_IMPORTED_MODULE_20__["FooterModule"],
        _widgets_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_22__["MobileModule"],
        ngx_quicklink__WEBPACK_IMPORTED_MODULE_13__["QuicklinkModule"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_9__["NgtUniversalModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBRootModule"], ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_12__["NgcCookieConsentModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]
                ],
                imports: [
                    _app_routes__WEBPACK_IMPORTED_MODULE_14__["APP_ROUTE"],
                    _widgets_top_top_module__WEBPACK_IMPORTED_MODULE_18__["TopModule"],
                    _widgets_menu_menu_module__WEBPACK_IMPORTED_MODULE_19__["MenuModule"],
                    _widgets_lgpd_lgpd_module__WEBPACK_IMPORTED_MODULE_0__["LgpdModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _widgets_header_header_module__WEBPACK_IMPORTED_MODULE_21__["HeaderModule"],
                    _widgets_footer_footer_module__WEBPACK_IMPORTED_MODULE_20__["FooterModule"],
                    _widgets_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_22__["MobileModule"],
                    ngx_quicklink__WEBPACK_IMPORTED_MODULE_13__["QuicklinkModule"],
                    _external_routes__WEBPACK_IMPORTED_MODULE_16__["EXTERNAL_ROUTES"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_9__["NgtUniversalModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBBootstrapModule"].forRoot(),
                    ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_12__["NgcCookieConsentModule"].forRoot(cookieConfig),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_23__["environment"].production, scope: './', registrationStrategy: 'registerImmediately' }),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                        loader: {
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"], useFactory: HttpLoaderFactory,
                        }
                    }),
                ],
                providers: [
                    // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
                    { provide: 'googleTagManagerId', useValue: 'GTM-T7FLP2C' },
                    _core_services_redirect_guard__WEBPACK_IMPORTED_MODULE_17__["RedirectGuard"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZUVw":
/*!************************************************!*\
  !*** ./src/app/@core/services/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.prod */ "cxbk");







const url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].v1.url;
const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
class DataService {
    constructor(http) {
        this.http = http;
        // Ofertas Dia
        this.menu$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.oferta$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.Query = (query) => this.http.get(url + query);
        this.add = (table, data) => this.http.post(`${url}/${table}`, data, { headers });
        // Ofertas
        this.setOfertas$ = (items) => this.oferta$.next(items);
        this.getOfertas$ = () => this.oferta$.asObservable();
        this.getOfertas = (loja) => {
            return this.Query(`/Ofertas/LojaProdutos?loja=${loja}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => this.setOfertas$(res)));
        };
        /** Menus */
        this.setMenuOfertas$ = (items) => this.menu$.next(items);
        this.getMenuOfertas$ = () => this.menu$.asObservable();
        this.getMenuOfertas = (tipo) => this.Query(`/Produtos/${tipo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => this.setMenuOfertas$(res)));
        this.getCollection = (collection) => this.Query(collection).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res));
        this.OfertasLojaDepartamento = (loja, departamento) => this.Query(`/Ofertas/LojaProdutosDepartamento?loja=${loja}&departamento=${departamento}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res));
    }
    // Ofertas Loja Slug
    OfertasLojaSlug(loja, slug, limit = 100) {
        return this.Query(`/Ofertas/LojaProdutosSlug?loja=${loja}&slug=${slug}&limit=${limit}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res));
    }
    // Ofertas Loja Campanha
    OfertasLojaCampanha(loja, campanha, limit = 100) {
        return this.Query(`/Ofertas/LojaProdutosCampanha?loja=${loja}&campanha=${campanha}&limit=${limit}`);
    }
    // Ofertas Loja Departamento
    OfertasLojaDepartamentoSetor(loja, departamento, setor, limit = 100) {
        const query = `/Ofertas/LojaProdutosDepartamentoSetor?loja=${loja}&departamento=${departamento}&setor=${setor}`;
        return this.Query(`${query}&limit${limit}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res));
    }
    // Search
    Search(search) {
        const query1 = `filter[where][or][0][dsc_produto][like]=%25${search}%25`;
        const query2 = `filter[where][or][1][dsc_descricao][like]=%25${search}%25`;
        const query = `/Produtos?filter[include]=ofertas&${query1}&${query2}`;
        return this.Query(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res));
    }
    // Produto
    ProdutoLoja(loja, host) {
        return this.Query(`/Ofertas/LojaProduto?loja=${loja}&host=${host}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res[0]));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "b4qz":
/*!***********************************************!*\
  !*** ./src/app/@widgets/top/top.component.ts ***!
  \***********************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_animations_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/animations/slide */ "1OEv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sharing_drop_menu_drop_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@sharing/drop-menu/drop-menu.component */ "OKHZ");
/* harmony import */ var _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@sharing/select-loja/select-loja.component */ "sCWG");
/* harmony import */ var _sharing_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@sharing/menu-sidebar/menu-sidebar.component */ "opPO");











function TopComponent_li_31_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](menu_r1.icon);
} }
function TopComponent_li_31_a_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", menu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", menu_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return [a0]; };
function TopComponent_li_31_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopComponent_li_31_a_1_i_1_Template, 1, 3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopComponent_li_31_a_1_img_2_Template, 1, 2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, menu_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r1.type === "font");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r1.type === "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r1.name, " ");
} }
function TopComponent_li_31_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](menu_r1.icon);
} }
function TopComponent_li_31_a_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", menu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", menu_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TopComponent_li_31_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopComponent_li_31_a_2_i_1_Template, 1, 3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopComponent_li_31_a_2_img_2_Template, 1, 2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", menu_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r1.type === "font");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r1.type === "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r1.name, " ");
} }
function TopComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopComponent_li_31_a_1_Template, 4, 6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopComponent_li_31_a_2_Template, 4, 4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r1.inter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menu_r1.inter);
} }
class TopComponent {
    constructor(router, db, util) {
        this.router = router;
        this.db = db;
        this.util = util;
        this.entrada = false;
        this.salida = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loja = [];
        this.json = [];
        this.items = [];
        this.activeSidebar = 'out';
        this.toog = (ev) => console.log(ev);
        this.toogleSidebar = () => this.activeSidebar = this.activeSidebar === 'out' ? 'in' : 'out';
        this.toogle = (ev) => {
            if (ev)
                this.entrada = ev;
            this.entrada = !this.entrada;
            this.salida.emit(this.entrada);
        };
        this.onLink = (slug) => this.router.navigateByUrl(`/${slug}`);
        this.trackByFunction = (index, item) => item[index];
        this.desligueSidebar = (ev) => this.activeSidebar = ev;
    }
    ngOnInit() {
        this.ofertas = this.db.getMenuOfertas('menuDepartamento');
        this.loja = this.util.StorageParse('Loja');
    }
}
TopComponent.ɵfac = function TopComponent_Factory(t) { return new (t || TopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"])); };
TopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopComponent, selectors: [["app-top"]], inputs: { entrada: "entrada", json: "json", items: "items" }, outputs: { salida: "salida" }, decls: 34, vars: 21, consts: [["id", "topHeader", 1, "sticky-top", "d-none", "d-md-block"], ["id", "top-header", 1, "header-A", "py-1", "d-none", "d-lg-block"], ["SideClass", "navbar navbar-expand-lg navbar-dark ie-nav", 3, "containerInside"], [1, "fas", "white-text", "cursor", 3, "ngClass", "click"], ["id", "top-menu", 1, "navbar-nav", "mx-auto"], ["dropdown", "", 1, "nav-item", "dropdown", "mega-dropdown", 2, "width", "auto!important"], ["dropdownToggle", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "py-N", "header-menu", "dropdown-toggle", "waves-light"], [1, "fas", "fa-briefcase"], [1, "dropdown-menu", "mega-menu", "v-2", "row", "justify-content-center", "z-depth-1", "header-B", "w-100"], [1, "container"], [1, "w-100", "d-flex", "flex-row", "justify-content-around", "mx-md-0", "mx-1"], [3, "data", "titulo"], [1, "fas", "fa-comments"], [1, "caret"], ["titulo", "SAC", 3, "data"], ["titulo", "Trabalhe Conosco", 3, "data"], ["titulo", "Disque Den\u00FAncia", 3, "data"], ["titulo", "Fornecedores", 3, "data"], ["class", "nav-item waves-light", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "items", "condor"], [1, "nav-item", "waves-light"], ["class", "nav-link py-N header-menu", 3, "routerLink", 4, "ngIf"], ["class", "nav-link py-N header-menu", "rel", "noopener", 3, "href", 4, "ngIf"], [1, "nav-link", "py-N", "header-menu", 3, "routerLink"], [3, "class", 4, "ngIf"], ["height", "20px", 3, "src", "alt", 4, "ngIf"], ["height", "20px", 3, "src", "alt"], ["rel", "noopener", 1, "nav-link", "py-N", "header-menu", 3, "href"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-navbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_Template_i_click_4_listener() { return ctx.toogleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Institucional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-drop-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-drop-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-drop-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-drop-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-drop-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Fale Conosco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-drop-menu", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-drop-menu", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-drop-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-drop-menu", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TopComponent_li_31_Template, 3, 2, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-select-loja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-menu-sidebar", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activeSidebar === "out" ? "fa-bars" : "fa-times");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.institucional.menu)("titulo", ctx.json.institucional.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.acoes.menu)("titulo", ctx.json.acoes.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.servicos.menu)("titulo", ctx.json.servicos.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.empresa.menu)("titulo", ctx.json.empresa.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.financeiro.menu)("titulo", ctx.json.financeiro.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.sac);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.trabalhe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.denuncia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.json.fornecedores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.json.menu)("ngForTrackBy", ctx.trackByFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideLeftInOut", ctx.activeSidebar)("items", ctx.items)("condor", ctx.json);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesDirective"], _sharing_drop_menu_drop_menu_component__WEBPACK_IMPORTED_MODULE_7__["DropMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _sharing_select_loja_select_loja_component__WEBPACK_IMPORTED_MODULE_8__["SelectLojaComponent"], _sharing_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["MenuSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".top-menu[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.open[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.text-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.bg-mega[_ngcontent-%COMP%] {\n  background-color: var(--color-default--background);\n}\n\n.header-A[_ngcontent-%COMP%] {\n  background: var(--color-blue-primary);\n}\n\n.header-B[_ngcontent-%COMP%] {\n  background: var(--color-blue-primary);\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.py-N[_ngcontent-%COMP%] {\n  padding-right: 0.3rem !important;\n  padding-left: 0.3rem !important;\n  padding-top: 0.2rem !important;\n  padding-bottom: 0.2rem !important;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  color: #fff !important;\n  font-weight: 500;\n  font-size: 0.8rem;\n  margin-bottom: 0px !important;\n}\n\n.letter-n-2[_ngcontent-%COMP%] {\n  letter-spacing: -2px;\n}\n\n.i-cartao[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n\n#hovers[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.25) !important;\n}\n\n@media (max-width: 1024px) {\n  .i-cartao[_ngcontent-%COMP%] {\n    margin-right: 0.7rem !important;\n  }\n  .i-cartao[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n\n  .header-menu[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvdG9wL3RvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLFVBQUE7QUFFWDs7QUFPQTtFQUFPLFlBQUE7QUFIUDs7QUFJQTtFQUFrQiwwQkFBQTtBQUFsQjs7QUFDQTtFQUFXLGtEQUFBO0FBR1g7O0FBRkE7RUFBWSxxQ0FBQTtBQU1aOztBQUxBO0VBQVkscUNBQUE7QUFTWjs7QUFQQTtFQUFpQiw4QkFBQTtBQVdqQjs7QUFUQTtFQUNJLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBWUo7O0FBUkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQVdKOztBQVJBO0VBQ0ksb0JBQUE7QUFXSjs7QUFSQTtFQUNJLDZCQUFBO0FBV0o7O0FBVEE7RUFDSSwwQ0FBQTtBQVlKOztBQVRBO0VBQ0k7SUFDSSwrQkFBQTtFQVlOO0VBWE07SUFDSSxpQkFBQTtFQWFWOztFQVRFO0lBQ0ksaUJBQUE7RUFZTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHdpZGdldHMvdG9wL3RvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbWVudXsgd2lkdGg6IDIwJTsgfVxuLy8gLnNpZGViYXJ7XG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIHdpZHRoOiAwcHg7XG4vLyAgICAgei1pbmRleDogMTAwMDAwMDAwMDA7XG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xuLy8gfVxuXG4ub3Blbnsgd2lkdGg6IDMwMHB4OyB9XG4udGV4dC11bmRlcmxpbmUgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuLmJnLW1lZ2EgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0LS1iYWNrZ3JvdW5kKTsgfVxuLmhlYWRlci1BIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmx1ZS1wcmltYXJ5KTsgfVxuLmhlYWRlci1CIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmx1ZS1wcmltYXJ5KTsgfVxuXG4ubmF2LWl0ZW06aG92ZXJ7IGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjIpOyB9XG5cbi5weS1OIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM3JlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwLjJyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtICFpbXBvcnRhbnQ7XG59XG5cbi8vIEhlYWRlciBNZW11XG4uaGVhZGVyLW1lbnUge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxldHRlci1uLTIge1xuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xufVxuXG4uaS1jYXJ0YW8ge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuI2hvdmVyczpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLmktY2FydGFvIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW0gIWltcG9ydGFudDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXItbWVudSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIH1cbn1cbiJdfQ== */"], data: { animation: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_1__["slideInOut"], _core_animations_slide__WEBPACK_IMPORTED_MODULE_1__["slideLeftInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top',
                templateUrl: './top.component.html',
                styleUrls: ['./top.component.scss'],
                animations: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_1__["slideInOut"], _core_animations_slide__WEBPACK_IMPORTED_MODULE_1__["slideLeftInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }]; }, { entrada: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], salida: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], json: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    intranet: 'https://teste.condor.com.br/news/wp-json/wp/v2',
    v1: {
        url: 'https://marketing.condor.com.br/api',
        key: ''
    },
    v2: {
        url: 'https://painel.condor.com.br',
    },
    news: {
        url: 'https://teste.condor.com.br/news/wp-json/wp/v2',
        key: 'Basic Y29uZG9yOmFkbWluMTIzIUAj'
    },
    blog: {
        url: 'https://teste.condor.com.br/blog/wp-json/wp/v2',
        key: 'Basic Y29uZG9yOmFkbWluMTIz',
    },
    responsive: {
        breakPoints: {
            xs: { max: 600 },
            sm: { min: 601, max: 959 },
            md: { min: 960, max: 1279 },
            lg: { min: 1280, max: 1919 },
            xl: { min: 1920 }
        },
        debounceTime: 100
    },
    cookieDomain: 'htpps://www.condor.com.br',
    cookies: ['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow',
        'cookie.deny', 'cookie.link', 'cookie.policy', 'cookie.href'],
    loja: { loja: 21, slug: 'hiper-condor-nilo-pecanha', nome: 'Hiper Condor Nilo Peçanha' }
};


/***/ }),

/***/ "erc9":
/*!********************************************!*\
  !*** ./src/app/@widgets/top/top.module.ts ***!
  \********************************************/
/*! exports provided: TopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopModule", function() { return TopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top.component */ "b4qz");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _widgets_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @widgets/mobile/mobile.module */ "9t6m");
/* harmony import */ var _sharing_drop_menu_drop_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/drop-menu/drop-menu.module */ "i459");
/* harmony import */ var _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sharing/select-loja/select-loja.module */ "HZLR");
/* harmony import */ var _sharing_menu_sidebar_menu_sidebar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sharing/menu-sidebar/menu-sidebar.module */ "Xx/V");










class TopModule {
}
TopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TopModule });
TopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TopModule_Factory(t) { return new (t || TopModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _widgets_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_5__["MobileModule"],
            _sharing_drop_menu_drop_menu_module__WEBPACK_IMPORTED_MODULE_6__["DropMenuModule"],
            _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_7__["SelectLojaModule"],
            _sharing_menu_sidebar_menu_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["MenuSidebarModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TopModule, { declarations: [_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _widgets_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_5__["MobileModule"],
        _sharing_drop_menu_drop_menu_module__WEBPACK_IMPORTED_MODULE_6__["DropMenuModule"],
        _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_7__["SelectLojaModule"],
        _sharing_menu_sidebar_menu_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["MenuSidebarModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"]],
                exports: [_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _widgets_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_5__["MobileModule"],
                    _sharing_drop_menu_drop_menu_module__WEBPACK_IMPORTED_MODULE_6__["DropMenuModule"],
                    _sharing_select_loja_select_loja_module__WEBPACK_IMPORTED_MODULE_7__["SelectLojaModule"],
                    _sharing_menu_sidebar_menu_sidebar_module__WEBPACK_IMPORTED_MODULE_8__["MenuSidebarModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "fE7R":
/*!**********************************************!*\
  !*** ./src/app/@sharing/link/link.module.ts ***!
  \**********************************************/
/*! exports provided: LinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkModule", function() { return LinkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/directive.module */ "YfWO");
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link.component */ "DRh4");







class LinkModule {
}
LinkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LinkModule });
LinkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LinkModule_Factory(t) { return new (t || LinkModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinkModule, { declarations: [_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"]],
                exports: [_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "i459":
/*!********************************************************!*\
  !*** ./src/app/@sharing/drop-menu/drop-menu.module.ts ***!
  \********************************************************/
/*! exports provided: DropMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropMenuModule", function() { return DropMenuModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _drop_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop-menu.component */ "OKHZ");





class DropMenuModule {
}
DropMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DropMenuModule });
DropMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DropMenuModule_Factory(t) { return new (t || DropMenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DropMenuModule, { declarations: [_drop_menu_component__WEBPACK_IMPORTED_MODULE_3__["DropMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_drop_menu_component__WEBPACK_IMPORTED_MODULE_3__["DropMenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_drop_menu_component__WEBPACK_IMPORTED_MODULE_3__["DropMenuComponent"]],
                exports: [_drop_menu_component__WEBPACK_IMPORTED_MODULE_3__["DropMenuComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jdR/":
/*!************************************************************!*\
  !*** ./src/app/@sharing/mobile-link/mobile-link.module.ts ***!
  \************************************************************/
/*! exports provided: MobileLinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLinkModule", function() { return MobileLinkModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _mobile_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-link.component */ "U1ei");






class MobileLinkModule {
}
MobileLinkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MobileLinkModule });
MobileLinkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MobileLinkModule_Factory(t) { return new (t || MobileLinkModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MobileLinkModule, { declarations: [_mobile_link_component__WEBPACK_IMPORTED_MODULE_4__["MobileLinkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_mobile_link_component__WEBPACK_IMPORTED_MODULE_4__["MobileLinkComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MobileLinkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_mobile_link_component__WEBPACK_IMPORTED_MODULE_4__["MobileLinkComponent"]],
                exports: [_mobile_link_component__WEBPACK_IMPORTED_MODULE_4__["MobileLinkComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "klR4":
/*!****************************************************!*\
  !*** ./src/app/@widgets/ofertas/ofertas.module.ts ***!
  \****************************************************/
/*! exports provided: OfertasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasModule", function() { return OfertasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/angular */ "3II9");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ofertas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ofertas.component */ "Dyj9");
/* harmony import */ var _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/titulo/titulo.module */ "VlVH");
/* harmony import */ var _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sharing/product/product.module */ "vzA1");









class OfertasModule {
}
OfertasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OfertasModule });
OfertasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OfertasModule_Factory(t) { return new (t || OfertasModule)(); }, imports: [[
            swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperModule"],
            _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_6__["TituloModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OfertasModule, { declarations: [_ofertas_component__WEBPACK_IMPORTED_MODULE_5__["OfertasComponent"]], imports: [swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperModule"],
        _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_6__["TituloModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_ofertas_component__WEBPACK_IMPORTED_MODULE_5__["OfertasComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfertasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ofertas_component__WEBPACK_IMPORTED_MODULE_5__["OfertasComponent"]],
                exports: [_ofertas_component__WEBPACK_IMPORTED_MODULE_5__["OfertasComponent"]],
                imports: [
                    swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperModule"],
                    _sharing_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_6__["TituloModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_product_product_module__WEBPACK_IMPORTED_MODULE_7__["ProductModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kr9m":
/*!*****************************************************!*\
  !*** ./src/app/@widgets/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sharing_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@sharing/link/link.component */ "DRh4");






function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-link", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
} }
const _c0 = function () { return [""]; };
class HeaderComponent {
    constructor(router, util) {
        this.router = router;
        this.util = util;
        this.items = [];
        this.keyword = 'loja';
        this.loja = [];
        this.getSearch = (event) => {
            if (event.keyCode === 13)
                this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);
        };
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.loja = this.util.StorageParse('Loja');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { items: "items" }, decls: 15, vars: 4, consts: [[1, "d-none", "d-lg-block"], ["id", "heade", 1, "pt-3", "pb-2", "header-B"], [1, "container"], [1, "row"], [1, "col-10", "col-md-11", "col-lg-3", "col-xl-3", "align-self-center"], [3, "routerLink"], ["src", "./assets/images/logo.svg", "alt", "Logo Condor", 1, "logo", "mx-auto", "d-block"], [1, "col-md-6", "col-lg-4", "d-none", "d-xl-block", "align-self-center"], ["type", "text", "placeholder", "O que voc\u00EA est\u00E1 procurando?", 1, "form-control", "rounded-pill", "px-2", 3, "keyup"], [1, "col-7", "col-md-3", "col-lg-9", "col-xl-5", "d-none", "d-lg-block"], [1, "nav", "justify-content-end", 2, "margin-top", "-5px!important"], ["class", "nav-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row", "justify-content-center", "d-none", "d-lg-block", "d-xl-none"], [1, "col-md-12"], [1, "nav-item"], [1, "nav-link", "white-text", "px-1", "b-06", "f-08", "text-center", "i-cartao", 3, "item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HeaderComponent_Template_input_keyup_8_listener($event) { return ctx.getSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 2, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HeaderComponent_Template_input_keyup_14_listener($event) { return ctx.getSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items.buttom)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _sharing_link_link_component__WEBPACK_IMPORTED_MODULE_4__["LinkComponent"]], styles: [".bg-mega[_ngcontent-%COMP%] {\n  background-color: var(--color-default--background);\n}\n\n.header-A[_ngcontent-%COMP%] {\n  background: var(--color-blue-primary);\n}\n\n.header-B[_ngcontent-%COMP%] {\n  background: var(--color-blue-secondary);\n}\n\n.py-N[_ngcontent-%COMP%] {\n  padding-right: 0.3rem !important;\n  padding-left: 0.3rem !important;\n  padding-top: 0.2rem !important;\n  padding-bottom: 0.2rem !important;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  font-size: 0.8rem;\n  margin-bottom: 0px !important;\n}\n\n.letter-n-2[_ngcontent-%COMP%] {\n  letter-spacing: -2px;\n}\n\n.i-cartao[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n\n#hovers[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.25) !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n@media (max-width: 1024px) {\n  .i-cartao[_ngcontent-%COMP%] {\n    margin-right: 0.7rem !important;\n  }\n  .i-cartao[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n\n  .header-menu[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 30px;\n    margin-top: -7px;\n  }\n}\n\n@media (max-width: 576px) {\n  .logo[_ngcontent-%COMP%] {\n    height: 30px;\n    margin-top: -7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGtEQUFBO0FBRVg7O0FBREE7RUFBWSxxQ0FBQTtBQUtaOztBQUpBO0VBQVksdUNBQUE7QUFRWjs7QUFOQTtFQUNFLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBU0Y7O0FBTEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBUUY7O0FBTEE7RUFBYyxvQkFBQTtBQVNkOztBQVJBO0VBQVksK0JBQUE7QUFZWjs7QUFYQTtFQUFnQiwwQ0FBQTtBQWVoQjs7QUFiQTtFQUNFLFlBQUE7QUFnQkY7O0FBWkE7RUFDRTtJQUNJLCtCQUFBO0VBZUo7RUFkSTtJQUFPLGlCQUFBO0VBaUJYOztFQWZBO0lBQWUsaUJBQUE7RUFtQmY7QUFDRjs7QUFqQkE7RUFDRTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQW1CSjtBQUNGOztBQWhCQTtFQUNFO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VBa0JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Ad2lkZ2V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLW1lZ2EgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0LS1iYWNrZ3JvdW5kKTsgfVxuLmhlYWRlci1BIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmx1ZS1wcmltYXJ5KTsgfVxuLmhlYWRlci1CIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmx1ZS1zZWNvbmRhcnkpOyB9XG5cbi5weS1OIHtcbiAgcGFkZGluZy1yaWdodDogMC4zcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC4zcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwLjJyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuMnJlbSAhaW1wb3J0YW50O1xufVxuXG4vLyBIZWFkZXIgTWVtdVxuLmhlYWRlci1tZW51IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxldHRlci1uLTIgeyBsZXR0ZXItc3BhY2luZzogLTJweDsgfVxuLmktY2FydGFvIHsgbWFyZ2luLXJpZ2h0OiAuNXJlbSAhaW1wb3J0YW50OyB9XG4jaG92ZXJzOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50OyB9XG5cbi5sb2dve1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaS1jYXJ0YW8ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW0gIWltcG9ydGFudDtcbiAgICAgIHNwYW4geyBmb250LXNpemU6IDAuN3JlbTsgfVxuICB9XG4gIC5oZWFkZXItbWVudSB7IGZvbnQtc2l6ZTogMC43cmVtOyB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dve1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA1NzZweCkge1xuICAubG9nb3tcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "m8Mh":
/*!********************************************!*\
  !*** ./src/app/@core/pipes/filtro.pipe.ts ***!
  \********************************************/
/*! exports provided: FiltroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroPipe", function() { return FiltroPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class FiltroPipe {
    transform(items, searchText, fieldName) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = `${searchText}`.toLowerCase();
        return items.filter(item => {
            if (item && item['produtos'][fieldName]) {
                return `${item['produtos'][fieldName]}`.toLowerCase().includes(searchText);
            }
            return false;
        });
    }
}
FiltroPipe.ɵfac = function FiltroPipe_Factory(t) { return new (t || FiltroPipe)(); };
FiltroPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filtro", type: FiltroPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltroPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filtro'
            }]
    }], null, null); })();


/***/ }),

/***/ "mcjh":
/*!*************************************************!*\
  !*** ./src/app/@widgets/menu/menu.component.ts ***!
  \*************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sharing_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@sharing/link/link.component */ "DRh4");







const _c0 = function (a1) { return ["departamento", a1]; };
function MenuComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r4.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.nome);
} }
const _c1 = function (a0) { return [a0]; };
function MenuComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r5.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.nome);
} }
function MenuComponent_li_17_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r6.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function MenuComponent_li_17_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r6.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function MenuComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_li_17_a_1_Template, 2, 4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_li_17_a_2_Template, 2, 4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r6.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.external);
} }
function MenuComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-link", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r11);
} }
class MenuComponent {
    constructor(db) {
        this.db = db;
        this.json = [];
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.items = this.db.getMenuOfertas('menuDepartamento');
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { json: "json" }, decls: 20, vars: 11, consts: [["SideClass", "navbar navbar-expand-lg red navbar-dark ie-nav d-none d-lg-block", "id", "menuOfertas", 3, "containerInside"], ["rel", "noopener noreferrer", "href", "http://www.familiacondor.com.br", "target", "_blank", 1, "navbar-brand"], ["Lazy", "", "src", "./assets/images/familia.png", "width", "60px", "alt", "familia condor", 1, "d-lg-none", "d-xl-none"], [1, "navbar-nav", "pr-3", "border-right-menu", "justify-content-start"], ["dropdown", "", 1, "nav-item", "dropdown", "mega-dropdown"], ["dropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "b-08", "dropdown-toggle", "waves-light"], [1, "caret"], [1, "dropdown-menu", "mega-menu", "row", "z-depth-1", "bg-mega", "w-100"], [1, "container"], [1, "row", "mx-md-4", "mx-1"], ["class", "col-lg-4 col-xl-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "navbar-nav", "mx-auto"], ["class", "nav-item waves-light px-0 px-xl-1", "mdbWavesEffect", "", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "iconsrr", 1, "navbar-nav", "mr-auto", "border-left-menu", "pl-3"], ["class", "nav-item waves-light mr-1", "mdbWavesEffect", "", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-lg-4", "col-xl-3"], [1, "p-0", 3, "routerLink"], [1, "py-2", "mb-0", "border-bottom", "b-05"], [1, "ml-2"], ["mdbWavesEffect", "", 1, "nav-item", "waves-light", "px-0", "px-xl-1"], ["class", "nav-link b-06", 3, "routerLink", 4, "ngIf"], ["rel", "noopener noreferrer", "class", "nav-link b-06", "target", "_blank", 3, "href", 4, "ngIf"], [1, "nav-link", "b-06", 3, "routerLink"], ["rel", "noopener noreferrer", "target", "_blank", 1, "nav-link", "b-06", 3, "href"], ["mdbWavesEffect", "", 1, "nav-item", "waves-light", "mr-1"], [1, "nav-link", "b-06", "py-0", "mt-1", "px-1", 3, "item"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Todas as ofertas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuComponent_div_13_Template, 6, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MenuComponent_div_15_Template, 5, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MenuComponent_li_17_Template, 3, 2, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MenuComponent_li_19_Template, 2, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, ctx.items))("ngForTrackBy", ctx.trackByFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.json.campanha)("ngForTrackBy", ctx.trackByFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.json.center)("ngForTrackBy", ctx.trackByFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.json.right)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sharing_link_link_component__WEBPACK_IMPORTED_MODULE_5__["LinkComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.menuBack[_ngcontent-%COMP%] {\n  background-color: var(--color-red-primary);\n}\n\n.bg-mega[_ngcontent-%COMP%] {\n  background-color: var(--color-default--background);\n}\n\n.bg-menu[_ngcontent-%COMP%] {\n  background-color: var(--color-red-primary);\n}\n\n.rot[_ngcontent-%COMP%] {\n  transform: rotate(350deg);\n  -ms-transform: rotate(350deg);\n  -moz-transform: rotate(350deg);\n  -webkit-transform: rotate(350deg);\n  -o-transform: rotate(350deg);\n}\n\n#iconsrr[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.title-mega[_ngcontent-%COMP%] {\n  color: var(--color-red-primary);\n}\n\n.text-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n@media (max-width: 1200px) {\n  .nav-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n\n@media (max-width: 1114px) {\n  .nav-item[_ngcontent-%COMP%] {\n    font-size: 1rem !important;\n  }\n\n  #iconsrr[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlCLDhCQUFBO0FBRWpCOztBQURBO0VBQVksMENBQUE7QUFLWjs7QUFKQTtFQUFXLGtEQUFBO0FBUVg7O0FBTEE7RUFDRSwwQ0FBQTtBQVFGOztBQUxBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQVFKOztBQUxBO0VBQVcsYUFBQTtBQVNYOztBQVJBO0VBQWMsK0JBQUE7QUFZZDs7QUFWQTtFQUNJLDBCQUFBO0FBYUo7O0FBVkE7RUFDSTtJQUNJLDRCQUFBO0VBYU47QUFDRjs7QUFWQTtFQUNJO0lBQ0ksMEJBQUE7RUFZTjs7RUFWRTtJQUNJLGFBQUE7RUFhTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHdpZGdldHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtOmhvdmVyeyBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuMTApOyB9XG4ubWVudUJhY2sgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQtcHJpbWFyeSk7IH1cbi5iZy1tZWdhIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGVmYXVsdC0tYmFja2dyb3VuZCk7IH1cblxuXG4uYmctbWVudXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkLXByaW1hcnkpO1xufVxuXG4ucm90IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzUwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzUwZGVnKTtcbn1cblxuI2ljb25zcnIgeyBkaXNwbGF5OiBmbGV4OyB9XG4udGl0bGUtbWVnYSB7IGNvbG9yOiB2YXIoLS1jb2xvci1yZWQtcHJpbWFyeSk7IH1cblxuLnRleHQtdW5kZXJsaW5lIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTE0cHgpIHtcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgI2ljb25zcnIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { json: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nJ/e":
/*!*******************************************************!*\
  !*** ./src/app/@core/directives/product.directive.ts ***!
  \*******************************************************/
/*! exports provided: ProductDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDirective", function() { return ProductDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");



class ProductDirective {
    constructor(el) {
        this.el = el;
        this.srcAttr = null;
    }
    ngAfterViewInit() {
        this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
    }
    canLazyLoad() {
        return window && 'IntersectionObserver' in window;
    }
    lazyLoadImage() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(({ isIntersecting }) => {
                if (isIntersecting) {
                    this.loadImage();
                    obs.unobserve(this.el.nativeElement);
                }
            });
        });
        obs.observe(this.el.nativeElement);
    }
    loadImage() {
        const image = `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].v1.url}/Containers/produtos/download/${this.src}.jpg`;
        this.srcAttr = image;
    }
}
ProductDirective.ɵfac = function ProductDirective_Factory(t) { return new (t || ProductDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ProductDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ProductDirective, selectors: [["img", "appProduct", ""]], hostVars: 1, hostBindings: function ProductDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.srcAttr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, inputs: { src: "src" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'img[appProduct]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], srcAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.src']
        }] }); })();


/***/ }),

/***/ "oIzZ":
/*!*****************************************************!*\
  !*** ./src/app/@sharing/social/social.component.ts ***!
  \*****************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");




function SocialComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", s_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](s_r1.icon);
} }
class SocialComponent {
    constructor() {
        this.items = [];
    }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(); };
SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "nav", "mx-auto", "justify-content-center"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["rel", "noopener noreferrer", "target", "_blank", "floating", "true", "mdbBtn", "", "size", "lg", "color", "condor-floating", "mdbWavesEffect", "", 1, "waves-light", "nav-item", "mb-4", 3, "href"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialComponent_li_1_Template, 3, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"]], styles: ["a.waves-effect[_ngcontent-%COMP%], a.waves-light[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.btn-condor-floating[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  color: rgba(255, 255, 255, 0.9) !important;\n}\n\n.btn-floating[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n  color: rgba(0, 0, 0, 0.7) !important;\n}\n\n.btn-floating[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18), 0 2px 5px 0 rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n  margin: 5px;\n  border-radius: 50%;\n  padding: 0;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n\n.btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: inherit;\n  text-align: center;\n  font-size: 1.1rem;\n  line-height: 30px;\n  font-weight: 500;\n}\n\n@media (max-width: 1024px) {\n  .btn-floating[_ngcontent-%COMP%] {\n    margin: 5px 40px;\n    width: 30px;\n    height: 30px;\n  }\n\n  .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    line-height: 30px;\n  }\n}\n\n@media (max-width: 800px) {\n  .btn-floating[_ngcontent-%COMP%] {\n    margin: 5px 40px;\n    width: 40px;\n    height: 40px;\n  }\n\n  .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    line-height: 40px;\n  }\n}\n\n@media (max-width: 450px) {\n  .btn-floating[_ngcontent-%COMP%] {\n    margin: 5px 20px;\n    width: 40px;\n    height: 40px;\n  }\n\n  .btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    line-height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJpbmcvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0NBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUdBO0VBQ0UscURBQUE7RUFDQSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0UsNEVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFBRjs7RUFFQTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBQUY7O0VBRUE7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQUFGOztFQUVBO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmluZy9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSWNvbiBTb2NpYWxcbmEud2F2ZXMtZWZmZWN0LFxuYS53YXZlcy1saWdodCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ0bi1jb25kb3ItZmxvYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWZsb2F0aW5nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNykgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1mbG9hdGluZyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uYnRuLWZsb2F0aW5nIGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYnRuLWZsb2F0aW5nIHtcbiAgICBtYXJnaW46IDVweCA0MHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICAuYnRuLWZsb2F0aW5nIGkge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnRuLWZsb2F0aW5nIHtcbiAgICBtYXJnaW46IDVweCA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuYnRuLWZsb2F0aW5nIGkge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuYnRuLWZsb2F0aW5nIHtcbiAgICBtYXJnaW46IDVweCAyMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuYnRuLWZsb2F0aW5nIGkge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social',
                templateUrl: './social.component.html',
                styleUrls: ['./social.component.scss']
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "oeKb":
/*!******************************************!*\
  !*** ./src/app/@core/pipes/safe.pipe.ts ***!
  \******************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "opPO":
/*!*****************************************************************!*\
  !*** ./src/app/@sharing/menu-sidebar/menu-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSidebarComponent", function() { return MenuSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_animations_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/animations/slide */ "1OEv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _mobile_link_mobile_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mobile-link/mobile-link.component */ "U1ei");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");








function MenuSidebarComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const menu_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLink("departamento/" + menu_r4.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r4.nome, " ");
} }
function MenuSidebarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const campanha_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onLink(campanha_r7.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campanha_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", campanha_r7.nome, " ");
} }
function MenuSidebarComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const center_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", center_r10.name, " ");
} }
const _c0 = function (a0) { return [a0]; };
function MenuSidebarComponent_div_18_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_18_ng_template_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.onLink2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const center_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, center_r10.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", center_r10.name, " ");
} }
function MenuSidebarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_18_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onLink2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuSidebarComponent_div_18_div_2_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuSidebarComponent_div_18_ng_template_3_Template, 6, 4, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const center_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", center_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", center_r10.external)("ngIfElse", _r12);
} }
function MenuSidebarComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", header_r20.iconmobile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", header_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r20.name, " ");
} }
function MenuSidebarComponent_div_25_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_25_ng_template_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.activeSidebar = "out"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, header_r20.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", header_r20.iconmobile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", header_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r20.name, " ");
} }
function MenuSidebarComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_25_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.activeSidebar = "out"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuSidebarComponent_div_25_div_2_Template, 6, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuSidebarComponent_div_25_ng_template_3_Template, 7, 6, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r20 = ctx.$implicit;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", header_r20.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", header_r20.external)("ngIfElse", _r22);
} }
class MenuSidebarComponent {
    constructor(router, db) {
        this.router = router;
        this.db = db;
        this.items = [];
        this.condor = [];
        this.activeSidebar = 'out';
        this.outputSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.activeMenuOfertas = 'out';
        this.faleConosco = [];
        this.convertFaleConosco = () => {
            this.condor.sac.forEach(el => this.faleConosco.push(el));
            this.condor.trabalhe.forEach(el => this.faleConosco.push(el));
            this.condor.denuncia.forEach(el => this.faleConosco.push(el));
            this.faleConosco.push({ nome: 'Notícias', url: '/institucional/imprensa' });
        };
        this.onLink = (slug) => {
            const validate = slug.startsWith('http');
            if (validate)
                window.open(slug, '_blank');
            else
                this.router.navigateByUrl(slug);
            this.activeSidebar = 'out';
            this.outputSidebar.emit('out');
        };
        this.onLink2 = () => {
            this.activeSidebar = 'out';
            this.outputSidebar.emit('out');
        };
        this.onToogle = (ev) => {
            this.activeSidebar = ev;
            this.outputSidebar.emit(ev);
        };
        this.toogleMenuOfertas = () => this.activeMenuOfertas = this.activeMenuOfertas === 'out' ? 'in' : 'out';
    }
    ngOnInit() {
        this.menuOfertas$ = this.db.getMenuOfertas('menuDepartamento');
        this.convertFaleConosco();
    }
}
MenuSidebarComponent.ɵfac = function MenuSidebarComponent_Factory(t) { return new (t || MenuSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
MenuSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuSidebarComponent, selectors: [["app-menu-sidebar"]], inputs: { items: "items", condor: "condor", activeSidebar: "activeSidebar" }, outputs: { outputSidebar: "outputSidebar" }, decls: 31, vars: 17, consts: [[1, "sidebar"], [1, "image"], ["src", "./assets/images/logo.png", "alt", "Logo Condor", 1, "logo"], [1, "menu", "overflow-auto"], [1, "items", 3, "click"], [1, "item"], [1, "icon"], [1, "fas", "fa-angle-right", "float-right"], [1, "fas", 3, "ngClass"], [1, "submenu"], ["class", "sub-menu-items", 3, "click", 4, "ngFor", "ngForOf"], ["class", "items", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "space"], ["titulo", "Fale Conosco", 3, "items", "toogle"], [3, "titulo", "items", "toogle"], [1, "sub-menu-items", 3, "click"], ["mdbWavesEffect", "", "routerLinkActive", "active", 1, "item"], [1, "fas", "fa-shopping-basket", "mr-1"], ["target", "_blank", 3, "href", "click"], ["class", "items", 4, "ngIf", "ngIfElse"], ["Internal", ""], [1, "items"], [3, "routerLink", "click"], [3, "src", "alt"]], template: function MenuSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_Template_div_click_4_listener() { return ctx.onLink(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_Template_div_click_9_listener() { return ctx.toogleMenuOfertas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Ofertas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MenuSidebarComponent_div_15_Template, 6, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MenuSidebarComponent_div_17_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MenuSidebarComponent_div_18_Template, 5, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_Template_div_click_19_listener() { return ctx.onLink("/blog"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MenuSidebarComponent_div_25_Template, 5, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-mobile-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_26_listener($event) { return ctx.onToogle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-mobile-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_27_listener($event) { return ctx.onToogle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-mobile-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_28_listener($event) { return ctx.onToogle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-mobile-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_29_listener($event) { return ctx.onToogle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-mobile-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toogle", function MenuSidebarComponent_Template_app_mobile_link_toogle_30_listener($event) { return ctx.onToogle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activeMenuOfertas === "out" ? "fa-plus" : "fa-minus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideDownInOut", ctx.activeMenuOfertas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, ctx.menuOfertas$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items.campanha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items.center);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.faleConosco);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.condor.institucional.title)("items", ctx.condor.institucional.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.condor.acoes.title)("items", ctx.condor.acoes.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.condor.financeiro.title)("items", ctx.condor.financeiro.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.condor.empresa.title)("items", ctx.condor.empresa.menu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _mobile_link_mobile_link_component__WEBPACK_IMPORTED_MODULE_5__["MobileLinkComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 20%;\n  min-width: 270px;\n  height: 100vh;\n  z-index: 10;\n  background-color: #fff !important;\n  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.35);\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #444 !important;\n}\n[_nghost-%COMP%]   .image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin-top: 1rem;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  flex: row;\n  display: flex;\n  font-size: 0.9rem;\n  align-items: center;\n  padding: 0.35rem 0.5rem;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #ececec;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 10%;\n  text-align: right;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   .sub-menu-items[_ngcontent-%COMP%] {\n  flex: row;\n  display: flex;\n  align-items: center;\n  padding: 0.35rem 0.5rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ececec;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   .sub-menu-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 85%;\n  font-size: 0.8rem;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   .sub-menu-items[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 15%;\n}\n[_nghost-%COMP%]   .menu[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJpbmcvbWVudS1zaWRlYmFyL21lbnUtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkNBQUE7QUFGRjtBQVZFO0VBQ0Usc0JBQUE7QUFZSjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjtBQURJO0VBQ0UsWUFBQTtBQUdOO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFESTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFHTjtBQUZNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBSVI7QUFGTTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUlSO0FBRk07RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFJUjtBQURJO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFHTjtBQUZNO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUZNO0VBQ0UsVUFBQTtBQUlSO0FBREk7RUFDRSxpQkFBQTtBQUdOIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJpbmcvbWVudS1zaWRlYmFyL21lbnUtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYXtcbiAgICBjb2xvcjogIzQ0NCAhaW1wb3J0YW50O1xuICB9XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAyMCU7XG4gIG1pbi13aWR0aDogMjcwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC4zNSk7XG4gIC5pbWFnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGltZ3tcbiAgICAgIGhlaWdodDogNDBweFxuICAgIH07XG4gIH1cbiAgLm1lbnUge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIC5pdGVtcyB7XG4gICAgICBmbGV4OiByb3c7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAuMzVyZW0gLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgICAgLml0ZW17XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICAuc3ViLW1lbnUtaXRlbXN7XG4gICAgICBmbGV4OiByb3c7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IC4zNXJlbSAuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIC5pY29ue1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgfVxuICAgIH1cbiAgICAuc3BhY2Uge1xuICAgICAgbWFyZ2luOiAuMjVyZW0gMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_1__["slideDownInOut"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-sidebar',
                templateUrl: './menu-sidebar.component.html',
                styleUrls: ['./menu-sidebar.component.scss'],
                animations: [_core_animations_slide__WEBPACK_IMPORTED_MODULE_1__["slideDownInOut"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], condor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outputSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "pR+U":
/*!**************************************************!*\
  !*** ./src/app/@widgets/footer/footer.module.ts ***!
  \**************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "VD/p");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_social_swipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/social/swipe.module */ "tPxD");
/* harmony import */ var _sharing_menu_mobile_link_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sharing/menu/mobile-link.module */ "UE6f");









class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _sharing_menu_mobile_link_module__WEBPACK_IMPORTED_MODULE_7__["MenuSharingModule"],
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _sharing_social_swipe_module__WEBPACK_IMPORTED_MODULE_6__["SocialModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_sharing_menu_mobile_link_module__WEBPACK_IMPORTED_MODULE_7__["MenuSharingModule"],
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _sharing_social_swipe_module__WEBPACK_IMPORTED_MODULE_6__["SocialModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
                exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
                imports: [
                    _sharing_menu_mobile_link_module__WEBPACK_IMPORTED_MODULE_7__["MenuSharingModule"],
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _sharing_social_swipe_module__WEBPACK_IMPORTED_MODULE_6__["SocialModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "sCWG":
/*!***************************************************************!*\
  !*** ./src/app/@sharing/select-loja/select-loja.component.ts ***!
  \***************************************************************/
/*! exports provided: SelectLojaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLojaComponent", function() { return SelectLojaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/data.service */ "ZUVw");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "z8v2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");












const _c0 = ["frame"];
function SelectLojaComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectLojaComponent_div_0_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mdb-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectLojaComponent_div_0_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r1.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mdb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loja_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", loja_r4["nome"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mostrando as ofertas para ", loja_r4.nome, "");
} }
function SelectLojaComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectLojaComponent_div_0_ng_template_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r1.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mostrando as ofertas para ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loja_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loja_r4.nome);
} }
function SelectLojaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectLojaComponent_div_0_div_1_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectLojaComponent_div_0_ng_template_2_Template, 9, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type === "simple")("ngIfElse", _r6);
} }
function SelectLojaComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", r_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r15.name);
} }
function SelectLojaComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r16.title1);
} }
const _c1 = function () { return { backdrop: true, ignoreBackdropClick: true }; };
class SelectLojaComponent {
    constructor(router, seo, db, util, news, storageMap) {
        this.router = router;
        this.seo = seo;
        this.db = db;
        this.util = util;
        this.news = news;
        this.storageMap = storageMap;
        this.type = 'simple';
        this.load = false;
        this.lojas = [];
        this.lojaDefault = { loja: 21, slug: 'hiper-condor-nilo-pecanha', nome: 'Hiper Condor Nilo Peçanha' };
        this.getLojas = (e) => this.news.LojaPorRegion(e.target.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((res) => this.lojas = res);
        this.setLocalStorageLoja = () => this.storageMap.set('Loja', this.lojaDefault)
            .subscribe(() => { });
        this.getLocalStorageLoja = () => this.util.StorageParse('Loja');
        this.selectCondor = () => {
            this.news.LojaId(this.condor).subscribe(data => {
                this.db.getOfertas(data.cod_loja).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe();
                this.storageMap.set('Loja', { loja: data.cod_loja, slug: data.slug, nome: data.title1 }).subscribe(() => { });
            });
            this.frame.hide();
        };
        this.open = () => {
            this.frame.show();
            this.seo.dataLayerTracking({ event: 'findStore', storeAction: 'Clique Header', storeName: 'Nome da Loja' });
        };
        this.close = () => this.frame.hide();
    }
    ngOnInit() {
        this.miObjeto = this.storageMap.watch('Loja');
        this.region = this.news.getRegion$();
    }
    ngAfterViewInit() {
        if (this.load === true)
            this.frame.show();
    }
}
SelectLojaComponent.ɵfac = function SelectLojaComponent_Factory(t) { return new (t || SelectLojaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_6__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__["StorageMap"])); };
SelectLojaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectLojaComponent, selectors: [["app-select-loja"]], viewQuery: function SelectLojaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.frame = _t.first);
    } }, inputs: { new: "new", type: "type", load: "load" }, outputs: { loja: "loja" }, decls: 28, vars: 10, consts: [[4, "ngIf"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myBasicModalLabel", "aria-hidden", "true", 1, "modal", "slide", "bottom", 2, "z-index", "10000", 3, "config"], ["frame", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", "pt-2", "pointer", 2, "z-index", "100000", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "rounded-0"], [1, "py-4"], [1, "w-75", "mx-auto"], [1, "text-center", "b-06"], [1, "pb-2"], [1, "browser-default", "custom-select", 3, "change"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "browser-default", "custom-select", 3, "ngModel", "ngModelChange"], [1, "text-center"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "relative", "waves-light", 3, "click"], [4, "ngIf", "ngIfElse"], ["alert", ""], [1, "nav-link", "py-N", "header-menu", "d-none", "d-lg-block", 2, "color", "white!important", 3, "click"], ["fas", "", "icon", "map-marker"], [1, "bg-ver", "p-2", "d-lg-none"], [1, "nav-link", "py-N", "header-menu", "white-text", "position-relative", 3, "click"], [1, "mb-0", "w-ajustes"], ["fas", "", "icon", "map-marker", 1, "ajuste"], ["role", "alert", 1, "alert", "alert-info"], [1, "", 3, "click"], [1, "mb-0", "f-1"], [1, "b-7"], [1, "ml-1"], [1, "fas", "fa-retweet"], [3, "value"]], template: function SelectLojaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectLojaComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectLojaComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Selecione sua loja favorita e conhe\u00E7a as ofertas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectLojaComponent_Template_select_change_15_listener($event) { return ctx.getLojas($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Selecione a Cidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SelectLojaComponent_option_18_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectLojaComponent_Template_select_ngModelChange_21_listener($event) { return ctx.condor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Selecione o Condor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SelectLojaComponent_option_24_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectLojaComponent_Template_button_click_26_listener() { return ctx.selectCondor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Ok ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx.miObjeto));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 7, ctx.region));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.condor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lojas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["FasDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".modal-body[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.text-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.py-N[_ngcontent-%COMP%] {\n  padding-right: 0.3rem !important;\n  padding-left: 0.3rem !important;\n  padding-top: 0.2rem !important;\n  padding-bottom: 0.2rem !important;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  font-size: 0.8rem;\n  margin-bottom: 0px !important;\n}\n\n.w-ajustes[_ngcontent-%COMP%] {\n  width: 96%;\n}\n\n.ajuste[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  top: 35%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n\n.bg-ver[_ngcontent-%COMP%] {\n  background: var(--color-red-secondary);\n}\n\n@media (max-width: 375px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHNoYXJpbmcvc2VsZWN0LWxvamEvc2VsZWN0LWxvamEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUlBO0VBQ0ksMEJBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQURKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUZKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0Usc0NBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmluZy9zZWxlY3QtbG9qYS9zZWxlY3QtbG9qYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG5cbi5wb2ludGVye1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4udGV4dC11bmRlcmxpbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHktTiB7XG4gICAgcGFkZGluZy1yaWdodDogMC4zcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjNyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMC4ycmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbSAhaW1wb3J0YW50O1xufVxuXG4vLyBIZWFkZXIgTWVtdVxuLmhlYWRlci1tZW51IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLnctYWp1c3Rlc3tcbiAgICB3aWR0aDogOTYlO1xufVxuLmFqdXN0ZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMiU7XG4gIHRvcDogMzUlO1xufVxuXG4ubWFyZ2lue1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5iZy12ZXJ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXJlZC1zZWNvbmRhcnkpO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjM3NXB4KSB7XG4gIC5uYXYtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IC43cmVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectLojaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-loja',
                templateUrl: './select-loja.component.html',
                styleUrls: ['./select-loja.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }, { type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_6__["NewsService"] }, { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_7__["StorageMap"] }]; }, { loja: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], new: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], frame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['frame', { static: true }]
        }] }); })();


/***/ }),

/***/ "sFsK":
/*!**************************************************!*\
  !*** ./src/app/@widgets/header/header.module.ts ***!
  \**************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-ng-autocomplete */ "s7Le");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "kr9m");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sharing/link/link.module */ "fE7R");
/* harmony import */ var _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/directives/directive.module */ "YfWO");










class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_7__["LinkModule"],
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_8__["DirectiveModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_3__["AutocompleteLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], imports: [_sharing_link_link_module__WEBPACK_IMPORTED_MODULE_7__["LinkModule"],
        _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_8__["DirectiveModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_3__["AutocompleteLibModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
                exports: [_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
                imports: [
                    _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_7__["LinkModule"],
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_8__["DirectiveModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_3__["AutocompleteLibModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tPxD":
/*!*************************************************!*\
  !*** ./src/app/@sharing/social/swipe.module.ts ***!
  \*************************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social.component */ "oIzZ");





class SocialModule {
}
SocialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialModule });
SocialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialModule_Factory(t) { return new (t || SocialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialModule, { declarations: [_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"]], exports: [_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"]],
                exports: [_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "um0u":
/*!************************************************!*\
  !*** ./src/app/@core/pipes/lojafilter.pipe.ts ***!
  \************************************************/
/*! exports provided: LojafilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LojafilterPipe", function() { return LojafilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class LojafilterPipe {
    transform(items, search) {
        if (!items) {
            return [];
        }
        if (!search) {
            return items;
        }
        return items.filter(item => {
            if (item && item['ofertas']['loja']) {
                return item['ofertas']['loja'] === search;
            }
            return false;
        });
    }
}
LojafilterPipe.ɵfac = function LojafilterPipe_Factory(t) { return new (t || LojafilterPipe)(); };
LojafilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "lojafilter", type: LojafilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LojafilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'lojafilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "vreI":
/*!**********************************************!*\
  !*** ./src/app/@widgets/menu/menu.module.ts ***!
  \**********************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sharing/link/link.module */ "fE7R");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.component */ "mcjh");







class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_4__["LinkModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]], imports: [_sharing_link_link_module__WEBPACK_IMPORTED_MODULE_4__["LinkModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]],
                exports: [_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]],
                imports: [
                    _sharing_link_link_module__WEBPACK_IMPORTED_MODULE_4__["LinkModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vzA1":
/*!****************************************************!*\
  !*** ./src/app/@sharing/product/product.module.ts ***!
  \****************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/directive.module */ "YfWO");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/product/product.component */ "YXfc");








class ProductModule {
}
ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductModule_Factory(t) { return new (t || ProductModule)(); }, imports: [[
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"],
            _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_sharing_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]], imports: [_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"],
        _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"]], exports: [_sharing_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sharing_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]],
                exports: [_sharing_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]],
                imports: [
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"],
                    _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "w18I":
/*!**************************************************!*\
  !*** ./src/app/@core/services/update.service.ts ***!
  \**************************************************/
/*! exports provided: UpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateService", function() { return UpdateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "3pDu");




class UpdateService {
    constructor(updates) {
        this.updates = updates;
        if (updates.isEnabled) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(6 * 60 * 60).subscribe(() => updates.checkForUpdate()
                .then(() => console.log('checking for updates')));
        }
    }
    checkForUpdates() {
        this.updates.available.subscribe(event => this.promptUser());
    }
    promptUser() {
        console.log('updating to new version');
        this.updates.activateUpdate()
            .then(() => document.location.reload());
    }
}
UpdateService.ɵfac = function UpdateService_Factory(t) { return new (t || UpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"])); };
UpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UpdateService, factory: UpdateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] }]; }, null); })();


/***/ }),

/***/ "z/i2":
/*!**************************************************!*\
  !*** ./src/app/@core/services/redirect.guard.ts ***!
  \**************************************************/
/*! exports provided: RedirectGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectGuard", function() { return RedirectGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class RedirectGuard {
    constructor() { }
    canActivate(route) {
        window.location.href = route.data['externalUrl'];
        return true;
    }
}
RedirectGuard.ɵfac = function RedirectGuard_Factory(t) { return new (t || RedirectGuard)(); };
RedirectGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RedirectGuard, factory: RedirectGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedirectGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map