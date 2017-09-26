import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasDeNegocioComponent } from './lineas-de-negocio.component';

describe('LineasDeNegocioComponent', () => {
  let component: LineasDeNegocioComponent;
  let fixture: ComponentFixture<LineasDeNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasDeNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasDeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
