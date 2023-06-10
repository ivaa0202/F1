import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBullComponent } from './red-bull.component';

describe('RedBullComponent', () => {
  let component: RedBullComponent;
  let fixture: ComponentFixture<RedBullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedBullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedBullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
