import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticsComponent } from './authentics.component';

describe('AuthenticsComponent', () => {
  let component: AuthenticsComponent;
  let fixture: ComponentFixture<AuthenticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
