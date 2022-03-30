import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe=new Recipe('','','',[new Ingredient('',0)]);
  editMode:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private recipeService:RecipeService
  ) { 
    this.route.params.subscribe((params:Params)=>{
      this.recipe=this.recipeService.getRecipe(+params['id']);
      this.editMode=params['id']!=null;
    })
  }

  ngOnInit(): void {
  }

}
