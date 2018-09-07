import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'ngx-registor-client',
  templateUrl: './registor-client.component.html',
  styleUrls: ['./registor-client.component.scss']
})
export class RegistorClientComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  registorClient(formRegistor) {
    this.http.post('http://localhost:8080/auth/client/registor', formRegistor).subscribe(data => {
      console.log(formRegistor);
      console.log(data);
      this.router.navigate(['/login']);
    })
  }

}
