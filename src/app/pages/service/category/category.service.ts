import { Injectable } from '@angular/core';
import { Category } from '../../admin/category/category';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl: String = 'http://localhost:8080/api/category'
  private category = new Category();
  constructor(private _httpClient:HttpClient) { }

  getAllCategory(){
    return this._httpClient.get(this.baseUrl + '/all').pipe(
      map(data=>data), catchError(this.handleError)
    );
  }

  getAllByGCategory(id: Number){
    return this._httpClient.get(this.baseUrl + '/all/'+ id).pipe(
      map(data=>data), catchError(this.handleError)
    );
  }

  getAllGCategory(){
    return this._httpClient.get(this.baseUrl + '/group-category').pipe(
      map(data=>data), catchError(this.handleError)
    );
  }

  deleteCategory(category: Category) {
    return this._httpClient.delete(this.baseUrl + '/delete/' + category.id);
  }

  getCategory(id: Number) {
    return this._httpClient.get(this.baseUrl + '/edit/' + id).pipe(
      map(data => data),catchError(this.handleError));
  }

  updateCategory(category:Category){
    return this._httpClient.put(this.baseUrl + '/edit',category).pipe(
      map(data => data),catchError(this.handleError));
  }

  insertCategory(category:Category){
    return this._httpClient.post(this.baseUrl + '/add-new',category).pipe(
      map(data => data),catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    console.log(error);
    return throwError(error); // <= B
  }
}
