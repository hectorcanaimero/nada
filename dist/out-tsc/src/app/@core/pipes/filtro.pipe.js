import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FiltroPipe = class FiltroPipe {
    transform(items, searchText, fieldName) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = `${searchText}`.toLowerCase();
        return items.filter(item => {
            if (item && item['produtos'][fieldName]) {
                return `${item['produtos'][fieldName]}`.toLowerCase().includes(searchText);
            }
            return false;
        });
    }
};
FiltroPipe = __decorate([
    Pipe({
        name: 'filtro'
    })
], FiltroPipe);
export { FiltroPipe };
//# sourceMappingURL=filtro.pipe.js.map