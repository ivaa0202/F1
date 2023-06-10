import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnussenComponent } from './magnussen.component';

describe('MagnussenComponent', () => {
  let component: MagnussenComponent;
  let fixture: ComponentFixture<MagnussenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnussenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnussenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
