import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingInterceptorService {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Log the full URL of each outgoing request
    console.log('Outgoing request:', req);
    console.log('Outgoing request to:', req.url);
    return next.handle(req).pipe(
      tap({
        next: (event) => console.log('Received response:', event),
        error: (error) => console.error('Request error:', error),
      })
    );
  }
}
