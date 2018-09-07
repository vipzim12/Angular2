import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { OrderService } from '../../../service/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  order = new Order();
  constructor(private _orderService: OrderService, private _router: Router) { }

  ngOnInit() {
  }
  addNewOrder(): void {
    this._orderService.addNewOrder(this.order).subscribe(data => {
      console.log(this.order);
       this._router.navigate(["/admin/orders/all"]);
    });
  }
}
