import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwithmodalComponent } from './verwithmodal.component';

describe('VerwithmodalComponent', () => {
  let component: VerwithmodalComponent;
  let fixture: ComponentFixture<VerwithmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerwithmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerwithmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
