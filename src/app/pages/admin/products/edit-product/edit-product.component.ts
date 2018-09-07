import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductService } from '../../../service/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../category/category';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'ngx-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product = new Product();
  categories = new Category();
  selectedFiles: FileList;
  currentFileUpload: File;
  imageUrl: String;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private route: ActivatedRoute, private productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.editProduct(params.id));
    this.getAllCategory();
  }

  getAllCategory() {
    this.productService.getAllCategory().subscribe((data: any) => {
      this.categories = data.result;
    }, error => {
      console.error(error);
    })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFiles.item(0));
    console.log(this.selectedFiles);
  }


  editProduct(id: Number) {
    this.productService.getProduct(id).subscribe((data: any) => {
      this.product = data.result;
      this.imageUrl = this.product.linkImage;
      console.log("Edit successfully !!!");
    }, error => {
      console.error(error);
    });
  }

  updateProduct() {
    if (this.selectedFiles && this.selectedFiles.length != 0) {
      if (this.product.id == undefined) {
        alert("Can not update product.");
      } else {
        this.currentFileUpload = this.selectedFiles.item(0);
        this.productService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
            console.log(this.progress.percentage);
          } else if (event instanceof HttpResponse) {
            this.productService.updateProduct(this.product).subscribe(product => {
              console.log(product);
              window.alert('Updated successfully!!!');
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
    }
    else {
      this.productService.updateProduct(this.product).subscribe(product => {
        console.log(product);
        window.alert('Updated successfully!!!');
        this._router.navigate(['/admin/product/all']);
      }, error => {
        console.error(error);
      }
      );
    }




  }


}
