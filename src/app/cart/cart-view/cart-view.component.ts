import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  products:Product[] = []
  totalPrice:Number = 0
  apiUrl = environment.apiUrl + "/checkout"
  constructor(private cartService:CartService,private http:HttpClient){

  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => {
      this.products = data
      this.totalPrice = this.getTotalPrice()
    })

  }
  getTotalPrice():number{
    let total = 0;

    for(let item of this.products){
      total += item.price
    }

    return total
  }

  checkout(){
    this.http.post<void>(this.apiUrl,this.products).subscribe()
  }

  clearCart() {
     this.cartService.clearCart().subscribe(()=>{
      this.products = []
     })
  }



}
