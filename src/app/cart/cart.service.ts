import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Product[] = []
  private backEndUrl:string = environment.apiUrl + "/cart";

  constructor(private http:HttpClient) {
  }

  getCart():Observable<Product[]>{
    return this.http.get<Product[]>(this.backEndUrl)
  }

   addProductInCart(product:Product):Observable<Product[]>{
    return this.http.post<Product[]>(this.backEndUrl,product)
  }

  clearCart():Observable<void>{
    return this.http.delete<void>(this.backEndUrl)
  }

}
