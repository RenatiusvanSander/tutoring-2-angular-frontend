import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablesPracesComponent } from './availables-praces.component';

describe('AvailablesPracesComponent', () => {
  let component: AvailablesPracesComponent;
  let fixture: ComponentFixture<AvailablesPracesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailablesPracesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablesPracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
