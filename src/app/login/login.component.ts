import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  tb:string = '';
  showEr: boolean = false;
  loginSuccess: boolean = false;

  ngOnInit(): void {
    
  }


  constructor(private http: HttpClient, private route: Router) {

  }

  login(f) {
    this.http.post('http://localhost:8080/auth/login',f.value).subscribe((data:any)=>{
    this.loginSuccess = true;  
    if(data.success){
        sessionStorage.setItem('token',data.result.token);
        sessionStorage.setItem('id',data.result.user.id);
        sessionStorage.setItem('username',data.result.user.username);
        sessionStorage.setItem('fullname',data.result.user.fullName);
        sessionStorage.setItem('email',data.result.user.email);
        sessionStorage.setItem('address',data.result.user.address);
        sessionStorage.setItem('phone',data.result.user.phone);
        sessionStorage.setItem('role',data.result.user.role.name);
        this.route.navigate(['/admin']);
      }else{
        this.tb = data.result;
        this.showEr = true;
        this.loginSuccess = false;
      }
    });
  }

}
