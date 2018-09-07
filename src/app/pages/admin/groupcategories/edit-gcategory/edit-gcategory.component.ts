import { Component, OnInit } from '@angular/core';
import { Group_Categories } from '../group-categories';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupCategoryService } from '../../../service/group-category/group-category.service';

@Component({
  selector: 'ngx-edit-gcategory',
  templateUrl: './edit-gcategory.component.html',
  styleUrls: ['./edit-gcategory.component.scss']
})
export class EditGcategoryComponent implements OnInit {
  gCategory = new Group_Categories();
  constructor(private route:ActivatedRoute, private gCategoryService: GroupCategoryService, private _router:Router ) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.editGroupCategory(data.id);
    })
  }

  editGroupCategory(id: Number){
    this.gCategoryService.getGCategory(id).subscribe((data: any)=>{
      this.gCategory = data.result;
      console.log("Edit successfully!!!");
    },error=>{
      console.error(error);
    })
  }

  updateGCategory(){
    if(this.gCategory.id == undefined)
    {
      alert("Can not update group category !!!");
    }
    else{
      this.gCategoryService.updateGCategory(this.gCategory).subscribe(data=>{
        console.log(data);
        this._router.navigate(["/admin/group-category/all"]);
      },error=>{
        console.log(error);
      });
    }
  }

}
