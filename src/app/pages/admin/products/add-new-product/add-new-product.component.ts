import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../../../service/product/product.service';
import { Router } from '../../../../../../node_modules/@angular/router';
import { Category } from '../../category/category';
import { HttpResponse, HttpEventType } from '../../../../../../node_modules/@angular/common/http';


@Component({
  selector: 'ngx-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  imageUrl: String;
  private categories: Category;
  private product = new Product();
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe((data: any) => {
      this.categories = data.result;
    }, error => {
      console.error(error);
    })
  }



  onFileSelected(event) {
    this.selectedFiles = event.target.files;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFiles.item(0));
  }

  insertProduct(form) {
    this.product.name = form.nameProduct;
    this.product.price = form.priceProduct;
    this.product.category = form.category;
    this.product.promotion = form.promotionProduct;
    this.product.tag = form.tagProduct;
    this.product.content = form.contentProduct;
    this.product.description = form.descripProduct;
    this.product.details = form.detailProduct;
    this.product.quantity = form.quantity;
    // this.product.linkImage = form.nameProduct;
    this.progress.percentage = 0;

    if (this.selectedFiles && this.selectedFiles.length != 0) {
      this.currentFileUpload = this.selectedFiles.item(0);
      this.productService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
          console.log(this.progress.percentage);
        } else if (event instanceof HttpResponse) {
          this.productService.insertProduct(this.product).subscribe(product => {
            console.log(product);
            window.alert('Add successfully!!!');
            this._router.navigate(['/admin/product/all']);

          }, error => {
            console.error(error);
          }
          );
          console.log('File is completely uploaded!');
        }
      });


      this.selectedFiles = undefined;

    }
    else {
      this.productService.insertProduct(this.product).subscribe(product => {
        console.log(product);
        window.alert('Add successfully!!!');
        this._router.navigate(['/admin/product/all']);

      }, error => {
        console.error(error);
      }
      );
    }
  }


  // upload() {
  //   this.progress.percentage = 0;

  //   this.currentFileUpload = this.selectedFiles.item(0);
  //   this.productService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
  //     if (event.type === HttpEventType.UploadProgress) {
  //       this.progress.percentage = Math.round(100 * event.loaded / event.total);
  //     } else if (event instanceof HttpResponse) {
  //       console.log('File is completely uploaded!');
  //     }
  //   });

  //   this.selectedFiles = undefined;
  // }

}