/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoiteDialogueConfirmationComponent } from './boite-dialogue-confirmation.component';

describe('BoiteDialogueConfirmationComponent', () => {
  let component: BoiteDialogueConfirmationComponent;
  let fixture: ComponentFixture<BoiteDialogueConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteDialogueConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteDialogueConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
