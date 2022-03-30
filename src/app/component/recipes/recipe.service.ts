import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipes/recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();

    private recipes: Recipe[]=[
        new Recipe(
          'Tasty Schnitzel',
           'A super-tasty Schnitzel - just awesome',
        'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
        [
          new Ingredient('meat',1),
          new Ingredient('French Fries',20)
        ]
        ),
        new Recipe(
          'Big Fat Burger',
           'What else you need to say?',
        'https://www.coopercheese.com/wp-content/uploads/2022/02/Double-Cheese-Burger.jpg',
        [
          new Ingredient('meat',1),
          new Ingredient('French Fries',20)
        ]
        ),
        new Recipe(
          'Pancakes',
           'Super Calory with Extra Protein!',
        'https://www.mashed.com/img/gallery/basic-homemade-pancake-recipe/l-intro-1623681422.jpg',
        [
          new Ingredient('meat',1),
          new Ingredient('French Fries',20)
        ]
        ),
        new Recipe(
          'A Test Recipe',
           'This is simple a test',
        'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
        [
          new Ingredient('meat',1),
          new Ingredient('French Fries',20)
        ]
        ),
        new Recipe(
          'A Test Recipe',
           'This is simple a test',
        'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
        [
          new Ingredient('meat',1),
          new Ingredient('French Fries',20)
        ]
        ),
        new Recipe(
          'A Test Recipe',
           'This is simple a test',
        'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
        [
          new Ingredient('meat',1),
          new Ingredient('French Fries',20)
        ]
        )
      ];

      constructor(private ShoppingListService:ShoppingListService){}

      getRecipes(){return this.recipes.slice();}

      getRecipe(id:number){return this.recipes[id]};

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.ShoppingListService.addIngredients(ingredients);
      }
}