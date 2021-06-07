import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TruncatePipe {
    transform(value, limit = 35, completeWords = false, ellipsis = '...') {
        value = `${value}`;
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
        }
        return (value === null || value === void 0 ? void 0 : value.length) > limit ? value.substr(0, limit) + ellipsis : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TruncatePipe, [{
        type: Pipe,
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();
//# sourceMappingURL=truncate.pipe.js.map