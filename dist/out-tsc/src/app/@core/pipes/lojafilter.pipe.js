import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class LojafilterPipe {
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
}
LojafilterPipe.ɵfac = function LojafilterPipe_Factory(t) { return new (t || LojafilterPipe)(); };
LojafilterPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "lojafilter", type: LojafilterPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LojafilterPipe, [{
        type: Pipe,
        args: [{
                name: 'lojafilter'
            }]
    }], null, null); })();
//# sourceMappingURL=lojafilter.pipe.js.map