import { Injectable } from '@angular/core';
import { CartItem } from './cartItem';
import { Food } from './menue-page/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  constructor() { }

  addToCart(food: Food) {
    let foodExist = false;
    let cartIndex: number|undefined;

    //CHeck if Food already exists
    this.items.forEach((el, index) => {
      if(el.getFood().getId() == food.getId()){
        foodExist = true;
        cartIndex = index;
      }
    })
    
    //Add Cart Item
    if(foodExist && cartIndex !== undefined)  {
      this.items[cartIndex].increaseQtty();
    } else {
      this.items.push(new CartItem(food));
    }    
  }

  getItems() {
    return this.items;
  }

  increase(item: CartItem): CartItem[] {
    this.items[this.items.indexOf(item)].increaseQtty();
    return this.items;
  }

  decrease(item: CartItem): CartItem[] {
    let index = this.items.indexOf(item)
    this.items[index].decreaseQtty();
   /*  if(this.items[index].getQtty() == 0){
      this.items.splice(index, 1);
      console.log(this.items);
    } */
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
