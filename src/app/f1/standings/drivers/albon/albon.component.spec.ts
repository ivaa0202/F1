import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbonComponent } from './albon.component';

describe('AlbonComponent', () => {
  let component: AlbonComponent;
  let fixture: ComponentFixture<AlbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
