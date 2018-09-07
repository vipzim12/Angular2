import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { OrderService } from '../../../service/order/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSet } from 'ng2-smart-table/lib/data-set/data-set';

@Component({
  selector: 'ngx-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  order: Order;
  constructor(private _orderService: OrderService, private _router: Router, private _route : ActivatedRoute) { }

  ngOnInit() {
    //this.order = this._orderService.getter();
    // console.log(this.order);
    this._route.params.subscribe(params => this.editOrder(params.id));
  }
  editOrder(id: number) {
    this._orderService.getOrderById(id).subscribe((data: any) => {
      this.order = data.result;
    }, error => {
      console.log(error);
    })
  }
  updateOrder() {
    if (this.order.id == undefined) {
      alert("Can not update product.");
    } else {
      console.log(this.order);
      this._orderService.updateOrder(this.order).subscribe(data => {
        console.log(data);
        this._router.navigate(['/admin/orders/all']);
      }, error => {
        console.error(error);
      }
      );
    }
  }
}
