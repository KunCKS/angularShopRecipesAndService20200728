import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  Recipes: Recipes[] = [
    new Recipes(
      'TestRecipe',
      'TESTTESTTESTTEST',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipes(
      'TestRecipe',
      'TESTTESTTESTTEST',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
