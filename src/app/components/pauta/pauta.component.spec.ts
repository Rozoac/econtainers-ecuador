import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PautaComponent } from './pauta.component';

describe('PautaComponent', () => {
  let component: PautaComponent;
  let fixture: ComponentFixture<PautaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PautaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
