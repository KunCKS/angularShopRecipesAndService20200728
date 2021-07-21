import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipesService } from '../../../recipes.service';
import { Ingredients } from 'src/app/shared/Ingredient.model';
import { Recipe } from '../../recipes.model';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss'],
})
export class RecipesItemComponent implements OnInit {
  @Input('Recipe') RecipeData: Recipe;
  @Input('index') index: string;
  ngOnInit(): void {}
}
