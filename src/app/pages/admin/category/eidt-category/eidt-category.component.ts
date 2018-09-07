import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../../../service/category/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Group_Categories } from '../../groupcategories/group-categories';

@Component({
  selector: 'ngx-eidt-category',
  templateUrl: './eidt-category.component.html',
  styleUrls: ['./eidt-category.component.scss']
})
export class EidtCategoryComponent implements OnInit {
  private category = new Category();
  private gCategory = new Group_Categories();
  private gCategories = new Group_Categories();
  constructor(private route:ActivatedRoute, private categoryService: CategoryService,private _router:Router) { }
  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.editCategory(data.id);
    })
    this.getAllGCategory();
    
  }

  getAllGCategory(){
    this.categoryService.getAllGCategory().subscribe((data:any)=>{
      console.log(data);
      this.gCategories = data.result;
    },error=>{
      console.error(error);
    })
  }

  editCategory(id : Number){
    this.categoryService.getCategory(id).subscribe((data:any)=>{
      this.category = data.result;
      this.gCategory = this.category.gCategory;
      console.log("Edit successfully !!!");
      console.log(this.category);
    }, error=>{
      console.error(error);
    });
  }
  
  updateCategory() {
    if (this.category.id == undefined) {
      alert("Can not update product.");
    } else {
      this.categoryService.updateCategory(this.category).subscribe(product => {
        console.log(product);
        this._router.navigate(['/admin/category/all']);
      }, error => {
        console.error(error);
      }
      );
    }
  }

}
