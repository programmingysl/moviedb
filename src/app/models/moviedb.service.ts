import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  baseUrl = 'https://api.themoviedb.org/3/';
  apikey = 'api_key=9406ed0141baddd3f8169037803f4f2f';

  constructor(public http: HttpClient) { }

  movieSearch(query: string): Observable<any> {
    const url = this.baseUrl + 'search/movie?' + this.apikey + '&query=' + query;
    return this.http.get(url).pipe(
      map(res => {
        return (res as any).results;
      })
    );
  }
}
