import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTipoTweetComponent } from './detalles-tipo-tweet.component';

describe('DetallesTipoTweetComponent', () => {
  let component: DetallesTipoTweetComponent;
  let fixture: ComponentFixture<DetallesTipoTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTipoTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTipoTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
