import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  detailInfo:Recipe | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }


}
