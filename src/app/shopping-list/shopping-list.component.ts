import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredients[] = [
    new Ingredients('Hydrate', 5),
    new Ingredients('Bananas', 5),
    new Ingredients('Pineapples', 5),
  ];
  constructor() {}

  ngOnInit(): void {}
}
