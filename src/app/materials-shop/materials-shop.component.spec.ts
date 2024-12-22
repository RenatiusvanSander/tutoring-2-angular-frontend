import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsShopComponent } from './materials-shop.component';

describe('MaterialsShopComponent', () => {
  let component: MaterialsShopComponent;
  let fixture: ComponentFixture<MaterialsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialsShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
