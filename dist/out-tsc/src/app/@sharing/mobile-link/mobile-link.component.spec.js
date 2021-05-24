import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { MobileLinkComponent } from './mobile-link.component';
describe('MobileLinkComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [MobileLinkComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MobileLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mobile-link.component.spec.js.map