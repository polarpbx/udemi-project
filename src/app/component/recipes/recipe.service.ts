import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipes/recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService{
  recipesChanges = new Subject<Recipe[]>();

    private recipes: Recipe[]=[];

      constructor(private ShoppingListService:ShoppingListService){}

      getRecipes(){return this.recipes.slice();}

      getRecipe(id:number){return this.recipes[id]};

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.ShoppingListService.addIngredients(ingredients);
      }

      setRecipes(data:Recipe[]){
        this.recipes=data;
        this.recipesChanges.next(this.recipes.slice());
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanges.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanges.next(this.recipes.slice());
      }

      removeIngeredient(indexRecipe:number,indexIngredient:number){
        this.recipes[indexRecipe].ingredient.splice(indexIngredient,1);
        this.recipesChanges.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanges.next(this.recipes.slice());
      }
}