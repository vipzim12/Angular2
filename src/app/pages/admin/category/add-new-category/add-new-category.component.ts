import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router';
import { CategoryService } from '../../../service/category/category.service';
import { Group_Categories } from '../../groupcategories/group-categories';

@Component({
  selector: 'ngx-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent implements OnInit {
  private category = new Category();
  private gCategories: Group_Categories;
  constructor(private categoryService:CategoryService, private _router: Router) { }

  ngOnInit() {
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
  
  insertCategory(form) {
    console.log(form);
    this.category.name = form.nameCategory;
    this.category.gCategory = form.gCategory;
    
    this.categoryService.insertCategory(this.category).subscribe(data => {
      console.log(this.category,data);
      this._router.navigate(['/admin/category/all']);
    }, error => {
      console.error(error);
    }
    );
  }

}