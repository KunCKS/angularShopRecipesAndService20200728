import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  Recipes = [];
  // @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(
    private RecipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.Recipes = this.RecipesService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  // recipeWasSelected(item: Recipe) {
  //   this.recipeSelected.emit(item);
  // }
}
