import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {Recipe} from "../../recipe.model";
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe=new Recipe('','','',[new Ingredient('',0)]);

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  selectDetail(detailInfo:Recipe){
    this.recipeService.recipeSelected.emit(detailInfo);
  }
}
