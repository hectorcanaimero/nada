import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(router, util) {
        this.router = router;
        this.util = util;
        this.items = [];
        this.keyword = 'loja';
        this.loja = [];
        this.getSearch = (event) => {
            if (event.keyCode === 13)
                this.router.navigate(['pesquisa-usuario', this.util.toSlug(event.target.value)]);
        };
        this.trackByFunction = (index, item) => item[index];
    }
    ngOnInit() {
        this.loja = this.util.StorageParse('Loja');
    }
};
__decorate([
    Input()
], HeaderComponent.prototype, "items", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map