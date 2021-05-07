import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemDataComponent } from './sem-data.component';

describe('SemDataComponent', () => {
  let component: SemDataComponent;
  let fixture: ComponentFixture<SemDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
