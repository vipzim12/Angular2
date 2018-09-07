import { Component, OnInit } from '@angular/core';
import { Product } from './products';
import { ProductService } from '../../service/product/product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class ProductsComponent implements OnInit {
  private products: any;
  constructor(private _productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this._productService.getAllProduct().subscribe((data: any) => {
       this.products = data.result;
       console.log(this.products);
    });
  }

  deleteProduct(product: Product) {
    if (confirm("Are you sure you want to delete " + product.name + "?")) {
      this._productService.deleteProduct(product).subscribe(
        data => {
          // refresh the list
          this.getAllProduct();
          return true;
        },
        error => {
          console.error("Error deleting food!");
          alert("Can not delete product. Because it's related in table order-detail !!! ")
        }
      );
    }
  }


}
