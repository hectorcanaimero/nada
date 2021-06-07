import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
SafePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SafePipe, [{
        type: Pipe,
        args: [{
                name: 'safe'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
//# sourceMappingURL=safe.pipe.js.map