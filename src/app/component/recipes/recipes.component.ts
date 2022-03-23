import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  detailInfo:Recipe=new Recipe('','','',[new Ingredient('',0)]);

  constructor(private recipeServices:RecipeService) { }

  ngOnInit(): void {
    this.recipeServices.recipeSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.detailInfo=recipe
      }
    );
  }


}
