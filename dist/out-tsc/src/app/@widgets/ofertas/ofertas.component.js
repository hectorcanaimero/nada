import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { timer } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import SwiperCore, { EffectFade, Navigation, Pagination, A11y, Lazy } from "swiper/core";
SwiperCore.use([EffectFade, Navigation, Pagination, A11y, Lazy]);
let OfertasComponent = class OfertasComponent {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        // titulo
        this.icon = '';
        this.link = '';
        this.title = '';
        this.loja = [];
        this.total = 0;
        this.options = {
            freeMode: true,
            spaceBetween: 15,
            grabCursor: true,
            slidesPerView: 1.5,
            type: 'progressbar',
            loop: true,
            autoplay: { delay: 1800 },
            breakpoints: {
                360: { slidesPerView: 2 },
                768: { slidesPerView: 3.5 },
                1024: { slidesPerView: 4.5 },
                1200: { slidesPerView: 5 },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        this.getOfertas = (code) => {
            let result = [];
            this.items$ = this.db.getOfertas$().pipe(map((res) => {
                if (this.type === 'slug')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.slug === code));
                else if (this.type === 'campanha')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.campanha === code));
                else if (this.type === 'departamento')
                    result = res === null || res === void 0 ? void 0 : res.filter((row => row.departamento === code));
                return result === null || result === void 0 ? void 0 : result.slice(0, 15);
            }), tap((res) => this.total = res.length));
        };
    }
    ngOnInit() {
        timer(300).subscribe(() => {
            this.getOfertas(this.code);
            this.storage.get('Loja').subscribe((res) => this.loja = res);
        });
    }
};
__decorate([
    Input()
], OfertasComponent.prototype, "icon", void 0);
__decorate([
    Input()
], OfertasComponent.prototype, "link", void 0);
__decorate([
    Input()
], OfertasComponent.prototype, "title", void 0);
__decorate([
    Input()
], OfertasComponent.prototype, "code", void 0);
__decorate([
    Input()
], OfertasComponent.prototype, "type", void 0);
__decorate([
    Input()
], OfertasComponent.prototype, "sector", void 0);
OfertasComponent = __decorate([
    Component({
        selector: 'app-widget-ofertas',
        templateUrl: './ofertas.component.html',
        styleUrls: ['./ofertas.component.scss'],
    })
], OfertasComponent);
export { OfertasComponent };
//# sourceMappingURL=ofertas.component.js.map