import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged=new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",15),
      ];

      addIngredient(item:Ingredient){
        this.ingredients.push(item);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
      addIngredients(items:Ingredient[]){
        this.ingredients.push(...items);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
      getIngredient(){return this.ingredients.slice();}
}