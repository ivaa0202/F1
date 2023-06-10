import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrollComponent } from './stroll.component';

describe('StrollComponent', () => {
  let component: StrollComponent;
  let fixture: ComponentFixture<StrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
