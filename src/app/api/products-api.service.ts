import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>('https://fakestoreapi.com/products');
  }
}
