import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private backEndUrl =  environment.apiUrl

  constructor(private httpClient:HttpClient) {
    this.httpClient = httpClient;
   }

   getProducts():Observable<Product[]>{

    return this.httpClient.get<Product[]>(this.backEndUrl + '/products');
   }


}
