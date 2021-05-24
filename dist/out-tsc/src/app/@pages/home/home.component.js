import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, take, delay } from 'rxjs/operators';
let HomeComponent = class HomeComponent {
    constructor(seo, db, util, news, ch, storageMap) {
        this.seo = seo;
        this.db = db;
        this.util = util;
        this.news = news;
        this.ch = ch;
        this.storageMap = storageMap;
        this.show = true;
        this.ofertasdia = [];
        this.getLoadOfertas = () => {
            this.storageMap.watch('Loja').pipe(take(1)).subscribe((res) => {
                this.db.getOfertas(res['loja']).pipe(take(1)).subscribe();
            });
            this.ch.detectChanges();
        };
    }
    ngOnInit() {
        this.getLoadOfertas();
        this.seo.dataLayerPage('Home');
        this.news.getBanners().pipe(take(1)).subscribe();
        this.data$ = this.util.getStatic$().pipe(map((res) => res[3].data), delay(1500));
    }
    ngAfterViewInit() {
        this.getLoadOfertas();
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss'],
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map