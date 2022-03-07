import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // book = { name: '123', year: 1993, stars: null };
  itemList = [
    'Nike 1',
    'Nike 2',
    'Adidas 1',
    'Adidas 2',
    'tomato',
    'cabbage',
    'turnip',
    'okra',
    'onion',
    'cherries',
    'plum',
    'mango',
  ];
  constructor() {}

  ngOnInit(): void {}
}
