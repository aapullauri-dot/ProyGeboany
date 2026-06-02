import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { LoginModal } from './login-modal';

describe('LoginModal', () => {
  let component: LoginModal;
  let fixture: ComponentFixture<LoginModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginModal],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class FormFieldPrefixSuffixExample {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}


