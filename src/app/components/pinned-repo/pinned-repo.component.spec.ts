/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinnedRepoComponent } from './pinned-repo.component';

describe('PinnedRepoComponent', () => {
  let component: PinnedRepoComponent;
  let fixture: ComponentFixture<PinnedRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
