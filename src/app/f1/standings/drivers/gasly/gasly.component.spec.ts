import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaslyComponent } from './gasly.component';

describe('GaslyComponent', () => {
  let component: GaslyComponent;
  let fixture: ComponentFixture<GaslyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaslyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaslyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
