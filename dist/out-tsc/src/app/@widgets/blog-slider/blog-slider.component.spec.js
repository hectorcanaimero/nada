import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { BlogSliderComponent } from './blog-slider.component';
describe('BlogSliderComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [BlogSliderComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BlogSliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=blog-slider.component.spec.js.map