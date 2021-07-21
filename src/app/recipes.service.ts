import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipes.model';
import { Ingredients } from './shared/Ingredient.model';
import { shoppingListService } from './shoppingList.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipesService {
  // selectedRecipe = new Subject<Recipe>();
  constructor(private slService: shoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      'TestRecipe',
      '1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredients('Meat', 1), new Ingredients('Sugar', 10)]
    ),
    new Recipe(
      'BBC Good Food',
      '2',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
      [new Ingredients('French Fries', 30), new Ingredients('Sugar', 11)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice(); //淺拷貝
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addIngredients(ingredients: Ingredients[]) {
    this.slService.addIngredient(ingredients);
  }
}
