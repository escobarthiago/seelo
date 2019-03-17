import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeListasComponent } from './tela-de-listas.component';

describe('TelaDeListasComponent', () => {
  let component: TelaDeListasComponent;
  let fixture: ComponentFixture<TelaDeListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDeListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDeListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
