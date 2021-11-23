import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private pathProduct = 'https://fakestoreapi.com/products'


  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(this.pathProduct)
  }

}
