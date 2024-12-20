import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendStatusComponent } from './frontend-status.component';

describe('FrontendStatusComponent', () => {
  let component: FrontendStatusComponent;
  let fixture: ComponentFixture<FrontendStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontendStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
