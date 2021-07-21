import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from 'src/app/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss'],
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }
  addIngredients() {
    this.recipesService.addIngredients(this.recipe.ingredients);
  }
  onEditRecipe() {
    // this.router.navigate(['editor'], { relativeTo: this.route });
    this.router.navigate(['../', this.id, 'editor'], {
      relativeTo: this.route,
    });
  }
}
