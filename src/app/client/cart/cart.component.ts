import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'ngx-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  list: any[] = [];
  total: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    if (sessionStorage.getItem('cl-username') != null) {
      this.http.get("http://localhost:8080/carts/"
        + sessionStorage.getItem("cl-id")).subscribe((data: any) => {
          if (data.success) {
            this.list = data.result;
            console.log(this.list);
          }
          this.updateTotal();
        });
    }
  }

  xoa(item: any) {
    if(window.confirm('Bạn có thật sự muốn xóa?')==true){
      console.log(this.list.splice(this.list.indexOf(item),1));
      console.log(item);
      this.http.delete('http://localhost:8080/carts/'+ sessionStorage.getItem('cl-id')+'/'+item.cartId.product.id).subscribe((data:any)=>{
        console.log(data);
      })
    }
  }
  giam(item: any) {
    item.quantity--;
    this.updateTotal();
  }
  tang(item: any) {
    item.quantity++;
    this.updateTotal();
  }
  updateTotal() {
    this.total = 0;
    this.list.forEach(x => {
      this.total += x.cartId.product.price * (100 - x.cartId.product.promotion) * x.quantity;
    })
  }

  capnhatgiohang(){
    this.http.delete('http://localhost:8080/carts/'+ sessionStorage.getItem('cl-id')).subscribe((data:any)=>{
      if(data.success){
        window.alert('cập nhật giỏ hàng thành công')
        this.list.forEach(x=>{
          this.http.post('http://localhost:8080/carts/add/'+ sessionStorage.getItem('cl-id')+'/'+x.cartId.product.id+'/'+x.quantity,null).subscribe((data:any)=>{
            console.log('da cap nhat');
          })
        })
      }
    });
  }
}
