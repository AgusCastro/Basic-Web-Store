import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../domain/Product';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ItemCarrito} from '../domain/ItemCarrito';
import {catchError, map} from 'rxjs/operators';
import {throwError as observableThrowError} from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = environment.productUrl;

  constructor( private http: HttpClient) { }

  private headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa('devglan-client:devglan-secret'),
    'Content-type': 'application/x-www-form-urlencoded'
  });

  getProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productURL + '/allProducts?access_token=' +
      JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getProductosByCategory(categoria: string): Observable<any>{
    return this.http.get(
      this.productURL + '/searchByCategory/' + categoria + '?access_token=' +
      JSON.parse(window.sessionStorage.getItem('token')).access_token
    );
  }

  saveOrUpdateProduct(product: Product): Observable<any>{
    return this.http.post(this.productURL + '/saveOrUpdate?access_token=' +
      JSON.parse(window.sessionStorage.getItem('token')).access_token, product).pipe(
      map((res: Response) => res),
      catchError(this.handleErrorObservable),
    );
  }
  private handleErrorObservable(error: Response | any): Observable<never>{
    console.error(error.message || error);
    return observableThrowError(error.message || error);
  }
}
