import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/Ingredient.model';
import { shoppingListService } from '../shoppingList.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  Ingredients: Ingredients[];
  constructor(private ShoppingListService: shoppingListService) {}
  private ShoppingListServiceSub: Subscription;
  ngOnInit(): void {
    this.Ingredients = this.ShoppingListService.getIngredients();
    this.ShoppingListServiceSub = this.ShoppingListService.addIngDataEvent.subscribe(
      (ingredients: Ingredients[]) => {
        this.Ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.ShoppingListServiceSub.unsubscribe();
  }
  // addIngredients(ingedient: Ingredients) {
  //   this.Ingredients.push(ingedient);
  // }
}
