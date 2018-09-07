import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../../service/order-detail/order-detail.service';
import { OrderDetail } from './order-detail';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'ngx-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class OrdersDetailComponent implements OnInit {

  orderDetails: Array<OrderDetail> = [];
  products: any;
  constructor(private _orderDetailService: OrderDetailService, private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this.getAll();
    this.getAllProduct();

  }
  getAll() {
    this._orderDetailService.getAllOrderDetail().subscribe((data: any) => {
      console.log(data);
      this.orderDetails = data.result;
      var temp = this.orderDetails[this.orderDetails.length - 1];
      console.log(temp);
    })
  }
  getAllProduct() {
    this._productService.getAllProduct().subscribe((data: any) => {
      this.products = data.result;
      console.log(this.products);
    });
  }
  editDetailOrder(orderDetail) {
    this._orderDetailService.setter(orderDetail);
    console.log(orderDetail);
    this._router.navigate(['/admin/order-detail/edit/' + orderDetail.id]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  deleteOrderDetail(orderDetail: OrderDetail) {
    if (confirm("Are you sure you want to delete order of " + orderDetail.customerFullName +"--"+orderDetail.product.name +"?")) {
      this._orderDetailService.deleteOrderDetail(orderDetail).subscribe(
        data => {
          window.alert('Deleted successfully!!!');
          this.getAll();
          return true;
        },
        error => {
          console.error("Error deleting food!");
          return Observable.throw(error);
        }
      );
    }
  }
}
