import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GecComponent } from './gec.component';

describe('GecComponent', () => {
  let component: GecComponent;
  let fixture: ComponentFixture<GecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
