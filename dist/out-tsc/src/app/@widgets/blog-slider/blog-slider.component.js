import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay, A11y, Lazy } from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay, A11y, Lazy]);
let BlogSliderComponent = class BlogSliderComponent {
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
        this.items$ = this.db.getPosts(1, 4).pipe(map((res) => res.body));
    }
};
BlogSliderComponent = __decorate([
    Component({
        selector: 'app-blog-slider',
        templateUrl: './blog-slider.component.html',
        styleUrls: ['./blog-slider.component.scss'],
        encapsulation: ViewEncapsulation.None,
    })
], BlogSliderComponent);
export { BlogSliderComponent };
//# sourceMappingURL=blog-slider.component.js.map