import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../admin/orders/Order';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class OrderService {
    private baseUrl: string = 'http://localhost:8080/pages/orders';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private order: Order;
    constructor(private _httpClient: HttpClient) { }

    // getAllOrders() {
    //     return this._httpClient.get(this.baseUrl+'/orders');
    // }
    getOrders() {
        return this._httpClient.get(this.baseUrl + '/all').pipe(
            map(data => data)
        );
      }
    deleteOrder(order: Order){
        return this._httpClient.delete(this.baseUrl + '/delete/'+order.id);
    }
    
    getOrderById(id: number){
        return this._httpClient.get(this.baseUrl + '/edit/' + id).pipe(
            map(data => data), catchError(this.handleError));
    }
   
    updateOrder(order: Order){
        return this._httpClient.put(this.baseUrl+ '/edit', order).pipe(
            map(data=> data), catchError(this.handleError));
    }
    setter(order: Order){
        this.order = order;
    }
    public addNewOrder(order) {
    return this._httpClient.post<Order>(this.baseUrl +'/add-new', order);
  }
    getter(){
        return this.order;
    }
    private handleError(error: Response | any) {
        console.log(error);
        return throwError(error); // <= B
      }
}