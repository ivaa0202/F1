import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphatauriComponent } from './alphatauri.component';

describe('AlphatauriComponent', () => {
  let component: AlphatauriComponent;
  let fixture: ComponentFixture<AlphatauriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphatauriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphatauriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
