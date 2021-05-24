import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, tap, delay } from 'rxjs/operators';
let ImprensaComponent = class ImprensaComponent {
    constructor(seo, news) {
        this.seo = seo;
        this.news = news;
        this.p = 1;
        this.ip = 6;
        this.getPost = (page) => {
            this.items$ = this.news.Posts(page, this.ip).pipe(tap((res) => this.header = res === null || res === void 0 ? void 0 : res.headers.keys().map(key => res.headers.get(key))[4]), map((res) => res.body), delay(1000));
        };
        this.pageChanged = (ev) => {
            this.p = ev;
            this.items$ = this.news.Posts(this.p, this.ip).pipe(map((res) => res.body));
        };
    }
    ngOnInit() {
        this.seo.addCanonical();
        this.seo.dataLayerPage('imprensa');
        this.getPost(this.p);
    }
};
ImprensaComponent = __decorate([
    Component({
        selector: 'app-imprensa',
        templateUrl: './imprensa.component.html',
        styleUrls: ['./imprensa.component.scss']
    })
], ImprensaComponent);
export { ImprensaComponent };
//# sourceMappingURL=imprensa.component.js.map