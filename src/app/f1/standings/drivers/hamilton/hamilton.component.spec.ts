import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamiltonComponent } from './hamilton.component';

describe('HamiltonComponent', () => {
  let component: HamiltonComponent;
  let fixture: ComponentFixture<HamiltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamiltonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamiltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
