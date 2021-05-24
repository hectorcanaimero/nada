import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, tap } from 'rxjs/operators';
let AllInComponent = class AllInComponent {
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
        this.process = (type, slug, page) => {
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
                this.items$ = this.db.getPostsCategories(type.id, this.itemsPerPage).pipe(tap((res) => this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4]), map((res) => res.body));
            });
        };
        this.getTags = (slug, page) => {
            this.db.getTagSlug(slug).subscribe((type) => {
                this.type = type;
                this.titulo = `Etiqueta: ${type.name}`;
                this.items$ = this.db.getPostsTags(type.id, this.itemsPerPage).pipe(tap((res) => this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4]), map((res) => res.body));
            });
        };
        this.pageChanged = (ev) => {
            this.currentPage = ev++;
            this.process(this.id, this.slug, this.currentPage);
        };
    }
    ngOnInit() {
        this.first$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('first')));
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.first$.subscribe(type => this.slug$.subscribe(slug => this.process(type, slug)));
    }
    getSearch(slug, page) {
        const text = slug.split('-').join('%20');
        this.items$ = this.db.getPostSearch(text, page).pipe(tap((res) => {
            this.totalItems = res.headers.keys().map(key => res.headers.get(key))[4];
            this.titulo = `Resultado da busca por <b>"${slug}"</b> (${this.totalItems})`;
        }), map((res) => res.body));
    }
};
AllInComponent = __decorate([
    Component({
        selector: 'app-all-in',
        templateUrl: './all-in.component.html',
        styleUrls: ['./all-in.component.scss']
    })
], AllInComponent);
export { AllInComponent };
//# sourceMappingURL=all-in.component.js.map