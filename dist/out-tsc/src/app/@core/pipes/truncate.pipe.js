import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let TruncatePipe = class TruncatePipe {
    transform(value, limit = 35, completeWords = false, ellipsis = '...') {
        value = `${value}`;
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
        }
        return (value === null || value === void 0 ? void 0 : value.length) > limit ? value.substr(0, limit) + ellipsis : value;
    }
};
TruncatePipe = __decorate([
    Pipe({
        name: 'truncate'
    })
], TruncatePipe);
export { TruncatePipe };
//# sourceMappingURL=truncate.pipe.js.map