import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDishComponent } from './the-dish.component';

describe('TheDishComponent', () => {
  let component: TheDishComponent;
  let fixture: ComponentFixture<TheDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
