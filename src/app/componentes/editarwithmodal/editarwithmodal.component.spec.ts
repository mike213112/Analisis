import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarwithmodalComponent } from './editarwithmodal.component';

describe('EditarwithmodalComponent', () => {
  let component: EditarwithmodalComponent;
  let fixture: ComponentFixture<EditarwithmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarwithmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarwithmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
