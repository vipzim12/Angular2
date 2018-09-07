import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import "../../../assets/shop/js/owl.carousel.min.js";
import { CategoryService } from '../../pages/service/category/category.service.js';
import { GroupCategoryService } from '../../pages/service/group-category/group-category.service.js';
import { ProductService } from '../../pages/service/product/product.service.js';
import { Observable, Subject, concat, of } from '../../../../node_modules/rxjs';
import { Product } from '../../pages/admin/products/products.js';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError, delay } from '../../../../node_modules/rxjs/operators';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus: any;
  username: string;
  productsSearch: any;
  selectedProduct: any = "";
  product: Observable<Product[]>;
  productLoading = false;
  productInput = new Subject<string>();
  @Input() cartCount: number

  constructor(private router: Router, private categoryService: CategoryService, private gCategoryService: GroupCategoryService, private _productService: ProductService) { }


  ngOnInit() {
    this.username = sessionStorage.getItem('cl-fullname');
    this.getMenus();

    this.username = sessionStorage.getItem('cl-fullname');

    this.loadProduct();
    this.getAllProduct();
  }

  onChange(e) {
    this.router.navigate(["/product/detail/" + e.id])
  }

  getMenus() {
    this.gCategoryService.getAllGCategories().subscribe((data: any) => {
      this.menus = data.result;
      for (let index = 0; index < this.menus.length; index++) {
        this.categoryService.getAllByGCategory(this.menus[index].id).subscribe((data: any) => {
          this.menus[index].category = data.result;
        })
      }
    });

  }
  logout() {
    sessionStorage.removeItem('cl-token');
    sessionStorage.removeItem('cl-id');
    sessionStorage.removeItem('cl-username');
    sessionStorage.removeItem('cl-fullname');
    sessionStorage.removeItem('cl-email');
    sessionStorage.removeItem('cl-address');
    sessionStorage.removeItem('cl-phone');
    sessionStorage.removeItem('cl-role');
    this.username = null;
    this.router.navigate(['/home']);
  }

  getAllProduct() {
    this._productService.getAllProduct().subscribe((data: any) => {
      this.productsSearch = data.result;
    })
  }
  getProductSearch(term: string = null): Observable<Product[]> {
    let items = this.productsSearch;

    if (term) {
      items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  private loadProduct() {
    this.product = concat(
      of([]), // default items
      this.productInput.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.productLoading = true),
        switchMap(term => this.getProductSearch(term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.productLoading = false)
        ))
      )
    );
  }
}
