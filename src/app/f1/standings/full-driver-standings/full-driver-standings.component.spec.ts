import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDriverStandingsComponent } from './full-driver-standings.component';

describe('FullDriverStandingsComponent', () => {
  let component: FullDriverStandingsComponent;
  let fixture: ComponentFixture<FullDriverStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullDriverStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullDriverStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
