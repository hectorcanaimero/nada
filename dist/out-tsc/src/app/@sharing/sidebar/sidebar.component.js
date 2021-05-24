import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SidebarComponent = class SidebarComponent {
    constructor(news) {
        this.news = news;
        this.trackById = (index, items) => items[index];
    }
    ngOnInit() {
        this.items$ = this.news.PageCollection(`?include[]=97&include[]=104`);
        this.noticias$ = this.news.LastNews(5);
    }
};
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map