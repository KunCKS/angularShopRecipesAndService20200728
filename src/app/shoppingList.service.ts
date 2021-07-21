import { Ingredients } from './shared/Ingredient.model';
import { Recipe } from './recipes/recipes.model';
import { Subject } from 'rxjs';
export class shoppingListService {
  addIngDataEvent = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Hydrate', 5),
    new Ingredients('Bananas', 5),
    new Ingredients('Pineapples', 5),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.addIngDataEvent.next(this.ingredients.slice());
  }
  addIngredient(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.addIngDataEvent.next(this.ingredients.slice());
  }
}
