import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullConstructorsStandingsComponent } from './full-constructors-standings.component';

describe('FullConstructorsStandingsComponent', () => {
  let component: FullConstructorsStandingsComponent;
  let fixture: ComponentFixture<FullConstructorsStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullConstructorsStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullConstructorsStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
