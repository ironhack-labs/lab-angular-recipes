import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShohDishesComponent } from './shoh-dishes.component';

describe('ShohDishesComponent', () => {
  let component: ShohDishesComponent;
  let fixture: ComponentFixture<ShohDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShohDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShohDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
