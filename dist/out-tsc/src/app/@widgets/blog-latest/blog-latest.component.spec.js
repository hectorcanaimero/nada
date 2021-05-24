import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { BlogLatestComponent } from './blog-latest.component';
describe('BlogLatestComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [BlogLatestComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BlogLatestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=blog-latest.component.spec.js.map