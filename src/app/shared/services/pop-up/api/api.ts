import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, startWith } from "rxjs";
import { ResponseState } from "../../../../types/responseState";

@Injectable({
  providedIn: "root",
})
export class Api {
  constructor(private http: HttpClient) {}

  baseUrl: string =
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod";

  getAll<T>(path: string): Observable<ResponseState<T>> {
    return this.http.get<T>(`${this.baseUrl}/${path}`).pipe(
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

  // export async function getById<T>(path: string, id: string): Promise<T> {
  //   const res = await fetch(`${baseUrl}/${path}/${id}`);
  //   // const res = await fetch("error" + path + id);
  //   if (!res.ok) throw new Error(errorMsg);
  //   return await res.json();
  // }

  // export async function post<T, B>(path: string, body: B): Promise<T> {
  //   // const res = await fetch("error" + path, {
  //     const res = await fetch(`${baseUrl}/${path}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });

  //  if (!res.ok) {
  //     if (res.status >= 500) throw new Error(errorMsg);

  //     const data = await res.json();
  //     throw new Error(data.error || "Request failed");
  //   }

  //   return await res.json();
  // }
}
