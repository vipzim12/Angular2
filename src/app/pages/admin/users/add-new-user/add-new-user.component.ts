import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Role } from '../role';

@Component({
  selector: 'ngx-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
 
 
  user =new User(); 
  constructor(private _userService: UsersService, private _router: Router) { }

  ngOnInit() {

  }
  addUser() {
    console.log(this.user);
    this._userService.addUser(this.user).subscribe((data: any) => {
     
       this._router.navigate(['/admin/user/select']);
    });
  }
}
