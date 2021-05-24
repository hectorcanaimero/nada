import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { debounceTime, map, tap } from 'rxjs/operators';
let BannersComponent = class BannersComponent {
    constructor(news) {
        this.news = news;
        this.mobile = [];
    }
    ngOnInit() {
        this.getImage();
    }
    getImage() {
        this.items = this.news.getBanners$().pipe(debounceTime(500), map((res) => {
            return {
                left: res.filter((rows) => rows.position === 'middle-left'),
                center: res.filter((rows) => rows.position === 'middle-center'),
                right: res.filter((rows) => rows.position === 'middle-right')
            };
        }), tap((res) => {
            this.mobile.push(res.left[0]);
            this.mobile.push(res.center[0]);
            this.mobile.push(res.right[0]);
        }));
    }
};
BannersComponent = __decorate([
    Component({
        selector: 'app-banners',
        templateUrl: './banners.component.html',
        styleUrls: ['./banners.component.scss'],
    })
], BannersComponent);
export { BannersComponent };
//# sourceMappingURL=banners.component.js.map