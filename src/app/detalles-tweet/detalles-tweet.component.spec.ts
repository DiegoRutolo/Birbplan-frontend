import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTweetComponent } from './detalles-tweet.component';

describe('DetallesTweetComponent', () => {
  let component: DetallesTweetComponent;
  let fixture: ComponentFixture<DetallesTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
