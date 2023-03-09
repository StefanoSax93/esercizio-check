import { Injectable } from '@angular/core';
import { Libro } from 'src/model/libro';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServizioLibriService {

  constructor(private http: HttpClient) { }

  private url_libri: string = "assets/libri.json"

  getLibri(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url_libri).pipe(
      catchError(this.gestisciErrore)
    )
  }

  gestisciErrore(error: HttpErrorResponse) {
    return throwError(() => new Error(`${error.status} - ${error.statusText}`))
  }
}
