import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { banner } from './banner';

@Injectable({
    providedIn: 'root'
  })
export class BannerService {
    private baseUrl: string = 'http://localhost:8080/pages/banners';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private _httpClient: HttpClient) { }

    getBanners() {
        return this._httpClient.get<banner>(this.baseUrl + '/show').pipe(
            map(data => data)
        )
      }
    deleteBanner(banner:banner){
        return this._httpClient.delete(this.baseUrl + '/delete/'+banner.id);
    }

}