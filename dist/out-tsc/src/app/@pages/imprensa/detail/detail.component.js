import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { tap, map, delay } from 'rxjs/operators';
let DetailComponent = class DetailComponent {
    constructor(seo, news, act) {
        this.seo = seo;
        this.news = news;
        this.act = act;
        this.items$ = [];
        this.getPost = (slug) => {
            this.items$ = this.news.PostSlug(slug).pipe(tap((res) => this.setSeo(res)), delay(1000));
        };
        this.setSeo = (item) => {
            this.seo.updateTags({ title: item.title, description: item.content, image: item.medium });
            this.seo.addCanonical();
            this.seo.dataLayerPage(item.title);
        };
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getPost(data));
    }
    ngOnInit() { }
};
DetailComponent = __decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.component.html',
        styleUrls: ['./detail.component.scss']
    })
], DetailComponent);
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map