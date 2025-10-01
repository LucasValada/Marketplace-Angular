import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { INewProductRequest } from '../interfaces/new-product-request';
import { Observable } from 'rxjs';
import { INewProductResponse } from '../interfaces/new-product-response';
import { IProductResponse } from '../interfaces/products-response';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient);

  saveProduct(product: INewProductRequest): Observable<INewProductResponse> {
    return this._httpClient.post<INewProductResponse>(
      'http://localhost:3000/api/products',
      product
    );
  }

  getProducts(): Observable<IProductResponse> {
    return this._httpClient.get<IProductResponse>('http://localhost:3000/api/products');
  }
}
