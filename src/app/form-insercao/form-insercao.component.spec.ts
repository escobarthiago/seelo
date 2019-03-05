import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsercaoComponent } from './form-insercao.component';

describe('FormInsercaoComponent', () => {
  let component: FormInsercaoComponent;
  let fixture: ComponentFixture<FormInsercaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInsercaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInsercaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
