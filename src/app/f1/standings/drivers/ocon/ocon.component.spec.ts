import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OconComponent } from './ocon.component';

describe('OconComponent', () => {
  let component: OconComponent;
  let fixture: ComponentFixture<OconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
