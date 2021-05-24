import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
let PostComponent = class PostComponent {
    constructor(db) {
        this.db = db;
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.items$ = this.db.Blog(1, 4).pipe(map(res => res.body));
    }
};
PostComponent = __decorate([
    Component({
        selector: 'app-widget-post',
        templateUrl: './post.component.html',
        styleUrls: ['./post.component.scss']
    })
], PostComponent);
export { PostComponent };
//# sourceMappingURL=post.component.js.map