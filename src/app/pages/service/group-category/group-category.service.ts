import { Injectable } from '@angular/core';
import { Group_Categories } from '../../admin/groupcategories/group-categories';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Product } from '../../admin/products/products';

@Injectable({
  providedIn: 'root'
})
export class GroupCategoryService {
  private baseUrl: String = 'http://localhost:8080/api/group-category'
  private gCategoy = new Group_Categories();
  constructor(private _httpClient: HttpClient) { }

  getAllGCategories() {
    return this._httpClient.get(this.baseUrl + '/all').pipe(
      map(data => data),catchError(this.handleError));
  }

  deleteGCategory(gCategoy: Group_Categories) {
    return this._httpClient.delete(this.baseUrl + '/delete/' + gCategoy.id);
  }

  getGCategory(id: Number) {
    return this._httpClient.get(this.baseUrl + '/edit/' + id).pipe(
      map(data => data),catchError(this.handleError));
  }

  updateGCategory(gCategoy:Group_Categories){
    return this._httpClient.put(this.baseUrl + '/edit',gCategoy).pipe(
      map(data => data),catchError(this.handleError));
  }

  insertGCategory(gCategoy:Group_Categories){
    return this._httpClient.post(this.baseUrl + '/add-new',gCategoy).pipe(
      map(data => data),catchError(this.handleError));
  }


  private handleError(error: Response | any) {
    console.log(error);
    return throwError(error); // <= B
  }
}
