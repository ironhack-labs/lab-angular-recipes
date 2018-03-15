import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishBaseComponent } from './dish-base.component';

describe('DishBaseComponent', () => {
  let component: DishBaseComponent;
  let fixture: ComponentFixture<DishBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
