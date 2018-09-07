import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order/order.service';
import { Order } from './Order';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  private orders: Array<Order> =[];
  constructor(private _OrderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.getAllOrders();
  }
  getAllOrders() {
    this._OrderService.getOrders().subscribe((data: any) => {
       this.orders = data.result ;
      console.log(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  deleteOrder(order: Order) {
    if (confirm("Are you sure you want to delete " + order.id + "?")) {
      this._OrderService.deleteOrder(order).subscribe(
        data => {
          this.getAllOrders();
          return true;
        },
        error => {
          console.error("Error deleting food!");
          return Observable.throw(error);
        }
      );
    }
  }
  updateOrder(order){
    console.log(order);
    this._OrderService.setter(order);
    this.router.navigate(['/admin/orders/edit/'+ order.id]);
  }
}
