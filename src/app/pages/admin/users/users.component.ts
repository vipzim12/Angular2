import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user';
import { Observable } from '../../../../../node_modules/rxjs';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private _usersService: UsersService, private _router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this._usersService.getUsers().subscribe((data: any) => {
      if (data.success) {
        this.users = data.result;
        console.log(data.result);
      } else {
        console.log('Cant not get list user from server');
      }
    })
  }
  editUser(user) {
    this._usersService.setter(user);
    console.log(user);
    this._router.navigate(['/admin/user/select/' + user.id]);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  deleteUser(user: any) {
    if (confirm("Are you sure you want to delete " + user.id + "?")) {
      this._usersService.deleteUser(user).subscribe(
        data => {
          user.status = 0;
          return true;
        },
        error => {
          console.error("Error deleting food!");
          return Observable.throw(error);
        }
      );
    }
  }
}
