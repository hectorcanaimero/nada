import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BlogSidebarComponent = class BlogSidebarComponent {
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
};
BlogSidebarComponent = __decorate([
    Component({
        selector: 'app-blog-sidebar',
        templateUrl: './blog-sidebar.component.html',
        styleUrls: ['./blog-sidebar.component.scss']
    })
], BlogSidebarComponent);
export { BlogSidebarComponent };
//# sourceMappingURL=blog-sidebar.component.js.map