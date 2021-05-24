import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
let BlogListComponent = class BlogListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.type = 'list';
        this.titulo = 'list';
        this.onBlogId = (slug) => this.router.navigateByUrl(`/blog/${slug}`);
    }
    ngOnInit() {
        if (this.categoria) {
            this.items$ = this.db.getPostsCategories(this.categoria, 5).pipe(map((res) => res.body));
        }
        else {
            this.items$ = this.db.getPostsTags(this.tag, 5).pipe(map((res) => res.body));
        }
    }
};
__decorate([
    Input()
], BlogListComponent.prototype, "tag", void 0);
__decorate([
    Input()
], BlogListComponent.prototype, "type", void 0);
__decorate([
    Input()
], BlogListComponent.prototype, "categoria", void 0);
__decorate([
    Input()
], BlogListComponent.prototype, "titulo", void 0);
BlogListComponent = __decorate([
    Component({
        selector: 'app-blog-list',
        templateUrl: './blog-list.component.html',
        styleUrls: ['./blog-list.component.scss']
    })
], BlogListComponent);
export { BlogListComponent };
//# sourceMappingURL=blog-list.component.js.map