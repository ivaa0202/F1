import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerstappenComponent } from './verstappen.component';

describe('VerstappenComponent', () => {
  let component: VerstappenComponent;
  let fixture: ComponentFixture<VerstappenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerstappenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerstappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
