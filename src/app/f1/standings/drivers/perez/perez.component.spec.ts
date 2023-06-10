import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerezComponent } from './perez.component';

describe('PerezComponent', () => {
  let component: PerezComponent;
  let fixture: ComponentFixture<PerezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
