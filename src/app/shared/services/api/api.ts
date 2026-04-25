import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, startWith } from "rxjs";
import { ResponseState } from "../../../types/responseState";

@Injectable({
  providedIn: "root",
})
export class Api {
  constructor(private http: HttpClient) {}

  getAll<T>(path: string): Observable<ResponseState<T>> {
    return this.http.get<T>(`${path}`).pipe(
      map((res) => ({
        data: res,
        error: null,
        loading: false,
      })),
      startWith({
        data: null,
        error: null,
        loading: true,
      }),
      catchError((err) =>
        of({
          data: null,
          error: err.message,
          loading: false,
        }),
      ),
    );
  }

    getById<T>(path: string, id: string): Observable<ResponseState<T>> {
    return this.http.get<T>(`${path}/${id}`).pipe(
      map((res) => ({
        data: res,
        error: null,
        loading: false,
      })),
      startWith({
        data: null,
        error: null,
        loading: true,
      }),
      catchError((err) =>
        of({
          data: null,
          error: err.message,
          loading: false,
        }),
      ),
    );
  }

post<T, B>(path: string, body: B): Observable<ResponseState<T>> {
      return this.http.post<T>(`auth/${path}`, body, {
      headers: {'Content-Type': 'application/json'},
    }).pipe(
      map((res) => ({
        data: res,
        error: null,
        loading: false,
      })),
      startWith({
        data: null,
        error: null,
        loading: true,
      }),
      catchError((err) =>
        of({
          data: null,
          error: err.message,
          loading: false,
        }),
      ),
    )
  }
}
