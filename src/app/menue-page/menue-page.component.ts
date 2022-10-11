import { Component, Injectable, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Food } from './food';

@Component({
  selector: 'app-menue-page',
  templateUrl: './menue-page.component.html',
  styleUrls: ['./menue-page.component.css']
})
export class MenuePageComponent implements OnInit {
  menueTitle: string;
  imgPath: string;
  foodArr : Food[];

  constructor(
    private cartService: CartService
  ) {
    this.imgPath = "./assets/img/";
    this.menueTitle = "Menue"
    this.foodArr = [
      new Food(0, "Farfalle", 8.5, "Yumma Noodle", this.imgPath + "food01.jpg"),
      new Food(1, "Salmon Spaghetti", 10.5, "Salmon Pasta", this.imgPath + "food02.jpg"),
      new Food(2, "Taco", 10.5, "Beef Taco", this.imgPath +"food03.jpg"),
      new Food(3, "Pizza", 9.5, "Pizza Rucola", this.imgPath + "food04.jpg"),
      new Food(4, "Creme Brulee", 10.5, "Beef Taco", this.imgPath + "food05.jpg"),
    ]
  }

  ngOnInit(): void {
  }

  addToCart(food : Food) {
    this.cartService.addToCart(food);
  }

}
