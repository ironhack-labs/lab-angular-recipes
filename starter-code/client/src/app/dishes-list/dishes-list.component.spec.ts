/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DishesListComponent } from './dishes-list.component';

describe('DishesListComponent', () => {
  let component: DishesListComponent;
  let fixture: ComponentFixture<DishesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
