import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'ngx-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  loginClient(form){
    this.http.post('http://localhost:8080/auth/client/login',form).subscribe((data:any)=>{ 
    if(data.success){
        //sessionStorage.setItem('token',data.result.token);
        sessionStorage.setItem('cl-id',data.result.user.id);
        sessionStorage.setItem('cl-username',data.result.user.username);
        sessionStorage.setItem('cl-fullname',data.result.user.fullName);
        sessionStorage.setItem('cl-email',data.result.user.email);
        sessionStorage.setItem('cl-address',data.result.user.address);
        sessionStorage.setItem('cl-phone',data.result.user.phone);
        //sessionStorage.setItem('role',data.result.user.role.name);
        this.route.navigate(['/home']);
      }else{

      }
    });
  }

}
