/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneDishComponent } from './oneDish.component';

describe('OneDishComponent', () => {
  let component: OneDishComponent;
  let fixture: ComponentFixture<OneDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
