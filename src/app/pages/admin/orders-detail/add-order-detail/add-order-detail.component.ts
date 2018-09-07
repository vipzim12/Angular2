import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../../../service/order-detail/order-detail.service';
import { Router } from '@angular/router';
import { OrderDetail } from '../order-detail';
import { Group_Categories } from '../../groupcategories/group-categories';
import { CategoryService } from '../../../service/category/category.service';
import { ProductService } from '../../../service/product/product.service';
import { Product } from '../../products/products';

@Component({
  selector: 'ngx-add-order-detail',
  templateUrl: './add-order-detail.component.html',
  styleUrls: ['./add-order-detail.component.scss']
})
export class AddOrderDetailComponent implements OnInit {
  private gCategories: Group_Categories;
  gCategoryValue: any;
  categories: any;
  products: any;
  totalMoney: any;
  productSelected: Product;
  selectOptionProduct: any;
  selectOptionGCategory: any;
  selectOptionCategory: any;
  orderDetail = new OrderDetail();
  orderDetails: Array<OrderDetail> = [];
  constructor(private _productService: ProductService, private _orderDetailService: OrderDetailService, private _categoryService: CategoryService, private _router: Router) { }

  ngOnInit() {
    this.getAllGroupCategory();
  }
  getAllGroupCategory() {
    this._categoryService.getAllGCategory().subscribe((data: any) => {
      console.log(data);
      this.gCategories = data.result;
    }, error => {
      console.error(error);
    })
  }
  addOrder() {
    this._orderDetailService.getAllOrderDetail().subscribe((data: any) => {
      this.orderDetails = data.result;
      console.log(this.orderDetails);
      var temp = this.orderDetails[this.orderDetails.length - 1];
      console.log(temp);

    })
  }
  addOrderDetail() {
    this._orderDetailService.addOrderDetail(this.orderDetail).subscribe((data: any) => {
      console.log(this.orderDetail);
      this.addOrder();
      window.alert('Add Order successfully!!!');
      this._router.navigate(['/admin/order-detail']);
    });

  }
  getCategoryByIdGroupCategory(idGroupCategory: Number) {
    this._categoryService.getAllByGCategory(idGroupCategory).subscribe((data: any) => {
      this.categories = data.result;
      console.log(this.categories)
    })
  }
  getProductByIdCategory(idCategory: Number) {
    this._productService.getProductByCategoryId(idCategory).subscribe((data: any) => {
      this.products = data.result;
      console.log(this.products);
    })
  }
  selectGroupCategory() {
    console.log(this.selectOptionGCategory);
    this.getCategoryByIdGroupCategory(this.selectOptionGCategory);
  }
  selectCategory() {
    console.log(this.selectCategory);
    this.getProductByIdCategory(this.selectOptionCategory);
  }
  selectProduct() {
    this.productSelected = this.selectOptionProduct;
    this.orderDetail.quantity = 1;
    this.orderDetail.total = (+this.productSelected.price - (+this.productSelected.price * (+this.productSelected.promotion / 100)));
    this.orderDetail.currentPrice = this.selectOptionProduct.price;
    this.orderDetail.coupon = this.selectOptionProduct.promotion;
    this.orderDetail.product=this.selectOptionProduct;
    
  }
  handleInputQuantity() {
    var x = this.productSelected.price;
    var y = this.productSelected.promotion;
    var priceProduct = this.productSelected.price;
    var coupon = +y;
    var price = +x;
    this.orderDetail.product = this.productSelected;
    this.orderDetail.currentPrice = +priceProduct;
    this.orderDetail.coupon = this.productSelected.promotion;
    this.orderDetail.total = (this.orderDetail.quantity.valueOf() * (price * (100 - coupon) / 100));

  }
}
