/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StarredRepoComponent } from './starred-repo.component';

describe('StarredRepoComponent', () => {
  let component: StarredRepoComponent;
  let fixture: ComponentFixture<StarredRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
