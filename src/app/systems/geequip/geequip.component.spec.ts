import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeequipComponent } from './geequip.component';

describe('GeequipComponent', () => {
  let component: GeequipComponent;
  let fixture: ComponentFixture<GeequipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeequipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
