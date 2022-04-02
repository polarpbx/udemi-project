import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe = new Recipe('', '', '', [new Ingredient('', 0)]);
  editMode: boolean = false;

  projectFormGroup: FormGroup = new FormGroup({
    "name": new FormControl(null, [Validators.required, this.forbidenName],<AsyncValidatorFn>this.forbidenNameAsync),
    "email": new FormControl(null, [Validators.required, Validators.email]),
    "status": new FormControl("stable", [Validators.required]),
  });;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);
      this.editMode = params['id'] != null;
    })
  }

  ngOnInit(): void {

  }

  onFormSubmit() {
    console.log(this.projectFormGroup);
  }

  forbidenName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === "Test")
      return { 'nameIsForbidden': true };
    return null;
  }

 forbidenNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, rejects) => {
      setInterval(() => {
        if (control.value === "test")
          resolve({ 'nameIsForbidden': true });
        resolve(null);
      }, 1000);
    });
    return promise;
  }

}
