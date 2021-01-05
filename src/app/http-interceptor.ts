import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry, catchError, finalize } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const HARD_TOKEN = 'erwer2332423';
        const REQ_WITH_AUTH = request.clone({
            setHeaders: {
                Authorization: `Bearer ${HARD_TOKEN}`,
                myText: "Hello People"
            }
        })
        return next.handle(REQ_WITH_AUTH)
            .pipe(
                retry(1),

                catchError((error:HttpErrorResponse) => {
                    console.log(`HTTP Error URL: ${REQ_WITH_AUTH.url} \n HTTP Error Body : ${REQ_WITH_AUTH.body}`);
                    return throwError(error)
                })
            )
    }
}