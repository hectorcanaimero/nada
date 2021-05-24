import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SortPipe = class SortPipe {
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
};
SortPipe = __decorate([
    Pipe({
        name: 'sort'
    })
], SortPipe);
export { SortPipe };
//# sourceMappingURL=sort.pipe.js.map