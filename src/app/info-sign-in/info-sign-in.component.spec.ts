import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSignInComponent } from './info-sign-in.component';

describe('InfoSignInComponent', () => {
  let component: InfoSignInComponent;
  let fixture: ComponentFixture<InfoSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoSignInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
