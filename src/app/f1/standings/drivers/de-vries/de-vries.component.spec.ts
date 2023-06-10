import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeVriesComponent } from './de-vries.component';

describe('DeVriesComponent', () => {
  let component: DeVriesComponent;
  let fixture: ComponentFixture<DeVriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeVriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeVriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
