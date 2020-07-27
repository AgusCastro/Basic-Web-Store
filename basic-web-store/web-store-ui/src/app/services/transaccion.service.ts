import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Product} from '../domain/Product';
import {ItemCarrito} from '../domain/ItemCarrito';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  transaccionURL = environment.transaccionUrl;

  constructor( private http: HttpClient) { }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  realizarTransaccion(carrito: ItemCarrito[]): Observable<any> {
    return this.http.post(this.transaccionURL + '/venta?access_token=' +
      JSON.parse(window.sessionStorage.getItem('token')).access_token, carrito).pipe(
        map((res: Response) => res),
      catchError(this.handleErrorObservable),
    );
  }

  private handleErrorObservable(error: Response | any): Observable<never>{
    console.error(error.message || error);
    return observableThrowError(error.message || error);
  }

}
