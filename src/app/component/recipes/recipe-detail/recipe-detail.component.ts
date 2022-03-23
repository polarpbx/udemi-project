import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {Recipe} from "../recipe.model";
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  dropDownMenuBool:boolean=false;
  @Input() detailInfo:Recipe=new Recipe('','','',[new Ingredient('',0)]);
  constructor(private recipeService:RecipeService) { 
  }

  ngOnInit(): void {
  }
  dropDownMenuBoolConsole(event:boolean){
    console.log(event);
  }
  addIngredients(){
      this.recipeService.addIngredientsToShoppingList(this.detailInfo.ingredient);
  }
}
