import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OrderDetail } from "../../admin/orders-detail/order-detail";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {
    private baseUrl: string = 'http://localhost:8080/pages/order-detail';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private _httpClient: HttpClient) { }
    orderDetail: OrderDetail;
    getAllOrderDetail() {
        return this._httpClient.get<OrderDetail>(this.baseUrl + '/all').pipe(
            map(data => data), catchError(this.handleError))
    }
    getOrderDetailbyId(id: number) {
        return this._httpClient.get(this.baseUrl + '/edit/' + id).pipe(
            map(data => data), catchError(this.handleError)
        );
    }
    updateOrderDetail(orderDetail: OrderDetail) {
        return this._httpClient.put(this.baseUrl + '/edit', orderDetail).pipe(
            map(data => data), catchError(this.handleError)
        );
    }
    addOrderDetail(orderDetail: OrderDetail) {
        return this._httpClient.post<OrderDetail>(this.baseUrl + '/add', orderDetail).pipe(
            map(data => data), catchError(this.handleError)
        );
    }
    deleteOrderDetail(orderDetail: OrderDetail) {
        return this._httpClient.delete(this.baseUrl + '/delete/' + orderDetail.id);
    }
    setter(orderDetail: OrderDetail) {
        this.orderDetail = orderDetail;
    }
    private handleError(error: Response | any) {
        console.log(error);
        return throwError(error);
    }
}