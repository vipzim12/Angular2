import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../../../service/order-detail/order-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDetail } from '../order-detail';
import { Group_Categories } from '../../groupcategories/group-categories';
import { Product } from '../../products/products';
import { ProductService } from '../../../service/product/product.service';
import { CategoryService } from '../../../service/category/category.service';

@Component({
  selector: 'ngx-edit-order-detail',
  templateUrl: './edit-order-detail.component.html',
  styleUrls: ['./edit-order-detail.component.scss']
})
export class EditOrderDetailComponent implements OnInit {
  orderDetail: OrderDetail;
  private gCategories: Group_Categories;
  gCategoryValue: any;
  categories: any;
  products: any;
  totalMoney: any;
  productSelected: Product;
  selectOptionProduct: any;
  selectOptionGCategory: any;
  selectOptionCategory: any;

  orderDetails: Array<OrderDetail> = [];
  constructor(private _orderDetailService: OrderDetailService, private _productService: ProductService, private _router: Router, private _categoryService: CategoryService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.editOrderDetail(params.id));
    this.getAllGroupCategory();
  }
  editOrderDetail(id: number) {
    this._orderDetailService.getOrderDetailbyId(id).subscribe((data: any) => {
      this.orderDetail = data.result;
      console.log(this.orderDetail);
    })
  }

  updateOrderDetail() {
    this._orderDetailService.updateOrderDetail(this.orderDetail).subscribe((data: any) => {
      console.log(this.orderDetail);
      window.alert('Updated successfully!!!');
       this._router.navigate(['/admin/order-detail']);
    })
  }
  getAllGroupCategory() {
    this._categoryService.getAllGCategory().subscribe((data: any) => {
      console.log(data);
      this.gCategories = data.result;
    }, error => {
      console.error(error);
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
  getCategoryByIdGroupCategory(idGroupCategory: Number) {
    this._categoryService.getAllByGCategory(idGroupCategory).subscribe((data: any) => {
      this.categories = data.result;
      console.log(this.categories)
    })
  }
  selectCategory() {
    console.log(this.selectCategory);
    this.getProductByIdCategory(this.selectOptionCategory);
  }
  selectProduct() {
    this.productSelected = this.selectOptionProduct;
    this.orderDetail.coupon=this.productSelected.promotion;
    var x= this.productSelected.price;
    this.orderDetail.currentPrice=+x;
    var y = this.productSelected.promotion;
    var coupon = +y;
    var price = +x;
    this.orderDetail.product = this.productSelected;
    this.orderDetail.total = (this.orderDetail.quantity.valueOf() * (price * (100 - coupon) / 100));
   
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
