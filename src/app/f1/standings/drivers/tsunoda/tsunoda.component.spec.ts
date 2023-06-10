import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsunodaComponent } from './tsunoda.component';

describe('TsunodaComponent', () => {
  let component: TsunodaComponent;
  let fixture: ComponentFixture<TsunodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsunodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsunodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
