/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetElementComponent } from './getElement.component';

describe('GetElementComponent', () => {
  let component: GetElementComponent;
  let fixture: ComponentFixture<GetElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
