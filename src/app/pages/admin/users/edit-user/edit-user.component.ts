import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'ngx-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {

  user: User;
  constructor(private _userService: UsersService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.editUser(params.id));
  }
  editUser(id: number) {
    this._userService.getUserById(id).subscribe((data: any) => {
      this.user = data.result;
    })
  }

  updateUser() {
    this._userService.updateUser(this.user).subscribe((data: any) => {
      console.log(data);
      this._router.navigate(['/admin/user/select']);
    })
  }
}
