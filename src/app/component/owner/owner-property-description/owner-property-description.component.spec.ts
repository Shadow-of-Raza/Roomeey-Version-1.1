import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPropertyDescriptionComponent } from './owner-property-description.component';

describe('OwnerPropertyDescriptionComponent', () => {
  let component: OwnerPropertyDescriptionComponent;
  let fixture: ComponentFixture<OwnerPropertyDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerPropertyDescriptionComponent]
    });
    fixture = TestBed.createComponent(OwnerPropertyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
