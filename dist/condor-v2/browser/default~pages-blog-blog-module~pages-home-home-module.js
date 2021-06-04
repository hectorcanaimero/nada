(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-blog-blog-module~pages-home-home-module"],{

/***/ "CFN+":
/*!************************************************!*\
  !*** ./src/app/@sharing/image/image.module.ts ***!
  \************************************************/
/*! exports provided: ImageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModule", function() { return ImageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "VLCt");
/* harmony import */ var _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/directive.module */ "YfWO");
/* harmony import */ var _image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image.component */ "Zy7B");








class ImageModule {
}
ImageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageModule });
ImageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImageModule_Factory(t) { return new (t || ImageModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__["DirectiveModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageModule, { declarations: [_image_component__WEBPACK_IMPORTED_MODULE_6__["ImageComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__["DirectiveModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"]], exports: [_image_component__WEBPACK_IMPORTED_MODULE_6__["ImageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_image_component__WEBPACK_IMPORTED_MODULE_6__["ImageComponent"]],
                exports: [_image_component__WEBPACK_IMPORTED_MODULE_6__["ImageComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__["DirectiveModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                    ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "VLCt":
/*!**********************************************************************!*\
  !*** ./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js ***!
  \**********************************************************************/
/*! exports provided: Hooks, IntersectionObserverHooks, LAZYLOAD_IMAGE_HOOKS, LazyLoadImageDirective, LazyLoadImageModule, ScrollHooks, SharedHooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hooks", function() { return Hooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionObserverHooks", function() { return IntersectionObserverHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZYLOAD_IMAGE_HOOKS", function() { return LAZYLOAD_IMAGE_HOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadImageDirective", function() { return LazyLoadImageDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadImageModule", function() { return LazyLoadImageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollHooks", function() { return ScrollHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedHooks", function() { return SharedHooks; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");






function getNavigator() {
    return typeof window !== 'undefined' ? window.navigator : undefined;
}
function isChildOfPicture(element) {
    return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
}
function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
function setImage(element, imagePath, useSrcset) {
    if (isImageElement(element)) {
        if (useSrcset && 'srcset' in element) {
            element.srcset = imagePath;
        }
        else {
            element.src = imagePath;
        }
    }
    else {
        element.style.backgroundImage = `url('${imagePath}')`;
    }
    return element;
}
function setSources(attrName) {
    return (image) => {
        const sources = image.parentElement.getElementsByTagName('source');
        for (let i = 0; i < sources.length; i++) {
            const attrValue = sources[i].getAttribute(attrName);
            if (attrValue) {
                // Check if `srcset` is supported by the current browser
                if ('srcset' in sources[i]) {
                    sources[i].srcset = attrValue;
                }
                else {
                    sources[i].src = attrValue;
                }
            }
        }
    };
}
const setSourcesToDefault = setSources('defaultImage');
const setSourcesToLazy = setSources('lazyLoad');
const setSourcesToError = setSources('errorImage');
function setImageAndSources(setSourcesFn) {
    return (element, imagePath, useSrcset) => {
        if (isImageElement(element) && isChildOfPicture(element)) {
            setSourcesFn(element);
        }
        if (imagePath) {
            setImage(element, imagePath, useSrcset);
        }
    };
}
const setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
const setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
const setImageAndSourcesToError = setImageAndSources(setSourcesToError);

class Hooks {
    constructor() {
        this.navigator = getNavigator();
    }
    setPlatformId(platformId) {
        this.platformId = platformId;
    }
    onDestroy(attributes) { }
    onAttributeChange(newAttributes) { }
}

const cssClassNames = {
    loaded: 'ng-lazyloaded',
    loading: 'ng-lazyloading',
    failed: 'ng-failed-lazyloaded',
};
function removeCssClassName(element, cssClassName) {
    element.className = element.className.replace(cssClassName, '');
}
function addCssClassName(element, cssClassName) {
    if (!element.className.includes(cssClassName)) {
        element.className += ` ${cssClassName}`;
    }
}
function hasCssClassName(element, cssClassName) {
    return element.className && element.className.includes(cssClassName);
}

class SharedHooks extends Hooks {
    setup(attributes) {
        setImageAndSourcesToDefault(attributes.element, attributes.defaultImagePath, attributes.useSrcset);
        addCssClassName(attributes.element, cssClassNames.loading);
        if (hasCssClassName(attributes.element, cssClassNames.loaded)) {
            removeCssClassName(attributes.element, cssClassNames.loaded);
        }
    }
    finally(attributes) {
        addCssClassName(attributes.element, cssClassNames.loaded);
        removeCssClassName(attributes.element, cssClassNames.loading);
    }
    loadImage(attributes) {
        if (this.skipLazyLoading(attributes)) {
            // Set the image right away for bots for better SEO
            return [attributes.imagePath];
        }
        const { element, useSrcset, imagePath, decode } = attributes;
        let img;
        if (isImageElement(element) && isChildOfPicture(element)) {
            const parentClone = element.parentNode.cloneNode(true);
            img = parentClone.getElementsByTagName('img')[0];
            setSourcesToLazy(img);
            setImage(img, imagePath, useSrcset);
        }
        else {
            img = new Image();
            if (isImageElement(element) && element.referrerPolicy) {
                img.referrerPolicy = element.referrerPolicy;
            }
            if (isImageElement(element) && element.sizes) {
                img.sizes = element.sizes;
            }
            if (useSrcset && 'srcset' in img) {
                img.srcset = imagePath;
            }
            else {
                img.src = imagePath;
            }
        }
        if (decode && img.decode) {
            return img.decode().then(() => imagePath);
        }
        return new Promise((resolve, reject) => {
            img.onload = () => resolve(imagePath);
            img.onerror = () => reject(null);
        });
    }
    setErrorImage(error, attributes) {
        const { element, useSrcset, errorImagePath } = attributes;
        setImageAndSourcesToError(element, errorImagePath, useSrcset);
        addCssClassName(element, cssClassNames.failed);
    }
    setLoadedImage(imagePath, attributes) {
        const { element, useSrcset } = attributes;
        setImageAndSourcesToLazy(element, imagePath, useSrcset);
    }
    isDisabled() {
        // Disable if SSR and the user isn't a bot
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId) && !this.isBot();
    }
    skipLazyLoading(attributes) {
        return this.isBot(attributes);
    }
    isBot(attributes) {
        var _a;
        if ((_a = this.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) {
            return /googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot/i.test(this.navigator.userAgent);
        }
        return false;
    }
}

class IntersectionObserverHooks extends SharedHooks {
    constructor() {
        super(...arguments);
        this.observers = new WeakMap();
        this.intersectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.uniqKey = {};
    }
    getObservable(attributes) {
        if (this.skipLazyLoading(attributes)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ isIntersecting: true });
        }
        if (attributes.customObservable) {
            return attributes.customObservable;
        }
        const scrollContainerKey = attributes.scrollContainer || this.uniqKey;
        const options = {
            root: attributes.scrollContainer || null,
        };
        if (attributes.offset) {
            options.rootMargin = `${attributes.offset}px`;
        }
        let observer = this.observers.get(scrollContainerKey);
        if (!observer) {
            observer = new IntersectionObserver((entrys) => this.loadingCallback(entrys), options);
            this.observers.set(scrollContainerKey, observer);
        }
        observer.observe(attributes.element);
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((obs) => {
            const subscription = this.intersectionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((entry) => entry.target === attributes.element)).subscribe(obs);
            return () => {
                subscription.unsubscribe();
                observer.unobserve(attributes.element);
            };
        });
    }
    isVisible(event) {
        return event.isIntersecting;
    }
    loadingCallback(entrys) {
        entrys.forEach((entry) => this.intersectionSubject.next(entry));
    }
}
IntersectionObserverHooks.ɵfac = function IntersectionObserverHooks_Factory(t) { return ɵIntersectionObserverHooks_BaseFactory(t || IntersectionObserverHooks); };
IntersectionObserverHooks.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: IntersectionObserverHooks, factory: IntersectionObserverHooks.ɵfac });
const ɵIntersectionObserverHooks_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](IntersectionObserverHooks);

function lazyLoadImage(hooks, attributes) {
    return (evntObservable) => {
        return evntObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => attributes.onStateChange.emit({ reason: 'observer-emit', data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => hooks.isVisible(event, attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => attributes.onStateChange.emit({ reason: 'start-loading' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(() => hooks.loadImage(attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => attributes.onStateChange.emit({ reason: 'mount-image' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((imagePath) => hooks.setLoadedImage(imagePath, attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => attributes.onStateChange.emit({ reason: 'loading-succeeded' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            attributes.onStateChange.emit({ reason: 'loading-failed', data: error });
            hooks.setErrorImage(error, attributes);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            attributes.onStateChange.emit({ reason: 'finally' });
            hooks.finally(attributes);
        }));
    };
}

const LAZYLOAD_IMAGE_HOOKS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('LazyLoadImageHooks');

class LazyLoadImageDirective {
    constructor(el, ngZone, platformId, hooks) {
        this.onStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // Emits an event on every state change
        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.hooks = hooks;
        this.hooks.setPlatformId(platformId);
        this.uid = Math.random().toString(36).substr(2, 9);
    }
    ngOnChanges() {
        if (this.debug === true && !this.debugSubscription) {
            this.debugSubscription = this.onStateChange.subscribe((e) => console.log(e));
        }
        this.propertyChanges$.next({
            element: this.elementRef.nativeElement,
            imagePath: this.lazyImage,
            defaultImagePath: this.defaultImage,
            errorImagePath: this.errorImage,
            useSrcset: this.useSrcset,
            offset: this.offset ? this.offset | 0 : 0,
            scrollContainer: this.scrollTarget,
            customObservable: this.customObservable,
            decode: this.decode,
            onStateChange: this.onStateChange,
            id: this.uid,
        });
    }
    ngAfterContentInit() {
        if (this.hooks.isDisabled()) {
            return null;
        }
        this.ngZone.runOutsideAngular(() => {
            this.loadSubscription = this.propertyChanges$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((attributes) => this.hooks.onAttributeChange(attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((attributes) => attributes.onStateChange.emit({ reason: 'setup' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((attributes) => this.hooks.setup(attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((attributes) => {
                if (!attributes.imagePath) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["never"])();
                }
                return this.hooks.getObservable(attributes).pipe(lazyLoadImage(this.hooks, attributes));
            }))
                .subscribe({
                next: () => null,
            });
        });
    }
    ngOnDestroy() {
        var _a, _b;
        this.propertyChanges$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe({ next: (attributes) => this.hooks.onDestroy(attributes) })
            .unsubscribe();
        (_a = this.loadSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.debugSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
LazyLoadImageDirective.ɵfac = function LazyLoadImageDirective_Factory(t) { return new (t || LazyLoadImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](LAZYLOAD_IMAGE_HOOKS)); };
LazyLoadImageDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: LazyLoadImageDirective, selectors: [["", "lazyLoad", ""]], inputs: { lazyImage: ["lazyLoad", "lazyImage"], defaultImage: "defaultImage", errorImage: "errorImage", scrollTarget: "scrollTarget", customObservable: "customObservable", offset: "offset", useSrcset: "useSrcset", decode: "decode", debug: "debug" }, outputs: { onStateChange: "onStateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
LazyLoadImageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] },
    { type: Hooks, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [LAZYLOAD_IMAGE_HOOKS,] }] }
];
LazyLoadImageDirective.propDecorators = {
    lazyImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['lazyLoad',] }],
    defaultImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    errorImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    scrollTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    customObservable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    useSrcset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    decode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    debug: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onStateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LazyLoadImageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[lazyLoad]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }] }, { type: Hooks, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [LAZYLOAD_IMAGE_HOOKS]
            }] }]; }, { onStateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], lazyImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['lazyLoad']
        }], defaultImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], errorImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], scrollTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], customObservable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], useSrcset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], decode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

class LazyLoadImageModule {
}
LazyLoadImageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LazyLoadImageModule });
LazyLoadImageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function LazyLoadImageModule_Factory(t) { return new (t || LazyLoadImageModule)(); }, providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: IntersectionObserverHooks }] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LazyLoadImageModule, { declarations: [LazyLoadImageDirective], exports: [LazyLoadImageDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LazyLoadImageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [LazyLoadImageDirective],
                exports: [LazyLoadImageDirective],
                providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: IntersectionObserverHooks }]
            }]
    }], null, null); })();

class Rect {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static fromElement(element) {
        const { left, top, right, bottom } = element.getBoundingClientRect();
        if (left === 0 && top === 0 && right === 0 && bottom === 0) {
            return Rect.empty;
        }
        else {
            return new Rect(left, top, right, bottom);
        }
    }
    static fromWindow(_window) {
        return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
    }
    inflate(inflateBy) {
        this.left -= inflateBy;
        this.top -= inflateBy;
        this.right += inflateBy;
        this.bottom += inflateBy;
    }
    intersectsWith(rect) {
        return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
    }
    getIntersectionWith(rect) {
        const left = Math.max(this.left, rect.left);
        const top = Math.max(this.top, rect.top);
        const right = Math.min(this.right, rect.right);
        const bottom = Math.min(this.bottom, rect.bottom);
        if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
        }
        else {
            return Rect.empty;
        }
    }
}
Rect.empty = new Rect(0, 0, 0, 0);

class ScrollHooks extends SharedHooks {
    constructor() {
        super(...arguments);
        this.getWindow = () => window;
        this.scrollListeners = new WeakMap();
        // Only create one scroll listener per target and share the observable.
        // Typical, there will only be one observable per application
        this.getScrollListener = (scrollTarget) => {
            if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
                console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
            }
            const scrollListener = this.scrollListeners.get(scrollTarget);
            if (scrollListener) {
                return scrollListener;
            }
            const srollEvent = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create((observer) => {
                const eventName = 'scroll';
                const handler = (event) => observer.next(event);
                const options = { passive: true, capture: false };
                scrollTarget.addEventListener(eventName, handler, options);
                return () => scrollTarget.removeEventListener(eventName, handler, options);
            });
            const listener = this.sampleObservable(srollEvent);
            this.scrollListeners.set(scrollTarget, listener);
            return listener;
        };
    }
    getObservable(attributes) {
        if (this.skipLazyLoading(attributes)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])('load');
        }
        else if (attributes.customObservable) {
            return attributes.customObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''));
        }
        else if (attributes.scrollContainer) {
            return this.getScrollListener(attributes.scrollContainer);
        }
        return this.getScrollListener(this.getWindow());
    }
    isVisible(event, attributes) {
        const elementBounds = Rect.fromElement(attributes.element);
        if (elementBounds === Rect.empty) {
            return false;
        }
        const windowBounds = Rect.fromWindow(this.getWindow());
        elementBounds.inflate(attributes.offset);
        if (attributes.scrollContainer) {
            const scrollContainerBounds = Rect.fromElement(attributes.scrollContainer);
            const intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
            return elementBounds.intersectsWith(intersection);
        }
        else {
            return elementBounds.intersectsWith(windowBounds);
        }
    }
    sampleObservable(obs, scheduler) {
        return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["sampleTime"])(100, scheduler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(''));
    }
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-lazyload-image.js.map

/***/ }),

/***/ "Zy7B":
/*!***************************************************!*\
  !*** ./src/app/@sharing/image/image.component.ts ***!
  \***************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _core_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@core/directives/lazy-load.directive */ "E5c8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





function ImageComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", (ctx_r0.code == null ? null : ctx_r0.code.url) || (ctx_r0.code == null ? null : ctx_r0.code.link), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx_r0.code == null ? null : ctx_r0.code.large) || (ctx_r0.code == null ? null : ctx_r0.code.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", (ctx_r0.code == null ? null : ctx_r0.code.title) || (ctx_r0.code == null ? null : ctx_r0.code.titulo) || (ctx_r0.code == null ? null : ctx_r0.code.name))("id", ctx_r0.idImage);
} }
const _c0 = function (a0) { return [a0]; };
function ImageComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, (ctx_r1.code == null ? null : ctx_r1.code.url) || (ctx_r1.code == null ? null : ctx_r1.code.link)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (ctx_r1.code == null ? null : ctx_r1.code.large) || (ctx_r1.code == null ? null : ctx_r1.code.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", (ctx_r1.code == null ? null : ctx_r1.code.title) || (ctx_r1.code == null ? null : ctx_r1.code.titulo) || (ctx_r1.code == null ? null : ctx_r1.code.name))("id", ctx_r1.idImage);
} }
class ImageComponent {
    constructor() {
        this.code = [];
        this.size = '';
        this.idImage = '';
    }
    ngOnInit() {
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(); };
ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], inputs: { code: "code", size: "size", idImage: "idImage" }, decls: 2, vars: 2, consts: [["rel", "noopener noreferrer", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["rel", "noopener noreferrer", "target", "_blank", 3, "href"], ["LazyLoad", "", 1, "img-fluid", "w-100", 3, "src", "alt", "id"], ["target", "_blank", 3, "routerLink"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageComponent_a_0_Template, 2, 4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageComponent_a_1_Template, 2, 6, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.code == null ? null : ctx.code.url.match("https"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.code == null ? null : ctx.code.url.match("https")));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _core_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_2__["LazyLoadDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyaW5nL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.scss']
            }]
    }], null, { code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], idImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "a6nB":
/*!***************************************************!*\
  !*** ./src/app/@sharing/swipe/swipe.component.ts ***!
  \***************************************************/
/*! exports provided: SwipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeComponent", function() { return SwipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/angular */ "3II9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image.component */ "Zy7B");






function SwipeComponent_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image", 3);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", item_r1)("idImage", ctx_r2.idImage)("size", ctx_r2.size);
} }
function SwipeComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SwipeComponent_1_ng_template_0_Template, 1, 3, "ng-template", 2);
} }
const _c0 = function () { return { clickable: true }; };
swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_1__["EffectFade"], swiper_core__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_1__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_1__["A11y"], swiper_core__WEBPACK_IMPORTED_MODULE_1__["Lazy"]]);
class SwipeComponent {
    constructor() {
        this.data = [];
        this.code = [];
        this.size = '';
        this.idImage = '';
        this.onSwiper = (swiper) => { };
        this.onSlideChange = () => { };
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() { }
}
SwipeComponent.ɵfac = function SwipeComponent_Factory(t) { return new (t || SwipeComponent)(); };
SwipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwipeComponent, selectors: [["app-swipe"]], inputs: { data: "data", code: "code", size: "size", idImage: "idImage", options: "options" }, decls: 2, vars: 6, consts: [["effect", "fade", 3, "lazy", "navigation", "pagination", "swiper", "slideChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["swiperSlide", ""], [3, "code", "idImage", "size"]], template: function SwipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swiper", function SwipeComponent_Template_swiper_swiper_0_listener($event) { return ctx.onSwiper($event); })("slideChange", function SwipeComponent_Template_swiper_slideChange_0_listener() { return ctx.onSlideChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SwipeComponent_1_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lazy", true)("navigation", true)("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperSlideDirective"], _image_image_component__WEBPACK_IMPORTED_MODULE_4__["ImageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyaW5nL3N3aXBlL3N3aXBlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-swipe',
                templateUrl: './swipe.component.html',
                styleUrls: ['./swipe.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], idImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zEFZ":
/*!************************************************!*\
  !*** ./src/app/@sharing/swipe/swipe.module.ts ***!
  \************************************************/
/*! exports provided: SwipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeModule", function() { return SwipeModule; });
/* harmony import */ var _image_image_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../image/image.module */ "CFN+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "3II9");
/* harmony import */ var _swipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./swipe.component */ "a6nB");






class SwipeModule {
}
SwipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SwipeModule });
SwipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SwipeModule_Factory(t) { return new (t || SwipeModule)(); }, imports: [[
            swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _image_image_module__WEBPACK_IMPORTED_MODULE_0__["ImageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SwipeModule, { declarations: [_swipe_component__WEBPACK_IMPORTED_MODULE_4__["SwipeComponent"]], imports: [swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _image_image_module__WEBPACK_IMPORTED_MODULE_0__["ImageModule"]], exports: [_swipe_component__WEBPACK_IMPORTED_MODULE_4__["SwipeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_swipe_component__WEBPACK_IMPORTED_MODULE_4__["SwipeComponent"]],
                exports: [_swipe_component__WEBPACK_IMPORTED_MODULE_4__["SwipeComponent"]],
                imports: [
                    swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _image_image_module__WEBPACK_IMPORTED_MODULE_0__["ImageModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-blog-blog-module~pages-home-home-module.js.map