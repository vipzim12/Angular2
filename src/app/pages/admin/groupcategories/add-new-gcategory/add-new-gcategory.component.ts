import { Component, OnInit } from '@angular/core';
import { Group_Categories } from '../group-categories';
import { Router } from '@angular/router';
import { GroupCategoryService } from '../../../service/group-category/group-category.service';

@Component({
  selector: 'ngx-add-new-gcategory',
  templateUrl: './add-new-gcategory.component.html',
  styleUrls: ['./add-new-gcategory.component.scss']
})
export class AddNewGcategoryComponent implements OnInit {
  gCategory = new Group_Categories();
  constructor(private gCategoryService:GroupCategoryService,private _router:Router) { }

  ngOnInit() {
  }

  addGCategory(){
    this.gCategoryService.insertGCategory(this.gCategory).subscribe(data=>{
      console.log(data);
      this._router.navigate(["/admin/group-category/all"]);
    },error=>{
      console.error(error);
    });
  }

}
