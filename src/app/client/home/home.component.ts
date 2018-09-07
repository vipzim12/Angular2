import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from "jquery";
import { CategoryService } from '../../pages/service/category/category.service';
import { GroupCategoryService } from '../../pages/service/group-category/group-category.service';
import { ProductService } from '../../pages/service/product/product.service';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color = 0;
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private categoryService: CategoryService, private gCategoryService: GroupCategoryService, private productService: ProductService) { }
  menus: any;
  productSale: any;

  ngOnInit() {
    this.getMenus();
    this.getProduct();
    
  }

  getMenus() {
    this.gCategoryService.getAllGCategories().subscribe((data: any) => {
      this.menus = data.result;
      for (let index = 0; index < this.menus.length; index++) {
        this.categoryService.getAllByGCategory(this.menus[index].id).subscribe((data: any) => {
          this.menus[index].category = data.result;
        })
      }
      for (let j = 0; j < this.menus.length; j++) {
        this.productService.getProductByGCategoryId(this.menus[j].id).subscribe((data: any) => {
          this.menus[j].product = data.result;
        })
      }
      console.log(this.menus);
    });

  }

  getProduct() {
    this.productService.getProductSale().subscribe((data: any) => {
      this.productSale = data.result;
    })
  }

}
