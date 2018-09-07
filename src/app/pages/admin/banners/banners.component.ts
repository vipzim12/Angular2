import { Component, OnInit } from '@angular/core';
import { BannerService } from './banner.service';
import { banner } from './banner';

@Component({
  selector: 'ngx-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['../orders/orders.component.scss']
})
export class BannersComponent implements OnInit {
  banners : Array<banner> =[];
  constructor(private _bannerService : BannerService) { }

  ngOnInit() {
    this.getAllBanners();
  }
  getAllBanners(){
    this._bannerService.getBanners().subscribe((data: any) =>{
      this.banners = data.result;
      
    })
  }
}
