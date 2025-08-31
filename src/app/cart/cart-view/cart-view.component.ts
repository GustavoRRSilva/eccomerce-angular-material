import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  products:Product[] = []

  constructor(private cartService:CartService){

  }

  ngOnInit(): void {

   this.cartService.getCart().subscribe(data => this.products = data)

  }

}
