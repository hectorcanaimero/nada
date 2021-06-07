import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class FiltroPipe {
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
}
FiltroPipe.ɵfac = function FiltroPipe_Factory(t) { return new (t || FiltroPipe)(); };
FiltroPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "filtro", type: FiltroPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FiltroPipe, [{
        type: Pipe,
        args: [{
                name: 'filtro'
            }]
    }], null, null); })();
//# sourceMappingURL=filtro.pipe.js.map