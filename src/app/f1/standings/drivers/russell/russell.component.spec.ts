import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RussellComponent } from './russell.component';

describe('RussellComponent', () => {
  let component: RussellComponent;
  let fixture: ComponentFixture<RussellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RussellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RussellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
