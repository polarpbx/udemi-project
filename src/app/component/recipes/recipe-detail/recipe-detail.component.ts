import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  id:number=-1;
  recipe:Recipe=new Recipe('','','',[new Ingredient('',0)]);


  constructor(private recipeService:RecipeService,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (parames: Params)=>{
        this.id=+parames['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    )
  }
  dropDownMenuBoolConsole(event:boolean){
    console.log(event);
  }
  addIngredients(){
      this.recipeService.addIngredientsToShoppingList(this.detailInfo.ingredient);
  }
}
