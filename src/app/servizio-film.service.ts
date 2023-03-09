import { Injectable } from '@angular/core';
import { Film } from 'src/model/film';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServizioFilmService {

  constructor(private http: HttpClient) { }

  private url_film: string = "assets/film.json"

  getFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(this.url_film).pipe(
      catchError(this.gestisciErrore)
    )
  }

  gestisciErrore(error: HttpErrorResponse) {
    return throwError(() => new Error(`${error.status} - ${error.statusText}`))
  }
}
