import { Component, OnInit } from '@angular/core';
import { GroupCategoryService } from '../../pages/service/group-category/group-category.service';
import { Group_Categories } from '../../pages/admin/groupcategories/group-categories';
import { ProductService } from '../../pages/service/product/product.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  gCategorys: any[];
  products: any[];
  productsIsShow: any[];
  selectOption: any;
  idCategory;
  idGCategory;
  min: number = 0;
  max: number = 1000000000;
  productSale: any;
  constructor(private _groupCategoryService: GroupCategoryService, private _productService: ProductService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllGroupCategory();

    this.route.params.subscribe(params => this.idGCategory = params.idGCategory);
    this.route.params.subscribe(params => this.idCategory = params.idCategory);
    if (this.idCategory) {
      this.getAllProductByCategoryId(this.idCategory);
    }
    else if (this.idGCategory) {
      this.getAllProductByGCategoryId(this.idGCategory);
      console.log(this.idGCategory);
    }
    else {
      this.getAllProduct();
    }
    this.getProduct();
  }



  getAllProductByGCategoryId(Id: Number) {
    this._productService.getProductByGCategoryId(Id).subscribe((data: any) => {
      this.products = data.result;
      this.productsIsShow = this.products;
    })

  }

  getAllProductByCategoryId(Id: Number) {
    this._productService.getProductByCategoryId(Id).subscribe((data: any) => {
      this.products = data.result;
      this.productsIsShow = this.products;
    })

  }


  selectSort() {
    switch (this.selectOption) {
      case 'price-asc':
        // this._productService.sortAsc().subscribe((data: any) => {
        //   this.products = data.result;
        // });
        this.productsIsShow.sort(function (a, b) {
          return (a.price - b.price);
        });
        break;
      case 'price-desc':
        // this._productService.sortDesc().subscribe((data: any) => {
        //   this.products = data.result;
        // });
        this.productsIsShow.sort(function (a, b) {
          return (b.price - a.price);
        });
        break;
      case 'alpha-asc':
        // this._productService.sortDesc().subscribe((data: any) => {
        //   this.products = data.result;
        // });
        this.productsIsShow.sort(function (a, b) {
          var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
          var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // name trùng nhau
          return 0;
        });
        break;
      case 'alpha-desc':
        // this._productService.sortDesc().subscribe((data: any) => {
        //   this.products = data.result;
        // });
        this.productsIsShow.sort(function (a, b) {
          var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
          var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          // name trùng nhau
          return 0;
        });
        break;
      default:
        break;
    }
    console.log(this.selectOption);

  }
  getAllProduct() {
    this._productService.getAllProduct().subscribe((data: any) => {
      this.products = data.result;
      this.productsIsShow = this.products;
      console.log(this.products);
    })
  }
  getAllGroupCategory() {
    this._groupCategoryService.getAllGCategories().subscribe((data: any) => {
      this.gCategorys = data.result;
      this.gCategorys.forEach(x => {
        x.isCheck = false;
      });
      console.log(this.gCategorys);
    })
  }
  flag: boolean = false;
  changeValueCheckbox() {
    this.productsIsShow = [];
    this.flag = false;
    this.gCategorys.forEach(x => {
      if (x.isCheck) {
        this.flag = true;
        this.products.forEach(y => {
          if (y.category.gCategory.name == x.name) {
            this.productsIsShow.push(y);
          }
          console.log(x.name);
          console.log(y.category.gCategory.name);
        });
      }
    });
    if (this.productsIsShow.length == 0 && !this.flag) {
      this.productsIsShow = this.products;
    }
    const temp = [];
    this.productsIsShow.forEach(x => {
      if ((100 - x.promotion) * x.price / 100 >= this.min && (100 - x.promotion) * x.price / 100 <= this.max)
        if (x.promotion >= this.min && x.promotion <= this.max) {
          temp.push(x);
        }
    });
    this.productsIsShow = temp;
  }
  clickLoc() {
    console.log('loc');
    this.changeValueCheckbox();
    // const temp = [];
    // this.productsIsShow.forEach(x=>{
    //   if(x.promotion>=this.min&&x.promotion<=this.max){
    //     temp.push(x);
    //   }
    // });
    // this.productsIsShow = temp;
  }

  getProduct() {
    this._productService.getProductSale().subscribe((data: any) => {
      this.productSale = data.result;
    })
  }
}
