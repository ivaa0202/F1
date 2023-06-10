import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiastriComponent } from './piastri.component';

describe('PiastriComponent', () => {
  let component: PiastriComponent;
  let fixture: ComponentFixture<PiastriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiastriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiastriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
