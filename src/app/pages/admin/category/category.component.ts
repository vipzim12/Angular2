import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../../service/category/category.service';

@Component({
  selector: 'ngx-category',
  templateUrl: './category.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class CategoryComponent implements OnInit {
  private categories : Category;
  constructor(private categoryService: CategoryService,private _router: Router) { }

  ngOnInit() {
    this.getAllGCategory();
  }

  getAllGCategory() {
    this.categoryService.getAllCategory().subscribe((data: any) => {
       this.categories = data.result ;
    });
  }


  deleteCategory(category: Category) {
    if (confirm("Are you sure you want to delete " + category.name + "?")) {
      this.categoryService.deleteCategory(category).subscribe(
        data => {
          console.log(data);
          // refresh the list
          this.getAllGCategory();
          return true;
        },
        error => {
          alert("You can not delete this category. Because there are related products !!!")
        }
      );
    }
  }

}
