import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SargeantComponent } from './sargeant.component';

describe('SargeantComponent', () => {
  let component: SargeantComponent;
  let fixture: ComponentFixture<SargeantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SargeantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SargeantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
