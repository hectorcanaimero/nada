import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { timer } from 'rxjs';
let BlogLatestComponent = class BlogLatestComponent {
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
            this.items$ = this.db.getPosts(this.currentPage, this.itemsPerPage).pipe(map((res) => res.body));
            console.log(this.currentPage);
        };
        this.onBlogId = (slug) => this.router.navigateByUrl(`/blog/${slug}`);
    }
    ngOnInit() {
        timer(300).subscribe(() => {
            this.items$ = this.data.pipe(tap((res) => this.totalItem = res.headers.keys().map(key => res.headers.get(key))[4]), map((res) => res.body));
        });
    }
};
__decorate([
    Input()
], BlogLatestComponent.prototype, "data", void 0);
__decorate([
    Input()
], BlogLatestComponent.prototype, "titulo", void 0);
__decorate([
    Input()
], BlogLatestComponent.prototype, "column", void 0);
BlogLatestComponent = __decorate([
    Component({
        selector: 'app-blog-latest',
        templateUrl: './blog-latest.component.html',
        styleUrls: ['./blog-latest.component.scss']
    })
], BlogLatestComponent);
export { BlogLatestComponent };
//# sourceMappingURL=blog-latest.component.js.map