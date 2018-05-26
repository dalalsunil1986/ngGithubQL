/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainCompoComponent } from './main-compo.component';

describe('MainCompoComponent', () => {
  let component: MainCompoComponent;
  let fixture: ComponentFixture<MainCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
