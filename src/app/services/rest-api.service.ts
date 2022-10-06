import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Post } from "../models/post";

@Injectable({
    providedIn: 'root',
})
export class RestApiService {
    apiURL = 'https://jsonplaceholder.typicode.com';
    constructor(private http: HttpClient) {}

    getEmployees(): Observable<Post> {
        return this.http
          .get<Post>(this.apiURL + '/posts')
          .pipe(retry(1), catchError(this.handleError));
    }

    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
          return errorMessage;
        });
      }
}