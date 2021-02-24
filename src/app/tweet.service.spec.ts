import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { TweetService } from './tweet.service';
import { Tweet } from './tweets';

describe('TweetService', () => {
  let httpClientSpy: {get: jasmine.Spy};
  let service: TweetService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TweetService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTweets debería devolver lista de observables', 
    (done: DoneFn) => {
      service.getTweets().subscribe(val => {
        expect(val).toContain(jasmine.objectContaining({
          id: 1
        }));
        done();
      });
    }
  );

  it('#getTweet(2) debería devolvr el tweet de Obi-Wan',
    (done: DoneFn) => {
      service.getTweet(2).subscribe(val => {
        expect(val).toEqual(jasmine.objectContaining({
          txt: 'Hello there'
        }))
        done();
      });
    }
  );

  it('#getTweet(8) no debería devolver nada',
    (done: DoneFn) => {
      service.getTweet(8).subscribe(val => {
        expect(val).toBeFalsy();
        done();
      });
    }
  );

});
