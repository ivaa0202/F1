import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SainzComponent } from './sainz.component';

describe('SainzComponent', () => {
  let component: SainzComponent;
  let fixture: ComponentFixture<SainzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SainzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SainzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
