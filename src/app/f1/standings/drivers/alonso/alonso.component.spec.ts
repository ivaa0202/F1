import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlonsoComponent } from './alonso.component';

describe('AlonsoComponent', () => {
  let component: AlonsoComponent;
  let fixture: ComponentFixture<AlonsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlonsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlonsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
