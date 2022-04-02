import{Subject} from 'rxjs';
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged=new Subject<Ingredient[]>();
    startedEditing=new Subject<number>();


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
      getIngredients(){return this.ingredients.slice();}
      getIngredient(index:number){return this.ingredients[index];}

      updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index].name=newIngredient.name;
        this.ingredients[index].amount=newIngredient.amount;
      }
      
      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}