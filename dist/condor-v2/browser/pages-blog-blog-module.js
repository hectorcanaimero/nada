(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blog-blog-module"],{

/***/ "7+xk":
/*!************************************************!*\
  !*** ./src/app/@core/services/blog.service.ts ***!
  \************************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");






const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].blog.url;
const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ Authorization: `${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].blog.key}` });
class BlogService {
    constructor(http) {
        this.http = http;
        this.getPosts = (p, page) => {
            return this.http.get(`${url}/posts?page=${p}&per_page=${page}`, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data));
        };
        this.getPostId = (id) => {
            return this.http.get(`${url}/posts/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data));
        };
        this.getPostSlug = (slug) => {
            return this.http.get(`${url}/posts`, { params: { slug: `${slug}` } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data[0]));
        };
        this.getPostSearch = (search, page, limit = 6) => {
            return this.http.get(`${url}/posts?search=${search}&page=${page}&per_page=${limit}`, { headers, observe: 'response' });
        };
        // getPostsCategories = (categories: number, limit = 6): Observable<any> => {
        //   return this.http.get<any>(`${ url }/posts?categories=${categories}&per_page=${limit}`, {observe: 'response'});
        // }
        this.getPostsCategories = (categories, page, limit = 6) => {
            return this.http.get(`${url}/posts?categories=${categories}&page=${page}&per_page=${limit}`, { observe: 'response' });
        };
        this.getPostsTags = (tags, limit) => {
            return this.http.get(`${url}/posts?tags=${tags}&per_page=${limit}`, { observe: 'response' });
        };
        this.getCategoriesSlug = (slug) => {
            return this.http.get(`${url}/categories?slug=${slug}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res[0]));
        };
        this.getCategories = (limit) => {
            return this.http.get(`${url}/categories?orderby=count&order=desc&per_page=${limit}`);
        };
        this.getTagSlug = (slug) => {
            return this.http.get(`${url}/tags?slug=${slug}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res[0]));
        };
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7xY4":
/*!********************************************************!*\
  !*** ./src/app/@pages/blog/detail/detail.component.ts ***!
  \********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/blog.service */ "7+xk");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _widgets_blog_sidebar_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@widgets/blog-sidebar/blog-sidebar.component */ "kdH9");
/* harmony import */ var _widgets_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@widgets/blog-list/blog-list.component */ "Liay");
/* harmony import */ var _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@sharing/sem-data/sem-data.component */ "q3cj");
/* harmony import */ var _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@core/pipes/safe.pipe */ "oeKb");











function DetailComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-blog-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-blog-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, items_r3.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", items_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", items_r3.large, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 9, items_r3.content, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", 206);
} }
function DetailComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sem-data");
} }
class DetailComponent {
    constructor(db, seo, act) {
        this.db = db;
        this.seo = seo;
        this.act = act;
        this.getPost = (slug) => {
            this.items$ = this.db.getPostSlug(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000));
        };
        this.getSeo = (item) => {
            this.seo.updateTags({ title: item.title, description: item.content, image: item.medium });
            this.seo.addCanonical();
            this.seo.dataLayerPage(item.title);
        };
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getPost(data));
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 4, vars: 4, consts: [["id", "Post", "class", "py-5", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "Post", 1, "py-5"], [1, "container"], [1, "date"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "title", "mb-3"], [1, "row"], [1, "col-md-9"], [1, "img-fluid", "mb-3", 3, "src", "alt"], [1, "content", "mt-4", "mt-md-5"], ["id", "conteudo", 3, "innerHTML"], [1, "col-md-3"], ["titulo", "Dicas da Familia", 3, "tag"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailComponent_section_0_Template, 17, 12, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _widgets_blog_sidebar_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["BlogSidebarComponent"], _widgets_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_7__["BlogListComponent"], _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_8__["SemDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_9__["SafePipe"]], styles: ["img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.text-blog[_ngcontent-%COMP%] {\n  color: var(--color-red-secondary) !important;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 1.8rem;\n  font-weight: 800 !important;\n  margin-bottom: 0rem;\n}\n\n.item-tags[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin: 0 0.2rem;\n  cursor: pointer;\n}\n\n.date[_ngcontent-%COMP%] {\n  letter-spacing: 0.2px;\n  color: var(--color-red-secondary);\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 1rem !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  transition: transform 0.2s;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  min-height: 310px;\n}\n\n.item[_ngcontent-%COMP%]   .text-blog[_ngcontent-%COMP%] {\n  color: var(--color-red-secondary);\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  letter-spacing: 0.2px;\n  color: var(--color-red-secondary);\n  font-weight: 600;\n  font-size: 0.7rem;\n  margin-bottom: 0 !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-red-secondary);\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin: 0 0.2rem;\n  cursor: pointer;\n}\n\n.item[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 0.5rem;\n  padding: 0.5rem;\n}\n\n.item[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%]   .button-condor[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  text-align: center;\n  color: #505050;\n  font-size: 0.8rem;\n  width: 100%;\n  font-weight: 700;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.15);\n}\n\n@media (max-width: 450px) {\n  .item[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHBhZ2VzL2Jsb2cvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFBYSw0Q0FBQTtBQUViOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRVI7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUZBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUFJO0VBQWEsaUNBQUE7QUFHakI7O0FBRkk7RUFDSSxvQkFBQTtBQUlSOztBQUhRO0VBQ0kscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUtaOztBQUhRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUtaOztBQUhZO0VBQ0ksZ0NBQUE7QUFLaEI7O0FBSmdCO0VBQ0ksaUNBQUE7QUFNcEI7O0FBRFk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdoQjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBQVE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRVo7O0FBQ0k7RUFDSSxzQkFBQTtFQUNBLG1GQUFBO0FBQ1I7O0FBR0E7RUFDSTtJQUNJLFlBQUE7RUFBTjs7RUFFRTtJQUNJLDRCQUFBO0lBQ0EsNkJBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHBhZ2VzL2Jsb2cvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50ZXh0LWJsb2cgeyBjb2xvcjogdmFyKC0tY29sb3ItcmVkLXNlY29uZGFyeSkgIWltcG9ydGFudDsgfVxuXG4udGl0bGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbn1cblxuLml0ZW0tdGFnc3tcbiAgICAuYmFnIHtcbiAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgIG1hcmdpbjogMCAuMnJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmRhdGV7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXJlZC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwwLDAsLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsMCwwLC4wNSk7XG4gICAgbWluLWhlaWdodDogMzEwcHg7XG4gICAgLnRleHQtYmxvZyB7IGNvbG9yOiB2YXIoLS1jb2xvci1yZWQtc2Vjb25kYXJ5KSB9XG4gICAgLml0ZW0tYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjVyZW07XG4gICAgICAgIC5kYXRle1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXJlZC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaXRlbS10YWdze1xuICAgICAgICAgICAgLmJhZyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzByZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4ycmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbS1mb290ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgLmJ1dHRvbi1jb25kb3Ige1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1MDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLDAsMCwuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLml0ZW17XG4gICAgICAgIGhlaWdodDogYXV0bzs7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.scss']
            }]
    }], function () { return [{ type: _core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "D8JU":
/*!************************************************************!*\
  !*** ./src/app/@widgets/blog-slider/blog-slider.module.ts ***!
  \************************************************************/
/*! exports provided: BlogSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSliderModule", function() { return BlogSliderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _blog_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-slider.component */ "qpqo");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/directive.module */ "YfWO");
/* harmony import */ var _sharing_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sharing/swipe/swipe.module */ "zEFZ");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ "3II9");








class BlogSliderModule {
}
BlogSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogSliderModule });
BlogSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogSliderModule_Factory(t) { return new (t || BlogSliderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_5__["SwipeModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"],
            _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogSliderModule, { declarations: [_blog_slider_component__WEBPACK_IMPORTED_MODULE_2__["BlogSliderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_5__["SwipeModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"],
        _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_blog_slider_component__WEBPACK_IMPORTED_MODULE_2__["BlogSliderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_blog_slider_component__WEBPACK_IMPORTED_MODULE_2__["BlogSliderComponent"]],
                exports: [_blog_slider_component__WEBPACK_IMPORTED_MODULE_2__["BlogSliderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_swipe_swipe_module__WEBPACK_IMPORTED_MODULE_5__["SwipeModule"],
                    swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"],
                    _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__["DirectiveModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Liay":
/*!***********************************************************!*\
  !*** ./src/app/@widgets/blog-list/blog-list.component.ts ***!
  \***********************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/blog.service */ "7+xk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






function BlogListComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogListComponent_div_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onBlogId(item_r4.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r4.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, item_r4.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
} }
function BlogListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogListComponent_div_3_div_1_Template, 10, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.items$));
} }
function BlogListComponent_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogListComponent_ng_template_4_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onBlogId(item_r9.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9.large, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r9.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, item_r9.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.title);
} }
function BlogListComponent_ng_template_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogListComponent_ng_template_4_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onBlogId(item_r12.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r12.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, item_r12.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.title);
} }
function BlogListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlogListComponent_ng_template_4_div_3_Template, 10, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BlogListComponent_ng_template_4_div_8_Template, 10, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx_r2.items$), 0, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, ctx_r2.items$), 1, 6));
} }
class BlogListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.type = 'list';
        this.titulo = 'list';
        this.onBlogId = (slug) => this.router.navigateByUrl(`/blog/${slug}`);
    }
    ngOnInit() {
        if (this.categoria) {
            this.items$ = this.db.getPostsCategories(this.categoria, 5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.body));
        }
        else {
            this.items$ = this.db.getPostsTags(this.tag, 5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.body));
        }
    }
}
BlogListComponent.ɵfac = function BlogListComponent_Factory(t) { return new (t || BlogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BlogListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogListComponent, selectors: [["app-blog-list"]], inputs: { tag: "tag", type: "type", categoria: "categoria", titulo: "titulo" }, decls: 6, vars: 3, consts: [[1, "titulo"], ["class", "list", 4, "ngIf", "ngIfElse"], ["media", ""], [1, "list"], ["class", "line", 3, "click", 4, "ngFor", "ngForOf"], [1, "line", 3, "click"], [1, "image"], [1, "w-100", 3, "src", "alt"], [1, "content"], [1, "date"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "title"], [1, "media"], [1, "row"], [1, "col-md-7"], ["class", "cards", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "cards", 3, "click"], ["alt", "", 1, "w-100", 3, "src"]], template: function BlogListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlogListComponent_div_3_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogListComponent_ng_template_4_Template, 11, 14, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "list")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".titulo[_ngcontent-%COMP%] {\n  padding-bottom: 0rem;\n  margin-bottom: 0.75rem;\n  border-bottom: 1px solid #e2e2e2;\n}\n.titulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-weight: 700;\n}\n.list[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  cursor: pointer;\n  flex: row;\n  display: flex;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 0.5rem;\n}\n.list[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px solid #e2e2e2;\n}\n.list[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.list[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.list[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 80%;\n  padding-left: 0.5rem;\n}\n.list[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin-bottom: 0.15rem;\n  color: #686868;\n}\n.list[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 1rem;\n  text-align: justify;\n}\n.media[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.media[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.media[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.media[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin-bottom: 0.15rem;\n  color: #686868;\n}\n.media[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvYmxvZy1saXN0L2Jsb2ctbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FBQUo7QUFDSTtFQUNFLGdDQUFBO0FBQ047QUFDSTtFQUNFLFVBQUE7QUFDTjtBQUFNO0VBQ0UsbUJBQUE7QUFFUjtBQUNJO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBQ047QUFBTTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBRVI7QUFBTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFLRTtFQUNFLGVBQUE7QUFGSjtBQUdJO0VBQ0UsbUJBQUE7QUFETjtBQUVNO0VBQ0UsbUJBQUE7QUFBUjtBQUlNO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFGUjtBQUlNO0VBQ0UsaUJBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL0B3aWRnZXRzL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcbiAgcGFkZGluZy1ib3R0b206IDByZW07XG4gIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gIGgye1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5cbi5saXN0IHtcbiAgLmxpbmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbGV4OiByb3c7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNlMmUyZTI7XG4gICAgfVxuICAgIC5pbWFnZSB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgaW1ne1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgIC5kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjE1cmVtO1xuICAgICAgICBjb2xvcjogIzY4Njg2ODtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1lZGlhIHtcbiAgLmNhcmRzIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmltYWdlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIC5kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjE1cmVtO1xuICAgICAgICBjb2xvcjogIzY4Njg2ODtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-list',
                templateUrl: './blog-list.component.html',
                styleUrls: ['./blog-list.component.scss']
            }]
    }], function () { return [{ type: _core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { tag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], categoria: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Nn4g":
/*!********************************************!*\
  !*** ./src/app/@pages/blog/blog.module.ts ***!
  \********************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/pipes/pipes.module */ "GFCv");
/* harmony import */ var _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sharing/sem-data/sem-data.module */ "FCmR");
/* harmony import */ var _widgets_blog_list_blog_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @widgets/blog-list/blog-list.module */ "obdu");
/* harmony import */ var _widgets_blog_latest_blog_latest_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @widgets/blog-latest/blog-latest.module */ "u8Zm");
/* harmony import */ var _widgets_blog_slider_blog_slider_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @widgets/blog-slider/blog-slider.module */ "D8JU");
/* harmony import */ var _widgets_blog_sidebar_blog_sidebar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @widgets/blog-sidebar/blog-sidebar.module */ "jigu");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blog.component */ "O8jQ");
/* harmony import */ var _all_in_all_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./all-in/all-in.component */ "eQFy");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail/detail.component */ "7xY4");
















const app = [
    { path: '', component: _blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"] },
    { path: ':slug', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"] },
    { path: ':first/:slug', component: _all_in_all_in_component__WEBPACK_IMPORTED_MODULE_12__["AllInComponent"] }
];
class BlogModule {
}
BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogModule_Factory(t) { return new (t || BlogModule)(); }, imports: [[
            _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
            _widgets_blog_list_blog_list_module__WEBPACK_IMPORTED_MODULE_7__["BlogListModule"],
            _widgets_blog_latest_blog_latest_module__WEBPACK_IMPORTED_MODULE_8__["BlogLatestModule"],
            _widgets_blog_slider_blog_slider_module__WEBPACK_IMPORTED_MODULE_9__["BlogSliderModule"],
            _widgets_blog_sidebar_blog_sidebar_module__WEBPACK_IMPORTED_MODULE_10__["BlogSidebarModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"], _all_in_all_in_component__WEBPACK_IMPORTED_MODULE_12__["AllInComponent"]], imports: [_core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
        _widgets_blog_list_blog_list_module__WEBPACK_IMPORTED_MODULE_7__["BlogListModule"],
        _widgets_blog_latest_blog_latest_module__WEBPACK_IMPORTED_MODULE_8__["BlogLatestModule"],
        _widgets_blog_slider_blog_slider_module__WEBPACK_IMPORTED_MODULE_9__["BlogSliderModule"],
        _widgets_blog_sidebar_blog_sidebar_module__WEBPACK_IMPORTED_MODULE_10__["BlogSidebarModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"], _all_in_all_in_component__WEBPACK_IMPORTED_MODULE_12__["AllInComponent"]],
                imports: [
                    _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_6__["SemDataModule"],
                    _widgets_blog_list_blog_list_module__WEBPACK_IMPORTED_MODULE_7__["BlogListModule"],
                    _widgets_blog_latest_blog_latest_module__WEBPACK_IMPORTED_MODULE_8__["BlogLatestModule"],
                    _widgets_blog_slider_blog_slider_module__WEBPACK_IMPORTED_MODULE_9__["BlogSliderModule"],
                    _widgets_blog_sidebar_blog_sidebar_module__WEBPACK_IMPORTED_MODULE_10__["BlogSidebarModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "O8jQ":
/*!***********************************************!*\
  !*** ./src/app/@pages/blog/blog.component.ts ***!
  \***********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/seo.service */ "GOo+");
/* harmony import */ var _core_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/blog.service */ "7+xk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _widgets_blog_slider_blog_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@widgets/blog-slider/blog-slider.component */ "qpqo");
/* harmony import */ var _widgets_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@widgets/blog-list/blog-list.component */ "Liay");
/* harmony import */ var _widgets_blog_latest_blog_latest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@widgets/blog-latest/blog-latest.component */ "zpdq");
/* harmony import */ var _widgets_blog_sidebar_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@widgets/blog-sidebar/blog-sidebar.component */ "kdH9");
/* harmony import */ var _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@sharing/sem-data/sem-data.component */ "q3cj");











function BlogComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-blog-slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-blog-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-blog-latest", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-blog-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-blog-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoria", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.items$);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tag", 206);
} }
function BlogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sem-data");
} }
class BlogComponent {
    constructor(seo, db) {
        this.seo = seo;
        this.db = db;
        this.getSeo = () => {
            this.seo.addCanonical();
            this.seo.updateTags({
                title: 'Blog Condor | Receitas, Dicas de Economia e Muito Mais',
                description: 'Confira no Blog Condor: Receitas para seu Dia a Dia, Dicas de Economia, Limpeza, Decoração e Mais',
                image: 'https://www.condor.com.br/assets/images/sem-imagem.jpg'
            });
            this.seo.dataLayerPage('Blog');
        };
    }
    ngOnInit() {
        this.getSeo();
        this.items$ = this.db.getPosts(1, 6).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000));
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 4, vars: 4, consts: [["id", "blog", "class", "my-4", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "blog", 1, "my-4"], [1, "container"], [1, "mb-5"], [1, "row", "justify-content-center"], [1, "col-md-6", "col-lg-8"], ["type", "media", "titulo", "Receitas", 3, "categoria"], ["titulo", "\u00DAltimos Posts", 3, "data"], [1, "col-md-6", "col-lg-4"], ["titulo", "Dicas da Familia", 3, "tag"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogComponent_section_0_Template, 11, 3, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _widgets_blog_slider_blog_slider_component__WEBPACK_IMPORTED_MODULE_5__["BlogSliderComponent"], _widgets_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_6__["BlogListComponent"], _widgets_blog_latest_blog_latest_component__WEBPACK_IMPORTED_MODULE_7__["BlogLatestComponent"], _widgets_blog_sidebar_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["BlogSidebarComponent"], _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_9__["SemDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --color-default--text: #444444;\n  --color-default--background: #f2faff;\n  --color-default--background-2: #a7a7a7;\n  --color-blue-primary: #447ab3;\n  --color-blue-secondary: #2e65a5;\n  --color-blue-tertiary: #1e73be;\n  --color-red-primary: #f44336;\n  --color-red-secondary: #940505dc;\n  --color-white: #fff;\n  --product-background: #fff;\n  --product-mas18: rgb(131, 0, 0);\n  --product-kit: rgb(19, 54, 130);\n  --product-text: #414141;\n  --product-color-text-mas18: #fff;\n  --product-color-text-kit: #fff;\n}\n\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  transition: transform 0.2s;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  min-height: 310px;\n}\n\n.item[_ngcontent-%COMP%]   .text-blog[_ngcontent-%COMP%] {\n  color: #940505dc;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  letter-spacing: 0.2px;\n  color: #940505dc;\n  font-weight: 600;\n  font-size: 0.7rem;\n  margin-bottom: 0 !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #940505dc;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin: 0 0.2rem;\n  cursor: pointer;\n}\n\n.item[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 0.5rem;\n  padding: 0.5rem;\n}\n\n.item[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%]   .button-condor[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  text-align: center;\n  color: #505050;\n  font-size: 0.8rem;\n  width: 100%;\n  font-weight: 700;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.15);\n}\n\n@media (max-width: 450px) {\n  .item[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9AcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBRUEsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQ0FBQTtFQUdBLG1CQUFBO0VBR0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDTEY7O0FBZEE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUZBQUE7RUFDQSxpQkFBQTtBQWlCSjs7QUFoQkk7RUFBYSxnQkRvRUg7QUNqRGQ7O0FBbEJJO0VBQ0ksb0JBQUE7QUFvQlI7O0FBbkJRO0VBQ0kscUJBQUE7RUFDQSxnQkQrREU7RUM5REYsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBcUJaOztBQW5CUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFxQlo7O0FBbkJZO0VBQ0ksZ0NBQUE7QUFxQmhCOztBQXBCZ0I7RUFDSSxnQkRtRE47QUM3QmQ7O0FBakJZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFtQmhCOztBQWZJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFpQlI7O0FBaEJRO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWtCWjs7QUFmSTtFQUNJLHNCQUFBO0VBQ0EsbUZBQUE7QUFpQlI7O0FBYkE7RUFDSTtJQUNJLFlBQUE7RUFnQk47O0VBZEU7SUFDSSw0QkFBQTtJQUNBLDZCQUFBO0VBaUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9AcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLWNvbG9yLWRlZmF1bHQtLXRleHQ6ICM0NDQ0NDQ7XG4gIC0tY29sb3ItZGVmYXVsdC0tYmFja2dyb3VuZDogI2YyZmFmZjtcbiAgLS1jb2xvci1kZWZhdWx0LS1iYWNrZ3JvdW5kLTI6ICNhN2E3YTc7XG5cbiAgLS1jb2xvci1ibHVlLXByaW1hcnk6ICM0NDdhYjM7XG4gIC0tY29sb3ItYmx1ZS1zZWNvbmRhcnk6ICMyZTY1YTU7XG4gIC0tY29sb3ItYmx1ZS10ZXJ0aWFyeTogIzFlNzNiZTtcblxuICAtLWNvbG9yLXJlZC1wcmltYXJ5OiAjZjQ0MzM2O1xuICAtLWNvbG9yLXJlZC1zZWNvbmRhcnk6ICM5NDA1MDVkYztcbiAgLy8gLS1jb2xvci1yZWQtdGVydGlhcnk6ICMxZTczYmU7XG5cbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcblxuICAvLyBDYXJkIGRvIFByb2R1dG9cbiAgLS1wcm9kdWN0LWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tcHJvZHVjdC1tYXMxODogcmdiKDEzMSwgMCwgMCk7XG4gIC0tcHJvZHVjdC1raXQ6IHJnYigxOSwgNTQsIDEzMCk7XG4gIC0tcHJvZHVjdC10ZXh0OiAjNDE0MTQxO1xuICAtLXByb2R1Y3QtY29sb3ItdGV4dC1tYXMxODogI2ZmZjtcbiAgLS1wcm9kdWN0LWNvbG9yLXRleHQta2l0OiAjZmZmO1xuXG4gIC8vLy8vLy8vLy8vLy9cbiRjb3ItZGVmYXVsdC1iYWNrZ3JvdW5kOiAjZjJmYWZmO1xuJGNvci1kZWZhdWx0LXRleHQ6ICM0NDQ7XG4kY29yLWZvb3Rlci1iYWNrZ3JvdW5kOiAjNDQ3YWIzO1xuLy8vLy8vLy8vLy8vL1xuXG4vLyBCbGFjayBGcmlkYXlcbi8vICRibHVlOiAjMTgxODE4O1xuLy8gJHJlZDogI2ZmODMwMDtcbi8vICRibHVlLWFscGhhOiAjMjEyMTIxO1xuLy8gJGNvci1mb290ZXItYmFja2dyb3VuZDogIzE4MTgxODtcbi8vICRmdW5kb1Byb2R1dG86ICMwMDAwMDBkOTtcblxuXG5cbiRibHVlOiAjNDQ3YWIzO1xuJGJsdWUtYWxwaGE6ICMyZTY1YTU7XG4kcmVkOiAjZjQ0MzM2IDtcbiRmdW5kb1Byb2R1dG86IG5vbmU7XG4kYmx1ZS1iZXRhOiAjMWU3M2JlO1xuJHJlZC1hbHBoYTogIzk0MDUwNWRjO1xuJGNvbG9yUHJvZHV0bzogIzAwMDtcblxuLy8gbWV0aG9kc1xuQG1peGluIGZvbnQtV2VpZ2h0KCRudW0pIHsgZm9udC13ZWlnaHQ6ICRudW0gIWltcG9ydGFudDsgfVxuQG1peGluIGZvbnQtU2l6ZSgkbnVtKSB7IGZvbnQtc2l6ZTogJG51bSAhaW1wb3J0YW50OyB9XG5AbWl4aW4gYmFja0dyb3VuZCgkY29sb3IpIHsgYmFja2dyb3VuZDogJGNvbG9yICFpbXBvcnRhbnQ7IH1cblxufVxuXG5cblxuICAvLy8vLy8vLy8vLy8vXG4gICRjb3ItZGVmYXVsdC1iYWNrZ3JvdW5kOiAjZjJmYWZmO1xuICAkY29yLWRlZmF1bHQtdGV4dDogIzQ0NDtcbiAgJGNvci1mb290ZXItYmFja2dyb3VuZDogIzQ0N2FiMztcbiAgLy8vLy8vLy8vLy8vL1xuXG4gIC8vIEJsYWNrIEZyaWRheVxuICAvLyAkYmx1ZTogIzE4MTgxODtcbiAgLy8gJHJlZDogI2ZmODMwMDtcbiAgLy8gJGJsdWUtYWxwaGE6ICMyMTIxMjE7XG4gIC8vICRjb3ItZm9vdGVyLWJhY2tncm91bmQ6ICMxODE4MTg7XG4gIC8vICRmdW5kb1Byb2R1dG86ICMwMDAwMDBkOTtcblxuXG5cbiAgJGJsdWU6ICM0NDdhYjM7XG4gICRibHVlLWFscGhhOiAjMmU2NWE1O1xuICAkcmVkOiAjZjQ0MzM2IDtcbiAgJGZ1bmRvUHJvZHV0bzogbm9uZTtcbiAgJGJsdWUtYmV0YTogIzFlNzNiZTtcbiAgJHJlZC1hbHBoYTogIzk0MDUwNWRjO1xuICAkY29sb3JQcm9kdXRvOiAjMDAwO1xuXG4gIC8vIG1ldGhvZHNcbiAgQG1peGluIGZvbnQtV2VpZ2h0KCRudW0pIHsgZm9udC13ZWlnaHQ6ICRudW0gIWltcG9ydGFudDsgfVxuICBAbWl4aW4gZm9udC1TaXplKCRudW0pIHsgZm9udC1zaXplOiAkbnVtICFpbXBvcnRhbnQ7IH1cbiAgQG1peGluIGJhY2tHcm91bmQoJGNvbG9yKSB7IGJhY2tncm91bmQ6ICRjb2xvciAhaW1wb3J0YW50OyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZS5zY3NzJztcblxuLml0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLDAsMCwuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgICBtaW4taGVpZ2h0OiAzMTBweDtcbiAgICAudGV4dC1ibG9nIHsgY29sb3I6ICRyZWQtYWxwaGEgfVxuICAgIC5pdGVtLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xuICAgICAgICAuZGF0ZXtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMnB4O1xuICAgICAgICAgICAgY29sb3I6ICRyZWQtYWxwaGE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQtYWxwaGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGVtLXRhZ3N7XG4gICAgICAgICAgICAuYmFnIHsgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzByZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4ycmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbS1mb290ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgLmJ1dHRvbi1jb25kb3Ige1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1MDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLDAsMCwuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLml0ZW17XG4gICAgICAgIGhlaWdodDogYXV0bzs7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return [{ type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] }, { type: _core_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] }]; }, null); })();


/***/ }),

/***/ "eQFy":
/*!********************************************************!*\
  !*** ./src/app/@pages/blog/all-in/all-in.component.ts ***!
  \********************************************************/
/*! exports provided: AllInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInComponent", function() { return AllInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/blog.service */ "7+xk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _widgets_blog_sidebar_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@widgets/blog-sidebar/blog-sidebar.component */ "kdH9");
/* harmony import */ var _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@sharing/sem-data/sem-data.component */ "q3cj");









function AllInComponent_section_0_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 12);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r4.titulo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a1) { return ["/blog", a1]; };
function AllInComponent_section_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ler mais >> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, item_r6.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r6.medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 6, item_r6.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, item_r6.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, item_r6.slug));
} }
const _c1 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function AllInComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllInComponent_section_0_h1_4_Template, 1, 1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllInComponent_section_0_div_6_Template, 16, 15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pagination-controls", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllInComponent_section_0_Template_pagination_controls_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.pageChanged($event); })("pageBoundsCorrection", function AllInComponent_section_0_Template_pagination_controls_pageBoundsCorrection_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-blog-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, items_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c1, ctx_r0.itemsPerPage, ctx_r0.currentPage, ctx_r0.totalItems)));
} }
function AllInComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sem-data");
} }
class AllInComponent {
    constructor(db, act) {
        this.db = db;
        this.act = act;
        this.id = '';
        this.slug = '';
        this.titulo = '';
        this.totalItems = 0;
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.type = [];
        this.process = (type, slug, page = 1) => {
            console.log(page);
            this.id = type;
            this.slug = slug;
            if (type === 'categoria') {
                return this.getCategories(slug, page);
            }
            else if (type === 'tag') {
                return this.getTags(slug, page);
            }
            else {
                return this.getSearch(slug, page);
            }
        };
        this.getCategories = (slug, page) => {
            this.db.getCategoriesSlug(slug).subscribe((type) => {
                this.type = type;
                this.titulo = `Categoria: ${type.name}`;
                this.items$ = this.db.getPostsCategories(type.id, page, this.itemsPerPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.body));
            });
        };
        this.getTags = (slug, page) => {
            this.db.getTagSlug(slug).subscribe((type) => {
                this.type = type;
                this.titulo = `Etiqueta: ${type.name}`;
                this.items$ = this.db.getPostsTags(type.id, this.itemsPerPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.body));
            });
        };
        this.pageChanged = (ev) => {
            this.currentPage = ev++;
            this.process(this.id, this.slug, this.currentPage);
        };
    }
    ngOnInit() {
        this.first$ = this.act.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(paramsMap => paramsMap.get('first')));
        this.slug$ = this.act.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(paramsMap => paramsMap.get('slug')));
        this.first$.subscribe(type => this.slug$.subscribe(slug => this.process(type, slug)));
    }
    getSearch(slug, page) {
        const text = slug.split('-').join('%20');
        this.items$ = this.db.getPostSearch(text, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4];
            this.titulo = `Resultado da busca por <b>"${slug}"</b> (${this.totalItems})`;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.body));
    }
}
AllInComponent.ɵfac = function AllInComponent_Factory(t) { return new (t || AllInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AllInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllInComponent, selectors: [["app-all-in"]], decls: 4, vars: 4, consts: [["id", "Blog", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "Blog"], ["id", "Conteudo", 1, "container", "py-5"], [1, "row", "justify-content-center"], [1, "col-md-9"], ["class", "message", 3, "innerHtml", 4, "ngIf"], [1, "row", "no-gutters"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "mt-4", "mb-3"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", 3, "pageChange", "pageBoundsCorrection"], [1, "col", "md-3"], [1, "message", 3, "innerHtml"], [1, "col-md-6", "col-lg-4"], [1, "item", "m-2", "rounded"], [3, "routerLink"], ["LazyLoad", "", "alt", "", 1, "w-100", "rounded-top", 3, "src"], [1, "item-body"], [1, "date"], ["routerLinkActive", "router-link-active", 1, "text-muted", 3, "routerLink"], [1, "item-footer"], [1, "row", "justify-content-end"], [1, "col-6", "text-center"], [1, "button-condor", "text-muted", 3, "routerLink"]], template: function AllInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllInComponent_section_0_Template, 12, 9, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllInComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _widgets_blog_sidebar_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["BlogSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_7__["SemDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --color-default--text: #444444;\n  --color-default--background: #f2faff;\n  --color-default--background-2: #a7a7a7;\n  --color-blue-primary: #447ab3;\n  --color-blue-secondary: #2e65a5;\n  --color-blue-tertiary: #1e73be;\n  --color-red-primary: #f44336;\n  --color-red-secondary: #940505dc;\n  --color-white: #fff;\n  --product-background: #fff;\n  --product-mas18: rgb(131, 0, 0);\n  --product-kit: rgb(19, 54, 130);\n  --product-text: #414141;\n  --product-color-text-mas18: #fff;\n  --product-color-text-kit: #fff;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  text-transform: capitalize !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  transition: transform 0.2s;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  min-height: 310px;\n}\n\n.item[_ngcontent-%COMP%]   .text-blog[_ngcontent-%COMP%] {\n  color: #940505dc;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  letter-spacing: 0.2px;\n  color: #940505dc;\n  font-weight: 600;\n  font-size: 0.7rem;\n  margin-bottom: 0 !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #940505dc;\n}\n\n.item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .bag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin: 0 0.2rem;\n  cursor: pointer;\n}\n\n.item[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 0.5rem;\n  padding: 0.5rem;\n}\n\n.item[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%]   .button-condor[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  text-align: center;\n  color: #505050;\n  font-size: 0.8rem;\n  width: 100%;\n  font-weight: 700;\n}\n\n.item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.15);\n}\n\n@media (max-width: 450px) {\n  .item[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9AcGFnZXMvYmxvZy9hbGwtaW4vYWxsLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBRUEsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsNEJBQUE7RUFDQSxnQ0FBQTtFQUdBLG1CQUFBO0VBR0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDTEY7O0FBYkE7RUFDSSxpQkFBQTtFQUNBLHFDQUFBO0FBZ0JKOztBQWJBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1GQUFBO0VBQ0EsaUJBQUE7QUFnQko7O0FBZkk7RUFBYSxnQkQ4REg7QUM1Q2Q7O0FBakJJO0VBQ0ksb0JBQUE7QUFtQlI7O0FBbEJRO0VBQ0kscUJBQUE7RUFDQSxnQkR5REU7RUN4REYsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FBb0JaOztBQWxCUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFvQlo7O0FBbEJZO0VBQ0ksZ0NBQUE7QUFvQmhCOztBQW5CZ0I7RUFDSSxnQkQ2Q047QUN4QmQ7O0FBaEJZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFrQmhCOztBQWRJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFnQlI7O0FBZlE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBaUJaOztBQWRJO0VBQ0ksc0JBQUE7RUFDQSxtRkFBQTtBQWdCUjs7QUFaQTtFQUNJO0lBQ0ksWUFBQTtFQWVOOztFQWJFO0lBQ0ksNEJBQUE7SUFDQSw2QkFBQTtFQWdCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQHBhZ2VzL2Jsb2cvYWxsLWluL2FsbC1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1jb2xvci1kZWZhdWx0LS10ZXh0OiAjNDQ0NDQ0O1xuICAtLWNvbG9yLWRlZmF1bHQtLWJhY2tncm91bmQ6ICNmMmZhZmY7XG4gIC0tY29sb3ItZGVmYXVsdC0tYmFja2dyb3VuZC0yOiAjYTdhN2E3O1xuXG4gIC0tY29sb3ItYmx1ZS1wcmltYXJ5OiAjNDQ3YWIzO1xuICAtLWNvbG9yLWJsdWUtc2Vjb25kYXJ5OiAjMmU2NWE1O1xuICAtLWNvbG9yLWJsdWUtdGVydGlhcnk6ICMxZTczYmU7XG5cbiAgLS1jb2xvci1yZWQtcHJpbWFyeTogI2Y0NDMzNjtcbiAgLS1jb2xvci1yZWQtc2Vjb25kYXJ5OiAjOTQwNTA1ZGM7XG4gIC8vIC0tY29sb3ItcmVkLXRlcnRpYXJ5OiAjMWU3M2JlO1xuXG4gIC0tY29sb3Itd2hpdGU6ICNmZmY7XG5cbiAgLy8gQ2FyZCBkbyBQcm9kdXRvXG4gIC0tcHJvZHVjdC1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLXByb2R1Y3QtbWFzMTg6IHJnYigxMzEsIDAsIDApO1xuICAtLXByb2R1Y3Qta2l0OiByZ2IoMTksIDU0LCAxMzApO1xuICAtLXByb2R1Y3QtdGV4dDogIzQxNDE0MTtcbiAgLS1wcm9kdWN0LWNvbG9yLXRleHQtbWFzMTg6ICNmZmY7XG4gIC0tcHJvZHVjdC1jb2xvci10ZXh0LWtpdDogI2ZmZjtcblxuICAvLy8vLy8vLy8vLy8vXG4kY29yLWRlZmF1bHQtYmFja2dyb3VuZDogI2YyZmFmZjtcbiRjb3ItZGVmYXVsdC10ZXh0OiAjNDQ0O1xuJGNvci1mb290ZXItYmFja2dyb3VuZDogIzQ0N2FiMztcbi8vLy8vLy8vLy8vLy9cblxuLy8gQmxhY2sgRnJpZGF5XG4vLyAkYmx1ZTogIzE4MTgxODtcbi8vICRyZWQ6ICNmZjgzMDA7XG4vLyAkYmx1ZS1hbHBoYTogIzIxMjEyMTtcbi8vICRjb3ItZm9vdGVyLWJhY2tncm91bmQ6ICMxODE4MTg7XG4vLyAkZnVuZG9Qcm9kdXRvOiAjMDAwMDAwZDk7XG5cblxuXG4kYmx1ZTogIzQ0N2FiMztcbiRibHVlLWFscGhhOiAjMmU2NWE1O1xuJHJlZDogI2Y0NDMzNiA7XG4kZnVuZG9Qcm9kdXRvOiBub25lO1xuJGJsdWUtYmV0YTogIzFlNzNiZTtcbiRyZWQtYWxwaGE6ICM5NDA1MDVkYztcbiRjb2xvclByb2R1dG86ICMwMDA7XG5cbi8vIG1ldGhvZHNcbkBtaXhpbiBmb250LVdlaWdodCgkbnVtKSB7IGZvbnQtd2VpZ2h0OiAkbnVtICFpbXBvcnRhbnQ7IH1cbkBtaXhpbiBmb250LVNpemUoJG51bSkgeyBmb250LXNpemU6ICRudW0gIWltcG9ydGFudDsgfVxuQG1peGluIGJhY2tHcm91bmQoJGNvbG9yKSB7IGJhY2tncm91bmQ6ICRjb2xvciAhaW1wb3J0YW50OyB9XG5cbn1cblxuXG5cbiAgLy8vLy8vLy8vLy8vL1xuICAkY29yLWRlZmF1bHQtYmFja2dyb3VuZDogI2YyZmFmZjtcbiAgJGNvci1kZWZhdWx0LXRleHQ6ICM0NDQ7XG4gICRjb3ItZm9vdGVyLWJhY2tncm91bmQ6ICM0NDdhYjM7XG4gIC8vLy8vLy8vLy8vLy9cblxuICAvLyBCbGFjayBGcmlkYXlcbiAgLy8gJGJsdWU6ICMxODE4MTg7XG4gIC8vICRyZWQ6ICNmZjgzMDA7XG4gIC8vICRibHVlLWFscGhhOiAjMjEyMTIxO1xuICAvLyAkY29yLWZvb3Rlci1iYWNrZ3JvdW5kOiAjMTgxODE4O1xuICAvLyAkZnVuZG9Qcm9kdXRvOiAjMDAwMDAwZDk7XG5cblxuXG4gICRibHVlOiAjNDQ3YWIzO1xuICAkYmx1ZS1hbHBoYTogIzJlNjVhNTtcbiAgJHJlZDogI2Y0NDMzNiA7XG4gICRmdW5kb1Byb2R1dG86IG5vbmU7XG4gICRibHVlLWJldGE6ICMxZTczYmU7XG4gICRyZWQtYWxwaGE6ICM5NDA1MDVkYztcbiAgJGNvbG9yUHJvZHV0bzogIzAwMDtcblxuICAvLyBtZXRob2RzXG4gIEBtaXhpbiBmb250LVdlaWdodCgkbnVtKSB7IGZvbnQtd2VpZ2h0OiAkbnVtICFpbXBvcnRhbnQ7IH1cbiAgQG1peGluIGZvbnQtU2l6ZSgkbnVtKSB7IGZvbnQtc2l6ZTogJG51bSAhaW1wb3J0YW50OyB9XG4gIEBtaXhpbiBiYWNrR3JvdW5kKCRjb2xvcikgeyBiYWNrZ3JvdW5kOiAkY29sb3IgIWltcG9ydGFudDsgfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGUuc2Nzcyc7XG5cblxuLm1lc3NhZ2V7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLDAsMCwuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgICBtaW4taGVpZ2h0OiAzMTBweDtcbiAgICAudGV4dC1ibG9nIHsgY29sb3I6ICRyZWQtYWxwaGEgfVxuICAgIC5pdGVtLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xuICAgICAgICAuZGF0ZXtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMnB4O1xuICAgICAgICAgICAgY29sb3I6ICRyZWQtYWxwaGE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQtYWxwaGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pdGVtLXRhZ3N7XG4gICAgICAgICAgICAuYmFnIHsgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzByZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4ycmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbS1mb290ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgLmJ1dHRvbi1jb25kb3Ige1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzUwNTA1MDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLDAsMCwuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLml0ZW17XG4gICAgICAgIGhlaWdodDogYXV0bzs7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-in',
                templateUrl: './all-in.component.html',
                styleUrls: ['./all-in.component.scss']
            }]
    }], function () { return [{ type: _core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "jigu":
/*!**************************************************************!*\
  !*** ./src/app/@widgets/blog-sidebar/blog-sidebar.module.ts ***!
  \**************************************************************/
/*! exports provided: BlogSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSidebarModule", function() { return BlogSidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _blog_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-sidebar.component */ "kdH9");






class BlogSidebarModule {
}
BlogSidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogSidebarModule });
BlogSidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogSidebarModule_Factory(t) { return new (t || BlogSidebarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogSidebarModule, { declarations: [_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["BlogSidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["BlogSidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogSidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["BlogSidebarComponent"]],
                exports: [_blog_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["BlogSidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kdH9":
/*!*****************************************************************!*\
  !*** ./src/app/@widgets/blog-sidebar/blog-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSidebarComponent", function() { return BlogSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/news.service */ "Dzqi");
/* harmony import */ var _core_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/util.service */ "8YIC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






const _c0 = function (a2) { return ["/blog", "categoria", a2]; };
function BlogSidebarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, c_r1.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", c_r1.name, " (", c_r1.count, ") ");
} }
class BlogSidebarComponent {
    constructor(router, news, util) {
        this.router = router;
        this.news = news;
        this.util = util;
        this.category = [];
    }
    ngOnInit() {
        this.Category();
    }
    Category() {
        const query = 'categories?orderby=count&order=desc&per_page=10';
        this.news.getBlogCollection(query).subscribe(res => this.category = res.body);
    }
    onSearch(ev) {
        if (ev.keyCode === 13) {
            return this.router.navigate(['blog', 'search', this.util.toSlug(ev.target.value)]);
        }
    }
}
BlogSidebarComponent.ɵfac = function BlogSidebarComponent_Factory(t) { return new (t || BlogSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
BlogSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogSidebarComponent, selectors: [["app-blog-sidebar"]], decls: 13, vars: 1, consts: [[1, "mb-5"], [1, "search", "mb-5"], [1, "titulo"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "keyup"], [1, "categories"], [1, "nav", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "fas", "fa-tag", "mr-1", "text-muted"]], template: function BlogSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Busca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BlogSidebarComponent_Template_input_keyup_6_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BlogSidebarComponent_li_12_Template, 4, 5, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".titulo[_ngcontent-%COMP%] {\n  padding-bottom: 0rem;\n  margin-bottom: 0.75rem;\n  border-bottom: 1px solid #e2e2e2;\n}\n.titulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-weight: 700;\n}\n.categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-height: 50px;\n}\n.categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvYmxvZy1zaWRlYmFyL2Jsb2ctc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFJSTtFQUNFLGdCQUFBO0FBRE47QUFFTTtFQUNFLGlCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9Ad2lkZ2V0cy9ibG9nLXNpZGViYXIvYmxvZy1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuXG4uY2F0ZWdvcmllcyB7XG4gIHVse1xuICAgIGxpe1xuICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-sidebar',
                templateUrl: './blog-sidebar.component.html',
                styleUrls: ['./blog-sidebar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }, { type: _core_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "obdu":
/*!********************************************************!*\
  !*** ./src/app/@widgets/blog-list/blog-list.module.ts ***!
  \********************************************************/
/*! exports provided: BlogListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListModule", function() { return BlogListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _blog_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-list.component */ "Liay");






class BlogListModule {
}
BlogListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogListModule });
BlogListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogListModule_Factory(t) { return new (t || BlogListModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogListModule, { declarations: [_blog_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogListComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"]], exports: [_blog_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_blog_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogListComponent"]],
                exports: [_blog_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogListComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qpqo":
/*!***************************************************************!*\
  !*** ./src/app/@widgets/blog-slider/blog-slider.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogSliderComponent", function() { return BlogSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _core_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/blog.service */ "7+xk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ "3II9");








function BlogSliderComponent_div_0_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogSliderComponent_div_0_5_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onBlogId(item_r4.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.large, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, item_r4.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);
} }
function BlogSliderComponent_div_0_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogSliderComponent_div_0_5_ng_template_0_Template, 9, 7, "ng-template", 10);
} }
function BlogSliderComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogSliderComponent_div_0_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onBlogId(item_r10.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r10.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r10.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, item_r10.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.title);
} }
function BlogSliderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "swiper", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("slideChange", function BlogSliderComponent_div_0_Template_swiper_slideChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSlideChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogSliderComponent_div_0_5_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BlogSliderComponent_div_0_div_8_Template, 10, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1)("ngForTrackBy", ctx_r0.trackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx_r0.items$));
} }
swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_2__["EffectFade"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["Autoplay"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["A11y"], swiper_core__WEBPACK_IMPORTED_MODULE_2__["Lazy"]]);
class BlogSliderComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.slide = 0;
        this.options = {
            loop: true,
            lazy: true,
            speed: 1000,
            freemode: true,
            navigation: true,
            autoplay: { delay: 2000 },
            pagination: { clickable: true },
            fadeEffect: { crossFade: true },
        };
        this.onSlideChange = (ev) => this.slide = ev.realIndex;
        this.trackByFunction = (index, item) => item[index];
        this.onBlogId = (slug) => this.router.navigateByUrl(`/blog/${slug}`);
    }
    ngOnInit() {
        this.items$ = this.db.getPosts(1, 4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.body));
    }
}
BlogSliderComponent.ɵfac = function BlogSliderComponent_Factory(t) { return new (t || BlogSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
BlogSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogSliderComponent, selectors: [["app-blog-slider"]], decls: 2, vars: 3, consts: [["class", "sliders", 4, "ngIf"], [1, "sliders"], [1, "row", "no-gutters"], [1, "col-md-7", "col-lg-8"], [1, "cards"], ["effect", "fade", 3, "config", "slideChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-md-5", "col-lg-4", "align-self-center"], [1, "list"], ["class", "line", 3, "click", 4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "banner", 3, "click"], [1, "img-fluid", 3, "src", "alt"], [1, "content"], [1, "date"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "line", 3, "click"], [1, "image"], [1, "w-100", 3, "src", "alt"], [1, "title"]], template: function BlogSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogSliderComponent_div_0_Template, 10, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.items$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperSlideDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".cards {\n  padding: 5px;\n  border-radius: 10px;\n}\n.cards .banner {\n  cursor: pointer;\n  position: relative;\n}\n.cards .banner img {\n  border-radius: 10px;\n}\n.cards .banner .content {\n  width: 100%;\n  height: 100px;\n  padding: 1rem;\n  border-radius: 0 0 10px 10px;\n  position: absolute;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.45);\n}\n.cards .banner .content .date {\n  font-size: 0.7rem;\n  color: #fafafa !important;\n  margin-bottom: 0px;\n}\n.cards .banner .content h2 {\n  font-size: 1.5rem;\n  color: #fff;\n  font-weight: 700;\n  margin-bottom: 0px;\n}\n.shadow {\n  background-color: var(--color-red-primary) !important;\n  border-radius: 5px;\n  color: #fafafa !important;\n}\n.shadow .date {\n  color: #fafafa !important;\n}\n.list {\n  margin: 0 0.5rem;\n}\n.list .line {\n  cursor: pointer;\n  flex: row;\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 0.5rem;\n}\n.list .line:last-child {\n  border-bottom: 0px solid #e2e2e2;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n.list .line .image {\n  width: 20%;\n}\n.list .line .image img {\n  border-radius: 10px;\n}\n.list .line .content {\n  width: 80%;\n  padding-left: 0.5rem;\n}\n.list .line .content .date {\n  font-size: 0.8rem;\n  margin-bottom: 0.15rem;\n  color: #686868;\n}\n.list .line .content .title {\n  margin-bottom: 0;\n  font-size: 1rem;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvYmxvZy1zbGlkZXIvYmxvZy1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLG1CQUFBO0FBR047QUFESTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7QUFHTjtBQUZNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSVI7QUFGTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQUVBO0VBQ0UscURBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFBRTtFQUNFLHlCQUFBO0FBRUo7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7QUFFSjtBQURJO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR047QUFESTtFQUNFLFVBQUE7QUFHTjtBQUZNO0VBQ0UsbUJBQUE7QUFJUjtBQURJO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBR047QUFGTTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBSVI7QUFGTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSVIiLCJmaWxlIjoic3JjL2FwcC9Ad2lkZ2V0cy9ibG9nLXNsaWRlci9ibG9nLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLmJhbm5lciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAuNDUpO1xuICAgICAgLmRhdGUge1xuICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICBjb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2hhZG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcbiAgLmRhdGV7XG4gICAgY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubGlzdCB7XG4gIG1hcmdpbjogMCAuNXJlbTtcbiAgLmxpbmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbGV4OiByb3c7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2UyZTJlMjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIC5pbWFnZSB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgaW1ne1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgIC5kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjE1cmVtO1xuICAgICAgICBjb2xvcjogIzY4Njg2ODtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-slider',
                templateUrl: './blog-slider.component.html',
                styleUrls: ['./blog-slider.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _core_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "u8Zm":
/*!************************************************************!*\
  !*** ./src/app/@widgets/blog-latest/blog-latest.module.ts ***!
  \************************************************************/
/*! exports provided: BlogLatestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLatestModule", function() { return BlogLatestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "QHOK");
/* harmony import */ var _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sharing/sem-data/sem-data.module */ "FCmR");
/* harmony import */ var _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/directives/directive.module */ "YfWO");
/* harmony import */ var _blog_latest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-latest.component */ "zpdq");








class BlogLatestModule {
}
BlogLatestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogLatestModule });
BlogLatestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogLatestModule_Factory(t) { return new (t || BlogLatestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_4__["SemDataModule"],
            _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__["DirectiveModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogLatestModule, { declarations: [_blog_latest_component__WEBPACK_IMPORTED_MODULE_6__["BlogLatestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_4__["SemDataModule"],
        _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__["DirectiveModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"]], exports: [_blog_latest_component__WEBPACK_IMPORTED_MODULE_6__["BlogLatestComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogLatestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_blog_latest_component__WEBPACK_IMPORTED_MODULE_6__["BlogLatestComponent"]],
                exports: [_blog_latest_component__WEBPACK_IMPORTED_MODULE_6__["BlogLatestComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sharing_sem_data_sem_data_module__WEBPACK_IMPORTED_MODULE_4__["SemDataModule"],
                    _core_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__["DirectiveModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zpdq":
/*!***************************************************************!*\
  !*** ./src/app/@widgets/blog-latest/blog-latest.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogLatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLatestComponent", function() { return BlogLatestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/blog.service */ "7+xk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var _core_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/directives/lazy-load.directive */ "E5c8");
/* harmony import */ var _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@sharing/sem-data/sem-data.component */ "q3cj");









function BlogLatestComponent_section_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogLatestComponent_section_0_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onBlogId(item_r5.slug); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.column);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.large, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r5.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, item_r5.date, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function BlogLatestComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogLatestComponent_section_0_div_5_Template, 11, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function BlogLatestComponent_section_0_Template_pagination_controls_pageChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.pageChanged($event); })("pageBoundsCorrection", function BlogLatestComponent_section_0_Template_pagination_controls_pageBoundsCorrection_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, items_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, ctx_r0.itemsPerPage, ctx_r0.currentPage, ctx_r0.totalItem)));
} }
function BlogLatestComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sem-data", 16);
} }
class BlogLatestComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.titulo = '';
        this.column = 'col-md-6';
        this.itemsPerPage = 6;
        this.currentPage = 1;
        this.totalItem = 0;
        this.pageChanged = (ev) => {
            this.currentPage = ev++;
            this.items$ = this.db.getPosts(this.currentPage, this.itemsPerPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.body));
            console.log(this.currentPage);
        };
        this.onBlogId = (slug) => this.router.navigateByUrl(`/blog/${slug}`);
    }
    ngOnInit() {
        this.items$ = this.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => this.totalItem = res.headers.keys().map(key => res.headers.get(key))[4]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => res.body));
    }
}
BlogLatestComponent.ɵfac = function BlogLatestComponent_Factory(t) { return new (t || BlogLatestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BlogLatestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogLatestComponent, selectors: [["app-blog-latest"]], inputs: { data: "data", titulo: "titulo", column: "column" }, decls: 4, vars: 4, consts: [["id", "latest", 4, "ngIf", "ngIfElse"], ["semData", ""], ["id", "latest"], [1, "titulo"], [1, "row", "no-gutters"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mt-4", "mb-3"], ["previousLabel", "Anterior", "nextLabel", "Pr\u00F3ximo", "responsive", "true", 1, "animated", "fade", "text-center", 3, "pageChange", "pageBoundsCorrection"], [3, "ngClass"], [1, "cards", "px-1", 3, "click"], [1, "image"], ["LazyLoad", "", 1, "w-100", 3, "src", "alt"], [1, "content"], [1, "date"], [1, "far", "fa-calendar-alt", "mr-1"], [1, "title"], ["height", "40vh"]], template: function BlogLatestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogLatestComponent_section_0_Template, 9, 9, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlogLatestComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.items$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _core_directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_6__["LazyLoadDirective"], _sharing_sem_data_sem_data_component__WEBPACK_IMPORTED_MODULE_7__["SemDataComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".titulo[_ngcontent-%COMP%] {\n  padding-bottom: 0rem;\n  margin-bottom: 0.75rem;\n  border-bottom: 1px solid #e2e2e2;\n}\n.titulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-weight: 700;\n}\n.cards[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cards[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.cards[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 130px;\n}\n.cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin-bottom: 0.15rem;\n  color: #686868;\n}\n.cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHdpZGdldHMvYmxvZy1sYXRlc3QvYmxvZy1sYXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUVKO0FBRUE7RUFDRSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFESTtFQUNFLG1CQUFBO0FBR047QUFBRTtFQUNFLGFBQUE7QUFFSjtBQURJO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFHTjtBQURJO0VBQ0UsaUJBQUE7QUFHTiIsImZpbGUiOiJzcmMvYXBwL0B3aWRnZXRzL2Jsb2ctbGF0ZXN0L2Jsb2ctbGF0ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuXG4uY2FyZHMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC5pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBpbWd7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfVxuICAuY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICAuZGF0ZSB7XG4gICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjE1cmVtO1xuICAgICAgY29sb3I6ICM2ODY4Njg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogLatestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-latest',
                templateUrl: './blog-latest.component.html',
                styleUrls: ['./blog-latest.component.scss']
            }]
    }], function () { return [{ type: _core_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-blog-blog-module.js.map