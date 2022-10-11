import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
    ) { }
    
    
  ngOnInit(): void {
  }

  increase(item: CartItem) {
    this.items = this.cartService.increase(item);
  }

  decrease(item: CartItem) {
    this.items = this.cartService.decrease(item);
  }

  
}


