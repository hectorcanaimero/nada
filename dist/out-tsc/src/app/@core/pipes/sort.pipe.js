import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SortPipe {
    transform(array, field) {
        if (!Array.isArray(array)) {
            return;
        }
        array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "sort", type: SortPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortPipe, [{
        type: Pipe,
        args: [{
                name: 'sort'
            }]
    }], null, null); })();
//# sourceMappingURL=sort.pipe.js.map