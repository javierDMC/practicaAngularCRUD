import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteBorrarComponent } from './cliente-borrar.component';

describe('ClienteBorrarComponent', () => {
  let component: ClienteBorrarComponent;
  let fixture: ComponentFixture<ClienteBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteBorrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
