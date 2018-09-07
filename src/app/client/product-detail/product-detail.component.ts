import { Component, OnInit } from '@angular/core';
import { Product } from '../../pages/admin/products/products';
import { Category } from '../../pages/admin/category/category';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { ProductService } from '../../pages/service/product/product.service';

import "../../../assets/shop/js/jquery-2.1.4.min.js";
import "../../../assets/shop/js/bootstrap.min.js";
import "../../../assets/shop/js/owl.carousel.min.js";
import "../../../assets/shop/js/detail.js";
import "../../../assets/shop/js/item_3.js";

import { HttpClient } from '../../../../node_modules/@angular/common/http';


@Component({
  selector: 'ngx-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  valueAmount = 1;
  product = new Product();
  products: any;



  constructor(private route: ActivatedRoute, private productService: ProductService, private _router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.getProductById(params.id));
  }
  getProductById(id: Number) {
    this.productService.getProduct(id).subscribe((data: any) => {
      this.product = data.result;
      console.log(this.product);
      this.getProductSame();
    }, error => {
      console.error(error);
    });
  }
  getProductSame() {
    this.productService.getProductByGCategoryIdCategory(this.product.category.id).subscribe((data: any) => {
      this.products = data.result;
      console.log('OK');
      console.log(this.products);
    });
  }
  subAmount() {
    this.valueAmount = this.valueAmount - 1;
  }
  addAmount() {
    this.valueAmount = this.valueAmount + 1;

  }
  addIntoCart() {
    console.log('clicked');
    if (sessionStorage.getItem('cl-username') != null) {
      this.http.post("http://localhost:8080/carts/add/"
        + sessionStorage.getItem("cl-id") + "/" + this.product.id
        + "/" + this.valueAmount, null).subscribe((data: any) => {
          if (data.success) {
            console.log(data);
            window.alert('Thêm vào giỏ hàng thành công');
          } else {
            console.log(data);
            window.alert('Thêm vào giỏ hàng thất bại');
          }
        });
    }
  }
}




