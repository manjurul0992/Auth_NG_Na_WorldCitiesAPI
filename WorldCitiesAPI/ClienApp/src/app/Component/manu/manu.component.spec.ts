import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MANUComponent } from './manu.component';

describe('MANUComponent', () => {
  let component: MANUComponent;
  let fixture: ComponentFixture<MANUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MANUComponent]
    });
    fixture = TestBed.createComponent(MANUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
