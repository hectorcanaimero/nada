import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
let CarouselComponent = class CarouselComponent {
    constructor(news) {
        this.news = news;
    }
    ngOnInit() {
        this.data$ = this.news.getBanners$().pipe(map((res) => {
            return {
                left: res === null || res === void 0 ? void 0 : res.filter(row => row.position.includes('top-left')),
                right: res === null || res === void 0 ? void 0 : res.filter(row => row.position.includes('top-right')),
            };
        }));
    }
};
CarouselComponent = __decorate([
    Component({
        selector: 'app-carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.scss']
    })
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map