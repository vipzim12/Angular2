import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Product } from '../../admin/products/products';
import { map, catchError, delay } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'http://localhost:8080/api/product';

  constructor(private _httpClient: HttpClient) { }


  getAllProduct() {
    return this._httpClient.get(this.baseUrl + '/all').pipe(
      map(data => data), catchError(this.handleError));
  }

  getProductSale() {
    return this._httpClient.get(this.baseUrl + '/sale').pipe(
      map(data => data), catchError(this.handleError));
  }
  getProductByCategoryId(id: Number) {
    return this._httpClient.get(this.baseUrl + '/product_by_categoryId/' + id).pipe(
      map(data => data), catchError(this.handleError)
    );
  }
  getProductByGCategoryId(id: Number) {
    return this._httpClient.get(this.baseUrl + '/product_by_gcategory/' + id).pipe(
      map(data => data), catchError(this.handleError));
  }

  // getProductByCategoryId(id: Number) {
  //   return this._httpClient.get(this.baseUrl + '/product_by_category/' + id).pipe(
  //     map(data => data), catchError(this.handleError));
  // }

  getProductByGCategoryIdCategory(id: Number) {
    return this._httpClient.get(this.baseUrl + '/get_products_by_gcategory/' + id).pipe(
      map(data => data), catchError(this.handleError));
  }

  getAllCategory() {
    return this._httpClient.get(this.baseUrl + '/category').pipe(
      map(data => data), catchError(this.handleError)
    );
  }

  deleteProduct(product: Product) {
    return this._httpClient.delete(this.baseUrl + '/delete/' + product.id);
  }

  getProduct(id: Number) {
    return this._httpClient.get(this.baseUrl + '/edit/' + id).pipe(
      map(data => data), catchError(this.handleError));
  }

  updateProduct(product: Product) {
    return this._httpClient.put(this.baseUrl + '/edit', product).pipe(
      map(data => data), catchError(this.handleError));
  }
  sortAsc() {
    return this._httpClient.get(this.baseUrl + '/sortAsc').pipe(
      map(data => data), catchError(this.handleError)
    );

  }

  sortDesc() {
    return this._httpClient.get(this.baseUrl + '/sortDesc').pipe(
      map(data => data), catchError(this.handleError)
    );
  }
  insertProduct(product: Product) {

    return this._httpClient.post(this.baseUrl + '/add-new', product).pipe(
      map(data => data), catchError(this.handleError));
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl + '/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this._httpClient.request(req);
  }

  private handleError(error: Response | any) {
    console.log(error);
    return throwError(error); // <= B
  }


}
