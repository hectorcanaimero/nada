import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
let NewsComponent = class NewsComponent {
    constructor(seo, news, act) {
        this.seo = seo;
        this.news = news;
        this.act = act;
        this.getPost = (id) => this.items$ = this.news.PageSlug(id).pipe(tap((res) => {
            this.seo.addCanonical();
            this.seo.updateTags({ title: res.title, image: res.medium, description: res.content });
            this.seo.dataLayerPage(res.title);
        }), delay(1000));
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('id')));
        this.slug$.subscribe(data => this.getPost(`${data}`));
    }
};
NewsComponent = __decorate([
    Component({
        selector: 'app-news',
        templateUrl: './news.component.html',
        styleUrls: ['./news.component.scss']
    })
], NewsComponent);
export { NewsComponent };
//# sourceMappingURL=news.component.js.map