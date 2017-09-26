import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPComponent } from './clientes-p.component';

describe('ClientesPComponent', () => {
  let component: ClientesPComponent;
  let fixture: ComponentFixture<ClientesPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
