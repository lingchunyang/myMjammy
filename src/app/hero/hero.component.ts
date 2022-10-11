import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string =  "Mjammy";
  heroText: string  =  "Order Food via Tablet";
  heroBtnText: string =  "Go to menue";
  heroBtnUrl: string =  "https://codefactory.wien";

  constructor() { }

  ngOnInit(): void {
  }

}
