import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HulkenbergComponent } from './hulkenberg.component';

describe('HulkenbergComponent', () => {
  let component: HulkenbergComponent;
  let fixture: ComponentFixture<HulkenbergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HulkenbergComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HulkenbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
