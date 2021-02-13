import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ItunesSearchServiceService {

  searchUrl = 'https://itunes.apple.com';
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  searchByKeyWord(searchKey: string): Observable<any> {
    if (!searchKey || !searchKey.length) {
      return new Observable<any>();
    }

    return this.httpClient.get<object>(
      `${this.searchUrl}/search?term=${searchKey}&country=BE&media=music`,
      {responseType: 'json'}
    );
  }

  searchBySongId(songId: string): Observable<any> {
    if (!songId || !songId.length) {
      return new Observable<any>();
    }

    return this.httpClient
      .get<object>(
        `${this.searchUrl}/lookup?id=${songId}&country=BE&media=music`,
        {responseType: 'json'}
      ).pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(`Failed to load song: ${error.message}`);
        })
      );
  }

}
