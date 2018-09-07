import { Component, OnInit } from '@angular/core';
import { Group_Categories } from './group-categories';
import { GroupCategoryService } from '../../service/group-category/group-category.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-groupcategories',
  templateUrl: './groupcategories.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class GroupcategoriesComponent implements OnInit {
  private gCategories: Group_Categories;
  constructor(private gCategoryService: GroupCategoryService, private _router: Router) { }

  ngOnInit() {
    this.getAllGCategory();
  }

  getAllGCategory() {
    this.gCategoryService.getAllGCategories().subscribe((data: any) => {
       this.gCategories = data.result ;
    });
  }

  deleteGCategories(gCategory: Group_Categories) {
    if (confirm("Are you sure you want to delete " + gCategory.name + "?")) {
      this.gCategoryService.deleteGCategory(gCategory).subscribe(
        data => {
          // refresh the list
          window.alert('Deleted successfully!!!');
          this.getAllGCategory();
          return true;
        },
        error => {
          alert("You can not delete. Because it's related table category !!!")
          // console.error("Error deleting food!");
          // return Observable.throw(error);
        }
      );
    }
  }
}

