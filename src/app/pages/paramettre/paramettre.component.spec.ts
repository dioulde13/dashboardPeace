import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamettreComponent } from './paramettre.component';

describe('ParamettreComponent', () => {
  let component: ParamettreComponent;
  let fixture: ComponentFixture<ParamettreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParamettreComponent]
    });
    fixture = TestBed.createComponent(ParamettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
