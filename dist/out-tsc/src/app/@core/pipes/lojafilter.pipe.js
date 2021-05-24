import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let LojafilterPipe = class LojafilterPipe {
    transform(items, search) {
        if (!items) {
            return [];
        }
        if (!search) {
            return items;
        }
        return items.filter(item => {
            if (item && item['ofertas']['loja']) {
                return item['ofertas']['loja'] === search;
            }
            return false;
        });
    }
};
LojafilterPipe = __decorate([
    Pipe({
        name: 'lojafilter'
    })
], LojafilterPipe);
export { LojafilterPipe };
//# sourceMappingURL=lojafilter.pipe.js.map