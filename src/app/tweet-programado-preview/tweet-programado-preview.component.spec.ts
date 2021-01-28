import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetProgramadoPreviewComponent } from './tweet-programado-preview.component';

describe('TweetProgramadoPreviewComponent', () => {
  let component: TweetProgramadoPreviewComponent;
  let fixture: ComponentFixture<TweetProgramadoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetProgramadoPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetProgramadoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
