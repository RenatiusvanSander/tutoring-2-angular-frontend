import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalInstitutionsComponent } from './educational-institutions.component';

describe('EducationalInstitutionsComponent', () => {
  let component: EducationalInstitutionsComponent;
  let fixture: ComponentFixture<EducationalInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationalInstitutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
