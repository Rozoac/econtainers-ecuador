import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromisoEmpresarialComponent } from './compromiso-empresarial.component';

describe('CompromisoEmpresarialComponent', () => {
  let component: CompromisoEmpresarialComponent;
  let fixture: ComponentFixture<CompromisoEmpresarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompromisoEmpresarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromisoEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
