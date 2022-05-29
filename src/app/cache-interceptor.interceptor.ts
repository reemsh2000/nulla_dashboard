import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CacheInterceptorInterceptor implements HttpInterceptor {

  private cache: Map<string, HttpResponse<any>> = new Map();

  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    if(req.method !== "GET") {
      return next.handle(req);
    }
    const cachedResponse: HttpResponse<any> | undefined = this.cache.get(req.urlWithParams)
    // console.log(cachedResponse);
    if(cachedResponse) {
      console.log('cache hit')   
        return of(cachedResponse.clone())
    }else {
      console.log('cache miss');
        return next.handle(req).pipe(tap( (stateEvent:any) => {
          // console.log('object :>> ', stateEvent);
                if(stateEvent instanceof HttpResponse) {
                  this.cache.set(req.urlWithParams, stateEvent.clone())                    // console.log('cache set');
                }
            }
        ));
    }
  }


  
  
}
