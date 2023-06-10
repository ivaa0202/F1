import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottasComponent } from './bottas.component';

describe('BottasComponent', () => {
  let component: BottasComponent;
  let fixture: ComponentFixture<BottasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
