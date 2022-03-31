import{Subject} from 'rxjs';
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged=new Subject<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient("Apples",5),
        new Ingredient("Tomatoes",15),
      ];

      addIngredient(item:Ingredient){
        this.ingredients.push(item);
        this.ingredientChanged.next(this.ingredients.slice());
      }
      addIngredients(items:Ingredient[]){
        this.ingredients.push(...items);
        this.ingredientChanged.next(this.ingredients.slice());
      }
      getIngredient(){return this.ingredients.slice();}
}