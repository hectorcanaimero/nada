import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { delay, map } from 'rxjs/operators';
let DetailComponent = class DetailComponent {
    constructor(db, seo, act) {
        this.db = db;
        this.seo = seo;
        this.act = act;
        this.getPost = (slug) => {
            this.items$ = this.db.getPostSlug(slug).pipe(delay(1000));
        };
        this.getSeo = (item) => {
            this.seo.updateTags({ title: item.title, description: item.content, image: item.medium });
            this.seo.addCanonical();
            this.seo.dataLayerPage(item.title);
        };
    }
    ngOnInit() {
        this.slug$ = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('slug')));
        this.slug$.subscribe(data => this.getPost(data));
    }
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