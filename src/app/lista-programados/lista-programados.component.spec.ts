import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProgramadosComponent } from './lista-programados.component';

describe('ListaProgramadosComponent', () => {
  let component: ListaProgramadosComponent;
  let fixture: ComponentFixture<ListaProgramadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProgramadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProgramadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
