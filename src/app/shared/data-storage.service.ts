import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../component/recipes/recipe.model";
import { RecipeService } from "../component/recipes/recipe.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    private recipesUrl = 'https://ng-recipe-c56a9-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.recipesUrl, recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {

        return this.http.get<Recipe[]>(this.recipesUrl)
            .pipe(
                map(recipes => {
                    return recipes.map(
                        recipes => {
                            return {
                                ...recipes, ingredient: recipes.ingredient ? recipes.ingredient : []
                            }
                        }
                    )
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(<Recipe[]>recipes);
                })
            );

    }
}