import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeclercComponent } from './leclerc.component';

describe('LeclercComponent', () => {
  let component: LeclercComponent;
  let fixture: ComponentFixture<LeclercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeclercComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeclercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
