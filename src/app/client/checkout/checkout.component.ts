import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  fullname:string;
  email:string;
  address:string;
  phone:string;
  
  ngOnInit() {
    this.fullname = sessionStorage.getItem('cl-fullname');
    this.email = sessionStorage.getItem('cl-email');
    this.address = sessionStorage.getItem('cl-address');
    this.phone = sessionStorage.getItem('cl-phone');
  }

  


  dathang(form) {
    if (sessionStorage.getItem('cl-username') != null) {
      this.http.get('http://localhost:8080/carts/'
        + sessionStorage.getItem('cl-id')).subscribe((data: any) => {
          if (data.success) {
            const list: any[] = data.result;
            list.forEach(element => {

              this.http.get('http://localhost:8080/api/product/edit/' + element.cartId.product.id).subscribe((data: any) => {

                if (data.success) {
                  form.product = data.result;
                  form.description = element.cartId.product.description;
                  form.quantity = element.quantity;
                  form.currentPrice = element.cartId.product.price;
                  form.coupon = element.cartId.product.promotion;
                  form.total = element.cartId.product.price * (100 - element.cartId.product.promotion) * element.quantity;
                  this.http.post('http://localhost:8080/pages/order-detail/add', form).subscribe((data: any) => {

                  })
                }

              })


            });

            this.http.delete('http://localhost:8080/carts/'+sessionStorage.getItem('cl-id')).subscribe((data:any)=>{
              
            })

            this.router.navigate(['/home']);
            
          }
        });
    }
    console.log(form)
  }

}
