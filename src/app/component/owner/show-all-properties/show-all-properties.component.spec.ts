import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPropertiesComponent } from './show-all-properties.component';

describe('ShowAllPropertiesComponent', () => {
  let component: ShowAllPropertiesComponent;
  let fixture: ComponentFixture<ShowAllPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllPropertiesComponent]
    });
    fixture = TestBed.createComponent(ShowAllPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
